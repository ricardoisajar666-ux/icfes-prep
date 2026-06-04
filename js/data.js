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
    question: `Un curso tiene 30 estudiantes. Si el 40% son mujeres, ¿cuántos hombres hay en el curso?`,
    options: ['12', '18', '20', '15'],
    correct: 1,
    explanation: {
      correct: 'Si el 40% son mujeres, entonces el 60% son hombres. El 60% de 30 es: 30 × 0.6 = 18 hombres. También se puede calcular: mujeres = 30 × 0.4 = 12, entonces hombres = 30 - 12 = 18.',
      wrongs: [
        'Ese sería el número de mujeres (40% de 30), no de hombres',
        'Opción correcta',
        'Eso sería aproximadamente el 66%, no el 60%',
        'Eso sería el 50%, no el 60%'
      ]
    }
  },
  {
    id: 'MT02',
    area: 'matematicas',
    areaName: 'Matemáticas',
    difficulty: 'facil',
    context: `La siguiente tabla muestra el puntaje promedio de cuatro cursos en dos años consecutivos:

| Curso | Promedio año anterior | Promedio año actual |
|-------|----------------------|-------------------|
| I     | 63                   | 65                |
| II    | 61                   | 45                |
| III   | 50                   | 53                |
| IV    | 53                   | 54                |`,
    question: `Una persona afirma que hubo un aumento en el puntaje respecto al año anterior. Esta afirmación es:`,
    options: ['Correcta, porque la mayoría de los cursos aumentó su promedio', 'Incorrecta, porque el promedio total del año anterior es superior al actual', 'Correcta, porque el mayor puntaje está en el año actual', 'Incorrecta, porque solo un curso aumentó'],
    correct: 1,
    explanation: {
      correct: 'Calculemos los promedios totales: Año anterior: (63+61+50+53)/4 = 56.75. Año actual: (65+45+53+54)/4 = 54.25. El promedio total del año anterior (56.75) es superior al del año actual (54.25), por lo que la afirmación es incorrecta.',
      wrongs: [
        'Aunque 3 de 4 cursos aumentaron, el promedio total disminuyó porque el curso II tuvo una caída drástica',
        'Opción correcta',
        'Mirar solo el puntaje más alto no es válido para afirmar que hubo un aumento general',
        'En realidad 3 cursos aumentaron (I, III, IV), pero el promedio total es lo que importa'
      ]
    }
  },
  {
    id: 'MT03',
    area: 'matematicas',
    areaName: 'Matemáticas',
    difficulty: 'media',
    question: `Si f(x) = 2x + 3, ¿cuál es el valor de f(4)?`,
    options: ['8', '11', '14', '9'],
    correct: 1,
    explanation: {
      correct: 'Para hallar f(4), reemplazamos x = 4 en la función: f(4) = 2(4) + 3 = 8 + 3 = 11.',
      wrongs: [
        'Olvidaste sumar el 3: 2(4) = 8, pero falta el +3',
        'Opción correcta',
        'Multiplicaste por 2 y sumaste 6 en lugar de 3',
        'Calculaste 4 + 3 + 2 en lugar de 2(4) + 3'
      ]
    }
  },
  {
    id: 'MT04',
    area: 'matematicas',
    areaName: 'Matemáticas',
    difficulty: 'media',
    context: `En una encuesta a 100 personas sobre su medio de transporte favorito, los resultados fueron:
- Bicicleta: 25 personas
- Carro: 35 personas
- Transporte público: 30 personas
- Moto: 10 personas`,
    question: `¿Qué porcentaje de personas prefiere el transporte público?`,
    options: ['25%', '30%', '35%', '20%'],
    correct: 1,
    explanation: {
      correct: 'El porcentaje se calcula como (30/100) × 100% = 30%.',
      wrongs: [
        'Ese es el porcentaje de bicicleta, no de transporte público',
        'Opción correcta',
        'Ese es el porcentaje de carro',
        'Ese sería el resultado si fueran 20 personas'
      ]
    }
  },
  {
    id: 'MT05',
    area: 'matematicas',
    areaName: 'Matemáticas',
    difficulty: 'dificil',
    question: `Un rectángulo tiene un largo que es el triple de su ancho. Si el perímetro es 48 cm, ¿cuánto mide el ancho?`,
    options: ['6 cm', '8 cm', '12 cm', '9 cm'],
    correct: 0,
    explanation: {
      correct: 'Sea x = ancho, entonces largo = 3x. Perímetro = 2(largo + ancho) = 2(3x + x) = 2(4x) = 8x. Como 8x = 48, entonces x = 6 cm. El ancho mide 6 cm y el largo 18 cm.',
      wrongs: [
        'Opción correcta',
        'Si el ancho fuera 8, el largo sería 24 y el perímetro 2(24+8) = 64, no 48',
        'Ese sería el largo, no el ancho',
        'Si el ancho fuera 9, el perímetro sería 2(27+9) = 72, no 48'
      ]
    }
  },
  {
    id: 'MT06',
    area: 'matematicas',
    areaName: 'Matemáticas',
    difficulty: 'facil',
    question: `¿Cuál es el resultado de la operación: 3² + 4 × 2 - 6 ÷ 2?`,
    options: ['7', '14', '13', '10'],
    correct: 1,
    explanation: {
      correct: 'Aplicamos jerarquía de operaciones: primero potencias: 3² = 9; luego multiplicaciones y divisiones: 4 × 2 = 8, 6 ÷ 2 = 3; finalmente sumas y restas: 9 + 8 - 3 = 14.',
      wrongs: [
        'Probablemente hiciste las operaciones en orden sin respetar la jerarquía',
        'Opción correcta',
        'Pudiste haber calculado 9 + 4 × 2 - 3 pero sumaste mal',
        'Pudiste haber hecho 9 + (4×2) - (6÷2) = 9+8-3 pero calculaste mal'
      ]
    }
  },
  {
    id: 'MT07',
    area: 'matematicas',
    areaName: 'Matemáticas',
    difficulty: 'dificil',
    question: `En una progresión aritmética, el primer término es 5 y el quinto término es 21. ¿Cuál es la diferencia común?`,
    options: ['3', '4', '5', '16'],
    correct: 1,
    explanation: {
      correct: 'En una progresión aritmética: a_n = a_1 + (n-1)d. Tenemos a_1 = 5, a_5 = 21. Entonces 21 = 5 + (5-1)d = 5 + 4d. Despejando: 4d = 16, entonces d = 4.',
      wrongs: [
        'Con diferencia 3: a_5 = 5 + 4(3) = 17, no 21',
        'Opción correcta',
        'Con diferencia 5: a_5 = 5 + 4(5) = 25, no 21',
        'Esa es la diferencia entre a_5 y a_1, pero hay que dividirla entre 4'
      ]
    }
  },
  {
    id: 'MT08',
    area: 'matematicas',
    areaName: 'Matemáticas',
    difficulty: 'media',
    context: `La gráfica muestra la temperatura en una ciudad durante 5 días:
- Lunes: 22°C
- Martes: 25°C
- Miércoles: 28°C
- Jueves: 26°C
- Viernes: 24°C`,
    question: `¿Cuál es la temperatura mediana de estos 5 días?`,
    options: ['24°C', '25°C', '26°C', '28°C'],
    correct: 1,
    explanation: {
      correct: 'Para hallar la mediana, ordenamos los datos: 22, 24, 25, 26, 28. Como hay 5 datos (impar), la mediana es el valor central, es decir, el tercer valor: 25°C.',
      wrongs: [
        '24°C es el segundo valor, no la mediana',
        'Opción correcta',
        '26°C es el cuarto valor',
        '28°C es el valor máximo, no la mediana'
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

  // ===== INGLÉS =====
  {
    id: 'EN01',
    area: 'ingles',
    areaName: 'Inglés',
    difficulty: 'facil',
    context: `Notice: "No parking at any time."`,
    question: `What does this notice mean?`,
    options: ['You can park here sometimes', 'You cannot park here ever', 'You can park here only at night', 'You must pay to park here'],
    correct: 1,
    explanation: {
      correct: '"No parking at any time" means parking is prohibited 24 hours a day, 7 days a week. "At any time" reinforces that there are no exceptions.',
      wrongs: [
        '"At any time" means NO exceptions for parking',
        'Opción correcta',
        '"At any time" includes night time as well',
        'The notice says nothing about payment'
      ]
    }
  },
  {
    id: 'EN02',
    area: 'ingles',
    areaName: 'Inglés',
    difficulty: 'facil',
    context: `Martha ___ a teacher. She works at a school.`,
    question: `Choose the correct option to complete the sentence:`,
    options: ['am', 'are', 'is', 'be'],
    correct: 2,
    explanation: {
      correct: 'The correct form of the verb "to be" for the third person singular (she) is "is". "She is a teacher" is grammatically correct.',
      wrongs: [
        '"Am" is used with first person singular (I am)',
        '"Are" is used with you, we, they',
        'Opción correcta',
        '"Be" is the base form of the verb, not conjugated'
      ]
    }
  },
  {
    id: 'EN03',
    area: 'ingles',
    areaName: 'Inglés',
    difficulty: 'media',
    context: `Read the text:
"Tom was feeling very tired. He had been working on his project all night. His friend Sarah called him and invited him to go to the cinema, but Tom decided to stay home and rest."`,
    question: `Why did Tom decide to stay home?`,
    options: ['He was angry with Sarah', 'He had already seen the movie', 'He was tired from working all night', 'He had to go to work'],
    correct: 2,
    explanation: {
      correct: 'The text explicitly says "Tom was feeling very tired" because "He had been working on his project all night", and "he decided to stay home and rest."',
      wrongs: [
        'The text does not mention Tom being angry',
        'The text does not say anything about having seen the movie before',
        'Opción correcta',
        'The text says he was working on a project, not going to work'
      ]
    }
  },
  {
    id: 'EN04',
    area: 'ingles',
    areaName: 'Inglés',
    difficulty: 'dificil',
    context: `"If I ___ more time, I would travel around the world."`,
    question: `Choose the correct option:`,
    options: ['have', 'had', 'will have', 'would have'],
    correct: 1,
    explanation: {
      correct: 'This is a second conditional (unreal present/future situation). The structure is: If + subject + past simple, subject + would + base verb. "If I had more time, I would travel around the world."',
      wrongs: [
        'First conditional uses "if + present simple" but the result clause "would travel" requires past in the if-clause',
        'Opción correcta',
        '"Will have" is future, not used in second conditional',
        '"Would have" in the if-clause is incorrect; use "had" in the if-clause for second conditional'
      ]
    }
  },
  {
    id: 'EN05',
    area: 'ingles',
    areaName: 'Inglés',
    difficulty: 'media',
    context: `Match the word with its definition:
"_______: a person who designs buildings and oversees their construction."`,
    question: `Which word matches this definition?`,
    options: ['Doctor', 'Architect', 'Engineer', 'Teacher'],
    correct: 1,
    explanation: {
      correct: 'An architect is a professional who designs buildings and oversees their construction. This is a common vocabulary question type in the ICFES English test.',
      wrongs: [
        'A doctor works in healthcare, not with building design',
        'Opción correcta',
        'An engineer may work on structures but the specific definition of designing buildings is architecture',
        'A teacher works in education'
      ]
    }
  },
  {
    id: 'EN06',
    area: 'ingles',
    areaName: 'Inglés',
    difficulty: 'facil',
    context: `"The restaurant is ___ the bank and the supermarket."`,
    question: `Choose the correct preposition:`,
    options: ['in', 'on', 'between', 'at'],
    correct: 2,
    explanation: {
      correct: 'We use "between" to describe something that is in the middle of two distinct points or objects. "The restaurant is between the bank and the supermarket."',
      wrongs: [
        '"In" is used for enclosed spaces, not for position between two points',
        '"On" is used for surfaces',
        'Opción correcta',
        '"At" is used for specific points or locations, not between two things'
      ]
    }
  },
  {
    id: 'EN07',
    area: 'ingles',
    areaName: 'Inglés',
    difficulty: 'dificil',
    context: `Read the text:
"Sunglasses have an interesting history. The first sunglasses were used by judges in ancient China to hide their facial expressions during trials. Later, in the 1930s, sunglasses became popular for protecting eyes from the sun. Today, sunglasses are both a fashion accessory and a necessity for eye health."`,
    question: `According to the text, why did Chinese judges first use sunglasses?`,
    options: ['To protect their eyes from the sun', 'To look fashionable', 'To hide their facial expressions', 'To improve their vision'],
    correct: 2,
    explanation: {
      correct: 'The text states: "The first sunglasses were used by judges in ancient China to hide their facial expressions during trials."',
      wrongs: [
        'Eye protection from the sun became popular in the 1930s, not in ancient China',
        'Fashion was a later development; the original use was different',
        'Opción correcta',
        'There is no mention of improving vision'
      ]
    }
  },
  {
    id: 'EN08',
    area: 'ingles',
    areaName: 'Inglés',
    difficulty: 'media',
    context: `"She has been studying English ___ three years."`,
    question: `Choose the correct option:`,
    options: ['since', 'for', 'during', 'ago'],
    correct: 1,
    explanation: {
      correct: 'Use "for" with a duration of time (three years). "For" is used with periods of time (hours, days, years). "Since" is used with a specific point in time (since 2020, since Monday).',
      wrongs: [
        '"Since" requires a specific starting point, not a duration',
        'Opción correcta',
        '"During" is used within a period, not to indicate duration of an action',
        '"Ago" is used to say when something happened in the past (three years ago)'
      ]
    }
  },

  // ===== PREGUNTAS ADICIONALES =====
  // Más Lectura Crítica
  {
    id: 'LC09',
    area: 'lectura',
    areaName: 'Lectura Crítica',
    difficulty: 'media',
    context: `"Las redes sociales han democratizado la producción de contenido, permitiendo que cualquier persona con acceso a internet pueda compartir sus ideas con el mundo. Sin embargo, esta misma facilidad ha generado desafíos en términos de veracidad de la información."`,
    question: `Según el texto, ¿cuál es la paradoja de las redes sociales?`,
    options: ['Permiten compartir ideas pero dificultan la verificación de información', 'Son gratuitas pero requieren internet', 'Solo las usan personas jóvenes', 'Eliminan la necesidad de medios tradicionales'],
    correct: 0,
    explanation: {
      correct: 'El texto presenta una paradoja: por un lado, las redes sociales democratizan la producción de contenido (aspecto positivo), pero por otro lado, generan "desafíos en términos de veracidad de la información" (aspecto negativo).',
      wrongs: [
        'Opción correcta',
        'La necesidad de internet no es una paradoja mencionada en el texto',
        'El texto no menciona grupos etarios específicos',
        'El texto no dice que eliminen los medios tradicionales'
      ]
    }
  },
  {
    id: 'LC10',
    area: 'lectura',
    areaName: 'Lectura Crítica',
    difficulty: 'dificil',
    context: `"El escepticismo no debe confundirse con la negación sistemática. Mientras que el escéptico cuestiona para comprender mejor, el negacionista rechaza sin considerar las evidencias. El primero es un pilar del método científico; el segundo, un obstáculo para el conocimiento."`,
    question: `¿Cuál es la diferencia fundamental entre escepticismo y negacionismo según el texto?`,
    options: ['El escepticismo es científico y el negacionismo es religioso', 'El escéptico busca comprender cuestionando; el negacionista rechaza sin evidencia', 'No hay diferencia, son lo mismo', 'El negacionismo es una forma avanzada de escepticismo'],
    correct: 1,
    explanation: {
      correct: 'El texto diferencia claramente: "el escéptico cuestiona para comprender mejor" (busca entender), mientras que "el negacionista rechaza sin considerar las evidencias" (rechaza de antemano).',
      wrongs: [
        'El texto no menciona el origen religioso o científico de ninguna postura',
        'Opción correcta',
        'El texto dedica varios párrafos a establecer las diferencias',
        'El texto los presenta como opuestos, no como una evolución del otro'
      ]
    }
  },

  // Más Matemáticas
  {
    id: 'MT09',
    area: 'matematicas',
    areaName: 'Matemáticas',
    difficulty: 'media',
    question: `La ecuación de la recta que pasa por los puntos (2, 3) y (4, 7) es:`,
    options: ['y = 2x + 1', 'y = x + 1', 'y = 2x - 1', 'y = x + 3'],
    correct: 2,
    explanation: {
      correct: 'Pendiente m = (7-3)/(4-2) = 4/2 = 2. Usando el punto (2,3): y - 3 = 2(x - 2) → y = 2x - 4 + 3 → y = 2x - 1. Verificación: en x=4, y = 2(4)-1 = 7. ✓',
      wrongs: [
        'Tiene la pendiente correcta (2) pero el intercepto es incorrecto',
        'La pendiente es 1 pero debería ser 2',
        'Opción correcta',
        'La pendiente es 1 pero debería ser 2'
      ]
    }
  },
  {
    id: 'MT10',
    area: 'matematicas',
    areaName: 'Matemáticas',
    difficulty: 'dificil',
    question: `Al lanzar dos dados, ¿cuál es la probabilidad de que la suma sea 7?`,
    options: ['1/6', '1/12', '5/36', '1/9'],
    correct: 0,
    explanation: {
      correct: 'Hay 36 resultados posibles (6×6). Las combinaciones que suman 7 son: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 combinaciones. Probabilidad = 6/36 = 1/6.',
      wrongs: [
        'Opción correcta',
        'Solo consideraste 3 combinaciones en lugar de 6',
        'Contaste 5 combinaciones en lugar de 6',
        'Consideraste 4 combinaciones en lugar de 6'
      ]
    }
  },

  // Más Sociales
  {
    id: 'SC09',
    area: 'sociales',
    areaName: 'Sociales y Ciudadanía',
    difficulty: 'media',
    question: `La Organización de las Naciones Unidas (ONU) fue creada en 1945 con el propósito principal de:`,
    options: ['Promover el comercio internacional', 'Mantener la paz y seguridad internacionales', 'Establecer un gobierno mundial', 'Dividir el mundo en bloques económicos'],
    correct: 1,
    explanation: {
      correct: 'La ONU fue fundada después de la Segunda Guerra Mundial con el propósito principal de "mantener la paz y la seguridad internacionales" (Artículo 1 de la Carta de la ONU). También promueve los derechos humanos, el desarrollo y la cooperación internacional.',
      wrongs: [
        'El comercio internacional lo promueve la OMC, no es el propósito principal de la ONU',
        'Opción correcta',
        'La ONU respeta la soberanía de los Estados; no es un gobierno mundial',
        'La ONU busca la cooperación, no la división en bloques'
      ]
    }
  },
  {
    id: 'SC10',
    area: 'sociales',
    areaName: 'Sociales y Ciudadanía',
    difficulty: 'dificil',
    question: `El concepto de "Estado Social de Derecho" en Colombia implica que:`,
    options: ['El Estado solo debe garantizar derechos civiles', 'El Estado debe promover activamente el bienestar social y garantizar derechos económicos, sociales y culturales', 'El Estado no debe intervenir en la economía', 'El derecho privado predomina sobre el público'],
    correct: 1,
    explanation: {
      correct: 'El Estado Social de Derecho (art. 1 de la Constitución de 1991) implica que el Estado no solo debe respetar derechos individuales, sino también promover activamente la igualdad, el bienestar social y garantizar derechos económicos, sociales y culturales (salud, educación, trabajo, vivienda).',
      wrongs: [
        'El Estado Social de Derecho va más allá de los derechos civiles; incluye derechos sociales',
        'Opción correcta',
        'El Estado Social de Derecho permite la intervención estatal para corregir desigualdades',
        'El derecho público y social tienen gran importancia en este modelo'
      ]
    }
  },

  // Más Ciencias Naturales
  {
    id: 'CN09',
    area: 'ciencias',
    areaName: 'Ciencias Naturales',
    difficulty: 'media',
    question: `¿Cuál de las siguientes sustancias tiene un pH ácido?`,
    options: ['Agua destilada', 'Jugo de limón', 'Jabón', 'Leche de magnesia'],
    correct: 1,
    explanation: {
      correct: 'El jugo de limón tiene un pH de aproximadamente 2-3, lo que lo hace ácido. Los ácidos tienen pH menor a 7. El limón contiene ácido cítrico que le da su sabor agrio característico.',
      wrongs: [
        'El agua destilada tiene pH neutro = 7',
        'Opción correcta',
        'El jabón tiene pH básico (alcalino), mayor a 7',
        'La leche de magnesia (antiácido) tiene pH básico, mayor a 7'
      ]
    }
  },
  {
    id: 'CN10',
    area: 'ciencias',
    areaName: 'Ciencias Naturales',
    difficulty: 'dificil',
    context: `"En un laboratorio se tienen dos plantas de la misma especie. Una recibe luz solar directa y la otra se mantiene en oscuridad permanente. Ambas reciben la misma cantidad de agua y nutrientes."`,
    question: `Después de dos semanas, ¿qué diferencia se espera observar?`,
    options: ['La planta en oscuridad crecerá más rápido', 'La planta en oscuridad tendrá hojas más verdes', 'La planta sin luz presentará clorosis (pérdida de color) y menor crecimiento', 'No habrá diferencias significativas'],
    correct: 2,
    explanation: {
      correct: 'La luz es esencial para la fotosíntesis. Sin luz, la planta no puede producir clorofila (pigmento verde) ni generar energía para crecer. Por eso presentará clorosis (hojas amarillentas o pálidas) y un crecimiento muy reducido o nulo.',
      wrongs: [
        'La oscuridad NO acelera el crecimiento; la luz es necesaria para la fotosíntesis',
        'Sin luz, las plantas no producen clorofila, por lo que pierden el color verde',
        'Opción correcta',
        'La luz es un factor esencial para el desarrollo de las plantas'
      ]
    }
  },

  // Más Inglés
  {
    id: 'EN09',
    area: 'ingles',
    areaName: 'Inglés',
    difficulty: 'media',
    context: `"I'm really looking forward ___ my vacation next month."`,
    question: `Choose the correct preposition:`,
    options: ['for', 'to', 'at', 'on'],
    correct: 1,
    explanation: {
      correct: 'The phrasal expression "look forward to" means to feel pleased and excited about something that is going to happen. It is always followed by "to" + noun/gerund.',
      wrongs: [
        '"Look forward for" is not a correct expression in English',
        'Opción correcta',
        '"Look forward at" is not grammatical',
        '"Look forward on" is not grammatical'
      ]
    }
  },
  {
    id: 'EN10',
    area: 'ingles',
    areaName: 'Inglés',
    difficulty: 'facil',
    context: `"This is ___ book that I was telling you about."`,
    question: `Choose the correct option:`,
    options: ['a', 'an', 'the', '—'],
    correct: 2,
    explanation: {
      correct: 'Use "the" (definite article) when referring to a specific book that both the speaker and listener know about. The clause "that I was telling you about" specifies which book.',
      wrongs: [
        '"A" is indefinite, used for non-specific things',
        '"An" is used before vowel sounds, also indefinite',
        'Opción correcta',
        'An article is needed here because the book is specified'
      ]
    }
  },

  // Más preguntas para alcanzar cantidad suficiente
  {
    id: 'LC11',
    area: 'lectura',
    areaName: 'Lectura Crítica',
    difficulty: 'facil',
    context: `"El agua es un recurso fundamental para la vida. Sin embargo, millones de personas en el mundo no tienen acceso a agua potable. La ONU estima que para 2030, la escasez de agua podría desplazar a 700 millones de personas."`,
    question: `¿Cuál es la idea principal del texto?`,
    options: ['El agua es un recurso infinito', 'La escasez de agua es un problema grave que afecta a millones de personas', 'La ONU creará agua para todos', 'El agua solo es importante para la agricultura'],
    correct: 1,
    explanation: {
      correct: 'El texto presenta el agua como "recurso fundamental" pero destaca que "millones de personas no tienen acceso a agua potable" y que la escasez "podría desplazar a 700 millones de personas", subrayando la gravedad del problema.',
      wrongs: [
        'El texto no dice que el agua sea infinita; al contrario, habla de escasez',
        'Opción correcta',
        'La ONU hace estimaciones, no tiene la capacidad de crear agua',
        'El agua es importante para múltiples usos, no solo agricultura'
      ]
    }
  },
  {
    id: 'LC12',
    area: 'lectura',
    areaName: 'Lectura Crítica',
    difficulty: 'media',
    context: `"El autor de la novela utiliza un narrador en primera persona que no siempre es confiable. El lector debe estar atento a las contradicciones y omisiones del protagonista para reconstruir la historia real."`,
    question: `Según el texto, ¿qué característica tiene el narrador de la novela?`,
    options: ['Es omnisciente y lo sabe todo', 'Es confiable y dice siempre la verdad', 'Es un narrador no confiable que contradice y omite información', 'Es un narrador en tercera persona'],
    correct: 2,
    explanation: {
      correct: 'El texto menciona que es "un narrador en primera persona que no siempre es confiable" y que tiene "contradicciones y omisiones". El lector debe estar atento a estos elementos para entender la historia real.',
      wrongs: [
        'Un narrador en primera persona no es omnisciente; solo conoce su propia perspectiva',
        'El texto dice explícitamente que "no siempre es confiable"',
        'Opción correcta',
        'El texto dice explícitamente que es un narrador en "primera persona"'
      ]
    }
  },
  {
    id: 'MT11',
    area: 'matematicas',
    areaName: 'Matemáticas',
    difficulty: 'media',
    question: `¿Cuál es el área de un círculo cuyo radio es 7 cm? (Considere π ≈ 22/7)`,
    options: ['144 cm²', '154 cm²', '164 cm²', '44 cm²'],
    correct: 1,
    explanation: {
      correct: 'El área del círculo es A = π × r² = (22/7) × 7² = (22/7) × 49 = 22 × 7 = 154 cm².',
      wrongs: [
        'Si usaste π = 3.14, el resultado sería aproximadamente 153.86, no 144',
        'Opción correcta',
        'Revisa tus cálculos: (22/7) × 49 = 22 × 7 = 154',
        'Ese sería el perímetro (2πr), no el área'
      ]
    }
  },
  {
    id: 'MT12',
    area: 'matematicas',
    areaName: 'Matemáticas',
    difficulty: 'facil',
    question: `Si un producto cuesta $80.000 y tiene un descuento del 15%, ¿cuánto se paga finalmente?`,
    options: ['$68.000', '$72.000', '$65.000', '$60.000'],
    correct: 0,
    explanation: {
      correct: 'El descuento es del 15% de $80.000 = $80.000 × 0.15 = $12.000. El precio final es $80.000 - $12.000 = $68.000. También se puede calcular como $80.000 × 0.85 = $68.000.',
      wrongs: [
        'Opción correcta',
        'Calculaste 10% de descuento ($8.000) en lugar de 15% ($12.000)',
        'Calculaste un descuento del 18.75% aproximadamente',
        'Calculaste 25% de descuento ($20.000)'
      ]
    }
  },
  {
    id: 'SC11',
    area: 'sociales',
    areaName: 'Sociales y Ciudadanía',
    difficulty: 'facil',
    question: `Colombia limita al norte con:`,
    options: ['Ecuador y Perú', 'Panamá y el Mar Caribe', 'Brasil y Venezuela', 'El Océano Pacífico'],
    correct: 1,
    explanation: {
      correct: 'Colombia limita al norte con Panamá y el Mar Caribe (océano Atlántico). Al oriente con Venezuela y Brasil, al sur con Perú y Ecuador, y al occidente con el Océano Pacífico.',
      wrongs: [
        'Ecuador y Perú están al sur de Colombia',
        'Opción correcta',
        'Brasil y Venezuela están al oriente (este) de Colombia',
        'El Océano Pacífico está al occidente (oeste) de Colombia'
      ]
    }
  },
  {
    id: 'SC12',
    area: 'sociales',
    areaName: 'Sociales y Ciudadanía',
    difficulty: 'media',
    question: `El fenómeno de "El Niño" se caracteriza por:`,
    options: ['El enfriamiento anormal del Océano Pacífico', 'El calentamiento anormal del Océano Pacífico que altera los patrones climáticos', 'El aumento de la temperatura global', 'La disminución de los niveles del mar'],
    correct: 1,
    explanation: {
      correct: 'El Niño es un fenómeno climático caracterizado por el calentamiento anormal de las aguas del Océano Pacífico tropical. En Colombia provoca sequías en algunas regiones y aumento de lluvias en otras, alterando los patrones climáticos normales.',
      wrongs: [
        'Ese sería el fenómeno de "La Niña", que es el enfriamiento anormal',
        'Opción correcta',
        'El Niño contribuye al calentamiento global pero no es lo mismo; es un fenómeno cíclico específico',
        'No está relacionado directamente con el nivel del mar'
      ]
    }
  },
  {
    id: 'CN11',
    area: 'ciencias',
    areaName: 'Ciencias Naturales',
    difficulty: 'facil',
    question: `¿Cuál de los siguientes NO es un estado de agregación de la materia?`,
    options: ['Sólido', 'Líquido', 'Energía', 'Gaseoso'],
    correct: 2,
    explanation: {
      correct: 'Los estados de agregación de la materia son sólido, líquido, gaseoso y plasma. La "energía" no es un estado de la materia, sino una propiedad que puede manifestarse de diversas formas (calorífica, cinética, potencial, etc.).',
      wrongs: [
        'El estado sólido es uno de los estados de agregación de la materia',
        'El estado líquido es uno de los estados de agregación',
        'Opción correcta',
        'El estado gaseoso es uno de los estados de agregación'
      ]
    }
  },
  {
    id: 'CN12',
    area: 'ciencias',
    areaName: 'Ciencias Naturales',
    difficulty: 'dificil',
    question: `Si un automóvil viaja a 72 km/h y frena uniformemente hasta detenerse en 5 segundos, ¿cuál fue su aceleración (desaceleración)?`,
    options: ['2 m/s²', '4 m/s²', '-4 m/s²', '-2 m/s²'],
    correct: 2,
    explanation: {
      correct: 'Convertimos 72 km/h a m/s: 72/3.6 = 20 m/s. Aceleración = (v_f - v_i)/t = (0 - 20)/5 = -20/5 = -4 m/s². El signo negativo indica que es una desaceleración.',
      wrongs: [
        'La aceleración es de -4 m/s², no 2 m/s². Verifica la conversión y los cálculos',
        'El signo debe ser negativo porque está frenando (desacelerando)',
        'Opción correcta',
        'La magnitud es 4 m/s², pero el signo debe ser negativo'
      ]
    }
  },
  {
    id: 'EN11',
    area: 'ingles',
    areaName: 'Inglés',
    difficulty: 'dificil',
    context: `"By the time we arrived at the theater, the movie ___ already started."`,
    question: `Choose the correct verb form:`,
    options: ['has', 'had', 'have', 'was'],
    correct: 1,
    explanation: {
      correct: 'When one past action happens before another past action, use Past Perfect (had + past participle). "By the time we arrived" (simple past), the movie "had already started" (past perfect, because it happened before our arrival).',
      wrongs: [
        '"Has" is present perfect, not compatible with past "arrived"',
        'Opción correcta',
        '"Have" is present tense',
        '"Was" + past participle would be passive voice, not appropriate here'
      ]
    }
  },
  {
    id: 'EN12',
    area: 'ingles',
    areaName: 'Inglés',
    difficulty: 'media',
    context: `"The Amazon rainforest ___ millions of species of plants and animals."`,
    question: `Choose the correct verb form:`,
    options: ['contain', 'contains', 'is containing', 'are containing'],
    correct: 1,
    explanation: {
      correct: '"The Amazon rainforest" is a singular subject (it). In present simple, third person singular takes an -s: "contains." This is a general fact, so present simple is appropriate.',
      wrongs: [
        '"Contain" is used with plural subjects (they contain)',
        'Opción correcta',
        '"Is containing" is present continuous, not used for general facts',
        '"Are containing" is plural and present continuous, both incorrect here'
      ]
    }
  },
  // ===== LECTURA CRÍTICA ADICIONALES =====
  {
    id: 'LC13',
    area: 'lectura',
    areaName: 'Lectura Crítica',
    difficulty: 'media',
    context: `"La globalización ha transformado las economías del mundo. Sin embargo, sus beneficios no se han distribuido equitativamente. Mientras que los países desarrollados han visto crecer su riqueza, muchas naciones en desarrollo enfrentan mayores desigualdades."`,
    question: `Según el texto, ¿cuál es una consecuencia negativa de la globalización?`,
    options: ['El crecimiento de la riqueza en todos los países', 'La distribución equitativa de beneficios', 'El aumento de desigualdades en países en desarrollo', 'La transformación económica mundial'],
    correct: 2,
    explanation: {
      correct: 'El texto señala que "los beneficios no se han distribuido equitativamente" y que "muchas naciones en desarrollo enfrentan mayores desigualdades", lo que indica una consecuencia negativa del proceso.',
      wrongs: ['El texto no dice que todos los países hayan crecido equitativamente', 'El texto explícitamente dice que NO se han distribuido equitativamente', 'Opción correcta', 'La transformación económica no es negativa per se, es el contexto del problema']
    }
  },
  {
    id: 'LC14',
    area: 'lectura',
    areaName: 'Lectura Crítica',
    difficulty: 'dificil',
    context: `"El ensayo 'Nuestra América' de José Martí propone una identidad latinoamericana basada en el mestizaje cultural y la unidad frente al imperialismo. Martí advierte sobre el peligro de imitar modelos extranjeros sin considerar las realidades locales."`,
    question: `Según Martí, la construcción de la identidad latinoamericana debe:`,
    options: ['Imitar los modelos europeos exitosos', 'Rechazar toda influencia extranjera', 'Basarse en el mestizaje cultural y las realidades locales', 'Adoptar el modelo político de Estados Unidos'],
    correct: 2,
    explanation: {
      correct: 'Martí propone una identidad basada en "el mestizaje cultural" y advierte "sobre el peligro de imitar modelos extranjeros sin considerar las realidades locales".',
      wrongs: ['Martí advierte CONTRA imitar modelos extranjeros', 'Martí no propone rechazar toda influencia, sino adaptar a la realidad local', 'Opción correcta', 'Martí critica específicamente el imperialismo estadounidense']
    }
  },
  {
    id: 'LC15',
    area: 'lectura',
    areaName: 'Lectura Crítica',
    difficulty: 'facil',
    context: `"Las abejas son polinizadores esenciales para la agricultura mundial. Sin embargo, el uso de pesticidas y el cambio climático han reducido drásticamente sus poblaciones en las últimas décadas."`,
    question: `¿Cuáles son las principales amenazas para las poblaciones de abejas según el texto?`,
    options: ['La agricultura y la polinización', 'Los pesticidas y el cambio climático', 'El aumento de la temperatura y la lluvia', 'La falta de flores y plantas'],
    correct: 1,
    explanation: {
      correct: 'El texto menciona que "el uso de pesticidas y el cambio climático han reducido drásticamente sus poblaciones".',
      wrongs: ['La agricultura necesita a las abejas; no es una amenaza en sí misma', 'Opción correcta', 'El cambio climático es una amenaza, pero la lluvia no se menciona como problema', 'El texto no menciona la falta de flores como amenaza']
    }
  },
  {
    id: 'LC16',
    area: 'lectura',
    areaName: 'Lectura Crítica',
    difficulty: 'dificil',
    context: `"Una falacia ad hominem ocurre cuando, en lugar de refutar los argumentos de una persona, se ataca a la persona misma. Este tipo de argumentación es especialmente común en debates políticos y redes sociales."`,
    question: `¿Cuándo se comete una falacia ad hominem?`,
    options: ['Cuando se presentan datos objetivos', 'Cuando se ataca a la persona en lugar de sus argumentos', 'Cuando se usan argumentos lógicos válidos', 'Cuando se citan fuentes autorizadas'],
    correct: 1,
    explanation: {
      correct: 'La falacia ad hominem consiste en atacar a la persona que presenta un argumento en lugar de refutar el argumento mismo. Es una estrategia retórica inválida que desvía la discusión.',
      wrongs: ['Presentar datos objetivos es lo opuesto a una falacia', 'Opción correcta', 'Los argumentos lógicos válidos no son falacias', 'Citar fuentes no constituye una falacia']
    }
  },
  {
    id: 'LC17',
    area: 'lectura',
    areaName: 'Lectura Crítica',
    difficulty: 'media',
    context: `"El lenguaje no solo describe la realidad, sino que la construye. Las palabras que usamos para referirnos a los fenómenos sociales influyen en cómo los percibimos y actuamos frente a ellos."`,
    question: `La idea principal del texto es que el lenguaje:`,
    options: ['Es un simple reflejo de la realidad', 'Solo sirve para comunicar información objetiva', 'Influye activamente en nuestra percepción de la realidad', 'No tiene relación con la acción social'],
    correct: 2,
    explanation: {
      correct: 'El texto afirma que el lenguaje "no solo describe la realidad, sino que la construye" y que "influye en cómo los percibimos y actuamos", destacando su papel activo en la construcción social.',
      wrongs: ['El texto dice que va más allá de describir, que construye la realidad', 'El texto habla de influencia en percepción y acción, no solo información objetiva', 'Opción correcta', 'El texto dice explícitamente que influye en cómo actuamos']
    }
  },
  // ===== MATEMÁTICAS ADICIONALES =====
  {
    id: 'MT13',
    area: 'matematicas',
    areaName: 'Matemáticas',
    difficulty: 'media',
    question: `Un triángulo tiene lados de 5 cm, 12 cm y 13 cm. ¿Qué tipo de triángulo es?`,
    options: ['Equilátero', 'Isósceles', 'Rectángulo', 'Acutángulo'],
    correct: 2,
    explanation: {
      correct: 'Verificamos con el teorema de Pitágoras: 5² + 12² = 25 + 144 = 169 = 13². Como se cumple que a² + b² = c², el triángulo es rectángulo.',
      wrongs: ['Un equilátero tiene todos los lados iguales', 'Un isósceles tiene dos lados iguales', 'Opción correcta', 'Un acutángulo tiene todos los ángulos agudos, pero 13² = 5² + 12² confirma que es rectángulo']
    }
  },
  {
    id: 'MT14',
    area: 'matematicas',
    areaName: 'Matemáticas',
    difficulty: 'dificil',
    question: `¿Cuál es el valor de x en la ecuación: 3(x - 4) = 2(x + 1)?`,
    options: ['10', '14', '12', '8'],
    correct: 1,
    explanation: {
      correct: '3(x - 4) = 2(x + 1) → 3x - 12 = 2x + 2 → 3x - 2x = 2 + 12 → x = 14.',
      wrongs: ['Revisa: 3(10-4)=18, 2(10+1)=22, no son iguales', 'Opción correcta', 'Revisa: 3(12-4)=24, 2(12+1)=26, no son iguales', 'Revisa: 3(8-4)=12, 2(8+1)=18, no son iguales']
    }
  },
  {
    id: 'MT15',
    area: 'matematicas',
    areaName: 'Matemáticas',
    difficulty: 'facil',
    question: `Si una camiseta cuesta $45.000 y tiene el 20% de descuento, ¿cuánto se ahorra el comprador?`,
    options: ['$9.000', '$36.000', '$6.000', '$12.000'],
    correct: 0,
    explanation: {
      correct: 'El descuento es del 20%: $45.000 × 0.20 = $9.000. Eso es lo que se ahorra. El precio final sería $45.000 - $9.000 = $36.000.',
      wrongs: ['Opción correcta', 'Ese es el precio final, no el ahorro', 'Calculaste 13.3% en lugar de 20%', 'Calculaste 26.6% en lugar de 20%']
    }
  },
  {
    id: 'MT16',
    area: 'matematicas',
    areaName: 'Matemáticas',
    difficulty: 'dificil',
    question: `En un salón hay 25 estudiantes. La edad promedio es 16.4 años. Si un estudiante de 18 años se retira, ¿cuál será el nuevo promedio?`,
    options: ['16.0', '16.25', '16.33', '16.5'],
    correct: 1,
    explanation: {
      correct: 'Suma total inicial: 25 × 16.4 = 410. Al retirarse el de 18: 410 - 18 = 392. Nuevo promedio: 392 ÷ 24 = 16.333... ≈ 16.33 años.',
      wrongs: ['Calculaste algo diferente', 'Opción correcta', 'Verifica: 392/24 = 16.33', 'Probablemente no restaste correctamente']
    }
  },
  {
    id: 'MT17',
    area: 'matematicas',
    areaName: 'Matemáticas',
    difficulty: 'facil',
    question: `¿Cuál es el resultado de: (8 + 4) ÷ 3 × 2?`,
    options: ['4', '8', '12', '6'],
    correct: 1,
    explanation: {
      correct: 'Jerarquía de operaciones: primero paréntesis: (8+4)=12; luego división y multiplicación de izquierda a derecha: 12÷3=4, 4×2=8.',
      wrongs: ['Posiblemente multiplicaste antes de dividir: 12÷(3×2)=12÷6=2, pero la jerarquía dice izquierda a derecha', 'Opción correcta', 'Sumaste en lugar de seguir la jerarquía', 'Hiciste (8+4)÷(3×2) que no es lo correcto']
    }
  },
  {
    id: 'MT18',
    area: 'matematicas',
    areaName: 'Matemáticas',
    difficulty: 'media',
    question: `En una bolsa hay 3 bolas rojas, 2 azules y 5 verdes. ¿Cuál es la probabilidad de sacar una bola azul?`,
    options: ['0.2', '0.3', '0.1', '0.5'],
    correct: 0,
    explanation: {
      correct: 'Total de bolas: 3+2+5=10. Bolas azules: 2. Probabilidad = 2/10 = 0.2 = 20%.',
      wrongs: ['Opción correcta', 'Esa sería la probabilidad de sacar roja (3/10)', 'Esa sería 1/10', 'Esa sería 5/10 (verde)']
    }
  },
  // ===== SOCIALES ADICIONALES =====
  {
    id: 'SC13',
    area: 'sociales',
    areaName: 'Sociales y Ciudadanía',
    difficulty: 'dificil',
    question: `El conflicto armado interno en Colombia se ha caracterizado por:`,
    options: ['La participación exclusiva de dos actores armados', 'La multiplicidad de actores: guerrilla, paramilitares, fuerzas estatales y narcotráfico', 'Ser un conflicto exclusivamente rural sin impacto urbano', 'Haberse resuelto completamente con los acuerdos de paz de 2016'],
    correct: 1,
    explanation: {
      correct: 'El conflicto colombiano ha involucrado múltiples actores (guerrillas como FARC, ELN; paramilitares; fuerzas armadas; narcotráfico) y ha tenido impactos tanto rurales como urbanos. Los acuerdos de 2016 fueron con las FARC pero no resolvieron el conflicto completo.',
      wrongs: ['Han participado múltiples actores, no solo dos', 'Opción correcta', 'El conflicto también ha tenido impacto en ciudades', 'Los acuerdos de 2016 fueron con las FARC, pero persisten otros grupos']
    }
  },
  {
    id: 'SC14',
    area: 'sociales',
    areaName: 'Sociales y Ciudadanía',
    difficulty: 'facil',
    question: `¿Cuál es la función principal de la personería municipal en Colombia?`,
    options: ['Administrar los recursos del municipio', 'Ejercer control disciplinario sobre funcionarios públicos y defender los derechos ciudadanos', 'Crear leyes a nivel municipal', 'Representar al gobierno nacional en el municipio'],
    correct: 1,
    explanation: {
      correct: 'La Personería Municipal es el ente encargado de ejercer el control disciplinario en el municipio, defender los derechos humanos, proteger el interés público y velar por la correcta conducta de los servidores públicos.',
      wrongs: ['Esa es función de la Alcaldía', 'Opción correcta', 'Las leyes las hace el Concejo Municipal, no la Personería', 'Esa es función del alcalde como representante del gobierno']
    }
  },
  {
    id: 'SC15',
    area: 'sociales',
    areaName: 'Sociales y Ciudadanía',
    difficulty: 'media',
    question: `La Revolución Industrial, que comenzó en Inglaterra a finales del siglo XVIII, se caracterizó por:`,
    options: ['La mecanización de la producción y el surgimiento del sistema fabril', 'El fortalecimiento del trabajo artesanal y los gremios', 'La disminución de la producción y el comercio', 'El traslado de la población a zonas rurales'],
    correct: 0,
    explanation: {
      correct: 'La Revolución Industrial trajo la mecanización de la producción (máquinas de vapor, telares mecánicos), el surgimiento de las fábricas, la urbanización y el crecimiento del comercio global.',
      wrongs: ['Opción correcta', 'La Revolución Industrial reemplazó el trabajo artesanal por el fabril', 'La producción AUMENTÓ drásticamente', 'La población se trasladó a las ciudades, no al campo']
    }
  },
  {
    id: 'SC16',
    area: 'sociales',
    areaName: 'Sociales y Ciudadanía',
    difficulty: 'dificil',
    question: `En Colombia, el derecho a la tutela permite a cualquier persona:`,
    options: ['Apelar decisiones judiciales', 'Solicitar la protección inmediata de sus derechos fundamentales cuando son vulnerados', 'Cambiar su nombre legalmente', 'Solicitar asilo político'],
    correct: 1,
    explanation: {
      correct: 'La acción de tutela (art. 86 Constitución) es un mecanismo judicial para la protección inmediata de derechos fundamentales cuando son amenazados o vulnerados por autoridades o particulares. Cualquier persona puede interponerla sin necesidad de abogado.',
      wrongs: ['Esa es la función de las apelaciones en procesos ordinarios', 'Opción correcta', 'El cambio de nombre es un trámite notarial, no una tutela', 'El asilo se solicita ante autoridades migratorias']
    }
  },
  {
    id: 'SC17',
    area: 'sociales',
    areaName: 'Sociales y Ciudadanía',
    difficulty: 'media',
    context: `"Colombia es una de las economías más grandes de América Latina. Sus principales sectores económicos incluyen el petróleo, el café, las flores, el carbón y el turismo."`,
    question: `Según el texto, los principales sectores económicos de Colombia son:`,
    options: ['La tecnología y la manufactura', 'El petróleo, café, flores, carbón y turismo', 'La pesca y la minería exclusivamente', 'Los servicios financieros y la banca'],
    correct: 1,
    explanation: {
      correct: 'El texto menciona explícitamente como principales sectores: "el petróleo, el café, las flores, el carbón y el turismo".',
      wrongs: ['El texto no menciona tecnología o manufactura como principales', 'Opción correcta', 'El texto menciona varios sectores además de la minería', 'Los servicios financieros no se mencionan como principal sector']
    }
  },
  // ===== CIENCIAS ADICIONALES =====
  {
    id: 'CN13',
    area: 'ciencias',
    areaName: 'Ciencias Naturales',
    difficulty: 'media',
    question: `¿Cuál de los siguientes procesos ocurre en las mitocondrias de las células?`,
    options: ['La fotosíntesis', 'La respiración celular', 'La síntesis de proteínas', 'La división celular'],
    correct: 1,
    explanation: {
      correct: 'Las mitocondrias son los orgánulos encargados de la respiración celular, donde se produce ATP (energía) a partir de glucosa y oxígeno. Son conocidas como "las centrales energéticas" de la célula.',
      wrongs: ['La fotosíntesis ocurre en los cloroplastos', 'Opción correcta', 'La síntesis de proteínas ocurre en los ribosomas', 'La división celular ocurre en el núcleo']
    }
  },
  {
    id: 'CN14',
    area: 'ciencias',
    areaName: 'Ciencias Naturales',
    difficulty: 'dificil',
    question: `Un objeto se lanza verticalmente hacia arriba con una velocidad inicial de 30 m/s. ¿Cuánto tiempo tarda en alcanzar su altura máxima? (g = 10 m/s²)`,
    options: ['1.5 s', '3 s', '4.5 s', '6 s'],
    correct: 1,
    explanation: {
      correct: 'En la altura máxima, la velocidad final es 0. Usamos v_f = v_i - g·t. 0 = 30 - 10t → t = 30/10 = 3 segundos.',
      wrongs: ['Calculaste 30/20 = 1.5, pero la gravedad es 10, no 20', 'Opción correcta', 'Calculaste 30/6.67 aproximadamente', 'Multiplicaste en lugar de dividir']
    }
  },
  {
    id: 'CN15',
    area: 'ciencias',
    areaName: 'Ciencias Naturales',
    difficulty: 'facil',
    question: `¿Cuál de los siguientes planetas del sistema solar es conocido como "el planeta rojo"?`,
    options: ['Venus', 'Júpiter', 'Marte', 'Saturno'],
    correct: 2,
    explanation: {
      correct: 'Marte es conocido como "el planeta rojo" debido a la presencia de óxido de hierro (herrumbre) en su superficie, que le da ese color característico.',
      wrongs: ['Venus es conocido como el "lucero del alba" o "estrella de la tarde"', 'Júpiter es el planeta más grande del sistema solar', 'Opción correcta', 'Saturno es conocido por sus anillos']
    }
  },
  {
    id: 'CN16',
    area: 'ciencias',
    areaName: 'Ciencias Naturales',
    difficulty: 'dificil',
    question: `Si una muestra de un elemento radiactivo tiene una vida media de 10 años, ¿qué fracción de la muestra original quedará después de 30 años?`,
    options: ['1/2', '1/4', '1/8', '1/16'],
    correct: 2,
    explanation: {
      correct: 'Después de cada vida media, la masa se reduce a la mitad. En 30 años, hay 30/10 = 3 vidas medias. Fracción = (1/2)³ = 1/8.',
      wrongs: ['Eso sería solo después de 10 años (una vida media)', 'Eso sería después de 20 años (dos vidas medias)', 'Opción correcta', 'Eso sería después de 40 años (cuatro vidas medias)']
    }
  },
  {
    id: 'CN17',
    area: 'ciencias',
    areaName: 'Ciencias Naturales',
    difficulty: 'media',
    question: `El agua hierve a 100°C al nivel del mar. En la cima de una montaña alta, el punto de ebullición del agua es:`,
    options: ['Mayor que 100°C', 'Menor que 100°C', 'El mismo, 100°C', 'Depende del color del recipiente'],
    correct: 1,
    explanation: {
      correct: 'El punto de ebullición disminuye con la altitud porque la presión atmosférica es menor. A mayor altitud, menor presión, y el agua hierve a menor temperatura. Por eso en las montañas los alimentos tardan más en cocinarse.',
      wrongs: ['Al disminuir la presión, el punto de ebullición BAJA, no sube', 'Opción correcta', 'La altitud afecta la presión atmosférica y por tanto el punto de ebullición', 'Las propiedades físicas no dependen del color del recipiente']
    }
  },
  {
    id: 'CN18',
    area: 'ciencias',
    areaName: 'Ciencias Naturales',
    difficulty: 'facil',
    question: `¿Cuál de los siguientes es un recurso natural renovable?`,
    options: ['El petróleo', 'El carbón mineral', 'La energía solar', 'El gas natural'],
    correct: 2,
    explanation: {
      correct: 'La energía solar es un recurso renovable porque se repone naturalmente a escala humana. El petróleo, carbón y gas natural son no renovables porque tardan millones de años en formarse.',
      wrongs: ['El petróleo es un combustible fósil no renovable', 'El carbón mineral es un recurso no renovable', 'Opción correcta', 'El gas natural es un recurso no renovable']
    }
  },
  // ===== INGLÉS ADICIONAL =====
  {
    id: 'EN13',
    area: 'ingles',
    areaName: 'Inglés',
    difficulty: 'facil',
    context: `"John ___ to school every day by bus."`,
    question: `Choose the correct verb form:`,
    options: ['go', 'goes', 'going', 'gone'],
    correct: 1,
    explanation: {
      correct: 'Third person singular (he/John) in present simple takes an -s: "goes". The sentence describes a daily routine.',
      wrongs: ['"Go" is used with I, you, we, they', 'Opción correcta', '"Going" needs a helper verb (is going)', '"Gone" is past participle, needs a helper']
    }
  },
  {
    id: 'EN14',
    area: 'ingles',
    areaName: 'Inglés',
    difficulty: 'media',
    context: `"The test was ___ difficult that nobody passed it."`,
    question: `Choose the correct option:`,
    options: ['to', 'so', 'such', 'too'],
    correct: 1,
    explanation: {
      correct: 'The structure "so + adjective + that" is used to express cause and effect. "So difficult that nobody passed it" means the difficulty caused the result.',
      wrongs: ['"To" + adjective is not a correct structure here', 'Opción correcta', '"Such" is used with nouns (such a difficult test that...)', '"Too" means excessively, but needs "to" not "that"']
    }
  },
  {
    id: 'EN15',
    area: 'ingles',
    areaName: 'Inglés',
    difficulty: 'dificil',
    context: `"I wish I ___ more time to finish the project."`,
    question: `Choose the correct option:`,
    options: ['have', 'had', 'will have', 'would have'],
    correct: 1,
    explanation: {
      correct: '"I wish" expresses a desire for something unreal or contrary to fact. For present wishes, use past simple: "I wish I had more time."',
      wrongs: ['Present simple is not used after "wish"', 'Opción correcta', '"Will have" is future, not used in wish clauses', '"Would have" is used for past regrets with "wish" + past perfect']
    }
  },
  {
    id: 'EN16',
    area: 'ingles',
    areaName: 'Inglés',
    difficulty: 'media',
    context: `Read the notice:
"Please do not feed the animals."
Where would you most likely see this notice?`,
    question: `Choose the correct answer:`,
    options: ['In a library', 'At a zoo', 'In a restaurant', 'At a school'],
    correct: 1,
    explanation: {
      correct: '"Do not feed the animals" is a common notice found at zoos or wildlife parks, where visitors might be tempted to give food to the animals.',
      wrongs: ['Libraries have silence notices, not about feeding animals', 'Opción correcta', 'Restaurants have notices about food consumption, not feeding animals', 'Schools may have cafeteria rules, not typically about feeding animals']
    }
  },
  {
    id: 'EN17',
    area: 'ingles',
    areaName: 'Inglés',
    difficulty: 'dificil',
    context: `"Despite ___ early, we missed the train due to heavy traffic."`,
    question: `Choose the correct option:`,
    options: ['leave', 'left', 'leaving', 'to leave'],
    correct: 2,
    explanation: {
      correct: 'After prepositions like "despite", we use the gerund (-ing form): "Despite leaving early...". Despite + noun/gerund.',
      wrongs: ['"Despite" cannot be followed by base verb', '"Despite" cannot be followed by past tense', 'Opción correcta', '"Despite" cannot be followed by infinitive']
    }
  },
  {
    id: 'EN18',
    area: 'ingles',
    areaName: 'Inglés',
    difficulty: 'facil',
    context: `"There are ___ apples on the table."`,
    question: `Choose the correct quantifier:`,
    options: ['a', 'an', 'some', 'much'],
    correct: 2,
    explanation: {
      correct: '"Some" is used with plural countable nouns in affirmative sentences. "Apples" is plural countable, so "some apples" is correct.',
      wrongs: ['"A" is used with singular countable nouns', '"An" is used before singular vowel sound nouns', 'Opción correcta', '"Much" is used with uncountable nouns, not plural countable']
    }
  },
  // ===== MÁS LECTURA CRÍTICA =====
  {
    id: 'LC19',
    area: 'lectura',
    areaName: 'Lectura Crítica',
    difficulty: 'media',
    context: `"Colombia es un país de regiones. Cada región tiene características culturales, geográficas y económicas que la distinguen. Esta diversidad es una de nuestras mayores riquezas, pero también presenta desafíos para la integración nacional."`,
    question: `Según el texto, la diversidad regional en Colombia es:`,
    options: ['Un obstáculo sin beneficios', 'Una riqueza que también presenta desafíos', 'Un problema que debe eliminarse', 'Una característica sin importancia'],
    correct: 1,
    explanation: {
      correct: 'El texto presenta la diversidad como "una de nuestras mayores riquezas" pero reconoce que "presenta desafíos para la integración nacional", mostrando una visión equilibrada.',
      wrongs: ['El texto también la valora como riqueza', 'Opción correcta', 'El texto no propone eliminarla', 'El texto le da importancia como riqueza']
    }
  },
  {
    id: 'LC20',
    area: 'lectura',
    areaName: 'Lectura Crítica',
    difficulty: 'dificil',
    context: `"El realismo mágico, corriente literaria latinoamericana, se caracteriza por la inclusión de elementos fantásticos en contextos realistas. Gabriel García Márquez, premio Nobel colombiano, es uno de sus máximos exponentes."`,
    question: `¿Qué caracteriza al realismo mágico?`,
    options: ['La narración exclusiva de hechos reales', 'La combinación de elementos fantásticos con contextos realistas', 'La eliminación de toda referencia a la realidad', 'La escritura exclusivamente sobre magia'],
    correct: 1,
    explanation: {
      correct: 'El texto define el realismo mágico como "la inclusión de elementos fantásticos en contextos realistas", es decir, la mezcla de lo mágico con lo cotidiano.',
      wrongs: ['El realismo mágico incluye elementos fantásticos, no solo hechos reales', 'Opción correcta', 'Mantiene contextos realistas como base', 'Los contextos son realistas, no exclusivamente mágicos']
    }
  },
  {
    id: 'LC21',
    area: 'lectura',
    areaName: 'Lectura Crítica',
    difficulty: 'facil',
    context: `"Leer nos permite viajar sin movermos, conocer otras épocas y culturas, y desarrollar nuestra empatía al ponernos en los zapatos de otros."`,
    question: `Según el texto, la lectura permite:`,
    options: ['Solo adquirir información académica', 'Viajar físicamente a otros lugares', 'Desarrollar empatía y conocer otras realidades', 'Reemplazar las experiencias reales'],
    correct: 2,
    explanation: {
      correct: 'El texto menciona que leer permite "viajar sin movermos", "conocer otras épocas y culturas" y "desarrollar nuestra empatía", cubriendo múltiples beneficios.',
      wrongs: ['El texto menciona más beneficios que solo lo académico', '"Viajar sin movermos" es figurado, no físico', 'Opción correcta', 'La lectura complementa, no reemplaza']
    }
  },
  // ===== MÁS MATEMÁTICAS =====
  {
    id: 'MT19',
    area: 'matematicas',
    areaName: 'Matemáticas',
    difficulty: 'media',
    question: `¿Cuál es la pendiente de la recta y = -3x + 5?`,
    options: ['3', '-3', '5', '-5'],
    correct: 1,
    explanation: {
      correct: 'En la ecuación y = mx + b, m es la pendiente. En y = -3x + 5, la pendiente es -3.',
      wrongs: ['El signo es negativo: -3', 'Opción correcta', '5 es el intercepto con el eje Y', 'El intercepto es 5, no -5']
    }
  },
  {
    id: 'MT20',
    area: 'matematicas',
    areaName: 'Matemáticas',
    difficulty: 'dificil',
    question: `Si el área de un cuadrado es 144 cm², ¿cuánto mide su perímetro?`,
    options: ['36 cm', '48 cm', '24 cm', '12 cm'],
    correct: 1,
    explanation: {
      correct: 'Área del cuadrado = lado² = 144 → lado = √144 = 12 cm. Perímetro = 4 × lado = 4 × 12 = 48 cm.',
      wrongs: ['Eso sería el lado × 3, no × 4 (12 × 3 = 36)', 'Opción correcta', 'Eso sería 2 × lado (12 × 2 = 24)', 'Ese es el lado, no el perímetro']
    }
  },
  {
    id: 'MT21',
    area: 'matematicas',
    areaName: 'Matemáticas',
    difficulty: 'facil',
    question: `¿Cuál de los siguientes números es primo?`,
    options: ['15', '21', '17', '27'],
    correct: 2,
    explanation: {
      correct: '17 es primo porque solo es divisible por 1 y por sí mismo. 15=3×5, 21=3×7, 27=3³.',
      wrongs: ['15 = 3 × 5, no es primo', '21 = 3 × 7, no es primo', 'Opción correcta', '27 = 3³, no es primo']
    }
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
    question: `¿Cuál de las siguientes afirmaciones sobre los virus es correcta?`,
    options: ['Son organismos unicelulares', 'No pueden reproducirse sin una célula huésped', 'Son más grandes que las bacterias', 'Pertenecen al reino Monera'],
    correct: 1,
    explanation: {
      correct: 'Los virus no son células y no pueden reproducirse por sí mismos; necesitan infectar una célula huésped y usar su maquinaria celular para replicarse. Por esta razón, algunos científicos no los consideran seres vivos.',
      wrongs: ['Los virus NO son células, son partículas acelulares', 'Opción correcta', 'Los virus son más pequeños que las bacterias', 'Los virus no pertenecen a ningún reino de seres vivos']
    }
  },
  {
    id: 'CN20',
    area: 'ciencias',
    areaName: 'Ciencias Naturales',
    difficulty: 'dificil',
    question: `En una reacción química, si se aumenta la temperatura, la velocidad de reacción generalmente:`,
    options: ['Disminuye', 'Aumenta', 'No cambia', 'Se detiene'],
    correct: 1,
    explanation: {
      correct: 'Al aumentar la temperatura, las partículas tienen más energía cinética, se mueven más rápido y chocan con más frecuencia y energía, lo que aumenta la velocidad de la reacción (regla de Van\'t Hoff: por cada 10°C, la velocidad se duplica aproximadamente).',
      wrongs: ['La temperatura acelera las partículas, no las frena', 'Opción correcta', 'La temperatura sí afecta la velocidad de reacción', 'La temperatura no detiene las reacciones, las acelera']
    }
  },
  // ===== LECTURA CRÍTICA - BLOQUE 3 =====
  {
    id: 'LC22', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'media',
    context: `"La inteligencia artificial está transformando el mercado laboral. Se estima que para 2030, el 30% de las tareas actuales podrían ser automatizadas, pero también surgirán nuevas profesiones que hoy no existen."`,
    question: `Según el texto, el impacto de la IA en el empleo será:`,
    options: ['La eliminación total de todos los trabajos', 'La automatización de algunas tareas y la creación de nuevas profesiones', 'El aumento del 30% de los salarios', 'La disminución de la tecnología en las empresas'],
    correct: 1,
    explanation: { correct: 'El texto menciona que tareas podrían automatizarse PERO también surgirán nuevas profesiones, un impacto mixto.', wrongs: ['El texto habla de 30% de tareas, no de todos los trabajos', 'Opción correcta', 'No se mencionan salarios', 'El texto habla de mayor tecnología'] }
  },
  {
    id: 'LC23', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'dificil',
    context: `"El relativismo cultural sostiene que las creencias y prácticas de una cultura deben entenderse dentro de su propio contexto, sin ser juzgadas desde los parámetros de otra cultura. Sin embargo, este enfoque enfrenta desafíos cuando se enfrenta a prácticas que violan derechos humanos universales."`,
    question: `El texto presenta una tensión entre:`,
    options: ['La ciencia y la religión', 'El relativismo cultural y los derechos humanos universales', 'Las culturas occidentales y orientales', 'La teoría y la práctica'],
    correct: 1,
    explanation: { correct: 'El texto dice que el relativismo cultural "enfrenta desafíos cuando se enfrenta a prácticas que violan derechos humanos universales", mostrando la tensión.', wrongs: ['No se menciona ciencia o religión', 'Opción correcta', 'No se nombran culturas específicas', 'La tensión es entre dos posturas éticas'] }
  },
  {
    id: 'LC24', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'facil',
    context: `"La cafeína es un estimulante del sistema nervioso central que puede mejorar el estado de alerta y reducir la fatiga. Sin embargo, su consumo excesivo puede causar ansiedad, insomnio y problemas digestivos."`,
    question: `¿Cuál es un posible efecto negativo del consumo excesivo de cafeína?`,
    options: ['Mejorar el estado de alerta', 'Reducir la fatiga', 'Causar ansiedad e insomnio', 'Estimular el sistema nervioso'],
    correct: 2,
    explanation: { correct: 'El texto menciona que el consumo excesivo "puede causar ansiedad, insomnio y problemas digestivos".', wrongs: ['Ese es un efecto positivo', 'Ese es un efecto positivo', 'Opción correcta', 'Ese es el efecto general, no un negativo del exceso'] }
  },
  {
    id: 'LC25', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'media',
    context: `"La novela 'Cien años de soledad' narra la historia de la familia Buendía en Macondo. A través del realismo mágico, García Márquez explora temas como el amor, la soledad, el poder y la memoria."`,
    question: `¿Qué recurso literario utiliza principalmente García Márquez en 'Cien años de soledad'?`,
    options: ['El romanticismo', 'El realismo mágico', 'El naturalismo', 'El modernismo'],
    correct: 1,
    explanation: { correct: 'El texto menciona explícitamente "A través del realismo mágico", que es el recurso característico de García Márquez.', wrongs: ['No es romanticismo', 'Opción correcta', 'No es naturalismo', 'No es modernismo'] }
  },
  {
    id: 'LC26', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'dificil',
    context: `"El concepto de 'hegemonía cultural' de Gramsci se refiere a la capacidad de una clase dominante para imponer su visión del mundo como la visión 'natural' y 'universal', de modo que las clases subalternas aceptan el orden existente como inevitable."`,
    question: `Según Gramsci, la hegemonía cultural funciona mediante:`,
    options: ['El uso exclusivo de la fuerza militar', 'La imposición de una visión del mundo que parece natural e inevitable', 'La eliminación de toda cultura popular', 'El rechazo de cualquier ideología'],
    correct: 1,
    explanation: { correct: 'Gramsci define la hegemonía como "la capacidad de imponer su visión del mundo como la visión natural y universal" para que se acepte el orden como inevitable.', wrongs: ['Gramsci se enfoca en el consenso, no en la fuerza', 'Opción correcta', 'La hegemonía incorpora elementos de cultura popular', 'La hegemonía ES una ideología dominante'] }
  },
  {
    id: 'LC27', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'facil',
    context: `"La contaminación del aire en las grandes ciudades afecta la salud respiratoria de millones de personas. Los principales contaminantes son el material particulado, el ozono troposférico y los óxidos de nitrógeno."`,
    question: `¿Cuál es la principal consecuencia de la contaminación del aire según el texto?`,
    options: ['Problemas económicos', 'Afectaciones a la salud respiratoria', 'Aumento de la temperatura global', 'Daños en edificios'],
    correct: 1,
    explanation: { correct: 'El texto dice que "afecta la salud respiratoria de millones de personas".', wrongs: ['No es el tema principal', 'Opción correcta', 'No se menciona temperatura global', 'No se mencionan daños estructurales'] }
  },
  // ===== MATEMÁTICAS - BLOQUE 3 =====
  {
    id: 'MT22', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'media',
    question: `¿Cuál es la raíz cuadrada de 144?`,
    options: ['10', '11', '12', '14'],
    correct: 2,
    explanation: { correct: '√144 = 12, porque 12 × 12 = 144.', wrongs: ['10 × 10 = 100', '11 × 11 = 121', 'Opción correcta', '14 × 14 = 196'] }
  },
  {
    id: 'MT23', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'dificil',
    question: `Una tienda ofrece un 25% de descuento en un artículo que cuesta $120.000. Además, ofrece un 10% de descuento adicional sobre el precio con descuento. ¿Cuánto se paga finalmente?`,
    options: ['$78.000', '$81.000', '$84.000', '$90.000'],
    correct: 1,
    explanation: { correct: '1er descuento: 25% de $120.000 = $30.000 → precio = $90.000. 2do descuento: 10% de $90.000 = $9.000 → precio final = $90.000 - $9.000 = $81.000.', wrongs: ['Calculaste 35% directo: 120000×0.65=78000, pero los descuentos no se suman así', 'Opción correcta', 'Calculaste 30% total: 120000×0.7=84000', 'Solo aplicaste el 25%: 120000×0.75=90000'] }
  },
  {
    id: 'MT24', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'facil',
    question: `Un número es divisible por 3 si:`,
    options: ['Termina en 0 o 5', 'La suma de sus dígitos es múltiplo de 3', 'Termina en cifra par', 'El último dígito es 0'],
    correct: 1,
    explanation: { correct: 'Un número es divisible por 3 cuando la suma de sus dígitos es múltiplo de 3. Ej: 123 → 1+2+3=6, 6 es múltiplo de 3, entonces 123 es divisible por 3.', wrongs: ['Esa es la regla del 5', 'Opción correcta', 'Esa es la regla del 2', 'Esa es la regla del 10'] }
  },
  {
    id: 'MT25', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'dificil',
    question: `En una caja hay 12 bolas: 4 rojas, 3 azules y 5 verdes. Si se sacan dos bolas sin reemplazo, ¿cuál es la probabilidad de que ambas sean rojas?`,
    options: ['1/11', '1/9', '4/33', '1/3'],
    correct: 0,
    explanation: { correct: 'P(1ra roja) = 4/12 = 1/3. P(2da roja | 1ra roja) = 3/11. P(ambas rojas) = (1/3)×(3/11) = 3/33 = 1/11.', wrongs: ['Opción correcta', 'Calculaste mal la multiplicación', 'Calculaste (4/12)×(4/12) como con reemplazo', 'Muy alta, revisa las probabilidades'] }
  },
  {
    id: 'MT26', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'media',
    question: `Si 3x + 7 = 22, ¿cuál es el valor de x?`,
    options: ['3', '5', '7', '15'],
    correct: 1,
    explanation: { correct: '3x + 7 = 22 → 3x = 22 - 7 → 3x = 15 → x = 15/3 = 5.', wrongs: ['Si x=3: 3(3)+7=16, no 22', 'Opción correcta', 'Si x=7: 3(7)+7=28, no 22', 'Si x=15: 3(15)+7=52, no 22'] }
  },
  {
    id: 'MT27', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'facil',
    question: `Un rectángulo mide 8 cm de largo y 5 cm de ancho. ¿Cuál es su área?`,
    options: ['26 cm²', '13 cm²', '40 cm²', '45 cm²'],
    correct: 2,
    explanation: { correct: 'Área del rectángulo = largo × ancho = 8 × 5 = 40 cm².', wrongs: ['Eso sería 2(8+5) = 26, que es el perímetro', 'Eso sería 8+5 = 13', 'Opción correcta', 'Multiplicaste mal'] }
  },
  {
    id: 'MT28', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'dificil',
    question: `¿Cuál es el mínimo común múltiplo (MCM) de 6 y 8?`,
    options: ['48', '24', '12', '16'],
    correct: 1,
    explanation: { correct: 'Múltiplos de 6: 6, 12, 18, 24, 30... Múltiplos de 8: 8, 16, 24, 32... El mínimo común es 24.', wrongs: ['Ese es el producto 6×8=48, no el MCM', 'Opción correcta', '12 no es múltiplo de 8', '16 no es múltiplo de 6'] }
  },
  {
    id: 'MT29', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'media',
    question: `La media aritmética de 5 números es 12. Si se agrega el número 18, ¿cuál será la nueva media?`,
    options: ['13', '14', '15', '12'],
    correct: 0,
    explanation: { correct: 'Suma inicial = 5 × 12 = 60. Suma nueva = 60 + 18 = 78. Nueva media = 78/6 = 13.', wrongs: ['Opción correcta', 'Si fuera 14 la suma sería 84, demasiado', 'Si fuera 15 la suma sería 90', 'La media debe cambiar al agregar 18 que es mayor'] }
  },
  {
    id: 'MT30', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'facil',
    question: `¿Cuántos grados mide un ángulo recto?`,
    options: ['45°', '90°', '180°', '360°'],
    correct: 1,
    explanation: { correct: 'Un ángulo recto mide exactamente 90°.', wrongs: ['45° es un ángulo agudo', 'Opción correcta', '180° es un ángulo llano', '360° es una vuelta completa'] }
  },
  // ===== SOCIALES - BLOQUE 3 =====
  {
    id: 'SC21', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'media',
    question: `El derecho al debido proceso está consagrado en el artículo 29 de la Constitución colombiana. Esto significa que:`,
    options: ['Las autoridades pueden actuar sin restricciones', 'Toda persona tiene derecho a un proceso justo con garantías legales', 'Solo los abogados tienen derecho a defensa', 'Los jueces pueden decidir sin pruebas'],
    correct: 1,
    explanation: { correct: 'El debido proceso garantiza que toda persona tiene derecho a un juicio justo, con defensa, pruebas, impugnación y todas las garantías legales establecidas.', wrongs: ['El debido proceso LIMITA a las autoridades', 'Opción correcta', 'Toda persona tiene derecho a defensa, no solo abogados', 'Los jueces deben decidir basados en pruebas'] }
  },
  {
    id: 'SC22', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'dificil',
    question: `La Guerra Fría (1947-1991) fue un conflicto:`,
    options: ['Militar directo entre Estados Unidos y la Unión Soviética', 'Ideológico, político y económico entre el bloque capitalista y el comunista', 'Exclusivamente económico entre Europa y Asia', 'Religioso entre cristianos y musulmanes'],
    correct: 1,
    explanation: { correct: 'La Guerra Fría fue un conflicto ideológico, político, económico y tecnológico entre EE.UU. (capitalismo) y la URSS (comunismo), sin enfrentamiento militar directo entre ambas superpotencias.', wrongs: ['Nunca hubo guerra directa entre ambas superpotencias', 'Opción correcta', 'Fue global, no entre continentes específicos', 'No fue un conflicto religioso'] }
  },
  {
    id: 'SC23', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'facil',
    question: `El presidente de Colombia se elige por voto popular para un período de:`,
    options: ['2 años', '4 años', '6 años', '8 años'],
    correct: 1,
    explanation: { correct: 'Según la Constitución de 1991, el presidente de Colombia se elige para un período de 4 años, con posibilidad de reelección (actualmente no vigente tras el Acto Legislativo de 2015).', wrongs: ['Los alcaldes y gobernadores son 4 años, no 2', 'Opción correcta', 'Los senadores son 4 años, no 6', 'Ningún cargo en Colombia es de 8 años'] }
  },
  {
    id: 'SC24', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'dificil',
    context: `"La Encuesta Nacional de Demografía y Salud muestra que la tasa de fecundidad en Colombia ha disminuido de 7 hijos por mujer en 1960 a 1.8 hijos en la actualidad."`,
    question: `La disminución de la tasa de fecundidad en Colombia se asocia con:`,
    options: ['El aumento de la población rural', 'El mayor acceso a educación y métodos anticonceptivos', 'La prohibición de tener hijos', 'El aumento de la mortalidad infantil'],
    correct: 1,
    explanation: { correct: 'La disminución de la fecundidad se relaciona con mayor acceso a educación (especialmente femenina), planificación familiar, métodos anticonceptivos, urbanización y participación laboral de la mujer.', wrongs: ['La población rural suele tener más hijos', 'Opción correcta', 'No hay prohibición de tener hijos', 'La mortalidad infantil HA disminuido'] }
  },
  {
    id: 'SC25', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'media',
    question: `Las Reglas de Origen en los acuerdos comerciales internacionales determinan:`,
    options: ['El idioma de las negociaciones', 'La nacionalidad de un producto para determinar aranceles', 'Las leyes laborales de cada país', 'Las tasas de interés bancarias'],
    correct: 1,
    explanation: { correct: 'Las Reglas de Origen determinan la "nacionalidad" económica de un producto para saber qué aranceles aplicarle según los acuerdos comerciales vigentes.', wrongs: ['No tienen que ver con el idioma', 'Opción correcta', 'No regulan leyes laborales', 'No regulan tasas de interés'] }
  },
  {
    id: 'SC26', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'facil',
    question: `La ONU define el desarrollo sostenible como aquel que:`,
    options: ['Satisface las necesidades del presente sin comprometer las del futuro', 'Prioriza el crecimiento económico sobre el ambiente', 'Se enfoca exclusivamente en la protección ambiental', 'Busca el crecimiento ilimitado de la producción'],
    correct: 0,
    explanation: { correct: 'El desarrollo sostenible "satisface las necesidades del presente sin comprometer la capacidad de las futuras generaciones para satisfacer las propias" (Informe Brundtland, 1987).', wrongs: ['Opción correcta', 'Busca equilibrio entre economía, sociedad y ambiente', 'Incluye dimensiones social y económica también', 'Tiene límites ecológicos'] }
  },
  // ===== CIENCIAS - BLOQUE 3 =====
  {
    id: 'CN21', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
    question: `¿Cuál de los siguientes elementos químicos es necesario para la formación de los huesos?`,
    options: ['Hierro', 'Calcio', 'Sodio', 'Potasio'],
    correct: 1,
    explanation: { correct: 'El calcio (Ca) es el principal componente mineral de los huesos y dientes. La falta de calcio puede causar osteoporosis y problemas óseos.', wrongs: ['El hierro es para la hemoglobina', 'Opción correcta', 'El sodio regula el equilibrio de líquidos', 'El potasio es para la función muscular'] }
  },
  {
    id: 'CN22', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
    question: `Si un automóvil viaja a velocidad constante de 20 m/s durante 30 segundos, ¿qué distancia recorre?`,
    options: ['600 m', '60 m', '300 m', '150 m'],
    correct: 0,
    explanation: { correct: 'Distancia = velocidad × tiempo = 20 m/s × 30 s = 600 metros.', wrongs: ['Opción correcta', 'Dividiste 20/30 en lugar de multiplicar', 'Multiplicaste 10×30 en lugar de 20×30', 'Dividiste 30/20 en lugar de multiplicar'] }
  },
  {
    id: 'CN23', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
    question: `¿Cuál de los siguientes órganos pertenece al sistema digestivo?`,
    options: ['El pulmón', 'El corazón', 'El estómago', 'El riñón'],
    correct: 2,
    explanation: { correct: 'El estómago es parte del sistema digestivo. Se encarga de descomponer los alimentos mediante ácidos y enzimas digestivas.', wrongs: ['El pulmón es del sistema respiratorio', 'El corazón es del sistema circulatorio', 'Opción correcta', 'El riñón es del sistema excretor'] }
  },
  {
    id: 'CN24', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
    question: `En el sistema periódico, los elementos del mismo grupo (columna) tienen en común:`,
    options: ['El mismo número de neutrones', 'El mismo número de electrones en su capa de valencia', 'La misma masa atómica', 'El mismo número de protones'],
    correct: 1,
    explanation: { correct: 'Los elementos de un mismo grupo comparten el mismo número de electrones en su capa de valencia, lo que les da propiedades químicas similares.', wrongs: ['Los neutrones varían entre isótopos', 'Opción correcta', 'Cada elemento tiene masa atómica diferente', 'El número de protones diferencia a cada elemento'] }
  },
  {
    id: 'CN25', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
    question: `La selección natural, propuesta por Darwin, se basa en:`,
    options: ['La herencia de características adquiridas', 'La supervivencia diferencial de organismos con características ventajosas', 'La creación independiente de cada especie', 'El uso y desuso de los órganos'],
    correct: 1,
    explanation: { correct: 'La selección natural es el proceso por el cual los organismos con características ventajosas para su entorno tienen mayor probabilidad de sobrevivir y reproducirse.', wrongs: ['Esa es la teoría de Lamarck, no de Darwin', 'Opción correcta', 'Darwin propuso evolución a partir de ancestros comunes', 'Esa también es idea de Lamarck'] }
  },
  {
    id: 'CN26', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
    question: `El agua potable se obtiene mediante un proceso de:`,
    options: ['Decantación y filtración únicamente', 'Potabilización que incluye filtración, cloración y control de calidad', 'Simple congelación', 'Destilación al vacío'],
    correct: 1,
    explanation: { correct: 'La potabilización del agua incluye varios procesos: captación, coagulación, sedimentación, filtración, cloración/desinfección y control de calidad.', wrongs: ['Se requieren más procesos que solo decantación y filtración', 'Opción correcta', 'La congelación no potabiliza el agua', 'La destilación no es el método estándar para agua potable municipal'] }
  },
  {
    id: 'CN27', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
    question: `Un electroimán funciona gracias a:`,
    options: ['La atracción gravitacional', 'El campo magnético generado por una corriente eléctrica', 'La fricción entre metales', 'La reacción química entre ácidos'],
    correct: 1,
    explanation: { correct: 'Un electroimán consiste en una bobina de alambre por la que circula corriente eléctrica, generando un campo magnético. Al pasar corriente, el núcleo de hierro se magnetiza.', wrongs: ['La gravedad no genera electromagnetismo', 'Opción correcta', 'No se basa en fricción', 'No es una reacción química'] }
  },
  {
    id: 'CN28', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
    question: `¿Cuál de los siguientes gases es el más abundante en la atmósfera terrestre?`,
    options: ['Oxígeno (O₂)', 'Dióxido de carbono (CO₂)', 'Nitrógeno (N₂)', 'Argón (Ar)'],
    correct: 2,
    explanation: { correct: 'El nitrógeno (N₂) constituye aproximadamente el 78% de la atmósfera terrestre. El oxígeno es el segundo con ~21%.', wrongs: ['El oxígeno es ~21%, no el más abundante', 'El CO₂ es ~0.04%', 'Opción correcta', 'El argón es ~0.93%'] }
  },
  // ===== INGLÉS - BLOQUE 3 =====
  {
    id: 'EN19', area: 'ingles', areaName: 'Inglés', difficulty: 'media',
    context: `"She ___ to the store yesterday."`,
    question: `Choose the correct verb form:`,
    options: ['go', 'goes', 'went', 'gone'],
    correct: 2,
    explanation: { correct: '"Yesterday" indicates past time. The past simple of "go" is "went". "She went to the store yesterday."', wrongs: ['"Go" is present', '"Goes" is present third person', 'Opción correcta', '"Gone" needs a helper verb (has gone)'] }
  },
  {
    id: 'EN20', area: 'ingles', areaName: 'Inglés', difficulty: 'dificil',
    context: `"If I had known about the party, I ___ gone."`,
    question: `Choose the correct option:`,
    options: ['will have', 'would have', 'have', 'had'],
    correct: 1,
    explanation: { correct: 'Third conditional (past unreal): If + had + past participle, would have + past participle. "If I had known, I would have gone."', wrongs: ['Third conditional needs "would have"', 'Opción correcta', '"Have gone" is present perfect, not conditional', '"Had gone" is past perfect'] }
  },
  {
    id: 'EN21', area: 'ingles', areaName: 'Inglés', difficulty: 'facil',
    context: `"This is ___ interesting movie. You should watch it."`,
    question: `Choose the correct article:`,
    options: ['a', 'an', 'the', 'no article'],
    correct: 1,
    explanation: { correct: '"Interesting" starts with a vowel sound, so we use "an". "This is an interesting movie."', wrongs: ['"A" is used before consonant sounds', 'Opción correcta', '"The" would specify a particular movie', 'An article is needed before "interesting movie"'] }
  },
  {
    id: 'EN22', area: 'ingles', areaName: 'Inglés', difficulty: 'media',
    context: `"The children were playing in the park ___ it started to rain."`,
    question: `Choose the correct conjunction:`,
    options: ['so', 'because', 'when', 'until'],
    correct: 2,
    explanation: { correct: '"When" connects two events happening around the same time. "The children were playing in the park when it started to rain" (one event interrupted another).', wrongs: ['"So" indicates result, not simultaneity', '"Because" indicates cause', 'Opción correcta', '"Until" indicates up to a point in time'] }
  },
  {
    id: 'EN23', area: 'ingles', areaName: 'Inglés', difficulty: 'dificil',
    context: `"Not only ___ she speak French, but she also speaks German."`,
    question: `Choose the correct option:`,
    options: ['does', 'do', 'did', 'can'],
    correct: 0,
    explanation: { correct: 'With "Not only" at the beginning of a clause, we use inversion: auxiliary verb + subject. "Not only DOES she speak French..." Present simple needs "does".', wrongs: ['Opción correcta', '"Do" is for plural subjects', '"Did" is past tense, but the second part is present', '"Can" would work but the sentence structure needs "does" for inversion'] }
  },
  {
    id: 'EN24', area: 'ingles', areaName: 'Inglés', difficulty: 'facil',
    context: `"You look tired. I ___ you a coffee."`,
    question: `Choose the correct option (offer):`,
    options: ['am making', 'will make', 'make', 'made'],
    correct: 1,
    explanation: { correct: 'For spontaneous offers, we use "will". "I will make you a coffee" (decision made at the moment of speaking).', wrongs: ['Present continuous is for arrangements', 'Opción correcta', 'Present simple is for routines', 'Past simple is for past events'] }
  },
  {
    id: 'EN25', area: 'ingles', areaName: 'Inglés', difficulty: 'media',
    context: `"The book ___ is on the table is mine."`,
    question: `Choose the correct relative pronoun:`,
    options: ['who', 'which', 'where', 'whom'],
    correct: 1,
    explanation: { correct: '"Which" is used for things and objects. "The book WHICH is on the table is mine." (Also "that" would work.)', wrongs: ['"Who" is for people', 'Opción correcta', '"Where" is for places', '"Whom" is object pronoun for people'] }
  },
  {
    id: 'EN26', area: 'ingles', areaName: 'Inglés', difficulty: 'dificil',
    context: `"By next year, she ___ her degree."`,
    question: `Choose the correct verb form:`,
    options: ['finishes', 'finished', 'will have finished', 'is finishing'],
    correct: 2,
    explanation: { correct: '"By next year" refers to a point in the future by which an action will be completed. Future perfect is used: "will have finished".', wrongs: ['Present simple is not used for future completion', 'Past simple is for past events', 'Opción correcta', 'Present continuous is for ongoing actions'] }
  },
  {
    id: 'EN27', area: 'ingles', areaName: 'Inglés', difficulty: 'facil',
    context: `"How ___ milk do you need for the recipe?"`,
    question: `Choose the correct quantifier:`,
    options: ['many', 'much', 'few', 'several'],
    correct: 1,
    explanation: { correct: '"Much" is used with uncountable nouns. "Milk" is uncountable, so "How much milk?"', wrongs: ['"Many" is for countable plural nouns', 'Opción correcta', '"Few" is for countable nouns with negative meaning', '"Several" is for countable plural nouns'] }
  },
  {
    id: 'EN28', area: 'ingles', areaName: 'Inglés', difficulty: 'media',
    context: `"I've been working here ___ 2019."`,
    question: `Choose the correct preposition:`,
    options: ['for', 'since', 'during', 'in'],
    correct: 1,
    explanation: { correct: '"Since" is used with a specific point in time (2019). "I have been working here since 2019."', wrongs: ['"For" is used with duration (for 5 years)', 'Opción correcta', '"During" is within a period', '"In" is used with months/years but not with present perfect continuous'] }
  },
  // ===== MÁS LECTURA =====
  {
    id: 'LC28', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'media',
    context: `"El teletrabajo, que se masificó durante la pandemia, ha demostrado ser viable para muchas empresas. Sin embargo, también ha generado desafíos como el aislamiento social y la dificultad para separar la vida laboral de la personal."`,
    question: `¿Cuál es un desafío del teletrabajo mencionado en el texto?`,
    options: ['La baja productividad', 'El aislamiento social', 'El aumento de reuniones', 'La falta de tecnología'],
    correct: 1,
    explanation: { correct: 'El texto menciona "desafíos como el aislamiento social y la dificultad para separar la vida laboral de la personal".', wrongs: ['No se menciona baja productividad', 'Opción correcta', 'No se mencionan reuniones', 'No se menciona falta de tecnología'] }
  },
  {
    id: 'LC29', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'dificil',
    context: `"El mito de la caverna de Platón describe a unos prisioneros encadenados que solo ven sombras proyectadas en una pared. Para ellos, esas sombras son la realidad. Cuando uno escapa y ve el mundo real, al regresar los demás no le creen."`,
    question: `La alegoría de la caverna representa:`,
    options: ['La importancia de las sombras en el arte', 'El paso de la ignorancia al conocimiento y la resistencia al cambio', 'La vida en las cavernas antiguas', 'La necesidad de cadenas para la seguridad'],
    correct: 1,
    explanation: { correct: 'La caverna representa el mundo de las apariencias (ignorancia), la salida representa el conocimiento (filosofía), y la resistencia de los otros prisioneros muestra la dificultad de aceptar nuevas verdades.', wrongs: ['El propósito es filosófico, no artístico', 'Opción correcta', 'Es una alegoría filosófica, no histórica', 'Las cadenas representan la ignorancia, no la seguridad'] }
  },
  {
    id: 'LC30', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'facil',
    context: `"Las redes sociales permiten a las personas mantenerse conectadas sin importar la distancia. No obstante, el uso excesivo puede afectar la salud mental y las relaciones cara a cara."`,
    question: `¿Cuál es una ventaja de las redes sociales según el texto?`,
    options: ['Afectan la salud mental', 'Mantienen conectadas a las personas sin importar la distancia', 'Reemplazan las relaciones cara a cara', 'Son el único medio de comunicación'],
    correct: 1,
    explanation: { correct: 'El texto dice que "permiten a las personas mantenerse conectadas sin importar la distancia".', wrongs: ['Esa es una desventaja', 'Opción correcta', 'No las reemplazan, las complementan', 'No son el único medio'] }
  },
  // ===== MÁS SOCIALES =====
  {
    id: 'SC27', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'media',
    question: `El fenómeno de la globalización ha generado en Colombia:`,
    options: ['El aislamiento total del país', 'Mayor integración económica y cultural con el mundo', 'La eliminación de la cultura nacional', 'La desaparición del comercio local'],
    correct: 1,
    explanation: { correct: 'La globalización ha integrado a Colombia en la economía mundial a través del comercio, inversión extranjera, intercambios culturales y tecnológicos.', wrongs: ['Colombia está más integrada globalmente', 'Opción correcta', 'La cultura local se mantiene y se mezcla con influencias globales', 'El comercio local sigue existiendo'] }
  },
  {
    id: 'SC28', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'dificil',
    question: `La JEP (Jurisdicción Especial para la Paz) fue creada en el marco del Acuerdo de Paz de 2016 con las FARC. Su función principal es:`,
    options: ['Juzgar delitos comunes', 'Investigar, juzgar y sancionar delitos graves cometidos durante el conflicto armado', 'Reemplazar a la Corte Suprema de Justicia', 'Administrar las cárceles del país'],
    correct: 1,
    explanation: { correct: 'La JEP es el componente de justicia del Sistema Integral de Verdad, Justicia, Reparación y No Repetición. Investiga y juzga los delitos más graves del conflicto armado.', wrongs: ['Solo juzga delitos relacionados con el conflicto, no comunes', 'Opción correcta', 'La JEP coexiste con la Corte Suprema, no la reemplaza', 'La administración de cárceles es función del INPEC'] }
  },
  {
    id: 'SC29', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'facil',
    question: `La cordillera de los Andes en Colombia se divide en tres ramas:`,
    options: ['Central, Occidental y Oriental', 'Norte, Sur y Central', 'Alta, Media y Baja', 'Andina, Caribe y Pacífica'],
    correct: 0,
    explanation: { correct: 'En Colombia, la cordillera de los Andes se divide en tres ramas: Cordillera Occidental, Cordillera Central y Cordillera Oriental.', wrongs: ['Opción correcta', 'No es así la división', 'No es así la división', 'Esas son regiones naturales, no cordilleras'] }
  },
  // ===== MÁS CIENCIAS =====
  {
    id: 'CN29', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
    question: `¿Cuál de los siguientes alimentos es rico en proteínas?`,
    options: ['Arroz', 'Pan', 'Huevos', 'Mantequilla'],
    correct: 2,
    explanation: { correct: 'Los huevos son una excelente fuente de proteínas de alto valor biológico. También aportan vitaminas A, D, E y B12.', wrongs: ['El arroz es rico en carbohidratos', 'El pan es rico en carbohidratos', 'Opción correcta', 'La mantequilla es rica en grasas'] }
  },
  {
    id: 'CN30', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
    question: `Dos resistencias de 4 Ω y 6 Ω se conectan en serie. ¿Cuál es la resistencia equivalente?`,
    options: ['2.4 Ω', '10 Ω', '24 Ω', '5 Ω'],
    correct: 1,
    explanation: { correct: 'En serie, la resistencia equivalente es la suma: Req = 4Ω + 6Ω = 10Ω.', wrongs: ['Eso sería en paralelo: (4×6)/(4+6)=2.4Ω', 'Opción correcta', 'Multiplicaste en lugar de sumar', 'Promediaste 4 y 6'] }
  },
  {
    id: 'CN31', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
    question: `La función principal de los glóbulos rojos en la sangre es:`,
    options: ['Defender al cuerpo de infecciones', 'Transportar oxígeno a los tejidos', 'Producir anticuerpos', 'Coagular la sangre'],
    correct: 1,
    explanation: { correct: 'Los glóbulos rojos (eritrocitos) contienen hemoglobina y se encargan de transportar oxígeno desde los pulmones a todos los tejidos del cuerpo.', wrongs: ['Esa es función de los glóbulos blancos', 'Opción correcta', 'También es función de los glóbulos blancos', 'Esa es función de las plaquetas'] }
  },
  // ===== MÁS INGLÉS =====
  {
    id: 'EN29', area: 'ingles', areaName: 'Inglés', difficulty: 'media',
    context: `"This is the first time I ___ sushi."`,
    question: `Choose the correct verb form:`,
    options: ['eat', 'ate', 'have eaten', 'am eating'],
    correct: 2,
    explanation: { correct: 'The structure "This is the first time I..." is followed by present perfect: "This is the first time I have eaten sushi."', wrongs: ['Present simple is not used after "first time"', 'Past simple describes a finished action, not experience', 'Opción correcta', 'Present continuous is for actions in progress'] }
  },
  {
    id: 'EN30', area: 'ingles', areaName: 'Inglés', difficulty: 'dificil',
    context: `"The more you practice, ___ you will become."`,
    question: `Choose the correct option:`,
    options: ['the best', 'the better', 'better', 'the good'],
    correct: 1,
    explanation: { correct: 'The structure "The more... the more..." uses comparative adjectives. "The more you practice, THE BETTER you will become."', wrongs: ['"Best" is superlative, not used in this comparative structure', 'Opción correcta', 'Needs "the" before "better" in this structure', '"Good" is not comparative'] }
  },

  // ===== LECTURA CRÍTICA - BLOQUE 4 (LC31-LC60) =====
  {
    id: 'LC31', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'media',
    context: `"El concepto de 'biopolítica' de Michel Foucault se refiere a la forma en que el poder político gestiona la vida de las poblaciones a través de mecanismos como la salud pública, la demografía y la seguridad social."`,
    question: `Según Foucault, la biopolítica se ejerce mediante:`,
    options: ['La represión violenta de la población', 'La gestión de la vida a través de políticas públicas', 'La eliminación de servicios sociales', 'El control exclusivo de los medios de comunicación'],
    correct: 1,
    explanation: { correct: 'Foucault define la biopolítica como la gestión de la vida de las poblaciones mediante mecanismos como salud pública, demografía y seguridad social.', wrongs: ['La biopolítica no se basa en represión sino en gestión', 'Opción correcta', 'Al contrario, implica expandir servicios sociales', 'El control de medios no es el foco de la biopolítica'] }
  },
  {
    id: 'LC32', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'facil',
    context: `"La tecnología blockchain permite registrar transacciones de forma descentralizada y segura. Cada bloque de información está enlazado criptográficamente al anterior, creando una cadena inmutable."`,
    question: `La principal característica de blockchain según el texto es:`,
    options: ['Ser un sistema centralizado', 'Registrar transacciones de forma descentralizada y segura', 'Almacenar datos en un solo servidor', 'Ser exclusivo de criptomonedas'],
    correct: 1,
    explanation: { correct: 'El texto destaca que blockchain "permite registrar transacciones de forma descentralizada y segura" con una cadena inmutable.', wrongs: ['Blockchain es descentralizado, no centralizado', 'Opción correcta', 'Los datos se distribuyen en múltiples nodos', 'Blockchain tiene usos más allá de criptomonedas'] }
  },
  {
    id: 'LC33', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'dificil',
    context: `"Algunos filósofos sostienen que la libertad no consiste en hacer lo que uno quiere, sino en tener la capacidad de actuar según la razón y la voluntad autodeterminada. Esta distinción separa la libertad negativa (ausencia de obstáculos) de la libertad positiva (autogobierno)."`,
    question: `La diferencia entre libertad negativa y positiva es que la primera se enfoca en:`,
    options: ['La autodeterminación racional', 'La ausencia de obstáculos externos', 'El cumplimiento de leyes', 'La participación política'],
    correct: 1,
    explanation: { correct: 'El texto define libertad negativa como "ausencia de obstáculos" y libertad positiva como "autogobierno" o capacidad de actuar según la razón.', wrongs: ['Esa es la libertad positiva', 'Opción correcta', 'Eso se relaciona con ambas formas de libertad', 'La participación política es otro concepto'] }
  },
  {
    id: 'LC34', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'media',
    context: `"El aumento del nivel del mar debido al cambio climático amenaza las zonas costeras de Colombia. Ciudades como Cartagena, Barranquilla y San Andrés podrían verse gravemente afectadas en las próximas décadas si no se toman medidas de adaptación."`,
    question: `Según el texto, las zonas costeras de Colombia están amenazadas por:`,
    options: ['La erosión natural de las playas', 'El aumento del nivel del mar por cambio climático', 'La construcción excesiva de hoteles', 'Los huracanes tropicales'],
    correct: 1,
    explanation: { correct: 'El texto menciona que "el aumento del nivel del mar debido al cambio climático amenaza las zonas costeras de Colombia".', wrongs: ['No se menciona erosión natural', 'Opción correcta', 'No se menciona construcción de hoteles', 'No se mencionan huracanes'] }
  },
  {
    id: 'LC35', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'facil',
    context: `"La música es una expresión cultural fundamental que refleja la identidad de los pueblos. En Colombia, la cumbia, el vallenato y el currulao son manifestaciones musicales que combinan herencias indígenas, africanas y europeas."`,
    question: `El texto afirma que la música colombiana es producto de:`,
    options: ['Una sola tradición cultural', 'La mezcla de herencias indígenas, africanas y europeas', 'La influencia exclusivamente española', 'La música contemporánea internacional'],
    correct: 1,
    explanation: { correct: 'El texto dice que la cumbia, vallenato y currulao "combinan herencias indígenas, africanas y europeas".', wrongs: ['Es una mezcla de múltiples tradiciones', 'Opción correcta', 'Incluye herencia indígena y africana también', 'La música colombiana tiene raíces tradicionales profundas'] }
  },
  {
    id: 'LC36', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'dificil',
    context: `"El 'efecto Dunning-Kruger' es un sesgo cognitivo en el cual las personas con baja habilidad en una tarea sobreestiman su capacidad, mientras que las personas con alta habilidad tienden a subestimarla."`,
    question: `El efecto Dunning-Kruger describe:`,
    options: ['La precisión en la autoevaluación', 'La tendencia a sobreestimar o subestimar la propia capacidad según el nivel de habilidad', 'La igualdad de capacidades entre personas', 'La falta de interés por aprender'],
    correct: 1,
    explanation: { correct: 'El efecto muestra que los menos hábiles sobreestiman su capacidad y los más hábiles la subestiman, una distorsión en la autoevaluación.', wrongs: ['El efecto precisamente describe la falta de precisión', 'Opción correcta', 'Las capacidades varían entre personas', 'No es falta de interés, es un sesgo cognitivo'] }
  },
  {
    id: 'LC37', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'media',
    context: `"La obra 'La vorágine' de José Eustasio Rivera describe la violencia y explotación en la selva amazónica durante la fiebre del caucho. El protagonista, Arturo Cova, representa la lucha del hombre contra la naturaleza y la injusticia."`,
    question: `¿Qué aspecto de la historia colombiana retrata 'La vorágine'?`,
    options: ['La independencia de Colombia', 'La explotación cauchera y sus abusos en la Amazonía', 'La fundación de Bogotá', 'La guerra de los Mil Días'],
    correct: 1,
    explanation: { correct: 'La novela describe la "violencia y explotación en la selva amazónica durante la fiebre del caucho", un periodo histórico real de abusos laborales.', wrongs: ['La obra es sobre la explotación cauchera, no la independencia', 'Opción correcta', 'No trata sobre la fundación de Bogotá', 'No se enfoca en la guerra de los Mil Días'] }
  },
  {
    id: 'LC38', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'facil',
    context: `"La OMS recomienda realizar al menos 150 minutos de actividad física moderada a la semana para mantener una buena salud. Sin embargo, el 60% de la población mundial no cumple con esta recomendación."`,
    question: `¿Cuánto tiempo de actividad física recomienda la OMS semanalmente?`,
    options: ['50 minutos', '100 minutos', '150 minutos', '300 minutos'],
    correct: 2,
    explanation: { correct: 'El texto dice que "la OMS recomienda realizar al menos 150 minutos de actividad física moderada a la semana".', wrongs: ['Es menos de lo recomendado', 'Es menos de lo recomendado', 'Opción correcta', 'Eso sería el doble de lo recomendado'] }
  },
  {
    id: 'LC39', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'dificil',
    context: `"El 'dilema del prisionero' en teoría de juegos muestra cómo dos individuos racionales pueden no cooperar incluso cuando la cooperación les beneficiaría mutuamente, debido a la desconfianza y al incentivo individual de traicionar al otro."`,
    question: `El dilema del prisionero demuestra que:`,
    options: ['La cooperación siempre ocurre entre racionales', 'La racionalidad individual puede llevar a resultados subóptimos para el grupo', 'La desconfianza no afecta las decisiones', 'Siempre es mejor traicionar'],
    correct: 1,
    explanation: { correct: 'El dilema muestra que la búsqueda del beneficio individual lleva a ambos a traicionarse, obteniendo un resultado peor que si hubieran cooperado.', wrongs: ['Precisamente muestra que la cooperación no siempre ocurre', 'Opción correcta', 'La desconfianza es central en el dilema', 'Depende de las circunstancias y pagos'] }
  },
  {
    id: 'LC40', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'media',
    context: `"El acceso a internet en Colombia ha crecido significativamente en la última década, pasando de 5 millones de usuarios en 2010 a más de 35 millones en 2024. Sin embargo, persisten brechas importantes entre zonas urbanas y rurales."`,
    question: `¿Qué problema persiste a pesar del crecimiento de internet en Colombia?`,
    options: ['Que el internet no sirve en las ciudades', 'Las brechas de acceso entre zonas urbanas y rurales', 'Que ya no se usa internet', 'Que solo hay internet en zonas rurales'],
    correct: 1,
    explanation: { correct: 'El texto menciona que "persisten brechas importantes entre zonas urbanas y rurales" a pesar del crecimiento general.', wrongs: ['El internet funciona en las ciudades', 'Opción correcta', 'El uso de internet ha crecido', 'El acceso es mayor en zonas urbanas'] }
  },
  {
    id: 'LC41', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'dificil',
    context: `"El 'fetichismo de la mercancía' en Marx se refiere a cómo las relaciones sociales entre personas se ocultan bajo relaciones aparentes entre cosas. En el capitalismo, las mercancías parecen tener valor por sí mismas, cuando en realidad su valor proviene del trabajo humano."`,
    question: `El fetichismo de la mercancía consiste en:`,
    options: ['Valorar el trabajo humano directamente', 'Ver las mercancías como si tuvieran valor propio, ocultando las relaciones sociales', 'Rechazar el consumo de productos', 'Preferir productos artesanales sobre industriales'],
    correct: 1,
    explanation: { correct: 'Marx explica que las relaciones sociales quedan ocultas bajo relaciones entre cosas; las mercancías parecen tener valor propio cuando realmente es trabajo humano.', wrongs: ['El fetichismo OCULTA el trabajo humano', 'Opción correcta', 'No se trata de rechazar el consumo', 'No es sobre productos artesanales'] }
  },
  {
    id: 'LC42', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'facil',
    context: `"Los incendios forestales pueden ser causados por fenómenos naturales como rayos, pero la mayoría son provocados por actividades humanas como quemas agrícolas no controladas, fogatas mal apagadas y actos de vandalismo."`,
    question: `Según el texto, la mayoría de incendios forestales son causados por:`,
    options: ['Fenómenos naturales como rayos', 'Actividades humanas', 'Erupciones volcánicas', 'El calentamiento global exclusivamente'],
    correct: 1,
    explanation: { correct: 'El texto afirma que "la mayoría son provocados por actividades humanas" como quemas agrícolas, fogatas y vandalismo.', wrongs: ['Solo una minoría son por causas naturales', 'Opción correcta', 'No se mencionan erupciones', 'El calentamiento no se menciona como causa directa'] }
  },
  {
    id: 'LC43', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'media',
    context: `"El arte contemporáneo desafía las nociones tradicionales de belleza y técnica. Muchas obras buscan provocar reflexión crítica más que agradar estéticamente, utilizando materiales no convencionales y formatos interactivos."`,
    question: `¿Cuál es el propósito principal del arte contemporáneo según el texto?`,
    options: ['Agradar estéticamente al espectador', 'Provocar reflexión crítica', 'Demostrar técnica artística avanzada', 'Usar materiales tradicionales'],
    correct: 1,
    explanation: { correct: 'El texto dice que el arte contemporáneo "busca provocar reflexión crítica más que agradar estéticamente".', wrongs: ['Esa es la búsqueda del arte tradicional, no el contemporáneo', 'Opción correcta', 'La técnica es secundaria en el arte contemporáneo', 'Usa materiales no convencionales'] }
  },
  {
    id: 'LC44', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'dificil',
    context: `"El concepto de 'anomia' de Durkheim describe un estado de debilitamiento de las normas sociales que guían el comportamiento. Este fenómeno ocurre durante periodos de cambio social rápido, cuando las viejas normas quedan obsoletas y las nuevas aún no se han establecido."`,
    question: `La anomia, según Durkheim, se produce cuando:`,
    options: ['Las normas sociales se fortalecen', 'Hay un debilitamiento de las normas en periodos de cambio', 'La sociedad está perfectamente integrada', 'Todos cumplen las normas establecidas'],
    correct: 1,
    explanation: { correct: 'Durkheim define anomia como el "debilitamiento de las normas sociales" que ocurre en "periodos de cambio social rápido".', wrongs: ['Es lo opuesto: las normas se debilitan', 'Opción correcta', 'Ocurre cuando hay desintegración social', 'La anomia implica incumplimiento de normas'] }
  },
  {
    id: 'LC45', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'facil',
    context: `"La huella de carbono mide la cantidad total de gases de efecto invernadero que produce una persona, empresa o actividad. Reducirla implica cambios en el consumo de energía, transporte y alimentación."`,
    question: `¿Qué mide la huella de carbono?`,
    options: ['La cantidad de árboles plantados', 'Los gases de efecto invernadero producidos', 'El consumo de agua', 'La cantidad de residuos generados'],
    correct: 1,
    explanation: { correct: 'La huella de carbono mide "la cantidad total de gases de efecto invernadero" producidos por una persona, empresa o actividad.', wrongs: ['No mide árboles', 'Opción correcta', 'No mide consumo de agua', 'No mide residuos sólidos'] }
  },
  {
    id: 'LC46', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'media',
    context: `"El lenguaje inclusivo busca evitar sesgos de género en la comunicación. Sus defensores argumentan que el lenguaje no solo refleja la realidad sino que también la construye, por lo que usar formas inclusivas puede promover la igualdad."`,
    question: `Los defensores del lenguaje inclusivo argumentan que:`,
    options: ['El lenguaje no influye en la realidad', 'El lenguaje construye la realidad y puede promover igualdad', 'Solo debe usarse el masculino genérico', 'El cambio lingüístico es innecesario'],
    correct: 1,
    explanation: { correct: 'Los defensores dicen que "el lenguaje no solo refleja la realidad sino que también la construye", por lo que formas inclusivas promueven igualdad.', wrongs: ['El texto dice que SÍ influye y construye realidad', 'Opción correcta', 'El texto defiende el lenguaje inclusivo', 'El cambio lingüístico es parte de la propuesta'] }
  },
  {
    id: 'LC47', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'dificil',
    context: `"El 'etnocentrismo' es la tendencia a juzgar otras culturas según los estándares de la propia. El relativismo cultural, en cambio, propone entender cada cultura en sus propios términos, evitando comparaciones jerárquicas."`,
    question: `La diferencia fundamental entre etnocentrismo y relativismo cultural es:`,
    options: ['Ambos evalúan culturas desde sus propios términos', 'El etnocentrismo juzga desde estándares propios; el relativismo entiende cada cultura en sus términos', 'El relativismo impone una cultura sobre otra', 'No hay diferencia significativa'],
    correct: 1,
    explanation: { correct: 'El etnocentrismo juzga otras culturas con los estándares propios, mientras el relativismo cultural busca entender cada cultura en sus propios términos.', wrongs: ['Son enfoques opuestos', 'Opción correcta', 'El relativismo evita imponer, busca comprender', 'La diferencia es fundamental'] }
  },
  {
    id: 'LC48', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'facil',
    context: `"La vacunación es una de las intervenciones de salud pública más efectivas. Se estima que previene entre 2 y 3 millones de muertes al año en el mundo por enfermedades como el sarampión, la difteria y la tos ferina."`,
    question: `Según el texto, la vacunación es importante porque:`,
    options: ['Cura enfermedades avanzadas', 'Previene millones de muertes al año', 'Solo sirve para niños', 'Reemplaza una alimentación saludable'],
    correct: 1,
    explanation: { correct: 'El texto dice que la vacunación "previene entre 2 y 3 millones de muertes al año" por diversas enfermedades.', wrongs: ['Las vacunas previenen, no curan enfermedades avanzadas', 'Opción correcta', 'Las vacunas benefician a todas las edades', 'La vacunación complementa, no reemplaza'] }
  },
  {
    id: 'LC49', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'media',
    context: `"La 'sociedad del conocimiento' se caracteriza por la centralidad de la información y el saber como motores del desarrollo económico y social. En este contexto, la educación y la innovación se vuelven factores clave para la competitividad."`,
    question: `Según el texto, en la sociedad del conocimiento los motores del desarrollo son:`,
    options: ['Los recursos naturales y la tierra', 'La información y el saber', 'La industria manufacturera', 'El sector agrícola'],
    correct: 1,
    explanation: { correct: 'El texto dice que la "información y el saber" son los "motores del desarrollo económico y social" en la sociedad del conocimiento.', wrongs: ['En la sociedad del conocimiento prima el saber sobre los recursos naturales', 'Opción correcta', 'La manufactura es parte pero no el motor central', 'La agricultura es un sector pero no el motor principal'] }
  },
  {
    id: 'LC50', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'dificil',
    context: `"El 'contrato social' de Rousseau plantea que los individuos aceptan limitar su libertad natural a cambio de la protección y beneficios de vivir en sociedad. La soberanía reside en el pueblo y el gobierno debe expresar la voluntad general."`,
    question: `Según Rousseau, la soberanía reside en:`,
    options: ['El rey o monarca', 'El pueblo', 'El parlamento', 'Los jueces'],
    correct: 1,
    explanation: { correct: 'Rousseau plantea que "la soberanía reside en el pueblo" y el gobierno debe expresar la "voluntad general".', wrongs: ['Rousseau rechaza la monarquía absoluta', 'Opción correcta', 'El parlamento es un representante, pero la soberanía es del pueblo', 'Los jueces aplican la ley, no son soberanos'] }
  },
  {
    id: 'LC51', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'media',
    context: `"Las plataformas de streaming han cambiado la forma de consumir contenido audiovisual. El modelo de suscripción mensual ha reemplazado en gran medida el alquiler y la compra de contenido físico."`,
    question: `¿Qué cambio introdujeron las plataformas de streaming según el texto?`,
    options: ['El alquiler de DVDs por correo', 'El modelo de suscripción mensual para contenido audiovisual', 'La transmisión por señal de televisión abierta', 'La venta de contenido físico en tiendas'],
    correct: 1,
    explanation: { correct: 'El "modelo de suscripción mensual ha reemplazado en gran medida el alquiler y la compra de contenido físico".', wrongs: ['Eso existía antes del streaming', 'Opción correcta', 'El streaming es bajo demanda, no por señal abierta', 'El streaming reemplazó el formato físico'] }
  },
  {
    id: 'LC52', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'facil',
    context: `"Don Quijote de la Mancha, escrito por Miguel de Cervantes, narra las aventuras de un hidalgo que pierde la razón de tanto leer libros de caballerías y decide salir a vivir sus propias aventuras."`,
    question: `¿Por qué Don Quijote decide salir a vivir aventuras?`,
    options: ['Porque es un viajero experimentado', 'Porque pierde la razón de tanto leer libros de caballerías', 'Porque su familia lo obliga', 'Porque busca riquezas'],
    correct: 1,
    explanation: { correct: 'El texto dice que Don Quijote "pierde la razón de tanto leer libros de caballerías y decide salir a vivir sus propias aventuras".', wrongs: ['No es un viajero, es un hidalgo que lee mucho', 'Opción correcta', 'Nadie lo obliga, es decisión propia', 'Busca vivir aventuras como sus libros, no riquezas'] }
  },
  {
    id: 'LC53', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'dificil',
    context: `"La 'acción comunicativa' de Habermas propone que el entendimiento entre personas se logra mediante la comunicación racional, donde los participantes buscan acuerdos basados en argumentos, no en coerción o manipulación."`,
    question: `Según Habermas, la acción comunicativa se basa en:`,
    options: ['La imposición de ideas por la fuerza', 'El entendimiento racional mediante argumentos', 'La manipulación emocional', 'El silencio y la contemplación'],
    correct: 1,
    explanation: { correct: 'Habermas propone que el entendimiento se logra mediante "comunicación racional" donde se buscan "acuerdos basados en argumentos".', wrongs: ['La acción comunicativa rechaza la coerción', 'Opción correcta', 'La manipulación es lo opuesto a la comunicación racional', 'El silencio no genera entendimiento comunicativo'] }
  },
  {
    id: 'LC54', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'media',
    context: `"La economía naranja comprende las actividades económicas basadas en la creatividad, la cultura y la propiedad intelectual. Incluye sectores como el cine, la música, el diseño, la publicidad y el software."`,
    question: `La economía naranja se basa en:`,
    options: ['La extracción de recursos naturales', 'La creatividad, la cultura y la propiedad intelectual', 'La agricultura y ganadería', 'El comercio de bienes físicos importados'],
    correct: 1,
    explanation: { correct: 'La economía naranja comprende actividades basadas en "creatividad, cultura y propiedad intelectual", incluyendo cine, música, diseño y software.', wrongs: ['Eso es la economía extractiva, no la naranja', 'Opción correcta', 'No se basa en agricultura', 'Se enfoca en bienes creativos e intangibles'] }
  },
  {
    id: 'LC55', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'facil',
    context: `"El reciclaje transforma materiales usados en nuevos productos, reduciendo el consumo de materias primas y la cantidad de residuos que van a los vertederos."`,
    question: `¿Cuál es un beneficio del reciclaje mencionado en el texto?`,
    options: ['Aumentar la cantidad de residuos', 'Reducir el consumo de materias primas', 'Incrementar el uso de vertederos', 'Eliminar completamente la basura'],
    correct: 1,
    explanation: { correct: 'El reciclaje "reduce el consumo de materias primas y la cantidad de residuos que van a los vertederos".', wrongs: ['El reciclaje reduce residuos, no los aumenta', 'Opción correcta', 'Reduce el uso de vertederos', 'Reduce la basura pero no la elimina por completo'] }
  },
  {
    id: 'LC56', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'dificil',
    context: `"El 'principio de precaución' en derecho ambiental establece que cuando existen amenazas de daños graves o irreversibles, la falta de certeza científica absoluta no debe usarse como razón para postergar medidas preventivas."`,
    question: `El principio de precaución permite actuar ante amenazas ambientales aunque:`,
    options: ['El daño ya haya ocurrido', 'No haya certeza científica absoluta', 'Las medidas sean muy costosas', 'No haya ninguna evidencia de riesgo'],
    correct: 1,
    explanation: { correct: 'El principio dice que "la falta de certeza científica absoluta no debe usarse para postergar medidas preventivas" ante amenazas graves.', wrongs: ['El principio es PREVENTIVO, actúa antes del daño', 'Opción correcta', 'El costo es una consideración pero no impide aplicar el principio', 'Debe haber evidencia de amenaza, aunque no certeza absoluta'] }
  },
  {
    id: 'LC57', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'media',
    context: `"La posverdad se refiere a circunstancias en las que los hechos objetivos tienen menos influencia en la opinión pública que las apelaciones a las emociones y creencias personales."`,
    question: `En la posverdad, lo que más influye en la opinión pública son:`,
    options: ['Los hechos objetivos verificables', 'Las apelaciones a emociones y creencias personales', 'Los datos científicos', 'Las investigaciones periodísticas'],
    correct: 1,
    explanation: { correct: 'En la posverdad "los hechos objetivos tienen menos influencia que las apelaciones a emociones y creencias personales".', wrongs: ['Los hechos objetivos tienen MENOS influencia', 'Opción correcta', 'Los datos científicos pierden influencia', 'Las investigaciones tienen menos peso que las emociones'] }
  },
  {
    id: 'LC58', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'facil',
    context: `"El fenómeno de 'FOMO' (Fear Of Missing Out) se refiere a la ansiedad que siente una persona al pensar que otros están teniendo experiencias gratificantes de las cuales ella no está participando."`,
    question: `FOMO se refiere a la ansiedad por:`,
    options: ['Perderse en un lugar desconocido', 'Pensar que otros tienen experiencias gratificantes sin uno', 'Tener miedo a las alturas', 'Preocupación por el futuro económico'],
    correct: 1,
    explanation: { correct: 'FOMO es la ansiedad al pensar que "otros están teniendo experiencias gratificantes de las cuales ella no está participando".', wrongs: ['No es sobre perderse físicamente', 'Opción correcta', 'No es sobre alturas', 'No es sobre economía'] }
  },
  {
    id: 'LC59', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'media',
    context: `"La memoria histórica busca reconstruir y preservar el recuerdo de eventos traumáticos del pasado para evitar su repetición. En Colombia, la memoria del conflicto armado es fundamental para la reconciliación."`,
    question: `La memoria histórica es importante porque:`,
    options: ['Busca olvidar el pasado para seguir adelante', 'Preserva el recuerdo de eventos traumáticos para evitar repetirlos', 'Reescribe la historia oficial', 'Solo se enfoca en eventos positivos'],
    correct: 1,
    explanation: { correct: 'La memoria histórica busca "preservar el recuerdo de eventos traumáticos del pasado para evitar su repetición".', wrongs: ['La memoria busca recordar, no olvidar', 'Opción correcta', 'No reescribe, sino que reconstruye desde diversas voces', 'Incluye eventos traumáticos también'] }
  },
  {
    id: 'LC60', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'dificil',
    context: `"El 'imperativo categórico' de Kant establece que debemos actuar solo según máximas que podrían convertirse en leyes universales. Es decir, antes de actuar, debemos preguntarnos si quisiéramos que todos actuaran igual."`,
    question: `El imperativo categórico de Kant propone actuar según:`,
    options: ['El beneficio personal que se obtenga', 'Máximas que podrían ser leyes universales', 'Lo que dicte la mayoría', 'Las consecuencias de los actos'],
    correct: 1,
    explanation: { correct: 'Kant dice que debemos actuar según "máximas que podrían convertirse en leyes universales", preguntándonos si quisiéramos que todos actuaran igual.', wrongs: ['Kant rechaza el interés personal como fundamento moral', 'Opción correcta', 'Kant se basa en la razón individual, no en la mayoría', 'Kant es deontológico, no consecuencialista'] }
  },

  // ===== MATEMÁTICAS - BLOQUE 4 (MT31-MT60) =====
  {
    id: 'MT31', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'facil',
    question: `¿Cuál es el resultado de 15 + 8 × 2?`,
    options: ['46', '31', '23', '38'],
    correct: 1,
    explanation: { correct: 'Jerarquía: primero multiplicación: 8×2=16, luego suma: 15+16=31.', wrongs: ['Sumaste primero: (15+8)×2=46, esa es la forma incorrecta', 'Opción correcta', 'Multiplicaste 15×2=30 y sumaste 8=38? No respeta jerarquía', 'Sumaste 15+8+2?'] }
  },
  {
    id: 'MT32', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'media',
    question: `La expresión (a + b)² es igual a:`,
    options: ['a² + b²', 'a² + 2ab + b²', 'a² + ab + b²', '2a + 2b'],
    correct: 1,
    explanation: { correct: '(a + b)² = (a + b)(a + b) = a² + ab + ab + b² = a² + 2ab + b². Este es un producto notable fundamental.', wrongs: ['Falta el término 2ab', 'Opción correcta', 'Falta un ab: el término medio es 2ab, no ab', 'Eso sería 2(a+b), no (a+b)²'] }
  },
  {
    id: 'MT33', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'dificil',
    question: `Se lanzan dos monedas al aire. ¿Cuál es la probabilidad de obtener al menos un sello?`,
    options: ['1/4', '1/2', '3/4', '1'],
    correct: 2,
    explanation: { correct: 'Resultados posibles: CC, CS, SC, SS. "Al menos un sello" incluye CS, SC, SS = 3 casos. Probabilidad = 3/4.', wrongs: ['Esa es la probabilidad de dos sellos (SS)', 'Esa es la probabilidad de exactamente un sello', 'Opción correcta', 'No es seguro, hay posibilidad de dos caras'] }
  },
  {
    id: 'MT34', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'facil',
    question: `Si x - 5 = 12, ¿cuál es el valor de x?`,
    options: ['7', '12', '17', '60'],
    correct: 2,
    explanation: { correct: 'x - 5 = 12 → x = 12 + 5 → x = 17.', wrongs: ['Restaste 12-5=7, pero debes sumar', 'Ese es el número del otro lado', 'Opción correcta', 'Multiplicaste 12×5=60'] }
  },
  {
    id: 'MT35', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'media',
    question: `¿Cuál es la moda del siguiente conjunto de datos? 2, 3, 5, 3, 7, 3, 8, 5`,
    options: ['3', '5', '4.5', '2'],
    correct: 0,
    explanation: { correct: 'La moda es el valor que más se repite. El 3 aparece tres veces, más que cualquier otro número.', wrongs: ['Opción correcta', 'El 5 aparece dos veces, menos que el 3', 'Esa sería la media, no la moda', 'El 2 aparece solo una vez'] }
  },
  {
    id: 'MT36', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'dificil',
    question: `Un triángulo isósceles tiene dos lados iguales de 10 cm y una base de 12 cm. ¿Cuál es su altura?`,
    options: ['6 cm', '8 cm', '10 cm', '√(44) cm'],
    correct: 1,
    explanation: { correct: 'La altura divide la base en dos partes de 6 cm. Por Pitágoras: h² + 6² = 10² → h² = 100 - 36 = 64 → h = 8 cm.', wrongs: ['Calculaste 10-4 en lugar de aplicar Pitágoras', 'Opción correcta', 'Ese es el lado igual, no la altura', 'Simplifica: √64 = 8'] }
  },
  {
    id: 'MT37', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'facil',
    question: `¿Cuánto es 2⁵?`,
    options: ['10', '25', '32', '64'],
    correct: 2,
    explanation: { correct: '2⁵ = 2 × 2 × 2 × 2 × 2 = 32.', wrongs: ['Multiplicaste 2×5=10', 'Eso es 5², no 2⁵', 'Opción correcta', 'Eso sería 2⁶'] }
  },
  {
    id: 'MT38', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'media',
    question: `Un auto consume 7 litros de gasolina por cada 100 km. ¿Cuántos litros necesitará para recorrer 350 km?`,
    options: ['21 litros', '24.5 litros', '28 litros', '35 litros'],
    correct: 1,
    explanation: { correct: 'Regla de tres: 7L/100km = xL/350km → x = (7×350)/100 = 2450/100 = 24.5 litros.', wrongs: ['Calculaste 7×3=21, pero son 350km, no 300', 'Opción correcta', 'Calculaste 7×4=28, eso sería 400km', 'Calculaste 7×5=35, eso sería 500km'] }
  },
  {
    id: 'MT39', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'dificil',
    question: `Si log₂(x) = 5, ¿cuál es el valor de x?`,
    options: ['10', '25', '32', '64'],
    correct: 2,
    explanation: { correct: 'log₂(x) = 5 significa que 2⁵ = x, entonces x = 32.', wrongs: ['Eso sería log₁₀(10)=1, no corresponde', 'Eso sería si 5²=25, pero es al revés', 'Opción correcta', 'Eso sería 2⁶=64, no 2⁵'] }
  },
  {
    id: 'MT40', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'facil',
    question: `¿Cuál es el volumen de un cubo de arista 3 cm?`,
    options: ['9 cm³', '18 cm³', '27 cm³', '36 cm³'],
    correct: 2,
    explanation: { correct: 'Volumen del cubo = arista³ = 3³ = 3×3×3 = 27 cm³.', wrongs: ['Eso es 3², no 3³', 'Eso sería 3×6 = 18 (área de caras)', 'Opción correcta', 'Eso sería 6×6 = 36'] }
  },
  {
    id: 'MT41', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'media',
    question: `¿Cuál de las siguientes funciones es cuadrática?`,
    options: ['f(x) = 2x + 3', 'f(x) = x² - 4x + 1', 'f(x) = 3ˣ', 'f(x) = 1/x'],
    correct: 1,
    explanation: { correct: 'Una función cuadrática tiene la forma f(x) = ax² + bx + c. f(x) = x² - 4x + 1 es cuadrática.', wrongs: ['Esa es lineal, no cuadrática', 'Opción correcta', 'Esa es exponencial', 'Esa es racional'] }
  },
  {
    id: 'MT42', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'dificil',
    question: `Se invierten $1.000.000 al 6% anual de interés compuesto. ¿Cuál será el capital después de 2 años?`,
    options: ['$1.060.000', '$1.120.000', '$1.123.600', '$1.200.000'],
    correct: 2,
    explanation: { correct: 'Interés compuesto: C = C₀(1+r)ⁿ = 1.000.000(1+0.06)² = 1.000.000(1.1236) = $1.123.600.', wrongs: ['Eso sería interés simple al 6% de un año', 'Eso sería 6%×2=12% simple', 'Opción correcta', 'Eso sería 20% de interés'] }
  },
  {
    id: 'MT43', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'facil',
    question: `En la fracción 3/4, el número 4 se llama:`,
    options: ['Numerador', 'Denominador', 'Cociente', 'Divisor'],
    correct: 1,
    explanation: { correct: 'En una fracción, el número de arriba es el numerador y el de abajo es el denominador. En 3/4, 4 es el denominador.', wrongs: ['3 es el numerador', 'Opción correcta', 'El cociente es el resultado de la división', 'Divisor es otro término, en fracciones se dice denominador'] }
  },
  {
    id: 'MT44', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'media',
    question: `La distancia entre dos puntos A(1,2) y B(4,6) en el plano cartesiano es:`,
    options: ['4', '5', '√(5)', '7'],
    correct: 1,
    explanation: { correct: 'd = √((4-1)² + (6-2)²) = √(3² + 4²) = √(9+16) = √25 = 5.', wrongs: ['Calculaste mal: √(9+16)=√25=5, no 4', 'Opción correcta', 'Revisa: 3²+4²=9+16=25, √25=5', 'Sumaste coordenadas sin fórmula'] }
  },
  {
    id: 'MT45', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'dificil',
    question: `¿Cuál es el valor de sen(90°)?`,
    options: ['0', '1/2', '1', '√2/2'],
    correct: 2,
    explanation: { correct: 'En el círculo unitario, sen(90°) = 1. También sen(π/2) = 1.', wrongs: ['sen(0°) = 0', 'sen(30°) = 1/2', 'Opción correcta', 'sen(45°) = √2/2'] }
  },
  {
    id: 'MT46', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'facil',
    question: `25% de 200 es igual a:`,
    options: ['25', '50', '75', '100'],
    correct: 1,
    explanation: { correct: '25% de 200 = 200 × 0.25 = 50. También 200/4 = 50.', wrongs: ['Calculaste 25 en lugar de 25%', 'Opción correcta', 'Eso sería 37.5%', 'Eso sería 50%'] }
  },
  {
    id: 'MT47', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'media',
    context: `La siguiente tabla muestra el número de goles que marcó un equipo en 10 partidos:
    0, 1, 2, 1, 3, 0, 1, 2, 1, 0`,
    question: `¿Cuál es el promedio de goles por partido?`,
    options: ['1.0', '1.1', '1.2', '1.5'],
    correct: 1,
    explanation: { correct: 'Suma = 0+1+2+1+3+0+1+2+1+0 = 11. Promedio = 11/10 = 1.1.', wrongs: ['Contaste mal la suma', 'Opción correcta', 'Tal vez sumaste 12 en lugar de 11', 'Dividiste 15/10 en lugar de 11/10'] }
  },
  {
    id: 'MT48', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'dificil',
    question: `La solución de la ecuación cuadrática x² - 5x + 6 = 0 es:`,
    options: ['x = 1 y x = 6', 'x = 2 y x = 3', 'x = -2 y x = -3', 'x = 5 y x = 0'],
    correct: 1,
    explanation: { correct: 'x² - 5x + 6 = (x-2)(x-3) = 0. Por tanto x = 2 o x = 3.', wrongs: ['Si x=1: 1-5+6=2≠0. Si x=6: 36-30+6=12≠0', 'Opción correcta', 'Si x=-2: 4+10+6=20≠0', 'Si x=5: 25-25+6=6≠0'] }
  },
  {
    id: 'MT49', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'facil',
    question: `Un ángulo de 180° se llama:`,
    options: ['Agudo', 'Recto', 'Llano', 'Obtuso'],
    correct: 2,
    explanation: { correct: 'Un ángulo de 180° es un ángulo llano, forma una línea recta.', wrongs: ['Agudo: menos de 90°', 'Recto: 90°', 'Opción correcta', 'Obtuso: entre 90° y 180°'] }
  },
  {
    id: 'MT50', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'media',
    question: `Si un número se incrementa en un 20% y luego se disminuye en un 20%, ¿cuál es el cambio neto?`,
    options: ['Aumenta 4%', 'Disminuye 4%', 'No cambia', 'Disminuye 2%'],
    correct: 1,
    explanation: { correct: 'Si el número es N: N×(1.20)×(0.80) = N×0.96. El resultado es 96% del original, una disminución del 4%.', wrongs: ['No es un aumento porque la segunda operación es sobre un valor mayor', 'Opción correcta', 'El orden afecta: 20% de aumento luego 20% de disminución NO da el mismo valor', 'Calcula: 1.2×0.8=0.96, disminución de 4%'] }
  },
  {
    id: 'MT51', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'dificil',
    question: `¿Cuántos números de 3 cifras se pueden formar con los dígitos 1, 2 y 3 si no se pueden repetir?`,
    options: ['3', '6', '9', '27'],
    correct: 1,
    explanation: { correct: 'Permutaciones: 3! = 3×2×1 = 6. Los números son 123, 132, 213, 231, 312, 321.', wrongs: ['Eso sería solo 3 números de una cifra', 'Opción correcta', 'Eso sería 3² si se repiten', 'Eso sería 3³ si se repiten'] }
  },
  {
    id: 'MT52', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'facil',
    question: `¿Cuál es el resultado de 0.25 × 0.4?`,
    options: ['0.01', '0.1', '1.0', '0.65'],
    correct: 1,
    explanation: { correct: '0.25 × 0.4 = (25/100)×(4/10) = 100/1000 = 0.1.', wrongs: ['Multiplicaste 25×4=100 y pusiste 0.01?', 'Opción correcta', 'Multiplicaste 0.25×4=1.0? No, es 0.25×0.4', 'Sumaste: 0.25+0.4=0.65'] }
  },
  {
    id: 'MT53', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'media',
    question: `La razón entre la circunferencia y el diámetro de un círculo es:`,
    options: ['π', '2π', 'π/2', 'r'],
    correct: 0,
    explanation: { correct: 'C = 2πr = πd. Por tanto C/d = π. La razón entre la circunferencia y el diámetro es π ≈ 3.1416.', wrongs: ['Opción correcta', 'Eso sería C/r = 2π', 'Eso sería C/2π', 'r es el radio, no la razón'] }
  },
  {
    id: 'MT54', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'dificil',
    question: `La derivada de f(x) = 3x² + 2x - 1 es:`,
    options: ['6x + 2', '3x + 2', '6x² + 2x', '3x² + 2'],
    correct: 0,
    explanation: { correct: 'f\'(x) = 2×3x + 2 = 6x + 2. La derivada de x² es 2x, de x es 1, de constante es 0.', wrongs: ['Opción correcta', 'La derivada de 3x² es 6x, no 3x', 'Los exponentes se reducen en uno, no aumentan', 'La derivada de 3x² es 6x, no 3x²'] }
  },
  {
    id: 'MT55', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'facil',
    question: `Si a = 3 y b = 4, ¿cuánto es a² + b²?`,
    options: ['7', '12', '25', '14'],
    correct: 2,
    explanation: { correct: 'a² + b² = 3² + 4² = 9 + 16 = 25.', wrongs: ['Sumaste 3+4=7', 'Multiplicaste 3×4=12', 'Opción correcta', 'Calculaste (3+4)×2=14'] }
  },
  {
    id: 'MT56', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'media',
    question: `¿Cuál de las siguientes afirmaciones es verdadera sobre un rombo?`,
    options: ['Todos sus ángulos son rectos', 'Todos sus lados son iguales', 'Tiene todos los lados diferentes', 'Solo dos lados son paralelos'],
    correct: 1,
    explanation: { correct: 'El rombo tiene los cuatro lados iguales, pero sus ángulos no necesariamente son rectos (a diferencia del cuadrado).', wrongs: ['Eso sería un cuadrado o rectángulo', 'Opción correcta', 'El rombo tiene lados iguales', 'El rombo tiene dos pares de lados paralelos'] }
  },
  {
    id: 'MT57', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'dificil',
    question: `La suma de los ángulos internos de un hexágono es:`,
    options: ['540°', '720°', '900°', '1080°'],
    correct: 1,
    explanation: { correct: 'Suma = (n-2)×180° = (6-2)×180° = 4×180° = 720°.', wrongs: ['Esa es la suma del pentágono (n-2)×180=540°', 'Opción correcta', 'Esa sería (7-2)×180=900° del heptágono', 'Esa sería (8-2)×180=1080° del octágono'] }
  },
  {
    id: 'MT58', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'facil',
    question: `¿Cuál es el valor de |-8|?`,
    options: ['-8', '0', '8', '1/8'],
    correct: 2,
    explanation: { correct: 'El valor absoluto de -8 es 8. |x| representa la distancia de x al 0, siempre es no negativa.', wrongs: ['El valor absoluto nunca es negativo', 'Solo el |0| = 0', 'Opción correcta', 'Eso sería el inverso multiplicativo'] }
  },
  {
    id: 'MT59', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'media',
    question: `La desigualdad x² > 0 tiene como solución:`,
    options: ['Todos los números reales', 'Todos excepto x = 0', 'Solo x > 0', 'Ningún número real'],
    correct: 1,
    explanation: { correct: 'x² siempre es ≥ 0. x² > 0 para todo x ≠ 0, porque 0² = 0 no es mayor que 0.', wrongs: ['x=0 da 0, que no es >0', 'Opción correcta', 'Los números negativos también cumplen: (-2)²=4>0', 'x=0 no cumple, pero el resto sí'] }
  },
  {
    id: 'MT60', area: 'matematicas', areaName: 'Matemáticas', difficulty: 'dificil',
    question: `La integral ∫2x dx es igual a:`,
    options: ['x² + C', '2x² + C', 'x + C', '2 + C'],
    correct: 0,
    explanation: { correct: '∫2x dx = 2∫x dx = 2(x²/2) + C = x² + C. La integral de x es x²/2.', wrongs: ['Opción correcta', '∫2x dx = x² + C, no 2x²', '∫2x dx = x² + C, no x', '∫0 dx = C, no ∫2x dx'] }
  },

  // ===== SOCIALES - BLOQUE 4 (SC30-SC59) =====
  {
    id: 'SC30', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'media',
    question: `La Rama Legislativa en Colombia está conformada por:`,
    options: ['La Presidencia y los ministerios', 'El Senado y la Cámara de Representantes', 'La Corte Suprema y el Consejo de Estado', 'La Procuraduría y la Defensoría'],
    correct: 1,
    explanation: { correct: 'La Rama Legislativa es el Congreso de la República, compuesto por el Senado (108 miembros) y la Cámara de Representantes (188 miembros).', wrongs: ['Esa es la Rama Ejecutiva', 'Opción correcta', 'Esas son entidades de la Rama Judicial y control', 'Son órganos de control, no la Legislativa'] }
  },
  {
    id: 'SC31', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'dificil',
    question: `La economía colombiana durante el siglo XIX se caracterizó principalmente por:`,
    options: ['La industrialización acelerada', 'Una economía exportadora de productos agrícolas como café y tabaco', 'El desarrollo tecnológico avanzado', 'La autosuficiencia industrial'],
    correct: 1,
    explanation: { correct: 'En el siglo XIX, Colombia tenía una economía agroexportadora basada en productos como café, tabaco, quina y añil. La industrialización fue tardía y limitada.', wrongs: ['La industrialización comenzó a mediados del siglo XX', 'Opción correcta', 'No hubo desarrollo tecnológico significativo', 'Colombia importaba manufacturas'] }
  },
  {
    id: 'SC32', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'facil',
    question: `La Registraduría Nacional del Estado Civil es la entidad encargada de:`,
    options: ['Juzgar delitos electorales', 'Organizar y vigilar las elecciones y el registro civil', 'Administrar las cárceles', 'Recaudar impuestos'],
    correct: 1,
    explanation: { correct: 'La Registraduría organiza las elecciones, el registro civil (nacimientos, matrimonios, defunciones) y la identificación de los ciudadanos (cédula).', wrongs: ['Los delitos electorales los juzga la justicia ordinaria', 'Opción correcta', 'Las cárceles son función del INPEC', 'Los impuestos los recauda la DIAN'] }
  },
  {
    id: 'SC33', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'media',
    question: `El acuerdo de paz entre el gobierno colombiano y las FARC se firmó en el año:`,
    options: ['2012', '2014', '2016', '2018'],
    correct: 2,
    explanation: { correct: 'El Acuerdo Final para la Terminación del Conflicto y la Construcción de una Paz Estable y Duradera se firmó el 24 de noviembre de 2016 en el Teatro Colón de Bogotá.', wrongs: ['2012 fue el inicio de los diálogos exploratorios', '2014 hubo acercamientos pero no el acuerdo final', 'Opción correcta', '2018 ya se implementaba el acuerdo'] }
  },
  {
    id: 'SC34', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'dificil',
    question: `El principio de "separación de poderes" en el Estado colombiano implica:`,
    options: ['Que un mismo funcionario puede ejercer dos ramas del poder', 'Que las ramas Ejecutiva, Legislativa y Judicial tienen funciones independientes y autónomas', 'Que el Presidente puede disolver el Congreso', 'Que los jueces pueden crear leyes'],
    correct: 1,
    explanation: { correct: 'La separación de poderes (Montesquieu) establece que las tres ramas del poder público son independientes y autónomas, con funciones diferenciadas que se controlan mutuamente.', wrongs: ['La separación impide que un funcionario ocupe dos ramas', 'Opción correcta', 'El Presidente NO puede disolver el Congreso en Colombia', 'Los jueces aplican la ley, no la crean'] }
  },
  {
    id: 'SC35', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'facil',
    question: `Colombia se encuentra ubicada en el extremo noroccidental de:`,
    options: ['América del Norte', 'América del Sur', 'América Central', 'Europa'],
    correct: 1,
    explanation: { correct: 'Colombia está en el extremo noroccidental de América del Sur, siendo el único país suramericano con costas en los océanos Pacífico y Atlántico.', wrongs: ['Colombia está al norte de Suramérica', 'Opción correcta', 'Colombia está en Suramérica, no en Centroamérica', 'Colombia está en Suramérica'] }
  },
  {
    id: 'SC36', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'media',
    question: `La acción de cumplimiento es un mecanismo constitucional que permite:`,
    options: ['Proteger derechos fundamentales', 'Exigir a una autoridad el cumplimiento de una ley o acto administrativo', 'Cambiar la Constitución', 'Elegir representantes'],
    correct: 1,
    explanation: { correct: 'La acción de cumplimiento (art. 87 Constitución) permite a cualquier persona exigir a una autoridad pública el cumplimiento de una ley o acto administrativo que haya sido omitido.', wrongs: ['Esa es la tutela', 'Opción correcta', 'La Constitución se reforma por acto legislativo', 'Eso es el voto'] }
  },
  {
    id: 'SC37', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'dificil',
    question: `El "populismo" como fenómeno político se caracteriza por:`,
    options: ['La defensa de las élites económicas', 'El discurso antielitista y la apelación directa al pueblo', 'El fortalecimiento de las instituciones', 'La promoción del libre comercio'],
    correct: 1,
    explanation: { correct: 'El populismo se caracteriza por un discurso que enfrenta al "pueblo" contra las "élites", con líderes carismáticos que apelan directamente a las masas.', wrongs: ['El populismo critica a las élites', 'Opción correcta', 'El populismo tiende a debilitar instituciones', 'El populismo suele ser proteccionista'] }
  },
  {
    id: 'SC38', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'facil',
    question: `Los océanos que bañan las costas de Colombia son:`,
    options: ['Atlántico y Índico', 'Pacífico y Atlántico', 'Pacífico y Ártico', 'Atlántico y Antártico'],
    correct: 1,
    explanation: { correct: 'Colombia tiene costas en el Océano Pacífico (occidente) y el Océano Atlántico (Caribe, al norte).', wrongs: ['Colombia no tiene costa en el Índico', 'Opción correcta', 'Colombia no tiene costa en el Ártico', 'Colombia no llega al Antártico'] }
  },
  {
    id: 'SC39', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'media',
    question: `La "Ley de Víctimas y Restitución de Tierras" (Ley 1448 de 2011) busca:`,
    options: ['Castigar a los perpetradores del conflicto', 'Reparar integralmente a las víctimas del conflicto armado y restituir tierras despojadas', 'Crear nuevos impuestos de guerra', 'Eliminar la JEP'],
    correct: 1,
    explanation: { correct: 'La Ley 1448 de 2011 busca reparar integralmente a las víctimas del conflicto armado mediante medidas de restitución, indemnización, rehabilitación, satisfacción y garantías de no repetición.', wrongs: ['La ley se enfoca en las víctimas, no en castigar', 'Opción correcta', 'No crea impuestos', 'La JEP se creó después, en 2016'] }
  },
  {
    id: 'SC40', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'dificil',
    question: `La "desindustrialización" en Colombia se refiere a:`,
    options: ['El aumento de la producción industrial', 'La disminución de la participación de la industria en el PIB y el empleo', 'La llegada de nuevas industrias tecnológicas', 'El crecimiento del sector manufacturero'],
    correct: 1,
    explanation: { correct: 'La desindustrialización es la reducción de la participación del sector industrial en la economía (PIB y empleo), fenómeno que Colombia ha experimentado desde los años 90.', wrongs: ['Eso es industrialización, lo opuesto', 'Opción correcta', 'La desindustrialización implica pérdida de industria', 'Es lo opuesto al crecimiento manufacturero'] }
  },
  {
    id: 'SC41', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'facil',
    question: `El himno nacional de Colombia fue compuesto musicalmente por:`,
    options: ['Rafael Núñez', 'Oreste Síndici', 'José María Barreto', 'Carlos Pizarro'],
    correct: 1,
    explanation: { correct: 'La música del himno nacional de Colombia fue compuesta por el italiano Oreste Síndici, y la letra fue escrita por el presidente Rafael Núñez.', wrongs: ['Rafael Núñez escribió la letra, no la música', 'Opción correcta', 'Barreto no es el compositor del himno', 'Pizarro no es el compositor'] }
  },
  {
    id: 'SC42', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'media',
    question: `El "derecho de petición" en Colombia permite:`,
    options: ['Presentar demandas judiciales', 'Solicitar información o hacer peticiones respetuosas a las autoridades', 'Votar en elecciones', 'Cambiar de nombre'],
    correct: 1,
    explanation: { correct: 'El derecho de petición (art. 23 Constitución) permite presentar peticiones respetuosas a autoridades y recibir respuesta oportuna. Es un derecho fundamental de aplicación inmediata.', wrongs: ['Eso es el derecho de acceso a la justicia', 'Opción correcta', 'El voto es un derecho político', 'El cambio de nombre es un trámite notarial'] }
  },
  {
    id: 'SC43', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'dificil',
    question: `El "milagro económico" de algunos países asiáticos (Corea, Taiwán, Singapur) se basó en:`,
    options: ['La explotación de recursos naturales', 'La industrialización orientada a la exportación con fuerte intervención estatal', 'El aislamiento comercial total', 'La agricultura de subsistencia'],
    correct: 1,
    explanation: { correct: 'Estos países crecieron mediante industrialización exportadora, inversión en educación, política industrial activa y apertura selectiva al comercio internacional.', wrongs: ['No tenían abundantes recursos naturales', 'Opción correcta', 'Fueron economías abiertas al comercio', 'Se industrializaron rápidamente'] }
  },
  {
    id: 'SC44', area: 'sociales', areaName: 'Sociales y Ciudadanía', difficulty: 'facil',
    question: `La "soberanía nacional" reside en el pueblo colombiano según:`,
    options: ['El artículo 1 de la Constitución de 1991', 'La declaración de independencia', 'El código civil', 'La ley de orden público'],
    correct: 0,
    explanation: { correct: 'El artículo 3 de la Constitución de 1991 dice: "La soberanía reside exclusivamente en el pueblo, del cual emana el poder público."', wrongs: ['Opción correcta', 'La independencia fue en 1810, pero la Constitución es de 1991', 'No está en el código civil', 'No es una ley de orden público'] }
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
    id: 'CN32', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
    question: `¿Cuál de las siguientes es una unidad de medida de la electricidad?`,
    options: ['Newton', 'Joule', 'Voltio', 'Litro'],
    correct: 2,
    explanation: { correct: 'El voltio (V) es la unidad de medida del potencial eléctrico o voltaje. El newton mide fuerza, el joule mide energía, el litro mide volumen.', wrongs: ['Newton es unidad de fuerza', 'Joule es unidad de energía o trabajo', 'Opción correcta', 'Litro es unidad de volumen'] }
  },
  {
    id: 'CN33', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
    question: `La sombra se produce cuando:`,
    options: ['La luz se refleja en un objeto', 'Un objeto bloquea el paso de la luz', 'La luz se refracta', 'El objeto emite luz propia'],
    correct: 1,
    explanation: { correct: 'La sombra se forma cuando un objeto opaco bloquea el paso de la luz, creando una zona de oscuridad detrás del objeto.', wrongs: ['La reflexión produce imágenes, no sombras', 'Opción correcta', 'La refracción desvía la luz, no produce sombras', 'Los objetos opacos no emiten luz propia'] }
  },
  {
    id: 'CN34', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
    question: `La velocidad de la luz en el vacío es aproximadamente:`,
    options: ['300 km/s', '30,000 km/s', '300,000 km/s', '3,000,000 km/s'],
    correct: 2,
    explanation: { correct: 'La velocidad de la luz en el vacío es aproximadamente 300,000 km/s (3×10⁸ m/s). Es la velocidad máxima del universo según la relatividad.', wrongs: ['Demasiado baja', 'Demasiado baja', 'Opción correcta', 'Demasiado alta'] }
  },
  {
    id: 'CN35', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
    question: `¿Qué tipo de enlace químico se forma cuando dos átomos comparten electrones?`,
    options: ['Enlace iónico', 'Enlace covalente', 'Enlace metálico', 'Enlace de hidrógeno'],
    correct: 1,
    explanation: { correct: 'El enlace covalente se forma cuando dos átomos comparten uno o más pares de electrones. Es característico de las moléculas orgánicas.', wrongs: ['Iónico: transferencia de electrones, no compartición', 'Opción correcta', 'Metálico: electrones deslocalizados entre metales', 'Puente de hidrógeno: atracción intermolecular'] }
  },
  {
    id: 'CN36', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
    question: `Los mamíferos se caracterizan por:`,
    options: ['Poner huevos', 'Tener glándulas mamarias y pelo', 'Tener branquias', 'Ser de sangre fría'],
    correct: 1,
    explanation: { correct: 'Los mamíferos tienen glándulas mamarias para alimentar a sus crías, pelo o vello, y son de sangre caliente (homeotermos).', wrongs: ['Los mamíferos mayoritariamente no ponen huevos (excepto monotremas)', 'Opción correcta', 'Los mamíferos respiran por pulmones', 'Los mamíferos son de sangre caliente'] }
  },
  {
    id: 'CN37', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
    question: `La primera ley de Newton (ley de la inercia) establece que:`,
    options: ['F = ma', 'Toda acción tiene una reacción', 'Un cuerpo en reposo o movimiento rectilíneo uniforme permanece así a menos que actúe una fuerza', 'La energía no se crea ni se destruye'],
    correct: 2,
    explanation: { correct: 'La primera ley de Newton dice que un objeto permanece en reposo o movimiento rectilíneo uniforme a menos que una fuerza neta actúe sobre él.', wrongs: ['Esa es la segunda ley (F=ma)', 'Esa es la tercera ley (acción-reacción)', 'Opción correcta', 'Esa es la ley de conservación de energía'] }
  },
  {
    id: 'CN38', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
    question: `El proceso por el cual el agua líquida se convierte en vapor se llama:`,
    options: ['Condensación', 'Fusión', 'Evaporación', 'Sublimación'],
    correct: 2,
    explanation: { correct: 'La evaporación es el cambio de estado de líquido a gaseoso. Ocurre cuando las moléculas de agua ganan suficiente energía para escapar a la atmósfera.', wrongs: ['Condensación: gas a líquido', 'Fusión: sólido a líquido', 'Opción correcta', 'Sublimación: sólido a gas directamente'] }
  },
  {
    id: 'CN39', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
    question: `El sentido del gusto se localiza principalmente en:`,
    options: ['La nariz', 'La lengua', 'Los oídos', 'La piel'],
    correct: 1,
    explanation: { correct: 'La lengua contiene las papilas gustativas con receptores para los sabores básicos: dulce, salado, ácido, amargo y umami.', wrongs: ['La nariz es para el olfato', 'Opción correcta', 'Los oídos son para la audición', 'La piel es para el tacto'] }
  },
  {
    id: 'CN40', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
    question: `En la reacción nuclear de fisión, el núcleo de un átomo:`,
    options: ['Se fusiona con otro núcleo', 'Se divide en núcleos más pequeños liberando energía', 'Emite radiación sin cambiar', 'Absorbe electrones'],
    correct: 1,
    explanation: { correct: 'La fisión nuclear consiste en la división de un núcleo pesado (como uranio-235) en núcleos más pequeños, liberando grandes cantidades de energía y neutrones.', wrongs: ['Esa es la fusión nuclear', 'Opción correcta', 'El núcleo cambia significativamente', 'La fisión implica división del núcleo, no absorción'] }
  },
  {
    id: 'CN41', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
    question: `¿Cuál de las siguientes afirmaciones sobre el ADN es correcta?`,
    options: ['El ADN está formado por aminoácidos', 'El ADN contiene la información genética de los organismos', 'El ADN solo se encuentra en las plantas', 'El ADN es una proteína'],
    correct: 1,
    explanation: { correct: 'El ADN (ácido desoxirribonucleico) contiene la información genética hereditaria en forma de secuencias de nucleótidos. Está presente en todas las células.', wrongs: ['El ADN está formado por nucleótidos, no aminoácidos', 'Opción correcta', 'El ADN está en todas las células, no solo en plantas', 'El ADN es un ácido nucleico, no una proteína'] }
  },
  {
    id: 'CN42', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
    question: `El Sol es una:`,
    options: ['Planeta', 'Estrella', 'Luna', 'Cometa'],
    correct: 1,
    explanation: { correct: 'El Sol es una estrella, una esfera de plasma que genera energía mediante fusión nuclear en su núcleo.', wrongs: ['El Sol es una estrella, no un planeta', 'Opción correcta', 'El Sol es una estrella, no una luna', 'No es un cometa'] }
  },
  {
    id: 'CN43', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
    question: `La presión hidrostática en un fluido depende de:`,
    options: ['La forma del recipiente', 'La profundidad y la densidad del fluido', 'La cantidad total de fluido', 'El color del líquido'],
    correct: 1,
    explanation: { correct: 'La presión hidrostática depende de la profundidad (h), la densidad del fluido (ρ) y la gravedad (g): P = ρgh. No depende de la forma del recipiente.', wrongs: ['La presión hidrostática no depende de la forma, solo de la profundidad', 'Opción correcta', 'No depende de la cantidad total sino de la profundidad', 'El color no afecta la presión'] }
  },
  {
    id: 'CN44', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
    question: `Los hongos pertenecen al reino:`,
    options: ['Plantae', 'Animalia', 'Fungi', 'Protista'],
    correct: 2,
    explanation: { correct: 'Los hongos pertenecen al reino Fungi. Son organismos eucariotas heterótrofos que se reproducen por esporas y tienen pared celular de quitina.', wrongs: ['Plantae: plantas (autótrofos)', 'Animalia: animales (heterótrofos móviles)', 'Opción correcta', 'Protista: organismos unicelulares eucariotas'] }
  },
  {
    id: 'CN45', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
    question: `La función principal de los pulmones es:`,
    options: ['Digestión de alimentos', 'Intercambio de gases (oxígeno y dióxido de carbono)', 'Filtración de sangre', 'Producción de hormonas'],
    correct: 1,
    explanation: { correct: 'Los pulmones son los órganos principales de la respiración. En los alvéolos pulmonares ocurre el intercambio de gases: oxígeno a la sangre y CO₂ al exterior.', wrongs: ['La digestión ocurre en el sistema digestivo', 'Opción correcta', 'La filtración de sangre ocurre en los riñones', 'Las hormonas son producidas por glándulas endocrinas'] }
  },
  {
    id: 'CN46', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
    question: `La constante de equilibrio (K) en una reacción química indica:`,
    options: ['La velocidad de la reacción', 'La relación entre concentraciones de productos y reactivos en equilibrio', 'La energía liberada en la reacción', 'El calor específico de la reacción'],
    correct: 1,
    explanation: { correct: 'La constante de equilibrio K expresa la relación entre las concentraciones de productos y reactivos en el equilibrio químico. No indica velocidad.', wrongs: ['La velocidad se relaciona con la constante cinética', 'Opción correcta', 'La energía se relaciona con ΔH o ΔG', 'El calor específico es otra propiedad'] }
  },
  {
    id: 'CN47', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
    question: `La teoría de la deriva continental fue propuesta por:`,
    options: ['Charles Darwin', 'Alfred Wegener', 'Isaac Newton', 'Albert Einstein'],
    correct: 1,
    explanation: { correct: 'Alfred Wegener propuso en 1912 la teoría de la deriva continental, sugiriendo que los continentes alguna vez estuvieron unidos en Pangea y se han desplazado.', wrongs: ['Darwin propuso la evolución por selección natural', 'Opción correcta', 'Newton propuso las leyes del movimiento', 'Einstein propuso la relatividad'] }
  },
  {
    id: 'CN48', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
    question: `La energía eólica se genera a partir de:`,
    options: ['El agua', 'El viento', 'El sol', 'Los combustibles fósiles'],
    correct: 1,
    explanation: { correct: 'La energía eólica se obtiene del viento, que mueve las aspas de aerogeneradores para producir electricidad. Es una energía renovable y limpia.', wrongs: ['Esa sería energía hidroeléctrica', 'Opción correcta', 'Esa sería energía solar', 'Esos son recursos no renovables'] }
  },
  {
    id: 'CN49', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
    question: `Los rayos X son un tipo de:`,
    options: ['Ondas sonoras', 'Radiación electromagnética', 'Partículas subatómicas', 'Ondas mecánicas'],
    correct: 1,
    explanation: { correct: 'Los rayos X son radiación electromagnética de alta frecuencia (longitud de onda entre 0.01 y 10 nm), capaces de penetrar materia blanda.', wrongs: ['Las ondas sonoras son mecánicas, los rayos X son EM', 'Opción correcta', 'Los rayos X son fotones, no partículas', 'Son ondas electromagnéticas, no mecánicas'] }
  },
  {
    id: 'CN50', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
    question: `El efecto invernadero es un fenómeno natural que:`,
    options: ['Enfría la Tierra atrapando calor', 'Mantiene la temperatura de la Tierra atrapando parte del calor solar', 'No tiene relación con el clima', 'Solo ocurre en zonas polares'],
    correct: 1,
    explanation: { correct: 'El efecto invernadero natural mantiene la Tierra habitable al atrapar parte del calor solar. El problema es el aumento de gases por actividades humanas.', wrongs: ['Atrapa calor y CALIENTA la Tierra', 'Opción correcta', 'Es fundamental para el clima terrestre', 'Ocurre en toda la atmósfera terrestre'] }
  },
  {
    id: 'CN51', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
    question: `¿Cuántos huesos tiene aproximadamente el cuerpo humano adulto?`,
    options: ['106', '206', '306', '506'],
    correct: 1,
    explanation: { correct: 'El cuerpo humano adulto tiene aproximadamente 206 huesos. Los bebés tienen más (unos 270) que se fusionan durante el crecimiento.', wrongs: ['Muy pocos', 'Opción correcta', 'Demasiados', 'Demasiados'] }
  },
  {
    id: 'CN52', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
    question: `La "energía de activación" en una reacción química es:`,
    options: ['La energía liberada al formarse productos', 'La energía mínima que deben tener los reactivos para que ocurra la reacción', 'La energía de los productos', 'El calor absorbido en la reacción'],
    correct: 1,
    explanation: { correct: 'La energía de activación es la energía mínima que deben superar los reactivos para que ocurra una reacción química. Los catalizadores la reducen.', wrongs: ['Esa es la entalpía de reacción', 'Opción correcta', 'No es la energía de los productos, es la barrera a superar', 'Eso sería el ΔH si es endotérmica'] }
  },
  {
    id: 'CN53', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
    question: `El sistema linfático tiene como función principal:`,
    options: ['Transportar oxígeno', 'Defender el cuerpo contra infecciones y drenar el exceso de líquido', 'Digestión de alimentos', 'Producir hormonas'],
    correct: 1,
    explanation: { correct: 'El sistema linfático drena el exceso de líquido intersticial, transporta grasas, y es fundamental para la respuesta inmunitaria (linfocitos, ganglios linfáticos).', wrongs: ['Esa es función del sistema circulatorio', 'Opción correcta', 'La digestión es del sistema digestivo', 'Las hormonas son del sistema endocrino'] }
  },
  {
    id: 'CN54', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
    question: `¿Cuál de los siguientes NO es un planeta del sistema solar?`,
    options: ['Marte', 'Júpiter', 'Plutón', 'Saturno'],
    correct: 2,
    explanation: { correct: 'Plutón fue reclasificado como "planeta enano" en 2006 por la Unión Astronómica Internacional. Los planetas del sistema solar son 8: Mercurio a Neptuno.', wrongs: ['Marte es un planeta', 'Júpiter es un planeta', 'Opción correcta', 'Saturno es un planeta'] }
  },
  {
    id: 'CN55', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
    question: `La ley de Boyle-Mariotte establece que, a temperatura constante:`,
    options: ['La presión y el volumen son directamente proporcionales', 'La presión y el volumen son inversamente proporcionales', 'El volumen y la temperatura son directos', 'La presión y la temperatura son inversos'],
    correct: 1,
    explanation: { correct: 'Ley de Boyle: P₁V₁ = P₂V₂. A temperatura constante, la presión de un gas es inversamente proporcional a su volumen. Si el volumen aumenta, la presión disminuye.', wrongs: ['Son inversamente proporcionales, no directos', 'Opción correcta', 'Esa es la ley de Charles', 'Esa es la ley de Gay-Lussac'] }
  },
  {
    id: 'CN56', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
    question: `Las neuronas transmiten señales eléctricas llamadas:`,
    options: ['Hormonas', 'Impulsos nerviosos', 'Enzimas', 'Neurotransmisores'],
    correct: 1,
    explanation: { correct: 'Las neuronas transmiten impulsos nerviosos (potenciales de acción) a lo largo de su axón. Los neurotransmisores son las sustancias químicas que transmiten la señal entre neuronas.', wrongs: ['Las hormonas son mensajeros químicos del sistema endocrino', 'Opción correcta', 'Las enzimas catalizan reacciones, no transmiten señales', 'Los neurotransmisores son sustancias químicas en las sinapsis'] }
  },
  {
    id: 'CN57', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
    question: `La luz blanca está compuesta por:`,
    options: ['Un solo color', 'Siete colores (arcoíris)', 'Solo blanco y negro', 'Rayos X'],
    correct: 1,
    explanation: { correct: 'La luz blanca es la combinación de todos los colores del espectro visible (rojo, naranja, amarillo, verde, azul, añil, violeta), como se ve en un arcoíris o prisma.', wrongs: ['La luz blanca contiene múltiples colores', 'Opción correcta', 'Contiene todos los colores del espectro visible', 'Los rayos X son otra forma de radiación EM'] }
  },
  {
    id: 'CN58', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
    question: `El principio de Arquímedes establece que un cuerpo sumergido en un fluido experimenta:`,
    options: ['Una presión hacia abajo', 'Un empuje hacia arriba igual al peso del fluido desplazado', 'Una fuerza lateral', 'Un aumento de peso'],
    correct: 1,
    explanation: { correct: 'Arquímedes: todo cuerpo sumergido experimenta un empuje vertical hacia arriba igual al peso del fluido que desaloja. Esto explica por qué flotan los barcos.', wrongs: ['No es hacia abajo, es hacia arriba', 'Opción correcta', 'La fuerza es vertical, no lateral', 'El peso aparente disminuye'] }
  },
  {
    id: 'CN59', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
    question: `La tabla periódica actual está organizada principalmente por:`,
    options: ['El peso del elemento', 'El número atómico (cantidad de protones)', 'El color de cada elemento', 'La fecha de descubrimiento'],
    correct: 1,
    explanation: { correct: 'La tabla periódica moderna organiza los elementos por número atómico creciente (Z, cantidad de protones). Mendeleev la organizó originalmente por peso atómico.', wrongs: ['Mendeleev usó peso atómico, pero hoy se usa número atómico', 'Opción correcta', 'El color no es un criterio de organización', 'No se organiza por fecha'] }
  },
  {
    id: 'CN60', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
    question: `Las placas tectónicas se mueven debido a:`,
    options: ['La rotación de la Tierra', 'Las corrientes de convección en el manto terrestre', 'La atracción gravitacional de la Luna', 'El viento solar'],
    correct: 1,
    explanation: { correct: 'El movimiento de las placas tectónicas es impulsado por las corrientes de convección en el manto, donde el magma caliente asciende y el frío desciende.', wrongs: ['La rotación influye en el día/noche, no en placas', 'Opción correcta', 'La Luna causa mareas, no movimiento de placas', 'El viento solar afecta la magnetosfera, no las placas'] }
  },
  {
    id: 'CN61', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
    question: `La ecuación de Einstein E = mc² relaciona:`,
    options: ['Energía y velocidad', 'Energía y masa', 'Masa y aceleración', 'Fuerza y distancia'],
    correct: 1,
    explanation: { correct: 'E = mc² muestra que la masa y la energía son equivalentes. Una pequeña cantidad de masa puede convertirse en una enorme cantidad de energía (c² es enorme).', wrongs: ['No relaciona energía con velocidad directamente', 'Opción correcta', 'Eso es F=ma (Newton)', 'Eso es trabajo = F×d'] }
  },

  // ===== INGLÉS - BLOQUE 4 (EN31-EN60) =====
  {
    id: 'EN31', area: 'ingles', areaName: 'Inglés', difficulty: 'facil',
    context: `"I usually ___ up at 7 am."`,
    question: `Choose the correct verb form:`,
    options: ['wake', 'wakes', 'woke', 'waking'],
    correct: 0,
    explanation: { correct: 'Present simple for habitual actions. "I usually wake up at 7 am." With "I", use the base form.', wrongs: ['Opción correcta', '"Wakes" is third person singular', '"Woke" is past simple, not for usual actions', '"Waking" needs a helper verb'] }
  },
  {
    id: 'EN32', area: 'ingles', areaName: 'Inglés', difficulty: 'media',
    context: `"She doesn't like coffee, ___?"`,
    question: `Choose the correct tag question:`,
    options: ['does she', 'doesn\'t she', 'is she', 'isn\'t she'],
    correct: 0,
    explanation: { correct: 'With a negative statement ("doesn\'t"), use a positive tag: "does she". Negative statement + positive tag.', wrongs: ['Opción correcta', 'Negative statement needs positive tag', '"Is" doesn\'t match the verb "does"', '"Isn\'t" doesn\'t match and is negative'] }
  },
  {
    id: 'EN33', area: 'ingles', areaName: 'Inglés', difficulty: 'dificil',
    context: `"I wish I ___ studied harder for the exam."`,
    question: `Choose the correct option:`,
    options: ['have', 'had', 'would have', 'did'],
    correct: 1,
    explanation: { correct: 'Wish + past perfect expresses regret about the past: "I wish I had studied harder" meaning I didn\'t study hard enough.', wrongs: ['Present perfect is not used after "wish"', 'Opción correcta', '"Would have" needs "had" in the wish clause', 'Past simple is for present wishes'] }
  },
  {
    id: 'EN34', area: 'ingles', areaName: 'Inglés', difficulty: 'facil',
    context: `"Excuse me, how do I ___ to the museum?"`,
    question: `Choose the correct word:`,
    options: ['arrive', 'get', 'go', 'reach'],
    correct: 1,
    explanation: { correct: '"How do I get to..." is the common phrase for asking directions. "Get to" means to arrive at or reach a place.', wrongs: ['"Arrive" requires "at" (arrive at)', 'Opción correcta', '"Go to" is possible but "get to" is more natural for directions', '"Reach" is transitive (reach the museum)'] }
  },
  {
    id: 'EN35', area: 'ingles', areaName: 'Inglés', difficulty: 'media',
    context: `"The phone rang while I ___ a shower."`,
    question: `Choose the correct verb form:`,
    options: ['have', 'was having', 'am having', 'had had'],
    correct: 1,
    explanation: { correct: 'Past continuous for an action in progress when another action (simple past) interrupted it. "While I was having a shower, the phone rang."', wrongs: ['Simple present doesn\'t fit past context', 'Opción correcta', 'Present continuous doesn\'t fit past context', 'Past perfect would be for earlier past'] }
  },
  {
    id: 'EN36', area: 'ingles', areaName: 'Inglés', difficulty: 'dificil',
    context: `"This is the woman ___ car was stolen."`,
    question: `Choose the correct relative pronoun:`,
    options: ['who', 'which', 'whose', 'whom'],
    correct: 2,
    explanation: { correct: '"Whose" indicates possession. "The woman whose car was stolen" means the car belonging to the woman was stolen.', wrongs: ['"Who" is subject pronoun for people', '"Which" is for things', 'Opción correcta', '"Whom" is object pronoun for people'] }
  },
  {
    id: 'EN37', area: 'ingles', areaName: 'Inglés', difficulty: 'facil',
    context: `"I ___ like to order a pizza, please."`,
    question: `Choose the correct modal verb:`,
    options: ['could', 'would', 'should', 'must'],
    correct: 1,
    explanation: { correct: '"I would like" is the polite expression for making requests or orders. "Would like" is more formal and polite than "want".', wrongs: ['"Could like" is not grammatical', 'Opción correcta', '"Should" expresses obligation or advice', '"Must" expresses necessity'] }
  },
  {
    id: 'EN38', area: 'ingles', areaName: 'Inglés', difficulty: 'media',
    context: `"The meeting was cancelled ___ the bad weather."`,
    question: `Choose the correct preposition/conjunction:`,
    options: ['because of', 'because', 'so', 'despite'],
    correct: 0,
    explanation: { correct: '"Because of" + noun (bad weather) gives the reason. "Because" + clause. "Despite" would mean the opposite.', wrongs: ['Opción correcta', '"Because" needs a clause (because the weather was bad)', '"So" indicates result, not cause', '"Despite" means in spite of, opposite meaning'] }
  },
  {
    id: 'EN39', area: 'ingles', areaName: 'Inglés', difficulty: 'dificil',
    context: `"I would rather you ___ tomorrow."`,
    question: `Choose the correct verb form:`,
    options: ['come', 'came', 'will come', 'coming'],
    correct: 1,
    explanation: { correct: '"I would rather + subject + past simple" is used for preferences about another person\'s actions. "I would rather you came tomorrow."', wrongs: ['"Rather + subject" uses past tense', 'Opción correcta', 'No future after "would rather" + subject', 'Needs a conjugated verb, not gerund'] }
  },
  {
    id: 'EN40', area: 'ingles', areaName: 'Inglés', difficulty: 'facil',
    context: `"Can you tell me where the station ___?"`,
    question: `Choose the correct option:`,
    options: ['is', 'does', 'are', 'has'],
    correct: 0,
    explanation: { correct: 'Indirect question: "where the station IS" (not "where is the station"). Word order changes in indirect questions to subject + verb.', wrongs: ['Opción correcta', '"Does" is not correct for location', '"Is" is singular because "station" is singular', '"Has" is not correct for location'] }
  },
  {
    id: 'EN41', area: 'ingles', areaName: 'Inglés', difficulty: 'media',
    context: `"We have been friends ___ we were children."`,
    question: `Choose the correct option:`,
    options: ['for', 'since', 'during', 'ago'],
    correct: 1,
    explanation: { correct: '"Since" + a point in time (we were children). The present perfect continuous shows an action that started in the past and continues.', wrongs: ['"For" is used with duration (for 10 years)', 'Opción correcta', '"During" is within a period, not a starting point', '"Ago" is for finished time'] }
  },
  {
    id: 'EN42', area: 'ingles', areaName: 'Inglés', difficulty: 'dificil',
    context: `"Only after the exam ___ how difficult it was."`,
    question: `Choose the correct option (inversion):`,
    options: ['he realized', 'did he realize', 'he did realize', 'realized he'],
    correct: 1,
    explanation: { correct: '"Only after" at the beginning requires inversion: auxiliary verb before subject. "Only after the exam DID HE REALIZE how difficult it was."', wrongs: ['Needs inversion with "only after"', 'Opción correcta', 'Incorrect inversion order', 'Needs auxiliary for inversion'] }
  },
  {
    id: 'EN43', area: 'ingles', areaName: 'Inglés', difficulty: 'facil',
    context: `"It is raining outside. Don\'t forget ___ an umbrella."`,
    question: `Choose the correct verb form:`,
    options: ['take', 'to take', 'taking', 'took'],
    correct: 1,
    explanation: { correct: '"Forget + to + infinitive" means not remembering to do something. "Don\'t forget to take an umbrella."', wrongs: ['"Forget" + base form is not grammatical', 'Opción correcta', '"Forget taking" means forget the act of taking', 'Past tense is not correct here'] }
  },
  {
    id: 'EN44', area: 'ingles', areaName: 'Inglés', difficulty: 'media',
    context: `"If it rains tomorrow, I ___ at home."`,
    question: `Choose the correct verb form:`,
    options: ['will stay', 'would stay', 'stayed', 'stay'],
    correct: 0,
    explanation: { correct: 'First conditional: If + present simple, will + infinitive. "If it rains tomorrow, I will stay at home."', wrongs: ['Opción correcta', '"Would stay" is for second conditional (unreal)', 'Past is not used in first conditional', 'Present simple in the result is incorrect'] }
  },
  {
    id: 'EN45', area: 'ingles', areaName: 'Inglés', difficulty: 'dificil',
    context: `"He speaks English as if he ___ a native speaker."`,
    question: `Choose the correct verb form:`,
    options: ['is', 'were', 'was', 'has been'],
    correct: 1,
    explanation: { correct: '"As if/as though" use subjunctive "were" (not "was") for unreal present situations. "He speaks as if he were a native speaker." (He is not.)', wrongs: ['Present is not used for unreal comparison', 'Opción correcta', 'In formal English, use "were" not "was"', 'Present perfect is not correct here'] }
  },
  {
    id: 'EN46', area: 'ingles', areaName: 'Inglés', difficulty: 'facil',
    context: `"We arrived ___ the airport at 8 am."`,
    question: `Choose the correct preposition:`,
    options: ['to', 'at', 'in', 'on'],
    correct: 1,
    explanation: { correct: '"Arrive at" is used for specific places like airports, stations, buildings. "Arrive in" is for cities/countries.', wrongs: ['"Arrive to" is incorrect; use "get to"', 'Opción correcta', '"Arrive in" is for larger areas', '"Arrive on" is not standard'] }
  },
  {
    id: 'EN47', area: 'ingles', areaName: 'Inglés', difficulty: 'media',
    context: `"I have ___ finished my homework."`,
    question: `Choose the correct adverb:`,
    options: ['yet', 'just', 'already', 'still'],
    correct: 1,
    explanation: { correct: '"Just" with present perfect means a very short time ago. "I have just finished my homework."', wrongs: ['"Yet" is used in negatives/questions', 'Opción correcta', '"Already" means before expected', '"Still" is for continuing situations'] }
  },
  {
    id: 'EN48', area: 'ingles', areaName: 'Inglés', difficulty: 'dificil',
    context: `"No sooner ___ we left than it started raining."`,
    question: `Choose the correct option:`,
    options: ['when', 'had', 'did', 'then'],
    correct: 1,
    explanation: { correct: '"No sooner + had + subject + past participle" is an inverted structure. "No sooner HAD we left than it started raining."', wrongs: ['"No sooner" needs inversion + "than"', 'Opción correcta', 'Past perfect (had) is needed, not past simple', '"No sooner...than" is the correct structure'] }
  },
  {
    id: 'EN49', area: 'ingles', areaName: 'Inglés', difficulty: 'facil',
    context: `"There isn\'t ___ milk left in the fridge."`,
    question: `Choose the correct quantifier:`,
    options: ['much', 'many', 'some', 'a few'],
    correct: 0,
    explanation: { correct: '"Much" is used with uncountable nouns in negative sentences. "Milk" is uncountable. "There isn\'t much milk left."', wrongs: ['Opción correcta', '"Many" is for countable plural nouns', '"Some" is for affirmative sentences', '"A few" is for countable nouns'] }
  },
  {
    id: 'EN50', area: 'ingles', areaName: 'Inglés', difficulty: 'media',
    context: `"I\'m not sure where ___."`,
    question: `Choose the correct option:`,
    options: ['does she live', 'she lives', 'she does live', 'lives she'],
    correct: 1,
    explanation: { correct: 'Indirect questions keep normal word order: subject + verb. "I\'m not sure where she lives" (not "where does she live").', wrongs: ['Incorrect word order for indirect question', 'Opción correcta', 'Unnecessary "does" in affirmative', 'Incorrect word order'] }
  },
  {
    id: 'EN51', area: 'ingles', areaName: 'Inglés', difficulty: 'dificil',
    context: `"It\'s high time you ___ a decision."`,
    question: `Choose the correct verb form:`,
    options: ['make', 'made', 'will make', 'are making'],
    correct: 1,
    explanation: { correct: '"It\'s high time" is followed by past simple to express that something should have been done already. "It\'s high time you MADE a decision."', wrongs: ['Present is not used after "it\'s high time"', 'Opción correcta', 'Future is not used here', 'Present continuous is not used here'] }
  },
  {
    id: 'EN52', area: 'ingles', areaName: 'Inglés', difficulty: 'facil',
    context: `"My sister is ___ than me."`,
    question: `Choose the correct option:`,
    options: ['older', 'old', 'oldest', 'more old'],
    correct: 0,
    explanation: { correct: '"Than" indicates comparison. One-syllable adjectives use -er: "older than". "My sister is older than me."', wrongs: ['Opción correcta', '"Old" is positive, not comparative', '"Oldest" is superlative (the oldest)', '"More old" is incorrect form'] }
  },
  {
    id: 'EN53', area: 'ingles', areaName: 'Inglés', difficulty: 'media',
    context: `"He\'s been working here ___ five years now."`,
    question: `Choose the correct preposition:`,
    options: ['since', 'for', 'during', 'from'],
    correct: 1,
    explanation: { correct: '"For" + duration of time (five years). "Since" + specific point. Present perfect continuous shows the action continues to now.', wrongs: ['"Since" requires a specific point in time', 'Opción correcta', '"During" is within a period', '"From" usually pairs with "to"'] }
  },
  {
    id: 'EN54', area: 'ingles', areaName: 'Inglés', difficulty: 'dificil',
    context: `"Were I you, I ___ accept the offer."`,
    question: `Choose the correct option:`,
    options: ['will', 'would', 'am', 'should'],
    correct: 1,
    explanation: { correct: '"Were I you" is an inverted form of "If I were you" (second conditional). The result clause uses "would". "Were I you, I would accept."', wrongs: ['Second conditional needs "would"', 'Opción correcta', '"Am" is present, not conditional', '"Should" can work but "would" is more common'] }
  },
  {
    id: 'EN55', area: 'ingles', areaName: 'Inglés', difficulty: 'facil',
    context: `"This bag is ___ . It belongs to me."`,
    question: `Choose the correct possessive pronoun:`,
    options: ['my', 'mine', 'me', 'I'],
    correct: 1,
    explanation: { correct: '"Mine" is a possessive pronoun that replaces "my + noun". "This bag is MINE" = "This is my bag."', wrongs: ['"My" needs a noun after it (my bag)', 'Opción correcta', '"Me" is object pronoun', '"I" is subject pronoun'] }
  },
  {
    id: 'EN56', area: 'ingles', areaName: 'Inglés', difficulty: 'media',
    context: `"The movie was so boring that I fell ___."`,
    question: `Choose the correct particle:`,
    options: ['off', 'over', 'asleep', 'down'],
    correct: 2,
    explanation: { correct: '"Fall asleep" means to begin sleeping. The movie was so boring that I fell asleep watching it.', wrongs: ['"Fall off" is physical (fall off a chair)', '"Fall over" means lose balance', 'Opción correcta', '"Fall down" is to fall to the ground'] }
  },
  {
    id: 'EN57', area: 'ingles', areaName: 'Inglés', difficulty: 'dificil',
    context: `"She would rather ___ than fly."`,
    question: `Choose the correct verb form:`,
    options: ['drive', 'to drive', 'driving', 'drove'],
    correct: 0,
    explanation: { correct: '"Would rather" + base verb (without to) compares preferences. "She would rather DRIVE than fly."', wrongs: ['Opción correcta', '"Would rather" takes base form, not infinitive', '"Rather" + gerund is not grammatical', 'Past is not used with "would rather" same subject'] }
  },
  {
    id: 'EN58', area: 'ingles', areaName: 'Inglés', difficulty: 'facil',
    context: `"I\'m going to the ___ to buy some medicine."`,
    question: `Choose the correct option:`,
    options: ['library', 'pharmacy', 'gym', 'church'],
    correct: 1,
    explanation: { correct: 'A pharmacy is a place where medicine is sold. "I\'m going to the pharmacy to buy some medicine."', wrongs: ['Libraries have books', 'Opción correcta', 'Gyms are for exercise', 'Churches are for religious services'] }
  },
  {
    id: 'EN59', area: 'ingles', areaName: 'Inglés', difficulty: 'media',
    context: `"This is the second time I ___ that song today."`,
    question: `Choose the correct verb form:`,
    options: ['hear', 'heard', 'have heard', 'am hearing'],
    correct: 2,
    explanation: { correct: '"This is the second time" + present perfect. "This is the second time I have heard that song today."', wrongs: ['Present simple is not used here', 'Past simple is for finished time', 'Opción correcta', 'Present continuous is not used with "time" count'] }
  },
  {
    id: 'EN60', area: 'ingles', areaName: 'Inglés', difficulty: 'dificil',
    context: `"He insisted on ___ to the airport."`,
    question: `Choose the correct verb form:`,
    options: ['drive', 'to drive', 'driving', 'drove'],
    correct: 2,
    explanation: { correct: 'After prepositions ("on"), use the gerund (-ing). "Insist on + gerund." "He insisted on driving to the airport."', wrongs: ['Base verb not used after prepositions', 'Infinitive not used after prepositions', 'Opción correcta', 'Past tense not used as object of preposition'] }
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
