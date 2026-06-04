"""
Conversor de PDFs ICFES a JSON para PrepICFES
==============================================
Extrae preguntas de cuadernillos PDF usando IA (OpenAI)
y las convierte al formato JSON que la app web entiende.

Uso:
  1. Instalar dependencias: pip install -r requirements.txt
  2. Exportar tu API key:  set OPENAI_API_KEY=sk-tu-llave (Windows)
  3. Colocar PDFs en:      ./cuadernillos_input/
  4. Ejecutar:             python pdf_to_json.py
  5. Los JSON saldrán en:  ./cuadernillos_output/
  6. Importarlos desde la app web con el botón "Importar preguntas"
"""

import os
import json
import re

try:
    import pdfplumber
except ImportError:
    pdfplumber = None
    print("⚠️  pdfplumber no instalado. Ejecuta: pip install pdfplumber")

try:
    from openai import OpenAI
except ImportError:
    OpenAI = None
    print("⚠️  openai no instalado. Ejecuta: pip install openai")

try:
    from pydantic import BaseModel, Field
    from typing import List, Optional
except ImportError:
    BaseModel = None
    print("⚠️  pydantic no instalado. Ejecuta: pip install pydantic")


# ─── CONFIGURACIÓN ─────────────────────────────────────────────
CARPETA_PDFS = "./cuadernillos_input"
CARPETA_JSON = "./cuadernillos_output"
MODELO_IA = "gpt-4o-mini"

# Mapeo de nombres de materia a IDs y nombres de área del app
AREAS_ICFES = {
    "lectura":       {"id": "lectura",    "name": "Lectura Crítica"},
    "lectura crítica": {"id": "lectura",  "name": "Lectura Crítica"},
    "matematicas":   {"id": "matematicas","name": "Matemáticas"},
    "matemáticas":   {"id": "matematicas","name": "Matemáticas"},
    "sociales":      {"id": "sociales",   "name": "Sociales y Ciudadanía"},
    "sociales y ciudadanía": {"id": "sociales", "name": "Sociales y Ciudadanía"},
    "ciencias":      {"id": "ciencias",   "name": "Ciencias Naturales"},
    "ciencias naturales": {"id": "ciencias", "name": "Ciencias Naturales"},
    "ingles":        {"id": "ingles",     "name": "Inglés"},
    "inglés":        {"id": "ingles",     "name": "Inglés"},
}


# ─── MODELOS DE SALIDA (Pydantic) ─────────────────────────────
class ExplicacionPregunta(BaseModel):
    correct: str = Field(description="Explicación detallada de por qué la respuesta correcta lo es")
    wrongs: List[str] = Field(description="Lista de 3 explicaciones, una por cada opción incorrecta (A, B, C, D), en el mismo orden que options")

class PreguntaFormateada(BaseModel):
    id: str = Field(description="Identificador único, ej: 'LC01', 'MT05', 'SC12'")
    area: str = Field(description="Área: lectura, matematicas, sociales, ciencias, o ingles")
    areaName: str = Field(description="Nombre del área completo")
    difficulty: str = Field(description="Dificultad: facil, media, o dificil")
    context: Optional[str] = Field(None, description="Texto de contexto, pasaje o enunciado largo previo a la pregunta (opcional)")
    question: str = Field(description="La pregunta específica")
    options: List[str] = Field(description="Lista de 4 opciones de respuesta [A, B, C, D]")
    correct: int = Field(description="Índice de la respuesta correcta (0=A, 1=B, 2=C, 3=D)")
    explanation: Optional[ExplicacionPregunta] = Field(None, description="Explicación de la respuesta (opcional)")

class ListaPreguntasOutput(BaseModel):
    preguntas: List[PreguntaFormateada]


# ─── FUNCIONES ─────────────────────────────────────────────────
def extraer_texto_pdf(ruta_pdf):
    """Extrae texto plano de un PDF."""
    if pdfplumber is None:
        raise ImportError("pdfplumber no instalado")
    texto = ""
    with pdfplumber.open(ruta_pdf) as pdf:
        for i, pagina in enumerate(pdf.pages):
            texto += f"\n--- PÁGINA {i+1} ---\n"
            texto += pagina.extract_text() or ""
    return texto


def detectar_area_desde_nombre(archivo):
    """Detecta el área ICFES desde el nombre del archivo."""
    nombre = archivo.lower()
    for clave, info in AREAS_ICFES.items():
        if clave in nombre:
            return info["id"], info["name"]
    return "lectura", "Lectura Crítica"


def estructurar_con_ia(texto_bruto, area_id, area_name):
    """Envía el texto a OpenAI y devuelve preguntas estructuradas."""
    if OpenAI is None:
        raise ImportError("openai no instalado")
    if BaseModel is None:
        raise ImportError("pydantic no instalado")

    client = OpenAI()

    prompt_sistema = (
        "Eres un extractor de preguntas de examen ICFES Saber 11. "
        "Tu tarea es leer el texto del cuadernillo e identificar cada pregunta. "
        "Para cada pregunta, extrae: contexto (si hay texto previo), el enunciado, "
        "las 4 opciones (A, B, C, D), cuál es la respuesta correcta según las claves "
        "que aparezcan al final del documento, y genera una explicación breve de "
        "por qué es correcta y por qué las otras son incorrectas.\n\n"
        "IMPORTANTE: El campo 'area' debe ser 'lectura', 'matematicas', 'sociales', "
        "'ciencias' o 'ingles'. El campo 'difficulty' debe ser 'facil', 'media' o 'dificil'."
    )

    completion = client.beta.chat.completions.parse(
        model=MODELO_IA,
        messages=[
            {"role": "system", "content": prompt_sistema},
            {"role": "user", "content": (
                f"Área detectada: {area_name} (id: {area_id}).\n\n"
                f"Texto del cuadernillo:\n\n{texto_bruto[:100000]}"
            )}
        ],
        response_format=ListaPreguntasOutput,
    )

    return completion.choices[0].message.parsed.dict()


def asignar_ids(preguntas, prefijo):
    """Asigna IDs secuenciales a las preguntas."""
    for i, p in enumerate(preguntas):
        p["id"] = f"{prefijo}{i+1:02d}"
    return preguntas


def procesar_pdf(ruta_pdf, area_id, area_name):
    """Procesa un PDF completo: extrae texto y estructura con IA."""
    print(f"  📖 Extrayendo texto...")
    texto = extraer_texto_pdf(ruta_pdf)
    print(f"     {len(texto)} caracteres extraídos")

    print(f"  🤖 Enviando a IA ({MODELO_IA})...")
    resultado = estructurar_con_ia(texto, area_id, area_name)

    preguntas = resultado.get("preguntas", [])
    prefijo = area_id[:2].upper()
    preguntas = asignar_ids(preguntas, prefijo)

    # Asegurar area/areaName
    for p in preguntas:
        p["area"] = area_id
        p["areaName"] = area_name

    print(f"  ✅ {len(preguntas)} preguntas extraídas")
    return preguntas


def procesar_carpeta():
    """Escanea la carpeta de entrada y procesa todos los PDFs."""
    if not os.path.exists(CARPETA_PDFS):
        os.makedirs(CARPETA_PDFS)
        print(f"\n📁 Carpeta creada: {CARPETA_PDFS}")
        print(f"   Coloca tus PDFs allí y vuelve a ejecutar este script.\n")
        return

    if not os.path.exists(CARPETA_JSON):
        os.makedirs(CARPETA_JSON)

    archivos = [f for f in os.listdir(CARPETA_PDFS) if f.lower().endswith('.pdf')]

    if not archivos:
        print(f"\n📁 No hay PDFs en '{CARPETA_PDFS}'")
        print(f"   Coloca tus cuadernillos allí y vuelve a ejecutar.\n")
        return

    todas_preguntas = []
    print(f"\n📚 Procesando {len(archivos)} cuadernillo(s)...\n")

    for archivo in archivos:
        ruta = os.path.join(CARPETA_PDFS, archivo)
        area_id, area_name = detectar_area_desde_nombre(archivo)
        print(f"📄 {archivo}")
        print(f"   Área detectada: {area_name}")

        try:
            preguntas = procesar_pdf(ruta, area_id, area_name)
            todas_preguntas.extend(preguntas)
        except Exception as e:
            print(f"   ❌ Error: {e}")
            continue

    # Guardar todo en un solo JSON
    if todas_preguntas:
        ruta_salida = os.path.join(CARPETA_JSON, "preguntas_icfes.json")
        with open(ruta_salida, 'w', encoding='utf-8') as f:
            json.dump(todas_preguntas, f, ensure_ascii=False, indent=2)
        print(f"\n🎉 {len(todas_preguntas)} preguntas guardadas en:")
        print(f"   {ruta_salida}")
        print(f"\n📲 Abre la app web y usa 'Importar preguntas' para cargar este archivo.\n")
    else:
        print("\n❌ No se extrajo ninguna pregunta.\n")


# ─── MAIN ──────────────────────────────────────────────────────
if __name__ == "__main__":
    print("=" * 55)
    print("  🎯 Conversor PDF ICFES → JSON para PrepICFES")
    print("=" * 55)
    procesar_carpeta()
