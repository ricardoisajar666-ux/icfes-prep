# 🎯 PDF → JSON Converter for PrepICFES

Convierte cuadernillos ICFES en PDF al formato JSON que entiende la app web.

## Requisitos

- Python 3.8+
- Una API key de OpenAI (https://platform.openai.com/api-keys)

## Instalación

```bash
cd pdf-tool
pip install -r requirements.txt
```

## Uso

1. Coloca tus archivos PDF en la carpeta `cuadernillos_input/`
2. Configura tu API key:

   **Windows (PowerShell):**
   ```powershell
   $env:OPENAI_API_KEY = "sk-tu-llave-aqui"
   ```

   **Windows (CMD):**
   ```cmd
   set OPENAI_API_KEY=sk-tu-llave-aqui
   ```

3. Ejecuta el script:

   ```bash
   python pdf_to_json.py
   ```

4. El resultado se guarda en `cuadernillos_output/preguntas_icfes.json`
5. Abre la app web, ve a Inicio → **Importar preguntas** y selecciona el JSON

## Estructura de carpetas

```
pdf-tool/
├── pdf_to_json.py       # Script principal
├── requirements.txt     # Dependencias
├── README.md
├── cuadernillos_input/  # 👈 Pon tus PDFs aquí
└── cuadernillos_output/ # 👈 Los JSON salen aquí
```

## Notas

- El script usa GPT-4o-mini (económico, ~$0.15 por cuadernillo)
- Detecta automáticamente el área por el nombre del archivo
- Si el PDF tiene clave de respuestas, la IA las interpreta
- Si no hay explicaciones, la app web usa un texto genérico
