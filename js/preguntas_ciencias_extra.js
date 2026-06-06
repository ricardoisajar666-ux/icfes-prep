/**
 * Preguntas de Ciencias Naturales - Banco ampliado
 * 56 preguntas: CN151 - CN206
 * Incluye: tablas, SVG de ciclos, anatomia, experimentos
 */

// ===== BIOLOGIA (CN151-CNN165) =====

QUESTIONS.push({
  id: 'CN151', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
  table: {headers: ['Celula', 'Tamaño (µm)', 'Presente en'],rows: [['Prokariota', '0,1 - 5', 'Bacterias'],['Eucariota vegetal', '10 - 100', 'Plantas'],['Eucariota animal', '10 - 30', 'Animales'],['Huevo de avestruz', '150.000', 'Avestruz']],caption: 'Comparación de tamaños celulares'},
  question: 'Según la tabla, ¿qué tipo de célula es la más pequeña?',
  options: ['Prokariota', 'Eucariota vegetal', 'Eucariota animal', 'Huevo de avestruz'],
  correct: 0,
  explanation: {correct: 'Las células prokariotas (bacterias) miden entre 0,1 y 5 µm, siendo las más pequeñas.',wrongs: ['Las eucariotas vegetales son más grandes (10-100 µm)','Las eucariotas animales son intermedias (10-30 µm)','El huevo de avestruz es la célula más grande conocida']}
});

QUESTIONS.push({
  id: 'CN152', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
  svg: '<svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg" style="max-width:300px"><text x="150" y="18" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Ciclo celular - Fases</text><circle cx="60" cy="120" r="30" fill="#E3F2FD" stroke="#1565C0" stroke-width="2"/><text x="60" y="125" text-anchor="middle" font-size="8" fill="#333">G1</text><circle cx="150" cy="60" r="30" fill="#FFF3E0" stroke="#E65100" stroke-width="2"/><text x="150" y="65" text-anchor="middle" font-size="8" fill="#333">S</text><circle cx="240" cy="120" r="30" fill="#E8F5E9" stroke="#2E7D32" stroke-width="2"/><text x="240" y="125" text-anchor="middle" font-size="8" fill="#333">G2</text><circle cx="150" cy="180" r="30" fill="#F3E5F5" stroke="#7B1FA2" stroke-width="2"/><text x="150" y="185" text-anchor="middle" font-size="8" fill="#333">M</text><path d="M85,105 L120,75" fill="none" stroke="#333" stroke-width="1.5" marker-end="url(%23arrow)"/><path d="M175,75 L210,105" fill="none" stroke="#333" stroke-width="1.5"/><path d="M225,145 L175,170" fill="none" stroke="#333" stroke-width="1.5"/><path d="M125,170 L75,145" fill="none" stroke="#333" stroke-width="1.5"/><text x="100" y="80" font-size="7" fill="#666">Crecimiento</text><text x="200" y="80" font-size="7" fill="#666">Replicación</text><text x="200" y="165" font-size="7" fill="#666">Preparación</text><text x="80" y="165" font-size="7" fill="#666">División</text></svg>',
  context: 'El diagrama muestra las fases del ciclo celular.',
  question: '¿En qué fase se replica el ADN?',
  options: ['Fase S', 'Fase G1', 'Fase G2', 'Fase M'],
  correct: 0,
  explanation: {correct: 'La fase S (síntesis) es donde se replica el ADN antes de la división celular.',wrongs: ['G1 es de crecimiento celular','G2 es de preparación para la mitosis','M es la mitosis (división del núcleo)']}
});

QUESTIONS.push({
  id: 'CN153', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
  context: 'Un cruce genético en plantas: P1 = AABB (flor roja, hoja verde) x aabb (flor blanca, hoja amarilla). Los genes están en cromosomas diferentes (dihibridismo independiente).',
  question: '¿Cuál es la proporción fenotípica esperada en la F2?',
  options: ['9:3:3:1', '1:1:1:1', '3:1', '9:7'],
  correct: 0,
  explanation: {correct: 'En un dihibridismo con herencia independiente, la F2 da 9:3:3:1 (9 ambas dominantes, 3 una dominant, 3 otra dominant, 1 ambas recesivas).',wrongs: ['1:1:1:1 es la proporción del testcross','3:1 es la proporción monohíbrida','9:7 es epistasis recesiva']}
});

QUESTIONS.push({
  id: 'CN154', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
  question: '¿Cuál es la función principal de las mitocondrias?',
  options: ['Producir energía (ATP) mediante respiración celular', 'Sintetizar proteínas', 'Almacenar información genética', 'Digestión celular'],
  correct: 0,
  explanation: {correct: 'Las mitocondrias son las "centrales energéticas" de la célula, producen ATP por respiración celular aeróbica.',wrongs: ['Los ribosomas sintetizan proteínas','El núcleo almacena la información genética','Los lisosomas realizan la digestión celular']}
});

QUESTIONS.push({
  id: 'CN155', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
  table: {headers: ['Tejido', 'Función', 'Ubicación'],rows: [['Epitelial', 'Revestimiento y protección', 'Piel, órganos'],['Muscular', 'Movimiento', 'Brazos, corazón'],['Nervioso', 'Transmisión de impulsos', 'Cerebro, nervios'],['Conectivo', 'Soporte y unión', 'Huesos, sangre']],caption: 'Tejidos animales'},
  question: '¿Qué tejido forma la piel?',
  options: ['Epitelial', 'Muscular', 'Nervioso', 'Conectivo'],
  correct: 0,
  explanation: {correct: 'El tejido epitelial reviste superficies como la piel, protegiendo el cuerpo.',wrongs: ['El muscular genera movimiento','El nervioso transmite impulsos','El conectivo une y soporta tejidos']}
});

QUESTIONS.push({
  id: 'CN156', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
  svg: '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" style="max-width:320px"><text x="160" y="18" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Cadena alimentaria</text><rect x="20" y="50" width="60" height="40" fill="#E8F5E9" stroke="#4CAF50" stroke-width="2" rx="5"/><text x="50" y="75" text-anchor="middle" font-size="8" fill="#333">Plantas</text><text x="50" y="110" text-anchor="middle" font-size="8" fill="#666">Productores</text><path d="M85,70 L115,70" fill="none" stroke="#333" stroke-width="1.5" marker-end="url(%23arr)"/><rect x="120" y="50" width="60" height="40" fill="#FFF3E0" stroke="#FF9800" stroke-width="2" rx="5"/><text x="150" y="75" text-anchor="middle" font-size="8" fill="#333">Conejos</text><text x="150" y="110" text-anchor="middle" font-size="8" fill="#666">Herbívoros</text><path d="M185,70 L215,70" fill="none" stroke="#333" stroke-width="1.5" marker-end="url(%23arr)"/><rect x="220" y="50" width="60" height="40" fill="#FFEBEE" stroke="#E91E63" stroke-width="2" rx="5"/><text x="250" y="75" text-anchor="middle" font-size="8" fill="#333">Zorros</text><text x="250" y="110" text-anchor="middle" font-size="8" fill="#666">Carnívoros</text><path d="M250,130 L250,150" fill="none" stroke="#333" stroke-width="1.5" marker-end="url(%23arr)"/><rect x="190" y="155" width="120" height="30" fill="#F3E5F5" stroke="#7B1FA2" stroke-width="1.5" rx="5"/><text x="250" y="175" text-anchor="middle" font-size="8" fill="#333">Descomponedores (hongos, bacterias)</text></svg>',
  context: 'El diagrama muestra una cadena alimentaria en un ecosistema.',
  question: '¿Qué pasaría si desaparecen los conejos?',
  options: ['Los zorros disminuirían y las plantas aumentarían', 'Los zorros aumentarían y las plantas disminuirían', 'No habría ningún cambio', 'Los descomponedores desaparecerían'],
  correct: 0,
  explanation: {correct: 'Sin conejos (presas), los zorros (depredadores) tendrían menos alimento y disminuirían. Las plantas, sin herbívoros, aumentarían.',wrongs: ['Los zorros no podrían alimentarse más','Siempre hay cambios en las cadenas alimentarias','Los descomponedores se alimentan de materia orgánica muerta']}
});

QUESTIONS.push({
  id: 'CN157', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
  question: '¿Qué orgánulo es responsable de la fotosíntesis?',
  options: ['Cloroplasto', 'Mitocondria', 'Ribosoma', 'Lisosoma'],
  correct: 0,
  explanation: {correct: 'El cloroplasto contiene clorofila y es donde se realiza la fotosíntesis en las plantas.',wrongs: ['La mitocondria realiza respiración celular','El ribosoma sintetiza proteínas','El lisosoma digiere sustancias']}
});

QUESTIONS.push({
  id: 'CN158', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
  table: {headers: ['Enfermedad', 'Tipo de patógeno', 'Transmisión'],rows: [['COVID-19', 'Virus', 'Aérea'],['Tuberculosis', 'Bacteria', 'Aérea'],['Malaria', 'Parásito', 'Mosquito'],['Candidiasis', 'Hongos', 'Contacto']],caption: 'Enfermedades infecciosas'},
  question: '¿Qué enfermedad se transmite por vector?',
  options: ['Malaria', 'COVID-19', 'Tuberculosis', 'Candidiasis'],
  correct: 0,
  explanation: {correct: 'La malaria se transmite por el mosquito Anopheles (vector生物).',wrongs: ['COVID-19 se transmite por vía aérea','Tuberculosis por gotas respiratorias','Candidiasis por contacto directo']}
});

QUESTIONS.push({
  id: 'CN159', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
  context: 'La teoría de la evolución de Darwin propone que las especies cambian a lo largo del tiempo por selección natural.',
  question: '¿Cuál es el mecanismo fundamental de la selección natural?',
  options: ['Los individuos mejor adaptados sobreviven y se reproducen más', 'Los individuos más grandes siempre sobreviven', 'Los cambios ocurren al azar sin patrón', 'Todos los individuos tienen las mismas oportunidades'],
  correct: 0,
  explanation: {correct: 'La selección natural favorece a los individuos con rasgos ventajosos que les permiten sobrevivir y reproducirse más.',wrongs: ['El tamaño no siempre es ventaja','Hay patrones en la selección','Las oportunidades varían según la adaptación']}
});

QUESTIONS.push({
  id: 'CN160', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
  question: '¿Qué molécula transporta oxígeno en la sangre?',
  options: ['Hemoglobina', 'Insulina', 'ADN', 'Glucosa'],
  correct: 0,
  explanation: {correct: 'La hemoglobina es una proteína de los glóbulos rojos que se une al oxígeno para transportarlo por todo el cuerpo.',wrongs: ['La insulina regula la glucosa en sangre','El ADN almacena información genética','La glucosa es un azúcar, no transporta oxígeno']}
});

QUESTIONS.push({
  id: 'CN161', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
  svg: '<svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg" style="max-width:300px"><text x="150" y="18" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Ciclo del agua</text><circle cx="70" cy="160" r="25" fill="#BBDEFB" stroke="#1565C0" stroke-width="2"/><text x="70" y="165" text-anchor="middle" font-size="8" fill="#333">Océanos</text><path d="M70,135 L70,100" fill="none" stroke="#1565C0" stroke-width="2" marker-end="url(%23arr)"/><text x="55" y="118" font-size="7" fill="#1565C0">Evaporación</text><circle cx="150" cy="70" r="25" fill="#E3F2FD" stroke="#90CAF9" stroke-width="2"/><text x="150" y="75" text-anchor="middle" font-size="8" fill="#333">Nubes</text><path d="M175,70 L210,70" fill="none" stroke="#1565C0" stroke-width="2"/><path d="M230,70 L230,100" fill="none" stroke="#1565C0" stroke-width="2" marker-end="url(%23arr)"/><text x="250" y="85" font-size="7" fill="#1565C0">Condensación</text><circle cx="230" cy="130" r="20" fill="#C8E6C9" stroke="#4CAF50" stroke-width="2"/><text x="230" y="135" text-anchor="middle" font-size="7" fill="#333">Lluvia</text><path d="M215,145 L100,160" fill="none" stroke="#1565C0" stroke-width="2" marker-end="url(%23arr)"/><text x="155" y="158" font-size="7" fill="#1565C0">Escorrentía</text></svg>',
  context: 'El diagrama muestra el ciclo hidrológico.',
  question: '¿Qué proceso convierte el agua líquida en vapor?',
  options: ['Evaporación', 'Condensación', 'Precipitación', 'Escorrentía'],
  correct: 0,
  explanation: {correct: 'La evaporación transforma el agua líquida en vapor de agua al recibir energía del sol.',wrongs: ['La condensación es vapor a líquido','La precipitación es lluvia/nieve','La escorrentía es agua que fluye por la superficie']}
});

QUESTIONS.push({
  id: 'CN162', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
  table: {headers: ['Año', 'CO2 (ppm)', 'Temperatura global (°C)'],rows: [['1900', '296', '13,7'],['1950', '310', '13,9'],['1980', '338', '14,2'],['2000', '370', '14,5'],['2020', '414', '14,9']],caption: 'Tendencias climáticas globales'},
  question: 'Según los datos, ¿qué tendencia se observa entre CO2 y temperatura?',
  options: ['A mayor CO2, mayor temperatura', 'A mayor CO2, menor temperatura', 'No hay relación', 'La temperatura es constante'],
  correct: 0,
  explanation: {correct: 'Los datos muestran que al aumentar CO2, también aumenta la temperatura global (efecto invernadero).',wrongs: ['La tendencia es directamente proporcional','Sí hay una clara relación','La temperatura no es constante']}
});

QUESTIONS.push({
  id: 'CN163', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
  question: '¿Qué gas es absorbido por las plantas durante la fotosíntesis?',
  options: ['Dióxido de carbono (CO2)', 'Oxígeno (O2)', 'Nitrógeno (N2)', 'Hidrógeno (H2)'],
  correct: 0,
  explanation: {correct: 'Las plantas absorben CO2 del aire y lo combinan con agua y luz para producir glucosa y oxígeno.',wrongs: ['El oxígeno es producto, no reactivo','El nitrógeno no se usa en fotosíntesis','El hidrógeno viene del agua, no del aire']}
});

QUESTIONS.push({
  id: 'CN164', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
  context: 'Un experimento: se colocan 4 plantas idénticas en diferentes condiciones de luz por 2 semanas.',
  question: '¿Cuál es la variable independiente?',
  options: ['Cantidad de luz recibida', 'Crecimiento de la planta', 'Tipo de planta', 'Cantidad de agua'],
  correct: 0,
  explanation: {correct: 'La variable independiente es la que se manipula: la cantidad de luz.',wrongs: ['El crecimiento es la variable dependiente (se mide)','El tipo de planta se controla (debe ser igual)','La水量 de agua se mantiene constante']}
});

QUESTIONS.push({
  id: 'CN165', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
  question: '¿Cuál es la diferencia principal entre meiosis y mitosis?',
  options: ['La meiosis produce células haploides, la mitosis produce diploides', 'Ambas producen células idénticas', 'La mitosis solo ocurre en gametos', 'La meiosis no reduce el número de cromosomas'],
  correct: 0,
  explanation: {correct: 'La mitosis produce 2 células diploides idénticas. La meiosis produce 4 células haploides (gametos) con la mitad de cromosomas.',wrongs: ['La mitosis produce células idénticas pero diploides','La mitosis ocurre en todas las células somáticas','La meiosis reduce el número de cromosomas a la mitad']}
});

// ===== QUIMICA (CN166-CNN180) =====

QUESTIONS.push({
  id: 'CN166', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
  table: {headers: ['Elemento', 'Símbolo', 'Número atómico', 'Grupo'],rows: [['Hidrógeno', 'H', '1', '1'],['Carbono', 'C', '6', '14'],['Oxígeno', 'O', '8', '16'],['Hierro', 'Fe', '26', '8']],caption: 'Elementos químicos comunes'},
  question: '¿Cuántos protones tiene un átomo de Carbono?',
  options: ['6', '12', '8', '14'],
  correct: 0,
  explanation: {correct: 'El número atómico indica los protones. El Carbono tiene número atómico 6.',wrongs: ['12 es la masa atómica aproximada','8 es el número del Oxígeno','14 es el grupo del Carbono']}
});

QUESTIONS.push({
  id: 'CN167', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
  question: '¿Qué tipo de enlace se forma entre un metal y un no metal?',
  options: ['Enlace iónico', 'Enlace covalente', 'Enlace metálico', 'Enlace de hidrógeno'],
  correct: 0,
  explanation: {correct: 'El enlace iónico ocurre cuando un metal cede electrones a un no metal, formando iones.',wrongs: ['El covalente ocurre entre no metales','El metálico es entre átomos de metal','El de hidrógeno es una fuerza intermolecular']}
});

QUESTIONS.push({
  id: 'CN168', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
  table: {headers: ['Sustancia', 'pH', 'Tipo'],rows: [['Jugo de limón', '2,0', 'Ácido'],['Agua pura', '7,0', 'Neutro'],['Jabón', '9,0', 'Base'],['Lejía', '12,5', 'Base']],caption: 'Valores de pH de sustancias'},
  question: '¿Qué sustancia es más ácida?',
  options: ['Jugo de limón', 'Agua pura', 'Jabón', 'Lejía'],
  correct: 0,
  explanation: {correct: 'Menor pH = más ácido. El jugo de limón (pH 2,0) es el más ácido de la lista.',wrongs: ['pH 7 es neutro','pH 9 es básico','pH 12,5 es muy básico']}
});

QUESTIONS.push({
  id: 'CN169', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
  question: '¿Cuál es la fórmula química del agua?',
  options: ['H2O', 'CO2', 'NaCl', 'O2'],
  correct: 0,
  explanation: {correct: 'El agua está formada por 2 átomos de hidrógeno y 1 de oxígeno: H2O.',wrongs: ['CO2 es dióxido de carbono','NaCl es cloruro de sodio (sal)','O2 es oxígeno molecular']}
});

QUESTIONS.push({
  id: 'CN170', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
  context: 'Una reacción química: 2H2 + O2 → 2H2O',
  question: '¿Qué tipo de reacción es?',
  options: ['Síntesis', 'Descomposición', 'Sustitución simple', 'Doble sustitución'],
  correct: 0,
  explanation: {correct: 'Dos sustancias simples se combinan para formar una más compleja: síntesis.',wrongs: ['Descomposición es una sustancia compleja → simples','Sustitución simple: un elemento reemplaza a otro','Doble sustitución: dos compuestos intercambian elementos']}
});

QUESTIONS.push({
  id: 'CN171', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
  question: '¿Cuántos electrones tiene el ion Ca2+?',
  options: ['18', '20', '22', '40'],
  correct: 0,
  explanation: {correct: 'Calcio (Ca) tiene 20 electrones. Ca2+ perdió 2 electrones: 20 - 2 = 18.',wrongs: ['20 es el número de protones del Ca','22 sería si ganara 2 electrones','40 es la masa atómica del Ca']}
});

QUESTIONS.push({
  id: 'CN172', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
  question: '¿Qué es una molécula?',
  options: ['Un grupo de átomos unidos por enlaces químicos', 'Un solo átomo', 'Una partícula con carga negativa', 'Un gas noble'],
  correct: 0,
  explanation: {correct: 'Una molécula está formada por dos o más átomos unidos químicamente.',wrongs: ['Un átomo es la unidad más pequeña de un elemento','Los electrones tienen carga negativa','Los gases nobles son átomos individuales']}
});

QUESTIONS.push({
  id: 'CN173', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
  table: {headers: ['Material', 'Conductividad', 'Uso principal'],rows: [['Cobre', 'Alta', 'Cables eléctricos'],['Plástico', 'Baja', 'Aislante'],['Vidrio', 'Baja', 'Ventanas'],['Aluminio', 'Alta', 'Utensilios']],caption: 'Propiedades de materiales'},
  question: '¿Cuál es un buen aislante eléctrico?',
  options: ['Plástico', 'Cobre', 'Aluminio', 'Ninguno es aislante'],
  correct: 0,
  explanation: {correct: 'Los materiales con baja conductividad son aislantes. El plástico no conduce electricidad.',wrongs: ['El cobre tiene alta conductividad','El aluminio tiene alta conductividad','El vidrio también es aislante']}
});

QUESTIONS.push({
  id: 'CN174', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
  context: 'En una tabla periódica, los elementos del grupo 17 (halógenos) tienen 7 electrones en su última capa.',
  question: '¿Cuántos electrones necesita ganar un átomo de Cloro (Cl) para completar su última capa?',
  options: ['1', '7', '8', '17'],
  correct: 0,
  explanation: {correct: 'El Cloro tiene 7 electrones en la última capa. Necesita 1 más para completar 8 (regla del octeto).',wrongs: ['7 es el número que tiene, no el que necesita','8 es el total deseado, no lo que necesita ganar','17 es el número atómico del Cl']}
});

QUESTIONS.push({
  id: 'CN175', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
  question: '¿Qué estado de materia tiene forma y volumen definidos?',
  options: ['Sólido', 'Líquido', 'Gaseoso', 'Plasma'],
  correct: 0,
  explanation: {correct: 'Los sólidos tienen forma y volumen definidos por sus moléculas muy juntas y ordenadas.',wrongs: ['Los líquidos tienen volumen definido pero no forma','Los gases no tienen forma ni volumen definidos','El plasma es un estado ionizado']}
});

QUESTIONS.push({
  id: 'CN176', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
  question: '¿Qué gas es producto de la respiración celular?',
  options: ['Dióxido de carbono (CO2)', 'Oxígeno (O2)', 'Nitrógeno (N2)', 'Hidrógeno (H2)'],
  correct: 0,
  explanation: {correct: 'La respiración celular consume O2 y produce CO2 como desecho.',wrongs: ['El oxígeno es reactivo, no producto','El nitrógeno no participa','El hidrógeno no se produce en respiración']}
});

QUESTIONS.push({
  id: 'CN177', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
  table: {headers: ['Reacción', 'Energía'],rows: [['Combustión del metano', 'Libera calor'],['Fotosíntesis', 'Absorbe luz'],['Rusting del hierro', 'Libera calor'],['Evaporación del agua', 'Absorbe calor']],caption: 'Reacciones y energía'},
  question: '¿Qué reacción es endotérmica?',
  options: ['Fotosíntesis', 'Combustión del metano', 'Rusting del hierro', 'Todas son exotérmicas'],
  correct: 0,
  explanation: {correct: 'Las reacciones endotérmicas absorben energía. La fotosíntesis absorbe energía luminosa.',wrongs: ['La combustión libera calor (exotérmica)','El óxido del hierro libera calor','La evaporación es un cambio físico, no químico']}
});

QUESTIONS.push({
  id: 'CN178', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
  question: '¿Qué element químico tiene el símbolo "Fe"?',
  options: ['Hierro', 'Flúor', 'Fósforo', 'Francio'],
  correct: 0,
  explanation: {correct: 'Fe proviene del latín "ferrum" (hierro).',wrongs: ['Flúor es F','Fósforo es P','Francio es Fr']}
});

QUESTIONS.push({
  id: 'CN179', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
  context: 'La ecuación balanceada: 2Fe + 3Cl2 → 2FeCl3',
  question: '¿Cuántos moles de Cl2 se necesitan para reaccionar con 4 moles de Fe?',
  options: ['6 moles', '4 moles', '2 moles', '8 moles'],
  correct: 0,
  explanation: {correct: 'Proporción: 2 mol Fe reacciona con 3 mol Cl2. Para 4 mol Fe: 4 x (3/2) = 6 mol Cl2.',wrongs: ['4 moles es igual a los de Fe (proporción 1:1 incorrecta)','2 moles es la mitad de Fe','8 moles es el doble']}
});

QUESTIONS.push({
  id: 'CN180', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
  question: '¿Qué tipo de carbono tiene hibridación sp3?',
  options: ['Carbono en metano (CH4)', 'Carbono en etileno (C2H4)', 'Carbono en benceno (C6H6)', 'Carbono en CO2'],
  correct: 0,
  explanation: {correct: 'En CH4, el carbono tiene 4 enlaces sigma (sp3). En C2H4 hay sp2, en C6H6 sp2, en CO2 sp.',wrongs: ['Etileno tiene sp2 (doble enlace)','Benceno tiene sp2 (aromático)','CO2 tiene sp (doble enlace lineal)']}
});

// ===== FISICA (CN181-CNN195) =====

QUESTIONS.push({
  id: 'CN181', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
  question: '¿Qué ley de Newton dice que "por cada acción hay una reacción igual y opuesta"?',
  options: ['Tercera ley', 'Primera ley', 'Segunda ley', 'Ley de gravitación'],
  correct: 0,
  explanation: {correct: 'La tercera ley de Newton establece que las fuerzas siempre vienen en pares de acción-reacción.',wrongs: ['La primera ley es de inercia','La segunda ley: F = ma','La gravitación es de Newton pero es diferente']}
});

QUESTIONS.push({
  id: 'CN182', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
  table: {headers: ['Estado', 'Energía cinética', 'Energía potencial'],rows: [['Piedra en el suelo', '0', 'Baja'],['Piedra en caída', 'Alta', 'Media'],['Piedra en la mano (altura h)', '0', 'Alta']],caption: 'Transformación de energías'},
  question: '¿En qué estado la piedra tiene máxima energía potencial?',
  options: ['En la mano (altura h)', 'En el suelo', 'En caída', 'Todas iguales'],
  correct: 0,
  explanation: {correct: 'La energía potencial gravitatoria es máxima en el punto más alto (altura h).',wrongs: ['En el suelo la EP es mínima','En caída hay EP y EK simultáneamente','Las energías varían según la posición']}
});

QUESTIONS.push({
  id: 'CN183', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
  context: 'Un carro viaja a 20 m/s y frena con aceleración de -5 m/s².',
  question: '¿En cuántos metros se detiene?',
  options: ['40 m', '20 m', '80 m', '100 m'],
  correct: 0,
  explanation: {correct: 'v² = v₀² + 2aΔx. 0 = 400 + 2(-5)Δx. Δx = 400/10 = 40 m.',wrongs: ['20 m es v₀/|a| (confusión)','80 m es doble del correcto','100 m es v₀²/|a| sin dividir entre 2']}
});

QUESTIONS.push({
  id: 'CN184', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
  question: '¿Cuál es la unidad de medida de la fuerza en el SI?',
  options: ['Newton (N)', 'Julio (J)', 'Watt (W)', 'Pascal (Pa)'],
  correct: 0,
  explanation: {correct: 'El Newton (N) es la unidad de fuerza: 1 N = 1 kg × 1 m/s².',wrongs: ['El Julio es unidad de energía','El Watt es unidad de potencia','El Pascal es unidad de presión']}
});

QUESTIONS.push({
  id: 'CN185', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
  svg: '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="max-width:300px"><text x="150" y="18" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Circuito eléctrico básico</text><line x1="50" y1="60" x2="250" y2="60" stroke="#333" stroke-width="2"/><line x1="250" y1="60" x2="250" y2="160" stroke="#333" stroke-width="2"/><line x1="250" y1="160" x2="50" y2="160" stroke="#333" stroke-width="2"/><line x1="50" y1="160" x2="50" y2="60" stroke="#333" stroke-width="2"/><rect x="120" y="50" width="60" height="20" fill="#FFF3E0" stroke="#E65100" stroke-width="2" rx="3"/><text x="150" y="65" text-anchor="middle" font-size="9" fill="#333">Batería</text><text x="150" y="42" font-size="8" fill="#E65100">+ 9V -</text><circle cx="250" cy="110" r="15" fill="#E3F2FD" stroke="#1565C0" stroke-width="2"/><text x="250" y="115" text-anchor="middle" font-size="8" fill="#1565C0">Foco</text><line x1="40" y1="110" x2="50" y2="110" stroke="#333" stroke-width="2"/><text x="20" y="115" font-size="8" fill="#333">I →</text></svg>',
  context: 'Un circuito eléctrico simple con una batería de 9V y un foco.',
  question: '¿Qué ocurre si se conecta otro foco en serie?',
  options: ['Ambos focos se encienden más tenue', 'Ambos se encienden igual', 'Solo el primero se enciende', 'El circuito se abre'],
  correct: 0,
  explanation: {correct: 'En serie, la resistencia total aumenta y la corriente disminuye, por lo que ambos focos brillan menos.',wrongs: ['En serie la corriente es la misma pero el voltaje se divide','Ambos no brillan igual porque se divide el voltaje','El circuito no se abre, funciona con menos corriente']}
});

QUESTIONS.push({
  id: 'CN186', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
  table: {headers: ['Frecuencia (Hz)', 'Tipo de onda'],rows: [['10', 'Infrasonido'],['200', 'Audible'],['20.000', 'Audible'],['50.000', 'Ultrasonido']],caption: 'Espectro de sonido'},
  question: '¿Qué frecuencia NO puede escuchar el oído humano?',
  options: ['50.000 Hz', '200 Hz', '1.000 Hz', '10.000 Hz'],
  correct: 0,
  explanation: {correct: 'El oído humano escucha entre 20 Hz y 20.000 Hz. 50.000 Hz es ultrasonido, inaudible.',wrongs: ['200 Hz está dentro del rango audible','1.000 Hz es perfectamente audible','10.000 Hz está dentro del rango']}
});

QUESTIONS.push({
  id: 'CN187', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
  question: '¿Qué tipo de energía tiene un objeto en movimiento?',
  options: ['Cinética', 'Potencial', 'Térmica', 'Química'],
  correct: 0,
  explanation: {correct: 'La energía cinética es la energía del movimiento.',wrongs: ['La potencial es de posición','La térmica es de temperatura','La química está en enlaces']}
});

QUESTIONS.push({
  id: 'CN188', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
  context: 'Un resorte se deforma 0,1 m con una fuerza de 5 N.',
  question: '¿Cuál es la constante del resorte (k)?',
  options: ['50 N/m', '0,5 N/m', '5 N·m', '10 N/m'],
  correct: 0,
  explanation: {correct: 'Ley de Hooke: F = kx. k = F/x = 5/0,1 = 50 N/m.',wrongs: ['0,5 = 5 x 0,1 (multiplicaste en vez de dividir)','5 N·m es una unidad incorrecta','10 N/m = 5/0,5 (error)']}
});

QUESTIONS.push({
  id: 'CN189', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
  question: '¿Qué principio explica por qué un avión se eleva?',
  options: ['Principio de Bernoulli', 'Ley de Hooke', 'Principio de Pascal', 'Ley de Ohm'],
  correct: 0,
  explanation: {correct: 'El principio de Bernoulli dice que donde la velocidad del fluido es mayor, la presión es menor. El ala genera sustentación.',wrongs: ['Hooke es para resortes','Pascal es para presión en fluidos','Ohm es para circuitos eléctricos']}
});

QUESTIONS.push({
  id: 'CN190', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
  question: '¿Qué aparato mide la temperatura?',
  options: ['Termómetro', 'Barómetro', 'Voltímetro', 'Manómetro'],
  correct: 0,
  explanation: {correct: 'El termómetro mide temperatura en grados Celsius, Fahrenheit o Kelvin.',wrongs: ['El barómetro mide presión atmosférica','El voltímetro mide voltaje eléctrico','El manómetro mide presión de gases']}
});

QUESTIONS.push({
  id: 'CN191', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
  context: 'Una ola de agua tiene frecuencia 2 Hz y longitud de onda 1,5 m.',
  question: '¿Cuál es la velocidad de la onda?',
  options: ['3 m/s', '0,75 m/s', '4 m/s', '2 m/s'],
  correct: 0,
  explanation: {correct: 'v = f × λ = 2 × 1,5 = 3 m/s.',wrongs: ['0,75 = 1,5/2 (dividiste al revés)','4 = 2 + 1,5 + 0,5 (error arbitrario)','2 es solo la frecuencia']}
});

QUESTIONS.push({
  id: 'CN192', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
  table: {headers: ['Material', 'Resistencia específica (Ω·m)'],rows: [['Cobre', '1,68 × 10⁻⁸'],['Aluminio', '2,65 × 10⁻⁸'],['Hierro', '9,71 × 10⁻⁸'],['Plástico', '10¹³']],caption: 'Resistividades a 20°C'},
  question: '¿Qué material es mejor conductor eléctrico?',
  options: ['Cobre', 'Aluminio', 'Hierro', 'Plástico'],
  correct: 0,
  explanation: {correct: 'Menor resistividad = mejor conductor. El cobre (1,68 × 10⁻⁸ Ω·m) es el mejor.',wrongs: ['Aluminio tiene mayor resistividad','Hierro es peor conductor','Plástico es aislante (altísima resistividad)']}
});

QUESTIONS.push({
  id: 'CN193', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
  question: '¿Qué forma de energía posee una batería?',
  options: ['Química', 'Cinética', 'Térmica', 'Nuclear'],
  correct: 0,
  explanation: {correct: 'Las baterías almacenan energía química que se convierte en eléctrica.',wrongs: ['La cinética es de movimiento','La térmica es de temperatura','La nuclear está en átomos pesados']}
});

QUESTIONS.push({
  id: 'CN194', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
  context: 'Un cuerpo de 5 kg cae libremente desde 20 m de altura. Use g = 10 m/s².',
  question: '¿Cuál es su velocidad al impactar el suelo?',
  options: ['20 m/s', '10 m/s', '40 m/s', '100 m/s'],
  correct: 0,
  explanation: {correct: 'v = √(2gh) = √(2 × 10 × 20) = √400 = 20 m/s.',wrongs: ['10 m/s es √(2×10×5) (error de masa)','40 m/s es 2×20 (error)','100 m/s es 10×10 (error)']}
});

QUESTIONS.push({
  id: 'CN195', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
  question: '¿Qué ley dice que "la energía no se crea ni se destruye, solo se transforma"?',
  options: ['Primera ley de la termodinámica', 'Segunda ley de la termodinámica', 'Ley de conservación de la masa', 'Ley de Newton'],
  correct: 0,
  explanation: {correct: 'La primera ley de la termodinámica es el principio de conservación de la energía.',wrongs: ['La segunda ley dice que la entropía siempre aumenta','La conservación de masa es diferente','Newton explica movimiento, no energía']}
});

// ===== CIENCIAS DE LA TIERRA (CN196-CNN206) =====

QUESTIONS.push({
  id: 'CN196', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
  question: '¿Cuántos planetas tiene el sistema solar?',
  options: ['8', '9', '7', '10'],
  correct: 0,
  explanation: {correct: 'Desde 2006 hay 8 planetas: Mercurio, Venus, Tierra, Marte, Júpiter, Saturno, Urano y Neptuno.',wrongs: ['9 si se cuenta Plutón (ya no es planeta)','7 olvidando uno','10 es un número incorrecto']}
});

QUESTIONS.push({
  id: 'CN197', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
  table: {headers: ['Capa', 'Composición principal', 'Temperatura'],rows: [['Corteza', 'Roca sólida', 'Baja'],['Manto', 'Roca semiplástica', 'Alta'],['Núcleo externo', 'Hierro líquido', 'Muy alta'],['Núcleo interno', 'Hierro sólido', 'Extrema']],caption: 'Capas de la Tierra'},
  question: '¿En qué capa se encuentra el magma?',
  options: ['Manto', 'Corteza', 'Núcleo externo', 'Núcleo interno'],
  correct: 0,
  explanation: {correct: 'El magma se forma en la parte superior del manto cuando la roca se funde parcialmente.',wrongs: ['La corteza es sólida','El núcleo externo es hierro fundido, no magma','El núcleo interno es sólido por presión']}
});

QUESTIONS.push({
  id: 'CN198', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
  question: '¿Qué tipo de roca se forma por enfriamiento de magma?',
  options: ['Ígnea extrusiva', 'Sedimentaria', 'Metamórfica', 'Ígnea intrusiva'],
  correct: 0,
  explanation: {correct: 'Las ígneas extrusivas se forman por enfriamiento rápido de lava en la superficie.',wrongs: ['Las sedimentarias se forman por compactación','Las metamórficas por calor y presión','Las intrusivas se enfrían dentro de la corteza']}
});

QUESTIONS.push({
  id: 'CN199', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
  question: '¿Qué capa de la atmósfera nos protege de la radiación UV?',
  options: ['Estratosfera (ozono)', 'Troposfera', 'Mesosfera', 'Termosfera'],
  correct: 0,
  explanation: {correct: 'La capa de ozono en la estratosfera absorbe la radiación UV del sol.',wrongs: ['La troposfera es donde vivimos','La mesosfera quema meteoritos','La termosfera tiene auroras boreales']}
});

QUESTIONS.push({
  id: 'CN200', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
  svg: '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" style="max-width:320px"><text x="160" y="18" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Ciclo de las rocas</text><rect x="30" y="40" width="80" height="40" fill="#FFCC80" stroke="#E65100" stroke-width="2" rx="5"/><text x="70" y="65" text-anchor="middle" font-size="8" fill="#333">Ígneas</text><rect x="210" y="40" width="80" height="40" fill="#A5D6A7" stroke="#2E7D32" stroke-width="2" rx="5"/><text x="250" y="65" text-anchor="middle" font-size="8" fill="#333">Sedimentarias</text><rect x="120" y="140" width="80" height="40" fill="#CE93D8" stroke="#7B1FA2" stroke-width="2" rx="5"/><text x="160" y="165" text-anchor="middle" font-size="8" fill="#333">Metamórficas</text><path d="M115,60 L205,60" fill="none" stroke="#333" stroke-width="1.5" marker-end="url(%23arr)"/><text x="160" y="52" text-anchor="middle" font-size="7" fill="#666">Erosión/Sedimentación</text><path d="M250,85 L195,135" fill="none" stroke="#333" stroke-width="1.5" marker-end="url(%23arr)"/><text x="235" y="115" font-size="7" fill="#666">Calor y presión</text><path d="M125,135 L70,85" fill="none" stroke="#333" stroke-width="1.5" marker-end="url(%23arr)"/><text x="75" y="115" font-size="7" fill="#666">Fusión</text></svg>',
  context: 'El diagrama muestra el ciclo de las rocas.',
  question: '¿Qué proceso transforma una roca ígnea en sedimentaria?',
  options: ['Erosión y sedimentación', 'Fusión', 'Calor y presión', 'Enfriamiento'],
  correct: 0,
  explanation: {correct: 'La erosión descompone la roca ígnea, los sedimentos se acumulan y compactan formando roca sedimentaria.',wrongs: ['La fusión forma magma (ígneas)','Calor y presión forma metamórficas','El enfriamiento forma ígneas']}
});

QUESTIONS.push({
  id: 'CN201', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
  context: 'El volcanismo en Colombia se relaciona con la subducción de la placa de Nazca bajo la placa Sudamericana.',
  question: '¿Qué tipo de volcanismo predomina en los Andes colombianos?',
  options: ['Explosivo (estratovolcanes)', 'Efusivo (escudos)', 'Fumarolas únicamente', 'No hay volcanismo'],
  correct: 0,
  explanation: {correct: 'Los Andes colombianos tienen volcanes explosivos como el Nevado del Ruiz (estratovolcán).',wrongs: ['Los de escudo son como Hawái','Hay actividad volcánica real','El volcanismo es explosivo por la subducción']}
});

QUESTIONS.push({
  id: 'CN202', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
  question: '¿Qué gas es el componente principal de la atmósfera terrestre?',
  options: ['Nitrógeno (78%)', 'Oxígeno (78%)', 'Argón (78%)', 'CO2 (78%)'],
  correct: 0,
  explanation: {correct: 'El nitrógeno (N2) compone el 78% de la atmósfera. El oxígeno es solo el 21%.',wrongs: ['El oxígeno es 21%, no 78%','El argón es 0,93%','El CO2 es 0,04%']}
});

QUESTIONS.push({
  id: 'CN203', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
  table: {headers: ['Mineral', 'Dureza (Mohs)', 'Uso'],rows: [['Talco', '1', 'Cosméticos'],['Yeso', '2', 'Construcción'],['Calcita', '3', 'Cal'],['Cuarzo', '7', 'Joyería']],caption: 'Escala de dureza de Mohs'},
  question: '¿Qué mineral es más duro?',
  options: ['Cuarzo', 'Talco', 'Yeso', 'Calcita'],
  correct: 0,
  explanation: {correct: 'Mayor número en la escala de Mohs = mayor dureza. Cuarzo (7) es el más duro de la lista.',wrongs: ['Talco (1) es el más blando','Yeso (2) es blando','Calcita (3) es intermedio']}
});

QUESTIONS.push({
  id: 'CN204', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
  question: '¿Qué escala mide la intensidad de los terremotos?',
  options: ['Escala de Richter', 'Escala de Mohs', 'Escala de Beaufort', 'Escala de Celsius'],
  correct: 0,
  explanation: {correct: 'La escala de Richter (o de magnitud de momento) mide la energía liberada por un sismo.',wrongs: ['Mohs mide dureza de minerales','Beaufort mide velocidad del viento','Celsius mide temperatura']}
});

QUESTIONS.push({
  id: 'CN205', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
  question: '¿Cuánto tarda la Tierra en dar una vuelta alrededor del Sol?',
  options: ['365,25 días', '24 horas', '30 días', '12 meses exactos'],
  correct: 0,
  explanation: {correct: 'La Tierra tarda aproximadamente 365,25 días (1 año tropical) en orbitar el Sol.',wrongs: ['24 horas es una rotación sobre su eje','30 días es un mes aproximado','12 meses es una aproximación, no exacto']}
});

QUESTIONS.push({
  id: 'CN206', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
  context: 'El cambio climático actual está causado principalmente por el aumento de gases de efecto invernadero.',
  question: '¿Qué gas es el principal responsable del calentamiento global?',
  options: ['Dióxido de carbono (CO2)', 'Oxígeno (O2)', 'Nitrógeno (N2)', 'Hidrógeno (H2)'],
  correct: 0,
  explanation: {correct: 'El CO2 proveniente de combustibles fósiles es el principal gas de efecto invernadero de origen humano.',wrongs: ['El oxígeno no es gas de efecto invernadero','El nitrógeno no atrapa calor','El hidrógeno no es un gas de efecto invernadero significativo']}
});
/**
 * Preguntas de Ciencias Naturales - Banco final
 * 46 preguntas: CN207 - CN250
 */

QUESTIONS.push({
  id: 'CN207', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
  question: 'Cual es la unidad basica de la vida?',
  options: ['La celula', 'El organo', 'El tejido', 'El atom'],
  correct: 0,
  explanation: {correct: 'La celula es la unidad basica de todos los seres vivos.',wrongs: ['El organo es un conjunto de tejidos','El tejido es un conjunto de celulas','El atom es la unidad de la materia']}
});

QUESTIONS.push({
  id: 'CN208', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
  table: {headers: ['Organo', 'Funcion'],rows: [['Corazon', 'Bombea sangre'],['Pulmones', 'Intercambio gaseoso'],['Higado', 'Filtra toxinas'],['Rinon', 'Filtra sangre']],caption: 'Organos principales'},
  question: 'Que organo filtra la sangre?',
  options: ['Rinon', 'Corazon', 'Pulmones', 'Higado'],
  correct: 0,
  explanation: {correct: 'El rinon filtra la sangre y produce orina.',wrongs: ['Corazon bombea','Pulmones respiran','Higado filtra toxinas pero no la sangre directamente']}
});

QUESTIONS.push({
  id: 'CN209', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
  question: 'Cual es la funcion principal del ADN?',
  options: ['Almacenar informacion genetica', 'Producir energia', 'Transportar oxigeno', 'Regular la temperatura'],
  correct: 0,
  explanation: {correct: 'El ADN contiene las instrucciones geneticas.',wrongs: ['Energia es mitocondria','Oxigeno es hemoglobina','Temperatura es hipotalamo']}
});

QUESTIONS.push({
  id: 'CN210', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
  question: 'Que gas es esencial para la respiracion?',
  options: ['Oxigeno', 'Nitrogeno', 'Dioxido de carbono', 'Hidrogeno'],
  correct: 0,
  explanation: {correct: 'El oxigeno es necesario para la respiracion celular.',wrongs: ['Nitrogeno es el mas abundante','CO2 es de respiracion','Hidrogeno no se respira']}
});

QUESTIONS.push({
  id: 'CN211', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
  svg: '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="max-width:300px"><text x="150" y="18" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Ciclo del Agua</text><circle cx="150" cy="110" r="50" fill="none" stroke="#2196F3" stroke-width="2"/><text x="150" y="75" text-anchor="middle" font-size="8" fill="#1565C0">Evaporacion</text><text x="210" y="115" text-anchor="middle" font-size="8" fill="#1565C0">Condensacion</text><text x="150" y="150" text-anchor="middle" font-size="8" fill="#1565C0">Precipitacion</text><text x="90" y="115" text-anchor="middle" font-size="8" fill="#1565C0">Escorrentia</text><path d="M130,60 L170,60 L150,40 Z" fill="#FF9800"/><text x="150" y="35" text-anchor="middle" font-size="7" fill="#E65100">Sol</text></svg>',
  question: 'En el ciclo del agua, que proceso convierte el agua en vapor?',
  options: ['Evaporacion', 'Condensacion', 'Precipitacion', 'Escorrentia'],
  correct: 0,
  explanation: {correct: 'La evaporacion convierte agua liquida en vapor.',wrongs: ['Condensacion es vapor a liquido','Precipitacion es lluvia','Escorrentia es flujo superficial']}
});

QUESTIONS.push({
  id: 'CN212', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
  question: 'Que tipo de energia se obtiene del sol?',
  options: ['Energia solar', 'Energia nuclear', 'Energia eolica', 'Energia hidraulica'],
  correct: 0,
  explanation: {correct: 'La energia solar proviene de la radiacion del sol.',wrongs: ['Nuclear es de atomos','Eolica es del viento','Hidraulica es del agua']}
});

QUESTIONS.push({
  id: 'CN213', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
  question: 'Que planeta es conocido como el Planeta Rojo?',
  options: ['Marte', 'Jupiter', 'Venus', 'Saturno'],
  correct: 0,
  explanation: {correct: 'Marte tiene color rojizo por el hierro oxidado.',wrongs: ['Jupiter es el mas grande','Venus es el mas caliente','Saturno tiene anillos']}
});

QUESTIONS.push({
  id: 'CN214', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
  question: 'Cual es la capa mas externa de la Tierra?',
  options: ['La corteza', 'El manto', 'El nucleo externo', 'El nucleo interno'],
  correct: 0,
  explanation: {correct: 'La corteza es la capa mas delgada y externa.',wrongs: ['El manto es mas grueso','Nucleo externo es liquido','Nucleo interno es solido']}
});

QUESTIONS.push({
  id: 'CN215', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
  table: {headers: ['Capa', 'Composicion'],rows: [['Corteza', 'Roca solida'],['Manto', 'Roca plastica'],['Nucleo externo', 'Metal liquido'],['Nucleo interno', 'Metal solido']],caption: 'Capas de la Tierra'},
  question: 'Que composicion tiene el nucleo externo?',
  options: ['Metal liquido', 'Roca solida', 'Roca plastica', 'Metal solido'],
  correct: 0,
  explanation: {correct: 'El nucleo externo es de hierro y niquel liquidos.',wrongs: ['Roca solida es corteza','Roca plastica es manto','Metal solido es nucleo interno']}
});

QUESTIONS.push({
  id: 'CN216', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
  question: 'Que proceso realizan las plantas para制造 su alimento?',
  options: ['Fotosintesis', 'Respiracion', 'Fermentacion', 'Digestion'],
  correct: 0,
  explanation: {correct: 'La fotosintesis convierte luz solar en glucosa.',wrongs: ['Respiracion consume oxigeno','Fermentacion es anaerobica','Digestion es en animales']}
});

QUESTIONS.push({
  id: 'CN217', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
  question: 'Cuantos cromosomas tiene un ser humano?',
  options: ['46', '23', '48', '44'],
  correct: 0,
  explanation: {correct: 'Los humanos tenemos 46 cromosomas (23 pares).',wrongs: ['23 es la cantidad de pares','48 es de otros primates','44 es incorrecto']}
});

QUESTIONS.push({
  id: 'CN218', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
  question: 'Que es la biodiversidad?',
  options: ['Variedad de seres vivos en un ecosistema', 'Cantidad de agua disponible', 'Numero de volcanes', 'Tipo de suelo'],
  correct: 0,
  explanation: {correct: 'Biodiversidad es la variedad de vida.',wrongs: ['Agua es hidrosfera','Volcanes son geologia','Suelo es edafologia']}
});

QUESTIONS.push({
  id: 'CN219', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
  question: 'Que animal es un mamifero?',
  options: ['Perro', 'Tortuga', 'Serpiente', 'Pez'],
  correct: 0,
  explanation: {correct: 'Los perros son mamiferos (tienen pelo y amamantan).',wrongs: ['Tortuga es reptil','Serpiente es reptil','Pez es pez']}
});

QUESTIONS.push({
  id: 'CN220', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
  question: 'Cual es la funcion de los globulos rojos?',
  options: ['Transportar oxigeno', 'Combatir infecciones', 'Coagular la sangre', 'Producir hormonas'],
  correct: 0,
  explanation: {correct: 'Los globulos rojos transportan oxigeno via hemoglobina.',wrongs: ['Globulos blancos combaten infecciones','Plaquetas coagulan','Hormonas son gl Endocrinas']}
});

QUESTIONS.push({
  id: 'CN221', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
  svg: '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="max-width:300px"><text x="150" y="18" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Cadena alimenticia</text><rect x="20" y="70" width="50" height="30" fill="#4CAF50" rx="5"/><text x="45" y="90" text-anchor="middle" font-size="8" fill="#fff" font-weight="bold">Plantas</text><rect x="90" y="70" width="50" height="30" fill="#FF9800" rx="5"/><text x="115" y="90" text-anchor="middle" font-size="8" fill="#fff" font-weight="bold">Conejos</text><rect x="160" y="70" width="50" height="30" fill="#F44336" rx="5"/><text x="185" y="90" text-anchor="middle" font-size="8" fill="#fff" font-weight="bold">Zorros</text><rect x="230" y="70" width="50" height="30" fill="#9C27B0" rx="5"/><text x="255" y="90" text-anchor="middle" font-size="8" fill="#fff" font-weight="bold">Aguilas</text><path d="M70,85 L90,85" stroke="#333" stroke-width="2" marker-end="url(#arrow)"/><path d="M140,85 L160,85" stroke="#333" stroke-width="2" marker-end="url(#arrow)"/><path d="M210,85 L230,85" stroke="#333" stroke-width="2" marker-end="url(#arrow)"/><text x="150" y="130" text-anchor="middle" font-size="9" fill="#333">Productores -> Consumidores primarios -> Secundarios -> Terciarios</text></svg>',
  question: 'En la cadena alimenticia, que organismo es consumidor secundario?',
  options: ['Zorro', 'Planta', 'Conejo', 'Aguila'],
  correct: 0,
  explanation: {correct: 'El zorro come conejos (consumidor primario).',wrongs: ['Planta es productor','Conejo es consumidor primario','Aguila es consumidor terciario']}
});

QUESTIONS.push({
  id: 'CN222', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
  question: 'Que estado de la materia tiene forma y volumen definidos?',
  options: ['Solido', 'Liquido', 'Gaseoso', 'Plasma'],
  correct: 0,
  explanation: {correct: 'Los solidos tienen forma y volumen propios.',wrongs: ['Liquido tiene volumero pero no forma','Gaseoso no tiene forma ni volumen','Plasma es ionizado']}
});

QUESTIONS.push({
  id: 'CN223', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
  question: 'Cual es la fuerza que mantiene los planetas en orbita?',
  options: ['Gravitacional', 'Magnetica', 'Electrica', 'Nuclear'],
  correct: 0,
  explanation: {correct: 'La fuerza gravitacional atrae planetas al sol.',wrongs: ['Magnetica es de imanes','Electrica es de cargas','Nuclear es en atomos']}
});

QUESTIONS.push({
  id: 'CN224', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
  table: {headers: ['Energia', 'Fuente'],rows: [['Solar', 'Sol'],['Eolica', 'Viento'],['Hidraulica', 'Agua'],['Geotermica', 'Calor de la Tierra']],caption: 'Fuentes de energia renovable'},
  question: 'Que fuente de energia proviene del calor interno de la Tierra?',
  options: ['Geotermica', 'Solar', 'Eolica', 'Hidraulica'],
  correct: 0,
  explanation: {correct: 'La geotermica aprovecha el calor del interior terrestre.',wrongs: ['Solar es del sol','Eolica es del viento','Hidraulica es del agua']}
});

QUESTIONS.push({
  id: 'CN225', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
  question: 'Que es un ecosistema?',
  options: ['Comunidad de seres vivos y su ambiente', 'Solo los animales', 'Solo las plantas', 'Solo el suelo'],
  correct: 0,
  explanation: {correct: 'Un ecosistema incluye seres vivos y factores abioticos.',wrongs: ['No es solo animales','No es solo plantas','No es solo suelo']}
});

QUESTIONS.push({
  id: 'CN226', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
  question: 'Cual es la capa de la atmosfera que nos protege de los rayos UV?',
  options: ['Estratosfera (ozono)', 'Troposfera', 'Mesosfera', 'Termosfera'],
  correct: 0,
  explanation: {correct: 'La capa de ozono en la estratosfera filtra rayos UV.',wrongs: ['Troposfera es donde vivimos','Mesosfera quema meteoritos','Termosfera tiene auroras']}
});

QUESTIONS.push({
  id: 'CN227', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
  question: 'Que tipo de roca se forma de la lava enfriada?',
  options: ['Ignea', 'Sedimentaria', 'Metamorfica', 'Caliza'],
  correct: 0,
  explanation: {correct: 'Las rocas igneas se forman de magma o lava.',wrongs: ['Sedimentaria es de sedimentos','Metamorfica es de presion','Caliza es sedimentaria']}
});

QUESTIONS.push({
  id: 'CN228', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
  question: 'Que gas es el mas abundante en la atmosfera terrestre?',
  options: ['Nitrogeno', 'Oxigeno', 'Argon', 'CO2'],
  correct: 0,
  explanation: {correct: 'El nitrogeno representa el 78% de la atmosfera.',wrongs: ['Oxigeno es 21%','Argon es 0.9%','CO2 es 0.04%']}
});

QUESTIONS.push({
  id: 'CN229', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
  question: 'Que proceso biologico produce energia a partir de glucosa y oxigeno?',
  options: ['Respiracion celular', 'Fotosintesis', 'Fermentacion', 'Digestion'],
  correct: 0,
  explanation: {correct: 'La respiracion celular produce ATP.',wrongs: ['Fotosintesis produce glucosa','Fermentacion es sin oxigeno','Digestion descompone alimentos']}
});

QUESTIONS.push({
  id: 'CN230', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
  table: {headers: ['Tipo de celula', 'Caracteristica'],rows: [['Procarionte', 'Sin nucleo definido'],['Eucarionte', 'Con nucleo definido'],['Vegetal', 'Tiene cloroplastos'],['Animal', 'No tiene pared celular']],caption: 'Tipos de celulas'},
  question: 'Que caracteristica tiene la celula eucarionte?',
  options: ['Tiene nucleo definido', 'No tiene nucleo', 'Tiene pared celular', 'Tiene cloroplastos'],
  correct: 0,
  explanation: {correct: 'Las eucariontes tienen nucleo delimitado por membrana.',wrongs: ['Procarionte no tiene nucleo','Pared celular es vegetal','Cloroplastos es vegetal']}
});

QUESTIONS.push({
  id: 'CN231', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
  question: 'Que planeta es el mas grande del sistema solar?',
  options: ['Jupiter', 'Saturno', 'Neptuno', 'Urano'],
  correct: 0,
  explanation: {correct: 'Jupiter es el planeta mas grande.',wrongs: ['Saturno es segundo','Neptuno es octavo','Urano es septimo']}
});

QUESTIONS.push({
  id: 'CN232', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
  question: 'Cual es el solvente universal en los seres vivos?',
  options: ['Agua', 'Alcohol', 'Aceite', 'Acido'],
  correct: 0,
  explanation: {correct: 'El agua disuelve casi todas las sustancias biologicas.',wrongs: ['Alcohol es desinfectante','Aceite no disuelve agua','Acido es corrosivo']}
});

QUESTIONS.push({
  id: 'CN233', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
  question: 'Que es la seleccion natural?',
  options: ['Proceso donde sobreviven los mas aptos', 'Cambio climatico', 'Mutacion aleatoria', 'Reproduccion sexual'],
  correct: 0,
  explanation: {correct: 'La seleccion natural favorece rasgos ventajosos.',wrongs: ['Clima es factor externo','Mutacion es variacion','Reproduccion es mecanismo']}
});

QUESTIONS.push({
  id: 'CN234', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
  question: 'Que instrumento mide la temperatura?',
  options: ['Termometro', 'Barometro', 'Anemometro', 'Pluviometro'],
  correct: 0,
  explanation: {correct: 'El termometro mide temperatura.',wrongs: ['Barometro mide presion','Anemometro mide viento','Pluviometro mide lluvia']}
});

QUESTIONS.push({
  id: 'CN235', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
  question: 'Que transformacion ocurre cuando el agua se congela?',
  options: ['Liquido a solido', 'Solido a liquido', 'Liquido a gas', 'Gas a liquido'],
  correct: 0,
  explanation: {correct: 'Congelacion es de liquido a solido.',wrongs: ['Solido a liquido es fusion','Liquido a gas es evaporacion','Gas a liquido es condensacion']}
});

QUESTIONS.push({
  id: 'CN236', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
  svg: '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="max-width:300px"><text x="150" y="18" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Circuito electrico simple</text><rect x="50" y="60" width="80" height="40" fill="#FFF3E0" stroke="#E65100" stroke-width="2" rx="5"/><text x="90" y="85" text-anchor="middle" font-size="8" fill="#E65100" font-weight="bold">Bateria 9V</text><line x1="130" y1="80" x2="170" y2="80" stroke="#333" stroke-width="2"/><rect x="170" y="65" width="60" height="30" fill="#E8F5E9" stroke="#2E7D32" stroke-width="2" rx="3"/><text x="200" y="85" text-anchor="middle" font-size="7" fill="#1B5E20" font-weight="bold">Resistencia</text><line x1="230" y1="80" x2="270" y2="80" stroke="#333" stroke-width="2"/><line x1="270" y1="80" x2="270" y2="120" stroke="#333" stroke-width="2"/><line x1="270" y1="120" x2="50" y2="120" stroke="#333" stroke-width="2"/><line x1="50" y1="120" x2="50" y2="80" stroke="#333" stroke-width="2"/></svg>',
  question: 'Que componente del circuito tiene la resistencia?',
  options: ['La resistencia', 'La bateria', 'El cable', 'El interruptor'],
  correct: 0,
  explanation: {correct: 'La resistencia limita el flujo de corriente.',wrongs: ['La bateria proporciona voltaje','El cable conduce','El interruptor abre/cierra']}
});

QUESTIONS.push({
  id: 'CN237', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
  question: 'Que reino incluye a los hongos?',
  options: ['Reino Fungi', 'Reino Plantae', 'Reino Animalia', 'Reino Monera'],
  correct: 0,
  explanation: {correct: 'Los hongos pertenecen al reino Fungi.',wrongs: ['Plantae son plantas','Animalia son animales','Monera son bacterias']}
});

QUESTIONS.push({
  id: 'CN238', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
  question: 'Que tipo de enlace quimico comparten los metales?',
  options: ['Metalico', 'Ionico', 'Covalente', 'Puente de hidrogeno'],
  correct: 0,
  explanation: {correct: 'Los metales tienen enlace metalico (electrones deslocalizados).',wrongs: ['Ionico es entre metales y no metales','Covalente es comparticion','Puente de hidrogeno es intermolecular']}
});

QUESTIONS.push({
  id: 'CN239', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
  question: 'Cual es la ley de Newton que establece F = m x a?',
  options: ['Segunda ley', 'Primera ley', 'Tercera ley', 'Ley de gravitacion'],
  correct: 0,
  explanation: {correct: 'La segunda ley relaciona fuerza, masa y aceleracion.',wrongs: ['Primera ley es inercia','Tercera ley es accion-reaccion','Gravitacion es de Newton tambien']}
});

QUESTIONS.push({
  id: 'CN240', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
  question: 'Que es un volcán?',
  options: ['Abertura en la corteza terrestre que expulsa lava', 'Montana alta', 'Lago profundo', 'Rio caudaloso'],
  correct: 0,
  explanation: {correct: 'Un volcan es una abertura geologica.',wrongs: ['Montana no necesariamente es volcan','Lago es cuerpo de agua','Rio es corriente']}
});

QUESTIONS.push({
  id: 'CN241', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
  question: 'Que tipo de reproduction involucra un solo progenitor?',
  options: ['Asexual', 'Sexual', 'Fertilizacion', 'Polinizacion'],
  correct: 0,
  explanation: {correct: 'La reproduccion asexual no requiere dos progenitores.',wrongs: ['Sexual requiere dos progenitores','Fertilizacion es sexual','Polinizacion es de plantas']}
});

QUESTIONS.push({
  id: 'CN242', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
  table: {headers: ['Enfermedad', 'Tipo'],rows: [['Gripe', 'Viral'],['Tuberculosis', 'Bacteriana'],['Cancer', 'Celular'],['Diabetes', 'Metabolica']],caption: 'Tipos de enfermedades'},
  question: 'Que tipo de enfermedad es la diabetes?',
  options: ['Metabolica', 'Viral', 'Bacteriana', 'Celular'],
  correct: 0,
  explanation: {correct: 'La diabetes es un trastorno metabolico.',wrongs: ['Gripe es viral','TB es bacteriana','Cancer es celular']}
});

QUESTIONS.push({
  id: 'CN243', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
  question: 'Que gas exhalan las plantas durante la fotosintesis?',
  options: ['Oxigeno', 'CO2', 'Nitrogeno', 'Hidrogeno'],
  correct: 0,
  explanation: {correct: 'Las plantas liberan oxigeno como subproducto.',wrongs: ['CO2 es inhalado','Nitrogeno no participa','Hidrogeno no se libera']}
});

QUESTIONS.push({
  id: 'CN244', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
  question: 'Que es la densidad?',
  options: ['Masa por unidad de volumen', 'Solo masa', 'Solo volumen', 'Peso total'],
  correct: 0,
  explanation: {correct: 'Densidad = masa/volumen.',wrongs: ['Masa es cantidad de materia','Volumen es espacio','Peso es fuerza gravitacional']}
});

QUESTIONS.push({
  id: 'CN245', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
  question: 'Que es el efecto invernadero?',
  options: ['Retencion de calor por gases en la atmosfera', 'Enfriamiento global', 'Ozono stratosferico', 'Ciclo del carbono'],
  correct: 0,
  explanation: {correct: 'Los gases de efecto invernadero retienen calor.',wrongs: ['Enfriamiento es lo contrario','Ozono protege UV','Ciclo del carbono es diferente']}
});

QUESTIONS.push({
  id: 'CN246', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
  question: 'Que animal es un anfibio?',
  options: ['Rana', 'Serpiente', 'Tortuga', 'Pajaro'],
  correct: 0,
  explanation: {correct: 'Las ranas son anfibios (viven en agua y tierra).',wrongs: ['Serpiente es reptil','Tortuga es reptil','Pajaro es ave']}
});

QUESTIONS.push({
  id: 'CN247', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
  question: 'Que sucede cuando un objeto se calienta?',
  options: ['Sus moleculas vibran mas rapido', 'Se vuelve mas pesado', 'Pierde volumen', 'Cambia de color'],
  correct: 0,
  explanation: {correct: 'El calor aumenta la velocidad de las moleculas.',wrongs: ['La masa no cambia','El volumen generalmente aumenta','El color no cambia necesariamente']}
});

QUESTIONS.push({
  id: 'CN248', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'dificil',
  svg: '<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" style="max-width:300px"><text x="150" y="18" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Transformaciones del carbono</text><rect x="20" y="50" width="70" height="40" fill="#4CAF50" rx="5"/><text x="55" y="75" text-anchor="middle" font-size="7" fill="#fff" font-weight="bold">CO2 atmosferico</text><rect x="130" y="50" width="70" height="40" fill="#2196F3" rx="5"/><text x="165" y="75" text-anchor="middle" font-size="7" fill="#fff" font-weight="bold">Plantas (fotosintesis)</text><rect x="240" y="50" width="50" height="40" fill="#FF9800" rx="5"/><text x="265" y="75" text-anchor="middle" font-size="7" fill="#fff" font-weight="bold">Animales</text><path d="M90,70 L130,70" stroke="#333" stroke-width="1.5" marker-end="url(#arrow)"/><path d="M200,70 L240,70" stroke="#333" stroke-width="1.5" marker-end="url(#arrow)"/><text x="110" y="65" font-size="6" fill="#333">Absorcion</text><text x="220" y="65" font-size="6" fill="#333">Cadena</text></svg>',
  question: 'En el ciclo del carbono, que proceso incorpora CO2 a los seres vivos?',
  options: ['Fotosintesis', 'Respiracion', 'Combustion', 'Descomposicion'],
  correct: 0,
  explanation: {correct: 'La fotosintesis incorpora CO2 a la materia organica.',wrongs: ['Respiracion libera CO2','Combustion libera CO2','Descomposicion libera CO2']}
});

QUESTIONS.push({
  id: 'CN249', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
  question: 'Que es un mineral?',
  options: ['Sustancia inorganica natural con composicion definida', 'Solo rocas', 'Solo metales', 'Solo cristales'],
  correct: 0,
  explanation: {correct: 'Los minerales son inorganicos, naturales y cristalinos.',wrongs: ['Rocas son agregados de minerales','Metales son un tipo de mineral','Cristales es una estructura']}
});

QUESTIONS.push({
  id: 'CN250', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
  table: {headers: ['Mineral', 'Uso'],rows: [['Cuarzo', 'Vidrio y electronica'],['Feldespato', 'Ceramica'],['Mica', 'Electronica'],['Calcita', 'Construccion']],caption: 'Minerales y usos'},
  question: 'Que mineral es usado en la construccion?',
  options: ['Calcita', 'Cuarzo', 'Feldespato', 'Mica'],
  correct: 0,
  explanation: {correct: 'La calcita forma la caliza, usada en construccion.',wrongs: ['Cuarzo es para vidrio','Feldespato es para ceramica','Mica es para electronica']}
});
/**
 * Ciencias finales - CN251-CN252
 */

QUESTIONS.push({
  id: 'CN251', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'facil',
  question: 'Que estructura celular solo tienen las celulas vegetales?',
  options: ['Pared celular y cloroplastos', 'Nucleo y mitocondrias', 'Membrana y citoplasma', 'Ribosomas y lisosomas'],
  correct: 0,
  explanation: {correct: 'Las celulas vegetales tienen pared celular y cloroplastos.',wrongs: ['Nucleo y mitocondrias son en ambas','Membrana y citoplasma son en ambas','Ribosomas y lisosomas son en ambas']}
});

QUESTIONS.push({
  id: 'CN252', area: 'ciencias', areaName: 'Ciencias Naturales', difficulty: 'media',
  question: 'Que ley de Newton establece que a toda accion le corresponde una reaccion igual y opuesta?',
  options: ['Tercera ley', 'Primera ley', 'Segunda ley', 'Ley de gravitacion'],
  correct: 0,
  explanation: {correct: 'La tercera ley de Newton es accion-reaccion.',wrongs: ['Primera ley es inercia','Segunda ley es F=ma','Gravitacion es fuerza a distancia']}
});
