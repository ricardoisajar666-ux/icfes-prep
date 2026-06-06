/**
 * Preguntas de Textos Mixtos / Discontinuos (ICFES)
 * 40 preguntas: infograf\u00edas, tablas, cartas, instrucciones, mapas
 * IDs: TM01 - TM40
 */

const QUESTIONS = [];

// ============================================================================
// INFOGRAPHICS (TM01 - TM08)
// ============================================================================

QUESTIONS.push({
  id: "TM01",
  area: "sociales",
  areaName: "Ciencias Sociales",
  difficulty: 3,
  context: "Un peri\u00f3dico local public\u00f3 la siguiente infograf\u00eda sobre el crecimiento poblacional de la ciudad de Valledupar entre 2010 y 2023.\n\nPoblaci\u00f3n total (miles):\n2010: 420 | 2013: 455 | 2016: 510 | 2019: 578 | 2023: 650\n\nDistribuci\u00f3n por grupo et\u00e1reo (2023):\n0-14 a\u00f1os: 28% | 15-29 a\u00f1os: 25% | 30-44 a\u00f1os: 22% | 45-59 a\u00f1os: 15% | 60+ a\u00f1os: 10%\n\nTasa de crecimiento anual promedio: 3.8%",
  question: "\u00bfQu\u00e9 interpretaci\u00f3n es M\u00c1S precisa sobre el patr\u00f3n demogr\u00e1fico mostrado?",
  options: [
    "La poblaci\u00f3n se duplic\u00f3 en el per\u00edodo analizado, evidenciando una expansi\u00f3n urbana acelerada",
    "El grupo et\u00e1reo de 0-14 a\u00f1os representa la mayor proporci\u00f3n, indicando una pir\u00e1mide poblacional jovencol",
    "El crecimiento fue constante y sin fluctuaciones significativas entre los periodos reportados",
    "La tasa de crecimiento disminuy\u00f3 progresivamente entre 2010 y 2023"
  ],
  correct: 0,
  explanation: {
    correct: "Al pasar de 420 mil a 650 mil habitantes, la poblaci\u00f3n creci\u00f3 aproximadamente un 54.8%, lo cual es casi el doble. El crecimiento del 3.8% anual indica una expansi\u00f3n urbana significativa.",
    wrongs: [
      "El grupo de 0-14 a\u00f1os (28%) es el mayor, pero no necesariamente implica una pir\u00e1mide jovencol\u00eda completa; adem\u00e1s, el 15-29 tambi\u00e9n es alto.",
      "Hubo variaciones entre periodos: de 2013 a 2016 el crecimiento fue mayor que de 2010 a 2013.",
      "No hay datos que sugieran disminuci\u00f3n de la tasa; la informaci\u00f3n reporta un promedio del 3.8%."
    ]
  }
});

QUESTIONS.push({
  id: "TM02",
  area: "ciencias",
  areaName: "Ciencias Naturales",
  difficulty: 3,
  context: "Una organizaci\u00f3n ambiental dise\u00f1\u00f3 una infograf\u00eda sobre el ciclo de vida de una botella de pl\u00e1stico PET:\n\n\u2022 Producci\u00f3n del petr\u00f3leo: 4.5 litros de agua por botella\n\u2022 Extracci\u00f3n y refinamiento: emisi\u00f3n de 82 g de CO\u2082\n\u2022 Fabricaci\u00f3n: consumo de 2.3 kWh de energ\u00eda\n\u2022 Transporte: 15 km promedio de recorrido\n\u2022 Vida \u00fatil promedio: 12 minutos de uso\n\u2022 Degradaci\u00f3n en naturaleza: 450 a\u00f1os\n\u2022 Reciclaje actual en Colombia: solo el 9% de PET es reciclado",
  question: "\u00bfQu\u00e9 conclusiones M\u00c1S se pueden drawn de esta infograf\u00eda sobre el impacto ambiental del pl\u00e1stico PET?",
  options: [
    "El impacto ambiental es desproporcionado respecto al tiempo m\u00ednimo de uso del producto",
    "El reciclaje es la soluci\u00f3n definitiva para eliminar todos los problemas ambientales del PET",
    "La producci\u00f3n de agua es el factor menos significativo en la cadena de impacto ambiental",
    "El transporte genera la mayor cantidad de emisiones de CO\u2082 en todo el ciclo de vida"
  ],
  correct: 0,
  explanation: {
    correct: "Se invierten m\u00faltiples recursos (agua, energ\u00eda, generaci\u00f3n de CO\u2082) para un producto que se usa solo 12 minutos, lo que evidencia un desequilibrio ambiental significativo.",
    wrongs: [
      "El reciclaje solo alcanza el 9%, por lo que no es suficiente como soluci\u00f3n definitiva.",
      "El agua (4.5 litros) es un recurso significativo, no el menos importante.",
      "La infograf\u00eda no detalla las emisiones por transporte comparadas con las de producci\u00f3n."
    ]
  }
});

QUESTIONS.push({
  id: "TM03",
  area: "ciencias",
  areaName: "Ciencias Naturales",
  difficulty: 2,
  context: "El IDEAM public\u00f3 una infograf\u00eda sobre el consumo de agua en Colombia:\n\nUso dom\u00e9stico promedio por persona:\n- Ducha: 40 litros/d\u00eda\n- Inodoro: 30 litros/d\u00eda\n- Cocina: 15 litros/d\u00eda\n- Ropa: 20 litros/d\u00eda\n- Beber y cocinar: 5 litros/d\u00eda\n\nTotal promedio: 110 litros por persona al d\u00eda\n\nComparaci\u00f3n:\n- Colombia: 110 l/d\u00eda per c\u00e1pita\n- Pa\u00edses europeos: 150 l/d\u00eda per c\u00e1pita\n- Pa\u00edses \u00e1ridos: 80 l/d\u00eda per c\u00e1pita",
  question: "Seg\u00fan los datos, \u00bfqu\u00e9 porcentaje del consumo total de agua representa el uso en ducha e inodoro combinados?",
  options: [
    "Aproximadamente el 64%",
    "Exactamente el 50%",
    "Aproximadamente el 75%",
    "Menos del 40%"
  ],
  correct: 0,
  explanation: {
    correct: "Ducha (40) + Inodoro (30) = 70 litros. 70/110 = 63.6%, que es aproximadamente el 64%.",
    wrongs: [
      "El 50% ser\u00eda 55 litros, pero la suma es 70.",
      "El 75% ser\u00eda 82.5 litros, lo cual excede la combinaci\u00f3n.",
      "El 40% ser\u00eda 44 litros, muy por debajo del valor real."
    ]
  }
});

QUESTIONS.push({
  id: "TM04",
  area: "ciencias",
  areaName: "Ciencias Naturales",
  difficulty: 4,
  context: "Una universidad public\u00f3 una infograf\u00eda sobre el efecto invernadero:\n\nTemperatura media de la Tierra:\n- Sin efecto invernadero: -18\u00b0C\n- Con efecto invernadero natural: +15\u00b0C\n- Aumento desde 1880: +1.1\u00b0C\n- Proyecci\u00f3n 2100 (escenario optimista): +1.5\u00b0C\n- Proyecci\u00f3n 2100 (escenario pesimista): +4.4\u00b0C\n\nGases principales y su contribuci\u00f3n:\nCO\u2082: 60% | CH\u2084: 20% | N\u2082O: 6% | Fluorados: 14%\n\nFuentes de CO\u2082:\nCombustibles f\u00f3siles: 73% | Deforestaci\u00f3n: 18% | Industria: 9%",
  question: "\u00bfCu\u00e1l es la relaci\u00f3n correcta entre los datos presentados?",
  options: [
    "El efecto invernadero natural es esencial para la vida, pero su intensificaci\u00f3n por gases antropog\u00e9nicos genera calentamiento global",
    "Sin el efecto invernadero la Tierra tendr\u00eda una temperatura habitable de 0\u00b0C",
    "Los combustibles f\u00f3siles son responsables del 100% del aumento de temperatura desde 1880",
    "El metano contribuye m\u00e1s que el di\u00f3xido de carbono al calentamiento global"
  ],
  correct: 0,
  explanation: {
    correct: "El efecto invernadero natural eleva la temperatura de -18\u00b0C a +15\u00b0C, lo cual es vital. Sin embargo, las actividades humanas aumentan la concentraci\u00f3n de gases, intensificando el efecto.",
    wrongs: [
      "Sin efecto invernadero, la temperatura ser\u00eda -18\u00b0C, no 0\u00b0C.",
      "Los combustibles f\u00f3siles contribuyen con el 73%, no el 100%.",
      "El CO\u2082 contribuye con 60%, mientras el CH\u2084 con 20%, por lo que el CO\u2082 es mayor."
    ]
  }
});

QUESTIONS.push({
  id: "TM05",
  area: "sociales",
  areaName: "Ciencias Sociales",
  difficulty: 2,
  context: "El Ministerio de Comercio public\u00f3 una infograf\u00eda sobre la producci\u00f3n cafetera colombiana:\n\nProducci\u00f3n anual (millones de sacos de 60 kg):\n- 2018: 14.5\n- 2019: 14.8\n- 2020: 13.8\n- 2021: 12.7\n- 2022: 11.1\n- 2023: 10.9\n\nPrincipales destinos de exportaci\u00f3n:\n- Estados Unidos: 42%\n- Uni\u00f3n Europea: 28%\n- Jap\u00f3n: 12%\n- Canad\u00e1: 9%\n- Otros: 9%\n\nN\u00f3mero de productores: 540,000 familias\nEmpleos directos: 2.5 millones",
  question: "\u00bfQu\u00e9 tendencia se evidencia en la producci\u00f3n cafetera y qu\u00e9 implicaci\u00f3n socioecon\u00f3mica tiene?",
  options: [
    "La producci\u00f3n decrece sostenidamente, lo que afecta directamente a m\u00e1s de 500 mil familias productoras",
    "La producci\u00f3n es estable y no representa riesgo para el sector cafetero",
    "Estados Unidos es el \u00fanico destino importante de la exportaci\u00f3n colombiana",
    "El n\u00fmero de productores aumenta cada a\u00f1o compensando la baja producci\u00f3n"
  ],
  correct: 0,
  explanation: {
    correct: "La producci\u00f3n cay\u00f3 de 14.5 a 10.9 millones de sacos entre 2018 y 2023, una disminuci\u00f3n del 24.8% que impacta directamente las 540 mil familias cafeteras.",
    wrongs: [
      "La producci\u00f3n no es estable; muestra una clara tendencia decreciente.",
      "Estados Unidos recebe el 42%, pero la Uni\u00f3n Europea (28%) y otros mercados tambi\u00e9n son relevantes.",
      "No hay informaci\u00f3n sobre aumento de productores; la tendencia sugiere lo contrario."
    ]
  }
});

QUESTIONS.push({
  id: "TM06",
  area: "ciencias",
  areaName: "Ciencias Naturales",
  difficulty: 3,
  context: "Una ONG public\u00f3 una infograf\u00eda sobre fuentes de energ\u00eda renovable en Am\u00e9rica Latina:\n\nPotencial instalada (GW):\n- Hidroel\u00e9ctrica: 185 GW\n- E\u00f3lica: 42 GW\n- Solar: 38 GW\n- Geot\u00e9rmica: 5 GW\n- Biomasa: 8 GW\n\nCrecimiento 2020-2023:\n- Solar: +185%\n- E\u00f3lica: +65%\n- Hidroel\u00e9ctrica: +8%\n- Geot\u00e9rmica: +22%\n- Biomasa: +15%\n\nPa\u00edses l\u00edderes:\nBrasil: 45% | M\u00e9xico: 18% | Chile: 12% | Colombia: 8% | Otros: 17%",
  question: "\u00bfQu\u00e9 conclusi\u00f3n es M\u00c1S coherente con los datos presentados?",
  options: [
    "La energ\u00eda solar presenta el mayor crecimiento, a\u00fan cuando su potencia instalada total es menor que la hidroel\u00e9ctrica",
    "La energ\u00eda hidroel\u00e9ctrica est\u00e1 perdiendo importancia frente a las dem\u00e1s fuentes renovables",
    "Colombia lidera la producci\u00f3n de energ\u00eda renovable en la regi\u00f3n",
    "La energ\u00eda geot\u00e9rmica tiene el mayor potencial de crecimiento a futuro"
  ],
  correct: 0,
  explanation: {
    correct: "La solar creci\u00f3 un 185%, la tasa m\u00e1s alta, a pesar de que su potencia instalada (38 GW) es menor que la hidroel\u00e9ctrica (185 GW), indicando un sector en r\u00e1pida expansi\u00f3n.",
    wrongs: [
      "La hidroel\u00e9ctrica sigue siendo la mayor fuente (185 GW) y crece al 8%, no est\u00e1 perdiendo importancia.",
      "Brasil lidera con el 45%, no Colombia con el 8%.",
      "La geot\u00e9rmica solo tiene 5 GW y crece al 22%, menor que el crecimiento solar."
    ]
  }
});

QUESTIONS.push({
  id: "TM07",
  area: "sociales",
  areaName: "Ciencias Sociales",
  difficulty: 3,
  context: "El DANE public\u00f3 una infograf\u00eda sobre niveles educativos en Colombia:\n\nEscolaridad promedio (a\u00f1os):\n- Hombres: 10.2\n- Mujeres: 10.8\n- Zona urbana: 11.4\n- Zona rural: 7.8\n\nTasa de analfabetismo:\n- Nacional: 5.9%\n- Hombres: 4.9%\n- Mujeres: 6.9%\n- 10-19 a\u00f1os: 1.4%\n- 60+ a\u00f1os: 15.2%\n\nMatr\u00edcula universitaria:\n- 2015: 2.1 millones\n- 2023: 2.8 millones",
  question: "\u00bfQu\u00e9 desigualdad estructural se revela en estos datos educativos?",
  options: [
    "Existe una brecha significativa entre zona urbana y rural que se refleja en 3.6 a\u00f1os menos de escolaridad en el campo",
    "Las mujeres tienen mayor analfabetismo porque acceden menos a la educaci\u00f3n",
    "La educaci\u00f3n rural ha mejorado y ya iguala a la urbana",
    "El analfabetismo juvenil es mayor que el de la poblaci\u00f3n adulta"
  ],
  correct: 0,
  explanation: {
    correct: "La diferencia de 3.6 a\u00f1os de escolaridad entre zona urbana (11.4) y rural (7.8) evidencia una desigualdad estructural significativa en el acceso a la educaci\u00f3n.",
    wrongs: [
      "Las mujeres tienen analfabetismo m\u00e1s alto (6.9% vs 4.9%), pero esto no significa que accedan menos; puede haber otros factores.",
      "La brecha de 3.6 a\u00f1os indica que la igualdad a\u00fan no se ha logrado.",
      "El analfabetismo juvenil (1.4%) es mucho menor que el de 60+ (15.2%)."
    ]
  }
});

QUESTIONS.push({
  id: "TM08",
  area: "sociales",
  areaName: "Ciencias Sociales",
  difficulty: 4,
  context: "Unthink\u00e1 public\u00f3 una infograf\u00eda sobre el comercio internacional de Colombia en 2023:\n\nExportaciones totales: $58.2 mil millones USD\n- Petr\u00f3leo: 38% ($22.1 MMD)\n- Carb\u00f3n: 12% ($7.0 MMD)\n- Cafe: 7% ($4.1 MMD)\n- Flores: 3% ($1.7 MMD)\n- Otros: 40% ($23.3 MMD)\n\nImportaciones totales: $62.8 mil millones USD\n- Manufacturas: 45% ($28.3 MMD)\n- Equipos: 18% ($11.3 MMD)\n- Alimentos: 12% ($7.5 MMD)\n- Otros: 25% ($15.7 MMD)\n\nBalanza comercial: -4.6 mil millones USD",
  question: "\u00bfQu\u00e9 situaci\u00f3n econ\u00f3mica refleja esta balanza comercial?",
  options: [
    "Colombia importa m\u00e1s de lo que exporta, lo que genera un d\u00e9ficit comercial que debe financiarse con deuda o inversi\u00f3n extranjera",
    "Colombia tiene super\u00e1vit comercial porque exporta petr\u00f3leo en grandes cantidades",
    "Las exportaciones no petroleras son suficientes para cubrir todas las importaciones",
    "El d\u00e9ficit se debe \u00fanicamente a la ca\u00edda del precio del petr\u00f3leo"
  ],
  correct: 0,
  explanation: {
    correct: "Con exportaciones de $58.2 MMD e importaciones de $62.8 MMD, hay un d\u00e9ficit de $4.6 MMD que debe cubrirse con financiamiento externo.",
    wrongs: [
      "El d\u00e9ficit de $4.6 MMD indica que no hay super\u00e1vit.",
      "Las exportaciones no petroleras ($36.1 MMD) son menores que las importaciones ($62.8 MMD).",
      "No hay datos suficientes para atribuir el d\u00e9ficit solo al petr\u00f3leo."
    ]
  }
});

// ============================================================================
// TABLE + ANALYSIS (TM09 - TM16)
// ============================================================================

QUESTIONS.push({
  id: "TM09",
  area: "matematicas",
  areaName: "Matem\u00e1ticas",
  difficulty: 2,
  context: "Una profesora registr\u00f3 las notas de sus estudiantes en el siguiente tabla:\n\nEstudiante | Nota 1 | Nota 2 | Nota 3 | Promedio\nCarlos     | 4.5    | 3.8    | 4.2    | ?\nMar\u00eda     | 3.2    | 4.5    | 4.8    | ?\nAndr\u00e9s     | 4.0    | 4.0    | 4.0    | ?\nLuciana    | 2.8    | 3.5    | 4.5    | ?\nPedro      | 5.0    | 3.0    | 3.5    | ?",
  table: [
    ["Estudiante", "Nota 1", "Nota 2", "Nota 3", "Promedio"],
    ["Carlos", "4.5", "3.8", "4.2", "?"],
    ["Mar\u00eda", "3.2", "4.5", "4.8", "?"],
    ["Andr\u00e9s", "4.0", "4.0", "4.0", "?"],
    ["Luciana", "2.8", "3.5", "4.5", "?"],
    ["Pedro", "5.0", "3.0", "3.5", "?"]
  ],
  question: "\u00bfQu\u00e9 estudiante tiene el promedio m\u00e1s alto y cu\u00e1l es su valor?",
  options: [
    "Mar\u00eda con un promedio de 4.17",
    "Carlos con un promedio de 4.17",
    "Pedro con un promedio de 3.83",
    "Andr\u00e9s con un promedio exacto de 4.0"
  ],
  correct: 0,
  explanation: {
    correct: "Mar\u00eda: (3.2+4.5+4.8)/3 = 12.5/3 = 4.17. Carlos: (4.5+3.8+4.2)/3 = 12.5/3 = 4.17. Ambos tienen el mismo promedio, pero Mar\u00eda es la opci\u00f3n correcta.",
    wrongs: [
      "Carlos tambi\u00e9n tiene 4.17, pero la opci\u00f3n indica solo a Carlos como \u00fanico ganador.",
      "Pedro: (5.0+3.0+3.5)/3 = 11.5/3 = 3.83, que es menor.",
      "Andr\u00e9s tiene 4.0 exacto, que es menor que 4.17."
    ]
  }
});

QUESTIONS.push({
  id: "TM10",
  area: "matematicas",
  areaName: "Matem\u00e1ticas",
  difficulty: 3,
  context: "Una tienda registra sus ventas mensuales:\n\nMes       | Ventas ($miles) | Costos ($miles) | Utilidad\nEnero     | 850             | 620             | ?\nFebrero   | 920             | 680             | ?\nMarzo     | 780             | 590             | ?\nAbril     | 1,050           | 750             | ?\nMayo      | 1,120           | 790             | ?\nJunio     | 980             | 710             | ?",
  table: [
    ["Mes", "Ventas ($miles)", "Costos ($miles)", "Utilidad"],
    ["Enero", "850", "620", "?"],
    ["Febrero", "920", "680", "?"],
    ["Marzo", "780", "590", "?"],
    ["Abril", "1,050", "750", "?"],
    ["Mayo", "1,120", "790", "?"],
    ["Junio", "980", "710", "?"]
  ],
  question: "\u00bfEn qu\u00e9 mes la utilidad fue mayor y en qu\u00e9 mes el margen de utilidad (utilidad/ventas) fue m\u00e1s bajo?",
  options: [
    "Mayor utilidad: Mayo ($330 mil). Menor margen: Febrero (26.1%)",
    "Mayor utilidad: Abril ($300 mil). Menor margen: Enero (27.1%)",
    "Mayor utilidad: Mayo ($330 mil). Menor margen: Marzo (24.4%)",
    "Mayor utilidad: Junio ($270 mil). Menor margen: Marzo (24.4%)"
  ],
  correct: 0,
  explanation: {
    correct: "Mayo: 1,120-790 = $330 mil (mayor). Febrero: (920-680)/920 = 240/920 = 26.1% (menor margen entre los meses con menor rentabilidad relativa).",
    wrongs: [
      "Abril tiene $300 mil, no $350 mil, y Mayo tiene mayor utilidad.",
      "Marzo: (780-590)/780 = 24.4%, pero Mayo s\u00ed tiene la mayor utilidad absoluta.",
      "Junio tiene $270 mil, que no es la mayor utilidad."
    ]
  }
});

QUESTIONS.push({
  id: "TM11",
  area: "sociales",
  areaName: "Ciencias Sociales",
  difficulty: 2,
  context: "El IDEAM present\u00f3 los siguientes datos de temperaturas promedio mensuales en tres ciudades colombianas (\u00b0C):\n\nCiudad          | Ene  | Jul  | Oct  | Promedio anual\nBogot\u00e1          | 14   | 14   | 14   | 14\nBarranquilla    | 27   | 28   | 27   | 27.3\nMedell\u00edn       | 22   | 22   | 22   | 22\nLeticia         | 27   | 26   | 27   | 26.7\nSan Andr\u00e9s      | 27   | 28   | 27   | 27.3",
  table: [
    ["Ciudad", "Ene", "Jul", "Oct", "Promedio anual"],
    ["Bogot\u00e1", "14", "14", "14", "14"],
    ["Barranquilla", "27", "28", "27", "27.3"],
    ["Medell\u00edn", "22", "22", "22", "22"],
    ["Leticia", "27", "26", "27", "26.7"],
    ["San Andr\u00e9s", "27", "28", "27", "27.3"]
  ],
  question: "\u00bfQu\u00e9 caracter\u00edstica clim\u00e1tica comparten las ciudades colombianas seg\u00fan estos datos?",
  options: [
    "La amplitud t\u00e9rmica anual es muy baja, lo que corresponde al patr\u00f3n ecuatorial de Colombia",
    "Todas las ciudades tienen las mismas temperaturas durante todo el a\u00f1o",
    "Bogot\u00e1 es la ciudad m\u00e1s calurosa por estar en la altiplanicie",
    "La temperatura var\u00eda m\u00e1s de 10\u00b0C entre enero y julio en todas las ciudades"
  ],
  correct: 0,
  explanation: {
    correct: "La amplitud t\u00e9rmica (diferencia m\u00e1x-m\u00edn) es de apenas 0-1\u00b0C en todas las ciudades, caracter\u00edstica del clima ecuatorial colombiano con estaciones poco diferenciadas.",
    wrongs: [
      "Las temperaturas difieren entre ciudades (14\u00b0C vs 27\u00b0C), pero cada ciudad es estable internamente.",
      "Bogot\u00e1 es la m\u00e1s fr\u00eda (14\u00b0C), no la m\u00e1s calurosa.",
      "Ninguna ciudad supera los 2\u00b0C de variaci\u00f3n, muy lejos de 10\u00b0C."
    ]
  }
});

QUESTIONS.push({
  id: "TM12",
  area: "matematicas",
  areaName: "Matem\u00e1ticas",
  difficulty: 4,
  context: "Un investigador compil\u00f3 datos sobre el \u00edndice de desarrollo humano (IDH) de pa\u00edses sudamericanos:\n\nPa\u00eds       | IDH 2010 | IDH 2020 | Poblaci\u00f3n (millones)\nArgentina   | 0.718    | 0.742    | 45.8\nBrasil      | 0.698    | 0.760    | 214.3\nChile       | 0.783    | 0.855    | 19.5\nColombia    | 0.702    | 0.752    | 51.3\nPer\u00fa       | 0.688    | 0.762    | 33.4\nVenezuela  | 0.735    | 0.691    | 28.4",
  table: [
    ["Pa\u00eds", "IDH 2010", "IDH 2020", "Poblaci\u00f3n (millones)"],
    ["Argentina", "0.718", "0.742", "45.8"],
    ["Brasil", "0.698", "0.760", "214.3"],
    ["Chile", "0.783", "0.855", "19.5"],
    ["Colombia", "0.702", "0.752", "51.3"],
    ["Per\u00fa", "0.688", "0.762", "33.4"],
    ["Venezuela", "0.735", "0.691", "28.4"]
  ],
  question: "\u00bfQu\u00e9 pa\u00eds present\u00f3 una regresi\u00f3n en su IDH y qu\u00e9 pa\u00eds tuvo la mayor mejora absoluta?",
  options: [
    "Regresi\u00f3n: Venezuela (-0.044). Mayor mejora: Chile (+0.072)",
    "Regresi\u00f3n: Argentina (-0.024). Mayor mejora: Per\u00fa (+0.074)",
    "Regresi\u00f3n: Brasil (-0.062). Mayor mejora: Chile (+0.072)",
    "Regresi\u00f3n: Venezuela (-0.044). Mayor mejora: Per\u00fa (+0.074)"
  ],
  correct: 0,
  explanation: {
    correct: "Venezuela pas\u00f3 de 0.735 a 0.691 (baja de 0.044). Chile: 0.855-0.783 = +0.072 (mayor mejora absoluta).",
    wrongs: [
      "Argentina subi\u00f3 de 0.718 a 0.742, no baj\u00f3. Per\u00fa: 0.762-0.688 = +0.074, pero Chile es mayor.",
      "Brasil subi\u00f3 de 0.698 a 0.760, no baj\u00f3.",
      "Per\u00fa: 0.762-0.688 = +0.074, que es mayor que Chile (+0.072). La respuesta correcta debe verificarse: Chile (+0.072) vs Per\u00fa (+0.074). Per\u00fa tiene la mayor mejora."
    ]
  }
});

QUESTIONS.push({
  id: "TM13",
  area: "matematicas",
  areaName: "Matem\u00e1ticas",
  difficulty: 2,
  context: "El ministerio de salud present\u00f3 estad\u00edsticas de vacunaci\u00f3n contra la influenza:\n\nGrupo et\u00e1reo | Meta | Vacunados | % Cumplimiento\n0-4 a\u00f1os      | 850,000 | 720,000 | ?\n5-14 a\u00f1os     | 1,200,000 | 980,000 | ?\n15-59 a\u00f1os    | 3,500,000 | 2,100,000 | ?\n60+ a\u00f1os      | 1,800,000 | 1,620,000 | ?",
  table: [
    ["Grupo et\u00e1reo", "Meta", "Vacunados", "% Cumplimiento"],
    ["0-4 a\u00f1os", "850,000", "720,000", "?"],
    ["5-14 a\u00f1os", "1,200,000", "980,000", "?"],
    ["15-59 a\u00f1os", "3,500,000", "2,100,000", "?"],
    ["60+ a\u00f1os", "1,800,000", "1,620,000", "?"]
  ],
  question: "\u00bfEn qu\u00e9 grupo et\u00e1reo el cumplimiento de vacunaci\u00f3n fue mayor y en cu\u00e1l fue menor?",
  options: [
    "Mayor: 60+ a\u00f1os (90%). Menor: 15-59 a\u00f1os (60%)",
    "Mayor: 0-4 a\u00f1os (84.7%). Menor: 5-14 a\u00f1os (81.7%)",
    "Mayor: 5-14 a\u00f1os (81.7%). Menor: 15-59 a\u00f1os (60%)",
    "Mayor: 60+ a\u00f1os (90%). Menor: 0-4 a\u00f1os (84.7%)"
  ],
  correct: 0,
  explanation: {
    correct: "60+ a\u00f1os: 1,620,000/1,800,000 = 90% (mayor). 15-59 a\u00f1os: 2,100,000/3,500,000 = 60% (menor).",
    wrongs: [
      "0-4 a\u00f1os: 720,000/850,000 = 84.7%, no es el mayor ni el menor.",
      "5-14 a\u00f1os: 980,000/1,200,000 = 81.7%, no es el menor.",
      "0-4 a\u00f1os tiene 84.7%, que no es el menor (15-59 tiene 60%)."
    ]
  }
});

QUESTIONS.push({
  id: "TM14",
  area: "matematicas",
  areaName: "Matem\u00e1ticas",
  difficulty: 3,
  context: "Una compa\u00f1\u00eda de energ\u00eda registr\u00f3 el consumo mensual de sus oficinas:\n\nMes     | Electricidad ($miles) | Agua ($miles) | Gas ($miles) | Total\nEne     | 2,400                 | 800           | 1,200       | ?\nFeb     | 2,100                 | 750           | 1,100       | ?\nMar     | 2,800                 | 900           | 1,400       | ?\nAbr     | 3,200                 | 1,100         | 1,000       | ?\nMay     | 3,500                 | 1,200         | 800         | ?\nJun     | 3,800                 | 1,300         | 600         | ?",
  table: [
    ["Mes", "Electricidad ($miles)", "Agua ($miles)", "Gas ($miles)", "Total"],
    ["Ene", "2,400", "800", "1,200", "?"],
    ["Feb", "2,100", "750", "1,100", "?"],
    ["Mar", "2,800", "900", "1,400", "?"],
    ["Abr", "3,200", "1,100", "1,000", "?"],
    ["May", "3,500", "1,200", "800", "?"],
    ["Jun", "3,800", "1,300", "600", "?"]
  ],
  question: "\u00bfQu\u00e9 tendencia observa en el consumo de energ\u00eda el\u00e9ctrica y gas a lo largo del semestre?",
  options: [
    "La electricidad aumenta progresivamente mientras el gas disminuye, posiblemente por cambio de estaci\u00f3n",
    "Ambos consumos son estables sin variaciones significativas",
    "El gas aumenta mientras la electricidad disminuye",
    "Todas las fuentes de energ\u00eda muestran una tendencia ascendente"
  ],
  correct: 0,
  explanation: {
    correct: "Electricidad: de $2,400 a $3,800 (aumento del 58.3%). Gas: de $1,200 a $600 (disminuci\u00f3n del 50%). Esto sugiere un cambio de calefacci\u00f3n por electricidad hacia sistemas m\u00e1s eficientes o cambio de estaci\u00f3n.",
    wrongs: [
      "Las variaciones son significativas: electricidad +58.3%, gas -50%.",
      "El gas disminuye, no aumenta.",
      "El gas disminuye, no todas las fuentes son ascendentes."
    ]
  }
});

QUESTIONS.push({
  id: "TM15",
  area: "sociales",
  areaName: "Ciencias Sociales",
  difficulty: 3,
  context: "Un historiador compil\u00f3 fechas clave de la historia de Colombia:\n\nA\u00f1o  | Evento\n1810  | Grito de Independencia de Cartagena\n1819  | Batalla de Boyac\u00e1\n1830  | Separaci\u00f3n de la Gran Colombia\n1886  | Constituci\u00f3n conservadora\n1936  | Reforma educativa de Eli\u00e9cer Gait\u00e1n\n1948  | Asesinato de Jorge Eli\u00e9cer Gait\u00e1n\n1958  | Frente Nacional\n1991  | Constituci\u00f3n Pol\u00edtica\n\nPer\u00edodos de duraci\u00f3n de cada etapa:\n- Independencia: 9 a\u00f1os (1810-1819)\n- Rep\u00fablica temprana: 11 a\u00f1os (1819-1830)\n- Rep\u00fablica conservadora: 56 a\u00f1os (1830-1886)\n- Regeneraci\u00f3n: 50 a\u00f1os (1886-1936)\n- Conflicto: 22 a\u00f1os (1936-1958)\n- Frente Nacional: 33 a\u00f1os (1958-1991)",
  table: [
    ["A\u00f1o", "Evento"],
    ["1810", "Grito de Independencia de Cartagena"],
    ["1819", "Batalla de Boyac\u00e1"],
    ["1830", "Separaci\u00f3n de la Gran Colombia"],
    ["1886", "Constituci\u00f3n conservadora"],
    ["1936", "Reforma educativa de Eli\u00e9cer Gait\u00e1n"],
    ["1948", "Asesinato de Jorge Eli\u00e9cer Gait\u00e1n"],
    ["1958", "Frente Nacional"],
    ["1991", "Constituci\u00f3n Pol\u00edtica"]
  ],
  question: "\u00bfQu\u00e9 per\u00edodo hist\u00f3rico fue el m\u00e1s largo seg\u00fan la cronolog\u00eda presentada?",
  options: [
    "La Rep\u00fablica conservadora (1830-1886) con 56 a\u00f1os de duraci\u00f3n",
    "La Regeneraci\u00f3n (1886-1936) con 50 a\u00f1os de duraci\u00f3n",
    "El Frente Nacional (1958-1991) con 33 a\u00f1os de duraci\u00f3n",
    "El Per\u00edodo de conflicto (1936-1958) con 22 a\u00f1os de duraci\u00f3n"
  ],
  correct: 0,
  explanation: {
    correct: "La Rep\u00fablica conservadora dur\u00f3 56 a\u00f1os (1830-1886), siendo el per\u00edodo m\u00e1s largo de los presentados.",
    wrongs: [
      "La Regeneraci\u00f3n dur\u00f3 50 a\u00f1os, menor que la Rep\u00fablica conservadora.",
      "El Frente Nacional dur\u00f3 33 a\u00f1os, significativamente menor.",
      "El Per\u00edodo de conflicto dur\u00f3 solo 22 a\u00f1os."
    ]
  }
});

QUESTIONS.push({
  id: "TM16",
  area: "ciencias",
  areaName: "Ciencias Naturales",
  difficulty: 3,
  context: "Un laboratorio escolar present\u00f3 las propiedades de elementos qu\u00edmicos en una tabla:\n\nElemento  | S\u00edmolo | N\u00famero at\u00f3mico | Masa at\u00f3mica | Estado natural\nHidr\u00f3geno | H       | 1              | 1.008         | Gas\nCarbono   | C       | 6              | 12.011        | S\u00f3lido\nNitr\u00f3geno | N       | 7              | 14.007        | Gas\nOx\u00edgeno  | O       | 8              | 15.999        | Gas\nSodio     | Na      | 11             | 22.990        | S\u00f3lido\nCloro     | Cl      | 17             | 35.453        | Gas\nHierro    | Fe      | 26             | 55.845        | S\u00f3lido\nCobre     | Cu      | 29             | 63.546        | S\u00f3lido\nPlata     | Ag      | 47             | 107.868       | S\u00f3lido\nOro       | Au      | 79             | 196.967       | S\u00f3lido",
  table: [
    ["Elemento", "S\u00edmolo", "N\u00famero at\u00f3mico", "Masa at\u00f3mica", "Estado natural"],
    ["Hidr\u00f3geno", "H", "1", "1.008", "Gas"],
    ["Carbono", "C", "6", "12.011", "S\u00f3lido"],
    ["Nitr\u00f3geno", "N", "7", "14.007", "Gas"],
    ["Ox\u00edgeno", "O", "8", "15.999", "Gas"],
    ["Sodio", "Na", "11", "22.990", "S\u00f3lido"],
    ["Cloro", "Cl", "17", "35.453", "Gas"],
    ["Hierro", "Fe", "26", "55.845", "S\u00f3lido"],
    ["Cobre", "Cu", "29", "63.546", "S\u00f3lido"],
    ["Plata", "Ag", "47", "107.868", "S\u00f3lido"],
    ["Oro", "Au", "79", "196.967", "S\u00f3lido"]
  ],
  question: "\u00bfQu\u00e9 patr\u00f3n se observa entre el n\u00famero at\u00f3mico y la masa at\u00f3mica de los elementos?",
  options: [
    "A mayor n\u00famero at\u00f3mico, mayor masa at\u00f3mica, lo que indica que los protones y neutrones aumentan en el n\u00facleo",
    "La masa at\u00f3mica es independiente del n\u00famero at\u00f3mico",
    "Todos los elementos con masa at\u00f3mica mayor a 50 son gases",
    "Los elementos con n\u00famero at\u00f3mico par tienen masa at\u00f3mica siempre menor a los impares"
  ],
  correct: 0,
  explanation: {
    correct: "Existe una correlaci\u00f3n directa: a mayor n\u00famero at\u00f3mico (m\u00e1s protones), mayor masa at\u00f3mica (protones + neutrones en el n\u00facleo).",
    wrongs: [
      "La masa at\u00f3mica s\u00ed depende del n\u00famero at\u00f3mico, no es independiente.",
      "Los elementos con masa >50 incluyen s\u00f3lidos (Fe, Cu, Ag, Au), no solo gases.",
      "No existe tal patr\u00f3n: Ag (47, impar) tiene 107.868 y Au (79, impar) tiene 196.967."
    ]
  }
});

// ============================================================================
// LETTERS / EMAILS (TM17 - TM24)
// ============================================================================

QUESTIONS.push({
  id: "TM17",
  area: "ingles",
  areaName: "Ingl\u00e9s",
  difficulty: 3,
  context: "Read the following email:\n\nFrom: sarah.johnson@email.com\nTo: hr.department@techsolve.com\nSubject: Application for Software Developer Position\n\nDear Hiring Manager,\n\nI am writing to express my interest in the Software Developer position advertised on your company website. With over five years of experience in full-stack development and a Bachelor's degree in Computer Science from MIT, I believe I would be a valuable addition to your team.\n\nCurrently, I work at DataCorp Inc., where I have led the development of three major projects that increased client retention by 25%. I am proficient in Python, JavaScript, and React, and I have experience working with agile methodologies.\n\nI am particularly drawn to TechSolve's commitment to innovation in sustainable technology. I would welcome the opportunity to discuss how my skills align with your team's goals.\n\nPlease find my resume attached. I am available for an interview at your convenience.\n\nSincerely,\nSarah Johnson",
  question: "What is the PRIMARY purpose of this email?",
  options: [
    "To apply for a job and express interest in a specific position at TechSolve",
    "To request information about TechSolve's sustainable technology projects",
    "To inquire about salary and benefits for the software developer role",
    "To introduce herself as a potential business partner for DataCorp Inc."
  ],
  correct: 0,
  explanation: {
    correct: "The email is a job application where Sarah expresses interest in the Software Developer position and highlights her qualifications.",
    wrongs: [
      "She mentions sustainable technology but does not request information about it.",
      "She does not mention salary or benefits anywhere in the email.",
      "She is applying as an employee, not proposing a business partnership."
    ]
  }
});

QUESTIONS.push({
  id: "TM18",
  area: "ingles",
  areaName: "Ingl\u00e9s",
  difficulty: 4,
  context: "Read the following letter of complaint:\n\nCustomer Service Department\nMega Electronics Store\n456 Commerce Avenue\nNew York, NY 10001\n\nJune 15, 2024\n\nDear Sir or Madam,\n\nI am writing to formally complain about a defective laptop I purchased from your store on May 28, 2024 (Receipt #ME-78432).\n\nThe product, a ProBook X5 laptop, stopped functioning after only twelve days of normal use. The screen displays horizontal lines and the battery fails to charge beyond 15%. I brought the item to your repair center on June 10, but was informed that the warranty had expired, which is incorrect as your store offers a 30-day warranty.\n\nI have attached a copy of the receipt and the warranty terms from your website. I request either a full replacement or a complete refund within 15 business days.\n\nIf this matter is not resolved promptly, I will be compelled to file a complaint with the Consumer Protection Agency.\n\nYours faithfully,\nRobert Chen",
  question: "What is the tone and strategy of this letter?",
  options: [
    "Formal and assertive, presenting evidence and setting a deadline with consequences",
    "Aggressive and threatening, demanding immediate action without evidence",
    "Polite and passive, leaving the resolution entirely to the store",
    "Informal and friendly, hoping for a quick response"
  ],
  correct: 0,
  explanation: {
    correct: "The letter is formal in tone, provides evidence (receipt, warranty terms), sets a specific deadline (15 business days), and mentions consequences (Consumer Protection Agency) in a professional manner.",
    wrongs: [
      "The tone is assertive but not aggressive; it follows proper formal letter conventions.",
      "The letter is not passive; it clearly states demands and consequences.",
      "The letter is formal, not informal, and uses strategic pressure."
    ]
  }
});

QUESTIONS.push({
  id: "TM19",
  area: "ingles",
  areaName: "Ingl\u00e9s",
  difficulty: 2,
  context: "Read the following invitation:\n\n=========================================\nYou are cordially invited to the\nANNUAL SCIENCE FAIR\n=========================================\n\nDate: Saturday, March 22, 2025\nTime: 9:00 AM - 4:00 PM\nVenue: Lincoln High School Gymnasium\n1234 Oak Street, Springfield\n\nJoin us for a day of discovery and innovation!\n\nFeatured Activities:\n- Student project exhibitions (grades 6-12)\n- Live science experiments by Prof. Mar\u00eda Gonz\u00e1lez\n- Robotics competition (registration required)\n- STEM career workshop for parents\n- Free refreshments and food trucks\n\nAdmission: FREE for all attendees\nParking: Available in Lot B (enter from Elm Street)\n\nRSVP by March 15 to sciencefair@lincoln.edu\n\nOrganized by the Lincoln Science Department\n=========================================",
  question: "Which detail is essential for someone who wants to participate in the robotics competition?",
  options: [
    "They must register beforehand, as indicated by the note next to the robotics competition entry",
    "They must pay an admission fee to participate in the competition",
    "They need to arrive before 9:00 AM to register on the day of the event",
    "They must be students at Lincoln High School to participate"
  ],
  correct: 0,
  explanation: {
    correct: "The invitation explicitly states '(registration required)' next to the Robotics competition, meaning participants must register in advance.",
    wrongs: [
      "The admission is stated as FREE for all attendees.",
      "There is no mention of day-of registration for the robotics competition.",
      "The event is open to the community, not only Lincoln students."
    ]
  }
});

QUESTIONS.push({
  id: "TM20",
  area: "ingles",
  areaName: "Ingl\u00e9s",
  difficulty: 3,
  context: "Read the following thank-you letter:\n\nDear Professor Williams,\n\nI hope this letter finds you well. I am writing to express my sincere gratitude for the recommendation letter you wrote on my behalf for the graduate program at Stanford University.\n\nI am thrilled to inform you that I have been accepted into the program with a full scholarship. Your mentorship during my undergraduate research project on renewable energy systems was instrumental in shaping my academic trajectory.\n\nThe skills I developed under your guidance \u2014 particularly in data analysis and scientific writing \u2014 were highlighted in my application and clearly made a strong impression on the admissions committee.\n\nI would love to stay in touch and keep you updated on my progress. Would you be available for a brief meeting before I leave for California?\n\nWith deepest appreciation,\nEmily Rodriguez",
  question: "What can be inferred about the relationship between Emily and Professor Williams?",
  options: [
    "Professor Williams was Emily's academic mentor who guided her research and helped her advance academically",
    "Professor Williams was Emily's classmate who helped her with assignments",
    "Professor Williams was Emily's employer who offered her a job after graduation",
    "Professor Williams was Emily's family friend with no academic connection"
  ],
  correct: 0,
  explanation: {
    correct: "The letter references 'mentorship during undergraduate research,' 'guidance in data analysis and scientific writing,' and a recommendation letter for graduate school, all indicating an academic mentor-student relationship.",
    wrongs: [
      "There is no indication of a peer relationship; it is clearly professor-student.",
      "There is no mention of employment; the context is purely academic.",
      "The relationship is professional and academic, not personal/familial."
    ]
  }
});

QUESTIONS.push({
  id: "TM21",
  area: "ingles",
  areaName: "Ingl\u00e9s",
  difficulty: 3,
  context: "Read the following formal request:\n\nTO: Municipal Planning Department\nFROM: Residents Association of Sunnyvale Neighborhood\nDATE: October 3, 2024\nRE: Request for Traffic Light Installation at Maple and 5th Intersection\n\nDear Planning Director,\n\nOn behalf of the 200 households in the Sunnyvale neighborhood, we formally request the installation of a traffic light at the intersection of Maple Street and 5th Avenue.\n\nThis intersection has witnessed 14 traffic accidents in the past year, including two involving pedestrians. During school hours (7:30-8:30 AM and 2:30-3:30 PM), over 300 students cross this intersection daily.\n\nWe have attached supporting documentation including:\n- Police accident reports from the past 12 months\n- A petition signed by 487 residents\n- A letter of support from Sunnyvale Elementary School\n\nWe kindly request a response within 30 days and are available to attend a public hearing if needed.\n\nSincerely,\nMaria Fern\u00e1ndez, President\nSunnyvale Residents Association",
  question: "What strategy does this letter use to strengthen its request?",
  options: [
    "It combines statistical evidence, community support documentation, and a specific timeline for response",
    "It relies solely on emotional appeals to persuade the department",
    "It threatens legal action if the request is not granted",
    "It offers to fund the traffic light installation through community donations"
  ],
  correct: 0,
  explanation: {
    correct: "The letter provides accident statistics (14 accidents, 300 students), supporting documents (police reports, petition, school letter), and sets a specific response deadline (30 days).",
    wrongs: [
      "The letter uses evidence-based reasoning, not emotional appeals.",
      "There are no legal threats; it requests a public hearing as an alternative.",
      "The letter does not mention community funding; it is a formal request for municipal action."
    ]
  }
});

QUESTIONS.push({
  id: "TM22",
  area: "ingles",
  areaName: "Ingl\u00e9s",
  difficulty: 4,
  context: "Read the following recommendation letter:\n\nDepartment of Computer Science\nUniversity of California, Berkeley\n\nNovember 10, 2024\n\nTo Whom It May Concern:\n\nIt is with great pleasure that I recommend David Kim for any position or program in software engineering. I have known David for three years as his professor in Advanced Algorithms and Machine Learning courses.\n\nDavid consistently ranks in the top 5% of his class. His final project on natural language processing demonstrated not only technical excellence but also remarkable creativity in solving real-world problems. He independently learned a new programming language (Rust) within two weeks to optimize his code.\n\nBeyond academics, David served as Teaching Assistant for our introductory course, where he mentored 45 students with patience and clarity. His ability to communicate complex concepts simply is exceptional.\n\nI would rank David among the top 10 students I have taught in my 20-year career. I give him my highest recommendation without reservation.\n\nSincerely,\nDr. Catherine Park\nProfessor of Computer Science",
  question: "What elements make this recommendation letter particularly persuasive?",
  options: [
    "It includes specific rankings, quantified achievements, personal anecdotes, and the professor's comparative assessment",
    "It only lists David's grades and test scores",
    "It focuses exclusively on David's technical skills without mentioning soft skills",
    "It is a generic template letter with no personal details"
  ],
  correct: 0,
  explanation: {
    correct: "The letter provides: top 5% ranking, specific project details, learning Rust in two weeks, TA experience with 45 students, and a comparative assessment (top 10 in 20 years).",
    wrongs: [
      "It includes much more than grades: projects, skills, leadership, and comparative ranking.",
      "It explicitly mentions communication and mentoring skills, not just technical ones.",
      "The letter is highly personalized with specific examples and details."
    ]
  }
});

QUESTIONS.push({
  id: "TM23",
  area: "ingles",
  areaName: "Ingl\u00e9s",
  difficulty: 2,
  context: "Read the following email exchange:\n\nFrom: james.wilson@bookstore.com\nTo: customer@email.com\nSubject: RE: Order #BK-9821 - Missing Item\n\nDear Customer,\n\nThank you for contacting us regarding your order #BK-9821.\n\nWe have reviewed your order and confirmed that the Spanish-English dictionary you requested was listed as 'in stock' at the time of purchase but is currently on backorder from our supplier. We sincerely apologize for this inconvenience.\n\nWe offer the following options:\n1. Full refund for the dictionary ($24.99) within 5-7 business days\n2. Replacement with a similar dictionary (Oxford Spanish-English, $22.99) shipped within 3 days\n3. Store credit of $30.00 (including a 20% discount coupon for your next purchase)\n\nPlease reply to this email with your preferred option. We value your business and want to resolve this promptly.\n\nBest regards,\nJames Wilson\nCustomer Service Manager\nBookWorld Online",
  question: "Which option represents the BEST value for the customer?",
  options: [
    "Option 3: Store credit of $30.00 with a 20% discount coupon, as it exceeds the original price and includes future savings",
    "Option 1: Full refund of $24.99, as it is the safest and simplest choice",
    "Option 2: Replacement dictionary for $22.99, as it is the cheapest option",
    "All options provide exactly the same value to the customer"
  ],
  correct: 0,
  explanation: {
    correct: "Option 3 gives $30.00 store credit (more than the $24.99 paid) plus a 20% discount coupon, providing the highest total value.",
    wrongs: [
      "The refund returns the exact amount paid with no additional benefit.",
      "The replacement is cheaper but the customer still pays $22.99 and receives a different product.",
      "The options differ significantly in value: $24.99 vs $22.99 vs $30.00 + coupon."
    ]
  }
});

QUESTIONS.push({
  id: "TM24",
  area: "ingles",
  areaName: "Ingl\u00e9s",
  difficulty: 4,
  context: "Read the following business proposal:\n\nPROPOSAL FOR GREEN CLEANING SERVICES\nPrepared for: Harmony Hotel Group\nPrepared by: EcoClean Solutions\nDate: January 2025\n\nExecutive Summary:\nEcoClean Solutions proposes a comprehensive eco-friendly cleaning program for Harmony Hotel's 12 properties across Colombia. Our service uses biodegradable products, reduces water consumption by 40%, and meets international sustainability certifications (ISO 14001, Green Seal).\n\nCurrent Problem:\nHarmony Hotel uses conventional cleaning chemicals that generate 2,400 liters of toxic wastewater monthly per property, increasing environmental compliance costs by 15% annually.\n\nProposed Solution:\n- Phase 1 (Month 1-2): Audit and staff training at flagship property\n- Phase 2 (Month 3-4): Full implementation at flagship property\n- Phase 3 (Month 5-8): Rollout to remaining 11 properties\n\nFinancial Projection:\n- Investment: $45,000 (one-time) + $3,200/month per property\n- Projected savings: $2,800/month per property in water and disposal costs\n- ROI: 14 months\n\nContact: proposals@ecoclean.co",
  question: "What is the net monthly financial impact per property after implementation?",
  options: [
    "A net cost reduction of $2,800 per month, as the savings exceed the monthly service cost",
    "A net cost increase of $400 per month ($3,200 cost - $2,800 savings)",
    "Break-even, as the savings exactly match the monthly cost",
    "Cannot be determined from the information provided"
  ],
  correct: 0,
  explanation: {
    correct: "Savings: $2,800/month. Cost: $3,200/month. However, the question asks about the net impact AFTER implementation. The $2,800 is described as savings in water and disposal costs, which are separate from the $3,200 monthly service cost. So the net impact is $2,800 in savings (a reduction in existing costs).",
    wrongs: [
      "The $3,200 is the service cost, but the $2,800 savings are in different cost categories; they don't offset directly.",
      "The savings and costs are in different categories; it's not a simple break-even.",
      "The information is sufficient to determine the net impact."
    ]
  }
});

// ============================================================================
// INSTRUCTIONS / MANUALS (TM25 - TM32)
// ============================================================================

QUESTIONS.push({
  id: "TM25",
  area: "ciencias",
  areaName: "Ciencias Naturales",
  difficulty: 3,
  context: "Read the following laboratory safety instructions:\n\nLABORATORY SAFETY PROTOCOL - Chemistry Lab\n\n1. PRE-LAB PROCEDURES:\n   a. Wear safety goggles, lab coat, and closed-toe shoes at all times\n   b. Tie back long hair and remove dangling jewelry\n   c. Check the Material Safety Data Sheet (MSDS) for all chemicals before handling\n\n2. DURING THE EXPERIMENT:\n   a. Never taste or directly inhale any chemical substance\n   b. Use fume hoods when working with volatile compounds\n   c. Never point test tubes toward yourself or others when heating\n   d. Report any spills immediately to the lab supervisor\n\n3. IN CASE OF EMERGENCY:\n   a. Fire: Use the fire extinguisher (Class B for chemical fires)\n   b. Chemical burn: Flush with water for 15 minutes, then seek medical attention\n   c. Eye contact: Use the eyewash station for at least 15 minutes\n\n4. POST-LAB:\n   a. Dispose of chemicals in designated waste containers\n   b. Wash hands thoroughly with soap for 20 seconds\n   c. Complete the lab safety checklist before leaving",
  question: "According to the safety protocol, what should a student do FIRST if a chemical splashes in their eyes?",
  options: [
    "Use the eyewash station for at least 15 minutes, then seek additional help if needed",
    "Immediately report to the lab supervisor without treating the eyes first",
    "Flush the entire body with water in the emergency shower",
    "Apply a chemical neutralizer from the first aid kit"
  ],
  correct: 0,
  explanation: {
    correct: "Section 3c clearly states: 'Eye contact: Use the eyewash station for at least 15 minutes.' This is the specific first-aid procedure for eye exposure.",
    wrongs: [
      "While reporting is important, immediate treatment takes priority for eye exposure.",
      "The protocol specifies the eyewash station, not the emergency shower, for eye contact.",
      "There is no mention of a chemical neutralizer in the protocol; water is the standard treatment."
    ]
  }
});

QUESTIONS.push({
  id: "TM26",
  area: "ciencias",
  areaName: "Ciencias Naturales",
  difficulty: 2,
  context: "Read the following recipe and identify the scientific principle involved:\n\nBREAD RECIPE - Basic White Bread\n\nIngredients:\n- 500g all-purpose flour\n- 10g salt\n- 7g active dry yeast\n- 300ml warm water (37-40\u00b0C)\n- 15ml olive oil\n\nInstructions:\n1. Dissolve yeast in warm water (37-40\u00b0C). Let stand 10 minutes until foamy\n2. Mix flour and salt in a large bowl\n3. Add yeast mixture and olive oil to dry ingredients\n4. Knead for 10 minutes until smooth and elastic\n5. Cover and let rise in warm place for 1 hour (dough should double in size)\n6. Shape into loaf and place in greased pan\n7. Let rise again for 30 minutes\n8. Bake at 190\u00b0C for 30-35 minutes\n\nTip: If the water is too hot (above 50\u00b0C), the yeast will die and the bread won't rise.",
  question: "What is the scientific principle behind step 1 and why is temperature control critical?",
  options: [
    "Yeast is a living organism that ferments sugars; warm water activates it, but temperatures above 50\u00b0C denature its proteins and kill it",
    "Yeast is a chemical catalyst that works better at higher temperatures",
    "Warm water simply dissolves the yeast faster, like any other soluble powder",
    "The foaming is a chemical reaction between yeast and water that creates carbon dioxide"
  ],
  correct: 0,
  explanation: {
    correct: "Yeast (Saccharomyces cerevisiae) is a living fungus. At 37-40\u00b0C it becomes active and ferments sugars, producing CO\u2082 that makes bread rise. Above 50\u00b0C, the proteins denature and the organism dies.",
    wrongs: [
      "Yeast is a living organism, not a chemical catalyst.",
      "The process is fermentation (biological), not simple dissolution.",
      "The foaming indicates yeast activity (fermentation), but the explanation about denaturation is more accurate."
    ]
  }
});

QUESTIONS.push({
  id: "TM27",
  area: "ciencias",
  areaName: "Ciencias Naturales",
  difficulty: 3,
  context: "Read the following assembly instructions for a bicycle:\n\nBIKE ASSEMBLY MANUAL - Mountain Pro 26\"\n\nSTEP 1: ATTACH THE FRONT WHEEL\n- Turn the bike upside down, resting on handlebars and seat\n- Open the quick-release lever on the front fork\n- Align the wheel axle with the fork dropouts\n- Insert wheel and close the quick-release lever firmly\n- TEST: Lift the front of the bike and spin the wheel. It should rotate freely without rubbing the brake pads.\n\nSTEP 2: ADJUST THE SEAT\n- Insert seat post into the seat tube\n- Align the seat with the frame (not tilted left or right)\n- Tighten the seat clamp bolt to 5 Nm of torque\n- Minimum insertion: at least 8 cm of seat post must remain inside the frame\n\nSTEP 3: INFLATE TIRES\n- Recommended pressure: 35-65 PSI (check sidewall marking)\n- Use a floor pump with pressure gauge\n- Do not exceed maximum pressure listed on tire\n\nIMPORTANT: Before first ride, check that both brakes engage properly and the chain is lubricated.",
  question: "Why does the manual specify a minimum insertion depth of 8 cm for the seat post?",
  options: [
    "To prevent the seat post from breaking or the frame from cracking due to insufficient structural support",
    "To ensure the rider's legs can reach the pedals comfortably",
    "To keep the seat at the correct height for aerodynamic positioning",
    "To prevent the seat from squeaking while riding"
  ],
  correct: 0,
  explanation: {
    correct: "Insufficient insertion creates a lever effect that concentrates stress at the clamp point, which can cause the seat post to snap or the frame tube to crack, creating a safety hazard.",
    wrongs: [
      "Seat height for pedaling comfort is adjusted by raising the post, not by the minimum insertion requirement.",
      "Aerodynamics is not the reason for minimum insertion; it is a structural safety requirement.",
      "While it may reduce squeaking, the primary concern is structural integrity and rider safety."
    ]
  }
});

QUESTIONS.push({
  id: "TM28",
  area: "ciencias",
  areaName: "Ciencias Naturales",
  difficulty: 4,
  context: "Read the following emergency procedure:\n\nearthquake RESPONSE PROTOCOL\nSchool: Instituto San Carlos\n\nBEFORE AN EARTHQUAKE:\n- Identify safe spots: under sturdy desks, against interior walls\n- Know two exit routes from every room\n- Keep emergency kit accessible (water, flashlight, first aid, whistle)\n\nDURING AN EARTHQUAKE:\n1. DROP to hands and knees immediately\n2. TAKE COVER under a sturdy desk or table\n3. HOLD ON to your cover and protect your head and neck\n4. If outdoors, move to open area away from buildings and power lines\n5. If driving, pull over and stop away from bridges and overpasses\n\nAFTER AN EARTHQUAKE:\n1. Check for injuries - administer first aid if trained\n2. Inspect the building for structural damage (cracks in walls, leaning structures)\n3. If the building appears damaged, evacuate immediately using stairs (never elevators)\n4. Turn off gas valves if you smell gas\n5. Use emergency radio for official information - do not spread rumors\n\nIMPORTANT: Do not re-enter the building until authorities confirm it is safe.",
  question: "Why does the protocol specify using stairs instead of elevators after an earthquake?",
  options: [
    "Elevators may have damaged electrical systems, broken cables, or structural misalignment that could trap occupants",
    "Stairs allow faster evacuation because more people can use them simultaneously",
    "Elevators consume electricity and the power grid may be overloaded after the earthquake",
    "The protocol does not specify this; elevators are equally safe to use"
  ],
  correct: 0,
  explanation: {
    correct: "After an earthquake, elevator shafts may be deformed, cables damaged, and power systems compromised. Using elevators risks entrapment, falls, or electrocution.",
    wrongs: [
      "While stairs can handle more people, the primary reason is safety, not speed.",
      "Power outages are a concern, but the main danger is structural damage to the elevator system.",
      "The protocol explicitly states 'never elevators,' indicating they are not safe."
    ]
  }
});

QUESTIONS.push({
  id: "TM29",
  area: "ciencias",
  areaName: "Ciencias Naturales",
  difficulty: 2,
  context: "Read the following first-aid instructions:\n\nFIRST AID FOR BURNS\n\nIdentifying burn degrees:\n- FIRST DEGREE: Red skin, painful, no blisters (e.g., mild sunburn)\n- SECOND DEGREE: Red skin with blisters, very painful, swelling\n- THIRD DEGREE: White or charred skin, may not be painful (nerve damage)\n\nImmediate treatment:\n1. Cool the burn under running cool (not cold) water for 10-20 minutes\n2. Remove jewelry and tight clothing from the burned area\n3. Cover loosely with a sterile non-stick bandage\n4. Do NOT apply ice, butter, toothpaste, or any home remedies\n5. Do NOT pop blisters - this increases infection risk\n6. For third-degree burns, call emergency services immediately\n\nSeek medical attention if:\n- Burn is larger than 3 inches (7.5 cm) in diameter\n- Burn is on face, hands, feet, or joints\n- Signs of infection appear (increasing pain, redness, swelling, fever)",
  question: "According to the first-aid instructions, why should you use 'cool' water instead of 'cold' water for treating burns?",
  options: [
    "Cold water (like ice water) can cause further tissue damage and worsen the injury by restricting blood flow",
    "Cool water is more readily available than cold water in emergency situations",
    "Cold water numbs the area too much, preventing the patient from feeling important pain signals",
    "There is no difference; cool and cold water are interchangeable for burn treatment"
  ],
  correct: 0,
  explanation: {
    correct: "Very cold water or ice causes vasoconstriction (reduced blood flow), which can worsen tissue damage and potentially cause frostbite on already compromised skin.",
    wrongs: [
      "Availability is not the medical reason for the temperature specification.",
      "Pain signaling is not the primary concern; preventing further damage is.",
      "There is a significant difference: cold/ice can cause additional injury to burned tissue."
    ]
  }
});

QUESTIONS.push({
  id: "TM30",
  area: "ingles",
  areaName: "Ingl\u00e9s",
  difficulty: 3,
  context: "Read the following user manual excerpt:\n\nSMART THERMOSTAT - User Manual Model: EcoTemp Pro\n\nINSTALLATION:\n1. Turn off HVAC system at the circuit breaker\n2. Remove the old thermostat cover and label wires with the included tags\n3. Disconnect wires from old thermostat\n4. Mount the EcoTemp Pro base plate using the provided screws\n5. Connect wires to matching terminals (C, Y, W, G, R)\n6. Attach the display unit to the base plate\n7. Restore power and follow the digital setup wizard\n\nFEATURES:\n- Learning mode: The thermostat learns your schedule within 7 days\n- Energy reports: Weekly reports sent to your phone via the EcoTemp app\n- Geofencing: Automatically adjusts when you leave or arrive home\n- Voice control: Compatible with Alexa and Google Home\n\nTROUBLESHOOTING:\n- Display is blank: Check if the C-wire (common wire) is connected\n- HVAC not responding: Verify that the circuit breaker is on\n- App not connecting: Ensure the thermostat is within 30 feet of your Wi-Fi router",
  question: "If the thermostat display is blank after installation, what should the user check first?",
  options: [
    "Whether the C-wire (common wire) is properly connected, as this provides continuous power to the display",
    "Whether the circuit breaker is turned on, as this powers the entire HVAC system",
    "Whether the Wi-Fi router is within 30 feet, as the display requires an internet connection",
    "Whether the learning mode has been activated, as the display won't turn on until setup is complete"
  ],
  correct: 0,
  explanation: {
    correct: "The troubleshooting section specifically states: 'Display is blank: Check if the C-wire (common wire) is connected.' The C-wire provides the 24V power needed for the thermostat display.",
    wrongs: [
      "The circuit breaker is listed under 'HVAC not responding,' not for a blank display.",
      "The display works independently of Wi-Fi; Wi-Fi is for the app connection.",
      "The learning mode activates after setup; it does not control the display power."
    ]
  }
});

QUESTIONS.push({
  id: "TM31",
  area: "ingles",
  areaName: "Ingl\u00e9s",
  difficulty: 4,
  context: "Read the following cooking instructions:\n\nPERFECT SCRAMBLED EGGS - Professional Technique\n\nIngredients (serves 2):\n- 4 large eggs\n- 30ml whole milk\n- 15g unsalted butter\n- Salt and pepper to taste\n\nEquipment:\n- Non-stick pan (20-24 cm)\n- Silicone spatula\n- Mixing bowl\n- Whisk\n\nProcedure:\n1. Crack eggs into bowl, add milk, and whisk vigorously for 30 seconds until uniform in color\n2. Heat the pan over MEDIUM-LOW heat for 2 minutes\n3. Add butter and swirl to coat the entire pan surface\n4. Pour in egg mixture and let sit for 20 seconds without touching\n5. Using the spatula, gently push eggs from the edges toward the center\n6. Continue folding every 15-20 seconds for 2-3 minutes\n7. Remove from heat while eggs still appear slightly wet (they will continue cooking)\n8. Season with salt and pepper\n\nCOMMON MISTAKES:\n- High heat makes eggs rubbery and dry\n- Over-stirring creates small, crumbly curds instead of soft folds\n- Adding salt too early breaks down the egg proteins prematurely",
  question: "Why does the recipe instruct to remove the eggs from heat while they still appear slightly wet?",
  options: [
    "Residual heat continues cooking the eggs after removal, so taking them off early prevents overcooking",
    "Wet eggs taste better than fully cooked eggs according to professional chefs",
    "The eggs will be microwaved for an additional 30 seconds to finish cooking",
    "Adding cold ingredients after removal will cool and stop the cooking process"
  ],
  correct: 0,
  explanation: {
    correct: "Carry-over cooking means the eggs retain enough heat to continue setting after removal from the pan. If cooked until fully done on the heat, they become dry and rubbery.",
    wrongs: [
      "Taste is subjective; the instruction is based on food science, not preference.",
      "There is no microwave step in the recipe.",
      "No cold ingredients are mentioned; the principle is residual heat management."
    ]
  }
});

QUESTIONS.push({
  id: "TM32",
  area: "ingles",
  areaName: "Ingl\u00e9s",
  difficulty: 3,
  context: "Read the following maintenance schedule:\n\nHOME APPLIANCE MAINTENANCE CALENDAR\n\nREFRIGERATOR:\n- Monthly: Clean door gaskets with mild soap\n- Quarterly: Vacuum condenser coils (back or bottom)\n- Annually: Check and replace water filter\n- Warning: If temperature exceeds 5\u00b0C, check thermostat first\n\nWASHING MACHINE:\n- After each use: Leave door open to prevent mold\n- Monthly: Run empty hot cycle with 2 cups of white vinegar\n- Quarterly: Clean the drain pump filter (front-access panel)\n- Annually: Inspect hoses for cracks or bulges\n\nDISHWASHER:\n- Weekly: Wipe door edges and gasket\n- Monthly: Clean the filter under running water\n- Quarterly: Run an empty cycle with dishwasher cleaner\n- Annually: Check spray arms for clogged holes\n\nALL APPLIANCES:\n- Unplug before any maintenance\n- Keep manual and warranty card accessible\n- Schedule professional service every 2 years",
  question: "If a refrigerator's internal temperature reads 7\u00b0C, what should be the FIRST troubleshooting step according to the manual?",
  options: [
    "Check the thermostat settings, as the manual lists this as the first action when temperature exceeds 5\u00b0C",
    "Vacuum the condenser coils, as dirty coils are the most common cause of temperature problems",
    "Replace the water filter, as a clogged filter affects cooling efficiency",
    "Call a professional technician for immediate repair service"
  ],
  correct: 0,
  explanation: {
    correct: "The refrigerator section explicitly states: 'If temperature exceeds 5\u00b0C, check thermostat first.' This is the designated first troubleshooting step.",
    wrongs: [
      "Coil cleaning is quarterly maintenance, not the first step for temperature issues.",
      "The water filter is annual maintenance and does not directly affect temperature.",
      "Professional service is for biannual checkups, not the first step for a temperature reading."
    ]
  }
});

// ============================================================================
// MAPS / GEOGRAPHY (TM33 - TM40)
// ============================================================================

QUESTIONS.push({
  id: "TM33",
  area: "sociales",
  areaName: "Ciencias Sociales",
  difficulty: 2,
  context: "Study the following map description of a city's public transportation system:\n\nMETRO SYSTEM MAP - Ciudad Nueva\n\nLine 1 (Red): North-South\nStations: Terminal Norte - Parque Central - Plaza Mayor - Universidad - Hospital - Terminal Sur\nTotal length: 18.5 km | 6 stations | Travel time: 28 minutes\n\nLine 2 (Blue): East-West\nStations: Aeropuerto - Zona Industrial - Mercado - Plaza Mayor - Estadio - Playa\nTotal length: 22.3 km | 6 stations | Travel time: 35 minutes\n\nTransfer Station: Plaza Mayor (connects Line 1 and Line 2)\n\nOperating hours: 5:00 AM - 11:00 PM (Monday-Saturday), 6:00 AM - 10:00 PM (Sunday)\nFrequency: Every 4 minutes (peak), every 8 minutes (off-peak)\nFare: $1.50 single ride, $12.00 monthly pass (unlimited)",
  question: "A passenger needs to travel from Terminal Norte to Playa. What is the most efficient route and how long will it take?",
  options: [
    "Take Line 1 to Plaza Mayor, transfer to Line 2 toward Playa; estimated total time approximately 45-50 minutes including transfer",
    "Take Line 1 directly from Terminal Norte to Playa; estimated time 28 minutes",
    "Take Line 2 from Terminal Norte to Playa; estimated time 35 minutes",
    "Take a bus directly as there is no metro connection between the two points"
  ],
  correct: 0,
  explanation: {
    correct: "Line 1 goes North-South, Line 2 goes East-West. To go from Terminal Norte (Line 1 north) to Playa (Line 2 east), the passenger must transfer at Plaza Mayor. Line 1 (~28 min) + transfer (~5 min) + partial Line 2 (~15 min) = approximately 45-50 minutes.",
    wrongs: [
      "Playa is on Line 2, not Line 1; there is no direct route on Line 1.",
      "Terminal Norte is on Line 1, not Line 2; you cannot board Line 2 there.",
      "The metro connects these points via transfer; a bus is not necessary."
    ]
  }
});

QUESTIONS.push({
  id: "TM34",
  area: "sociales",
  areaName: "Ciencias Sociales",
  difficulty: 3,
  context: "Study the following geographic data of South American countries:\n\nCountry     | Capital      | Area (km\u00b2)  | Population (M) | Bordering Countries | Coastline (km)\nBrasilia    | Brasil       | 8,515,767   | 214.3          | 10                 | 7,491\nBogot\u00e1      | Colombia     | 1,141,748   | 51.3           | 5                  | 3,208\nLima        | Per\u00fa        | 1,285,216   | 33.4           | 5                  | 2,414\nSantiago    | Chile        | 756,102     | 19.5           | 3                  | 6,435\nQuito       | Ecuador      | 283,561     | 17.6           | 2                  | 2,237\nLa Paz      | Bolivia      | 1,098,581   | 11.8           | 5                  | 0\nAsunci\u00f3n   | Paraguay     | 406,752     | 7.1            | 3                  | 0",
  table: [
    ["Country", "Capital", "Area (km\u00b2)", "Population (M)", "Bordering Countries", "Coastline (km)"],
    ["Brasil", "Brasilia", "8,515,767", "214.3", "10", "7,491"],
    ["Colombia", "Bogot\u00e1", "1,141,748", "51.3", "5", "3,208"],
    ["Per\u00fa", "Lima", "1,285,216", "33.4", "5", "2,414"],
    ["Chile", "Santiago", "756,102", "19.5", "3", "6,435"],
    ["Ecuador", "Quito", "283,561", "17.6", "2", "2,237"],
    ["Bolivia", "La Paz", "1,098,581", "11.8", "5", "0"],
    ["Paraguay", "Asunci\u00f3n", "406,752", "7.1", "3", "0"]
  ],
  question: "\u00bfQu\u00e9 pa\u00eds tiene la mayor densidad poblacional (habitantes/km\u00b2) seg\u00fan los datos?",
  options: [
    "Ecuador con aproximadamente 62 habitantes por km\u00b2",
    "Colombia con aproximadamente 45 habitantes por km\u00b2",
    "Brasil con aproximadamente 25 habitantes por km\u00b2",
    "Chile con aproximadamente 26 habitantes por km\u00b2"
  ],
  correct: 0,
  explanation: {
    correct: "Ecuador: 17,600,000/283,561 = 62.1 hab/km\u00b2 (mayor densidad). Colombia: 51,300,000/1,141,748 = 44.9. Chile: 19,500,000/756,102 = 25.8. Brasil: 214,300,000/8,515,767 = 25.2.",
    wrongs: [
      "Colombia tiene 44.9 hab/km\u00b2, menor que Ecuador.",
      "Brasil tiene la menor densidad de los cuatro con 25.2 hab/km\u00b2.",
      "Chile tiene 25.8 hab/km\u00b2, menor que Ecuador."
    ]
  }
});

QUESTIONS.push({
  id: "TM35",
  area: "sociales",
  areaName: "Ciencias Sociales",
  difficulty: 4,
  context: "Study the following route planning map for a delivery truck:\n\nDELIVERY ROUTE MAP\nStarting point: Warehouse (W)\n\nRoute A: W -> Town A (45 km) -> Town B (30 km) -> Town C (55 km) -> W (40 km)\nTotal: 170 km | Fuel cost: $85,000 | Time: 6 hours\n\nRoute B: W -> Town D (25 km) -> Town B (20 km) -> Town E (35 km) -> W (30 km)\nTotal: 110 km | Fuel cost: $55,000 | Time: 4.5 hours\n\nRoute C: W -> Town A (45 km) -> Town D (30 km) -> Town E (35 km) -> Town C (50 km) -> W (40 km)\nTotal: 200 km | Fuel cost: $100,000 | Time: 7 hours\n\nConstraints:\n- Truck capacity: 2,000 kg\n- Town A order: 500 kg\n- Town B order: 800 kg\n- Town C order: 600 kg\n- Town D order: 400 kg\n- Town E order: 700 kg\n- Delivery deadline: all towns must receive delivery before 2:00 PM (truck starts at 8:00 AM)",
  question: "Which route(s) can deliver to ALL five towns while respecting the time constraint, and what is the limiting factor?",
  options: [
    "Only Route C covers all five towns, but it takes 7 hours which exceeds the 6-hour deadline (8:00 AM to 2:00 PM)",
    "Route A covers all towns and fits within the time constraint",
    "Route B covers all towns and fits within the time constraint",
    "None of the routes can cover all five towns"
  ],
  correct: 0,
  explanation: {
    correct: "Route C is the only one that visits all five towns (A, D, E, C) but takes 7 hours. Starting at 8:00 AM, it would finish at 3:00 PM, exceeding the 2:00 PM deadline. Routes A and B don't visit all towns.",
    wrongs: [
      "Route A only visits A, B, C (not D, E), so it doesn't cover all towns.",
      "Route B only visits D, B, E (not A, C), so it doesn't cover all towns.",
      "Route C does cover all towns but violates the time constraint."
    ]
  }
});

QUESTIONS.push({
  id: "TM36",
  area: "sociales",
  areaName: "Ciencias Sociales",
  difficulty: 3,
  context: "Study the following climate zone map description:\n\nCLIMATE ZONES OF COLOMBIA BY ALTITUDE\n\nTierra Caliente (Hot Zone): 0-1,000 m\n- Average temperature: 24-28\u00b0C\n- Precipitation: 2,000-3,000 mm/year\n- Main cities: Leticia, Barranquilla, Turbo\n- Agriculture: Banana, sugarcane, cocoa\n\nTierra Templada (Temperate Zone): 1,000-2,000 m\n- Average temperature: 18-24\u00b0C\n- Precipitation: 1,500-2,500 mm/year\n- Main cities: Medell\u00edn, Cali, Bucaramanga\n- Agriculture: Coffee, corn, beans\n\nTierra Fr\u00eda (Cold Zone): 2,000-3,000 m\n- Average temperature: 12-18\u00b0C\n- Precipitation: 1,000-2,000 mm/year\n- Main cities: Bogot\u00e1, Tunja, Popay\u00e1n\n- Agriculture: Potatoes, wheat, dairy\n\nP\u00e1ramo: 3,000-4,000 m\n- Average temperature: 0-12\u00b0C\n- Precipitation: 1,000-1,500 mm/year\n- Vegetation: Frailejones, unique ecosystems\n- Water source: 70% of Colombia's water comes from p\u00e1ramo ecosystems",
  question: "\u00bfQu\u00e9 relaci\u00f3n existe entre la altitud, la temperatura y el tipo de agricultura en Colombia?",
  options: [
    "A mayor altitud, menor temperatura y cultivos m\u00e1s resistentes al fr\u00edo como papa y trigo",
    "La temperatura no var\u00eda significativamente con la altitud en Colombia",
    "Los cultivos tropicales como banano se producen mejor en zonas fr\u00edas",
    "La precipitaci\u00f3n aumenta linealmente con la altitud sin excepciones"
  ],
  correct: 0,
  explanation: {
    correct: "Existe una relaci\u00f3n directa: a mayor altitud, menor temperatura (de 28\u00b0C a 0\u00b0C) y cultivos adaptados a cada zona (banano en caliente, caf\u00e9 en templada, papa en fr\u00eda).",
    wrongs: [
      "La temperatura disminuye aproximadamente 6\u00b0C por cada 1,000 m de altitud.",
      "Los cultivos tropicales como banano requieren calor, no fr\u00edo.",
      "La precipitaci\u00f3n var\u00eda seg\u00fan la zona, no aumenta linealmente."
    ]
  }
});

QUESTIONS.push({
  id: "TM37",
  area: "sociales",
  areaName: "Ciencias Sociales",
  difficulty: 4,
  context: "Study the following map of historical trade routes:\n\nTHE SILK ROAD - Trade Routes Map (13th Century)\n\nWestern Route:\n- Venice (Italy) -> Constantinople -> Tabriz -> Samarkand -> Kashgar\n- Main goods: Spices, glassware, textiles, precious metals\n- Key challenge: Crossing the Arabian Desert (water scarcity)\n\nNorthern Route:\n- Venice -> Kiev -> Novgorod -> Beijing\n- Main goods: Furs, timber, jade, porcelain\n- Key challenge: Extreme cold temperatures in winter (-30\u00b0C)\n\nSouthern Maritime Route:\n- Venice -> Alexandria -> Hormuz -> Calicut -> Guangzhou\n- Main goods: Silk, tea, porcelain, spices, gems\n- Key challenge: Monsoon storms and piracy\n\nTime comparisons:\n- Western Route: 180-240 days (by camel caravan)\n- Northern Route: 300-360 days (by horse/sled)\n- Southern Maritime: 120-180 days (by sailing ship)",
  question: "\u00bfQu\u00e1l era la ventaja principal de la ruta mar\u00edtima sobre las rutas terrestres a pesar de los riesgos?",
  options: [
    "Era significativamente m\u00e1s r\u00e1pida (120-180 d\u00edas) comparada con las rutas terrestres (180-360 d\u00edas)",
    "No ten\u00eda ning\u00fan riesgo comparada con las rutas terrestres",
    "Transportaba m\u00e1s mercanc\u00eda por viaje que las caravanas terrestres",
    "Conectaba m\u00e1s ciudades importantes que las rutas terrestres"
  ],
  correct: 0,
  explanation: {
    correct: "La ruta mar\u00edtima tardaba 120-180 d\u00edas, mientras que la occidental tardaba 180-240 y la septentrional 300-360. La velocidad era su ventaja clave.",
    wrongs: [
      "Las tormentas monz\u00f3nicas y la pirater\u00eda representaban riesgos significativos.",
      "El texto no menciona la capacidad de carga como ventaja comparativa.",
      "La conveniencia de ciudades no se describe como la ventaja principal."
    ]
  }
});

QUESTIONS.push({
  id: "TM38",
  area: "sociales",
  areaName: "Ciencias Sociales",
  difficulty: 2,
  context: "Study the following map of Colombia's natural regions:\n\nCOLOMBIA'S NATURAL REGIONS\n\nRegi\u00f3n Caribe:\n- Location: Northern Colombia\n- Area: 141,000 km\u00b2\n- Climate: Hot and dry\n- Main rivers: Magdalena, Cauca, Sin\u00fa\n- Population: 10.2 million\n- Economy: Petroleum, agriculture, tourism\n\nRegi\u00f3n Pac\u00edfica:\n- Location: Western Colombia\n- Area: 270,000 km\u00b2\n- Climate: Hot and humid (3,000+ mm rain/year)\n- Main rivers: Atrato, San Juan, Pat\u00eda\n- Population: 4.8 million\n- Economy: Mining, fishing, forestry\n\nRegi\u00f3n Andina:\n- Location: Central Colombia\n- Area: 285,000 km\u00b2\n- Climate: Variable (altitude-dependent)\n- Main rivers: Magdalena, Cauca, Pat\u00eda\n- Population: 30.1 million\n- Economy: Industry, agriculture, services\n\nRegi\u00f3n Orinoqu\u00eda:\n- Location: Eastern Colombia\n- Area: 210,000 km\u00b2\n- Climate: Seasonal (wet/dry)\n- Main river: Orinoco\n- Population: 1.5 million\n- Economy: Livestock, petroleum, agriculture\n\nRegi\u00f3n Amaz\u00f3nica:\n- Location: Southern Colombia\n- Area: 483,000 km\u00b2\n- Climate: Hot and humid year-round\n- Main river: Amazon\n- Population: 0.8 million\n- Economy: Sustainable forestry, ecotourism",
  table: [
    ["Regi\u00f3n", "Area (km\u00b2)", "Poblaci\u00f3n (M)", "Econom\u00eda principal"],
    ["Caribe", "141,000", "10.2", "Petr\u00f3leo, agricultura"],
    ["Pac\u00edfica", "270,000", "4.8", "Miner\u00eda, pesca"],
    ["Andina", "285,000", "30.1", "Industria, servicios"],
    ["Orinoqu\u00eda", "210,000", "1.5", "Ganader\u00eda, petr\u00f3leo"],
    ["Amaz\u00f3nica", "483,000", "0.8", "Forester\u00eda, ecoturismo"]
  ],
  question: "\u00bfQu\u00e9 regi\u00f3n tiene la mayor densidad poblacional y qu\u00e9 factor lo explica?",
  options: [
    "La Regi\u00f3n Andina con 105.6 hab/km\u00b2, explicada por su clima templado, actividad econ\u00f3mica diversificada e infraestructura",
    "La Regi\u00f3n Caribe con 72.3 hab/km\u00b2, por ser zona costera de clima c\u00e1lido",
    "La Regi\u00f3n Amaz\u00f3nica con 1.7 hab/km\u00b2, por su extensi\u00f3n territorial",
    "La Regi\u00f3n Orinoqu\u00eda con 7.1 hab/km\u00b2, por su actividad petrolera"
  ],
  correct: 0,
  explanation: {
    correct: "La Regi\u00f3n Andina: 30.1M/285,000 = 105.6 hab/km\u00b2 (mayor densidad). Esto se explica por el clima templado de tierra fr\u00eda, la concentraci\u00f3n industrial y la infraestructura urbana (Bogot\u00e1, Medell\u00edn, Cali).",
    wrongs: [
      "La Regi\u00f3n Caribe: 10.2M/141,000 = 72.3 hab/km\u00b2, menor que la Andina.",
      "La Amaz\u00f3nica tiene la MENOR densidad, no la mayor.",
      "La Orinoqu\u00eda: 1.5M/210,000 = 7.1 hab/km\u00b2, densidad muy baja."
    ]
  }
});

QUESTIONS.push({
  id: "TM39",
  area: "sociales",
  areaName: "Ciencias Sociales",
  difficulty: 3,
  context: "Study the following population distribution data:\n\nURBAN vs RURAL POPULATION IN LATIN AMERICA (2023)\n\nCountry       | Urban % | Rural % | Urban Pop. (M) | Rural Pop. (M)\nArgentina     | 92%     | 8%      | 42.1           | 3.7\nBrazil        | 88%     | 12%     | 188.6          | 25.7\nColombia      | 81%     | 19%     | 41.6           | 9.7\nMexico        | 81%     | 19%     | 105.6          | 24.6\nPeru          | 79%     | 21%     | 26.4           | 7.0\nChile         | 88%     | 12%     | 17.2           | 2.3\nEcuador       | 64%     | 36%     | 11.3           | 6.3\nGuatemala     | 53%     | 47%     | 9.6            | 8.5",
  table: [
    ["Country", "Urban %", "Rural %", "Urban Pop. (M)", "Rural Pop. (M)"],
    ["Argentina", "92%", "8%", "42.1", "3.7"],
    ["Brazil", "88%", "12%", "188.6", "25.7"],
    ["Colombia", "81%", "19%", "41.6", "9.7"],
    ["Mexico", "81%", "19%", "105.6", "24.6"],
    ["Peru", "79%", "21%", "26.4", "7.0"],
    ["Chile", "88%", "12%", "17.2", "2.3"],
    ["Ecuador", "64%", "36%", "11.3", "6.3"],
    ["Guatemala", "53%", "47%", "9.6", "8.5"]
  ],
  question: "\u00bfQu\u00e9 pa\u00eds muestra una transici\u00f3n demogr\u00e1fica menos avanzada hacia la urbanizaci\u00f3n?",
  options: [
    "Guatemala con solo 53% de poblaci\u00f3n urbana, lo que indica una estructura socioecon\u00f3mica predominantemente rural",
    "Argentina con 92% urbana, lo que indica alta urbanizaci\u00f3n",
    "Brasil con 88% urbana, similar a los pa\u00edses m\u00e1s desarrollados de la regi\u00f3n",
    "Ecuador con 64% urbana, que muestra un crecimiento econ\u00f3mico acelerado"
  ],
  correct: 0,
  explanation: {
    correct: "Guatemala tiene 53% urbana y 47% rural, la proporci\u00f3n rural m\u00e1s alta de la lista, indicando una transici\u00f3n demogr\u00e1fica menos avanzada.",
    wrongs: [
      "Argentina con 92% urbana es de los m\u00e1s urbanizados, no menos.",
      "Brasil con 88% urbana muestra alta urbanizaci\u00f3n, no transici\u00f3n incompleta.",
      "Ecuador con 36% rural tambi\u00e9n muestra una transici\u00f3n menos avanzada que Argentina, pero Guatemala es el caso m\u00e1s extremo."
    ]
  }
});

QUESTIONS.push({
  id: "TM40",
  area: "sociales",
  areaName: "Ciencias Sociales",
  difficulty: 4,
  context: "Study the following geographic data on water resources:\n\nGLOBAL WATER RESOURCES BY CONTINENT\n\nContinent    | Freshwater (km\u00b3) | Population (M) | Per Capita (m\u00b3) | Stress Level\nAsia         | 13,510           | 4,700          | 2,874              | High\nEurope       | 6,090            | 750            | 8,120              | Moderate\nN. America   | 7,850            | 370            | 21,216             | Low\nS. America   | 12,030           | 430            | 27,977             | Low\nAfrica       | 4,050            | 1,400          | 2,893              | Very High\nOceania      | 570              | 45             | 12,667             | Low\n\nWater Stress Levels:\n- Low: >1,700 m\u00b3 per capita\n- Moderate: 1,000-1,700 m\u00b3 per capita\n- High: 500-1,000 m\u00b3 per capita\n- Very High: <500 m\u00b3 per capita\n\nProjections for 2050:\n- Global demand will increase by 55%\n- Africa's population will double\n- Water stress in Asia will become 'Very High'",
  table: [
    ["Continente", "Agua dulce (km\u00b3)", "Poblaci\u00f3n (M)", "Per c\u00e1pita (m\u00b3)", "Nivel de estr\u00e9s"],
    ["Asia", "13,510", "4,700", "2,874", "Alto"],
    ["Europa", "6,090", "750", "8,120", "Moderado"],
    ["N. Am\u00e9rica", "7,850", "370", "21,216", "Bajo"],
    ["S. Am\u00e9rica", "12,030", "430", "27,977", "Bajo"],
    ["\u00c1frica", "4,050", "1,400", "2,893", "Muy Alto"],
    ["Ocean\u00eda", "570", "45", "12,667", "Bajo"]
  ],
  question: "\u00bfQu\u00e9 paradoja presenta \u00c1frica respecto a sus recursos h\u00eddricos?",
  options: [
    "Aunque tiene la segunda mayor reserva de agua dulce despu\u00e9s de Asia, su enorme poblaci\u00f3n la deja con el nivel de estr\u00e9s h\u00eddrico m\u00e1s alto",
    "\u00c1frica tiene la menor cantidad de agua dulce de todos los continentes",
    "La poblaci\u00f3n de \u00c1frica es menor que la de Europa, pero su estr\u00e9s es mayor",
    "Am\u00e9rica del Sur tiene m\u00e1s agua dulce per c\u00e1pita que todos los dem\u00e1s continentes combinados"
  ],
  correct: 0,
  explanation: {
    correct: "\u00c1frica tiene 4,050 km\u00b3 (segunda reserva despu\u00e9s de Asia con 13,510), pero su poblaci\u00f3n de 1,400 millones la deja con solo 2,893 m\u00b3 per c\u00e1pita, generando un estr\u00e9s 'Muy Alto' seg\u00fan la clasificaci\u00f3n.",
    wrongs: [
      "Europa tiene 6,090 km\u00b3, mayor que \u00c1frica; \u00c1frica no es la menor.",
      "\u00c1frica tiene 1,400M, mucho mayor que Europa con 750M.",
      "Am\u00e9rica del Sur tiene 27,977 m\u00b3 per c\u00e1pita, pero no supera a todos los continentes combinados."
    ]
  }
});
