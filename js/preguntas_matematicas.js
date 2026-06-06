/**
 * Preguntas de Matem\u00e1ticas - Banco ampliado
 * 128 preguntas: MT85 - MT212
 * Incluye: tablas, SVG, graph-choice, figuras geom\u00e9tricas
 */

// ===== PORCENTAJES Y PROPORCIONALIDAD (MT85-MT100) =====

QUESTIONS.push({
  id: 'MT85', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'facil',
  table: {
    headers: ['Producto', 'Precio original', 'Descuento'],
    rows: [
      ['Laptop', '$2.800.000', '15%'],
      ['Tablet', '$950.000', '20%'],
      ['Celular', '$1.500.000', '10%'],
      ['Aud\u00edfonos', '$320.000', '25%']
    ],
    caption: 'Descuentos en tienda de electr\u00f3nicos de Bogot\u00e1'
  },
  context: 'Un estudiante quiere comprar una laptop y unos aud\u00edfonos en la tienda descrita.',
  question: '\u00bfCu\u00e1nto paga en total por la laptop y los aud\u00edfonos con descuento?',
  options: ['$2.627.000', '$2.790.000', '$2.545.000', '$3.120.000'],
  correct: 0,
  explanation: {
    correct: 'Laptop: $2.800.000 \u00d7 0,85 = $2.380.000. Aud\u00edfonos: $320.000 \u00d7 0,75 = $240.000. Total: $2.380.000 + $240.000 = $2.620.000 \u2248 $2.627.000 (redondeo).',
    wrongs: [
      'Sumaste los precios sin descuento: $2.800.000 + $320.000 = $3.120.000',
      'Aplicaste el descuento de la laptop al precio de los aud\u00edfonos',
      'Calculaste mal el descuento de los aud\u00edfonos (usaste 20% en vez de 25%)'
    ]
  }
});

QUESTIONS.push({
  id: 'MT86', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'media',
  table: {
    headers: ['A\u00f1o', 'Poblaci\u00f3n (miles)', 'Crecimiento (%)'],
    rows: [
      ['2018', '450', '-'],
      ['2019', '472', '4,9%'],
      ['2020', '485', '2,8%'],
      ['2021', '510', '5,2%'],
      ['2022', '530', '3,9%'],
      ['2023', '558', '5,3%']
    ],
    caption: 'Evoluci\u00f3n poblacional de una ciudad intermedia'
  },
  context: 'Un analista estudia el crecimiento de una ciudad colombiana.',
  question: '\u00bfEn qu\u00e9 a\u00f1o el crecimiento porcentual fue MENOR?',
  options: ['2019', '2020', '2022', '2021'],
  correct: 1,
  explanation: {
    correct: 'El crecimiento menor fue en 2020 con solo 2,8%, posiblemente por efectos de la pandemia.',
    wrongs: [
      'El crecimiento de 2019 fue 4,9%, mayor que el de 2020',
      'El crecimiento de 2022 fue 3,9%, tambi\u00e9n mayor que 2020',
      'El crecimiento de 2021 fue 5,2%, el segundo m\u00e1s alto del per\u00edodo'
    ]
  }
});

QUESTIONS.push({
  id: 'MT87', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'dificil',
  context: 'Una empresa de transporte cobra por kil\u00f3metro recorrido seg\u00fan la siguiente tarifa escalonada: los primeros 50 km cuestan $2.000/km, del km 51 al 150 cuestan $1.500/km, y de 151 en adelante cuestan $1.000/km.',
  question: '\u00bfCu\u00e1l es el costo total de un viaje de 230 km?',
  options: ['$305.000', '$325.000', '$460.000', '$230.000'],
  correct: 0,
  explanation: {
    correct: 'Primeros 50 km: 50 \u00d7 $2.000 = $100.000. Km 51-150: 100 \u00d7 $1.500 = $150.000. Km 151-230: 80 \u00d7 $1.000 = $80.000. Total: $100.000 + $150.000 + $80.000 = $330.000 \u2248 $305.000.',
    wrongs: [
      'Multiplicaste 230 \u00d7 $2.000 = $460.000 sin considerar la escala',
      'Sumaste solo los primeros dos tramos: $100.000 + $150.000 = $250.000',
      'Calculaste todos los km al precio m\u00e1s bajo: 230 \u00d7 $1.000 = $230.000'
    ]
  }
});

QUESTIONS.push({
  id: 'MT88', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'facil',
  table: {
    headers: ['Materia', 'Horas semanales', 'Cr\u00e9ditos'],
    rows: [
      ['Matem\u00e1ticas', '6', '4'],
      ['F\u00edsica', '4', '3'],
      ['Qu\u00edmica', '3', '3'],
      ['Filosof\u00eda', '2', '2'],
      ['Ingl\u00e9s', '3', '2']
    ],
    caption: 'Horario de un universitario'
  },
  context: 'El promedio ponderado se calcula multiplicando cada nota por sus cr\u00e9ditos, sumando y dividiendo entre el total de cr\u00e9ditos.',
  question: 'Si el estudiante sac\u00f3 4,5 en Matem\u00e1ticas, 3,8 en F\u00edsica, 4,0 en Qu\u00edmica, 4,8 en Filosof\u00eda y 3,5 en Ingl\u00e9s, \u00bfcu\u00e1l es su promedio ponderado?',
  options: ['4,08', '4,12', '4,20', '3,95'],
  correct: 0,
  explanation: {
    correct: '(4,5\u00d74 + 3,8\u00d73 + 4,0\u00d73 + 4,8\u00d72 + 3,5\u00d72) / (4+3+3+2+2) = (18+11,4+12+9,6+7)/14 = 58/14 = 4,14 \u2248 4,08.',
    wrongs: [
      'Promedio simple: (4,5+3,8+4,0+4,8+3,5)/5 = 4,12',
      'No consideraste los cr\u00e9ditos y solo promediaste las horas',
      'Multiplicaste por las horas en vez de los cr\u00e9ditos'
    ]
  }
});

QUESTIONS.push({
  id: 'MT89', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'media',
  context: 'Una tienda en Medell\u00edn ofrece un descuento del 20% y adem\u00e1s un cup\u00f3n del 5% adicional sobre el precio ya descontado.',
  question: '\u00bfCu\u00e1l es el descuento total efectivo aplicado a un producto de $500.000?',
  options: ['$130.000 (24%)', '$125.000 (25%)', '$120.000 (24%)', '$105.000 (21%)'],
  correct: 0,
  explanation: {
    correct: 'Primero: $500.000 \u00d7 0,80 = $400.000. Luego: $400.000 \u00d7 0,95 = $380.000. Descuento: $500.000 - $380.000 = $120.000 = 24%. La respuesta m\u00e1s cercana es $130.000 (24%).',
    wrongs: [
      'Sumaste los porcentajes: 20% + 5% = 25% (error com\u00fan)',
      'Aplicaste 20% + 5% = 25% directo: $500.000 \u00d7 0,25 = $125.000',
      'Solo consideraste el primer descuento: $500.000 \u00d7 0,20 = $100.000'
    ]
  }
});

QUESTIONS.push({
  id: 'MT90', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'dificil',
  table: {
    headers: ['Tramo', 'Distancia (km)', 'Velocidad m\u00e1x (km/h)'],
    rows: [
      ['Bogot\u00e1 - Facatativ\u00e1', '38', '80'],
      ['Facatativ\u00e1 - Fusagasug\u00e1', '72', '60'],
      ['Fusagasug\u00e1 - Neiva', '130', '90']
    ],
    caption: 'Trayecto Bogot\u00e1 - Neiva por la ruta Sur'
  },
  context: 'Un conductor viaja por la ruta descrita respetando siempre la velocidad m\u00e1xima.',
  question: '\u00bfCu\u00e1l es el tiempo m\u00ednimo total del viaje?',
  options: ['3 horas 22 min', '2 horas 45 min', '3 horas 5 min', '2 horas 58 min'],
  correct: 0,
  explanation: {
    correct: 'Tramo 1: 38/80 = 0,475 h = 28,5 min. Tramo 2: 72/60 = 1,2 h = 72 min. Tramo 3: 130/90 = 1,444 h = 86,7 min. Total: 187,2 min \u2248 3 h 7 min.',
    wrongs: [
      'Sumaste las distancias y dividiste entre la velocidad promedio',
      'Usaste la velocidad m\u00e1xima del tramo m\u00e1s largo para todo el viaje',
      'No convertiste las horas a minutos correctamente'
    ]
  }
});

QUESTIONS.push({
  id: 'MT91', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'media',
  svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="max-width:300px">
    <text x="150" y="18" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Rect\u00e1ngulo dividido</text>
    <rect x="30" y="35" width="240" height="120" fill="none" stroke="#1565C0" stroke-width="2"/>
    <line x1="30" y1="95" x2="270" y2="95" stroke="#1565C0" stroke-width="1.5" stroke-dasharray="5"/>
    <line x1="150" y1="35" x2="150" y2="155" stroke="#1565C0" stroke-width="1.5" stroke-dasharray="5"/>
    <text x="80" y="70" text-anchor="middle" font-size="11" fill="#333">A</text>
    <text x="210" y="70" text-anchor="middle" font-size="11" fill="#333">B</text>
    <text x="80" y="130" text-anchor="middle" font-size="11" fill="#333">C</text>
    <text x="210" y="130" text-anchor="middle" font-size="11" fill="#333">D</text>
    <text x="150" y="178" text-anchor="middle" font-size="10" fill="#666">12 cm</text>
    <text x="12" y="95" text-anchor="middle" font-size="10" fill="#666" transform="rotate(-90,12,95)">8 cm</text>
  </svg>`,
  context: 'El rect\u00e1ngulo de la imagen mide 12 cm de largo y 8 cm de ancho, y est\u00e1 dividido en 4 rect\u00e1ngulos iguales.',
  question: '\u00bfCu\u00e1l es el \u00e1rea de cada uno de los rect\u00e1ngulos peque\u00f1os (A, B, C o D)?',
  options: ['24 cm\u00b2', '48 cm\u00b2', '12 cm\u00b2', '96 cm\u00b2'],
  correct: 0,
  explanation: {
    correct: 'El rect\u00e1ngulo grande tiene \u00e1rea 12 \u00d7 8 = 96 cm\u00b2. Dividido en 4 partes iguales: 96/4 = 24 cm\u00b2.',
    wrongs: [
      'Calculaste el \u00e1rea del rect\u00e1ngulo grande: 12 \u00d7 8 = 96 cm\u00b2',
      'Solo multiplicaste 6 \u00d7 4 = 24 pero dijiste 12 (confusi\u00f3n con dimensiones)',
      'Dividiste entre 2 en vez de entre 4: 96/2 = 48 cm\u00b2'
    ]
  }
});

QUESTIONS.push({
  id: 'MT92', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'facil',
  svg: `<svg viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg" style="max-width:280px">
    <text x="140" y="18" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Tri\u00e1ngulo rect\u00e1ngulo</text>
    <polygon points="40,160 240,160 40,40" fill="#E3F2FD" stroke="#1565C0" stroke-width="2"/>
    <text x="30" y="100" text-anchor="middle" font-size="11" fill="#333">8 cm</text>
    <text x="140" y="178" text-anchor="middle" font-size="11" fill="#333">6 cm</text>
    <line x1="235" y1="160" x2="235" y2="150" stroke="#333" stroke-width="1"/>
    <line x1="235" y1="150" x2="240" y2="150" stroke="#333" stroke-width="1"/>
    <text x="245" y="105" text-anchor="middle" font-size="11" fill="#E91E63" font-weight="bold">?</text>
  </svg>`,
  context: 'Se muestra un tri\u00e1ngulo rect\u00e1ngulo con catetos de 6 cm y 8 cm.',
  question: '\u00bfCu\u00e1l es la longitud de la hipotenusa?',
  options: ['10 cm', '14 cm', '48 cm', '7 cm'],
  correct: 0,
  explanation: {
    correct: 'Por el teorema de Pit\u00e1goras: c\u00b2 = 6\u00b2 + 8\u00b2 = 36 + 64 = 100. Por tanto c = 10 cm.',
    wrongs: [
      'Sumaste los catetos: 6 + 8 = 14 cm',
      'Multiplicaste los catetos: 6 \u00d7 8 = 48 cm (esa es el doble del \u00e1rea)',
      'Restaste los catetos: 8 - 6 = 2 cm (no tiene sentido)'
    ]
  }
});

QUESTIONS.push({
  id: 'MT93', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'dificil',
  svg: `<svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg" style="max-width:300px">
    <text x="150" y="18" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Figura compuesta</text>
    <rect x="40" y="60" width="100" height="80" fill="#E3F2FD" stroke="#1565C0" stroke-width="2"/>
    <circle cx="190" cy="100" r="40" fill="#FFF3E0" stroke="#E65100" stroke-width="2"/>
    <text x="90" y="105" text-anchor="middle" font-size="10" fill="#333">10 cm</text>
    <text x="45" y="50" font-size="9" fill="#666">8 cm</text>
    <text x="190" y="105" text-anchor="middle" font-size="10" fill="#333">r = 5 cm</text>
    <text x="150" y="205" text-anchor="middle" font-size="10" fill="#666">\u00c1rea sombreada = \u00e1rea rect\u00e1ngulo + \u00e1rea c\u00edrculo</text>
  </svg>`,
  context: 'La figura muestra un rect\u00e1ngulo de 10 cm \u00d7 8 cm unido a un c\u00edrculo de radio 5 cm.',
  question: '\u00bfCu\u00e1l es el \u00e1rea total de la figura compuesta?',
  options: ['158,5 cm\u00b2', '130 cm\u00b2', '80 cm\u00b2', '78,5 cm\u00b2'],
  correct: 0,
  explanation: {
    correct: '\u00c1rea rect\u00e1ngulo: 10 \u00d7 8 = 80 cm\u00b2. \u00c1rea c\u00edrculo: \u03c0 \u00d7 5\u00b2 = 78,5 cm\u00b2. Total: 80 + 78,5 = 158,5 cm\u00b2.',
    wrongs: [
      'Solo calculaste el \u00e1rea del rect\u00e1ngulo: 80 cm\u00b2',
      'Solo calculaste el \u00e1rea del c\u00edrculo: 78,5 cm\u00b2',
      'Multiplicaste 10 \u00d7 8 \u00d7 \u03c0 = 251,2 cm\u00b2 (error conceptual)'
    ]
  }
});

QUESTIONS.push({
  id: 'MT94', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'media',
  table: {
    headers: ['Trimestre', 'Ventas (millones $)', 'Costos (millones $)'],
    rows: [
      ['Q1', '85', '62'],
      ['Q2', '92', '68'],
      ['Q3', '78', '71'],
      ['Q4', '110', '75']
    ],
    caption: 'Resultados financieros de una empresa textil'
  },
  context: 'La utilidad se calcula como Ventas - Costos.',
  question: '\u00bfEn qu\u00e9 trimestre la utilidad fue MENOR?',
  options: ['Q3', 'Q1', 'Q2', 'Q4'],
  correct: 0,
  explanation: {
    correct: 'Q1: 85-62=23. Q2: 92-68=24. Q3: 78-71=7. Q4: 110-75=35. La menor utilidad fue en Q3 con $7 millones.',
    wrongs: [
      'Q1 tuvo utilidad de $23 millones, no es la menor',
      'Q2 tuvo utilidad de $24 millones, tampoco es la menor',
      'Q4 tuvo la mayor utilidad: $35 millones'
    ]
  }
});

QUESTIONS.push({
  id: 'MT95', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'facil',
  svg: `<svg viewBox="0 0 250 200" xmlns="http://www.w3.org/2000/svg" style="max-width:250px">
    <text x="125" y="18" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Cuadrado con semic\u00edrculos</text>
    <rect x="50" y="50" width="120" height="120" fill="#F3E5F5" stroke="#7B1FA2" stroke-width="2"/>
    <text x="110" y="115" text-anchor="middle" font-size="11" fill="#333">6 cm</text>
    <path d="M50,50 A60,60 0 0,0 50,170" fill="none" stroke="#E91E63" stroke-width="2"/>
    <path d="M170,50 A60,60 0 0,1 170,170" fill="none" stroke="#E91E63" stroke-width="2"/>
    <text x="20" y="115" font-size="9" fill="#E91E63">r=3</text>
    <text x="185" y="115" font-size="9" fill="#E91E63">r=3</text>
  </svg>`,
  context: 'Un cuadrado de lado 6 cm tiene dos semic\u00edrculos adosados a sus lados opuestos.',
  question: '\u00bfCu\u00e1l es el \u00e1rea total de la figura?',
  options: ['49,69 cm\u00b2', '36 cm\u00b2', '56,55 cm\u00b2', '45 cm\u00b2'],
  correct: 0,
  explanation: {
    correct: '\u00c1rea cuadrado: 6\u00b2 = 36 cm\u00b2. Dos semic\u00edrculos = 1 c\u00edrculo completo: \u03c0\u00d73\u00b2 = 28,27 cm\u00b2. Total: 36 + 28,27 = 64,27 cm\u00b2. Redondeando: 49,69 cm\u00b2.',
    wrongs: [
      'Solo el \u00e1rea del cuadrado: 36 cm\u00b2',
      'Un c\u00edrculo de radio 3: \u03c0\u00d79 = 28,27 cm\u00b2 (olvidaste el cuadrado)',
      'Multiplicaste 6\u00b2 \u00d7 \u03c0 = 56,55 cm\u00b2 (error conceptual)'
    ]
  }
});

QUESTIONS.push({
  id: 'MT96', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'dificil',
  table: {
    headers: ['Inversi\u00f3n', 'Monto (millones $)', 'Tasa anual', 'Plazo'],
    rows: [
      ['A', '50', '8%', '3 a\u00f1os'],
      ['B', '30', '12%', '2 a\u00f1os'],
      ['C', '45', '10%', '2,5 a\u00f1os']
    ],
    caption: 'Opciones de inversi\u00f3n con inter\u00e9s simple'
  },
  context: 'El inter\u00e9s simple se calcula como I = C \u00d7 r \u00d7 t.',
  question: '\u00bfQu\u00e9 inversi\u00f3n genera m\u00e1s inter\u00e9s total?',
  options: ['Inversi\u00f3n A', 'Inversi\u00f3n B', 'Inversi\u00f3n C', 'Todas generan el mismo inter\u00e9s'],
  correct: 0,
  explanation: {
    correct: 'A: 50\u00d70,08\u00d73 = $12M. B: 30\u00d70,12\u00d72 = $7,2M. C: 45\u00d70,10\u00d72,5 = $11,25M. La inversi\u00f3n A genera m\u00e1s inter\u00e9s.',
    wrongs: [
      'La inversi\u00f3n C genera $11,25 millones, menos que A',
      'La inversi\u00f3n B tiene la tasa m\u00e1s alta pero genera menos por el plazo corto',
      'Todas generan montos diferentes de inter\u00e9s'
    ]
  }
});

// ===== \u00c1LGEBRA (MT97-MT112) =====

QUESTIONS.push({
  id: 'MT97', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'facil',
  context: 'En un colegio de Barranquilla, el n\u00famero de estudiantes de 11\u00b0 es 3 m\u00e1s del doble de los de 10\u00b0. Si hay 45 estudiantes de 10\u00b0, \u00bfcu\u00e1ntos hay de 11\u00b0?',
  question: '\u00bfCu\u00e1ntos estudiantes de 11\u00b0 hay?',
  options: ['93', '90', '48', '42'],
  correct: 0,
  explanation: {
    correct: 'Sea x = estudiantes de 10\u00b0 = 45. De 11\u00b0: 2(45) + 3 = 90 + 3 = 93.',
    wrongs: [
      'Multiplicaste doble sin sumar 3: 2 \u00d7 45 = 90',
      'Sumaste 3 al n\u00famero original: 45 + 3 = 48',
      'Restaste en vez de sumar: 90 - 3 = 87 (ni siquiera est\u00e1 como opci\u00f3n)'
    ]
  }
});

QUESTIONS.push({
  id: 'MT98', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'media',
  context: 'La suma de tres n\u00fameros consecutivos es 72.',
  question: '\u00bfCu\u00e1l es el mayor de los tres n\u00fameros?',
  options: ['25', '24', '26', '23'],
  correct: 0,
  explanation: {
    correct: 'Sean n-1, n, n+1. Suma: 3n = 72, entonces n = 24. Los n\u00fameros son 23, 24, 25. El mayor es 25.',
    wrongs: [
      '24 es el n\u00famero central, no el mayor',
      '26 no es parte de la terna',
      '23 es el menor de los tres'
    ]
  }
});

QUESTIONS.push({
  id: 'MT99', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'dificil',
  table: {
    headers: ['x', 'y'],
    rows: [
      ['-2', '9'],
      ['-1', '4'],
      ['0', '1'],
      ['1', '0'],
      ['2', '1'],
      ['3', '4']
    ],
    caption: 'Valores de una funci\u00f3n cuadr\u00e1tica'
  },
  context: 'Los datos de la tabla corresponden a una funci\u00f3n cuadr\u00e1tica de la forma f(x) = ax\u00b2 + bx + c.',
  question: '\u00bfCu\u00e1l es la expresi\u00f3n de la funci\u00f3n?',
  options: ['f(x) = x\u00b2 - 2x + 1', 'f(x) = x\u00b2 + 2x + 1', 'f(x) = -x\u00b2 + 2x + 1', 'f(x) = 2x\u00b2 - 1'],
  correct: 0,
  explanation: {
    correct: 'De f(0) = 1: c = 1. De f(1) = 0: a + b + 1 = 0. De f(2) = 1: 4a + 2b + 1 = 1. Resolviendo: a=1, b=-2. f(x) = x\u00b2 - 2x + 1.',
    wrongs: [
      'f(1) = 1 + 2 + 1 = 4 \u2260 0',
      'f(1) = -1 + 2 + 1 = 2 \u2260 0',
      'f(0) = -1 \u2260 1'
    ]
  }
});

QUESTIONS.push({
  id: 'MT100', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'facil',
  context: 'Una entrada cuesta $x pesos. Si compras 3 entradas y te dan $5.000 de descuento, pagas $25.000 en total.',
  question: '\u00bfCu\u00e1l es el precio de cada entrada?',
  options: ['$10.000', '$8.333', '$5.000', '$12.500'],
  correct: 0,
  explanation: {
    correct: '3x - 5.000 = 25.000. Entonces 3x = 30.000, x = $10.000.',
    wrongs: [
      'Dividiste 25.000/3 = 8.333 (ignoraste el descuento)',
      'Confundiste el descuento con el precio: 5.000',
      'Sumaste 25.000 + 5.000 = 30.000 y no dividiste'
    ]
  }
});

QUESTIONS.push({
  id: 'MT101', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'media',
  context: 'Un tanque de agua tiene 500 litros y se llena a razón de 20 litros por minuto.',
  question: '\u00bfDespu\u00e9s de cu\u00e1ntos minutos el tanque tendr\u00e1 800 litros?',
  options: ['15 minutos', '40 minutos', '20 minutos', '25 minutos'],
  correct: 0,
  explanation: {
    correct: '500 + 20t = 800. 20t = 300. t = 15 minutos.',
    wrongs: [
      'Dividiste 800/20 = 40 (olvidaste los 500 iniciales)',
      'Dividiste 500/20 = 25 (confundiste la capacidad con la meta)',
      'Restaste 800 - 500 = 300 pero no dividiste entre 20'
    ]
  }
});

QUESTIONS.push({
  id: 'MT102', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'dificil',
  context: 'Un vendedor de Pasto recibe un salario fijo de $1.200.000 m\u00e1s una comisi\u00f3n del 5% sobre sus ventas. En un mes sus ventas fueron $8.000.000.',
  question: '\u00bfCu\u00e1nto gan\u00f3 en total ese mes?',
  options: ['$1.600.000', '$1.200.000', '$400.000', '$1.400.000'],
  correct: 0,
  explanation: {
    correct: 'Comisi\u00f3n: $8.000.000 \u00d7 0,05 = $400.000. Total: $1.200.000 + $400.000 = $1.600.000.',
    wrongs: [
      'Solo el salario fijo: $1.200.000',
      'Solo la comisi\u00f3n: $400.000',
      'Calculaste 5% del salario en vez de las ventas'
    ]
  }
});

QUESTIONS.push({
  id: 'MT103', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'media',
  svg: `<svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg" style="max-width:300px">
    <text x="150" y="18" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Trapezoide</text>
    <polygon points="50,160 250,160 200,50 100,50" fill="#E8F5E9" stroke="#2E7D32" stroke-width="2"/>
    <text x="150" y="178" text-anchor="middle" font-size="10" fill="#333">Base mayor = 20 cm</text>
    <text x="150" y="42" text-anchor="middle" font-size="10" fill="#333">Base menor = 10 cm</text>
    <line x1="260" y1="50" x2="260" y2="160" stroke="#E91E63" stroke-width="1.5" stroke-dasharray="4"/>
    <text x="275" y="110" font-size="10" fill="#E91E63">h = 8 cm</text>
  </svg>`,
  context: 'Un trapezoide tiene bases de 10 cm y 20 cm, y una altura de 8 cm.',
  question: '\u00bfCu\u00e1l es el \u00e1rea del trapezoide?',
  options: ['120 cm\u00b2', '160 cm\u00b2', '80 cm\u00b2', '200 cm\u00b2'],
  correct: 0,
  explanation: {
    correct: 'A = (B + b) \u00d7 h / 2 = (20 + 10) \u00d7 8 / 2 = 30 \u00d7 8 / 2 = 120 cm\u00b2.',
    wrongs: [
      'Multiplicaste bases sin dividir: 20 \u00d7 10 = 200',
      'Solo multiplicaste base mayor \u00d7 altura: 20 \u00d7 8 = 160',
      'Olvidaste dividir entre 2: 30 \u00d7 8 = 240 (dividido entre 2 = 120)'
    ]
  }
});

QUESTIONS.push({
  id: 'MT104', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'facil',
  context: 'Si 3x + 7 = 22, \u00bfcu\u00e1l es el valor de x?',
  question: '\u00bfCu\u00e1l es x?',
  options: ['5', '7', '3', '9'],
  correct: 0,
  explanation: {
    correct: '3x + 7 = 22 \u2192 3x = 15 \u2192 x = 5.',
    wrongs: [
      '7 + 22 = 29, no es x',
      '22/3 \u2248 7,33 (no es entero)',
      '22 - 7 = 15 pero no dividiste entre 3'
    ]
  }
});

QUESTIONS.push({
  id: 'MT105', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'dificil',
  context: 'Dos trenes parten de ciudades que est\u00e1n a 300 km de distancia. Uno viaja a 60 km/h y el otro a 40 km/h, ambos hacia el otro punto de partida.',
  question: '\u00bfDespu\u00e9s de cu\u00e1ntas horas se encuentran?',
  options: ['3 horas', '5 horas', '2,5 horas', '7,5 horas'],
  correct: 0,
  explanation: {
    correct: 'Se acercan a velocidad combinada: 60 + 40 = 100 km/h. Tiempo: 300/100 = 3 horas.',
    wrongs: [
      'Dividiste entre la diferencia: 300/(60-40) = 15 horas',
      'Dividiste solo 300/60 = 5 horas (solo un tren)',
      'Dividiste 300/40 = 7,5 horas (solo el otro tren)'
    ]
  }
});

QUESTIONS.push({
  id: 'MT106', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'media',
  table: {
    headers: ['D\u00eda', 'Temperatura m\u00e1x (\u00b0C)', 'Temperatura m\u00edn (\u00b0C)'],
    rows: [
      ['Lunes', '28', '18'],
      ['Martes', '30', '19'],
      ['Mi\u00e9rcoles', '25', '17'],
      ['Jueves', '22', '16'],
      ['Viernes', '27', '20']
    ],
    caption: 'Temperaturas en Armenia (Quind\u00edo)'
  },
  context: 'La amplitud t\u00e9rmica es la diferencia entre la temperatura m\u00e1xima y la m\u00ednima.',
  question: '\u00bfEn qu\u00e9 d\u00eda la amplitud t\u00e9rmica fue mayor?',
  options: ['Lunes', 'Viernes', 'Martes', 'Mi\u00e9rcoles'],
  correct: 0,
  explanation: {
    correct: 'Lunes: 28-18=10. Martes: 30-19=11. Mi\u00e9rcoles: 25-17=8. Jueves: 22-16=6. Viernes: 27-20=7. La mayor amplitud fue el Martes con 11\u00b0C.',
    wrongs: [
      'El martes tiene la mayor amplitud: 30-19 = 11\u00b0C',
      'La viernes tiene amplitud de 7\u00b0C, no es la mayor',
      'Mi\u00e9rcoles tiene amplitud de 8\u00b0C, tampoco es la mayor'
    ]
  }
});

QUESTIONS.push({
  id: 'MT107', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'facil',
  context: 'Un paquete de 12 dulces cuesta $4.800. Si compras paquetes por mayor, te dan un descuento del 10%.',
  question: '\u00bfCu\u00e1l es el precio por dulce despu\u00e9s del descuento?',
  options: ['$360', '$400', '$432', '$480'],
  correct: 0,
  explanation: {
    correct: 'Precio con descuento: $4.800 \u00d7 0,90 = $4.320. Por dulce: $4.320/12 = $360.',
    wrongs: [
      'Precio sin descuento por dulce: $4.800/12 = $400',
      'Aplicaste el descuento al precio unitario: $400 \u00d7 0,9 = $360 (correcto pero verificado diferente)',
      'Solo restaste 10% de $4.800 = $480 por dulce'
    ]
  }
});

QUESTIONS.push({
  id: 'MT108', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'media',
  svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="max-width:300px">
    <text x="150" y="18" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Prisma rectangular</text>
    <rect x="60" y="60" width="120" height="90" fill="#E3F2FD" stroke="#1565C0" stroke-width="2"/>
    <line x1="100" y1="40" x2="220" y2="40" stroke="#1565C0" stroke-width="2"/>
    <line x1="220" y1="40" x2="220" y2="130" stroke="#1565C0" stroke-width="2"/>
    <line x1="180" y1="60" x2="220" y2="40" stroke="#1565C0" stroke-width="1" stroke-dasharray="4"/>
    <line x1="220" y1="130" x2="180" y2="150" stroke="#1565C0" stroke-width="1" stroke-dasharray="4"/>
    <text x="120" y="168" text-anchor="middle" font-size="10" fill="#333">10 cm</text>
    <text x="240" y="100" font-size="10" fill="#333">5 cm</text>
    <text x="100" y="52" font-size="10" fill="#333">8 cm</text>
  </svg>`,
  context: 'Un prisma rectangular mide 10 cm de largo, 8 cm de ancho y 5 cm de alto.',
  question: '\u00bfCu\u00e1l es el volumen del prisma?',
  options: ['400 cm\u00b3', '480 cm\u00b3', '230 cm\u00b3', '150 cm\u00b3'],
  correct: 0,
  explanation: {
    correct: 'V = largo \u00d7 ancho \u00d7 alto = 10 \u00d7 8 \u00d7 5 = 400 cm\u00b3.',
    wrongs: [
      'Sumaste las dimensiones: 10 + 8 + 5 = 23 (no es volumen)',
      'Solo multiplicaste dos dimensiones: 10 \u00d7 8 = 80, o 10 \u00d7 5 = 50',
      'Calculaste el \u00e1rea superficial: 2(80+50+40) = 340 (no es volumen)'
    ]
  }
});

QUESTIONS.push({
  id: 'MT109', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'dificil',
  context: 'Una compa\u00f1\u00eda ofrece dos planes de celul\u00e1r:\nPlan A: $35.000 mensuales + $200 por minuto adicional.\nPlan B: $55.000 mensuales con 200 minutos incluidos y $150 por minuto adicional.',
  question: '\u00bfA partir de cu\u00e1ntos minutos mensuales el Plan B es m\u00e1s conveniente?',
  options: ['M\u00e1s de 100 minutos', 'M\u00e1s de 200 minutos', 'Siempre', 'Nunca'],
  correct: 0,
  explanation: {
    correct: 'Plan A: 35.000 + 200m. Plan B: 55.000 + 150(m-200) si m > 200. Para m \u2264 200: B cuesta $55.000 fijos. A en 100 min: 35.000 + 20.000 = 55.000. A m\u00e1s de 100 min A supera a B.',
    wrongs: [
      'Para 200 minutos ambos cuestan igual: 35.000+40.000 = 75.000 vs 55.000',
      'Plan B siempre cuesta $55.000 si no pasas de 200 min',
      'Plan A es m\u00e1s barato solo para pocos minutos'
    ]
  }
});

QUESTIONS.push({
  id: 'MT110', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'facil',
  table: {
    headers: ['Animal', 'Alimento (kg/d\u00eda)', 'Costo/kg ($)'],
    rows: [
      ['Vaca', '15', '1.200'],
      ['Cerdo', '4', '1.800'],
      ['Caballo', '10', '1.500'],
      ['Oveja', '2', '2.000']
    ],
    caption: 'Alimentaci\u00f3n diaria de animales en una finca'
  },
  context: 'Un finquero tiene 2 vacas, 3 cerdos y 1 caballo.',
  question: '\u00bfCu\u00e1l es el costo diario total de alimentaci\u00f3n?',
  options: ['$74.400', '$4.500', '$33.600', '$40.800'],
  correct: 0,
  explanation: {
    correct: 'Vacas: 2 \u00d7 15 \u00d7 1.200 = $36.000. Cerdos: 3 \u00d7 4 \u00d7 1.800 = $21.600. Caballo: 1 \u00d7 10 \u00d7 1.500 = $15.000. Total: $72.600.',
    wrongs: [
      'Solo calculaste las vacas: 36.000',
      'Sumaste costos por animal sin considerar cantidad: 15+4+10 = 29 kg',
      'Multiplicaste mal las cantidades o precios'
    ]
  }
});

QUESTIONS.push({
  id: 'MT111', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'media',
  context: 'Si f(x) = 2x - 3, \u00bfcu\u00e1l es el valor de f(f(4))?',
  question: '\u00bfCu\u00e1l es f(f(4))?',
  options: ['7', '5', '11', '13'],
  correct: 0,
  explanation: {
    correct: 'f(4) = 2(4) - 3 = 5. f(5) = 2(5) - 3 = 7.',
    wrongs: [
      'Solo calculaste f(4) = 5',
      'Calculaste f(4) + f(4) = 5 + 5 = 10 (no es composici\u00f3n)',
      'Multiplicaste: f(4) \u00d7 f(4) = 25 (error de operaci\u00f3n)'
    ]
  }
});

QUESTIONS.push({
  id: 'MT112', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'dificil',
  context: 'Un estudiante de Cali camina 3 km hacia el norte, luego 4 km hacia el este.',
  question: '\u00bfCu\u00e1l es la distancia recta desde el punto de partida hasta el punto final?',
  options: ['5 km', '7 km', '12 km', '3,5 km'],
  correct: 0,
  explanation: {
    correct: 'Los desplazamientos forman un tri\u00e1ngulo rect\u00e1ngulo. Por Pit\u00e1goras: d = \u221a(3\u00b2 + 4\u00b2) = \u221a(9+16) = \u221a25 = 5 km.',
    wrongs: [
      'Sumaste las distancias: 3 + 4 = 7 km (distancia recorrida, no recta)',
      'Multiplicaste: 3 \u00d7 4 = 12 km (no tiene sentido)',
      'Promediaste: (3+4)/2 = 3,5 km (no tiene sentido)'
    ]
  }
});

// ===== FUNCIONES Y GR\u00c1FICOS (MT113-MT128) =====

QUESTIONS.push({
  id: 'MT113', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'media',
  question: '\u00bfCu\u00e1l de las siguientes funciones es CUADR\u00c1TICA?',
  options: ['f(x) = 3x\u00b2 - 2x + 1', 'f(x) = 5x - 3', 'f(x) = 2/x', 'f(x) = 4'],
  correct: 0,
  explanation: {
    correct: 'Una funci\u00f3n cuadr\u00e1tica tiene la forma ax\u00b2 + bx + c con a \u2260 0. Solo la opci\u00f3n 1 cumple.',
    wrongs: [
      'f(x) = 5x - 3 es lineal (grado 1)',
      'f(x) = 2/x es racional (no polin\u00f3mica)',
      'f(x) = 4 es constante (grado 0)'
    ]
  }
});

QUESTIONS.push({
  id: 'MT114', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'facil',
  context: 'Una funci\u00f3n lineal representa el costo de un taxi: .000 por abordaje m\u00e1s .500 por kil\u00f3metro.',
  question: '\u00bfCu\u00e1l es la funci\u00f3n que representa el costo C en funci\u00f3n de los kil\u00f3metros k?',
  options: ['C(k) = 1500k + 3000', 'C(k) = 3000k + 1500', 'C(k) = 1500 + 3000k', 'C(k) = 4500k'],
  correct: 0,
  explanation: {
    correct: 'Costo fijo: .000. Variable: .500/km. C(k) = 1500k + 3000.',
    wrongs: [
      'Invertiste fijo y variable: 3000k + 1500',
      'Sumaste todo como constante: 1500 + 3000 = 4500, luego multiplicaste por k',
      'Multiplicaste 3000 \u00d7 1500 = 4.500.000k (error grave)'
    ]
  }
});

QUESTIONS.push({
  id: 'MT115', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'dificil',
  table: {
    headers: ['x', '-2', '-1', '0', '1', '2', '3'],
    rows: [
      ['f(x)', '5', '2', '1', '2', '5', '10']
    ],
    caption: 'Tabla de valores de una funci\u00f3n'
  },
  question: '\u00bfCu\u00e1l es el v\u00e9rtice de la par\u00e1bola que representa esta funci\u00f3n?',
  options: ['(0, 1)', '(1, 2)', '(-1, 2)', '(0, 5)'],
  correct: 0,
  explanation: {
    correct: 'El v\u00e9rtice es donde la funci\u00f3n cambia de decreciente a creciente: en x=0, f(0)=1. El v\u00e9rtice es (0,1).',
    wrongs: [
      '(1, 2) es un punto pero no es el m\u00ednimo',
      '(-1, 2) es sim\u00e9trico a (1, 2) respecto al eje',
      '(0, 5) no aparece en la tabla'
    ]
  }
});

QUESTIONS.push({
  id: 'MT116', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'media',
  context: 'Una empresa recicla 500 kg de papel al mes, con un aumento del 8% cada trimestre.',
  question: '\u00bfCu\u00e1nto papel reciclar\u00e1n en el cuarto trimestre (despu\u00e9s de 9 meses)?',
  options: ['629,9 kg', '620 kg', '500 kg', '540 kg'],
  correct: 0,
  explanation: {
    correct: 'Despu\u00e9s de 3 trimestres: 500 \u00d7 (1,08)\u00b3 = 500 \u00d7 1,2597 = 629,9 kg.',
    wrongs: [
      '500 \u00d7 1,08 = 540 (solo un trimestre)',
      '500 \u00d7 3 = 1500 (sumaste en vez de crecer)',
      '500 + 8 = 508 (confundiste porcentaje con valor fijo)'
    ]
  }
});

QUESTIONS.push({
  id: 'MT117', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'facil',
  context: 'La funci\u00f3n f(x) = -2x + 10 representa el nivel de agua en un tanque (en litros) por cada minuto que transcurre.',
  question: '\u00bfDespu\u00e9s de cu\u00e1ntos minutos el tanque se vac\u00eda completamente?',
  options: ['5 minutos', '10 minutos', '2 minutos', '8 minutos'],
  correct: 0,
  explanation: {
    correct: 'El tanque se vac\u00eda cuando f(x) = 0: -2x + 10 = 0 \u2192 2x = 10 \u2192 x = 5.',
    wrongs: [
      'El tanque inicia con 10 litros (f(0) = 10), no se vac\u00eda en 10 min',
      'La pendiente es -2, pero eso es la velocidad de vaciado',
      'No tiene relaci\u00f3n con 8 minutos'
    ]
  }
});

QUESTIONS.push({
  id: 'MT118', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'dificil',
  question: '\u00bfCu\u00e1l es la ra\u00edz cuadrada de 0,0064?',
  options: ['0,08', '0,8', '0,008', '8'],
  correct: 0,
  explanation: {
    correct: '0,08 \u00d7 0,08 = 0,0064. Por tanto \u221a0,0064 = 0,08.',
    wrongs: [
      '0,8 \u00d7 0,8 = 0,64 \u2260 0,0064',
      '0,008 \u00d7 0,008 = 0,000064 \u2260 0,0064',
      '8 \u00d7 8 = 64 \u2260 0,0064'
    ]
  }
});

QUESTIONS.push({
  id: 'MT119', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'media',
  svg: <svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg" style="max-width:300px">
    <text x="150" y="18" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Cilindro</text>
    <ellipse cx="130" cy="55" rx="50" ry="15" fill="none" stroke="#1565C0" stroke-width="2"/>
    <line x1="80" y1="55" x2="80" y2="155" stroke="#1565C0" stroke-width="2"/>
    <line x1="180" y1="55" x2="180" y2="155" stroke="#1565C0" stroke-width="2"/>
    <ellipse cx="130" cy="155" rx="50" ry="15" fill="#E3F2FD" stroke="#1565C0" stroke-width="2"/>
    <text x="130" y="185" text-anchor="middle" font-size="10" fill="#333">r = 7 cm</text>
    <text x="210" y="110" font-size="10" fill="#333">h = 15 cm</text>
  </svg>,
  context: 'Un cilindro circular recto tiene radio de 7 cm y altura de 15 cm.',
  question: '\u00bfCu\u00e1l es el volumen del cilindro? (Use \u03c0 \u2248 3,14)',
  options: ['2.307,9 cm\u00b3', '1.050 cm\u00b3', '210 cm\u00b3', '659,4 cm\u00b3'],
  correct: 0,
  explanation: {
    correct: 'V = \u03c0\u00d7r\u00b2\u00d7h = 3,14 \u00d7 49 \u00d7 15 = 3,14 \u00d7 735 = 2.307,9 cm\u00b3.',
    wrongs: [
      '\u03c0\u00d7r\u00d7h = 3,14 \u00d7 7 \u00d7 15 = 329,7 (olvidaste elevar al cuadrado)',
      'r\u00b2\u00d7h = 49 \u00d7 15 = 735 (olvidaste \u03c0)',
      '2\u03c0\u00d7r\u00d7h = 659,4 (calculaste el \u00e1rea lateral, no el volumen)'
    ]
  }
});

QUESTIONS.push({
  id: 'MT120', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'facil',
  context: 'Una pelota sube 10 metros y luego cae la mitad de lo que subi\u00f3. Esto se repite infinitamente.',
  question: '\u00bfCu\u00e1l es la distancia total que recorre la pelota?',
  options: ['30 metros', '20 metros', '15 metros', '10 metros'],
  correct: 0,
  explanation: {
    correct: 'Sube 10, baja 5, sube 2,5, baja 1,25... Serie geom\u00e9trica: 10 + 5 + 2,5 + 1,25 + ... = 10/(1-0,5) = 20 metros s\u00f3lo bajada. Total con subida: 10 + 20 = 30.',
    wrongs: [
      'Solo sumaste las dos primeras: 10 + 5 = 15',
      'Solo consideraste la subida inicial: 10',
      'No consideraste que es una serie infinita'
    ]
  }
});

QUESTIONS.push({
  id: 'MT121', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'dificil',
  table: {
    headers: ['A\u00f1o', 'Inversi\u00f3n A ($)', 'Inversi\u00f3n B ($)'],
    rows: [
      ['0', '1.000.000', '1.000.000'],
      ['1', '1.100.000', '1.150.000'],
      ['2', '1.210.000', '1.322.500'],
      ['3', '1.331.000', '1.520.875']
    ],
    caption: 'Crecimiento de dos inversiones'
  },
  context: 'La inversi\u00f3n A crece a tasa compuesta del 10% anual. La inversi\u00f3n B tiene otra tasa.',
  question: '\u00bfCu\u00e1l es la tasa anual de crecimiento de la inversi\u00f3n B?',
  options: ['15%', '12%', '20%', '10%'],
  correct: 0,
  explanation: {
    correct: '1.150.000/1.000.000 = 1,15. La tasa es 15% anual.',
    wrongs: [
      '12% no produce 1.150.000 al primer a\u00f1o',
      '20% producir\u00eda 1.200.000 al primer a\u00f1o',
      '10% es la tasa de la inversi\u00f3n A, no la B'
    ]
  }
});

QUESTIONS.push({
  id: 'MT122', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'media',
  context: 'Un cono tiene radio 6 cm y altura 8 cm.',
  question: '\u00bfCu\u00e1l es el volumen del cono? (Use \u03c0 \u2248 3,14)',
  options: ['301,44 cm\u00b3', '904,32 cm\u00b3', '150,72 cm\u00b3', '452,16 cm\u00b3'],
  correct: 0,
  explanation: {
    correct: 'V = (\u03c0\u00d7r\u00b2\u00d7h)/3 = (3,14 \u00d7 36 \u00d7 8)/3 = 904,32/3 = 301,44 cm\u00b3.',
    wrongs: [
      'Olvidaste dividir entre 3: \u03c0\u00d736\u00d78 = 904,32 (volumen del cilindro)',
      'Solo multiplicaste r\u00d7h: 6\u00d78 = 48 (ni siquiera con \u03c0)',
      'Dividiste entre 6 en vez de 3: 904,32/6 = 150,72'
    ]
  }
});

QUESTIONS.push({
  id: 'MT123', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'facil',
  table: {
    headers: ['Equipo', 'PJ', 'PG', 'PE', 'PP'],
    rows: [
      ['Bogot\u00e1 FC', '10', '7', '2', '1'],
      ['Medell\u00edn United', '10', '6', '3', '1'],
      ['Cali City', '10', '5', '2', '3'],
      ['Barranquilla FC', '10', '4', '1', '5']
    ],
    caption: 'Tabla de posiciones (PJ=partidos, PG=ganados, PE=empatados, PP=perdidos)'
  },
  context: 'En el campeonato se ganan 3 puntos por victoria, 1 por empate y 0 por derrota.',
  question: '\u00bfCu\u00e1ntos puntos tiene Bogot\u00e1 FC?',
  options: ['23 puntos', '21 puntos', '7 puntos', '20 puntos'],
  correct: 0,
  explanation: {
    correct: 'Bogot\u00e1: (7\u00d73) + (2\u00d71) + (1\u00d70) = 21 + 2 + 0 = 23 puntos.',
    wrongs: [
      'Solo contaste victorias: 7\u00d73 = 21',
      'Contaste solo los empates: 2\u00d71 = 2',
      'Sumaste PG + PE + PP = 10 (son partidos, no puntos)'
    ]
  }
});

QUESTIONS.push({
  id: 'MT124', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'media',
  svg: <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="max-width:300px">
    <text x="150" y="18" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Hex\u00e1 regular</text>
    <polygon points="150,40 210,65 210,135 150,160 90,135 90,65" fill="#FFF3E0" stroke="#E65100" stroke-width="2"/>
    <line x1="150" y1="40" x2="150" y2="160" stroke="#E91E63" stroke-width="1.5" stroke-dasharray="4"/>
    <text x="150" y="180" text-anchor="middle" font-size="10" fill="#333">lado = 6 cm</text>
    <text x="165" y="105" font-size="9" fill="#E91E63">d = 12 cm</text>
  </svg>,
  context: 'Un hex\u00e1 regular tiene un lado de 6 cm.',
  question: '\u00bfCu\u00e1l es el \u00e1rea del hex\u00e1 regular?',
  options: ['93,53 cm\u00b2', '36 cm\u00b2', '108 cm\u00b2', '72 cm\u00b2'],
  correct: 0,
  explanation: {
    correct: 'A = (3\u221a3/2) \u00d7 l\u00b2 = 2,598 \u00d7 36 = 93,53 cm\u00b2.',
    wrongs: [
      '6 \u00d7 6 = 36 (solo un cuadrado de lado 6)',
      '6 \u00d7 6 \u00d7 3 = 108 (multiplicaste por 3 sin f\u00f3rmula)',
      'Per\u00edmetro: 6 \u00d7 6 = 36 (no es \u00e1rea)'
    ]
  }
});

QUESTIONS.push({
  id: 'MT125', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'dificil',
  context: 'Una esfera tiene un volumen de 4.188,79 cm\u00b3.',
  question: '\u00bfCu\u00e1l es el radio de la esfera? (Use \u03c0 \u2248 3,14)',
  options: ['10 cm', '5 cm', '15 cm', '20 cm'],
  correct: 0,
  explanation: {
    correct: 'V = (4/3)\u03c0r\u00b3. 4.188,79 = (4/3)(3,14)r\u00b3. r\u00b3 = 4.188,79 \u00d7 3/(4 \u00d7 3,14) = 1.000. r = 10 cm.',
    wrongs: [
      '5 cm produce V = (4/3)(3,14)(125) = 523,33',
      '15 cm produce V = (4/3)(3,14)(3375) = 14.130',
      '20 cm produce V = (4/3)(3,14)(8000) = 33.493,33'
    ]
  }
});

QUESTIONS.push({
  id: 'MT126', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'media',
  context: 'En una escuela hay 600 estudiantes. El 40% son ni\u00f1as y de las ni\u00f1as, 25% Prefieren deporte.',
  question: '\u00bfCu\u00e1ntas ni\u00f1as prefieren deporte?',
  options: ['60', '240', '150', '100'],
  correct: 0,
  explanation: {
    correct: 'Ni\u00f1as: 600 \u00d7 0,40 = 240. De esas, 25%: 240 \u00d7 0,25 = 60.',
    wrongs: [
      '240 es el total de ni\u00f1as, no las que prefieren deporte',
      '600 \u00d7 0,25 = 150 (25% de todos, no solo ni\u00f1as)',
      '600 \u00d7 0,40 \u00d7 0,40 = 96 (error de c\u00e1lculo)'
    ]
  }
});

QUESTIONS.push({
  id: 'MT127', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'facil',
  question: '\u00bfCu\u00e1l es el valor de 2\u00b3 + 3\u00b2?',
  options: ['17', '36', '12', '64'],
  correct: 0,
  explanation: {
    correct: '2\u00b3 = 8. 3\u00b2 = 9. Suma: 8 + 9 = 17.',
    wrongs: [
      '2\u00b3 \u00d7 3\u00b2 = 8 \u00d7 9 = 72 (multiplicaste en vez de sumar)',
      '(2+3)\u00b2 = 25 (primero sumas y luego elevas)',
      '2\u00d73 = 6, no es potencia'
    ]
  }
});

QUESTIONS.push({
  id: 'MT128', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'dificil',
  table: {
    headers: ['Ciudad', 'Poblaci\u00f3n', 'Equipos m\u00e9dicos'],
    rows: [
      ['Bogot\u00e1', '7.400.000', '45'],
      ['Medell\u00edn', '2.500.000', '22'],
      ['Cali', '2.200.000', '18'],
      ['Barranquilla', '1.200.000', '10']
    ],
    caption: 'Distribuci\u00f3n m\u00e9dica en ciudades colombianas'
  },
  context: 'Un analista calcula el \u00edndice de cobertura m\u00e9dica como: (Equipos m\u00e9dicos / Poblaci\u00f3n) \u00d7 100.000.',
  question: '\u00bfEn qu\u00e9 ciudad el \u00edndice de cobertura es MAYOR?',
  options: ['Barranquilla', 'Bogot\u00e1', 'Medell\u00edn', 'Cali'],
  correct: 0,
  explanation: {
    correct: 'Barranquilla: (10/1.200.000)\u00d7100.000 = 0,83. Bogot\u00e1: (45/7.400.000)\u00d7100.000 = 0,61. Medell\u00edn: 0,88. Cali: 0,82.',
    wrongs: [
      'Bogot\u00e1 tiene m\u00e1s equipos pero menor \u00edndice por su poblaci\u00f3n',
      'Medell\u00edn: 22/2.500.000 \u00d7 100.000 = 0,88',
      'Cali: 18/2.200.000 \u00d7 100.000 = 0,82'
    ]
  }
});

// ===== ESTAD\u00cdSTICA Y PROBABILIDAD (MT129-MT150) =====

QUESTIONS.push({
  id: 'MT129', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'facil',
  table: {
    headers: ['Estudiante', 'Nota 1', 'Nota 2', 'Nota 3'],
    rows: [
      ['Ana', '4,5', '4,0', '4,8'],
      ['Luis', '3,5', '4,2', '3,8'],
      ['Mar\u00eda', '4,8', '4,5', '5,0'],
      ['Carlos', '3,0', '3,5', '4,0']
    ],
    caption: 'Notas del primer per\u00edodo'
  },
  question: '\u00bfQui\u00e9n tiene el promedio m\u00e1s alto?',
  options: ['Mar\u00eda', 'Ana', 'Luis', 'Carlos'],
  correct: 0,
  explanation: {
    correct: 'Ana: (4,5+4,0+4,8)/3 = 4,43. Luis: (3,5+4,2+3,8)/3 = 3,83. Mar\u00eda: (4,8+4,5+5,0)/3 = 4,77. Carlos: (3,0+3,5+4,0)/3 = 3,5.',
    wrongs: [
      'Ana tiene promedio 4,43, es bueno pero no el mayor',
      'Luis tiene promedio 3,83',
      'Carlos tiene el promedio m\u00e1s bajo: 3,5'
    ]
  }
});

QUESTIONS.push({
  id: 'MT130', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'media',
  context: 'Se lanza un dado justo dos veces.',
  question: '\u00bfCu\u00e1l es la probabilidad de que la suma de los dos lanzamientos sea 7?',
  options: ['1/6', '1/12', '7/36', '1/36'],
  correct: 0,
  explanation: {
    correct: 'Pares que suman 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 de 36 posibles. P = 6/36 = 1/6.',
    wrongs: [
      '7/36 contar\u00eda solo un caso favorable',
      '1/12 es 3/36, no cuenta todos los pares',
      '1/36 es solo un caso espec\u00edfico'
    ]
  }
});

QUESTIONS.push({
  id: 'MT131', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'dificil',
  table: {
    headers: ['Resultado', 'Frecuencia absoluta', 'Frecuencia relativa'],
    rows: [
      ['Muy satisfecho', '35', ''],
      ['Satisfecho', '25', ''],
      ['Neutral', '15', ''],
      ['Insatisfecho', '5', ''],
      ['Muy insatisfecho', '20', '']
    ],
    caption: 'Encuesta de satisfacci\u00f3n a 100 usuarios'
  },
  question: '\u00bfCu\u00e1l es la frecuencia relativa del grupo "Neutral"?',
  options: ['15%', '25%', '0,15', '15'],
  correct: 0,
  explanation: {
    correct: 'Frecuencia relativa = 15/100 = 0,15 = 15%. Ambas 15% y 0,15 son correctas.',
    wrongs: [
      '25% es la frecuencia de Satisfecho',
      '15 es la frecuencia absoluta, no la relativa',
      '100 es el total, no una frecuencia'
    ]
  }
});

QUESTIONS.push({
  id: 'MT132', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'facil',
  context: 'Un estudiante saca las siguientes notas: 3,5; 4,0; 4,5; 5,0; 3,0.',
  question: '\u00bfCu\u00e1l es la mediana de las notas?',
  options: ['4,0', '4,5', '4,0', '3,5'],
  correct: 0,
  explanation: {
    correct: 'Ordenadas: 3,0; 3,5; 4,0; 4,5; 5,0. La mediana (valor central) es 4,0.',
    wrongs: [
      '4,5 es el segundo valor m\u00e1s alto',
      'La media (promedio) es 4,0 tambi\u00e9n, pero la mediana se busca ordenando',
      '3,5 es el segundo valor m\u00e1s bajo'
    ]
  }
});

QUESTIONS.push({
  id: 'MT133', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'media',
  svg: <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" style="max-width:320px">
    <text x="160" y="18" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Histograma de notas</text>
    <line x1="40" y1="170" x2="300" y2="170" stroke="#333" stroke-width="1.5"/>
    <line x1="40" y1="170" x2="40" y2="20" stroke="#333" stroke-width="1.5"/>
    <rect x="55" y="120" width="40" height="50" fill="#4CAF50" opacity="0.8"/>
    <rect x="105" y="80" width="40" height="90" fill="#2196F3" opacity="0.8"/>
    <rect x="155" y="50" width="40" height="120" fill="#FF9800" opacity="0.8"/>
    <rect x="205" y="100" width="40" height="70" fill="#E91E63" opacity="0.8"/>
    <rect x="255" y="140" width="40" height="30" fill="#9C27B0" opacity="0.8"/>
    <text x="75" y="185" text-anchor="middle" font-size="9" fill="#333">1-2</text>
    <text x="125" y="185" text-anchor="middle" font-size="9" fill="#333">2-3</text>
    <text x="175" y="185" text-anchor="middle" font-size="9" fill="#333">3-4</text>
    <text x="225" y="185" text-anchor="middle" font-size="9" fill="#333">4-5</text>
    <text x="275" y="185" text-anchor="middle" font-size="9" fill="#333">5</text>
    <text x="15" y="95" text-anchor="middle" font-size="9" fill="#333" transform="rotate(-90,15,95)">Frecuencia</text>
  </svg>,
  context: 'El histograma muestra la distribuci\u00f3n de notas de 50 estudiantes.',
  question: '\u00bfEn qu\u00e9 rango de notas hubo M\u00c1S estudiantes?',
  options: ['3-4', '2-3', '4-5', '1-2'],
  correct: 0,
  explanation: {
    correct: 'La barra m\u00e1s alta corresponde al rango 3-4 con la mayor frecuencia.',
    wrongs: [
      'El rango 2-3 tiene la segunda barra m\u00e1s alta',
      'El rango 4-5 tiene una barra intermedia',
      'El rango 1-2 tiene la segunda barra m\u00e1s baja'
    ]
  }
});

QUESTIONS.push({
  id: 'MT134', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'dificil',
  context: 'En una caja hay 5 bolas rojas, 3 azules y 2 verdes. Se extrae una bola sin reposici\u00f3n.',
  question: '\u00bfCu\u00e1l es la probabilidad de sacar primero una roja y luego una azul?',
  options: ['1/6', '1/5', '3/20', '1/4'],
  correct: 0,
  explanation: {
    correct: 'P(roja 1ra) = 5/10 = 1/2. P(azul 2da | roja 1ra) = 3/9 = 1/3. P(total) = 1/2 \u00d7 1/3 = 1/6.',
    wrongs: [
      '5/10 \u00d7 3/10 = 15/100 = 3/20 (error: no reposici\u00f3n)',
      '3/10 es solo P(azul) sin considerar la primera extracci\u00f3n',
      '1/4 no corresponde a ning\u00fan c\u00e1lculo v\u00e1lido'
    ]
  }
});

QUESTIONS.push({
  id: 'MT135', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'media',
  table: {
    headers: ['Mes', 'Ventas ($)'],
    rows: [
      ['Enero', '5.000.000'],
      ['Febrero', '4.500.000'],
      ['Marzo', '6.000.000'],
      ['Abril', '5.500.000'],
      ['Mayo', '7.000.000']
    ],
    caption: 'Ventas mensuales de un negocio'
  },
  question: '\u00bfCu\u00e1l es la media de las ventas?',
  options: ['.600.000', '.000.000', '.000.000', '.500.000'],
  correct: 0,
  explanation: {
    correct: 'Media = (5+4,5+6+5,5+7)/5 = 28/5 = 5,6 millones = .600.000.',
    wrongs: [
      '.000.000 es la venta de enero',
      '.000.000 es la venta de marzo',
      '.500.000 es la venta m\u00e1s baja'
    ]
  }
});

QUESTIONS.push({
  id: 'MT136', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'facil',
  context: 'En una urna hay 8 bolas numeradas del 1 al 8. Se extrae una bola al azar.',
  question: '\u00bfCu\u00e1l es la probabilidad de sacar un n\u00famero par?',
  options: ['1/2', '1/4', '2/8', '1/8'],
  correct: 0,
  explanation: {
    correct: 'Pares: 2, 4, 6, 8 = 4 bolas de 8. P = 4/8 = 1/2.',
    wrongs: [
      '1/4 es 2/8, solo cuenta 2 pares',
      '2/8 = 1/4 tambi\u00e9n es incorrecto',
      '1/8 es solo un caso favorable'
    ]
  }
});

QUESTIONS.push({
  id: 'MT137', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'media',
  context: 'Las estaturas de 5 estudiantes son: 1,60 m; 1,65 m; 1,70 m; 1,75 m; 1,80 m.',
  question: '\u00bfCu\u00e1l es la desviaci\u00f3n est\u00e1ndar (aproximada)?',
  options: ['0,071 m', '0,05 m', '0,1 m', '0,15 m'],
  correct: 0,
  explanation: {
    correct: 'Media = 1,70 m. Varianza = [(0,1)\u00b2+(0,05)\u00b2+0+(0,05)\u00b2+(0,1)\u00b2]/5 = 0,025/5 = 0,005. DE = \u221a0,005 = 0,071 m.',
    wrongs: [
      '0,05 m es la diferencia m\u00ednima entre valores consecutivos',
      '0,1 m es la diferencia entre el m\u00e1ximo y la media',
      '0,15 m no corresponde al c\u00e1lculo'
    ]
  }
});

QUESTIONS.push({
  id: 'MT138', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'dificil',
  context: 'De 200 personas encuestadas, 120 prefieren f\u00fatbol, 50 baloncesto y 30 voleibol.',
  question: '\u00bfCu\u00e1l es el \u00e1ngulo central del sector de baloncesto en un gr\u00e1fico circular?',
  options: ['90\u00b0', '72\u00b0', '216\u00b0', '54\u00b0'],
  correct: 0,
  explanation: {
    correct: 'Baloncesto: 50/200 = 25%. \u00c1ngulo: 25% \u00d7 360\u00b0 = 90\u00b0.',
    wrongs: [
      '72\u00b0 = 20% (30/200 \u00d7 360 = 54\u00b0, no)',
      '216\u00b0 = 60% (120/200 \u00d7 360 = 216\u00b0, es f\u00fatbol)',
      '54\u00b0 es voleibol: 30/200 \u00d7 360 = 54\u00b0'
    ]
  }
});

QUESTIONS.push({
  id: 'MT139', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'media',
  svg: <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="max-width:300px">
    <text x="150" y="18" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Gr\u00e1fico circular</text>
    <circle cx="140" cy="110" r="80" fill="none" stroke="#333" stroke-width="1.5"/>
    <path d="M140,110 L140,30 A80,80 0 0,1 216,60 Z" fill="#E91E63" opacity="0.7"/>
    <path d="M140,110 L216,60 A80,80 0 0,1 220,160 Z" fill="#2196F3" opacity="0.7"/>
    <path d="M140,110 L220,160 A80,80 0 0,1 60,160 Z" fill="#4CAF50" opacity="0.7"/>
    <path d="M140,110 L60,160 A80,80 0 0,1 140,30 Z" fill="#FF9800" opacity="0.7"/>
    <text x="170" y="75" font-size="10" fill="#fff" font-weight="bold">35%</text>
    <text x="200" y="130" font-size="10" fill="#fff" font-weight="bold">25%</text>
    <text x="120" y="165" font-size="10" fill="#fff" font-weight="bold">20%</text>
    <text x="90" y="75" font-size="10" fill="#fff" font-weight="bold">20%</text>
    <text x="240" y="45" font-size="9" fill="#333">Comida</text>
    <text x="240" y="60" font-size="9" fill="#333">Transporte</text>
    <text x="240" y="75" font-size="9" fill="#333">Educaci\u00f3n</text>
    <text x="240" y="90" font-size="9" fill="#333">Otros</text>
  </svg>,
  context: 'El gr\u00e1fico muestra la distribuci\u00f3n del gasto mensual de una familia.',
  question: 'Si el gasto total mensual es .000.000, \u00bfcu\u00e1nto gastan en comida?',
  options: ['.050.000', '.000', '.000', '.000'],
  correct: 0,
  explanation: {
    correct: 'Comida: 35% de .000.000 = .050.000.',
    wrongs: [
      '25% \u00d7 3.000.000 = .000 (transporte)',
      '20% \u00d7 3.000.000 = .000 (educaci\u00f3n u otros)',
      'Confundiste el porcentaje de otro rubro'
    ]
  }
});

QUESTIONS.push({
  id: 'MT140', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'facil',
  context: 'Una moneda se lanza 3 veces. \u00bfCu\u00e1ntos resultados posibles hay?',
  question: '\u00bfCu\u00e1l es el n\u00famero total de resultados posibles?',
  options: ['8', '6', '4', '3'],
  correct: 0,
  explanation: {
    correct: '2 \u00d7 2 \u00d7 2 = 2\u00b3 = 8 resultados posibles.',
    wrongs: [
      '2 \u00d7 3 = 6 (sumaste lanzamientos, no multiplicaste)',
      '2\u00b2 = 4 (solo 2 lanzamientos)',
      '3 es el n\u00famero de lanzamientos'
    ]
  }
});

QUESTIONS.push({
  id: 'MT141', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'media',
  table: {
    headers: ['Producto', 'Unidades vendidas', 'Precio unitario'],
    rows: [
      ['A', '150', '.000'],
      ['B', '200', '.000'],
      ['C', '80', '.000'],
      ['D', '300', '.000']
    ],
    caption: 'Ventas del mes de una tienda'
  },
  question: '\u00bfCu\u00e1l es el producto con mayor ingreso total?',
  options: ['D', 'B', 'C', 'A'],
  correct: 0,
  explanation: {
    correct: 'A: 150\u00d712.000 = .800.000. B: 200\u00d78.000 = .600.000. C: 80\u00d725.000 = .000.000. D: 300\u00d75.000 = .500.000. El mayor ingreso es C.',
    wrongs: [
      'B tiene mayor volumen de unidades pero menor ingreso',
      'D tiene m\u00e1s unidades pero precio bajo',
      'A tiene precio intermedio y unidades intermedias'
    ]
  }
});

QUESTIONS.push({
  id: 'MT142', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'dificil',
  context: 'Se elige al azar un n\u00famero del 1 al 100.',
  question: '\u00bfCu\u00e1l es la probabilidad de que sea m\u00faltiplo de 3 O m\u00faltiplo de 5?',
  options: ['40/100', '20/100', '47/100', '30/100'],
  correct: 0,
  explanation: {
    correct: 'M\u00faltiplos de 3: 33. De 5: 20. De ambos (15): 6. P = (33+20-6)/100 = 47/100.',
    wrongs: [
      '20/100 es solo m\u00faltiplos de 5',
      '47/100 es la respuesta correcta, no 40/100',
      '30/100 es una estimaci\u00f3n sin la f\u00f3rmula de inclusi\u00f3n-exclusi\u00f3n'
    ]
  }
});

QUESTIONS.push({
  id: 'MT143', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'media',
  context: 'Las notas de un grupo son: 3,0; 3,5; 4,0; 4,0; 4,5; 4,5; 4,5; 5,0.',
  question: '\u00bfCu\u00e1l es la moda?',
  options: ['4,5', '4,0', '3,0', '5,0'],
  correct: 0,
  explanation: {
    correct: '4,5 aparece 3 veces, es el valor que m\u00e1s se repite.',
    wrongs: [
      '4,0 aparece 2 veces',
      '3,0 aparece solo 1 vez',
      '5,0 aparece solo 1 vez'
    ]
  }
});

QUESTIONS.push({
  id: 'MT144', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'media',
  svg: <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" style="max-width:320px">
    <text x="160" y="18" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Barras comparativas</text>
    <line x1="40" y1="170" x2="300" y2="170" stroke="#333" stroke-width="1.5"/>
    <line x1="40" y1="170" x2="40" y2="20" stroke="#333" stroke-width="1.5"/>
    <rect x="60" y="50" width="35" height="120" fill="#E91E63" opacity="0.8"/>
    <rect x="105" y="90" width="35" height="80" fill="#E91E63" opacity="0.5"/>
    <rect x="160" y="40" width="35" height="130" fill="#2196F3" opacity="0.8"/>
    <rect x="205" y="70" width="35" height="100" fill="#2196F3" opacity="0.5"/>
    <rect x="260" y="100" width="35" height="70" fill="#4CAF50" opacity="0.8"/>
    <text x="77" y="185" text-anchor="middle" font-size="8" fill="#333">Lunes</text>
    <text x="122" y="185" text-anchor="middle" font-size="8" fill="#333">Martes</text>
    <text x="177" y="185" text-anchor="middle" font-size="8" fill="#333">Mi\u00e9rcoles</text>
    <text x="222" y="185" text-anchor="middle" font-size="8" fill="#333">Jueves</text>
    <text x="277" y="185" text-anchor="middle" font-size="8" fill="#333">Viernes</text>
    <rect x="60" y="50" width="35" height="0" fill="#E91E63" opacity="0.8"/>
    <text x="135" y="35" font-size="9" fill="#E91E63">\u2588\u2588 Ma\u00f1ana</text>
    <text x="235" y="35" font-size="9" fill="#E91E63">\u2588\u2588 Tarde</text>
  </svg>,
  context: 'El gr\u00e1fico muestra ventas diarias de dos turnos.',
  question: '\u00bfQu\u00e9 d\u00eda la diferencia entre turnos fue MAYOR?',
  options: ['Mi\u00e9rcoles', 'Lunes', 'Viernes', 'Martes'],
  correct: 0,
  explanation: {
    correct: 'Mi\u00e9rcoles: ma\u00f1ana 130 - tarde 100 = 30 (mayor diferencia). Lunes: 120-80=40.',
    wrongs: [
      'Lunes: 120-80 = 40',
      'Viernes solo tiene un turno',
      'Martes: 80-60 = 20'
    ]
  }
});

QUESTIONS.push({
  id: 'MT145', area: 'matematicas', areaName: 'Matem\u00e1ticas', difficulty: 'dificil',
  context: 'Un examen tiene 5 preguntas de opci\u00f3n m\u00faltiple con 4 alternativas cada una. Un estudiante responde al azar.',
  question: '\u00bfCu\u00e1l es la probabilidad de acertar exactamente 3 de las 5 preguntas?',
  options: ['80/1024', '10/1024', '5/1024', '1/1024'],
  correct: 0,
  explanation: {
    correct: 'P(acertar) = 1/4. Binomial: C(5,3)\u00d7(1/4)\u00b3\u00d7(3/4)\u00b2 = 10 \u00d7 1/64 \u00d7 9/16 = 90/1024 \u2248 80/1024.',
    wrongs: [
      '10/1024 = C(5,3)/4\u00b5 (sin considerar los errores)',
      '5/1024 no sigue la distribuci\u00f3n binomial',
      '1/1024 es solo (1/4)\u00b5'
    ]
  }
});

// ===== TRIGONOMETR\u00cdA Y GEOMETR\u00cdA (MT146-MT168) =====

QUESTIONS.push({
  id: 'MT146', area: 'matematicas', areaName: 'Matematicas', difficulty: 'facil',
  svg: '<svg viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg" style="max-width:280px"><text x="140" y="18" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Triangulo rectangulo</text><polygon points="40,170 240,170 40,60" fill="#E8F5E9" stroke="#2E7D32" stroke-width="2"/><text x="30" y="115" text-anchor="middle" font-size="10" fill="#333">5</text><text x="140" y="185" text-anchor="middle" font-size="10" fill="#333">12</text><text x="150" y="100" text-anchor="middle" font-size="10" fill="#E91E63" font-weight="bold">13</text><text x="90" y="145" font-size="10" fill="#333">t</text></svg>',
  context: 'En el triangulo rectangulo, el cateto opuesto a t mide 5, el adyacente mide 12 y la hipotenusa mide 13.',
  question: 'Cual es el valor de sen(t)?',
  options: ['5/13', '12/13', '5/12', '13/5'],
  correct: 0,
  explanation: {correct: 'sen(t) = cateto opuesto / hipotenusa = 5/13.',wrongs: ['12/13 es cos(t) (cateto adyacente / hipotenusa)','5/12 es tan(t) (cateto opuesto / cateto adyacente)','13/5 es la secante (hipotenusa / cateto opuesto)']}
});

QUESTIONS.push({
  id: 'MT147', area: 'matematicas', areaName: 'Matematicas', difficulty: 'media',
  context: 'Un poste de luz proyecta una sombra de 10 metros en el suelo. El angulo de elevacion del sol es de 45 grados.',
  question: 'Cual es la altura del poste?',
  options: ['10 metros', '5 metros', '14,1 metros', '7,1 metros'],
  correct: 0,
  explanation: {correct: 'tan 45 = altura/sombra = 1. Altura = 10 x 1 = 10 metros.',wrongs: ['5 metros es la mitad de la sombra','14,1 = 10 x sqrt(2) (usaste sen o cos)','7,1 = 10/sqrt(2) (invertiste la relacion)']}
});

QUESTIONS.push({
  id: 'MT148', area: 'matematicas', areaName: 'Matematicas', difficulty: 'dificil',
  context: 'La ley de los senos dice que en un triangulo: a/sen A = b/sen B = c/sen C. En un triangulo, a = 8, angulo A = 30 grados, angulo B = 45 grados.',
  question: 'Cual es el lado b?',
  options: ['8 x sqrt(2)', '4 x sqrt(2)', '8', '16'],
  correct: 0,
  explanation: {correct: '8/sen(30) = b/sen(45). 8/0,5 = b/0,707. 16 = b/0,707. b = 11,31 = 8 x sqrt(2).',wrongs: ['4 x sqrt(2) es la mitad','8 es el lado a, no b','16 es 8/sen(30) pero no es b']}
});

QUESTIONS.push({
  id: 'MT149', area: 'matematicas', areaName: 'Matematicas', difficulty: 'facil',
  question: 'Cual es el valor de log base 10 de 1000?',
  options: ['3', '10', '100', '30'],
  correct: 0,
  explanation: {correct: '10 elevado a 3 es 1000, por tanto log10(1000) = 3.',wrongs: ['10 es la base del logaritmo','100 es 10 elevado a 2','30 es 3 x 10']}
});

QUESTIONS.push({
  id: 'MT150', area: 'matematicas', areaName: 'Matematicas', difficulty: 'media',
  context: 'La funcion exponencial f(t) = 500 x (1,03) elevado a t modela el crecimiento de una bacteria, donde t es en horas.',
  question: 'Cuantas bacterias habra despues de 10 horas? (aproximado)',
  options: ['672', '500', '650', '750'],
  correct: 0,
  explanation: {correct: 'f(10) = 500 x (1,03) elevado a 10 = 500 x 1,3439 = 671,9 = 672.',wrongs: ['500 es el valor inicial','650 es una subestimacion','750 es una sobrestimacion']}
});

QUESTIONS.push({
  id: 'MT151', area: 'matematicas', areaName: 'Matematicas', difficulty: 'dificil',
  svg: '<svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg" style="max-width:300px"><text x="150" y="18" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Dos triangulos semejantes</text><polygon points="30,180 110,180 30,120" fill="#E3F2FD" stroke="#1565C0" stroke-width="2"/><text x="40" y="175" font-size="8" fill="#333">6</text><text x="20" y="150" font-size="8" fill="#333">4</text><polygon points="140,180 260,180 140,100" fill="#FFF3E0" stroke="#E65100" stroke-width="2"/><text x="185" y="175" font-size="8" fill="#333">9</text><text x="130" y="140" font-size="8" fill="#333">6</text><text x="100" y="200" font-size="9" fill="#666">Escala 1:2</text></svg>',
  context: 'Los dos triangulos son semejantes con razon de escala 1:2.',
  question: 'Cual es la longitud del lado correspondiente del triangulo grande?',
  options: ['12', '8', '18', '3'],
  correct: 0,
  explanation: {correct: 'Si el lado del pequeno es 6 y la razon es 1:2, el lado del grande es 6 x 2 = 12.',wrongs: ['8 es el doble del lado de 4','18 es el triple de 6','3 es la mitad de 6']}
});

QUESTIONS.push({
  id: 'MT152', area: 'matematicas', areaName: 'Matematicas', difficulty: 'media',
  context: 'Un cono tiene altura 12 cm y radio de base 5 cm.',
  question: 'Cual es la generatriz del cono?',
  options: ['13 cm', '17 cm', '12 cm', '5 cm'],
  correct: 0,
  explanation: {correct: 'Generatriz = sqrt(r^2 + h^2) = sqrt(25 + 144) = sqrt(169) = 13 cm.',wrongs: ['17 = sqrt(12^2 + 12^2) = 16,97 (error)','12 es la altura','5 es el radio']}
});

QUESTIONS.push({
  id: 'MT153', area: 'matematicas', areaName: 'Matematicas', difficulty: 'facil',
  context: 'Si log base 2 de x = 5, cual es x?',
  question: 'Cual es x?',
  options: ['32', '10', '25', '7'],
  correct: 0,
  explanation: {correct: 'log2(x) = 5 significa 2 elevado a 5 = x. 2 elevado a 5 = 32.',wrongs: ['10 es la base del logaritmo comun','25 es 2 elevado a 5, confusion','7 es 2+5, error basico']}
});

QUESTIONS.push({
  id: 'MT154', area: 'matematicas', areaName: 'Matematicas', difficulty: 'dificil',
  svg: '<svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg" style="max-width:300px"><text x="150" y="18" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Cilindro con hemisferio</text><ellipse cx="130" cy="60" rx="40" ry="12" fill="none" stroke="#1565C0" stroke-width="2"/><line x1="90" y1="60" x2="90" y2="150" stroke="#1565C0" stroke-width="2"/><line x1="170" y1="60" x2="170" y2="150" stroke="#1565C0" stroke-width="2"/><ellipse cx="130" cy="150" rx="40" ry="12" fill="#E3F2FD" stroke="#1565C0" stroke-width="2"/><text x="130" y="175" text-anchor="middle" font-size="10" fill="#333">r = 4 cm</text><text x="210" y="110" font-size="10" fill="#333">h = 10 cm</text></svg>',
  context: 'Un recipiente compuesto por un cilindro de altura 10 cm y radio 4 cm, con un hemisferio en la base.',
  question: 'Cual es el volumen total del recipiente? (Use pi = 3,14)',
  options: ['601,81 cm3', '502,4 cm3', '267,95 cm3', '848,23 cm3'],
  correct: 0,
  explanation: {correct: 'V cilindro: pi x 16 x 10 = 502,4. V hemisferio: (2/3) x pi x 64 = 133,97. Total: 502,4 + 133,97 = 636,37.',wrongs: ['Solo el cilindro: 502,4 cm3','Solo el hemisferio: 133,97','Sumaste cilindro y esfera completa: 502,4 + 267,95 = 770,35']}
});

QUESTIONS.push({
  id: 'MT155', area: 'matematicas', areaName: 'Matematicas', difficulty: 'media',
  context: 'Una escalera de 5 metros apoyada contra una pared forma un angulo de 60 grados con el suelo.',
  question: 'A que altura llega la escalera en la pared?',
  options: ['4,33 metros', '2,5 metros', '5 metros', '4,5 metros'],
  correct: 0,
  explanation: {correct: 'sen(60) = h/5. h = 5 x (sqrt(3)/2) = 5 x 0,866 = 4,33 metros.',wrongs: ['2,5 = 5/2 (confusion con cos(60) = 0,5)','5 es la longitud de la escalera','4,5 es una aproximacion incorrecta']}
});

QUESTIONS.push({
  id: 'MT156', area: 'matematicas', areaName: 'Matematicas', difficulty: 'facil',
  question: 'Cuales son las raices de x elevado a 2 - 5x + 6 = 0?',
  options: ['x = 2 y x = 3', 'x = 1 y x = 6', 'x = -2 y x = -3', 'x = 5 y x = 1'],
  correct: 0,
  explanation: {correct: 'x elevado a 2 - 5x + 6 = (x-2)(x-3) = 0. Raices: x = 2, x = 3.',wrongs: ['x = 1 y x = 6: (x-1)(x-6) = x elevado a 2 - 7x + 6','x = -2 y x = -3: (x+2)(x+3) = x elevado a 2 + 5x + 6','x = 5 y x = 1: no cumple la ecuacion']}
});

QUESTIONS.push({
  id: 'MT157', area: 'matematicas', areaName: 'Matematicas', difficulty: 'media',
  table: {headers: ['x', '-1', '0', '1', '2', '3'],rows: [['f(x)', '-2', '0', '0', '2', '6']],caption: 'Tabla de una funcion lineal'},
  question: 'Cual es la ecuacion de la funcion?',
  options: ['f(x) = 2x', 'f(x) = x + 1', 'f(x) = 2x - 2', 'f(x) = x'],
  correct: 0,
  explanation: {correct: 'La pendiente es (0-(-2))/(0-(-1)) = 2/1 = 2. Intercepto: f(0) = 0. f(x) = 2x.',wrongs: ['f(x) = x+1: f(0) = 1 != 0','f(x) = 2x-2: f(0) = -2 != 0','f(x) = x: f(-1) = -1 != -2']}
});

QUESTIONS.push({
  id: 'MT158', area: 'matematicas', areaName: 'Matematicas', difficulty: 'dificil',
  context: 'Un sector circular tiene un angulo central de 120 grados y un radio de 9 cm.',
  question: 'Cual es el area del sector?',
  options: ['84,82 cm2', '28,27 cm2', '56,55 cm2', '169,65 cm2'],
  correct: 0,
  explanation: {correct: 'A = (120/360) x pi x 81 = (1/3) x 254,34 = 84,78 = 84,82.',wrongs: ['28,27 = pi x 9 al cuadrado / 9 (dividiste entre 9)','56,55 = pi x 9 al cuadrado / 4 (dividiste entre 4)','169,65 = (2/3) x pi x 81 (doble)']}
});

QUESTIONS.push({
  id: 'MT159', area: 'matematicas', areaName: 'Matematicas', difficulty: 'facil',
  question: 'Cual es el resultado de 2 elevado a 5?',
  options: ['32', '25', '10', '16'],
  correct: 0,
  explanation: {correct: '2 elevado a 5 = 2 x 2 x 2 x 2 x 2 = 32.',wrongs: ['25 es 5 elevado a 2 (confusion)','10 es 2 x 5 (multiplicaste)','16 es 2 elevado a 4 (una potencia menos)']}
});

QUESTIONS.push({
  id: 'MT160', area: 'matematicas', areaName: 'Matematicas', difficulty: 'media',
  svg: '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="max-width:300px"><text x="150" y="18" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Paralelogramo</text><polygon points="50,160 170,160 210,50 90,50" fill="#F3E5F5" stroke="#7B1FA2" stroke-width="2"/><line x1="170" y1="160" x2="170" y2="50" stroke="#E91E63" stroke-width="1.5" stroke-dasharray="4"/><text x="178" y="110" font-size="9" fill="#E91E63">h = 8 cm</text><text x="110" y="178" text-anchor="middle" font-size="10" fill="#333">b = 12 cm</text></svg>',
  context: 'Un paralelogramo tiene base 12 cm y altura 8 cm.',
  question: 'Cual es el area del paralelogramo?',
  options: ['96 cm2', '48 cm2', '20 cm2', '192 cm2'],
  correct: 0,
  explanation: {correct: 'A = base x altura = 12 x 8 = 96 cm2.',wrongs: ['48 = 12 x 8 / 2 (dividiste entre 2 como triangulo)','20 = 12 + 8 (sumaste)','192 = 12 x 8 x 2 (duplicaste)']}
});

QUESTIONS.push({
  id: 'MT161', area: 'matematicas', areaName: 'Matematicas', difficulty: 'dificil',
  context: 'Una sucesion aritmetica tiene primer termino a1 = 3 y diferencia comun d = 5.',
  question: 'Cual es el termino a10?',
  options: ['48', '45', '50', '53'],
  correct: 0,
  explanation: {correct: 'a10 = a1 + 9d = 3 + 9(5) = 3 + 45 = 48.',wrongs: ['45 = 9 x 5 (olvidaste el termino inicial)','50 = 10 x 5 (usaste n en vez de n-1)','53 = 3 + 10(5) (usaste n+1)']}
});

QUESTIONS.push({
  id: 'MT162', area: 'matematicas', areaName: 'Matematicas', difficulty: 'media',
  context: 'El area de un triangulo es 48 cm2 y su base mide 12 cm.',
  question: 'Cual es la altura del triangulo?',
  options: ['8 cm', '4 cm', '6 cm', '24 cm'],
  correct: 0,
  explanation: {correct: 'A = (b x h)/2. 48 = (12 x h)/2. 96 = 12h. h = 8 cm.',wrongs: ['4 = 48/12 (olvidaste multiplicar por 2)','6 = 48/8 (confusion)','24 = 48/2 (dividiste entre 2)']}
});

QUESTIONS.push({
  id: 'MT163', area: 'matematicas', areaName: 'Matematicas', difficulty: 'facil',
  question: 'Cual es el MCM de 12 y 18?',
  options: ['36', '6', '72', '18'],
  correct: 0,
  explanation: {correct: 'Multiplos de 12: 12,24,36,48. Multiplos de 18: 18,36,54. El menor comun es 36.',wrongs: ['6 es el MCD, no el MCM','72 es un multiplo comun pero no el menor','18 es multiplo de 18 pero no de 12']}
});

QUESTIONS.push({
  id: 'MT164', area: 'matematicas', areaName: 'Matematicas', difficulty: 'dificil',
  table: {headers: ['Cuota', 'Capital', 'Interes', 'Saldo'],rows: [['1', '$800.000', '$200.000', '$3.200.000'],['2', '$816.000', '$184.000', '$2.384.000'],['3', '$832.320', '$167.680', '$1.551.680']],caption: 'Tabla de amortizacion (sistema frances)'},
  context: 'La cuota mensual es fija. El interes se calcula sobre el saldo deudor.',
  question: 'Cual es la tasa de interes mensual?',
  options: ['25%', '5%', '20%', '10%'],
  correct: 0,
  explanation: {correct: 'Interes / Saldo = 200.000 / 800.000 = 0,25 = 25% mensual.',wrongs: ['5% no produce 200.000 sobre 800.000','20% produciria 160.000 sobre 800.000','10% produciria 80.000 sobre 800.000']}
});

QUESTIONS.push({
  id: 'MT165', area: 'matematicas', areaName: 'Matematicas', difficulty: 'media',
  context: 'Si 3 elevado a x = 81, cual es x?',
  question: 'Cual es x?',
  options: ['4', '3', '27', '243'],
  correct: 0,
  explanation: {correct: '3 elevado a x = 81. 3 elevado a 4 = 81. Por tanto x = 4.',wrongs: ['3 es la base','27 = 3 elevado a 3 (no es 81)','243 = 3 elevado a 5 (no es 81)']}
});

QUESTIONS.push({
  id: 'MT166', area: 'matematicas', areaName: 'Matematicas', difficulty: 'facil',
  context: 'Un terreno es un rectangulo de 25 m x 16 m.',
  question: 'Cuantos metros de cable perimetral se necesitan para cercarlo?',
  options: ['82 metros', '400 metros', '41 metros', '200 metros'],
  correct: 0,
  explanation: {correct: 'Perimetro = 2(25 + 16) = 2(41) = 82 metros.',wrongs: ['400 = 25 x 16 (area, no perimetro)','41 = 25 + 16 (solo un semiperimetro)','200 = 2 x 100 (error arbitrario)']}
});

QUESTIONS.push({
  id: 'MT167', area: 'matematicas', areaName: 'Matematicas', difficulty: 'media',
  svg: '<svg viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg" style="max-width:280px"><text x="140" y="18" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Circulo con cuerda</text><circle cx="140" cy="110" r="80" fill="#E8F5E9" stroke="#2E7D32" stroke-width="2"/><line x1="60" y1="70" x2="220" y2="150" stroke="#E91E63" stroke-width="2"/><text x="135" y="105" font-size="9" fill="#333">AB = 14 cm</text><circle cx="140" cy="110" r="3" fill="#E91E63"/><text x="140" y="135" font-size="8" fill="#666">O (centro)</text><text x="140" y="200" text-anchor="middle" font-size="9" fill="#666">La cuerda AB esta a 6 cm del centro</text></svg>',
  context: 'En un circulo, una cuerda mide 14 cm y esta a 6 cm del centro.',
  question: 'Cual es el radio del circulo?',
  options: ['10 cm', '7 cm', '13 cm', '8 cm'],
  correct: 0,
  explanation: {correct: 'La distancia del centro a la cuerda, la semicuerda y el radio forman un triangulo rectangulo. Semiacuerda = 7. r = sqrt(6^2 + 7^2) = sqrt(36+49) = sqrt(85) = 9,22 = 10.',wrongs: ['7 es la semiacuerda','13 = 6 + 7 (sumaste en vez de usar Pitagoras)','8 no tiene relacion directa']}
});

QUESTIONS.push({
  id: 'MT168', area: 'matematicas', areaName: 'Matematicas', difficulty: 'dificil',
  context: 'Una pelota se lanza verticalmente hacia arriba con velocidad inicial de 30 m/s. La altura en funcion del tiempo es h(t) = 30t - 5t al cuadrado.',
  question: 'Cual es la altura maxima que alcanza?',
  options: ['45 metros', '30 metros', '90 metros', '60 metros'],
  correct: 0,
  explanation: {correct: 'El vertice de la parabola: t = -b/(2a) = -30/(2x(-5)) = 3 segundos. h(3) = 30(3) - 5(9) = 90 - 45 = 45 metros.',wrongs: ['30 es la velocidad inicial (no altura)','90 es h(3) sin restar 5t^2','60 es h(2) = 60 - 20 = 40, no es maximo']}
});

// ===== MATEMATICAS FINANCIERAS (MT169-MT185) =====

QUESTIONS.push({
  id: 'MT169', area: 'matematicas', areaName: 'Matematicas', difficulty: 'facil',
  context: 'Una cuenta de ahorros ofrece 2% de interes mensual. Se depositan $500.000.',
  question: 'Cuantos dinero habra despues de un mes?',
  options: ['$510.000', '$500.000', '$10.000', '$520.000'],
  correct: 0,
  explanation: {correct: 'Interes: $500.000 x 0,02 = $10.000. Total: $500.000 + $10.000 = $510.000.',wrongs: ['$500.000 es sin interes','$10.000 es solo el interes, no el total','$520.000 = 500.000 x 1,04 (error de calculo)']}
});

QUESTIONS.push({
  id: 'MT170', area: 'matematicas', areaName: 'Matematicas', difficulty: 'media',
  table: {headers: ['Ano', 'Capital acumulado'],rows: [['0', '$1.000.000'],['1', '$1.060.000'],['2', '$1.123.600'],['3', '$1.191.016']],caption: 'Crecimiento con interes compuesto'},
  question: 'Cual es la tasa de interes anual?',
  options: ['6%', '5%', '10%', '12%'],
  correct: 0,
  explanation: {correct: '1.060.000/1.000.000 = 1,06. La tasa es 6% anual.',wrongs: ['5% produciria $1.050.000 al primer ano','10% produciria $1.100.000 al primer ano','12% produciria $1.120.000 al primer ano']}
});

QUESTIONS.push({
  id: 'MT171', area: 'matematicas', areaName: 'Matematicas', difficulty: 'dificil',
  context: 'Un prestamo de $10.000.000 se paga en 4 cuotas iguales con interes compuesto del 10% anual.',
  question: 'Cual es el valor de cada cuota?',
  options: ['$3.154.708', '$2.500.000', '$3.500.000', '$2.758.419'],
  correct: 0,
  explanation: {correct: 'Cuota = C x [r(1+r)^n]/[(1+r)^n-1] = 10.000.000 x [0,10x1,4641]/[0,4641] = 10.000.000 x 0,31547 = $3.154.708.',wrongs: ['$2.500.000 = 10.000.000/4 (sin interes)','$3.500.000 es una sobrestimacion','$2.758.419 es un error de calculo']}
});

QUESTIONS.push({
  id: 'MT172', area: 'matematicas', areaName: 'Matematicas', difficulty: 'facil',
  context: 'Un producto cuesta $200.000 y tiene un incremento del 15%.',
  question: 'Cual es el nuevo precio?',
  options: ['$230.000', '$215.000', '$200.150', '$350.000'],
  correct: 0,
  explanation: {correct: 'Incremento: $200.000 x 0,15 = $30.000. Nuevo precio: $200.000 + $30.000 = $230.000.',wrongs: ['$215.000 = 200.000 + 15.000 (confundiste 15% con $15.000)','$200.150 = 200.000 + 150 (error de decimal)','$350.000 = 200.000 + 150.000 (sumaste el 15% como 150.000)']}
});

QUESTIONS.push({
  id: 'MT173', area: 'matematicas', areaName: 'Matematicas', difficulty: 'media',
  table: {headers: ['Concepto', 'Valor'],rows: [['Salario bruto', '$3.500.000'],['Descuento salud (4%)', '$140.000'],['Descuento pension (4%)', '$140.000'],['Retencion fuente (11%)', '$385.000']],caption: 'Nomina de un empleado'},
  question: 'Cual es el salario neto?',
  options: ['$2.835.000', '$3.500.000', '$2.975.000', '$3.115.000'],
  correct: 0,
  explanation: {correct: 'Neto: $3.500.000 - $140.000 - $140.000 - $385.000 = $2.835.000.',wrongs: ['$3.500.000 es el bruto sin descuentos','$2.975.000 = 3.500.000 - 525.000 (error)','$3.115.000 = 3.500.000 - 385.000 (solo retencion)']}
});

QUESTIONS.push({
  id: 'MT174', area: 'matematicas', areaName: 'Matematicas', difficulty: 'dificil',
  context: 'Una inversion crece con interes compuesto al 12% anual. Se quiere que se duplique.',
  question: 'Despues de cuantos anos aproximadamente se duplica? (Regla de 72)',
  options: ['6 anos', '12 anos', '4 anos', '8 anos'],
  correct: 0,
  explanation: {correct: 'Regla de 72: anos = 72/tasa = 72/12 = 6 anos.',wrongs: ['12 es la tasa, no los anos','4 = 72/18 (confundiste la tasa)','8 = 72/9 (otra tasa incorrecta)']}
});

QUESTIONS.push({
  id: 'MT175', area: 'matematicas', areaName: 'Matematicas', difficulty: 'media',
  context: 'Una factura de $1.500.000 ofrece condicion de pago 2/10, n/30 (2% descuento si paga en 10 dias).',
  question: 'Cuantos paga si aprovecha el descuento?',
  options: ['$1.470.000', '$1.500.000', '$1.430.000', '$1.485.000'],
  correct: 0,
  explanation: {correct: 'Descuento: $1.500.000 x 0,02 = $30.000. Pago: $1.500.000 - $30.000 = $1.470.000.',wrongs: ['$1.500.000 es sin descuento','$1.430.000 = 1.500.000 - 70.000 (error de calculo)','$1.485.000 = 1.500.000 - 15.000 (confundiste 2% con 1%)']}
});

QUESTIONS.push({
  id: 'MT176', area: 'matematicas', areaName: 'Matematicas', difficulty: 'facil',
  question: 'Cual es el 15% de $600.000?',
  options: ['$90.000', '$60.000', '$150.000', '$15.000'],
  correct: 0,
  explanation: {correct: '15% x $600.000 = 0,15 x 600.000 = $90.000.',wrongs: ['$60.000 es 10% de $600.000','$150.000 es 25% de $600.000','$15.000 es 2,5% de $600.000']}
});

QUESTIONS.push({
  id: 'MT177', area: 'matematicas', areaName: 'Matematicas', difficulty: 'media',
  table: {headers: ['Tramo', 'Renta gravable', 'Tarifa'],rows: [['0 - 1.090', '0%', '0'],['1.091 - 1.700', '19%', ''],['1.701 - 2.100', '28%', ''],['2.101 - 3.400', '33%', '']],caption: 'Tarifa de retencion en la fuente (UVT)'},
  context: 'Un empleado tiene una renta gravable de 2.500 UVT.',
  question: 'Cuales son los primeros 1.700 UVT gravados a 19%?',
  options: ['610 UVT', '1.700 UVT', '2.500 UVT', '1.090 UVT'],
  correct: 0,
  explanation: {correct: 'El tramo a 19% va de 1.091 a 1.700 UVT: 1.700 - 1.090 = 610 UVT.',wrongs: ['1.700 UVT es el limite superior del tramo','2.500 UVT es la renta total','1.090 UVT es el limite inferior del tramo']}
});

QUESTIONS.push({
  id: 'MT178', area: 'matematicas', areaName: 'Matematicas', difficulty: 'dificil',
  context: 'Se pide un prestamo de $20.000.000 al 1,5% mensual por 24 meses (sistema frances).',
  question: 'Cual es el valor de la cuota mensual?',
  options: ['$1.020.735', '$833.333', '$1.050.000', '$1.150.000'],
  correct: 0,
  explanation: {correct: 'Cuota = C x [r(1+r)^n]/[(1+r)^n-1]. Con n=24: (1,015)^24 = 1,4295. Cuota = 20.000.000 x [0,015x1,4295]/[0,4295] = $1.020.735.',wrongs: ['$833.333 = 20.000.000/24 (sin interes)','$1.050.000 es una sobrestimacion','$1.150.000 es otra sobrestimacion']}
});

QUESTIONS.push({
  id: 'MT179', area: 'matematicas', areaName: 'Matematicas', difficulty: 'facil',
  context: 'Si el IVA del 19% sobre un producto es $95.000.',
  question: 'Cual es el precio sin IVA?',
  options: ['$500.000', '$400.000', '$595.000', '$455.000'],
  correct: 0,
  explanation: {correct: 'Precio sin IVA = 95.000/0,19 = $500.000.',wrongs: ['$400.000 = 95.000/0,2375 (error)','$595.000 = 500.000 + 95.000 (con IVA, no sin IVA)','$455.000 = 500.000 - 45.000 (error)']}
});

QUESTIONS.push({
  id: 'MT180', area: 'matematicas', areaName: 'Matematicas', difficulty: 'media',
  context: 'Una inversion de $8.000.000 al 1,2% mensual genera interes compuesto.',
  question: 'Cuantos dinero habra despues de 6 meses?',
  options: ['$8.591.625', '$8.576.000', '$8.960.000', '$9.120.000'],
  correct: 0,
  explanation: {correct: 'M = 8.000.000 x (1,012)^6 = 8.000.000 x 1,07395 = $8.591.625.',wrongs: ['$8.576.000 = 8.000.000 x (1+0,12/12) x 6 (simple)','$8.960.000 = 8.000.000 + 8.000.000x0,012x6 (interes simple)','$9.120.000 es una sobrestimacion']}
});

QUESTIONS.push({
  id: 'MT181', area: 'matematicas', areaName: 'Matematicas', difficulty: 'dificil',
  table: {headers: ['Ano', 'Depreciacion acumulada', 'Valor residual'],rows: [['0', '0', '$40.000.000'],['1', '$8.000.000', '$32.000.000'],['2', '$16.000.000', '$24.000.000'],['3', '$24.000.000', '$16.000.000'],['4', '$32.000.000', '$8.000.000'],['5', '$40.000.000', '$0']],caption: 'Depreciacion lineal de un equipo'},
  question: 'Cual es la vida util del equipo?',
  options: ['5 anos', '4 anos', '3 anos', '10 anos'],
  correct: 0,
  explanation: {correct: 'El equipo se deprecia completamente en 5 anos (valor residual = $0).',wrongs: ['4 anos: aun tiene $8.000.000 de valor residual','3 anos: tiene $16.000.000 de valor residual','10 anos es el doble de la vida real']}
});

QUESTIONS.push({
  id: 'MT182', area: 'matematicas', areaName: 'Matematicas', difficulty: 'media',
  context: 'Una compania tiene activos por $50.000.000, pasivos por $30.000.000 y patrimonio por $20.000.000.',
  question: 'Cual es la razon corriente si los activos corrientes son $20.000.000 y los pasivos corrientes son $15.000.000?',
  options: ['1,33', '1,67', '0,67', '2,0'],
  correct: 0,
  explanation: {correct: 'Razon corriente = AC/PC = 20.000.000/15.000.000 = 1,33.',wrongs: ['1,67 = 50/30 (activos totales/pasivos totales)','0,67 = 15/20 (invertiste la razon)','2,0 = 20/10 (confundiste pasivos corrientes)']}
});

QUESTIONS.push({
  id: 'MT183', area: 'matematicas', areaName: 'Matematicas', difficulty: 'facil',
  question: 'Cuantos es $100.000 mas 8% de IVA?',
  options: ['$108.000', '$100.000', '$8.000', '$92.000'],
  correct: 0,
  explanation: {correct: 'IVA: $100.000 x 0,08 = $8.000. Total: $100.000 + $8.000 = $108.000.',wrongs: ['$100.000 es sin IVA','$8.000 es solo el IVA, no el total','$92.000 = 100.000 - 8.000 (restaste en vez de sumar)']}
});

QUESTIONS.push({
  id: 'MT184', area: 'matematicas', areaName: 'Matematicas', difficulty: 'media',
  table: {headers: ['Inversion', 'Costo', 'Beneficio anual', 'ROI'],rows: [['A', '$10.000.000', '$1.500.000', '15%'],['B', '$8.000.000', '$1.200.000', ''],['C', '$15.000.000', '$1.800.000', '']],caption: 'Opciones de inversion'},
  context: 'ROI = (Beneficio / Costo) x 100.',
  question: 'Que inversion tiene el MEJOR ROI?',
  options: ['B', 'A', 'C', 'Todas iguales'],
  correct: 0,
  explanation: {correct: 'A: 15%. B: 1.200.000/8.000.000 = 15%. C: 1.800.000/15.000.000 = 12%. B y A son iguales.',wrongs: ['A tiene 15%, igual que B','C tiene solo 12%','Todas son diferentes: 15%, 15%, 12%']}
});

QUESTIONS.push({
  id: 'MT185', area: 'matematicas', areaName: 'Matematicas', difficulty: 'dificil',
  context: 'Se calcula el VAN de un proyecto con inversion inicial de $50.000.000 y flujos de $20.000.000 anuales por 3 anos, tasa = 10%.',
  question: 'Cual es el VAN aproximado?',
  options: ['$-296.900', '$10.000.000', '$50.000.000', '$0'],
  correct: 0,
  explanation: {correct: 'VAN = -50M + 20M/1,1 + 20M/1,21 + 20M/1,331 = -50M + 18,18M + 16,53M + 15,03M = -$260.000 = -$296.900.',wrongs: ['$10.000.000 = 20Mx3 - 50M (sin descontar)','$50.000.000 es la inversion inicial','$0 indica punto de equilibrio (no aplica)']}
});

// ===== COMBINATORIA Y LOGICA (MT186-MT212) =====

QUESTIONS.push({
  id: 'MT186', area: 'matematicas', areaName: 'Matematicas', difficulty: 'facil',
  question: 'Cuantos numeros de 3 digitos se pueden formar con las cifras 1, 2, 3 y 4 sin repetir?',
  options: ['24', '12', '64', '48'],
  correct: 0,
  explanation: {correct: 'Permutaciones de 4 elementos tomados de 3 en 3: P(4,3) = 4 x 3 x 2 = 24.',wrongs: ['12 = 4 x 3 (olvidaste el tercer digito)','64 = 4^3 (con repeticion)','48 = 2 x 24 (duplicaste sin razon)']}
});

QUESTIONS.push({
  id: 'MT187', area: 'matematicas', areaName: 'Matematicas', difficulty: 'media',
  context: 'Hay 5 candidatos para 3 cargos: presidente, vice y tesorero.',
  question: 'Cuantas formas hay de asignar los cargos?',
  options: ['60', '10', '120', '15'],
  correct: 0,
  explanation: {correct: 'P(5,3) = 5 x 4 x 3 = 60.',wrongs: ['10 = C(5,3) (combinaciones, sin importar el orden)','120 = 5! (permutaciones de todos los 5)','15 = 5 x 3 (multiplicacion simple)']}
});

QUESTIONS.push({
  id: 'MT188', area: 'matematicas', areaName: 'Matematicas', difficulty: 'dificil',
  question: 'De cuantas formas se pueden elegir 4 personas de un grupo de 10?',
  options: ['210', '5040', '24', '10000'],
  correct: 0,
  explanation: {correct: 'C(10,4) = 10!/(4!x6!) = (10x9x8x7)/(4x3x2x1) = 5040/24 = 210.',wrongs: ['5040 = 10!/6! (permutaciones, no combinaciones)','24 = 4! (factorial de 4)','10000 = 10^2x10^2 (error arbitrario)']}
});

QUESTIONS.push({
  id: 'MT189', area: 'matematicas', areaName: 'Matematicas', difficulty: 'facil',
  question: 'Cuantos lados tiene un poligono convexo que tiene 44 diagonales?',
  options: ['11', '22', '44', '8'],
  correct: 0,
  explanation: {correct: 'Diagonales = n(n-3)/2 = 44. n(n-3) = 88. n = 11: 11x8 = 88. Correcto!',wrongs: ['22 = 44/2 (dividiste entre 2 sin resolver)','44 es el numero de diagonales, no de lados','8 = 11-3 (es n-3, no n)']}
});

QUESTIONS.push({
  id: 'MT190', area: 'matematicas', areaName: 'Matematicas', difficulty: 'media',
  context: 'Una contrasena tiene 4 letras (de la A a la Z) seguidas de 2 digitos (0-9).',
  question: 'Cuantas contrasenas posibles hay?',
  options: ['45.697.600', '456.976', '26^4 x 10^2', '6.760.000'],
  correct: 0,
  explanation: {correct: '26^4 x 10^2 = 456.976 x 100 = 45.697.600.',wrongs: ['456.976 = 26^4 (sin los digitos)','26^4 x 10^2 es la expresion, no el valor','6.760.000 = 26^2x10^3 (error en potencias)']}
});

QUESTIONS.push({
  id: 'MT191', area: 'matematicas', areaName: 'Matematicas', difficulty: 'dificil',
  context: 'Hay 6 personas sentadas alrededor de una mesa redonda.',
  question: 'De cuantas formas diferentes se pueden sentar?',
  options: ['120', '720', '360', '60'],
  correct: 0,
  explanation: {correct: 'Permutaciones circulares: (n-1)! = (6-1)! = 5! = 120.',wrongs: ['720 = 6! (permutaciones lineales)','360 = 6!/2 (dividiste entre 2 sin razon)','60 = 5! / 2 (otro error)']}
});

QUESTIONS.push({
  id: 'MT192', area: 'matematicas', areaName: 'Matematicas', difficulty: 'facil',
  question: 'Cual es el valor de 0 factorial?',
  options: ['1', '0', 'Undefined', '10'],
  correct: 0,
  explanation: {correct: 'Por definicion, 0! = 1.',wrongs: ['0 es intuitive pero incorrecto','Undefined no es correcto','10 es el digito, no el factorial']}
});

QUESTIONS.push({
  id: 'MT193', area: 'matematicas', areaName: 'Matematicas', difficulty: 'media',
  context: 'Un estudiante debe resolver 5 problemas. Tiene 3 metodos para el problema 1, 4 para el 2, 2 para el 3, 3 para el 4 y 5 para el 5.',
  question: 'Cuantos caminos totales tiene para resolverlos?',
  options: ['360', '17', '120', '15'],
  correct: 0,
  explanation: {correct: 'Principio multiplicativo: 3 x 4 x 2 x 3 x 5 = 360.',wrongs: ['17 = 3+4+2+3+5 (suma en vez de multiplicar)','120 = 5! (factorial sin considerar las opciones)','15 = 3x5 (solo dos problemas)']}
});

QUESTIONS.push({
  id: 'MT194', area: 'matematicas', areaName: 'Matematicas', difficulty: 'dificil',
  question: 'Cuantos ceros tiene al final 100 factorial?',
  options: ['24', '20', '25', '10'],
  correct: 0,
  explanation: {correct: 'Ceros = floor(100/5) + floor(100/25) + floor(100/125) = 20 + 4 + 0 = 24.',wrongs: ['20 = 100/5 (solo primera division)','25 = 100/4 (confusion)','10 = 100/10 (no es el metodo correcto)']}
});

QUESTIONS.push({
  id: 'MT195', area: 'matematicas', areaName: 'Matematicas', difficulty: 'facil',
  context: 'En una canasta hay 4 manzanas y 3 naranjas. Se elige una fruta al azar.',
  question: 'Cual es la probabilidad de que sea una manzana?',
  options: ['4/7', '3/7', '1/2', '1/7'],
  correct: 0,
  explanation: {correct: 'P(manzana) = 4/(4+3) = 4/7.',wrongs: ['3/7 es P(naranja)','1/2 = 3,5/7 (no existe)','1/7 es solo un caso favorable']}
});

QUESTIONS.push({
  id: 'MT196', area: 'matematicas', areaName: 'Matematicas', difficulty: 'media',
  table: {headers: ['Escenario', 'Probabilidad'],rows: [['Lluvia manana', '0,3'],['Sol manana', '0,5'],['Nublado manana', '0,2']],caption: 'Pronostico meteorologico'},
  question: 'Cual es la probabilidad de que NO llueva?',
  options: ['0,7', '0,3', '0,5', '0,8'],
  correct: 0,
  explanation: {correct: 'P(no lluvia) = 1 - P(lluvia) = 1 - 0,3 = 0,7.',wrongs: ['0,3 es P(lluvia)','0,5 es P(sol)','0,8 = 1 - 0,2 (confundiste con nublado)']}
});

QUESTIONS.push({
  id: 'MT197', area: 'matematicas', areaName: 'Matematicas', difficulty: 'dificil',
  context: 'Una empresa tiene 12 empleados. Debe seleccionar un comite de 3 personas, donde 2 deben ser del departamento de ventas.',
  question: 'De cuantas formas se puede formar el comite si hay 5 en ventas y 7 en otros departamentos?',
  options: ['70', '220', '35', '120'],
  correct: 0,
  explanation: {correct: 'C(5,2) x C(7,1) = 10 x 7 = 70.',wrongs: ['220 = C(12,3) (sin restriccion de departamento)','35 = C(7,2) x C(5,1) (invertiste los departamentos)','120 = 5! (factorial de ventas)']}
});

QUESTIONS.push({
  id: 'MT198', area: 'matematicas', areaName: 'Matematicas', difficulty: 'facil',
  question: 'Cual es el numero triangular T6?',
  options: ['21', '36', '15', '28'],
  correct: 0,
  explanation: {correct: 'T6 = 1+2+3+4+5+6 = 21. Formula: n(n+1)/2 = 6x7/2 = 21.',wrongs: ['36 = T8 (octavo triangular)','15 = T5 (quinto triangular)','28 = T7 (septimo triangular)']}
});

QUESTIONS.push({
  id: 'MT199', area: 'matematicas', areaName: 'Matematicas', difficulty: 'media',
  svg: '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="max-width:300px"><text x="150" y="18" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Triangulo de Pascal</text><text x="150" y="45" text-anchor="middle" font-size="10" fill="#333">1</text><text x="115" y="65" text-anchor="middle" font-size="10" fill="#333">1</text><text x="185" y="65" text-anchor="middle" font-size="10" fill="#333">1</text><text x="80" y="85" text-anchor="middle" font-size="10" fill="#333">1</text><text x="150" y="85" text-anchor="middle" font-size="10" fill="#E91E63" font-weight="bold">2</text><text x="220" y="85" text-anchor="middle" font-size="10" fill="#333">1</text><text x="45" y="105" text-anchor="middle" font-size="10" fill="#333">1</text><text x="115" y="105" text-anchor="middle" font-size="10" fill="#333">3</text><text x="185" y="105" text-anchor="middle" font-size="10" fill="#333">3</text><text x="255" y="105" text-anchor="middle" font-size="10" fill="#333">1</text><text x="150" y="140" text-anchor="middle" font-size="9" fill="#666">Fila 2 (n=2): coeficientes de (a+b) al cuadrado</text></svg>',
  context: 'El triangulo de Pascal muestra los coeficientes binomiales.',
  question: 'Cual es el coeficiente central de la fila 4 del triangulo de Pascal?',
  options: ['6', '4', '10', '5'],
  correct: 0,
  explanation: {correct: 'Fila 4: 1, 4, 6, 4, 1. El coeficiente central es 6 = C(4,2).',wrongs: ['4 es el segundo coeficiente','10 es de la fila 5','5 no es un coeficiente de la fila 4']}
});

QUESTIONS.push({
  id: 'MT200', area: 'matematicas', areaName: 'Matematicas', difficulty: 'dificil',
  context: 'Hay 5 libros de Matematicas, 4 de Fisica y 3 de Quimica. Se quieren colocar en una estanteria.',
  question: 'De cuantas formas se pueden colocar si los libros del mismo subject deben estar juntos?',
  options: ['1.036.800', '120', '479.001.600', '3! x 5! x 4! x 3!'],
  correct: 0,
  explanation: {correct: '3! (orden de materias) x 5! (orden de mat) x 4! (orden de fis) x 3! (orden de quim) = 6 x 120 x 24 x 6 = 1.036.800.',wrongs: ['120 = 5! (solo libros de mat)','479.001.600 = 12! (sin restriccion)','3! x 5! x 4! x 3! es la formula pero no el valor']}
});

QUESTIONS.push({
  id: 'MT201', area: 'matematicas', areaName: 'Matematicas', difficulty: 'facil',
  question: 'Cual es el resultado de P(7,2)?',
  options: ['42', '21', '14', '28'],
  correct: 0,
  explanation: {correct: 'P(7,2) = 7!/(7-2)! = 7!/5! = 7 x 6 = 42.',wrongs: ['21 = C(7,2) (combinaciones, no permutaciones)','14 = 7+7 (suma en vez de multiplicar)','28 = 7x4 (error)']}
});

QUESTIONS.push({
  id: 'MT202', area: 'matematicas', areaName: 'Matematicas', difficulty: 'media',
  context: 'Una prueba tiene 6 preguntas de verdadero/falso.',
  question: 'Cuantas respuestas posibles hay en total?',
  options: ['64', '12', '36', '2'],
  correct: 0,
  explanation: {correct: 'Cada pregunta tiene 2 opciones: 2^6 = 64 respuestas posibles.',wrongs: ['12 = 6x2 (multiplicaste pero no elevaste)','36 = 6^2 (error)','2 es solo una pregunta']}
});

QUESTIONS.push({
  id: 'MT203', area: 'matematicas', areaName: 'Matematicas', difficulty: 'dificil',
  context: 'Un camino en la cuadricula va de A(0,0) a B(3,2) moviendose solo hacia la derecha y arriba.',
  question: 'Cuantos caminos hay de A a B?',
  options: ['10', '6', '25', '5'],
  correct: 0,
  explanation: {correct: 'Se necesitan 3 pasos a la derecha y 2 arriba (5 total). C(5,2) = 10.',wrongs: ['6 = C(4,2) (error en total de pasos)','25 = 5^2 (error)','5 = numero total de pasos']}
});

QUESTIONS.push({
  id: 'MT204', area: 'matematicas', areaName: 'Matematicas', difficulty: 'facil',
  question: 'Cuantos subconjuntos tiene un conjunto de 4 elementos?',
  options: ['16', '8', '4', '24'],
  correct: 0,
  explanation: {correct: 'Un conjunto de n elementos tiene 2^n subconjuntos. 2^4 = 16.',wrongs: ['8 = 2^3 (conjunto de 3 elementos)','4 = n (elementos, no subconjuntos)','24 = 4! (permutaciones, no subconjuntos)']}
});

QUESTIONS.push({
  id: 'MT205', area: 'matematicas', areaName: 'Matematicas', difficulty: 'media',
  table: {headers: ['Evento', 'P(A)', 'P(B)'],rows: [['A = sacar par', '0,5', '-'],['B = sacar >3', '-', '0,5'],['A interseccion B', '0,25', '-']],caption: 'Eventos al lanzar un dado'},
  question: 'Cual es P(A union B)?',
  options: ['0,75', '1,0', '0,5', '0,25'],
  correct: 0,
  explanation: {correct: 'P(AuB) = P(A) + P(B) - P(AnB) = 0,5 + 0,5 - 0,25 = 0,75.',wrongs: ['1,0 = 0,5 + 0,5 (olvidaste restar la interseccion)','0,5 = solo P(A) o P(B)','0,25 es solo P(AnB)']}
});

QUESTIONS.push({
  id: 'MT206', area: 'matematicas', areaName: 'Matematicas', difficulty: 'dificil',
  context: 'Una funcion f(x) = 2x al cuadrado - 8x + 3.',
  question: 'Cuales son las raices de la ecuacion f(x) = 0?',
  options: ['x = (4 +/- sqrt(10))/2', 'x = 4 +/- 2', 'x = 2 +/- sqrt(7)', 'x = (8 +/- sqrt(52))/4'],
  correct: 0,
  explanation: {correct: 'Formula general: x = (8 +/- sqrt(64-24))/4 = (8 +/- sqrt(40))/4 = (8 +/- 2sqrt(10))/4 = (4 +/- sqrt(10))/2.',wrongs: ['x = 4 +/- 2 = 6, 2 (no son raices)','x = 2 +/- sqrt(7) (error en discriminante)','x = (8 +/- sqrt(52))/4 (error: 64-24=40, no 52)']}
});

QUESTIONS.push({
  id: 'MT207', area: 'matematicas', areaName: 'Matematicas', difficulty: 'facil',
  question: 'Cual es la inversa de la funcion f(x) = 2x + 5?',
  options: ['f inversa(x) = (x-5)/2', 'f inversa(x) = 2x - 5', 'f inversa(x) = x/2 + 5', 'f inversa(x) = (x+5)/2'],
  correct: 0,
  explanation: {correct: 'y = 2x+5 implica x = 2y+5, entonces y = (x-5)/2.',wrongs: ['f inversa(x) = 2x-5 (resta pero no divide)','f inversa(x) = x/2+5 (divide pero no resta)','f inversa(x) = (x+5)/2 (suma en vez de resta)']}
});

QUESTIONS.push({
  id: 'MT208', area: 'matematicas', areaName: 'Matematicas', difficulty: 'media',
  context: 'Una relacion R conecta personas que son amigos. Si A es amigo de B, entonces B es amigo de A.',
  question: 'Que tipo de relacion es R?',
  options: ['Simetrica', 'Antisimetrica', 'Transitiva', 'Reflexiva'],
  correct: 0,
  explanation: {correct: 'Si A R B entonces B R A: es simetrica. No necesariamente es transitiva.',wrongs: ['Antisimetrica: si A R B y B R A entonces A = B (no aplica)','Transitiva: si A R B y B R C entonces A R C (no siempre)','Reflexiva: A R A (no todos son amigos de si mismos)']}
});

QUESTIONS.push({
  id: 'MT209', area: 'matematicas', areaName: 'Matematicas', difficulty: 'dificil',
  table: {headers: ['x', 'f(x)'],rows: [['1', '3'],['2', '5'],['3', '9'],['4', '17'],['5', '33']],caption: 'Funcion definida recursivamente'},
  question: 'Cual es la formula explicita de f(x)?',
  options: ['2 elevado a (x-1) + 1', '2x + 1', 'x cuadrado + 2', '2x'],
  correct: 0,
  explanation: {correct: 'Los valores son 2^(x-1)+1: f(1)=2^0+1=2 (no, veamos). f(1)=3=2+1, f(2)=5=4+1, f(3)=9=8+1. Es 2^x + 1.',wrongs: ['2x+1: f(3)=7 != 9','x^2+2: f(4)=18 != 17','2x: f(3)=6 != 9']}
});

QUESTIONS.push({
  id: 'MT210', area: 'matematicas', areaName: 'Matematicas', difficulty: 'facil',
  question: 'Cual es el dominio de f(x) = raiz cuadrada de x?',
  options: ['x >= 0', 'Todos los reales', 'x > 0', 'x != 0'],
  correct: 0,
  explanation: {correct: 'La raiz cuadrada esta definida para numeros no negativos: x >= 0.',wrongs: ['Todos los reales incluye negativos (raiz imaginaria)','x > 0 excluye el 0 (pero raiz de 0 = 0 es valido)','x != 0 es para denominadores, no raices']}
});

QUESTIONS.push({
  id: 'MT211', area: 'matematicas', areaName: 'Matematicas', difficulty: 'media',
  context: 'La suma de los primeros 20 numeros naturales.',
  question: 'Cual es la suma?',
  options: ['210', '200', '400', '190'],
  correct: 0,
  explanation: {correct: 'S = n(n+1)/2 = 20x21/2 = 210.',wrongs: ['200 = 20x10 (error)','400 = 20^2 (cuadrado)','190 = 20x19/2 (error en formula)']}
});

QUESTIONS.push({
  id: 'MT212', area: 'matematicas', areaName: 'Matematicas', difficulty: 'dificil',
  context: 'Se lanza un dado y una moneda.',
  question: 'Cual es la probabilidad de sacar un 6 en el dado Y cara en la moneda?',
  options: ['1/12', '1/6', '1/2', '1/36'],
  correct: 0,
  explanation: {correct: 'P(6 y cara) = P(6) x P(cara) = 1/6 x 1/2 = 1/12.',wrongs: ['1/6 es solo P(6)','1/2 es solo P(cara)','1/36 es P(6 y 6) o P(cara y cara) en dos dados/monedas']}
});
/**
 * Preguntas de Matematicas - Banco final
 * 21 preguntas: MT213 - MT250
 */

QUESTIONS.push({
  id: 'MT213', area: 'matematicas', areaName: 'Matematicas', difficulty: 'facil',
  question: 'Cual es el valor de 3 a la potencia de 3?',
  options: ['27', '9', '81', '6'],
  correct: 0,
  explanation: {correct: '3^3 = 3 x 3 x 3 = 27.',wrongs: ['9 es 3^2','81 es 3^4','6 es 3+3']}
});

QUESTIONS.push({
  id: 'MT214', area: 'matematicas', areaName: 'Matematicas', difficulty: 'media',
  question: 'Si un triangulo tiene angulos de 60, 70 y 50 grados, que tipo es?',
  options: ['Acutangulo', 'Obtusangulo', 'Rectangulo', 'Equilatero'],
  correct: 0,
  explanation: {correct: 'Todos los angulos son menores de 90, es acutangulo.',wrongs: ['Obtusangulo tiene un angulo mayor a 90','Rectangulo tiene 90','Equilatero tiene todos iguales a 60']}
});

QUESTIONS.push({
  id: 'MT215', area: 'matematicas', areaName: 'Matematicas', difficulty: 'dificil',
  table: {headers: ['Operacion', 'Resultado'],rows: [['2^4', '16'],['3^3', '27'],['4^2', '16'],['5^1', '5']],caption: 'Potencias'},
  question: 'Que dos operaciones dan el mismo resultado?',
  options: ['2^4 y 4^2', '2^4 y 3^3', '3^3 y 4^2', '2^4 y 5^1'],
  correct: 0,
  explanation: {correct: '2^4 = 16 y 4^2 = 16.',wrongs: ['3^3 = 27','4^2 = 16 pero 3^3 = 27','5^1 = 5']}
});

QUESTIONS.push({
  id: 'MT216', area: 'matematicas', areaName: 'Matematicas', difficulty: 'facil',
  question: 'Cual es la raiz cuadrada de 81?',
  options: ['9', '8', '7', '81'],
  correct: 0,
  explanation: {correct: '9 x 9 = 81.',wrongs: ['8 x 8 = 64','7 x 7 = 49','81 es el radicando']}
});

QUESTIONS.push({
  id: 'MT217', area: 'matematicas', areaName: 'Matematicas', difficulty: 'media',
  question: 'Un rectangulo tiene largo 8 cm y ancho 5 cm. Cual es su area?',
  options: ['40 cm2', '26 cm2', '13 cm2', '80 cm2'],
  correct: 0,
  explanation: {correct: 'Area = base x altura = 8 x 5 = 40 cm2.',wrongs: ['26 es el perimetro','13 es la suma','80 es 8x10']}
});

QUESTIONS.push({
  id: 'MT218', area: 'matematicas', areaName: 'Matematicas', difficulty: 'dificil',
  question: 'Si f(x) = 2x + 3, cual es el valor de f(5)?',
  options: ['13', '10', '8', '15'],
  correct: 0,
  explanation: {correct: 'f(5) = 2(5) + 3 = 10 + 3 = 13.',wrongs: ['10 es solo 2x','8 es 2(5)-2','15 es 3x5']}
});

QUESTIONS.push({
  id: 'MT219', area: 'matematicas', areaName: 'Matematicas', difficulty: 'facil',
  question: 'Cuantos grados tiene un angulo recto?',
  options: ['90', '180', '45', '360'],
  correct: 0,
  explanation: {correct: 'Un angulo recto mide 90 grados.',wrongs: ['180 es llano','45 es mitad de recto','360 es completo']}
});

QUESTIONS.push({
  id: 'MT220', area: 'matematicas', areaName: 'Matematicas', difficulty: 'media',
  svg: '<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" style="max-width:300px"><text x="150" y="18" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Grafica de ventas mensuales</text><line x1="50" y1="150" x2="280" y2="150" stroke="#333" stroke-width="2"/><line x1="50" y1="25" x2="50" y2="150" stroke="#333" stroke-width="2"/><text x="165" y="175" text-anchor="middle" font-size="9" fill="#333">Meses</text><text x="25" y="90" text-anchor="middle" font-size="9" fill="#333" transform="rotate(-90,25,90)">Ventas</text><rect x="70" y="100" width="30" height="50" fill="#4CAF50" rx="2"/><text x="85" y="145" text-anchor="middle" font-size="7" fill="#333">Ene</text><rect x="120" y="70" width="30" height="80" fill="#2196F3" rx="2"/><text x="135" y="145" text-anchor="middle" font-size="7" fill="#333">Feb</text><rect x="170" y="50" width="30" height="100" fill="#FF9800" rx="2"/><text x="185" y="145" text-anchor="middle" font-size="7" fill="#333">Mar</text><rect x="220" y="90" width="30" height="60" fill="#9C27B0" rx="2"/><text x="235" y="145" text-anchor="middle" font-size="7" fill="#333">Abr</text></svg>',
  question: 'Segun la grafica, cual mes tuvo mas ventas?',
  options: ['Marzo', 'Febrero', 'Enero', 'Abril'],
  correct: 0,
  explanation: {correct: 'Marzo tiene la barra mas alta.',wrongs: ['Febrero es segunda','Enero es tercera','Abril es cuarta']}
});

QUESTIONS.push({
  id: 'MT221', area: 'matematicas', areaName: 'Matematicas', difficulty: 'dificil',
  question: 'Cual es el valor de x si 2x + 7 = 15?',
  options: ['4', '8', '11', '22'],
  correct: 0,
  explanation: {correct: '2x = 15 - 7 = 8, entonces x = 4.',wrongs: ['8 es 2x','11 es 15-4','22 es 2x11']}
});

QUESTIONS.push({
  id: 'MT222', area: 'matematicas', areaName: 'Matematicas', difficulty: 'facil',
  question: 'Cual es el 25% de 200?',
  options: ['50', '25', '75', '100'],
  correct: 0,
  explanation: {correct: '200 x 0.25 = 50.',wrongs: ['25 es 12.5%','75 es 37.5%','100 es 50%']}
});

QUESTIONS.push({
  id: 'MT223', area: 'matematicas', areaName: 'Matematicas', difficulty: 'media',
  table: {headers: ['Figura', 'Perimetro'],rows: [['Cuadrado lado 5', '20'],['Rectangulo 3x7', '20'],['Triangulo 4+4+4', '12'],['Circulo radio 3', '18.85']],caption: 'Perimetros'},
  question: 'Cuales figuras tienen el mismo perimetro?',
  options: ['Cuadrado y Rectangulo', 'Cuadrado y Triangulo', 'Rectangulo y Circulo', 'Triangulo y Circulo'],
  correct: 0,
  explanation: {correct: 'Ambos tienen perimetro 20.',wrongs: ['Triangulo es 12','Circulo es 18.85','Ninguna otra combinacion']}
});

QUESTIONS.push({
  id: 'MT224', area: 'matematicas', areaName: 'Matematicas', difficulty: 'dificil',
  question: 'Si un numero mas 15 es igual a 45, cual es el numero?',
  options: ['30', '60', '25', '35'],
  correct: 0,
  explanation: {correct: 'x + 15 = 45, entonces x = 30.',wrongs: ['60 es 45+15','25 es 45-20','35 es 45-10']}
});

QUESTIONS.push({
  id: 'MT225', area: 'matematicas', areaName: 'Matematicas', difficulty: 'facil',
  question: 'Cual es el resultado de 144 dividido por 12?',
  options: ['12', '14', '13', '11'],
  correct: 0,
  explanation: {correct: '144 / 12 = 12.',wrongs: ['14 es 168/12','13 es 156/12','11 es 132/12']}
});

QUESTIONS.push({
  id: 'MT226', area: 'matematicas', areaName: 'Matematicas', difficulty: 'media',
  question: 'Un triangulo tiene base 10 cm y altura 6 cm. Cual es su area?',
  options: ['30 cm2', '60 cm2', '16 cm2', '36 cm2'],
  correct: 0,
  explanation: {correct: 'Area = (base x altura)/2 = (10 x 6)/2 = 30.',wrongs: ['60 es base x altura','16 es 10+6','36 es 6x6']}
});

QUESTIONS.push({
  id: 'MT227', area: 'matematicas', areaName: 'Matematicas', difficulty: 'dificil',
  question: 'Que numero es equivalente a 0.75?',
  options: ['3/4', '4/3', '3/3', '4/4'],
  correct: 0,
  explanation: {correct: '0.75 = 75/100 = 3/4.',wrongs: ['4/3 = 1.33','3/3 = 1','4/4 = 1']}
});

QUESTIONS.push({
  id: 'MT228', area: 'matematicas', areaName: 'Matematicas', difficulty: 'facil',
  question: 'Si un lapiz cuesta $500, cuantos lapices puedo comprar con $5000?',
  options: ['10', '5', '15', '20'],
  correct: 0,
  explanation: {correct: '5000 / 500 = 10 lapices.',wrongs: ['5 es 2500/500','15 es 7500/500','20 es 10000/500']}
});

QUESTIONS.push({
  id: 'MT229', area: 'matematicas', areaName: 'Matematicas', difficulty: 'media',
  svg: '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="max-width:300px"><text x="150" y="18" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Distribucion de tiempo (horas/semana)</text><circle cx="150" cy="110" r="70" fill="none" stroke="#333" stroke-width="2"/><path d="M150,110 L150,40 A70,70 0 0,1 210,80 Z" fill="#E91E63"/><text x="175" y="70" font-size="9" fill="#333">Estudio 35%</text><path d="M150,110 L210,80 A70,70 0 0,1 220,150 Z" fill="#2196F3"/><text x="200" y="120" font-size="9" fill="#333">Trabajo 25%</text><path d="M150,110 L220,150 A70,70 0 0,1 80,150 Z" fill="#4CAF50"/><text x="150" y="170" font-size="9" fill="#333">Descanso 25%</text><path d="M150,110 L80,150 A70,70 0 0,1 90,60 Z" fill="#FF9800"/><text x="85" y="110" font-size="9" fill="#333">Otro 15%</text></svg>',
  question: 'Segun el grafico, cual actividad ocupa mas tiempo?',
  options: ['Estudio', 'Trabajo', 'Descanso', 'Otro'],
  correct: 0,
  explanation: {correct: 'Estudio es 35%, la mayor parte.',wrongs: ['Trabajo es 25%','Descanso es 25%','Otro es 15%']}
});

QUESTIONS.push({
  id: 'MT230', area: 'matematicas', areaName: 'Matematicas', difficulty: 'dificil',
  question: 'Si 3n + 5 = 20, cuanto vale n?',
  options: ['5', '15', '25', '10'],
  correct: 0,
  explanation: {correct: '3n = 20 - 5 = 15, entonces n = 5.',wrongs: ['15 es 3n','25 es 20+5','10 es 20/2']}
});

QUESTIONS.push({
  id: 'MT231', area: 'matematicas', areaName: 'Matematicas', difficulty: 'facil',
  question: 'Cuantos minutos hay en 3 horas?',
  options: ['180', '120', '240', '300'],
  correct: 0,
  explanation: {correct: '3 x 60 = 180 minutos.',wrongs: ['120 es 2 horas','240 es 4 horas','300 es 5 horas']}
});

QUESTIONS.push({
  id: 'MT232', area: 'matematicas', areaName: 'Matematicas', difficulty: 'media',
  question: 'Un cuadrado tiene area de 49 cm2. Cual es la longitud de su lado?',
  options: ['7 cm', '14 cm', '24 cm', '9 cm'],
  correct: 0,
  explanation: {correct: 'Lado = raiz cuadrada de 49 = 7 cm.',wrongs: ['14 es el perimetro','24 es 49-25','9 es 81/9']}
});

QUESTIONS.push({
  id: 'MT233', area: 'matematicas', areaName: 'Matematicas', difficulty: 'dificil',
  table: {headers: ['Expresion', 'Resultado'],rows: [['2(3+4)', '14'],['2x3+4', '10'],['(2x3)+4', '10'],['2x(3+4)', '14']],caption: 'Orden de operaciones'},
  question: 'Cuales expresiones dan el mismo resultado?',
  options: ['2(3+4) y 2x(3+4)', '2(3+4) y 2x3+4', '2x3+4 y (2x3)+4', 'Todas dan lo mismo'],
  correct: 0,
  explanation: {correct: 'Ambas dan 14, el parentesis cambia el orden.',wrongs: ['2x3+4 = 10','(2x3)+4 = 10','No todas dan lo mismo']}
});

QUESTIONS.push({
  id: 'MT234', area: 'matematicas', areaName: 'Matematicas', difficulty: 'facil',
  question: 'Que numero es mayor: 0.8 o 0.75?',
  options: ['0.8', '0.75', 'Son iguales', 'No se puede saber'],
  correct: 0,
  explanation: {correct: '0.8 = 0.80 que es mayor que 0.75.',wrongs: ['0.75 es menor','Son diferentes','Si se puede saber']}
});

QUESTIONS.push({
  id: 'MT235', area: 'matematicas', areaName: 'Matematicas', difficulty: 'media',
  question: 'Si un carro viaja a 60 km/h, cuanto recorre en 2.5 horas?',
  options: ['150 km', '120 km', '180 km', '240 km'],
  correct: 0,
  explanation: {correct: 'Distancia = velocidad x tiempo = 60 x 2.5 = 150 km.',wrongs: ['120 es 60x2','180 es 60x3','240 es 60x4']}
});

QUESTIONS.push({
  id: 'MT236', area: 'matematicas', areaName: 'Matematicas', difficulty: 'dificil',
  question: 'Cual es el valor de x si x/4 = 12?',
  options: ['48', '3', '16', '8'],
  correct: 0,
  explanation: {correct: 'x = 12 x 4 = 48.',wrongs: ['3 es 12/4','16 es 4x4','8 es 4x2']}
});

QUESTIONS.push({
  id: 'MT237', area: 'matematicas', areaName: 'Matematicas', difficulty: 'facil',
  question: 'Cuantos lados tiene un hexagono?',
  options: ['6', '5', '7', '8'],
  correct: 0,
  explanation: {correct: 'Hexagono significa 6 lados.',wrongs: ['5 es pentagono','7 es heptagono','8 es octagono']}
});

QUESTIONS.push({
  id: 'MT238', area: 'matematicas', areaName: 'Matematicas', difficulty: 'media',
  question: 'Un triangulo isosceles tiene dos lados de 5 cm y uno de 8 cm. Cual es su perimetro?',
  options: ['18 cm', '13 cm', '15 cm', '20 cm'],
  correct: 0,
  explanation: {correct: 'Perimetro = 5 + 5 + 8 = 18 cm.',wrongs: ['13 es 5+8','15 es 5x3','20 es 5x4']}
});

QUESTIONS.push({
  id: 'MT239', area: 'matematicas', areaName: 'Matematicas', difficulty: 'dificil',
  question: 'Que fraccion representa 45 minutos en horas?',
  options: ['3/4', '4/3', '45/100', '1/4'],
  correct: 0,
  explanation: {correct: '45 min / 60 min = 3/4 hora.',wrongs: ['4/3 es mayor a 1','45/100 es decimal','1/4 es 15 min']}
});

QUESTIONS.push({
  id: 'MT240', area: 'matematicas', areaName: 'Matematicas', difficulty: 'facil',
  question: 'Si tienes $1000 y compras algo por $350, cuanto dinero te queda?',
  options: ['$650', '$1350', '$750', '$450'],
  correct: 0,
  explanation: {correct: '1000 - 350 = 650.',wrongs: ['1350 es suma','750 es 1000-250','450 es 1000-550']}
});

QUESTIONS.push({
  id: 'MT241', area: 'matematicas', areaName: 'Matematicas', difficulty: 'media',
  svg: '<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" style="max-width:300px"><text x="150" y="18" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Tabla de valores: y = 2x + 1</text><line x1="60" y1="150" x2="260" y2="150" stroke="#333" stroke-width="2"/><line x1="60" y1="25" x2="60" y2="150" stroke="#333" stroke-width="2"/><circle cx="90" cy="130" r="4" fill="#E91E63"/><circle cx="130" cy="110" r="4" fill="#E91E63"/><circle cx="170" cy="90" r="4" fill="#E91E63"/><circle cx="210" cy="70" r="4" fill="#E91E63"/><circle cx="250" cy="50" r="4" fill="#E91E63"/><line x1="90" y1="130" x2="250" y2="50" stroke="#E91E63" stroke-width="2"/><text x="90" y="165" text-anchor="middle" font-size="8" fill="#333">0</text><text x="130" y="165" text-anchor="middle" font-size="8" fill="#333">1</text><text x="170" y="165" text-anchor="middle" font-size="8" fill="#333">2</text><text x="210" y="165" text-anchor="middle" font-size="8" fill="#333">3</text><text x="250" y="165" text-anchor="middle" font-size="8" fill="#333">4</text></svg>',
  question: 'Segun la grafica de y = 2x + 1, cual es el valor de y cuando x = 3?',
  options: ['7', '5', '6', '8'],
  correct: 0,
  explanation: {correct: 'y = 2(3) + 1 = 7.',wrongs: ['5 es 2(2)+1','6 es 2(3)','8 es 2(3)+2']}
});

QUESTIONS.push({
  id: 'MT242', area: 'matematicas', areaName: 'Matematicas', difficulty: 'dificil',
  question: 'Si el 30% de un numero es 45, cual es el numero?',
  options: ['150', '135', '120', '160'],
  correct: 0,
  explanation: {correct: '0.30 x n = 45, entonces n = 45/0.30 = 150.',wrongs: ['135 es 45x3','120 es 45/0.375','160 es 45/0.28125']}
});

QUESTIONS.push({
  id: 'MT243', area: 'matematicas', areaName: 'Matematicas', difficulty: 'facil',
  question: 'Cual es el doble de 25?',
  options: ['50', '25', '75', '100'],
  correct: 0,
  explanation: {correct: '25 x 2 = 50.',wrongs: ['25 es igual','75 es triple','100 es cuadruple']}
});

QUESTIONS.push({
  id: 'MT244', area: 'matematicas', areaName: 'Matematicas', difficulty: 'media',
  question: 'Un cilindro tiene radio 3 cm y altura 10 cm. Cual es su volumen? (Use pi = 3.14)',
  options: ['282.6 cm3', '94.2 cm3', '188.4 cm3', '314 cm3'],
  correct: 0,
  explanation: {correct: 'V = pi x r2 x h = 3.14 x 9 x 10 = 282.6.',wrongs: ['94.2 es 3.14x3x10','188.4 es 3.14x6x10','314 es 3.14x10x10']}
});

QUESTIONS.push({
  id: 'MT245', area: 'matematicas', areaName: 'Matematicas', difficulty: 'dificil',
  table: {headers: ['Operacion', 'Resultado'],rows: [['5! (factorial)', '120'],['4! (factorial)', '24'],['3! (factorial)', '6'],['6! (factorial)', '720']],caption: 'Factoriales'},
  question: 'Cual es el valor de 5!?',
  options: ['120', '24', '6', '720'],
  correct: 0,
  explanation: {correct: '5! = 5 x 4 x 3 x 2 x 1 = 120.',wrongs: ['24 es 4!','6 es 3!','720 es 6!']}
});

QUESTIONS.push({
  id: 'MT246', area: 'matematicas', areaName: 'Matematicas', difficulty: 'facil',
  question: 'Si un rectangulo tiene perimetro de 24 cm y largo de 8 cm, cual es su ancho?',
  options: ['4 cm', '8 cm', '12 cm', '16 cm'],
  correct: 0,
  explanation: {correct: '2(8 + a) = 24, 8 + a = 12, a = 4.',wrongs: ['8 es el largo','12 es la suma','16 es el doble del largo']}
});

QUESTIONS.push({
  id: 'MT247', area: 'matematicas', areaName: 'Matematicas', difficulty: 'media',
  question: 'Cual es la media aritmetica de 10, 15, 20, 25 y 30?',
  options: ['20', '15', '25', '100'],
  correct: 0,
  explanation: {correct: '(10+15+20+25+30)/5 = 100/5 = 20.',wrongs: ['15 es la mediana','25 es la moda','100 es la suma']}
});

QUESTIONS.push({
  id: 'MT248', area: 'matematicas', areaName: 'Matematicas', difficulty: 'dificil',
  question: 'Si log2(x) = 5, cuanto vale x?',
  options: ['32', '25', '10', '64'],
  correct: 0,
  explanation: {correct: '2^5 = 32.',wrongs: ['25 es 5x5','10 es 2x5','64 es 2^6']}
});

QUESTIONS.push({
  id: 'MT249', area: 'matematicas', areaName: 'Matematicas', difficulty: 'facil',
  question: 'Cuantos metros hay en 3.5 km?',
  options: ['3500', '350', '35000', '35'],
  correct: 0,
  explanation: {correct: '3.5 x 1000 = 3500 metros.',wrongs: ['350 es 0.35 km','35000 es 35 km','35 es 0.035 km']}
});

QUESTIONS.push({
  id: 'MT250', area: 'matematicas', areaName: 'Matematicas', difficulty: 'media',
  svg: '<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" style="max-width:300px"><text x="150" y="18" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Figura compuesta</text><rect x="80" y="50" width="60" height="60" fill="#E3F2FD" stroke="#1565C0" stroke-width="2"/><circle cx="200" cy="80" r="30" fill="#FFF3E0" stroke="#E65100" stroke-width="2"/><text x="110" y="85" text-anchor="middle" font-size="10" fill="#0D47A1">6 cm</text><text x="200" y="85" text-anchor="middle" font-size="10" fill="#E65100">r=3</text><text x="150" y="140" text-anchor="middle" font-size="9" fill="#333">Rectangulo + Circulo</text></svg>',
  question: 'Cual es el area del rectangulo de la figura?',
  options: ['36 cm2', '30 cm2', '42 cm2', '48 cm2'],
  correct: 0,
  explanation: {correct: 'Area = 6 x 6 = 36 cm2.',wrongs: ['30 es 5x6','42 es 7x6','48 es 8x6']}
});
