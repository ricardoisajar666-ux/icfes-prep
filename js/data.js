const QUESTIONS = [
  // ===== LECTURA CRÍTICA =====
  {
    id: 'LC01',
    area: 'lectura',
    areaName: 'Lectura Cr\u00edtica',
    difficulty: 'media',
    context: `"El conocimiento no consiste en una serie de teor\u00edas autoconsistentes que tiende a converger en una perspectiva ideal; no consiste en un acercamiento gradual hacia la verdad. Por el contrario, el conocimiento es un oc\u00e9ano, siempre en aumento, de alternativas incompatibles entre s\u00ed (y tal vez inconmensurables); toda teor\u00eda particular, todo cuento de hadas, todo mito, forman parte del conjunto que obliga al resto a una articulaci\u00f3n mayor, y todos ellos contribuyen, por medio de este proceso competitivo, al desarrollo de nuestro conocimiento."`,
    question: `Seg\u00fan el texto, el conocimiento se caracteriza por ser:`,
    options: ['Un proceso que se acerca progresivamente a una verdad absoluta', 'Un conjunto de teor\u00edas que convergen en una \u00fanica explicaci\u00f3n', 'Un oc\u00e9ano de alternativas diversas que compiten y enriquecen', 'Una serie de mitos y cuentos sin valor cient\u00edfico'],
    correct: 2,
    explanation: {
      correct: 'El autor describe el conocimiento como "un oc\u00e9ano, siempre en aumento, de alternativas incompatibles entre s\u00ed", donde diferentes perspectivas (teor\u00edas, mitos, cuentos de hadas) contribuyen al desarrollo del conocimiento mediante un proceso competitivo. La clave est\u00e1 en que no hay una sola verdad ni una convergencia hacia un ideal.',
      wrongs: [
        'El texto expl\u00edcitamente niega esta idea: dice que NO consiste en "un acercamiento gradual hacia la verdad"',
        'El texto dice lo contrario: las teor\u00edas son "alternativas incompatibles entre s\u00ed", no convergentes',
        'Opci\u00f3n correcta'
      ]
    }
  },
  {
    id: 'LC02',
    area: 'lectura',
    areaName: 'Lectura Cr\u00edtica',
    difficulty: 'facil',
    context: `"La publicidad en redes sociales ha transformado la manera en que las empresas se comunican con sus consumidores. Antes, las compa\u00f1\u00edas depend\u00edan de medios masivos como la televisi\u00f3n y la radio para llegar a sus audiencias. Hoy, los algoritmos permiten segmentar mensajes publicitarios de acuerdo con los intereses y comportamientos de cada usuario."`,
    question: `Seg\u00fan el texto, \u00bfcu\u00e1l es la principal diferencia entre la publicidad tradicional y la publicidad en redes sociales?`,
    options: ['La publicidad tradicional era m\u00e1s efectiva que la digital', 'Las redes sociales permiten segmentar mensajes seg\u00fan intereses', 'La televisi\u00f3n ya no se usa para publicidad', 'Los algoritmos solo se usan en radio'],
    correct: 1,
    explanation: {
      correct: 'El texto establece claramente que la transformaci\u00f3n clave es que "los algoritmos permiten segmentar mensajes publicitarios de acuerdo con los intereses y comportamientos de cada usuario", algo que no era posible con los medios masivos tradicionales.',
      wrongs: [
        'El texto no compara la efectividad, solo describe la transformaci\u00f3n',
        'Opci\u00f3n correcta',
        'El texto no afirma que la televisi\u00f3n ya no se use',
        'Los algoritmos se mencionan en el contexto de redes sociales, no de radio'
      ]
    }
  },
  {
    id: 'LC03',
    area: 'lectura',
    areaName: 'Lectura Cr\u00edtica',
    difficulty: 'media',
    context: `"Estudio reciente: El 78% de los estudiantes que dedican al menos 2 horas diarias a la lectura obtienen puntajes superiores al promedio en pruebas de comprensi\u00f3n lectora. Sin embargo, solo el 23% de los estudiantes encuestados afirm\u00f3 leer por placer fuera del \u00e1mbito acad\u00e9mico."`,
    question: `\u00bfCu\u00e1l de las siguientes afirmaciones se puede inferir del texto?`,
    options: ['El 78% de los estudiantes lee 2 horas diarias', 'Existe una brecha entre la lectura acad\u00e9mica y la lectura por placer', 'El 23% de los estudiantes obtiene puntajes superiores', 'Leer por placer no influye en los resultados acad\u00e9micos'],
    correct: 1,
    explanation: {
      correct: 'El texto contrasta el beneficio de leer (78% obtiene mejores puntajes) con el bajo porcentaje que lee por placer (23%), lo que permite inferir que hay una brecha entre lo que ser\u00eda beneficioso y lo que realmente hacen los estudiantes.',
      wrongs: [
        'El texto dice que el 78% obtiene puntajes superiores, no que lea 2 horas diarias',
        'Opci\u00f3n correcta',
        'El 23% lee por placer, no obtiene puntajes superiores',
        'El texto no establece esta relaci\u00f3n causal'
      ]
    }
  },
  {
    id: 'LC04',
    area: 'lectura',
    areaName: 'Lectura Cr\u00edtica',
    difficulty: 'dificil',
    context: `"Algunos sostienen que la narrativa de la identidad nacional colombiana ha sido construida desde centros de poder que han silenciado sistem\u00e1ticamente las voces de las comunidades afrocolombianas e ind\u00edgenas. Esta visi\u00f3n homogeneizante desconoce la pluralidad cultural que caracteriza al pa\u00eds."`,
    question: `La expresi\u00f3n "visi\u00f3n homogeneizante" en el texto se refiere a:`,
    options: ['La diversidad cultural de Colombia', 'Una perspectiva que unifica y borra diferencias culturales', 'El reconocimiento de las comunidades ind\u00edgenas', 'La construcci\u00f3n de centros de poder'],
    correct: 1,
    explanation: {
      correct: 'El contexto indica que se ha "silenciado sistem\u00e1ticamente las voces" de minor\u00edas, y que esta visi\u00f3n "desconoce la pluralidad cultural". Por lo tanto, "homogeneizante" se refiere a una perspectiva que impone una identidad \u00fanica ignorando la diversidad.',
      wrongs: [
        'La visi\u00f3n homogeneizante es lo opuesto a la diversidad cultural',
        'Opci\u00f3n correcta',
        'El texto critica que no se reconozca adecuadamente a estas comunidades',
        'Los centros de poder son los que construyen esa visi\u00f3n, no la visi\u00f3n misma'
      ]
    }
  },
  {
    id: 'LC05',
    area: 'lectura',
    areaName: 'Lectura Cr\u00edtica',
    difficulty: 'facil',
    context: `"El calentamiento global es uno de los mayores desaf\u00edos de nuestro tiempo. Seg\u00fan el IPCC, las actividades humanas han sido la causa principal del aumento de temperatura observado desde mediados del siglo XX."`,
    question: `Seg\u00fan el texto, \u00bfcu\u00e1l es la causa principal del calentamiento global?`,
    options: ['Los cambios naturales del clima', 'Las actividades humanas', 'El aumento de la temperatura', 'Las mediciones del IPCC'],
    correct: 1,
    explanation: {
      correct: 'El texto afirma directamente que "las actividades humanas han sido la causa principal del aumento de temperatura observado desde mediados del siglo XX".',
      wrongs: [
        'El texto atribuye la causa a actividades humanas, no a cambios naturales',
        'Opci\u00f3n correcta',
        'El aumento de temperatura es el efecto, no la causa',
        'El IPCC es la entidad que reporta, no la causa del fen\u00f3meno'
      ]
    }
  },
  {
    id: 'LC06',
    area: 'lectura',
    areaName: 'Lectura Cr\u00edtica',
    difficulty: 'dificil',
    context: `"Una paradoja de la democracia contempor\u00e1nea es que, mientras m\u00e1s personas tienen acceso a la informaci\u00f3n gracias a internet, m\u00e1s dif\u00edcil parece lograr acuerdos sobre hechos b\u00e1sicos compartidos. La fragmentaci\u00f3n de las fuentes de informaci\u00f3n ha creado 'burbujas epist\u00e9micas' donde grupos enteros operan con premisas factuales radicalmente distintas."`,
    question: `El t\u00e9rmino "burbujas epist\u00e9micas" en el texto hace referencia a:`,
    options: ['El acceso igualitario a la informaci\u00f3n', 'Comunidades que comparten las mismas bases de conocimiento', 'Espacios donde se aceptan diferentes tipos de conocimiento', 'Grupos aislados con premisas factuales distintas'],
    correct: 3,
    explanation: {
      correct: 'El texto dice que las burbujas epist\u00e9micas son espacios donde "grupos enteros operan con premisas factuales radicalmente distintas". Es decir, son comunidades informativas aisladas con sus propias versiones de los hechos.',
      wrongs: [
        'El texto habla de fragmentaci\u00f3n, no de acceso igualitario',
        'Las burbujas implican aislamiento, no compartir bases comunes',
        'No se trata de aceptar diferentes tipos, sino de operar con premisas distintas sin contacto entre burbujas',
        'Opci\u00f3n correcta'
      ]
    }
  },
  {
    id: 'LC07',
    area: 'lectura',
    areaName: 'Lectura Cr\u00edtica',
    difficulty: 'media',
    context: `"El autor afirma que 'la poes\u00eda no es un adorno de la sociedad, sino una forma de conocimiento que revela dimensiones de la experiencia humana que otros lenguajes no pueden expresar'."`,
    question: `\u00bfCu\u00e1l es la idea principal del autor sobre la poes\u00eda?`,
    options: ['Es un adorno social sin importancia', 'Es un lenguaje inferior a otros', 'Es una forma de conocimiento \u00fanica e irreemplazable', 'Solo expresa emociones superficiales'],
    correct: 2,
    explanation: {
      correct: 'El autor dice expl\u00edcitamente que la poes\u00eda "no es un adorno" sino "una forma de conocimiento" que revela dimensiones "que otros lenguajes no pueden expresar", destacando su car\u00e1cter \u00fanico e irreemplazable.',
      wrongs: [
        'El autor niega expl\u00edcitamente que sea un "adorno de la sociedad"',
        'El texto dice que revela lo que otros lenguajes NO pueden, posicion\u00e1ndola como superior en ciertos aspectos',
        'Opci\u00f3n correcta',
        'La descripci\u00f3n va m\u00e1s all\u00e1 de lo emocional, hablando de "dimensiones de la experiencia humana"'
      ]
    }
  },
  {
    id: 'LC08',
    area: 'lectura',
    areaName: 'Lectura Cr\u00edtica',
    difficulty: 'facil',
    context: `"El reciclaje en Colombia ha aumentado un 15% en los \u00faltimos 5 a\u00f1os. Sin embargo, a\u00fan solo el 17% de los residuos s\u00f3lidos se recicla adecuadamente, mientras que el resto termina en rellenos sanitarios o en fuentes h\u00eddricas."`,
    question: `\u00bfCu\u00e1l es la situaci\u00f3n del reciclaje en Colombia seg\u00fan el texto?`,
    options: ['Ha mejorado pero a\u00fan es insuficiente', 'Ya es un modelo ejemplar', 'Ha disminuido en los \u00faltimos a\u00f1os', 'Todo se recicla adecuadamente'],
    correct: 0,
    explanation: {
      correct: 'El texto presenta un avance (aumento del 15%) pero tambi\u00e9n muestra que el porcentaje de reciclaje adecuado sigue siendo bajo (17%), indicando que aunque ha mejorado, a\u00fan hay un largo camino por recorrer.',
      wrongs: [
        'Opci\u00f3n correcta',
        'Con solo 17% de reciclaje adecuado, no se puede considerar ejemplar',
        'El texto reporta un aumento, no una disminuci\u00f3n',
        'El 83% restante no se recicla adecuadamente'
      ]
    }
  },

  // ===== MATEMÁTICAS =====
  {
    id: 'MT01',
    area: 'matematicas',
    areaName: 'Matem\u00e1ticas',
    difficulty: 'facil',
    table: {
      headers: ['Art\u00edculo', 'Precio normal', 'Descuento'],
      rows: [
        ['Camiseta', '$45.000', '20%'],
        ['Pantal\u00f3n', '$80.000', '25%'],
        ['Zapatos', '$120.000', '15%'],
        ['Chaqueta', '$150.000', '30%']
      ],
      caption: 'Precios y descuentos en una tienda de Medell\u00edn'
    },
    context: 'En una tienda de ropa en Medell\u00edn se ofrecen los descuentos mostrados en la tabla.',
    question: 'Un cliente compra una camiseta y un pantal\u00f3n. \u00bfCu\u00e1nto paga en total?',
    svg: `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" style="max-width:400px">
  <text x="200" y="20" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Precio normal vs. con descuento</text>
  <line x1="50" y1="180" x2="380" y2="180" stroke="#333" stroke-width="1.5"/>
  <line x1="50" y1="180" x2="50" y2="20" stroke="#333" stroke-width="1.5"/>
  <text x="50" y="195" text-anchor="middle" font-size="11" fill="#333">Camiseta</text>
  <text x="130" y="195" text-anchor="middle" font-size="11" fill="#333">Pantal\u00f3n</text>
  <text x="210" y="195" text-anchor="middle" font-size="11" fill="#333">Zapatos</text>
  <text x="290" y="195" text-anchor="middle" font-size="11" fill="#333">Chaqueta</text>
  <rect x="60" y="60" width="30" height="120" fill="#2196F3" opacity="0.8" rx="2"/>
  <rect x="100" y="80" width="30" height="100" fill="#2196F3" opacity="0.8" rx="2"/>
  <rect x="180" y="20" width="30" height="160" fill="#2196F3" opacity="0.8" rx="2"/>
  <rect x="220" y="0" width="30" height="180" fill="#2196F3" opacity="0.8" rx="2"/>
  <rect x="60" y="96" width="30" height="84" fill="#4CAF50" opacity="0.8" rx="2"/>
  <rect x="100" y="100" width="30" height="80" fill="#4CAF50" opacity="0.8" rx="2"/>
  <rect x="180" y="44" width="30" height="136" fill="#4CAF50" opacity="0.8" rx="2"/>
  <rect x="220" y="30" width="30" height="150" fill="#4CAF50" opacity="0.8" rx="2"/>
  <text x="75" y="56" text-anchor="middle" font-size="9" fill="#fff">45</text>
  <text x="115" y="76" text-anchor="middle" font-size="9" fill="#fff">80</text>
  <text x="195" y="16" text-anchor="middle" font-size="9" fill="#fff">120</text>
  <text x="235" y="174" text-anchor="middle" font-size="9" fill="#fff">150</text>
  <text x="75" y="92" text-anchor="middle" font-size="9" fill="#fff">36</text>
  <text x="115" y="96" text-anchor="middle" font-size="9" fill="#fff">60</text>
  <text x="195" y="40" text-anchor="middle" font-size="9" fill="#fff">102</text>
  <text x="235" y="26" text-anchor="middle" font-size="9" fill="#fff">105</text>
  <rect x="310" y="18" width="12" height="12" fill="#2196F3" opacity="0.8"/>
  <text x="326" y="28" font-size="11" fill="#333">Normal</text>
  <rect x="310" y="36" width="12" height="12" fill="#4CAF50" opacity="0.8"/>
  <text x="326" y="46" font-size="11" fill="#333">Desc ($ miles)</text>
</svg>`,
    options: ['$96.000', '$102.500', '$112.000', '$125.000'],
    correct: 0,
    explanation: {
      correct: 'Camiseta con descuento: $45.000 x 0,80 = $36.000. Pantal\u00f3n con descuento: $80.000 x 0,75 = $60.000. Total: $36.000 + $60.000 = $96.000.',
      wrongs: [
        'Probablemente sumaste los precios sin descuento: $45.000 + $80.000 = $125.000',
        'Opci\u00f3n correcta',
        'Calculaste mal alg\u00fan descuento: revisa camiseta al 80% y pantal\u00f3n al 75%',
        'Aplicaste los descuentos al rev\u00e9s o sumaste incorrectamente'
      ]
    }
  },
  {
    id: 'MT02',
    area: 'matematicas',
    areaName: 'Matem\u00e1ticas',
    difficulty: 'media',
    question: `Un jardinero quiere construir un jard\u00edn rectangular en un parque de Bogot\u00e1. El largo ser\u00e1 el triple del ancho y dispone de 48 metros de cerca. \u00bfCu\u00e1les ser\u00e1n las dimensiones del jard\u00edn?`,
    options: ['6 m x 18 m', '8 m x 24 m', '12 m x 36 m', '10 m x 30 m'],
    correct: 0,
    explanation: {
      correct: 'Sea x = ancho, largo = 3x. Per\u00edmetro = 2(x + 3x) = 8x = 48, entonces x = 6. Dimensiones: 6 m x 18 m.',
      wrongs: [
        'Opci\u00f3n correcta',
        'Si ancho = 8, per\u00edmetro = 2(8+24) = 64, no 48',
        'Si ancho = 12, per\u00edmetro = 2(12+36) = 96, no 48',
        'Si ancho = 10, per\u00edmetro = 2(10+30) = 80, no 48'
      ]
    }
  },
  {
    id: 'MT03',
    area: 'matematicas',
    areaName: 'Matem\u00e1ticas',
    difficulty: 'media',
    table: {
      headers: ['Ciudad', 'Enero', 'Febrero', 'Marzo'],
      rows: [
        ['Bogot\u00e1', '14\u00b0C', '15\u00b0C', '16\u00b0C'],
        ['Medell\u00edn', '22\u00b0C', '23\u00b0C', '22\u00b0C'],
        ['Cali', '25\u00b0C', '26\u00b0C', '25\u00b0C'],
        ['Barranquilla', '28\u00b0C', '29\u00b0C', '28\u00b0C']
      ],
      caption: 'Temperatura promedio mensual en cuatro ciudades colombianas'
    },
    context: 'La tabla muestra la temperatura promedio en cuatro ciudades durante el primer trimestre.',
    question: '\u00bfCu\u00e1l es la mediana de las temperaturas registradas en marzo?',
    svg: `<svg viewBox="0 0 420 220" xmlns="http://www.w3.org/2000/svg" style="max-width:420px">
  <text x="210" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#333">Temperatura promedio por ciudad</text>
  <line x1="50" y1="180" x2="380" y2="180" stroke="#333" stroke-width="1.5"/>
  <line x1="50" y1="180" x2="50" y2="30" stroke="#333" stroke-width="1.5"/>
  <text x="110" y="195" text-anchor="middle" font-size="11" fill="#333">Enero</text>
  <text x="210" y="195" text-anchor="middle" font-size="11" fill="#333">Febrero</text>
  <text x="310" y="195" text-anchor="middle" font-size="11" fill="#333">Marzo</text>
  <text x="40" y="180" text-anchor="end" font-size="10" fill="#666">0</text>
  <text x="40" y="130" text-anchor="end" font-size="10" fill="#666">10</text>
  <text x="40" y="80" text-anchor="end" font-size="10" fill="#666">20</text>
  <text x="40" y="30" text-anchor="end" font-size="10" fill="#666">30</text>
  <line x1="50" y1="130" x2="380" y2="130" stroke="#ccc" stroke-width="0.5" stroke-dasharray="4"/>
  <line x1="50" y1="80" x2="380" y2="80" stroke="#ccc" stroke-width="0.5" stroke-dasharray="4"/>
  <line x1="50" y1="30" x2="380" y2="30" stroke="#ccc" stroke-width="0.5" stroke-dasharray="4"/>
  <polyline points="110,170 210,165 310,160" fill="none" stroke="#E91E63" stroke-width="2.5"/>
  <polyline points="110,90 210,85 310,90" fill="none" stroke="#2196F3" stroke-width="2.5"/>
  <polyline points="110,60 210,50 310,60" fill="none" stroke="#FF9800" stroke-width="2.5"/>
  <polyline points="110,30 210,20 310,30" fill="none" stroke="#4CAF50" stroke-width="2.5"/>
  <circle cx="110" cy="170" r="4" fill="#E91E63"/><circle cx="210" cy="165" r="4" fill="#E91E63"/><circle cx="310" cy="160" r="4" fill="#E91E63"/>
  <circle cx="110" cy="90" r="4" fill="#2196F3"/><circle cx="210" cy="85" r="4" fill="#2196F3"/><circle cx="310" cy="90" r="4" fill="#2196F3"/>
  <circle cx="110" cy="60" r="4" fill="#FF9800"/><circle cx="210" cy="50" r="4" fill="#FF9800"/><circle cx="310" cy="60" r="4" fill="#FF9800"/>
  <circle cx="110" cy="30" r="4" fill="#4CAF50"/><circle cx="210" cy="20" r="4" fill="#4CAF50"/><circle cx="310" cy="30" r="4" fill="#4CAF50"/>
  <rect x="60" y="206" width="10" height="10" fill="#E91E63"/>
  <text x="73" y="215" font-size="10" fill="#333">Bogot\u00e1</text>
  <rect x="130" y="206" width="10" height="10" fill="#2196F3"/>
  <text x="143" y="215" font-size="10" fill="#333">Medell\u00edn</text>
  <rect x="210" y="206" width="10" height="10" fill="#FF9800"/>
  <text x="223" y="215" font-size="10" fill="#333">Cali</text>
  <rect x="260" y="206" width="10" height="10" fill="#4CAF50"/>
  <text x="273" y="215" font-size="10" fill="#333">Barranquilla</text>
</svg>`,
    options: ['22\u00b0C', '23,5\u00b0C', '24,5\u00b0C', '25\u00b0C'],
    correct: 1,
    explanation: {
      correct: 'Temperaturas de marzo ordenadas: 16, 22, 25, 28. Mediana = (22 + 25)/2 = 47/2 = 23,5\u00b0C.',
      wrongs: [
        'Esa es la temperatura de Medell\u00edn en marzo, no la mediana',
        'Opci\u00f3n correcta',
        'Calculaste el promedio en lugar de la mediana, o hiciste la suma incorrecta',
        'Esa es la temperatura de Cali en marzo'
      ]
    }
  },
  {
    id: 'MT04',
    area: 'matematicas',
    areaName: 'Matem\u00e1ticas',
    difficulty: 'dificil',
    context: `Una empresa de taxis en Bogot\u00e1 cobra $3.500 por el arranque (banderazo) m\u00e1s $2.200 por cada kil\u00f3metro recorrido.`,
    question: `Si un pasajero pag\u00f3 $24.700 por un viaje, \u00bfcu\u00e1ntos kil\u00f3metros recorri\u00f3?`,
    options: ['8,5 km', '9,6 km', '10,2 km', '11,2 km'],
    correct: 1,
    explanation: {
      correct: 'Ecuaci\u00f3n: 3.500 + 2.200x = 24.700 -> 2.200x = 21.200 -> x = 21.200/2.200 = 9,636... aprox. 9,6 km.',
      wrongs: [
        'Restaste mal: 24.700 - 3.500 = 21.200, luego dividiste por 2.500 en lugar de 2.200',
        'Opci\u00f3n correcta',
        'Sumaste en lugar de restar el banderazo',
        'Dividiste 24.700/2.200 sin restar el banderazo: 11,2 km'
      ]
    }
  },
  {
    id: 'MT05',
    area: 'matematicas',
    areaName: 'Matem\u00e1ticas',
    difficulty: 'facil',
    question: `En un colegio de Cali hay 800 estudiantes. Si el 45% son hombres, \u00bfcu\u00e1ntas mujeres hay?`,
    options: ['360', '440', '400', '355'],
    correct: 1,
    explanation: {
      correct: 'Hombres: 800 x 0,45 = 360. Mujeres: 800 - 360 = 440. Tambi\u00e9n: 55% de 800 = 800 x 0,55 = 440.',
      wrongs: [
        'Ese es el n\u00famero de hombres (45%), no de mujeres',
        'Opci\u00f3n correcta',
        'Calculaste el 50% en lugar del 55%',
        'Calculaste mal el porcentaje'
      ]
    }
  },
  {
    id: 'MT06',
    area: 'matematicas',
    areaName: 'Matem\u00e1ticas',
    difficulty: 'media',
    question: `Una escalera de 5 m de longitud se apoya contra una pared vertical. Si la base de la escalera est\u00e1 a 3 m de la pared, \u00bfqu\u00e9 altura alcanza la escalera?`,
    svg: `<svg viewBox="0 0 300 240" xmlns="http://www.w3.org/2000/svg" style="max-width:300px">
  <!-- Wall -->
  <rect x="200" y="10" width="12" height="210" fill="#BDBDBD" stroke="#757575" stroke-width="1"/>
  <!-- Ground -->
  <rect x="20" y="200" width="200" height="8" fill="#A5D6A7" stroke="#4CAF50" stroke-width="1"/>
  <!-- Ladder -->
  <line x1="60" y1="200" x2="200" y2="40" stroke="#FF9800" stroke-width="5" stroke-linecap="round"/>
  <!-- Right angle marker -->
  <polyline points="200,200 190,200 190,210" fill="none" stroke="#333" stroke-width="1"/>
  <!-- 3m label (horizontal) -->
  <line x1="60" y1="215" x2="200" y2="215" stroke="#666" stroke-width="0.8" stroke-dasharray="3"/>
  <text x="130" y="228" text-anchor="middle" font-size="13" fill="#E91E63" font-weight="bold">3 m</text>
  <!-- 5m label (ladder) -->
  <text x="115" y="115" transform="rotate(-65 110 115)" font-size="13" fill="#2196F3" font-weight="bold">5 m</text>
  <!-- h label (vertical) -->
  <line x1="210" y1="40" x2="210" y2="200" stroke="#666" stroke-width="0.8" stroke-dasharray="3"/>
  <text x="218" y="125" text-anchor="middle" font-size="14" fill="#4CAF50" font-weight="bold">h = ?</text>
  <!-- Floor -->
  <rect x="20" y="230" width="230" height="8" fill="#A5D6A7" stroke="#4CAF50" stroke-width="1"/>
</svg>`,
    options: ['3 m', '4 m', '5 m', '6 m'],
    correct: 1,
    explanation: {
      correct: 'Por Pit\u00e1goras: h\u00b2 + 3\u00b2 = 5\u00b2 -> h\u00b2 = 25 - 9 = 16 -> h = 4 m.',
      wrongs: [
        'Esa es la distancia de la base, no la altura',
        'Opci\u00f3n correcta',
        'Esa es la longitud de la escalera, no la altura',
        'Sumaste 5 + 3, cuando debes usar Pit\u00e1goras'
      ]
    }
  },
  {
    id: 'MT07',
    area: 'matematicas',
    areaName: 'Matem\u00e1ticas',
    difficulty: 'dificil',
    question: `En una bolsa hay 5 canicas rojas, 3 azules y 2 verdes. Se sacan dos canicas sin reemplazo. \u00bfCu\u00e1l es la probabilidad de que ambas sean del mismo color?`,
    options: ['14/45', '1/3', '19/45', '2/5'],
    correct: 0,
    explanation: {
      correct: 'P(ambas rojas) = (5/10)x(4/9) = 20/90. P(ambas azules) = (3/10)x(2/9) = 6/90. P(ambas verdes) = (2/10)x(1/9) = 2/90. Suma = 28/90 = 14/45.',
      wrongs: [
        'Opci\u00f3n correcta',
        'Calculaste solo la probabilidad de rojas o un c\u00e1lculo parcial',
        'Olvidaste incluir la probabilidad de ambas verdes y azules',
        'Calculaste con reemplazo en lugar de sin reemplazo'
      ]
    }
  },
  {
    id: 'MT08',
    area: 'matematicas',
    areaName: 'Matem\u00e1ticas',
    difficulty: 'facil',
    context: `Un agricultor en el Eje Cafetero siembra caf\u00e9. Cada \u00e1rbol produce 12 kg de caf\u00e9 al a\u00f1o y necesita 3 m\u00b2 de terreno.`,
    question: `Si el agricultor tiene un terreno de 600 m\u00b2, \u00bfcu\u00e1ntos kg de caf\u00e9 puede recolectar al a\u00f1o?`,
    options: ['1.800 kg', '2.000 kg', '2.400 kg', '1.200 kg'],
    correct: 2,
    explanation: {
      correct: '\u00c1rboles que caben: 600/3 = 200 \u00e1rboles. Producci\u00f3n: 200 x 12 = 2.400 kg.',
      wrongs: [
        'Dividiste 600/12 en lugar de 600/3 primero',
        'Calculaste 600 x 3 = 1.800 de forma incorrecta',
        'Opci\u00f3n correcta',
        'Multiplicaste 600 x 3 = 1.800, pero la pregunta es por kg'
      ]
    }
  },

  // ===== SOCIALES Y CIUDADANÍA =====
  {
    id: 'SC01',
    area: 'sociales',
    areaName: 'Sociales y Ciudadan\u00eda',
    difficulty: 'facil',
    question: `La Constituci\u00f3n Pol\u00edtica de Colombia de 1991 se caracteriza por ser:`,
    options: ['Una constituci\u00f3n centralista que elimina las regiones', 'Una constituci\u00f3n participativa que reconoce la diversidad \u00e9tnica y cultural', 'Una constituci\u00f3n que elimina la separaci\u00f3n de poderes', 'Una constituci\u00f3n que establece la religi\u00f3n oficial del Estado'],
    correct: 1,
    explanation: {
      correct: 'La Constituci\u00f3n de 1991 es conocida como una "Constituci\u00f3n participativa y pluralista". Reconoce la diversidad \u00e9tnica y cultural de la naci\u00f3n (art. 7), establece mecanismos de participaci\u00f3n ciudadana, y define a Colombia como un Estado Social de Derecho.',
      wrongs: [
        'La Constituci\u00f3n de 1991 descentraliz\u00f3 el poder y fortaleci\u00f3 las regiones (autonom\u00eda territorial)',
        'Opci\u00f3n correcta',
        'La Constituci\u00f3n mantiene la separaci\u00f3n de poderes (Ejecutivo, Legislativo, Judicial)',
        'Colombia es un Estado laico seg\u00fan la Constituci\u00f3n de 1991, no tiene religi\u00f3n oficial'
      ]
    }
  },
  {
    id: 'SC02',
    area: 'sociales',
    areaName: 'Sociales y Ciudadan\u00eda',
    difficulty: 'media',
    context: `"Un ciudadano se encontraba inconforme con el actual sistema de salud en Colombia y quer\u00eda promover una reforma a la Ley 100 de 1993."`,
    question: `\u00bfCu\u00e1l de los siguientes mecanismos de participaci\u00f3n ciudadana ser\u00eda el m\u00e1s adecuado para que este ciudadano proponga su reforma?`,
    options: ['El voto popular', 'La revocatoria del mandato', 'La iniciativa legislativa', 'El plebiscito'],
    correct: 2,
    explanation: {
      correct: 'La iniciativa legislativa es el mecanismo de participaci\u00f3n por el cual los ciudadanos pueden presentar proyectos de ley o de acto legislativo ante el Congreso. Es la herramienta adecuada para proponer una reforma a una ley existente.',
      wrongs: [
        'El voto sirve para elegir representantes, no para proponer leyes',
        'La revocatoria del mandato es para destituir funcionarios electos, no para proponer leyes',
        'Opci\u00f3n correcta',
        'El plebiscito es para que el pueblo se pronuncie sobre decisiones del Ejecutivo, no para proponer leyes nuevas'
      ]
    }
  },
  {
    id: 'SC03',
    area: 'sociales',
    areaName: 'Sociales y Ciudadan\u00eda',
    difficulty: 'dificil',
    question: `La Independencia de Colombia (1810-1819) fue impulsada principalmente por:`,
    options: ['La alianza con Espa\u00f1a para reformar el sistema colonial', 'Las ideas ilustradas, los conflictos en Espa\u00f1a y las desigualdades del sistema colonial', 'La intervenci\u00f3n directa de Estados Unidos', 'El deseo de establecer una monarqu\u00eda independiente'],
    correct: 1,
    explanation: {
      correct: 'La independencia fue un proceso multicausal. Las ideas ilustradas (libertad, igualdad), la crisis pol\u00edtica en Espa\u00f1a por la invasi\u00f3n napole\u00f3nica (1808), y las desigualdades del sistema colonial (exclusi\u00f3n de criollos, impuestos) fueron los principales factores que impulsaron el movimiento independentista.',
      wrongs: [
        'La independencia fue precisamente PARA independizarse de Espa\u00f1a, no para reformar el sistema colonial con ellos',
        'Opci\u00f3n correcta',
        'EE.UU. tuvo influencia ideol\u00f3gica pero no intervino directamente en la independencia colombiana',
        'El proyecto era republicano, no mon\u00e1rquico. La Gran Colombia se constituy\u00f3 como rep\u00fablica'
      ]
    }
  },
  {
    id: 'SC04',
    area: 'sociales',
    areaName: 'Sociales y Ciudadan\u00eda',
    difficulty: 'facil',
    question: `En Colombia, la rama del poder p\u00fablico encargada de administrar justicia es:`,
    options: ['La Rama Ejecutiva', 'La Rama Legislativa', 'La Rama Judicial', 'El Ministerio P\u00fablico'],
    correct: 2,
    explanation: {
      correct: 'La Rama Judicial es la encargada de administrar justicia en Colombia. Est\u00e1 compuesta por la Corte Suprema de Justicia, la Corte Constitucional, el Consejo de Estado, el Consejo Superior de la Judicatura y los juzgados y tribunales.',
      wrongs: [
        'La Rama Ejecutiva se encarga de administrar el Estado y ejecutar las leyes',
        'La Rama Legislativa (Congreso) se encarga de hacer las leyes',
        'Opci\u00f3n correcta',
        'El Ministerio P\u00fablico (Procuradur\u00eda) es un \u00f3rgano de control, no una rama del poder'
      ]
    }
  },
  {
    id: 'SC05',
    area: 'sociales',
    areaName: 'Sociales y Ciudadan\u00eda',
    difficulty: 'media',
    context: `"En las \u00faltimas d\u00e9cadas, Colombia ha experimentado un proceso de urbanizaci\u00f3n acelerada. Mientras que en 1950 solo el 38% de la poblaci\u00f3n viv\u00eda en \u00e1reas urbanas, para 2020 este porcentaje superaba el 80%."`,
    question: `Este proceso de urbanizaci\u00f3n acelerada ha generado como consecuencia:`,
    options: ['La disminuci\u00f3n de la poblaci\u00f3n rural', 'El aumento de la densidad poblacional en zonas urbanas con desaf\u00edos de infraestructura', 'La desaparici\u00f3n completa del sector agr\u00edcola', 'La migraci\u00f3n de ciudades a zonas rurales'],
    correct: 1,
    explanation: {
      correct: 'La urbanizaci\u00f3n acelerada implica que m\u00e1s personas viven en ciudades, lo que aumenta la densidad poblacional urbana. Esto genera desaf\u00edos como necesidades de vivienda, servicios p\u00fablicos, transporte y empleo que no siempre son cubiertos adecuadamente por la infraestructura existente.',
      wrongs: [
        'La poblaci\u00f3n rural disminuye en t\u00e9rminos relativos (porcentaje), pero puede mantenerse en t\u00e9rminos absolutos',
        'Opci\u00f3n correcta',
        'El sector agr\u00edcola sigue existiendo, aunque su participaci\u00f3n econ\u00f3mica relativa haya disminuido',
        'La migraci\u00f3n ha sido principalmente del campo a la ciudad, no al rev\u00e9s'
      ]
    }
  },
  {
    id: 'SC06',
    area: 'sociales',
    areaName: 'Sociales y Ciudadan\u00eda',
    difficulty: 'dificil',
    question: `El Frente Nacional (1958-1974) en Colombia fue un acuerdo pol\u00edtico entre liberales y conservadores que consisti\u00f3 en:`,
    options: ['La eliminaci\u00f3n total de los partidos pol\u00edticos tradicionales', 'La alternancia en el poder y distribuci\u00f3n equitativa de cargos p\u00fablicos entre ambos partidos', 'La unificaci\u00f3n de los dos partidos en uno solo', 'La prohibici\u00f3n de elecciones populares'],
    correct: 1,
    explanation: {
      correct: 'El Frente Nacional fue un acuerdo bipartidista donde liberales y conservadores se alternaban la presidencia cada 4 a\u00f1os y se distribu\u00edan equitativamente los cargos p\u00fablicos. Dur\u00f3 16 a\u00f1os (4 periodos presidenciales) y buscaba superar la violencia bipartidista.',
      wrongs: [
        'Los partidos mantuvieron su identidad; no fueron eliminados sino que hicieron un pacto de alternancia',
        'Opci\u00f3n correcta',
        'Cada partido mantuvo su estructura independiente; hubo alternancia, no fusi\u00f3n',
        'S\u00ed hubo elecciones, pero solo entre candidatos del Frente Nacional'
      ]
    }
  },
  {
    id: 'SC07',
    area: 'sociales',
    areaName: 'Sociales y Ciudadan\u00eda',
    difficulty: 'facil',
    question: `\u00bfCu\u00e1l de los siguientes es un deber fundamental de los ciudadanos colombianos seg\u00fan la Constituci\u00f3n?`,
    options: ['Votar en todas las elecciones (voto obligatorio)', 'Cumplir y respetar la Constituci\u00f3n y las leyes', 'Pertenecer a un partido pol\u00edtico', 'Pagar impuestos solo si se gana m\u00e1s del salario m\u00ednimo'],
    correct: 1,
    explanation: {
      correct: 'El art\u00edculo 95 de la Constituci\u00f3n establece como deber de la persona y del ciudadano "Respetar los derechos ajenos y no abusar de los propios" y "Cumplir la Constituci\u00f3n y las leyes". El voto en Colombia es obligatorio pero no forzado (hay sanciones por no votar), y el deber de pagar impuestos aplica seg\u00fan la capacidad econ\u00f3mica.',
      wrongs: [
        'En Colombia el voto es obligatorio pero hay consecuencias por no hacerlo; sin embargo, no es el \u00fanico deber fundamental',
        'Opci\u00f3n correcta',
        'Ning\u00fan ciudadano est\u00e1 obligado a pertenecer a un partido pol\u00edtico',
        'Todos los ciudadanos deben contribuir al financiamiento del Estado seg\u00fan su capacidad econ\u00f3mica'
      ]
    }
  },
  {
    id: 'SC08',
    area: 'sociales',
    areaName: 'Sociales y Ciudadan\u00eda',
    difficulty: 'media',
    context: `"Colombia es un pa\u00eds megadiverso: posee aproximadamente el 10% de la biodiversidad del planeta en menos del 1% de la superficie terrestre. Esta riqueza natural enfrenta amenazas como la deforestaci\u00f3n, la miner\u00eda ilegal y el cambio clim\u00e1tico."`,
    question: `Seg\u00fan el texto, la principal amenaza para la biodiversidad colombiana es:`,
    options: ['La falta de especies nativas', 'M\u00faltiples factores como deforestaci\u00f3n, miner\u00eda ilegal y cambio clim\u00e1tico', 'El alto porcentaje de biodiversidad', 'La peque\u00f1a superficie del territorio'],
    correct: 1,
    explanation: {
      correct: 'El texto menciona expl\u00edcitamente que la biodiversidad "enfrenta amenazas como la deforestaci\u00f3n, la miner\u00eda ilegal y el cambio clim\u00e1tico". Son m\u00faltiples factores los que amenazan la riqueza natural del pa\u00eds.',
      wrongs: [
        'Colombia tiene abundancia de especies nativas; eso no es una amenaza',
        'Opci\u00f3n correcta',
        'La alta biodiversidad es una ventaja, no una amenaza',
        'El tama\u00f1o del territorio no es una amenaza en s\u00ed mismo'
      ]
    }
  },

  // ===== CIENCIAS NATURALES =====
  {
    id: 'CN01',
    area: 'ciencias',
    areaName: 'Ciencias Naturales',
    difficulty: 'facil',
    question: `\u00bfCu\u00e1l de los siguientes es un ejemplo de un cambio qu\u00edmico de la materia?`,
    options: ['La evaporaci\u00f3n del agua', 'La combusti\u00f3n de la madera', 'La disoluci\u00f3n de sal en agua', 'La congelaci\u00f3n del agua'],
    correct: 1,
    explanation: {
      correct: 'La combusti\u00f3n de la madera es un cambio qu\u00edmico porque transforma la materia en nuevas sustancias (cenizas, CO\u2082, vapor de agua) con propiedades diferentes. Se produce una reacci\u00f3n qu\u00edmica donde se rompen y forman enlaces.',
      wrongs: [
        'La evaporaci\u00f3n es un cambio f\u00edsico: el agua cambia de estado pero sigue siendo H\u2082O',
        'Opci\u00f3n correcta',
        'La disoluci\u00f3n es un proceso f\u00edsico: la sal se separa en iones pero no se transforma en otra sustancia',
        'La congelaci\u00f3n es un cambio f\u00edsico: el agua pasa a s\u00f3lido pero sigue siendo H\u2082O'
      ]
    }
  },
  {
    id: 'CN02',
    area: 'ciencias',
    areaName: 'Ciencias Naturales',
    difficulty: 'media',
    context: `"En un ecosistema, la poblaci\u00f3n de liebres y la poblaci\u00f3n de linces muestran una relaci\u00f3n c\u00edclica. Cuando aumentan las liebres, los linces tienen m\u00e1s alimento y su poblaci\u00f3n crece. Al aumentar los linces, disminuyen las liebres, lo que luego reduce la poblaci\u00f3n de linces."`,
    question: `Esta relaci\u00f3n entre liebres y linces es un ejemplo de:`,
    options: ['Competencia intraespec\u00edfica', 'Mutualismo', 'Depredaci\u00f3n', 'Comensalismo'],
    correct: 2,
    explanation: {
      correct: 'La relaci\u00f3n descrita es de depredaci\u00f3n: el lince (depredador) se alimenta de la liebre (presa). La din\u00e1mica poblacional c\u00edclica entre depredador y presa es cl\u00e1sica en ecolog\u00eda y fue descrita por las ecuaciones de Lotka-Volterra.',
      wrongs: [
        'La competencia intraespec\u00edfica ocurre entre individuos de la misma especie, no entre especies diferentes',
        'El mutualismo beneficia a ambas especies, pero aqu\u00ed el lince se beneficia y la liebre se perjudica',
        'Opci\u00f3n correcta',
        'El comensalismo beneficia a una especie sin afectar a la otra, pero aqu\u00ed la liebre claramente se ve afectada'
      ]
    }
  },
  {
    id: 'CN03',
    area: 'ciencias',
    areaName: 'Ciencias Naturales',
    difficulty: 'dificil',
    question: `Si un objeto tiene una masa de 10 kg y se encuentra a una altura de 5 metros sobre el suelo, \u00bfcu\u00e1l es su energ\u00eda potencial gravitacional? (Considere g = 10 m/s\u00b2)`,
    options: ['50 J', '100 J', '500 J', '250 J'],
    correct: 2,
    explanation: {
      correct: 'La energ\u00eda potencial gravitacional se calcula con la f\u00f3rmula: Ep = m \u00d7 g \u00d7 h. Ep = 10 kg \u00d7 10 m/s\u00b2 \u00d7 5 m = 500 J (Joules).',
      wrongs: [
        'Multiplicaste solo masa por altura, sin incluir gravedad (10 \u00d7 5 = 50)',
        'Multiplicaste masa por gravedad, pero no por altura (10 \u00d7 10 = 100)',
        'Opci\u00f3n correcta',
        'Calculaste (10 \u00d7 10 \u00d7 5)/2 = 250, pero no se divide entre 2'
      ]
    }
  },
  {
    id: 'CN04',
    area: 'ciencias',
    areaName: 'Ciencias Naturales',
    difficulty: 'facil',
    question: `La fotos\u00edntesis es el proceso mediante el cual las plantas producen su alimento. \u00bfCu\u00e1les son los reactivos (insumos) principales de la fotos\u00edntesis?`,
    options: ['Ox\u00edgeno y glucosa', 'Agua y di\u00f3xido de carbono', 'Nitr\u00f3geno y ox\u00edgeno', 'Luz solar y prote\u00ednas'],
    correct: 1,
    explanation: {
      correct: 'La fotos\u00edntesis utiliza di\u00f3xido de carbono (CO\u2082) y agua (H\u2082O) como reactivos, y con la energ\u00eda de la luz solar produce glucosa (C\u2086H\u2081\u2082O\u2086) y ox\u00edgeno (O\u2082). La ecuaci\u00f3n es: 6CO\u2082 + 6H\u2082O \u2192 C\u2086H\u2081\u2082O\u2086 + 6O\u2082.',
      wrongs: [
        'El ox\u00edgeno es un producto de la fotos\u00edntesis, no un reactivo',
        'Opci\u00f3n correcta',
        'El nitr\u00f3geno no es un reactivo directo de la fotos\u00edntesis',
        'La luz solar es una fuente de energ\u00eda, no un reactivo; las prote\u00ednas no son reactivos de la fotos\u00edntesis'
      ]
    }
  },
  {
    id: 'CN05',
    area: 'ciencias',
    areaName: 'Ciencias Naturales',
    difficulty: 'dificil',
    context: `"La masa at\u00f3mica del carbono es 12 u y la del ox\u00edgeno es 16 u."`,
    question: `\u00bfCu\u00e1l es la masa molecular del di\u00f3xido de carbono (CO\u2082)?`,
    options: ['28 u', '44 u', '32 u', '40 u'],
    correct: 1,
    explanation: {
      correct: 'La mol\u00e9cula de CO\u2082 tiene 1 \u00e1tomo de carbono (12 u) y 2 \u00e1tomos de ox\u00edgeno (2 \u00d7 16 u = 32 u). Masa molecular = 12 u + 32 u = 44 u.',
      wrongs: [
        'Sumaste un carbono y un ox\u00edgeno (12 + 16 = 28), pero el CO\u2082 tiene dos ox\u00edgenos',
        'Opci\u00f3n correcta',
        'Calculaste solo la masa de dos ox\u00edgenos (2 \u00d7 16 = 32), sin incluir el carbono',
        'Sumaste 12 + 16 + 12 como si fueran dos carbonos y un ox\u00edgeno'
      ]
    }
  },
  {
    id: 'CN06',
    area: 'ciencias',
    areaName: 'Ciencias Naturales',
    difficulty: 'media',
    context: `"En un laboratorio, un estudiante mezcla un \u00e1cido (HCl) con una base (NaOH) y observa que la temperatura de la soluci\u00f3n aumenta."`,
    question: `Este aumento de temperatura indica que la reacci\u00f3n es:`,
    options: ['Endot\u00e9rmica', 'Exot\u00e9rmica', 'Catal\u00edtica', 'Irreversible'],
    correct: 1,
    explanation: {
      correct: 'Una reacci\u00f3n exot\u00e9rmica libera energ\u00eda en forma de calor, lo que se evidencia por el aumento de temperatura. La neutralizaci\u00f3n entre un \u00e1cido y una base es t\u00edpicamente exot\u00e9rmica: HCl + NaOH \u2192 NaCl + H\u2082O + calor.',
      wrongs: [
        'Una reacci\u00f3n endot\u00e9rmica absorbe calor y la temperatura disminuir\u00eda',
        'Opci\u00f3n correcta',
        'La cat\u00e1lisis se refiere a la velocidad de reacci\u00f3n, no al intercambio de calor',
        'La reversibilidad no tiene relaci\u00f3n directa con el cambio de temperatura'
      ]
    }
  },
  {
    id: 'CN07',
    area: 'ciencias',
    areaName: 'Ciencias Naturales',
    difficulty: 'media',
    question: `\u00bfCu\u00e1l de los siguientes \u00f3rganos del cuerpo humano es responsable de filtrar la sangre y producir orina?`,
    options: ['El h\u00edgado', 'El p\u00e1ncreas', 'Los ri\u00f1ones', 'El coraz\u00f3n'],
    correct: 2,
    explanation: {
      correct: 'Los ri\u00f1ones son los \u00f3rganos del sistema excretor encargados de filtrar la sangre para eliminar desechos metab\u00f3licos (como la urea) y producir orina. Cada ri\u00f1\u00f3n contiene aproximadamente 1 mill\u00f3n de nefronas, las unidades funcionales de filtraci\u00f3n.',
      wrongs: [
        'El h\u00edgado se encarga de procesar nutrientes y desintoxicar, pero no produce orina',
        'El p\u00e1ncreas produce enzimas digestivas e insulina, pero no filtra sangre',
        'Opci\u00f3n correcta',
        'El coraz\u00f3n bombea sangre pero no la filtra'
      ]
    }
  },
  {
    id: 'CN08',
    area: 'ciencias',
    areaName: 'Ciencias Naturales',
    difficulty: 'facil',
    question: `La teor\u00eda celular establece que:`,
    options: ['Las c\u00e9lulas solo existen en organismos complejos', 'Todos los seres vivos est\u00e1n formados por una o m\u00e1s c\u00e9lulas', 'Las c\u00e9lulas surgen espont\u00e1neamente de la materia inerte', 'Solo los animales tienen c\u00e9lulas'],
    correct: 1,
    explanation: {
      correct: 'La teor\u00eda celular, uno de los fundamentos de la biolog\u00eda, establece que: (1) todos los seres vivos est\u00e1n formados por una o m\u00e1s c\u00e9lulas, (2) la c\u00e9lula es la unidad b\u00e1sica de la vida, y (3) toda c\u00e9lula procede de otra c\u00e9lula preexistente.',
      wrongs: [
        'Todos los seres vivos, desde bacterias hasta ballenas, est\u00e1n formados por c\u00e9lulas',
        'Opci\u00f3n correcta',
        'La generaci\u00f3n espont\u00e1nea fue refutada por Pasteur; las c\u00e9lulas provienen de c\u00e9lulas preexistentes',
        'Plantas, hongos, protozoos y bacterias tambi\u00e9n tienen c\u00e9lulas'
      ]
    }
  },

  // ===== INGLÉS - BLOQUE 1 (EN01-EN18) =====
  {
    id: 'EN01',
    area: 'ingles',
    areaName: 'Ingl\u00e9s',
    difficulty: 'facil',
    context: `Notice: "Wet floor. Caution!"`,
    question: `Where would you most likely see this notice?`,
    options: ['In a library reading room', 'In a recently cleaned restroom or hallway', 'In a parking lot', 'In a classroom during an exam'],
    correct: 1,
    explanation: {
      correct: '"Wet floor. Caution!" is a warning sign placed on floors that have just been cleaned or are slippery. It is commonly seen in restrooms, hallways, or entryways after mopping.',
      wrongs: ['Libraries have quiet and book-related notices', 'Opci\u00f3n correcta', 'Parking lots have traffic and parking-related signs', 'Classrooms have academic rules, not wet floor signs']
    }
  },
  {
    id: 'EN02',
    area: 'ingles',
    areaName: 'Ingl\u00e9s',
    difficulty: 'facil',
    context: `Notice: "Employees must wash hands before returning to work."`,
    question: `What is the purpose of this notice?`,
    options: ['To ask customers to wash their hands', 'To remind workers about hygiene practices', 'To announce a hand-washing competition', 'To close the business for cleaning'],
    correct: 1,
    explanation: {
      correct: 'The notice tells employees that they "must wash hands before returning to work." This is a hygiene requirement commonly found in food service or healthcare settings to ensure cleanliness and prevent contamination.',
      wrongs: ['The notice is directed at employees, not customers', 'Opci\u00f3n correcta', 'This is a requirement, not a competition', 'The business remains open; employees just need to wash hands']
    }
  },
  {
    id: 'EN03',
    area: 'ingles',
    areaName: 'Ingl\u00e9s',
    difficulty: 'media',
    context: `Read the following text:
"Bees are essential for our planet. About 75% of the crops we eat depend on pollination by bees. Unfortunately, bee populations have been declining due to pesticides, climate change, and habitat loss. Scientists say that if we do not protect bees, we may face a serious food crisis in the future."`,
    question: `According to the text, what is the main reason we should worry about the decline in bee populations?`,
    options: ['Bees produce honey that humans eat', 'Many crops depend on bees for pollination and food production', 'Bees are beautiful insects that should be protected', 'Pesticides are destroying all insects in nature'],
    correct: 1,
    explanation: {
      correct: 'The text states that "about 75% of the crops we eat depend on pollination by bees" and warns that without them "we may face a serious food crisis." This shows bees are essential for food production.',
      wrongs: ['Honey is a product of bees, but the text focuses on their role in crop pollination', 'Opci\u00f3n correcta', 'The text focuses on their ecological importance, not their appearance', 'Pesticides are mentioned as a cause of decline, but the concern is about crop production']
    }
  },
  {
    id: 'EN04',
    area: 'ingles',
    areaName: 'Ingl\u00e9s',
    difficulty: 'media',
    context: `Read the email:
"Hi Mark,
I'm writing to confirm our meeting on Friday at 2 PM. Please bring the sales report and the client feedback forms. If you need to reschedule, let me know before Wednesday.
Best regards,
Sarah"`,
    question: `What does Sarah ask Mark to bring to the meeting?`,
    options: ['Coffee and snacks', 'The sales report and client feedback forms', 'A list of new clients', 'His laptop and phone charger'],
    correct: 1,
    explanation: {
      correct: 'Sarah asks Mark to "bring the sales report and the client feedback forms." This is a direct request in a professional email confirming a meeting.',
      wrongs: ['Sarah does not mention food', 'Opci\u00f3n correcta', 'Sarah mentions client feedback forms, not a list of new clients', 'Sarah does not ask for electronic devices']
    }
  },
  {
    id: 'EN05',
    area: 'ingles',
    areaName: 'Ingl\u00e9s',
    difficulty: 'facil',
    context: `Sign in a store window: "Sale! All items 30% off. This weekend only."`,
    question: `What does this sign mean?`,
    options: ['The store is closed this weekend', 'All products have a discount of 30% for a limited time', 'Only 30 items are on sale', 'You must pay 30% more for all items'],
    correct: 1,
    explanation: {
      correct: '"Sale! All items 30% off. This weekend only" means everything in the store is discounted by 30% during the weekend. "30% off" means you pay 70% of the original price.',
      wrongs: ['The store is having a sale, it is open', 'Opci\u00f3n correcta', '"All items" means every product, not just 30 items', '"30% off" means a reduction, not an increase']
    }
  },
  {
    id: 'EN06',
    area: 'ingles',
    areaName: 'Ingl\u00e9s',
    difficulty: 'dificil',
    context: `Read the text:
"Urban gardening has gained popularity in many cities around the world. In spaces as small as balconies or rooftops, people grow vegetables, herbs, and even fruits. This practice not only provides fresh food but also helps reduce the 'urban heat island' effect by adding green spaces. Some experts argue that promoting urban agriculture could improve food security in densely populated areas, though others question its efficiency compared to traditional farming."`,
    question: `What is one environmental benefit of urban gardening mentioned in the text?`,
    options: ['It eliminates the need for traditional farming', 'It helps reduce the urban heat island effect', 'It guarantees food security for all city residents', 'It is more efficient than rural agriculture'],
    correct: 1,
    explanation: {
      correct: 'The text states that urban gardening "helps reduce the \'urban heat island\' effect by adding green spaces." This is a direct environmental benefit of introducing vegetation into city environments.',
      wrongs: ['The text says urban gardening "provides fresh food" but does not claim it eliminates traditional farming', 'Opci\u00f3n correcta', 'The text says some experts suggest it "could improve food security" but does not guarantee it', 'The text mentions that some question its efficiency compared to traditional farming']
    }
  },
  {
    id: 'EN07',
    area: 'ingles',
    areaName: 'Ingl\u00e9s',
    difficulty: 'media',
    context: `Read the advertisement:
"Learn Spanish in just 3 months! Our method is fast, fun, and effective. You will practice with native speakers every day. Small groups, personalized attention. Sign up now and get your first lesson free!"`,
    question: `What does the advertisement offer to new customers?`,
    options: ['A discount on the full course', 'One free lesson', 'A free trip to Spain', 'A certificate of completion'],
    correct: 1,
    explanation: {
      correct: 'The ad says "Sign up now and get your first lesson free!" This is a promotional offer to attract new students by giving them a free trial.',
      wrongs: ['The ad does not mention a discount', 'Opci\u00f3n correcta', 'The ad mentions practicing "with native speakers" but not a trip to Spain', 'A certificate is not mentioned in the advertisement']
    }
  },
  {
    id: 'EN08',
    area: 'ingles',
    areaName: 'Ingl\u00e9s',
    difficulty: 'dificil',
    context: `Read the text:
"Scientists have discovered a new species of frog in the rainforests of Ecuador. The frog, which is only two centimeters long, has a bright blue color that serves as a warning to predators. Unlike many other frogs, this species does not lay its eggs in water. Instead, it lays them on leaves, and the male guards them until they hatch. This discovery highlights how much we still have to learn about biodiversity in tropical ecosystems."`,
    question: `According to the text, what is unusual about the way this frog reproduces?`,
    options: ['It lays eggs in water like most frogs', 'It lays eggs on leaves and the male protects them', 'It gives birth to live young', 'It does not reproduce at all'],
    correct: 1,
    explanation: {
      correct: 'The text says "Unlike many other frogs, this species does not lay its eggs in water. Instead, it lays them on leaves, and the male guards them." This is presented as an unusual reproductive behavior.',
      wrongs: ['The text says this is UNLIKE many other frogs', 'Opci\u00f3n correcta', 'There is no mention of live birth', 'The text describes the frog\'s reproduction in detail']
    }
  },
  {
    id: 'EN09',
    area: 'ingles',
    areaName: 'Ingl\u00e9s',
    difficulty: 'media',
    context: `Read the text:
"The platypus is one of the strangest animals in the world. It has a bill like a duck, a tail like a beaver, and feet like an otter. It is one of the very few mammals that lay eggs instead of giving birth to live young. When scientists first saw a platypus, they thought it was a joke."`,
    question: `Why did scientists think the platypus was a joke when they first saw it?`,
    options: ['Because it was very small', 'Because it has features from different animals combined', 'Because it could not swim', 'Because it was extinct'],
    correct: 1,
    explanation: {
      correct: 'The platypus has "a bill like a duck, a tail like a beaver, and feet like an otter" \u2014 a combination of features from many different animals. This unusual mix made early scientists think it was a hoax or joke.',
      wrongs: ['Size is not mentioned as a reason for disbelief', 'Opci\u00f3n correcta', 'The text mentions it has otter-like feet, suggesting it can swim', 'The platypus was not extinct when discovered']
    }
  },
  {
    id: 'EN10',
    area: 'ingles',
    areaName: 'Ingl\u00e9s',
    difficulty: 'facil',
    context: `Sign on a door: "Push to open."`,
    question: `What should you do to open this door?`,
    options: ['Pull the door towards you', 'Apply force away from your body', 'Knock before entering', 'Slide the door sideways'],
    correct: 1,
    explanation: {
      correct: '"Push" means to apply force to something away from your body. "Push to open" means you need to push the door forward, not pull it.',
      wrongs: ['"Pull" is the opposite of "push"', 'Opci\u00f3n correcta', 'There is no instruction to knock', 'The sign does not mention sliding']
    }
  },
  {
    id: 'EN11',
    area: 'ingles',
    areaName: 'Ingl\u00e9s',
    difficulty: 'dificil',
    context: `Read the text:
"The term 'glass ceiling' refers to an invisible barrier that prevents women and minorities from reaching top positions in the workplace, regardless of their qualifications or achievements. Although many companies have policies promoting equality, studies show that women still represent less than 10% of CEOs in Fortune 500 companies. Critics argue that the glass ceiling persists due to unconscious bias and lack of mentorship opportunities for underrepresented groups."`,
    question: `What does the "glass ceiling" metaphor describe?`,
    options: ['A physical barrier made of glass in offices', 'An invisible obstacle that limits career advancement for certain groups', 'A policy that guarantees equal opportunities for everyone', 'The maximum salary a person can earn in a company'],
    correct: 1,
    explanation: {
      correct: 'The text defines the glass ceiling as "an invisible barrier that prevents women and minorities from reaching top positions." The metaphor describes an obstacle that is not officially recognized but exists in practice.',
      wrongs: ['"Glass ceiling" is a metaphor, not a literal glass barrier', 'Opci\u00f3n correcta', 'The text says policies exist but the barrier persists despite them', 'Salary caps are different from the glass ceiling concept']
    }
  },
  {
    id: 'EN12',
    area: 'ingles',
    areaName: 'Ingl\u00e9s',
    difficulty: 'media',
    context: `Read the instructions:
"To use the washing machine: 1. Sort your clothes by color. 2. Load the machine but do not overfill it. 3. Add detergent to the drawer. 4. Select the appropriate cycle. 5. Press the start button. Warning: Do not open the door while the machine is running."`,
    question: `What should you do before adding detergent?`,
    options: ['Open the door while the machine runs', 'Sort clothes and load the machine', 'Press the start button', 'Select the appropriate cycle'],
    correct: 1,
    explanation: {
      correct: 'The instructions list steps in order: sort clothes, load the machine, then add detergent. Step 2 (loading) comes before step 3 (adding detergent).',
      wrongs: ['The warning says NOT to open the door while running', 'Opci\u00f3n correcta', 'Pressing start is the final step (step 5)', 'Selecting the cycle is step 4, after adding detergent in step 3']
    }
  },
  {
    id: 'EN13',
    area: 'ingles',
    areaName: 'Ingl\u00e9s',
    difficulty: 'media',
    context: `Read the story:
"Lucy had always been afraid of public speaking. When her teacher announced that every student had to present a project to the class, Lucy felt nervous. She practiced her presentation in front of the mirror every night. On presentation day, she took a deep breath and began speaking. To her surprise, her classmates applauded when she finished."`,
    question: `What can be inferred about Lucy from the text?`,
    options: ['She enjoys speaking in front of large audiences', 'She overcame her fear by practicing and succeeded', 'She asked the teacher to excuse her from the presentation', 'She failed the presentation because she was too nervous'],
    correct: 1,
    explanation: {
      correct: 'The text shows Lucy was afraid but "practiced her presentation in front of the mirror every night" and her classmates "applauded when she finished." This implies she overcame her fear through preparation and was successful.',
      wrongs: ['The text says she "had always been afraid of public speaking"', 'Opci\u00f3n correcta', 'She did not ask to be excused; she prepared and presented', 'The applause suggests she did well, not that she failed']
    }
  },
  {
    id: 'EN14',
    area: 'ingles',
    areaName: 'Ingl\u00e9s',
    difficulty: 'facil',
    context: `Read the sign: "No smoking. Fine: $50."`,
    question: `What happens if someone smokes in this area?`,
    options: ['They will receive a warning', 'They have to pay a penalty of $50', 'They will be asked to leave politely', 'Nothing happens'],
    correct: 1,
    explanation: {
      correct: '"No smoking" prohibits smoking, and "Fine: $50" means the penalty or payment for breaking this rule is $50. A "fine" is money paid as a punishment for an offense.',
      wrongs: ['The sign states a fine, not just a warning', 'Opci\u00f3n correcta', 'The sign mentions a specific fine amount', 'There is a penalty for violating the rule']
    }
  },
  {
    id: 'EN15',
    area: 'ingles',
    areaName: 'Ingl\u00e9s',
    difficulty: 'dificil',
    context: `Read the text:
"Social media algorithms are designed to show users content they are likely to engage with. While this creates a personalized experience, it can also lead to 'echo chambers' where people are only exposed to opinions that reinforce their own. This lack of exposure to different perspectives can increase political polarization and reduce understanding between groups with opposing views."`,
    question: `What is a negative consequence of social media algorithms mentioned in the text?`,
    options: ['They show too many advertisements', 'They can create echo chambers that increase polarization', 'They are difficult for users to understand', 'They make social media platforms slower'],
    correct: 1,
    explanation: {
      correct: 'The text states that algorithms "can also lead to \'echo chambers\'" and that "this lack of exposure to different perspectives can increase political polarization." These are the negative consequences explained.',
      wrongs: ['Advertisements are not mentioned in this context', 'Opci\u00f3n correcta', 'User understanding of algorithms is not discussed', 'Platform speed is not mentioned']
    }
  },
  {
    id: 'EN16',
    area: 'ingles',
    areaName: 'Ingl\u00e9s',
    difficulty: 'media',
    context: `Read the message:
"Dear passengers, Flight 247 to New York is delayed by two hours due to bad weather conditions. We apologize for the inconvenience. Please proceed to gate 12 for further information."`,
    question: `Why was the flight delayed?`,
    options: ['Overbooking of the flight', 'Bad weather conditions', 'Mechanical problems with the plane', 'A strike by the airline staff'],
    correct: 1,
    explanation: {
      correct: 'The announcement clearly states the delay is "due to bad weather conditions." This is the reason provided to passengers for the two-hour delay.',
      wrongs: ['Overbooking is not mentioned', 'Opci\u00f3n correcta', 'Mechanical problems are not mentioned', 'A strike is not mentioned as the cause']
    }
  },
  {
    id: 'EN17',
    area: 'ingles',
    areaName: 'Ingl\u00e9s',
    difficulty: 'dificil',
    context: `Read the text:
"The Great Pacific Garbage Patch is a massive collection of plastic debris floating in the North Pacific Ocean. It is not a solid island of trash, as many imagine, but rather a soup of microplastics spread over a vast area. These tiny plastic particles are often mistaken for food by marine animals, leading to ingestion and death. Scientists estimate that cleaning up the patch would take decades and cost billions of dollars."`,
    question: `What misconception about the Great Pacific Garbage Patch does the text correct?`,
    options: ['That it is located in the Atlantic Ocean', 'That it is a solid island of trash', 'That it was caused by a single ship accident', 'That it contains only metal debris'],
    correct: 1,
    explanation: {
      correct: 'The text says "It is not a solid island of trash, as many imagine, but rather a soup of microplastics." This directly corrects the common misconception that it is a solid, visible island.',
      wrongs: ['The text states it is in the North Pacific Ocean', 'Opci\u00f3n correcta', 'The text does not mention a single accident as the cause', 'The text specifically mentions plastic debris']
    }
  },
  {
    id: 'EN18',
    area: 'ingles',
    areaName: 'Ingl\u00e9s',
    difficulty: 'facil',
    context: `Notice: "Please close the door. Air conditioning is on."`,
    question: `Why does the notice ask people to close the door?`,
    options: ['To keep the room warm', 'To prevent the cold air from escaping and save energy', 'To block outside noise', 'To prevent animals from entering'],
    correct: 1,
    explanation: {
      correct: '"Air conditioning is on" means the cooling system is operating. Closing the door keeps the cold air inside, which saves energy and keeps the room at the desired temperature.',
      wrongs: ['Air conditioning cools, not warms', 'Opci\u00f3n correcta', 'Noise is not mentioned in the notice', 'Animals are not mentioned in the notice']
    }
  },
  // ===== PREGUNTAS ADICIONALES =====
  // Más Lectura Crítica
  {
    id: 'LC09',
    area: 'lectura',
    areaName: 'Lectura Cr\u00edtica',
    difficulty: 'dificil',
    context: `"\u00bfQu\u00e9 es entonces la verdad? Una hueste en movimiento de met\u00e1foras, metonimias, antropomorfismos, en resumidas cuentas, una suma de relaciones humanas que han sido realzadas, extrapoladas y adornadas po\u00e9tica y ret\u00f3ricamente y que, despu\u00e9s de un prolongado uso, un pueblo considera firmes, can\u00f3nicas y vinculantes: las verdades son ilusiones de las que se ha olvidado que lo son." - Friedrich Nietzsche, "Sobre verdad y mentira en sentido extramoral" (1873).`,
    question: `Seg\u00fan Nietzsche, la verdad es el resultado de:`,
    options: ['Un proceso de adecuaci\u00f3n del intelecto a la realidad objetiva', 'Un conjunto de met\u00e1foras e ilusiones que la humanidad ha olvidado que lo son', 'Una revelaci\u00f3n divina accesible mediante la raz\u00f3n pura', 'El consenso alcanzado por la comunidad cient\u00edfica a lo largo de la historia'],
    correct: 1,
    explanation: {
      correct: 'Nietzsche sostiene que la verdad no es una correspondencia con la realidad objetiva, sino una construcci\u00f3n humana compuesta de met\u00e1foras y relaciones que, por el uso prolongado, se han vuelto can\u00f3nicas. La clave est\u00e1 en su afirmaci\u00f3n de que las verdades son "ilusiones de las que se ha olvidado que lo son".',
      wrongs: [
        'Nietzsche rechaza expl\u00edcitamente la teor\u00eda de la verdad como adecuaci\u00f3n o correspondencia con la realidad',
        'Opci\u00f3n correcta',
        'Nietzsche critica la noci\u00f3n de verdad absoluta, no la fundamenta en lo divino',
        'El consenso cient\u00edfico ser\u00eda, para Nietzsche, otra ilusi\u00f3n colectiva, no el origen de la verdad'
      ]
    }
  },
  {
    id: 'LC10',
    area: 'lectura',
    areaName: 'Lectura Cr\u00edtica',
    difficulty: 'media',
    context: `"Muchos a\u00f1os despu\u00e9s, frente al pelot\u00f3n de fusilamiento, el coronel Aureliano Buend\u00eda hab\u00eda de recordar aquella tarde remota en que su padre lo llev\u00f3 a conocer el hielo. Macondo era entonces una aldea de veinte casas de barro y ca\u00f1abrava construidas a la orilla de un r\u00edo de aguas di\u00e1fanas que se precipitaban por un lecho de piedras pulidas, blancas y enormes como huevos prehist\u00f3ricos." - Gabriel Garc\u00eda M\u00e1rquez, "Cien a\u00f1os de soledad" (1967).`,
    question: `Por la estructura temporal del fragmento, se puede afirmar que el narrador:`,
    options: ['Relata los hechos en orden estrictamente cronol\u00f3gico', 'Alterna entre un momento futuro y un recuerdo del pasado para crear una perspectiva temporal compleja', 'Utiliza \u00fanicamente el tiempo presente para narrar los acontecimientos', 'Presenta la historia desde la perspectiva de varios personajes simult\u00e1neamente'],
    correct: 1,
    explanation: {
      correct: 'El fragmento comienza con una referencia a un hecho futuro ("Muchos a\u00f1os despu\u00e9s, frente al pelot\u00f3n de fusilamiento...") y luego retrocede para narrar el pasado ("Macondo era entonces..."). Esta t\u00e9cnica narrativa, caracter\u00edstica de Garc\u00eda M\u00e1rquez, establece una perspectiva temporal que abarca pasado, presente y futuro desde el inicio de la novela.',
      wrongs: [
        'El texto no sigue un orden cronol\u00f3gico lineal, sino que alterna entre futuro y pasado',
        'Opci\u00f3n correcta',
        'El texto utiliza tiempos pasados ("hab\u00eda de recordar", "era"), no presente',
        'El narrador es omnisciente pero no hay indicios de m\u00faltiples perspectivas en el fragmento'
      ]
    }
  },

  // Más Matemáticas
  {
    id: 'MT09', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'media',
    context: `En una rifa de una bicicleta en un colegio de Bucaramanga se venden 120 boletas numeradas del 1 al 120.`,
    question: `Si una persona compra 15 boletas, \u00bfcu\u00e1l es la probabilidad de que gane la bicicleta?`,
    options: ['1/8', '1/15', '1/120', '1/6'],
    correct: 0,
    explanation: { correct: 'Probabilidad = casos favorables / casos totales = 15/120 = 1/8.', wrongs: ['Ese es el n\u00famero de boletas compradas, no la probabilidad', 'Opci\u00f3n correcta', 'Usaste 120 en lugar de 15 en el numerador', 'Dividiste 120/15 = 8, pero la fracci\u00f3n es 15/120 = 1/8'] }
  },
  {
    id: 'MT10', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'dificil',
    context: `Un art\u00edculo cuesta $250.000 en una tienda de Cartagena. Primero sube 20% y luego baja 20%.`,
    question: `\u00bfCu\u00e1l es el precio final del art\u00edculo?`,
    options: ['$250.000', '$260.000', '$240.000', '$230.000'],
    correct: 2,
    explanation: { correct: 'Sube 20%: 250.000 x 1,20 = 300.000. Baja 20%: 300.000 x 0,80 = 240.000. El precio final es $240.000.', wrongs: ['Pareciera que vuelve al original pero no: 20% de aumento y luego 20% de disminuci\u00f3n no se cancelan', 'Opci\u00f3n correcta', 'Calculaste 250.000 x 0,96 directamente? Revisa', 'C\u00e1lculo incorrecto'] }
  },

  // Más Sociales
  {
    id: 'SC09',
    area: 'sociales',
    areaName: 'Sociales y Ciudadan\u00eda',
    difficulty: 'dificil',
    context: `"La Constituci\u00f3n Pol\u00edtica de Colombia de 1991 establece en su art\u00edculo 1 que 'Colombia es un Estado Social de Derecho, organizado en forma de Rep\u00fablica unitaria, descentralizada, con autonom\u00eda de sus entidades territoriales, democr\u00e1tica, participativa y pluralista, fundada en el respeto de la dignidad humana'."`,
    question: `De acuerdo con el art\u00edculo 1 de la Constituci\u00f3n de 1991, Colombia se define como un Estado:`,
    options: ['Centralista que elimina la autonom\u00eda de las regiones', 'Social de Derecho, democr\u00e1tico, participativo y pluralista', 'Federal con plena autonom\u00eda de cada entidad territorial', 'Teocr\u00e1tico fundamentado en la religi\u00f3n cat\u00f3lica'],
    correct: 1,
    explanation: {
      correct: 'El art\u00edculo 1 de la Constituci\u00f3n de 1991 define a Colombia como un Estado Social de Derecho con las caracter\u00edsticas mencionadas: unitario, descentralizado, democr\u00e1tico, participativo y pluralista. Este art\u00edculo refleja el cambio fundamental respecto a la Constituci\u00f3n de 1886, al incorporar la participaci\u00f3n ciudadana y el reconocimiento de la diversidad como pilares del Estado.',
      wrongs: [
        'La Constituci\u00f3n de 1991 es descentralizada y otorga autonom\u00eda a las entidades territoriales, no es centralista',
        'Opci\u00f3n correcta',
        'Colombia es una rep\u00fablica unitaria, no federal; la autonom\u00eda territorial tiene l\u00edmites establecidos por la Constituci\u00f3n',
        'Colombia es un Estado laico que garantiza la libertad de cultos, no tiene religi\u00f3n oficial (art. 19)'
      ]
    }
  },
  {
    id: 'SC10',
    area: 'sociales',
    areaName: 'Sociales y Ciudadan\u00eda',
    difficulty: 'media',
    context: `"El 20 de julio de 1810 se produjo en Santa Fe de Bogot\u00e1 un episodio conocido como el 'Florero de Llorente', que desencaden\u00f3 un movimiento de independencia. Sin embargo, la independencia definitiva de la Nueva Granada solo se consolida despu\u00e9s de la batalla de Boyac\u00e1 el 7 de agosto de 1819, liderada por Sim\u00f3n Bol\u00edvar."`,
    question: `Seg\u00fan el texto, el proceso de independencia de la Nueva Granada:`,
    options: ['Fue un evento \u00fanico ocurrido el 20 de julio de 1810', 'Culmin\u00f3 militarmente con la batalla de Boyac\u00e1 en 1819 despu\u00e9s de un proceso de casi una d\u00e9cada', 'Se logr\u00f3 sin enfrentamientos armados mediante la negociaci\u00f3n con Espa\u00f1a', 'Fue liderado exclusivamente por Antonio Nari\u00f1o desde 1810'],
    correct: 1,
    explanation: {
      correct: 'El texto distingue entre el inicio del proceso (20 de julio de 1810 con el Florero de Llorente) y la consolidaci\u00f3n militar de la independencia (Batalla de Boyac\u00e1, 7 de agosto de 1819). La independencia no fue un evento \u00fanico sino un proceso que incluy\u00f3 la reconquista espa\u00f1ola (1815-1819) y culmin\u00f3 con la campa\u00f1a libertadora liderada por Sim\u00f3n Bol\u00edvar.',
      wrongs: [
        'El 20 de julio fue el inicio del proceso, pero la independencia se consolid\u00f3 militarmente en 1819',
        'Opci\u00f3n correcta',
        'La independencia requiri\u00f3 una guerra de casi una d\u00e9cada contra el dominio espa\u00f1ol',
        'Sim\u00f3n Bol\u00edvar fue el l\u00edder principal de la campa\u00f1a libertadora que culmin\u00f3 en Boyac\u00e1'
      ]
    }
  },

  // Más Ciencias Naturales
  {
    id: 'CN09',
    area: 'ciencias',
    areaName: 'Ciencias Naturales',
    difficulty: 'media',
    context: `"En un laboratorio de qu\u00edmica, se preparan cuatro soluciones: limpiador con amon\u00edaco (pH 11), jugo g\u00e1strico (pH 2), leche (pH 6,5) y agua de mar (pH 8). Se introducen tiras de papel tornasol en cada una."`,
    question: `\u00bfCu\u00e1l de las siguientes combinaciones de color del tornasol es correcta seg\u00fan el pH de cada soluci\u00f3n?`,
    options: ['Amon\u00edaco: rojo; jugo g\u00e1strico: azul; leche: rojo; agua de mar: azul', 'Amon\u00edaco: azul; jugo g\u00e1strico: rojo; leche: rojo; agua de mar: azul', 'Amon\u00edaco: rojo; jugo g\u00e1strico: rojo; leche: azul; agua de mar: rojo', 'Amon\u00edaco: azul; jugo g\u00e1strico: azul; leche: rojo; agua de mar: rojo'],
    correct: 1,
    explanation: {
      correct: 'El papel tornasol se vuelve azul en medio b\u00e1sico (pH > 7) y rojo en medio \u00e1cido (pH < 7). Amon\u00edaco (pH 11, b\u00e1sico) \u2192 azul. Jugo g\u00e1strico (pH 2, \u00e1cido) \u2192 rojo. Leche (pH 6,5, \u00e1cido) \u2192 rojo. Agua de mar (pH 8, b\u00e1sico) \u2192 azul.',
      wrongs: [
        'El amon\u00edaco es b\u00e1sico, por lo que torna el papel azul, no rojo',
        'Opci\u00f3n correcta',
        'El agua de mar es ligeramente b\u00e1sica (pH 8), por lo que torna el papel azul, no rojo',
        'El jugo g\u00e1strico es \u00e1cido (pH 2), por lo que torna el papel rojo, no azul'
      ]
    }
  },
  {
    id: 'CN10',
    area: 'ciencias',
    areaName: 'Ciencias Naturales',
    difficulty: 'dificil',
    context: `"Una persona con grupo sangu\u00edneo O- (donante universal) dona sangre a un paciente con grupo sangu\u00edneo AB+. El paciente AB+ tiene anticuerpos anti-A y anti-B en el suero. La sangre tipo O no tiene ant\u00edgenos A ni B en sus gl\u00f3bulos rojos."`,
    question: `\u00bfPor qu\u00e9 la sangre tipo O- se considera donante universal para transfusiones de gl\u00f3bulos rojos?`,
    options: ['Porque no tiene ning\u00fan ant\u00edgeno en la superficie de sus gl\u00f3bulos rojos, por lo que no activa el sistema inmune del receptor', 'Porque el tipo O es el m\u00e1s com\u00fan en la poblaci\u00f3n, por lo que es m\u00e1s seguro', 'Porque los anticuerpos del donante O- neutralizan los ant\u00edgenos del receptor AB+', 'Porque la sangre O- tiene factor Rh positivo que es compatible con todos'],
    correct: 0,
    explanation: {
      correct: 'Los gl\u00f3bulos rojos tipo O no tienen ant\u00edgenos A ni B en su superficie, y al ser Rh negativo tampoco tienen ant\u00edgeno Rh. Al no presentar estos ant\u00edgenos, el sistema inmune del receptor (incluso AB+ que no produce anticuerpos anti-A ni anti-B) no reconoce los gl\u00f3bulos rojos como extra\u00f1os y no los ataca. Por eso se llama donante universal de gl\u00f3bulos rojos.',
      wrongs: [
        'Opci\u00f3n correcta',
        'La frecuencia del tipo sangu\u00edneo no determina la compatibilidad; es la ausencia de ant\u00edgenos lo que importa',
        'Los anticuerpos del donante est\u00e1n en el plasma, no en los gl\u00f3bulos rojos; adem\u00e1s en transfusiones de gl\u00f3bulos rojos concentrados se minimiza el plasma donado',
        'El tipo O- es Rh negativo, no positivo; la ausencia total de ant\u00edgenos A, B y Rh es lo que permite la compatibilidad universal'
      ]
    }
  },

  // Más preguntas para alcanzar cantidad suficiente
  {
    id: 'LC11',
    area: 'lectura',
    areaName: 'Lectura Cr\u00edtica',
    difficulty: 'dificil',
    context: `"Puesto que los sentidos nos enga\u00f1an a veces, quise suponer que no exist\u00eda cosa alguna que fuese tal como ellos nos la hacen imaginar. Y, puesto que hay hombres que yerran al razonar, incluso acerca de los m\u00e1s simples asuntos geom\u00e9tricos, juzgu\u00e9 que yo estaba tan expuesto al error como cualquier otro; por consiguiente, rechac\u00e9 como falsas todas las razones que hab\u00eda tenido antes por demostrativas." - Ren\u00e9 Descartes, "Meditaciones metaf\u00edsicas" (1641).`,
    question: `La estrategia metodol\u00f3gica que utiliza Descartes en este fragmento consiste en:`,
    options: ['Aceptar como verdadero todo conocimiento proveniente de los sentidos', 'Rechazar de manera provisional todo aquello de lo que pueda dudarse para encontrar una base segura del conocimiento', 'Demostrar que el error es imposible si se sigue la l\u00f3gica geom\u00e9trica', 'Afirmar que todos los hombres yerran por igual y que el conocimiento es imposible'],
    correct: 1,
    explanation: {
      correct: 'Descartes describe aqu\u00ed la duda met\u00f3dica: decide rechazar como falso todo aquello de lo que pueda dudar, incluso m\u00ednimamente, para encontrar una verdad indubitable sobre la cual fundamentar el conocimiento. No es un escepticismo permanente sino un m\u00e9todo para alcanzar certezas.',
      wrongs: [
        'Descartes afirma expl\u00edcitamente que los sentidos nos enga\u00f1an, por lo que no los acepta acr\u00edticamente',
        'Opci\u00f3n correcta',
        'Descartes no afirma que el error sea imposible; precisamente usa la posibilidad del error como punto de partida',
        'Descartes busca superar la duda, no instalarse en ella permanentemente'
      ]
    }
  },
  {
    id: 'LC12',
    area: 'lectura',
    areaName: 'Lectura Cr\u00edtica',
    difficulty: 'facil',
    context: `"El Aleph" de Jorge Luis Borges (1945) narra el descubrimiento de un punto en el s\u00f3tano de una casa desde el cual pueden verse todos los puntos del universo simult\u00e1neamente sin confusi\u00f3n ni superposici\u00f3n. El protagonista, al asomarse, contempla "el inconcebible universo" y experimenta una revelaci\u00f3n que trasciende los l\u00edmites del lenguaje humano.`,
    question: `En el cuento, el Aleph funciona como un s\u00edmbolo de:`,
    options: ['El conocimiento limitado de los seres humanos', 'La simultaneidad total de la experiencia y el conocimiento absoluto', 'La belleza de una joya o piedra preciosa', 'El amor imposible entre dos personas'],
    correct: 1,
    explanation: {
      correct: 'El Aleph es un punto que contiene todos los dem\u00e1s puntos del universo, permitiendo verlo todo al mismo tiempo. Borges lo utiliza como s\u00edmbolo del conocimiento absoluto, de la experiencia total que el lenguaje no puede expresar plenamente.',
      wrongs: [
        'El Aleph permite precisamente superar los l\u00edmites del conocimiento humano, aunque el lenguaje no pueda expresarlo',
        'Opci\u00f3n correcta',
        'El Aleph no es una joya, sino un punto en el espacio que contiene la totalidad del universo',
        'El cuento aborda temas filos\u00f3ficos y metaf\u00edsicos, no exclusivamente rom\u00e1nticos'
      ]
    }
  },
  {
    id: 'MT11', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'facil',
    question: `Una pizzer\u00eda en Pasto vende pizzas circulares de 30 cm de di\u00e1metro. \u00bfCu\u00e1l es el \u00e1rea de la pizza? (Use \u03c0 = 3,14)`,
    options: ['706,5 cm\u00b2', '94,2 cm\u00b2', '471 cm\u00b2', '282,6 cm\u00b2'],
    correct: 0,
    explanation: { correct: 'Radio = 30/2 = 15 cm. \u00c1rea = \u03c0r\u00b2 = 3,14 x 15\u00b2 = 3,14 x 225 = 706,5 cm\u00b2.', wrongs: ['Opci\u00f3n correcta', 'Ese ser\u00eda el per\u00edmetro (2\u03c0r)', 'Usaste el di\u00e1metro en lugar del radio en la f\u00f3rmula', 'Multiplicaste 3,14 x 30 = 94,2: ese es el per\u00edmetro'] }
  },
  {
    id: 'MT12', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'media',
    question: `En un mercado de Sincelejo, 3 aguacates y 2 mangos cuestan $7.500, mientras que 2 aguacates y 1 mango cuestan $4.500. \u00bfCu\u00e1nto cuesta un aguacate?`,
    options: ['$1.000', '$1.500', '$2.000', '$2.500'],
    correct: 1,
    explanation: { correct: 'Sistema: 3a+2m=7500, 2a+m=4500. Multiplicando la segunda por 2: 4a+2m=9000. Restando: a=1500. Aguacate = $1.500.', wrongs: ['Revisa el sistema de ecuaciones', 'Opci\u00f3n correcta', 'Probablemente confundiste aguacate con mango', 'C\u00e1lculo incorrecto del sistema'] }
  },
  {
    id: 'SC11',
    area: 'sociales',
    areaName: 'Sociales y Ciudadan\u00eda',
    difficulty: 'facil',
    context: `"Colombia posee una gran diversidad de regiones naturales. La regi\u00f3n Andina, donde se concentra la mayor parte de la poblaci\u00f3n, est\u00e1 atravesada por las cordilleras Occidental, Central y Oriental. La regi\u00f3n Caribe, al norte, se caracteriza por sus llanuras costeras y clima c\u00e1lido."`,
    question: `De acuerdo con el texto, la regi\u00f3n colombiana que concentra la mayor poblaci\u00f3n y est\u00e1 atravesada por tres cordilleras es:`,
    options: ['La regi\u00f3n Caribe', 'La regi\u00f3n Andina', 'La regi\u00f3n Pac\u00edfica', 'La regi\u00f3n Amaz\u00f3nica'],
    correct: 1,
    explanation: {
      correct: 'El texto indica que la regi\u00f3n Andina "concentra la mayor parte de la poblaci\u00f3n" y "est\u00e1 atravesada por las cordilleras Occidental, Central y Oriental". Esta regi\u00f3n incluye las principales ciudades del pa\u00eds (Bogot\u00e1, Medell\u00edn, Cali) y es la m\u00e1s poblada de Colombia.',
      wrongs: [
        'La regi\u00f3n Caribe est\u00e1 al norte, es de llanuras costeras, no es atravesada por las tres cordilleras',
        'Opci\u00f3n correcta',
        'La regi\u00f3n Pac\u00edfica est\u00e1 al occidente, no es atravesada por las tres cordilleras',
        'La Amazon\u00eda es una regi\u00f3n de selva tropical al sur del pa\u00eds'
      ]
    }
  },
  {
    id: 'SC12',
    area: 'sociales',
    areaName: 'Sociales y Ciudadan\u00eda',
    difficulty: 'media',
    question: `Un ciudadano considera que su EPS le ha negado injustificadamente un tratamiento m\u00e9dico urgente. \u00bfCu\u00e1l es el mecanismo constitucional m\u00e1s adecuado para proteger su derecho a la salud?`,
    options: ['Presentar una demanda penal contra la EPS', 'Interponer una acci\u00f3n de tutela', 'Solicitar un referendo', 'Iniciar una acci\u00f3n popular'],
    correct: 1,
    explanation: {
      correct: 'La acci\u00f3n de tutela (art. 86 Constituci\u00f3n) es el mecanismo id\u00f3neo para la protecci\u00f3n inmediata de derechos fundamentales como la salud cuando son vulnerados o amenazados. La Corte Constitucional ha establecido que el derecho a la salud es fundamental y puede ser protegido mediante tutela, especialmente cuando est\u00e1 en riesgo la vida o la integridad de la persona.',
      wrongs: [
        'La demanda penal es para delitos, no para proteger derechos fundamentales vulnerados por una EPS',
        'Opci\u00f3n correcta',
        'El referendo es un mecanismo de participaci\u00f3n para decidir sobre normas, no para proteger derechos individuales',
        'Las acciones populares protegen derechos colectivos, no derechos individuales como la salud'
      ]
    }
  },
  {
    id: 'CN11',
    area: 'ciencias',
    areaName: 'Ciencias Naturales',
    difficulty: 'facil',
    context: `"Un estudiante coloca una vela encendida en un recipiente con agua y la cubre con un vaso invertido. Al cabo de unos segundos, la vela se apaga y el agua sube dentro del vaso."`,
    question: `\u00bfQu\u00e9 combinaci\u00f3n de fen\u00f3menos explica lo ocurrido?`,
    svg: `<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg" style="max-width:400px">
  <text x="100" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Antes</text>
  <text x="300" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Despu\u00e9s</text>
  <!-- Beaker left -->
  <rect x="40" y="40" width="120" height="120" fill="none" stroke="#78909C" stroke-width="2" rx="2"/>
  <rect x="40" y="40" width="120" height="120" fill="#E3F2FD" opacity="0.4" rx="2"/>
  <rect x="40" y="120" width="120" height="40" fill="#BBDEFB" opacity="0.6"/>
  <text x="100" y="148" text-anchor="middle" font-size="9" fill="#1565C0">Agua</text>
  <!-- Inverted glass -->
  <rect x="60" y="50" width="80" height="100" fill="none" stroke="#90A4AE" stroke-width="1.5" rx="3"/>
  <!-- Candle -->
  <rect x="93" y="90" width="14" height="30" fill="#FFF9C4" stroke="#F9A825" stroke-width="1"/>
  <rect x="94" y="80" width="12" height="12" fill="#FFB300" rx="2"/>
  <!-- Flame -->
  <ellipse cx="100" cy="72" rx="5" ry="10" fill="#FFC107"/>
  <ellipse cx="100" cy="74" rx="3" ry="6" fill="#FF9800"/>
  <!-- Oxygen label -->
  <text x="72" y="68" font-size="9" fill="#1565C0">O2</text>
  <!-- Beaker right -->
  <rect x="240" y="40" width="120" height="120" fill="none" stroke="#78909C" stroke-width="2" rx="2"/>
  <rect x="240" y="40" width="120" height="120" fill="#E3F2FD" opacity="0.4" rx="2"/>
  <rect x="240" y="100" width="120" height="60" fill="#BBDEFB" opacity="0.6"/>
  <text x="300" y="142" text-anchor="middle" font-size="9" fill="#1565C0">Agua subi\u00f3</text>
  <!-- Water up arrow -->
  <path d="M280 115 L280 100 M275 105 L280 100 L285 105" fill="none" stroke="#E91E63" stroke-width="1.5"/>
  <!-- Inverted glass right -->
  <rect x="260" y="50" width="80" height="100" fill="none" stroke="#90A4AE" stroke-width="1.5" rx="3"/>
  <!-- Burnt candle -->
  <rect x="293" y="100" width="14" height="20" fill="#FFF9C4" stroke="#F9A825" stroke-width="1"/>
  <rect x="294" y="95" width="12" height="7" fill="#424242" rx="1"/>
  <!-- No flame -->
  <!-- Smoke -->
  <path d="M300 90 Q295 80 300 70 Q305 60 300 50" fill="none" stroke="#9E9E9E" stroke-width="1" stroke-dasharray="2"/>
  <!-- Arrow between -->
  <text x="185" y="100" font-size="18" fill="#666">\u2192</text>
  <!-- CO2 label right -->
  <text x="310" y="68" font-size="9" fill="#E91E63">CO2</text>
</svg>`,
    options: ['El ox\u00edgeno se consume en la combusti\u00f3n y la disminuci\u00f3n de presi\u00f3n hace que el agua suba; el CO\u2082 producido se disuelve parcialmente en el agua', 'La vela apaga porque el vaso bloquea el viento; el agua sube por capilaridad', 'El calor derrite la cera que sella el vaso; el agua sube por evaporaci\u00f3n', 'El di\u00f3xido de carbono producido empuja el agua hacia arriba por su menor densidad'],
    correct: 0,
    explanation: {
      correct: 'La combusti\u00f3n consume ox\u00edgeno (O\u2082) y produce CO\u2082. Parte del CO\u2082 se disuelve en el agua, reduciendo la cantidad total de gas. Al disminuir el n\u00famero de mol\u00e9culas de gas y enfriarse el aire dentro del vaso, la presi\u00f3n interna disminuye. La presi\u00f3n atmosf\u00e9rica externa, mayor, empuja el agua hacia arriba dentro del vaso hasta igualar las presiones.',
      wrongs: [
        'Opci\u00f3n correcta',
        'El vaso no bloquea el viento en un ambiente cerrado; el fen\u00f3meno se debe al consumo de ox\u00edgeno y cambios de presi\u00f3n',
        'No es la cera derretida ni la evaporaci\u00f3n lo que explica el ascenso del agua',
        'El CO\u2082 es m\u00e1s denso que el aire, no menos; adem\u00e1s su producci\u00f3n no es suficiente para empujar el agua'
      ]
    }
  },
  {
    id: 'CN12',
    area: 'ciencias',
    areaName: 'Ciencias Naturales',
    difficulty: 'dificil',
    context: `"Un estudiante deja caer una pelota desde lo alto de un edificio de 45 m de altura. Simult\u00e1neamente, otro estudiante lanza otra pelota id\u00e9ntica hacia arriba desde el suelo con una velocidad inicial de 30 m/s."`,
    question: `Si se desprecia la resistencia del aire y se toma g = 10 m/s\u00b2, \u00bfcu\u00e1l de las siguientes afirmaciones es correcta?`,
    options: ['La pelota lanzada hacia arriba alcanzar\u00e1 una altura m\u00e1xima de 30 m', 'La pelota que cae desde el edificio tardar\u00e1 3 segundos en llegar al suelo', 'Ambas pelotas se encontrar\u00e1n en el mismo punto al mismo tiempo', 'La pelota lanzada hacia arriba tardar\u00e1 6 segundos en regresar al suelo'],
    correct: 1,
    explanation: {
      correct: 'Para ca\u00edda libre desde 45 m: h = (1/2)gt\u00b2 \u2192 t = \u221a(2h/g) = \u221a(90/10) = \u221a9 = 3 s. La pelota lanzada hacia arriba alcanza altura m\u00e1xima cuando v = 0: v_f = v_i - gt \u2192 t = 30/10 = 3 s, y la altura m\u00e1xima es h = v_i\u00b7t - (1/2)gt\u00b2 = 30\u00d73 - 5\u00d79 = 90 - 45 = 45 m, y tarda otros 3 s en caer (6 s total).',
      wrongs: [
        'La altura m\u00e1xima se calcula con h = v_i\u00b2/(2g) = 900/20 = 45 m, no 30 m',
        'Opci\u00f3n correcta',
        'Las pelotas se encontrar\u00edan si sus ecuaciones de movimiento se igualan; con estos datos no ocurre al mismo tiempo',
        'Es correcto que la pelota lanzada tarda 6 s en regresar, pero no es la \u00fanica afirmaci\u00f3n correcta'
      ]
    }
  },
  // ===== LECTURA CRÍTICA ADICIONALES =====
  {
    id: 'LC13',
    area: 'lectura',
    areaName: 'Lectura Cr\u00edtica',
    difficulty: 'media',
    context: `"El puritano quer\u00eda ser un profesional y nosotros estamos obligados a serlo. Pues cuando la abstinencia y el af\u00e1n de lucro, al ascender a la cumbre del dominio exclusivo sobre la conciencia moral de los hombres, como ocurri\u00f3 en la \u00e9poca del desarrollo de la moderna econom\u00eda capitalista, rompi\u00f3 las trabas de la \u00e9tica utilitaria y quit\u00f3 el envoltorio puritano, no solo tendi\u00f3 a influir decisivamente sobre el tono de vida \u2014tendencia que hoy se ha hecho realidad\u2014, sino que condujo directamente al 'especialismo sin esp\u00edritu, al goce sin coraz\u00f3n'." - Max Weber, "La \u00e9tica protestante y el esp\u00edritu del capitalismo" (1905).`,
    question: `Seg\u00fan Weber, la \u00e9tica puritana contribuy\u00f3 al surgimiento del capitalismo al:`,
    options: ['Promover la acumulaci\u00f3n de riqueza como signo de salvaci\u00f3n divina', 'Prohibir el trabajo profesional y el comercio', 'Valorar el ocio y el desprendimiento material', 'Exigir la pobreza como condici\u00f3n para la vida moral'],
    correct: 0,
    explanation: {
      correct: 'Weber argumenta que la \u00e9tica puritana valoraba el trabajo met\u00f3dico y la abstinencia, lo que llevaba a la acumulaci\u00f3n de capital. La riqueza, lejos de ser condenada, se ve\u00eda como signo de bendici\u00f3n divina, siempre que no se disfrutara en el consumo suntuario.',
      wrongs: [
        'Opci\u00f3n correcta',
        'La \u00e9tica puritana promov\u00eda el trabajo riguroso como vocaci\u00f3n, no lo prohib\u00eda',
        'Los puritanos rechazaban el ocio y valoraban el trabajo disciplinado',
        'Los puritanos ve\u00edan la riqueza como posible se\u00f1al de salvaci\u00f3n, no exig\u00edan pobreza'
      ]
    }
  },
  {
    id: 'LC14',
    area: 'lectura',
    areaName: 'Lectura Cr\u00edtica',
    difficulty: 'facil',
    context: `"Es tan corto el amor y tan largo el olvido." - Pablo Neruda, "Veinte poemas de amor y una canci\u00f3n desesperada" (1924).

Del poema XX: "Puedo escribir los versos m\u00e1s tristes esta noche. / Escribir, por ejemplo: 'La noche est\u00e1 estrellada, / y tiritan, azules, los astros, a lo lejos'."`,
    question: `En el verso "Es tan corto el amor y tan largo el olvido", la figura ret\u00f3rica principal que emplea Neruda es:`,
    options: ['La met\u00e1fora pura sin contraste de ideas', 'La ant\u00edtesis entre la brevedad del amor y la extensi\u00f3n del olvido', 'La hip\u00e9rbole que exagera el tiempo del amor', 'La personificaci\u00f3n de los sentimientos como seres animados'],
    correct: 1,
    explanation: {
      correct: 'Neruda utiliza una ant\u00edtesis al contraponer "tan corto" (brevedad) con "tan largo" (extensi\u00f3n prolongada), enfrentando dos ideas opuestas: la fugacidad del amor frente a la persistencia del olvido. Esta contraposici\u00f3n enfatiza el dolor de la experiencia amorosa.',
      wrongs: [
        'El verso no se limita a una met\u00e1fora; el recurso principal es la contraposici\u00f3n de opuestos',
        'Opci\u00f3n correcta',
        'No hay exageraci\u00f3n desmedida; es una afirmaci\u00f3n contenida sobre la naturaleza del amor y el olvido',
        'No hay atribuci\u00f3n de cualidades humanas a objetos inanimados en este verso espec\u00edfico'
      ]
    }
  },
  {
    id: 'LC15',
    area: 'lectura',
    areaName: 'Lectura Cr\u00edtica',
    difficulty: 'dificil',
    context: `"He aqu\u00ed, pues, un orden de hechos que presentan caracteres muy especiales: consisten en maneras de obrar, de pensar y de sentir, exteriores al individuo, y est\u00e1n dotados de un poder de coerci\u00f3n en virtud del cual se le imponen. En consecuencia, no podr\u00edan confundirse con los fen\u00f3menos org\u00e1nicos, puesto que consisten en representaciones y en acciones, ni con los fen\u00f3menos ps\u00edquicos, los cuales no existen sino en la conciencia individual y a trav\u00e9s de ella." - \u00c9mile Durkheim, "Las reglas del m\u00e9todo sociol\u00f3gico" (1895).`,
    question: `Seg\u00fan Durkheim, la caracter\u00edstica fundamental de los hechos sociales es que:`,
    options: ['Se originan en la conciencia individual de cada persona', 'Son exteriores al individuo y ejercen coerci\u00f3n sobre \u00e9l', 'Son fen\u00f3menos exclusivamente biol\u00f3gicos u org\u00e1nicos', 'Dependen de la voluntad consciente de cada sujeto'],
    correct: 1,
    explanation: {
      correct: 'Durkheim define los hechos sociales por dos caracter\u00edsticas esenciales: son exteriores al individuo (preexisten y lo trascienden) y est\u00e1n dotados de poder coercitivo (se imponen al individuo independientemente de su voluntad). Esto los distingue tanto de los fen\u00f3menos org\u00e1nicos como de los puramente ps\u00edquicos.',
      wrongs: [
        'Durkheim afirma expl\u00edcitamente que son "exteriores al individuo", no originados en su conciencia',
        'Opci\u00f3n correcta',
        'Durkheim los diferencia claramente de los "fen\u00f3menos org\u00e1nicos" (biol\u00f3gicos)',
        'Los hechos sociales se imponen al individuo, no dependen de su voluntad'
      ]
    }
  },
  {
    id: 'LC16',
    area: 'lectura',
    areaName: 'Lectura Cr\u00edtica',
    difficulty: 'media',
    context: `"En el principio fue la p\u00e1gina en blanco, y la p\u00e1gina en blanco era la que ofrec\u00eda menos resistencia al deseo de escribir. Pero ya entonces, en el comienzo, se sab\u00eda que acabar escribiendo sobre cualquier cosa, y eso era lo peor, porque en el fondo no se trataba de llenar p\u00e1ginas sino de contar una historia que valiera la pena." - Julio Cort\u00e1zar, "Rayuela" (1963).`,
    question: `Seg\u00fan el fragmento, la verdadera dificultad del escritor no es:`,
    options: ['Escribir sobre cualquier tema disponible', 'Llenar p\u00e1ginas con palabras', 'Encontrar una historia que valga la pena', 'Enfrentarse a la p\u00e1gina en blanco'],
    correct: 3,
    explanation: {
      correct: 'El texto indica que la p\u00e1gina en blanco "era la que ofrec\u00eda menos resistencia al deseo de escribir". La verdadera dificultad no es comenzar a escribir, sino "contar una historia que valiera la pena". Lo peor, seg\u00fan el narrador, es que se termina "escribiendo sobre cualquier cosa".',
      wrongs: [
        'El texto sugiere que se termina escribiendo sobre cualquier cosa, pero eso no es lo dif\u00edcil sino lo inevitable',
        'Llenar p\u00e1ginas no es el verdadero problema; el reto es contar una historia significativa',
        'Esa es precisamente la verdadera dificultad que identifica el texto, no la menos relevante',
        'Opci\u00f3n correcta'
      ]
    }
  },
  {
    id: 'LC17',
    area: 'lectura',
    areaName: 'Lectura Cr\u00edtica',
    difficulty: 'facil',
    context: `"Todo arte y toda indagaci\u00f3n, y del mismo modo toda acci\u00f3n y libre elecci\u00f3n, parecen tender a alg\u00fan bien; por eso se ha manifestado, con raz\u00f3n, que el bien es aquello hacia lo que todas las cosas tienden." - Arist\u00f3teles, "\u00c9tica a Nic\u00f3maco" (Libro I, cap\u00edtulo 1, siglo IV a. C.).`,
    question: `La tesis principal que plantea Arist\u00f3teles en este pasaje es:`,
    options: ['El bien es un concepto relativo que cada persona define a su manera', 'Todas las actividades humanas apuntan hacia alg\u00fan bien como fin', 'Solo el arte y la filosof\u00eda tienden al bien verdaderamente', 'El bien es inalcanzable para los seres humanos'],
    correct: 1,
    explanation: {
      correct: 'Arist\u00f3teles sostiene que toda acci\u00f3n humana (arte, indagaci\u00f3n, acci\u00f3n, elecci\u00f3n) tiende hacia alg\u00fan bien. No es que el bien sea relativo, sino que hay una pluralidad de bienes que corresponden a distintas actividades, y todos ellos son aquello hacia lo que esas actividades se orientan naturalmente.',
      wrongs: [
        'Arist\u00f3teles afirma que hay un bien hacia el que todos tienden, lo que sugiere una teleolog\u00eda compartida',
        'Opci\u00f3n correcta',
        'Arist\u00f3teles incluye expl\u00edcitamente "toda acci\u00f3n y libre elecci\u00f3n", no solo el arte y la filosof\u00eda',
        'Arist\u00f3teles dice que "todas las cosas tienden" al bien, lo que implica que es alcanzable'
      ]
    }
  },
  // ===== MATEMÁTICAS ADICIONALES =====
  {
    id: 'MT13', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'facil',
    question: `En una receta de cocina colombiana se necesitan 3 tazas de harina por cada 2 tazas de az\u00facar. Si se usan 9 tazas de harina, \u00bfcu\u00e1ntas tazas de az\u00facar se necesitan?`,
    options: ['4 tazas', '6 tazas', '5 tazas', '8 tazas'],
    correct: 1,
    explanation: { correct: 'Proporci\u00f3n: 3/2 = 9/x -> 3x = 18 -> x = 6 tazas de az\u00facar.', wrongs: ['Calculaste 9/3 = 3, pero la relaci\u00f3n es 3:2', 'Opci\u00f3n correcta', 'Sumaste 9-3=6 pero sin aplicar la proporci\u00f3n correcta', 'Usaste 9/2 = 4,5 y redondeaste'] }
  },
  {
    id: 'MT14', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'media',
    table: {
      headers: ['Deporte', 'Hombres', 'Mujeres'],
      rows: [
        ['F\u00fatbol', '45', '30'],
        ['Baloncesto', '20', '25'],
        ['Nataci\u00f3n', '15', '20'],
        ['Atletismo', '10', '15']
      ],
      caption: 'Preferencias deportivas de estudiantes en un colegio de Pereira'
    },
    context: 'La tabla muestra las preferencias deportivas de los estudiantes de un colegio.',
    question: '\u00bfCu\u00e1l es el total de estudiantes mujeres que participaron en la encuesta?',
    svg: `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" style="max-width:400px">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#333">Preferencias deportivas por g\u00e9nero</text>
  <line x1="50" y1="180" x2="380" y2="180" stroke="#333" stroke-width="1.5"/>
  <line x1="50" y1="180" x2="50" y2="25" stroke="#333" stroke-width="1.5"/>
  <text x="90" y="195" text-anchor="middle" font-size="10" fill="#333">F\u00fatbol</text>
  <text x="175" y="195" text-anchor="middle" font-size="10" fill="#333">Baloncesto</text>
  <text x="260" y="195" text-anchor="middle" font-size="10" fill="#333">Nataci\u00f3n</text>
  <text x="345" y="195" text-anchor="middle" font-size="10" fill="#333">Atletismo</text>
  <text x="40" y="180" text-anchor="end" font-size="9" fill="#666">0</text>
  <text x="40" y="100" text-anchor="end" font-size="9" fill="#666">20</text>
  <text x="40" y="40" text-anchor="end" font-size="9" fill="#666">40</text>
  <line x1="50" y1="100" x2="380" y2="100" stroke="#ccc" stroke-width="0.5" stroke-dasharray="3"/>
  <line x1="50" y1="40" x2="380" y2="40" stroke="#ccc" stroke-width="0.5" stroke-dasharray="3"/>
  <rect x="62" y="54" width="25" height="126" fill="#2196F3" opacity="0.8" rx="2"/>
  <rect x="93" y="84" width="25" height="96" fill="#E91E63" opacity="0.8" rx="2"/>
  <rect x="147" y="100" width="25" height="80" fill="#2196F3" opacity="0.8" rx="2"/>
  <rect x="178" y="90" width="25" height="90" fill="#E91E63" opacity="0.8" rx="2"/>
  <rect x="232" y="110" width="25" height="70" fill="#2196F3" opacity="0.8" rx="2"/>
  <rect x="263" y="100" width="25" height="80" fill="#E91E63" opacity="0.8" rx="2"/>
  <rect x="317" y="130" width="25" height="50" fill="#2196F3" opacity="0.8" rx="2"/>
  <rect x="348" y="120" width="25" height="60" fill="#E91E63" opacity="0.8" rx="2"/>
  <text x="74" y="50" text-anchor="middle" font-size="9" fill="#fff">45</text>
  <text x="105" y="80" text-anchor="middle" font-size="9" fill="#fff">30</text>
  <text x="159" y="96" text-anchor="middle" font-size="9" fill="#fff">20</text>
  <text x="190" y="86" text-anchor="middle" font-size="9" fill="#fff">25</text>
  <text x="244" y="106" text-anchor="middle" font-size="9" fill="#fff">15</text>
  <text x="275" y="96" text-anchor="middle" font-size="9" fill="#fff">20</text>
  <text x="329" y="126" text-anchor="middle" font-size="9" fill="#fff">10</text>
  <text x="360" y="116" text-anchor="middle" font-size="9" fill="#fff">15</text>
  <rect x="60" y="206" width="10" height="10" fill="#2196F3" opacity="0.8"/>
  <text x="73" y="215" font-size="10" fill="#333">Hombres</text>
  <rect x="140" y="206" width="10" height="10" fill="#E91E63" opacity="0.8"/>
  <text x="153" y="215" font-size="10" fill="#333">Mujeres</text>
</svg>`,
    options: ['80', '90', '85', '95'],
    correct: 1,
    explanation: { correct: 'Suma de mujeres: 30 + 25 + 20 + 15 = 90.', wrongs: ['Sumaste hombres en lugar de mujeres', 'Opci\u00f3n correcta', 'Olvidaste incluir un deporte', 'Sumaste incorrectamente'] }
  },
  {
    id: 'MT15', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'dificil',
    question: `Un tanque de agua cil\u00edndrico en una finca antioque\u00f1a tiene 2 m de radio y 3 m de altura. \u00bfCu\u00e1l es su volumen? (Use \u03c0 = 3,14)`,
    svg: `<svg viewBox="0 0 250 240" xmlns="http://www.w3.org/2000/svg" style="max-width:250px">
  <ellipse cx="125" cy="45" rx="80" ry="20" fill="#B3E5FC" stroke="#0288D1" stroke-width="2"/>
  <rect x="45" y="45" width="160" height="150" fill="#E1F5FE" stroke="#0288D1" stroke-width="2"/>
  <ellipse cx="125" cy="195" rx="80" ry="20" fill="#B3E5FC" stroke="#0288D1" stroke-width="2"/>
  <rect x="45" y="45" width="160" height="150" fill="#E1F5FE" stroke="#0288D1" stroke-width="2" opacity="0.6"/>
  <ellipse cx="125" cy="45" rx="80" ry="20" fill="none" stroke="#0288D1" stroke-width="2"/>
  <ellipse cx="125" cy="195" rx="80" ry="20" fill="none" stroke="#0288D1" stroke-width="2"/>
  <!-- Water fill -->
  <rect x="48" y="100" width="154" height="95" fill="#4FC3F7" opacity="0.5"/>
  <ellipse cx="125" cy="100" rx="77" ry="18" fill="#4FC3F7" opacity="0.5" stroke="#0288D1" stroke-width="1"/>
  <!-- Height label -->
  <line x1="20" y1="45" x2="20" y2="195" stroke="#666" stroke-width="0.8" stroke-dasharray="3"/>
  <text x="18" y="125" text-anchor="end" font-size="13" fill="#E91E63" font-weight="bold">h = 3 m</text>
  <!-- Radius label -->
  <line x1="45" y1="215" x2="125" y2="215" stroke="#666" stroke-width="0.8"/>
  <text x="85" y="228" text-anchor="middle" font-size="13" fill="#4CAF50" font-weight="bold">r = 2 m</text>
  <text x="125" y="235" text-anchor="middle" font-size="10" fill="#666">V = \u03c0r\u00b2h</text>
</svg>`,
    options: ['18,84 m\u00b3', '37,68 m\u00b3', '9,42 m\u00b3', '28,26 m\u00b3'],
    correct: 1,
    explanation: { correct: 'V = \u03c0r\u00b2h = 3,14 x 2\u00b2 x 3 = 3,14 x 4 x 3 = 37,68 m\u00b3.', wrongs: ['Usaste \u03c0 x r x h, olvidaste elevar al cuadrado', 'Opci\u00f3n correcta', 'Usaste el di\u00e1metro en lugar del radio: 3,14 x 4 x 3 = 37,68? Revisa', 'Calculaste el \u00e1rea de la base solamente'] }
  },
  {
    id: 'MT16', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'facil',
    question: `Un repartidor en Manizales gana $15.000 por hora. Si trabaj\u00f3 6 horas el lunes y 4 horas el martes, \u00bfcu\u00e1nto gan\u00f3 en total?`,
    options: ['$150.000', '$120.000', '$90.000', '$200.000'],
    correct: 0,
    explanation: { correct: 'Total horas = 6 + 4 = 10 horas. Ganancia = 10 x $15.000 = $150.000.', wrongs: ['Opci\u00f3n correcta', 'Calculaste solo 8 horas', 'Calculaste solo 6 horas', 'Multiplicaste 15.000 x (6x4) = 360.000?'] }
  },
  {
    id: 'MT17', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'media',
    question: `Para preparar limonada, Mar\u00eda usa 3 limones por cada litro de agua. Si tiene 15 limones y quiere usar toda el agua en la misma proporci\u00f3n, \u00bfcu\u00e1ntos litros de limonada puede preparar?`,
    options: ['3 litros', '5 litros', '4 litros', '6 litros'],
    correct: 1,
    explanation: { correct: 'Proporci\u00f3n: 3 limones / 1 litro = 15 limones / x litros -> x = 15/3 = 5 litros.', wrongs: ['Dividiste al rev\u00e9s: 3/15', 'Opci\u00f3n correcta', 'Sumaste 15 - 3', 'Multiplicaste 3 x 15'] }
  },
  {
    id: 'MT18', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'dificil',
    question: `En una urna hay 4 tarjetas numeradas del 1 al 4. Se extraen dos tarjetas una tras otra sin reposici\u00f3n. \u00bfCu\u00e1l es la probabilidad de que la suma de los n\u00fameros sea 5?`,
    options: ['1/3', '1/4', '1/6', '1/2'],
    correct: 0,
    explanation: { correct: 'Total de pares ordenados: 4 x 3 = 12. Pares que suman 5: (1,4), (2,3), (3,2), (4,1) = 4. Probabilidad = 4/12 = 1/3.', wrongs: ['Opci\u00f3n correcta', 'Consideraste solo pares no ordenados: (1,4) y (2,3) = 2/6?', 'Contaste mal las combinaciones', 'Demasiado alta: revisa los pares posibles'] }
  },
  // ===== SOCIALES ADICIONALES =====
  {
    id: 'SC13',
    area: 'sociales',
    areaName: 'Sociales y Ciudadan\u00eda',
    difficulty: 'dificil',
    context: `"El Frente Nacional (1958-1974) fue un pacto pol\u00edtico entre los partidos Liberal y Conservador para alternarse la presidencia y distribuirse equitativamente la burocracia estatal. Este acuerdo puso fin a la Violencia bipartidista pero excluy\u00f3 a otras fuerzas pol\u00edticas del poder."`,
    question: `Una consecuencia del Frente Nacional fue:`,
    options: ['La eliminaci\u00f3n total de la violencia en Colombia', 'La alternancia en el poder entre liberales y conservadores con exclusi\u00f3n de otras fuerzas pol\u00edticas', 'El establecimiento de un sistema unipartidista', 'La prohibici\u00f3n de elecciones populares'],
    correct: 1,
    explanation: {
      correct: 'El Frente Nacional estableci\u00f3 la alternancia presidencial entre liberales y conservadores (4 per\u00edodos de 4 a\u00f1os) y la paridad burocr\u00e1tica. Esto excluy\u00f3 del poder a movimientos pol\u00edticos distintos a los dos partidos tradicionales, lo que gener\u00f3 descontento y contribuy\u00f3 al surgimiento de guerrillas como las FARC y el ELN.',
      wrongs: [
        'No elimin\u00f3 la violencia; surgieron nuevas guerrillas y la violencia se transform\u00f3',
        'Opci\u00f3n correcta',
        'Los dos partidos mantuvieron su identidad separada; no se fusionaron en uno solo',
        'S\u00ed hubo elecciones, pero solo entre candidatos del Frente Nacional'
      ]
    }
  },
  {
    id: 'SC14',
    area: 'sociales',
    areaName: 'Sociales y Ciudadan\u00eda',
    difficulty: 'facil',
    question: `Seg\u00fan la Constituci\u00f3n de Colombia, la funci\u00f3n principal de la Rama Legislativa es:`,
    options: ['Administrar justicia', 'Ejecutar y hacer cumplir las leyes', 'Crear, modificar y derogar las leyes', 'Controlar la pol\u00edtica monetaria'],
    correct: 2,
    explanation: {
      correct: 'La Rama Legislativa (Congreso de la Rep\u00fablica, compuesto por Senado y C\u00e1mara de Representantes) tiene como funci\u00f3n principal la creaci\u00f3n, modificaci\u00f3n y derogaci\u00f3n de leyes. Adem\u00e1s, ejerce control pol\u00edtico sobre el Gobierno y reforma la Constituci\u00f3n mediante actos legislativos.',
      wrongs: [
        'Administrar justicia es funci\u00f3n de la Rama Judicial',
        'Ejecutar las leyes es funci\u00f3n de la Rama Ejecutiva',
        'Opci\u00f3n correcta',
        'La pol\u00edtica monetaria es funci\u00f3n del Banco de la Rep\u00fablica, no del Congreso'
      ]
    }
  },
  {
    id: 'SC15',
    area: 'sociales',
    areaName: 'Sociales y Ciudadan\u00eda',
    difficulty: 'facil',
    question: `En Colombia, la revocatoria del mandato es un mecanismo de participaci\u00f3n ciudadana que permite:`,
    options: ['Elegir a los candidatos presidenciales', 'Dar por terminado el mandato de un gobernante electo antes de que finalice su per\u00edodo', 'Cambiar la Constituci\u00f3n Nacional', 'Crear nuevas leyes desde el Congreso'],
    correct: 1,
    explanation: {
      correct: 'La revocatoria del mandato (art. 103 Constituci\u00f3n, Ley 134 de 1994) permite a los ciudadanos dar por terminado el mandato de un gobernante o funcionario electo (alcaldes, gobernadores) antes del fin de su per\u00edodo, cuando considere que no ha cumplido su programa de gobierno.',
      wrongs: [
        'La elecci\u00f3n de candidatos se hace mediante el voto popular, no mediante revocatoria',
        'Opci\u00f3n correcta',
        'La Constituci\u00f3n se reforma mediante acto legislativo del Congreso o referendo constitucional',
        'La creaci\u00f3n de leyes es funci\u00f3n del Congreso, no de la revocatoria del mandato'
      ]
    }
  },
  {
    id: 'SC16',
    area: 'sociales',
    areaName: 'Sociales y Ciudadan\u00eda',
    difficulty: 'dificil',
    context: `"El conflicto armado colombiano ha tenido m\u00faltiples causas: la exclusi\u00f3n pol\u00edtica, la desigualdad en la tenencia de la tierra, el narcotr\u00e1fico y la debilidad institucional en zonas rurales. Los di\u00e1logos de paz con las FARC, que culminaron en el Acuerdo Final de 2016, buscaron abordar estas causas estructurales."`,
    question: `Seg\u00fan el texto, una de las causas estructurales del conflicto armado colombiano es:`,
    options: ['La sobrepoblaci\u00f3n en las grandes ciudades', 'La desigualdad en la tenencia de la tierra y la exclusi\u00f3n pol\u00edtica', 'La falta de recursos naturales en el pa\u00eds', 'La excesiva presencia del Estado en todo el territorio'],
    correct: 1,
    explanation: {
      correct: 'El texto menciona "la desigualdad en la tenencia de la tierra" y "la exclusi\u00f3n pol\u00edtica" como causas del conflicto. Estos son problemas hist\u00f3ricos: la concentraci\u00f3n de la propiedad rural y la falta de canales de participaci\u00f3n para sectores excluidos, que el Acuerdo de Paz de 2016 busc\u00f3 enfrentar mediante la reforma rural integral.',
      wrongs: [
        'El conflicto ha sido predominantemente rural, no causado por la sobrepoblaci\u00f3n urbana',
        'Opci\u00f3n correcta',
        'Colombia es un pa\u00eds rico en recursos naturales; la desigualdad en su distribuci\u00f3n es parte del problema',
        'El problema ha sido la ausencia del Estado en amplias zonas rurales, no su exceso de presencia'
      ]
    }
  },
  {
    id: 'SC17',
    area: 'sociales',
    areaName: 'Sociales y Ciudadan\u00eda',
    difficulty: 'media',
    context: `"El Derecho Internacional Humanitario (DIH), tambi\u00e9n conocido como las normas de la guerra, busca limitar los efectos de los conflictos armados. Protege a las personas que no participan o han dejado de participar en las hostilidades y restringe los medios y m\u00e9todos de guerra."`,
    question: `Seg\u00fan el texto, el Derecho Internacional Humanitario se aplica principalmente en situaciones de:`,
    options: ['Conflictos armados, para proteger a civiles y limitar los m\u00e9todos de guerra', 'Desastres naturales, para coordinar la ayuda humanitaria', 'Elecciones democr\u00e1ticas, para garantizar la transparencia', 'Delitos comunes, para proteger los derechos de las v\u00edctimas'],
    correct: 0,
    explanation: {
      correct: 'El DIH se aplica en situaciones de conflicto armado (internacional o no internacional). Sus principios fundamentales son: distinci\u00f3n (entre civiles y combatientes), proporcionalidad, limitaci\u00f3n (no hay libertad ilimitada en la elecci\u00f3n de medios de guerra) y prohibici\u00f3n de causar sufrimiento innecesario.',
      wrongs: [
        'Opci\u00f3n correcta',
        'Los desastres naturales son atendidos por el derecho interno y la cooperaci\u00f3n internacional, no por el DIH',
        'Las elecciones se rigen por el derecho electoral y constitucional, no por el DIH',
        'Los delitos comunes se rigen por el derecho penal ordinario'
      ]
    }
  },
  // ===== CIENCIAS ADICIONALES =====
  {
    id: 'CN13',
    area: 'ciencias',
    areaName: 'Ciencias Naturales',
    difficulty: 'media',
    context: `"En un ecosistema de pradera se encuentran los siguientes organismos: pasto (productor), saltamontes (herb\u00edvoro), ranas (carn\u00edvoro secundario) y halcones (superdepredador). Se aplica un pesticida que reduce dr\u00e1sticamente la poblaci\u00f3n de saltamontes."`,
    question: `\u00bfCu\u00e1l ser\u00e1 el efecto m\u00e1s probable a corto plazo sobre la poblaci\u00f3n de ranas?`,
    options: ['Aumentar\u00e1 porque hay menos saltamontes que compitan por el pasto', 'Disminuir\u00e1 porque se reduce la disponibilidad de su presa principal', 'No se ver\u00e1 afectada porque las ranas pueden comer pasto directamente', 'Aumentar\u00e1 porque los halcones tendr\u00e1n menos saltamontes para cazar'],
    correct: 1,
    explanation: {
      correct: 'En la cadena tr\u00f3fica pasto \u2192 saltamontes \u2192 ranas \u2192 halcones, las ranas dependen de los saltamontes como fuente principal de alimento. Al reducirse dr\u00e1sticamente la poblaci\u00f3n de saltamontes, las ranas pierden su presa principal y su poblaci\u00f3n disminuir\u00e1 por falta de alimento.',
      wrongs: ['Los saltamontes no compiten con las ranas por el pasto; las ranas son carn\u00edvoras, no herb\u00edvoras', 'Opci\u00f3n correcta', 'Las ranas son carn\u00edvoras (se alimentan de insectos), no pueden consumir pasto directamente', 'Los halcones se alimentan de ranas, no de saltamontes; la reducci\u00f3n de halcones no beneficia a las ranas']
    }
  },
  {
    id: 'CN14',
    area: 'ciencias',
    areaName: 'Ciencias Naturales',
    difficulty: 'dificil',
    context: `"Se tienen dos ondas del mismo tipo que se propagan en la misma direcci\u00f3n. La onda A tiene una frecuencia de 440 Hz y una amplitud de 2 cm. La onda B tiene una frecuencia de 880 Hz y una amplitud de 1 cm."`,
    question: `Si ambas ondas viajan a la misma velocidad en el mismo medio, \u00bfcu\u00e1l de las siguientes afirmaciones es correcta?`,
    options: ['La onda A tiene mayor longitud de onda que la onda B', 'La onda B tiene mayor longitud de onda que la onda A', 'Las dos ondas tienen la misma longitud de onda', 'La onda A transporta m\u00e1s energ\u00eda porque tiene menor frecuencia'],
    correct: 0,
    explanation: {
      correct: 'La velocidad de onda es v = \u03bb\u00b7f. Como la velocidad es la misma para ambas, la longitud de onda \u03bb = v/f. La onda A (440 Hz) tiene menor frecuencia, por lo tanto mayor longitud de onda que la B (880 Hz). La energ\u00eda de una onda depende de la amplitud al cuadrado, no de la frecuencia.',
      wrongs: ['Opci\u00f3n correcta', 'A mayor frecuencia, menor longitud de onda; la onda B tiene el doble de frecuencia, as\u00ed que tiene la mitad de longitud de onda', 'La longitud de onda depende de la frecuencia: \u03bb = v/f; si f es diferente, \u03bb es diferente', 'La energ\u00eda de una onda es proporcional al cuadrado de la amplitud; la onda A tiene mayor amplitud y transporta m\u00e1s energ\u00eda']
    }
  },
  {
    id: 'CN15',
    area: 'ciencias',
    areaName: 'Ciencias Naturales',
    difficulty: 'facil',
    context: `"Un equipo de bi\u00f3logos marinos estudia un arrecife de coral. Observan que ciertas \u00e1reas del arrecife est\u00e1n blanqueadas y con poco crecimiento, mientras que otras \u00e1reas cercanas tienen corales saludables y coloridos. Miden la temperatura del agua y encuentran que las \u00e1reas blanqueadas est\u00e1n 2\u00b0C m\u00e1s c\u00e1lidas que las saludables."`,
    question: `\u00bfCu\u00e1l es la relaci\u00f3n m\u00e1s probable entre la temperatura y el blanqueamiento?`,
    options: ['El agua m\u00e1s fr\u00eda mata las algas simbi\u00f3ticas que dan color al coral', 'El aumento de temperatura provoca que los corales expulsen sus algas simbi\u00f3ticas (zooxantelas), perdiendo color', 'La temperatura alta hace que el coral produzca m\u00e1s pigmento protector', 'El agua c\u00e1lida acelera el crecimiento del coral, consumiendo m\u00e1s nutrientes'],
    correct: 1,
    explanation: {
      correct: 'El blanqueamiento de corales ocurre cuando la temperatura del agua supera el umbral tolerado por las zooxantelas (algas simbi\u00f3ticas que viven en los tejidos del coral). El estr\u00e9s t\u00e9rmico hace que el coral expulse estas algas, que son las que proporcionan la mayor parte del color y nutrientes al coral mediante fotos\u00edntesis.',
      wrongs: ['El blanqueamiento se asocia con temperaturas m\u00e1s altas, no m\u00e1s fr\u00edas', 'Opci\u00f3n correcta', 'El coral no produce pigmento protector; su color proviene de las algas simbi\u00f3ticas', 'El calor estresa al coral y reduce su crecimiento, no lo acelera']
    }
  },
  {
    id: 'CN16',
    area: 'ciencias',
    areaName: 'Ciencias Naturales',
    difficulty: 'dificil',
    context: `"En un laboratorio, se analiza la combusti\u00f3n completa de 2 moles de etanol (C\u2082H\u2085OH) en presencia de ox\u00edgeno. La reacci\u00f3n produce di\u00f3xido de carbono y agua."`,
    question: `\u00bfCu\u00e1ntos moles de CO\u2082 se producen en esta reacci\u00f3n?`,
    options: ['2 moles', '4 moles', '6 moles', '8 moles'],
    correct: 1,
    explanation: {
      correct: 'La ecuaci\u00f3n balanceada de combusti\u00f3n del etanol es: C\u2082H\u2085OH + 3O\u2082 \u2192 2CO\u2082 + 3H\u2082O. Por cada mol de etanol se producen 2 moles de CO\u2082. Para 2 moles de etanol: 2 \u00d7 2 = 4 moles de CO\u2082.',
      wrongs: ['2 moles de CO\u2082 se producen a partir de 1 mol de etanol, no de 2', 'Opci\u00f3n correcta', '6 moles requerir\u00edan 3 moles de etanol inicial', '8 moles requerir\u00edan 4 moles de etanol inicial']
    }
  },
  {
    id: 'CN17',
    area: 'ciencias',
    areaName: 'Ciencias Naturales',
    difficulty: 'media',
    context: `"Un estudio de salud p\u00fablica compara dos comunidades: en la comunidad A, el 90% de los ni\u00f1os est\u00e1 vacunado contra el sarampi\u00f3n; en la comunidad B, solo el 40% est\u00e1 vacunado. Se reporta un brote de sarampi\u00f3n en la comunidad B pero no en la A."`,
    question: `\u00bfQu\u00e9 concepto epidemiol\u00f3gico explica mejor esta diferencia?`,
    svg: `<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg" style="max-width:400px">
  <text x="100" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Comunidad A - 90% vacunada</text>
  <text x="300" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Comunidad B - 40% vacunada</text>
  <!-- People dots - Community A -->
  <circle cx="55" cy="50" r="6" fill="#4CAF50"/><circle cx="75" cy="55" r="6" fill="#4CAF50"/><circle cx="95" cy="45" r="6" fill="#4CAF50"/>
  <circle cx="115" cy="52" r="6" fill="#4CAF50"/><circle cx="135" cy="48" r="6" fill="#4CAF50"/><circle cx="55" cy="75" r="6" fill="#4CAF50"/>
  <circle cx="75" cy="80" r="6" fill="#4CAF50"/><circle cx="95" cy="78" r="6" fill="#4CAF50"/><circle cx="115" cy="82" r="6" fill="#4CAF50"/>
  <circle cx="135" cy="72" r="6" fill="#4CAF50"/><circle cx="55" cy="100" r="6" fill="#4CAF50"/><circle cx="75" cy="105" r="6" fill="#4CAF50"/>
  <circle cx="95" cy="102" r="6" fill="#4CAF50"/><circle cx="115" cy="98" r="6" fill="#4CAF50"/><circle cx="135" cy="95" r="6" fill="#4CAF50"/>
  <circle cx="55" cy="125" r="6" fill="#4CAF50"/><circle cx="75" cy="128" r="6" fill="#4CAF50"/><circle cx="95" cy="120" r="6" fill="#4CAF50"/>
  <circle cx="115" cy="125" r="6" fill="#4CAF50"/><circle cx="135" cy="122" r="6" fill="#4CAF50"/><circle cx="55" cy="148" r="6" fill="#4CAF50"/>
  <circle cx="75" cy="145" r="6" fill="#4CAF50"/><circle cx="95" cy="142" r="6" fill="#4CAF50"/><circle cx="115" cy="150" r="6" fill="#4CAF50"/>
  <circle cx="135" cy="140" r="6" fill="#4CAF50"/><circle cx="150" cy="50" r="6" fill="#FF5252"/><circle cx="150" cy="75" r="6" fill="#FF5252"/>
  <circle cx="150" cy="100" r="6" fill="#FF5252"/>
  <!-- Shield -->
  <path d="M100 155 L100 165 L120 160 L100 155" fill="#4CAF50" opacity="0.6"/>
  <text x="100" y="173" text-anchor="middle" font-size="9" fill="#4CAF50" font-weight="bold">PROTEGIDA</text>
  <!-- People dots - Community B -->
  <circle cx="255" cy="50" r="6" fill="#4CAF50"/><circle cx="275" cy="55" r="6" fill="#4CAF50"/><circle cx="295" cy="45" r="6" fill="#4CAF50"/>
  <circle cx="315" cy="52" r="6" fill="#4CAF50"/><circle cx="335" cy="48" r="6" fill="#4CAF50"/><circle cx="255" cy="75" r="6" fill="#4CAF50"/>
  <circle cx="275" cy="80" r="6" fill="#4CAF50"/><circle cx="295" cy="78" r="6" fill="#4CAF50"/><circle cx="315" cy="82" r="6" fill="#4CAF50"/>
  <circle cx="335" cy="72" r="6" fill="#4CAF50"/><circle cx="255" cy="100" r="6" fill="#4CAF50"/><circle cx="275" cy="105" r="6" fill="#4CAF50"/>
  <circle cx="295" cy="102" r="6" fill="#4CAF50"/><circle cx="315" cy="98" r="6" fill="#4CAF50"/><circle cx="335" cy="95" r="6" fill="#4CAF50"/>
  <circle cx="255" cy="125" r="6" fill="#4CAF50"/><circle cx="275" cy="128" r="6" fill="#4CAF50"/><circle cx="295" cy="120" r="6" fill="#4CAF50"/>
  <circle cx="315" cy="125" r="6" fill="#4CAF50"/><circle cx="335" cy="122" r="6" fill="#4CAF50"/>
  <!-- Unvaccinated -->
  <circle cx="355" cy="50" r="6" fill="#FF5252"/><circle cx="355" cy="75" r="6" fill="#FF5252"/><circle cx="355" cy="100" r="6" fill="#FF5252"/>
  <circle cx="355" cy="125" r="6" fill="#FF5252"/><circle cx="375" cy="55" r="6" fill="#FF5252"/><circle cx="375" cy="80" r="6" fill="#FF5252"/>
  <circle cx="375" cy="105" r="6" fill="#FF5252"/><circle cx="375" cy="130" r="6" fill="#FF5252"/><circle cx="390" cy="65" r="6" fill="#FF5252"/>
  <circle cx="390" cy="95" r="6" fill="#FF5252"/>
  <!-- Virus spread -->
  <text x="320" y="155" font-size="14" fill="#E91E63">BROTE</text>
  <path d="M355 50 Q365 40 370 50 Q375 60 365 65" fill="none" stroke="#E91E63" stroke-width="1.5"/>
  <circle cx="362" cy="42" r="3" fill="#E91E63" opacity="0.6"/>
  <circle cx="370" cy="35" r="2" fill="#E91E63" opacity="0.4"/>
</svg>`,
    options: ['Inmunidad de reba\u00f1o: cuando un porcentaje suficiente de la poblaci\u00f3n est\u00e1 vacunado, se protege incluso a quienes no lo est\u00e1n', 'Los ni\u00f1os de la comunidad A son gen\u00e9ticamente resistentes al sarampi\u00f3n', 'La comunidad A tiene mejor nutrici\u00f3n que la B, lo que previene la infecci\u00f3n', 'El sarampi\u00f3n solo afecta a comunidades con baja densidad poblacional'],
    correct: 0,
    explanation: {
      correct: 'La inmunidad de reba\u00f1o ocurre cuando un alto porcentaje de la poblaci\u00f3n est\u00e1 vacunado (t\u00edpicamente >90% para el sarampi\u00f3n), lo que interrumpe la cadena de transmisi\u00f3n del virus. En la comunidad A, aunque el 10% no est\u00e1 vacunado, el virus no encuentra suficientes personas susceptibles para propagarse. En la comunidad B, hay suficientes personas susceptibles para mantener la transmisi\u00f3n.',
      wrongs: ['Opci\u00f3n correcta', 'La resistencia gen\u00e9tica no explica la diferencia; el sarampi\u00f3n afecta a cualquier persona no inmune independientemente de su gen\u00e9tica', 'La nutrici\u00f3n puede influir en la gravedad de la enfermedad pero no previene la infecci\u00f3n por sarampi\u00f3n', 'El sarampi\u00f3n se propaga en cualquier comunidad con personas susceptibles, independientemente de la densidad poblacional']
    }
  },
  {
    id: 'CN18',
    area: 'ciencias',
    areaName: 'Ciencias Naturales',
    difficulty: 'facil',
    context: `"Un grupo de estudiantes construye un term\u00f3metro casero con una botella de vidrio, agua coloreada y un pitillo. Al colocar la botella en agua caliente, observan que el nivel del l\u00edquido en el pitillo sube. Al colocarla en agua con hielo, el nivel baja."`,
    question: `\u00bfQu\u00e9 propiedad de la materia explica este comportamiento?`,
    options: ['La densidad del agua disminuye al enfriarse, por eso el nivel baja', 'El agua se dilata al calentarse y se contrae al enfriarse, cambiando su volumen', 'El calor convierte el agua en gas, que ocupa m\u00e1s espacio', 'El vidrio de la botella se expande m\u00e1s que el agua al calentarse'],
    correct: 1,
    explanation: {
      correct: 'La mayor\u00eda de las sustancias se dilatan al aumentar su temperatura (expansi\u00f3n t\u00e9rmica) y se contraen al disminuirla. El agua caliente ocupa m\u00e1s volumen que la misma masa de agua fr\u00eda, lo que hace que el nivel suba por el pitillo. Al enfriarse, el agua se contrae y el nivel baja.',
      wrongs: ['El agua es m\u00e1s densa a 4\u00b0C que a temperaturas m\u00e1s altas; pero sigue siendo l\u00edquida, no se evapora', 'Opci\u00f3n correcta', 'El agua no se convierte en gas a las temperaturas del experimento (menos de 100\u00b0C)', 'El vidrio tambi\u00e9n se expande, pero el coeficiente de expansi\u00f3n del agua es mayor, por eso el nivel sube']
    }
  },

  {
    id: 'LC18',
    area: 'lectura',
    areaName: 'Lectura Cr\u00edtica',
    difficulty: 'dificil',
    context: `"La filosof\u00eda est\u00e1 escrita en ese grand\u00edsimo libro que continuamente tenemos abierto ante los ojos (digo, el universo), pero no se puede entender si antes no se aprende a entender la lengua, a conocer los caracteres en que est\u00e1 escrito. Est\u00e1 escrito en lengua matem\u00e1tica y sus caracteres son tri\u00e1ngulos, c\u00edrculos y otras figuras geom\u00e9tricas, sin las cuales es imposible entender ni una palabra; sin ellos es como girar vanamente en un oscuro laberinto." - Galileo Galilei, "El ensayador" (1623).`,
    question: `Seg\u00fan Galileo, la relaci\u00f3n entre el universo y las matem\u00e1ticas es de:`,
    options: [
      'El universo puede entenderse sin necesidad de las matem\u00e1ticas, pues la observaci\u00f3n directa basta',
      'Las matem\u00e1ticas son el lenguaje en el que est\u00e1 escrito el universo, por lo que son indispensables para comprenderlo',
      'Las matem\u00e1ticas son una invenci\u00f3n humana que no se corresponde con la realidad f\u00edsica',
      'Solo los tri\u00e1ngulos y c\u00edrculos geom\u00e9tricos pueden explicar los fen\u00f3menos naturales'
    ],
    correct: 1,
    explanation: {
      correct: 'Galileo afirma que el universo es un "libro" escrito en "lengua matem\u00e1tica" y que sin conocer esta lengua es imposible entenderlo. Esta met\u00e1fora establece que las matem\u00e1ticas no son un mero instrumento, sino el lenguaje fundamental de la naturaleza.',
      wrongs: [
        'Galileo dice expl\u00edcitamente que sin matem\u00e1ticas "es imposible entender ni una palabra" del universo',
        'Opci\u00f3n correcta',
        'Galileo sostiene que las matem\u00e1ticas son el lenguaje del universo, no una invenci\u00f3n arbitraria',
        'Galileo menciona tri\u00e1ngulos y c\u00edrculos como ejemplos, no como los \u00fanicos caracteres posibles'
      ]
    }
  },
  // ===== MÁS LECTURA CRÍTICA =====
  {
    id: 'LC19',
    area: 'lectura',
    areaName: 'Lectura Cr\u00edtica',
    difficulty: 'media',
    context: `"En nuestros d\u00edas, el castigo ha tendido a convertirse en la parte m\u00e1s oculta del proceso penal, y ha tendido a perder toda funci\u00f3n de ostentaci\u00f3n. Queda todav\u00eda, sin duda, un fondo 'supliciante' en los mecanismos modernos de la justicia penal \u2014un fondo que no est\u00e1 del todo dominado\u2014, pero cada vez es menos perceptible. Se trata de una justicia que ya no asume p\u00fablicamente la parte de violencia que est\u00e1 ligada a su ejercicio." - Michel Foucault, "Vigilar y castigar" (1975).`,
    question: `Seg\u00fan Foucault, la transformaci\u00f3n del sistema penal moderno se caracteriza por:`,
    options: ['La eliminaci\u00f3n completa de toda forma de castigo f\u00edsico', 'El ocultamiento de la violencia del castigo detr\u00e1s de la aparente neutralidad de la justicia', 'El aumento de la ostentaci\u00f3n p\u00fablica de las penas', 'La desaparici\u00f3n de todo mecanismo de control social'],
    correct: 1,
    explanation: {
      correct: 'Foucault sostiene que el castigo se ha vuelto "la parte m\u00e1s oculta del proceso penal" y que la justicia "ya no asume p\u00fablicamente la parte de violencia" de su ejercicio. La violencia punitiva no ha desaparecido, sino que se ha vuelto menos perceptible, oculta tras procedimientos aparentemente neutrales.',
      wrongs: [
        'Foucault dice que a\u00fan "queda un fondo supliciante" no del todo dominado; la violencia no se ha eliminado',
        'Opci\u00f3n correcta',
        'El texto afirma lo contrario: el castigo ha perdido "toda funci\u00f3n de ostentaci\u00f3n"',
        'Foucault describe una transformaci\u00f3n de los mecanismos de control, no su desaparici\u00f3n'
      ]
    }
  },
  {
    id: 'LC20',
    area: 'lectura',
    areaName: 'Lectura Cr\u00edtica',
    difficulty: 'dificil',
    context: `"\u2014\u00bfEn qu\u00e9 momento se jodi\u00f3 el Per\u00fa? \u2014pregunt\u00f3 Santiago Zavala. El Zavalita de la novela de Mario Vargas Llosa, 'Conversaci\u00f3n en La Catedral' (1969), formula esta pregunta que resuena a lo largo de toda la obra como un intento por comprender la decadencia moral y pol\u00edtica de su pa\u00eds a trav\u00e9s de los recuerdos y las conversaciones con su padre y otros personajes.`,
    question: `La pregunta "\u00bfEn qu\u00e9 momento se jodi\u00f3 el Per\u00fa?" funciona en la novela como:`,
    options: ['Una pregunta ret\u00f3rica sin respuesta que expresa el desencanto y la b\u00fasqueda de sentido', 'Una indagaci\u00f3n hist\u00f3rica precisa sobre una fecha espec\u00edfica de la historia peruana', 'Una cr\u00edtica exclusivamente econ\u00f3mica sobre las pol\u00edticas del pa\u00eds', 'Una pregunta que el narrador responde expl\u00edcitamente al final de la obra'],
    correct: 0,
    explanation: {
      correct: 'La pregunta atraviesa toda la novela sin encontrar una respuesta definitiva, funcionando como un motivo recurrente que expresa la desilusi\u00f3n del protagonista y la imposibilidad de se\u00f1alar un \u00fanico momento de quiebre. La obra explora la complejidad de la decadencia a trav\u00e9s de m\u00faltiples voces y temporalidades entrelazadas.',
      wrongs: [
        'Opci\u00f3n correcta',
        'La pregunta no busca una fecha sino que expresa una angustia existencial y una cr\u00edtica social',
        'La pregunta abarca aspectos morales, pol\u00edticos y existenciales, no solo econ\u00f3micos',
        'La novela no ofrece una respuesta \u00fanica; su estructura polif\u00f3nica sugiere que no hay una sola causa'
      ]
    }
  },
  {
    id: 'LC21',
    area: 'lectura',
    areaName: 'Lectura Cr\u00edtica',
    difficulty: 'facil',
    context: `"Cuando contemplo el mundo exterior, no puedo dejar de pensar que el ojo no fue dise\u00f1ado por un proceso racional, sino que es el resultado de millones de a\u00f1os de peque\u00f1as variaciones favorables. Cada min\u00fascula mejora en la visi\u00f3n, por leve que fuera, proporcionaba una ventaja a su portador, permiti\u00e9ndole sobrevivir y reproducirse con mayor \u00e9xito." - Adaptado de Charles Darwin, "El origen de las especies" (1859).`,
    question: `El texto explica la formaci\u00f3n del ojo humano mediante:`,
    options: ['Un acto de dise\u00f1o inteligente por una fuerza superior', 'La acumulaci\u00f3n gradual de variaciones ventajosas a lo largo de la evoluci\u00f3n', 'Un cambio s\u00fabito y completo en una sola generaci\u00f3n', 'La necesidad del organismo de adaptarse al medio por esfuerzo propio'],
    correct: 1,
    explanation: {
      correct: 'Darwin describe el ojo como el resultado de "millones de a\u00f1os de peque\u00f1as variaciones favorables" donde cada mejora proporcionaba una ventaja. Es un ejemplo cl\u00e1sico de selecci\u00f3n natural actuando gradualmente sobre variaciones heredables.',
      wrongs: [
        'Darwin se opone a la explicaci\u00f3n del dise\u00f1o inteligente; su teor\u00eda explica la complejidad biol\u00f3gica sin recurrir a un dise\u00f1ador',
        'Opci\u00f3n correcta',
        'Darwin enfatiza el car\u00e1cter gradual del proceso ("millones de a\u00f1os", "peque\u00f1as variaciones"), no el cambio s\u00fabito',
        'Darwin no habla de esfuerzo consciente del organismo; las variaciones ocurren al azar y la selecci\u00f3n natural act\u00faa sobre ellas'
      ]
    }
  },
  // ===== MÁS MATEMÁTICAS =====
  {
    id: 'MT19', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'facil',
    question: `Una cometa (barrilete) tiene forma de tri\u00e1ngulo con base de 40 cm y altura de 60 cm. \u00bfCu\u00e1l es su \u00e1rea?`,
    options: ['1.200 cm\u00b2', '2.400 cm\u00b2', '600 cm\u00b2', '1.800 cm\u00b2'],
    correct: 0,
    explanation: { correct: '\u00c1rea del tri\u00e1ngulo = (base x altura) / 2 = (40 x 60) / 2 = 2400/2 = 1.200 cm\u00b2.', wrongs: ['Opci\u00f3n correcta', 'Olvidaste dividir entre 2: 40 x 60 = 2.400', 'Multiplicaste base por altura / 4 en lugar de / 2', 'C\u00e1lculo incorrecto'] }
  },
  {
    id: 'MT20', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'media',
    question: `La distancia de frenado de un auto (en metros) est\u00e1 dada por d(v) = 0,05v\u00b2, donde v es la velocidad en km/h. \u00bfCu\u00e1l es la distancia de frenado a 60 km/h?`,
    options: ['180 m', '90 m', '300 m', '45 m'],
    correct: 0,
    explanation: { correct: 'd(60) = 0,05 x 60\u00b2 = 0,05 x 3600 = 180 metros.', wrongs: ['Opci\u00f3n correcta', 'Calculaste 0,05 x 60 = 3, olvidando elevar al cuadrado', 'Calculaste 0,05 x (60x60x60)?', 'Dividiste 3600/0,05 en lugar de multiplicar'] }
  },
  {
    id: 'MT21', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'dificil',
    question: `En un almac\u00e9n de Bogot\u00e1, un televisor cuesta $1.200.000. Por pago de contado ofrecen dos descuentos sucesivos: 15% y luego 10% adicional. \u00bfCu\u00e1nto se paga?`,
    options: ['$900.000', '$918.000', '$936.000', '$1.020.000'],
    correct: 1,
    explanation: { correct: '1er descuento: 1.200.000 x 0,85 = 1.020.000. 2do descuento: 1.020.000 x 0,90 = 918.000.', wrongs: ['Sumaste los descuentos: 25% de 1.200.000 = 900.000, pero no se suman as\u00ed', 'Opci\u00f3n correcta', 'Aplicaste solo el primer descuento: 1.200.000 x 0,85 = 1.020.000', 'Aplicaste los descuentos en orden inverso'] }
  },
  // ===== MÁS SOCIALES =====
  {
    id: 'SC19',
    area: 'sociales',
    areaName: 'Sociales y Ciudadan\u00eda',
    difficulty: 'media',
    question: `La democracia participativa en Colombia se expresa a trav\u00e9s de:`,
    options: ['El voto cada 4 a\u00f1os \u00fanicamente', 'Mecanismos como el voto, plebiscito, referendo, consulta popular y revocatoria del mandato', 'La elecci\u00f3n indirecta de todos los cargos p\u00fablicos', 'La eliminaci\u00f3n de los partidos pol\u00edticos'],
    correct: 1,
    explanation: {
      correct: 'La Constituci\u00f3n de 1991 establece mecanismos de participaci\u00f3n ciudadana: voto, plebiscito, referendo, consulta popular, cabildo abierto, iniciativa legislativa y revocatoria del mandato (art. 103-106).',
      wrongs: ['La democracia va m\u00e1s all\u00e1 del voto, incluye m\u00faltiples mecanismos de participaci\u00f3n', 'Opci\u00f3n correcta', 'Muchos cargos son de elecci\u00f3n popular directa', 'Los partidos pol\u00edticos son parte esencial de la democracia']
    }
  },
  {
    id: 'SC20',
    area: 'sociales',
    areaName: 'Sociales y Ciudadan\u00eda',
    difficulty: 'dificil',
    question: `El Mercosur es un proceso de integraci\u00f3n regional que incluye como miembros plenos a:`,
    options: ['Colombia, M\u00e9xico y Chile', 'Argentina, Brasil, Paraguay, Uruguay y Venezuela (suspendida)', 'Estados Unidos y Canad\u00e1', 'Per\u00fa, Ecuador y Bolivia'],
    correct: 1,
    explanation: {
      correct: 'Mercosur (Mercado Com\u00fan del Sur) fue creado en 1991 y tiene como miembros plenos a Argentina, Brasil, Paraguay, Uruguay y Venezuela (actualmente suspendida). Colombia es Estado asociado.',
      wrongs: ['Colombia es Estado asociado, no miembro pleno', 'Opci\u00f3n correcta', 'Mercosur es sudamericano, no incluye a Norteam\u00e9rica', 'Per\u00fa y Ecuador son asociados, Bolivia est\u00e1 en proceso de adhesi\u00f3n']
    }
  },
  // ===== MÁS CIENCIAS =====
  {
    id: 'CN19',
    area: 'ciencias',
    areaName: 'Ciencias Naturales',
    difficulty: 'media',
    context: `"Un estudiante analiza el etiquetado nutricional de dos productos. El producto A contiene 20 g de carbohidratos, 5 g de prote\u00ednas y 2 g de grasas por porci\u00f3n. El producto B contiene 5 g de carbohidratos, 15 g de prote\u00ednas y 8 g de grasas por porci\u00f3n."`,
    question: `Si se sabe que los carbohidratos aportan 4 kcal/g, las prote\u00ednas 4 kcal/g y las grasas 9 kcal/g, \u00bfcu\u00e1l de los dos productos aporta m\u00e1s energ\u00eda total por porci\u00f3n?`,
    options: ['Producto A, porque tiene m\u00e1s carbohidratos', 'Producto B, porque tiene m\u00e1s grasas que aportan m\u00e1s calor\u00edas por gramo', 'Ambos aportan la misma cantidad de energ\u00eda', 'Producto A, porque tiene menos grasas'],
    correct: 1,
    explanation: {
      correct: 'Producto A: 20\u00d74 + 5\u00d74 + 2\u00d79 = 80 + 20 + 18 = 118 kcal. Producto B: 5\u00d74 + 15\u00d74 + 8\u00d79 = 20 + 60 + 72 = 152 kcal. El producto B aporta m\u00e1s energ\u00eda porque, aunque tiene menos carbohidratos, su mayor contenido de grasas (9 kcal/g) y prote\u00ednas compensa ampliamente la diferencia.',
      wrongs: [
        'La cantidad de carbohidratos no es el \u00fanico factor; las grasas aportan m\u00e1s del doble de calor\u00edas por gramo',
        'Opci\u00f3n correcta',
        'Al calcular, el producto B aporta 152 kcal frente a 118 kcal del producto A',
        'El producto B tiene m\u00e1s grasas, lo que aumenta su aporte cal\u00f3rico total'
      ]
    }
  },
  {
    id: 'CN20',
    area: 'ciencias',
    areaName: 'Ciencias Naturales',
    difficulty: 'dificil',
    context: `"Un t\u00e9cnico de laboratorio prepara dos pilas galv\u00e1nicas. En la primera, conecta un electrodo de zinc y uno de cobre sumergidos en sus respectivas soluciones de sulfato. En la segunda, conecta un electrodo de magnesio y uno de cobre. Seg\u00fan la serie de actividad: Mg > Zn > Cu."`,
    question: `\u00bfEn cu\u00e1l de las dos pilas se espera una mayor diferencia de potencial y por qu\u00e9?`,
    options: ['En la pila Zn-Cu, porque el zinc es m\u00e1s com\u00fan que el magnesio', 'En la pila Mg-Cu, porque el magnesio tiene mayor tendencia a oxidarse que el zinc', 'En ambas pilas el voltaje ser\u00e1 el mismo porque el cobre es el c\u00e1todo en los dos casos', 'En la pila Zn-Cu, porque el zinc es mejor conductor que el magnesio'],
    correct: 1,
    explanation: {
      correct: 'La diferencia de potencial depende de la diferencia en la tendencia a oxidarse de los metales. Como Mg > Zn en la serie de actividad, el magnesio tiene mayor potencial de oxidaci\u00f3n que el zinc. Por lo tanto, la diferencia de potencial entre Mg y Cu es mayor que entre Zn y Cu, generando un voltaje m\u00e1s alto en la pila Mg-Cu.',
      wrongs: [
        'La abundancia del metal no determina el potencial electroqu\u00edmico; esto depende de su posici\u00f3n en la serie de actividad',
        'Opci\u00f3n correcta',
        'Los metales tienen diferentes potenciales de oxidaci\u00f3n, por lo que los voltajes ser\u00e1n diferentes',
        'La conductividad del metal no determina el voltaje de la celda, sino la diferencia de potenciales de electrodo'
      ]
    }
  },
  // ===== LECTURA CRÍTICA - BLOQUE 3 =====
  {
    id: 'LC22', area: 'lectura', areaName: 'Lectura Cr\u00edtica', difficulty: 'dificil',
    context: `"\u2014\u00bfY qui\u00e9nes son los verdaderos fil\u00f3sofos? \u2014pregunt\u00f3. \u2014Los que aman la verdad \u2014respond\u00ed. \u2014Tienes raz\u00f3n \u2014dijo\u2014, pero expl\u00edcame qu\u00e9 quieres decir con eso. \u2014No es f\u00e1cil de explicar \u2014respond\u00ed\u2014, pero voy a intentarlo. Cuando decimos que alguien ama algo, \u00bfdecimos que ama ese algo entero o solo una parte? \u2014\u00bfC\u00f3mo podr\u00eda amar solo una parte? \u2014Entonces el fil\u00f3sofo, que ama la sabidur\u00eda, la ama entera, no solo una parte." - Plat\u00f3n, "La Rep\u00fablica" (Libro V, 475e-476b, siglo IV a. C.).`,
    question: `En el di\u00e1logo, Plat\u00f3n distingue al verdadero fil\u00f3sofo de quienes no lo son mediante el criterio de:`,
    options: ['El dominio de la ret\u00f3rica y la capacidad de persuadir a las masas', 'El amor integral por la sabidur\u00eda y la verdad, sin contentarse con partes', 'La acumulaci\u00f3n de conocimientos enciclop\u00e9dicos sobre todas las ciencias', 'La capacidad de gobernar a los dem\u00e1s mediante la fuerza de la raz\u00f3n'],
    correct: 1,
    explanation: { correct: 'Plat\u00f3n establece que el fil\u00f3sofo ama la sabidur\u00eda "entera, no solo una parte". A diferencia de quienes se contentan con aspectos parciales del conocimiento o con meras opiniones, el verdadero fil\u00f3sofo aspira a la totalidad de la verdad.', wrongs: ['Plat\u00f3n critica la ret\u00f3rica vac\u00eda; el fil\u00f3sofo busca la verdad, no solo la persuasi\u00f3n', 'Opci\u00f3n correcta', 'El conocimiento enciclop\u00e9dico no equivale al amor por la sabidur\u00eda en sentido plat\u00f3nico', 'Gobernar es una consecuencia, no el criterio distintivo del fil\u00f3sofo'] }
  },
  {
    id: 'LC23', area: 'lectura', areaName: 'Lectura Cr\u00edtica', difficulty: 'media',
    context: `"La modernidad l\u00edquida es una figura del cambio y de la transitoriedad, del desarraigo y del esfuerzo por liberarse. La 'liquidez' es la cualidad de los fluidos: no conservan su forma durante mucho tiempo y est\u00e1n constantemente dispuestos a cambiar. En una sociedad l\u00edquida, las condiciones de actuaci\u00f3n de sus miembros cambian antes de que las formas de actuar se consoliden en unos h\u00e1bitos y en unas rutinas determinadas." - Zygmunt Bauman, "Modernidad l\u00edquida" (2000).`,
    question: `Bauman utiliza la met\u00e1fora de la "liquidez" para describir la sociedad contempor\u00e1nea porque:`,
    options: ['El agua es el recurso m\u00e1s valioso de la era moderna', 'Las relaciones y estructuras sociales han perdido solidez y se transforman constantemente', 'La econom\u00eda global funciona como un fluido que todo lo inunda', 'La tecnolog\u00eda ha hecho que la comunicaci\u00f3n sea m\u00e1s fluida que antes'],
    correct: 1,
    explanation: { correct: 'Bauman caracteriza la modernidad por la "transitoriedad" y el "cambio" constante. Lo l\u00edquido no conserva su forma, al igual que las relaciones, identidades e instituciones en la sociedad contempor\u00e1nea, que se transforman antes de consolidarse en h\u00e1bitos estables.', wrongs: ['Bauman no habla del agua como recurso sino como met\u00e1fora de la inconsistencia de lo social', 'Opci\u00f3n correcta', 'La met\u00e1fora alude a la falta de formas estables, no a la omnipresencia de la econom\u00eda', 'Bauman se refiere a la fragilidad de los v\u00ednculos sociales, no solo a la comunicaci\u00f3n'] }
  },
  {
    id: 'LC24', area: 'lectura', areaName: 'Lectura Cr\u00edtica', difficulty: 'facil',
    context: `"\u2014El coronel no tiene quien le escriba. \u2014No es nada nuevo \u2014dijo\u2014. En los cuarenta a\u00f1os que llevamos de esperanza, tranquilidad y hambre, el coronel no ha tenido nunca quien le escriba." - Gabriel Garc\u00eda M\u00e1rquez, "El coronel no tiene quien le escriba" (1961).`,
    question: `La expresi\u00f3n "cuarenta a\u00f1os de esperanza, tranquilidad y hambre" revela que la situaci\u00f3n del coronel se caracteriza por:`,
    options: ['Una combinaci\u00f3n parad\u00f3jica de esperanza prolongada y condiciones materiales adversas', 'Una vida plena y satisfactoria a pesar de las dificultades econ\u00f3micas', 'La ausencia total de esperanza y la resignaci\u00f3n absoluta', 'Un per\u00edodo de gran prosperidad econ\u00f3mica y felicidad'],
    correct: 0,
    explanation: { correct: 'El texto yuxtapone "esperanza" (que sugiere optimismo) y "tranquilidad" con "hambre" (carencia material). Esta combinaci\u00f3n crea una paradoja: el coronel ha mantenido la esperanza durante d\u00e9cadas mientras enfrentaba condiciones de escasez. La repetici\u00f3n de "cuarenta a\u00f1os" enfatiza la prolongaci\u00f3n en el tiempo.', wrongs: ['Opci\u00f3n correcta', 'El "hambre" indica condiciones adversas, no una vida plena', 'La "esperanza" indica que a\u00fan hay expectativa, no resignaci\u00f3n total', 'El "hambre" indica carencia, no prosperidad'] }
  },
  {
    id: 'LC25', area: 'lectura', areaName: 'Lectura Cr\u00edtica', difficulty: 'dificil',
    context: `"Si Dios no existe, todo est\u00e1 permitido. Esta frase, que se repite con frecuencia, es en realidad el punto de partida del existencialismo. En efecto, todo est\u00e1 permitido si Dios no existe, y en consecuencia el hombre est\u00e1 abandonado, porque no encuentra ni en s\u00ed mismo ni en el mundo una posibilidad de aferrarse. No encuentra excusas. Si Dios no existe, no tenemos valores u \u00f3rdenes que legitimen nuestra conducta." - Jean-Paul Sartre, "El existencialismo es un humanismo" (1946).`,
    question: `Seg\u00fan Sartre, la inexistencia de Dios implica que el ser humano:`,
    options: ['Queda liberado para hacer lo que quiera sin ninguna responsabilidad', 'Carece de fundamentos externos para justificar sus acciones y debe asumir su libertad con responsabilidad', 'Debe buscar a Dios a trav\u00e9s de la fe para encontrar un sentido a la vida', 'Puede recurrir a la naturaleza como fuente de valores morales universales'],
    correct: 1,
    explanation: { correct: 'Para Sartre, la inexistencia de Dios significa que el hombre "est\u00e1 abandonado" y "no encuentra excusas". No hay valores preestablecidos que legitimen la conducta. Lejos de ser una liberaci\u00f3n f\u00e1cil, es una condena a la libertad: el ser humano debe crear sus propios valores y asumir la responsabilidad total de sus elecciones.', wrongs: ['Sartre enfatiza la responsabilidad, no el libertinaje: "el hombre est\u00e1 condenado a ser libre" y es responsable de sus actos', 'Opci\u00f3n correcta', 'Sartre parte del presupuesto de la inexistencia de Dios; la fe no es una opci\u00f3n en su argumento', 'Para Sartre no hay una naturaleza que provea valores; el hombre los crea con su acci\u00f3n'] }
  },
  {
    id: 'LC26', area: 'lectura', areaName: 'Lectura Cr\u00edtica', difficulty: 'media',
    context: `"Consideremos, por ejemplo, la novela que propongo: 'El jard\u00edn de los senderos que se bifurcan'. En todas las ficciones, cada vez que un hombre se enfrenta a diversas alternativas, opta por una y elimina las otras; en la del casi inextricable Ts'ui P\u00ean, opta \u2014simult\u00e1neamente\u2014 por todas. Crea, as\u00ed, diversos porvenires, diversos tiempos, que tambi\u00e9n proliferan y se bifurcan." - Jorge Luis Borges, "El jard\u00edn de los senderos que se bifurcan" (1941).`,
    question: `La innovaci\u00f3n narrativa que Borges atribuye a la novela de Ts'ui P\u00ean consiste en:`,
    options: ['Eliminar todas las alternativas excepto una para simplificar la trama', 'Optar simult\u00e1neamente por todas las alternativas posibles, creando tiempos divergentes', 'Seguir un \u00fanico camino narrativo lineal hasta el desenlace', 'Presentar los eventos en orden cronol\u00f3gico inverso al convencional'],
    correct: 1,
    explanation: { correct: 'Borges describe una novela donde el protagonista "opta \u2014simult\u00e1neamente\u2014 por todas" las alternativas, creando "diversos porvenires, diversos tiempos, que tambi\u00e9n proliferan y se bifurcan". Es una representaci\u00f3n literaria del concepto de universos paralelos o m\u00faltiples posibilidades simult\u00e1neas.', wrongs: ['Esa ser\u00eda la ficci\u00f3n convencional; la innovaci\u00f3n de Ts\'ui P\u00ean es lo opuesto', 'Opci\u00f3n correcta', 'La novela de Ts\'ui P\u00ean precisamente rechaza el camino \u00fanico en favor de la multiplicidad', 'El orden cronol\u00f3gico inverso no es la innovaci\u00f3n descrita aqu\u00ed'] }
  },
  {
    id: 'LC27', area: 'lectura', areaName: 'Lectura Cr\u00edtica', difficulty: 'facil',
    context: `"La ciencia moderna se distingue de otras formas de conocimiento por su m\u00e9todo: la observaci\u00f3n sistem\u00e1tica, la formulaci\u00f3n de hip\u00f3tesis, la experimentaci\u00f3n controlada y la revisi\u00f3n por pares. Sin embargo, un experimento solo se considera v\u00e1lido si puede ser reproducido por otros investigadores de manera independiente y arroja resultados consistentes."`,
    question: `Seg\u00fan el texto, un experimento cient\u00edfico se considera v\u00e1lido cuando:`,
    options: ['Es realizado por un cient\u00edfico reconocido mundialmente', 'Puede ser reproducido por otros investigadores con resultados consistentes', 'La hip\u00f3tesis inicial resulta ser correcta', 'Se realiza en un laboratorio con equipos costosos'],
    correct: 1,
    explanation: { correct: 'El texto afirma que "un experimento solo se considera v\u00e1lido si puede ser reproducido por otros investigadores de manera independiente y arroja resultados consistentes". La reproducibilidad es un pilar fundamental del m\u00e9todo cient\u00edfico.', wrongs: ['La reputaci\u00f3n del cient\u00edfico no determina la validez de un experimento', 'Opci\u00f3n correcta', 'Incluso hip\u00f3tesis incorrectas pueden ser validadas si se refutan con experimentos reproducibles', 'Los equipos costosos no garantizan la validez; lo importante es la reproducibilidad'] }
  },
  // ===== MATEMÁTICAS - BLOQUE 3 =====
  {
    id: 'MT22', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'media',
    table: {
      headers: ['Color', 'Rojo', 'Azul', 'Verde', 'Amarillo'],
      rows: [
        ['Cantidad', '8', '5', '4', '3']
      ],
      caption: 'Distribuci\u00f3n de fichas de colores en una bolsa'
    },
    context: 'En una bolsa hay fichas de colores seg\u00fan la tabla. Se saca una ficha al azar.',
    question: '\u00bfCu\u00e1l es la probabilidad de sacar una ficha azul?',
    svg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" style="max-width:320px">
  <text x="160" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#333">Distribuci\u00f3n de fichas en la bolsa</text>
  <circle cx="120" cy="110" r="75" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <path d="M120 35 A75 75 0 0 1 192.5 155.5 L120 110 Z" fill="#F44336" opacity="0.85"/>
  <path d="M192.5 155.5 A75 75 0 0 1 63.5 155.5 L120 110 Z" fill="#2196F3" opacity="0.85"/>
  <path d="M63.5 155.5 A75 75 0 0 1 74.5 52.5 L120 110 Z" fill="#4CAF50" opacity="0.85"/>
  <path d="M74.5 52.5 A75 75 0 0 1 120 35 L120 110 Z" fill="#FFC107" opacity="0.85"/>
  <circle cx="120" cy="110" r="30" fill="#fff"/>
  <text x="120" y="114" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">20</text>
  <rect x="220" y="40" width="12" height="12" fill="#F44336" opacity="0.85"/>
  <text x="236" y="51" font-size="11" fill="#333">Rojo (8)</text>
  <rect x="220" y="60" width="12" height="12" fill="#2196F3" opacity="0.85"/>
  <text x="236" y="71" font-size="11" fill="#333">Azul (5)</text>
  <rect x="220" y="80" width="12" height="12" fill="#4CAF50" opacity="0.85"/>
  <text x="236" y="91" font-size="11" fill="#333">Verde (4)</text>
  <rect x="220" y="100" width="12" height="12" fill="#FFC107" opacity="0.85"/>
  <text x="236" y="111" font-size="11" fill="#333">Amarillo (3)</text>
</svg>`,
    options: ['1/4', '1/5', '1/8', '5/20'],
    correct: 0,
    explanation: { correct: 'Total fichas = 8+5+4+3 = 20. Azules = 5. Probabilidad = 5/20 = 1/4.', wrongs: ['Opci\u00f3n correcta', 'Usaste el total incorrecto o los azules sobre solo un color', 'Dividiste 1 entre la cantidad de azules', 'Simplifica 5/20 = 1/4, no lo dejaste reducido'] }
  },
  {
    id: 'MT23', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'dificil',
    question: `El precio de un celular en Ibagu\u00e9 es $800.000. Por el d\u00eda del padre lo suben 15% y luego en liquidaci\u00f3n lo bajan 15%. \u00bfCu\u00e1l es el precio final?`,
    options: ['$800.000', '$782.000', '$920.000', '$798.000'],
    correct: 1,
    explanation: { correct: 'Sube 15%: 800.000 x 1,15 = 920.000. Baja 15%: 920.000 x 0,85 = 782.000.', wrongs: ['No vuelve al precio original porque el 15% de bajada se aplica sobre un valor mayor', 'Opci\u00f3n correcta', 'Calculaste 800.000 x 0,9775? Revisa', 'Calculaste 800.000 x 0,9975?'] }
  },
  {
    id: 'MT24', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'facil',
    question: `Un tri\u00e1ngulo tiene una base de 10 m y una altura de 8 m. \u00bfCu\u00e1l es su \u00e1rea?`,
    options: ['80 m\u00b2', '40 m\u00b2', '20 m\u00b2', '60 m\u00b2'],
    correct: 1,
    explanation: { correct: '\u00c1rea = (base x altura) / 2 = (10 x 8) / 2 = 40 m\u00b2.', wrongs: ['Olvidaste dividir entre 2: 10 x 8 = 80', 'Opci\u00f3n correcta', 'Dividiste entre 4 en lugar de 2', 'Multiplicaste 10 x 6 en lugar de 10 x 8'] }
  },
  {
    id: 'MT25', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'media',
    question: `En un restaurante de Neiva, el costo C de preparar x platos de bandeja paisa est\u00e1 dado por C(x) = 8.000x + 50.000. \u00bfCu\u00e1nto cuesta preparar 30 platos?`,
    options: ['$240.000', '$290.000', '$200.000', '$310.000'],
    correct: 1,
    explanation: { correct: 'C(30) = 8.000 x 30 + 50.000 = 240.000 + 50.000 = $290.000.', wrongs: ['Opci\u00f3n correcta', 'Olvidaste sumar el costo fijo: solo calculaste 8.000 x 30 = 240.000', 'Sumaste mal: 240.000 + 50.000 = 290.000', 'Multiplicaste 8.000 x 30 + 50.000 = 290.000, revisa operaci\u00f3n'] }
  },
  {
    id: 'MT26', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'facil',
    question: `Mar\u00eda ahorr\u00f3 $500.000 en un banco que paga 8% de inter\u00e9s simple anual. \u00bfCu\u00e1nto recibir\u00e1 de intereses despu\u00e9s de 1 a\u00f1o?`,
    options: ['$40.000', '$50.000', '$30.000', '$80.000'],
    correct: 0,
    explanation: { correct: 'Inter\u00e9s = Capital x Tasa x Tiempo = 500.000 x 0,08 x 1 = $40.000.', wrongs: ['Opci\u00f3n correcta', 'Calculaste 500.000 x 0,10 = 50.000, la tasa es 8% no 10%', 'Calculaste 500.000 x 0,06 = 30.000, la tasa es 8%', 'Calculaste 500.000 x 0,08 x 2, confundiendo a\u00f1os'] }
  },
  {
    id: 'MT27', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'dificil',
    question: `En un examen, el promedio de 5 estudiantes es 3,8. Si las notas de 4 de ellos son 4,2; 3,6; 3,0 y 4,0, \u00bfcu\u00e1l es la nota del quinto estudiante?`,
    options: ['4,0', '4,2', '3,5', '3,8'],
    correct: 1,
    explanation: { correct: 'Suma total = 5 x 3,8 = 19. Suma conocida = 4,2+3,6+3,0+4,0 = 14,8. Quinto = 19 - 14,8 = 4,2.', wrongs: ['Opci\u00f3n correcta', 'Sumaste las notas y dividiste entre el n\u00famero incorrecto', 'Calculaste mal la suma conocida', 'Ese es el promedio, no la quinta nota'] }
  },
  {
    id: 'MT28', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'media',
    question: `Una caja de zapatos tiene forma de prisma rectangular con 30 cm de largo, 20 cm de ancho y 15 cm de alto. \u00bfCu\u00e1l es su volumen?`,
    options: ['6.000 cm\u00b3', '9.000 cm\u00b3', '12.000 cm\u00b3', '3.000 cm\u00b3'],
    correct: 1,
    explanation: { correct: 'Volumen = largo x ancho x alto = 30 x 20 x 15 = 9.000 cm\u00b3.', wrongs: ['Calculaste 30 x 20 x 10 en lugar de 15', 'Opci\u00f3n correcta', 'Multiplicaste 30 x 20 x 20', 'Calculaste solo 30 x 20'] }
  },
  {
    id: 'MT29', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'dificil',
    question: `La ganancia G(x) de una empresa de muebles en Barranquilla est\u00e1 dada por G(x) = -x\u00b2 + 100x - 1.600, donde x es el n\u00famero de sillas producidas. \u00bfCu\u00e1ntas sillas debe producir para obtener la ganancia m\u00e1xima?`,
    options: ['40', '50', '60', '100'],
    correct: 1,
    explanation: { correct: 'El v\u00e9rtice de la par\u00e1bola es x = -b/(2a) = -100/(2 x -1) = -100/-2 = 50 sillas.', wrongs: ['Usaste la f\u00f3rmula incorrecta: -b/a en lugar de -b/(2a)', 'Opci\u00f3n correcta', 'Probablemente usaste c en lugar de b en la f\u00f3rmula', 'Ese es el coeficiente lineal, no el v\u00e9rtice'] }
  },
  {
    id: 'MT30', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'facil',
    question: `Un atleta corre 400 metros en 50 segundos. \u00bfCu\u00e1l es su rapidez media en m/s?`,
    options: ['6 m/s', '8 m/s', '10 m/s', '12 m/s'],
    correct: 1,
    explanation: { correct: 'Rapidez = distancia / tiempo = 400 / 50 = 8 m/s.', wrongs: ['Dividiste 400/66,6?', 'Opci\u00f3n correcta', 'Dividiste 400/40 = 10', 'Dividiste 400/33,3 = 12'] }
  },
  // ===== SOCIALES - BLOQUE 3 =====
  {
    id: 'SC21', area: 'sociales', areaName: 'Sociales y Ciudadan\u00eda', difficulty: 'media',
    context: `"El fil\u00f3sofo Immanuel Kant propuso el 'imperativo categ\u00f3rico': obra solo seg\u00fan una m\u00e1xima tal que puedas querer al mismo tiempo que se convierta en ley universal. Para Kant, la moral no depende de las consecuencias sino del cumplimiento del deber por el deber mismo."`,
    question: `Seg\u00fan Kant, una acci\u00f3n es moralmente correcta cuando puede ser universalizada sin contradicci\u00f3n y se realiza por deber, no por inclinaci\u00f3n. Esta corriente \u00e9tica se conoce como:`,
    options: ['Utilitarismo', 'Deontolog\u00eda kantiana', 'Relativismo moral', 'Hedonismo'],
    correct: 1,
    explanation: { correct: 'La deontolog\u00eda kantiana sostiene que la moralidad de una acci\u00f3n se determina por su capacidad de ser universalizada (imperativo categ\u00f3rico) y por la intenci\u00f3n con que se realiza: debe hacerse por deber, no por inclinaci\u00f3n o c\u00e1lculo de consecuencias.', wrongs: ['El utilitarismo eval\u00faa las acciones por sus consecuencias, no por el deber', 'Opci\u00f3n correcta', 'El relativismo moral niega la existencia de principios morales universales, contrariando a Kant', 'El hedonismo busca el placer como fin \u00faltimo, opuesto a la \u00e9tica del deber kantiana'] }
  },
  {
    id: 'SC22', area: 'sociales', areaName: 'Sociales y Ciudadan\u00eda', difficulty: 'dificil',
    context: `"La Patria Boba (1810-1816) fue el per\u00edodo posterior al primer grito de independencia, caracterizado por el enfrentamiento entre federalistas y centralistas. Estos conflictos internos debilitaron el movimiento independentista y facilitaron la reconquista espa\u00f1ola liderada por Pablo Morillo."`,
    question: `El texto se\u00f1ala que el per\u00edodo de la "Patria Boba" se caracteriz\u00f3 por:`,
    options: ['La unificaci\u00f3n de todas las fuerzas independentistas contra la corona espa\u00f1ola', 'Los enfrentamientos entre federalistas y centralistas que debilitaron la causa independentista', 'La consolidaci\u00f3n definitiva de la independencia del territorio de la Nueva Granada', 'La firma de un tratado de paz y reconocimiento por parte de Espa\u00f1a'],
    correct: 1,
    explanation: { correct: 'La Patria Boba fue un per\u00edodo de intensos conflictos entre dos modelos pol\u00edticos: el federalismo (liderado por Camilo Torres) y el centralismo (liderado por Antonio Nari\u00f1o). Estas disputas fragmentaron el movimiento independentista y facilitaron la reconquista espa\u00f1ola liderada por Pablo Morillo entre 1815 y 1816.', wrongs: ['Hubo profundas divisiones internas, no unificaci\u00f3n de fuerzas', 'Opci\u00f3n correcta', 'La independencia no estaba consolidada; la reconquista espa\u00f1ola lo demostr\u00f3', 'No hubo tratado de paz; hubo una guerra de reconquista'] }
  },
  {
    id: 'SC23', area: 'sociales', areaName: 'Sociales y Ciudadan\u00eda', difficulty: 'facil',
    question: `Los pisos t\u00e9rmicos en Colombia (c\u00e1lido, templado, fr\u00edo, p\u00e1ramo y nieves perpetuas) se deben principalmente a la variaci\u00f3n de:`,
    options: ['La cercan\u00eda al mar Caribe a lo largo de la costa', 'La altitud sobre el nivel del mar en las diferentes zonas del pa\u00eds', 'La latitud, que aumenta hacia el sur de Colombia', 'Las corrientes marinas fr\u00edas y c\u00e1lidas del oc\u00e9ano Pac\u00edfico'],
    correct: 1,
    explanation: { correct: 'Los pisos t\u00e9rmicos en Colombia est\u00e1n determinados principalmente por la altitud sobre el nivel del mar. En la zona ecuatorial, la temperatura disminuye aproximadamente 6 \u00b0C por cada 1.000 metros de ascenso. Esto genera los distintos pisos: c\u00e1lido (0-1.000 m), templado (1.000-2.000 m), fr\u00edo (2.000-3.000 m), p\u00e1ramo (3.000-4.700 m) y nieves perpetuas (>4.700 m).', wrongs: ['La cercan\u00eda al mar influye en la humedad pero no determina los pisos t\u00e9rmicos', 'Opci\u00f3n correcta', 'La latitud ecuatorial de Colombia es constante; no var\u00eda significativamente dentro del pa\u00eds', 'Las corrientes marinas afectan el clima costero, no la zonificaci\u00f3n por pisos t\u00e9rmicos'] }
  },
  {
    id: 'SC24', area: 'sociales', areaName: 'Sociales y Ciudadan\u00eda', difficulty: 'media',
    context: `"El cabildo abierto es un mecanismo de participaci\u00f3n ciudadana que permite a los habitantes de un municipio reunirse para discutir asuntos de inter\u00e9s p\u00fablico. Debe ser convocado por el alcalde, el concejo municipal o un n\u00famero significativo de ciudadanos, y no puede tratar temas presupuestales ni de ordenanzas."`,
    question: `Seg\u00fan el texto, el cabildo abierto es un espacio de participaci\u00f3n de car\u00e1cter municipal que permite discutir asuntos p\u00fablicos locales, con la limitaci\u00f3n de no poder tratar:`,
    options: ['Temas de seguridad nacional ni pol\u00edtica exterior', 'Asuntos presupuestales ni proyectos de ordenanza', 'Problemas de servicios p\u00fablicos domiciliarios', 'Cuestiones relacionadas con la educaci\u00f3n p\u00fablica'],
    correct: 1,
    explanation: { correct: 'El cabildo abierto (Ley 134 de 1994, modificada por Ley 1757 de 2015) es un mecanismo de participaci\u00f3n a nivel municipal. No puede discutir proyectos de ordenanza, presupuestos ni temas de car\u00e1cter general que correspondan a la Asamblea Departamental. Su funci\u00f3n es debatir asuntos de inter\u00e9s local con la comunidad.', wrongs: ['El cabildo abierto es municipal; no discute temas nacionales como seguridad o pol\u00edtica exterior', 'Opci\u00f3n correcta', 'Los servicios p\u00fablicos s\u00ed pueden discutirse en cabildo abierto', 'La educaci\u00f3n p\u00fablica es un tema municipal que s\u00ed puede discutirse'] }
  },
  {
    id: 'SC25', area: 'sociales', areaName: 'Sociales y Ciudadan\u00eda', difficulty: 'media',
    question: `La Procuradur\u00eda General de la Naci\u00f3n, como parte del Ministerio P\u00fablico, tiene como funci\u00f3n principal:`,
    options: ['Investigar delitos comunes y presentar acusaciones penales', 'Vigilar la conducta oficial de los servidores p\u00fablicos y ejercer control disciplinario', 'Recaudar los impuestos nacionales y departamentales', 'Organizar y vigilar los procesos electorales en todo el pa\u00eds'],
    correct: 1,
    explanation: { correct: 'La Procuradur\u00eda General de la Naci\u00f3n vigila la conducta oficial de los servidores p\u00fablicos, ejerce control disciplinario, defiende el orden jur\u00eddico, los derechos humanos y el patrimonio p\u00fablico. No confundir con la Fiscal\u00eda (investiga delitos penales), la DIAN (recauda impuestos) ni la Registradur\u00eda (organiza elecciones).', wrongs: ['Investigar delitos es funci\u00f3n de la Fiscal\u00eda General de la Naci\u00f3n', 'Opci\u00f3n correcta', 'Recaudar impuestos es funci\u00f3n de la DIAN', 'Organizar elecciones es funci\u00f3n de la Registradur\u00eda Nacional'] }
  },
  {
    id: 'SC26', area: 'sociales', areaName: 'Sociales y Ciudadan\u00eda', difficulty: 'dificil',
    context: `"El Producto Interno Bruto (PIB) per c\u00e1pita de un pa\u00eds mide el valor de la producci\u00f3n total dividido entre el n\u00famero de habitantes. Sin embargo, este indicador no refleja c\u00f3mo se distribuye el ingreso ni considera externalidades como la contaminaci\u00f3n o el agotamiento de recursos naturales."`,
    question: `Seg\u00fan el texto, una limitaci\u00f3n del PIB per c\u00e1pita como indicador de bienestar es que:`,
    options: ['No mide la producci\u00f3n total de bienes y servicios del pa\u00eds', 'No refleja la distribuci\u00f3n del ingreso ni las externalidades ambientales', 'Solo mide la producci\u00f3n del sector agr\u00edcola', 'Es un c\u00e1lculo que solo puede hacer el Banco Mundial'],
    correct: 1,
    explanation: { correct: 'El texto se\u00f1ala que el PIB per c\u00e1pita "no refleja c\u00f3mo se distribuye el ingreso ni considera externalidades como la contaminaci\u00f3n". Un pa\u00eds puede tener un PIB per c\u00e1pita alto pero sufrir grandes desigualdades sociales y graves problemas ambientales. Por eso se utilizan indicadores complementarios como el coeficiente Gini o el \u00cdndice de Desarrollo Humano.', wrongs: ['El PIB S\u00cd mide la producci\u00f3n total de bienes y servicios, esa es su funci\u00f3n principal', 'Opci\u00f3n correcta', 'El PIB mide todos los sectores de la econom\u00eda, no solo el agr\u00edcola', 'El PIB lo calcula cada pa\u00eds a trav\u00e9s de sus institutos de estad\u00edstica (DANE en Colombia)'] }
  },
  // ===== CIENCIAS - BLOQUE 3 =====
  {
    id: 'CN21', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
    context: `"En un laboratorio, un estudiante coloca tres cilindros de papa de igual masa en tres vasos: uno con agua destilada, otro con soluci\u00f3n salina al 10% y otro con soluci\u00f3n salina al 25%. Despu\u00e9s de 30 minutos, retira los cilindros y registra los cambios de masa."`,
    question: `Si el cilindro en agua destilada gan\u00f3 masa y el de soluci\u00f3n al 25% perdi\u00f3 masa, \u00bfc\u00f3mo se explica este resultado?`,
    svg: `<svg viewBox="0 0 420 190" xmlns="http://www.w3.org/2000/svg" style="max-width:420px">
  <text x="75" y="18" text-anchor="middle" font-size="11" font-weight="bold" fill="#333">Agua destilada</text>
  <text x="210" y="18" text-anchor="middle" font-size="11" font-weight="bold" fill="#333">Salina 10%</text>
  <text x="345" y="18" text-anchor="middle" font-size="11" font-weight="bold" fill="#333">Salina 25%</text>
  <!-- Beaker 1 -->
  <rect x="25" y="35" width="100" height="130" fill="#E3F2FD" opacity="0.5" stroke="#90CAF9" stroke-width="1.5" rx="3"/>
  <!-- Water -->
  <rect x="27" y="55" width="96" height="108" fill="#BBDEFB" opacity="0.4"/>
  <!-- Potato cylinder -->
  <rect x="60" y="60" width="30" height="60" fill="#FFCC80" stroke="#FF9800" stroke-width="1" rx="4"/>
  <!-- Arrow in -->
  <path d="M50 80 L40 80 M45 75 L40 80 L45 85" fill="none" stroke="#4CAF50" stroke-width="1.5"/>
  <text x="42" y="72" font-size="8" fill="#4CAF50">H2O</text>
  <path d="M110 80 L120 80 M115 75 L120 80 L115 85" fill="none" stroke="#4CAF50" stroke-width="1.5"/>
  <text x="118" y="72" font-size="8" fill="#4CAF50">H2O</text>
  <text x="75" y="165" text-anchor="middle" font-size="9" fill="#1565C0">Gana masa</text>
  <!-- Beaker 2 -->
  <rect x="160" y="35" width="100" height="130" fill="#FFF3E0" opacity="0.5" stroke="#FFB74D" stroke-width="1.5" rx="3"/>
  <rect x="162" y="55" width="96" height="108" fill="#FFE0B2" opacity="0.4"/>
  <rect x="195" y="65" width="30" height="50" fill="#FFCC80" stroke="#FF9800" stroke-width="1" rx="4"/>
  <!-- Equal arrows -->
  <text x="210" y="140" text-anchor="middle" font-size="9" fill="#666">Equilibrio</text>
  <line x1="190" y1="85" x2="200" y2="85" stroke="#666" stroke-width="0.8"/>
  <line x1="220" y1="85" x2="230" y2="85" stroke="#666" stroke-width="0.8"/>
  <!-- Beaker 3 -->
  <rect x="295" y="35" width="100" height="130" fill="#FFF3E0" opacity="0.5" stroke="#EF5350" stroke-width="1.5" rx="3"/>
  <rect x="297" y="55" width="96" height="108" fill="#FFCDD2" opacity="0.4"/>
  <rect x="330" y="75" width="30" height="35" fill="#FFCC80" stroke="#FF9800" stroke-width="1" rx="4"/>
  <!-- Arrow out -->
  <path d="M320 80 L310 80 M315 75 L310 80 L315 85" fill="none" stroke="#E91E63" stroke-width="1.5"/>
  <text x="312" y="72" font-size="8" fill="#E91E63">H2O</text>
  <path d="M370 80 L380 80 M375 75 L380 80 L375 85" fill="none" stroke="#E91E63" stroke-width="1.5"/>
  <text x="378" y="72" font-size="8" fill="#E91E63">H2O</text>
  <text x="345" y="165" text-anchor="middle" font-size="9" fill="#E91E63">Pierde masa</text>
  <!-- Salt labels -->
  <text x="210" y="175" text-anchor="middle" font-size="8" fill="#666">NaCl: 0% | 10% | 25%</text>
</svg>`,
    options: ['El agua destilada contiene m\u00e1s nutrientes que la salina', 'La \u00f3smosis movi\u00f3 agua desde donde hab\u00eda mayor concentraci\u00f3n de agua hacia donde hab\u00eda menor', 'Las c\u00e9lulas de la papa murieron por el exceso de sal', 'El agua destilada disolvi\u00f3 parte de la papa aumentando su masa'],
    correct: 1,
    explanation: { correct: 'Por \u00f3smosis, el agua se desplaza desde la zona de mayor concentraci\u00f3n de agua (menor concentraci\u00f3n de solutos) hacia la de menor concentraci\u00f3n de agua. En agua destilada, el agua entra a las c\u00e9lulas de la papa (turgencia). En soluci\u00f3n salina al 25%, el agua sale de las c\u00e9lulas hacia el medio externo (plasm\u00f3lisis), provocando p\u00e9rdida de masa.', wrongs: ['El agua destilada no tiene nutrientes adicionales; el cambio se debe al movimiento de agua por \u00f3smosis', 'Opci\u00f3n correcta', 'Las c\u00e9lulas no mueren inmediatamente; el cambio de masa se debe al flujo osm\u00f3tico de agua', 'El agua destilada no disuelve la papa; la \u00f3smosis explica el aumento de masa'] }
  },
  {
    id: 'CN22', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
    context: `"En una pr\u00e1ctica de laboratorio, se hacen reaccionar 10 g de carbonato de calcio (CaCO\u2083) con \u00e1cido clorh\u00eddrico (HCl) en exceso, produciendo cloruro de calcio (CaCl\u2082), di\u00f3xido de carbono (CO\u2082) y agua. La masa molar del CaCO\u2083 es 100 g/mol."`,
    question: `Si se recolectan 2,2 g de CO\u2082 (masa molar 44 g/mol) al finalizar la reacci\u00f3n, \u00bfqu\u00e9 porcentaje del rendimiento te\u00f3rico se obtuvo?`,
    options: ['50%', '75%', '100%', '25%'],
    correct: 0,
    explanation: { correct: 'La reacci\u00f3n es CaCO\u2083 + 2HCl \u2192 CaCl\u2082 + CO\u2082 + H\u2082O. 10 g de CaCO\u2083 = 0,1 mol. Rendimiento te\u00f3rico: 0,1 mol \u00d7 44 g/mol = 4,4 g de CO\u2082. Rendimiento real: 2,2 g. Porcentaje: (2,2/4,4) \u00d7 100 = 50%.', wrongs: ['Opci\u00f3n correcta', '2,2/4,4 = 0,5 = 50%, no 75%', 'Para 100% se necesitar\u00edan 4,4 g de CO\u2082, pero solo se obtuvieron 2,2 g', 'Se obtuvo la mitad del rendimiento te\u00f3rico, es decir 50%'] }
  },
  {
    id: 'CN23', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
    context: `"Un estudiante envuelve un clavo de hierro con alambre de cobre conectado a una pila. Al acercar el clavo a clips met\u00e1licos, estos son atra\u00eddos. Al desconectar la pila, los clips dejan de ser atra\u00eddos."`,
    question: `\u00bfQu\u00e9 concluye el estudiante sobre el fen\u00f3meno observado?`,
    options: ['El clavo se volvi\u00f3 magn\u00e9tico permanentemente por el contacto con el cobre', 'La corriente el\u00e9ctrica que circula por el alambre genera un campo magn\u00e9tico temporal en el clavo', 'La pila transfiri\u00f3 electrones al clavo convirti\u00e9ndolo en un im\u00e1n de hierro', 'El cobre y el hierro reaccionan qu\u00edmicamente produciendo atracci\u00f3n magn\u00e9tica'],
    correct: 1,
    explanation: { correct: 'El electroim\u00e1n funciona porque la corriente el\u00e9ctrica que circula por la bobina de alambre genera un campo magn\u00e9tico que magnetiza temporalmente el n\u00facleo de hierro. Al cortar la corriente, el campo magn\u00e9tico desaparece y el clavo pierde su magnetismo.', wrongs: ['El magnetismo desaparece al desconectar la pila, lo que indica que no es permanente', 'Opci\u00f3n correcta', 'La pila proporciona corriente el\u00e9ctrica, pero no convierte el hierro en im\u00e1n permanente', 'No ocurre una reacci\u00f3n qu\u00edmica entre el cobre y el hierro en este montaje'] }
  },
  {
    id: 'CN24', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
    context: `"Un ge\u00f3logo encuentra tres muestras de roca en diferentes puntos de una cordillera. La muestra A tiene cristales visibles de gran tama\u00f1o, la muestra B presenta capas delgadas con f\u00f3siles marinos, y la muestra C tiene textura v\u00edtrea sin cristales visibles."`,
    question: `\u00bfQu\u00e9 interpretaci\u00f3n es m\u00e1s coherente con las caracter\u00edsticas observadas?`,
    options: ['La muestra A es \u00edgnea volc\u00e1nica, la B es metam\u00f3rfica y la C es sedimentaria', 'La muestra A es \u00edgnea intrusiva, la B es sedimentaria y la C es \u00edgnea extrusiva', 'Las tres muestras son sedimentarias formadas en diferentes ambientes', 'La muestra A es metam\u00f3rfica, la B es \u00edgnea intrusiva y la C es sedimentaria'],
    correct: 1,
    explanation: { correct: 'Cristales grandes indican enfriamiento lento bajo la superficie (\u00edgnea intrusiva, como el granito). Capas con f\u00f3siles marinos indican formaci\u00f3n sedimentaria en un ambiente acu\u00e1tico. Textura v\u00edtrea indica enfriamiento muy r\u00e1pido en la superficie (\u00edgnea extrusiva, como la obsidiana).', wrongs: ['Las rocas volc\u00e1nicas (extrusivas) tienen cristales peque\u00f1os o textura v\u00edtrea, no cristales grandes', 'Opci\u00f3n correcta', 'La textura v\u00edtrea solo se forma por enfriamiento r\u00e1pido de magma, no por sedimentaci\u00f3n', 'Las rocas metam\u00f3rficas tienen textura foliada, no cristales grandes aislados'] }
  },
  {
    id: 'CN25', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
    context: `"Un grupo de estudiantes prepara tres tubos de ensayo: tubo 1 con agua oxigenada (H\u2082O\u2082) a temperatura ambiente, tubo 2 con agua oxigenada m\u00e1s una gota de sangre, y tubo 3 con agua oxigenada hervida previamente y luego enfriada, m\u00e1s una gota de sangre. En el tubo 2 se observa una producci\u00f3n vigorosa de burbujas, mientras que en los tubos 1 y 3 no."`,
    question: `\u00bfCu\u00e1l es la explicaci\u00f3n m\u00e1s adecuada para los resultados?`,
    svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style="max-width:400px">
  <text x="75" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#333">Tubo 1</text>
  <text x="200" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#333">Tubo 2</text>
  <text x="325" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#333">Tubo 3</text>
  <text x="75" y="33" text-anchor="middle" font-size="9" fill="#666">Solo H2O2</text>
  <text x="200" y="33" text-anchor="middle" font-size="9" fill="#666">H2O2 + Sangre</text>
  <text x="325" y="33" text-anchor="middle" font-size="9" fill="#666">H2O2 + Sangre hervida</text>
  <!-- Tube 1 -->
  <rect x="55" y="45" width="40" height="130" fill="#E3F2FD" opacity="0.4" stroke="#90CAF9" stroke-width="1.5" rx="5"/>
  <rect x="55" y="45" width="40" height="130" fill="#F3E5F5" opacity="0.3" rx="5"/>
  <!-- Liquid -->
  <rect x="55" y="90" width="40" height="85" fill="#CE93D8" opacity="0.5" rx="3"/>
  <!-- No bubbles -->
  <text x="75" y="150" text-anchor="middle" font-size="9" fill="#666">Sin burbujas</text>
  <!-- Tube 2 -->
  <rect x="180" y="45" width="40" height="130" fill="#E3F2FD" opacity="0.4" stroke="#90CAF9" stroke-width="1.5" rx="5"/>
  <rect x="180" y="45" width="40" height="130" fill="#F3E5F5" opacity="0.3" rx="5"/>
  <rect x="180" y="100" width="40" height="75" fill="#CE93D8" opacity="0.5" rx="3"/>
  <!-- Bubbles -->
  <circle cx="195" cy="65" r="4" fill="none" stroke="#4FC3F7" stroke-width="1"/>
  <circle cx="205" cy="58" r="3" fill="none" stroke="#4FC3F7" stroke-width="1"/>
  <circle cx="190" cy="78" r="5" fill="none" stroke="#4FC3F7" stroke-width="1"/>
  <circle cx="200" cy="85" r="3" fill="none" stroke="#4FC3F7" stroke-width="1"/>
  <circle cx="208" cy="72" r="2" fill="none" stroke="#4FC3F7" stroke-width="1"/>
  <circle cx="195" cy="52" r="2" fill="none" stroke="#4FC3F7" stroke-width="1"/>
  <text x="200" y="150" text-anchor="middle" font-size="9" fill="#4CAF50">Muchas burbujas</text>
  <!-- Heartbeat indicator -->
  <text x="200" y="58" text-anchor="middle" font-size="10" fill="#E91E63">\u00a1O2!</text>
  <!-- Tube 3 -->
  <rect x="305" y="45" width="40" height="130" fill="#E3F2FD" opacity="0.4" stroke="#90CAF9" stroke-width="1.5" rx="5"/>
  <rect x="305" y="45" width="40" height="130" fill="#F3E5F5" opacity="0.3" rx="5"/>
  <rect x="305" y="90" width="40" height="85" fill="#CE93D8" opacity="0.5" rx="3"/>
  <!-- No bubbles -->
  <text x="325" y="150" text-anchor="middle" font-size="9" fill="#666">Sin burbujas</text>
  <!-- Desnaturalized indicator -->
  <text x="325" y="70" text-anchor="middle" font-size="8" fill="#E91E63">enzima</text>
  <text x="325" y="80" text-anchor="middle" font-size="8" fill="#E91E63">muerta</text>
</svg>`,
    options: ['La sangre contiene catalasa que descompone el H\u2082O\u2082; al hervir la sangre la enzima se desnaturaliz\u00f3 y perdi\u00f3 su funci\u00f3n', 'La sangre reacciona qu\u00edmicamente con el H\u2082O\u2082 produciendo calor que genera las burbujas', 'El agua oxigenada hervida se descompone m\u00e1s r\u00e1pido que la que est\u00e1 a temperatura ambiente', 'La sangre contiene hierro que cataliza la descomposici\u00f3n del H\u2082O\u2082 independientemente de la temperatura'],
    correct: 0,
    explanation: { correct: 'La catalasa de la sangre descompone el H\u2082O\u2082 en agua y ox\u00edgeno (las burbujas observadas). Al hervir la sangre, las prote\u00ednas, incluida la catalasa, se desnaturalizan irreversiblemente por el calor, perdiendo su estructura tridimensional y su funci\u00f3n catal\u00edtica.', wrongs: ['Opci\u00f3n correcta', 'No es una reacci\u00f3n qu\u00edmica directa con la sangre sino una cat\u00e1lisis enzim\u00e1tica', 'El agua oxigenada no se descompone significativamente solo por haber sido hervida', 'El calor desnaturaliza las enzimas, por lo que la catalasa no funciona despu\u00e9s de hervir la sangre'] }
  },
  {
    id: 'CN26', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
    context: `"En un experimento, se introduce una jeringa con 20 mL de aire a presi\u00f3n atmosf\u00e9rica y se tapa la salida. Al empujar el \u00e9mbolo hasta reducir el volumen a 10 mL, se nota que es m\u00e1s dif\u00edcil seguir empujando."`,
    question: `\u00bfQu\u00e9 ley f\u00edsica explica el aumento de la fuerza necesaria para comprimir el aire?`,
    svg: `<svg viewBox="0 0 420 170" xmlns="http://www.w3.org/2000/svg" style="max-width:420px">
  <text x="110" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Antes</text>
  <text x="310" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Despu\u00e9s</text>
  <!-- Syringe before -->
  <rect x="30" y="55" width="160" height="40" fill="#E3F2FD" opacity="0.5" stroke="#90CAF9" stroke-width="1.5" rx="4"/>
  <rect x="30" y="60" width="160" height="30" fill="#BBDEFB" opacity="0.4"/>
  <!-- Piston -->
  <rect x="20" y="52" width="15" height="46" fill="#78909C" stroke="#546E7A" stroke-width="1.5" rx="2"/>
  <text x="110" y="130" text-anchor="middle" font-size="13" fill="#1565C0" font-weight="bold">V = 20 mL</text>
  <text x="100" y="80" text-anchor="middle" font-size="9" fill="#666">Aire</text>
  <!-- Air molecules before -->
  <circle cx="55" cy="75" r="3" fill="#E91E63" opacity="0.6"/>
  <circle cx="75" cy="70" r="3" fill="#E91E63" opacity="0.6"/>
  <circle cx="95" cy="80" r="3" fill="#E91E63" opacity="0.6"/>
  <circle cx="115" cy="72" r="3" fill="#E91E63" opacity="0.6"/>
  <circle cx="135" cy="78" r="3" fill="#E91E63" opacity="0.6"/>
  <circle cx="155" cy="68" r="3" fill="#E91E63" opacity="0.6"/>
  <circle cx="65" cy="82" r="3" fill="#E91E63" opacity="0.6"/>
  <text x="110" y="145" text-anchor="middle" font-size="10" fill="#666">P = 1 atm</text>
  <!-- Arrow -->
  <text x="210" y="100" font-size="18" fill="#666">\u2192</text>
  <!-- Syringe after -->
  <rect x="230" y="55" width="80" height="40" fill="#E3F2FD" opacity="0.5" stroke="#EF5350" stroke-width="1.5" rx="4"/>
  <rect x="230" y="60" width="80" height="30" fill="#FFCDD2" opacity="0.4"/>
  <!-- Piston -->
  <rect x="310" y="52" width="15" height="46" fill="#78909C" stroke="#546E7A" stroke-width="1.5" rx="2"/>
  <!-- Force arrow -->
  <line x1="340" y1="75" x2="330" y2="75" stroke="#E91E63" stroke-width="2"/>
  <text x="355" y="78" font-size="9" fill="#E91E63">Fuerza</text>
  <text x="270" y="130" text-anchor="middle" font-size="13" fill="#E91E63" font-weight="bold">V = 10 mL</text>
  <!-- Air molecules after (denser) -->
  <circle cx="250" cy="72" r="3" fill="#E91E63" opacity="0.8"/>
  <circle cx="265" cy="68" r="3" fill="#E91E63" opacity="0.8"/>
  <circle cx="280" cy="75" r="3" fill="#E91E63" opacity="0.8"/>
  <circle cx="255" cy="82" r="3" fill="#E91E63" opacity="0.8"/>
  <circle cx="270" cy="78" r="3" fill="#E91E63" opacity="0.8"/>
  <circle cx="285" cy="70" r="3" fill="#E91E63" opacity="0.8"/>
  <circle cx="260" cy="62" r="3" fill="#E91E63" opacity="0.8"/>
  <circle cx="275" cy="84" r="3" fill="#E91E63" opacity="0.8"/>
  <circle cx="290" cy="78" r="3" fill="#E91E63" opacity="0.8"/>
  <text x="270" y="145" text-anchor="middle" font-size="10" fill="#E91E63">P = 2 atm</text>
  <!-- Formula -->
  <text x="270" y="162" text-anchor="middle" font-size="10" fill="#333">P\u00e2\u0082\u0081V\u00e2\u0082\u0081 = P\u00e2\u0082\u0082V\u00e2\u0082\u0082</text>
</svg>`,
    options: ['Ley de Charles: a mayor presi\u00f3n menor temperatura', 'Ley de Boyle: a temperatura constante, la presi\u00f3n de un gas es inversamente proporcional al volumen', 'Ley de Gay-Lussac: el volumen es directamente proporcional a la temperatura', 'Principio de Pascal: la presi\u00f3n se transmite uniformemente en un fluido'],
    correct: 1,
    explanation: { correct: 'La ley de Boyle establece que, a temperatura constante, la presi\u00f3n de un gas es inversamente proporcional a su volumen (P\u2081V\u2081 = P\u2082V\u2082). Al reducir el volumen a la mitad (de 20 a 10 mL), la presi\u00f3n se duplica, por lo que se necesita m\u00e1s fuerza para comprimir el gas.', wrongs: ['La ley de Charles relaciona volumen y temperatura, no presi\u00f3n y volumen', 'Opci\u00f3n correcta', 'La ley de Gay-Lussac relaciona presi\u00f3n y temperatura a volumen constante', 'El principio de Pascal describe la transmisi\u00f3n de presi\u00f3n en fluidos, no la compresi\u00f3n de gases'] }
  },
  {
    id: 'CN27', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
    context: `"Un trabajador utiliza un plano inclinado de 4 m de longitud para subir un barril de 200 kg a una plataforma que est\u00e1 a 1 m de altura. El trabajador aplica una fuerza paralela al plano y el sistema tiene un rendimiento del 80%."`,
    question: `\u00bfQu\u00e9 ventaja mec\u00e1nica ofrece el plano inclinado al trabajador?`,
    options: ['Reduce el trabajo total necesario para subir el barril', 'Permite aplicar una fuerza menor que el peso del barril para elevarlo, aunque la distancia recorrida es mayor', 'Elimina la fricci\u00f3n entre el barril y la superficie', 'Convierte la fuerza aplicada en energ\u00eda potencial sin p\u00e9rdidas'],
    correct: 1,
    explanation: { correct: 'El plano inclinado permite aplicar una fuerza menor que el peso del objeto a cambio de recorrer una mayor distancia. La ventaja mec\u00e1nica ideal es longitud/altura = 4/1 = 4, por lo que la fuerza necesaria ser\u00eda aproximadamente 1/4 del peso (490 N en lugar de 1960 N), aunque la fricci\u00f3n y el rendimiento del 80% aumentan la fuerza real requerida.', wrongs: ['El trabajo total (mgh) es el mismo; el plano inclinado reduce la fuerza, no el trabajo', 'Opci\u00f3n correcta', 'El plano inclinado no elimina la fricci\u00f3n, de hecho puede aumentarla', 'Las m\u00e1quinas simples no eliminan las p\u00e9rdidas por fricci\u00f3n o calor'] }
  },
  {
    id: 'CN28', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
    context: `"En un cultivo de guisantes, Mendel cruz\u00f3 plantas de tallo alto (AA) con plantas de tallo enano (aa). Todas las plantas de la primera generaci\u00f3n filial (F1) fueron altas. Luego, al cruzar dos plantas de la F1 entre s\u00ed, obtuvo una generaci\u00f3n F2 con proporciones de 3:1 entre plantas altas y enanas."`,
    question: `Si en la F2 se obtuvieron 400 plantas, \u00bfcu\u00e1ntas se espera que sean homocigotas dominantes (AA)?`,
    svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style="max-width:400px">
  <text x="200" y="18" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Cruce parental (P): AA x aa</text>
  <!-- Punnett Square F1 -->
  <rect x="80" y="28" width="26" height="20" fill="none" stroke="#333" stroke-width="1"/>
  <rect x="106" y="28" width="40" height="20" fill="none" stroke="#333" stroke-width="1"/>
  <rect x="80" y="48" width="26" height="40" fill="#E8F5E9" stroke="#333" stroke-width="1"/>
  <rect x="106" y="48" width="40" height="40" fill="#E8F5E9" stroke="#333" stroke-width="1"/>
  <text x="93" y="42" text-anchor="middle" font-size="10" font-weight="bold" fill="#E91E63">A</text>
  <text x="126" y="42" text-anchor="middle" font-size="10" font-weight="bold" fill="#E91E63">A</text>
  <text x="93" y="73" text-anchor="middle" font-size="10" font-weight="bold" fill="#4CAF50">a</text>
  <text x="126" y="73" text-anchor="middle" font-size="10" font-weight="bold" fill="#4CAF50">a</text>
  <text x="93" y="68" text-anchor="middle" font-size="9" style="display:none">A</text>
  <text x="126" y="68" text-anchor="middle" font-size="9" style="display:none">A</text>
  <text x="93" y="68" text-anchor="middle" font-size="10" fill="#E91E63">A</text>
  <text x="126" y="68" text-anchor="middle" font-size="10" fill="#E91E63">A</text>
  <text x="93" y="86" text-anchor="middle" font-size="10" fill="#4CAF50">a</text>
  <text x="126" y="86" text-anchor="middle" font-size="10" fill="#4CAF50">a</text>
  <!-- Wait the grid is wrong. Let me redo it properly -->
  <!-- Punnett: meed to show the 4 cells for F1 -->
  <text x="200" y="40" text-anchor="middle" font-size="9" fill="#666">F1: 100% Aa (altas)</text>
  <!-- Arrow -->
  <text x="200" y="58" text-anchor="middle" font-size="14" fill="#666">\u00e2\u0086\u0093</text>
  <text x="200" y="74" text-anchor="middle" font-size="9" fill="#666">F1 x F1: Aa x Aa</text>
  <!-- Punnett Square F2 -->
  <rect x="80" y="82" width="26" height="20" fill="none" stroke="#333" stroke-width="1"/>
  <rect x="106" y="82" width="40" height="20" fill="none" stroke="#333" stroke-width="1"/>
  <rect x="80" y="102" width="26" height="20" fill="#E8F5E9" stroke="#333" stroke-width="1"/>
  <rect x="106" y="102" width="40" height="20" fill="#E8F5E9" stroke="#333" stroke-width="1"/>
  <rect x="80" y="122" width="26" height="20" fill="#E8F5E9" stroke="#333" stroke-width="1"/>
  <rect x="106" y="122" width="40" height="20" fill="#E8F5E9" stroke="#333" stroke-width="1"/>
  <text x="93" y="95" text-anchor="middle" font-size="10" font-weight="bold" fill="#E91E63">A</text>
  <text x="126" y="95" text-anchor="middle" font-size="10" font-weight="bold" fill="#4CAF50">a</text>
  <text x="93" y="116" text-anchor="middle" font-size="10" fill="#E91E63">A</text>
  <text x="126" y="116" text-anchor="middle" font-size="10" fill="#E91E63">A</text>
  <text x="93" y="136" text-anchor="middle" font-size="10" fill="#4CAF50">a</text>
  <text x="126" y="136" text-anchor="middle" font-size="10" fill="#4CAF50">a</text>
  <!-- Labels over cells -->
  <text x="93" y="112" text-anchor="middle" font-size="8" fill="#333">AA</text>
  <text x="126" y="112" text-anchor="middle" font-size="8" fill="#333">Aa</text>
  <text x="93" y="132" text-anchor="middle" font-size="8" fill="#333">Aa</text>
  <text x="126" y="132" text-anchor="middle" font-size="8" fill="#333">aa</text>
  <!-- F2 ratio bar chart -->
  <text x="200" y="100" text-anchor="middle" font-size="11" font-weight="bold" fill="#333">F2: 100 : 200 : 100</text>
  <rect x="165" y="110" width="20" height="80" fill="#4CAF50" opacity="0.8" rx="3"/>
  <rect x="190" y="50" width="20" height="140" fill="#66BB6A" opacity="0.7" rx="3"/>
  <rect x="215" y="110" width="20" height="80" fill="#81C784" opacity="0.6" rx="3"/>
  <text x="175" y="195" text-anchor="middle" font-size="8" fill="#333">AA</text>
  <text x="200" y="195" text-anchor="middle" font-size="8" fill="#333">Aa</text>
  <text x="225" y="195" text-anchor="middle" font-size="8" fill="#333">aa</text>
  <text x="175" y="106" text-anchor="middle" font-size="8" fill="#fff">100</text>
  <text x="200" y="46" text-anchor="middle" font-size="8" fill="#fff">200</text>
  <text x="225" y="106" text-anchor="middle" font-size="8" fill="#fff">100</text>
</svg>`,
    options: ['300', '200', '100', '400'],
    correct: 2,
    explanation: { correct: 'En la F2, la proporci\u00f3n genot\u00edpica esperada es 1 AA : 2 Aa : 1 aa. Es decir, 1/4 de las plantas son AA homocigotas dominantes. De 400 plantas: 400 \u00d7 1/4 = 100 plantas AA.', wrongs: ['300 ser\u00eda la suma de AA + Aa (plantas altas), no solo las homocigotas dominantes', '200 ser\u00edan las heterocigotas (Aa), no las homocigotas dominantes (AA)', 'Opci\u00f3n correcta', 'No todas las plantas de la F2 son AA; la proporci\u00f3n esperada es 1/4 AA'] }
  },
  // ===== INGLÉS - BLOQUE 3 (EN19-EN28) =====
  {
    id: 'EN19', area: 'ingles', areaName: 'Ingl\u00e9s', difficulty: 'media',
    context: `Read the text: "The cheetah is the fastest land animal on Earth. It can reach speeds of up to 120 kilometers per hour, but it can only maintain this speed for short distances. Cheetahs use their speed to catch prey like gazelles, but they exhaust quickly after a chase."`,
    question: `What is a limitation of the cheetah's speed mentioned in the text?`,
    options: ['It can only run fast for short distances', 'It cannot catch gazelles', 'It runs fastest in the water', 'It is slower than most other animals'],
    correct: 0,
    explanation: { correct: 'The text states cheetahs "can only maintain this speed for short distances" and "exhaust quickly after a chase," indicating their speed has a duration limitation.', wrongs: ['Opci\u00f3n correcta', 'The text says cheetahs "use their speed to catch prey like gazelles"', 'Cheetahs are land animals, not aquatic', 'The text says the cheetah is "the fastest land animal"'] }
  },
  {
    id: 'EN20', area: 'ingles', areaName: 'Ingl\u00e9s', difficulty: 'facil',
    context: `Sign: "Pool closed for maintenance. Reopens Monday at 8 AM."`,
    question: `When will the pool reopen?`,
    options: ['On Monday at 8 AM', 'On Friday at noon', 'Next month', 'It will not reopen'],
    correct: 0,
    explanation: { correct: 'The sign says "Reopens Monday at 8 AM." This directly tells when the pool will be available again after maintenance.', wrongs: ['Opci\u00f3n correcta', 'Monday is specified, not Friday', 'The sign says Monday, not next month', 'The sign gives a specific reopening date and time'] }
  },
  {
    id: 'EN21', area: 'ingles', areaName: 'Ingl\u00e9s', difficulty: 'dificil',
    context: `Read the text: "According to a study published in Nature, plants can 'talk' to each other through underground fungal networks called mycorrhizal networks. When a plant is attacked by pests, it releases chemical signals through these networks to warn neighboring plants. The warned plants then produce defensive compounds to protect themselves."`,
    question: `How do plants warn each other about danger according to the text?`,
    options: ['By making loud sounds', 'Through chemical signals sent via underground fungal networks', 'By releasing pollen into the air', 'Through their leaves touching each other'],
    correct: 1,
    explanation: { correct: 'The text says a plant "releases chemical signals through these networks to warn neighboring plants" when attacked. The mycorrhizal networks serve as a communication pathway.', wrongs: ['Plants do not make sounds', 'Opci\u00f3n correcta', 'Pollen is for reproduction, not warning', 'The text mentions underground networks, not leaf contact'] }
  },
  {
    id: 'EN22', area: 'ingles', areaName: 'Ingl\u00e9s', difficulty: 'media',
    context: `Read the announcement: "The school library will be closed on Friday, March 15th for inventory. All books must be returned by Thursday, March 14th. Students with overdue books will not be able to borrow new ones until they return them."`,
    question: `What must students do before Thursday, March 14th?`,
    options: ['Borrow new books', 'Return their books', 'Pay a fine', 'Register for the library'],
    correct: 1,
    explanation: { correct: 'The announcement says "All books must be returned by Thursday, March 14th" because the library will be closed for inventory on Friday.', wrongs: ['Borrowing would need to happen before the deadline for returns', 'Opci\u00f3n correcta', 'Fines are not mentioned in the announcement', 'Registration is not mentioned'] }
  },
  {
    id: 'EN23', area: 'ingles', areaName: 'Ingl\u00e9s', difficulty: 'media',
    context: `Read the text: "Norway is one of the best countries in the world to see the Northern Lights, also known as Aurora Borealis. The best time to visit is between October and March when the nights are longest. Many tourists stay in special glass igloos where they can watch the lights from their beds."`,
    question: `When is the best time to see the Northern Lights in Norway?`,
    options: ['Between June and August', 'Between October and March', 'Only in December', 'During the summer months'],
    correct: 1,
    explanation: { correct: 'The text says "The best time to visit is between October and March when the nights are longest." Longer nights provide better conditions for viewing the aurora.', wrongs: ['Summer has shorter nights, not ideal', 'Opci\u00f3n correcta', 'The period is October to March, not just December', 'Summer has shorter, brighter nights'] }
  },
  {
    id: 'EN24', area: 'ingles', areaName: 'Ingl\u00e9s', difficulty: 'facil',
    context: `Notice: "Lost kitten! Black and white. Answers to the name 'Oreo.' Last seen near the park on Elm Street. Please call 555-0123 if found."`,
    question: `What should you do if you find the kitten?`,
    options: ['Keep it as a pet', 'Call the phone number provided', 'Take it to the animal shelter', 'Leave it at the park'],
    correct: 1,
    explanation: { correct: 'The notice says "Please call 555-0123 if found." This is the action requested from anyone who finds the lost kitten.', wrongs: ['The owner wants the kitten back', 'Opci\u00f3n correcta', 'The notice asks to call the owner directly', 'The notice asks to call the number provided'] }
  },
  {
    id: 'EN25', area: 'ingles', areaName: 'Ingl\u00e9s', difficulty: 'dificil',
    context: `Read the text: "The term 'FOMO' stands for 'Fear Of Missing Out.' It describes the anxiety people feel when they think others are having rewarding experiences without them. Psychologists link FOMO to social media use, where users constantly see curated highlights of other people's lives. This can lead to decreased life satisfaction and increased feelings of inadequacy."`,
    question: `According to the text, what is FOMO linked to?`,
    options: ['Fear of flying', 'Social media use and seeing others\u2019 experiences', 'Fear of public speaking', 'Working too many hours'],
    correct: 1,
    explanation: { correct: 'The text says "Psychologists link FOMO to social media use, where users constantly see curated highlights of other people\'s lives." The constant exposure to others\u2019 positive experiences triggers the anxiety.', wrongs: ['FOMO is "Fear Of Missing Out," not fear of flying', 'Opci\u00f3n correcta', 'Public speaking fear is unrelated', 'Work hours are not mentioned'] }
  },
  {
    id: 'EN26', area: 'ingles', areaName: 'Ingl\u00e9s', difficulty: 'media',
    context: `Read the recipe step: "First, preheat the oven to 350 degrees Fahrenheit. While the oven is heating, mix the flour, sugar, and eggs in a large bowl. Then add the vanilla extract and stir until smooth. Pour the mixture into a greased baking pan and bake for 25 minutes."`,
    question: `What should you do after preheating the oven?`,
    options: ['Bake the mixture for 25 minutes', 'Mix the dry ingredients with the eggs', 'Pour the mixture into a pan', 'Add vanilla extract to the bowl'],
    correct: 1,
    explanation: { correct: 'The instructions say: "While the oven is heating, mix the flour, sugar, and eggs in a large bowl." This step comes right after preheating, to be done while the oven reaches temperature.', wrongs: ['Baking comes after everything is prepared', 'Opci\u00f3n correcta', 'Pouring into the pan comes after mixing', 'Vanilla is added after the initial mixing'] }
  },
  {
    id: 'EN27', area: 'ingles', areaName: 'Ingl\u00e9s', difficulty: 'facil',
    context: `Read the ad: "Furniture sale! Sofas starting at $299. Dining tables at 50% off. Free delivery for purchases over $1,000. Offer valid until Sunday."`,
    question: `How can a customer get free delivery?`,
    options: ['By buying a sofa', 'By spending more than $1,000', 'By coming on Sunday', 'By ordering online'],
    correct: 1,
    explanation: { correct: 'The ad says "Free delivery for purchases over $1,000." This means customers who spend more than $1,000 qualify for free delivery.', wrongs: ['Sofas start at $299, which alone may not reach $1,000', 'Opci\u00f3n correcta', 'Sunday is when the offer ends, not the condition for free delivery', 'Online ordering is not mentioned'] }
  },
  {
    id: 'EN28', area: 'ingles', areaName: 'Ingl\u00e9s', difficulty: 'dificil',
    context: `Read the text: "In many cultures, colors carry symbolic meanings. White is often associated with purity and weddings in Western cultures, but in some Eastern cultures, white is worn at funerals. Red symbolizes luck and prosperity in China, while in other contexts it can represent danger or love. These differences remind us that color perception is shaped by culture as much as by biology."`,
    question: `What does the text say about the color white?`,
    options: ['It has the same meaning in all cultures', 'It represents purity in the West and mourning in some Eastern cultures', 'It is never used in celebrations', 'It only symbolizes danger'],
    correct: 1,
    explanation: { correct: 'The text contrasts white\'s meaning: "White is often associated with purity and weddings in Western cultures, but in some Eastern cultures, white is worn at funerals." This shows cultural differences in color symbolism.', wrongs: ['The text shows white has DIFFERENT meanings across cultures', 'Opci\u00f3n correcta', 'White is used in weddings (Western) and funerals (Eastern), both important ceremonies', 'Danger is associated with red, not white'] }
  },
  // ===== MÁS LECTURA =====
  {
    id: 'LC28', area: 'lectura', areaName: 'Lectura Cr\u00edtica', difficulty: 'dificil',
    context: `"En su ensayo 'El laberinto de la soledad' (1950), Octavio Paz analiza la identidad del mexicano a partir de la experiencia de la soledad y la m\u00e1scara. Seg\u00fan Paz, la historia de M\u00e9xico es la del hombre que busca su filiaci\u00f3n, su origen: "El mexicano no quiere o no se atreve a ser \u00e9l mismo. Constantemente, la m\u00e1scara sustituye a su rostro verdadero". La Revoluci\u00f3n mexicana, para Paz, fue un intento de romper con esa m\u00e1scara y descubrir el rostro aut\u00e9ntico del pueblo.`,
    question: `Seg\u00fan Octavio Paz, la "m\u00e1scara" del mexicano representa:`,
    options: ['Una tradici\u00f3n art\u00edstica propia de las culturas prehisp\u00e1nicas', 'La ocultaci\u00f3n de la identidad aut\u00e9ntica y el miedo a mostrarse tal como se es', 'Un mecanismo de defensa necesario para la supervivencia social', 'La influencia de la cultura espa\u00f1ola sobre la ind\u00edgena'],
    correct: 1,
    explanation: { correct: 'Paz sostiene que "la m\u00e1scara sustituye a su rostro verdadero" y que el mexicano "no quiere o no se atreve a ser \u00e9l mismo". La m\u00e1scara simboliza la ocultaci\u00f3n de la identidad aut\u00e9ntica, un tema central en su an\u00e1lisis del car\u00e1cter mexicano y su relaci\u00f3n con la historia.', wrongs: ['La m\u00e1scara es una met\u00e1fora psicol\u00f3gica e identitaria, no una referencia literal al arte prehisp\u00e1nico', 'Opci\u00f3n correcta', 'Paz no presenta la m\u00e1scara como algo necesario sino como un problema que la Revoluci\u00f3n intent\u00f3 resolver', 'La m\u00e1scara no es solo influencia espa\u00f1ola sino una condici\u00f3n existencial del mexicano moderno'] }
  },
  {
    id: 'LC29', area: 'lectura', areaName: 'Lectura Cr\u00edtica', difficulty: 'media',
    context: `"Hasta ahora he explicado los fen\u00f3menos celestes y los de nuestro mar mediante la fuerza de la gravedad, pero no he asignado causa alguna a esta. Esta fuerza surge de alguna causa que penetra hasta los centros del Sol y los planetas sin disminuir su capacidad de actuar. No fingo hip\u00f3tesis: pues todo lo que no se deduce de los fen\u00f3menos debe llamarse hip\u00f3tesis; y las hip\u00f3tesis, ya sean metaf\u00edsicas o f\u00edsicas, ya de cualidades ocultas o mec\u00e1nicas, no tienen cabida en la filosof\u00eda experimental." - Isaac Newton, "Principios matem\u00e1ticos de la filosof\u00eda natural" (1687), Escolio General.`,
    question: `Con la expresi\u00f3n "No fingo hip\u00f3tesis" ("No finjo hip\u00f3tesis"), Newton establece que:`,
    options: ['Las hip\u00f3tesis cient\u00edficas no tienen ning\u00fan valor y deben ser eliminadas', 'La filosof\u00eda experimental debe limitarse a deducir causas a partir de los fen\u00f3menos observables', 'Es aceptable inventar explicaciones sin base emp\u00edrica para los fen\u00f3menos naturales', 'Las hip\u00f3tesis metaf\u00edsicas son superiores a las explicaciones mec\u00e1nicas'],
    correct: 1,
    explanation: { correct: 'Newton afirma que no propone hip\u00f3tesis no fundamentadas en fen\u00f3menos. Su m\u00e9todo consiste en deducir causas a partir de fen\u00f3menos observables, rechazando las especulaciones que no se derivan de la experiencia. Esto establece el principio central de la filosof\u00eda experimental: basarse en la observaci\u00f3n y deducci\u00f3n.', wrongs: ['Newton no rechaza toda hip\u00f3tesis, sino aquellas que "no se deducen de los fen\u00f3menos"', 'Opci\u00f3n correcta', 'Newton rechaza expl\u00edcitamente las hip\u00f3tesis no basadas en fen\u00f3menos, no las acepta', 'Newton dice que las hip\u00f3tesis "no tienen cabida en la filosof\u00eda experimental", sean metaf\u00edsicas o mec\u00e1nicas'] }
  },
  {
    id: 'LC30', area: 'lectura', areaName: 'Lectura Cr\u00edtica', difficulty: 'facil',
    context: `"La ciudad y los perros", la primera novela de Mario Vargas Llosa (1963), transcurre en el Colegio Militar Leoncio Prado de Lima. La obra muestra la violencia y la hipocres\u00eda que impregnan la instituci\u00f3n, donde los cadetes deben sobrevivir en un ambiente hostil. El t\u00edtulo alude tanto a los perros que deambulan por el colegio como a la condici\u00f3n de los propios cadetes, tratados como animales por sus superiores.`,
    question: `El t\u00edtulo "La ciudad y los perros" funciona como una met\u00e1fora que:`,
    options: ['Describe literalmente los animales que habitan la ciudad de Lima', 'Equipara la condici\u00f3n de los cadetes con la de animales sometidos a la violencia institucional', 'Se refiere exclusivamente a la fauna silvestre del Per\u00fa', 'Alude a la libertad de los j\u00f3venes en la ciudad'],
    correct: 1,
    explanation: { correct: 'El t\u00edtulo establece una analog\u00eda entre los cadetes ("los perros" tratados como animales) y el entorno opresivo ("la ciudad" = el Colegio Militar como microcosmos social). La novela critica la violencia institucional que deshumaniza a los j\u00f3venes soldados.', wrongs: ['El t\u00edtulo tiene un sentido metaf\u00f3rico, no literal', 'Opci\u00f3n correcta', 'La met\u00e1fora se refiere a los cadetes, no a la fauna', 'La novela muestra precisamente la falta de libertad en la instituci\u00f3n'] }
  },
  // ===== MÁS SOCIALES =====
  {
    id: 'SC27', area: 'sociales', areaName: 'Sociales y Ciudadan\u00eda', difficulty: 'facil',
    context: `"La Constituci\u00f3n de 1991 reconoce que Colombia es un pa\u00eds pluri\u00e9tnico y multicultural. Los art\u00edculos 7 y 8 establecen la obligaci\u00f3n del Estado de proteger la diversidad \u00e9tnica y cultural de la naci\u00f3n y las riquezas culturales y naturales del pa\u00eds."`,
    question: `El reconocimiento constitucional de Colombia como un pa\u00eds pluri\u00e9tnico y multicultural implica que el Estado debe:`,
    options: ['Imponer una sola identidad cultural a todos los ciudadanos', 'Proteger y respetar a los diferentes grupos \u00e9tnicos y culturales que coexisten en el pa\u00eds', 'Otorgar derechos exclusivamente a las comunidades ind\u00edgenas', 'Eliminar las diferencias culturales para unificar la naci\u00f3n'],
    correct: 1,
    explanation: { correct: 'El car\u00e1cter pluri\u00e9tnico y multicultural de Colombia (arts. 7 y 8 de la Constituci\u00f3n) significa que el Estado reconoce y protege la coexistencia de m\u00faltiples grupos \u00e9tnicos: ind\u00edgenas, afrocolombianos, raizales, pueblo ROM (gitano) y comunidades campesinas, cada uno con sus propias lenguas, tradiciones, territorios y formas de organizaci\u00f3n.', wrongs: ['El multiculturalismo implica respeto por la diversidad, no imposici\u00f3n de una identidad \u00fanica', 'Opci\u00f3n correcta', 'Los derechos constitucionales abarcan a todos los grupos \u00e9tnicos, no solo a los ind\u00edgenas', 'La Constituci\u00f3n valora la diversidad cultural como una riqueza, no como algo que deba eliminarse'] }
  },
  {
    id: 'SC28', area: 'sociales', areaName: 'Sociales y Ciudadan\u00eda', difficulty: 'media',
    question: `La Ley 70 de 1993, tambi\u00e9n conocida como Ley de Comunidades Negras, reconoci\u00f3 el derecho de las comunidades afrocolombianas a:`,
    options: ['La propiedad colectiva de las tierras en la regi\u00f3n del Pac\u00edfico y sus pr\u00e1cticas tradicionales de producci\u00f3n', 'La exenci\u00f3n del pago de impuestos nacionales', 'La representaci\u00f3n exclusiva en el Congreso de la Rep\u00fablica', 'La creaci\u00f3n de departamentos aut\u00f3nomos independientes'],
    correct: 0,
    explanation: { correct: 'La Ley 70 de 1993 desarrolla el art\u00edculo transitorio 55 de la Constituci\u00f3n y otorga el derecho a la propiedad colectiva de las tierras de las comunidades negras en la regi\u00f3n del Pac\u00edfico. Tambi\u00e9n reconoce sus pr\u00e1cticas tradicionales de producci\u00f3n, su identidad cultural, y establece mecanismos de protecci\u00f3n de sus derechos territoriales y culturales.', wrongs: ['Opci\u00f3n correcta', 'No establece exenciones tributarias para comunidades negras', 'La Constituci\u00f3n reserva esca\u00f1os para comunidades ind\u00edgenas y afro en la C\u00e1mara, pero no es una creaci\u00f3n de la Ley 70', 'Colombia es una rep\u00fablica unitaria; no existen departamentos aut\u00f3nomos independientes'] }
  },
  {
    id: 'SC29', area: 'sociales', areaName: 'Sociales y Ciudadan\u00eda', difficulty: 'facil',
    question: `Los derechos fundamentales consagrados en la Constituci\u00f3n de 1991 (T\u00edtulo II, arts. 11-41) se caracterizan por:`,
    options: ['Ser de aplicaci\u00f3n inmediata y protegibles mediante acci\u00f3n de tutela', 'Aplicar \u00fanicamente a los ciudadanos colombianos mayores de edad', 'Ser derechos que solo el Congreso puede invocar', 'Estar sujetos a reglamentaci\u00f3n previa del Ejecutivo para su aplicaci\u00f3n'],
    correct: 0,
    explanation: { correct: 'Los derechos fundamentales en la Constituci\u00f3n de 1991 son de aplicaci\u00f3n inmediata (art. 85), lo que significa que no requieren desarrollo legislativo previo para ser exigibles. Cualquier persona puede solicitar su protecci\u00f3n mediante la acci\u00f3n de tutela (art. 86) cuando sean vulnerados o amenazados.', wrongs: ['Opci\u00f3n correcta', 'Los derechos fundamentales aplican a todas las personas en territorio colombiano, sin distinci\u00f3n de edad o nacionalidad', 'Todas las personas pueden invocar derechos fundamentales, no solo el Congreso', 'Precisamente se caracterizan por no requerir reglamentaci\u00f3n previa; son de aplicaci\u00f3n inmediata'] }
  },
  // ===== MÁS CIENCIAS =====
  {
    id: 'CN29', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
    context: `"En una pr\u00e1ctica de laboratorio, un estudiante sumerge una l\u00e1mina de zinc en una soluci\u00f3n de sulfato de cobre (CuSO\u2084). Despu\u00e9s de unos minutos, observa que la l\u00e1mina de zinc se cubre de un dep\u00f3sito rojizo y la soluci\u00f3n, que inicialmente era azul, pierde color."`,
    question: `\u00bfQu\u00e9 tipo de reacci\u00f3n ocurri\u00f3 y qu\u00e9 indica el cambio de color?`,
    options: ['Reacci\u00f3n de descomposici\u00f3n; el sulfato se separ\u00f3 en cobre y azufre', 'Reacci\u00f3n de desplazamiento simple; el zinc, m\u00e1s reactivo, desplaz\u00f3 al cobre de la soluci\u00f3n', 'Reacci\u00f3n de s\u00edntesis; se form\u00f3 un nuevo compuesto de zinc y cobre', 'Reacci\u00f3n de combusti\u00f3n; el zinc se oxid\u00f3 con el ox\u00edgeno del agua'],
    correct: 1,
    explanation: { correct: 'Es una reacci\u00f3n de desplazamiento simple (redox): Zn(s) + CuSO\u2084(ac) \u2192 ZnSO\u2084(ac) + Cu(s). El zinc, que es m\u00e1s reactivo que el cobre seg\u00fan la serie de actividad, desplaza al cobre. El color azul del CuSO\u2084 desaparece al formarse ZnSO\u2084 (incoloro) y el cobre met\u00e1lico se deposita como s\u00f3lido rojizo.', wrongs: ['No es descomposici\u00f3n porque no hay un solo reactivo dividi\u00e9ndose en productos m\u00e1s simples', 'Opci\u00f3n correcta', 'No es s\u00edntesis porque hay intercambio de elementos entre compuestos', 'No hay combusti\u00f3n; no se requiere ox\u00edgeno y no hay llama'] }
  },
  {
    id: 'CN30', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
    context: `"En un recipiente cerrado con un \u00e9mbolo m\u00f3vil, se tienen 2 litros de gas helio a 1 atm de presi\u00f3n y 27\u00b0C. Se calienta el gas hasta 127\u00b0C manteniendo la presi\u00f3n constante mediante el movimiento del \u00e9mbolo."`,
    question: `\u00bfQu\u00e9 volumen ocupar\u00e1 el gas a 127\u00b0C?`,
    svg: `<svg viewBox="0 0 420 180" xmlns="http://www.w3.org/2000/svg" style="max-width:420px">
  <text x="110" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Antes: 27\u00b0C</text>
  <text x="310" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="#E91E63">Despu\u00e9s: 127\u00b0C</text>
  <rect x="40" y="40" width="140" height="100" fill="#E3F2FD" opacity="0.4" stroke="#90CAF9" stroke-width="1.5" rx="5"/>
  <rect x="40" y="40" width="140" height="100" fill="#BBDEFB" opacity="0.3" rx="5"/>
  <rect x="35" y="35" width="150" height="10" fill="#78909C" stroke="#546E7A" stroke-width="1" rx="2"/>
  <circle cx="65" cy="75" r="4" fill="#E91E63" opacity="0.5"/>
  <circle cx="90" cy="65" r="4" fill="#E91E63" opacity="0.5"/>
  <circle cx="115" cy="80" r="4" fill="#E91E63" opacity="0.5"/>
  <circle cx="140" cy="70" r="4" fill="#E91E63" opacity="0.5"/>
  <circle cx="75" cy="100" r="4" fill="#E91E63" opacity="0.5"/>
  <circle cx="105" cy="95" r="4" fill="#E91E63" opacity="0.5"/>
  <circle cx="135" cy="105" r="4" fill="#E91E63" opacity="0.5"/>
  <circle cx="155" cy="85" r="4" fill="#E91E63" opacity="0.5"/>
  <text x="110" y="155" text-anchor="middle" font-size="12" fill="#1565C0" font-weight="bold">V = 2 L</text>
  <text x="200" y="100" font-size="22" fill="#666">\u2192</text>
  <text x="205" y="60" font-size="14" fill="#E91E63">Q</text>
  <rect x="230" y="40" width="180" height="100" fill="#FFF3E0" opacity="0.4" stroke="#FFB74D" stroke-width="1.5" rx="5"/>
  <rect x="230" y="40" width="180" height="100" fill="#FFE0B2" opacity="0.3" rx="5"/>
  <rect x="225" y="35" width="190" height="10" fill="#78909C" stroke="#546E7A" stroke-width="1" rx="2"/>
  <path d="M340 50 L340 35 M335 40 L340 35 L345 40" fill="none" stroke="#4CAF50" stroke-width="1.5"/>
  <text x="355" y="38" font-size="8" fill="#4CAF50">Expande</text>
  <circle cx="250" cy="75" r="4" fill="#E91E63" opacity="0.4"/>
  <circle cx="280" cy="65" r="4" fill="#E91E63" opacity="0.4"/>
  <circle cx="310" cy="85" r="4" fill="#E91E63" opacity="0.4"/>
  <circle cx="340" cy="70" r="4" fill="#E91E63" opacity="0.4"/>
  <circle cx="370" cy="80" r="4" fill="#E91E63" opacity="0.4"/>
  <circle cx="260" cy="100" r="4" fill="#E91E63" opacity="0.4"/>
  <circle cx="295" cy="105" r="4" fill="#E91E63" opacity="0.4"/>
  <circle cx="330" cy="110" r="4" fill="#E91E63" opacity="0.4"/>
  <circle cx="365" cy="105" r="4" fill="#E91E63" opacity="0.4"/>
  <circle cx="390" cy="90" r="4" fill="#E91E63" opacity="0.4"/>
  <text x="320" y="155" text-anchor="middle" font-size="12" fill="#E91E63" font-weight="bold">V = 2,67 L</text>
</svg>`,
    options: ['2,67 L', '1,5 L', '2 L', '3 L'],
    correct: 0,
    explanation: { correct: 'A presi\u00f3n constante se aplica la ley de Charles: V\u2081/T\u2081 = V\u2082/T\u2082. Las temperaturas deben estar en Kelvin: T\u2081 = 27 + 273 = 300 K, T\u2082 = 127 + 273 = 400 K. V\u2082 = V\u2081 \u00d7 T\u2082/T\u2081 = 2 L \u00d7 400/300 = 2 \u00d7 1,333 = 2,67 L.', wrongs: ['Opci\u00f3n correcta', 'Al aumentar la temperatura el volumen debe aumentar (ley de Charles), no disminuir', 'Si la temperatura cambia de 300 K a 400 K, el volumen debe aumentar proporcionalmente', '3 L requerir\u00eda una temperatura de 450 K (177\u00b0C), no 400 K'] }
  },
  {
    id: 'CN31', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
    context: `"Un estudiante observa al microscopio una muestra de agua estancada y encuentra organismos unicelulares que se mueven activamente. Algunos tienen cloroplastos y otros no. Todos tienen n\u00facleo definido."`,
    question: `\u00bfA qu\u00e9 grupo de organismos pertenecen estas c\u00e9lulas?`,
    options: ['Bacterias, porque son unicelulares', 'Protistas, porque son eucariotas unicelulares', 'Hongos, porque viven en ambientes h\u00famedos', 'Virus, porque son microsc\u00f3picos'],
    correct: 1,
    explanation: { correct: 'Los protistas son organismos eucariotas unicelulares (con n\u00facleo definido) que pueden ser aut\u00f3trofos (con cloroplastos) o heter\u00f3trofos (sin cloroplastos). Las bacterias son procariotas (sin n\u00facleo definido), los hongos son generalmente pluricelulares y los virus no son c\u00e9lulas.', wrongs: ['Las bacterias son procariotas, no tienen n\u00facleo definido', 'Opci\u00f3n correcta', 'Los hongos son eucariotas pero generalmente pluricelulares, no unicelulares', 'Los virus no son c\u00e9lulas y no se observan con microscopio \u00f3ptico'] }
  },
  // ===== MÁS INGLÉS (EN29-EN30) =====
  {
    id: 'EN29', area: 'ingles', areaName: 'Ingl\u00e9s', difficulty: 'media',
    context: `Read the text: "Singapore is a city-state in Southeast Asia. It is known for its strict laws, cleanliness, and modern architecture. The country has four official languages: English, Mandarin, Malay, and Tamil. English is the language of business and education, which makes Singapore attractive to international companies."`,
    question: `Why is Singapore attractive to international companies according to the text?`,
    options: ['Because of its strict laws', 'Because English is used in business and education', 'Because it has four official languages', 'Because of its modern architecture'],
    correct: 1,
    explanation: { correct: 'The text directly states "English is the language of business and education, which makes Singapore attractive to international companies." The use of English facilitates international business operations.', wrongs: ['Strict laws are mentioned but not as the reason for business attraction', 'Opci\u00f3n correcta', 'Having four languages is listed as a fact, not as the business attraction', 'Modern architecture is mentioned but not as the attraction for companies'] }
  },
  {
    id: 'EN30', area: 'ingles', areaName: 'Ingl\u00e9s', difficulty: 'dificil',
    context: `Read the text: "The sinking of the Titanic in 1912 led to major changes in maritime safety regulations. Before the disaster, ships did not carry enough lifeboats for all passengers because regulations were based on ship tonnage rather than passenger capacity. After the Titanic, the International Convention for the Safety of Life at Sea (SOLAS) was established, requiring enough lifeboats for everyone on board."`,
    question: `What was the main flaw in pre-1912 safety regulations according to the text?`,
    options: ['Ships did not have lifeboats at all', 'Lifeboat requirements were based on ship size, not passenger numbers', 'The Titanic ignored all safety rules', 'Only first-class passengers had access to lifeboats'],
    correct: 1,
    explanation: { correct: 'The text says "regulations were based on ship tonnage rather than passenger capacity," meaning the number of lifeboats depended on the ship\'s size, not on how many people were aboard.', wrongs: ['Ships had lifeboats, just not enough for everyone', 'Opci\u00f3n correcta', 'The text does not claim the Titanic ignored rules', 'Class access to lifeboats is not mentioned'] }
  },

  // ===== LECTURA CRÍTICA - BLOQUE 4 (LC31-LC60) =====
  {
    id: 'LC31', area: 'lectura', areaName: 'Lectura Cr\u00edtica', difficulty: 'dificil',
    context: `"Yo os ense\u00f1ar\u00e9 el superhombre. El hombre es algo que debe ser superado. \u00bfQu\u00e9 hab\u00e9is hecho para superarlo? Todos los seres han creado algo superior a s\u00ed mismos. \u00bfQuer\u00e9is ser el reflujo de esa gran marea y volver a la bestia antes que superar al hombre? El superhombre es el sentido de la tierra. Que vuestra voluntad diga: \u00a1el superhombre sea el sentido de la tierra!" - Friedrich Nietzsche, "As\u00ed habl\u00f3 Zaratustra" (1883-1885), Pr\u00f3logo.`,
    question: `Cuando Nietzsche afirma que "el hombre es algo que debe ser superado", se refiere a:`,
    options: ['La necesidad de que la humanidad regrese a un estado natural anterior a la civilizaci\u00f3n', 'La exigencia de que cada individuo trascienda las limitaciones impuestas por la moral tradicional y cree sus propios valores', 'La obligaci\u00f3n de la especie humana de evolucionar biol\u00f3gicamente hacia una nueva forma f\u00edsica', 'El rechazo de toda forma de cultura y conocimiento para volver al instinto animal'],
    correct: 1,
    explanation: { correct: 'Para Nietzsche, el superhombre (\u00dcbermensch) representa la capacidad de superar la moral herdada, crear valores propios y afirmar la vida. La frase "el hombre es algo que debe ser superado" no se refiere a una evoluci\u00f3n biol\u00f3gica sino a una transformaci\u00f3n de los valores y la voluntad.', wrongs: ['Nietzsche no propone regresar a la naturaleza sino trascender la condici\u00f3n humana actual mediante la creaci\u00f3n de nuevos valores', 'Opci\u00f3n correcta', 'Nietzsche habla de una superaci\u00f3n espiritual y moral, no biol\u00f3gica', 'La superaci\u00f3n implica crear cultura, no rechazarla'] }
  },
  {
    id: 'LC32', area: 'lectura', areaName: 'Lectura Cr\u00edtica', difficulty: 'media',
    context: `"Ella lo mir\u00f3, lo vio desarmado, y una vida de ternura contenida estall\u00f3 en sus p\u00e1rpados. Era la primera vez que Florentino Ariza la ve\u00eda llorar. Nunca hab\u00eda imaginado que el llanto de esa mujer pudiera ser otra cosa que una tormenta de alegr\u00eda." - Gabriel Garc\u00eda M\u00e1rquez, "El amor en los tiempos del c\u00f3lera" (1985).`,
    question: `En el fragmento, la expresi\u00f3n "una vida de ternura contenida estall\u00f3 en sus p\u00e1rpados" sugiere que:`,
    options: ['La mujer estaba experimentando una alegr\u00eda intensa y desbordante', 'Los sentimientos largamente reprimidos de la mujer se manifestaban finalmente a trav\u00e9s del llanto', 'La mujer hab\u00eda llorado muchas veces antes, pero esta vez era diferente', 'Florentino Ariza comprend\u00eda perfectamente el significado del llanto de la mujer'],
    correct: 1,
    explanation: { correct: 'La frase "una vida de ternura contenida" indica que los sentimientos hab\u00edan sido reprimidos durante mucho tiempo ("contenida"), y "estall\u00f3" sugiere una liberaci\u00f3n s\u00fabita. El llanto revela la ternura que hab\u00eda permanecido oculta. Adem\u00e1s, Florentino "nunca hab\u00eda imaginado" que ella pudiera llorar as\u00ed, lo que subraya la novedad de esta manifestaci\u00f3n emocional.', wrongs: ['La imagen del llanto se asocia m\u00e1s con una liberaci\u00f3n de sentimientos contenidos que con alegr\u00eda', 'Opci\u00f3n correcta', 'El texto sugiere que es la PRIMERA vez que Florentino la ve llorar, lo que resalta lo excepcional', 'Florentino precisamente no comprend\u00eda el llanto: "nunca hab\u00eda imaginado" que ella llorara as\u00ed'] }
  },
  {
    id: 'LC33', area: 'lectura', areaName: 'Lectura Cr\u00edtica', difficulty: 'facil',
    context: `"La acci\u00f3n es la actividad pol\u00edtica por excelencia, la \u00fanica actividad que se da entre los hombres sin la mediaci\u00f3n de cosas o materia. La pluralidad humana, la condici\u00f3n b\u00e1sica de la acci\u00f3n y el discurso, tiene el doble car\u00e1cter de igualdad y distinci\u00f3n. Si los hombres no fueran iguales, no podr\u00edan entenderse ni planificar el futuro. Si no fueran distintos, no necesitar\u00edan el discurso ni la acci\u00f3n para entenderse." - Hannah Arendt, "La condici\u00f3n humana" (1958).`,
    question: `Seg\u00fan Arendt, la "pluralidad humana" se caracteriza por:`,
    options: ['La uniformidad de todos los seres humanos en sus opiniones y acciones', 'La combinaci\u00f3n de igualdad y distinci\u00f3n que hace necesarios la acci\u00f3n y el discurso', 'La superioridad de unos seres humanos sobre otros en capacidad pol\u00edtica', 'La imposibilidad de que los seres humanos se comprendan entre s\u00ed'],
    correct: 1,
    explanation: { correct: 'Arendt afirma que la pluralidad tiene "el doble car\u00e1cter de igualdad y distinci\u00f3n". La igualdad permite el entendimiento mutuo; la distinci\u00f3n hace necesario el discurso y la acci\u00f3n pol\u00edtica. Sin ambas, la pol\u00edtica no tendr\u00eda sentido: sin igualdad no habr\u00eda comunicaci\u00f3n, sin distinci\u00f3n no har\u00eda falta la deliberaci\u00f3n.', wrongs: ['Arendt enfatiza la distinci\u00f3n entre los seres humanos, no su uniformidad', 'Opci\u00f3n correcta', 'Arendt no propone jerarqu\u00edas sino una condici\u00f3n de igualdad que permite la acci\u00f3n pol\u00edtica', 'El texto dice exactamente lo contrario: la igualdad permite que se entiendan'] }
  },
  {
    id: 'LC34', area: 'lectura', areaName: 'Lectura Cr\u00edtica', difficulty: 'facil',
    context: `"Confieso que he vivido. Por algo le pusieron ese nombre a estos libros: porque en ellos quiso quedarse detenido el tiempo. Pasa la vida, pasa la vida, y uno se va con ella. Pero a veces, escribir es la manera de no irse del todo. Uno escribe para llenar sus huesos de una substancia que no se pudre." - Pablo Neruda, "Confieso que he vivido. Memorias" (1974).`,
    question: `Seg\u00fan Neruda, la escritura de memorias tiene como prop\u00f3sito:`,
    options: ['Ganar fama y reconocimiento literario en vida', 'Detener el paso del tiempo y preservar la experiencia para que no desaparezca', 'Corregir los errores del pasado mediante la ficci\u00f3n', 'Cumplir con una obligaci\u00f3n editorial impuesta'],
    correct: 1,
    explanation: { correct: 'Neruda dice que escribe "para llenar sus huesos de una substancia que no se pudre" y que los libros de memorias son lugares donde "quiso quedarse detenido el tiempo". La escritura como forma de preservar la vida frente a la muerte, de "no irse del todo".', wrongs: ['Neruda no menciona la fama como motivaci\u00f3n; su impulso es m\u00e1s existencial', 'Opci\u00f3n correcta', 'El texto no habla de corregir el pasado sino de preservar la experiencia vivida', 'No hay menci\u00f3n de obligaciones externas; el impulso es \u00edntimo y personal'] }
  },
  {
    id: 'LC35', area: 'lectura', areaName: 'Lectura Cr\u00edtica', difficulty: 'dificil',
    context: `"El criterio de demarcaci\u00f3n entre ciencia y pseudociencia no es la verificabilidad, sino la falseabilidad. Una teor\u00eda es cient\u00edfica si hace predicciones que pueden ser puestas a prueba y potencialmente refutadas por la experiencia. La confirmaci\u00f3n de una teor\u00eda no prueba su verdad; solo significa que ha sobrevivido a un intento de refutaci\u00f3n." - Karl Popper, "La l\u00f3gica de la investigaci\u00f3n cient\u00edfica" (1934).`,
    question: `Seg\u00fan Popper, lo que distingue a una teor\u00eda cient\u00edfica de una que no lo es es:`,
    options: ['Que pueda ser verificada emp\u00edricamente mediante numerosos experimentos', 'Que pueda ser puesta a prueba y potencialmente refutada por la experiencia', 'Que sea aceptada por la mayor\u00eda de la comunidad cient\u00edfica', 'Que tenga aplicaciones tecnol\u00f3gicas pr\u00e1cticas e inmediatas'],
    correct: 1,
    explanation: { correct: 'Popper propone la falseabilidad (falsacionismo) como criterio de demarcaci\u00f3n: una teor\u00eda es cient\u00edfica si hace predicciones que pueden ser refutadas por la observaci\u00f3n. La verificabilidad no es suficiente porque teor\u00edas pseudocient\u00edficas pueden encontrar confirmaciones, pero no se exponen al riesgo de ser refutadas.', wrongs: ['Popper rechaza la verificabilidad como criterio; teor\u00edas como el psicoan\u00e1lisis encontraban muchas verificaciones pero no eran cient\u00edficas', 'Opci\u00f3n correcta', 'El consenso cient\u00edfico no es el criterio l\u00f3gico de demarcaci\u00f3n para Popper', 'La utilidad pr\u00e1ctica no determina el car\u00e1cter cient\u00edfico de una teor\u00eda'] }
  },
  {
    id: 'LC36', area: 'lectura', areaName: 'Lectura Cr\u00edtica', difficulty: 'media',
    context: `"Axolotl" es un cuento de Julio Cort\u00e1zar, publicado en su libro "Final del juego" (1956). En el relato, un hombre visita el acuario del Jardin des Plantes en Par\u00eds y queda fascinado por los axolotl, unas criaturas acu\u00e1ticas que lo hipnotizan. Poco a poco, el visitante comienza a identificarse con ellos hasta el punto de sentir que se ha convertido en uno de ellos y que su propio rostro humano ya no le pertenece.`,
    question: `El tema central del cuento "Axolotl" de Cort\u00e1zar es:`,
    options: ['La descripci\u00f3n cient\u00edfica de una especie animal en peligro de extinci\u00f3n', 'La disoluci\u00f3n de la identidad humana y la fusi\u00f3n con el otro a trav\u00e9s de la mirada', 'Un viaje tur\u00edstico por los acuarios m\u00e1s famosos de Par\u00eds', 'La lucha por la supervivencia entre diferentes especies acu\u00e1ticas'],
    correct: 1,
    explanation: { correct: 'Cort\u00e1zar explora la disoluci\u00f3n de las fronteras entre el yo y el otro, entre lo humano y lo animal. El protagonista se siente gradualmente transformado en axolotl, perdiendo su identidad humana. La fascinaci\u00f3n por la mirada del axolotl desencadena esta metamorfosis ontol\u00f3gica.', wrongs: ['El cuento utiliza los axolotl como elemento literario para explorar la identidad, no como objeto de estudio cient\u00edfico', 'Opci\u00f3n correcta', 'El Jardin des Plantes es solo el escenario; el tema no es el turismo sino la transformaci\u00f3n', 'No es una lucha darwiniana sino una fusi\u00f3n entre observador y observado'] }
  },
  {
    id: 'LC37', area: 'lectura', areaName: 'Lectura Cr\u00edtica', difficulty: 'dificil',
    context: `"El gusto clasifica al que clasifica. Los sujetos sociales se distinguen por las distinciones que hacen, entre lo bello y lo feo, lo distinguido y lo vulgar, y en ello se expresa la posici\u00f3n que ocupan en las clasificaciones objetivas. El gusto es un marcador de clase. La forma en que se adquiere la cultura, la familiaridad que se tiene con las obras leg\u00edtimas, todo ello contribuye a constituir el capital cultural." - Pierre Bourdieu, "La distinci\u00f3n. Criterios y bases sociales del gusto" (1979).`,
    question: `Seg\u00fan Bourdieu, el gusto est\u00e9tico y cultural:`,
    options: ['Es una capacidad innata e individual que no depende del origen social', 'Funciona como un marcador que reproduce y legitima las desigualdades sociales', 'Se distribuye aleatoriamente entre los diferentes grupos sociales', 'Es irrelevante para comprender la estructura de clases de una sociedad'],
    correct: 1,
    explanation: { correct: 'Bourdieu sostiene que "el gusto clasifica al que clasifica": nuestras preferencias est\u00e9ticas no son neutrales sino que reflejan y reproducen nuestra posici\u00f3n en la estructura social. El "capital cultural" se adquiere de manera diferencial seg\u00fan el origen social y funciona como un mecanismo de distinci\u00f3n y exclusi\u00f3n.', wrongs: ['Bourdieu argumenta que el gusto es socialmente construido, no innato, y est\u00e1 mediado por el capital cultural heredado', 'Opci\u00f3n correcta', 'El gusto no es aleatorio sino que est\u00e1 estructurado por la posici\u00f3n social y el capital cultural', 'El gusto es central para comprender la reproducci\u00f3n de las desigualdades sociales'] }
  },
  {
    id: 'LC38', area: 'lectura', areaName: 'Lectura Cr\u00edtica', difficulty: 'facil',
    context: `"En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que viv\u00eda un hidalgo de los de lanza en astillero, adarga antigua, roc\u00edn flaco y galgo corredor. Una olla de algo m\u00e1s vaca que carnero, salpic\u00f3n las m\u00e1s noches, duelos y quebrantos los s\u00e1bados, lentejas los viernes, alg\u00fan palomino de a\u00f1adidura los domingos, consum\u00edan las tres partes de su hacienda." - Miguel de Cervantes, "Don Quijote de la Mancha" (1605), Cap\u00edtulo I.`,
    question: `La descripci\u00f3n inicial de Don Quijote en el fragmento sirve para:`,
    options: ['Presentar a un personaje de la alta nobleza con grandes riquezas', 'Mostrar la situaci\u00f3n modesta del hidalgo y preparar el contraste con su imaginaci\u00f3n caballeresca', 'Describir un banquete abundante y variado', 'Establecer la ubicaci\u00f3n exacta del lugar de la Mancha'],
    correct: 1,
    explanation: { correct: 'Cervantes describe a un hidalgo de recursos limitados (su hacienda se consume en comida modesta, su roc\u00edn es flaco). Esta realidad humilde contrasta con el mundo de caballer\u00edas que su imaginaci\u00f3n construir\u00e1. La dieta simple y la descripci\u00f3n de sus posesiones establecen la brecha entre su realidad y sus fantas\u00edas.', wrongs: ['Don Quijote es un hidalgo rural de recursos modestos, no un noble rico', 'Opci\u00f3n correcta', 'La descripci\u00f3n de la comida muestra precisamente la modestia de su situaci\u00f3n', 'Cervantes dice deliberadamente "de cuyo nombre no quiero acordarme", evitando la ubicaci\u00f3n exacta'] }
  },
  {
    id: 'LC39', area: 'lectura', areaName: 'Lectura Cr\u00edtica', difficulty: 'media',
    context: `"La ciencia normal, a la que est\u00e1 consagrada la mayor\u00eda de los cient\u00edficos, es una investigaci\u00f3n basada firmemente en una o m\u00e1s realizaciones cient\u00edficas pasadas, realizaciones que alguna comunidad cient\u00edfica particular reconoce durante alg\u00fan tiempo como fundamento de su pr\u00e1ctica ulterior. Cuando cambian los paradigmas, el mundo mismo cambia con ellos. Los cient\u00edficos ven cosas nuevas y diferentes cuando miran con instrumentos familiares lugares que ya hab\u00edan mirado antes." - Thomas Kuhn, "La estructura de las revoluciones cient\u00edficas" (1962).`,
    question: `Kuhn sostiene que durante un cambio de paradigma cient\u00edfico:`,
    options: ['La ciencia progresa por acumulaci\u00f3n lineal de nuevos conocimientos', 'Los cient\u00edficos ven el mundo de manera diferente porque cambia el marco conceptual desde el cual observan', 'Los conocimientos del paradigma anterior se descartan por completo como falsos', 'Los instrumentos cient\u00edficos deben ser reemplazados totalmente por otros nuevos'],
    correct: 1,
    explanation: { correct: 'Kuhn afirma que "cuando cambian los paradigmas, el mundo mismo cambia con ellos" y los cient\u00edficos "ven cosas nuevas y diferentes" incluso con los mismos instrumentos. Esto se debe a que el paradigma proporciona el marco conceptual desde el cual se interpretan las observaciones.', wrongs: ['Kuhn critica la idea de que la ciencia progresa por acumulaci\u00f3n lineal; las revoluciones implican cambios de paradigma', 'Opci\u00f3n correcta', 'Kuhn no dice que todo el conocimiento anterior se descarte, sino que se reinterpreta desde el nuevo paradigma', 'Los instrumentos pueden ser los mismos, pero lo que se ve a trav\u00e9s de ellos cambia con el paradigma'] }
  },
  {
    id: 'LC40', area: 'lectura', areaName: 'Lectura Cr\u00edtica', difficulty: 'facil',
    context: `"El jard\u00edn de los senderos que se bifurcan" es un cuento de Jorge Luis Borges, incluido en su libro "Ficciones" (1944). En el relato, el esp\u00eda chino Yu Tsun descubre que el laberinto de su antepasado Ts'ui P\u00ean no es un laberinto espacial sino temporal: una novela que explora todas las posibilidades simult\u00e1neamente. Borges combina la estructura de un relato de espionaje con reflexiones metaf\u00edsicas sobre el tiempo.`,
    question: `La originalidad del cuento de Borges radica en que:`,
    options: ['Presenta un laberinto f\u00edsico que los personajes deben recorrer para escapar', 'Combina el g\u00e9nero de espionaje con una reflexi\u00f3n filos\u00f3fica sobre el tiempo y las posibilidades m\u00faltiples', 'Narra una historia de detectives ambientada en la China antigua', 'Describe un jard\u00edn bot\u00e1nico con m\u00faltiples senderos que se cruzan'],
    correct: 1,
    explanation: { correct: 'Borges fusiona dos dimensiones: la trama de espionaje (Yu Tsun debe entregar un mensaje secreto) con la metaf\u00edsica (el libro de Ts\'ui P\u00ean como un laberinto temporal donde todas las posibilidades ocurren simult\u00e1neamente). Esta combinaci\u00f3n de g\u00e9neros es caracter\u00edstica de su estilo.', wrongs: ['El laberinto es temporal, no espacial; es una novela, no un lugar f\u00edsico', 'Opci\u00f3n correcta', 'La ambientaci\u00f3n incluye elementos de la cultura china, pero el g\u00e9nero no es detectivesco', 'El jard\u00edn es una met\u00e1fora del libro, no un jard\u00edn literal'] }
  },
  {
    id: 'LC41', area: 'lectura', areaName: 'Lectura Cr\u00edtica', difficulty: 'dificil',
    context: `"La burgues\u00eda ha desempe\u00f1ado en la historia un papel eminentemente revolucionario. Dondequiera que ha conquistado el poder, ha destruido las relaciones feudales, patriarcales e id\u00edlicas. No ha dejado entre hombre y hombre otro v\u00ednculo que el inter\u00e9s desnudo, el fr\u00edo 'pago al contado'. Ha ahogado el sagrado \u00e9xtasis del fervor religioso, el entusiasmo caballeresco, el sentimentalismo del filisteo en las aguas heladas del c\u00e1lculo ego\u00edsta." - Karl Marx y Friedrich Engels, "El manifiesto comunista" (1848).`,
    question: `En el texto, la expresi\u00f3n "aguas heladas del c\u00e1lculo ego\u00edsta" es una met\u00e1fora que describe:`,
    options: ['El efecto positivo del comercio sobre las relaciones humanas y la libertad individual', 'La reducci\u00f3n de todas las relaciones humanas a un inter\u00e9s econ\u00f3mico fr\u00edo y calculador bajo el capitalismo', 'La temperatura real de los oc\u00e9anos durante la Revoluci\u00f3n Industrial', 'La eliminaci\u00f3n de toda forma de religi\u00f3n y espiritualidad en la sociedad moderna'],
    correct: 1,
    explanation: { correct: 'Marx y Engels critican c\u00f3mo el capitalismo reduce todas las relaciones humanas al inter\u00e9s econ\u00f3mico. La met\u00e1fora del "agua helada" contrasta con el "sagrado \u00e9xtasis del fervor religioso" y el "entusiasmo caballeresco" que exist\u00edan antes. El capitalismo disuelve los v\u00ednculos tradicionales y los reemplaza por el c\u00e1lculo econ\u00f3mico.', wrongs: ['Marx critica esta reducci\u00f3n ego\u00edsta, no la celebra como positiva', 'Opci\u00f3n correcta', 'Es una met\u00e1fora del c\u00e1lculo econ\u00f3mico, no una descripci\u00f3n literal de la temperatura', 'No es que la religi\u00f3n desaparezca, sino que el fervor religioso es ahogado por el inter\u00e9s econ\u00f3mico'] }
  },
  {
    id: 'LC42', area: 'lectura', areaName: 'Lectura Cr\u00edtica', difficulty: 'media',
    context: `"El d\u00eda en que lo iban a matar, Santiago Nasar se levant\u00f3 a las 5.30 de la ma\u00f1ana para esperar el buque en que llegaba el obispo. Hab\u00eda so\u00f1ado que atravesaba un bosque de higuerones donde ca\u00eda una llovizna tierna, y por un instante fue feliz en el sue\u00f1o, pero al despertarse se sinti\u00f3 por completo salpicado de cagada de p\u00e1jaros." - Gabriel Garc\u00eda M\u00e1rquez, "Cr\u00f3nica de una muerte anunciada" (1981).`,
    question: `La funci\u00f3n narrativa de la primera oraci\u00f3n de la novela ("El d\u00eda en que lo iban a matar...") consiste en:`,
    options: ['Crear suspenso al anunciar la muerte del protagonista desde el inicio y luego narrar los eventos que llevan a ella', 'Ocultar informaci\u00f3n al lector para sorprenderlo al final de la historia', 'Describir el paisaje del pueblo sin relaci\u00f3n con la trama principal', 'Presentar la vida cotidiana de Santiago Nasar como un d\u00eda cualquiera'],
    correct: 0,
    explanation: { correct: 'Garc\u00eda M\u00e1rquez anuncia desde la primera l\u00ednea la muerte de Santiago Nasar, eliminando la sorpresa del desenlace y transformando la pregunta de "qu\u00e9 va a pasar" en "c\u00f3mo y por qu\u00e9 va a pasar". Esta t\u00e9cnica, t\u00edpica de la cr\u00f3nica period\u00edstica, narra los hechos a sabiendas del final tr\u00e1gico.', wrongs: ['Opci\u00f3n correcta', 'El texto revela el destino del protagonista desde el principio, no lo oculta', 'El paisaje y los detalles tienen relaci\u00f3n con el desenlace tr\u00e1gico que se anuncia', 'El hecho de anunciar la muerte desde el inicio indica que no es un d\u00eda cualquiera'] }
  },
  {
    id: 'LC43', area: 'lectura', areaName: 'Lectura Cr\u00edtica', difficulty: 'facil',
    context: `"La interpretaci\u00f3n de los sue\u00f1os es la v\u00eda real para el conocimiento del inconsciente. Los sue\u00f1os no son un fen\u00f3meno absurdo o sin sentido, sino una forma de realizaci\u00f3n de deseos. El contenido manifiesto del sue\u00f1o es una transformaci\u00f3n del contenido latente mediante el trabajo on\u00edrico, que utiliza mecanismos como la condensaci\u00f3n y el desplazamiento." - Sigmund Freud, "La interpretaci\u00f3n de los sue\u00f1os" (1900).`,
    question: `Seg\u00fan Freud, los sue\u00f1os se caracterizan por ser:`,
    options: ['Fen\u00f3menos aleatorios sin significado psicol\u00f3gico profundo', 'Una forma de realizaci\u00f3n de deseos que revela contenidos inconscientes', 'Experiencias puramente fisiol\u00f3gicas sin relaci\u00f3n con la mente', 'Profec\u00edas sobre eventos futuros que deben ser interpretadas literalmente'],
    correct: 1,
    explanation: { correct: 'Freud sostiene que los sue\u00f1os son "la v\u00eda real para el conocimiento del inconsciente" y constituyen "una forma de realizaci\u00f3n de deseos". El contenido manifiesto (lo que recordamos) oculta un contenido latente (deseos inconscientes) que se expresa mediante mecanismos como la condensaci\u00f3n y el desplazamiento.', wrongs: ['Freud dedica su obra a demostrar que los sue\u00f1os S\u00cd tienen significado psicol\u00f3gico profundo', 'Opci\u00f3n correcta', 'Freud considera los sue\u00f1os como fen\u00f3menos ps\u00edquicos, no meramente fisiol\u00f3gicos', 'Freud rechaza la interpretaci\u00f3n prof\u00e9tica de los sue\u00f1os; los entiende como expresi\u00f3n del inconsciente'] }
  },
  {
    id: 'LC44', area: 'lectura', areaName: 'Lectura Cr\u00edtica', difficulty: 'media',
    context: `"El subdesarrollo de Am\u00e9rica Latina no es una etapa hacia el desarrollo, sino la consecuencia de una historia de expoliaci\u00f3n y saqueo que se inici\u00f3 con la conquista europea. Nuestra pobreza es el reverso de la riqueza ajena. Cada vez que Europa avanzaba, Am\u00e9rica retroced\u00eda. El desarrollo de unos pocos pa\u00edses industrializados se ha fundado en el subdesarrollo de la mayor\u00eda de los pueblos." - Eduardo Galeano, "Las venas abiertas de Am\u00e9rica Latina" (1971).`,
    question: `La tesis central de Galeano en este fragmento es que el subdesarrollo latinoamericano:`,
    options: ['Es una etapa natural que todos los pa\u00edses deben atravesar en su camino hacia el desarrollo', 'Es el resultado directo de la explotaci\u00f3n hist\u00f3rica de la regi\u00f3n por parte de las potencias coloniales e industriales', 'Se debe exclusivamente a la falta de recursos naturales en el continente', 'Es una elecci\u00f3n pol\u00edtica de los gobiernos latinoamericanos que prefieren no industrializarse'],
    correct: 1,
    explanation: { correct: 'Galeano sostiene que el subdesarrollo no es una etapa previa al desarrollo sino su consecuencia: "el desarrollo de unos pocos pa\u00edses industrializados se ha fundado en el subdesarrollo de la mayor\u00eda". La riqueza de Europa y Estados Unidos se construy\u00f3 sobre la explotaci\u00f3n de los recursos y pueblos de Am\u00e9rica Latina.', wrongs: ['Galeano rechaza expl\u00edcitamente la idea de que el subdesarrollo sea una etapa hacia el desarrollo', 'Opci\u00f3n correcta', 'Am\u00e9rica Latina es rica en recursos; el problema ha sido la apropiaci\u00f3n externa de esos recursos', 'No es una elecci\u00f3n sino una imposici\u00f3n hist\u00f3rica estructural'] }
  },
  {
    id: 'LC45', area: 'lectura', areaName: 'Lectura Cr\u00edtica', difficulty: 'dificil',
    context: `"El signo ling\u00fc\u00edstico une no una cosa y un nombre, sino un concepto y una imagen ac\u00fastica. Esta imagen ac\u00fastica no es el sonido material, sino su huella ps\u00edquica. El signo es, pues, una entidad ps\u00edquica de dos caras. El principio fundamental del signo es la arbitrariedad: el lazo que une el significante al significado es inmotivado, es decir, arbitrario." - Ferdinand de Saussure, "Curso de ling\u00fc\u00edstica general" (1916).`,
    question: `Saussure afirma que el signo ling\u00fc\u00edstico es "arbitrario" porque:`,
    options: ['Cada persona puede decidir libremente el significado de las palabras que usa', 'No existe una relaci\u00f3n natural o necesaria entre el sonido de una palabra y el concepto que representa', 'Los signos ling\u00fc\u00edsticos cambian caprichosamente sin ninguna regla', 'El significado de las palabras depende exclusivamente de la intenci\u00f3n del hablante'],
    correct: 1,
    explanation: { correct: 'La arbitrariedad del signo significa que la relaci\u00f3n entre significante (imagen ac\u00fastica) y significado (concepto) es inmotivada. No hay raz\u00f3n natural por la que "\u00e1rbol" en espa\u00f1ol, "tree" en ingl\u00e9s o "Baum" en alem\u00e1n designen el mismo concepto. La conexi\u00f3n es convencional, no necesaria.', wrongs: ['La arbitrariedad no se refiere a la libertad individual sino a la convenci\u00f3n social que no tiene fundamento natural', 'Opci\u00f3n correcta', 'Saussure reconoce que los signos siguen reglas dentro de cada sistema ling\u00fc\u00edstico, no son caprichosos', 'La arbitrariedad opera a nivel del sistema, no de la intenci\u00f3n individual del hablante'] }
  },
  {
    id: 'LC46', area: 'lectura', areaName: 'Lectura Cr\u00edtica', difficulty: 'facil',
    context: `"Vine a Comala porque me dijeron que ac\u00e1 viv\u00eda mi padre, un tal Pedro P\u00e1ramo. Mi madre me lo dijo. Y yo le promet\u00ed que vendr\u00eda a verlo en cuanto ella muriera. Me apret\u00e9 las manos con sus manos; era su deseo morir y yo deb\u00eda cumplirlo." - Juan Rulfo, "Pedro P\u00e1ramo" (1955).`,
    question: `Por la forma en que el narrador inicia su relato, se puede inferir que:`,
    options: ['El narrador viaja a un pueblo desconocido impulsado por una promesa hecha a su madre', 'El narrador ya conoc\u00eda Comala y regresa para visitar a Pedro P\u00e1ramo', 'Pedro P\u00e1ramo hab\u00eda enviado a buscar al narrador', 'La madre del narrador a\u00fan vive y lo acompa\u00f1a en el viaje'],
    correct: 0,
    explanation: { correct: 'El narrador llega a Comala porque "le dijeron" que all\u00ed viv\u00eda su padre. Su madre se lo dijo antes de morir. La promesa ("le promet\u00ed que vendr\u00eda a verlo en cuanto ella muriera") es el motor de su viaje. La voz del narrador est\u00e1 marcada por la promesa y el deseo de cumplir la voluntad materna.', wrongs: ['Opci\u00f3n correcta', 'El texto indica expl\u00edcitamente "Vine a Comala porque me dijeron", sugiriendo que no la conoc\u00eda', 'No hay evidencia en el fragmento de que Pedro P\u00e1ramo haya solicitado la visita', 'El texto dice claramente "en cuanto ella muriera", indicando que ya hab\u00eda fallecido'] }
  },
  {
    id: 'LC47', area: 'lectura', areaName: 'Lectura Cr\u00edtica', difficulty: 'dificil',
    context: `"La industria cultural ha llevado a la estandarizaci\u00f3n y la producci\u00f3n en serie de los bienes culturales. El cine, la radio y las revistas constituyen un sistema. Cada sector est\u00e1 uniformado. Hasta el entretenimiento m\u00e1s ligero adquiere rasgos del trabajo. La diversi\u00f3n se convierte en una prolongaci\u00f3n del trabajo, buscada por quien quiere escapar del proceso de trabajo mecanizado para ponerse de nuevo en condiciones de poder enfrentarse a \u00e9l." - Theodor Adorno y Max Horkheimer, "Dial\u00e9ctica de la Ilustraci\u00f3n" (1947).`,
    question: `Seg\u00fan Adorno y Horkheimer, la industria cultural transforma el entretenimiento en:`,
    options: ['Una experiencia liberadora que permite al individuo escapar verdaderamente de las condiciones del trabajo', 'Una extensi\u00f3n del sistema productivo que prepara al individuo para reintegrarse al trabajo', 'Un espacio aut\u00f3nomo donde la creatividad y el arte pueden desarrollarse libremente', 'Un medio para educar a las masas y elevar su nivel cultural'],
    correct: 1,
    explanation: { correct: 'Adorno y Horkheimer critican que la diversi\u00f3n en la industria cultural "se convierte en una prolongaci\u00f3n del trabajo": el entretenimiento no libera realmente al individuo sino que lo prepara para reintegrarse al proceso productivo. La cultura masiva reproduce la l\u00f3gica de la estandarizaci\u00f3n y la producci\u00f3n en serie.', wrongs: ['Para Adorno, la industria cultural ofrece una falsa liberaci\u00f3n; el entretenimiento no escapa realmente de la l\u00f3gica del trabajo', 'Opci\u00f3n correcta', 'La industria cultural suprime la creatividad aut\u00e9ntica mediante la estandarizaci\u00f3n', 'Adorno critica la industria cultural precisamente porque no educa sino que perpet\u00faa el sistema existente'] }
  },
  {
    id: 'LC48', area: 'lectura', areaName: 'Lectura Cr\u00edtica', difficulty: 'facil',
    context: `"No te rindas, por favor no cedas, / aunque el fr\u00edo queme, / aunque el miedo muerda, / aunque el sol se ponga y se calle el viento, / a\u00fan hay fuego en tu alma, / a\u00fan hay vida en tus sue\u00f1os." - Mario Benedetti, "No te rindas" (Poemas de otros, 1977).`,
    question: `En el poema de Benedetti, la repetici\u00f3n de "aunque" seguida de im\u00e1genes adversas ("el fr\u00edo queme", "el miedo muerda") tiene la funci\u00f3n de:`,
    options: ['Describir las condiciones clim\u00e1ticas extremas que enfrenta el protagonista', 'Enfatizar que a pesar de las dificultades y obst\u00e1culos, persiste la esperanza y la fuerza interior', 'Animar al lector a rendirse cuando las condiciones se vuelven demasiado adversas', 'Presentar una visi\u00f3n pesimista de la vida sin posibilidad de mejora'],
    correct: 1,
    explanation: { correct: 'La estructura concesiva ("aunque... a\u00fan...") establece un contraste entre las adversidades y la persistencia de la fuerza interior. Cada "aunque" introduce una dificultad, pero el "a\u00fan" que las sigue reafirma la vida y el fuego interior. El poema es un mensaje de resistencia y esperanza.', wrongs: ['Las im\u00e1genes del fr\u00edo y el miedo son met\u00e1foras de las dificultades de la vida, no descripciones literales del clima', 'Opci\u00f3n correcta', 'El poema dice "No te rindas", es un mensaje de perseverancia, no de rendici\u00f3n', 'Aunque reconoce las dificultades, el poema afirma la persistencia de la vida y los sue\u00f1os'] }
  },
  {
    id: 'LC49', area: 'lectura', areaName: 'Lectura Cr\u00edtica', difficulty: 'media',
    context: `"La teor\u00eda de la relatividad general de Einstein revolucion\u00f3 nuestra comprensi\u00f3n del espacio y el tiempo. Seg\u00fan esta teor\u00eda, la gravedad no es una fuerza que act\u00faa a distancia, sino una curvatura del espacio-tiempo causada por la presencia de masa y energ\u00eda. El universo no es un escenario fijo donde ocurren los eventos, sino que el espacio-tiempo mismo es din\u00e1mico y se deforma por el contenido del universo." - Stephen Hawking, "Historia del tiempo" (1988).`,
    question: `Seg\u00fan la relatividad general, la gravedad es:`,
    options: ['Una fuerza que act\u00faa instant\u00e1neamente entre dos cuerpos con masa', 'Una curvatura del espacio-tiempo producida por la presencia de masa y energ\u00eda', 'Una ilusi\u00f3n creada por la rotaci\u00f3n de la Tierra', 'Una propiedad exclusiva de los objetos muy grandes como las estrellas'],
    correct: 1,
    explanation: { correct: 'Einstein propuso que la gravedad no es una fuerza newtoniana que act\u00faa a distancia, sino una curvatura geom\u00e9trica del espacio-tiempo causada por la masa y la energ\u00eda. Los objetos siguen trayectorias curvas no porque una fuerza los tire, sino porque el espacio-tiempo mismo est\u00e1 curvado.', wrongs: ['Newton pensaba as\u00ed, pero Einstein demostr\u00f3 que la gravedad es una curvatura del espacio-tiempo, no una fuerza instant\u00e1nea', 'Opci\u00f3n correcta', 'La gravedad es un fen\u00f3meno real, no una ilusi\u00f3n; afecta a todos los objetos con masa', 'La gravedad afecta a todos los objetos con masa o energ\u00eda, independientemente de su tama\u00f1o'] }
  },
  {
    id: 'LC50', area: 'lectura', areaName: 'Lectura Cr\u00edtica', difficulty: 'dificil',
    context: `"Durante el transcurso de la noche, el general comenz\u00f3 a morirse como una rama que se pudre en la tormenta. El rumor de su agon\u00eda se esparci\u00f3 por la ciudad mucho antes de que \u00e9l mismo se enterara de que estaba muerto. Sus edecanes lo encontraron en la hamaca a las cinco y once minutos de la madrugada, con la cabeza hundida en el hombro y los ojos abiertos, y vieron en el espejo del armario el reflejo de su doble inmortal." - Gabriel Garc\u00eda M\u00e1rquez, "El oto\u00f1o del patriarca" (1975).`,
    question: `En el fragmento, la expresi\u00f3n "el rumor de su agon\u00eda se esparci\u00f3... mucho antes de que \u00e9l mismo se enterara de que estaba muerto" sugiere que:`,
    options: ['La muerte del general fue un evento p\u00fablico que todos presenciaron directamente', 'La noticia de su muerte circul\u00f3 como rumor antes de que ocurriera realmente, difuminando los l\u00edmites entre la realidad y la ficci\u00f3n del poder', 'El general fingi\u00f3 su propia muerte para escapar del poder', 'Los edecanes encontraron al general con vida y luego falleci\u00f3'],
    correct: 1,
    explanation: { correct: 'Garc\u00eda M\u00e1rquez juega con la temporalidad y la percepci\u00f3n: el rumor precede al hecho, la noticia circula "antes de que \u00e9l mismo se enterara de que estaba muerto". Esto refleja c\u00f3mo el poder del patriarca es una construcci\u00f3n que depende m\u00e1s de lo que se dice de \u00e9l que de su realidad f\u00edsica. El tiempo narrativo se distorsiona.', wrongs: ['La muerte no fue presenciada directamente por todos; circul\u00f3 primero como rumor', 'Opci\u00f3n correcta', 'No hay indicios de fingimiento; la narraci\u00f3n juega con la percepci\u00f3n distorsionada del tiempo y el rumor', 'El texto dice que "comenz\u00f3 a morirse" y los edecanes lo encontraron ya muerto en la hamaca'] }
  },
  {
    id: 'LC51', area: 'lectura', areaName: 'Lectura Cr\u00edtica', difficulty: 'media',
    context: `"Todos los seres humanos nacen con la capacidad de adquirir una lengua. Esta capacidad es independiente de la inteligencia general y est\u00e1 determinada biol\u00f3gicamente. El lenguaje no es una invenci\u00f3n cultural, sino una facultad espec\u00edfica de la especie humana que se desarrolla de manera natural cuando el ni\u00f1o est\u00e1 expuesto a un entorno ling\u00fc\u00edstico." - Noam Chomsky, "Aspectos de la teor\u00eda de la sintaxis" (1965).`,
    question: `Chomsky sostiene que la adquisici\u00f3n del lenguaje es:`,
    options: ['Un proceso puramente cultural que depende exclusivamente del entorno social', 'Una capacidad biol\u00f3gica innata y espec\u00edfica de la especie humana que se activa en un entorno ling\u00fc\u00edstico', 'Un conjunto de h\u00e1bitos que se aprenden por imitaci\u00f3n y repetici\u00f3n', 'Una habilidad que comparten todas las especies animales con sistema nervioso desarrollado'],
    correct: 1,
    explanation: { correct: 'Chomsky postula la existencia de una "gram\u00e1tica universal" innata: los humanos nacemos con la capacidad biol\u00f3gica de adquirir cualquier lengua. El lenguaje no es una invenci\u00f3n cultural sino una facultad espec\u00edfica de la especie que se desarrolla naturalmente cuando hay exposici\u00f3n al entorno ling\u00fc\u00edstico adecuado.', wrongs: ['Chomsky rechaza la explicaci\u00f3n puramente ambientalista; postula una facultad innata', 'Opci\u00f3n correcta', 'Chomsky critica la teor\u00eda conductista del aprendizaje por imitaci\u00f3n; el ni\u00f1o produce formas que nunca ha o\u00eddo', 'Chomsky sostiene que el lenguaje es espec\u00edficamente humano, no compartido con otras especies'] }
  },
  {
    id: 'LC52', area: 'lectura', areaName: 'Lectura Cr\u00edtica', difficulty: 'facil',
    context: `"La poes\u00eda es conocimiento, salvaci\u00f3n, poder, abandono. Operaci\u00f3n capaz de cambiar al mundo, la actividad po\u00e9tica es revolucionaria por naturaleza; ejercicio espiritual, es un m\u00e9todo de liberaci\u00f3n interior. La poes\u00eda revela este mundo; crea otro. Pan de los escogidos, alimento maldito. A\u00edsla; une. Invitaci\u00f3n al viaje; regreso al hogar." - Octavio Paz, "El arco y la lira" (1956).`,
    question: `El texto de Octavio Paz presenta la poes\u00eda como una actividad:`,
    options: ['Exclusivamente est\u00e9tica y decorativa, sin relaci\u00f3n con la realidad', 'Parad\u00f3jica y m\u00faltiple, que abarca dimensiones opuestas como el aislamiento y la uni\u00f3n, el conocimiento y la salvaci\u00f3n', 'Racional y met\u00f3dica, que sigue reglas estrictas de composici\u00f3n', 'Pol\u00edtica y partidista, destinada \u00fanicamente a promover ideolog\u00edas espec\u00edficas'],
    correct: 1,
    explanation: { correct: 'Paz acumula definiciones parad\u00f3jicas y contrastantes: la poes\u00eda es "conocimiento" pero tambi\u00e9n "abandono"; "a\u00edsla" pero tambi\u00e9n "une"; es "revolucionaria" pero tambi\u00e9n "ejercicio espiritual". Esta acumulaci\u00f3n de opuestos refleja la naturaleza compleja y contradictoria de la experiencia po\u00e9tica.', wrongs: ['Paz describe la poes\u00eda como algo mucho m\u00e1s profundo que un adorno: es "conocimiento" y "poder"', 'Opci\u00f3n correcta', 'Paz no describe la poes\u00eda como un ejercicio racional met\u00f3dico sino como una experiencia totalizante', 'Aunque menciona que es "revolucionaria", Paz no reduce la poes\u00eda a propaganda pol\u00edtica'] }
  },
  {
    id: 'LC53', area: 'lectura', areaName: 'Lectura Cr\u00edtica', difficulty: 'dificil',
    context: `"No puede haber duda alguna de que la especie humana desciende de alguna forma inferior, a pesar de que hasta ahora no se haya podido descubrir el eslab\u00f3n intermedio. Se puede objetar que hasta ahora no se han encontrado f\u00f3siles de transici\u00f3n, pero esta objeci\u00f3n perder\u00e1 su fuerza cuando se descubran formas intermedias en futuras exploraciones paleontol\u00f3gicas." - Adaptado de Charles Darwin, "El origen del hombre" (1871).`,
    question: `La estrategia argumentativa que emplea Darwin en este pasaje consiste en:`,
    options: ['Presentar una objeci\u00f3n a su propia teor\u00eda y responderla anticipadamente para fortalecer su argumento', 'Ignorar las objeciones de sus cr\u00edticos y afirmar dogm\u00e1ticamente su teor\u00eda', 'Admitir que su teor\u00eda es incorrecta y proponer una explicaci\u00f3n alternativa', 'Apelar a la autoridad de otros cient\u00edficos para apoyar su posici\u00f3n'],
    correct: 0,
    explanation: { correct: 'Darwin utiliza la t\u00e9cnica ret\u00f3rica de anticipar objeciones ("se puede objetar que...") y refutarlas antes de que sean planteadas ("pero esta objeci\u00f3n perder\u00e1 su fuerza cuando..."). Este movimiento argumentativo fortalece su posici\u00f3n al demostrar que ha considerado y respondido las cr\u00edticas potenciales.', wrongs: ['Opci\u00f3n correcta', 'Darwin no ignora las objeciones sino que las aborda expl\u00edcitamente para refutarlas', 'Darwin no admite que su teor\u00eda sea incorrecta; al contrario, la defiende anticipando cr\u00edticas', 'Darwin no apela a la autoridad sino a la evidencia futura que se descubrir\u00e1'] }
  },
  {
    id: 'LC54', area: 'lectura', areaName: 'Lectura Cr\u00edtica', difficulty: 'media',
    context: `"La novela 'La fiesta del Chivo' (2000) de Mario Vargas Llosa narra los \u00faltimos d\u00edas de la dictadura de Rafael Trujillo en la Rep\u00fablica Dominicana. La obra alterna tres l\u00edneas narrativas: la de Urania Cabral, que regresa a Santo Domingo despu\u00e9s de muchos a\u00f1os; la de los conspiradores que planean el asesinato del dictador; y la del propio Trujillo en sus \u00faltimas horas, mostrando su poder absoluto y su creciente paranoia.`,
    question: `La estructura narrativa de "La fiesta del Chivo" se caracteriza por:`,
    options: ['Seguir un \u00fanico hilo cronol\u00f3gico lineal desde el inicio de la dictadura hasta su ca\u00edda', 'Alternar m\u00faltiples perspectivas temporales y voces narrativas para representar la complejidad del r\u00e9gimen', 'Presentar exclusivamente la perspectiva del dictador como protagonista', 'Utilizar \u00fanicamente la memoria de Urania Cabral como fuente narrativa'],
    correct: 1,
    explanation: { correct: 'Vargas Llosa entrecruza tres l\u00edneas narrativas que ofrecen perspectivas complementarias: la v\u00edctima que regresa (Urania), los conspiradores (la resistencia), y el dictador mismo (el poder). Esta estructura polif\u00f3nica permite una comprensi\u00f3n multidimensional del r\u00e9gimen trujillista.', wrongs: ['La novela alterna entre diferentes tiempos y perspectivas, no sigue un orden lineal \u00fanico', 'Opci\u00f3n correcta', 'El dictador es una de las perspectivas, pero tambi\u00e9n est\u00e1n Urania y los conspiradores', 'La memoria de Urania es una de las l\u00edneas narrativas, pero no la \u00fanica'] }
  },
  {
    id: 'LC55', area: 'lectura', areaName: 'Lectura Cr\u00edtica', difficulty: 'dificil',
    context: `"El significado de una palabra es su uso en el lenguaje. No preguntes por el significado, pregunta por el uso. El lenguaje es como una caja de herramientas: hay martillos, destornilladores, alicates, metros. No podemos decir que haya algo com\u00fan a todos ellos, solo semejanzas de familia, parentescos. Y el significado de las palabras funciona igual: no hay una esencia del lenguaje, solo usos diversos." - Ludwig Wittgenstein, "Investigaciones filos\u00f3ficas" (1953).`,
    question: `La met\u00e1fora de la "caja de herramientas" que utiliza Wittgenstein sirve para ilustrar que:`,
    options: ['El lenguaje tiene una \u00fanica funci\u00f3n esencial que es describir la realidad', 'Las palabras tienen diversos usos y funciones seg\u00fan el contexto, sin una esencia com\u00fan que las defina a todas', 'Las herramientas son un mejor sistema de comunicaci\u00f3n que las palabras', 'El lenguaje debe ser reformado para que todas las palabras tengan un \u00fanico significado preciso'],
    correct: 1,
    explanation: { correct: 'Wittgenstein utiliza la met\u00e1fora de la caja de herramientas para mostrar que, as\u00ed como las herramientas tienen diferentes usos (martillar, atornillar, medir), las palabras tienen diferentes funciones seg\u00fan el contexto. No hay una esencia \u00fanica del lenguaje, sino "semejanzas de familia" entre los diversos usos ling\u00fc\u00edsticos.', wrongs: ['Wittgenstein rechaza que el lenguaje tenga una funci\u00f3n esencial \u00fanica; el lenguaje tiene m\u00faltiples usos', 'Opci\u00f3n correcta', 'No est\u00e1 comparando herramientas con lenguaje como sistemas alternativos, sino ilustrando la diversidad funcional', 'Wittgenstein no propone reformar el lenguaje sino describir c\u00f3mo funciona realmente'] }
  },
  {
    id: 'LC56', area: 'lectura', areaName: 'Lectura Cr\u00edtica', difficulty: 'facil',
    context: `"El ahogado m\u00e1s hermoso del mundo" es un cuento de Gabriel Garc\u00eda M\u00e1rquez, incluido en "La incre\u00edble y triste historia de la c\u00e1ndida Er\u00e9ndira y de su abuela desalmada" (1972). En el relato, el cuerpo de un hombre grande y hermoso aparece en la orilla de un pueblo costero. Los habitantes, al ocuparse del cuerpo, transforman su percepci\u00f3n del pueblo y de s\u00ed mismos, y el hombre ahogado se convierte en un catalizador de cambio.`,
    question: `En el cuento, el cuerpo del ahogado funciona como:`,
    options: ['Un obst\u00e1culo que los habitantes deben eliminar r\u00e1pidamente', 'Un catalizador que transforma la percepci\u00f3n que los pobladores tienen de su propio pueblo y de su potencial', 'Una amenaza que genera miedo y rechazo entre la comunidad', 'Un s\u00edmbolo de la muerte sin ninguna repercusi\u00f3n en los vivos'],
    correct: 1,
    explanation: { correct: 'El cuento muestra c\u00f3mo el contacto con el cuerpo del ahogado transforma a la comunidad. Los habitantes comienzan a imaginar un pueblo mejor, m\u00e1s grande y m\u00e1s hermoso, digno del hombre que ha llegado a sus costas. El ahogado, lejos de ser una amenaza, se convierte en una fuerza transformadora.', wrongs: ['Los habitantes se involucran profundamente con el cuerpo, transformando su relaci\u00f3n con el pueblo', 'Opci\u00f3n correcta', 'El cuerpo genera fascinaci\u00f3n y transformaci\u00f3n, no miedo', 'El ahogado tiene un profundo impacto transformador en la comunidad y su autopercepci\u00f3n'] }
  },
  {
    id: 'LC57', area: 'lectura', areaName: 'Lectura Cr\u00edtica', difficulty: 'dificil',
    context: `"La imaginaci\u00f3n es m\u00e1s importante que el conocimiento. El conocimiento es limitado, mientras que la imaginaci\u00f3n abraza el mundo entero, estimulando el progreso y dando a luz a la evoluci\u00f3n. La imaginaci\u00f3n es el verdadero campo de juego de la mente humana. La teor\u00eda de la relatividad surgi\u00f3 de un experimento mental: \u00bfqu\u00e9 ver\u00eda alguien que viajara montado en un rayo de luz?" - Albert Einstein, citado en "Einstein: Su vida y su universo" (2007) de Walter Isaacson.`,
    question: `Einstein argumenta que la imaginaci\u00f3n es superior al conocimiento porque:`,
    options: ['El conocimiento no sirve para nada en el desarrollo cient\u00edfico', 'La imaginaci\u00f3n permite ir m\u00e1s all\u00e1 de los l\u00edmites del conocimiento establecido y generar nuevas posibilidades', 'La imaginaci\u00f3n reemplaza completamente la necesidad de datos emp\u00edricos', 'El conocimiento es falso mientras que la imaginaci\u00f3n es verdadera'],
    correct: 1,
    explanation: { correct: 'Einstein contrapone la limitaci\u00f3n del conocimiento (siempre circunscrito a lo ya sabido) con la capacidad expansiva de la imaginaci\u00f3n que "abraza el mundo entero". Para \u00e9l, los grandes avances cient\u00edficos, como la relatividad, surgen de la capacidad de imaginar m\u00e1s all\u00e1 de lo conocido.', wrongs: ['Einstein no niega el valor del conocimiento; dice que la imaginaci\u00f3n es m\u00e1s importante, no que el conocimiento sea in\u00fatil', 'Opci\u00f3n correcta', 'Einstein valora la imaginaci\u00f3n como complemento del conocimiento, no como sustituto de la evidencia emp\u00edrica', 'Einstein no califica el conocimiento como falso; dice que es "limitado"'] }
  },
  {
    id: 'LC58', area: 'lectura', areaName: 'Lectura Cr\u00edtica', difficulty: 'facil',
    context: `"Instrucciones para llorar: Dejando de lado los motivos, ateng\u00e1monos a la manera correcta de llorar, entendiendo por esto un llanto que no ingrese en el esc\u00e1ndalo, ni que insulte a la sonrisa con su paralela y torpe semejanza. El llanto medio u ordinario consiste en una contracci\u00f3n del rostro y un sonido espasm\u00f3dico acompa\u00f1ados de l\u00e1grimas y mocos, estos \u00faltimos al final." - Julio Cort\u00e1zar, "Historias de cronopios y de famas" (1962).`,
    question: `El efecto humor\u00edstico del texto de Cort\u00e1zar se logra principalmente mediante:`,
    options: ['La narraci\u00f3n de una historia triste que provoca compasi\u00f3n en el lector', 'El tratamiento de una experiencia humana espont\u00e1nea como si fuera un procedimiento t\u00e9cnico que requiere instrucciones precisas', 'La descripci\u00f3n po\u00e9tica y emotiva del acto de llorar', 'La cr\u00edtica social contra las personas que lloran en p\u00fablico'],
    correct: 1,
    explanation: { correct: 'Cort\u00e1zar utiliza el humor al presentar "instrucciones" para una acci\u00f3n que es natural y espont\u00e1nea. Al tratar el llanto como un procedimiento que requiere reglas ("la manera correcta de llorar"), crea una incongruencia entre la forma (t\u00e9cnica e instructiva) y el contenido (emocional y espont\u00e1neo). Este contraste es la fuente del humor.', wrongs: ['No es una historia triste; es una instrucci\u00f3n humor\u00edstica sobre c\u00f3mo llorar correctamente', 'Opci\u00f3n correcta', 'La descripci\u00f3n es deliberadamente t\u00e9cnica y distanciada, no emotiva', 'No hay cr\u00edtica social; hay iron\u00eda l\u00fadica sobre la mecanizaci\u00f3n de lo humano'] }
  },
  {
    id: 'LC59', area: 'lectura', areaName: 'Lectura Cr\u00edtica', difficulty: 'media',
    context: `"Lo que hace posible que el pensamiento pueda escapar a la categor\u00eda de la representaci\u00f3n es, sin duda, el lenguaje. El lenguaje no es un sistema de signos que representan cosas: es m\u00e1s bien una red que recorta el mundo, lo ordena, lo jerarquiza. El lenguaje no se limita a nombrar lo que ya existe, sino que contribuye a traer a la existencia aquello que nombra." - Michel Foucault, "Las palabras y las cosas" (1966).`,
    question: `Seg\u00fan Foucault, el lenguaje no es solo un sistema de representaci\u00f3n porque:`,
    options: ['Las palabras reflejan pasivamente una realidad que ya est\u00e1 completamente estructurada', 'El lenguaje participa activamente en la organizaci\u00f3n y construcci\u00f3n de la realidad que nombra', 'Los signos ling\u00fc\u00edsticos son completamente independientes del mundo real', 'El lenguaje solo sirve para expresar emociones y sentimientos subjetivos'],
    correct: 1,
    explanation: { correct: 'Foucault sostiene que el lenguaje "no se limita a nombrar lo que ya existe, sino que contribuye a traer a la existencia aquello que nombra". El lenguaje es una "red que recorta el mundo, lo ordena, lo jerarquiza", es decir, participa activamente en la construcci\u00f3n de nuestra comprensi\u00f3n de la realidad.', wrongs: ['Foucault afirma que el lenguaje hace m\u00e1s que reflejar: activamente organiza y construye la realidad', 'Opci\u00f3n correcta', 'Foucault no dice que el lenguaje sea independiente del mundo, sino que interviene activamente en su estructuraci\u00f3n', 'El lenguaje para Foucault es una pr\u00e1ctica que organiza el saber, no solo un medio expresivo'] }
  },
  {
    id: 'LC60', area: 'lectura', areaName: 'Lectura Cr\u00edtica', difficulty: 'dificil',
    context: `"El universo (que otros llaman la Biblioteca) se compone de un n\u00famero indefinido, y tal vez infinito, de galer\u00edas hexagonales, con vastos pozos de ventilaci\u00f3n en el medio, cercados por barandas baj\u00edsimas. Desde cualquier hex\u00e1gono se ven los pisos inferiores y superiores, interminablemente. La Biblioteca es una esfera cuyo centro cabal es cualquier hex\u00e1gono, cuya circunferencia es inaccesible." - Jorge Luis Borges, "La biblioteca de Babel" (1941), en "Ficciones".`,
    question: `La descripci\u00f3n de la Biblioteca como "una esfera cuyo centro cabal es cualquier hex\u00e1gono, cuya circunferencia es inaccesible" expresa la idea de que:`,
    options: ['La Biblioteca tiene un centro f\u00edsico identificable al que se puede acceder f\u00e1cilmente', 'Cada punto de la Biblioteca puede considerarse el centro, y sus l\u00edmites son imposibles de alcanzar', 'La Biblioteca tiene forma de esfera perfecta con un vac\u00edo en el centro', 'El conocimiento humano est\u00e1 organizado jer\u00e1rquicamente con un centro de poder definido'],
    correct: 1,
    explanation: { correct: 'La paradoja de la biblioteca de Babel es que cualquier hex\u00e1gono puede considerarse el centro ("el centro cabal es cualquier hex\u00e1gono"), mientras que la circunferencia (el l\u00edmite exterior) es "inaccesible". Borges representa as\u00ed la naturaleza parad\u00f3jica del universo: no hay un centro privilegiado del conocimiento, y la totalidad es inabarcable.', wrongs: ['La paradoja es que NO hay un centro \u00fanico identificable; cualquier hex\u00e1gono puede ser el centro', 'Opci\u00f3n correcta', 'La esfera es una met\u00e1fora filos\u00f3fica, no una forma geom\u00e9trica literal con un vac\u00edo', 'La Biblioteca, para Borges, es una imagen del universo descentrado, no jer\u00e1rquico'] }
  },

  // ===== MATEMÁTICAS - BLOQUE 4 (MT31-MT60) =====
  {
    id: 'MT31', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'facil',
    question: `En un municipio de Boyac\u00e1, el 60% de los 5.000 habitantes son mujeres. \u00bfCu\u00e1ntos hombres hay?`,
    options: ['3.000', '2.000', '2.500', '3.500'],
    correct: 1,
    explanation: { correct: 'Mujeres: 5.000 x 0,60 = 3.000. Hombres: 5.000 - 3.000 = 2.000.', wrongs: ['Ese es el n\u00famero de mujeres', 'Opci\u00f3n correcta', 'Calculaste el 50%', 'Sumaste mal'] }
  },
  {
    id: 'MT32', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'media',
    question: `Una rampa para sillas de ruedas en un edificio p\u00fablico de Bogot\u00e1 tiene 5 m de longitud horizontal y alcanza una altura de 1 m. \u00bfCu\u00e1l es la longitud de la rampa?`,
    options: ['\u221a24 m', '\u221a26 m', '1 m', '5,1 m'],
    correct: 1,
    explanation: { correct: 'Por Pit\u00e1goras: L\u00b2 = 5\u00b2 + 1\u00b2 = 25 + 1 = 26. L = \u221a26 m \u2248 5,1 m.', wrongs: ['Sumaste 25 + 1 pero no sacaste ra\u00edz', 'Opci\u00f3n correcta', 'Calculaste 5\u00b2 - 1\u00b2 = 24, esa ser\u00eda otra medida', 'C\u00e1lculo incorrecto'] }
  },
  {
    id: 'MT33', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'media',
    table: {
      headers: ['N\u00famero de hermanos', '0', '1', '2', '3', '4'],
      rows: [['Cantidad de estudiantes', '8', '12', '5', '3', '2']],
      caption: 'N\u00famero de hermanos de los estudiantes de un curso en C\u00facuta'
    },
    context: 'La tabla muestra el n\u00famero de hermanos de los estudiantes de un curso.',
    question: '\u00bfCu\u00e1l es el promedio de hermanos por estudiante?',
    svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style="max-width:400px">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#333">N\u00famero de hermanos por estudiante</text>
  <line x1="50" y1="170" x2="380" y2="170" stroke="#333" stroke-width="1.5"/>
  <line x1="50" y1="170" x2="50" y2="30" stroke="#333" stroke-width="1.5"/>
  <text x="95" y="185" text-anchor="middle" font-size="11" fill="#333">0</text>
  <text x="165" y="185" text-anchor="middle" font-size="11" fill="#333">1</text>
  <text x="235" y="185" text-anchor="middle" font-size="11" fill="#333">2</text>
  <text x="305" y="185" text-anchor="middle" font-size="11" fill="#333">3</text>
  <text x="375" y="185" text-anchor="middle" font-size="11" fill="#333">4</text>
  <text x="40" y="170" text-anchor="end" font-size="10" fill="#666">0</text>
  <text x="40" y="116" text-anchor="end" font-size="10" fill="#666">5</text>
  <text x="40" y="60" text-anchor="end" font-size="10" fill="#666">10</text>
  <line x1="50" y1="116" x2="380" y2="116" stroke="#ccc" stroke-width="0.5" stroke-dasharray="3"/>
  <line x1="50" y1="60" x2="380" y2="60" stroke="#ccc" stroke-width="0.5" stroke-dasharray="3"/>
  <rect x="72" y="74" width="46" height="96" fill="#42A5F5" opacity="0.8" rx="3"/>
  <rect x="142" y="36" width="46" height="134" fill="#66BB6A" opacity="0.8" rx="3"/>
  <rect x="212" y="100" width="46" height="70" fill="#FFA726" opacity="0.8" rx="3"/>
  <rect x="282" y="120" width="46" height="50" fill="#EF5350" opacity="0.8" rx="3"/>
  <rect x="352" y="135" width="46" height="35" fill="#AB47BC" opacity="0.8" rx="3"/>
  <text x="95" y="70" text-anchor="middle" font-size="11" fill="#fff" font-weight="bold">8</text>
  <text x="165" y="32" text-anchor="middle" font-size="11" fill="#fff" font-weight="bold">12</text>
  <text x="235" y="96" text-anchor="middle" font-size="11" fill="#fff" font-weight="bold">5</text>
  <text x="305" y="116" text-anchor="middle" font-size="11" fill="#fff" font-weight="bold">3</text>
  <text x="375" y="131" text-anchor="middle" font-size="11" fill="#fff" font-weight="bold">2</text>
  <text x="200" y="198" text-anchor="middle" font-size="10" fill="#666">N\u00famero de hermanos</text>
</svg>`,
    options: ['1,3', '1,5', '1,7', '1,1'],
    correct: 0,
    explanation: { correct: 'Total estudiantes = 8+12+5+3+2 = 30. Suma hermanos = 0x8+1x12+2x5+3x3+4x2 = 0+12+10+9+8 = 39. Promedio = 39/30 = 1,3.', wrongs: ['Opci\u00f3n correcta', 'Calculaste la mediana en lugar del promedio', 'Calculaste la moda en lugar del promedio', 'Sumaste mal los datos'] }
  },
  {
    id: 'MT34', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'facil',
    question: `En una panader\u00eda de Tunja, el costo de producir x panes es C(x) = 200x + 5.000. \u00bfCu\u00e1nto cuesta producir 100 panes?`,
    options: ['$20.000', '$25.000', '$30.000', '$35.000'],
    correct: 1,
    explanation: { correct: 'C(100) = 200 x 100 + 5.000 = 20.000 + 5.000 = $25.000.', wrongs: ['Olvidaste sumar el costo fijo: 200 x 100 = 20.000', 'Opci\u00f3n correcta', 'Multiplicaste 200 x 100 + 5.000 = 25.000, revisa', 'Sumaste 200 + 5.000 x 100?'] }
  },
  {
    id: 'MT35', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'media',
    question: `En un mapa de Colombia, 3 cm representan 60 km en la realidad. \u00bfCu\u00e1ntos km reales representan 12 cm en el mapa?`,
    options: ['180 km', '240 km', '200 km', '300 km'],
    correct: 1,
    explanation: { correct: 'Regla de tres: 3/60 = 12/x -> 3x = 720 -> x = 240 km.', wrongs: ['Opci\u00f3n correcta', 'Calculaste 12 x 3 = 36, 36 x 60?', 'Multiplicaste 12 x 20 = 240', 'Dividiste 60/3 = 20, 20 x 12 = 240'] }
  },
  {
    id: 'MT36', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'dificil',
    question: `Una ventana en forma de rect\u00e1ngulo coronado por un semic\u00edrculo tiene 1 m de ancho y 2 m de alto en la parte rectangular. \u00bfCu\u00e1l es el \u00e1rea total de la ventana? (Use \u03c0 = 3,14)`,
    svg: `<svg viewBox="0 0 280 300" xmlns="http://www.w3.org/2000/svg" style="max-width:280px">
  <!-- Semicircle top -->
  <path d="M40 120 A100 100 0 0 1 240 120" fill="#B3E5FC" stroke="#0288D1" stroke-width="2"/>
  <!-- Rectangle -->
  <rect x="40" y="120" width="200" height="150" fill="#E1F5FE" stroke="#0288D1" stroke-width="2"/>
  <!-- Window frame lines -->
  <line x1="140" y1="120" x2="140" y2="270" stroke="#90CAF9" stroke-width="1.5"/>
  <line x1="40" y1="195" x2="240" y2="195" stroke="#90CAF9" stroke-width="1.5"/>
  <!-- Width label -->
  <line x1="40" y1="285" x2="240" y2="285" stroke="#666" stroke-width="0.8"/>
  <text x="140" y="295" text-anchor="middle" font-size="13" fill="#E91E63" font-weight="bold">1 m</text>
  <!-- Height label -->
  <line x1="250" y1="120" x2="250" y2="270" stroke="#666" stroke-width="0.8" stroke-dasharray="3"/>
  <text x="260" y="200" text-anchor="middle" font-size="13" fill="#4CAF50" font-weight="bold">2 m</text>
  <!-- Radius label for semicircle -->
  <line x1="140" y1="120" x2="240" y2="120" stroke="#666" stroke-width="0.8" stroke-dasharray="3"/>
  <text x="190" y="115" text-anchor="middle" font-size="10" fill="#FF9800">r = 0,5 m</text>
  <text x="140" y="80" text-anchor="middle" font-size="10" fill="#333">Semic\u00edrculo</text>
  <text x="140" y="230" text-anchor="middle" font-size="10" fill="#333">Rect\u00e1ngulo</text>
</svg>`,
    options: ['2,39 m\u00b2', '2,00 m\u00b2', '2,79 m\u00b2', '3,14 m\u00b2'],
    correct: 0,
    explanation: { correct: '\u00c1rea rect\u00e1ngulo = 1 x 2 = 2 m\u00b2. Semic\u00edrculo: radio = 0,5 m, \u00e1rea = (\u03c0 x 0,5\u00b2)/2 = (3,14 x 0,25)/2 = 0,3925 m\u00b2. Total = 2,3925 m\u00b2 \u2248 2,39 m\u00b2.', wrongs: ['Opci\u00f3n correcta', 'Solo calculaste el rect\u00e1ngulo, olvidaste el semic\u00edrculo', 'Calculaste c\u00edrculo completo en lugar de semic\u00edrculo', 'Usaste di\u00e1metro en vez de radio'] }
  },
  {
    id: 'MT37', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'facil',
    question: `Se lanza una moneda al aire. \u00bfCu\u00e1l es la probabilidad de obtener cara?`,
    options: ['1/4', '1/2', '2/3', '1'],
    correct: 1,
    explanation: { correct: 'Resultados posibles: cara o sello (2). Caso favorable: 1. Probabilidad = 1/2.', wrongs: ['Opci\u00f3n correcta', 'La probabilidad de cara es 1/2, no 1/4', 'No es seguro, hay posibilidad de sello'] }
  },
  {
    id: 'MT38', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'media',
    question: `El costo de alquilar un sal\u00f3n de eventos en Sincelejo es $200.000 fijo m\u00e1s $15.000 por cada invitado. Si el presupuesto es $800.000, \u00bfcu\u00e1ntos invitados pueden asistir?`,
    options: ['40', '30', '50', '60'],
    correct: 0,
    explanation: { correct: 'Ecuaci\u00f3n: 200.000 + 15.000x = 800.000 -> 15.000x = 600.000 -> x = 40 invitados.', wrongs: ['Opci\u00f3n correcta', 'Restaste 800.000 - 200.000 = 600.000, luego 600.000/15.000 = 40', 'Dividiste 800.000/15.000 sin restar el fijo', 'Sumaste en lugar de restar'] }
  },
  {
    id: 'MT39', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'dificil',
    question: `3 obreros construyen un muro en 8 d\u00edas. \u00bfCu\u00e1ntos d\u00edas tardar\u00e1n 4 obreros trabajando al mismo ritmo?`,
    options: ['4 d\u00edas', '6 d\u00edas', '6 d\u00edas', '10 d\u00edas'],
    correct: 1,
    explanation: { correct: 'Proporci\u00f3n inversa: 3 obreros x 8 d\u00edas = 24 obrero-d\u00edas. 4 obreros x d d\u00edas = 24 -> d = 24/4 = 6 d\u00edas.', wrongs: ['Opci\u00f3n correcta', 'Calculaste 8 x 3/4 = 6, es correcto pero revisa', 'Pensaste que era directa: 8 x 4/3 = 10,67', 'Es inversa: m\u00e1s obreros, menos d\u00edas'] }
  },
  {
    id: 'MT40', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'facil',
    question: `El per\u00edmetro de un terreno rectangular en Villavicencio es 60 m. Si el ancho es 10 m, \u00bfcu\u00e1l es el largo?`,
    options: ['15 m', '20 m', '25 m', '30 m'],
    correct: 1,
    explanation: { correct: 'Per\u00edmetro = 2(largo + ancho) = 2(l + 10) = 60 -> l + 10 = 30 -> l = 20 m.', wrongs: ['Calculaste 60/4 = 15', 'Opci\u00f3n correcta', 'Sumaste 60 - 10 = 50, pero faltan pasos', 'Usaste P = 4 x lado como si fuera cuadrado'] }
  },
  {
    id: 'MT41', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'media',
    question: `Las estaturas (en cm) de 10 estudiantes son: 150, 155, 160, 155, 165, 170, 155, 160, 175, 150. \u00bfCu\u00e1l es la moda?`,
    options: ['155 cm', '160 cm', '150 cm', '165 cm'],
    correct: 0,
    explanation: { correct: '155 aparece 3 veces (150 aparece 2, 160 aparece 2). La moda es 155 cm.', wrongs: ['Opci\u00f3n correcta', '160 aparece 2 veces, menos que 155', '150 aparece 2 veces, menos que 155', 'La moda es el valor que m\u00e1s se repite: 155'] }
  },
  {
    id: 'MT42', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'dificil',
    question: `La poblaci\u00f3n de una ciudad colombiana crece seg\u00fan P(t) = 50.000 x (1,03)\u1d57, donde t son a\u00f1os. \u00bfCu\u00e1l ser\u00e1 la poblaci\u00f3n despu\u00e9s de 4 a\u00f1os? (Aproxime)`,
    options: ['56.000', '56.275', '56.000', '56.500'],
    correct: 1,
    explanation: { correct: 'P(4) = 50.000 x (1,03)\u2074 = 50.000 x 1,1255 = 56.275 habitantes.', wrongs: ['Opci\u00f3n correcta', 'Calculaste inter\u00e9s simple: 50.000 x (1 + 4x0,03) = 56.000', 'Calculaste 50.000 x 0,03 x 4 = 6.000, 50.000+6.000=56.000', 'Multiplicaste 1,03 x 4 en lugar de elevar a la 4'] }
  },
  {
    id: 'MT43', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'facil',
    question: `De una pizza familiar se consumieron 5/8. \u00bfQu\u00e9 fracci\u00f3n de la pizza queda?`,
    options: ['1/8', '3/8', '5/8', '1/2'],
    correct: 1,
    explanation: { correct: 'Pizza completa = 8/8. Queda = 8/8 - 5/8 = 3/8.', wrongs: ['Opci\u00f3n correcta', 'Restaste 1 - 5/8 = 3/8, es correcto', 'Sumaste 5+8 en lugar de restar'] }
  },
  {
    id: 'MT44', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'media',
    question: `Un contenedor de carga en Cartagena tiene forma de cubo con arista de 3 m. \u00bfCu\u00e1l es su volumen?`,
    options: ['9 m\u00b3', '18 m\u00b3', '27 m\u00b3', '36 m\u00b3'],
    correct: 2,
    explanation: { correct: 'Volumen = arista\u00b3 = 3\u00b3 = 27 m\u00b3.', wrongs: ['Eso es 3\u00b2 = 9', 'Eso es 3 x 6 = 18', 'Opci\u00f3n correcta', 'Eso es 3\u00b3 = 27'] }
  },
  {
    id: 'MT45', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'dificil',
    question: `En una carrera de 8 atletas, se entregan medallas de oro, plata y bronce. \u00bfDe cu\u00e1ntas formas diferentes se puede premiar?`,
    options: ['24', '56', '336', '512'],
    correct: 2,
    explanation: { correct: 'Permutaci\u00f3n: 8 x 7 x 6 = 336 formas diferentes.', wrongs: ['Calculaste 8 x 3 = 24', 'Calculaste 8 x 7 = 56', 'Opci\u00f3n correcta', 'Calculaste 8! en lugar de 8P3'] }
  },
  {
    id: 'MT46', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'facil',
    question: `En un restaurante de Santa Marta, la cuenta es de $120.000. Si se debe pagar el 10% de propina, \u00bfcu\u00e1nto es la propina?`,
    options: ['$10.000', '$12.000', '$15.000', '$20.000'],
    correct: 1,
    explanation: { correct: '10% de 120.000 = 120.000 x 0,10 = $12.000.', wrongs: ['Opci\u00f3n correcta', 'Calculaste 120.000 x 0,10 = 12.000', 'Calculaste 120.000 x 0,125 = 15.000'] }
  },
  {
    id: 'MT47', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'media',
    question: `Una pantalla de televisor mide 80 cm de ancho y 60 cm de alto. \u00bfCu\u00e1l es la medida de la diagonal?`,
    options: ['100 cm', '70 cm', '120 cm', '140 cm'],
    correct: 0,
    explanation: { correct: 'Diagonal\u00b2 = 80\u00b2 + 60\u00b2 = 6400 + 3600 = 10000. Diagonal = \u221a10000 = 100 cm.', wrongs: ['Opci\u00f3n correcta', 'Calculaste 80 + 60 = 140', 'Calculaste 80 x 60 = 4800', 'Sumaste 80 + 60 + 100?'] }
  },
  {
    id: 'MT48', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'facil',
    question: `Una recta pasa por los puntos (1, 2) y (3, 8). \u00bfCu\u00e1l es su pendiente?`,
    options: ['2', '3', '5', '6'],
    correct: 1,
    explanation: { correct: 'm = (8 - 2)/(3 - 1) = 6/2 = 3.', wrongs: ['Opci\u00f3n correcta', 'Calculaste (8+2)/(3+1) = 10/4 = 2,5', 'Calculaste (3-1)/(8-2) = 2/6 = 1/3'] }
  },
  {
    id: 'MT49', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'media',
    table: {
      headers: ['Puntaje', 'Frecuencia'],
      rows: [
        ['10-19', '5'],
        ['20-29', '8'],
        ['30-39', '12'],
        ['40-49', '7'],
        ['50-59', '3']
      ],
      caption: 'Distribuci\u00f3n de puntajes en una prueba de matem\u00e1ticas'
    },
    context: 'La tabla muestra la distribuci\u00f3n de puntajes de 35 estudiantes.',
    question: '\u00bfEn qu\u00e9 intervalo de puntaje se encuentra la mediana?',
    svg: `<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg" style="max-width:420px">
  <text x="210" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#333">Distribuci\u00f3n de puntajes</text>
  <line x1="50" y1="170" x2="400" y2="170" stroke="#333" stroke-width="1.5"/>
  <line x1="50" y1="170" x2="50" y2="30" stroke="#333" stroke-width="1.5"/>
  <text x="85" y="185" text-anchor="middle" font-size="9" fill="#333">10-19</text>
  <text x="155" y="185" text-anchor="middle" font-size="9" fill="#333">20-29</text>
  <text x="225" y="185" text-anchor="middle" font-size="9" fill="#333">30-39</text>
  <text x="295" y="185" text-anchor="middle" font-size="9" fill="#333">40-49</text>
  <text x="365" y="185" text-anchor="middle" font-size="9" fill="#333">50-59</text>
  <text x="40" y="170" text-anchor="end" font-size="9" fill="#666">0</text>
  <text x="40" y="100" text-anchor="end" font-size="9" fill="#666">6</text>
  <text x="40" y="55" text-anchor="end" font-size="9" fill="#666">12</text>
  <line x1="50" y1="100" x2="400" y2="100" stroke="#ccc" stroke-width="0.5" stroke-dasharray="3"/>
  <line x1="50" y1="55" x2="400" y2="55" stroke="#ccc" stroke-width="0.5" stroke-dasharray="3"/>
  <rect x="60" y="114" width="50" height="56" fill="#42A5F5" opacity="0.8" rx="2"/>
  <rect x="130" y="92" width="50" height="78" fill="#42A5F5" opacity="0.8" rx="2"/>
  <rect x="200" y="60" width="50" height="110" fill="#EF5350" opacity="0.8" rx="2"/>
  <rect x="270" y="100" width="50" height="70" fill="#42A5F5" opacity="0.8" rx="2"/>
  <rect x="340" y="128" width="50" height="42" fill="#42A5F5" opacity="0.8" rx="2"/>
  <text x="85" y="110" text-anchor="middle" font-size="11" fill="#fff" font-weight="bold">5</text>
  <text x="155" y="88" text-anchor="middle" font-size="11" fill="#fff" font-weight="bold">8</text>
  <text x="225" y="56" text-anchor="middle" font-size="11" fill="#fff" font-weight="bold">12</text>
  <text x="295" y="96" text-anchor="middle" font-size="11" fill="#fff" font-weight="bold">7</text>
  <text x="365" y="124" text-anchor="middle" font-size="11" fill="#fff" font-weight="bold">3</text>
  <text x="225" y="30" text-anchor="middle" font-size="10" fill="#E91E63" font-weight="bold">\u00a1Mediana aqu\u00c3!</text>
</svg>`,
    options: ['20-29', '30-39', '40-49', '10-19'],
    correct: 1,
    explanation: { correct: 'Total = 35. Mediana = dato 18. Frecuencias acumuladas: 5, 13, 25... El dato 18 esta en el intervalo 30-39.', wrongs: ['Opci\u00f3n correcta', 'Hasta 20-29 hay 13 datos, la mediana es el 18, esta en el siguiente', 'Hasta 40-49 hay 32 datos, la mediana es antes', 'El intervalo 30-39 contiene la posici\u00f3n 18'] }
  },
  {
    id: 'MT50', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'dificil',
    question: `Un computador en Pereira cuesta $2.500.000. Si se paga de contado, ofrecen 12% de descuento. Si se paga a credito, se recarga 8%. Cuanto se ahorra pagando de contado respecto al credito?`,
    options: ['$450.000', '$500.000', '$600.000', '$550.000'],
    correct: 1,
    explanation: { correct: 'Contado: 2.500.000 x 0,88 = 2.200.000. Cr\u00e9dito: 2.500.000 x 1,08 = 2.700.000. Ahorro: 2.700.000 - 2.200.000 = $500.000.', wrongs: ['Opci\u00f3n correcta', 'Calculaste 20% de 2.500.000 = 500.000, pero son descuento y recargo', 'Calculaste 12% + 8% = 20% de 2.500.000, correcto pero proceso?', 'C\u00e1lculo incorrecto'] }
  },
  {
    id: 'MT51', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'facil',
    question: `Un angulo mide 73 grados. Este angulo se clasifica como:`,
    options: ['Agudo', 'Recto', 'Obtuso', 'Llano'],
    correct: 0,
    explanation: { correct: '\u00c3\ufffdngulos agudos miden menos de 90\u00b0. 73\u00b0 < 90\u00b0, entonces es agudo.', wrongs: ['Opci\u00f3n correcta', 'Recto es exactamente 90\u00b0', 'Obtuso es mayor de 90\u00b0', '73\u00b0 es agudo (< 90\u00b0)'] }
  },
  {
    id: 'MT52', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'media',
    question: `La temperatura T en una nevera industrial despues de t horas sigue T(t) = -2t + 8. En que momento la temperatura llega a 0C?`,
    options: ['2 horas', '4 horas', '3 horas', '6 horas'],
    correct: 1,
    explanation: { correct: '-2t + 8 = 0 -> -2t = -8 -> t = 4 horas.', wrongs: ['Opci\u00f3n correcta', 'Resolviste 2t = 8 -> t = 4, es correcto', 'Sumaste 8 + 2 = 10? No'] }
  },
  {
    id: 'MT53', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'media',
    question: `Un bus intermunicipal recorre 240 km en 3 horas. Cuanto tiempo tardara en recorrer 400 km a la misma velocidad?`,
    options: ['4 horas', '5 horas', '2 horas', '6 horas'],
    correct: 1,
    explanation: { correct: 'Velocidad = 240/3 = 80 km/h. Tiempo = 400/80 = 5 horas.', wrongs: ['Opci\u00f3n correcta', 'Velocidad = 240/3 = 80, tiempo = 400/80 = 5', 'Calculaste 400 x 3 / 240 = 5', 'Regla de tres: 240/3 = 400/x -> x = 5'] }
  },
  {
    id: 'MT54', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'dificil',
    question: `Se lanzan dos dados. Cual es la probabilidad de que la suma sea mayor o igual a 10?`,
    options: ['1/6', '1/12', '5/18', '1/9'],
    correct: 0,
    explanation: { correct: 'Sumas >= 10: (4,6), (5,5), (5,6), (6,4), (6,5), (6,6) = 6 casos. Total 36. Prob = 6/36 = 1/6.', wrongs: ['Opci\u00f3n correcta', 'Olvidaste algunas combinaciones, como (5,5) o (6,4)', 'Contaste combinaciones de m\u00e1s', 'Solo consideraste (6,4), (6,5), (6,6) = 3/36'] }
  },
  {
    id: 'MT55', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'media',
    question: `Un terreno en forma de trapecio tiene bases de 12 m y 8 m, y una altura de 5 m. Cual es su area?`,
    options: ['40 m\u00b2', '50 m\u00b2', '60 m\u00b2', '100 m\u00b2'],
    correct: 1,
    explanation: { correct: '\u00c3\ufffdrea del trapecio = (B + b) x h / 2 = (12 + 8) x 5 / 2 = 20 x 5 / 2 = 50 m\u00b2.', wrongs: ['Opci\u00f3n correcta', 'Calculaste (12 x 8) x 5 / 2 = 240? No es la f\u00f3rmula', 'Sumaste 12 + 8 + 5 = 25, y multiplicaste por 2?', 'Usaste la f\u00f3rmula del tri\u00e1ngulo'] }
  },
  {
    id: 'MT56', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'facil',
    question: `Un cultivo de cafe produce 15 kg por cada 10 arboles. Cuanto producir\u00e1n 50 arboles?`,
    options: ['60 kg', '75 kg', '45 kg', '90 kg'],
    correct: 1,
    explanation: { correct: 'Regla de tres: 15/10 = x/50 -> 10x = 750 -> x = 75 kg.', wrongs: ['Opci\u00f3n correcta', 'Multiplicaste 50 x 15 = 750, luego 750/10 = 75', 'Calculaste 50/10 = 5, 5 x 15 = 75', 'Dividiste 50/15 = 3,33? No'] }
  },
  {
    id: 'MT57', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'dificil',
    question: `Se mezclan 10 litros de jugo al 20% de azucar con 5 litros de jugo al 50% de azucar. Cual es el porcentaje de azucar en la mezcla?`,
    options: ['30%', '25%', '35%', '40%'],
    correct: 0,
    explanation: { correct: 'Az\u00facar en 1\u00b0: 10 x 0,20 = 2 litros. Az\u00facar en 2\u00b0: 5 x 0,50 = 2,5 litros. Total az\u00facar = 4,5 L. Total mezcla = 15 L. Porcentaje = 4,5/15 x 100 = 30%.', wrongs: ['Opci\u00f3n correcta', 'Promediaste (20+50)/2 = 35, pero no son vol\u00famenes iguales', 'Calculaste (20x10+50x5)/15 = 30', 'Usaste el volumen incorrecto'] }
  },
  {
    id: 'MT58', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'media',
    context: `Las notas de 10 estudiantes en una prueba de matematicas son: 7, 8, 9, 7, 10, 6, 8, 7, 9, 8.`,
    question: `Cual es la nota mediana?`,
    options: ['7', '8', '6', '9'],
    correct: 1,
    explanation: { correct: 'Ordenando: 6, 7, 7, 7, 8, 8, 8, 9, 9, 10. Datos 5\u00b0 y 6\u00b0: 8 y 8. Mediana = (8+8)/2 = 8.', wrongs: ['Opci\u00f3n correcta', 'Esa es la moda (7), no la mediana', 'La mediana es 8, ordena los datos', 'Ese es el valor m\u00e1ximo'] }
  },
  {
    id: 'MT59', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'dificil',
    question: `Un rectangulo tiene un area de 48 cm2 y su diagonal mide 10 cm. Cuanto miden sus lados?`,
    options: ['4 cm y 12 cm', '6 cm y 8 cm', '5 cm y 9,6 cm', '3 cm y 16 cm'],
    correct: 1,
    explanation: { correct: 'Sistema: a x b = 48, a\u00b2 + b\u00b2 = 100. Resolviendo: (a+b)\u00b2 = a\u00b2+b\u00b2+2ab = 100+96 = 196, a+b=14. (a-b)\u00b2 = a\u00b2+b\u00b2-2ab = 100-96 = 4, a-b=2. a=8, b=6.', wrongs: ['Opci\u00f3n correcta', '4+12=16, 16+? 4\u00b2+12\u00b2=16+144=160, no da 100', '5\u00b2+9,6\u00b2=25+92,16=117,16, no da 100', 'Los lados son 6 y 8: 6x8=48, 6\u00b2+8\u00b2=100'] }
  },
  {
    id: 'MT60', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'media',
    question: `El numero de bacterias en un cultivo se duplica cada hora. Si inicialmente hay 200 bacterias, cuantas habra despues de 5 horas?`,
    options: ['6.400', '3.200', '12.800', '1.000'],
    correct: 0,
    explanation: { correct: 'N(5) = 200 x 2\u00e2\ufffd\u00b5 = 200 x 32 = 6.400 bacterias.', wrongs: ['Opci\u00f3n correcta', 'Calculaste 200 x 2 x 5 = 2.000 (crecimiento lineal)', 'Calculaste 200 x 2\u00e2\ufffd\u00b5 = 200 x 32 = 6.400', 'Calculaste 200 x 2\u00e2\ufffd\u00b6? Se duplica cada hora, en 5 horas son 2\u00e2\ufffd\u00b5'] }
  },

  // ===== SOCIALES - BLOQUE 4 (SC30-SC59) =====
  {
    id: 'SC30', area: 'sociales', areaName: 'Sociales y Ciudadan\u00eda', difficulty: 'media',
    question: `El Congreso de la Rep\u00fablica de Colombia es un \u00f3rgano bicameral compuesto por el Senado y la C\u00e1mara de Representantes. Su funci\u00f3n principal es:`,
    options: ['Ejecutar las leyes y administrar el Estado', 'Crear, modificar y derogar las leyes, y ejercer control pol\u00edtico sobre el Gobierno', 'Administrar justicia y resolver conflictos entre ciudadanos', 'Controlar la pol\u00edtica monetaria y cambiar\u00eda del pa\u00eds'],
    correct: 1,
    explanation: { correct: 'El Congreso ejerce la funci\u00f3n legislativa (crear leyes), control pol\u00edtico (citar a ministros, moci\u00f3n de censura), reformar la Constituci\u00f3n mediante actos legislativos, y aprobar el presupuesto nacional. El Senado tiene 108 miembros y la C\u00e1mara 188 miembros.', wrongs: ['Ejecutar las leyes es funci\u00f3n de la Rama Ejecutiva', 'Opci\u00f3n correcta', 'Administrar justicia es funci\u00f3n de la Rama Judicial', 'La pol\u00edtica monetaria es funci\u00f3n aut\u00f3noma del Banco de la Rep\u00fablica'] }
  },
  {
    id: 'SC31', area: 'sociales', areaName: 'Sociales y Ciudadan\u00eda', difficulty: 'dificil',
    question: `El movimiento de la Regeneraci\u00f3n liderado por Rafael N\u00fa\u00f1ez a finales del siglo XIX buscaba:`,
    options: ['Fortalecer el sistema federal de la Constituci\u00f3n de Rionegro de 1863', 'Centralizar el poder pol\u00edtico, promulgar una nueva Constituci\u00f3n y fortalecer la alianza entre el Estado y la Iglesia Cat\u00f3lica', 'Establecer un sistema parlamentario similar al europeo', 'Abolir el ej\u00e9rcito nacional y crear milicias civiles'],
    correct: 1,
    explanation: { correct: 'La Regeneraci\u00f3n, liderada por Rafael N\u00fa\u00f1ez y Miguel Antonio Caro, busc\u00f3 reemplazar la Constituci\u00f3n federal de 1863 por la centralista Constituci\u00f3n de 1886. Restableci\u00f3 las relaciones con el Vaticano (Concordato de 1887), centraliz\u00f3 el poder pol\u00edtico y fiscal, y fortaleci\u00f3 la autoridad presidencial con un per\u00edodo de 6 a\u00f1os.', wrongs: ['La Regeneraci\u00f3n fue centralista, precisamente buscaba eliminar el federalismo de 1863', 'Opci\u00f3n correcta', 'Colombia mantuvo un sistema presidencial, no parlamentario', 'No aboli\u00f3 el ej\u00e9rcito; la Constituci\u00f3n de 1886 lo mantuvo como instituci\u00f3n'] }
  },
  {
    id: 'SC32', area: 'sociales', areaName: 'Sociales y Ciudadan\u00eda', difficulty: 'facil',
    question: `El plebiscito es un mecanismo de participaci\u00f3n ciudadana mediante el cual el Presidente convoca al pueblo para:`,
    options: ['Presentar proyectos de ley al Congreso', 'Pronunciarse a favor o en contra de una decisi\u00f3n pol\u00edtica del Ejecutivo', 'Elegir a los miembros del Congreso', 'Revocar el mandato de un alcalde'],
    correct: 1,
    explanation: { correct: 'El plebiscito (art. 103 Constituci\u00f3n, Ley 134 de 1994) es la convocatoria que hace el Presidente de la Rep\u00fablica al pueblo para que se pronuncie sobre una decisi\u00f3n pol\u00edtica de su Gobierno. El ejemplo m\u00e1s significativo fue el plebiscito del 2 de octubre de 2016 sobre los Acuerdos de Paz con las FARC, en el que gan\u00f3 el "No".', wrongs: ['Esa es la iniciativa legislativa, no el plebiscito', 'Opci\u00f3n correcta', 'Los miembros del Congreso se eligen mediante voto popular en elecciones', 'La revocatoria del mandato es otro mecanismo diferente'] }
  },
  {
    id: 'SC33', area: 'sociales', areaName: 'Sociales y Ciudadan\u00eda', difficulty: 'media',
    question: `La Constituci\u00f3n de 1991 puede ser reformada a trav\u00e9s de:`,
    options: ['Un decreto presidencial con fuerza de ley', 'Un acto legislativo aprobado por el Congreso en dos vueltas, o mediante referendo o asamblea constituyente', 'Una decisi\u00f3n mayoritaria de la Corte Suprema de Justicia', 'Una resoluci\u00f3n del Consejo de Estado'],
    correct: 1,
    explanation: { correct: 'La Constituci\u00f3n establece tres mecanismos de reforma (arts. 374-379): 1) Acto legislativo aprobado por el Congreso en dos per\u00edodos ordinarios, 2) Asamblea Nacional Constituyente convocada por el Congreso mediante ley aprobada por el pueblo, y 3) Referendo constitucional convocado por el Gobierno o mediante iniciativa ciudadana.', wrongs: ['El Presidente no puede reformar la Constituci\u00f3n por decreto', 'Opci\u00f3n correcta', 'La Corte Constitucional custodia e interpreta la Constituci\u00f3n, no la reforma', 'El Consejo de Estado es tribunal de lo contencioso administrativo'] }
  },
  {
    id: 'SC34', area: 'sociales', areaName: 'Sociales y Ciudadan\u00eda', difficulty: 'dificil',
    context: `"Montesquieu, en 'El esp\u00edritu de las leyes' (1748), propuso que para evitar el abuso de poder, este debe dividirse en tres funciones: legislativa, ejecutiva y judicial, que se controlen mutuamente. Este principio inspir\u00f3 la organizaci\u00f3n del Estado colombiano."`,
    question: `La separaci\u00f3n de poderes en Colombia busca evitar el abuso de poder mediante:`,
    options: ['La concentraci\u00f3n de todas las funciones en el Presidente de la Rep\u00fablica', 'La distribuci\u00f3n de funciones entre tres ramas independientes que se controlan entre s\u00ed', 'La eliminaci\u00f3n de la Rama Judicial para simplificar el Estado', 'La subordinaci\u00f3n del Congreso al poder Ejecutivo'],
    correct: 1,
    explanation: { correct: 'La separaci\u00f3n de poderes (o divisi\u00f3n de poderes) distribuye las funciones del Estado en tres ramas: Ejecutiva (administrar), Legislativa (legislar) y Judicial (juzgar). Cada rama tiene funciones espec\u00edficas pero tambi\u00e9n mecanismos de control sobre las otras (frenos y contrapesos), evitando la concentraci\u00f3n del poder en una sola instancia.', wrongs: ['La separaci\u00f3n busca precisamente evitar la concentraci\u00f3n del poder, no concentrarlo', 'Opci\u00f3n correcta', 'No se elimina ninguna rama; las tres son necesarias', 'El Congreso es independiente del Ejecutivo, no est\u00e1 subordinado'] }
  },
  {
    id: 'SC35', area: 'sociales', areaName: 'Sociales y Ciudadan\u00eda', difficulty: 'facil',
    question: `Colombia est\u00e1 ubicada en la zona ecuatorial, lo que determina que:`,
    options: ['Tenga cuatro estaciones clim\u00e1ticas bien diferenciadas como en Europa', 'Presente pocas variaciones de temperatura a lo largo del a\u00f1o, siendo la altitud el principal factor de variaci\u00f3n clim\u00e1tica', 'Su clima sea exclusivamente polar en todas las regiones del pa\u00eds', 'No tenga vegetaci\u00f3n ni biodiversidad significativa'],
    correct: 1,
    explanation: { correct: 'La ubicaci\u00f3n en la zona ecuatorial hace que Colombia reciba radiaci\u00f3n solar constante durante todo el a\u00f1o, generando pocas variaciones de temperatura estacionales. Las diferencias de temperatura se deben principalmente a la altitud, creando los pisos t\u00e9rmicos. Colombia es uno de los pa\u00edses m\u00e1s biodiversos del mundo gracias a su ubicaci\u00f3n y relieve diverso.', wrongs: ['Colombia no tiene cuatro estaciones; las variaciones son por altitud, no por estaciones', 'Opci\u00f3n correcta', 'Solo las zonas de alta monta\u00f1a tienen clima fr\u00edo; la mayor\u00eda del territorio es c\u00e1lido y templado', 'Colombia es el segundo pa\u00eds m\u00e1s biodiverso del mundo'] }
  },
  {
    id: 'SC36', area: 'sociales', areaName: 'Sociales y Ciudadan\u00eda', difficulty: 'media',
    context: `"El fil\u00f3sofo John Rawls, en 'Teor\u00eda de la justicia' (1971), propuso que una sociedad justa debe organizarse seg\u00fan dos principios: el de igual libertad y el de diferencia. Este \u00faltimo establece que las desigualdades sociales y econ\u00f3micas solo son aceptables si benefician a los miembros menos favorecidos de la sociedad."`,
    question: `Seg\u00fan Rawls, el principio de diferencia acepta las desigualdades econ\u00f3micas siempre que:`,
    options: ['Se elimine toda diferencia de ingreso entre las personas', 'Redunden en beneficio de los miembros m\u00e1s desfavorecidos de la sociedad', 'Se mantengan exactamente como est\u00e1n sin ning\u00fan cambio', 'Sean el resultado exclusivo del esfuerzo individual sin intervenci\u00f3n del Estado'],
    correct: 1,
    explanation: { correct: 'Rawls formula el principio de diferencia como parte de su teor\u00eda de la justicia como equidad. Las desigualdades econ\u00f3micas y sociales son justas solo si (1) benefician a los menos aventajados y (2) est\u00e1n vinculadas a posiciones y cargos abiertos a todos en condiciones de igualdad de oportunidades.', wrongs: ['Rawls no propone eliminar todas las diferencias, sino regularlas para que beneficien a los menos favorecidos', 'Opci\u00f3n correcta', 'Rawls propone cambios para hacer la sociedad m\u00e1s justa, no mantener el statu quo', 'Rawls reconoce que el m\u00e9rito est\u00e1 influido por factores sociales y propone corregir desigualdades de origen'] }
  },
  {
    id: 'SC37', area: 'sociales', areaName: 'Sociales y Ciudadan\u00eda', difficulty: 'dificil',
    question: `Cuando la Corte Constitucional declara inexequible una ley aprobada por el Congreso, est\u00e1 ejerciendo:`,
    options: ['Un control pol\u00edtico del Ejecutivo sobre el Legislativo', 'Un control de constitucionalidad que permite mantener el equilibrio entre las ramas del poder p\u00fablico', 'Una interferencia indebida en las funciones del Congreso', 'Una funci\u00f3n administrativa propia del Consejo de Estado'],
    correct: 1,
    explanation: { correct: 'El control de constitucionalidad es un mecanismo de frenos y contrapesos (checks and balances). La Corte Constitucional revisa que las leyes del Congreso se ajusten a la Constituci\u00f3n. Si una ley es declarada inexequible, se elimina del ordenamiento por ser contraria a la Constituci\u00f3n. Este control puede ser preventivo o posterior, abstracto o concreto.', wrongs: ['Es un control judicial, no ejecutivo', 'Opci\u00f3n correcta', 'Los l\u00edmites no son correctos en las otras opciones', 'Es un control previsto en la Constituci\u00f3n, no una interferencia indebida'] }
  },
  {
    id: 'SC38', area: 'sociales', areaName: 'Sociales y Ciudadan\u00eda', difficulty: 'facil',
    context: `"Colombia es el segundo pa\u00eds m\u00e1s biodiverso del mundo, despu\u00e9s de Brasil. Alberga aproximadamente el 10% de las especies del planeta en solo el 0,7% de la superficie terrestre, gracias a su ubicaci\u00f3n ecuatorial y su diversidad de ecosistemas."`,
    question: `Seg\u00fan el texto, Colombia se caracteriza por ser un pa\u00eds:`,
    options: ['Con baja biodiversidad debido a su extensi\u00f3n territorial', 'Megadiverso, que concentra un porcentaje muy alto de especies en un \u00e1rea peque\u00f1a', 'Con clima polar uniforme en todo su territorio', 'Con poca variedad de ecosistemas y regiones naturales'],
    correct: 1,
    explanation: { correct: 'El texto destaca que Colombia es "el segundo pa\u00eds m\u00e1s biodiverso del mundo" y "alberga aproximadamente el 10% de las especies del planeta en solo el 0,7% de la superficie terrestre". Esto se debe a su ubicaci\u00f3n ecuatorial, su relieve con las tres cordilleras, y sus m\u00faltiples ecosistemas que incluyen selvas, p\u00e1ramos, sabanas y ecosistemas marinos.', wrongs: ['Colombia es megadiversa, con una de las mayores biodiversidades del planeta', 'Opci\u00f3n correcta', 'Colombia tiene m\u00faltiples climas: c\u00e1lido, templado, fr\u00edo, p\u00e1ramo; no es polar', 'Colombia tiene 6 regiones naturales con gran variedad de ecosistemas'] }
  },
  {
    id: 'SC39', area: 'sociales', areaName: 'Sociales y Ciudadan\u00eda', difficulty: 'dificil',
    question: `El Sistema Integral de Verdad, Justicia, Reparaci\u00f3n y No Repetici\u00f3n (SIVJRNR), creado por el Acuerdo de Paz de 2016, est\u00e1 compuesto por tres mecanismos. \u00bfCu\u00e1les son?`,
    options: ['La JEP, la Comisi\u00f3n de la Verdad y la Unidad de B\u00fasqueda de Personas dadas por Desaparecidas', 'La Fiscal\u00eda General, la Polic\u00eda Nacional y el Ej\u00e9rcito', 'El Congreso, la Corte Suprema y la Presidencia', 'La Registradur\u00eda, el Consejo Nacional Electoral y la Procuradur\u00eda'],
    correct: 0,
    explanation: { correct: 'El SIVJRNR integra tres mecanismos: 1) Comisi\u00f3n para el Esclarecimiento de la Verdad (CEV) \u2014esclarece patrones de violencia\u2014, 2) Jurisdicci\u00f3n Especial para la Paz (JEP) \u2014administra justicia transicional\u2014, y 3) Unidad de B\u00fasqueda de Personas dadas por Desaparecidas (UBPD) \u2014busca a las v\u00edctimas de desaparici\u00f3n forzada\u2014. Cada uno cumple funciones distintas pero complementarias.', wrongs: ['Opci\u00f3n correcta', 'La Fiscal\u00eda, la Polic\u00eda y el Ej\u00e9rcito no forman parte del SIVJRNR', 'Esos son \u00f3rganos del Estado preexistentes, no creados por el Acuerdo de Paz', 'La Registradur\u00eda y el CNE organizan elecciones; la Procuradur\u00eda ejerce control disciplinario'] }
  },
  {
    id: 'SC40', area: 'sociales', areaName: 'Sociales y Ciudadan\u00eda', difficulty: 'media',
    question: `En econom\u00eda, se entiende por inflaci\u00f3n:`,
    options: ['La disminuci\u00f3n generalizada de los precios de bienes y servicios en una econom\u00eda', 'El aumento sostenido y generalizado del nivel de precios durante un per\u00edodo de tiempo', 'El crecimiento de la producci\u00f3n industrial de un pa\u00eds medido trimestralmente', 'La reducci\u00f3n sistem\u00e1tica de la tasa de desempleo en la poblaci\u00f3n econ\u00f3micamente activa'],
    correct: 1,
    explanation: { correct: 'La inflaci\u00f3n es el aumento sostenido y generalizado de los precios de bienes y servicios. En Colombia, el Banco de la Rep\u00fablica tiene como meta mantener la inflaci\u00f3n en torno al 3% anual. Una inflaci\u00f3n alta reduce el poder adquisitivo de la moneda y afecta especialmente a las personas de menores ingresos. Se mide a trav\u00e9s del \u00cdndice de Precios al Consumidor (IPC).', wrongs: ['Esa es la definici\u00f3n de deflaci\u00f3n, lo opuesto a la inflaci\u00f3n', 'Opci\u00f3n correcta', 'Eso es crecimiento econ\u00f3mico, no inflaci\u00f3n', 'La inflaci\u00f3n y el desempleo son fen\u00f3menos diferentes, aunque relacionados (Curva de Phillips)'] }
  },
  {
    id: 'SC41', area: 'sociales', areaName: 'Sociales y Ciudadan\u00eda', difficulty: 'facil',
    question: `El referendo es un mecanismo de participaci\u00f3n ciudadana que permite a los ciudadanos:`,
    options: ['Elegir al Presidente de la Rep\u00fablica mediante voto popular directo', 'Decidir si aprueban o rechazan un proyecto de norma jur\u00eddica, o si derogan una norma existente', 'Solicitar la rendici\u00f3n de cuentas de un funcionario p\u00fablico electo', 'Proponer la destituci\u00f3n de un alcalde o gobernador antes de que termine su mandato'],
    correct: 1,
    explanation: { correct: 'El referendo (art. 103 Constituci\u00f3n, Ley 134 de 1994) es la convocatoria al pueblo para que decida si aprueba un proyecto de norma (referendo aprobatorio) o si deroga una norma existente (referendo derogatorio). Puede ser de \u00e1mbito nacional, departamental o municipal. No debe confundirse con el plebiscito, que se pronuncia sobre decisiones del Ejecutivo.', wrongs: ['El Presidente se elige mediante voto popular en elecciones, no por referendo', 'Opci\u00f3n correcta', 'Eso es una citaci\u00f3n a debate de control pol\u00edtico', 'Esa es la revocatoria del mandato'] }
  },
  {
    id: 'SC42', area: 'sociales', areaName: 'Sociales y Ciudadan\u00eda', difficulty: 'dificil',
    context: `"El per\u00edodo conocido como 'La Violencia' en Colombia (1946-1958) se caracteriz\u00f3 por el enfrentamiento bipartidista entre liberales y conservadores, especialmente en zonas rurales. Caus\u00f3 entre 200.000 y 300.000 muertes y el desplazamiento de miles de campesinos. El asesinato de Jorge Eli\u00e9cer Gait\u00e1n en 1948 (el 'Bogotazo') marc\u00f3 un punto de inflexi\u00f3n en este conflicto."`,
    question: `Seg\u00fan el texto, el detonante que intensific\u00f3 "La Violencia" en Colombia fue:`,
    options: ['La firma del Frente Nacional entre liberales y conservadores', 'El asesinato de Jorge Eli\u00e9cer Gait\u00e1n el 9 de abril de 1948', 'La llegada al poder del partido Comunista Colombiano', 'La guerra con el Per\u00fa por el conflicto del Trapecio Amaz\u00f3nico'],
    correct: 1,
    explanation: { correct: 'El asesinato de Jorge Eli\u00e9cer Gait\u00e1n (candidato presidencial liberal) el 9 de abril de 1948 desencaden\u00f3 el Bogotazo y una ola de violencia que se extendi\u00f3 por todo el pa\u00eds. Aunque la violencia bipartidista ya exist\u00eda antes, el magnicidio de Gait\u00e1n la intensific\u00f3 dram\u00e1ticamente. La Violencia solo ces\u00f3 parcialmente con el establecimiento del Frente Nacional en 1958.', wrongs: ['El Frente Nacional (1958) fue la soluci\u00f3n pactada para terminar La Violencia, no su detonante', 'Opci\u00f3n correcta', 'El Partido Comunista no tuvo suficiente poder para causar este nivel de violencia', 'El conflicto con Per\u00fa por Leticia fue en 1932-1933, antes de La Violencia'] }
  },
  {
    id: 'SC43', area: 'sociales', areaName: 'Sociales y Ciudadan\u00eda', difficulty: 'media',
    question: `La migraci\u00f3n masiva de ciudadanos venezolanos hacia Colombia, que se intensific\u00f3 a partir de 2017, ha implicado para el pa\u00eds:`,
    options: ['El cierre definitivo e irreversible de la frontera binacional', 'Desaf\u00edos en la integraci\u00f3n social, presi\u00f3n sobre los servicios de salud y educaci\u00f3n, y la implementaci\u00f3n de medidas de regularizaci\u00f3n como el Estatuto Temporal de Protecci\u00f3n (ETPV)', 'La desaparici\u00f3n de las ciudades fronterizas del departamento de Norte de Santander', 'Un incremento autom\u00e1tico e inmediato de la econom\u00eda y el empleo formal'],
    correct: 1,
    explanation: { correct: 'La migraci\u00f3n venezolana (m\u00e1s de 2,5 millones de venezolanos en Colombia) ha generado importantes desaf\u00edos en integraci\u00f3n social, presi\u00f3n sobre servicios p\u00fablicos como salud y educaci\u00f3n, y necesidades de vivienda. Colombia respondi\u00f3 con el Estatuto Temporal de Protecci\u00f3n (2021) para regularizar a los migrantes. Ciudades como C\u00facuta han experimentado cambios demogr\u00e1ficos significativos.', wrongs: ['La frontera no se ha cerrado de forma definitiva; ha habido aperturas y cierres peri\u00f3dicos', 'Opci\u00f3n correcta', 'Las ciudades fronterizas no han desaparecido; han crecido demogr\u00e1ficamente y enfrentan nuevos retos', 'La migraci\u00f3n ha tenido impactos econ\u00f3micos mixtos; no ha generado un incremento inmediato generalizado'] }
  },
  {
    id: 'SC44', area: 'sociales', areaName: 'Sociales y Ciudadan\u00eda', difficulty: 'facil',
    question: `El art\u00edculo 3 de la Constituci\u00f3n de 1991 establece que "la soberan\u00eda reside exclusivamente en el pueblo". Esto se conoce como el principio de:`,
    options: ['Soberan\u00eda popular, seg\u00fan el cual el poder p\u00fablico emana de los ciudadanos y los gobernantes son sus representantes', 'Soberan\u00eda nacional absoluta del Presidente de la Rep\u00fablica', 'Autonom\u00eda de los partidos pol\u00edticos para decidir sobre asuntos del Estado', 'Supremac\u00eda constitucional del Congreso sobre los dem\u00e1s poderes p\u00fablicos'],
    correct: 0,
    explanation: { correct: 'El principio de soberan\u00eda popular significa que el poder p\u00fablico emana del pueblo colombiano, no de los gobernantes ni de ninguna instituci\u00f3n. Los ciudadanos ejercen su soberan\u00eda mediante el voto, los mecanismos de participaci\u00f3n ciudadana y el control a sus gobernantes. Este principio se complementa con el art\u00edculo 103 que enumera los mecanismos de participaci\u00f3n del pueblo en ejercicio de su soberan\u00eda.', wrongs: ['Opci\u00f3n correcta', 'El Presidente no tiene soberan\u00eda propia; es un mandatario temporal del pueblo', 'La soberan\u00eda es del pueblo, no de los partidos pol\u00edticos', 'El Congreso es un poder constituido que emana del pueblo, no tiene soberan\u00eda propia'] }
  },
  {
    id: 'SC45', area: 'sociales', areaName: 'Sociales y Ciudadan\u00eda', difficulty: 'media',
    context: `"El rio Amazonas es el m\u00e1s caudaloso del mundo y atraviesa varios pa\u00edses sudamericanos incluyendo Colombia. La selva amaz\u00f3nica colombiana cubre aproximadamente el 30% del territorio nacional."`,
    question: `\u00bfQu\u00e9 porcentaje del territorio colombiano cubre la Amazon\u00eda?`,
    options: ['10%', '20%', '30%', '50%'],
    correct: 2,
    explanation: { correct: 'El texto dice que "la selva amaz\u00f3nica colombiana cubre aproximadamente el 30% del territorio nacional".', wrongs: ['Menos de lo indicado', 'Menos de lo indicado', 'Opci\u00f3n correcta', 'M\u00e1s de lo indicado'] }
  },
  {
    id: 'SC46', area: 'sociales', areaName: 'Sociales y Ciudadan\u00eda', difficulty: 'dificil',
    question: `La "estanflaci\u00f3n" es un fen\u00f3meno econ\u00f3mico que combina:`,
    options: ['Crecimiento econ\u00f3mico con baja inflaci\u00f3n', 'Estancamiento econ\u00f3mico con alta inflaci\u00f3n', 'Alto desempleo con deflaci\u00f3n', 'Crecimiento con alta inflaci\u00f3n'],
    correct: 1,
    explanation: { correct: 'La estanflaci\u00f3n combina estancamiento econ\u00f3mico (bajo crecimiento, alto desempleo) con alta inflaci\u00f3n. Fue un fen\u00f3meno notable en los a\u00f1os 70.', wrongs: ['Eso es crecimiento saludable', 'Opci\u00f3n correcta', 'No es deflaci\u00f3n sino inflaci\u00f3n', 'Eso ser\u00eda sobrecalentamiento econ\u00f3mico'] }
  },
  {
    id: 'SC47', area: 'sociales', areaName: 'Sociales y Ciudadan\u00eda', difficulty: 'facil',
    question: `La defensor\u00eda del pueblo es una instituci\u00f3n que:`,
    options: ['Defiende a los funcionarios p\u00fablicos', 'Protege y promueve los derechos humanos de los ciudadanos', 'Juzga a los delincuentes', 'Recauda impuestos'],
    correct: 1,
    explanation: { correct: 'La Defensor\u00eda del Pueblo es parte del Ministerio P\u00fablico y se encarga de promover, ejercer y divulgar los derechos humanos en Colombia.', wrongs: ['La Defensor\u00eda defiende a los ciudadanos, no a funcionarios', 'Opci\u00f3n correcta', 'Los delincuentes son juzgados por la Rama Judicial', 'Los impuestos los recauda la DIAN'] }
  },
  {
    id: 'SC48', area: 'sociales', areaName: 'Sociales y Ciudadan\u00eda', difficulty: 'media',
    question: `El "desplazamiento forzado" en Colombia ha afectado principalmente a:`,
    options: ['Las poblaciones urbanas de clase alta', 'Las comunidades rurales y campesinas', 'Los empresarios industriales', 'Los funcionarios p\u00fablicos'],
    correct: 1,
    explanation: { correct: 'El conflicto armado ha desplazado forzosamente a millones de personas del campo y zonas rurales, siendo los campesinos, afrocolombianos e ind\u00edgenas las poblaciones m\u00e1s afectadas.', wrongs: ['El desplazamiento ha sido mayoritariamente rural', 'Opci\u00f3n correcta', 'Los empresarios no han sido el grupo m\u00e1s afectado', 'Los funcionarios no son el grupo m\u00e1s desplazado'] }
  },
  {
    id: 'SC49', area: 'sociales', areaName: 'Sociales y Ciudadan\u00eda', difficulty: 'dificil',
    question: `La "Curva de Laffer" en econom\u00eda relaciona:`,
    options: ['La inflaci\u00f3n y el desempleo', 'La tasa impositiva y los ingresos fiscales', 'La oferta y la demanda', 'El consumo y el ahorro'],
    correct: 1,
    explanation: { correct: 'La Curva de Laffer muestra que existe una tasa impositiva \u00f3ptima que maximiza los ingresos fiscales; tasas muy altas pueden reducir la recaudaci\u00f3n.', wrongs: ['Esa es la Curva de Phillips', 'Opci\u00f3n correcta', 'Esa es la ley de oferta y demanda', 'Esa es la propensi\u00f3n marginal'] }
  },
  {
    id: 'SC50', area: 'sociales', areaName: 'Sociales y Ciudadan\u00eda', difficulty: 'facil',
    question: `Las regiones naturales de Colombia son:`,
    options: ['Caribe, Andina, Pac\u00edfica, Orinoqu\u00eda, Amazon\u00eda e Insular', 'Norte, Sur, Este y Oeste', 'Tropical, Templada y Fr\u00eda', 'Continental, Mar\u00edtima y Fluvial'],
    correct: 0,
    explanation: { correct: 'Colombia tiene seis regiones naturales: Caribe, Andina, Pac\u00edfica, Orinoqu\u00eda, Amazon\u00eda e Insular, cada una con caracter\u00edsticas geogr\u00e1ficas y culturales distintivas.', wrongs: ['Opci\u00f3n correcta', 'Esa no es la divisi\u00f3n por regiones naturales', 'Esa es una clasificaci\u00f3n por pisos t\u00e9rmicos', 'No corresponde a regiones naturales'] }
  },
  {
    id: 'SC51', area: 'sociales', areaName: 'Sociales y Ciudadan\u00eda', difficulty: 'media',
    question: `La "Comisi\u00f3n de la Verdad" en Colombia tuvo como objetivo:`,
    options: ['Juzgar a los responsables del conflicto', 'Contribuir al esclarecimiento de violaciones a los derechos humanos durante el conflicto armado', 'Administrar justicia penal', 'Reemplazar a la Fiscal\u00eda'],
    correct: 1,
    explanation: { correct: 'La Comisi\u00f3n de la Verdad buscaba esclarecer patrones de violencia, violaciones de derechos humanos y contribuir a la verdad del conflicto, sin funciones judiciales.', wrongs: ['Juzgar no era su funci\u00f3n; eso era para la JEP', 'Opci\u00f3n correcta', 'No ten\u00eda funciones judiciales', 'No reemplazaba a ninguna instituci\u00f3n'] }
  },
  {
    id: 'SC52', area: 'sociales', areaName: 'Sociales y Ciudadan\u00eda', difficulty: 'dificil',
    question: `El concepto de "interseccionalidad" en ciencias sociales se refiere a:`,
    options: ['La separaci\u00f3n de identidades sociales', 'La forma en que diferentes sistemas de opresi\u00f3n (raza, g\u00e9nero, clase) se superponen e interact\u00faan', 'La igualdad de todas las personas ante la ley', 'La eliminaci\u00f3n de categor\u00edas sociales'],
    correct: 1,
    explanation: { correct: 'La interseccionalidad (Crenshaw) analiza c\u00f3mo las diferentes identidades sociales y sistemas de opresi\u00f3n se intersectan, creando experiencias \u00fanicas de discriminaci\u00f3n.', wrongs: ['La interseccionalidad analiza la intersecci\u00f3n, no la separaci\u00f3n', 'Opci\u00f3n correcta', 'Eso es el principio de igualdad jur\u00eddica', 'La interseccionalidad reconoce las categor\u00edas'] }
  },
  {
    id: 'SC53', area: 'sociales', areaName: 'Sociales y Ciudadan\u00eda', difficulty: 'facil',
    question: `El peso colombiano es la moneda oficial de Colombia emitida por:`,
    options: ['El Banco Mundial', 'El Banco de la Rep\u00fablica', 'La DIAN', 'El Ministerio de Hacienda'],
    correct: 1,
    explanation: { correct: 'El Banco de la Rep\u00fablica (Banco Central) es el encargado de emitir la moneda legal en Colombia y controlar la pol\u00edtica monetaria.', wrongs: ['El Banco Mundial es un organismo internacional', 'Opci\u00f3n correcta', 'La DIAN recauda impuestos', 'El Ministerio de Hacienda dise\u00f1a la pol\u00edtica fiscal'] }
  },
  {
    id: 'SC54', area: 'sociales', areaName: 'Sociales y Ciudadan\u00eda', difficulty: 'media',
    question: `El Mercado Com\u00fan del Sur (Mercosur) fue creado mediante:`,
    options: ['El Tratado de Libre Comercio con EE.UU.', 'El Tratado de Asunci\u00f3n en 1991', 'El Acuerdo de Paz de 2016', 'La Carta de la ONU'],
    correct: 1,
    explanation: { correct: 'El Mercosur fue creado el 26 de marzo de 1991 con la firma del Tratado de Asunci\u00f3n entre Argentina, Brasil, Paraguay y Uruguay.', wrongs: ['No es un TLC con EE.UU.', 'Opci\u00f3n correcta', 'El acuerdo de paz es colombiano, no del Mercosur', 'La Carta de la ONU es de 1945'] }
  },
  {
    id: 'SC55', area: 'sociales', areaName: 'Sociales y Ciudadan\u00eda', difficulty: 'dificil',
    question: `El "Estado de excepci\u00f3n" en Colombia permite al Presidente:`,
    options: ['Gobernar sin l\u00edmites constitucionales', 'Suspender algunos derechos en situaciones de emergencia, con control judicial y legislativo', 'Disolver el Congreso permanentemente', 'Eliminar la Rama Judicial'],
    correct: 1,
    explanation: { correct: 'El Estado de excepci\u00f3n (arts. 212-215 Constituci\u00f3n) permite al Presidente adoptar medidas extraordinarias pero limitadas, con control autom\u00e1tico de la Corte Constitucional.', wrongs: ['Hay l\u00edmites y controles constitucionales', 'Opci\u00f3n correcta', 'No puede disolver el Congreso', 'No puede eliminar la Rama Judicial'] }
  },
  {
    id: 'SC56', area: 'sociales', areaName: 'Sociales y Ciudadan\u00eda', difficulty: 'facil',
    question: `La bandera de Colombia tiene tres colores:`,
    options: ['Rojo, blanco y azul', 'Amarillo, azul y rojo', 'Verde, blanco y rojo', 'Azul, blanco y amarillo'],
    correct: 1,
    explanation: { correct: 'La bandera de Colombia tiene tres franjas horizontales: amarillo (riqueza), azul (oc\u00e9anos) y rojo (sangre derramada por la independencia).', wrongs: ['Esa es la bandera de Pa\u00edses Bajos', 'Opci\u00f3n correcta', 'Esa es la bandera de Italia o M\u00e9xico', 'Esa es la bandera de Argentina'] }
  },
  {
    id: 'SC57', area: 'sociales', areaName: 'Sociales y Ciudadan\u00eda', difficulty: 'media',
    context: `"Seg\u00fan la CEPAL, Am\u00e9rica Latina es la regi\u00f3n m\u00e1s desigual del mundo. El 10% m\u00e1s rico de la poblaci\u00f3n concentra el 54% de los ingresos, mientras que el 50% m\u00e1s pobre apenas recibe el 10%."`,
    question: `El texto afirma que Am\u00e9rica Latina se caracteriza por:`,
    options: ['La igualdad econ\u00f3mica', 'Ser la regi\u00f3n m\u00e1s desigual del mundo', 'Tener ingresos equilibrados', 'La pobreza inexistente'],
    correct: 1,
    explanation: { correct: 'El texto dice que "Am\u00e9rica Latina es la regi\u00f3n m\u00e1s desigual del mundo" y presenta cifras que lo demuestran.', wrongs: ['Las cifras muestran gran desigualdad', 'Opci\u00f3n correcta', 'Hay una gran brecha entre ricos y pobres', 'La pobreza es un problema grave en la regi\u00f3n'] }
  },
  {
    id: 'SC58', area: 'sociales', areaName: 'Sociales y Ciudadan\u00eda', difficulty: 'dificil',
    question: `El "neoliberalismo" como modelo econ\u00f3mico propugna:`,
    options: ['El control estatal de la econom\u00eda', 'La reducci\u00f3n del Estado, privatizaciones y libre mercado', 'La propiedad colectiva de los medios de producci\u00f3n', 'El proteccionismo comercial'],
    correct: 1,
    explanation: { correct: 'El neoliberalismo promueve la reducci\u00f3n del Estado, privatizaci\u00f3n de empresas p\u00fablicas, desregulaci\u00f3n, apertura comercial y libre mercado.', wrongs: ['Eso es socialismo o keynesianismo', 'Opci\u00f3n correcta', 'Eso es comunismo o socialismo', 'El neoliberalismo promueve libre comercio'] }
  },
  {
    id: 'SC59', area: 'sociales', areaName: 'Sociales y Ciudadan\u00eda', difficulty: 'facil',
    question: `La Corte Constitucional de Colombia se encarga de:`,
    options: ['Juzgar al Presidente', 'Velar por la integridad de la Constituci\u00f3n mediante la revisi\u00f3n de leyes', 'Administrar las elecciones', 'Recaudar impuestos'],
    correct: 1,
    explanation: { correct: 'La Corte Constitucional es el m\u00e1ximo tribunal en materia constitucional. Revisa la constitucionalidad de las leyes y protege los derechos fundamentales mediante tutelas.', wrongs: ['Eso es funci\u00f3n del Senado (juicio pol\u00edtico)', 'Opci\u00f3n correcta', 'Esa es funci\u00f3n de la Registradur\u00eda', 'Esa es funci\u00f3n de la DIAN'] }
  },

  // ===== CIENCIAS NATURALES - BLOQUE 4 (CN32-CN61) =====
  {
    id: 'CN32', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
    context: `En un laboratorio, se inyecta a un rat\u00f3n una peque\u00f1a cantidad de una toxina bacteriana. El rat\u00f3n sobrevive. Semanas despu\u00e9s, se le inyecta una dosis letal de la misma toxina y el rat\u00f3n sobrevive nuevamente.`,
    question: `La segunda inyecci\u00f3n no afecta al rat\u00f3n porque su sistema inmune:`,
    options: ['Hab\u00eda eliminado la toxina por el h\u00edgado', 'Produjo anticuerpos espec\u00edficos contra la toxina en la primera exposici\u00f3n', 'Desarroll\u00f3 tolerancia general a todas las toxinas', 'Se acostumbr\u00f3 a la toxina por exposici\u00f3n repetida'],
    correct: 1,
    explanation: { correct: 'El sistema inmunitario adaptativo produce anticuerpos espec\u00edficos contra ant\u00edgenos extra\u00f1os. Tras la primera exposici\u00f3n, se generan c\u00e9lulas de memoria que permiten una respuesta r\u00e1pida y efectiva en exposiciones posteriores, inmunizando al organismo contra esa toxina espec\u00edfica.', wrongs: ['El h\u00edgado desintoxica pero no genera inmunidad espec\u00edfica', 'Opci\u00f3n correcta', 'La inmunidad es espec\u00edfica, no general contra todas las toxinas', 'La exposici\u00f3n genera inmunidad espec\u00edfica, no habituaci\u00f3n'] }
  },
  {
    id: 'CN33', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
    context: `Un estudiante acerca una br\u00fajula a un cable conductor por el que circula corriente el\u00e9ctrica. La aguja de la br\u00fajula se desv\u00eda.`,
    question: `La desviaci\u00f3n de la aguja de la br\u00fajula demuestra que:`,
    options: ['El cable est\u00e1 caliente', 'La corriente el\u00e9ctrica genera un campo magn\u00e9tico a su alrededor', 'La br\u00fajula est\u00e1 defectuosa', 'El cable est\u00e1 cargado est\u00e1ticamente'],
    correct: 1,
    explanation: { correct: 'Hans Christian \u00d8rsted descubri\u00f3 en 1820 que una corriente el\u00e9ctrica genera un campo magn\u00e9tico a su alrededor. Este principio es la base del electromagnetismo y permite el funcionamiento de motores el\u00e9ctricos y electroimanes.', wrongs: ['El calor no desv\u00eda una br\u00fajula', 'Opci\u00f3n correcta', 'La desviaci\u00f3n demuestra la relaci\u00f3n entre electricidad y magnetismo', 'La corriente en movimiento genera campo magn\u00e9tico, no carga est\u00e1tica'] }
  },
  {
    id: 'CN34', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
    context: `En el laboratorio, se hace reaccionar hidr\u00f3geno (H\u2082) con ox\u00edgeno (O\u2082) para producir agua. La ecuaci\u00f3n balanceada es: 2H\u2082 + O\u2082 \u2192 2H\u2082O. Se tienen 4 gramos de H\u2082 y 32 gramos de O\u2082. (Masas at\u00f3micas: H=1, O=16).`,
    question: `4 gramos de H\u2082 son 2 moles de H\u2082 y 32 gramos de O\u2082 son 1 mol de O\u2082. \u00bfCu\u00e1ntos moles de agua se producir\u00e1n?`,
    options: ['1 mol', '2 moles', '3 moles', '4 moles'],
    correct: 1,
    explanation: { correct: 'Seg\u00fan la ecuaci\u00f3n, 2 moles de H\u2082 reaccionan con 1 mol de O\u2082 para producir 2 moles de H\u2082O. Como tenemos exactamente 2 moles de H\u2082 y 1 mol de O\u2082, se producen 2 moles de H\u2082O (36 gramos). No hay reactivo limitante.', wrongs: ['Los coeficientes estequiom\u00e9tricos indican 2 moles de H\u2082O', 'Opci\u00f3n correcta', 'Solo se producen 2 moles seg\u00fan la relaci\u00f3n 2:1:2', 'La relaci\u00f3n es exacta: 2 H\u2082 + 1 O\u2082 \u2192 2 H\u2082O'] }
  },
  {
    id: 'CN35', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
    context: `Una persona toca accidentalmente una superficie caliente y retira la mano inmediatamente, antes de sentir conscientemente el dolor.`,
    question: `Este movimiento de retirada es un reflejo que:`,
    options: ['Requiere procesamiento consciente en el cerebro', 'Es coordinado por la m\u00e9dula espinal sin intervenci\u00f3n cerebral', 'Ocurre solo despu\u00e9s de sentir dolor', 'Es voluntario y aprendido'],
    correct: 1,
    explanation: { correct: 'El arco reflejo es una respuesta r\u00e1pida e involuntaria. Los receptores env\u00edan la se\u00f1al a la m\u00e9dula espinal, que env\u00eda una se\u00f1al motora directa para retirar la mano antes de que la se\u00f1al llegue al cerebro para procesar la sensaci\u00f3n de dolor.', wrongs: ['Es involuntario y no requiere procesamiento consciente', 'Opci\u00f3n correcta', 'El movimiento ocurre ANTES de sentir el dolor consciente', 'Es involuntario e innato, no aprendido'] }
  },
  {
    id: 'CN36', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
    context: `Un buceador se sumerge en el mar. A medida que desciende, siente presi\u00f3n en los o\u00eddos. A 10 metros de profundidad, la presi\u00f3n es el doble que en la superficie.`,
    question: `La presi\u00f3n que siente el buceador en los o\u00eddos aumenta con la profundidad porque:`,
    options: ['La temperatura del agua disminuye', 'El peso del agua sobre \u00e9l aumenta con la profundidad', 'El ox\u00edgeno se vuelve m\u00e1s denso', 'Los peces generan ondas de presi\u00f3n'],
    correct: 1,
    explanation: { correct: 'La presi\u00f3n hidrost\u00e1tica aumenta con la profundidad porque el peso de la columna de agua sobre el buceador es mayor. Cada 10 metros de profundidad en agua a\u00f1ade aproximadamente 1 atm\u00f3sfera de presi\u00f3n (101.325 kPa).', wrongs: ['La temperatura afecta la densidad pero no es la causa principal del aumento de presi\u00f3n', 'Opci\u00f3n correcta', 'La composici\u00f3n del aire no cambia con la profundidad', 'Los peces no generan presi\u00f3n relevante'] }
  },
  {
    id: 'CN37', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
    context: `En una olla con agua hirviendo, se observan burbujas que suben a la superficie y escapa vapor. Si se coloca una tapa fr\u00eda sobre la olla, se forman gotitas de agua en su superficie.`,
    question: `La formaci\u00f3n de gotitas en la tapa fr\u00eda se debe al proceso de:`,
    options: ['Evaporaci\u00f3n', 'Condensaci\u00f3n', 'Sublimaci\u00f3n', 'Fusi\u00f3n'],
    correct: 1,
    explanation: { correct: 'La condensaci\u00f3n es el cambio de estado de gas a l\u00edquido. El vapor de agua caliente entra en contacto con la superficie fr\u00eda de la tapa, pierde energ\u00eda t\u00e9rmica y se convierte en gotitas de agua l\u00edquida.', wrongs: ['La evaporaci\u00f3n es de l\u00edquido a gas, ocurre en la olla no en la tapa', 'Opci\u00f3n correcta', 'La sublimaci\u00f3n es de s\u00f3lido a gas directamente', 'La fusi\u00f3n es de s\u00f3lido a l\u00edquido'] }
  },
  {
    id: 'CN38', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
    context: `Un bi\u00f3logo encuentra un organismo desconocido: es unicelular, tiene n\u00facleo definido (eucariota) y no tiene pared celular. Se mueve mediante pseud\u00f3podos y se alimenta por fagocitosis.`,
    question: `Este organismo probablemente pertenece al reino:`,
    options: ['Plantae', 'Animalia', 'Protista', 'Fungi'],
    correct: 2,
    explanation: { correct: 'Los protistas son eucariotas unicelulares (o simples pluricelulares sin tejidos) que no encajan en los otros reinos. Las amebas, que se mueven por pseud\u00f3podos y se alimentan por fagocitosis, son un ejemplo cl\u00e1sico del reino Protista.', wrongs: ['Plantae son pluricelulares con pared celular y fotos\u00edntesis', 'Animalia son pluricelulares con tejidos', 'Opci\u00f3n correcta', 'Fungi tiene pared celular de quitina y son heter\u00f3trofos por absorci\u00f3n'] }
  },
  {
    id: 'CN39', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
    context: `Un trabajador de la construcci\u00f3n levanta un ladrillo de 2 kg desde el suelo hasta una altura de 1.5 metros usando una polea. Luego lo sostiene a esa altura mientras espera. (g = 10 m/s\u00b2).`,
    question: `El trabajo realizado por el trabajador al levantar el ladrillo es de:`,
    options: ['3 J', '20 J', '30 J', '0 J'],
    correct: 2,
    explanation: { correct: 'Trabajo = Fuerza \u00d7 distancia = (m\u00b7g) \u00d7 h = (2 \u00d7 10) \u00d7 1.5 = 20 \u00d7 1.5 = 30 J. Al sostenerlo sin desplazamiento, no se realiza trabajo adicional porque no hay movimiento.', wrongs: ['Calculaste 2 \u00d7 1.5 = 3, olvidando la gravedad', 'Calculaste m\u00b7g = 20 pero sin multiplicar por la altura', 'Opci\u00f3n correcta', 'S\u00ed hay trabajo al levantar: fuerza \u00d7 distancia'] }
  },
  {
    id: 'CN40', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
    context: `En una central nuclear, el uranio-235 absorbe un neutr\u00f3n y se divide en n\u00facleos m\u00e1s peque\u00f1os (como cript\u00f3n-92 y bario-141), liberando 3 neutrones y una gran cantidad de energ\u00eda.`,
    question: `Este proceso se conoce como:`,
    options: ['Fusi\u00f3n nuclear', 'Fisi\u00f3n nuclear', 'Radiactividad natural', 'Transmutaci\u00f3n alqu\u00edmica'],
    correct: 1,
    explanation: { correct: 'La fisi\u00f3n nuclear es la divisi\u00f3n de un n\u00facleo pesado en n\u00facleos m\u00e1s peque\u00f1os, liberando neutrones y energ\u00eda. Los neutrones liberados pueden provocar m\u00e1s fisiones, generando una reacci\u00f3n en cadena controlada en los reactores nucleares.', wrongs: ['La fusi\u00f3n une n\u00facleos ligeros, no divide pesados', 'Opci\u00f3n correcta', 'La radiactividad natural es espont\u00e1nea, no inducida por neutrones', 'La transmutaci\u00f3n es un concepto antiguo de cambiar elementos'] }
  },
  {
    id: 'CN41', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
    context: `Se coloca una rodaja de papa en un recipiente con agua destilada y otra rodaja id\u00e9ntica en un recipiente con agua muy salada. Despu\u00e9s de una hora, la papa en agua destilada est\u00e1 firme y la de agua salada est\u00e1 blanda y arrugada.`,
    question: `El cambio en la papa sumergida en agua salada se debe al fen\u00f3meno de:`,
    options: ['Difusi\u00f3n simple', '\u00d3smosis: el agua sali\u00f3 de las c\u00e9lulas de la papa hacia el medio hipert\u00f3nico', 'Transporte activo', 'Fagocitosis'],
    correct: 1,
    explanation: { correct: 'La \u00f3smosis es el movimiento de agua a trav\u00e9s de una membrana semipermeable desde una zona de menor concentraci\u00f3n de solutos (hipot\u00f3nica) a una de mayor concentraci\u00f3n (hipert\u00f3nica). El agua salada es hipert\u00f3nica respecto al interior de las c\u00e9lulas de la papa, por lo que el agua sale de las c\u00e9lulas y la papa se arruga.', wrongs: ['La difusi\u00f3n simple mueve solutos, no agua', 'Opci\u00f3n correcta', 'El transporte activo requiere energ\u00eda y mueve solutos contra gradiente', 'La fagocitosis es para part\u00edculas grandes'] }
  },
  {
    id: 'CN42', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
    context: `Al colocar una cuchara met\u00e1lica en una taza de caf\u00e9 caliente, despu\u00e9s de un minuto el extremo de la cuchara que est\u00e1 fuera del caf\u00e9 tambi\u00e9n se calienta.`,
    question: `La transferencia de calor a lo largo de la cuchara ocurre principalmente por:`,
    options: ['Conducci\u00f3n t\u00e9rmica', 'Convecci\u00f3n', 'Radiaci\u00f3n', 'Evaporaci\u00f3n'],
    correct: 0,
    explanation: { correct: 'La conducci\u00f3n es la transferencia de calor a trav\u00e9s de un material s\u00f3lido sin movimiento de materia. Los metales son buenos conductores t\u00e9rmicos porque los electrones libres transfieren energ\u00eda cin\u00e9tica entre \u00e1tomos vecinos.', wrongs: ['La convecci\u00f3n ocurre en fluidos (l\u00edquidos y gases)', 'La radiaci\u00f3n es mediante ondas electromagn\u00e9ticas', 'La evaporaci\u00f3n es un cambio de fase, no un mecanismo de conducci\u00f3n en s\u00f3lidos'] }
  },
  {
    id: 'CN43', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
    context: `En la tabla peri\u00f3dica, el fl\u00faor (F, Z=9) est\u00e1 en el per\u00edodo 2 y grupo 17. El cloro (Cl, Z=17) est\u00e1 en el per\u00edodo 3 y grupo 17. Ambos reaccionan violentamente con metales alcalinos.`,
    question: `El cloro es menos reactivo que el fl\u00faor debido a que:`,
    options: ['Tiene menos protones', 'Su radio at\u00f3mico es mayor y atrae electrones con menos fuerza', 'Tiene mayor masa at\u00f3mica', 'Est\u00e1 en el mismo grupo que el fl\u00faor'],
    correct: 1,
    explanation: { correct: 'Al bajar en un grupo, el radio at\u00f3mico aumenta porque hay m\u00e1s capas electr\u00f3nicas. Esto hace que la atracci\u00f3n del n\u00facleo sobre los electrones externos sea menor (menor electronegatividad) y, por tanto, la reactividad de los hal\u00f3genos disminuye al descender en el grupo.', wrongs: ['El Cl tiene m\u00e1s protones que el F', 'Opci\u00f3n correcta', 'La masa at\u00f3mica no determina la reactividad directa', 'Eso explica la similitud qu\u00edmica, no la diferencia de reactividad'] }
  },
  {
    id: 'CN44', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
    context: `En un bosque tropical, se identifican los siguientes organismos: orugas que comen hojas, aves que comen orugas y serpientes que cazan aves. Todos los organismos mueren y son descompuestos por hongos y bacterias.`,
    question: `En esta cadena tr\u00f3fica, las aves ocupan el nivel de:`,
    options: ['Productores', 'Consumidores primarios', 'Consumidores secundarios', 'Descomponedores'],
    correct: 2,
    explanation: { correct: 'Las aves que se alimentan de orugas (que comen plantas) son consumidores secundarios o carn\u00edvoros de primer orden. Las plantas son productores, las orugas consumidores primarios, las aves consumidores secundarios y las serpientes terciarios.', wrongs: ['Los productores son las plantas (fotos\u00edntesis)', 'Los consumidores primarios son las orugas (herb\u00edvoros)', 'Opci\u00f3n correcta', 'Los descomponedores son hongos y bacterias'] }
  },
  {
    id: 'CN45', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
    context: `Un electricista necesita instalar un bombillo en un pasillo largo. Tiene dos opciones: conectar el bombillo a un toma corriente cercano con un cable largo de cobre, o instalar un nuevo toma corriente cerca del bombillo.`,
    question: `Si usa un cable muy largo y delgado para conectar el bombillo, es probable que el bombillo ilumine menos porque:`,
    options: ['La corriente alterna se vuelve directa', 'El cable largo tiene mayor resistencia que reduce la corriente', 'El voltaje de la casa disminuye autom\u00e1ticamente', 'El cable absorbe la luz'],
    correct: 1,
    explanation: { correct: 'La resistencia de un cable es directamente proporcional a su longitud e inversamente proporcional a su \u00e1rea transversal (R = \u03c1L/A). Un cable m\u00e1s largo tiene mayor resistencia, lo que reduce la corriente que llega al bombillo seg\u00fan la ley de Ohm (I = V/R).', wrongs: ['La corriente sigue siendo alterna', 'Opci\u00f3n correcta', 'El voltaje de la casa es constante (110 V en Colombia)', 'El cable no absorbe la luz'] }
  },
  {
    id: 'CN46', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
    context: `Un globo inflado con helio se eleva en la atm\u00f3sfera. A medida que asciende, la presi\u00f3n atmosf\u00e9rica disminuye y el globo se expande hasta que finalmente explota a gran altitud.`,
    question: `La expansi\u00f3n del globo al ascender se explica por la ley de:`,
    options: ['Charles (volumen proporcional a temperatura)', 'Boyle (volumen inversamente proporcional a presi\u00f3n a temperatura constante)', 'Gay-Lussac (presi\u00f3n proporcional a temperatura)', 'Avogadro (volumen proporcional a moles)'],
    correct: 1,
    explanation: { correct: 'La ley de Boyle establece que, a temperatura constante, la presi\u00f3n y el volumen de un gas son inversamente proporcionales (P\u2081V\u2081 = P\u2082V\u2082). Al ascender, la presi\u00f3n externa disminuye y el volumen del helio aumenta. Si la expansi\u00f3n es excesiva, el globo revienta.', wrongs: ['Charles relaciona volumen y temperatura, pero la temperatura tambi\u00e9n cambia con la altitud', 'Opci\u00f3n correcta', 'Gay-Lussac relaciona presi\u00f3n y temperatura a volumen constante', 'Avogadro relaciona volumen con cantidad de sustancia'] }
  },
  {
    id: 'CN47', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
    context: `Un ge\u00f3logo encuentra en una monta\u00f1a una roca que contiene f\u00f3siles marinos. Cerca de all\u00ed, encuentra otra roca de aspecto cristalino sin f\u00f3siles que parece haber sido formada por enfriamiento de magma.`,
    question: `La roca con f\u00f3siles marinos es de tipo:`,
    options: ['\u00cdgnea (formada por magma)', 'Metam\u00f3rfica (transformada por presi\u00f3n y calor)', 'Sedimentaria (formada por acumulaci\u00f3n de sedimentos)', 'Volc\u00e1nica (expulsada por un volc\u00e1n)'],
    correct: 2,
    explanation: { correct: 'Las rocas sedimentarias se forman por la acumulaci\u00f3n y compactaci\u00f3n de sedimentos, que pueden incluir restos de organismos (f\u00f3siles). Las rocas \u00edgneas se forman por enfriamiento de magma y generalmente no contienen f\u00f3siles porque el calor los destruye.', wrongs: ['Las rocas \u00edgneas no preservan f\u00f3siles por el calor del magma', 'Las rocas metam\u00f3rficas pueden tener f\u00f3siles raramente, pero no es su origen', 'Opci\u00f3n correcta', 'Las rocas volc\u00e1nicas son \u00edgneas extrusivas, no preservan f\u00f3siles'] }
  },
  {
    id: 'CN48', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
    context: `La especie humana tiene 23 pares de cromosomas (46 en total) en sus c\u00e9lulas som\u00e1ticas. Los gametos (\u00f3vulos y espermatozoides) tienen la mitad de cromosomas.`,
    question: `Los gametos humanos tienen 23 cromosomas porque se forman mediante:`,
    options: ['Mitosis, que duplica el n\u00famero de cromosomas', 'Meiosis, que reduce el n\u00famero de cromosomas a la mitad', 'Fisi\u00f3n binaria, que divide la c\u00e9lula en dos', 'Gemaci\u00f3n, que produce c\u00e9lulas hijas m\u00e1s peque\u00f1as'],
    correct: 1,
    explanation: { correct: 'La meiosis es un tipo de divisi\u00f3n celular que produce cuatro c\u00e9lulas hijas con la mitad del n\u00famero de cromosomas (n). En humanos, esto produce gametos con 23 cromosomas. Cuando el \u00f3vulo (n) y el espermatozoide (n) se fusionan, restauran el n\u00famero diploide (2n = 46).', wrongs: ['La mitosis produce c\u00e9lulas hijas id\u00e9nticas con 46 cromosomas', 'Opci\u00f3n correcta', 'La fisi\u00f3n binaria es t\u00edpica de bacterias, no de c\u00e9lulas humanas', 'La gemaci\u00f3n es un tipo de reproducci\u00f3n asexual'] }
  },
  {
    id: 'CN49', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
    context: `En un concierto al aire libre, una persona que est\u00e1 lejos del escenario escucha el sonido de la guitarra unos segundos despu\u00e9s de ver al m\u00fasico tocar las cuerdas.`,
    question: `El retraso entre lo que se ve y lo que se escucha ocurre porque:`,
    options: ['La luz viaja m\u00e1s lenta que el sonido', 'El sonido viaja m\u00e1s lento que la luz (340 m/s vs 300,000 km/s)', 'Los ojos procesan m\u00e1s r\u00e1pido que los o\u00eddos', 'La distancia afecta m\u00e1s a la luz que al sonido'],
    correct: 1,
    explanation: { correct: 'La velocidad del sonido en el aire es aproximadamente 340 m/s, mientras que la luz viaja a 300,000 km/s. Por eso vemos casi instant\u00e1neamente el evento, pero el sonido tarda en llegar. Por cada 3 segundos de retraso, la distancia es aproximadamente 1 km.', wrongs: ['La luz es much\u00edsimo m\u00e1s r\u00e1pida que el sonido', 'Opci\u00f3n correcta', 'El retraso es f\u00edsico (velocidad de propagaci\u00f3n), no perceptual', 'La luz es tan r\u00e1pida que el retraso es imperceptible'] }
  },
  {
    id: 'CN50', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
    context: `Un clavo de hierro (Fe) se deja al aire libre y con el tiempo se cubre de una capa marr\u00f3n-rojiza de \u00f3xido de hierro (Fe\u2082O\u2083). El hierro reacciona con el ox\u00edgeno del aire en presencia de agua.`,
    question: `En el proceso de oxidaci\u00f3n del hierro, el Fe:`,
    options: ['Gana electrones (se reduce)', 'Pierde electrones (se oxida)', 'No cambia su estado de oxidaci\u00f3n', 'Se convierte en hierro puro'],
    correct: 1,
    explanation: { correct: 'La oxidaci\u00f3n es la p\u00e9rdida de electrones. El hierro met\u00e1lico (Fe\u2070) pierde electrones y se convierte en Fe\u00b3\u207a en el \u00f3xido f\u00e9rrico. El ox\u00edgeno gana esos electrones (se reduce). La oxidaci\u00f3n del hierro es un proceso electroqu\u00edmico que se acelera en presencia de agua y sales.', wrongs: ['Ganar electrones es reducci\u00f3n, lo opuesto a la oxidaci\u00f3n', 'Opci\u00f3n correcta', 'El hierro pasa de Fe\u2070 a Fe\u00b3\u207a, claramente cambia', 'El hierro se transforma en \u00f3xido, no en hierro puro'] }
  },
  {
    id: 'CN51', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
    context: `Una persona con fiebre (39\u00b0C) tiene las enzimas de su cuerpo funcionando m\u00e1s r\u00e1pido de lo normal. Sin embargo, si la fiebre supera los 42\u00b0C, las enzimas comienzan a dejar de funcionar y el organismo puede sufrir da\u00f1o grave.`,
    question: `Las enzimas dejan de funcionar a temperaturas muy altas porque:`,
    options: ['Se congelan', 'Se desnaturalizan: pierden su estructura tridimensional y su funci\u00f3n', 'Se multiplican excesivamente', 'Consumen todo el sustrato disponible'],
    correct: 1,
    explanation: { correct: 'Las enzimas son prote\u00ednas con una estructura tridimensional espec\u00edfica (sitio activo). El calor excesivo rompe los enlaces d\u00e9biles (puentes de hidr\u00f3geno, interacciones hidrof\u00f3bicas) que mantienen esa estructura, desnaturalizando la enzima y haci\u00e9ndola perder su funci\u00f3n catal\u00edtica. Generalmente esto es irreversible.', wrongs: ['La fiebre alta calienta, no enfr\u00eda', 'Opci\u00f3n correcta', 'El calor no aumenta la cantidad de enzimas', 'El sustrato no se agota por la fiebre; las enzimas se da\u00f1an estructuralmente'] }
  },
  {
    id: 'CN52', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
    context: `Dos patinadores sobre hielo, uno de 80 kg y otro de 40 kg, est\u00e1n inicialmente en reposo frente a frente. Se empujan mutuamente y se separan.`,
    question: `Despu\u00e9s del empuj\u00f3n, la velocidad del patinador de 40 kg es el doble que la del de 80 kg porque se conserva:`,
    options: ['La energ\u00eda cin\u00e9tica total', 'El momento lineal (cantidad de movimiento)', 'La energ\u00eda potencial', 'La fuerza aplicada'],
    correct: 1,
    explanation: { correct: 'La conservaci\u00f3n del momento lineal (p = mv) establece que el momento total antes y despu\u00e9s es el mismo. Antes: p = 0. Despu\u00e9s: m\u2081v\u2081 + m\u2082v\u2082 = 0 \u2192 80\u00b7v\u2081 + 40\u00b7v\u2082 = 0 \u2192 40\u00b7v\u2082 = -80\u00b7v\u2081 \u2192 v\u2082 = -2v\u2081. Las velocidades tienen direcciones opuestas y la masa menor tiene el doble de velocidad.', wrongs: ['La energ\u00eda cin\u00e9tica no se conserva en choques inel\u00e1sticos, pero el momento s\u00ed', 'Opci\u00f3n correcta', 'La energ\u00eda potencial no cambia (no hay cambio de altura)', 'La fuerza que cada uno aplica al otro es igual (3ra ley de Newton)'] }
  },
  {
    id: 'CN53', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
    context: `En un recipiente cerrado se introduce N\u2082O\u2084 (gas incoloro) que se descompone parcialmente en NO\u2082 (gas pardo-rojizo), estableci\u00e9ndose el equilibrio: N\u2082O\u2084(g) \u21cc 2NO\u2082(g). Al calentar el recipiente, el color se intensifica.`,
    question: `La intensificaci\u00f3n del color al calentar indica que la reacci\u00f3n directa (formaci\u00f3n de NO\u2082) es:`,
    options: ['Exot\u00e9rmica (libera calor)', 'Endot\u00e9rmica (absorbe calor)', 'Catalizada por el calor', 'Independiente de la temperatura'],
    correct: 1,
    explanation: { correct: 'Si al aumentar la temperatura (calentar) el equilibrio se desplaza hacia la formaci\u00f3n de m\u00e1s NO\u2082 (color pardo), seg\u00fan el principio de Le Chatelier, la reacci\u00f3n directa debe ser endot\u00e9rmica (absorbe calor). El sistema se desplaza en la direcci\u00f3n que absorbe el calor a\u00f1adido, contrarrestando el cambio.', wrongs: ['Si fuera exot\u00e9rmica, al calentar se desplazar\u00eda hacia reactivos', 'Opci\u00f3n correcta', 'El calor no cataliza, desplaza el equilibrio', 'El principio de Le Chatelier muestra que la temperatura s\u00ed afecta el equilibrio'] }
  },
  {
    id: 'CN54', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
    context: `En la regi\u00f3n Caribe colombiana, la temporada seca va de diciembre a abril y la temporada de lluvias de mayo a noviembre. Los vientos alisios del noreste traen humedad desde el mar Caribe.`,
    question: `Las lluvias en la regi\u00f3n Caribe colombiana se producen principalmente por:`,
    options: ['El derretimiento de los glaciares', 'La evaporaci\u00f3n del agua del mar Caribe y los vientos que transportan la humedad', 'La contaminaci\u00f3n atmosf\u00e9rica', 'Los terremotos submarinos'],
    correct: 1,
    explanation: { correct: 'Las lluvias en el Caribe colombiano se deben a la evaporaci\u00f3n del agua del mar Caribe y el Oc\u00e9ano Atl\u00e1ntico. Los vientos alisios transportan el aire h\u00famedo hacia el continente, donde asciende, se enfr\u00eda y condensa formando nubes y precipitaciones. La Zona de Convergencia Intertropical (ZCIT) tambi\u00e9n influye en los per\u00edodos de lluvia.', wrongs: ['Los glaciares no derriten en el Caribe', 'Opci\u00f3n correcta', 'La contaminaci\u00f3n puede influir pero no es la causa principal', 'Los terremotos no producen lluvias'] }
  },
  {
    id: 'CN55', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
    context: `En el siglo XVIII, los marineros que pasaban largos meses en el mar sin frutas ni verduras frescas desarrollaban escorbuto, enfermedad que causa sangrado de enc\u00edas, debilidad y mala cicatrizaci\u00f3n.`,
    question: `El escorbuto se debe a la deficiencia de:`,
    options: ['Vitamina A', 'Vitamina C (\u00e1cido asc\u00f3rbico)', 'Vitamina D', 'Hierro'],
    correct: 1,
    explanation: { correct: 'El escorbuto es causado por deficiencia severa de vitamina C (\u00e1cido asc\u00f3rbico), necesaria para la s\u00edntesis de col\u00e1geno. Los marineros carec\u00edan de frutas c\u00edtricas en sus largos viajes. Los exploradores brit\u00e1nicos descubrieron que el jugo de lim\u00f3n preven\u00eda la enfermedad.', wrongs: ['La deficiencia de vitamina A causa ceguera nocturna', 'Opci\u00f3n correcta', 'La deficiencia de vitamina D causa raquitismo (deformidades \u00f3seas)', 'La deficiencia de hierro causa anemia'] }
  },
  {
    id: 'CN56', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
    context: `Un m\u00e9dico usa rayos X para tomar una radiograf\u00eda del brazo fracturado de un paciente. Los rayos X atraviesan los tejidos blandos pero son absorbidos por los huesos m\u00e1s densos.`,
    question: `Los rayos X se diferencian de la luz visible en que tienen:`,
    options: ['Menor velocidad en el vac\u00edo', 'Mayor frecuencia y menor longitud de onda', 'Mayor longitud de onda', 'Son ondas mec\u00e1nicas, no electromagn\u00e9ticas'],
    correct: 1,
    explanation: { correct: 'Los rayos X son ondas electromagn\u00e9ticas como la luz visible, pero con mucha mayor frecuencia (y por tanto menor longitud de onda). En el espectro EM, los rayos X est\u00e1n entre los ultravioleta y los rayos gamma. Su alta energ\u00eda les permite penetrar materia.', wrongs: ['Todas las ondas EM viajan a la misma velocidad en el vac\u00edo (c)', 'Opci\u00f3n correcta', 'Los rayos X tienen menor longitud de onda, no mayor', 'Son electromagn\u00e9ticas, no necesitan medio material para propagarse'] }
  },
  {
    id: 'CN57', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
    context: `El gas natural que se usa en las cocinas dom\u00e9sticas es principalmente metano (CH\u2084). Cuando el metano se quema en presencia de ox\u00edgeno, produce CO\u2082 y H\u2082O, liberando energ\u00eda para cocinar.`,
    question: `La combusti\u00f3n del metano es un ejemplo de reacci\u00f3n:`,
    options: ['De s\u00edntesis', 'De descomposici\u00f3n', 'De combusti\u00f3n (oxidaci\u00f3n completa)', 'De neutralizaci\u00f3n'],
    correct: 2,
    explanation: { correct: 'La combusti\u00f3n del metano: CH\u2084 + 2O\u2082 \u2192 CO\u2082 + 2H\u2082O + energ\u00eda. Es una reacci\u00f3n de oxidaci\u00f3n r\u00e1pida que produce di\u00f3xido de carbono, agua y calor. Se llama combusti\u00f3n completa cuando hay suficiente ox\u00edgeno para oxidar completamente el carbono e hidr\u00f3geno.', wrongs: ['La s\u00edntesis combina reactivos simples en un producto m\u00e1s complejo, no es el caso', 'La descomposici\u00f3n separa un compuesto en componentes m\u00e1s simples', 'Opci\u00f3n correcta', 'La neutralizaci\u00f3n es entre un \u00e1cido y una base produciendo sal y agua'] }
  },
  {
    id: 'CN58', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
    context: `Colombia es considerada el segundo pa\u00eds m\u00e1s biodiverso del mundo. En la selva amaz\u00f3nica colombiana, un solo \u00e1rbol puede albergar m\u00e1s especies de hormigas que todas las Islas Brit\u00e1nicas juntas.`,
    question: `La alta biodiversidad de Colombia se debe principalmente a:`,
    options: ['Su gran extensi\u00f3n territorial', 'Su ubicaci\u00f3n ecuatorial y su variedad de ecosistemas por los pisos t\u00e9rmicos', 'Su baja poblaci\u00f3n humana', 'Su aislamiento geogr\u00e1fico total'],
    correct: 1,
    explanation: { correct: 'Colombia tiene alta biodiversidad por su ubicaci\u00f3n en la zona ecuatorial (alta radiaci\u00f3n solar durante todo el a\u00f1o), su relieve diverso con tres cordilleras que crean m\u00faltiples pisos t\u00e9rmicos, y la variedad de ecosistemas: selvas, p\u00e1ramos, sabanas, manglares, arrecifes de coral y m\u00e1s.', wrongs: ['Colombia tiene el 0.7% de la superficie terrestre, no es especialmente extensa', 'Opci\u00f3n correcta', 'La poblaci\u00f3n humana es alta, no baja', 'Colombia tiene conexi\u00f3n con Centroam\u00e9rica, no est\u00e1 aislada'] }
  },
  {
    id: 'CN59', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
    context: `Un cubo de hielo flota en un vaso con agua. Si se observa con atenci\u00f3n, aproximadamente el 90% del hielo est\u00e1 sumergido y solo el 10% sobresale del agua.`,
    question: `El hielo flota en el agua porque:`,
    options: ['El hielo es m\u00e1s denso que el agua l\u00edquida', 'El hielo es menos denso que el agua l\u00edquida (el agua se expande al congelarse)', 'La tensi\u00f3n superficial del agua sostiene el hielo', 'El aire atrapado en el hielo lo hace flotar'],
    correct: 1,
    explanation: { correct: 'El agua es una de las pocas sustancias cuyo s\u00f3lido es menos denso que el l\u00edquido. Al congelarse, las mol\u00e9culas de agua forman una estructura cristalina hexagonal que ocupa m\u00e1s volumen, disminuyendo la densidad (0.92 g/cm\u00b3 vs 1.0 g/cm\u00b3 del agua l\u00edquida). Por eso flota, y solo el 10% sobresale.', wrongs: ['El hielo es menos denso, no m\u00e1s denso, que el agua l\u00edquida', 'Opci\u00f3n correcta', 'La tensi\u00f3n superficial ayuda a objetos peque\u00f1os, no es la raz\u00f3n principal', 'El hielo puro no tiene aire atrapado significativo'] }
  },
  {
    id: 'CN60', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
    context: `Una enfermera debe preparar una soluci\u00f3n de glucosa al 5% para un paciente. Disuelve 5 gramos de glucosa en agua destilada y completa hasta un volumen total de 100 mL de soluci\u00f3n.`,
    question: `La soluci\u00f3n preparada es al 5% (m/v). Si necesita 500 mL de esta soluci\u00f3n, \u00bfcu\u00e1ntos gramos de glucosa debe usar?`,
    options: ['5 g', '10 g', '25 g', '50 g'],
    correct: 2,
    explanation: { correct: 'Una soluci\u00f3n al 5% m/v significa 5 g de soluto por cada 100 mL de soluci\u00f3n. Para 500 mL: (5 g / 100 mL) \u00d7 500 mL = 5 \u00d7 5 = 25 gramos de glucosa.', wrongs: ['Esa es la cantidad para 100 mL', 'Esa ser\u00eda la cantidad para 200 mL', 'Opci\u00f3n correcta', 'Esa ser\u00eda la cantidad para 1 L (1,000 mL)'] }
  },
  {
    id: 'CN61', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
    context: `En un laboratorio de biotecnolog\u00eda, se inserta el gen de la insulina humana en el ADN de una bacteria. La bacteria, al reproducirse, produce insulina humana que puede ser recolectada y usada para tratar la diabetes.`,
    question: `Esta t\u00e9cnica se conoce como:`,
    options: ['Clonaci\u00f3n reproductiva', 'ADN recombinante y tecnolog\u00eda de ingenier\u00eda gen\u00e9tica', 'Terapia g\u00e9nica en humanos', 'Mutag\u00e9nesis inducida'],
    correct: 1,
    explanation: { correct: 'La tecnolog\u00eda de ADN recombinante consiste en insertar un gen de un organismo en el ADN de otro (generalmente una bacteria) para que produzca la prote\u00edna deseada. Las bacterias modificadas gen\u00e9ticamente se cultivan en grandes fermentadores y producen insulina humana a escala industrial.', wrongs: ['La clonaci\u00f3n produce copias gen\u00e9ticamente id\u00e9nticas de un organismo', 'Opci\u00f3n correcta', 'La terapia g\u00e9nica introduce genes en c\u00e9lulas humanas para tratar enfermedades', 'La mutag\u00e9nesis induce mutaciones aleatorias, no inserta genes espec\u00edficos'] }
  },

  // ===== INGLÉS - BLOQUE 4 (EN31-EN60) =====
  {
    id: 'EN31', area: 'ingles', areaName: 'Ingl\u00e9s', difficulty: 'facil',
    context: `Read the notice: "The train to Boston will depart from Platform 3 at 2:15 PM. Passengers with tickets should be at the platform 10 minutes before departure."`,
    question: `What time should passengers be at the platform?`,
    options: ['2:15 PM', '2:05 PM', '2:25 PM', '3:00 PM'],
    correct: 1,
    explanation: { correct: 'The notice says passengers should be at the platform "10 minutes before departure." Since departure is at 2:15 PM, 10 minutes before is 2:05 PM.', wrongs: ['This is the departure time, not the platform arrival time', 'Opci\u00f3n correcta', 'This is after the train departs', 'No information suggests 3:00 PM'] }
  },
  {
    id: 'EN32', area: 'ingles', areaName: 'Ingl\u00e9s', difficulty: 'media',
    context: `Read the text: "The Great Barrier Reef in Australia is the largest coral reef system in the world. It extends over 2,300 kilometers and is home to thousands of marine species. However, rising ocean temperatures due to climate change have caused coral bleaching, which threatens the reef's survival. Scientists warn that without significant action, up to 90% of coral reefs could disappear by 2050."`,
    question: `What is the main threat to the Great Barrier Reef mentioned in the text?`,
    options: ['Overfishing by commercial boats', 'Rising ocean temperatures causing coral bleaching', 'Tourists damaging the coral', 'Pollution from nearby cities'],
    correct: 1,
    explanation: { correct: 'The text states that "rising ocean temperatures due to climate change have caused coral bleaching, which threatens the reef\'s survival." This is identified as the primary danger.', wrongs: ['Overfishing is not mentioned in the text', 'Opci\u00f3n correcta', 'Tourists are not mentioned as a threat', 'City pollution is not discussed'] }
  },
  {
    id: 'EN33', area: 'ingles', areaName: 'Ingl\u00e9s', difficulty: 'dificil',
    context: `Read the email: "Dear Mr. Harrison, I am writing to express my concern about the proposed construction of a shopping mall in our neighborhood. While I understand the economic benefits, the increased traffic and noise would significantly affect residents' quality of life. Moreover, the construction would require cutting down over 200 mature trees. I urge the council to consider alternative locations. Sincerely, Margaret Thompson."`,
    question: `What is the main purpose of Margaret Thompson's email?`,
    options: ['To apply for a job at the new mall', 'To express opposition to a construction project', 'To ask for a construction permit', 'To report a traffic problem'],
    correct: 1,
    explanation: { correct: 'Margaret states she is "writing to express my concern about the proposed construction of a shopping mall" and lists negative effects, urging the council to consider alternatives. Her purpose is to oppose the project.', wrongs: ['She is a resident opposing construction, not applying for work', 'Opci\u00f3n correcta', 'She is expressing concern as a resident, not requesting a permit', 'Traffic is mentioned as a future concern, not a current problem to report'] }
  },
  {
    id: 'EN34', area: 'ingles', areaName: 'Ingl\u00e9s', difficulty: 'facil',
    context: `Notice in a hotel room: "Please hang towels you wish to reuse on the rack. Towels left on the floor will be replaced. Turn off lights and air conditioning when leaving the room to help us save energy."`,
    question: `What should guests do if they want to reuse their towels?`,
    options: ['Leave them on the floor', 'Hang them on the rack', 'Take them to the front desk', 'Put them in the laundry basket'],
    correct: 1,
    explanation: { correct: 'The notice says "Please hang towels you wish to reuse on the rack." This is the signal to hotel staff that the towel should not be replaced.', wrongs: ['Towels on the floor will be replaced, not reused', 'Opci\u00f3n correcta', 'The front desk is not mentioned for towels', 'A laundry basket is not mentioned'] }
  },
  {
    id: 'EN35', area: 'ingles', areaName: 'Ingl\u00e9s', difficulty: 'media',
    context: `Read the text: "Marie Curie was a Polish-born physicist and chemist. She conducted pioneering research on radioactivity, a term she herself coined. She was the first woman to win a Nobel Prize, the first person to win a Nobel Prize twice, and the only person to win a Nobel Prize in two different scientific fields: Physics (1903) and Chemistry (1911). She died in 1934 from aplastic anemia, likely caused by prolonged exposure to radiation."`,
    question: `Why is Marie Curie considered unique among Nobel Prize winners?`,
    options: ['She was the youngest Nobel laureate', 'She won Nobel Prizes in two different scientific fields', 'She discovered radiation', 'She won the Nobel Prize three times'],
    correct: 1,
    explanation: { correct: 'The text states she is "the only person to win a Nobel Prize in two different scientific fields: Physics and Chemistry." This makes her unique among all Nobel laureates.', wrongs: ['Age is not mentioned', 'Opci\u00f3n correcta', 'She did research on radioactivity but did not discover it', 'She won twice, not three times'] }
  },
  {
    id: 'EN36', area: 'ingles', areaName: 'Ingl\u00e9s', difficulty: 'dificil',
    context: `Read the text: "The term 'urban heat island' describes the phenomenon where urban areas are significantly warmer than their surrounding rural areas. This occurs because buildings, roads, and other infrastructure absorb and re-emit the sun's heat more than natural landscapes. Cities can be 1-7 degrees Fahrenheit warmer than nearby areas. Strategies to reduce this effect include planting more trees, creating green roofs, and using reflective building materials."`,
    question: `What causes urban areas to be warmer than rural areas according to the text?`,
    options: ['Factories produce more heat in cities', 'Buildings and roads absorb and re-emit more heat than natural surfaces', 'Cities are closer to the equator', 'There is more sunlight in urban areas'],
    correct: 1,
    explanation: { correct: 'The text states that buildings, roads, and infrastructure "absorb and re-emit the sun\'s heat more than natural landscapes," causing cities to be warmer than rural surroundings.', wrongs: ['Factories are not mentioned as the main cause', 'Opci\u00f3n correcta', 'Distance to equator is not discussed', 'Sunlight levels are not compared between urban and rural areas'] }
  },
  {
    id: 'EN37', area: 'ingles', areaName: 'Ingl\u00e9s', difficulty: 'facil',
    context: `Read the advertisement: "FreshFit smoothies: Made with 100% real fruit. No added sugar. Available in three flavors: Mango Tango, Berry Blast, and Green Power. Buy one, get one free every Tuesday!"`,
    question: `What special offer does FreshFit have on Tuesdays?`,
    options: ['50% off all smoothies', 'Buy one smoothie, get another free', 'Free delivery', 'A free smoothie with any purchase'],
    correct: 1,
    explanation: { correct: 'The ad says "Buy one, get one free every Tuesday!" This is a BOGO (buy one, get one) promotion.', wrongs: ['The offer is buy-one-get-one, not 50% off', 'Opci\u00f3n correcta', 'Delivery is not mentioned', 'The condition is buy one, not any purchase'] }
  },
  {
    id: 'EN38', area: 'ingles', areaName: 'Ingl\u00e9s', difficulty: 'media',
    context: `Read the blog post: "Tokyo is a city of contrasts. You can visit ancient temples in Asakusa in the morning and explore the high-tech electronics district of Akihabara in the afternoon. The city's public transportation system is incredibly efficient; trains arrive every few minutes and are almost always on time. However, during rush hour, some trains can be extremely crowded, with staff sometimes helping to push passengers into cars."`,
    question: `What does the author say about Tokyo's public transportation?`,
    options: ['It is unreliable and frequently delayed', 'It is efficient with frequent and punctual trains, though crowded at rush hour', 'It is too expensive for most residents', 'It only operates during the day'],
    correct: 1,
    explanation: { correct: 'The blog describes the system as "incredibly efficient" with trains arriving every few minutes and "almost always on time," while noting that rush hour can be very crowded.', wrongs: ['The text says trains are "almost always on time"', 'Opci\u00f3n correcta', 'Cost is not mentioned', 'The text implies trains run frequently throughout the day'] }
  },
  {
    id: 'EN39', area: 'ingles', areaName: 'Ingl\u00e9s', difficulty: 'dificil',
    context: `Read the story: "Elena had always dreamed of becoming a marine biologist. Growing up in a landlocked country, she had never seen the ocean, but she watched documentaries obsessively. When she finally moved to Australia for university, her first visit to the beach was overwhelming. 'I cried,' she later said. 'Not because I was sad, but because I had finally arrived where I belonged.' She is now a leading expert in coral reef conservation."`,
    question: `Why did Elena cry during her first visit to the beach?`,
    options: ['She was homesick for her landlocked country', 'She felt overwhelmed because the ocean was different from what she expected', 'She felt she had finally found where she belonged', 'She was afraid of the water'],
    correct: 2,
    explanation: { correct: 'Elena said she cried "not because I was sad, but because I had finally arrived where I belonged." The emotion came from realizing her dream and finding her true place.', wrongs: ['She specifically says she did not cry from sadness', 'She says it was not because of being overwhelmed', 'Opci\u00f3n correcta', 'Fear is not mentioned'] }
  },
  {
    id: 'EN40', area: 'ingles', areaName: 'Ingl\u00e9s', difficulty: 'facil',
    context: `Sign on a door: "Staff Only. Authorized personnel beyond this point. Visitors must report to the front desk for a visitor pass."`,
    question: `What should visitors do according to the sign?`,
    options: ['Enter without permission', 'Go to the front desk for a visitor pass', 'Wait outside the building', 'Call for an appointment'],
    correct: 1,
    explanation: { correct: 'The sign says "Visitors must report to the front desk for a visitor pass." This is the required procedure before proceeding.', wrongs: ['The sign restricts access for unauthorized people', 'Opci\u00f3n correcta', 'Waiting outside is not mentioned', 'Calling is not mentioned'] }
  },
  {
    id: 'EN41', area: 'ingles', areaName: 'Ingl\u00e9s', difficulty: 'media',
    context: `Read the article: "Finland consistently ranks among the happiest countries in the world. Researchers attribute this to several factors: strong social support systems, low corruption levels, freedom to make life choices, and a strong connection to nature. Finnish people also benefit from a comprehensive education system that emphasizes creativity and critical thinking over standardized testing."`,
    question: `According to the article, what contributes to happiness in Finland?`,
    options: ['High salaries and wealth', 'Social support, low corruption, freedom, and connection to nature', 'Warm weather year-round', 'Competitive standardized testing'],
    correct: 1,
    explanation: { correct: 'The article lists "strong social support systems, low corruption levels, freedom to make life choices, and a strong connection to nature" as factors behind Finland\'s happiness rankings.', wrongs: ['Wealth is not specifically mentioned', 'Opci\u00f3n correcta', 'Finland has cold winters, not warm weather', 'The education system emphasizes creativity over standardized testing'] }
  },
  {
    id: 'EN42', area: 'ingles', areaName: 'Ingl\u00e9s', difficulty: 'dificil',
    context: `Read the text: "In the field of artificial intelligence, the 'Turing test' was proposed by Alan Turing in 1950 to determine whether a machine can exhibit intelligent behavior indistinguishable from that of a human. If a human evaluator cannot reliably tell whether they are conversing with a machine or another human, the machine passes the test. Despite significant advances in AI, no program has definitively passed the Turing test in its original form, though some systems have come close."`,
    question: `What does passing the Turing test demonstrate about a machine?`,
    options: ['It can calculate faster than a human', 'Its behavior is indistinguishable from human behavior in conversation', 'It can feel emotions like a human', 'It can learn any task without programming'],
    correct: 1,
    explanation: { correct: 'The text says the test determines if a machine "can exhibit intelligent behavior indistinguishable from that of a human" in conversation. A human evaluator cannot reliably tell the difference between machine and human.', wrongs: ['Calculation speed is not part of the Turing test', 'Opci\u00f3n correcta', 'The test is about behavior, not emotions', 'The test is about conversation, not all tasks'] }
  },
  {
    id: 'EN43', area: 'ingles', areaName: 'Ingl\u00e9s', difficulty: 'facil',
    context: `Read the weather report: "Today will be partly cloudy with a high of 75 degrees Fahrenheit. There is a 30% chance of rain in the afternoon, so it might be a good idea to bring an umbrella just in case. Winds will be light from the southwest at 5 to 10 miles per hour."`,
    question: `What does the report suggest about the afternoon?`,
    options: ['There will definitely be a thunderstorm', 'There is a possibility of rain, so bring an umbrella', 'The weather will be sunny and clear', 'It will be very windy'],
    correct: 1,
    explanation: { correct: 'The report says there is "a 30% chance of rain in the afternoon" and suggests it "might be a good idea to bring an umbrella just in case," indicating possible but not certain rain.', wrongs: ['Only a 30% chance, not definite', 'Opci\u00f3n correcta', 'Partly cloudy is predicted', 'Winds are described as light (5-10 mph)'] }
  },
  {
    id: 'EN44', area: 'ingles', areaName: 'Ingl\u00e9s', difficulty: 'media',
    context: `Read the email: "Hi Tom, Thanks for inviting me to your birthday dinner on Saturday. I'd love to come! However, I have a soccer game that ends at 6 PM at the sports center on Oak Street. Would it be possible to arrive around 7 PM instead of 6? Let me know if that works. Best, Alex"`,
    question: `Why does Alex want to arrive at 7 PM instead of 6 PM?`,
    options: ['He does not like the restaurant', 'His soccer game ends at 6 PM and he needs time to get there', 'He has to work late on Saturday', 'He wants to avoid the crowd'],
    correct: 1,
    explanation: { correct: 'Alex explains he has "a soccer game that ends at 6 PM" and asks if he can arrive at 7 PM instead, implying he needs time to travel from the sports center to the dinner location.', wrongs: ['He says he would "love to come," showing he wants to attend', 'Opci\u00f3n correcta', 'Work is not mentioned', 'Crowds are not mentioned'] }
  },
  {
    id: 'EN45', area: 'ingles', areaName: 'Ingl\u00e9s', difficulty: 'dificil',
    context: `Read the text: "The concept of 'cultural lag' was introduced by sociologist William F. Ogburn in 1922. It refers to the idea that material culture (technology, tools, infrastructure) evolves faster than non-material culture (beliefs, values, norms). For example, while social media technology has advanced rapidly, our understanding of its effects on privacy and mental health has not kept pace, creating a gap or 'lag' between technological capability and cultural adaptation."`,
    question: `What does the author illustrate with the social media example?`,
    options: ['That social media is harmful to mental health', 'That technology advances faster than society\'s ability to adapt to it', 'That privacy laws are already well-developed', 'That cultural values determine technological progress'],
    correct: 1,
    explanation: { correct: 'The text uses social media to show how "our understanding of its effects on privacy and mental health has not kept pace" with technology, illustrating the gap (cultural lag) between material and non-material culture.', wrongs: ['The example focuses on the gap, not on declaring harm', 'Opci\u00f3n correcta', 'The text says understanding has not kept pace, implying laws are also lagging', 'Cultural lag is about technology outpacing culture, not the reverse'] }
  },
  {
    id: 'EN46', area: 'ingles', areaName: 'Ingl\u00e9s', difficulty: 'facil',
    context: `Read the menu description: "The Sunrise Breakfast: Two eggs cooked any style, served with crispy bacon, toast, and your choice of hash browns or fresh fruit. Includes unlimited coffee or tea. $12.99. Available until 11 AM."`,
    question: `Until what time is the Sunrise Breakfast available?`,
    options: ['All day', 'Until 11 AM', 'Until noon', 'Until 2 PM'],
    correct: 1,
    explanation: { correct: 'The menu says "Available until 11 AM," indicating the breakfast special is only served in the morning hours.', wrongs: ['The description gives a specific cutoff time', 'Opci\u00f3n correcta', 'The description says 11 AM, not noon', 'The description says 11 AM, not 2 PM'] }
  },
  {
    id: 'EN47', area: 'ingles', areaName: 'Ingl\u00e9s', difficulty: 'media',
    context: `Read the article: "Electric vehicles (EVs) are becoming increasingly popular worldwide. While EVs produce zero emissions while driving, their environmental impact depends on how the electricity used to charge them is generated. In countries where electricity comes mainly from coal, EVs may actually have a larger carbon footprint than hybrid cars. However, as renewable energy sources expand, the environmental benefits of EVs will continue to improve."`,
    question: `What determines the environmental impact of an electric vehicle according to the text?`,
    options: ['The speed at which it is driven', 'How the electricity used to charge it is generated', 'The size of the battery', 'The brand of the vehicle'],
    correct: 1,
    explanation: { correct: 'The text says the environmental impact "depends on how the electricity used to charge them is generated." In coal-powered grids, EVs may have a larger carbon footprint than hybrids.', wrongs: ['Driving speed is not discussed', 'Opci\u00f3n correcta', 'Battery size is not mentioned as a factor', 'Car brand is not mentioned'] }
  },
  {
    id: 'EN48', area: 'ingles', areaName: 'Ingl\u00e9s', difficulty: 'dificil',
    context: `Read the text: "In 1961, psychologist Stanley Milgram conducted an experiment at Yale University to study obedience to authority. Participants were told to administer electric shocks to another person (who was actually an actor) when they answered questions incorrectly. Despite hearing cries of pain, 65% of participants continued to the highest voltage level when instructed by the experimenter. Milgram concluded that ordinary people are likely to follow orders from an authority figure, even when those orders conflict with their personal conscience."`,
    question: `What was Milgram's main conclusion from his experiment?`,
    options: ['People enjoy causing pain to others', 'Ordinary people tend to obey authority figures even against their conscience', 'Electric shocks are an effective teaching method', 'Participants did not believe the shocks were real'],
    correct: 1,
    explanation: { correct: 'Milgram concluded that "ordinary people are likely to follow orders from an authority figure, even when those orders conflict with their personal conscience," as demonstrated by 65% of participants continuing to the highest voltage.', wrongs: ['The experiment was about obedience, not enjoyment of causing pain', 'Opci\u00f3n correcta', 'The experiment was about obedience, not teaching effectiveness', 'Whether participants believed the shocks is not Milgram\'s conclusion'] }
  },
  {
    id: 'EN49', area: 'ingles', areaName: 'Ingl\u00e9s', difficulty: 'facil',
    context: `Read the instruction: "To use the printer, first press the power button on the top right corner. Wait for the green light to stop blinking. Open the paper tray and insert up to 50 sheets of A4 paper. Adjust the paper guides to fit the paper width. Select 'Print' from your computer."`,
    question: `What should you do after the green light stops blinking?`,
    options: ['Press the power button', 'Open the paper tray and insert paper', 'Turn off the printer', 'Select "Print" from your computer'],
    correct: 1,
    explanation: { correct: 'The instructions say to wait for the green light, then "Open the paper tray and insert up to 50 sheets of A4 paper" as the next step after the printer is ready.', wrongs: ['Pressing power is the first step, done before the light', 'Opci\u00f3n correcta', 'Turning off is not part of the printing process', 'Selecting "Print" comes after loading paper'] }
  },
  {
    id: 'EN50', area: 'ingles', areaName: 'Ingl\u00e9s', difficulty: 'media',
    context: `Read the text: "The Amazon rainforest produces approximately 20% of the world's oxygen. Often called 'the lungs of the Earth,' it plays a crucial role in regulating the global climate by absorbing carbon dioxide. However, deforestation for agriculture and cattle ranching threatens this ecosystem. In the last 50 years, about 17% of the Amazon has been destroyed."`,
    question: `Why is the Amazon rainforest called "the lungs of the Earth"?`,
    options: ['Because it contains many medicinal plants', 'Because it produces oxygen and absorbs carbon dioxide', 'Because it is the largest forest on Earth', 'Because it is home to many animals'],
    correct: 1,
    explanation: { correct: 'The text says it "produces approximately 20% of the world\'s oxygen" and "plays a crucial role in regulating the global climate by absorbing carbon dioxide," analogous to how lungs exchange gases in the body.', wrongs: ['Medicinal plants are not mentioned', 'Opci\u00f3n correcta', 'Size alone is not why it is called "lungs"', 'Biodiversity is not mentioned'] }
  },
  {
    id: 'EN51', area: 'ingles', areaName: 'Ingl\u00e9s', difficulty: 'dificil',
    context: `Read the text: "In behavioral economics, the 'sunk cost fallacy' describes the tendency to continue investing in something simply because we have already invested resources, even when continuing is irrational. For example, someone might continue waiting for a late bus because they have already waited 30 minutes, even though taking a taxi would get them there faster. The rational decision should be based on future costs and benefits, not past ones that cannot be recovered."`,
    question: `What mistake does the sunk cost fallacy cause people to make?`,
    options: ['They save money by not taking taxis', 'They continue with a bad decision because they have already invested in it', 'They always choose the cheapest option', 'They plan all their decisions in advance'],
    correct: 1,
    explanation: { correct: 'The sunk cost fallacy is the "tendency to continue investing in something simply because we have already invested resources," like waiting longer for a late bus because of time already spent waiting, even when switching would be better.', wrongs: ['The bus example shows people DO take taxis too late', 'Opci\u00f3n correcta', 'The fallacy is about past investment, not cost', 'The fallacy is about irrational continuation, not planning'] }
  },
  {
    id: 'EN52', area: 'ingles', areaName: 'Ingl\u00e9s', difficulty: 'facil',
    context: `Read the notice: "Community Garden Work Day - Saturday, April 22nd from 9 AM to 1 PM. Help us plant flowers, trim trees, and clean the walking paths. Tools and refreshments provided. No experience necessary. All ages welcome!"`,
    question: `What will be provided for volunteers?`,
    options: ['Lunch and drinks', 'Tools and refreshments', 'Gardening gloves and hats', 'Free plants to take home'],
    correct: 1,
    explanation: { correct: 'The notice says "Tools and refreshments provided." Volunteers do not need to bring their own equipment.', wrongs: ['Only refreshments are mentioned, not full lunch', 'Opci\u00f3n correcta', 'Gloves and hats are not specifically listed', 'Taking plants home is not mentioned'] }
  },
  {
    id: 'EN53', area: 'ingles', areaName: 'Ingl\u00e9s', difficulty: 'media',
    context: `Read the text: "The Eiffel Tower in Paris was built in 1889 for the World's Fair. At the time, many artists and intellectuals criticized it as an eyesore. Writer Guy de Maupassant famously ate lunch at the tower's restaurant every day because, as he said, it was the only place in Paris where he could not see the tower. Today, the Eiffel Tower is one of the most visited monuments in the world and is universally recognized as a symbol of France."`,
    question: `Why did Guy de Maupassant eat at the Eiffel Tower restaurant every day?`,
    options: ['He loved the food there', 'It was the only place in Paris where he could not see the tower', 'He was a fan of modern architecture', 'He worked in the tower'],
    correct: 1,
    explanation: { correct: 'The text says Maupassant ate there because "it was the only place in Paris where he could not see the tower," showing his dislike for the structure, which he considered an eyesore.', wrongs: ['The reason was about the view, not the food', 'Opci\u00f3n correcta', 'He criticized the tower, so he was not a fan', 'He was a writer, not an employee there'] }
  },
  {
    id: 'EN54', area: 'ingles', areaName: 'Ingl\u00e9s', difficulty: 'dificil',
    context: `Read the text: "Neuroplasticity refers to the brain's ability to reorganize itself by forming new neural connections throughout life. Previously, scientists believed the brain stopped changing after childhood. However, research has shown that the brain remains adaptable well into old age. Learning a new language, playing a musical instrument, or even recovering from a stroke can trigger neuroplastic changes. This discovery has revolutionized rehabilitation therapy for brain injury patients."`,
    question: `According to the text, what was the old belief about the brain that neuroplasticity disproved?`,
    options: ['That the brain could not recover from injury', 'That the brain stopped changing after childhood', 'That learning was possible at any age', 'That the brain had different regions'],
    correct: 1,
    explanation: { correct: 'The text says "Previously, scientists believed the brain stopped changing after childhood" until neuroplasticity research showed it remains adaptable throughout life, contradicting the earlier belief.', wrongs: ['Recovery from injury is discussed as a benefit of neuroplasticity', 'Opci\u00f3n correcta', 'Learning at any age is actually supported by neuroplasticity research', 'Brain regions are not discussed'] }
  },
  {
    id: 'EN55', area: 'ingles', areaName: 'Ingl\u00e9s', difficulty: 'facil',
    context: `Read the sign: "Yard Sale: Saturday & Sunday, 8 AM - 3 PM. 123 Maple Street. Furniture, books, toys, and clothing for sale. Everything must go! Cash only, please."`,
    question: `What form of payment does the yard sale accept?`,
    options: ['Credit cards', 'Cash only', 'Checks and cash', 'All major credit cards'],
    correct: 1,
    explanation: { correct: 'The sign says "Cash only, please." No other payment methods are accepted.', wrongs: ['Credit cards are not accepted', 'Opci\u00f3n correcta', 'Only cash is accepted, not checks', 'No credit cards are mentioned'] }
  },
  {
    id: 'EN56', area: 'ingles', areaName: 'Ingl\u00e9s', difficulty: 'media',
    context: `Read the article: "Denmark is investing in an innovative solution to food waste: a social supermarket. These stores sell surplus food from regular supermarkets at significantly reduced prices. The food is perfectly edible but near its expiration date or has damaged packaging. This approach helps low-income families access affordable groceries while reducing the environmental impact of food waste. Similar programs have since been launched in France and the United Kingdom."`,
    question: `What makes the food in social supermarkets cheaper?`,
    options: ['The food is expired and unsafe to eat', 'It is surplus food nearing its expiration date or with damaged packaging', 'The government subsidizes all the products', 'The stores use volunteers instead of paid staff'],
    correct: 1,
    explanation: { correct: 'The article says the food is "surplus food from regular supermarkets... perfectly edible but near its expiration date or has damaged packaging," which allows it to be sold at reduced prices.', wrongs: ['The article specifies the food is "perfectly edible"', 'Opci\u00f3n correcta', 'Subsidies are not mentioned', 'Staffing is not discussed'] }
  },
  {
    id: 'EN57', area: 'ingles', areaName: 'Ingl\u00e9s', difficulty: 'dificil',
    context: `Read the text: "In his book 'Outliers,' Malcolm Gladwell popularized the '10,000-hour rule,' suggesting that achieving world-class expertise in any field requires roughly 10,000 hours of deliberate practice. However, subsequent research has challenged this idea. Studies show that the number of hours needed varies greatly by domain: some musicians achieve elite status with fewer hours, while others practice more without reaching the top. Natural talent, quality of instruction, and starting age also play significant roles. The 10,000-hour figure was an average, not a guarantee."`,
    question: `What does the text suggest about the 10,000-hour rule?`,
    options: ['It is a proven requirement for success in any field', 'It is an average, and success depends on many other factors too', 'It applies only to musicians', 'It has been completely disproven and abandoned'],
    correct: 1,
    explanation: { correct: 'The text says "the 10,000-hour figure was an average, not a guarantee" and that "natural talent, quality of instruction, and starting age also play significant roles," showing the rule is not absolute.', wrongs: ['Studies have "challenged this idea" as an absolute requirement', 'Opci\u00f3n correcta', 'The rule was about many fields, though music was Gladwell\'s example', 'It has been challenged but not completely abandoned; it is an average'] }
  },
  {
    id: 'EN58', area: 'ingles', areaName: 'Ingl\u00e9s', difficulty: 'facil',
    context: `Read the text: "Penguins are flightless birds that live primarily in the Southern Hemisphere. They have adapted to life in water, with their wings evolving into flippers. Most penguins eat fish, squid, and krill. The Emperor Penguin is the largest species, standing nearly 4 feet tall."`,
    question: `What have penguin wings evolved into?`,
    options: ['Feathers', 'Flippers', 'Legs', 'Claws'],
    correct: 1,
    explanation: { correct: 'The text says "their wings evolving into flippers," which helps them swim efficiently underwater despite being flightless.', wrongs: ['Feathers are separate from wing structure', 'Opci\u00f3n correcta', 'Legs are separate body parts', 'Claws are not mentioned'] }
  },
  {
    id: 'EN59', area: 'ingles', areaName: 'Ingl\u00e9s', difficulty: 'media',
    context: `Read the announcement: "Due to a water main break on Main Street, all businesses in the downtown area will be closed until further notice. The water supply has been interrupted and road repairs are expected to take 48 hours. Residents in the affected area are advised to boil tap water before drinking it until testing confirms it is safe. We apologize for the inconvenience."`,
    question: `Why are downtown businesses closed?`,
    options: ['Because of a power outage', 'Because of a water main break that interrupted the water supply', 'Because of a holiday', 'Because of a scheduled renovation'],
    correct: 1,
    explanation: { correct: 'The announcement says "Due to a water main break on Main Street, all businesses in the downtown area will be closed until further notice." The water supply interruption makes business operations impossible.', wrongs: ['Power is not mentioned', 'Opci\u00f3n correcta', 'No holiday is mentioned', 'It is an emergency, not a scheduled event'] }
  },
  {
    id: 'EN60', area: 'ingles', areaName: 'Ingl\u00e9s', difficulty: 'dificil',
    context: `Read the text: "The placebo effect is a fascinating phenomenon in medicine. When patients believe they are receiving treatment, they often experience real improvements, even if the 'treatment' is actually a sugar pill or saline injection. This is not 'all in their heads' - brain imaging studies show that placebos can trigger real physiological changes, including the release of endorphins (natural painkillers) and dopamine. Interestingly, the placebo effect has been getting stronger over time in clinical trials, possibly because participants today have higher expectations from medical treatments."`,
    question: `According to the text, placebos can cause real physiological changes because:`,
    options: ['The sugar pills contain active ingredients', 'The brain releases endorphins and dopamine in response to the expectation of treatment', 'Patients pretend to feel better', 'The saline injection has medicinal properties'],
    correct: 1,
    explanation: { correct: 'The text explains that "brain imaging studies show that placebos can trigger real physiological changes, including the release of endorphins (natural painkillers) and dopamine" - these are real chemical changes caused by the expectation of treatment.', wrongs: ['Sugar pills are inert by definition', 'Opci\u00f3n correcta', 'Brain imaging shows real physiological changes, not pretense', 'The saline is described as a placebo, without medicinal properties'] }
  },

  // ===== PREGUNTAS CON TABLAS (NUEVO FORMATO) =====
  {
    id: 'MT101', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'media',
    table: {
      headers: ['Franja', 'Horario', 'Cantidad m\u00e1xima', 'Precio por estudiante'],
      rows: [
        ['1', '8:00 a.m. - 10:00 a.m.', '40', '$12.000'],
        ['2', '10:00 a.m. - 12:00 p.m.', '35', '$15.000'],
        ['3', '1:00 p.m. - 3:00 p.m.', '30', '$18.000'],
        ['4', '3:00 p.m. - 5:00 p.m.', '25', '$20.000']
      ],
      caption: 'Franjas disponibles para visita al museo'
    },
    context: 'Un colegio quiere llevar a 100 estudiantes al museo. La tabla muestra las franjas disponibles, la cantidad m\u00e1xima de estudiantes por franja y el precio por estudiante.',
    question: 'Si el colegio quiere minimizar el costo total y puede distribuir los estudiantes en diferentes franjas, \u00bfcu\u00e1l es el costo m\u00ednimo posible?',
    options: ['$1.200.000', '$1.380.000', '$1.500.000', '$1.620.000'],
    correct: 1,
    explanation: {
      correct: 'Para minimizar costo, usar primero las franjas m\u00e1s baratas: Franja 1: 40\u00d7$12.000=$480.000, Franja 2: 35\u00d7$15.000=$525.000, Franja 3: 25\u00d7$18.000=$450.000. Total 100 estudiantes: $480.000+$525.000+$450.000=$1.380.000. No podemos usar solo la Franja 1 porque su capacidad es 40, y la Franja 2 tiene capacidad 35 (75 entre ambas), necesitamos 25 m\u00e1s de la Franja 3.',
      wrongs: ['Corresponde a 100 estudiantes todos en la franja m\u00e1s barata, pero no hay cupo', 'Opci\u00f3n correcta', 'Demasiado alto, no es la combinaci\u00f3n \u00f3ptima', 'Demasiado alto']
    }
  },
  {
    id: 'MT102', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'media',
    table: {
      headers: ['A\u00f1o', 'Gasto en publicidad', 'Ganancia'],
      rows: [
        ['2020', '$5.000.000', '$30.000.000'],
        ['2021', '$8.000.000', '$45.000.000'],
        ['2022', '$12.000.000', '$60.000.000']
      ],
      caption: 'Relaci\u00f3n entre gasto en publicidad y ganancia'
    },
    question: 'Seg\u00fan la tabla, \u00bfcu\u00e1l es la raz\u00f3n entre el aumento en la ganancia y el aumento en el gasto en publicidad entre 2020 y 2022?',
    options: ['3,75', '4,29', '5,00', '2,50'],
    correct: 1,
    explanation: {
      correct: 'Aumento en ganancia: $60.000.000 - $30.000.000 = $30.000.000. Aumento en gasto: $12.000.000 - $5.000.000 = $7.000.000. Raz\u00f3n = $30.000.000/$7.000.000 \u2248 4,29.',
      wrongs: ['Dividiste ganancia total entre gasto total: 60/5', 'Opci\u00f3n correcta', 'Usaste solo un a\u00f1o', 'No es el c\u00e1lculo correcto']
    }
  },
  {
    id: 'MT103', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'dificil',
    table: {
      headers: ['Curso', 'Mujeres', 'Hombres', 'Total'],
      rows: [
        ['11A', '22', '18', '40'],
        ['11B', '23', '12', '35']
      ],
      caption: 'Composici\u00f3n de los cursos 11A y 11B'
    },
    context: 'Se sortea un representante al azar entre todos los estudiantes de ambos cursos.',
    question: '\u00bfCu\u00e1l es la probabilidad de que el estudiante seleccionado sea mujer del curso 11A?',
    options: ['22/75', '22/40', '22/35', '45/75'],
    correct: 0,
    explanation: {
      correct: 'Total estudiantes = 40 + 35 = 75. Mujeres de 11A = 22. Probabilidad = 22/75.',
      wrongs: ['Opci\u00f3n correcta', 'Usaste solo el total de 11A en el denominador', 'Usaste solo el total de 11B en el denominador', 'Esa es la probabilidad de que sea mujer de cualquier curso']
    }
  },

  // ===== PREGUNTAS CON MÚLTIPLES IMÁGENES / FIGURAS (NUEVO FORMATO) =====
  {
    id: 'CN63', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
    images: [
      { src: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 120%22%3E%3Crect width=%22200%22 height=%22120%22 fill=%22%23f0f4f8%22/%3E%3Ccircle cx=%2260%22 cy=%2260%22 r=%2230%22 fill=%22%233949ab%22/%3E%3Ccircle cx=%22140%22 cy=%2260%22 r=%2230%22 fill=%22%23e53935%22/%3E%3Ctext x=%2260%22 y=%2265%22 text-anchor=%22middle%22 fill=%22white%22 font-size=%2214%22 font-weight=%22bold%22%3E1%3C/text%3E%3Ctext x=%22140%22 y=%2265%22 text-anchor=%22middle%22 fill=%22white%22 font-size=%2214%22 font-weight=%22bold%22%3E2%3C/text%3E%3C/svg%3E',
        alt: 'Dos esferas de masas diferentes', type: 'figure',
        caption: 'Figura 1: Esfera 1 (m=2kg) y Esfera 2 (m=4kg)' }
    ],
    context: 'Dos esferas de masas diferentes se sueltan desde la misma altura.',
    question: 'Si se desprecia la resistencia del aire, \u00bfcu\u00e1l de las siguientes afirmaciones es correcta?',
    options: ['La esfera m\u00e1s pesada llega primero al suelo', 'La esfera m\u00e1s liviana llega primero al suelo', 'Ambas esferas llegan al mismo tiempo', 'La que tiene mayor volumen llega primero'],
    correct: 2,
    explanation: {
      correct: 'En ausencia de resistencia del aire, la aceleraci\u00f3n de la gravedad es la misma para todos los objetos independientemente de su masa. Ambas esferas caen con la misma aceleraci\u00f3n (9.8 m/s\u00b2) y, soltadas desde la misma altura, llegan al mismo tiempo.',
      wrongs: ['La masa no afecta la velocidad de ca\u00edda libre', 'La masa no afecta la velocidad de ca\u00edda libre', 'Opci\u00f3n correcta', 'El volumen no determina la velocidad de ca\u00edda']
    }
  },
  {
    id: 'CN62', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
    images: [
      { src: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 150%22%3E%3Crect width=%22300%22 height=%22150%22 fill=%22%23f0f4f8%22/%3E%3Crect x=%2220%22 y=%2280%22 width=%22260%22 height=%2240%22 fill=%22%23ccc%22 rx=%225%22/%3E%3Crect x=%2230%22 y=%2260%22 width=%2240%22 height=%2260%22 fill=%22%23e53935%22 rx=%222%22/%3E%3Crect x=%2290%22 y=%2245%22 width=%2240%22 height=%2275%22 fill=%22%233949ab%22 rx=%222%22/%3E%3Crect x=%22150%22 y=%2230%22 width=%2240%22 height=%2290%22 fill=%22%232e7d32%22 rx=%222%22/%3E%3Crect x=%22210%22 y=%2255%22 width=%2240%22 height=%2265%22 fill=%22%23ff9800%22 rx=%222%22/%3E%3Ctext x=%2250%22 y=%2250%22 text-anchor=%22middle%22 font-size=%2210%22 fill=%22white%22%3EM1%3C/text%3E%3Ctext x=%22110%22 y=%2235%22 text-anchor=%22middle%22 font-size=%2210%22 fill=%22white%22%3EM2%3C/text%3E%3Ctext x=%22170%22 y=%2220%22 text-anchor=%22middle%22 font-size=%2210%22 fill=%22white%22%3EM3%3C/text%3E%3Ctext x=%22230%22 y=%2245%22 text-anchor=%22middle%22 font-size=%2210%22 fill=%22white%22%3EM4%3C/text%3E%3C/svg%3E',
        alt: 'Barras de alturas diferentes', type: 'graph',
        caption: 'Gr\u00e1fica: Altura de ca\u00edda de 4 objetos' }
    ],
    context: 'Cuatro objetos (M1, M2, M3, M4) se dejan caer desde diferentes alturas. La gr\u00e1fica muestra la altura de cada objeto.',
    question: 'Si los cuatro objetos se dejan caer al mismo tiempo, \u00bfcu\u00e1l llega primero al suelo?',
    options: ['M1', 'M2', 'M3', 'M4'],
    correct: 2,
    explanation: {
      correct: 'El objeto M3 est\u00e1 a la menor altura (la barra m\u00e1s corta en la gr\u00e1fica), por lo tanto recorrer\u00e1 menos distancia y llegar\u00e1 primero al suelo.',
      wrongs: ['M1 est\u00e1 a mayor altura que M3', 'M2 est\u00e1 a mayor altura que M3', 'Opci\u00f3n correcta', 'M4 est\u00e1 a mayor altura que M3']
    }
  },
  {
    id: 'SC61', area: 'sociales', areaName: 'Sociales y Ciudadan\u00eda', difficulty: 'media',
    table: {
      headers: ['Indicador', '2020', '2021', '2022'],
      rows: [
        ['PIB (%)', '-6.8', '10.6', '7.5'],
        ['Desempleo (%)', '15.9', '13.7', '11.2'],
        ['Inflaci\u00f3n (%)', '1.6', '3.5', '9.2']
      ],
      caption: 'Indicadores econ\u00f3micos de Colombia 2020-2022'
    },
    question: 'Seg\u00fan la tabla, \u00bfqu\u00e9 tendencia se observa en la tasa de desempleo entre 2020 y 2022?',
    options: ['Aument\u00f3 constantemente', 'Disminuy\u00f3 constantemente', 'Se mantuvo igual', 'Aument\u00f3 en 2021 y disminuy\u00f3 en 2022'],
    correct: 1,
    explanation: {
      correct: 'La tasa de desempleo pas\u00f3 de 15.9% en 2020 a 13.7% en 2021 y a 11.2% en 2022, mostrando una disminuci\u00f3n constante durante el per\u00edodo.',
      wrongs: ['Los datos muestran disminuci\u00f3n, no aumento', 'Opci\u00f3n correcta', 'Los datos var\u00edan cada a\u00f1o', 'No aument\u00f3 en ning\u00fan a\u00f1o']
    }
  }
];
