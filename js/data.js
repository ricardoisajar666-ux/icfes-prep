const QUESTIONS = [
  // ===== LECTURA CRÍTICA =====
  {
    id: 'LC01',
    area: 'lectura',
    areaName: 'Lectura Crítica',
    difficulty: 'media',
    context: `"El conocimiento no consiste en una serie de teorías autoconsistentes que tiende a converger en una perspectiva ideal; no consiste en un acercamiento gradual hacia la verdad. Por el contrario, el conocimiento es un océano, siempre en aumento, de alternativas incompatibles entre sí (y tal vez inconmensurables); toda teoría particular, todo cuento de hadas, todo mito, forman parte del conjunto que obliga al resto a una articulación mayor, y todos ellos contribuyen, por medio de este proceso competitivo, al desarrollo de nuestro conocimiento."`,
    question: `Según el texto, el conocimiento se caracteriza por ser:`,
    options: ['Un proceso que se acerca progresivamente a una verdad absoluta', 'Un conjunto de teorías que convergen en una única explicación', 'Un océano de alternativas diversas que compiten y enriquecen', 'Una serie de mitos y cuentos sin valor científico'],
    correct: 2,
    explanation: {
      correct: 'El autor describe el conocimiento como "un océano, siempre en aumento, de alternativas incompatibles entre sí", donde diferentes perspectivas (teorías, mitos, cuentos de hadas) contribuyen al desarrollo del conocimiento mediante un proceso competitivo. La clave está en que no hay una sola verdad ni una convergencia hacia un ideal.',
      wrongs: [
        'El texto explícitamente niega esta idea: dice que NO consiste en "un acercamiento gradual hacia la verdad"',
        'El texto dice lo contrario: las teorías son "alternativas incompatibles entre sí", no convergentes',
        'Opción correcta'
      ]
    }
  },
  {
    id: 'LC02',
    area: 'lectura',
    areaName: 'Lectura Crítica',
    difficulty: 'facil',
    context: `"La publicidad en redes sociales ha transformado la manera en que las empresas se comunican con sus consumidores. Antes, las compañías dependían de medios masivos como la televisión y la radio para llegar a sus audiencias. Hoy, los algoritmos permiten segmentar mensajes publicitarios de acuerdo con los intereses y comportamientos de cada usuario."`,
    question: `Según el texto, ¿cuál es la principal diferencia entre la publicidad tradicional y la publicidad en redes sociales?`,
    options: ['La publicidad tradicional era más efectiva que la digital', 'Las redes sociales permiten segmentar mensajes según intereses', 'La televisión ya no se usa para publicidad', 'Los algoritmos solo se usan en radio'],
    correct: 1,
    explanation: {
      correct: 'El texto establece claramente que la transformación clave es que "los algoritmos permiten segmentar mensajes publicitarios de acuerdo con los intereses y comportamientos de cada usuario", algo que no era posible con los medios masivos tradicionales.',
      wrongs: [
        'El texto no compara la efectividad, solo describe la transformación',
        'Opción correcta',
        'El texto no afirma que la televisión ya no se use',
        'Los algoritmos se mencionan en el contexto de redes sociales, no de radio'
      ]
    }
  },
  {
    id: 'LC03',
    area: 'lectura',
    areaName: 'Lectura Crítica',
    difficulty: 'media',
    context: `"Estudio reciente: El 78% de los estudiantes que dedican al menos 2 horas diarias a la lectura obtienen puntajes superiores al promedio en pruebas de comprensión lectora. Sin embargo, solo el 23% de los estudiantes encuestados afirmó leer por placer fuera del ámbito académico."`,
    question: `¿Cuál de las siguientes afirmaciones se puede inferir del texto?`,
    options: ['El 78% de los estudiantes lee 2 horas diarias', 'Existe una brecha entre la lectura académica y la lectura por placer', 'El 23% de los estudiantes obtiene puntajes superiores', 'Leer por placer no influye en los resultados académicos'],
    correct: 1,
    explanation: {
      correct: 'El texto contrasta el beneficio de leer (78% obtiene mejores puntajes) con el bajo porcentaje que lee por placer (23%), lo que permite inferir que hay una brecha entre lo que sería beneficioso y lo que realmente hacen los estudiantes.',
      wrongs: [
        'El texto dice que el 78% obtiene puntajes superiores, no que lea 2 horas diarias',
        'Opción correcta',
        'El 23% lee por placer, no obtiene puntajes superiores',
        'El texto no establece esta relación causal'
      ]
    }
  },
  {
    id: 'LC04',
    area: 'lectura',
    areaName: 'Lectura Crítica',
    difficulty: 'dificil',
    context: `"Algunos sostienen que la narrativa de la identidad nacional colombiana ha sido construida desde centros de poder que han silenciado sistemáticamente las voces de las comunidades afrocolombianas e indígenas. Esta visión homogeneizante desconoce la pluralidad cultural que caracteriza al país."`,
    question: `La expresión "visión homogeneizante" en el texto se refiere a:`,
    options: ['La diversidad cultural de Colombia', 'Una perspectiva que unifica y borra diferencias culturales', 'El reconocimiento de las comunidades indígenas', 'La construcción de centros de poder'],
    correct: 1,
    explanation: {
      correct: 'El contexto indica que se ha "silenciado sistemáticamente las voces" de minorías, y que esta visión "desconoce la pluralidad cultural". Por lo tanto, "homogeneizante" se refiere a una perspectiva que impone una identidad única ignorando la diversidad.',
      wrongs: [
        'La visión homogeneizante es lo opuesto a la diversidad cultural',
        'Opción correcta',
        'El texto critica que no se reconozca adecuadamente a estas comunidades',
        'Los centros de poder son los que construyen esa visión, no la visión misma'
      ]
    }
  },
  {
    id: 'LC05',
    area: 'lectura',
    areaName: 'Lectura Crítica',
    difficulty: 'facil',
    context: `"El calentamiento global es uno de los mayores desafíos de nuestro tiempo. Según el IPCC, las actividades humanas han sido la causa principal del aumento de temperatura observado desde mediados del siglo XX."`,
    question: `Según el texto, ¿cuál es la causa principal del calentamiento global?`,
    options: ['Los cambios naturales del clima', 'Las actividades humanas', 'El aumento de la temperatura', 'Las mediciones del IPCC'],
    correct: 1,
    explanation: {
      correct: 'El texto afirma directamente que "las actividades humanas han sido la causa principal del aumento de temperatura observado desde mediados del siglo XX".',
      wrongs: [
        'El texto atribuye la causa a actividades humanas, no a cambios naturales',
        'Opción correcta',
        'El aumento de temperatura es el efecto, no la causa',
        'El IPCC es la entidad que reporta, no la causa del fenómeno'
      ]
    }
  },
  {
    id: 'LC06',
    area: 'lectura',
    areaName: 'Lectura Crítica',
    difficulty: 'dificil',
    context: `"Una paradoja de la democracia contemporánea es que, mientras más personas tienen acceso a la información gracias a internet, más difícil parece lograr acuerdos sobre hechos básicos compartidos. La fragmentación de las fuentes de información ha creado 'burbujas epistémicas' donde grupos enteros operan con premisas factuales radicalmente distintas."`,
    question: `El término "burbujas epistémicas" en el texto hace referencia a:`,
    options: ['El acceso igualitario a la información', 'Comunidades que comparten las mismas bases de conocimiento', 'Espacios donde se aceptan diferentes tipos de conocimiento', 'Grupos aislados con premisas factuales distintas'],
    correct: 3,
    explanation: {
      correct: 'El texto dice que las burbujas epistémicas son espacios donde "grupos enteros operan con premisas factuales radicalmente distintas". Es decir, son comunidades informativas aisladas con sus propias versiones de los hechos.',
      wrongs: [
        'El texto habla de fragmentación, no de acceso igualitario',
        'Las burbujas implican aislamiento, no compartir bases comunes',
        'No se trata de aceptar diferentes tipos, sino de operar con premisas distintas sin contacto entre burbujas',
        'Opción correcta'
      ]
    }
  },
  {
    id: 'LC07',
    area: 'lectura',
    areaName: 'Lectura Crítica',
    difficulty: 'media',
    context: `"El autor afirma que 'la poesía no es un adorno de la sociedad, sino una forma de conocimiento que revela dimensiones de la experiencia humana que otros lenguajes no pueden expresar'."`,
    question: `¿Cuál es la idea principal del autor sobre la poesía?`,
    options: ['Es un adorno social sin importancia', 'Es un lenguaje inferior a otros', 'Es una forma de conocimiento única e irreemplazable', 'Solo expresa emociones superficiales'],
    correct: 2,
    explanation: {
      correct: 'El autor dice explícitamente que la poesía "no es un adorno" sino "una forma de conocimiento" que revela dimensiones "que otros lenguajes no pueden expresar", destacando su carácter único e irreemplazable.',
      wrongs: [
        'El autor niega explícitamente que sea un "adorno de la sociedad"',
        'El texto dice que revela lo que otros lenguajes NO pueden, posicionándola como superior en ciertos aspectos',
        'Opción correcta',
        'La descripción va más allá de lo emocional, hablando de "dimensiones de la experiencia humana"'
      ]
    }
  },
  {
    id: 'LC08',
    area: 'lectura',
    areaName: 'Lectura Crítica',
    difficulty: 'facil',
    context: `"El reciclaje en Colombia ha aumentado un 15% en los últimos 5 años. Sin embargo, aún solo el 17% de los residuos sólidos se recicla adecuadamente, mientras que el resto termina en rellenos sanitarios o en fuentes hídricas."`,
    question: `¿Cuál es la situación del reciclaje en Colombia según el texto?`,
    options: ['Ha mejorado pero aún es insuficiente', 'Ya es un modelo ejemplar', 'Ha disminuido en los últimos años', 'Todo se recicla adecuadamente'],
    correct: 0,
    explanation: {
      correct: 'El texto presenta un avance (aumento del 15%) pero también muestra que el porcentaje de reciclaje adecuado sigue siendo bajo (17%), indicando que aunque ha mejorado, aún hay un largo camino por recorrer.',
      wrongs: [
        'Opción correcta',
        'Con solo 17% de reciclaje adecuado, no se puede considerar ejemplar',
        'El texto reporta un aumento, no una disminución',
        'El 83% restante no se recicla adecuadamente'
      ]
    }
  },

  // ===== MATEMÁTICAS =====
  {
    id: 'MT01',
    area: 'matematicas',
    areaName: 'Matemáticas',
    difficulty: 'facil',
    table: {
      headers: ['Artículo', 'Precio normal', 'Descuento'],
      rows: [
        ['Camiseta', '$45.000', '20%'],
        ['Pantalón', '$80.000', '25%'],
        ['Zapatos', '$120.000', '15%'],
        ['Chaqueta', '$150.000', '30%']
      ],
      caption: 'Precios y descuentos en una tienda de Medellín'
    },
    context: 'En una tienda de ropa en Medellín se ofrecen los descuentos mostrados en la tabla.',
    question: 'Un cliente compra una camiseta y un pantalón. ¿Cuánto paga en total?',
    options: ['$96.000', '$102.500', '$112.000', '$125.000'],
    correct: 0,
    explanation: {
      correct: 'Camiseta con descuento: $45.000 x 0,80 = $36.000. Pantalón con descuento: $80.000 x 0,75 = $60.000. Total: $36.000 + $60.000 = $96.000.',
      wrongs: [
        'Probablemente sumaste los precios sin descuento: $45.000 + $80.000 = $125.000',
        'Opción correcta',
        'Calculaste mal algÃºn descuento: revisa camiseta al 80% y pantalón al 75%',
        'Aplicaste los descuentos al revés o sumaste incorrectamente'
      ]
    }
  },
  {
    id: 'MT02',
    area: 'matematicas',
    areaName: 'Matemáticas',
    difficulty: 'media',
    question: `Un jardinero quiere construir un jardín rectangular en un parque de Bogotá. El largo será el triple del ancho y dispone de 48 metros de cerca. ¿Cuáles serán las dimensiones del jardín?`,
    options: ['6 m x 18 m', '8 m x 24 m', '12 m x 36 m', '10 m x 30 m'],
    correct: 0,
    explanation: {
      correct: 'Sea x = ancho, largo = 3x. Perímetro = 2(x + 3x) = 8x = 48, entonces x = 6. Dimensiones: 6 m x 18 m.',
      wrongs: [
        'Opción correcta',
        'Si ancho = 8, perímetro = 2(8+24) = 64, no 48',
        'Si ancho = 12, perímetro = 2(12+36) = 96, no 48',
        'Si ancho = 10, perímetro = 2(10+30) = 80, no 48'
      ]
    }
  },
  {
    id: 'MT03',
    area: 'matematicas',
    areaName: 'Matemáticas',
    difficulty: 'media',
    table: {
      headers: ['Ciudad', 'Enero', 'Febrero', 'Marzo'],
      rows: [
        ['Bogotá', '14°C', '15°C', '16°C'],
        ['Medellín', '22°C', '23°C', '22°C'],
        ['Cali', '25°C', '26°C', '25°C'],
        ['Barranquilla', '28°C', '29°C', '28°C']
      ],
      caption: 'Temperatura promedio mensual en cuatro ciudades colombianas'
    },
    context: 'La tabla muestra la temperatura promedio en cuatro ciudades durante el primer trimestre.',
    question: '¿Cuál es la mediana de las temperaturas registradas en marzo?',
    options: ['22°C', '23,5°C', '24,5°C', '25°C'],
    correct: 1,
    explanation: {
      correct: 'Temperaturas de marzo ordenadas: 16, 22, 25, 28. Mediana = (22 + 25)/2 = 47/2 = 23,5°C.',
      wrongs: [
        'Esa es la temperatura de Medellín en marzo, no la mediana',
        'Opción correcta',
        'Calculaste el promedio en lugar de la mediana, o hiciste la suma incorrecta',
        'Esa es la temperatura de Cali en marzo'
      ]
    }
  },
  {
    id: 'MT04',
    area: 'matematicas',
    areaName: 'Matemáticas',
    difficulty: 'dificil',
    context: `Una empresa de taxis en Bogotá cobra $3.500 por el arranque (banderazo) más $2.200 por cada kilómetro recorrido.`,
    question: `Si un pasajero pagó $24.700 por un viaje, ¿cuántos kilómetros recorrió?`,
    options: ['8,5 km', '9,6 km', '10,2 km', '11,2 km'],
    correct: 1,
    explanation: {
      correct: 'Ecuación: 3.500 + 2.200x = 24.700 -> 2.200x = 21.200 -> x = 21.200/2.200 = 9,636... aprox. 9,6 km.',
      wrongs: [
        'Restaste mal: 24.700 - 3.500 = 21.200, luego dividiste por 2.500 en lugar de 2.200',
        'Opción correcta',
        'Sumaste en lugar de restar el banderazo',
        'Dividiste 24.700/2.200 sin restar el banderazo: 11,2 km'
      ]
    }
  },
  {
    id: 'MT05',
    area: 'matematicas',
    areaName: 'Matemáticas',
    difficulty: 'facil',
    question: `En un colegio de Cali hay 800 estudiantes. Si el 45% son hombres, ¿cuántas mujeres hay?`,
    options: ['360', '440', '400', '355'],
    correct: 1,
    explanation: {
      correct: 'Hombres: 800 x 0,45 = 360. Mujeres: 800 - 360 = 440. También: 55% de 800 = 800 x 0,55 = 440.',
      wrongs: [
        'Ese es el número de hombres (45%), no de mujeres',
        'Opción correcta',
        'Calculaste el 50% en lugar del 55%',
        'Calculaste mal el porcentaje'
      ]
    }
  },
  {
    id: 'MT06',
    area: 'matematicas',
    areaName: 'Matemáticas',
    difficulty: 'media',
    question: `Una escalera de 5 m de longitud se apoya contra una pared vertical. Si la base de la escalera está a 3 m de la pared, ¿qué altura alcanza la escalera?`,
    options: ['3 m', '4 m', '5 m', '6 m'],
    correct: 1,
    explanation: {
      correct: 'Por Pitágoras: h² + 3² = 5² -> h² = 25 - 9 = 16 -> h = 4 m.',
      wrongs: [
        'Esa es la distancia de la base, no la altura',
        'Opción correcta',
        'Esa es la longitud de la escalera, no la altura',
        'Sumaste 5 + 3, cuando debes usar Pitágoras'
      ]
    }
  },
  {
    id: 'MT07',
    area: 'matematicas',
    areaName: 'Matemáticas',
    difficulty: 'dificil',
    question: `En una bolsa hay 5 canicas rojas, 3 azules y 2 verdes. Se sacan dos canicas sin reemplazo. ¿Cuál es la probabilidad de que ambas sean del mismo color?`,
    options: ['14/45', '1/3', '19/45', '2/5'],
    correct: 0,
    explanation: {
      correct: 'P(ambas rojas) = (5/10)x(4/9) = 20/90. P(ambas azules) = (3/10)x(2/9) = 6/90. P(ambas verdes) = (2/10)x(1/9) = 2/90. Suma = 28/90 = 14/45.',
      wrongs: [
        'Opción correcta',
        'Calculaste solo la probabilidad de rojas o un cálculo parcial',
        'Olvidaste incluir la probabilidad de ambas verdes y azules',
        'Calculaste con reemplazo en lugar de sin reemplazo'
      ]
    }
  },
  {
    id: 'MT08',
    area: 'matematicas',
    areaName: 'Matemáticas',
    difficulty: 'facil',
    context: `Un agricultor en el Eje Cafetero siembra café. Cada árbol produce 12 kg de café al año y necesita 3 m² de terreno.`,
    question: `Si el agricultor tiene un terreno de 600 m², ¿cuántos kg de café puede recolectar al año?`,
    options: ['1.800 kg', '2.000 kg', '2.400 kg', '1.200 kg'],
    correct: 2,
    explanation: {
      correct: 'Árboles que caben: 600/3 = 200 árboles. Producción: 200 x 12 = 2.400 kg.',
      wrongs: [
        'Dividiste 600/12 en lugar de 600/3 primero',
        'Calculaste 600 x 3 = 1.800 de forma incorrecta',
        'Opción correcta',
        'Multiplicaste 600 x 3 = 1.800, pero la pregunta es por kg'
      ]
    }
  },

  // ===== SOCIALES Y CIUDADANÍA =====
  {
    id: 'SC01',
    area: 'sociales',
    areaName: 'Sociales y Ciudadanía',
    difficulty: 'facil',
    question: `La Constitución Política de Colombia de 1991 se caracteriza por ser:`,
    options: ['Una constitución centralista que elimina las regiones', 'Una constitución participativa que reconoce la diversidad étnica y cultural', 'Una constitución que elimina la separación de poderes', 'Una constitución que establece la religión oficial del Estado'],
    correct: 1,
    explanation: {
      correct: 'La Constitución de 1991 es conocida como una "Constitución participativa y pluralista". Reconoce la diversidad étnica y cultural de la nación (art. 7), establece mecanismos de participación ciudadana, y define a Colombia como un Estado Social de Derecho.',
      wrongs: [
        'La Constitución de 1991 descentralizó el poder y fortaleció las regiones (autonomía territorial)',
        'Opción correcta',
        'La Constitución mantiene la separación de poderes (Ejecutivo, Legislativo, Judicial)',
        'Colombia es un Estado laico según la Constitución de 1991, no tiene religión oficial'
      ]
    }
  },
  {
    id: 'SC02',
    area: 'sociales',
    areaName: 'Sociales y Ciudadanía',
    difficulty: 'media',
    context: `"Un ciudadano se encontraba inconforme con el actual sistema de salud en Colombia y quería promover una reforma a la Ley 100 de 1993."`,
    question: `¿Cuál de los siguientes mecanismos de participación ciudadana sería el más adecuado para que este ciudadano proponga su reforma?`,
    options: ['El voto popular', 'La revocatoria del mandato', 'La iniciativa legislativa', 'El plebiscito'],
    correct: 2,
    explanation: {
      correct: 'La iniciativa legislativa es el mecanismo de participación por el cual los ciudadanos pueden presentar proyectos de ley o de acto legislativo ante el Congreso. Es la herramienta adecuada para proponer una reforma a una ley existente.',
      wrongs: [
        'El voto sirve para elegir representantes, no para proponer leyes',
        'La revocatoria del mandato es para destituir funcionarios electos, no para proponer leyes',
        'Opción correcta',
        'El plebiscito es para que el pueblo se pronuncie sobre decisiones del Ejecutivo, no para proponer leyes nuevas'
      ]
    }
  },
  {
    id: 'SC03',
    area: 'sociales',
    areaName: 'Sociales y Ciudadanía',
    difficulty: 'dificil',
    question: `La Independencia de Colombia (1810-1819) fue impulsada principalmente por:`,
    options: ['La alianza con España para reformar el sistema colonial', 'Las ideas ilustradas, los conflictos en España y las desigualdades del sistema colonial', 'La intervención directa de Estados Unidos', 'El deseo de establecer una monarquía independiente'],
    correct: 1,
    explanation: {
      correct: 'La independencia fue un proceso multicausal. Las ideas ilustradas (libertad, igualdad), la crisis política en España por la invasión napoleónica (1808), y las desigualdades del sistema colonial (exclusión de criollos, impuestos) fueron los principales factores que impulsaron el movimiento independentista.',
      wrongs: [
        'La independencia fue precisamente PARA independizarse de España, no para reformar el sistema colonial con ellos',
        'Opción correcta',
        'EE.UU. tuvo influencia ideológica pero no intervino directamente en la independencia colombiana',
        'El proyecto era republicano, no monárquico. La Gran Colombia se constituyó como república'
      ]
    }
  },
  {
    id: 'SC04',
    area: 'sociales',
    areaName: 'Sociales y Ciudadanía',
    difficulty: 'facil',
    question: `En Colombia, la rama del poder público encargada de administrar justicia es:`,
    options: ['La Rama Ejecutiva', 'La Rama Legislativa', 'La Rama Judicial', 'El Ministerio Público'],
    correct: 2,
    explanation: {
      correct: 'La Rama Judicial es la encargada de administrar justicia en Colombia. Está compuesta por la Corte Suprema de Justicia, la Corte Constitucional, el Consejo de Estado, el Consejo Superior de la Judicatura y los juzgados y tribunales.',
      wrongs: [
        'La Rama Ejecutiva se encarga de administrar el Estado y ejecutar las leyes',
        'La Rama Legislativa (Congreso) se encarga de hacer las leyes',
        'Opción correcta',
        'El Ministerio Público (Procuraduría) es un órgano de control, no una rama del poder'
      ]
    }
  },
  {
    id: 'SC05',
    area: 'sociales',
    areaName: 'Sociales y Ciudadanía',
    difficulty: 'media',
    context: `"En las últimas décadas, Colombia ha experimentado un proceso de urbanización acelerada. Mientras que en 1950 solo el 38% de la población vivía en áreas urbanas, para 2020 este porcentaje superaba el 80%."`,
    question: `Este proceso de urbanización acelerada ha generado como consecuencia:`,
    options: ['La disminución de la población rural', 'El aumento de la densidad poblacional en zonas urbanas con desafíos de infraestructura', 'La desaparición completa del sector agrícola', 'La migración de ciudades a zonas rurales'],
    correct: 1,
    explanation: {
      correct: 'La urbanización acelerada implica que más personas viven en ciudades, lo que aumenta la densidad poblacional urbana. Esto genera desafíos como necesidades de vivienda, servicios públicos, transporte y empleo que no siempre son cubiertos adecuadamente por la infraestructura existente.',
      wrongs: [
        'La población rural disminuye en términos relativos (porcentaje), pero puede mantenerse en términos absolutos',
        'Opción correcta',
        'El sector agrícola sigue existiendo, aunque su participación económica relativa haya disminuido',
        'La migración ha sido principalmente del campo a la ciudad, no al revés'
      ]
    }
  },
  {
    id: 'SC06',
    area: 'sociales',
    areaName: 'Sociales y Ciudadanía',
    difficulty: 'dificil',
    question: `El Frente Nacional (1958-1974) en Colombia fue un acuerdo político entre liberales y conservadores que consistió en:`,
    options: ['La eliminación total de los partidos políticos tradicionales', 'La alternancia en el poder y distribución equitativa de cargos públicos entre ambos partidos', 'La unificación de los dos partidos en uno solo', 'La prohibición de elecciones populares'],
    correct: 1,
    explanation: {
      correct: 'El Frente Nacional fue un acuerdo bipartidista donde liberales y conservadores se alternaban la presidencia cada 4 años y se distribuían equitativamente los cargos públicos. Duró 16 años (4 periodos presidenciales) y buscaba superar la violencia bipartidista.',
      wrongs: [
        'Los partidos mantuvieron su identidad; no fueron eliminados sino que hicieron un pacto de alternancia',
        'Opción correcta',
        'Cada partido mantuvo su estructura independiente; hubo alternancia, no fusión',
        'Sí hubo elecciones, pero solo entre candidatos del Frente Nacional'
      ]
    }
  },
  {
    id: 'SC07',
    area: 'sociales',
    areaName: 'Sociales y Ciudadanía',
    difficulty: 'facil',
    question: `¿Cuál de los siguientes es un deber fundamental de los ciudadanos colombianos según la Constitución?`,
    options: ['Votar en todas las elecciones (voto obligatorio)', 'Cumplir y respetar la Constitución y las leyes', 'Pertenecer a un partido político', 'Pagar impuestos solo si se gana más del salario mínimo'],
    correct: 1,
    explanation: {
      correct: 'El artículo 95 de la Constitución establece como deber de la persona y del ciudadano "Respetar los derechos ajenos y no abusar de los propios" y "Cumplir la Constitución y las leyes". El voto en Colombia es obligatorio pero no forzado (hay sanciones por no votar), y el deber de pagar impuestos aplica según la capacidad económica.',
      wrongs: [
        'En Colombia el voto es obligatorio pero hay consecuencias por no hacerlo; sin embargo, no es el único deber fundamental',
        'Opción correcta',
        'Ningún ciudadano está obligado a pertenecer a un partido político',
        'Todos los ciudadanos deben contribuir al financiamiento del Estado según su capacidad económica'
      ]
    }
  },
  {
    id: 'SC08',
    area: 'sociales',
    areaName: 'Sociales y Ciudadanía',
    difficulty: 'media',
    context: `"Colombia es un país megadiverso: posee aproximadamente el 10% de la biodiversidad del planeta en menos del 1% de la superficie terrestre. Esta riqueza natural enfrenta amenazas como la deforestación, la minería ilegal y el cambio climático."`,
    question: `Según el texto, la principal amenaza para la biodiversidad colombiana es:`,
    options: ['La falta de especies nativas', 'Múltiples factores como deforestación, minería ilegal y cambio climático', 'El alto porcentaje de biodiversidad', 'La pequeña superficie del territorio'],
    correct: 1,
    explanation: {
      correct: 'El texto menciona explícitamente que la biodiversidad "enfrenta amenazas como la deforestación, la minería ilegal y el cambio climático". Son múltiples factores los que amenazan la riqueza natural del país.',
      wrongs: [
        'Colombia tiene abundancia de especies nativas; eso no es una amenaza',
        'Opción correcta',
        'La alta biodiversidad es una ventaja, no una amenaza',
        'El tamaño del territorio no es una amenaza en sí mismo'
      ]
    }
  },

  // ===== CIENCIAS NATURALES =====
  {
    id: 'CN01',
    area: 'ciencias',
    areaName: 'Ciencias Naturales',
    difficulty: 'facil',
    question: `¿Cuál de los siguientes es un ejemplo de un cambio químico de la materia?`,
    options: ['La evaporación del agua', 'La combustión de la madera', 'La disolución de sal en agua', 'La congelación del agua'],
    correct: 1,
    explanation: {
      correct: 'La combustión de la madera es un cambio químico porque transforma la materia en nuevas sustancias (cenizas, CO₂, vapor de agua) con propiedades diferentes. Se produce una reacción química donde se rompen y forman enlaces.',
      wrongs: [
        'La evaporación es un cambio físico: el agua cambia de estado pero sigue siendo H₂O',
        'Opción correcta',
        'La disolución es un proceso físico: la sal se separa en iones pero no se transforma en otra sustancia',
        'La congelación es un cambio físico: el agua pasa a sólido pero sigue siendo H₂O'
      ]
    }
  },
  {
    id: 'CN02',
    area: 'ciencias',
    areaName: 'Ciencias Naturales',
    difficulty: 'media',
    context: `"En un ecosistema, la población de liebres y la población de linces muestran una relación cíclica. Cuando aumentan las liebres, los linces tienen más alimento y su población crece. Al aumentar los linces, disminuyen las liebres, lo que luego reduce la población de linces."`,
    question: `Esta relación entre liebres y linces es un ejemplo de:`,
    options: ['Competencia intraespecífica', 'Mutualismo', 'Depredación', 'Comensalismo'],
    correct: 2,
    explanation: {
      correct: 'La relación descrita es de depredación: el lince (depredador) se alimenta de la liebre (presa). La dinámica poblacional cíclica entre depredador y presa es clásica en ecología y fue descrita por las ecuaciones de Lotka-Volterra.',
      wrongs: [
        'La competencia intraespecífica ocurre entre individuos de la misma especie, no entre especies diferentes',
        'El mutualismo beneficia a ambas especies, pero aquí el lince se beneficia y la liebre se perjudica',
        'Opción correcta',
        'El comensalismo beneficia a una especie sin afectar a la otra, pero aquí la liebre claramente se ve afectada'
      ]
    }
  },
  {
    id: 'CN03',
    area: 'ciencias',
    areaName: 'Ciencias Naturales',
    difficulty: 'dificil',
    question: `Si un objeto tiene una masa de 10 kg y se encuentra a una altura de 5 metros sobre el suelo, ¿cuál es su energía potencial gravitacional? (Considere g = 10 m/s²)`,
    options: ['50 J', '100 J', '500 J', '250 J'],
    correct: 2,
    explanation: {
      correct: 'La energía potencial gravitacional se calcula con la fórmula: Ep = m × g × h. Ep = 10 kg × 10 m/s² × 5 m = 500 J (Joules).',
      wrongs: [
        'Multiplicaste solo masa por altura, sin incluir gravedad (10 × 5 = 50)',
        'Multiplicaste masa por gravedad, pero no por altura (10 × 10 = 100)',
        'Opción correcta',
        'Calculaste (10 × 10 × 5)/2 = 250, pero no se divide entre 2'
      ]
    }
  },
  {
    id: 'CN04',
    area: 'ciencias',
    areaName: 'Ciencias Naturales',
    difficulty: 'facil',
    question: `La fotosíntesis es el proceso mediante el cual las plantas producen su alimento. ¿Cuáles son los reactivos (insumos) principales de la fotosíntesis?`,
    options: ['Oxígeno y glucosa', 'Agua y dióxido de carbono', 'Nitrógeno y oxígeno', 'Luz solar y proteínas'],
    correct: 1,
    explanation: {
      correct: 'La fotosíntesis utiliza dióxido de carbono (CO₂) y agua (H₂O) como reactivos, y con la energía de la luz solar produce glucosa (C₆H₁₂O₆) y oxígeno (O₂). La ecuación es: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂.',
      wrongs: [
        'El oxígeno es un producto de la fotosíntesis, no un reactivo',
        'Opción correcta',
        'El nitrógeno no es un reactivo directo de la fotosíntesis',
        'La luz solar es una fuente de energía, no un reactivo; las proteínas no son reactivos de la fotosíntesis'
      ]
    }
  },
  {
    id: 'CN05',
    area: 'ciencias',
    areaName: 'Ciencias Naturales',
    difficulty: 'dificil',
    context: `"La masa atómica del carbono es 12 u y la del oxígeno es 16 u."`,
    question: `¿Cuál es la masa molecular del dióxido de carbono (CO₂)?`,
    options: ['28 u', '44 u', '32 u', '40 u'],
    correct: 1,
    explanation: {
      correct: 'La molécula de CO₂ tiene 1 átomo de carbono (12 u) y 2 átomos de oxígeno (2 × 16 u = 32 u). Masa molecular = 12 u + 32 u = 44 u.',
      wrongs: [
        'Sumaste un carbono y un oxígeno (12 + 16 = 28), pero el CO₂ tiene dos oxígenos',
        'Opción correcta',
        'Calculaste solo la masa de dos oxígenos (2 × 16 = 32), sin incluir el carbono',
        'Sumaste 12 + 16 + 12 como si fueran dos carbonos y un oxígeno'
      ]
    }
  },
  {
    id: 'CN06',
    area: 'ciencias',
    areaName: 'Ciencias Naturales',
    difficulty: 'media',
    context: `"En un laboratorio, un estudiante mezcla un ácido (HCl) con una base (NaOH) y observa que la temperatura de la solución aumenta."`,
    question: `Este aumento de temperatura indica que la reacción es:`,
    options: ['Endotérmica', 'Exotérmica', 'Catalítica', 'Irreversible'],
    correct: 1,
    explanation: {
      correct: 'Una reacción exotérmica libera energía en forma de calor, lo que se evidencia por el aumento de temperatura. La neutralización entre un ácido y una base es típicamente exotérmica: HCl + NaOH → NaCl + H₂O + calor.',
      wrongs: [
        'Una reacción endotérmica absorbe calor y la temperatura disminuiría',
        'Opción correcta',
        'La catálisis se refiere a la velocidad de reacción, no al intercambio de calor',
        'La reversibilidad no tiene relación directa con el cambio de temperatura'
      ]
    }
  },
  {
    id: 'CN07',
    area: 'ciencias',
    areaName: 'Ciencias Naturales',
    difficulty: 'media',
    question: `¿Cuál de los siguientes órganos del cuerpo humano es responsable de filtrar la sangre y producir orina?`,
    options: ['El hígado', 'El páncreas', 'Los riñones', 'El corazón'],
    correct: 2,
    explanation: {
      correct: 'Los riñones son los órganos del sistema excretor encargados de filtrar la sangre para eliminar desechos metabólicos (como la urea) y producir orina. Cada riñón contiene aproximadamente 1 millón de nefronas, las unidades funcionales de filtración.',
      wrongs: [
        'El hígado se encarga de procesar nutrientes y desintoxicar, pero no produce orina',
        'El páncreas produce enzimas digestivas e insulina, pero no filtra sangre',
        'Opción correcta',
        'El corazón bombea sangre pero no la filtra'
      ]
    }
  },
  {
    id: 'CN08',
    area: 'ciencias',
    areaName: 'Ciencias Naturales',
    difficulty: 'facil',
    question: `La teoría celular establece que:`,
    options: ['Las células solo existen en organismos complejos', 'Todos los seres vivos están formados por una o más células', 'Las células surgen espontáneamente de la materia inerte', 'Solo los animales tienen células'],
    correct: 1,
    explanation: {
      correct: 'La teoría celular, uno de los fundamentos de la biología, establece que: (1) todos los seres vivos están formados por una o más células, (2) la célula es la unidad básica de la vida, y (3) toda célula procede de otra célula preexistente.',
      wrongs: [
        'Todos los seres vivos, desde bacterias hasta ballenas, están formados por células',
        'Opción correcta',
        'La generación espontánea fue refutada por Pasteur; las células provienen de células preexistentes',
        'Plantas, hongos, protozoos y bacterias también tienen células'
      ]
    }
  },

  // ===== INGLÉS - BLOQUE 1 (EN01-EN18) =====
  {
    id: 'EN01',
    area: 'ingles',
    areaName: 'Inglés',
    difficulty: 'facil',
    context: `Notice: "Wet floor. Caution!"`,
    question: `Where would you most likely see this notice?`,
    options: ['In a library reading room', 'In a recently cleaned restroom or hallway', 'In a parking lot', 'In a classroom during an exam'],
    correct: 1,
    explanation: {
      correct: '"Wet floor. Caution!" is a warning sign placed on floors that have just been cleaned or are slippery. It is commonly seen in restrooms, hallways, or entryways after mopping.',
      wrongs: ['Libraries have quiet and book-related notices', 'Opción correcta', 'Parking lots have traffic and parking-related signs', 'Classrooms have academic rules, not wet floor signs']
    }
  },
  {
    id: 'EN02',
    area: 'ingles',
    areaName: 'Inglés',
    difficulty: 'facil',
    context: `Notice: "Employees must wash hands before returning to work."`,
    question: `What is the purpose of this notice?`,
    options: ['To ask customers to wash their hands', 'To remind workers about hygiene practices', 'To announce a hand-washing competition', 'To close the business for cleaning'],
    correct: 1,
    explanation: {
      correct: 'The notice tells employees that they "must wash hands before returning to work." This is a hygiene requirement commonly found in food service or healthcare settings to ensure cleanliness and prevent contamination.',
      wrongs: ['The notice is directed at employees, not customers', 'Opción correcta', 'This is a requirement, not a competition', 'The business remains open; employees just need to wash hands']
    }
  },
  {
    id: 'EN03',
    area: 'ingles',
    areaName: 'Inglés',
    difficulty: 'media',
    context: `Read the following text:
"Bees are essential for our planet. About 75% of the crops we eat depend on pollination by bees. Unfortunately, bee populations have been declining due to pesticides, climate change, and habitat loss. Scientists say that if we do not protect bees, we may face a serious food crisis in the future."`,
    question: `According to the text, what is the main reason we should worry about the decline in bee populations?`,
    options: ['Bees produce honey that humans eat', 'Many crops depend on bees for pollination and food production', 'Bees are beautiful insects that should be protected', 'Pesticides are destroying all insects in nature'],
    correct: 1,
    explanation: {
      correct: 'The text states that "about 75% of the crops we eat depend on pollination by bees" and warns that without them "we may face a serious food crisis." This shows bees are essential for food production.',
      wrongs: ['Honey is a product of bees, but the text focuses on their role in crop pollination', 'Opción correcta', 'The text focuses on their ecological importance, not their appearance', 'Pesticides are mentioned as a cause of decline, but the concern is about crop production']
    }
  },
  {
    id: 'EN04',
    area: 'ingles',
    areaName: 'Inglés',
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
      wrongs: ['Sarah does not mention food', 'Opción correcta', 'Sarah mentions client feedback forms, not a list of new clients', 'Sarah does not ask for electronic devices']
    }
  },
  {
    id: 'EN05',
    area: 'ingles',
    areaName: 'Inglés',
    difficulty: 'facil',
    context: `Sign in a store window: "Sale! All items 30% off. This weekend only."`,
    question: `What does this sign mean?`,
    options: ['The store is closed this weekend', 'All products have a discount of 30% for a limited time', 'Only 30 items are on sale', 'You must pay 30% more for all items'],
    correct: 1,
    explanation: {
      correct: '"Sale! All items 30% off. This weekend only" means everything in the store is discounted by 30% during the weekend. "30% off" means you pay 70% of the original price.',
      wrongs: ['The store is having a sale, it is open', 'Opción correcta', '"All items" means every product, not just 30 items', '"30% off" means a reduction, not an increase']
    }
  },
  {
    id: 'EN06',
    area: 'ingles',
    areaName: 'Inglés',
    difficulty: 'dificil',
    context: `Read the text:
"Urban gardening has gained popularity in many cities around the world. In spaces as small as balconies or rooftops, people grow vegetables, herbs, and even fruits. This practice not only provides fresh food but also helps reduce the 'urban heat island' effect by adding green spaces. Some experts argue that promoting urban agriculture could improve food security in densely populated areas, though others question its efficiency compared to traditional farming."`,
    question: `What is one environmental benefit of urban gardening mentioned in the text?`,
    options: ['It eliminates the need for traditional farming', 'It helps reduce the urban heat island effect', 'It guarantees food security for all city residents', 'It is more efficient than rural agriculture'],
    correct: 1,
    explanation: {
      correct: 'The text states that urban gardening "helps reduce the \'urban heat island\' effect by adding green spaces." This is a direct environmental benefit of introducing vegetation into city environments.',
      wrongs: ['The text says urban gardening "provides fresh food" but does not claim it eliminates traditional farming', 'Opción correcta', 'The text says some experts suggest it "could improve food security" but does not guarantee it', 'The text mentions that some question its efficiency compared to traditional farming']
    }
  },
  {
    id: 'EN07',
    area: 'ingles',
    areaName: 'Inglés',
    difficulty: 'media',
    context: `Read the advertisement:
"Learn Spanish in just 3 months! Our method is fast, fun, and effective. You will practice with native speakers every day. Small groups, personalized attention. Sign up now and get your first lesson free!"`,
    question: `What does the advertisement offer to new customers?`,
    options: ['A discount on the full course', 'One free lesson', 'A free trip to Spain', 'A certificate of completion'],
    correct: 1,
    explanation: {
      correct: 'The ad says "Sign up now and get your first lesson free!" This is a promotional offer to attract new students by giving them a free trial.',
      wrongs: ['The ad does not mention a discount', 'Opción correcta', 'The ad mentions practicing "with native speakers" but not a trip to Spain', 'A certificate is not mentioned in the advertisement']
    }
  },
  {
    id: 'EN08',
    area: 'ingles',
    areaName: 'Inglés',
    difficulty: 'dificil',
    context: `Read the text:
"Scientists have discovered a new species of frog in the rainforests of Ecuador. The frog, which is only two centimeters long, has a bright blue color that serves as a warning to predators. Unlike many other frogs, this species does not lay its eggs in water. Instead, it lays them on leaves, and the male guards them until they hatch. This discovery highlights how much we still have to learn about biodiversity in tropical ecosystems."`,
    question: `According to the text, what is unusual about the way this frog reproduces?`,
    options: ['It lays eggs in water like most frogs', 'It lays eggs on leaves and the male protects them', 'It gives birth to live young', 'It does not reproduce at all'],
    correct: 1,
    explanation: {
      correct: 'The text says "Unlike many other frogs, this species does not lay its eggs in water. Instead, it lays them on leaves, and the male guards them." This is presented as an unusual reproductive behavior.',
      wrongs: ['The text says this is UNLIKE many other frogs', 'Opción correcta', 'There is no mention of live birth', 'The text describes the frog\'s reproduction in detail']
    }
  },
  {
    id: 'EN09',
    area: 'ingles',
    areaName: 'Inglés',
    difficulty: 'media',
    context: `Read the text:
"The platypus is one of the strangest animals in the world. It has a bill like a duck, a tail like a beaver, and feet like an otter. It is one of the very few mammals that lay eggs instead of giving birth to live young. When scientists first saw a platypus, they thought it was a joke."`,
    question: `Why did scientists think the platypus was a joke when they first saw it?`,
    options: ['Because it was very small', 'Because it has features from different animals combined', 'Because it could not swim', 'Because it was extinct'],
    correct: 1,
    explanation: {
      correct: 'The platypus has "a bill like a duck, a tail like a beaver, and feet like an otter" — a combination of features from many different animals. This unusual mix made early scientists think it was a hoax or joke.',
      wrongs: ['Size is not mentioned as a reason for disbelief', 'Opción correcta', 'The text mentions it has otter-like feet, suggesting it can swim', 'The platypus was not extinct when discovered']
    }
  },
  {
    id: 'EN10',
    area: 'ingles',
    areaName: 'Inglés',
    difficulty: 'facil',
    context: `Sign on a door: "Push to open."`,
    question: `What should you do to open this door?`,
    options: ['Pull the door towards you', 'Apply force away from your body', 'Knock before entering', 'Slide the door sideways'],
    correct: 1,
    explanation: {
      correct: '"Push" means to apply force to something away from your body. "Push to open" means you need to push the door forward, not pull it.',
      wrongs: ['"Pull" is the opposite of "push"', 'Opción correcta', 'There is no instruction to knock', 'The sign does not mention sliding']
    }
  },
  {
    id: 'EN11',
    area: 'ingles',
    areaName: 'Inglés',
    difficulty: 'dificil',
    context: `Read the text:
"The term 'glass ceiling' refers to an invisible barrier that prevents women and minorities from reaching top positions in the workplace, regardless of their qualifications or achievements. Although many companies have policies promoting equality, studies show that women still represent less than 10% of CEOs in Fortune 500 companies. Critics argue that the glass ceiling persists due to unconscious bias and lack of mentorship opportunities for underrepresented groups."`,
    question: `What does the "glass ceiling" metaphor describe?`,
    options: ['A physical barrier made of glass in offices', 'An invisible obstacle that limits career advancement for certain groups', 'A policy that guarantees equal opportunities for everyone', 'The maximum salary a person can earn in a company'],
    correct: 1,
    explanation: {
      correct: 'The text defines the glass ceiling as "an invisible barrier that prevents women and minorities from reaching top positions." The metaphor describes an obstacle that is not officially recognized but exists in practice.',
      wrongs: ['"Glass ceiling" is a metaphor, not a literal glass barrier', 'Opción correcta', 'The text says policies exist but the barrier persists despite them', 'Salary caps are different from the glass ceiling concept']
    }
  },
  {
    id: 'EN12',
    area: 'ingles',
    areaName: 'Inglés',
    difficulty: 'media',
    context: `Read the instructions:
"To use the washing machine: 1. Sort your clothes by color. 2. Load the machine but do not overfill it. 3. Add detergent to the drawer. 4. Select the appropriate cycle. 5. Press the start button. Warning: Do not open the door while the machine is running."`,
    question: `What should you do before adding detergent?`,
    options: ['Open the door while the machine runs', 'Sort clothes and load the machine', 'Press the start button', 'Select the appropriate cycle'],
    correct: 1,
    explanation: {
      correct: 'The instructions list steps in order: sort clothes, load the machine, then add detergent. Step 2 (loading) comes before step 3 (adding detergent).',
      wrongs: ['The warning says NOT to open the door while running', 'Opción correcta', 'Pressing start is the final step (step 5)', 'Selecting the cycle is step 4, after adding detergent in step 3']
    }
  },
  {
    id: 'EN13',
    area: 'ingles',
    areaName: 'Inglés',
    difficulty: 'media',
    context: `Read the story:
"Lucy had always been afraid of public speaking. When her teacher announced that every student had to present a project to the class, Lucy felt nervous. She practiced her presentation in front of the mirror every night. On presentation day, she took a deep breath and began speaking. To her surprise, her classmates applauded when she finished."`,
    question: `What can be inferred about Lucy from the text?`,
    options: ['She enjoys speaking in front of large audiences', 'She overcame her fear by practicing and succeeded', 'She asked the teacher to excuse her from the presentation', 'She failed the presentation because she was too nervous'],
    correct: 1,
    explanation: {
      correct: 'The text shows Lucy was afraid but "practiced her presentation in front of the mirror every night" and her classmates "applauded when she finished." This implies she overcame her fear through preparation and was successful.',
      wrongs: ['The text says she "had always been afraid of public speaking"', 'Opción correcta', 'She did not ask to be excused; she prepared and presented', 'The applause suggests she did well, not that she failed']
    }
  },
  {
    id: 'EN14',
    area: 'ingles',
    areaName: 'Inglés',
    difficulty: 'facil',
    context: `Read the sign: "No smoking. Fine: $50."`,
    question: `What happens if someone smokes in this area?`,
    options: ['They will receive a warning', 'They have to pay a penalty of $50', 'They will be asked to leave politely', 'Nothing happens'],
    correct: 1,
    explanation: {
      correct: '"No smoking" prohibits smoking, and "Fine: $50" means the penalty or payment for breaking this rule is $50. A "fine" is money paid as a punishment for an offense.',
      wrongs: ['The sign states a fine, not just a warning', 'Opción correcta', 'The sign mentions a specific fine amount', 'There is a penalty for violating the rule']
    }
  },
  {
    id: 'EN15',
    area: 'ingles',
    areaName: 'Inglés',
    difficulty: 'dificil',
    context: `Read the text:
"Social media algorithms are designed to show users content they are likely to engage with. While this creates a personalized experience, it can also lead to 'echo chambers' where people are only exposed to opinions that reinforce their own. This lack of exposure to different perspectives can increase political polarization and reduce understanding between groups with opposing views."`,
    question: `What is a negative consequence of social media algorithms mentioned in the text?`,
    options: ['They show too many advertisements', 'They can create echo chambers that increase polarization', 'They are difficult for users to understand', 'They make social media platforms slower'],
    correct: 1,
    explanation: {
      correct: 'The text states that algorithms "can also lead to \'echo chambers\'" and that "this lack of exposure to different perspectives can increase political polarization." These are the negative consequences explained.',
      wrongs: ['Advertisements are not mentioned in this context', 'Opción correcta', 'User understanding of algorithms is not discussed', 'Platform speed is not mentioned']
    }
  },
  {
    id: 'EN16',
    area: 'ingles',
    areaName: 'Inglés',
    difficulty: 'media',
    context: `Read the message:
"Dear passengers, Flight 247 to New York is delayed by two hours due to bad weather conditions. We apologize for the inconvenience. Please proceed to gate 12 for further information."`,
    question: `Why was the flight delayed?`,
    options: ['Overbooking of the flight', 'Bad weather conditions', 'Mechanical problems with the plane', 'A strike by the airline staff'],
    correct: 1,
    explanation: {
      correct: 'The announcement clearly states the delay is "due to bad weather conditions." This is the reason provided to passengers for the two-hour delay.',
      wrongs: ['Overbooking is not mentioned', 'Opción correcta', 'Mechanical problems are not mentioned', 'A strike is not mentioned as the cause']
    }
  },
  {
    id: 'EN17',
    area: 'ingles',
    areaName: 'Inglés',
    difficulty: 'dificil',
    context: `Read the text:
"The Great Pacific Garbage Patch is a massive collection of plastic debris floating in the North Pacific Ocean. It is not a solid island of trash, as many imagine, but rather a soup of microplastics spread over a vast area. These tiny plastic particles are often mistaken for food by marine animals, leading to ingestion and death. Scientists estimate that cleaning up the patch would take decades and cost billions of dollars."`,
    question: `What misconception about the Great Pacific Garbage Patch does the text correct?`,
    options: ['That it is located in the Atlantic Ocean', 'That it is a solid island of trash', 'That it was caused by a single ship accident', 'That it contains only metal debris'],
    correct: 1,
    explanation: {
      correct: 'The text says "It is not a solid island of trash, as many imagine, but rather a soup of microplastics." This directly corrects the common misconception that it is a solid, visible island.',
      wrongs: ['The text states it is in the North Pacific Ocean', 'Opción correcta', 'The text does not mention a single accident as the cause', 'The text specifically mentions plastic debris']
    }
  },
  {
    id: 'EN18',
    area: 'ingles',
    areaName: 'Inglés',
    difficulty: 'facil',
    context: `Notice: "Please close the door. Air conditioning is on."`,
    question: `Why does the notice ask people to close the door?`,
    options: ['To keep the room warm', 'To prevent the cold air from escaping and save energy', 'To block outside noise', 'To prevent animals from entering'],
    correct: 1,
    explanation: {
      correct: '"Air conditioning is on" means the cooling system is operating. Closing the door keeps the cold air inside, which saves energy and keeps the room at the desired temperature.',
      wrongs: ['Air conditioning cools, not warms', 'Opción correcta', 'Noise is not mentioned in the notice', 'Animals are not mentioned in the notice']
    }
  },
  // ===== PREGUNTAS ADICIONALES =====
  // Más Lectura Crítica
  {
    id: 'LC09',
    area: 'lectura',
    areaName: 'Lectura Crítica',
    difficulty: 'dificil',
    context: `"¿Qué es entonces la verdad? Una hueste en movimiento de metáforas, metonimias, antropomorfismos, en resumidas cuentas, una suma de relaciones humanas que han sido realzadas, extrapoladas y adornadas poética y retóricamente y que, después de un prolongado uso, un pueblo considera firmes, canónicas y vinculantes: las verdades son ilusiones de las que se ha olvidado que lo son." - Friedrich Nietzsche, "Sobre verdad y mentira en sentido extramoral" (1873).`,
    question: `Según Nietzsche, la verdad es el resultado de:`,
    options: ['Un proceso de adecuación del intelecto a la realidad objetiva', 'Un conjunto de metáforas e ilusiones que la humanidad ha olvidado que lo son', 'Una revelación divina accesible mediante la razón pura', 'El consenso alcanzado por la comunidad científica a lo largo de la historia'],
    correct: 1,
    explanation: {
      correct: 'Nietzsche sostiene que la verdad no es una correspondencia con la realidad objetiva, sino una construcción humana compuesta de metáforas y relaciones que, por el uso prolongado, se han vuelto canónicas. La clave está en su afirmación de que las verdades son "ilusiones de las que se ha olvidado que lo son".',
      wrongs: [
        'Nietzsche rechaza explícitamente la teoría de la verdad como adecuación o correspondencia con la realidad',
        'Opción correcta',
        'Nietzsche critica la noción de verdad absoluta, no la fundamenta en lo divino',
        'El consenso científico sería, para Nietzsche, otra ilusión colectiva, no el origen de la verdad'
      ]
    }
  },
  {
    id: 'LC10',
    area: 'lectura',
    areaName: 'Lectura Crítica',
    difficulty: 'media',
    context: `"Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo. Macondo era entonces una aldea de veinte casas de barro y cañabrava construidas a la orilla de un río de aguas diáfanas que se precipitaban por un lecho de piedras pulidas, blancas y enormes como huevos prehistóricos." - Gabriel García Márquez, "Cien años de soledad" (1967).`,
    question: `Por la estructura temporal del fragmento, se puede afirmar que el narrador:`,
    options: ['Relata los hechos en orden estrictamente cronológico', 'Alterna entre un momento futuro y un recuerdo del pasado para crear una perspectiva temporal compleja', 'Utiliza únicamente el tiempo presente para narrar los acontecimientos', 'Presenta la historia desde la perspectiva de varios personajes simultáneamente'],
    correct: 1,
    explanation: {
      correct: 'El fragmento comienza con una referencia a un hecho futuro ("Muchos años después, frente al pelotón de fusilamiento...") y luego retrocede para narrar el pasado ("Macondo era entonces..."). Esta técnica narrativa, característica de García Márquez, establece una perspectiva temporal que abarca pasado, presente y futuro desde el inicio de la novela.',
      wrongs: [
        'El texto no sigue un orden cronológico lineal, sino que alterna entre futuro y pasado',
        'Opción correcta',
        'El texto utiliza tiempos pasados ("había de recordar", "era"), no presente',
        'El narrador es omnisciente pero no hay indicios de múltiples perspectivas en el fragmento'
      ]
    }
  },

  // Más Matemáticas
  {
    id: 'MT09', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'media',
    context: `En una rifa de una bicicleta en un colegio de Bucaramanga se venden 120 boletas numeradas del 1 al 120.`,
    question: `Si una persona compra 15 boletas, ¿cuál es la probabilidad de que gane la bicicleta?`,
    options: ['1/8', '1/15', '1/120', '1/6'],
    correct: 0,
    explanation: { correct: 'Probabilidad = casos favorables / casos totales = 15/120 = 1/8.', wrongs: ['Ese es el nÃºmero de boletas compradas, no la probabilidad', 'Opción correcta', 'Usaste 120 en lugar de 15 en el numerador', 'Dividiste 120/15 = 8, pero la fracciÃ³n es 15/120 = 1/8'] }
  },
  {
    id: 'MT10', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'dificil',
    context: `Un artículo cuesta $250.000 en una tienda de Cartagena. Primero sube 20% y luego baja 20%.`,
    question: `¿Cuál es el precio final del artículo?`,
    options: ['$250.000', '$260.000', '$240.000', '$230.000'],
    correct: 2,
    explanation: { correct: 'Sube 20%: 250.000 x 1,20 = 300.000. Baja 20%: 300.000 x 0,80 = 240.000. El precio final es $240.000.', wrongs: ['Pareciera que vuelve al original pero no: 20% de aumento y luego 20% de disminución no se cancelan', 'Opción correcta', 'Calculaste 250.000 x 0,96 directamente? Revisa', 'Cálculo incorrecto'] }
  },

  // Más Sociales
  {
    id: 'SC09',
    area: 'sociales',
    areaName: 'Sociales y Ciudadanía',
    difficulty: 'dificil',
    context: `"La Constitución Política de Colombia de 1991 establece en su artículo 1 que 'Colombia es un Estado Social de Derecho, organizado en forma de República unitaria, descentralizada, con autonomía de sus entidades territoriales, democrática, participativa y pluralista, fundada en el respeto de la dignidad humana'."`,
    question: `De acuerdo con el artículo 1 de la Constitución de 1991, Colombia se define como un Estado:`,
    options: ['Centralista que elimina la autonomía de las regiones', 'Social de Derecho, democrático, participativo y pluralista', 'Federal con plena autonomía de cada entidad territorial', 'Teocrático fundamentado en la religión católica'],
    correct: 1,
    explanation: {
      correct: 'El artículo 1 de la Constitución de 1991 define a Colombia como un Estado Social de Derecho con las características mencionadas: unitario, descentralizado, democrático, participativo y pluralista. Este artículo refleja el cambio fundamental respecto a la Constitución de 1886, al incorporar la participación ciudadana y el reconocimiento de la diversidad como pilares del Estado.',
      wrongs: [
        'La Constitución de 1991 es descentralizada y otorga autonomía a las entidades territoriales, no es centralista',
        'Opción correcta',
        'Colombia es una república unitaria, no federal; la autonomía territorial tiene límites establecidos por la Constitución',
        'Colombia es un Estado laico que garantiza la libertad de cultos, no tiene religión oficial (art. 19)'
      ]
    }
  },
  {
    id: 'SC10',
    area: 'sociales',
    areaName: 'Sociales y Ciudadanía',
    difficulty: 'media',
    context: `"El 20 de julio de 1810 se produjo en Santa Fe de Bogotá un episodio conocido como el 'Florero de Llorente', que desencadenó un movimiento de independencia. Sin embargo, la independencia definitiva de la Nueva Granada solo se consolida después de la batalla de Boyacá el 7 de agosto de 1819, liderada por Simón Bolívar."`,
    question: `Según el texto, el proceso de independencia de la Nueva Granada:`,
    options: ['Fue un evento único ocurrido el 20 de julio de 1810', 'Culminó militarmente con la batalla de Boyacá en 1819 después de un proceso de casi una década', 'Se logró sin enfrentamientos armados mediante la negociación con España', 'Fue liderado exclusivamente por Antonio Nariño desde 1810'],
    correct: 1,
    explanation: {
      correct: 'El texto distingue entre el inicio del proceso (20 de julio de 1810 con el Florero de Llorente) y la consolidación militar de la independencia (Batalla de Boyacá, 7 de agosto de 1819). La independencia no fue un evento único sino un proceso que incluyó la reconquista española (1815-1819) y culminó con la campaña libertadora liderada por Simón Bolívar.',
      wrongs: [
        'El 20 de julio fue el inicio del proceso, pero la independencia se consolidó militarmente en 1819',
        'Opción correcta',
        'La independencia requirió una guerra de casi una década contra el dominio español',
        'Simón Bolívar fue el líder principal de la campaña libertadora que culminó en Boyacá'
      ]
    }
  },

  // Más Ciencias Naturales
  {
    id: 'CN09',
    area: 'ciencias',
    areaName: 'Ciencias Naturales',
    difficulty: 'media',
    context: `"En un laboratorio de química, se preparan cuatro soluciones: limpiador con amoníaco (pH 11), jugo gástrico (pH 2), leche (pH 6,5) y agua de mar (pH 8). Se introducen tiras de papel tornasol en cada una."`,
    question: `¿Cuál de las siguientes combinaciones de color del tornasol es correcta según el pH de cada solución?`,
    options: ['Amoníaco: rojo; jugo gástrico: azul; leche: rojo; agua de mar: azul', 'Amoníaco: azul; jugo gástrico: rojo; leche: rojo; agua de mar: azul', 'Amoníaco: rojo; jugo gástrico: rojo; leche: azul; agua de mar: rojo', 'Amoníaco: azul; jugo gástrico: azul; leche: rojo; agua de mar: rojo'],
    correct: 1,
    explanation: {
      correct: 'El papel tornasol se vuelve azul en medio básico (pH > 7) y rojo en medio ácido (pH < 7). Amoníaco (pH 11, básico) → azul. Jugo gástrico (pH 2, ácido) → rojo. Leche (pH 6,5, ácido) → rojo. Agua de mar (pH 8, básico) → azul.',
      wrongs: [
        'El amoníaco es básico, por lo que torna el papel azul, no rojo',
        'Opción correcta',
        'El agua de mar es ligeramente básica (pH 8), por lo que torna el papel azul, no rojo',
        'El jugo gástrico es ácido (pH 2), por lo que torna el papel rojo, no azul'
      ]
    }
  },
  {
    id: 'CN10',
    area: 'ciencias',
    areaName: 'Ciencias Naturales',
    difficulty: 'dificil',
    context: `"Una persona con grupo sanguíneo O- (donante universal) dona sangre a un paciente con grupo sanguíneo AB+. El paciente AB+ tiene anticuerpos anti-A y anti-B en el suero. La sangre tipo O no tiene antígenos A ni B en sus glóbulos rojos."`,
    question: `¿Por qué la sangre tipo O- se considera donante universal para transfusiones de glóbulos rojos?`,
    options: ['Porque no tiene ningún antígeno en la superficie de sus glóbulos rojos, por lo que no activa el sistema inmune del receptor', 'Porque el tipo O es el más común en la población, por lo que es más seguro', 'Porque los anticuerpos del donante O- neutralizan los antígenos del receptor AB+', 'Porque la sangre O- tiene factor Rh positivo que es compatible con todos'],
    correct: 0,
    explanation: {
      correct: 'Los glóbulos rojos tipo O no tienen antígenos A ni B en su superficie, y al ser Rh negativo tampoco tienen antígeno Rh. Al no presentar estos antígenos, el sistema inmune del receptor (incluso AB+ que no produce anticuerpos anti-A ni anti-B) no reconoce los glóbulos rojos como extraños y no los ataca. Por eso se llama donante universal de glóbulos rojos.',
      wrongs: [
        'Opción correcta',
        'La frecuencia del tipo sanguíneo no determina la compatibilidad; es la ausencia de antígenos lo que importa',
        'Los anticuerpos del donante están en el plasma, no en los glóbulos rojos; además en transfusiones de glóbulos rojos concentrados se minimiza el plasma donado',
        'El tipo O- es Rh negativo, no positivo; la ausencia total de antígenos A, B y Rh es lo que permite la compatibilidad universal'
      ]
    }
  },

  // Más preguntas para alcanzar cantidad suficiente
  {
    id: 'LC11',
    area: 'lectura',
    areaName: 'Lectura Crítica',
    difficulty: 'dificil',
    context: `"Puesto que los sentidos nos engañan a veces, quise suponer que no existía cosa alguna que fuese tal como ellos nos la hacen imaginar. Y, puesto que hay hombres que yerran al razonar, incluso acerca de los más simples asuntos geométricos, juzgué que yo estaba tan expuesto al error como cualquier otro; por consiguiente, rechacé como falsas todas las razones que había tenido antes por demostrativas." - René Descartes, "Meditaciones metafísicas" (1641).`,
    question: `La estrategia metodológica que utiliza Descartes en este fragmento consiste en:`,
    options: ['Aceptar como verdadero todo conocimiento proveniente de los sentidos', 'Rechazar de manera provisional todo aquello de lo que pueda dudarse para encontrar una base segura del conocimiento', 'Demostrar que el error es imposible si se sigue la lógica geométrica', 'Afirmar que todos los hombres yerran por igual y que el conocimiento es imposible'],
    correct: 1,
    explanation: {
      correct: 'Descartes describe aquí la duda metódica: decide rechazar como falso todo aquello de lo que pueda dudar, incluso mínimamente, para encontrar una verdad indubitable sobre la cual fundamentar el conocimiento. No es un escepticismo permanente sino un método para alcanzar certezas.',
      wrongs: [
        'Descartes afirma explícitamente que los sentidos nos engañan, por lo que no los acepta acríticamente',
        'Opción correcta',
        'Descartes no afirma que el error sea imposible; precisamente usa la posibilidad del error como punto de partida',
        'Descartes busca superar la duda, no instalarse en ella permanentemente'
      ]
    }
  },
  {
    id: 'LC12',
    area: 'lectura',
    areaName: 'Lectura Crítica',
    difficulty: 'facil',
    context: `"El Aleph" de Jorge Luis Borges (1945) narra el descubrimiento de un punto en el sótano de una casa desde el cual pueden verse todos los puntos del universo simultáneamente sin confusión ni superposición. El protagonista, al asomarse, contempla "el inconcebible universo" y experimenta una revelación que trasciende los límites del lenguaje humano.`,
    question: `En el cuento, el Aleph funciona como un símbolo de:`,
    options: ['El conocimiento limitado de los seres humanos', 'La simultaneidad total de la experiencia y el conocimiento absoluto', 'La belleza de una joya o piedra preciosa', 'El amor imposible entre dos personas'],
    correct: 1,
    explanation: {
      correct: 'El Aleph es un punto que contiene todos los demás puntos del universo, permitiendo verlo todo al mismo tiempo. Borges lo utiliza como símbolo del conocimiento absoluto, de la experiencia total que el lenguaje no puede expresar plenamente.',
      wrongs: [
        'El Aleph permite precisamente superar los límites del conocimiento humano, aunque el lenguaje no pueda expresarlo',
        'Opción correcta',
        'El Aleph no es una joya, sino un punto en el espacio que contiene la totalidad del universo',
        'El cuento aborda temas filosóficos y metafísicos, no exclusivamente románticos'
      ]
    }
  },
  {
    id: 'MT11', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'facil',
    question: `Una pizzería en Pasto vende pizzas circulares de 30 cm de diámetro. ¿Cuál es el área de la pizza? (Use π = 3,14)`,
    options: ['706,5 cm²', '94,2 cm²', '471 cm²', '282,6 cm²'],
    correct: 0,
    explanation: { correct: 'Radio = 30/2 = 15 cm. Área = πr² = 3,14 x 15² = 3,14 x 225 = 706,5 cm².', wrongs: ['Opción correcta', 'Ese sería el perÃ­metro (2πr)', 'Usaste el diÃ¡metro en lugar del radio en la fórmula', 'Multiplicaste 3,14 x 30 = 94,2: ese es el perÃ­metro'] }
  },
  {
    id: 'MT12', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'media',
    question: `En un mercado de Sincelejo, 3 aguacates y 2 mangos cuestan $7.500, mientras que 2 aguacates y 1 mango cuestan $4.500. ¿Cuánto cuesta un aguacate?`,
    options: ['$1.000', '$1.500', '$2.000', '$2.500'],
    correct: 1,
    explanation: { correct: 'Sistema: 3a+2m=7500, 2a+m=4500. Multiplicando la segunda por 2: 4a+2m=9000. Restando: a=1500. Aguacate = $1.500.', wrongs: ['Revisa el sistema de ecuaciones', 'Opción correcta', 'Probablemente confundiste aguacate con mango', 'Cálculo incorrecto del sistema'] }
  },
  {
    id: 'SC11',
    area: 'sociales',
    areaName: 'Sociales y Ciudadanía',
    difficulty: 'facil',
    context: `"Colombia posee una gran diversidad de regiones naturales. La región Andina, donde se concentra la mayor parte de la población, está atravesada por las cordilleras Occidental, Central y Oriental. La región Caribe, al norte, se caracteriza por sus llanuras costeras y clima cálido."`,
    question: `De acuerdo con el texto, la región colombiana que concentra la mayor población y está atravesada por tres cordilleras es:`,
    options: ['La región Caribe', 'La región Andina', 'La región Pacífica', 'La región Amazónica'],
    correct: 1,
    explanation: {
      correct: 'El texto indica que la región Andina "concentra la mayor parte de la población" y "está atravesada por las cordilleras Occidental, Central y Oriental". Esta región incluye las principales ciudades del país (Bogotá, Medellín, Cali) y es la más poblada de Colombia.',
      wrongs: [
        'La región Caribe está al norte, es de llanuras costeras, no es atravesada por las tres cordilleras',
        'Opción correcta',
        'La región Pacífica está al occidente, no es atravesada por las tres cordilleras',
        'La Amazonía es una región de selva tropical al sur del país'
      ]
    }
  },
  {
    id: 'SC12',
    area: 'sociales',
    areaName: 'Sociales y Ciudadanía',
    difficulty: 'media',
    question: `Un ciudadano considera que su EPS le ha negado injustificadamente un tratamiento médico urgente. ¿Cuál es el mecanismo constitucional más adecuado para proteger su derecho a la salud?`,
    options: ['Presentar una demanda penal contra la EPS', 'Interponer una acción de tutela', 'Solicitar un referendo', 'Iniciar una acción popular'],
    correct: 1,
    explanation: {
      correct: 'La acción de tutela (art. 86 Constitución) es el mecanismo idóneo para la protección inmediata de derechos fundamentales como la salud cuando son vulnerados o amenazados. La Corte Constitucional ha establecido que el derecho a la salud es fundamental y puede ser protegido mediante tutela, especialmente cuando está en riesgo la vida o la integridad de la persona.',
      wrongs: [
        'La demanda penal es para delitos, no para proteger derechos fundamentales vulnerados por una EPS',
        'Opción correcta',
        'El referendo es un mecanismo de participación para decidir sobre normas, no para proteger derechos individuales',
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
    question: `¿Qué combinación de fenómenos explica lo ocurrido?`,
    options: ['El oxígeno se consume en la combustión y la disminución de presión hace que el agua suba; el CO₂ producido se disuelve parcialmente en el agua', 'La vela apaga porque el vaso bloquea el viento; el agua sube por capilaridad', 'El calor derrite la cera que sella el vaso; el agua sube por evaporación', 'El dióxido de carbono producido empuja el agua hacia arriba por su menor densidad'],
    correct: 0,
    explanation: {
      correct: 'La combustión consume oxígeno (O₂) y produce CO₂. Parte del CO₂ se disuelve en el agua, reduciendo la cantidad total de gas. Al disminuir el número de moléculas de gas y enfriarse el aire dentro del vaso, la presión interna disminuye. La presión atmosférica externa, mayor, empuja el agua hacia arriba dentro del vaso hasta igualar las presiones.',
      wrongs: [
        'Opción correcta',
        'El vaso no bloquea el viento en un ambiente cerrado; el fenómeno se debe al consumo de oxígeno y cambios de presión',
        'No es la cera derretida ni la evaporación lo que explica el ascenso del agua',
        'El CO₂ es más denso que el aire, no menos; además su producción no es suficiente para empujar el agua'
      ]
    }
  },
  {
    id: 'CN12',
    area: 'ciencias',
    areaName: 'Ciencias Naturales',
    difficulty: 'dificil',
    context: `"Un estudiante deja caer una pelota desde lo alto de un edificio de 45 m de altura. Simultáneamente, otro estudiante lanza otra pelota idéntica hacia arriba desde el suelo con una velocidad inicial de 30 m/s."`,
    question: `Si se desprecia la resistencia del aire y se toma g = 10 m/s², ¿cuál de las siguientes afirmaciones es correcta?`,
    options: ['La pelota lanzada hacia arriba alcanzará una altura máxima de 30 m', 'La pelota que cae desde el edificio tardará 3 segundos en llegar al suelo', 'Ambas pelotas se encontrarán en el mismo punto al mismo tiempo', 'La pelota lanzada hacia arriba tardará 6 segundos en regresar al suelo'],
    correct: 1,
    explanation: {
      correct: 'Para caída libre desde 45 m: h = (1/2)gt² → t = √(2h/g) = √(90/10) = √9 = 3 s. La pelota lanzada hacia arriba alcanza altura máxima cuando v = 0: v_f = v_i - gt → t = 30/10 = 3 s, y la altura máxima es h = v_i·t - (1/2)gt² = 30×3 - 5×9 = 90 - 45 = 45 m, y tarda otros 3 s en caer (6 s total).',
      wrongs: [
        'La altura máxima se calcula con h = v_i²/(2g) = 900/20 = 45 m, no 30 m',
        'Opción correcta',
        'Las pelotas se encontrarían si sus ecuaciones de movimiento se igualan; con estos datos no ocurre al mismo tiempo',
        'Es correcto que la pelota lanzada tarda 6 s en regresar, pero no es la única afirmación correcta'
      ]
    }
  },
  // ===== LECTURA CRÍTICA ADICIONALES =====
  {
    id: 'LC13',
    area: 'lectura',
    areaName: 'Lectura Crítica',
    difficulty: 'media',
    context: `"El puritano quería ser un profesional y nosotros estamos obligados a serlo. Pues cuando la abstinencia y el afán de lucro, al ascender a la cumbre del dominio exclusivo sobre la conciencia moral de los hombres, como ocurrió en la época del desarrollo de la moderna economía capitalista, rompió las trabas de la ética utilitaria y quitó el envoltorio puritano, no solo tendió a influir decisivamente sobre el tono de vida —tendencia que hoy se ha hecho realidad—, sino que condujo directamente al 'especialismo sin espíritu, al goce sin corazón'." - Max Weber, "La ética protestante y el espíritu del capitalismo" (1905).`,
    question: `Según Weber, la ética puritana contribuyó al surgimiento del capitalismo al:`,
    options: ['Promover la acumulación de riqueza como signo de salvación divina', 'Prohibir el trabajo profesional y el comercio', 'Valorar el ocio y el desprendimiento material', 'Exigir la pobreza como condición para la vida moral'],
    correct: 0,
    explanation: {
      correct: 'Weber argumenta que la ética puritana valoraba el trabajo metódico y la abstinencia, lo que llevaba a la acumulación de capital. La riqueza, lejos de ser condenada, se veía como signo de bendición divina, siempre que no se disfrutara en el consumo suntuario.',
      wrongs: [
        'Opción correcta',
        'La ética puritana promovía el trabajo riguroso como vocación, no lo prohibía',
        'Los puritanos rechazaban el ocio y valoraban el trabajo disciplinado',
        'Los puritanos veían la riqueza como posible señal de salvación, no exigían pobreza'
      ]
    }
  },
  {
    id: 'LC14',
    area: 'lectura',
    areaName: 'Lectura Crítica',
    difficulty: 'facil',
    context: `"Es tan corto el amor y tan largo el olvido." - Pablo Neruda, "Veinte poemas de amor y una canción desesperada" (1924).

Del poema XX: "Puedo escribir los versos más tristes esta noche. / Escribir, por ejemplo: 'La noche está estrellada, / y tiritan, azules, los astros, a lo lejos'."`,
    question: `En el verso "Es tan corto el amor y tan largo el olvido", la figura retórica principal que emplea Neruda es:`,
    options: ['La metáfora pura sin contraste de ideas', 'La antítesis entre la brevedad del amor y la extensión del olvido', 'La hipérbole que exagera el tiempo del amor', 'La personificación de los sentimientos como seres animados'],
    correct: 1,
    explanation: {
      correct: 'Neruda utiliza una antítesis al contraponer "tan corto" (brevedad) con "tan largo" (extensión prolongada), enfrentando dos ideas opuestas: la fugacidad del amor frente a la persistencia del olvido. Esta contraposición enfatiza el dolor de la experiencia amorosa.',
      wrongs: [
        'El verso no se limita a una metáfora; el recurso principal es la contraposición de opuestos',
        'Opción correcta',
        'No hay exageración desmedida; es una afirmación contenida sobre la naturaleza del amor y el olvido',
        'No hay atribución de cualidades humanas a objetos inanimados en este verso específico'
      ]
    }
  },
  {
    id: 'LC15',
    area: 'lectura',
    areaName: 'Lectura Crítica',
    difficulty: 'dificil',
    context: `"He aquí, pues, un orden de hechos que presentan caracteres muy especiales: consisten en maneras de obrar, de pensar y de sentir, exteriores al individuo, y están dotados de un poder de coerción en virtud del cual se le imponen. En consecuencia, no podrían confundirse con los fenómenos orgánicos, puesto que consisten en representaciones y en acciones, ni con los fenómenos psíquicos, los cuales no existen sino en la conciencia individual y a través de ella." - Émile Durkheim, "Las reglas del método sociológico" (1895).`,
    question: `Según Durkheim, la característica fundamental de los hechos sociales es que:`,
    options: ['Se originan en la conciencia individual de cada persona', 'Son exteriores al individuo y ejercen coerción sobre él', 'Son fenómenos exclusivamente biológicos u orgánicos', 'Dependen de la voluntad consciente de cada sujeto'],
    correct: 1,
    explanation: {
      correct: 'Durkheim define los hechos sociales por dos características esenciales: son exteriores al individuo (preexisten y lo trascienden) y están dotados de poder coercitivo (se imponen al individuo independientemente de su voluntad). Esto los distingue tanto de los fenómenos orgánicos como de los puramente psíquicos.',
      wrongs: [
        'Durkheim afirma explícitamente que son "exteriores al individuo", no originados en su conciencia',
        'Opción correcta',
        'Durkheim los diferencia claramente de los "fenómenos orgánicos" (biológicos)',
        'Los hechos sociales se imponen al individuo, no dependen de su voluntad'
      ]
    }
  },
  {
    id: 'LC16',
    area: 'lectura',
    areaName: 'Lectura Crítica',
    difficulty: 'media',
    context: `"En el principio fue la página en blanco, y la página en blanco era la que ofrecía menos resistencia al deseo de escribir. Pero ya entonces, en el comienzo, se sabía que acabar escribiendo sobre cualquier cosa, y eso era lo peor, porque en el fondo no se trataba de llenar páginas sino de contar una historia que valiera la pena." - Julio Cortázar, "Rayuela" (1963).`,
    question: `Según el fragmento, la verdadera dificultad del escritor no es:`,
    options: ['Escribir sobre cualquier tema disponible', 'Llenar páginas con palabras', 'Encontrar una historia que valga la pena', 'Enfrentarse a la página en blanco'],
    correct: 3,
    explanation: {
      correct: 'El texto indica que la página en blanco "era la que ofrecía menos resistencia al deseo de escribir". La verdadera dificultad no es comenzar a escribir, sino "contar una historia que valiera la pena". Lo peor, según el narrador, es que se termina "escribiendo sobre cualquier cosa".',
      wrongs: [
        'El texto sugiere que se termina escribiendo sobre cualquier cosa, pero eso no es lo difícil sino lo inevitable',
        'Llenar páginas no es el verdadero problema; el reto es contar una historia significativa',
        'Esa es precisamente la verdadera dificultad que identifica el texto, no la menos relevante',
        'Opción correcta'
      ]
    }
  },
  {
    id: 'LC17',
    area: 'lectura',
    areaName: 'Lectura Crítica',
    difficulty: 'facil',
    context: `"Todo arte y toda indagación, y del mismo modo toda acción y libre elección, parecen tender a algún bien; por eso se ha manifestado, con razón, que el bien es aquello hacia lo que todas las cosas tienden." - Aristóteles, "Ética a Nicómaco" (Libro I, capítulo 1, siglo IV a. C.).`,
    question: `La tesis principal que plantea Aristóteles en este pasaje es:`,
    options: ['El bien es un concepto relativo que cada persona define a su manera', 'Todas las actividades humanas apuntan hacia algún bien como fin', 'Solo el arte y la filosofía tienden al bien verdaderamente', 'El bien es inalcanzable para los seres humanos'],
    correct: 1,
    explanation: {
      correct: 'Aristóteles sostiene que toda acción humana (arte, indagación, acción, elección) tiende hacia algún bien. No es que el bien sea relativo, sino que hay una pluralidad de bienes que corresponden a distintas actividades, y todos ellos son aquello hacia lo que esas actividades se orientan naturalmente.',
      wrongs: [
        'Aristóteles afirma que hay un bien hacia el que todos tienden, lo que sugiere una teleología compartida',
        'Opción correcta',
        'Aristóteles incluye explícitamente "toda acción y libre elección", no solo el arte y la filosofía',
        'Aristóteles dice que "todas las cosas tienden" al bien, lo que implica que es alcanzable'
      ]
    }
  },
  // ===== MATEMÁTICAS ADICIONALES =====
  {
    id: 'MT13', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'facil',
    question: `En una receta de cocina colombiana se necesitan 3 tazas de harina por cada 2 tazas de azúcar. Si se usan 9 tazas de harina, ¿cuántas tazas de azúcar se necesitan?`,
    options: ['4 tazas', '6 tazas', '5 tazas', '8 tazas'],
    correct: 1,
    explanation: { correct: 'Proporción: 3/2 = 9/x -> 3x = 18 -> x = 6 tazas de azúcar.', wrongs: ['Calculaste 9/3 = 3, pero la relación es 3:2', 'Opción correcta', 'Sumaste 9-3=6 pero sin aplicar la proporción correcta', 'Usaste 9/2 = 4,5 y redondeaste'] }
  },
  {
    id: 'MT14', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'media',
    table: {
      headers: ['Deporte', 'Hombres', 'Mujeres'],
      rows: [
        ['Fútbol', '45', '30'],
        ['Baloncesto', '20', '25'],
        ['Natación', '15', '20'],
        ['Atletismo', '10', '15']
      ],
      caption: 'Preferencias deportivas de estudiantes en un colegio de Pereira'
    },
    context: 'La tabla muestra las preferencias deportivas de los estudiantes de un colegio.',
    question: '¿Cuál es el total de estudiantes mujeres que participaron en la encuesta?',
    options: ['80', '90', '85', '95'],
    correct: 1,
    explanation: { correct: 'Suma de mujeres: 30 + 25 + 20 + 15 = 90.', wrongs: ['Sumaste hombres en lugar de mujeres', 'Opción correcta', 'Olvidaste incluir un deporte', 'Sumaste incorrectamente'] }
  },
  {
    id: 'MT15', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'dificil',
    question: `Un tanque de agua cilíndrico en una finca antioqueña tiene 2 m de radio y 3 m de altura. ¿Cuál es su volumen? (Use π = 3,14)`,
    options: ['18,84 m³', '37,68 m³', '9,42 m³', '28,26 m³'],
    correct: 1,
    explanation: { correct: 'V = πr²h = 3,14 x 2² x 3 = 3,14 x 4 x 3 = 37,68 m³.', wrongs: ['Usaste π x r x h, olvidaste elevar al cuadrado', 'Opción correcta', 'Usaste el diámetro en lugar del radio: 3,14 x 4 x 3 = 37,68? Revisa', 'Calculaste el área de la base solamente'] }
  },
  {
    id: 'MT16', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'facil',
    question: `Un repartidor en Manizales gana $15.000 por hora. Si trabajó 6 horas el lunes y 4 horas el martes, ¿cuánto ganó en total?`,
    options: ['$150.000', '$120.000', '$90.000', '$200.000'],
    correct: 0,
    explanation: { correct: 'Total horas = 6 + 4 = 10 horas. Ganancia = 10 x $15.000 = $150.000.', wrongs: ['Opción correcta', 'Calculaste solo 8 horas', 'Calculaste solo 6 horas', 'Multiplicaste 15.000 x (6x4) = 360.000?'] }
  },
  {
    id: 'MT17', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'media',
    question: `Para preparar limonada, María usa 3 limones por cada litro de agua. Si tiene 15 limones y quiere usar toda el agua en la misma proporción, ¿cuántos litros de limonada puede preparar?`,
    options: ['3 litros', '5 litros', '4 litros', '6 litros'],
    correct: 1,
    explanation: { correct: 'Proporción: 3 limones / 1 litro = 15 limones / x litros -> x = 15/3 = 5 litros.', wrongs: ['Dividiste al revés: 3/15', 'Opción correcta', 'Sumaste 15 - 3', 'Multiplicaste 3 x 15'] }
  },
  {
    id: 'MT18', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'dificil',
    question: `En una urna hay 4 tarjetas numeradas del 1 al 4. Se extraen dos tarjetas una tras otra sin reposición. ¿Cuál es la probabilidad de que la suma de los números sea 5?`,
    options: ['1/3', '1/4', '1/6', '1/2'],
    correct: 0,
    explanation: { correct: 'Total de pares ordenados: 4 x 3 = 12. Pares que suman 5: (1,4), (2,3), (3,2), (4,1) = 4. Probabilidad = 4/12 = 1/3.', wrongs: ['Opción correcta', 'Consideraste solo pares no ordenados: (1,4) y (2,3) = 2/6?', 'Contaste mal las combinaciones', 'Demasiado alta: revisa los pares posibles'] }
  },
  // ===== SOCIALES ADICIONALES =====
  {
    id: 'SC13',
    area: 'sociales',
    areaName: 'Sociales y Ciudadanía',
    difficulty: 'dificil',
    context: `"El Frente Nacional (1958-1974) fue un pacto político entre los partidos Liberal y Conservador para alternarse la presidencia y distribuirse equitativamente la burocracia estatal. Este acuerdo puso fin a la Violencia bipartidista pero excluyó a otras fuerzas políticas del poder."`,
    question: `Una consecuencia del Frente Nacional fue:`,
    options: ['La eliminación total de la violencia en Colombia', 'La alternancia en el poder entre liberales y conservadores con exclusión de otras fuerzas políticas', 'El establecimiento de un sistema unipartidista', 'La prohibición de elecciones populares'],
    correct: 1,
    explanation: {
      correct: 'El Frente Nacional estableció la alternancia presidencial entre liberales y conservadores (4 períodos de 4 años) y la paridad burocrática. Esto excluyó del poder a movimientos políticos distintos a los dos partidos tradicionales, lo que generó descontento y contribuyó al surgimiento de guerrillas como las FARC y el ELN.',
      wrongs: [
        'No eliminó la violencia; surgieron nuevas guerrillas y la violencia se transformó',
        'Opción correcta',
        'Los dos partidos mantuvieron su identidad separada; no se fusionaron en uno solo',
        'Sí hubo elecciones, pero solo entre candidatos del Frente Nacional'
      ]
    }
  },
  {
    id: 'SC14',
    area: 'sociales',
    areaName: 'Sociales y Ciudadanía',
    difficulty: 'facil',
    question: `Según la Constitución de Colombia, la función principal de la Rama Legislativa es:`,
    options: ['Administrar justicia', 'Ejecutar y hacer cumplir las leyes', 'Crear, modificar y derogar las leyes', 'Controlar la política monetaria'],
    correct: 2,
    explanation: {
      correct: 'La Rama Legislativa (Congreso de la República, compuesto por Senado y Cámara de Representantes) tiene como función principal la creación, modificación y derogación de leyes. Además, ejerce control político sobre el Gobierno y reforma la Constitución mediante actos legislativos.',
      wrongs: [
        'Administrar justicia es función de la Rama Judicial',
        'Ejecutar las leyes es función de la Rama Ejecutiva',
        'Opción correcta',
        'La política monetaria es función del Banco de la República, no del Congreso'
      ]
    }
  },
  {
    id: 'SC15',
    area: 'sociales',
    areaName: 'Sociales y Ciudadanía',
    difficulty: 'facil',
    question: `En Colombia, la revocatoria del mandato es un mecanismo de participación ciudadana que permite:`,
    options: ['Elegir a los candidatos presidenciales', 'Dar por terminado el mandato de un gobernante electo antes de que finalice su período', 'Cambiar la Constitución Nacional', 'Crear nuevas leyes desde el Congreso'],
    correct: 1,
    explanation: {
      correct: 'La revocatoria del mandato (art. 103 Constitución, Ley 134 de 1994) permite a los ciudadanos dar por terminado el mandato de un gobernante o funcionario electo (alcaldes, gobernadores) antes del fin de su período, cuando considere que no ha cumplido su programa de gobierno.',
      wrongs: [
        'La elección de candidatos se hace mediante el voto popular, no mediante revocatoria',
        'Opción correcta',
        'La Constitución se reforma mediante acto legislativo del Congreso o referendo constitucional',
        'La creación de leyes es función del Congreso, no de la revocatoria del mandato'
      ]
    }
  },
  {
    id: 'SC16',
    area: 'sociales',
    areaName: 'Sociales y Ciudadanía',
    difficulty: 'dificil',
    context: `"El conflicto armado colombiano ha tenido múltiples causas: la exclusión política, la desigualdad en la tenencia de la tierra, el narcotráfico y la debilidad institucional en zonas rurales. Los diálogos de paz con las FARC, que culminaron en el Acuerdo Final de 2016, buscaron abordar estas causas estructurales."`,
    question: `Según el texto, una de las causas estructurales del conflicto armado colombiano es:`,
    options: ['La sobrepoblación en las grandes ciudades', 'La desigualdad en la tenencia de la tierra y la exclusión política', 'La falta de recursos naturales en el país', 'La excesiva presencia del Estado en todo el territorio'],
    correct: 1,
    explanation: {
      correct: 'El texto menciona "la desigualdad en la tenencia de la tierra" y "la exclusión política" como causas del conflicto. Estos son problemas históricos: la concentración de la propiedad rural y la falta de canales de participación para sectores excluidos, que el Acuerdo de Paz de 2016 buscó enfrentar mediante la reforma rural integral.',
      wrongs: [
        'El conflicto ha sido predominantemente rural, no causado por la sobrepoblación urbana',
        'Opción correcta',
        'Colombia es un país rico en recursos naturales; la desigualdad en su distribución es parte del problema',
        'El problema ha sido la ausencia del Estado en amplias zonas rurales, no su exceso de presencia'
      ]
    }
  },
  {
    id: 'SC17',
    area: 'sociales',
    areaName: 'Sociales y Ciudadanía',
    difficulty: 'media',
    context: `"El Derecho Internacional Humanitario (DIH), también conocido como las normas de la guerra, busca limitar los efectos de los conflictos armados. Protege a las personas que no participan o han dejado de participar en las hostilidades y restringe los medios y métodos de guerra."`,
    question: `Según el texto, el Derecho Internacional Humanitario se aplica principalmente en situaciones de:`,
    options: ['Conflictos armados, para proteger a civiles y limitar los métodos de guerra', 'Desastres naturales, para coordinar la ayuda humanitaria', 'Elecciones democráticas, para garantizar la transparencia', 'Delitos comunes, para proteger los derechos de las víctimas'],
    correct: 0,
    explanation: {
      correct: 'El DIH se aplica en situaciones de conflicto armado (internacional o no internacional). Sus principios fundamentales son: distinción (entre civiles y combatientes), proporcionalidad, limitación (no hay libertad ilimitada en la elección de medios de guerra) y prohibición de causar sufrimiento innecesario.',
      wrongs: [
        'Opción correcta',
        'Los desastres naturales son atendidos por el derecho interno y la cooperación internacional, no por el DIH',
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
    context: `"En un ecosistema de pradera se encuentran los siguientes organismos: pasto (productor), saltamontes (herbívoro), ranas (carnívoro secundario) y halcones (superdepredador). Se aplica un pesticida que reduce drásticamente la población de saltamontes."`,
    question: `¿Cuál será el efecto más probable a corto plazo sobre la población de ranas?`,
    options: ['Aumentará porque hay menos saltamontes que compitan por el pasto', 'Disminuirá porque se reduce la disponibilidad de su presa principal', 'No se verá afectada porque las ranas pueden comer pasto directamente', 'Aumentará porque los halcones tendrán menos saltamontes para cazar'],
    correct: 1,
    explanation: {
      correct: 'En la cadena trófica pasto → saltamontes → ranas → halcones, las ranas dependen de los saltamontes como fuente principal de alimento. Al reducirse drásticamente la población de saltamontes, las ranas pierden su presa principal y su población disminuirá por falta de alimento.',
      wrongs: ['Los saltamontes no compiten con las ranas por el pasto; las ranas son carnívoras, no herbívoras', 'Opción correcta', 'Las ranas son carnívoras (se alimentan de insectos), no pueden consumir pasto directamente', 'Los halcones se alimentan de ranas, no de saltamontes; la reducción de halcones no beneficia a las ranas']
    }
  },
  {
    id: 'CN14',
    area: 'ciencias',
    areaName: 'Ciencias Naturales',
    difficulty: 'dificil',
    context: `"Se tienen dos ondas del mismo tipo que se propagan en la misma dirección. La onda A tiene una frecuencia de 440 Hz y una amplitud de 2 cm. La onda B tiene una frecuencia de 880 Hz y una amplitud de 1 cm."`,
    question: `Si ambas ondas viajan a la misma velocidad en el mismo medio, ¿cuál de las siguientes afirmaciones es correcta?`,
    options: ['La onda A tiene mayor longitud de onda que la onda B', 'La onda B tiene mayor longitud de onda que la onda A', 'Las dos ondas tienen la misma longitud de onda', 'La onda A transporta más energía porque tiene menor frecuencia'],
    correct: 0,
    explanation: {
      correct: 'La velocidad de onda es v = λ·f. Como la velocidad es la misma para ambas, la longitud de onda λ = v/f. La onda A (440 Hz) tiene menor frecuencia, por lo tanto mayor longitud de onda que la B (880 Hz). La energía de una onda depende de la amplitud al cuadrado, no de la frecuencia.',
      wrongs: ['Opción correcta', 'A mayor frecuencia, menor longitud de onda; la onda B tiene el doble de frecuencia, así que tiene la mitad de longitud de onda', 'La longitud de onda depende de la frecuencia: λ = v/f; si f es diferente, λ es diferente', 'La energía de una onda es proporcional al cuadrado de la amplitud; la onda A tiene mayor amplitud y transporta más energía']
    }
  },
  {
    id: 'CN15',
    area: 'ciencias',
    areaName: 'Ciencias Naturales',
    difficulty: 'facil',
    context: `"Un equipo de biólogos marinos estudia un arrecife de coral. Observan que ciertas áreas del arrecife están blanqueadas y con poco crecimiento, mientras que otras áreas cercanas tienen corales saludables y coloridos. Miden la temperatura del agua y encuentran que las áreas blanqueadas están 2°C más cálidas que las saludables."`,
    question: `¿Cuál es la relación más probable entre la temperatura y el blanqueamiento?`,
    options: ['El agua más fría mata las algas simbióticas que dan color al coral', 'El aumento de temperatura provoca que los corales expulsen sus algas simbióticas (zooxantelas), perdiendo color', 'La temperatura alta hace que el coral produzca más pigmento protector', 'El agua cálida acelera el crecimiento del coral, consumiendo más nutrientes'],
    correct: 1,
    explanation: {
      correct: 'El blanqueamiento de corales ocurre cuando la temperatura del agua supera el umbral tolerado por las zooxantelas (algas simbióticas que viven en los tejidos del coral). El estrés térmico hace que el coral expulse estas algas, que son las que proporcionan la mayor parte del color y nutrientes al coral mediante fotosíntesis.',
      wrongs: ['El blanqueamiento se asocia con temperaturas más altas, no más frías', 'Opción correcta', 'El coral no produce pigmento protector; su color proviene de las algas simbióticas', 'El calor estresa al coral y reduce su crecimiento, no lo acelera']
    }
  },
  {
    id: 'CN16',
    area: 'ciencias',
    areaName: 'Ciencias Naturales',
    difficulty: 'dificil',
    context: `"En un laboratorio, se analiza la combustión completa de 2 moles de etanol (C₂H₅OH) en presencia de oxígeno. La reacción produce dióxido de carbono y agua."`,
    question: `¿Cuántos moles de CO₂ se producen en esta reacción?`,
    options: ['2 moles', '4 moles', '6 moles', '8 moles'],
    correct: 1,
    explanation: {
      correct: 'La ecuación balanceada de combustión del etanol es: C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O. Por cada mol de etanol se producen 2 moles de CO₂. Para 2 moles de etanol: 2 × 2 = 4 moles de CO₂.',
      wrongs: ['2 moles de CO₂ se producen a partir de 1 mol de etanol, no de 2', 'Opción correcta', '6 moles requerirían 3 moles de etanol inicial', '8 moles requerirían 4 moles de etanol inicial']
    }
  },
  {
    id: 'CN17',
    area: 'ciencias',
    areaName: 'Ciencias Naturales',
    difficulty: 'media',
    context: `"Un estudio de salud pública compara dos comunidades: en la comunidad A, el 90% de los niños está vacunado contra el sarampión; en la comunidad B, solo el 40% está vacunado. Se reporta un brote de sarampión en la comunidad B pero no en la A."`,
    question: `¿Qué concepto epidemiológico explica mejor esta diferencia?`,
    options: ['Inmunidad de rebaño: cuando un porcentaje suficiente de la población está vacunado, se protege incluso a quienes no lo están', 'Los niños de la comunidad A son genéticamente resistentes al sarampión', 'La comunidad A tiene mejor nutrición que la B, lo que previene la infección', 'El sarampión solo afecta a comunidades con baja densidad poblacional'],
    correct: 0,
    explanation: {
      correct: 'La inmunidad de rebaño ocurre cuando un alto porcentaje de la población está vacunado (típicamente >90% para el sarampión), lo que interrumpe la cadena de transmisión del virus. En la comunidad A, aunque el 10% no está vacunado, el virus no encuentra suficientes personas susceptibles para propagarse. En la comunidad B, hay suficientes personas susceptibles para mantener la transmisión.',
      wrongs: ['Opción correcta', 'La resistencia genética no explica la diferencia; el sarampión afecta a cualquier persona no inmune independientemente de su genética', 'La nutrición puede influir en la gravedad de la enfermedad pero no previene la infección por sarampión', 'El sarampión se propaga en cualquier comunidad con personas susceptibles, independientemente de la densidad poblacional']
    }
  },
  {
    id: 'CN18',
    area: 'ciencias',
    areaName: 'Ciencias Naturales',
    difficulty: 'facil',
    context: `"Un grupo de estudiantes construye un termómetro casero con una botella de vidrio, agua coloreada y un pitillo. Al colocar la botella en agua caliente, observan que el nivel del líquido en el pitillo sube. Al colocarla en agua con hielo, el nivel baja."`,
    question: `¿Qué propiedad de la materia explica este comportamiento?`,
    options: ['La densidad del agua disminuye al enfriarse, por eso el nivel baja', 'El agua se dilata al calentarse y se contrae al enfriarse, cambiando su volumen', 'El calor convierte el agua en gas, que ocupa más espacio', 'El vidrio de la botella se expande más que el agua al calentarse'],
    correct: 1,
    explanation: {
      correct: 'La mayoría de las sustancias se dilatan al aumentar su temperatura (expansión térmica) y se contraen al disminuirla. El agua caliente ocupa más volumen que la misma masa de agua fría, lo que hace que el nivel suba por el pitillo. Al enfriarse, el agua se contrae y el nivel baja.',
      wrongs: ['El agua es más densa a 4°C que a temperaturas más altas; pero sigue siendo líquida, no se evapora', 'Opción correcta', 'El agua no se convierte en gas a las temperaturas del experimento (menos de 100°C)', 'El vidrio también se expande, pero el coeficiente de expansión del agua es mayor, por eso el nivel sube']
    }
  },

  {
    id: 'LC18',
    area: 'lectura',
    areaName: 'Lectura Crítica',
    difficulty: 'dificil',
    context: `"La filosofía está escrita en ese grandísimo libro que continuamente tenemos abierto ante los ojos (digo, el universo), pero no se puede entender si antes no se aprende a entender la lengua, a conocer los caracteres en que está escrito. Está escrito en lengua matemática y sus caracteres son triángulos, círculos y otras figuras geométricas, sin las cuales es imposible entender ni una palabra; sin ellos es como girar vanamente en un oscuro laberinto." - Galileo Galilei, "El ensayador" (1623).`,
    question: `Según Galileo, la relación entre el universo y las matemáticas es de:`,
    options: [
      'El universo puede entenderse sin necesidad de las matemáticas, pues la observación directa basta',
      'Las matemáticas son el lenguaje en el que está escrito el universo, por lo que son indispensables para comprenderlo',
      'Las matemáticas son una invención humana que no se corresponde con la realidad física',
      'Solo los triángulos y círculos geométricos pueden explicar los fenómenos naturales'
    ],
    correct: 1,
    explanation: {
      correct: 'Galileo afirma que el universo es un "libro" escrito en "lengua matemática" y que sin conocer esta lengua es imposible entenderlo. Esta metáfora establece que las matemáticas no son un mero instrumento, sino el lenguaje fundamental de la naturaleza.',
      wrongs: [
        'Galileo dice explícitamente que sin matemáticas "es imposible entender ni una palabra" del universo',
        'Opción correcta',
        'Galileo sostiene que las matemáticas son el lenguaje del universo, no una invención arbitraria',
        'Galileo menciona triángulos y círculos como ejemplos, no como los únicos caracteres posibles'
      ]
    }
  },
  // ===== MÁS LECTURA CRÍTICA =====
  {
    id: 'LC19',
    area: 'lectura',
    areaName: 'Lectura Crítica',
    difficulty: 'media',
    context: `"En nuestros días, el castigo ha tendido a convertirse en la parte más oculta del proceso penal, y ha tendido a perder toda función de ostentación. Queda todavía, sin duda, un fondo 'supliciante' en los mecanismos modernos de la justicia penal —un fondo que no está del todo dominado—, pero cada vez es menos perceptible. Se trata de una justicia que ya no asume públicamente la parte de violencia que está ligada a su ejercicio." - Michel Foucault, "Vigilar y castigar" (1975).`,
    question: `Según Foucault, la transformación del sistema penal moderno se caracteriza por:`,
    options: ['La eliminación completa de toda forma de castigo físico', 'El ocultamiento de la violencia del castigo detrás de la aparente neutralidad de la justicia', 'El aumento de la ostentación pública de las penas', 'La desaparición de todo mecanismo de control social'],
    correct: 1,
    explanation: {
      correct: 'Foucault sostiene que el castigo se ha vuelto "la parte más oculta del proceso penal" y que la justicia "ya no asume públicamente la parte de violencia" de su ejercicio. La violencia punitiva no ha desaparecido, sino que se ha vuelto menos perceptible, oculta tras procedimientos aparentemente neutrales.',
      wrongs: [
        'Foucault dice que aún "queda un fondo supliciante" no del todo dominado; la violencia no se ha eliminado',
        'Opción correcta',
        'El texto afirma lo contrario: el castigo ha perdido "toda función de ostentación"',
        'Foucault describe una transformación de los mecanismos de control, no su desaparición'
      ]
    }
  },
  {
    id: 'LC20',
    area: 'lectura',
    areaName: 'Lectura Crítica',
    difficulty: 'dificil',
    context: `"—¿En qué momento se jodió el Perú? —preguntó Santiago Zavala. El Zavalita de la novela de Mario Vargas Llosa, 'Conversación en La Catedral' (1969), formula esta pregunta que resuena a lo largo de toda la obra como un intento por comprender la decadencia moral y política de su país a través de los recuerdos y las conversaciones con su padre y otros personajes.`,
    question: `La pregunta "¿En qué momento se jodió el Perú?" funciona en la novela como:`,
    options: ['Una pregunta retórica sin respuesta que expresa el desencanto y la búsqueda de sentido', 'Una indagación histórica precisa sobre una fecha específica de la historia peruana', 'Una crítica exclusivamente económica sobre las políticas del país', 'Una pregunta que el narrador responde explícitamente al final de la obra'],
    correct: 0,
    explanation: {
      correct: 'La pregunta atraviesa toda la novela sin encontrar una respuesta definitiva, funcionando como un motivo recurrente que expresa la desilusión del protagonista y la imposibilidad de señalar un único momento de quiebre. La obra explora la complejidad de la decadencia a través de múltiples voces y temporalidades entrelazadas.',
      wrongs: [
        'Opción correcta',
        'La pregunta no busca una fecha sino que expresa una angustia existencial y una crítica social',
        'La pregunta abarca aspectos morales, políticos y existenciales, no solo económicos',
        'La novela no ofrece una respuesta única; su estructura polifónica sugiere que no hay una sola causa'
      ]
    }
  },
  {
    id: 'LC21',
    area: 'lectura',
    areaName: 'Lectura Crítica',
    difficulty: 'facil',
    context: `"Cuando contemplo el mundo exterior, no puedo dejar de pensar que el ojo no fue diseñado por un proceso racional, sino que es el resultado de millones de años de pequeñas variaciones favorables. Cada minúscula mejora en la visión, por leve que fuera, proporcionaba una ventaja a su portador, permitiéndole sobrevivir y reproducirse con mayor éxito." - Adaptado de Charles Darwin, "El origen de las especies" (1859).`,
    question: `El texto explica la formación del ojo humano mediante:`,
    options: ['Un acto de diseño inteligente por una fuerza superior', 'La acumulación gradual de variaciones ventajosas a lo largo de la evolución', 'Un cambio súbito y completo en una sola generación', 'La necesidad del organismo de adaptarse al medio por esfuerzo propio'],
    correct: 1,
    explanation: {
      correct: 'Darwin describe el ojo como el resultado de "millones de años de pequeñas variaciones favorables" donde cada mejora proporcionaba una ventaja. Es un ejemplo clásico de selección natural actuando gradualmente sobre variaciones heredables.',
      wrongs: [
        'Darwin se opone a la explicación del diseño inteligente; su teoría explica la complejidad biológica sin recurrir a un diseñador',
        'Opción correcta',
        'Darwin enfatiza el carácter gradual del proceso ("millones de años", "pequeñas variaciones"), no el cambio súbito',
        'Darwin no habla de esfuerzo consciente del organismo; las variaciones ocurren al azar y la selección natural actúa sobre ellas'
      ]
    }
  },
  // ===== MÁS MATEMÁTICAS =====
  {
    id: 'MT19', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'facil',
    question: `Una cometa (barrilete) tiene forma de triángulo con base de 40 cm y altura de 60 cm. ¿Cuál es su área?`,
    options: ['1.200 cm²', '2.400 cm²', '600 cm²', '1.800 cm²'],
    correct: 0,
    explanation: { correct: 'Área del triángulo = (base x altura) / 2 = (40 x 60) / 2 = 2400/2 = 1.200 cm².', wrongs: ['Opción correcta', 'Olvidaste dividir entre 2: 40 x 60 = 2.400', 'Multiplicaste base por altura / 4 en lugar de / 2', 'Cálculo incorrecto'] }
  },
  {
    id: 'MT20', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'media',
    question: `La distancia de frenado de un auto (en metros) está dada por d(v) = 0,05v², donde v es la velocidad en km/h. ¿Cuál es la distancia de frenado a 60 km/h?`,
    options: ['180 m', '90 m', '300 m', '45 m'],
    correct: 0,
    explanation: { correct: 'd(60) = 0,05 x 60² = 0,05 x 3600 = 180 metros.', wrongs: ['Opción correcta', 'Calculaste 0,05 x 60 = 3, olvidando elevar al cuadrado', 'Calculaste 0,05 x (60x60x60)?', 'Dividiste 3600/0,05 en lugar de multiplicar'] }
  },
  {
    id: 'MT21', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'dificil',
    question: `En un almacén de Bogotá, un televisor cuesta $1.200.000. Por pago de contado ofrecen dos descuentos sucesivos: 15% y luego 10% adicional. ¿Cuánto se paga?`,
    options: ['$900.000', '$918.000', '$936.000', '$1.020.000'],
    correct: 1,
    explanation: { correct: '1er descuento: 1.200.000 x 0,85 = 1.020.000. 2do descuento: 1.020.000 x 0,90 = 918.000.', wrongs: ['Sumaste los descuentos: 25% de 1.200.000 = 900.000, pero no se suman así', 'Opción correcta', 'Aplicaste solo el primer descuento: 1.200.000 x 0,85 = 1.020.000', 'Aplicaste los descuentos en orden inverso'] }
  },
  // ===== MÁS SOCIALES =====
  {
    id: 'SC19',
    area: 'sociales',
    areaName: 'Sociales y Ciudadanía',
    difficulty: 'media',
    question: `La democracia participativa en Colombia se expresa a través de:`,
    options: ['El voto cada 4 años únicamente', 'Mecanismos como el voto, plebiscito, referendo, consulta popular y revocatoria del mandato', 'La elección indirecta de todos los cargos públicos', 'La eliminación de los partidos políticos'],
    correct: 1,
    explanation: {
      correct: 'La Constitución de 1991 establece mecanismos de participación ciudadana: voto, plebiscito, referendo, consulta popular, cabildo abierto, iniciativa legislativa y revocatoria del mandato (art. 103-106).',
      wrongs: ['La democracia va más allá del voto, incluye múltiples mecanismos de participación', 'Opción correcta', 'Muchos cargos son de elección popular directa', 'Los partidos políticos son parte esencial de la democracia']
    }
  },
  {
    id: 'SC20',
    area: 'sociales',
    areaName: 'Sociales y Ciudadanía',
    difficulty: 'dificil',
    question: `El Mercosur es un proceso de integración regional que incluye como miembros plenos a:`,
    options: ['Colombia, México y Chile', 'Argentina, Brasil, Paraguay, Uruguay y Venezuela (suspendida)', 'Estados Unidos y Canadá', 'Perú, Ecuador y Bolivia'],
    correct: 1,
    explanation: {
      correct: 'Mercosur (Mercado Común del Sur) fue creado en 1991 y tiene como miembros plenos a Argentina, Brasil, Paraguay, Uruguay y Venezuela (actualmente suspendida). Colombia es Estado asociado.',
      wrongs: ['Colombia es Estado asociado, no miembro pleno', 'Opción correcta', 'Mercosur es sudamericano, no incluye a Norteamérica', 'Perú y Ecuador son asociados, Bolivia está en proceso de adhesión']
    }
  },
  // ===== MÁS CIENCIAS =====
  {
    id: 'CN19',
    area: 'ciencias',
    areaName: 'Ciencias Naturales',
    difficulty: 'media',
    context: `"Un estudiante analiza el etiquetado nutricional de dos productos. El producto A contiene 20 g de carbohidratos, 5 g de proteínas y 2 g de grasas por porción. El producto B contiene 5 g de carbohidratos, 15 g de proteínas y 8 g de grasas por porción."`,
    question: `Si se sabe que los carbohidratos aportan 4 kcal/g, las proteínas 4 kcal/g y las grasas 9 kcal/g, ¿cuál de los dos productos aporta más energía total por porción?`,
    options: ['Producto A, porque tiene más carbohidratos', 'Producto B, porque tiene más grasas que aportan más calorías por gramo', 'Ambos aportan la misma cantidad de energía', 'Producto A, porque tiene menos grasas'],
    correct: 1,
    explanation: {
      correct: 'Producto A: 20×4 + 5×4 + 2×9 = 80 + 20 + 18 = 118 kcal. Producto B: 5×4 + 15×4 + 8×9 = 20 + 60 + 72 = 152 kcal. El producto B aporta más energía porque, aunque tiene menos carbohidratos, su mayor contenido de grasas (9 kcal/g) y proteínas compensa ampliamente la diferencia.',
      wrongs: [
        'La cantidad de carbohidratos no es el único factor; las grasas aportan más del doble de calorías por gramo',
        'Opción correcta',
        'Al calcular, el producto B aporta 152 kcal frente a 118 kcal del producto A',
        'El producto B tiene más grasas, lo que aumenta su aporte calórico total'
      ]
    }
  },
  {
    id: 'CN20',
    area: 'ciencias',
    areaName: 'Ciencias Naturales',
    difficulty: 'dificil',
    context: `"Un técnico de laboratorio prepara dos pilas galvánicas. En la primera, conecta un electrodo de zinc y uno de cobre sumergidos en sus respectivas soluciones de sulfato. En la segunda, conecta un electrodo de magnesio y uno de cobre. Según la serie de actividad: Mg > Zn > Cu."`,
    question: `¿En cuál de las dos pilas se espera una mayor diferencia de potencial y por qué?`,
    options: ['En la pila Zn-Cu, porque el zinc es más común que el magnesio', 'En la pila Mg-Cu, porque el magnesio tiene mayor tendencia a oxidarse que el zinc', 'En ambas pilas el voltaje será el mismo porque el cobre es el cátodo en los dos casos', 'En la pila Zn-Cu, porque el zinc es mejor conductor que el magnesio'],
    correct: 1,
    explanation: {
      correct: 'La diferencia de potencial depende de la diferencia en la tendencia a oxidarse de los metales. Como Mg > Zn en la serie de actividad, el magnesio tiene mayor potencial de oxidación que el zinc. Por lo tanto, la diferencia de potencial entre Mg y Cu es mayor que entre Zn y Cu, generando un voltaje más alto en la pila Mg-Cu.',
      wrongs: [
        'La abundancia del metal no determina el potencial electroquímico; esto depende de su posición en la serie de actividad',
        'Opción correcta',
        'Los metales tienen diferentes potenciales de oxidación, por lo que los voltajes serán diferentes',
        'La conductividad del metal no determina el voltaje de la celda, sino la diferencia de potenciales de electrodo'
      ]
    }
  },
  // ===== LECTURA CRÍTICA - BLOQUE 3 =====
  {
    id: 'LC22', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'dificil',
    context: `"—¿Y quiénes son los verdaderos filósofos? —preguntó. —Los que aman la verdad —respondí. —Tienes razón —dijo—, pero explícame qué quieres decir con eso. —No es fácil de explicar —respondí—, pero voy a intentarlo. Cuando decimos que alguien ama algo, ¿decimos que ama ese algo entero o solo una parte? —¿Cómo podría amar solo una parte? —Entonces el filósofo, que ama la sabiduría, la ama entera, no solo una parte." - Platón, "La República" (Libro V, 475e-476b, siglo IV a. C.).`,
    question: `En el diálogo, Platón distingue al verdadero filósofo de quienes no lo son mediante el criterio de:`,
    options: ['El dominio de la retórica y la capacidad de persuadir a las masas', 'El amor integral por la sabiduría y la verdad, sin contentarse con partes', 'La acumulación de conocimientos enciclopédicos sobre todas las ciencias', 'La capacidad de gobernar a los demás mediante la fuerza de la razón'],
    correct: 1,
    explanation: { correct: 'Platón establece que el filósofo ama la sabiduría "entera, no solo una parte". A diferencia de quienes se contentan con aspectos parciales del conocimiento o con meras opiniones, el verdadero filósofo aspira a la totalidad de la verdad.', wrongs: ['Platón critica la retórica vacía; el filósofo busca la verdad, no solo la persuasión', 'Opción correcta', 'El conocimiento enciclopédico no equivale al amor por la sabiduría en sentido platónico', 'Gobernar es una consecuencia, no el criterio distintivo del filósofo'] }
  },
  {
    id: 'LC23', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'media',
    context: `"La modernidad líquida es una figura del cambio y de la transitoriedad, del desarraigo y del esfuerzo por liberarse. La 'liquidez' es la cualidad de los fluidos: no conservan su forma durante mucho tiempo y están constantemente dispuestos a cambiar. En una sociedad líquida, las condiciones de actuación de sus miembros cambian antes de que las formas de actuar se consoliden en unos hábitos y en unas rutinas determinadas." - Zygmunt Bauman, "Modernidad líquida" (2000).`,
    question: `Bauman utiliza la metáfora de la "liquidez" para describir la sociedad contemporánea porque:`,
    options: ['El agua es el recurso más valioso de la era moderna', 'Las relaciones y estructuras sociales han perdido solidez y se transforman constantemente', 'La economía global funciona como un fluido que todo lo inunda', 'La tecnología ha hecho que la comunicación sea más fluida que antes'],
    correct: 1,
    explanation: { correct: 'Bauman caracteriza la modernidad por la "transitoriedad" y el "cambio" constante. Lo líquido no conserva su forma, al igual que las relaciones, identidades e instituciones en la sociedad contemporánea, que se transforman antes de consolidarse en hábitos estables.', wrongs: ['Bauman no habla del agua como recurso sino como metáfora de la inconsistencia de lo social', 'Opción correcta', 'La metáfora alude a la falta de formas estables, no a la omnipresencia de la economía', 'Bauman se refiere a la fragilidad de los vínculos sociales, no solo a la comunicación'] }
  },
  {
    id: 'LC24', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'facil',
    context: `"—El coronel no tiene quien le escriba. —No es nada nuevo —dijo—. En los cuarenta años que llevamos de esperanza, tranquilidad y hambre, el coronel no ha tenido nunca quien le escriba." - Gabriel García Márquez, "El coronel no tiene quien le escriba" (1961).`,
    question: `La expresión "cuarenta años de esperanza, tranquilidad y hambre" revela que la situación del coronel se caracteriza por:`,
    options: ['Una combinación paradójica de esperanza prolongada y condiciones materiales adversas', 'Una vida plena y satisfactoria a pesar de las dificultades económicas', 'La ausencia total de esperanza y la resignación absoluta', 'Un período de gran prosperidad económica y felicidad'],
    correct: 0,
    explanation: { correct: 'El texto yuxtapone "esperanza" (que sugiere optimismo) y "tranquilidad" con "hambre" (carencia material). Esta combinación crea una paradoja: el coronel ha mantenido la esperanza durante décadas mientras enfrentaba condiciones de escasez. La repetición de "cuarenta años" enfatiza la prolongación en el tiempo.', wrongs: ['Opción correcta', 'El "hambre" indica condiciones adversas, no una vida plena', 'La "esperanza" indica que aún hay expectativa, no resignación total', 'El "hambre" indica carencia, no prosperidad'] }
  },
  {
    id: 'LC25', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'dificil',
    context: `"Si Dios no existe, todo está permitido. Esta frase, que se repite con frecuencia, es en realidad el punto de partida del existencialismo. En efecto, todo está permitido si Dios no existe, y en consecuencia el hombre está abandonado, porque no encuentra ni en sí mismo ni en el mundo una posibilidad de aferrarse. No encuentra excusas. Si Dios no existe, no tenemos valores u órdenes que legitimen nuestra conducta." - Jean-Paul Sartre, "El existencialismo es un humanismo" (1946).`,
    question: `Según Sartre, la inexistencia de Dios implica que el ser humano:`,
    options: ['Queda liberado para hacer lo que quiera sin ninguna responsabilidad', 'Carece de fundamentos externos para justificar sus acciones y debe asumir su libertad con responsabilidad', 'Debe buscar a Dios a través de la fe para encontrar un sentido a la vida', 'Puede recurrir a la naturaleza como fuente de valores morales universales'],
    correct: 1,
    explanation: { correct: 'Para Sartre, la inexistencia de Dios significa que el hombre "está abandonado" y "no encuentra excusas". No hay valores preestablecidos que legitimen la conducta. Lejos de ser una liberación fácil, es una condena a la libertad: el ser humano debe crear sus propios valores y asumir la responsabilidad total de sus elecciones.', wrongs: ['Sartre enfatiza la responsabilidad, no el libertinaje: "el hombre está condenado a ser libre" y es responsable de sus actos', 'Opción correcta', 'Sartre parte del presupuesto de la inexistencia de Dios; la fe no es una opción en su argumento', 'Para Sartre no hay una naturaleza que provea valores; el hombre los crea con su acción'] }
  },
  {
    id: 'LC26', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'media',
    context: `"Consideremos, por ejemplo, la novela que propongo: 'El jardín de los senderos que se bifurcan'. En todas las ficciones, cada vez que un hombre se enfrenta a diversas alternativas, opta por una y elimina las otras; en la del casi inextricable Ts'ui Pên, opta —simultáneamente— por todas. Crea, así, diversos porvenires, diversos tiempos, que también proliferan y se bifurcan." - Jorge Luis Borges, "El jardín de los senderos que se bifurcan" (1941).`,
    question: `La innovación narrativa que Borges atribuye a la novela de Ts'ui Pên consiste en:`,
    options: ['Eliminar todas las alternativas excepto una para simplificar la trama', 'Optar simultáneamente por todas las alternativas posibles, creando tiempos divergentes', 'Seguir un único camino narrativo lineal hasta el desenlace', 'Presentar los eventos en orden cronológico inverso al convencional'],
    correct: 1,
    explanation: { correct: 'Borges describe una novela donde el protagonista "opta —simultáneamente— por todas" las alternativas, creando "diversos porvenires, diversos tiempos, que también proliferan y se bifurcan". Es una representación literaria del concepto de universos paralelos o múltiples posibilidades simultáneas.', wrongs: ['Esa sería la ficción convencional; la innovación de Ts'ui Pên es lo opuesto', 'Opción correcta', 'La novela de Ts'ui Pên precisamente rechaza el camino único en favor de la multiplicidad', 'El orden cronológico inverso no es la innovación descrita aquí'] }
  },
  {
    id: 'LC27', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'facil',
    context: `"La ciencia moderna se distingue de otras formas de conocimiento por su método: la observación sistemática, la formulación de hipótesis, la experimentación controlada y la revisión por pares. Sin embargo, un experimento solo se considera válido si puede ser reproducido por otros investigadores de manera independiente y arroja resultados consistentes."`,
    question: `Según el texto, un experimento científico se considera válido cuando:`,
    options: ['Es realizado por un científico reconocido mundialmente', 'Puede ser reproducido por otros investigadores con resultados consistentes', 'La hipótesis inicial resulta ser correcta', 'Se realiza en un laboratorio con equipos costosos'],
    correct: 1,
    explanation: { correct: 'El texto afirma que "un experimento solo se considera válido si puede ser reproducido por otros investigadores de manera independiente y arroja resultados consistentes". La reproducibilidad es un pilar fundamental del método científico.', wrongs: ['La reputación del científico no determina la validez de un experimento', 'Opción correcta', 'Incluso hipótesis incorrectas pueden ser validadas si se refutan con experimentos reproducibles', 'Los equipos costosos no garantizan la validez; lo importante es la reproducibilidad'] }
  },
  // ===== MATEMÁTICAS - BLOQUE 3 =====
  {
    id: 'MT22', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'media',
    table: {
      headers: ['Color', 'Rojo', 'Azul', 'Verde', 'Amarillo'],
      rows: [
        ['Cantidad', '8', '5', '4', '3']
      ],
      caption: 'Distribución de fichas de colores en una bolsa'
    },
    context: 'En una bolsa hay fichas de colores según la tabla. Se saca una ficha al azar.',
    question: '¿Cuál es la probabilidad de sacar una ficha azul?',
    options: ['1/4', '1/5', '1/8', '5/20'],
    correct: 0,
    explanation: { correct: 'Total fichas = 8+5+4+3 = 20. Azules = 5. Probabilidad = 5/20 = 1/4.', wrongs: ['Opción correcta', 'Usaste el total incorrecto o los azules sobre solo un color', 'Dividiste 1 entre la cantidad de azules', 'Simplifica 5/20 = 1/4, no lo dejaste reducido'] }
  },
  {
    id: 'MT23', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'dificil',
    question: `El precio de un celular en Ibagué es $800.000. Por el día del padre lo suben 15% y luego en liquidación lo bajan 15%. ¿Cuál es el precio final?`,
    options: ['$800.000', '$782.000', '$920.000', '$798.000'],
    correct: 1,
    explanation: { correct: 'Sube 15%: 800.000 x 1,15 = 920.000. Baja 15%: 920.000 x 0,85 = 782.000.', wrongs: ['No vuelve al precio original porque el 15% de bajada se aplica sobre un valor mayor', 'Opción correcta', 'Calculaste 800.000 x 0,9775? Revisa', 'Calculaste 800.000 x 0,9975?'] }
  },
  {
    id: 'MT24', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'facil',
    question: `Un triángulo tiene una base de 10 m y una altura de 8 m. ¿Cuál es su área?`,
    options: ['80 m²', '40 m²', '20 m²', '60 m²'],
    correct: 1,
    explanation: { correct: 'Área = (base x altura) / 2 = (10 x 8) / 2 = 40 m².', wrongs: ['Olvidaste dividir entre 2: 10 x 8 = 80', 'Opción correcta', 'Dividiste entre 4 en lugar de 2', 'Multiplicaste 10 x 6 en lugar de 10 x 8'] }
  },
  {
    id: 'MT25', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'media',
    question: `En un restaurante de Neiva, el costo C de preparar x platos de bandeja paisa está dado por C(x) = 8.000x + 50.000. ¿Cuánto cuesta preparar 30 platos?`,
    options: ['$240.000', '$290.000', '$200.000', '$310.000'],
    correct: 1,
    explanation: { correct: 'C(30) = 8.000 x 30 + 50.000 = 240.000 + 50.000 = $290.000.', wrongs: ['Opción correcta', 'Olvidaste sumar el costo fijo: solo calculaste 8.000 x 30 = 240.000', 'Sumaste mal: 240.000 + 50.000 = 290.000', 'Multiplicaste 8.000 x 30 + 50.000 = 290.000, revisa operación'] }
  },
  {
    id: 'MT26', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'facil',
    question: `María ahorró $500.000 en un banco que paga 8% de interés simple anual. ¿Cuánto recibirá de intereses después de 1 año?`,
    options: ['$40.000', '$50.000', '$30.000', '$80.000'],
    correct: 0,
    explanation: { correct: 'Interés = Capital x Tasa x Tiempo = 500.000 x 0,08 x 1 = $40.000.', wrongs: ['Opción correcta', 'Calculaste 500.000 x 0,10 = 50.000, la tasa es 8% no 10%', 'Calculaste 500.000 x 0,06 = 30.000, la tasa es 8%', 'Calculaste 500.000 x 0,08 x 2, confundiendo años'] }
  },
  {
    id: 'MT27', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'dificil',
    question: `En un examen, el promedio de 5 estudiantes es 3,8. Si las notas de 4 de ellos son 4,2; 3,6; 3,0 y 4,0, ¿cuál es la nota del quinto estudiante?`,
    options: ['4,0', '4,2', '3,5', '3,8'],
    correct: 1,
    explanation: { correct: 'Suma total = 5 x 3,8 = 19. Suma conocida = 4,2+3,6+3,0+4,0 = 14,8. Quinto = 19 - 14,8 = 4,2.', wrongs: ['Opción correcta', 'Sumaste las notas y dividiste entre el nÃºmero incorrecto', 'Calculaste mal la suma conocida', 'Ese es el promedio, no la quinta nota'] }
  },
  {
    id: 'MT28', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'media',
    question: `Una caja de zapatos tiene forma de prisma rectangular con 30 cm de largo, 20 cm de ancho y 15 cm de alto. ¿Cuál es su volumen?`,
    options: ['6.000 cm³', '9.000 cm³', '12.000 cm³', '3.000 cm³'],
    correct: 1,
    explanation: { correct: 'Volumen = largo x ancho x alto = 30 x 20 x 15 = 9.000 cm³.', wrongs: ['Calculaste 30 x 20 x 10 en lugar de 15', 'Opción correcta', 'Multiplicaste 30 x 20 x 20', 'Calculaste solo 30 x 20'] }
  },
  {
    id: 'MT29', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'dificil',
    question: `La ganancia G(x) de una empresa de muebles en Barranquilla está dada por G(x) = -x² + 100x - 1.600, donde x es el nÃºmero de sillas producidas. ¿Cuántas sillas debe producir para obtener la ganancia máxima?`,
    options: ['40', '50', '60', '100'],
    correct: 1,
    explanation: { correct: 'El vértice de la parábola es x = -b/(2a) = -100/(2 x -1) = -100/-2 = 50 sillas.', wrongs: ['Usaste la fórmula incorrecta: -b/a en lugar de -b/(2a)', 'Opción correcta', 'Probablemente usaste c en lugar de b en la fórmula', 'Ese es el coeficiente lineal, no el vértice'] }
  },
  {
    id: 'MT30', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'facil',
    question: `Un atleta corre 400 metros en 50 segundos. ¿Cuál es su rapidez media en m/s?`,
    options: ['6 m/s', '8 m/s', '10 m/s', '12 m/s'],
    correct: 1,
    explanation: { correct: 'Rapidez = distancia / tiempo = 400 / 50 = 8 m/s.', wrongs: ['Dividiste 400/66,6?', 'Opción correcta', 'Dividiste 400/40 = 10', 'Dividiste 400/33,3 = 12'] }
  },
  // ===== SOCIALES - BLOQUE 3 =====
  {
    id: 'SC21', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'media',
    context: `"El filósofo Immanuel Kant propuso el 'imperativo categórico': obra solo según una máxima tal que puedas querer al mismo tiempo que se convierta en ley universal. Para Kant, la moral no depende de las consecuencias sino del cumplimiento del deber por el deber mismo."`,
    question: `Según Kant, una acción es moralmente correcta cuando puede ser universalizada sin contradicción y se realiza por deber, no por inclinación. Esta corriente ética se conoce como:`,
    options: ['Utilitarismo', 'Deontología kantiana', 'Relativismo moral', 'Hedonismo'],
    correct: 1,
    explanation: { correct: 'La deontología kantiana sostiene que la moralidad de una acción se determina por su capacidad de ser universalizada (imperativo categórico) y por la intención con que se realiza: debe hacerse por deber, no por inclinación o cálculo de consecuencias.', wrongs: ['El utilitarismo evalúa las acciones por sus consecuencias, no por el deber', 'Opción correcta', 'El relativismo moral niega la existencia de principios morales universales, contrariando a Kant', 'El hedonismo busca el placer como fin último, opuesto a la ética del deber kantiana'] }
  },
  {
    id: 'SC22', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'dificil',
    context: `"La Patria Boba (1810-1816) fue el período posterior al primer grito de independencia, caracterizado por el enfrentamiento entre federalistas y centralistas. Estos conflictos internos debilitaron el movimiento independentista y facilitaron la reconquista española liderada por Pablo Morillo."`,
    question: `El texto señala que el período de la "Patria Boba" se caracterizó por:`,
    options: ['La unificación de todas las fuerzas independentistas contra la corona española', 'Los enfrentamientos entre federalistas y centralistas que debilitaron la causa independentista', 'La consolidación definitiva de la independencia del territorio de la Nueva Granada', 'La firma de un tratado de paz y reconocimiento por parte de España'],
    correct: 1,
    explanation: { correct: 'La Patria Boba fue un período de intensos conflictos entre dos modelos políticos: el federalismo (liderado por Camilo Torres) y el centralismo (liderado por Antonio Nariño). Estas disputas fragmentaron el movimiento independentista y facilitaron la reconquista española liderada por Pablo Morillo entre 1815 y 1816.', wrongs: ['Hubo profundas divisiones internas, no unificación de fuerzas', 'Opción correcta', 'La independencia no estaba consolidada; la reconquista española lo demostró', 'No hubo tratado de paz; hubo una guerra de reconquista'] }
  },
  {
    id: 'SC23', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'facil',
    question: `Los pisos térmicos en Colombia (cálido, templado, frío, páramo y nieves perpetuas) se deben principalmente a la variación de:`,
    options: ['La cercanía al mar Caribe a lo largo de la costa', 'La altitud sobre el nivel del mar en las diferentes zonas del país', 'La latitud, que aumenta hacia el sur de Colombia', 'Las corrientes marinas frías y cálidas del océano Pacífico'],
    correct: 1,
    explanation: { correct: 'Los pisos térmicos en Colombia están determinados principalmente por la altitud sobre el nivel del mar. En la zona ecuatorial, la temperatura disminuye aproximadamente 6 °C por cada 1.000 metros de ascenso. Esto genera los distintos pisos: cálido (0-1.000 m), templado (1.000-2.000 m), frío (2.000-3.000 m), páramo (3.000-4.700 m) y nieves perpetuas (>4.700 m).', wrongs: ['La cercanía al mar influye en la humedad pero no determina los pisos térmicos', 'Opción correcta', 'La latitud ecuatorial de Colombia es constante; no varía significativamente dentro del país', 'Las corrientes marinas afectan el clima costero, no la zonificación por pisos térmicos'] }
  },
  {
    id: 'SC24', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'media',
    context: `"El cabildo abierto es un mecanismo de participación ciudadana que permite a los habitantes de un municipio reunirse para discutir asuntos de interés público. Debe ser convocado por el alcalde, el concejo municipal o un número significativo de ciudadanos, y no puede tratar temas presupuestales ni de ordenanzas."`,
    question: `Según el texto, el cabildo abierto es un espacio de participación de carácter municipal que permite discutir asuntos públicos locales, con la limitación de no poder tratar:`,
    options: ['Temas de seguridad nacional ni política exterior', 'Asuntos presupuestales ni proyectos de ordenanza', 'Problemas de servicios públicos domiciliarios', 'Cuestiones relacionadas con la educación pública'],
    correct: 1,
    explanation: { correct: 'El cabildo abierto (Ley 134 de 1994, modificada por Ley 1757 de 2015) es un mecanismo de participación a nivel municipal. No puede discutir proyectos de ordenanza, presupuestos ni temas de carácter general que correspondan a la Asamblea Departamental. Su función es debatir asuntos de interés local con la comunidad.', wrongs: ['El cabildo abierto es municipal; no discute temas nacionales como seguridad o política exterior', 'Opción correcta', 'Los servicios públicos sí pueden discutirse en cabildo abierto', 'La educación pública es un tema municipal que sí puede discutirse'] }
  },
  {
    id: 'SC25', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'media',
    question: `La Procuraduría General de la Nación, como parte del Ministerio Público, tiene como función principal:`,
    options: ['Investigar delitos comunes y presentar acusaciones penales', 'Vigilar la conducta oficial de los servidores públicos y ejercer control disciplinario', 'Recaudar los impuestos nacionales y departamentales', 'Organizar y vigilar los procesos electorales en todo el país'],
    correct: 1,
    explanation: { correct: 'La Procuraduría General de la Nación vigila la conducta oficial de los servidores públicos, ejerce control disciplinario, defiende el orden jurídico, los derechos humanos y el patrimonio público. No confundir con la Fiscalía (investiga delitos penales), la DIAN (recauda impuestos) ni la Registraduría (organiza elecciones).', wrongs: ['Investigar delitos es función de la Fiscalía General de la Nación', 'Opción correcta', 'Recaudar impuestos es función de la DIAN', 'Organizar elecciones es función de la Registraduría Nacional'] }
  },
  {
    id: 'SC26', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'dificil',
    context: `"El Producto Interno Bruto (PIB) per cápita de un país mide el valor de la producción total dividido entre el número de habitantes. Sin embargo, este indicador no refleja cómo se distribuye el ingreso ni considera externalidades como la contaminación o el agotamiento de recursos naturales."`,
    question: `Según el texto, una limitación del PIB per cápita como indicador de bienestar es que:`,
    options: ['No mide la producción total de bienes y servicios del país', 'No refleja la distribución del ingreso ni las externalidades ambientales', 'Solo mide la producción del sector agrícola', 'Es un cálculo que solo puede hacer el Banco Mundial'],
    correct: 1,
    explanation: { correct: 'El texto señala que el PIB per cápita "no refleja cómo se distribuye el ingreso ni considera externalidades como la contaminación". Un país puede tener un PIB per cápita alto pero sufrir grandes desigualdades sociales y graves problemas ambientales. Por eso se utilizan indicadores complementarios como el coeficiente Gini o el Índice de Desarrollo Humano.', wrongs: ['El PIB SÍ mide la producción total de bienes y servicios, esa es su función principal', 'Opción correcta', 'El PIB mide todos los sectores de la economía, no solo el agrícola', 'El PIB lo calcula cada país a través de sus institutos de estadística (DANE en Colombia)'] }
  },
  // ===== CIENCIAS - BLOQUE 3 =====
  {
    id: 'CN21', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
    context: `"En un laboratorio, un estudiante coloca tres cilindros de papa de igual masa en tres vasos: uno con agua destilada, otro con solución salina al 10% y otro con solución salina al 25%. Después de 30 minutos, retira los cilindros y registra los cambios de masa."`,
    question: `Si el cilindro en agua destilada ganó masa y el de solución al 25% perdió masa, ¿cómo se explica este resultado?`,
    options: ['El agua destilada contiene más nutrientes que la salina', 'La ósmosis movió agua desde donde había mayor concentración de agua hacia donde había menor', 'Las células de la papa murieron por el exceso de sal', 'El agua destilada disolvió parte de la papa aumentando su masa'],
    correct: 1,
    explanation: { correct: 'Por ósmosis, el agua se desplaza desde la zona de mayor concentración de agua (menor concentración de solutos) hacia la de menor concentración de agua. En agua destilada, el agua entra a las células de la papa (turgencia). En solución salina al 25%, el agua sale de las células hacia el medio externo (plasmólisis), provocando pérdida de masa.', wrongs: ['El agua destilada no tiene nutrientes adicionales; el cambio se debe al movimiento de agua por ósmosis', 'Opción correcta', 'Las células no mueren inmediatamente; el cambio de masa se debe al flujo osmótico de agua', 'El agua destilada no disuelve la papa; la ósmosis explica el aumento de masa'] }
  },
  {
    id: 'CN22', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
    context: `"En una práctica de laboratorio, se hacen reaccionar 10 g de carbonato de calcio (CaCO₃) con ácido clorhídrico (HCl) en exceso, produciendo cloruro de calcio (CaCl₂), dióxido de carbono (CO₂) y agua. La masa molar del CaCO₃ es 100 g/mol."`,
    question: `Si se recolectan 2,2 g de CO₂ (masa molar 44 g/mol) al finalizar la reacción, ¿qué porcentaje del rendimiento teórico se obtuvo?`,
    options: ['50%', '75%', '100%', '25%'],
    correct: 0,
    explanation: { correct: 'La reacción es CaCO₃ + 2HCl → CaCl₂ + CO₂ + H₂O. 10 g de CaCO₃ = 0,1 mol. Rendimiento teórico: 0,1 mol × 44 g/mol = 4,4 g de CO₂. Rendimiento real: 2,2 g. Porcentaje: (2,2/4,4) × 100 = 50%.', wrongs: ['Opción correcta', '2,2/4,4 = 0,5 = 50%, no 75%', 'Para 100% se necesitarían 4,4 g de CO₂, pero solo se obtuvieron 2,2 g', 'Se obtuvo la mitad del rendimiento teórico, es decir 50%'] }
  },
  {
    id: 'CN23', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
    context: `"Un estudiante envuelve un clavo de hierro con alambre de cobre conectado a una pila. Al acercar el clavo a clips metálicos, estos son atraídos. Al desconectar la pila, los clips dejan de ser atraídos."`,
    question: `¿Qué concluye el estudiante sobre el fenómeno observado?`,
    options: ['El clavo se volvió magnético permanentemente por el contacto con el cobre', 'La corriente eléctrica que circula por el alambre genera un campo magnético temporal en el clavo', 'La pila transfirió electrones al clavo convirtiéndolo en un imán de hierro', 'El cobre y el hierro reaccionan químicamente produciendo atracción magnética'],
    correct: 1,
    explanation: { correct: 'El electroimán funciona porque la corriente eléctrica que circula por la bobina de alambre genera un campo magnético que magnetiza temporalmente el núcleo de hierro. Al cortar la corriente, el campo magnético desaparece y el clavo pierde su magnetismo.', wrongs: ['El magnetismo desaparece al desconectar la pila, lo que indica que no es permanente', 'Opción correcta', 'La pila proporciona corriente eléctrica, pero no convierte el hierro en imán permanente', 'No ocurre una reacción química entre el cobre y el hierro en este montaje'] }
  },
  {
    id: 'CN24', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
    context: `"Un geólogo encuentra tres muestras de roca en diferentes puntos de una cordillera. La muestra A tiene cristales visibles de gran tamaño, la muestra B presenta capas delgadas con fósiles marinos, y la muestra C tiene textura vítrea sin cristales visibles."`,
    question: `¿Qué interpretación es más coherente con las características observadas?`,
    options: ['La muestra A es ígnea volcánica, la B es metamórfica y la C es sedimentaria', 'La muestra A es ígnea intrusiva, la B es sedimentaria y la C es ígnea extrusiva', 'Las tres muestras son sedimentarias formadas en diferentes ambientes', 'La muestra A es metamórfica, la B es ígnea intrusiva y la C es sedimentaria'],
    correct: 1,
    explanation: { correct: 'Cristales grandes indican enfriamiento lento bajo la superficie (ígnea intrusiva, como el granito). Capas con fósiles marinos indican formación sedimentaria en un ambiente acuático. Textura vítrea indica enfriamiento muy rápido en la superficie (ígnea extrusiva, como la obsidiana).', wrongs: ['Las rocas volcánicas (extrusivas) tienen cristales pequeños o textura vítrea, no cristales grandes', 'Opción correcta', 'La textura vítrea solo se forma por enfriamiento rápido de magma, no por sedimentación', 'Las rocas metamórficas tienen textura foliada, no cristales grandes aislados'] }
  },
  {
    id: 'CN25', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
    context: `"Un grupo de estudiantes prepara tres tubos de ensayo: tubo 1 con agua oxigenada (H₂O₂) a temperatura ambiente, tubo 2 con agua oxigenada más una gota de sangre, y tubo 3 con agua oxigenada hervida previamente y luego enfriada, más una gota de sangre. En el tubo 2 se observa una producción vigorosa de burbujas, mientras que en los tubos 1 y 3 no."`,
    question: `¿Cuál es la explicación más adecuada para los resultados?`,
    options: ['La sangre contiene catalasa que descompone el H₂O₂; al hervir la sangre la enzima se desnaturalizó y perdió su función', 'La sangre reacciona químicamente con el H₂O₂ produciendo calor que genera las burbujas', 'El agua oxigenada hervida se descompone más rápido que la que está a temperatura ambiente', 'La sangre contiene hierro que cataliza la descomposición del H₂O₂ independientemente de la temperatura'],
    correct: 0,
    explanation: { correct: 'La catalasa de la sangre descompone el H₂O₂ en agua y oxígeno (las burbujas observadas). Al hervir la sangre, las proteínas, incluida la catalasa, se desnaturalizan irreversiblemente por el calor, perdiendo su estructura tridimensional y su función catalítica.', wrongs: ['Opción correcta', 'No es una reacción química directa con la sangre sino una catálisis enzimática', 'El agua oxigenada no se descompone significativamente solo por haber sido hervida', 'El calor desnaturaliza las enzimas, por lo que la catalasa no funciona después de hervir la sangre'] }
  },
  {
    id: 'CN26', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
    context: `"En un experimento, se introduce una jeringa con 20 mL de aire a presión atmosférica y se tapa la salida. Al empujar el émbolo hasta reducir el volumen a 10 mL, se nota que es más difícil seguir empujando."`,
    question: `¿Qué ley física explica el aumento de la fuerza necesaria para comprimir el aire?`,
    options: ['Ley de Charles: a mayor presión menor temperatura', 'Ley de Boyle: a temperatura constante, la presión de un gas es inversamente proporcional al volumen', 'Ley de Gay-Lussac: el volumen es directamente proporcional a la temperatura', 'Principio de Pascal: la presión se transmite uniformemente en un fluido'],
    correct: 1,
    explanation: { correct: 'La ley de Boyle establece que, a temperatura constante, la presión de un gas es inversamente proporcional a su volumen (P₁V₁ = P₂V₂). Al reducir el volumen a la mitad (de 20 a 10 mL), la presión se duplica, por lo que se necesita más fuerza para comprimir el gas.', wrongs: ['La ley de Charles relaciona volumen y temperatura, no presión y volumen', 'Opción correcta', 'La ley de Gay-Lussac relaciona presión y temperatura a volumen constante', 'El principio de Pascal describe la transmisión de presión en fluidos, no la compresión de gases'] }
  },
  {
    id: 'CN27', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
    context: `"Un trabajador utiliza un plano inclinado de 4 m de longitud para subir un barril de 200 kg a una plataforma que está a 1 m de altura. El trabajador aplica una fuerza paralela al plano y el sistema tiene un rendimiento del 80%."`,
    question: `¿Qué ventaja mecánica ofrece el plano inclinado al trabajador?`,
    options: ['Reduce el trabajo total necesario para subir el barril', 'Permite aplicar una fuerza menor que el peso del barril para elevarlo, aunque la distancia recorrida es mayor', 'Elimina la fricción entre el barril y la superficie', 'Convierte la fuerza aplicada en energía potencial sin pérdidas'],
    correct: 1,
    explanation: { correct: 'El plano inclinado permite aplicar una fuerza menor que el peso del objeto a cambio de recorrer una mayor distancia. La ventaja mecánica ideal es longitud/altura = 4/1 = 4, por lo que la fuerza necesaria sería aproximadamente 1/4 del peso (490 N en lugar de 1960 N), aunque la fricción y el rendimiento del 80% aumentan la fuerza real requerida.', wrongs: ['El trabajo total (mgh) es el mismo; el plano inclinado reduce la fuerza, no el trabajo', 'Opción correcta', 'El plano inclinado no elimina la fricción, de hecho puede aumentarla', 'Las máquinas simples no eliminan las pérdidas por fricción o calor'] }
  },
  {
    id: 'CN28', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
    context: `"En un cultivo de guisantes, Mendel cruzó plantas de tallo alto (AA) con plantas de tallo enano (aa). Todas las plantas de la primera generación filial (F1) fueron altas. Luego, al cruzar dos plantas de la F1 entre sí, obtuvo una generación F2 con proporciones de 3:1 entre plantas altas y enanas."`,
    question: `Si en la F2 se obtuvieron 400 plantas, ¿cuántas se espera que sean homocigotas dominantes (AA)?`,
    options: ['300', '200', '100', '400'],
    correct: 2,
    explanation: { correct: 'En la F2, la proporción genotípica esperada es 1 AA : 2 Aa : 1 aa. Es decir, 1/4 de las plantas son AA homocigotas dominantes. De 400 plantas: 400 × 1/4 = 100 plantas AA.', wrongs: ['300 sería la suma de AA + Aa (plantas altas), no solo las homocigotas dominantes', '200 serían las heterocigotas (Aa), no las homocigotas dominantes (AA)', 'Opción correcta', 'No todas las plantas de la F2 son AA; la proporción esperada es 1/4 AA'] }
  },
  // ===== INGLÉS - BLOQUE 3 (EN19-EN28) =====
  {
    id: 'EN19', area: 'ingles', areaName: 'Inglés', difficulty: 'media',
    context: `Read the text: "The cheetah is the fastest land animal on Earth. It can reach speeds of up to 120 kilometers per hour, but it can only maintain this speed for short distances. Cheetahs use their speed to catch prey like gazelles, but they exhaust quickly after a chase."`,
    question: `What is a limitation of the cheetah's speed mentioned in the text?`,
    options: ['It can only run fast for short distances', 'It cannot catch gazelles', 'It runs fastest in the water', 'It is slower than most other animals'],
    correct: 0,
    explanation: { correct: 'The text states cheetahs "can only maintain this speed for short distances" and "exhaust quickly after a chase," indicating their speed has a duration limitation.', wrongs: ['Opción correcta', 'The text says cheetahs "use their speed to catch prey like gazelles"', 'Cheetahs are land animals, not aquatic', 'The text says the cheetah is "the fastest land animal"'] }
  },
  {
    id: 'EN20', area: 'ingles', areaName: 'Inglés', difficulty: 'facil',
    context: `Sign: "Pool closed for maintenance. Reopens Monday at 8 AM."`,
    question: `When will the pool reopen?`,
    options: ['On Monday at 8 AM', 'On Friday at noon', 'Next month', 'It will not reopen'],
    correct: 0,
    explanation: { correct: 'The sign says "Reopens Monday at 8 AM." This directly tells when the pool will be available again after maintenance.', wrongs: ['Opción correcta', 'Monday is specified, not Friday', 'The sign says Monday, not next month', 'The sign gives a specific reopening date and time'] }
  },
  {
    id: 'EN21', area: 'ingles', areaName: 'Inglés', difficulty: 'dificil',
    context: `Read the text: "According to a study published in Nature, plants can 'talk' to each other through underground fungal networks called mycorrhizal networks. When a plant is attacked by pests, it releases chemical signals through these networks to warn neighboring plants. The warned plants then produce defensive compounds to protect themselves."`,
    question: `How do plants warn each other about danger according to the text?`,
    options: ['By making loud sounds', 'Through chemical signals sent via underground fungal networks', 'By releasing pollen into the air', 'Through their leaves touching each other'],
    correct: 1,
    explanation: { correct: 'The text says a plant "releases chemical signals through these networks to warn neighboring plants" when attacked. The mycorrhizal networks serve as a communication pathway.', wrongs: ['Plants do not make sounds', 'Opción correcta', 'Pollen is for reproduction, not warning', 'The text mentions underground networks, not leaf contact'] }
  },
  {
    id: 'EN22', area: 'ingles', areaName: 'Inglés', difficulty: 'media',
    context: `Read the announcement: "The school library will be closed on Friday, March 15th for inventory. All books must be returned by Thursday, March 14th. Students with overdue books will not be able to borrow new ones until they return them."`,
    question: `What must students do before Thursday, March 14th?`,
    options: ['Borrow new books', 'Return their books', 'Pay a fine', 'Register for the library'],
    correct: 1,
    explanation: { correct: 'The announcement says "All books must be returned by Thursday, March 14th" because the library will be closed for inventory on Friday.', wrongs: ['Borrowing would need to happen before the deadline for returns', 'Opción correcta', 'Fines are not mentioned in the announcement', 'Registration is not mentioned'] }
  },
  {
    id: 'EN23', area: 'ingles', areaName: 'Inglés', difficulty: 'media',
    context: `Read the text: "Norway is one of the best countries in the world to see the Northern Lights, also known as Aurora Borealis. The best time to visit is between October and March when the nights are longest. Many tourists stay in special glass igloos where they can watch the lights from their beds."`,
    question: `When is the best time to see the Northern Lights in Norway?`,
    options: ['Between June and August', 'Between October and March', 'Only in December', 'During the summer months'],
    correct: 1,
    explanation: { correct: 'The text says "The best time to visit is between October and March when the nights are longest." Longer nights provide better conditions for viewing the aurora.', wrongs: ['Summer has shorter nights, not ideal', 'Opción correcta', 'The period is October to March, not just December', 'Summer has shorter, brighter nights'] }
  },
  {
    id: 'EN24', area: 'ingles', areaName: 'Inglés', difficulty: 'facil',
    context: `Notice: "Lost kitten! Black and white. Answers to the name 'Oreo.' Last seen near the park on Elm Street. Please call 555-0123 if found."`,
    question: `What should you do if you find the kitten?`,
    options: ['Keep it as a pet', 'Call the phone number provided', 'Take it to the animal shelter', 'Leave it at the park'],
    correct: 1,
    explanation: { correct: 'The notice says "Please call 555-0123 if found." This is the action requested from anyone who finds the lost kitten.', wrongs: ['The owner wants the kitten back', 'Opción correcta', 'The notice asks to call the owner directly', 'The notice asks to call the number provided'] }
  },
  {
    id: 'EN25', area: 'ingles', areaName: 'Inglés', difficulty: 'dificil',
    context: `Read the text: "The term 'FOMO' stands for 'Fear Of Missing Out.' It describes the anxiety people feel when they think others are having rewarding experiences without them. Psychologists link FOMO to social media use, where users constantly see curated highlights of other people's lives. This can lead to decreased life satisfaction and increased feelings of inadequacy."`,
    question: `According to the text, what is FOMO linked to?`,
    options: ['Fear of flying', 'Social media use and seeing others' experiences', 'Fear of public speaking', 'Working too many hours'],
    correct: 1,
    explanation: { correct: 'The text says "Psychologists link FOMO to social media use, where users constantly see curated highlights of other people\'s lives." The constant exposure to others' positive experiences triggers the anxiety.', wrongs: ['FOMO is "Fear Of Missing Out," not fear of flying', 'Opción correcta', 'Public speaking fear is unrelated', 'Work hours are not mentioned'] }
  },
  {
    id: 'EN26', area: 'ingles', areaName: 'Inglés', difficulty: 'media',
    context: `Read the recipe step: "First, preheat the oven to 350 degrees Fahrenheit. While the oven is heating, mix the flour, sugar, and eggs in a large bowl. Then add the vanilla extract and stir until smooth. Pour the mixture into a greased baking pan and bake for 25 minutes."`,
    question: `What should you do after preheating the oven?`,
    options: ['Bake the mixture for 25 minutes', 'Mix the dry ingredients with the eggs', 'Pour the mixture into a pan', 'Add vanilla extract to the bowl'],
    correct: 1,
    explanation: { correct: 'The instructions say: "While the oven is heating, mix the flour, sugar, and eggs in a large bowl." This step comes right after preheating, to be done while the oven reaches temperature.', wrongs: ['Baking comes after everything is prepared', 'Opción correcta', 'Pouring into the pan comes after mixing', 'Vanilla is added after the initial mixing'] }
  },
  {
    id: 'EN27', area: 'ingles', areaName: 'Inglés', difficulty: 'facil',
    context: `Read the ad: "Furniture sale! Sofas starting at $299. Dining tables at 50% off. Free delivery for purchases over $1,000. Offer valid until Sunday."`,
    question: `How can a customer get free delivery?`,
    options: ['By buying a sofa', 'By spending more than $1,000', 'By coming on Sunday', 'By ordering online'],
    correct: 1,
    explanation: { correct: 'The ad says "Free delivery for purchases over $1,000." This means customers who spend more than $1,000 qualify for free delivery.', wrongs: ['Sofas start at $299, which alone may not reach $1,000', 'Opción correcta', 'Sunday is when the offer ends, not the condition for free delivery', 'Online ordering is not mentioned'] }
  },
  {
    id: 'EN28', area: 'ingles', areaName: 'Inglés', difficulty: 'dificil',
    context: `Read the text: "In many cultures, colors carry symbolic meanings. White is often associated with purity and weddings in Western cultures, but in some Eastern cultures, white is worn at funerals. Red symbolizes luck and prosperity in China, while in other contexts it can represent danger or love. These differences remind us that color perception is shaped by culture as much as by biology."`,
    question: `What does the text say about the color white?`,
    options: ['It has the same meaning in all cultures', 'It represents purity in the West and mourning in some Eastern cultures', 'It is never used in celebrations', 'It only symbolizes danger'],
    correct: 1,
    explanation: { correct: 'The text contrasts white\'s meaning: "White is often associated with purity and weddings in Western cultures, but in some Eastern cultures, white is worn at funerals." This shows cultural differences in color symbolism.', wrongs: ['The text shows white has DIFFERENT meanings across cultures', 'Opción correcta', 'White is used in weddings (Western) and funerals (Eastern), both important ceremonies', 'Danger is associated with red, not white'] }
  },
  // ===== MÁS LECTURA =====
  {
    id: 'LC28', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'dificil',
    context: `"En su ensayo 'El laberinto de la soledad' (1950), Octavio Paz analiza la identidad del mexicano a partir de la experiencia de la soledad y la máscara. Según Paz, la historia de México es la del hombre que busca su filiación, su origen: "El mexicano no quiere o no se atreve a ser él mismo. Constantemente, la máscara sustituye a su rostro verdadero". La Revolución mexicana, para Paz, fue un intento de romper con esa máscara y descubrir el rostro auténtico del pueblo.`,
    question: `Según Octavio Paz, la "máscara" del mexicano representa:`,
    options: ['Una tradición artística propia de las culturas prehispánicas', 'La ocultación de la identidad auténtica y el miedo a mostrarse tal como se es', 'Un mecanismo de defensa necesario para la supervivencia social', 'La influencia de la cultura española sobre la indígena'],
    correct: 1,
    explanation: { correct: 'Paz sostiene que "la máscara sustituye a su rostro verdadero" y que el mexicano "no quiere o no se atreve a ser él mismo". La máscara simboliza la ocultación de la identidad auténtica, un tema central en su análisis del carácter mexicano y su relación con la historia.', wrongs: ['La máscara es una metáfora psicológica e identitaria, no una referencia literal al arte prehispánico', 'Opción correcta', 'Paz no presenta la máscara como algo necesario sino como un problema que la Revolución intentó resolver', 'La máscara no es solo influencia española sino una condición existencial del mexicano moderno'] }
  },
  {
    id: 'LC29', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'media',
    context: `"Hasta ahora he explicado los fenómenos celestes y los de nuestro mar mediante la fuerza de la gravedad, pero no he asignado causa alguna a esta. Esta fuerza surge de alguna causa que penetra hasta los centros del Sol y los planetas sin disminuir su capacidad de actuar. No fingo hipótesis: pues todo lo que no se deduce de los fenómenos debe llamarse hipótesis; y las hipótesis, ya sean metafísicas o físicas, ya de cualidades ocultas o mecánicas, no tienen cabida en la filosofía experimental." - Isaac Newton, "Principios matemáticos de la filosofía natural" (1687), Escolio General.`,
    question: `Con la expresión "No fingo hipótesis" ("No finjo hipótesis"), Newton establece que:`,
    options: ['Las hipótesis científicas no tienen ningún valor y deben ser eliminadas', 'La filosofía experimental debe limitarse a deducir causas a partir de los fenómenos observables', 'Es aceptable inventar explicaciones sin base empírica para los fenómenos naturales', 'Las hipótesis metafísicas son superiores a las explicaciones mecánicas'],
    correct: 1,
    explanation: { correct: 'Newton afirma que no propone hipótesis no fundamentadas en fenómenos. Su método consiste en deducir causas a partir de fenómenos observables, rechazando las especulaciones que no se derivan de la experiencia. Esto establece el principio central de la filosofía experimental: basarse en la observación y deducción.', wrongs: ['Newton no rechaza toda hipótesis, sino aquellas que "no se deducen de los fenómenos"', 'Opción correcta', 'Newton rechaza explícitamente las hipótesis no basadas en fenómenos, no las acepta', 'Newton dice que las hipótesis "no tienen cabida en la filosofía experimental", sean metafísicas o mecánicas'] }
  },
  {
    id: 'LC30', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'facil',
    context: `"La ciudad y los perros", la primera novela de Mario Vargas Llosa (1963), transcurre en el Colegio Militar Leoncio Prado de Lima. La obra muestra la violencia y la hipocresía que impregnan la institución, donde los cadetes deben sobrevivir en un ambiente hostil. El título alude tanto a los perros que deambulan por el colegio como a la condición de los propios cadetes, tratados como animales por sus superiores.`,
    question: `El título "La ciudad y los perros" funciona como una metáfora que:`,
    options: ['Describe literalmente los animales que habitan la ciudad de Lima', 'Equipara la condición de los cadetes con la de animales sometidos a la violencia institucional', 'Se refiere exclusivamente a la fauna silvestre del Perú', 'Alude a la libertad de los jóvenes en la ciudad'],
    correct: 1,
    explanation: { correct: 'El título establece una analogía entre los cadetes ("los perros" tratados como animales) y el entorno opresivo ("la ciudad" = el Colegio Militar como microcosmos social). La novela critica la violencia institucional que deshumaniza a los jóvenes soldados.', wrongs: ['El título tiene un sentido metafórico, no literal', 'Opción correcta', 'La metáfora se refiere a los cadetes, no a la fauna', 'La novela muestra precisamente la falta de libertad en la institución'] }
  },
  // ===== MÁS SOCIALES =====
  {
    id: 'SC27', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'facil',
    context: `"La Constitución de 1991 reconoce que Colombia es un país pluriétnico y multicultural. Los artículos 7 y 8 establecen la obligación del Estado de proteger la diversidad étnica y cultural de la nación y las riquezas culturales y naturales del país."`,
    question: `El reconocimiento constitucional de Colombia como un país pluriétnico y multicultural implica que el Estado debe:`,
    options: ['Imponer una sola identidad cultural a todos los ciudadanos', 'Proteger y respetar a los diferentes grupos étnicos y culturales que coexisten en el país', 'Otorgar derechos exclusivamente a las comunidades indígenas', 'Eliminar las diferencias culturales para unificar la nación'],
    correct: 1,
    explanation: { correct: 'El carácter pluriétnico y multicultural de Colombia (arts. 7 y 8 de la Constitución) significa que el Estado reconoce y protege la coexistencia de múltiples grupos étnicos: indígenas, afrocolombianos, raizales, pueblo ROM (gitano) y comunidades campesinas, cada uno con sus propias lenguas, tradiciones, territorios y formas de organización.', wrongs: ['El multiculturalismo implica respeto por la diversidad, no imposición de una identidad única', 'Opción correcta', 'Los derechos constitucionales abarcan a todos los grupos étnicos, no solo a los indígenas', 'La Constitución valora la diversidad cultural como una riqueza, no como algo que deba eliminarse'] }
  },
  {
    id: 'SC28', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'media',
    question: `La Ley 70 de 1993, también conocida como Ley de Comunidades Negras, reconoció el derecho de las comunidades afrocolombianas a:`,
    options: ['La propiedad colectiva de las tierras en la región del Pacífico y sus prácticas tradicionales de producción', 'La exención del pago de impuestos nacionales', 'La representación exclusiva en el Congreso de la República', 'La creación de departamentos autónomos independientes'],
    correct: 0,
    explanation: { correct: 'La Ley 70 de 1993 desarrolla el artículo transitorio 55 de la Constitución y otorga el derecho a la propiedad colectiva de las tierras de las comunidades negras en la región del Pacífico. También reconoce sus prácticas tradicionales de producción, su identidad cultural, y establece mecanismos de protección de sus derechos territoriales y culturales.', wrongs: ['Opción correcta', 'No establece exenciones tributarias para comunidades negras', 'La Constitución reserva escaños para comunidades indígenas y afro en la Cámara, pero no es una creación de la Ley 70', 'Colombia es una república unitaria; no existen departamentos autónomos independientes'] }
  },
  {
    id: 'SC29', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'facil',
    question: `Los derechos fundamentales consagrados en la Constitución de 1991 (Título II, arts. 11-41) se caracterizan por:`,
    options: ['Ser de aplicación inmediata y protegibles mediante acción de tutela', 'Aplicar únicamente a los ciudadanos colombianos mayores de edad', 'Ser derechos que solo el Congreso puede invocar', 'Estar sujetos a reglamentación previa del Ejecutivo para su aplicación'],
    correct: 0,
    explanation: { correct: 'Los derechos fundamentales en la Constitución de 1991 son de aplicación inmediata (art. 85), lo que significa que no requieren desarrollo legislativo previo para ser exigibles. Cualquier persona puede solicitar su protección mediante la acción de tutela (art. 86) cuando sean vulnerados o amenazados.', wrongs: ['Opción correcta', 'Los derechos fundamentales aplican a todas las personas en territorio colombiano, sin distinción de edad o nacionalidad', 'Todas las personas pueden invocar derechos fundamentales, no solo el Congreso', 'Precisamente se caracterizan por no requerir reglamentación previa; son de aplicación inmediata'] }
  },
  // ===== MÁS CIENCIAS =====
  {
    id: 'CN29', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
    context: `"En una práctica de laboratorio, un estudiante sumerge una lámina de zinc en una solución de sulfato de cobre (CuSO₄). Después de unos minutos, observa que la lámina de zinc se cubre de un depósito rojizo y la solución, que inicialmente era azul, pierde color."`,
    question: `¿Qué tipo de reacción ocurrió y qué indica el cambio de color?`,
    options: ['Reacción de descomposición; el sulfato se separó en cobre y azufre', 'Reacción de desplazamiento simple; el zinc, más reactivo, desplazó al cobre de la solución', 'Reacción de síntesis; se formó un nuevo compuesto de zinc y cobre', 'Reacción de combustión; el zinc se oxidó con el oxígeno del agua'],
    correct: 1,
    explanation: { correct: 'Es una reacción de desplazamiento simple (redox): Zn(s) + CuSO₄(ac) → ZnSO₄(ac) + Cu(s). El zinc, que es más reactivo que el cobre según la serie de actividad, desplaza al cobre. El color azul del CuSO₄ desaparece al formarse ZnSO₄ (incoloro) y el cobre metálico se deposita como sólido rojizo.', wrongs: ['No es descomposición porque no hay un solo reactivo dividiéndose en productos más simples', 'Opción correcta', 'No es síntesis porque hay intercambio de elementos entre compuestos', 'No hay combustión; no se requiere oxígeno y no hay llama'] }
  },
  {
    id: 'CN30', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
    context: `"En un recipiente cerrado con un émbolo móvil, se tienen 2 litros de gas helio a 1 atm de presión y 27°C. Se calienta el gas hasta 127°C manteniendo la presión constante mediante el movimiento del émbolo."`,
    question: `¿Qué volumen ocupará el gas a 127°C?`,
    options: ['2,67 L', '1,5 L', '2 L', '3 L'],
    correct: 0,
    explanation: { correct: 'A presión constante se aplica la ley de Charles: V₁/T₁ = V₂/T₂. Las temperaturas deben estar en Kelvin: T₁ = 27 + 273 = 300 K, T₂ = 127 + 273 = 400 K. V₂ = V₁ × T₂/T₁ = 2 L × 400/300 = 2 × 1,333 = 2,67 L.', wrongs: ['Opción correcta', 'Al aumentar la temperatura el volumen debe aumentar (ley de Charles), no disminuir', 'Si la temperatura cambia de 300 K a 400 K, el volumen debe aumentar proporcionalmente', '3 L requeriría una temperatura de 450 K (177°C), no 400 K'] }
  },
  {
    id: 'CN31', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
    context: `"Un estudiante observa al microscopio una muestra de agua estancada y encuentra organismos unicelulares que se mueven activamente. Algunos tienen cloroplastos y otros no. Todos tienen núcleo definido."`,
    question: `¿A qué grupo de organismos pertenecen estas células?`,
    options: ['Bacterias, porque son unicelulares', 'Protistas, porque son eucariotas unicelulares', 'Hongos, porque viven en ambientes húmedos', 'Virus, porque son microscópicos'],
    correct: 1,
    explanation: { correct: 'Los protistas son organismos eucariotas unicelulares (con núcleo definido) que pueden ser autótrofos (con cloroplastos) o heterótrofos (sin cloroplastos). Las bacterias son procariotas (sin núcleo definido), los hongos son generalmente pluricelulares y los virus no son células.', wrongs: ['Las bacterias son procariotas, no tienen núcleo definido', 'Opción correcta', 'Los hongos son eucariotas pero generalmente pluricelulares, no unicelulares', 'Los virus no son células y no se observan con microscopio óptico'] }
  },
  // ===== MÁS INGLÉS (EN29-EN30) =====
  {
    id: 'EN29', area: 'ingles', areaName: 'Inglés', difficulty: 'media',
    context: `Read the text: "Singapore is a city-state in Southeast Asia. It is known for its strict laws, cleanliness, and modern architecture. The country has four official languages: English, Mandarin, Malay, and Tamil. English is the language of business and education, which makes Singapore attractive to international companies."`,
    question: `Why is Singapore attractive to international companies according to the text?`,
    options: ['Because of its strict laws', 'Because English is used in business and education', 'Because it has four official languages', 'Because of its modern architecture'],
    correct: 1,
    explanation: { correct: 'The text directly states "English is the language of business and education, which makes Singapore attractive to international companies." The use of English facilitates international business operations.', wrongs: ['Strict laws are mentioned but not as the reason for business attraction', 'Opción correcta', 'Having four languages is listed as a fact, not as the business attraction', 'Modern architecture is mentioned but not as the attraction for companies'] }
  },
  {
    id: 'EN30', area: 'ingles', areaName: 'Inglés', difficulty: 'dificil',
    context: `Read the text: "The sinking of the Titanic in 1912 led to major changes in maritime safety regulations. Before the disaster, ships did not carry enough lifeboats for all passengers because regulations were based on ship tonnage rather than passenger capacity. After the Titanic, the International Convention for the Safety of Life at Sea (SOLAS) was established, requiring enough lifeboats for everyone on board."`,
    question: `What was the main flaw in pre-1912 safety regulations according to the text?`,
    options: ['Ships did not have lifeboats at all', 'Lifeboat requirements were based on ship size, not passenger numbers', 'The Titanic ignored all safety rules', 'Only first-class passengers had access to lifeboats'],
    correct: 1,
    explanation: { correct: 'The text says "regulations were based on ship tonnage rather than passenger capacity," meaning the number of lifeboats depended on the ship\'s size, not on how many people were aboard.', wrongs: ['Ships had lifeboats, just not enough for everyone', 'Opción correcta', 'The text does not claim the Titanic ignored rules', 'Class access to lifeboats is not mentioned'] }
  },

  // ===== LECTURA CRÍTICA - BLOQUE 4 (LC31-LC60) =====
  {
    id: 'LC31', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'dificil',
    context: `"Yo os enseñaré el superhombre. El hombre es algo que debe ser superado. ¿Qué habéis hecho para superarlo? Todos los seres han creado algo superior a sí mismos. ¿Queréis ser el reflujo de esa gran marea y volver a la bestia antes que superar al hombre? El superhombre es el sentido de la tierra. Que vuestra voluntad diga: ¡el superhombre sea el sentido de la tierra!" - Friedrich Nietzsche, "Así habló Zaratustra" (1883-1885), Prólogo.`,
    question: `Cuando Nietzsche afirma que "el hombre es algo que debe ser superado", se refiere a:`,
    options: ['La necesidad de que la humanidad regrese a un estado natural anterior a la civilización', 'La exigencia de que cada individuo trascienda las limitaciones impuestas por la moral tradicional y cree sus propios valores', 'La obligación de la especie humana de evolucionar biológicamente hacia una nueva forma física', 'El rechazo de toda forma de cultura y conocimiento para volver al instinto animal'],
    correct: 1,
    explanation: { correct: 'Para Nietzsche, el superhombre (Übermensch) representa la capacidad de superar la moral herdada, crear valores propios y afirmar la vida. La frase "el hombre es algo que debe ser superado" no se refiere a una evolución biológica sino a una transformación de los valores y la voluntad.', wrongs: ['Nietzsche no propone regresar a la naturaleza sino trascender la condición humana actual mediante la creación de nuevos valores', 'Opción correcta', 'Nietzsche habla de una superación espiritual y moral, no biológica', 'La superación implica crear cultura, no rechazarla'] }
  },
  {
    id: 'LC32', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'media',
    context: `"Ella lo miró, lo vio desarmado, y una vida de ternura contenida estalló en sus párpados. Era la primera vez que Florentino Ariza la veía llorar. Nunca había imaginado que el llanto de esa mujer pudiera ser otra cosa que una tormenta de alegría." - Gabriel García Márquez, "El amor en los tiempos del cólera" (1985).`,
    question: `En el fragmento, la expresión "una vida de ternura contenida estalló en sus párpados" sugiere que:`,
    options: ['La mujer estaba experimentando una alegría intensa y desbordante', 'Los sentimientos largamente reprimidos de la mujer se manifestaban finalmente a través del llanto', 'La mujer había llorado muchas veces antes, pero esta vez era diferente', 'Florentino Ariza comprendía perfectamente el significado del llanto de la mujer'],
    correct: 1,
    explanation: { correct: 'La frase "una vida de ternura contenida" indica que los sentimientos habían sido reprimidos durante mucho tiempo ("contenida"), y "estalló" sugiere una liberación súbita. El llanto revela la ternura que había permanecido oculta. Además, Florentino "nunca había imaginado" que ella pudiera llorar así, lo que subraya la novedad de esta manifestación emocional.', wrongs: ['La imagen del llanto se asocia más con una liberación de sentimientos contenidos que con alegría', 'Opción correcta', 'El texto sugiere que es la PRIMERA vez que Florentino la ve llorar, lo que resalta lo excepcional', 'Florentino precisamente no comprendía el llanto: "nunca había imaginado" que ella llorara así'] }
  },
  {
    id: 'LC33', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'facil',
    context: `"La acción es la actividad política por excelencia, la única actividad que se da entre los hombres sin la mediación de cosas o materia. La pluralidad humana, la condición básica de la acción y el discurso, tiene el doble carácter de igualdad y distinción. Si los hombres no fueran iguales, no podrían entenderse ni planificar el futuro. Si no fueran distintos, no necesitarían el discurso ni la acción para entenderse." - Hannah Arendt, "La condición humana" (1958).`,
    question: `Según Arendt, la "pluralidad humana" se caracteriza por:`,
    options: ['La uniformidad de todos los seres humanos en sus opiniones y acciones', 'La combinación de igualdad y distinción que hace necesarios la acción y el discurso', 'La superioridad de unos seres humanos sobre otros en capacidad política', 'La imposibilidad de que los seres humanos se comprendan entre sí'],
    correct: 1,
    explanation: { correct: 'Arendt afirma que la pluralidad tiene "el doble carácter de igualdad y distinción". La igualdad permite el entendimiento mutuo; la distinción hace necesario el discurso y la acción política. Sin ambas, la política no tendría sentido: sin igualdad no habría comunicación, sin distinción no haría falta la deliberación.', wrongs: ['Arendt enfatiza la distinción entre los seres humanos, no su uniformidad', 'Opción correcta', 'Arendt no propone jerarquías sino una condición de igualdad que permite la acción política', 'El texto dice exactamente lo contrario: la igualdad permite que se entiendan'] }
  },
  {
    id: 'LC34', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'facil',
    context: `"Confieso que he vivido. Por algo le pusieron ese nombre a estos libros: porque en ellos quiso quedarse detenido el tiempo. Pasa la vida, pasa la vida, y uno se va con ella. Pero a veces, escribir es la manera de no irse del todo. Uno escribe para llenar sus huesos de una substancia que no se pudre." - Pablo Neruda, "Confieso que he vivido. Memorias" (1974).`,
    question: `Según Neruda, la escritura de memorias tiene como propósito:`,
    options: ['Ganar fama y reconocimiento literario en vida', 'Detener el paso del tiempo y preservar la experiencia para que no desaparezca', 'Corregir los errores del pasado mediante la ficción', 'Cumplir con una obligación editorial impuesta'],
    correct: 1,
    explanation: { correct: 'Neruda dice que escribe "para llenar sus huesos de una substancia que no se pudre" y que los libros de memorias son lugares donde "quiso quedarse detenido el tiempo". La escritura como forma de preservar la vida frente a la muerte, de "no irse del todo".', wrongs: ['Neruda no menciona la fama como motivación; su impulso es más existencial', 'Opción correcta', 'El texto no habla de corregir el pasado sino de preservar la experiencia vivida', 'No hay mención de obligaciones externas; el impulso es íntimo y personal'] }
  },
  {
    id: 'LC35', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'dificil',
    context: `"El criterio de demarcación entre ciencia y pseudociencia no es la verificabilidad, sino la falseabilidad. Una teoría es científica si hace predicciones que pueden ser puestas a prueba y potencialmente refutadas por la experiencia. La confirmación de una teoría no prueba su verdad; solo significa que ha sobrevivido a un intento de refutación." - Karl Popper, "La lógica de la investigación científica" (1934).`,
    question: `Según Popper, lo que distingue a una teoría científica de una que no lo es es:`,
    options: ['Que pueda ser verificada empíricamente mediante numerosos experimentos', 'Que pueda ser puesta a prueba y potencialmente refutada por la experiencia', 'Que sea aceptada por la mayoría de la comunidad científica', 'Que tenga aplicaciones tecnológicas prácticas e inmediatas'],
    correct: 1,
    explanation: { correct: 'Popper propone la falseabilidad (falsacionismo) como criterio de demarcación: una teoría es científica si hace predicciones que pueden ser refutadas por la observación. La verificabilidad no es suficiente porque teorías pseudocientíficas pueden encontrar confirmaciones, pero no se exponen al riesgo de ser refutadas.', wrongs: ['Popper rechaza la verificabilidad como criterio; teorías como el psicoanálisis encontraban muchas verificaciones pero no eran científicas', 'Opción correcta', 'El consenso científico no es el criterio lógico de demarcación para Popper', 'La utilidad práctica no determina el carácter científico de una teoría'] }
  },
  {
    id: 'LC36', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'media',
    context: `"Axolotl" es un cuento de Julio Cortázar, publicado en su libro "Final del juego" (1956). En el relato, un hombre visita el acuario del Jardin des Plantes en París y queda fascinado por los axolotl, unas criaturas acuáticas que lo hipnotizan. Poco a poco, el visitante comienza a identificarse con ellos hasta el punto de sentir que se ha convertido en uno de ellos y que su propio rostro humano ya no le pertenece.`,
    question: `El tema central del cuento "Axolotl" de Cortázar es:`,
    options: ['La descripción científica de una especie animal en peligro de extinción', 'La disolución de la identidad humana y la fusión con el otro a través de la mirada', 'Un viaje turístico por los acuarios más famosos de París', 'La lucha por la supervivencia entre diferentes especies acuáticas'],
    correct: 1,
    explanation: { correct: 'Cortázar explora la disolución de las fronteras entre el yo y el otro, entre lo humano y lo animal. El protagonista se siente gradualmente transformado en axolotl, perdiendo su identidad humana. La fascinación por la mirada del axolotl desencadena esta metamorfosis ontológica.', wrongs: ['El cuento utiliza los axolotl como elemento literario para explorar la identidad, no como objeto de estudio científico', 'Opción correcta', 'El Jardin des Plantes es solo el escenario; el tema no es el turismo sino la transformación', 'No es una lucha darwiniana sino una fusión entre observador y observado'] }
  },
  {
    id: 'LC37', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'dificil',
    context: `"El gusto clasifica al que clasifica. Los sujetos sociales se distinguen por las distinciones que hacen, entre lo bello y lo feo, lo distinguido y lo vulgar, y en ello se expresa la posición que ocupan en las clasificaciones objetivas. El gusto es un marcador de clase. La forma en que se adquiere la cultura, la familiaridad que se tiene con las obras legítimas, todo ello contribuye a constituir el capital cultural." - Pierre Bourdieu, "La distinción. Criterios y bases sociales del gusto" (1979).`,
    question: `Según Bourdieu, el gusto estético y cultural:`,
    options: ['Es una capacidad innata e individual que no depende del origen social', 'Funciona como un marcador que reproduce y legitima las desigualdades sociales', 'Se distribuye aleatoriamente entre los diferentes grupos sociales', 'Es irrelevante para comprender la estructura de clases de una sociedad'],
    correct: 1,
    explanation: { correct: 'Bourdieu sostiene que "el gusto clasifica al que clasifica": nuestras preferencias estéticas no son neutrales sino que reflejan y reproducen nuestra posición en la estructura social. El "capital cultural" se adquiere de manera diferencial según el origen social y funciona como un mecanismo de distinción y exclusión.', wrongs: ['Bourdieu argumenta que el gusto es socialmente construido, no innato, y está mediado por el capital cultural heredado', 'Opción correcta', 'El gusto no es aleatorio sino que está estructurado por la posición social y el capital cultural', 'El gusto es central para comprender la reproducción de las desigualdades sociales'] }
  },
  {
    id: 'LC38', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'facil',
    context: `"En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor. Una olla de algo más vaca que carnero, salpicón las más noches, duelos y quebrantos los sábados, lentejas los viernes, algún palomino de añadidura los domingos, consumían las tres partes de su hacienda." - Miguel de Cervantes, "Don Quijote de la Mancha" (1605), Capítulo I.`,
    question: `La descripción inicial de Don Quijote en el fragmento sirve para:`,
    options: ['Presentar a un personaje de la alta nobleza con grandes riquezas', 'Mostrar la situación modesta del hidalgo y preparar el contraste con su imaginación caballeresca', 'Describir un banquete abundante y variado', 'Establecer la ubicación exacta del lugar de la Mancha'],
    correct: 1,
    explanation: { correct: 'Cervantes describe a un hidalgo de recursos limitados (su hacienda se consume en comida modesta, su rocín es flaco). Esta realidad humilde contrasta con el mundo de caballerías que su imaginación construirá. La dieta simple y la descripción de sus posesiones establecen la brecha entre su realidad y sus fantasías.', wrongs: ['Don Quijote es un hidalgo rural de recursos modestos, no un noble rico', 'Opción correcta', 'La descripción de la comida muestra precisamente la modestia de su situación', 'Cervantes dice deliberadamente "de cuyo nombre no quiero acordarme", evitando la ubicación exacta'] }
  },
  {
    id: 'LC39', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'media',
    context: `"La ciencia normal, a la que está consagrada la mayoría de los científicos, es una investigación basada firmemente en una o más realizaciones científicas pasadas, realizaciones que alguna comunidad científica particular reconoce durante algún tiempo como fundamento de su práctica ulterior. Cuando cambian los paradigmas, el mundo mismo cambia con ellos. Los científicos ven cosas nuevas y diferentes cuando miran con instrumentos familiares lugares que ya habían mirado antes." - Thomas Kuhn, "La estructura de las revoluciones científicas" (1962).`,
    question: `Kuhn sostiene que durante un cambio de paradigma científico:`,
    options: ['La ciencia progresa por acumulación lineal de nuevos conocimientos', 'Los científicos ven el mundo de manera diferente porque cambia el marco conceptual desde el cual observan', 'Los conocimientos del paradigma anterior se descartan por completo como falsos', 'Los instrumentos científicos deben ser reemplazados totalmente por otros nuevos'],
    correct: 1,
    explanation: { correct: 'Kuhn afirma que "cuando cambian los paradigmas, el mundo mismo cambia con ellos" y los científicos "ven cosas nuevas y diferentes" incluso con los mismos instrumentos. Esto se debe a que el paradigma proporciona el marco conceptual desde el cual se interpretan las observaciones.', wrongs: ['Kuhn critica la idea de que la ciencia progresa por acumulación lineal; las revoluciones implican cambios de paradigma', 'Opción correcta', 'Kuhn no dice que todo el conocimiento anterior se descarte, sino que se reinterpreta desde el nuevo paradigma', 'Los instrumentos pueden ser los mismos, pero lo que se ve a través de ellos cambia con el paradigma'] }
  },
  {
    id: 'LC40', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'facil',
    context: `"El jardín de los senderos que se bifurcan" es un cuento de Jorge Luis Borges, incluido en su libro "Ficciones" (1944). En el relato, el espía chino Yu Tsun descubre que el laberinto de su antepasado Ts'ui Pên no es un laberinto espacial sino temporal: una novela que explora todas las posibilidades simultáneamente. Borges combina la estructura de un relato de espionaje con reflexiones metafísicas sobre el tiempo.`,
    question: `La originalidad del cuento de Borges radica en que:`,
    options: ['Presenta un laberinto físico que los personajes deben recorrer para escapar', 'Combina el género de espionaje con una reflexión filosófica sobre el tiempo y las posibilidades múltiples', 'Narra una historia de detectives ambientada en la China antigua', 'Describe un jardín botánico con múltiples senderos que se cruzan'],
    correct: 1,
    explanation: { correct: 'Borges fusiona dos dimensiones: la trama de espionaje (Yu Tsun debe entregar un mensaje secreto) con la metafísica (el libro de Ts\'ui Pên como un laberinto temporal donde todas las posibilidades ocurren simultáneamente). Esta combinación de géneros es característica de su estilo.', wrongs: ['El laberinto es temporal, no espacial; es una novela, no un lugar físico', 'Opción correcta', 'La ambientación incluye elementos de la cultura china, pero el género no es detectivesco', 'El jardín es una metáfora del libro, no un jardín literal'] }
  },
  {
    id: 'LC41', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'dificil',
    context: `"La burguesía ha desempeñado en la historia un papel eminentemente revolucionario. Dondequiera que ha conquistado el poder, ha destruido las relaciones feudales, patriarcales e idílicas. No ha dejado entre hombre y hombre otro vínculo que el interés desnudo, el frío 'pago al contado'. Ha ahogado el sagrado éxtasis del fervor religioso, el entusiasmo caballeresco, el sentimentalismo del filisteo en las aguas heladas del cálculo egoísta." - Karl Marx y Friedrich Engels, "El manifiesto comunista" (1848).`,
    question: `En el texto, la expresión "aguas heladas del cálculo egoísta" es una metáfora que describe:`,
    options: ['El efecto positivo del comercio sobre las relaciones humanas y la libertad individual', 'La reducción de todas las relaciones humanas a un interés económico frío y calculador bajo el capitalismo', 'La temperatura real de los océanos durante la Revolución Industrial', 'La eliminación de toda forma de religión y espiritualidad en la sociedad moderna'],
    correct: 1,
    explanation: { correct: 'Marx y Engels critican cómo el capitalismo reduce todas las relaciones humanas al interés económico. La metáfora del "agua helada" contrasta con el "sagrado éxtasis del fervor religioso" y el "entusiasmo caballeresco" que existían antes. El capitalismo disuelve los vínculos tradicionales y los reemplaza por el cálculo económico.', wrongs: ['Marx critica esta reducción egoísta, no la celebra como positiva', 'Opción correcta', 'Es una metáfora del cálculo económico, no una descripción literal de la temperatura', 'No es que la religión desaparezca, sino que el fervor religioso es ahogado por el interés económico'] }
  },
  {
    id: 'LC42', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'media',
    context: `"El día en que lo iban a matar, Santiago Nasar se levantó a las 5.30 de la mañana para esperar el buque en que llegaba el obispo. Había soñado que atravesaba un bosque de higuerones donde caía una llovizna tierna, y por un instante fue feliz en el sueño, pero al despertarse se sintió por completo salpicado de cagada de pájaros." - Gabriel García Márquez, "Crónica de una muerte anunciada" (1981).`,
    question: `La función narrativa de la primera oración de la novela ("El día en que lo iban a matar...") consiste en:`,
    options: ['Crear suspenso al anunciar la muerte del protagonista desde el inicio y luego narrar los eventos que llevan a ella', 'Ocultar información al lector para sorprenderlo al final de la historia', 'Describir el paisaje del pueblo sin relación con la trama principal', 'Presentar la vida cotidiana de Santiago Nasar como un día cualquiera'],
    correct: 0,
    explanation: { correct: 'García Márquez anuncia desde la primera línea la muerte de Santiago Nasar, eliminando la sorpresa del desenlace y transformando la pregunta de "qué va a pasar" en "cómo y por qué va a pasar". Esta técnica, típica de la crónica periodística, narra los hechos a sabiendas del final trágico.', wrongs: ['Opción correcta', 'El texto revela el destino del protagonista desde el principio, no lo oculta', 'El paisaje y los detalles tienen relación con el desenlace trágico que se anuncia', 'El hecho de anunciar la muerte desde el inicio indica que no es un día cualquiera'] }
  },
  {
    id: 'LC43', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'facil',
    context: `"La interpretación de los sueños es la vía real para el conocimiento del inconsciente. Los sueños no son un fenómeno absurdo o sin sentido, sino una forma de realización de deseos. El contenido manifiesto del sueño es una transformación del contenido latente mediante el trabajo onírico, que utiliza mecanismos como la condensación y el desplazamiento." - Sigmund Freud, "La interpretación de los sueños" (1900).`,
    question: `Según Freud, los sueños se caracterizan por ser:`,
    options: ['Fenómenos aleatorios sin significado psicológico profundo', 'Una forma de realización de deseos que revela contenidos inconscientes', 'Experiencias puramente fisiológicas sin relación con la mente', 'Profecías sobre eventos futuros que deben ser interpretadas literalmente'],
    correct: 1,
    explanation: { correct: 'Freud sostiene que los sueños son "la vía real para el conocimiento del inconsciente" y constituyen "una forma de realización de deseos". El contenido manifiesto (lo que recordamos) oculta un contenido latente (deseos inconscientes) que se expresa mediante mecanismos como la condensación y el desplazamiento.', wrongs: ['Freud dedica su obra a demostrar que los sueños SÍ tienen significado psicológico profundo', 'Opción correcta', 'Freud considera los sueños como fenómenos psíquicos, no meramente fisiológicos', 'Freud rechaza la interpretación profética de los sueños; los entiende como expresión del inconsciente'] }
  },
  {
    id: 'LC44', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'media',
    context: `"El subdesarrollo de América Latina no es una etapa hacia el desarrollo, sino la consecuencia de una historia de expoliación y saqueo que se inició con la conquista europea. Nuestra pobreza es el reverso de la riqueza ajena. Cada vez que Europa avanzaba, América retrocedía. El desarrollo de unos pocos países industrializados se ha fundado en el subdesarrollo de la mayoría de los pueblos." - Eduardo Galeano, "Las venas abiertas de América Latina" (1971).`,
    question: `La tesis central de Galeano en este fragmento es que el subdesarrollo latinoamericano:`,
    options: ['Es una etapa natural que todos los países deben atravesar en su camino hacia el desarrollo', 'Es el resultado directo de la explotación histórica de la región por parte de las potencias coloniales e industriales', 'Se debe exclusivamente a la falta de recursos naturales en el continente', 'Es una elección política de los gobiernos latinoamericanos que prefieren no industrializarse'],
    correct: 1,
    explanation: { correct: 'Galeano sostiene que el subdesarrollo no es una etapa previa al desarrollo sino su consecuencia: "el desarrollo de unos pocos países industrializados se ha fundado en el subdesarrollo de la mayoría". La riqueza de Europa y Estados Unidos se construyó sobre la explotación de los recursos y pueblos de América Latina.', wrongs: ['Galeano rechaza explícitamente la idea de que el subdesarrollo sea una etapa hacia el desarrollo', 'Opción correcta', 'América Latina es rica en recursos; el problema ha sido la apropiación externa de esos recursos', 'No es una elección sino una imposición histórica estructural'] }
  },
  {
    id: 'LC45', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'dificil',
    context: `"El signo lingüístico une no una cosa y un nombre, sino un concepto y una imagen acústica. Esta imagen acústica no es el sonido material, sino su huella psíquica. El signo es, pues, una entidad psíquica de dos caras. El principio fundamental del signo es la arbitrariedad: el lazo que une el significante al significado es inmotivado, es decir, arbitrario." - Ferdinand de Saussure, "Curso de lingüística general" (1916).`,
    question: `Saussure afirma que el signo lingüístico es "arbitrario" porque:`,
    options: ['Cada persona puede decidir libremente el significado de las palabras que usa', 'No existe una relación natural o necesaria entre el sonido de una palabra y el concepto que representa', 'Los signos lingüísticos cambian caprichosamente sin ninguna regla', 'El significado de las palabras depende exclusivamente de la intención del hablante'],
    correct: 1,
    explanation: { correct: 'La arbitrariedad del signo significa que la relación entre significante (imagen acústica) y significado (concepto) es inmotivada. No hay razón natural por la que "árbol" en español, "tree" en inglés o "Baum" en alemán designen el mismo concepto. La conexión es convencional, no necesaria.', wrongs: ['La arbitrariedad no se refiere a la libertad individual sino a la convención social que no tiene fundamento natural', 'Opción correcta', 'Saussure reconoce que los signos siguen reglas dentro de cada sistema lingüístico, no son caprichosos', 'La arbitrariedad opera a nivel del sistema, no de la intención individual del hablante'] }
  },
  {
    id: 'LC46', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'facil',
    context: `"Vine a Comala porque me dijeron que acá vivía mi padre, un tal Pedro Páramo. Mi madre me lo dijo. Y yo le prometí que vendría a verlo en cuanto ella muriera. Me apreté las manos con sus manos; era su deseo morir y yo debía cumplirlo." - Juan Rulfo, "Pedro Páramo" (1955).`,
    question: `Por la forma en que el narrador inicia su relato, se puede inferir que:`,
    options: ['El narrador viaja a un pueblo desconocido impulsado por una promesa hecha a su madre', 'El narrador ya conocía Comala y regresa para visitar a Pedro Páramo', 'Pedro Páramo había enviado a buscar al narrador', 'La madre del narrador aún vive y lo acompaña en el viaje'],
    correct: 0,
    explanation: { correct: 'El narrador llega a Comala porque "le dijeron" que allí vivía su padre. Su madre se lo dijo antes de morir. La promesa ("le prometí que vendría a verlo en cuanto ella muriera") es el motor de su viaje. La voz del narrador está marcada por la promesa y el deseo de cumplir la voluntad materna.', wrongs: ['Opción correcta', 'El texto indica explícitamente "Vine a Comala porque me dijeron", sugiriendo que no la conocía', 'No hay evidencia en el fragmento de que Pedro Páramo haya solicitado la visita', 'El texto dice claramente "en cuanto ella muriera", indicando que ya había fallecido'] }
  },
  {
    id: 'LC47', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'dificil',
    context: `"La industria cultural ha llevado a la estandarización y la producción en serie de los bienes culturales. El cine, la radio y las revistas constituyen un sistema. Cada sector está uniformado. Hasta el entretenimiento más ligero adquiere rasgos del trabajo. La diversión se convierte en una prolongación del trabajo, buscada por quien quiere escapar del proceso de trabajo mecanizado para ponerse de nuevo en condiciones de poder enfrentarse a él." - Theodor Adorno y Max Horkheimer, "Dialéctica de la Ilustración" (1947).`,
    question: `Según Adorno y Horkheimer, la industria cultural transforma el entretenimiento en:`,
    options: ['Una experiencia liberadora que permite al individuo escapar verdaderamente de las condiciones del trabajo', 'Una extensión del sistema productivo que prepara al individuo para reintegrarse al trabajo', 'Un espacio autónomo donde la creatividad y el arte pueden desarrollarse libremente', 'Un medio para educar a las masas y elevar su nivel cultural'],
    correct: 1,
    explanation: { correct: 'Adorno y Horkheimer critican que la diversión en la industria cultural "se convierte en una prolongación del trabajo": el entretenimiento no libera realmente al individuo sino que lo prepara para reintegrarse al proceso productivo. La cultura masiva reproduce la lógica de la estandarización y la producción en serie.', wrongs: ['Para Adorno, la industria cultural ofrece una falsa liberación; el entretenimiento no escapa realmente de la lógica del trabajo', 'Opción correcta', 'La industria cultural suprime la creatividad auténtica mediante la estandarización', 'Adorno critica la industria cultural precisamente porque no educa sino que perpetúa el sistema existente'] }
  },
  {
    id: 'LC48', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'facil',
    context: `"No te rindas, por favor no cedas, / aunque el frío queme, / aunque el miedo muerda, / aunque el sol se ponga y se calle el viento, / aún hay fuego en tu alma, / aún hay vida en tus sueños." - Mario Benedetti, "No te rindas" (Poemas de otros, 1977).`,
    question: `En el poema de Benedetti, la repetición de "aunque" seguida de imágenes adversas ("el frío queme", "el miedo muerda") tiene la función de:`,
    options: ['Describir las condiciones climáticas extremas que enfrenta el protagonista', 'Enfatizar que a pesar de las dificultades y obstáculos, persiste la esperanza y la fuerza interior', 'Animar al lector a rendirse cuando las condiciones se vuelven demasiado adversas', 'Presentar una visión pesimista de la vida sin posibilidad de mejora'],
    correct: 1,
    explanation: { correct: 'La estructura concesiva ("aunque... aún...") establece un contraste entre las adversidades y la persistencia de la fuerza interior. Cada "aunque" introduce una dificultad, pero el "aún" que las sigue reafirma la vida y el fuego interior. El poema es un mensaje de resistencia y esperanza.', wrongs: ['Las imágenes del frío y el miedo son metáforas de las dificultades de la vida, no descripciones literales del clima', 'Opción correcta', 'El poema dice "No te rindas", es un mensaje de perseverancia, no de rendición', 'Aunque reconoce las dificultades, el poema afirma la persistencia de la vida y los sueños'] }
  },
  {
    id: 'LC49', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'media',
    context: `"La teoría de la relatividad general de Einstein revolucionó nuestra comprensión del espacio y el tiempo. Según esta teoría, la gravedad no es una fuerza que actúa a distancia, sino una curvatura del espacio-tiempo causada por la presencia de masa y energía. El universo no es un escenario fijo donde ocurren los eventos, sino que el espacio-tiempo mismo es dinámico y se deforma por el contenido del universo." - Stephen Hawking, "Historia del tiempo" (1988).`,
    question: `Según la relatividad general, la gravedad es:`,
    options: ['Una fuerza que actúa instantáneamente entre dos cuerpos con masa', 'Una curvatura del espacio-tiempo producida por la presencia de masa y energía', 'Una ilusión creada por la rotación de la Tierra', 'Una propiedad exclusiva de los objetos muy grandes como las estrellas'],
    correct: 1,
    explanation: { correct: 'Einstein propuso que la gravedad no es una fuerza newtoniana que actúa a distancia, sino una curvatura geométrica del espacio-tiempo causada por la masa y la energía. Los objetos siguen trayectorias curvas no porque una fuerza los tire, sino porque el espacio-tiempo mismo está curvado.', wrongs: ['Newton pensaba así, pero Einstein demostró que la gravedad es una curvatura del espacio-tiempo, no una fuerza instantánea', 'Opción correcta', 'La gravedad es un fenómeno real, no una ilusión; afecta a todos los objetos con masa', 'La gravedad afecta a todos los objetos con masa o energía, independientemente de su tamaño'] }
  },
  {
    id: 'LC50', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'dificil',
    context: `"Durante el transcurso de la noche, el general comenzó a morirse como una rama que se pudre en la tormenta. El rumor de su agonía se esparció por la ciudad mucho antes de que él mismo se enterara de que estaba muerto. Sus edecanes lo encontraron en la hamaca a las cinco y once minutos de la madrugada, con la cabeza hundida en el hombro y los ojos abiertos, y vieron en el espejo del armario el reflejo de su doble inmortal." - Gabriel García Márquez, "El otoño del patriarca" (1975).`,
    question: `En el fragmento, la expresión "el rumor de su agonía se esparció... mucho antes de que él mismo se enterara de que estaba muerto" sugiere que:`,
    options: ['La muerte del general fue un evento público que todos presenciaron directamente', 'La noticia de su muerte circuló como rumor antes de que ocurriera realmente, difuminando los límites entre la realidad y la ficción del poder', 'El general fingió su propia muerte para escapar del poder', 'Los edecanes encontraron al general con vida y luego falleció'],
    correct: 1,
    explanation: { correct: 'García Márquez juega con la temporalidad y la percepción: el rumor precede al hecho, la noticia circula "antes de que él mismo se enterara de que estaba muerto". Esto refleja cómo el poder del patriarca es una construcción que depende más de lo que se dice de él que de su realidad física. El tiempo narrativo se distorsiona.', wrongs: ['La muerte no fue presenciada directamente por todos; circuló primero como rumor', 'Opción correcta', 'No hay indicios de fingimiento; la narración juega con la percepción distorsionada del tiempo y el rumor', 'El texto dice que "comenzó a morirse" y los edecanes lo encontraron ya muerto en la hamaca'] }
  },
  {
    id: 'LC51', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'media',
    context: `"Todos los seres humanos nacen con la capacidad de adquirir una lengua. Esta capacidad es independiente de la inteligencia general y está determinada biológicamente. El lenguaje no es una invención cultural, sino una facultad específica de la especie humana que se desarrolla de manera natural cuando el niño está expuesto a un entorno lingüístico." - Noam Chomsky, "Aspectos de la teoría de la sintaxis" (1965).`,
    question: `Chomsky sostiene que la adquisición del lenguaje es:`,
    options: ['Un proceso puramente cultural que depende exclusivamente del entorno social', 'Una capacidad biológica innata y específica de la especie humana que se activa en un entorno lingüístico', 'Un conjunto de hábitos que se aprenden por imitación y repetición', 'Una habilidad que comparten todas las especies animales con sistema nervioso desarrollado'],
    correct: 1,
    explanation: { correct: 'Chomsky postula la existencia de una "gramática universal" innata: los humanos nacemos con la capacidad biológica de adquirir cualquier lengua. El lenguaje no es una invención cultural sino una facultad específica de la especie que se desarrolla naturalmente cuando hay exposición al entorno lingüístico adecuado.', wrongs: ['Chomsky rechaza la explicación puramente ambientalista; postula una facultad innata', 'Opción correcta', 'Chomsky critica la teoría conductista del aprendizaje por imitación; el niño produce formas que nunca ha oído', 'Chomsky sostiene que el lenguaje es específicamente humano, no compartido con otras especies'] }
  },
  {
    id: 'LC52', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'facil',
    context: `"La poesía es conocimiento, salvación, poder, abandono. Operación capaz de cambiar al mundo, la actividad poética es revolucionaria por naturaleza; ejercicio espiritual, es un método de liberación interior. La poesía revela este mundo; crea otro. Pan de los escogidos, alimento maldito. Aísla; une. Invitación al viaje; regreso al hogar." - Octavio Paz, "El arco y la lira" (1956).`,
    question: `El texto de Octavio Paz presenta la poesía como una actividad:`,
    options: ['Exclusivamente estética y decorativa, sin relación con la realidad', 'Paradójica y múltiple, que abarca dimensiones opuestas como el aislamiento y la unión, el conocimiento y la salvación', 'Racional y metódica, que sigue reglas estrictas de composición', 'Política y partidista, destinada únicamente a promover ideologías específicas'],
    correct: 1,
    explanation: { correct: 'Paz acumula definiciones paradójicas y contrastantes: la poesía es "conocimiento" pero también "abandono"; "aísla" pero también "une"; es "revolucionaria" pero también "ejercicio espiritual". Esta acumulación de opuestos refleja la naturaleza compleja y contradictoria de la experiencia poética.', wrongs: ['Paz describe la poesía como algo mucho más profundo que un adorno: es "conocimiento" y "poder"', 'Opción correcta', 'Paz no describe la poesía como un ejercicio racional metódico sino como una experiencia totalizante', 'Aunque menciona que es "revolucionaria", Paz no reduce la poesía a propaganda política'] }
  },
  {
    id: 'LC53', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'dificil',
    context: `"No puede haber duda alguna de que la especie humana desciende de alguna forma inferior, a pesar de que hasta ahora no se haya podido descubrir el eslabón intermedio. Se puede objetar que hasta ahora no se han encontrado fósiles de transición, pero esta objeción perderá su fuerza cuando se descubran formas intermedias en futuras exploraciones paleontológicas." - Adaptado de Charles Darwin, "El origen del hombre" (1871).`,
    question: `La estrategia argumentativa que emplea Darwin en este pasaje consiste en:`,
    options: ['Presentar una objeción a su propia teoría y responderla anticipadamente para fortalecer su argumento', 'Ignorar las objeciones de sus críticos y afirmar dogmáticamente su teoría', 'Admitir que su teoría es incorrecta y proponer una explicación alternativa', 'Apelar a la autoridad de otros científicos para apoyar su posición'],
    correct: 0,
    explanation: { correct: 'Darwin utiliza la técnica retórica de anticipar objeciones ("se puede objetar que...") y refutarlas antes de que sean planteadas ("pero esta objeción perderá su fuerza cuando..."). Este movimiento argumentativo fortalece su posición al demostrar que ha considerado y respondido las críticas potenciales.', wrongs: ['Opción correcta', 'Darwin no ignora las objeciones sino que las aborda explícitamente para refutarlas', 'Darwin no admite que su teoría sea incorrecta; al contrario, la defiende anticipando críticas', 'Darwin no apela a la autoridad sino a la evidencia futura que se descubrirá'] }
  },
  {
    id: 'LC54', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'media',
    context: `"La novela 'La fiesta del Chivo' (2000) de Mario Vargas Llosa narra los últimos días de la dictadura de Rafael Trujillo en la República Dominicana. La obra alterna tres líneas narrativas: la de Urania Cabral, que regresa a Santo Domingo después de muchos años; la de los conspiradores que planean el asesinato del dictador; y la del propio Trujillo en sus últimas horas, mostrando su poder absoluto y su creciente paranoia.`,
    question: `La estructura narrativa de "La fiesta del Chivo" se caracteriza por:`,
    options: ['Seguir un único hilo cronológico lineal desde el inicio de la dictadura hasta su caída', 'Alternar múltiples perspectivas temporales y voces narrativas para representar la complejidad del régimen', 'Presentar exclusivamente la perspectiva del dictador como protagonista', 'Utilizar únicamente la memoria de Urania Cabral como fuente narrativa'],
    correct: 1,
    explanation: { correct: 'Vargas Llosa entrecruza tres líneas narrativas que ofrecen perspectivas complementarias: la víctima que regresa (Urania), los conspiradores (la resistencia), y el dictador mismo (el poder). Esta estructura polifónica permite una comprensión multidimensional del régimen trujillista.', wrongs: ['La novela alterna entre diferentes tiempos y perspectivas, no sigue un orden lineal único', 'Opción correcta', 'El dictador es una de las perspectivas, pero también están Urania y los conspiradores', 'La memoria de Urania es una de las líneas narrativas, pero no la única'] }
  },
  {
    id: 'LC55', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'dificil',
    context: `"El significado de una palabra es su uso en el lenguaje. No preguntes por el significado, pregunta por el uso. El lenguaje es como una caja de herramientas: hay martillos, destornilladores, alicates, metros. No podemos decir que haya algo común a todos ellos, solo semejanzas de familia, parentescos. Y el significado de las palabras funciona igual: no hay una esencia del lenguaje, solo usos diversos." - Ludwig Wittgenstein, "Investigaciones filosóficas" (1953).`,
    question: `La metáfora de la "caja de herramientas" que utiliza Wittgenstein sirve para ilustrar que:`,
    options: ['El lenguaje tiene una única función esencial que es describir la realidad', 'Las palabras tienen diversos usos y funciones según el contexto, sin una esencia común que las defina a todas', 'Las herramientas son un mejor sistema de comunicación que las palabras', 'El lenguaje debe ser reformado para que todas las palabras tengan un único significado preciso'],
    correct: 1,
    explanation: { correct: 'Wittgenstein utiliza la metáfora de la caja de herramientas para mostrar que, así como las herramientas tienen diferentes usos (martillar, atornillar, medir), las palabras tienen diferentes funciones según el contexto. No hay una esencia única del lenguaje, sino "semejanzas de familia" entre los diversos usos lingüísticos.', wrongs: ['Wittgenstein rechaza que el lenguaje tenga una función esencial única; el lenguaje tiene múltiples usos', 'Opción correcta', 'No está comparando herramientas con lenguaje como sistemas alternativos, sino ilustrando la diversidad funcional', 'Wittgenstein no propone reformar el lenguaje sino describir cómo funciona realmente'] }
  },
  {
    id: 'LC56', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'facil',
    context: `"El ahogado más hermoso del mundo" es un cuento de Gabriel García Márquez, incluido en "La increíble y triste historia de la cándida Eréndira y de su abuela desalmada" (1972). En el relato, el cuerpo de un hombre grande y hermoso aparece en la orilla de un pueblo costero. Los habitantes, al ocuparse del cuerpo, transforman su percepción del pueblo y de sí mismos, y el hombre ahogado se convierte en un catalizador de cambio.`,
    question: `En el cuento, el cuerpo del ahogado funciona como:`,
    options: ['Un obstáculo que los habitantes deben eliminar rápidamente', 'Un catalizador que transforma la percepción que los pobladores tienen de su propio pueblo y de su potencial', 'Una amenaza que genera miedo y rechazo entre la comunidad', 'Un símbolo de la muerte sin ninguna repercusión en los vivos'],
    correct: 1,
    explanation: { correct: 'El cuento muestra cómo el contacto con el cuerpo del ahogado transforma a la comunidad. Los habitantes comienzan a imaginar un pueblo mejor, más grande y más hermoso, digno del hombre que ha llegado a sus costas. El ahogado, lejos de ser una amenaza, se convierte en una fuerza transformadora.', wrongs: ['Los habitantes se involucran profundamente con el cuerpo, transformando su relación con el pueblo', 'Opción correcta', 'El cuerpo genera fascinación y transformación, no miedo', 'El ahogado tiene un profundo impacto transformador en la comunidad y su autopercepción'] }
  },
  {
    id: 'LC57', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'dificil',
    context: `"La imaginación es más importante que el conocimiento. El conocimiento es limitado, mientras que la imaginación abraza el mundo entero, estimulando el progreso y dando a luz a la evolución. La imaginación es el verdadero campo de juego de la mente humana. La teoría de la relatividad surgió de un experimento mental: ¿qué vería alguien que viajara montado en un rayo de luz?" - Albert Einstein, citado en "Einstein: Su vida y su universo" (2007) de Walter Isaacson.`,
    question: `Einstein argumenta que la imaginación es superior al conocimiento porque:`,
    options: ['El conocimiento no sirve para nada en el desarrollo científico', 'La imaginación permite ir más allá de los límites del conocimiento establecido y generar nuevas posibilidades', 'La imaginación reemplaza completamente la necesidad de datos empíricos', 'El conocimiento es falso mientras que la imaginación es verdadera'],
    correct: 1,
    explanation: { correct: 'Einstein contrapone la limitación del conocimiento (siempre circunscrito a lo ya sabido) con la capacidad expansiva de la imaginación que "abraza el mundo entero". Para él, los grandes avances científicos, como la relatividad, surgen de la capacidad de imaginar más allá de lo conocido.', wrongs: ['Einstein no niega el valor del conocimiento; dice que la imaginación es más importante, no que el conocimiento sea inútil', 'Opción correcta', 'Einstein valora la imaginación como complemento del conocimiento, no como sustituto de la evidencia empírica', 'Einstein no califica el conocimiento como falso; dice que es "limitado"'] }
  },
  {
    id: 'LC58', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'facil',
    context: `"Instrucciones para llorar: Dejando de lado los motivos, atengámonos a la manera correcta de llorar, entendiendo por esto un llanto que no ingrese en el escándalo, ni que insulte a la sonrisa con su paralela y torpe semejanza. El llanto medio u ordinario consiste en una contracción del rostro y un sonido espasmódico acompañados de lágrimas y mocos, estos últimos al final." - Julio Cortázar, "Historias de cronopios y de famas" (1962).`,
    question: `El efecto humorístico del texto de Cortázar se logra principalmente mediante:`,
    options: ['La narración de una historia triste que provoca compasión en el lector', 'El tratamiento de una experiencia humana espontánea como si fuera un procedimiento técnico que requiere instrucciones precisas', 'La descripción poética y emotiva del acto de llorar', 'La crítica social contra las personas que lloran en público'],
    correct: 1,
    explanation: { correct: 'Cortázar utiliza el humor al presentar "instrucciones" para una acción que es natural y espontánea. Al tratar el llanto como un procedimiento que requiere reglas ("la manera correcta de llorar"), crea una incongruencia entre la forma (técnica e instructiva) y el contenido (emocional y espontáneo). Este contraste es la fuente del humor.', wrongs: ['No es una historia triste; es una instrucción humorística sobre cómo llorar correctamente', 'Opción correcta', 'La descripción es deliberadamente técnica y distanciada, no emotiva', 'No hay crítica social; hay ironía lúdica sobre la mecanización de lo humano'] }
  },
  {
    id: 'LC59', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'media',
    context: `"Lo que hace posible que el pensamiento pueda escapar a la categoría de la representación es, sin duda, el lenguaje. El lenguaje no es un sistema de signos que representan cosas: es más bien una red que recorta el mundo, lo ordena, lo jerarquiza. El lenguaje no se limita a nombrar lo que ya existe, sino que contribuye a traer a la existencia aquello que nombra." - Michel Foucault, "Las palabras y las cosas" (1966).`,
    question: `Según Foucault, el lenguaje no es solo un sistema de representación porque:`,
    options: ['Las palabras reflejan pasivamente una realidad que ya está completamente estructurada', 'El lenguaje participa activamente en la organización y construcción de la realidad que nombra', 'Los signos lingüísticos son completamente independientes del mundo real', 'El lenguaje solo sirve para expresar emociones y sentimientos subjetivos'],
    correct: 1,
    explanation: { correct: 'Foucault sostiene que el lenguaje "no se limita a nombrar lo que ya existe, sino que contribuye a traer a la existencia aquello que nombra". El lenguaje es una "red que recorta el mundo, lo ordena, lo jerarquiza", es decir, participa activamente en la construcción de nuestra comprensión de la realidad.', wrongs: ['Foucault afirma que el lenguaje hace más que reflejar: activamente organiza y construye la realidad', 'Opción correcta', 'Foucault no dice que el lenguaje sea independiente del mundo, sino que interviene activamente en su estructuración', 'El lenguaje para Foucault es una práctica que organiza el saber, no solo un medio expresivo'] }
  },
  {
    id: 'LC60', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'dificil',
    context: `"El universo (que otros llaman la Biblioteca) se compone de un número indefinido, y tal vez infinito, de galerías hexagonales, con vastos pozos de ventilación en el medio, cercados por barandas bajísimas. Desde cualquier hexágono se ven los pisos inferiores y superiores, interminablemente. La Biblioteca es una esfera cuyo centro cabal es cualquier hexágono, cuya circunferencia es inaccesible." - Jorge Luis Borges, "La biblioteca de Babel" (1941), en "Ficciones".`,
    question: `La descripción de la Biblioteca como "una esfera cuyo centro cabal es cualquier hexágono, cuya circunferencia es inaccesible" expresa la idea de que:`,
    options: ['La Biblioteca tiene un centro físico identificable al que se puede acceder fácilmente', 'Cada punto de la Biblioteca puede considerarse el centro, y sus límites son imposibles de alcanzar', 'La Biblioteca tiene forma de esfera perfecta con un vacío en el centro', 'El conocimiento humano está organizado jerárquicamente con un centro de poder definido'],
    correct: 1,
    explanation: { correct: 'La paradoja de la biblioteca de Babel es que cualquier hexágono puede considerarse el centro ("el centro cabal es cualquier hexágono"), mientras que la circunferencia (el límite exterior) es "inaccesible". Borges representa así la naturaleza paradójica del universo: no hay un centro privilegiado del conocimiento, y la totalidad es inabarcable.', wrongs: ['La paradoja es que NO hay un centro único identificable; cualquier hexágono puede ser el centro', 'Opción correcta', 'La esfera es una metáfora filosófica, no una forma geométrica literal con un vacío', 'La Biblioteca, para Borges, es una imagen del universo descentrado, no jerárquico'] }
  },

  // ===== MATEMÁTICAS - BLOQUE 4 (MT31-MT60) =====
  {
    id: 'MT31', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'facil',
    question: `En un municipio de Boyacá, el 60% de los 5.000 habitantes son mujeres. ¿Cuántos hombres hay?`,
    options: ['3.000', '2.000', '2.500', '3.500'],
    correct: 1,
    explanation: { correct: 'Mujeres: 5.000 x 0,60 = 3.000. Hombres: 5.000 - 3.000 = 2.000.', wrongs: ['Ese es el nÃºmero de mujeres', 'Opción correcta', 'Calculaste el 50%', 'Sumaste mal'] }
  },
  {
    id: 'MT32', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'media',
    question: `Una rampa para sillas de ruedas en un edificio público de Bogotá tiene 5 m de longitud horizontal y alcanza una altura de 1 m. ¿Cuál es la longitud de la rampa?`,
    options: ['√24 m', '√26 m', '1 m', '5,1 m'],
    correct: 1,
    explanation: { correct: 'Por Pitágoras: L² = 5² + 1² = 25 + 1 = 26. L = √26 m ≈ 5,1 m.', wrongs: ['Sumaste 25 + 1 pero no sacaste raíz', 'Opción correcta', 'Calculaste 5² - 1² = 24, esa serÃ­a otra medida', 'Cálculo incorrecto'] }
  },
  {
    id: 'MT33', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'media',
    table: {
      headers: ['NÃºmero de hermanos', '0', '1', '2', '3', '4'],
      rows: [['Cantidad de estudiantes', '8', '12', '5', '3', '2']],
      caption: 'NÃºmero de hermanos de los estudiantes de un curso en CÃºcuta'
    },
    context: 'La tabla muestra el nÃºmero de hermanos de los estudiantes de un curso.',
    question: 'Â¿CuÃ¡l es el promedio de hermanos por estudiante?',
    options: ['1,3', '1,5', '1,7', '1,1'],
    correct: 0,
    explanation: { correct: 'Total estudiantes = 8+12+5+3+2 = 30. Suma hermanos = 0x8+1x12+2x5+3x3+4x2 = 0+12+10+9+8 = 39. Promedio = 39/30 = 1,3.', wrongs: ['Opción correcta', 'Calculaste la mediana en lugar del promedio', 'Calculaste la moda en lugar del promedio', 'Sumaste mal los datos'] }
  },
  {
    id: 'MT34', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'facil',
    question: `En una panadería de Tunja, el costo de producir x panes es C(x) = 200x + 5.000. ¿Cuánto cuesta producir 100 panes?`,
    options: ['$20.000', '$25.000', '$30.000', '$35.000'],
    correct: 1,
    explanation: { correct: 'C(100) = 200 x 100 + 5.000 = 20.000 + 5.000 = $25.000.', wrongs: ['Olvidaste sumar el costo fijo: 200 x 100 = 20.000', 'Opción correcta', 'Multiplicaste 200 x 100 + 5.000 = 25.000, revisa', 'Sumaste 200 + 5.000 x 100?'] }
  },
  {
    id: 'MT35', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'media',
    question: `En un mapa de Colombia, 3 cm representan 60 km en la realidad. ¿Cuántos km reales representan 12 cm en el mapa?`,
    options: ['180 km', '240 km', '200 km', '300 km'],
    correct: 1,
    explanation: { correct: 'Regla de tres: 3/60 = 12/x -> 3x = 720 -> x = 240 km.', wrongs: ['Opción correcta', 'Calculaste 12 x 3 = 36, 36 x 60?', 'Multiplicaste 12 x 20 = 240', 'Dividiste 60/3 = 20, 20 x 12 = 240'] }
  },
  {
    id: 'MT36', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'dificil',
    question: `Una ventana en forma de rectángulo coronado por un semicírculo tiene 1 m de ancho y 2 m de alto en la parte rectangular. ¿Cuál es el área total de la ventana? (Use π = 3,14)`,
    options: ['2,39 m²', '2,00 m²', '2,79 m²', '3,14 m²'],
    correct: 0,
    explanation: { correct: 'Área rectángulo = 1 x 2 = 2 m². Semicírculo: radio = 0,5 m, área = (π x 0,5²)/2 = (3,14 x 0,25)/2 = 0,3925 m². Total = 2,3925 m² ≈ 2,39 m².', wrongs: ['Opción correcta', 'Solo calculaste el rectángulo, olvidaste el semicírculo', 'Calculaste círculo completo en lugar de semicírculo', 'Usaste diámetro en vez de radio'] }
  },
  {
    id: 'MT37', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'facil',
    question: `Se lanza una moneda al aire. ¿Cuál es la probabilidad de obtener cara?`,
    options: ['1/4', '1/2', '2/3', '1'],
    correct: 1,
    explanation: { correct: 'Resultados posibles: cara o sello (2). Caso favorable: 1. Probabilidad = 1/2.', wrongs: ['Opción correcta', 'La probabilidad de cara es 1/2, no 1/4', 'No es seguro, hay posibilidad de sello'] }
  },
  {
    id: 'MT38', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'media',
    question: `El costo de alquilar un salón de eventos en Sincelejo es $200.000 fijo más $15.000 por cada invitado. Si el presupuesto es $800.000, ¿cuántos invitados pueden asistir?`,
    options: ['40', '30', '50', '60'],
    correct: 0,
    explanation: { correct: 'Ecuación: 200.000 + 15.000x = 800.000 -> 15.000x = 600.000 -> x = 40 invitados.', wrongs: ['Opción correcta', 'Restaste 800.000 - 200.000 = 600.000, luego 600.000/15.000 = 40', 'Dividiste 800.000/15.000 sin restar el fijo', 'Sumaste en lugar de restar'] }
  },
  {
    id: 'MT39', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'dificil',
    question: `3 obreros construyen un muro en 8 días. ¿Cuántos días tardarán 4 obreros trabajando al mismo ritmo?`,
    options: ['4 días', '6 días', '6 días', '10 días'],
    correct: 1,
    explanation: { correct: 'Proporción inversa: 3 obreros x 8 días = 24 obrero-días. 4 obreros x d días = 24 -> d = 24/4 = 6 días.', wrongs: ['Opción correcta', 'Calculaste 8 x 3/4 = 6, es correcto pero revisa', 'Pensaste que era directa: 8 x 4/3 = 10,67', 'Es inversa: mÃ¡s obreros, menos dÃ­as'] }
  },
  {
    id: 'MT40', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'facil',
    question: `El perímetro de un terreno rectangular en Villavicencio es 60 m. Si el ancho es 10 m, ¿cuál es el largo?`,
    options: ['15 m', '20 m', '25 m', '30 m'],
    correct: 1,
    explanation: { correct: 'Perímetro = 2(largo + ancho) = 2(l + 10) = 60 -> l + 10 = 30 -> l = 20 m.', wrongs: ['Calculaste 60/4 = 15', 'Opción correcta', 'Sumaste 60 - 10 = 50, pero faltan pasos', 'Usaste P = 4 x lado como si fuera cuadrado'] }
  },
  {
    id: 'MT41', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'media',
    question: `Las estaturas (en cm) de 10 estudiantes son: 150, 155, 160, 155, 165, 170, 155, 160, 175, 150. ¿Cuál es la moda?`,
    options: ['155 cm', '160 cm', '150 cm', '165 cm'],
    correct: 0,
    explanation: { correct: '155 aparece 3 veces (150 aparece 2, 160 aparece 2). La moda es 155 cm.', wrongs: ['Opción correcta', '160 aparece 2 veces, menos que 155', '150 aparece 2 veces, menos que 155', 'La moda es el valor que mÃ¡s se repite: 155'] }
  },
  {
    id: 'MT42', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'dificil',
    question: `La población de una ciudad colombiana crece según P(t) = 50.000 x (1,03)ᵗ, donde t son años. ¿Cuál será la población después de 4 años? (Aproxime)`,
    options: ['56.000', '56.275', '56.000', '56.500'],
    correct: 1,
    explanation: { correct: 'P(4) = 50.000 x (1,03)⁴ = 50.000 x 1,1255 = 56.275 habitantes.', wrongs: ['Opción correcta', 'Calculaste interés simple: 50.000 x (1 + 4x0,03) = 56.000', 'Calculaste 50.000 x 0,03 x 4 = 6.000, 50.000+6.000=56.000', 'Multiplicaste 1,03 x 4 en lugar de elevar a la 4'] }
  },
  {
    id: 'MT43', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'facil',
    question: `De una pizza familiar se consumieron 5/8. ¿Qué fracción de la pizza queda?`,
    options: ['1/8', '3/8', '5/8', '1/2'],
    correct: 1,
    explanation: { correct: 'Pizza completa = 8/8. Queda = 8/8 - 5/8 = 3/8.', wrongs: ['Opción correcta', 'Restaste 1 - 5/8 = 3/8, es correcto', 'Sumaste 5+8 en lugar de restar'] }
  },
  {
    id: 'MT44', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'media',
    question: `Un contenedor de carga en Cartagena tiene forma de cubo con arista de 3 m. ¿Cuál es su volumen?`,
    options: ['9 m³', '18 m³', '27 m³', '36 m³'],
    correct: 2,
    explanation: { correct: 'Volumen = arista³ = 3³ = 27 m³.', wrongs: ['Eso es 3² = 9', 'Eso es 3 x 6 = 18', 'Opción correcta', 'Eso es 3³ = 27'] }
  },
  {
    id: 'MT45', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'dificil',
    question: `En una carrera de 8 atletas, se entregan medallas de oro, plata y bronce. ¿De cuántas formas diferentes se puede premiar?`,
    options: ['24', '56', '336', '512'],
    correct: 2,
    explanation: { correct: 'PermutaciÃ³n: 8 x 7 x 6 = 336 formas diferentes.', wrongs: ['Calculaste 8 x 3 = 24', 'Calculaste 8 x 7 = 56', 'Opción correcta', 'Calculaste 8! en lugar de 8P3'] }
  },
  {
    id: 'MT46', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'facil',
    question: `En un restaurante de Santa Marta, la cuenta es de $120.000. Si se debe pagar el 10% de propina, ¿cuánto es la propina?`,
    options: ['$10.000', '$12.000', '$15.000', '$20.000'],
    correct: 1,
    explanation: { correct: '10% de 120.000 = 120.000 x 0,10 = $12.000.', wrongs: ['Opción correcta', 'Calculaste 120.000 x 0,10 = 12.000', 'Calculaste 120.000 x 0,125 = 15.000'] }
  },
  {
    id: 'MT47', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'media',
    question: `Una pantalla de televisor mide 80 cm de ancho y 60 cm de alto. ¿Cuál es la medida de la diagonal?`,
    options: ['100 cm', '70 cm', '120 cm', '140 cm'],
    correct: 0,
    explanation: { correct: 'Diagonal² = 80² + 60² = 6400 + 3600 = 10000. Diagonal = √10000 = 100 cm.', wrongs: ['Opción correcta', 'Calculaste 80 + 60 = 140', 'Calculaste 80 x 60 = 4800', 'Sumaste 80 + 60 + 100?'] }
  },
  {
    id: 'MT48', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'facil',
    question: `Una recta pasa por los puntos (1, 2) y (3, 8). ¿Cuál es su pendiente?`,
    options: ['2', '3', '5', '6'],
    correct: 1,
    explanation: { correct: 'm = (8 - 2)/(3 - 1) = 6/2 = 3.', wrongs: ['Opción correcta', 'Calculaste (8+2)/(3+1) = 10/4 = 2,5', 'Calculaste (3-1)/(8-2) = 2/6 = 1/3'] }
  },
  {
    id: 'MT49', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'media',
    table: {
      headers: ['Puntaje', 'Frecuencia'],
      rows: [
        ['10-19', '5'],
        ['20-29', '8'],
        ['30-39', '12'],
        ['40-49', '7'],
        ['50-59', '3']
      ],
      caption: 'DistribuciÃ³n de puntajes en una prueba de matemÃ¡ticas'
    },
    context: 'La tabla muestra la distribuciÃ³n de puntajes de 35 estudiantes.',
    question: 'Â¿En quÃ© intervalo de puntaje se encuentra la mediana?',
    options: ['20-29', '30-39', '40-49', '10-19'],
    correct: 1,
    explanation: { correct: 'Total = 35. Mediana = dato 18. Frecuencias acumuladas: 5, 13, 25... El dato 18 esta en el intervalo 30-39.', wrongs: ['OpciÃ³n correcta', 'Hasta 20-29 hay 13 datos, la mediana es el 18, esta en el siguiente', 'Hasta 40-49 hay 32 datos, la mediana es antes', 'El intervalo 30-39 contiene la posiciÃ³n 18'] }
  },
  {
    id: 'MT50', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'dificil',
    question: `Un computador en Pereira cuesta $2.500.000. Si se paga de contado, ofrecen 12% de descuento. Si se paga a credito, se recarga 8%. Cuanto se ahorra pagando de contado respecto al credito?`,
    options: ['$450.000', '$500.000', '$600.000', '$550.000'],
    correct: 1,
    explanation: { correct: 'Contado: 2.500.000 x 0,88 = 2.200.000. CrÃ©dito: 2.500.000 x 1,08 = 2.700.000. Ahorro: 2.700.000 - 2.200.000 = $500.000.', wrongs: ['Opción correcta', 'Calculaste 20% de 2.500.000 = 500.000, pero son descuento y recargo', 'Calculaste 12% + 8% = 20% de 2.500.000, correcto pero proceso?', 'CÃ¡lculo incorrecto'] }
  },
  {
    id: 'MT51', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'facil',
    question: `Un angulo mide 73 grados. Este angulo se clasifica como:`,
    options: ['Agudo', 'Recto', 'Obtuso', 'Llano'],
    correct: 0,
    explanation: { correct: 'Ã�ngulos agudos miden menos de 90Â°. 73Â° < 90Â°, entonces es agudo.', wrongs: ['Opción correcta', 'Recto es exactamente 90Â°', 'Obtuso es mayor de 90Â°', '73Â° es agudo (< 90Â°)'] }
  },
  {
    id: 'MT52', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'media',
    question: `La temperatura T en una nevera industrial despues de t horas sigue T(t) = -2t + 8. En que momento la temperatura llega a 0C?`,
    options: ['2 horas', '4 horas', '3 horas', '6 horas'],
    correct: 1,
    explanation: { correct: '-2t + 8 = 0 -> -2t = -8 -> t = 4 horas.', wrongs: ['Opción correcta', 'Resolviste 2t = 8 -> t = 4, es correcto', 'Sumaste 8 + 2 = 10? No'] }
  },
  {
    id: 'MT53', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'media',
    question: `Un bus intermunicipal recorre 240 km en 3 horas. Cuanto tiempo tardara en recorrer 400 km a la misma velocidad?`,
    options: ['4 horas', '5 horas', '2 horas', '6 horas'],
    correct: 1,
    explanation: { correct: 'Velocidad = 240/3 = 80 km/h. Tiempo = 400/80 = 5 horas.', wrongs: ['Opción correcta', 'Velocidad = 240/3 = 80, tiempo = 400/80 = 5', 'Calculaste 400 x 3 / 240 = 5', 'Regla de tres: 240/3 = 400/x -> x = 5'] }
  },
  {
    id: 'MT54', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'dificil',
    question: `Se lanzan dos dados. Cual es la probabilidad de que la suma sea mayor o igual a 10?`,
    options: ['1/6', '1/12', '5/18', '1/9'],
    correct: 0,
    explanation: { correct: 'Sumas >= 10: (4,6), (5,5), (5,6), (6,4), (6,5), (6,6) = 6 casos. Total 36. Prob = 6/36 = 1/6.', wrongs: ['Opción correcta', 'Olvidaste algunas combinaciones, como (5,5) o (6,4)', 'Contaste combinaciones de mÃ¡s', 'Solo consideraste (6,4), (6,5), (6,6) = 3/36'] }
  },
  {
    id: 'MT55', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'media',
    question: `Un terreno en forma de trapecio tiene bases de 12 m y 8 m, y una altura de 5 m. Cual es su area?`,
    options: ['40 m²', '50 m²', '60 m²', '100 m²'],
    correct: 1,
    explanation: { correct: 'Ã�rea del trapecio = (B + b) x h / 2 = (12 + 8) x 5 / 2 = 20 x 5 / 2 = 50 mÂ².', wrongs: ['Opción correcta', 'Calculaste (12 x 8) x 5 / 2 = 240? No es la fÃ³rmula', 'Sumaste 12 + 8 + 5 = 25, y multiplicaste por 2?', 'Usaste la fÃ³rmula del triÃ¡ngulo'] }
  },
  {
    id: 'MT56', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'facil',
    question: `Un cultivo de cafe produce 15 kg por cada 10 arboles. Cuanto producirÃ¡n 50 arboles?`,
    options: ['60 kg', '75 kg', '45 kg', '90 kg'],
    correct: 1,
    explanation: { correct: 'Regla de tres: 15/10 = x/50 -> 10x = 750 -> x = 75 kg.', wrongs: ['Opción correcta', 'Multiplicaste 50 x 15 = 750, luego 750/10 = 75', 'Calculaste 50/10 = 5, 5 x 15 = 75', 'Dividiste 50/15 = 3,33? No'] }
  },
  {
    id: 'MT57', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'dificil',
    question: `Se mezclan 10 litros de jugo al 20% de azucar con 5 litros de jugo al 50% de azucar. Cual es el porcentaje de azucar en la mezcla?`,
    options: ['30%', '25%', '35%', '40%'],
    correct: 0,
    explanation: { correct: 'AzÃºcar en 1Â°: 10 x 0,20 = 2 litros. AzÃºcar en 2Â°: 5 x 0,50 = 2,5 litros. Total azÃºcar = 4,5 L. Total mezcla = 15 L. Porcentaje = 4,5/15 x 100 = 30%.', wrongs: ['Opción correcta', 'Promediaste (20+50)/2 = 35, pero no son volÃºmenes iguales', 'Calculaste (20x10+50x5)/15 = 30', 'Usaste el volumen incorrecto'] }
  },
  {
    id: 'MT58', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'media',
    context: `Las notas de 10 estudiantes en una prueba de matematicas son: 7, 8, 9, 7, 10, 6, 8, 7, 9, 8.`,
    question: `Cual es la nota mediana?`,
    options: ['7', '8', '6', '9'],
    correct: 1,
    explanation: { correct: 'Ordenando: 6, 7, 7, 7, 8, 8, 8, 9, 9, 10. Datos 5Â° y 6Â°: 8 y 8. Mediana = (8+8)/2 = 8.', wrongs: ['Opción correcta', 'Esa es la moda (7), no la mediana', 'La mediana es 8, ordena los datos', 'Ese es el valor mÃ¡ximo'] }
  },
  {
    id: 'MT59', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'dificil',
    question: `Un rectangulo tiene un area de 48 cm2 y su diagonal mide 10 cm. Cuanto miden sus lados?`,
    options: ['4 cm y 12 cm', '6 cm y 8 cm', '5 cm y 9,6 cm', '3 cm y 16 cm'],
    correct: 1,
    explanation: { correct: 'Sistema: a x b = 48, aÂ² + bÂ² = 100. Resolviendo: (a+b)Â² = aÂ²+bÂ²+2ab = 100+96 = 196, a+b=14. (a-b)Â² = aÂ²+bÂ²-2ab = 100-96 = 4, a-b=2. a=8, b=6.', wrongs: ['Opción correcta', '4+12=16, 16+? 4Â²+12Â²=16+144=160, no da 100', '5Â²+9,6Â²=25+92,16=117,16, no da 100', 'Los lados son 6 y 8: 6x8=48, 6Â²+8Â²=100'] }
  },
  {
    id: 'MT60', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'media',
    question: `El numero de bacterias en un cultivo se duplica cada hora. Si inicialmente hay 200 bacterias, cuantas habra despues de 5 horas?`,
    options: ['6.400', '3.200', '12.800', '1.000'],
    correct: 0,
    explanation: { correct: 'N(5) = 200 x 2â�µ = 200 x 32 = 6.400 bacterias.', wrongs: ['Opción correcta', 'Calculaste 200 x 2 x 5 = 2.000 (crecimiento lineal)', 'Calculaste 200 x 2â�µ = 200 x 32 = 6.400', 'Calculaste 200 x 2â�¶? Se duplica cada hora, en 5 horas son 2â�µ'] }
  },

  // ===== SOCIALES - BLOQUE 4 (SC30-SC59) =====
  {
    id: 'SC30', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'media',
    question: `El Congreso de la República de Colombia es un órgano bicameral compuesto por el Senado y la Cámara de Representantes. Su función principal es:`,
    options: ['Ejecutar las leyes y administrar el Estado', 'Crear, modificar y derogar las leyes, y ejercer control político sobre el Gobierno', 'Administrar justicia y resolver conflictos entre ciudadanos', 'Controlar la política monetaria y cambiaría del país'],
    correct: 1,
    explanation: { correct: 'El Congreso ejerce la función legislativa (crear leyes), control político (citar a ministros, moción de censura), reformar la Constitución mediante actos legislativos, y aprobar el presupuesto nacional. El Senado tiene 108 miembros y la Cámara 188 miembros.', wrongs: ['Ejecutar las leyes es función de la Rama Ejecutiva', 'Opción correcta', 'Administrar justicia es función de la Rama Judicial', 'La política monetaria es función autónoma del Banco de la República'] }
  },
  {
    id: 'SC31', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'dificil',
    question: `El movimiento de la Regeneración liderado por Rafael Núñez a finales del siglo XIX buscaba:`,
    options: ['Fortalecer el sistema federal de la Constitución de Rionegro de 1863', 'Centralizar el poder político, promulgar una nueva Constitución y fortalecer la alianza entre el Estado y la Iglesia Católica', 'Establecer un sistema parlamentario similar al europeo', 'Abolir el ejército nacional y crear milicias civiles'],
    correct: 1,
    explanation: { correct: 'La Regeneración, liderada por Rafael Núñez y Miguel Antonio Caro, buscó reemplazar la Constitución federal de 1863 por la centralista Constitución de 1886. Restableció las relaciones con el Vaticano (Concordato de 1887), centralizó el poder político y fiscal, y fortaleció la autoridad presidencial con un período de 6 años.', wrongs: ['La Regeneración fue centralista, precisamente buscaba eliminar el federalismo de 1863', 'Opción correcta', 'Colombia mantuvo un sistema presidencial, no parlamentario', 'No abolió el ejército; la Constitución de 1886 lo mantuvo como institución'] }
  },
  {
    id: 'SC32', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'facil',
    question: `El plebiscito es un mecanismo de participación ciudadana mediante el cual el Presidente convoca al pueblo para:`,
    options: ['Presentar proyectos de ley al Congreso', 'Pronunciarse a favor o en contra de una decisión política del Ejecutivo', 'Elegir a los miembros del Congreso', 'Revocar el mandato de un alcalde'],
    correct: 1,
    explanation: { correct: 'El plebiscito (art. 103 Constitución, Ley 134 de 1994) es la convocatoria que hace el Presidente de la República al pueblo para que se pronuncie sobre una decisión política de su Gobierno. El ejemplo más significativo fue el plebiscito del 2 de octubre de 2016 sobre los Acuerdos de Paz con las FARC, en el que ganó el "No".', wrongs: ['Esa es la iniciativa legislativa, no el plebiscito', 'Opción correcta', 'Los miembros del Congreso se eligen mediante voto popular en elecciones', 'La revocatoria del mandato es otro mecanismo diferente'] }
  },
  {
    id: 'SC33', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'media',
    question: `La Constitución de 1991 puede ser reformada a través de:`,
    options: ['Un decreto presidencial con fuerza de ley', 'Un acto legislativo aprobado por el Congreso en dos vueltas, o mediante referendo o asamblea constituyente', 'Una decisión mayoritaria de la Corte Suprema de Justicia', 'Una resolución del Consejo de Estado'],
    correct: 1,
    explanation: { correct: 'La Constitución establece tres mecanismos de reforma (arts. 374-379): 1) Acto legislativo aprobado por el Congreso en dos períodos ordinarios, 2) Asamblea Nacional Constituyente convocada por el Congreso mediante ley aprobada por el pueblo, y 3) Referendo constitucional convocado por el Gobierno o mediante iniciativa ciudadana.', wrongs: ['El Presidente no puede reformar la Constitución por decreto', 'Opción correcta', 'La Corte Constitucional custodia e interpreta la Constitución, no la reforma', 'El Consejo de Estado es tribunal de lo contencioso administrativo'] }
  },
  {
    id: 'SC34', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'dificil',
    context: `"Montesquieu, en 'El espíritu de las leyes' (1748), propuso que para evitar el abuso de poder, este debe dividirse en tres funciones: legislativa, ejecutiva y judicial, que se controlen mutuamente. Este principio inspiró la organización del Estado colombiano."`,
    question: `La separación de poderes en Colombia busca evitar el abuso de poder mediante:`,
    options: ['La concentración de todas las funciones en el Presidente de la República', 'La distribución de funciones entre tres ramas independientes que se controlan entre sí', 'La eliminación de la Rama Judicial para simplificar el Estado', 'La subordinación del Congreso al poder Ejecutivo'],
    correct: 1,
    explanation: { correct: 'La separación de poderes (o división de poderes) distribuye las funciones del Estado en tres ramas: Ejecutiva (administrar), Legislativa (legislar) y Judicial (juzgar). Cada rama tiene funciones específicas pero también mecanismos de control sobre las otras (frenos y contrapesos), evitando la concentración del poder en una sola instancia.', wrongs: ['La separación busca precisamente evitar la concentración del poder, no concentrarlo', 'Opción correcta', 'No se elimina ninguna rama; las tres son necesarias', 'El Congreso es independiente del Ejecutivo, no está subordinado'] }
  },
  {
    id: 'SC35', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'facil',
    question: `Colombia está ubicada en la zona ecuatorial, lo que determina que:`,
    options: ['Tenga cuatro estaciones climáticas bien diferenciadas como en Europa', 'Presente pocas variaciones de temperatura a lo largo del año, siendo la altitud el principal factor de variación climática', 'Su clima sea exclusivamente polar en todas las regiones del país', 'No tenga vegetación ni biodiversidad significativa'],
    correct: 1,
    explanation: { correct: 'La ubicación en la zona ecuatorial hace que Colombia reciba radiación solar constante durante todo el año, generando pocas variaciones de temperatura estacionales. Las diferencias de temperatura se deben principalmente a la altitud, creando los pisos térmicos. Colombia es uno de los países más biodiversos del mundo gracias a su ubicación y relieve diverso.', wrongs: ['Colombia no tiene cuatro estaciones; las variaciones son por altitud, no por estaciones', 'Opción correcta', 'Solo las zonas de alta montaña tienen clima frío; la mayoría del territorio es cálido y templado', 'Colombia es el segundo país más biodiverso del mundo'] }
  },
  {
    id: 'SC36', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'media',
    context: `"El filósofo John Rawls, en 'Teoría de la justicia' (1971), propuso que una sociedad justa debe organizarse según dos principios: el de igual libertad y el de diferencia. Este último establece que las desigualdades sociales y económicas solo son aceptables si benefician a los miembros menos favorecidos de la sociedad."`,
    question: `Según Rawls, el principio de diferencia acepta las desigualdades económicas siempre que:`,
    options: ['Se elimine toda diferencia de ingreso entre las personas', 'Redunden en beneficio de los miembros más desfavorecidos de la sociedad', 'Se mantengan exactamente como están sin ningún cambio', 'Sean el resultado exclusivo del esfuerzo individual sin intervención del Estado'],
    correct: 1,
    explanation: { correct: 'Rawls formula el principio de diferencia como parte de su teoría de la justicia como equidad. Las desigualdades económicas y sociales son justas solo si (1) benefician a los menos aventajados y (2) están vinculadas a posiciones y cargos abiertos a todos en condiciones de igualdad de oportunidades.', wrongs: ['Rawls no propone eliminar todas las diferencias, sino regularlas para que beneficien a los menos favorecidos', 'Opción correcta', 'Rawls propone cambios para hacer la sociedad más justa, no mantener el statu quo', 'Rawls reconoce que el mérito está influido por factores sociales y propone corregir desigualdades de origen'] }
  },
  {
    id: 'SC37', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'dificil',
    question: `Cuando la Corte Constitucional declara inexequible una ley aprobada por el Congreso, está ejerciendo:`,
    options: ['Un control político del Ejecutivo sobre el Legislativo', 'Un control de constitucionalidad que permite mantener el equilibrio entre las ramas del poder público', ['Una función administrativa propia del Consejo de Estado', 'Una interferencia indebida en las funciones del Congreso'],
    correct: 1,
    explanation: { correct: 'El control de constitucionalidad es un mecanismo de frenos y contrapesos (checks and balances). La Corte Constitucional revisa que las leyes del Congreso se ajusten a la Constitución. Si una ley es declarada inexequible, se elimina del ordenamiento por ser contraria a la Constitución. Este control puede ser preventivo o posterior, abstracto o concreto.', wrongs: ['Es un control judicial, no ejecutivo', 'Opción correcta', 'Los límites no son correctos en las otras opciones', 'Es un control previsto en la Constitución, no una interferencia indebida'] }
  },
  {
    id: 'SC38', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'facil',
    context: `"Colombia es el segundo país más biodiverso del mundo, después de Brasil. Alberga aproximadamente el 10% de las especies del planeta en solo el 0,7% de la superficie terrestre, gracias a su ubicación ecuatorial y su diversidad de ecosistemas."`,
    question: `Según el texto, Colombia se caracteriza por ser un país:`,
    options: ['Con baja biodiversidad debido a su extensión territorial', 'Megadiverso, que concentra un porcentaje muy alto de especies en un área pequeña', 'Con clima polar uniforme en todo su territorio', 'Con poca variedad de ecosistemas y regiones naturales'],
    correct: 1,
    explanation: { correct: 'El texto destaca que Colombia es "el segundo país más biodiverso del mundo" y "alberga aproximadamente el 10% de las especies del planeta en solo el 0,7% de la superficie terrestre". Esto se debe a su ubicación ecuatorial, su relieve con las tres cordilleras, y sus múltiples ecosistemas que incluyen selvas, páramos, sabanas y ecosistemas marinos.', wrongs: ['Colombia es megadiversa, con una de las mayores biodiversidades del planeta', 'Opción correcta', 'Colombia tiene múltiples climas: cálido, templado, frío, páramo; no es polar', 'Colombia tiene 6 regiones naturales con gran variedad de ecosistemas'] }
  },
  {
    id: 'SC39', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'dificil',
    question: `El Sistema Integral de Verdad, Justicia, Reparación y No Repetición (SIVJRNR), creado por el Acuerdo de Paz de 2016, está compuesto por tres mecanismos. ¿Cuáles son?`,
    options: ['La JEP, la Comisión de la Verdad y la Unidad de Búsqueda de Personas dadas por Desaparecidas', 'La Fiscalía General, la Policía Nacional y el Ejército', 'El Congreso, la Corte Suprema y la Presidencia', 'La Registraduría, el Consejo Nacional Electoral y la Procuraduría'],
    correct: 0,
    explanation: { correct: 'El SIVJRNR integra tres mecanismos: 1) Comisión para el Esclarecimiento de la Verdad (CEV) —esclarece patrones de violencia—, 2) Jurisdicción Especial para la Paz (JEP) —administra justicia transicional—, y 3) Unidad de Búsqueda de Personas dadas por Desaparecidas (UBPD) —busca a las víctimas de desaparición forzada—. Cada uno cumple funciones distintas pero complementarias.', wrongs: ['Opción correcta', 'La Fiscalía, la Policía y el Ejército no forman parte del SIVJRNR', 'Esos son órganos del Estado preexistentes, no creados por el Acuerdo de Paz', 'La Registraduría y el CNE organizan elecciones; la Procuraduría ejerce control disciplinario'] }
  },
  {
    id: 'SC40', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'media',
    question: `En economía, se entiende por inflación:`,
    options: ['La disminución generalizada de los precios de bienes y servicios en una economía', 'El aumento sostenido y generalizado del nivel de precios durante un período de tiempo', 'El crecimiento de la producción industrial de un país medido trimestralmente', 'La reducción sistemática de la tasa de desempleo en la población económicamente activa'],
    correct: 1,
    explanation: { correct: 'La inflación es el aumento sostenido y generalizado de los precios de bienes y servicios. En Colombia, el Banco de la República tiene como meta mantener la inflación en torno al 3% anual. Una inflación alta reduce el poder adquisitivo de la moneda y afecta especialmente a las personas de menores ingresos. Se mide a través del Índice de Precios al Consumidor (IPC).', wrongs: ['Esa es la definición de deflación, lo opuesto a la inflación', 'Opción correcta', 'Eso es crecimiento económico, no inflación', 'La inflación y el desempleo son fenómenos diferentes, aunque relacionados (Curva de Phillips)'] }
  },
  {
    id: 'SC41', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'facil',
    question: `El referendo es un mecanismo de participación ciudadana que permite a los ciudadanos:`,
    options: ['Elegir al Presidente de la República mediante voto popular directo', 'Decidir si aprueban o rechazan un proyecto de norma jurídica, o si derogan una norma existente', 'Solicitar la rendición de cuentas de un funcionario público electo', 'Proponer la destitución de un alcalde o gobernador antes de que termine su mandato'],
    correct: 1,
    explanation: { correct: 'El referendo (art. 103 Constitución, Ley 134 de 1994) es la convocatoria al pueblo para que decida si aprueba un proyecto de norma (referendo aprobatorio) o si deroga una norma existente (referendo derogatorio). Puede ser de ámbito nacional, departamental o municipal. No debe confundirse con el plebiscito, que se pronuncia sobre decisiones del Ejecutivo.', wrongs: ['El Presidente se elige mediante voto popular en elecciones, no por referendo', 'Opción correcta', 'Eso es una citación a debate de control político', 'Esa es la revocatoria del mandato'] }
  },
  {
    id: 'SC42', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'dificil',
    context: `"El período conocido como 'La Violencia' en Colombia (1946-1958) se caracterizó por el enfrentamiento bipartidista entre liberales y conservadores, especialmente en zonas rurales. Causó entre 200.000 y 300.000 muertes y el desplazamiento de miles de campesinos. El asesinato de Jorge Eliécer Gaitán en 1948 (el 'Bogotazo') marcó un punto de inflexión en este conflicto."`,
    question: `Según el texto, el detonante que intensificó "La Violencia" en Colombia fue:`,
    options: ['La firma del Frente Nacional entre liberales y conservadores', 'El asesinato de Jorge Eliécer Gaitán el 9 de abril de 1948', 'La llegada al poder del partido Comunista Colombiano', 'La guerra con el Perú por el conflicto del Trapecio Amazónico'],
    correct: 1,
    explanation: { correct: 'El asesinato de Jorge Eliécer Gaitán (candidato presidencial liberal) el 9 de abril de 1948 desencadenó el Bogotazo y una ola de violencia que se extendió por todo el país. Aunque la violencia bipartidista ya existía antes, el magnicidio de Gaitán la intensificó dramáticamente. La Violencia solo cesó parcialmente con el establecimiento del Frente Nacional en 1958.', wrongs: ['El Frente Nacional (1958) fue la solución pactada para terminar La Violencia, no su detonante', 'Opción correcta', 'El Partido Comunista no tuvo suficiente poder para causar este nivel de violencia', 'El conflicto con Perú por Leticia fue en 1932-1933, antes de La Violencia'] }
  },
  {
    id: 'SC43', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'media',
    question: `La migración masiva de ciudadanos venezolanos hacia Colombia, que se intensificó a partir de 2017, ha implicado para el país:`,
    options: ['El cierre definitivo e irreversible de la frontera binacional', 'Desafíos en la integración social, presión sobre los servicios de salud y educación, y la implementación de medidas de regularización como el Estatuto Temporal de Protección (ETPV)', 'La desaparición de las ciudades fronterizas del departamento de Norte de Santander', 'Un incremento automático e inmediato de la economía y el empleo formal'],
    correct: 1,
    explanation: { correct: 'La migración venezolana (más de 2,5 millones de venezolanos en Colombia) ha generado importantes desafíos en integración social, presión sobre servicios públicos como salud y educación, y necesidades de vivienda. Colombia respondió con el Estatuto Temporal de Protección (2021) para regularizar a los migrantes. Ciudades como Cúcuta han experimentado cambios demográficos significativos.', wrongs: ['La frontera no se ha cerrado de forma definitiva; ha habido aperturas y cierres periódicos', 'Opción correcta', 'Las ciudades fronterizas no han desaparecido; han crecido demográficamente y enfrentan nuevos retos', 'La migración ha tenido impactos económicos mixtos; no ha generado un incremento inmediato generalizado'] }
  },
  {
    id: 'SC44', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'facil',
    question: `El artículo 3 de la Constitución de 1991 establece que "la soberanía reside exclusivamente en el pueblo". Esto se conoce como el principio de:`,
    options: ['Soberanía popular, según el cual el poder público emana de los ciudadanos y los gobernantes son sus representantes', 'Soberanía nacional absoluta del Presidente de la República', 'Autonomía de los partidos políticos para decidir sobre asuntos del Estado', 'Supremacía constitucional del Congreso sobre los demás poderes públicos'],
    correct: 0,
    explanation: { correct: 'El principio de soberanía popular significa que el poder público emana del pueblo colombiano, no de los gobernantes ni de ninguna institución. Los ciudadanos ejercen su soberanía mediante el voto, los mecanismos de participación ciudadana y el control a sus gobernantes. Este principio se complementa con el artículo 103 que enumera los mecanismos de participación del pueblo en ejercicio de su soberanía.', wrongs: ['Opción correcta', 'El Presidente no tiene soberanía propia; es un mandatario temporal del pueblo', 'La soberanía es del pueblo, no de los partidos políticos', 'El Congreso es un poder constituido que emana del pueblo, no tiene soberanía propia'] }
  },
  {
    id: 'SC45', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'media',
    context: `"El rio Amazonas es el más caudaloso del mundo y atraviesa varios países sudamericanos incluyendo Colombia. La selva amazónica colombiana cubre aproximadamente el 30% del territorio nacional."`,
    question: `¿Qué porcentaje del territorio colombiano cubre la Amazonía?`,
    options: ['10%', '20%', '30%', '50%'],
    correct: 2,
    explanation: { correct: 'El texto dice que "la selva amazónica colombiana cubre aproximadamente el 30% del territorio nacional".', wrongs: ['Menos de lo indicado', 'Menos de lo indicado', 'Opción correcta', 'Más de lo indicado'] }
  },
  {
    id: 'SC46', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'dificil',
    question: `La "estanflación" es un fenómeno económico que combina:`,
    options: ['Crecimiento económico con baja inflación', 'Estancamiento económico con alta inflación', 'Alto desempleo con deflación', 'Crecimiento con alta inflación'],
    correct: 1,
    explanation: { correct: 'La estanflación combina estancamiento económico (bajo crecimiento, alto desempleo) con alta inflación. Fue un fenómeno notable en los años 70.', wrongs: ['Eso es crecimiento saludable', 'Opción correcta', 'No es deflación sino inflación', 'Eso sería sobrecalentamiento económico'] }
  },
  {
    id: 'SC47', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'facil',
    question: `La defensoría del pueblo es una institución que:`,
    options: ['Defiende a los funcionarios públicos', 'Protege y promueve los derechos humanos de los ciudadanos', 'Juzga a los delincuentes', 'Recauda impuestos'],
    correct: 1,
    explanation: { correct: 'La Defensoría del Pueblo es parte del Ministerio Público y se encarga de promover, ejercer y divulgar los derechos humanos en Colombia.', wrongs: ['La Defensoría defiende a los ciudadanos, no a funcionarios', 'Opción correcta', 'Los delincuentes son juzgados por la Rama Judicial', 'Los impuestos los recauda la DIAN'] }
  },
  {
    id: 'SC48', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'media',
    question: `El "desplazamiento forzado" en Colombia ha afectado principalmente a:`,
    options: ['Las poblaciones urbanas de clase alta', 'Las comunidades rurales y campesinas', 'Los empresarios industriales', 'Los funcionarios públicos'],
    correct: 1,
    explanation: { correct: 'El conflicto armado ha desplazado forzosamente a millones de personas del campo y zonas rurales, siendo los campesinos, afrocolombianos e indígenas las poblaciones más afectadas.', wrongs: ['El desplazamiento ha sido mayoritariamente rural', 'Opción correcta', 'Los empresarios no han sido el grupo más afectado', 'Los funcionarios no son el grupo más desplazado'] }
  },
  {
    id: 'SC49', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'dificil',
    question: `La "Curva de Laffer" en economía relaciona:`,
    options: ['La inflación y el desempleo', 'La tasa impositiva y los ingresos fiscales', 'La oferta y la demanda', 'El consumo y el ahorro'],
    correct: 1,
    explanation: { correct: 'La Curva de Laffer muestra que existe una tasa impositiva óptima que maximiza los ingresos fiscales; tasas muy altas pueden reducir la recaudación.', wrongs: ['Esa es la Curva de Phillips', 'Opción correcta', 'Esa es la ley de oferta y demanda', 'Esa es la propensión marginal'] }
  },
  {
    id: 'SC50', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'facil',
    question: `Las regiones naturales de Colombia son:`,
    options: ['Caribe, Andina, Pacífica, Orinoquía, Amazonía e Insular', 'Norte, Sur, Este y Oeste', 'Tropical, Templada y Fría', 'Continental, Marítima y Fluvial'],
    correct: 0,
    explanation: { correct: 'Colombia tiene seis regiones naturales: Caribe, Andina, Pacífica, Orinoquía, Amazonía e Insular, cada una con características geográficas y culturales distintivas.', wrongs: ['Opción correcta', 'Esa no es la división por regiones naturales', 'Esa es una clasificación por pisos térmicos', 'No corresponde a regiones naturales'] }
  },
  {
    id: 'SC51', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'media',
    question: `La "Comisión de la Verdad" en Colombia tuvo como objetivo:`,
    options: ['Juzgar a los responsables del conflicto', 'Contribuir al esclarecimiento de violaciones a los derechos humanos durante el conflicto armado', 'Administrar justicia penal', 'Reemplazar a la Fiscalía'],
    correct: 1,
    explanation: { correct: 'La Comisión de la Verdad buscaba esclarecer patrones de violencia, violaciones de derechos humanos y contribuir a la verdad del conflicto, sin funciones judiciales.', wrongs: ['Juzgar no era su función; eso era para la JEP', 'Opción correcta', 'No tenía funciones judiciales', 'No reemplazaba a ninguna institución'] }
  },
  {
    id: 'SC52', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'dificil',
    question: `El concepto de "interseccionalidad" en ciencias sociales se refiere a:`,
    options: ['La separación de identidades sociales', 'La forma en que diferentes sistemas de opresión (raza, género, clase) se superponen e interactúan', 'La igualdad de todas las personas ante la ley', 'La eliminación de categorías sociales'],
    correct: 1,
    explanation: { correct: 'La interseccionalidad (Crenshaw) analiza cómo las diferentes identidades sociales y sistemas de opresión se intersectan, creando experiencias únicas de discriminación.', wrongs: ['La interseccionalidad analiza la intersección, no la separación', 'Opción correcta', 'Eso es el principio de igualdad jurídica', 'La interseccionalidad reconoce las categorías'] }
  },
  {
    id: 'SC53', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'facil',
    question: `El peso colombiano es la moneda oficial de Colombia emitida por:`,
    options: ['El Banco Mundial', 'El Banco de la República', 'La DIAN', 'El Ministerio de Hacienda'],
    correct: 1,
    explanation: { correct: 'El Banco de la República (Banco Central) es el encargado de emitir la moneda legal en Colombia y controlar la política monetaria.', wrongs: ['El Banco Mundial es un organismo internacional', 'Opción correcta', 'La DIAN recauda impuestos', 'El Ministerio de Hacienda diseña la política fiscal'] }
  },
  {
    id: 'SC54', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'media',
    question: `El Mercado Común del Sur (Mercosur) fue creado mediante:`,
    options: ['El Tratado de Libre Comercio con EE.UU.', 'El Tratado de Asunción en 1991', 'El Acuerdo de Paz de 2016', 'La Carta de la ONU'],
    correct: 1,
    explanation: { correct: 'El Mercosur fue creado el 26 de marzo de 1991 con la firma del Tratado de Asunción entre Argentina, Brasil, Paraguay y Uruguay.', wrongs: ['No es un TLC con EE.UU.', 'Opción correcta', 'El acuerdo de paz es colombiano, no del Mercosur', 'La Carta de la ONU es de 1945'] }
  },
  {
    id: 'SC55', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'dificil',
    question: `El "Estado de excepción" en Colombia permite al Presidente:`,
    options: ['Gobernar sin límites constitucionales', 'Suspender algunos derechos en situaciones de emergencia, con control judicial y legislativo', 'Disolver el Congreso permanentemente', 'Eliminar la Rama Judicial'],
    correct: 1,
    explanation: { correct: 'El Estado de excepción (arts. 212-215 Constitución) permite al Presidente adoptar medidas extraordinarias pero limitadas, con control automático de la Corte Constitucional.', wrongs: ['Hay límites y controles constitucionales', 'Opción correcta', 'No puede disolver el Congreso', 'No puede eliminar la Rama Judicial'] }
  },
  {
    id: 'SC56', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'facil',
    question: `La bandera de Colombia tiene tres colores:`,
    options: ['Rojo, blanco y azul', 'Amarillo, azul y rojo', 'Verde, blanco y rojo', 'Azul, blanco y amarillo'],
    correct: 1,
    explanation: { correct: 'La bandera de Colombia tiene tres franjas horizontales: amarillo (riqueza), azul (océanos) y rojo (sangre derramada por la independencia).', wrongs: ['Esa es la bandera de Países Bajos', 'Opción correcta', 'Esa es la bandera de Italia o México', 'Esa es la bandera de Argentina'] }
  },
  {
    id: 'SC57', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'media',
    context: `"Según la CEPAL, América Latina es la región más desigual del mundo. El 10% más rico de la población concentra el 54% de los ingresos, mientras que el 50% más pobre apenas recibe el 10%."`,
    question: `El texto afirma que América Latina se caracteriza por:`,
    options: ['La igualdad económica', 'Ser la región más desigual del mundo', 'Tener ingresos equilibrados', 'La pobreza inexistente'],
    correct: 1,
    explanation: { correct: 'El texto dice que "América Latina es la región más desigual del mundo" y presenta cifras que lo demuestran.', wrongs: ['Las cifras muestran gran desigualdad', 'Opción correcta', 'Hay una gran brecha entre ricos y pobres', 'La pobreza es un problema grave en la región'] }
  },
  {
    id: 'SC58', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'dificil',
    question: `El "neoliberalismo" como modelo económico propugna:`,
    options: ['El control estatal de la economía', 'La reducción del Estado, privatizaciones y libre mercado', 'La propiedad colectiva de los medios de producción', 'El proteccionismo comercial'],
    correct: 1,
    explanation: { correct: 'El neoliberalismo promueve la reducción del Estado, privatización de empresas públicas, desregulación, apertura comercial y libre mercado.', wrongs: ['Eso es socialismo o keynesianismo', 'Opción correcta', 'Eso es comunismo o socialismo', 'El neoliberalismo promueve libre comercio'] }
  },
  {
    id: 'SC59', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'facil',
    question: `La Corte Constitucional de Colombia se encarga de:`,
    options: ['Juzgar al Presidente', 'Velar por la integridad de la Constitución mediante la revisión de leyes', 'Administrar las elecciones', 'Recaudar impuestos'],
    correct: 1,
    explanation: { correct: 'La Corte Constitucional es el máximo tribunal en materia constitucional. Revisa la constitucionalidad de las leyes y protege los derechos fundamentales mediante tutelas.', wrongs: ['Eso es función del Senado (juicio político)', 'Opción correcta', 'Esa es función de la Registraduría', 'Esa es función de la DIAN'] }
  },

  // ===== CIENCIAS NATURALES - BLOQUE 4 (CN32-CN61) =====
  {
    id: 'CN32', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
    context: `En un laboratorio, se inyecta a un ratón una pequeña cantidad de una toxina bacteriana. El ratón sobrevive. Semanas después, se le inyecta una dosis letal de la misma toxina y el ratón sobrevive nuevamente.`,
    question: `La segunda inyección no afecta al ratón porque su sistema inmune:`,
    options: ['Había eliminado la toxina por el hígado', 'Produjo anticuerpos específicos contra la toxina en la primera exposición', 'Desarrolló tolerancia general a todas las toxinas', 'Se acostumbró a la toxina por exposición repetida'],
    correct: 1,
    explanation: { correct: 'El sistema inmunitario adaptativo produce anticuerpos específicos contra antígenos extraños. Tras la primera exposición, se generan células de memoria que permiten una respuesta rápida y efectiva en exposiciones posteriores, inmunizando al organismo contra esa toxina específica.', wrongs: ['El hígado desintoxica pero no genera inmunidad específica', 'Opción correcta', 'La inmunidad es específica, no general contra todas las toxinas', 'La exposición genera inmunidad específica, no habituación'] }
  },
  {
    id: 'CN33', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
    context: `Un estudiante acerca una brújula a un cable conductor por el que circula corriente eléctrica. La aguja de la brújula se desvía.`,
    question: `La desviación de la aguja de la brújula demuestra que:`,
    options: ['El cable está caliente', 'La corriente eléctrica genera un campo magnético a su alrededor', 'La brújula está defectuosa', 'El cable está cargado estáticamente'],
    correct: 1,
    explanation: { correct: 'Hans Christian Ørsted descubrió en 1820 que una corriente eléctrica genera un campo magnético a su alrededor. Este principio es la base del electromagnetismo y permite el funcionamiento de motores eléctricos y electroimanes.', wrongs: ['El calor no desvía una brújula', 'Opción correcta', 'La desviación demuestra la relación entre electricidad y magnetismo', 'La corriente en movimiento genera campo magnético, no carga estática'] }
  },
  {
    id: 'CN34', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
    context: `En el laboratorio, se hace reaccionar hidrógeno (H₂) con oxígeno (O₂) para producir agua. La ecuación balanceada es: 2H₂ + O₂ → 2H₂O. Se tienen 4 gramos de H₂ y 32 gramos de O₂. (Masas atómicas: H=1, O=16).`,
    question: `4 gramos de H₂ son 2 moles de H₂ y 32 gramos de O₂ son 1 mol de O₂. ¿Cuántos moles de agua se producirán?`,
    options: ['1 mol', '2 moles', '3 moles', '4 moles'],
    correct: 1,
    explanation: { correct: 'Según la ecuación, 2 moles de H₂ reaccionan con 1 mol de O₂ para producir 2 moles de H₂O. Como tenemos exactamente 2 moles de H₂ y 1 mol de O₂, se producen 2 moles de H₂O (36 gramos). No hay reactivo limitante.', wrongs: ['Los coeficientes estequiométricos indican 2 moles de H₂O', 'Opción correcta', 'Solo se producen 2 moles según la relación 2:1:2', 'La relación es exacta: 2 H₂ + 1 O₂ → 2 H₂O'] }
  },
  {
    id: 'CN35', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
    context: `Una persona toca accidentalmente una superficie caliente y retira la mano inmediatamente, antes de sentir conscientemente el dolor.`,
    question: `Este movimiento de retirada es un reflejo que:`,
    options: ['Requiere procesamiento consciente en el cerebro', 'Es coordinado por la médula espinal sin intervención cerebral', 'Ocurre solo después de sentir dolor', 'Es voluntario y aprendido'],
    correct: 1,
    explanation: { correct: 'El arco reflejo es una respuesta rápida e involuntaria. Los receptores envían la señal a la médula espinal, que envía una señal motora directa para retirar la mano antes de que la señal llegue al cerebro para procesar la sensación de dolor.', wrongs: ['Es involuntario y no requiere procesamiento consciente', 'Opción correcta', 'El movimiento ocurre ANTES de sentir el dolor consciente', 'Es involuntario e innato, no aprendido'] }
  },
  {
    id: 'CN36', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
    context: `Un buceador se sumerge en el mar. A medida que desciende, siente presión en los oídos. A 10 metros de profundidad, la presión es el doble que en la superficie.`,
    question: `La presión que siente el buceador en los oídos aumenta con la profundidad porque:`,
    options: ['La temperatura del agua disminuye', 'El peso del agua sobre él aumenta con la profundidad', 'El oxígeno se vuelve más denso', 'Los peces generan ondas de presión'],
    correct: 1,
    explanation: { correct: 'La presión hidrostática aumenta con la profundidad porque el peso de la columna de agua sobre el buceador es mayor. Cada 10 metros de profundidad en agua añade aproximadamente 1 atmósfera de presión (101.325 kPa).', wrongs: ['La temperatura afecta la densidad pero no es la causa principal del aumento de presión', 'Opción correcta', 'La composición del aire no cambia con la profundidad', 'Los peces no generan presión relevante'] }
  },
  {
    id: 'CN37', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
    context: `En una olla con agua hirviendo, se observan burbujas que suben a la superficie y escapa vapor. Si se coloca una tapa fría sobre la olla, se forman gotitas de agua en su superficie.`,
    question: `La formación de gotitas en la tapa fría se debe al proceso de:`,
    options: ['Evaporación', 'Condensación', 'Sublimación', 'Fusión'],
    correct: 1,
    explanation: { correct: 'La condensación es el cambio de estado de gas a líquido. El vapor de agua caliente entra en contacto con la superficie fría de la tapa, pierde energía térmica y se convierte en gotitas de agua líquida.', wrongs: ['La evaporación es de líquido a gas, ocurre en la olla no en la tapa', 'Opción correcta', 'La sublimación es de sólido a gas directamente', 'La fusión es de sólido a líquido'] }
  },
  {
    id: 'CN38', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
    context: `Un biólogo encuentra un organismo desconocido: es unicelular, tiene núcleo definido (eucariota) y no tiene pared celular. Se mueve mediante pseudópodos y se alimenta por fagocitosis.`,
    question: `Este organismo probablemente pertenece al reino:`,
    options: ['Plantae', 'Animalia', 'Protista', 'Fungi'],
    correct: 2,
    explanation: { correct: 'Los protistas son eucariotas unicelulares (o simples pluricelulares sin tejidos) que no encajan en los otros reinos. Las amebas, que se mueven por pseudópodos y se alimentan por fagocitosis, son un ejemplo clásico del reino Protista.', wrongs: ['Plantae son pluricelulares con pared celular y fotosíntesis', 'Animalia son pluricelulares con tejidos', 'Opción correcta', 'Fungi tiene pared celular de quitina y son heterótrofos por absorción'] }
  },
  {
    id: 'CN39', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
    context: `Un trabajador de la construcción levanta un ladrillo de 2 kg desde el suelo hasta una altura de 1.5 metros usando una polea. Luego lo sostiene a esa altura mientras espera. (g = 10 m/s²).`,
    question: `El trabajo realizado por el trabajador al levantar el ladrillo es de:`,
    options: ['3 J', '20 J', '30 J', '0 J'],
    correct: 2,
    explanation: { correct: 'Trabajo = Fuerza × distancia = (m·g) × h = (2 × 10) × 1.5 = 20 × 1.5 = 30 J. Al sostenerlo sin desplazamiento, no se realiza trabajo adicional porque no hay movimiento.', wrongs: ['Calculaste 2 × 1.5 = 3, olvidando la gravedad', 'Calculaste m·g = 20 pero sin multiplicar por la altura', 'Opción correcta', 'Sí hay trabajo al levantar: fuerza × distancia'] }
  },
  {
    id: 'CN40', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
    context: `En una central nuclear, el uranio-235 absorbe un neutrón y se divide en núcleos más pequeños (como criptón-92 y bario-141), liberando 3 neutrones y una gran cantidad de energía.`,
    question: `Este proceso se conoce como:`,
    options: ['Fusión nuclear', 'Fisión nuclear', 'Radiactividad natural', 'Transmutación alquímica'],
    correct: 1,
    explanation: { correct: 'La fisión nuclear es la división de un núcleo pesado en núcleos más pequeños, liberando neutrones y energía. Los neutrones liberados pueden provocar más fisiones, generando una reacción en cadena controlada en los reactores nucleares.', wrongs: ['La fusión une núcleos ligeros, no divide pesados', 'Opción correcta', 'La radiactividad natural es espontánea, no inducida por neutrones', 'La transmutación es un concepto antiguo de cambiar elementos'] }
  },
  {
    id: 'CN41', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
    context: `Se coloca una rodaja de papa en un recipiente con agua destilada y otra rodaja idéntica en un recipiente con agua muy salada. Después de una hora, la papa en agua destilada está firme y la de agua salada está blanda y arrugada.`,
    question: `El cambio en la papa sumergida en agua salada se debe al fenómeno de:`,
    options: ['Difusión simple', 'Ósmosis: el agua salió de las células de la papa hacia el medio hipertónico', 'Transporte activo', 'Fagocitosis'],
    correct: 1,
    explanation: { correct: 'La ósmosis es el movimiento de agua a través de una membrana semipermeable desde una zona de menor concentración de solutos (hipotónica) a una de mayor concentración (hipertónica). El agua salada es hipertónica respecto al interior de las células de la papa, por lo que el agua sale de las células y la papa se arruga.', wrongs: ['La difusión simple mueve solutos, no agua', 'Opción correcta', 'El transporte activo requiere energía y mueve solutos contra gradiente', 'La fagocitosis es para partículas grandes'] }
  },
  {
    id: 'CN42', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
    context: `Al colocar una cuchara metálica en una taza de café caliente, después de un minuto el extremo de la cuchara que está fuera del café también se calienta.`,
    question: `La transferencia de calor a lo largo de la cuchara ocurre principalmente por:`,
    options: ['Conducción térmica', 'Convección', 'Radiación', 'Evaporación'],
    correct: 0,
    explanation: { correct: 'La conducción es la transferencia de calor a través de un material sólido sin movimiento de materia. Los metales son buenos conductores térmicos porque los electrones libres transfieren energía cinética entre átomos vecinos.', wrongs: ['La convección ocurre en fluidos (líquidos y gases)', 'La radiación es mediante ondas electromagnéticas', 'La evaporación es un cambio de fase, no un mecanismo de conducción en sólidos'] }
  },
  {
    id: 'CN43', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
    context: `En la tabla periódica, el flúor (F, Z=9) está en el período 2 y grupo 17. El cloro (Cl, Z=17) está en el período 3 y grupo 17. Ambos reaccionan violentamente con metales alcalinos.`,
    question: `El cloro es menos reactivo que el flúor debido a que:`,
    options: ['Tiene menos protones', 'Su radio atómico es mayor y atrae electrones con menos fuerza', 'Tiene mayor masa atómica', 'Está en el mismo grupo que el flúor'],
    correct: 1,
    explanation: { correct: 'Al bajar en un grupo, el radio atómico aumenta porque hay más capas electrónicas. Esto hace que la atracción del núcleo sobre los electrones externos sea menor (menor electronegatividad) y, por tanto, la reactividad de los halógenos disminuye al descender en el grupo.', wrongs: ['El Cl tiene más protones que el F', 'Opción correcta', 'La masa atómica no determina la reactividad directa', 'Eso explica la similitud química, no la diferencia de reactividad'] }
  },
  {
    id: 'CN44', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
    context: `En un bosque tropical, se identifican los siguientes organismos: orugas que comen hojas, aves que comen orugas y serpientes que cazan aves. Todos los organismos mueren y son descompuestos por hongos y bacterias.`,
    question: `En esta cadena trófica, las aves ocupan el nivel de:`,
    options: ['Productores', 'Consumidores primarios', 'Consumidores secundarios', 'Descomponedores'],
    correct: 2,
    explanation: { correct: 'Las aves que se alimentan de orugas (que comen plantas) son consumidores secundarios o carnívoros de primer orden. Las plantas son productores, las orugas consumidores primarios, las aves consumidores secundarios y las serpientes terciarios.', wrongs: ['Los productores son las plantas (fotosíntesis)', 'Los consumidores primarios son las orugas (herbívoros)', 'Opción correcta', 'Los descomponedores son hongos y bacterias'] }
  },
  {
    id: 'CN45', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
    context: `Un electricista necesita instalar un bombillo en un pasillo largo. Tiene dos opciones: conectar el bombillo a un toma corriente cercano con un cable largo de cobre, o instalar un nuevo toma corriente cerca del bombillo.`,
    question: `Si usa un cable muy largo y delgado para conectar el bombillo, es probable que el bombillo ilumine menos porque:`,
    options: ['La corriente alterna se vuelve directa', 'El cable largo tiene mayor resistencia que reduce la corriente', 'El voltaje de la casa disminuye automáticamente', 'El cable absorbe la luz'],
    correct: 1,
    explanation: { correct: 'La resistencia de un cable es directamente proporcional a su longitud e inversamente proporcional a su área transversal (R = ρL/A). Un cable más largo tiene mayor resistencia, lo que reduce la corriente que llega al bombillo según la ley de Ohm (I = V/R).', wrongs: ['La corriente sigue siendo alterna', 'Opción correcta', 'El voltaje de la casa es constante (110 V en Colombia)', 'El cable no absorbe la luz'] }
  },
  {
    id: 'CN46', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
    context: `Un globo inflado con helio se eleva en la atmósfera. A medida que asciende, la presión atmosférica disminuye y el globo se expande hasta que finalmente explota a gran altitud.`,
    question: `La expansión del globo al ascender se explica por la ley de:`,
    options: ['Charles (volumen proporcional a temperatura)', 'Boyle (volumen inversamente proporcional a presión a temperatura constante)', 'Gay-Lussac (presión proporcional a temperatura)', 'Avogadro (volumen proporcional a moles)'],
    correct: 1,
    explanation: { correct: 'La ley de Boyle establece que, a temperatura constante, la presión y el volumen de un gas son inversamente proporcionales (P₁V₁ = P₂V₂). Al ascender, la presión externa disminuye y el volumen del helio aumenta. Si la expansión es excesiva, el globo revienta.', wrongs: ['Charles relaciona volumen y temperatura, pero la temperatura también cambia con la altitud', 'Opción correcta', 'Gay-Lussac relaciona presión y temperatura a volumen constante', 'Avogadro relaciona volumen con cantidad de sustancia'] }
  },
  {
    id: 'CN47', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
    context: `Un geólogo encuentra en una montaña una roca que contiene fósiles marinos. Cerca de allí, encuentra otra roca de aspecto cristalino sin fósiles que parece haber sido formada por enfriamiento de magma.`,
    question: `La roca con fósiles marinos es de tipo:`,
    options: ['Ígnea (formada por magma)', 'Metamórfica (transformada por presión y calor)', 'Sedimentaria (formada por acumulación de sedimentos)', 'Volcánica (expulsada por un volcán)'],
    correct: 2,
    explanation: { correct: 'Las rocas sedimentarias se forman por la acumulación y compactación de sedimentos, que pueden incluir restos de organismos (fósiles). Las rocas ígneas se forman por enfriamiento de magma y generalmente no contienen fósiles porque el calor los destruye.', wrongs: ['Las rocas ígneas no preservan fósiles por el calor del magma', 'Las rocas metamórficas pueden tener fósiles raramente, pero no es su origen', 'Opción correcta', 'Las rocas volcánicas son ígneas extrusivas, no preservan fósiles'] }
  },
  {
    id: 'CN48', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
    context: `La especie humana tiene 23 pares de cromosomas (46 en total) en sus células somáticas. Los gametos (óvulos y espermatozoides) tienen la mitad de cromosomas.`,
    question: `Los gametos humanos tienen 23 cromosomas porque se forman mediante:`,
    options: ['Mitosis, que duplica el número de cromosomas', 'Meiosis, que reduce el número de cromosomas a la mitad', 'Fisión binaria, que divide la célula en dos', 'Gemación, que produce células hijas más pequeñas'],
    correct: 1,
    explanation: { correct: 'La meiosis es un tipo de división celular que produce cuatro células hijas con la mitad del número de cromosomas (n). En humanos, esto produce gametos con 23 cromosomas. Cuando el óvulo (n) y el espermatozoide (n) se fusionan, restauran el número diploide (2n = 46).', wrongs: ['La mitosis produce células hijas idénticas con 46 cromosomas', 'Opción correcta', 'La fisión binaria es típica de bacterias, no de células humanas', 'La gemación es un tipo de reproducción asexual'] }
  },
  {
    id: 'CN49', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
    context: `En un concierto al aire libre, una persona que está lejos del escenario escucha el sonido de la guitarra unos segundos después de ver al músico tocar las cuerdas.`,
    question: `El retraso entre lo que se ve y lo que se escucha ocurre porque:`,
    options: ['La luz viaja más lenta que el sonido', 'El sonido viaja más lento que la luz (340 m/s vs 300,000 km/s)', 'Los ojos procesan más rápido que los oídos', 'La distancia afecta más a la luz que al sonido'],
    correct: 1,
    explanation: { correct: 'La velocidad del sonido en el aire es aproximadamente 340 m/s, mientras que la luz viaja a 300,000 km/s. Por eso vemos casi instantáneamente el evento, pero el sonido tarda en llegar. Por cada 3 segundos de retraso, la distancia es aproximadamente 1 km.', wrongs: ['La luz es muchísimo más rápida que el sonido', 'Opción correcta', 'El retraso es físico (velocidad de propagación), no perceptual', 'La luz es tan rápida que el retraso es imperceptible'] }
  },
  {
    id: 'CN50', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
    context: `Un clavo de hierro (Fe) se deja al aire libre y con el tiempo se cubre de una capa marrón-rojiza de óxido de hierro (Fe₂O₃). El hierro reacciona con el oxígeno del aire en presencia de agua.`,
    question: `En el proceso de oxidación del hierro, el Fe:`,
    options: ['Gana electrones (se reduce)', 'Pierde electrones (se oxida)', 'No cambia su estado de oxidación', 'Se convierte en hierro puro'],
    correct: 1,
    explanation: { correct: 'La oxidación es la pérdida de electrones. El hierro metálico (Fe⁰) pierde electrones y se convierte en Fe³⁺ en el óxido férrico. El oxígeno gana esos electrones (se reduce). La oxidación del hierro es un proceso electroquímico que se acelera en presencia de agua y sales.', wrongs: ['Ganar electrones es reducción, lo opuesto a la oxidación', 'Opción correcta', 'El hierro pasa de Fe⁰ a Fe³⁺, claramente cambia', 'El hierro se transforma en óxido, no en hierro puro'] }
  },
  {
    id: 'CN51', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
    context: `Una persona con fiebre (39°C) tiene las enzimas de su cuerpo funcionando más rápido de lo normal. Sin embargo, si la fiebre supera los 42°C, las enzimas comienzan a dejar de funcionar y el organismo puede sufrir daño grave.`,
    question: `Las enzimas dejan de funcionar a temperaturas muy altas porque:`,
    options: ['Se congelan', 'Se desnaturalizan: pierden su estructura tridimensional y su función', 'Se multiplican excesivamente', 'Consumen todo el sustrato disponible'],
    correct: 1,
    explanation: { correct: 'Las enzimas son proteínas con una estructura tridimensional específica (sitio activo). El calor excesivo rompe los enlaces débiles (puentes de hidrógeno, interacciones hidrofóbicas) que mantienen esa estructura, desnaturalizando la enzima y haciéndola perder su función catalítica. Generalmente esto es irreversible.', wrongs: ['La fiebre alta calienta, no enfría', 'Opción correcta', 'El calor no aumenta la cantidad de enzimas', 'El sustrato no se agota por la fiebre; las enzimas se dañan estructuralmente'] }
  },
  {
    id: 'CN52', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
    context: `Dos patinadores sobre hielo, uno de 80 kg y otro de 40 kg, están inicialmente en reposo frente a frente. Se empujan mutuamente y se separan.`,
    question: `Después del empujón, la velocidad del patinador de 40 kg es el doble que la del de 80 kg porque se conserva:`,
    options: ['La energía cinética total', 'El momento lineal (cantidad de movimiento)', 'La energía potencial', 'La fuerza aplicada'],
    correct: 1,
    explanation: { correct: 'La conservación del momento lineal (p = mv) establece que el momento total antes y después es el mismo. Antes: p = 0. Después: m₁v₁ + m₂v₂ = 0 → 80·v₁ + 40·v₂ = 0 → 40·v₂ = -80·v₁ → v₂ = -2v₁. Las velocidades tienen direcciones opuestas y la masa menor tiene el doble de velocidad.', wrongs: ['La energía cinética no se conserva en choques inelásticos, pero el momento sí', 'Opción correcta', 'La energía potencial no cambia (no hay cambio de altura)', 'La fuerza que cada uno aplica al otro es igual (3ra ley de Newton)'] }
  },
  {
    id: 'CN53', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
    context: `En un recipiente cerrado se introduce N₂O₄ (gas incoloro) que se descompone parcialmente en NO₂ (gas pardo-rojizo), estableciéndose el equilibrio: N₂O₄(g) ⇌ 2NO₂(g). Al calentar el recipiente, el color se intensifica.`,
    question: `La intensificación del color al calentar indica que la reacción directa (formación de NO₂) es:`,
    options: ['Exotérmica (libera calor)', 'Endotérmica (absorbe calor)', 'Catalizada por el calor', 'Independiente de la temperatura'],
    correct: 1,
    explanation: { correct: 'Si al aumentar la temperatura (calentar) el equilibrio se desplaza hacia la formación de más NO₂ (color pardo), según el principio de Le Chatelier, la reacción directa debe ser endotérmica (absorbe calor). El sistema se desplaza en la dirección que absorbe el calor añadido, contrarrestando el cambio.', wrongs: ['Si fuera exotérmica, al calentar se desplazaría hacia reactivos', 'Opción correcta', 'El calor no cataliza, desplaza el equilibrio', 'El principio de Le Chatelier muestra que la temperatura sí afecta el equilibrio'] }
  },
  {
    id: 'CN54', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
    context: `En la región Caribe colombiana, la temporada seca va de diciembre a abril y la temporada de lluvias de mayo a noviembre. Los vientos alisios del noreste traen humedad desde el mar Caribe.`,
    question: `Las lluvias en la región Caribe colombiana se producen principalmente por:`,
    options: ['El derretimiento de los glaciares', 'La evaporación del agua del mar Caribe y los vientos que transportan la humedad', 'La contaminación atmosférica', 'Los terremotos submarinos'],
    correct: 1,
    explanation: { correct: 'Las lluvias en el Caribe colombiano se deben a la evaporación del agua del mar Caribe y el Océano Atlántico. Los vientos alisios transportan el aire húmedo hacia el continente, donde asciende, se enfría y condensa formando nubes y precipitaciones. La Zona de Convergencia Intertropical (ZCIT) también influye en los períodos de lluvia.', wrongs: ['Los glaciares no derriten en el Caribe', 'Opción correcta', 'La contaminación puede influir pero no es la causa principal', 'Los terremotos no producen lluvias'] }
  },
  {
    id: 'CN55', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
    context: `En el siglo XVIII, los marineros que pasaban largos meses en el mar sin frutas ni verduras frescas desarrollaban escorbuto, enfermedad que causa sangrado de encías, debilidad y mala cicatrización.`,
    question: `El escorbuto se debe a la deficiencia de:`,
    options: ['Vitamina A', 'Vitamina C (ácido ascórbico)', 'Vitamina D', 'Hierro'],
    correct: 1,
    explanation: { correct: 'El escorbuto es causado por deficiencia severa de vitamina C (ácido ascórbico), necesaria para la síntesis de colágeno. Los marineros carecían de frutas cítricas en sus largos viajes. Los exploradores británicos descubrieron que el jugo de limón prevenía la enfermedad.', wrongs: ['La deficiencia de vitamina A causa ceguera nocturna', 'Opción correcta', 'La deficiencia de vitamina D causa raquitismo (deformidades óseas)', 'La deficiencia de hierro causa anemia'] }
  },
  {
    id: 'CN56', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
    context: `Un médico usa rayos X para tomar una radiografía del brazo fracturado de un paciente. Los rayos X atraviesan los tejidos blandos pero son absorbidos por los huesos más densos.`,
    question: `Los rayos X se diferencian de la luz visible en que tienen:`,
    options: ['Menor velocidad en el vacío', 'Mayor frecuencia y menor longitud de onda', 'Mayor longitud de onda', 'Son ondas mecánicas, no electromagnéticas'],
    correct: 1,
    explanation: { correct: 'Los rayos X son ondas electromagnéticas como la luz visible, pero con mucha mayor frecuencia (y por tanto menor longitud de onda). En el espectro EM, los rayos X están entre los ultravioleta y los rayos gamma. Su alta energía les permite penetrar materia.', wrongs: ['Todas las ondas EM viajan a la misma velocidad en el vacío (c)', 'Opción correcta', 'Los rayos X tienen menor longitud de onda, no mayor', 'Son electromagnéticas, no necesitan medio material para propagarse'] }
  },
  {
    id: 'CN57', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
    context: `El gas natural que se usa en las cocinas domésticas es principalmente metano (CH₄). Cuando el metano se quema en presencia de oxígeno, produce CO₂ y H₂O, liberando energía para cocinar.`,
    question: `La combustión del metano es un ejemplo de reacción:`,
    options: ['De síntesis', 'De descomposición', 'De combustión (oxidación completa)', 'De neutralización'],
    correct: 2,
    explanation: { correct: 'La combustión del metano: CH₄ + 2O₂ → CO₂ + 2H₂O + energía. Es una reacción de oxidación rápida que produce dióxido de carbono, agua y calor. Se llama combustión completa cuando hay suficiente oxígeno para oxidar completamente el carbono e hidrógeno.', wrongs: ['La síntesis combina reactivos simples en un producto más complejo, no es el caso', 'La descomposición separa un compuesto en componentes más simples', 'Opción correcta', 'La neutralización es entre un ácido y una base produciendo sal y agua'] }
  },
  {
    id: 'CN58', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
    context: `Colombia es considerada el segundo país más biodiverso del mundo. En la selva amazónica colombiana, un solo árbol puede albergar más especies de hormigas que todas las Islas Británicas juntas.`,
    question: `La alta biodiversidad de Colombia se debe principalmente a:`,
    options: ['Su gran extensión territorial', 'Su ubicación ecuatorial y su variedad de ecosistemas por los pisos térmicos', 'Su baja población humana', 'Su aislamiento geográfico total'],
    correct: 1,
    explanation: { correct: 'Colombia tiene alta biodiversidad por su ubicación en la zona ecuatorial (alta radiación solar durante todo el año), su relieve diverso con tres cordilleras que crean múltiples pisos térmicos, y la variedad de ecosistemas: selvas, páramos, sabanas, manglares, arrecifes de coral y más.', wrongs: ['Colombia tiene el 0.7% de la superficie terrestre, no es especialmente extensa', 'Opción correcta', 'La población humana es alta, no baja', 'Colombia tiene conexión con Centroamérica, no está aislada'] }
  },
  {
    id: 'CN59', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
    context: `Un cubo de hielo flota en un vaso con agua. Si se observa con atención, aproximadamente el 90% del hielo está sumergido y solo el 10% sobresale del agua.`,
    question: `El hielo flota en el agua porque:`,
    options: ['El hielo es más denso que el agua líquida', 'El hielo es menos denso que el agua líquida (el agua se expande al congelarse)', 'La tensión superficial del agua sostiene el hielo', 'El aire atrapado en el hielo lo hace flotar'],
    correct: 1,
    explanation: { correct: 'El agua es una de las pocas sustancias cuyo sólido es menos denso que el líquido. Al congelarse, las moléculas de agua forman una estructura cristalina hexagonal que ocupa más volumen, disminuyendo la densidad (0.92 g/cm³ vs 1.0 g/cm³ del agua líquida). Por eso flota, y solo el 10% sobresale.', wrongs: ['El hielo es menos denso, no más denso, que el agua líquida', 'Opción correcta', 'La tensión superficial ayuda a objetos pequeños, no es la razón principal', 'El hielo puro no tiene aire atrapado significativo'] }
  },
  {
    id: 'CN60', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
    context: `Una enfermera debe preparar una solución de glucosa al 5% para un paciente. Disuelve 5 gramos de glucosa en agua destilada y completa hasta un volumen total de 100 mL de solución.`,
    question: `La solución preparada es al 5% (m/v). Si necesita 500 mL de esta solución, ¿cuántos gramos de glucosa debe usar?`,
    options: ['5 g', '10 g', '25 g', '50 g'],
    correct: 2,
    explanation: { correct: 'Una solución al 5% m/v significa 5 g de soluto por cada 100 mL de solución. Para 500 mL: (5 g / 100 mL) × 500 mL = 5 × 5 = 25 gramos de glucosa.', wrongs: ['Esa es la cantidad para 100 mL', 'Esa sería la cantidad para 200 mL', 'Opción correcta', 'Esa sería la cantidad para 1 L (1,000 mL)'] }
  },
  {
    id: 'CN61', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
    context: `En un laboratorio de biotecnología, se inserta el gen de la insulina humana en el ADN de una bacteria. La bacteria, al reproducirse, produce insulina humana que puede ser recolectada y usada para tratar la diabetes.`,
    question: `Esta técnica se conoce como:`,
    options: ['Clonación reproductiva', 'ADN recombinante y tecnología de ingeniería genética', 'Terapia génica en humanos', 'Mutagénesis inducida'],
    correct: 1,
    explanation: { correct: 'La tecnología de ADN recombinante consiste en insertar un gen de un organismo en el ADN de otro (generalmente una bacteria) para que produzca la proteína deseada. Las bacterias modificadas genéticamente se cultivan en grandes fermentadores y producen insulina humana a escala industrial.', wrongs: ['La clonación produce copias genéticamente idénticas de un organismo', 'Opción correcta', 'La terapia génica introduce genes en células humanas para tratar enfermedades', 'La mutagénesis induce mutaciones aleatorias, no inserta genes específicos'] }
  },

  // ===== INGLÉS - BLOQUE 4 (EN31-EN60) =====
  {
    id: 'EN31', area: 'ingles', areaName: 'Inglés', difficulty: 'facil',
    context: `Read the notice: "The train to Boston will depart from Platform 3 at 2:15 PM. Passengers with tickets should be at the platform 10 minutes before departure."`,
    question: `What time should passengers be at the platform?`,
    options: ['2:15 PM', '2:05 PM', '2:25 PM', '3:00 PM'],
    correct: 1,
    explanation: { correct: 'The notice says passengers should be at the platform "10 minutes before departure." Since departure is at 2:15 PM, 10 minutes before is 2:05 PM.', wrongs: ['This is the departure time, not the platform arrival time', 'Opción correcta', 'This is after the train departs', 'No information suggests 3:00 PM'] }
  },
  {
    id: 'EN32', area: 'ingles', areaName: 'Inglés', difficulty: 'media',
    context: `Read the text: "The Great Barrier Reef in Australia is the largest coral reef system in the world. It extends over 2,300 kilometers and is home to thousands of marine species. However, rising ocean temperatures due to climate change have caused coral bleaching, which threatens the reef's survival. Scientists warn that without significant action, up to 90% of coral reefs could disappear by 2050."`,
    question: `What is the main threat to the Great Barrier Reef mentioned in the text?`,
    options: ['Overfishing by commercial boats', 'Rising ocean temperatures causing coral bleaching', 'Tourists damaging the coral', 'Pollution from nearby cities'],
    correct: 1,
    explanation: { correct: 'The text states that "rising ocean temperatures due to climate change have caused coral bleaching, which threatens the reef\'s survival." This is identified as the primary danger.', wrongs: ['Overfishing is not mentioned in the text', 'Opción correcta', 'Tourists are not mentioned as a threat', 'City pollution is not discussed'] }
  },
  {
    id: 'EN33', area: 'ingles', areaName: 'Inglés', difficulty: 'dificil',
    context: `Read the email: "Dear Mr. Harrison, I am writing to express my concern about the proposed construction of a shopping mall in our neighborhood. While I understand the economic benefits, the increased traffic and noise would significantly affect residents' quality of life. Moreover, the construction would require cutting down over 200 mature trees. I urge the council to consider alternative locations. Sincerely, Margaret Thompson."`,
    question: `What is the main purpose of Margaret Thompson's email?`,
    options: ['To apply for a job at the new mall', 'To express opposition to a construction project', 'To ask for a construction permit', 'To report a traffic problem'],
    correct: 1,
    explanation: { correct: 'Margaret states she is "writing to express my concern about the proposed construction of a shopping mall" and lists negative effects, urging the council to consider alternatives. Her purpose is to oppose the project.', wrongs: ['She is a resident opposing construction, not applying for work', 'Opción correcta', 'She is expressing concern as a resident, not requesting a permit', 'Traffic is mentioned as a future concern, not a current problem to report'] }
  },
  {
    id: 'EN34', area: 'ingles', areaName: 'Inglés', difficulty: 'facil',
    context: `Notice in a hotel room: "Please hang towels you wish to reuse on the rack. Towels left on the floor will be replaced. Turn off lights and air conditioning when leaving the room to help us save energy."`,
    question: `What should guests do if they want to reuse their towels?`,
    options: ['Leave them on the floor', 'Hang them on the rack', 'Take them to the front desk', 'Put them in the laundry basket'],
    correct: 1,
    explanation: { correct: 'The notice says "Please hang towels you wish to reuse on the rack." This is the signal to hotel staff that the towel should not be replaced.', wrongs: ['Towels on the floor will be replaced, not reused', 'Opción correcta', 'The front desk is not mentioned for towels', 'A laundry basket is not mentioned'] }
  },
  {
    id: 'EN35', area: 'ingles', areaName: 'Inglés', difficulty: 'media',
    context: `Read the text: "Marie Curie was a Polish-born physicist and chemist. She conducted pioneering research on radioactivity, a term she herself coined. She was the first woman to win a Nobel Prize, the first person to win a Nobel Prize twice, and the only person to win a Nobel Prize in two different scientific fields: Physics (1903) and Chemistry (1911). She died in 1934 from aplastic anemia, likely caused by prolonged exposure to radiation."`,
    question: `Why is Marie Curie considered unique among Nobel Prize winners?`,
    options: ['She was the youngest Nobel laureate', 'She won Nobel Prizes in two different scientific fields', 'She discovered radiation', 'She won the Nobel Prize three times'],
    correct: 1,
    explanation: { correct: 'The text states she is "the only person to win a Nobel Prize in two different scientific fields: Physics and Chemistry." This makes her unique among all Nobel laureates.', wrongs: ['Age is not mentioned', 'Opción correcta', 'She did research on radioactivity but did not discover it', 'She won twice, not three times'] }
  },
  {
    id: 'EN36', area: 'ingles', areaName: 'Inglés', difficulty: 'dificil',
    context: `Read the text: "The term 'urban heat island' describes the phenomenon where urban areas are significantly warmer than their surrounding rural areas. This occurs because buildings, roads, and other infrastructure absorb and re-emit the sun's heat more than natural landscapes. Cities can be 1-7 degrees Fahrenheit warmer than nearby areas. Strategies to reduce this effect include planting more trees, creating green roofs, and using reflective building materials."`,
    question: `What causes urban areas to be warmer than rural areas according to the text?`,
    options: ['Factories produce more heat in cities', 'Buildings and roads absorb and re-emit more heat than natural surfaces', 'Cities are closer to the equator', 'There is more sunlight in urban areas'],
    correct: 1,
    explanation: { correct: 'The text states that buildings, roads, and infrastructure "absorb and re-emit the sun\'s heat more than natural landscapes," causing cities to be warmer than rural surroundings.', wrongs: ['Factories are not mentioned as the main cause', 'Opción correcta', 'Distance to equator is not discussed', 'Sunlight levels are not compared between urban and rural areas'] }
  },
  {
    id: 'EN37', area: 'ingles', areaName: 'Inglés', difficulty: 'facil',
    context: `Read the advertisement: "FreshFit smoothies: Made with 100% real fruit. No added sugar. Available in three flavors: Mango Tango, Berry Blast, and Green Power. Buy one, get one free every Tuesday!"`,
    question: `What special offer does FreshFit have on Tuesdays?`,
    options: ['50% off all smoothies', 'Buy one smoothie, get another free', 'Free delivery', 'A free smoothie with any purchase'],
    correct: 1,
    explanation: { correct: 'The ad says "Buy one, get one free every Tuesday!" This is a BOGO (buy one, get one) promotion.', wrongs: ['The offer is buy-one-get-one, not 50% off', 'Opción correcta', 'Delivery is not mentioned', 'The condition is buy one, not any purchase'] }
  },
  {
    id: 'EN38', area: 'ingles', areaName: 'Inglés', difficulty: 'media',
    context: `Read the blog post: "Tokyo is a city of contrasts. You can visit ancient temples in Asakusa in the morning and explore the high-tech electronics district of Akihabara in the afternoon. The city's public transportation system is incredibly efficient; trains arrive every few minutes and are almost always on time. However, during rush hour, some trains can be extremely crowded, with staff sometimes helping to push passengers into cars."`,
    question: `What does the author say about Tokyo's public transportation?`,
    options: ['It is unreliable and frequently delayed', 'It is efficient with frequent and punctual trains, though crowded at rush hour', 'It is too expensive for most residents', 'It only operates during the day'],
    correct: 1,
    explanation: { correct: 'The blog describes the system as "incredibly efficient" with trains arriving every few minutes and "almost always on time," while noting that rush hour can be very crowded.', wrongs: ['The text says trains are "almost always on time"', 'Opción correcta', 'Cost is not mentioned', 'The text implies trains run frequently throughout the day'] }
  },
  {
    id: 'EN39', area: 'ingles', areaName: 'Inglés', difficulty: 'dificil',
    context: `Read the story: "Elena had always dreamed of becoming a marine biologist. Growing up in a landlocked country, she had never seen the ocean, but she watched documentaries obsessively. When she finally moved to Australia for university, her first visit to the beach was overwhelming. 'I cried,' she later said. 'Not because I was sad, but because I had finally arrived where I belonged.' She is now a leading expert in coral reef conservation."`,
    question: `Why did Elena cry during her first visit to the beach?`,
    options: ['She was homesick for her landlocked country', 'She felt overwhelmed because the ocean was different from what she expected', 'She felt she had finally found where she belonged', 'She was afraid of the water'],
    correct: 2,
    explanation: { correct: 'Elena said she cried "not because I was sad, but because I had finally arrived where I belonged." The emotion came from realizing her dream and finding her true place.', wrongs: ['She specifically says she did not cry from sadness', 'She says it was not because of being overwhelmed', 'Opción correcta', 'Fear is not mentioned'] }
  },
  {
    id: 'EN40', area: 'ingles', areaName: 'Inglés', difficulty: 'facil',
    context: `Sign on a door: "Staff Only. Authorized personnel beyond this point. Visitors must report to the front desk for a visitor pass."`,
    question: `What should visitors do according to the sign?`,
    options: ['Enter without permission', 'Go to the front desk for a visitor pass', 'Wait outside the building', 'Call for an appointment'],
    correct: 1,
    explanation: { correct: 'The sign says "Visitors must report to the front desk for a visitor pass." This is the required procedure before proceeding.', wrongs: ['The sign restricts access for unauthorized people', 'Opción correcta', 'Waiting outside is not mentioned', 'Calling is not mentioned'] }
  },
  {
    id: 'EN41', area: 'ingles', areaName: 'Inglés', difficulty: 'media',
    context: `Read the article: "Finland consistently ranks among the happiest countries in the world. Researchers attribute this to several factors: strong social support systems, low corruption levels, freedom to make life choices, and a strong connection to nature. Finnish people also benefit from a comprehensive education system that emphasizes creativity and critical thinking over standardized testing."`,
    question: `According to the article, what contributes to happiness in Finland?`,
    options: ['High salaries and wealth', 'Social support, low corruption, freedom, and connection to nature', 'Warm weather year-round', 'Competitive standardized testing'],
    correct: 1,
    explanation: { correct: 'The article lists "strong social support systems, low corruption levels, freedom to make life choices, and a strong connection to nature" as factors behind Finland\'s happiness rankings.', wrongs: ['Wealth is not specifically mentioned', 'Opción correcta', 'Finland has cold winters, not warm weather', 'The education system emphasizes creativity over standardized testing'] }
  },
  {
    id: 'EN42', area: 'ingles', areaName: 'Inglés', difficulty: 'dificil',
    context: `Read the text: "In the field of artificial intelligence, the 'Turing test' was proposed by Alan Turing in 1950 to determine whether a machine can exhibit intelligent behavior indistinguishable from that of a human. If a human evaluator cannot reliably tell whether they are conversing with a machine or another human, the machine passes the test. Despite significant advances in AI, no program has definitively passed the Turing test in its original form, though some systems have come close."`,
    question: `What does passing the Turing test demonstrate about a machine?`,
    options: ['It can calculate faster than a human', 'Its behavior is indistinguishable from human behavior in conversation', 'It can feel emotions like a human', 'It can learn any task without programming'],
    correct: 1,
    explanation: { correct: 'The text says the test determines if a machine "can exhibit intelligent behavior indistinguishable from that of a human" in conversation. A human evaluator cannot reliably tell the difference between machine and human.', wrongs: ['Calculation speed is not part of the Turing test', 'Opción correcta', 'The test is about behavior, not emotions', 'The test is about conversation, not all tasks'] }
  },
  {
    id: 'EN43', area: 'ingles', areaName: 'Inglés', difficulty: 'facil',
    context: `Read the weather report: "Today will be partly cloudy with a high of 75 degrees Fahrenheit. There is a 30% chance of rain in the afternoon, so it might be a good idea to bring an umbrella just in case. Winds will be light from the southwest at 5 to 10 miles per hour."`,
    question: `What does the report suggest about the afternoon?`,
    options: ['There will definitely be a thunderstorm', 'There is a possibility of rain, so bring an umbrella', 'The weather will be sunny and clear', 'It will be very windy'],
    correct: 1,
    explanation: { correct: 'The report says there is "a 30% chance of rain in the afternoon" and suggests it "might be a good idea to bring an umbrella just in case," indicating possible but not certain rain.', wrongs: ['Only a 30% chance, not definite', 'Opción correcta', 'Partly cloudy is predicted', 'Winds are described as light (5-10 mph)'] }
  },
  {
    id: 'EN44', area: 'ingles', areaName: 'Inglés', difficulty: 'media',
    context: `Read the email: "Hi Tom, Thanks for inviting me to your birthday dinner on Saturday. I'd love to come! However, I have a soccer game that ends at 6 PM at the sports center on Oak Street. Would it be possible to arrive around 7 PM instead of 6? Let me know if that works. Best, Alex"`,
    question: `Why does Alex want to arrive at 7 PM instead of 6 PM?`,
    options: ['He does not like the restaurant', 'His soccer game ends at 6 PM and he needs time to get there', 'He has to work late on Saturday', 'He wants to avoid the crowd'],
    correct: 1,
    explanation: { correct: 'Alex explains he has "a soccer game that ends at 6 PM" and asks if he can arrive at 7 PM instead, implying he needs time to travel from the sports center to the dinner location.', wrongs: ['He says he would "love to come," showing he wants to attend', 'Opción correcta', 'Work is not mentioned', 'Crowds are not mentioned'] }
  },
  {
    id: 'EN45', area: 'ingles', areaName: 'Inglés', difficulty: 'dificil',
    context: `Read the text: "The concept of 'cultural lag' was introduced by sociologist William F. Ogburn in 1922. It refers to the idea that material culture (technology, tools, infrastructure) evolves faster than non-material culture (beliefs, values, norms). For example, while social media technology has advanced rapidly, our understanding of its effects on privacy and mental health has not kept pace, creating a gap or 'lag' between technological capability and cultural adaptation."`,
    question: `What does the author illustrate with the social media example?`,
    options: ['That social media is harmful to mental health', 'That technology advances faster than society's ability to adapt to it', 'That privacy laws are already well-developed', 'That cultural values determine technological progress'],
    correct: 1,
    explanation: { correct: 'The text uses social media to show how "our understanding of its effects on privacy and mental health has not kept pace" with technology, illustrating the gap (cultural lag) between material and non-material culture.', wrongs: ['The example focuses on the gap, not on declaring harm', 'Opción correcta', 'The text says understanding has not kept pace, implying laws are also lagging', 'Cultural lag is about technology outpacing culture, not the reverse'] }
  },
  {
    id: 'EN46', area: 'ingles', areaName: 'Inglés', difficulty: 'facil',
    context: `Read the menu description: "The Sunrise Breakfast: Two eggs cooked any style, served with crispy bacon, toast, and your choice of hash browns or fresh fruit. Includes unlimited coffee or tea. $12.99. Available until 11 AM."`,
    question: `Until what time is the Sunrise Breakfast available?`,
    options: ['All day', 'Until 11 AM', 'Until noon', 'Until 2 PM'],
    correct: 1,
    explanation: { correct: 'The menu says "Available until 11 AM," indicating the breakfast special is only served in the morning hours.', wrongs: ['The description gives a specific cutoff time', 'Opción correcta', 'The description says 11 AM, not noon', 'The description says 11 AM, not 2 PM'] }
  },
  {
    id: 'EN47', area: 'ingles', areaName: 'Inglés', difficulty: 'media',
    context: `Read the article: "Electric vehicles (EVs) are becoming increasingly popular worldwide. While EVs produce zero emissions while driving, their environmental impact depends on how the electricity used to charge them is generated. In countries where electricity comes mainly from coal, EVs may actually have a larger carbon footprint than hybrid cars. However, as renewable energy sources expand, the environmental benefits of EVs will continue to improve."`,
    question: `What determines the environmental impact of an electric vehicle according to the text?`,
    options: ['The speed at which it is driven', 'How the electricity used to charge it is generated', 'The size of the battery', 'The brand of the vehicle'],
    correct: 1,
    explanation: { correct: 'The text says the environmental impact "depends on how the electricity used to charge them is generated." In coal-powered grids, EVs may have a larger carbon footprint than hybrids.', wrongs: ['Driving speed is not discussed', 'Opción correcta', 'Battery size is not mentioned as a factor', 'Car brand is not mentioned'] }
  },
  {
    id: 'EN48', area: 'ingles', areaName: 'Inglés', difficulty: 'dificil',
    context: `Read the text: "In 1961, psychologist Stanley Milgram conducted an experiment at Yale University to study obedience to authority. Participants were told to administer electric shocks to another person (who was actually an actor) when they answered questions incorrectly. Despite hearing cries of pain, 65% of participants continued to the highest voltage level when instructed by the experimenter. Milgram concluded that ordinary people are likely to follow orders from an authority figure, even when those orders conflict with their personal conscience."`,
    question: `What was Milgram's main conclusion from his experiment?`,
    options: ['People enjoy causing pain to others', 'Ordinary people tend to obey authority figures even against their conscience', 'Electric shocks are an effective teaching method', 'Participants did not believe the shocks were real'],
    correct: 1,
    explanation: { correct: 'Milgram concluded that "ordinary people are likely to follow orders from an authority figure, even when those orders conflict with their personal conscience," as demonstrated by 65% of participants continuing to the highest voltage.', wrongs: ['The experiment was about obedience, not enjoyment of causing pain', 'Opción correcta', 'The experiment was about obedience, not teaching effectiveness', 'Whether participants believed the shocks is not Milgram\'s conclusion'] }
  },
  {
    id: 'EN49', area: 'ingles', areaName: 'Inglés', difficulty: 'facil',
    context: `Read the instruction: "To use the printer, first press the power button on the top right corner. Wait for the green light to stop blinking. Open the paper tray and insert up to 50 sheets of A4 paper. Adjust the paper guides to fit the paper width. Select 'Print' from your computer."`,
    question: `What should you do after the green light stops blinking?`,
    options: ['Press the power button', 'Open the paper tray and insert paper', 'Turn off the printer', 'Select "Print" from your computer'],
    correct: 1,
    explanation: { correct: 'The instructions say to wait for the green light, then "Open the paper tray and insert up to 50 sheets of A4 paper" as the next step after the printer is ready.', wrongs: ['Pressing power is the first step, done before the light', 'Opción correcta', 'Turning off is not part of the printing process', 'Selecting "Print" comes after loading paper'] }
  },
  {
    id: 'EN50', area: 'ingles', areaName: 'Inglés', difficulty: 'media',
    context: `Read the text: "The Amazon rainforest produces approximately 20% of the world's oxygen. Often called 'the lungs of the Earth,' it plays a crucial role in regulating the global climate by absorbing carbon dioxide. However, deforestation for agriculture and cattle ranching threatens this ecosystem. In the last 50 years, about 17% of the Amazon has been destroyed."`,
    question: `Why is the Amazon rainforest called "the lungs of the Earth"?`,
    options: ['Because it contains many medicinal plants', 'Because it produces oxygen and absorbs carbon dioxide', 'Because it is the largest forest on Earth', 'Because it is home to many animals'],
    correct: 1,
    explanation: { correct: 'The text says it "produces approximately 20% of the world\'s oxygen" and "plays a crucial role in regulating the global climate by absorbing carbon dioxide," analogous to how lungs exchange gases in the body.', wrongs: ['Medicinal plants are not mentioned', 'Opción correcta', 'Size alone is not why it is called "lungs"', 'Biodiversity is not mentioned'] }
  },
  {
    id: 'EN51', area: 'ingles', areaName: 'Inglés', difficulty: 'dificil',
    context: `Read the text: "In behavioral economics, the 'sunk cost fallacy' describes the tendency to continue investing in something simply because we have already invested resources, even when continuing is irrational. For example, someone might continue waiting for a late bus because they have already waited 30 minutes, even though taking a taxi would get them there faster. The rational decision should be based on future costs and benefits, not past ones that cannot be recovered."`,
    question: `What mistake does the sunk cost fallacy cause people to make?`,
    options: ['They save money by not taking taxis', 'They continue with a bad decision because they have already invested in it', 'They always choose the cheapest option', 'They plan all their decisions in advance'],
    correct: 1,
    explanation: { correct: 'The sunk cost fallacy is the "tendency to continue investing in something simply because we have already invested resources," like waiting longer for a late bus because of time already spent waiting, even when switching would be better.', wrongs: ['The bus example shows people DO take taxis too late', 'Opción correcta', 'The fallacy is about past investment, not cost', 'The fallacy is about irrational continuation, not planning'] }
  },
  {
    id: 'EN52', area: 'ingles', areaName: 'Inglés', difficulty: 'facil',
    context: `Read the notice: "Community Garden Work Day - Saturday, April 22nd from 9 AM to 1 PM. Help us plant flowers, trim trees, and clean the walking paths. Tools and refreshments provided. No experience necessary. All ages welcome!"`,
    question: `What will be provided for volunteers?`,
    options: ['Lunch and drinks', 'Tools and refreshments', 'Gardening gloves and hats', 'Free plants to take home'],
    correct: 1,
    explanation: { correct: 'The notice says "Tools and refreshments provided." Volunteers do not need to bring their own equipment.', wrongs: ['Only refreshments are mentioned, not full lunch', 'Opción correcta', 'Gloves and hats are not specifically listed', 'Taking plants home is not mentioned'] }
  },
  {
    id: 'EN53', area: 'ingles', areaName: 'Inglés', difficulty: 'media',
    context: `Read the text: "The Eiffel Tower in Paris was built in 1889 for the World's Fair. At the time, many artists and intellectuals criticized it as an eyesore. Writer Guy de Maupassant famously ate lunch at the tower's restaurant every day because, as he said, it was the only place in Paris where he could not see the tower. Today, the Eiffel Tower is one of the most visited monuments in the world and is universally recognized as a symbol of France."`,
    question: `Why did Guy de Maupassant eat at the Eiffel Tower restaurant every day?`,
    options: ['He loved the food there', 'It was the only place in Paris where he could not see the tower', 'He was a fan of modern architecture', 'He worked in the tower'],
    correct: 1,
    explanation: { correct: 'The text says Maupassant ate there because "it was the only place in Paris where he could not see the tower," showing his dislike for the structure, which he considered an eyesore.', wrongs: ['The reason was about the view, not the food', 'Opción correcta', 'He criticized the tower, so he was not a fan', 'He was a writer, not an employee there'] }
  },
  {
    id: 'EN54', area: 'ingles', areaName: 'Inglés', difficulty: 'dificil',
    context: `Read the text: "Neuroplasticity refers to the brain's ability to reorganize itself by forming new neural connections throughout life. Previously, scientists believed the brain stopped changing after childhood. However, research has shown that the brain remains adaptable well into old age. Learning a new language, playing a musical instrument, or even recovering from a stroke can trigger neuroplastic changes. This discovery has revolutionized rehabilitation therapy for brain injury patients."`,
    question: `According to the text, what was the old belief about the brain that neuroplasticity disproved?`,
    options: ['That the brain could not recover from injury', 'That the brain stopped changing after childhood', 'That learning was possible at any age', 'That the brain had different regions'],
    correct: 1,
    explanation: { correct: 'The text says "Previously, scientists believed the brain stopped changing after childhood" until neuroplasticity research showed it remains adaptable throughout life, contradicting the earlier belief.', wrongs: ['Recovery from injury is discussed as a benefit of neuroplasticity', 'Opción correcta', 'Learning at any age is actually supported by neuroplasticity research', 'Brain regions are not discussed'] }
  },
  {
    id: 'EN55', area: 'ingles', areaName: 'Inglés', difficulty: 'facil',
    context: `Read the sign: "Yard Sale: Saturday & Sunday, 8 AM - 3 PM. 123 Maple Street. Furniture, books, toys, and clothing for sale. Everything must go! Cash only, please."`,
    question: `What form of payment does the yard sale accept?`,
    options: ['Credit cards', 'Cash only', 'Checks and cash', 'All major credit cards'],
    correct: 1,
    explanation: { correct: 'The sign says "Cash only, please." No other payment methods are accepted.', wrongs: ['Credit cards are not accepted', 'Opción correcta', 'Only cash is accepted, not checks', 'No credit cards are mentioned'] }
  },
  {
    id: 'EN56', area: 'ingles', areaName: 'Inglés', difficulty: 'media',
    context: `Read the article: "Denmark is investing in an innovative solution to food waste: a social supermarket. These stores sell surplus food from regular supermarkets at significantly reduced prices. The food is perfectly edible but near its expiration date or has damaged packaging. This approach helps low-income families access affordable groceries while reducing the environmental impact of food waste. Similar programs have since been launched in France and the United Kingdom."`,
    question: `What makes the food in social supermarkets cheaper?`,
    options: ['The food is expired and unsafe to eat', 'It is surplus food nearing its expiration date or with damaged packaging', 'The government subsidizes all the products', 'The stores use volunteers instead of paid staff'],
    correct: 1,
    explanation: { correct: 'The article says the food is "surplus food from regular supermarkets... perfectly edible but near its expiration date or has damaged packaging," which allows it to be sold at reduced prices.', wrongs: ['The article specifies the food is "perfectly edible"', 'Opción correcta', 'Subsidies are not mentioned', 'Staffing is not discussed'] }
  },
  {
    id: 'EN57', area: 'ingles', areaName: 'Inglés', difficulty: 'dificil',
    context: `Read the text: "In his book 'Outliers,' Malcolm Gladwell popularized the '10,000-hour rule,' suggesting that achieving world-class expertise in any field requires roughly 10,000 hours of deliberate practice. However, subsequent research has challenged this idea. Studies show that the number of hours needed varies greatly by domain: some musicians achieve elite status with fewer hours, while others practice more without reaching the top. Natural talent, quality of instruction, and starting age also play significant roles. The 10,000-hour figure was an average, not a guarantee."`,
    question: `What does the text suggest about the 10,000-hour rule?`,
    options: ['It is a proven requirement for success in any field', 'It is an average, and success depends on many other factors too', 'It applies only to musicians', 'It has been completely disproven and abandoned'],
    correct: 1,
    explanation: { correct: 'The text says "the 10,000-hour figure was an average, not a guarantee" and that "natural talent, quality of instruction, and starting age also play significant roles," showing the rule is not absolute.', wrongs: ['Studies have "challenged this idea" as an absolute requirement', 'Opción correcta', 'The rule was about many fields, though music was Gladwell\'s example', 'It has been challenged but not completely abandoned; it is an average'] }
  },
  {
    id: 'EN58', area: 'ingles', areaName: 'Inglés', difficulty: 'facil',
    context: `Read the text: "Penguins are flightless birds that live primarily in the Southern Hemisphere. They have adapted to life in water, with their wings evolving into flippers. Most penguins eat fish, squid, and krill. The Emperor Penguin is the largest species, standing nearly 4 feet tall."`,
    question: `What have penguin wings evolved into?`,
    options: ['Feathers', 'Flippers', 'Legs', 'Claws'],
    correct: 1,
    explanation: { correct: 'The text says "their wings evolving into flippers," which helps them swim efficiently underwater despite being flightless.', wrongs: ['Feathers are separate from wing structure', 'Opción correcta', 'Legs are separate body parts', 'Claws are not mentioned'] }
  },
  {
    id: 'EN59', area: 'ingles', areaName: 'Inglés', difficulty: 'media',
    context: `Read the announcement: "Due to a water main break on Main Street, all businesses in the downtown area will be closed until further notice. The water supply has been interrupted and road repairs are expected to take 48 hours. Residents in the affected area are advised to boil tap water before drinking it until testing confirms it is safe. We apologize for the inconvenience."`,
    question: `Why are downtown businesses closed?`,
    options: ['Because of a power outage', 'Because of a water main break that interrupted the water supply', 'Because of a holiday', 'Because of a scheduled renovation'],
    correct: 1,
    explanation: { correct: 'The announcement says "Due to a water main break on Main Street, all businesses in the downtown area will be closed until further notice." The water supply interruption makes business operations impossible.', wrongs: ['Power is not mentioned', 'Opción correcta', 'No holiday is mentioned', 'It is an emergency, not a scheduled event'] }
  },
  {
    id: 'EN60', area: 'ingles', areaName: 'Inglés', difficulty: 'dificil',
    context: `Read the text: "The placebo effect is a fascinating phenomenon in medicine. When patients believe they are receiving treatment, they often experience real improvements, even if the 'treatment' is actually a sugar pill or saline injection. This is not 'all in their heads' - brain imaging studies show that placebos can trigger real physiological changes, including the release of endorphins (natural painkillers) and dopamine. Interestingly, the placebo effect has been getting stronger over time in clinical trials, possibly because participants today have higher expectations from medical treatments."`,
    question: `According to the text, placebos can cause real physiological changes because:`,
    options: ['The sugar pills contain active ingredients', 'The brain releases endorphins and dopamine in response to the expectation of treatment', 'Patients pretend to feel better', 'The saline injection has medicinal properties'],
    correct: 1,
    explanation: { correct: 'The text explains that "brain imaging studies show that placebos can trigger real physiological changes, including the release of endorphins (natural painkillers) and dopamine" - these are real chemical changes caused by the expectation of treatment.', wrongs: ['Sugar pills are inert by definition', 'Opción correcta', 'Brain imaging shows real physiological changes, not pretense', 'The saline is described as a placebo, without medicinal properties'] }
  },

  // ===== PREGUNTAS CON TABLAS (NUEVO FORMATO) =====
  {
    id: 'MT101', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'media',
    table: {
      headers: ['Franja', 'Horario', 'Cantidad máxima', 'Precio por estudiante'],
      rows: [
        ['1', '8:00 a.m. - 10:00 a.m.', '40', '$12.000'],
        ['2', '10:00 a.m. - 12:00 p.m.', '35', '$15.000'],
        ['3', '1:00 p.m. - 3:00 p.m.', '30', '$18.000'],
        ['4', '3:00 p.m. - 5:00 p.m.', '25', '$20.000']
      ],
      caption: 'Franjas disponibles para visita al museo'
    },
    context: 'Un colegio quiere llevar a 100 estudiantes al museo. La tabla muestra las franjas disponibles, la cantidad máxima de estudiantes por franja y el precio por estudiante.',
    question: 'Si el colegio quiere minimizar el costo total y puede distribuir los estudiantes en diferentes franjas, ¿cuál es el costo mínimo posible?',
    options: ['$1.200.000', '$1.380.000', '$1.500.000', '$1.620.000'],
    correct: 1,
    explanation: {
      correct: 'Para minimizar costo, usar primero las franjas más baratas: Franja 1: 40×$12.000=$480.000, Franja 2: 35×$15.000=$525.000, Franja 3: 25×$18.000=$450.000. Total 100 estudiantes: $480.000+$525.000+$450.000=$1.380.000. No podemos usar solo la Franja 1 porque su capacidad es 40, y la Franja 2 tiene capacidad 35 (75 entre ambas), necesitamos 25 más de la Franja 3.',
      wrongs: ['Corresponde a 100 estudiantes todos en la franja más barata, pero no hay cupo', 'Opción correcta', 'Demasiado alto, no es la combinación óptima', 'Demasiado alto']
    }
  },
  {
    id: 'MT102', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'media',
    table: {
      headers: ['Año', 'Gasto en publicidad', 'Ganancia'],
      rows: [
        ['2020', '$5.000.000', '$30.000.000'],
        ['2021', '$8.000.000', '$45.000.000'],
        ['2022', '$12.000.000', '$60.000.000']
      ],
      caption: 'Relación entre gasto en publicidad y ganancia'
    },
    question: 'Según la tabla, ¿cuál es la razón entre el aumento en la ganancia y el aumento en el gasto en publicidad entre 2020 y 2022?',
    options: ['3,75', '4,29', '5,00', '2,50'],
    correct: 1,
    explanation: {
      correct: 'Aumento en ganancia: $60.000.000 - $30.000.000 = $30.000.000. Aumento en gasto: $12.000.000 - $5.000.000 = $7.000.000. Razón = $30.000.000/$7.000.000 ≈ 4,29.',
      wrongs: ['Dividiste ganancia total entre gasto total: 60/5', 'Opción correcta', 'Usaste solo un año', 'No es el cálculo correcto']
    }
  },
  {
    id: 'MT103', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'dificil',
    table: {
      headers: ['Curso', 'Mujeres', 'Hombres', 'Total'],
      rows: [
        ['11A', '22', '18', '40'],
        ['11B', '23', '12', '35']
      ],
      caption: 'Composición de los cursos 11A y 11B'
    },
    context: 'Se sortea un representante al azar entre todos los estudiantes de ambos cursos.',
    question: '¿Cuál es la probabilidad de que el estudiante seleccionado sea mujer del curso 11A?',
    options: ['22/75', '22/40', '22/35', '45/75'],
    correct: 0,
    explanation: {
      correct: 'Total estudiantes = 40 + 35 = 75. Mujeres de 11A = 22. Probabilidad = 22/75.',
      wrongs: ['Opción correcta', 'Usaste solo el total de 11A en el denominador', 'Usaste solo el total de 11B en el denominador', 'Esa es la probabilidad de que sea mujer de cualquier curso']
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
    question: 'Si se desprecia la resistencia del aire, ¿cuál de las siguientes afirmaciones es correcta?',
    options: ['La esfera más pesada llega primero al suelo', 'La esfera más liviana llega primero al suelo', 'Ambas esferas llegan al mismo tiempo', 'La que tiene mayor volumen llega primero'],
    correct: 2,
    explanation: {
      correct: 'En ausencia de resistencia del aire, la aceleración de la gravedad es la misma para todos los objetos independientemente de su masa. Ambas esferas caen con la misma aceleración (9.8 m/s²) y, soltadas desde la misma altura, llegan al mismo tiempo.',
      wrongs: ['La masa no afecta la velocidad de caída libre', 'La masa no afecta la velocidad de caída libre', 'Opción correcta', 'El volumen no determina la velocidad de caída']
    }
  },
  {
    id: 'CN62', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
    images: [
      { src: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 150%22%3E%3Crect width=%22300%22 height=%22150%22 fill=%22%23f0f4f8%22/%3E%3Crect x=%2220%22 y=%2280%22 width=%22260%22 height=%2240%22 fill=%22%23ccc%22 rx=%225%22/%3E%3Crect x=%2230%22 y=%2260%22 width=%2240%22 height=%2260%22 fill=%22%23e53935%22 rx=%222%22/%3E%3Crect x=%2290%22 y=%2245%22 width=%2240%22 height=%2275%22 fill=%22%233949ab%22 rx=%222%22/%3E%3Crect x=%22150%22 y=%2230%22 width=%2240%22 height=%2290%22 fill=%22%232e7d32%22 rx=%222%22/%3E%3Crect x=%22210%22 y=%2255%22 width=%2240%22 height=%2265%22 fill=%22%23ff9800%22 rx=%222%22/%3E%3Ctext x=%2250%22 y=%2250%22 text-anchor=%22middle%22 font-size=%2210%22 fill=%22white%22%3EM1%3C/text%3E%3Ctext x=%22110%22 y=%2235%22 text-anchor=%22middle%22 font-size=%2210%22 fill=%22white%22%3EM2%3C/text%3E%3Ctext x=%22170%22 y=%2220%22 text-anchor=%22middle%22 font-size=%2210%22 fill=%22white%22%3EM3%3C/text%3E%3Ctext x=%22230%22 y=%2245%22 text-anchor=%22middle%22 font-size=%2210%22 fill=%22white%22%3EM4%3C/text%3E%3C/svg%3E',
        alt: 'Barras de alturas diferentes', type: 'graph',
        caption: 'Gráfica: Altura de caída de 4 objetos' }
    ],
    context: 'Cuatro objetos (M1, M2, M3, M4) se dejan caer desde diferentes alturas. La gráfica muestra la altura de cada objeto.',
    question: 'Si los cuatro objetos se dejan caer al mismo tiempo, ¿cuál llega primero al suelo?',
    options: ['M1', 'M2', 'M3', 'M4'],
    correct: 2,
    explanation: {
      correct: 'El objeto M3 está a la menor altura (la barra más corta en la gráfica), por lo tanto recorrerá menos distancia y llegará primero al suelo.',
      wrongs: ['M1 está a mayor altura que M3', 'M2 está a mayor altura que M3', 'Opción correcta', 'M4 está a mayor altura que M3']
    }
  },
  {
    id: 'SC61', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'media',
    table: {
      headers: ['Indicador', '2020', '2021', '2022'],
      rows: [
        ['PIB (%)', '-6.8', '10.6', '7.5'],
        ['Desempleo (%)', '15.9', '13.7', '11.2'],
        ['Inflación (%)', '1.6', '3.5', '9.2']
      ],
      caption: 'Indicadores económicos de Colombia 2020-2022'
    },
    question: 'Según la tabla, ¿qué tendencia se observa en la tasa de desempleo entre 2020 y 2022?',
    options: ['Aumentó constantemente', 'Disminuyó constantemente', 'Se mantuvo igual', 'Aumentó en 2021 y disminuyó en 2022'],
    correct: 1,
    explanation: {
      correct: 'La tasa de desempleo pasó de 15.9% en 2020 a 13.7% en 2021 y a 11.2% en 2022, mostrando una disminución constante durante el período.',
      wrongs: ['Los datos muestran disminución, no aumento', 'Opción correcta', 'Los datos varían cada año', 'No aumentó en ningún año']
    }
  }
];

// Metadata about the exam structure
const EXAM_CONFIG = {
  areas: [
    { id: 'lectura', name: 'Lectura Crítica', weight: 0.25, color: '#1565c0', tag: 'tag-lectura' },
    { id: 'matematicas', name: 'Matemáticas', weight: 0.25, color: '#e65100', tag: 'tag-matematicas' },
    { id: 'sociales', name: 'Sociales y Ciudadanía', weight: 0.20, color: '#c62828', tag: 'tag-sociales' },
    { id: 'ciencias', name: 'Ciencias Naturales', weight: 0.20, color: '#2e7d32', tag: 'tag-ciencias' },
    { id: 'ingles', name: 'Inglés', weight: 0.10, color: '#7b1fa2', tag: 'tag-ingles' }
  ],
  simulacros: {
    facil: { questions: 50, time: 45, label: 'Fácil', desc: '50 preguntas · 45 min' },
    intermedio: { questions: 150, time: 90, label: 'Intermedio', desc: '150 preguntas · 90 min' },
    avanzado: { questions: 254, time: 180, label: 'Avanzado', desc: '254 preguntas · 3 horas · Simula el examen real' }
  },
  avanzadoBreakdown: {
    lectura: 41,
    matematicas: 50,
    sociales: 50,
    ciencias: 58,
    ingles: 55
  }
};

// Helper to format area name
function getAreaInfo(areaId) {
  return EXAM_CONFIG.areas.find(a => a.id === areaId);
}

// Render visual content (tables, images, comics, figures)
function renderVisualContent(q) {
  let html = '';

  // Single image (backward compat)
  if (q.image && (!q.images || q.images.length === 0)) {
    html += `<div class="question-image"><img src="${q.image}" alt="Imagen de la pregunta" loading="lazy"></div>`;
  }

  // Multiple images
  if (q.images && q.images.length > 0) {
    const isComic = q.images.some(i => i.type === 'comic');
    html += `<div class="question-image-gallery ${isComic ? 'comic-gallery' : ''}">`;
    q.images.forEach(img => {
      const src = typeof img === 'string' ? img : img.src;
      const alt = typeof img === 'string' ? 'Imagen' : (img.alt || '');
      const caption = typeof img === 'string' ? '' : (img.caption || '');
      const type = typeof img === 'string' ? '' : img.type || '';
      html += '<div class="gallery-item">';
      html += `<img src="${src}" alt="${alt}" loading="lazy">`;
      if (type) html += `<span class="visual-badge visual-badge-${type}">${type}</span>`;
      if (caption) html += `<div class="gallery-caption">${caption}</div>`;
      html += '</div>';
    });
    html += '</div>';
  }

  // Table
  if (q.table && q.table.headers && q.table.rows) {
    html += '<div class="question-table-wrapper"><table class="question-table"><thead><tr>';
    q.table.headers.forEach(h => { html += `<th>${h}</th>`; });
    html += '</tr></thead><tbody>';
    q.table.rows.forEach(row => {
      html += '<tr>';
      row.forEach(cell => { html += `<td>${cell}</td>`; });
      html += '</tr>';
    });
    html += '</tbody></table>';
    if (q.table.caption) {
      html += `<div class="question-table-caption">${q.table.caption}</div>`;
    }
    html += '</div>';
  }

  return html;
}
