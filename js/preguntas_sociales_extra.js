/**
 * Preguntas de Sociales y Ciudadania - Banco ampliado
 * 73 preguntas: SC148 - SC220
 */

// ===== CONSTITUCION Y DEMOCRACIA (SC148-SC168) =====

QUESTIONS.push({
  id: 'SC148', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'facil',
  question: 'En que ano se promulgo la Constitucion Politica de Colombia?',
  options: ['1991', '1986', '1957', '2000'],
  correct: 0,
  explanation: {correct: 'La Constitucion de 1991 es la carta magna vigente.',wrongs: ['1986 fue una reforma','1957 fue el Frente Nacional','2000 no tiene relevancia']}
});

QUESTIONS.push({
  id: 'SC149', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'media',
  svg: '<svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg" style="max-width:300px"><text x="150" y="18" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Organizacion del Estado Colombiano</text><rect x="20" y="35" width="80" height="35" fill="#E3F2FD" stroke="#1565C0" stroke-width="2" rx="5"/><text x="60" y="57" text-anchor="middle" font-size="8" fill="#0D47A1" font-weight="bold">Ejecutiva</text><rect x="110" y="35" width="80" height="35" fill="#E8F5E9" stroke="#2E7D32" stroke-width="2" rx="5"/><text x="150" y="57" text-anchor="middle" font-size="8" fill="#1B5E20" font-weight="bold">Legislativa</text><rect x="200" y="35" width="80" height="35" fill="#FFF3E0" stroke="#E65100" stroke-width="2" rx="5"/><text x="240" y="57" text-anchor="middle" font-size="8" fill="#E65100" font-weight="bold">Judicial</text><rect x="60" y="90" width="180" height="25" fill="#F3E5F5" stroke="#7B1FA2" stroke-width="1.5" rx="4"/><text x="150" y="107" text-anchor="middle" font-size="7" fill="#6A1B9A">Organos de control</text><rect x="80" y="130" width="140" height="25" fill="#FCE4EC" stroke="#C2185B" stroke-width="1.5" rx="4"/><text x="150" y="147" text-anchor="middle" font-size="7" fill="#C2185B">Organos autonomos</text><rect x="30" y="170" width="240" height="25" fill="#E0F7FA" stroke="#00838F" stroke-width="1.5" rx="4"/><text x="150" y="187" text-anchor="middle" font-size="7" fill="#006064">Niveles territoriales: Deptos, Municipios</text></svg>',
  context: 'El diagrama muestra la estructura del Estado colombiano.',
  question: 'Cuales son las tres ramas del poder publico?',
  options: ['Ejecutiva, Legislativa y Judicial', 'Politica, Economica y Social', 'Nacional, Departamental y Municipal', 'Ejecutiva, Administrativa y Judicial'],
  correct: 0,
  explanation: {correct: 'La Constitucion de 1991 establece tres ramas: Ejecutiva, Legislativa y Judicial.',wrongs: ['Esas no son las ramas','Son niveles territoriales','La ejecutiva es administrativa']}
});

QUESTIONS.push({
  id: 'SC150', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'dificil',
  table: {headers: ['Articulo', 'Contenido'],rows: [['Art. 1', 'Colombia es un Estado Social de Derecho'],['Art. 13', 'Todos son iguales ante la ley'],['Art. 38', 'Derecho a participar en la politica'],['Art. 67', 'Derecho a la educacion']],caption: 'Articulos de la Constitucion de 1991'},
  question: 'Segun el Articulo 13, que principio se garantiza?',
  options: ['Igualdad ante la ley', 'Libertad de religion', 'Derecho a la educacion', 'Propiedad privada'],
  correct: 0,
  explanation: {correct: 'El Articulo 13 garantiza que todas las personas son iguales ante la ley.',wrongs: ['La religion esta en otro articulo','Educacion es articulo 67','Propiedad es articulo 58']}
});

QUESTIONS.push({
  id: 'SC151', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'facil',
  question: 'Que es el sufragio?',
  options: ['El derecho de los ciudadanos a votar', 'El deber de pagar impuestos', 'La obligacion de servir al ejercito', 'El derecho a la libre expresion'],
  correct: 0,
  explanation: {correct: 'El sufragio es el derecho politico de elegir representantes.',wrongs: ['Impuestos son deber','Ejercito es obligacion','Libre expresion es derecho civil']}
});

QUESTIONS.push({
  id: 'SC152', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'media',
  question: 'Cual es el periodo del Presidente de Colombia?',
  options: ['4 anos', '6 anos', '5 anos', '3 anos'],
  correct: 0,
  explanation: {correct: 'El periodo presidencial es de 4 anos.',wrongs: ['6 anos es en Mexico','5 anos es en Europa','3 anos es muy corto']}
});

QUESTIONS.push({
  id: 'SC153', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'dificil',
  table: {headers: ['Derecho', 'Tipo', 'Articulo'],rows: [['Vida', 'Fundamental', '11'],['Educacion', 'Economico-social', '67'],['Salud', 'Economico-social', '49'],['Trabajo', 'Economico-social', '25']],caption: 'Derechos en la Constitucion'},
  question: 'En que categoria se clasifica el derecho a la educacion?',
  options: ['Economico, social y cultural', 'Fundamental', 'Colectivo', 'Politico'],
  correct: 0,
  explanation: {correct: 'El articulo 67 establece la educacion como derecho economico, social y cultural.',wrongs: ['Los fundamentales son vida, libertad','Los colectivos son medio ambiente','Los politicos son sufragio']}
});

QUESTIONS.push({
  id: 'SC154', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'facil',
  question: 'Que es el poder constituyente?',
  options: ['Facultad del pueblo para crear la Constitucion', 'Poder del Presidente', 'Facultad del Congreso', 'Poder de los jueces'],
  correct: 0,
  explanation: {correct: 'El poder constituyente es la capacidad del pueblo para darse su Constitucion.',wrongs: ['Presidente es ejecutivo','Congreso es legislativo','Jueces son judiciales']}
});

QUESTIONS.push({
  id: 'SC155', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'media',
  question: 'Que es la separacion de poderes?',
  options: ['Los tres poderes se controlan mutuamente', 'El Presidente controla al Congreso', 'Los jueces hacen leyes', 'El Congreso controla al ejercito'],
  correct: 0,
  explanation: {correct: 'Cada rama del Estado actua como contrapeso de las otras.',wrongs: ['Presidente no controla Congreso','Jueces no hacen leyes','Ejercito es civil']}
});

QUESTIONS.push({
  id: 'SC156', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'dificil',
  question: 'Como se llama el mecanismo para proteger derechos fundamentales?',
  options: ['Tutela', 'Habeas corpus', 'Amparo', 'Referendo'],
  correct: 0,
  explanation: {correct: 'La accion de tutela protege derechos fundamentales rapidamente.',wrongs: ['Habeas corpus protege libertad','Amparo es de otros paises','Referendo es consulta popular']}
});

QUESTIONS.push({
  id: 'SC157', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'facil',
  question: 'Que es la soberania?',
  options: ['Poder del pueblo para gobernarse sin injerencia externa', 'Poder del ejercito', 'Capacidad economica', 'Autoridad del Presidente'],
  correct: 0,
  explanation: {correct: 'La soberania es el derecho de un pueblo a decidir sobre su gobierno.',wrongs: ['Defensa es del ejercito','No depende de economia','Presidente tiene autoridad limitada']}
});

QUESTIONS.push({
  id: 'SC158', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'media',
  table: {headers: ['Mecanismo', 'Descripcion'],rows: [['Referendo', 'Consulta para aprobar/rechazar ley'],['Plebiscito', 'Consulta sobre decisiones del Presidente'],['Iniciativa ciudadana', 'Propuesta de ley por ciudadanos'],['Revocatoria', 'Destituir a un elegido']],caption: 'Mecanismos de participacion'},
  question: 'Que mecanismo permite proponer leyes?',
  options: ['Iniciativa ciudadana', 'Referendo', 'Plebiscito', 'Revocatoria'],
  correct: 0,
  explanation: {correct: 'La iniciativa ciudadana permite presentar proyectos de ley.',wrongs: ['Referendo aprueba/rechaza leyes','Plebiscito es del Presidente','Revocatoria destituye']}
});

QUESTIONS.push({
  id: 'SC159', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'dificil',
  question: 'Que es la consulta previa?',
  options: ['Deber del Estado de consultar comunidades antes de decisiones que les afecten', 'Voto obligatorio', 'Elecciones internas', 'Proceso judicial'],
  correct: 0,
  explanation: {correct: 'Protege a comunidades indigenas y afrocolombianas ante megaproyectos.',wrongs: ['Voto es obligatorio diferente','Elecciones internas son de partidos','Proceso judicial es diferente']}
});

QUESTIONS.push({
  id: 'SC160', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'facil',
  question: 'Que es un partido politico?',
  options: ['Organizacion que busca el poder politico mediante elecciones', 'Grupo militar', 'Empresa privada', 'ONG'],
  correct: 0,
  explanation: {correct: 'Los partidos compiten en elecciones para governar.',wrongs: ['Grupos armados son ilegales','Empresas tienen fines economicos','ONG no son partidos']}
});

QUESTIONS.push({
  id: 'SC161', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'media',
  question: 'Que requisito se exige para crear un partido politico?',
  options: ['Recojer firmas y cumplir requisitos legales', 'Decision del Presidente', 'Aprobacion del ejercito', 'No hay requisitos'],
  correct: 0,
  explanation: {correct: 'Los partidos deben inscribirse ante la Registraduria.',wrongs: ['Presidente no crea partidos','Ejercito no interviene','Si hay requisitos']}
});

QUESTIONS.push({
  id: 'SC162', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'dificil',
  question: 'Que es la financiacion de campañas politicas?',
  options: ['Manejo de recursos para candidaturas', 'Pago de impuestos', 'Salarios de funcionarios', 'Deuda externa'],
  correct: 0,
  explanation: {correct: 'Regula como partidos y candidatos obtienen y gastan dinero.',wrongs: ['Impuestos son obligatorios','Salarios son independientes','Deuda externa es macroeconomia']}
});

QUESTIONS.push({
  id: 'SC163', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'facil',
  question: 'Que es el voto obligatorio?',
  options: ['Deber legal de votar en elecciones', 'Derecho a no votar', 'Solo en presidenciales', 'Voto secreto y voluntario'],
  correct: 0,
  explanation: {correct: 'En Colombia el voto es obligatorio para ciudadanos habilitados.',wrongs: ['Es deber, no solo derecho','Es para todas las elecciones','Es secreto pero obligatorio']}
});

QUESTIONS.push({
  id: 'SC164', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'media',
  table: {headers: ['Institucion', 'Funcion'],rows: [['Congresso', 'Hacer leyes'],['Presidencia', 'Ejecutar politicas'],['Corte Suprema', 'Administrar justicia'],['Fiscalia', 'Investigar delitos']],caption: 'Instituciones del Estado'},
  question: 'Cual institucion hace leyes?',
  options: ['Congreso de la Republica', 'Presidencia', 'Corte Suprema', 'Fiscalia'],
  correct: 0,
  explanation: {correct: 'El Congreso es la rama Legislativa.',wrongs: ['Presidencia ejecuta','Corte Suprema administra justicia','Fiscalia investiga']}
});

QUESTIONS.push({
  id: 'SC165', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'dificil',
  question: 'Que es el control constitucional?',
  options: ['Revisar si las leyes cumplen la Constitucion', 'Controlar el gasto publico', 'Vigilar elecciones', 'Dirigir politica exterior'],
  correct: 0,
  explanation: {correct: 'La Corte Constitucional revisa la constitucionalidad de leyes.',wrongs: ['Gasto lo controla Contraloria','Elecciones las vigila Registraduria','Politica exterior la maneja Cancilleria']}
});

QUESTIONS.push({
  id: 'SC166', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'facil',
  question: 'Que es la ciudadania?',
  options: ['Conjunto de derechos y deberes en sociedad', 'Solo derecho a votar', 'Obligacion de pagar impuestos', 'Cargo de Presidente'],
  correct: 0,
  explanation: {correct: 'La ciudadania incluye derechos y deberes.',wrongs: ['Es mas que votar','Impuestos es un deber','Presidencia es un cargo']}
});

QUESTIONS.push({
  id: 'SC167', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'media',
  question: 'Que entidad administra un departamento?',
  options: ['Gobernacion', 'Alcaldia', 'Presidencia', 'Corte Suprema'],
  correct: 0,
  explanation: {correct: 'El Gobernador es la autoridad departamental.',wrongs: ['Alcaldia es municipal','Presidencia es nacional','Corte Suprema es judicial']}
});

QUESTIONS.push({
  id: 'SC168', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'dificil',
  question: 'Que es la descentralizacion administrativa?',
  options: ['Transferir competencias a entes territoriales', 'Centralizar el poder', 'Eliminar municipios', 'Crear ministerios'],
  correct: 0,
  explanation: {correct: 'Acerca el gobierno a los ciudadanos con autonomia local.',wrongs: ['Es lo contrario a centralizar','Municipios se fortalecen','No se crean ministerios']}
});
/**
 * Sociales Parte 2 - SC169 - SC194
 */

// ===== GEOGRAFIA Y TERRITORIO =====

QUESTIONS.push({
  id: 'SC169', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'facil',
  question: 'Cuantas regiones naturales tiene Colombia?',
  options: ['Seis', 'Cuatro', 'Tres', 'Ocho'],
  correct: 0,
  explanation: {correct: 'Colombia tiene seis regiones naturales: Andina, Caribe, Pacifica, Orinoquia, Amazonia y Insular.',wrongs: ['4 es muy pocas','3 no son todas','8 son mas']}
});

QUESTIONS.push({
  id: 'SC170', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'media',
  svg: '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="max-width:300px"><text x="150" y="18" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Mapa de Colombia - Regiones</text><path d="M80,50 L120,40 L160,60 L180,50 L220,80 L200,120 L160,110 L120,130 L80,100 Z" fill="#A5D6A7" stroke="#2E7D32" stroke-width="2"/><text x="150" y="90" text-anchor="middle" font-size="9" fill="#1B5E20" font-weight="bold">COLOMBIA</text><circle cx="150" cy="75" r="3" fill="#C62828"/><text x="150" y="68" text-anchor="middle" font-size="7" fill="#C62828">Bogota</text><circle cx="115" cy="55" r="2" fill="#1565C0"/><text x="115" y="48" text-anchor="middle" font-size="6" fill="#1565C0">Medellin</text></svg>',
  question: 'Cual es la region mas poblada de Colombia?',
  options: ['Andina', 'Caribe', 'Pacifico', 'Orinoquia'],
  correct: 0,
  explanation: {correct: 'La region Andina concentra el 75% de la poblacion.',wrongs: ['Caribe es la segunda','Pacifico tiene menor poblacion','Orinoquia esta en desarrollo']}
});

QUESTIONS.push({
  id: 'SC171', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'facil',
  question: 'Cual es la capital de Colombia?',
  options: ['Bogota D.C.', 'Medellin', 'Cali', 'Barranquilla'],
  correct: 0,
  explanation: {correct: 'Bogota es la capital desde la Colonia.',wrongs: ['Medellin es segunda ciudad','Cali es tercera','Barranquilla es puerto']}
});

QUESTIONS.push({
  id: 'SC172', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'media',
  question: 'Cuantos departamentos tiene Colombia?',
  options: ['Treinta y dos', 'Cuarenta y cinco', 'Veinte y cuatro', 'Treinta y seis'],
  correct: 0,
  explanation: {correct: 'Colombia tiene 32 departamentos y el Distrito Capital.',wrongs: ['45 no son tantos','24 son muy pocos','36 no es correcto']}
});

QUESTIONS.push({
  id: 'SC173', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'dificil',
  table: {headers: ['Region', 'Caracteristica'],rows: [['Andina', 'Montanas y valles fertiles'],['Caribe', 'Costa y tierra caliente'],['Pacifico', 'Pluviosidad extrema'],['Amazonia', 'Selva tropical']],caption: 'Regiones de Colombia'},
  question: 'Que region tiene la mayor pluviosidad?',
  options: ['Pacifico', 'Andina', 'Caribe', 'Amazonia'],
  correct: 0,
  explanation: {correct: 'El Pacifico recibe hasta 9000mm anuales.',wrongs: ['Andina tiene variedad','Caribe es seco','Amazonia es humeda pero menos']}
});

QUESTIONS.push({
  id: 'SC174', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'facil',
  question: 'Que rio atraviesa a Bogota?',
  options: ['Rio Bogota', 'Rio Magdalena', 'Rio Cauca', 'Rio Atrato'],
  correct: 0,
  explanation: {correct: 'El Rio Bogota cruza la sabana.',wrongs: ['Magdalena es mas largo','Cauca esta en el Valle','Atrato es del Choco']}
});

QUESTIONS.push({
  id: 'SC175', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'media',
  question: 'Cual es el rio mas largo de Colombia?',
  options: ['Rio Magdalena', 'Rio Cauca', 'Rio Atrato', 'Rio Orinoco'],
  correct: 0,
  explanation: {correct: 'El Magdalena tiene 1558 km y desemboca en el Caribe.',wrongs: ['Cauca es el segundo','Atrato es navegable','Orinoco es fronterizo']}
});

QUESTIONS.push({
  id: 'SC176', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'dificil',
  question: 'Que departamento es el mas grande?',
  options: ['Amazonas', 'Meta', 'Vichada', 'Caqueta'],
  correct: 0,
  explanation: {correct: 'Amazonas tiene 109,665 km\u00B2.',wrongs: ['Meta es el segundo','Vichada es extenso','Caqueta es menor']}
});

QUESTIONS.push({
  id: 'SC177', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'facil',
  question: 'Que region tiene Bogota?',
  options: ['Andina', 'Caribe', 'Amazonia', 'Orinoquia'],
  correct: 0,
  explanation: {correct: 'Bogota esta en la Sabana de Bogota, region Andina.',wrongs: ['Caribe es el norte','Amazonia es el sur','Orinoquia es el oriente']}
});

QUESTIONS.push({
  id: 'SC178', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'media',
  question: 'Que es el Eje Cafetero?',
  options: ['Region de cultivation de cafe', 'Rio principal', 'Montana volcanic', 'Puerto maritimo'],
  correct: 0,
  explanation: {correct: 'El Eje Cafetero (Caldas, Quindio, Risaralda) es zona cafetera.',wrongs: ['No es rio','No es volcanica','No es puerto']}
});

QUESTIONS.push({
  id: 'SC179', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'dificil',
  table: {headers: ['Departamento', 'Capital'],rows: [['Antioquia', 'Medellin'],['Valle del Cauca', 'Cali'],['Atlantico', 'Barranquilla'],['Bolivar', 'Cartagena']],caption: 'Capitales departamentales'},
  question: 'Cual es la capital de Antioquia?',
  options: ['Medellin', 'Envigado', 'Itagui', 'Bello'],
  correct: 0,
  explanation: {correct: 'Medellin es la capital y ciudad mas grande de Antioquia.',wrongs: ['Envigado es municipio','Itagui es municipio','Bello es municipio']}
});

QUESTIONS.push({
  id: 'SC180', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'facil',
  question: 'Cual es el pico mas alto de Colombia?',
  options: ['Pico Cristobal Colon', 'Nevado del Ruiz', 'Cerro del Quindio', 'Sierra Nevada'],
  correct: 0,
  explanation: {correct: 'Cristobal Colon tiene 5,775 msnm.',wrongs: ['Ruiz es activo','Cerro es menor','Sierra Nevada es menor']}
});

QUESTIONS.push({
  id: 'SC181', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'media',
  question: 'Que costa tiene Colombia al norte?',
  options: ['Caribe', 'Pacifico', 'Atlantico', 'Indico'],
  correct: 0,
  explanation: {correct: 'Colombia tiene costa en el Mar Caribe al norte.',wrongs: ['Pacifico es al oeste','Atlantico es el mar','Indico no esta']}
});

QUESTIONS.push({
  id: 'SC182', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'dificil',
  question: 'Que departamento produce mas petroleo?',
  options: ['Meta', 'Casane', 'Santander', 'Arauca'],
  correct: 0,
  explanation: {correct: 'El Meta es el principal productor de petroleo.',wrongs: ['Casane tiene gas','Santander produce algo','Arauca tiene campos']}
});

QUESTIONS.push({
  id: 'SC183', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'facil',
  question: 'Que limita al oriente de Colombia?',
  options: ['Venezuela y Brasil', 'Peru y Ecuador', 'Panama', 'Mar Caribe'],
  correct: 0,
  explanation: {correct: 'Colombia limita al oriente con Venezuela y Brasil.',wrongs: ['Peru y Ecuador son al sur','Panama es al noroeste','Caribe es al norte']}
});

QUESTIONS.push({
  id: 'SC184', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'media',
  question: 'Que es el Cauca?',
  options: ['Rio y departamento en el suroeste', 'Montana en el norte', 'Costa del Pacifico', 'Desierto del oriente'],
  correct: 0,
  explanation: {correct: 'El Cauca es departamento y rio en el suroeste colombiano.',wrongs: ['No es montana','No es costa','No es desierto']}
});

QUESTIONS.push({
  id: 'SC185', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'dificil',
  question: 'Que isla colombiana esta en el Caribe?',
  options: ['San Andres', 'Gorgona', 'Malpelo', 'Fuerte'],
  correct: 0,
  explanation: {correct: 'San Andres y Providencia son islas colombianas en el Caribe.',wrongs: ['Gorgona esta en el Pacifico','Malpelo esta en el Pacifico','Fuerte no es isla']}
});

QUESTIONS.push({
  id: 'SC186', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'facil',
  question: 'Cual es la region mas pequena?',
  options: ['Insular', 'Andina', 'Caribe', 'Pacifico'],
  correct: 0,
  explanation: {correct: 'La region Insular es la mas pequena.',wrongs: ['Andina es extensa','Caribe es amplia','Pacifico es amplia']}
});

QUESTIONS.push({
  id: 'SC187', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'media',
  question: 'Que rios forman la frontera con Venezuela?',
  options: ['Orinoco y Meta', 'Magdalena y Cauca', 'Atrato y Patia', 'Sinu y San Jorge'],
  correct: 0,
  explanation: {correct: 'El Orinoco y el Meta son rios fronterizos con Venezuela.',wrongs: ['Magdalena y Cauca son internos','Atrato y Patia son del sur','Sinu y San Jorge son internos']}
});

QUESTIONS.push({
  id: 'SC188', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'dificil',
  table: {headers: ['Pais', 'Frontera'],rows: [['Venezuela', 'Oriente'],['Brasil', 'Sur y oriente'],['Peru', 'Sur'],['Ecuador', 'Sur']],caption: 'Paises fronterizos'},
  question: 'Con que pais limita Colombia al suroeste?',
  options: ['Ecuador', 'Peru', 'Brasil', 'Venezuela'],
  correct: 0,
  explanation: {correct: 'Ecuador limita al suroeste.',wrongs: ['Peru es al sur','Brasil es al sur-orient','Venezuela es al oriente']}
});

// ===== HISTORIA DE COLOMBIA =====

QUESTIONS.push({
  id: 'SC189', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'facil',
  question: 'En que ano llegaron los espanoles a Colombia?',
  options: ['1499', '1492', '1500', '1525'],
  correct: 0,
  explanation: {correct: 'Alonso de Ojeda llego en 1499.',wrongs: ['1492 fue America','1500 fue despues','1525 fue Roldan']}
});

QUESTIONS.push({
  id: 'SC190', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'media',
  question: 'Quien fundo a Bogota?',
  options: ['Jimenez de Quesada', 'Alonso de Ojeda', 'Martin Fernandez', 'Pedro de Heredia'],
  correct: 0,
  explanation: {correct: 'Jimenez de Quesada fundo a Santa Fe de Bogota en 1538.',wrongs: ['Ojeda fue conquistador','Fernandez no fundo','Heredia fundo a Cartagena']}
});

QUESTIONS.push({
  id: 'SC191', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'dificil',
  question: 'Que evento inicio la independencia?',
  options: ['Grito de Independencia 1810', 'Batalla de Boyaca', 'Reconquista espanola', 'Constitucion de 1886'],
  correct: 0,
  explanation: {correct: 'El 20 de julio de 1810 fue el Grito de Independencia.',wrongs: ['Boyaca fue en 1819','Reconquista fue 1815','Constitucion fue despues']}
});

QUESTIONS.push({
  id: 'SC192', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'facil',
  question: 'En que ano se logro la independencia definitiva?',
  options: ['1819', '1810', '1830', '1851'],
  correct: 0,
  explanation: {correct: 'La Batalla de Boyaca (1819) aseguro la independencia.',wrongs: ['1810 fue el grito','1830 fue la muerte de Bolivar','1851 fue la abolicion']}
});

QUESTIONS.push({
  id: 'SC193', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'media',
  table: {headers: ['Fecha', 'Evento'],rows: [['20 julio 1810', 'Grito de Independencia'],['7 agosto 1819', 'Batalla de Boyaca'],['30 agosto 1828', 'Reforma constitucional'],['24 mayo 1828', 'Golpe de Estado']],caption: 'Eventos de la independencia'},
  question: 'Que paso el 7 de agosto de 1819?',
  options: ['Batalla de Boyaca', 'Grito de Independencia', 'Muerte de Bolivar', 'Constitucion'],
  correct: 0,
  explanation: {correct: 'La Batalla de Boyaca fue decisiva.',wrongs: ['Grito fue en 1810','Muerte fue en 1830','Constitucion fue despues']}
});

QUESTIONS.push({
  id: 'SC194', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'dificil',
  question: 'Quien fue el Libertador de Colombia?',
  options: ['Simon Bolivar', 'Francisco de Paula Santander', 'Antonio Nunez', 'Camilo Torres'],
  correct: 0,
  explanation: {correct: 'Simon Bolivar es conocido como El Libertador.',wrongs: ['Santander fue Presidente','Nunez fue politico','Torres fue reformador']}
});
/**
 * Sociales Parte 3 - SC195 - SC220
 */

// ===== ECONOMIA Y SOCIEDAD =====

QUESTIONS.push({
  id: 'SC195', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'facil',
  question: 'Que es el PIB?',
  options: ['Producto Interno Bruto', 'Persona Interna con Beneficio', 'Politica de Inversion Bancaria', 'Precio Interno del Bono'],
  correct: 0,
  explanation: {correct: 'El PIB mide la actividad economica total del pais.',wrongs: ['No es persona','No es politica','No es precio de bono']}
});

QUESTIONS.push({
  id: 'SC196', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'media',
  table: {headers: ['Indicador', 'Que mide'],rows: [['PIB', 'Riqueza total'],['Desempleo', 'Trabajo'],['Inflacion', 'Precios'],['Pobreza', 'Nivel de vida']],caption: 'Indicadores economicos'},
  question: 'Que indicador mide la inflacion?',
  options: ['Nivel general de precios', 'Cantidad de empleo', 'Riqueza total', 'Nivel de pobreza'],
  correct: 0,
  explanation: {correct: 'La inflacion es el aumento sostenido de precios.',wrongs: ['Empleo es desempleo','Riqueza es PIB','Pobreza es otro indicador']}
});

QUESTIONS.push({
  id: 'SC197', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'facil',
  question: 'Que sectores componen la economia?',
  options: ['Primario, secundario y terciario', 'Publico y privado', 'Nacional y regional', 'Formal e informal'],
  correct: 0,
  explanation: {correct: 'El sector primario (agricultura), secundario (industria) y terciario (servicios).',wrongs: ['Publico/privado son tipos','Nacional/regional son escalas','Formal/informal son tipos de empleo']}
});

QUESTIONS.push({
  id: 'SC198', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'dificil',
  question: 'Que es la economia informal?',
  options: ['Actividades economicas no reguladas ni tributadas', 'Empresas grandes', 'Sector industrial', 'Comercio internacional'],
  correct: 0,
  explanation: {correct: 'La informalidad escapa al control estatal.',wrongs: ['Grandes empresas son formales','Industria es secundario','Comercio internacional es globalizado']}
});

QUESTIONS.push({
  id: 'SC199', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'facil',
  question: 'Que es el comercio exterior?',
  options: ['Compra y venta entre paises', 'Comercio local', 'Agricultura', 'Industria'],
  correct: 0,
  explanation: {correct: 'El comercio exterior usa exportaciones e importaciones.',wrongs: ['Local es interno','Agricultura es primario','Industria es secundario']}
});

QUESTIONS.push({
  id: 'SC200', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'media',
  question: 'Que es la globalizacion?',
  options: ['Integracion economica y cultural mundial', 'Desarrollo local', 'Aislamiento', 'Agricultura'],
  correct: 0,
  explanation: {correct: 'La globalizacion conecta economias y culturas.',wrongs: ['Lo contrario a integracion','Aislamiento es lo opuesto','Agricultura es primario']}
});

QUESTIONS.push({
  id: 'SC201', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'dificil',
  table: {headers: ['Organismo', 'Funcion'],rows: [['ONU', 'Paz y cooperacion'],['FMI', 'Estabilidad monetaria'],['Banco Mundial', 'Desarrollo'],['OMC', 'Comercio internacional']],caption: 'Organismos internacionales'},
  question: 'Que organismo busca la estabilidad monetaria?',
  options: ['Fondo Monetario Internacional', 'ONU', 'Banco Mundial', 'OMC'],
  correct: 0,
  explanation: {correct: 'El FMI promueve la estabilidad financiera global.',wrongs: ['ONU es paz','Banco Mundial es desarrollo','OMC es comercio']}
});

QUESTIONS.push({
  id: 'SC202', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'facil',
  question: 'Que es la pobreza?',
  options: ['Necesidad de recursos basicos', 'Exceso de riqueza', 'Educacion alta', 'Salud buena'],
  correct: 0,
  explanation: {correct: 'La pobreza implica carencia de necesidades basicas.',wrongs: ['Es lo contrario','Educacion alta es privilegio','Salud buena es bienestar']}
});

QUESTIONS.push({
  id: 'SC203', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'media',
  question: 'Que es la desigualdad social?',
  options: ['Distribucion desigual de recursos y oportunidades', 'Igualdad para todos', 'Educacion universal', 'Salud universal'],
  correct: 0,
  explanation: {correct: 'La desigualdad crea brechas entre ricos y pobres.',wrongs: ['Es lo contrario','Educacion universal reduce desigualdad','Salud universal tambien']}
});

QUESTIONS.push({
  id: 'SC204', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'dificil',
  question: 'Que es la economia de mercado?',
  options: ['Sistema donde oferta y demanda determinan precios', 'Control total del Estado', 'Agricultura de subsistencia', 'Planificacion centralizada'],
  correct: 0,
  explanation: {correct: 'La oferta y demanda regulan el mercado.',wrongs: ['Control estatal es planificacion','Agricultura subsistencia es rural','Planificacion centralizada es socialismo']}
});

QUESTIONS.push({
  id: 'SC205', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'facil',
  question: 'Que es el desempleo?',
  options: ['Personas que buscan trabajo y no encuentran', 'Trabajo informal', 'Subempleo', 'Empleo formal'],
  correct: 0,
  explanation: {correct: 'Desempleados buscan activamente empleo.',wrongs: ['Informal es diferente','Subempleo es parcial','Formal es lo opuesto']}
});

QUESTIONS.push({
  id: 'SC206', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'media',
  question: 'Que es la inflacion?',
  options: ['Aumento generalizado de precios', 'Baja de precios', 'Estabilidad monetaria', 'Crecimiento economico'],
  correct: 0,
  explanation: {correct: 'La inflacion reduce el poder adquisitivo.',wrongs: ['Deflacion es baja precios','Estabilidad es lo contrario','Crecimiento puede coexistir']}
});

// ===== MEDIO AMBIENTE Y DESARROLLO =====

QUESTIONS.push({
  id: 'SC207', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'facil',
  question: 'Que es el desarrollo sostenible?',
  options: ['Satisfacer necesidades sin comprometer generaciones futuras', 'Crecimiento economico rapido', 'Explotacion de recursos', 'Industrializacion'],
  correct: 0,
  explanation: {correct: 'Equilibrio entre economia, sociedad y ambiente.',wrongs: ['Crecimiento rapido puede dañar','Explotacion es insostenible','Industrializacion contamina']}
});

QUESTIONS.push({
  id: 'SC208', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'media',
  table: {headers: ['Problema', 'Consecuencia'],rows: [['Deforestacion', 'Perdida de bosques'],['Contaminacion', 'Degradacion ambiental'],['Sequias', 'Escasez de agua'],['Erosion', 'Perdida de suelo']],caption: 'Problemas ambientales'},
  question: 'Que problema causa perdida de bosques?',
  options: ['Deforestacion', 'Contaminacion', 'Sequias', 'Erosion'],
  correct: 0,
  explanation: {correct: 'La deforestacion elimina cobertura boscosa.',wrongs: ['Contaminacion es diferente','Sequias afectan agua','Erosion afecta suelo']}
});

QUESTIONS.push({
  id: 'SC209', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'dificil',
  question: 'Que es la huella de carbono?',
  options: ['Cantidad de gases de efecto invernadero emitidos', 'Superficie forestal', 'Cantidad de agua consumida', 'Numero de especies'],
  correct: 0,
  explanation: {correct: 'Mide el impacto ambiental por CO2 emitido.',wrongs: ['Superficie forestal es cobertura','Agua es huella hidrica','Especies es biodiversidad']}
});

QUESTIONS.push({
  id: 'SC210', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'facil',
  question: 'Que es la biodiversidad?',
  options: ['Variedad de especies vivas en un territorio', 'Contaminacion del agua', 'Deforestacion', 'Crecimiento economico'],
  correct: 0,
  explanation: {correct: 'Colombia es el segundo pais mas biodiverso.',wrongs: ['Contaminacion es negativa','Deforestacion es problema','Crecimiento es economico']}
});

QUESTIONS.push({
  id: 'SC211', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'media',
  question: 'Que pais es el segundo mas biodiverso del mundo?',
  options: ['Colombia', 'Brasil', 'Peru', 'Indonesia'],
  correct: 0,
  explanation: {correct: 'Colombia tiene el 10% de la biodiversidad mundial.',wrongs: ['Brasil es el primero','Peru es biodiverso','Indonesia es alto']}
});

QUESTIONS.push({
  id: 'SC212', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'dificil',
  question: 'Que es el calentamiento global?',
  options: ['Aumento de la temperatura promedio del planeta', 'Enfriamiento climatico', 'Sequias locales', 'Contaminacion del agua'],
  correct: 0,
  explanation: {correct: 'Es causado por gases de efecto invernadero.',wrongs: ['Es lo contrario','Sequias es un efecto','Contaminacion del agua es otro problema']}
});

QUESTIONS.push({
  id: 'SC213', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'facil',
  question: 'Que es el reciclaje?',
  options: ['Proceso de reusar materiales', 'Quemar basura', 'Enterrar desechos', 'Lanzar al mar'],
  correct: 0,
  explanation: {correct: 'El reciclaje reduce residuos y reutiliza materiales.',wrongs: ['Quemar contamina','Enterrar ocupa espacio','Lanzar al mar contamina']}
});

QUESTIONS.push({
  id: 'SC214', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'media',
  question: 'Que es el recurso natural renovable?',
  options: ['Se regenera con el tiempo', 'Se agota permanentemente', 'Es artificial', 'No existe'],
  correct: 0,
  explanation: {correct: 'Agua, bosques, energia solar son renovables.',wrongs: ['Petroleo es no renovable','Artificial no es natural','Si existe']}
});

QUESTIONS.push({
  id: 'SC215', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'dificil',
  table: {headers: ['Recurso', 'Tipo'],rows: [['Petroleo', 'No renovable'],['Agua', 'Renovable'],['Bosques', 'Renovable'],['Minerales', 'No renovable']],caption: 'Clasificacion de recursos'},
  question: 'Que recurso es no renovable?',
  options: ['Petroleo', 'Agua', 'Bosques', 'Energia solar'],
  correct: 0,
  explanation: {correct: 'El petroleo tarda millones de anos en formarse.',wrongs: ['Agua se regenera','Bosques crecen','Solar es inagotable']}
});

QUESTIONS.push({
  id: 'SC216', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'facil',
  question: 'Que es el saneamiento ambiental?',
  options: ['Manejo adecuado de desechos y agua', 'Contaminar el aire', 'Deforestar', 'Construir sin permiso'],
  correct: 0,
  explanation: {correct: 'Protege la salud y el medio ambiente.',wrongs: ['Lo contrario','Lo contrario','Es ilegal']}
});

QUESTIONS.push({
  id: 'SC217', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'media',
  question: 'Que es la energia renovable?',
  options: ['Proviene de fuentes inagotables o que se regeneran', 'Proviene de petroleo', 'Contamina mucho', 'Es nuclear'],
  correct: 0,
  explanation: {correct: 'Solar, eolica, hidrica son renovables.',wrongs: ['Petroleo es no renovable','Renovable no contamina','Nuclear no es renovable']}
});

QUESTIONS.push({
  id: 'SC218', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'dificil',
  question: 'Que es un Parque Nacional Natural?',
  options: ['Area protegida para conservar ecosistemas', 'Zona urbana', 'Area industrial', 'Puerto maritimo'],
  correct: 0,
  explanation: {correct: 'Colombia tiene 60 Parques Nacionales Naturales.',wrongs: ['No es urbana','No es industrial','No es puerto']}
});

QUESTIONS.push({
  id: 'SC219', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'facil',
  question: 'Que es la huella ecologica?',
  options: ['Impacto ambiental de una persona o pais', 'Numero de arboles', 'Cantidad de agua', 'Superficie terrestre'],
  correct: 0,
  explanation: {correct: 'Mide el consumo de recursos naturales.',wrongs: ['Arboles es cobertura','Agua es huella hidrica','Superficie es territorial']}
});

QUESTIONS.push({
  id: 'SC220', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'media',
  question: 'Que es el turismo sostenible?',
  options: ['Turismo que respeta ambiente y cultura local', 'Turismo masivo', 'Turismo sin regulacion', 'Turismo exclusivo'],
  correct: 0,
  explanation: {correct: 'Busca minimizar impacto negativo.',wrongs: ['Masivo daña','Sin regulacion es ilegal','Exclusivo es limitante']}
});
/**
 * Sociales Final - SC221 - SC250
 * 30 preguntas
 */

// ===== HISTORIA Y CULTURA =====

QUESTIONS.push({
  id: 'SC221', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'facil',
  question: 'En que ano se firmo el Acuerdo de Paz con las FARC?',
  options: ['2016', '2012', '2018', '2014'],
  correct: 0,
  explanation: {correct: 'El Acuerdo de Paz se firmo en 2016.',wrongs: ['2012 fue inicio de negociaciones','2018 fue post-firma','2014 fue durante negociaciones']}
});

QUESTIONS.push({
  id: 'SC222', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'media',
  table: {headers: ['Decada', 'Evento importante'],rows: [['1990', 'Apertura economica'],['2000', 'Seguridad democratica'],['2010', 'Procesos de paz'],['2020', 'Pandemia COVID-19']],caption: 'Eventos recientes'},
  question: 'Que evento marco la decada del 2010?',
  options: ['Procesos de paz', 'Apertura economica', 'Seguridad democratica', 'Pandemia'],
  correct: 0,
  explanation: {correct: 'Los procesos de paz fueron clave en los 2010.',wrongs: ['Apertura fue en los 90','Seguridad democratica en 2000','Pandemia fue 2020']}
});

QUESTIONS.push({
  id: 'SC223', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'dificil',
  question: 'Que es la memoria historica?',
  options: ['Registro y analisis del conflicto armado', 'Monumentos historicos', 'Museos nacionales', 'Libros de texto'],
  correct: 0,
  explanation: {correct: 'La memoria historica documenta el conflicto.',wrongs: ['Monumentos son patrimonio','Museos son instituciones','Libros son educativos']}
});

QUESTIONS.push({
  id: 'SC224', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'facil',
  question: 'Que es el posconflicto?',
  options: ['Periodo despues de un conflicto armado', 'Durante el conflicto', 'Antes del conflicto', 'Un nuevo conflicto'],
  correct: 0,
  explanation: {correct: 'El posconflicto es la etapa posterior al conflicto.',wrongs: ['Durante es durante','Antes es pre-conflicto','No es un nuevo conflicto']}
});

QUESTIONS.push({
  id: 'SC225', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'media',
  question: 'Que buscan las victimas del conflicto?',
  options: ['Verdad, justicia y reparacion', 'Venganza', 'Olvido', 'Silencio'],
  correct: 0,
  explanation: {correct: 'Las victimas buscan verdad, justicia y reparacion.',wrongs: ['Venganza no es justicia','Olvido no sana','Silencio no resuelve']}
});

QUESTIONS.push({
  id: 'SC226', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'dificil',
  table: {headers: ['Concepto', 'Definicion'],rows: [['Verdad', 'Conocer lo que paso'],['Justicia', 'Sancion a responsables'],['Reparacion', 'Compensacion a victimas'],['Garantias de no repeticion', 'Evitar que vuelva a pasar']],caption: 'Principios de justicia transicional'},
  question: 'Que principio busca evitar que el conflicto se repita?',
  options: ['Garantias de no repeticion', 'Verdad', 'Justicia', 'Reparacion'],
  correct: 0,
  explanation: {correct: 'Las garantias buscan prevenir futuros conflictos.',wrongs: ['Verdad es saber','Justicia es sancion','Reparacion es compensacion']}
});

QUESTIONS.push({
  id: 'SC227', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'facil',
  question: 'Que es la JEP?',
  options: ['Jurisdiccion Especial para la Paz', 'Junta de Educacion Publica', 'Justicia Economica del Pais', 'Jurado Electoral Permanente'],
  correct: 0,
  explanation: {correct: 'La JEP juzga delitos del conflicto armado.',wrongs: ['Junta educativa es diferente','Justicia economica no existe','Jurado electoral es diferente']}
});

QUESTIONS.push({
  id: 'SC228', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'media',
  question: 'Que es la Comision de la Verdad?',
  options: ['Organismo que esclarece el conflicto', 'Organismo judicial', 'Organismo politico', 'Organismo militar'],
  correct: 0,
  explanation: {correct: 'La Comision busca esclarecer lo occurred.',wrongs: ['La JEP es judicial','No es politico','No es militar']}
});

QUESTIONS.push({
  id: 'SC229', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'dificil',
  question: 'Que grupo armado firmo el Acuerdo de Paz en 2016?',
  options: ['FARC', 'ELN', 'AUC', 'M-19'],
  correct: 0,
  explanation: {correct: 'Las FARC firmaron el Acuerdo de Paz.',wrongs: ['ELN continua en armas','AUC se desmovilizo en 2006','M-19 se desmovilizo en 1990']}
});

QUESTIONS.push({
  id: 'SC230', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'facil',
  question: 'Que es el narcotrafico?',
  options: ['Tráfico ilegal de drogas', 'Transporte legal', 'Comercio internacional', 'Turismo'],
  correct: 0,
  explanation: {correct: 'El narcotrafico es el trafico ilegal de estupefacientes.',wrongs: ['Transporte legal no es ilegal','Comercio internacional es legal','Turismo es diferente']}
});

QUESTIONS.push({
  id: 'SC231', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'media',
  question: 'Que efecto social tiene el narcotrafico?',
  options: ['Violencia, corrupcion y desplazamiento', 'Solo violencia', 'Solo corrupcion', 'Solo desplazamiento'],
  correct: 0,
  explanation: {correct: 'El narcotrafico genera multiples problemas sociales.',wrongs: ['No es solo violencia','No es solo corrupcion','No es solo desplazamiento']}
});

QUESTIONS.push({
  id: 'SC232', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'dificil',
  table: {headers: ['Impacto', 'Ejemplo'],rows: [['Violencia', 'Homicidios y amenazas'],['Corrupcion', 'Soborno de funcionarios'],['Desplazamiento', 'Poblacion desplazada'],['Destruccion ambiental', 'Deforestacion por cultivos']],caption: 'Impactos del narcotrafico'},
  question: 'Que impacto tiene el narcotrafico en el ambiente?',
  options: ['Destruccion ambiental por cultivos', 'Solo violencia', 'Solo corrupcion', 'Solo desplazamiento'],
  correct: 0,
  explanation: {correct: 'Los cultivos ilicitos deforestan.',wrongs: ['Violencia es humano','Corrupcion es politica','Desplazamiento es social']}
});

QUESTIONS.push({
  id: 'SC233', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'facil',
  question: 'Que es la corrupcion?',
  options: ['Uso indebido del poder para beneficio propio', 'Poder politico', 'Servicio publico', 'Democracia'],
  correct: 0,
  explanation: {correct: 'La corrupcion es abuso de poder.',wrongs: ['Poder politico es legitimo','Servicio publico es legal','Democracia es sistema']}
});

QUESTIONS.push({
  id: 'SC234', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'media',
  question: 'Que institucion controla la corrupcion en Colombia?',
  options: ['Fiscalia y Procuraduria', 'Congreso', 'Presidencia', 'Ejercito'],
  correct: 0,
  explanation: {correct: 'Fiscalia investiga y Procuraduria vigila.',wrongs: ['Congreso hace leyes','Presidencia ejecuta','Ejecuto defiende']}
});

QUESTIONS.push({
  id: 'SC235', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'dificil',
  question: 'Que es el lavado de activos?',
  options: ['Ocultar dinero de actividades ilegales', 'Lavar ropa', 'Limpiar calles', 'Banar dinero'],
  correct: 0,
  explanation: {correct: 'El lavado de activos oculta origenes ilegales.',wrongs: ['No es literal','No es limpiar','No es banar']}
});

QUESTIONS.push({
  id: 'SC236', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'facil',
  question: 'Que es la economia naranja?',
  options: ['Economia basada en creatividad e innovacion', 'Solo agricultura naranja', 'Solo industria textil', 'Solo turismo'],
  correct: 0,
  explanation: {correct: 'La economia naranja es creativa e innovadora.',wrongs: ['No es solo agricultura','No es solo textil','No es solo turismo']}
});

QUESTIONS.push({
  id: 'SC237', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'media',
  question: 'Que sectores incluye la economia naranja?',
  options: ['Diseno, cine, musica, software', 'Solo agricultura', 'Solo mineria', 'Solo petroleo'],
  correct: 0,
  explanation: {correct: 'Incluye industrias creativas y culturales.',wrongs: ['Agricultura es primario','Mineria es primario','Petroleo es primario']}
});

QUESTIONS.push({
  id: 'SC238', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'dificil',
  question: 'Que ventaja tiene la economia naranja para Colombia?',
  options: ['Genera empleo de calidad y reduce desigualdad', 'Solo genera dinero', 'Solo es para ricos', 'Solo funciona en ciudades'],
  correct: 0,
  explanation: {correct: 'La economia naranja incluye y genera empleo.',wrongs: ['No es solo dinero','No es solo para ricos','Funciona en rural tambien']}
});

QUESTIONS.push({
  id: 'SC239', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'facil',
  question: 'Que es el emprendimiento?',
  options: ['Crear un negocio o proyecto propio', 'Solo tener dinero', 'Solo trabajar para otro', 'Solo estudiar'],
  correct: 0,
  explanation: {correct: 'Emprender es crear algo nuevo.',wrongs: ['No es solo tener dinero','No es trabajar para otro','No es solo estudiar']}
});

QUESTIONS.push({
  id: 'SC240', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'media',
  question: 'Que factor es clave para el emprendimiento?',
  options: ['Innovacion y persistencia', 'Solo dinero', 'Solo suerte', 'Solo estudios'],
  correct: 0,
  explanation: {correct: 'Innovacion y persistencia son clave.',wrongs: ['Dinero ayuda pero no es clave','Suerte no es confiable','Estudios no garantizan exito']}
});

QUESTIONS.push({
  id: 'SC241', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'dificil',
  table: {headers: ['Factor', 'Importancia'],rows: [['Innovacion', 'Crear soluciones nuevas'],['Persistencia', 'No rendirse ante fracasos'],['Aprendizaje', 'Mejorar continuamente'],['Trabajo en equipo', 'Complementar habilidades']],caption: 'Factores de exito'},
  question: 'Que factor implica no rendirse ante fracasos?',
  options: ['Persistencia', 'Innovacion', 'Aprendizaje', 'Trabajo en equipo'],
  correct: 0,
  explanation: {correct: 'Persistencia es seguir a pesar de fracasos.',wrongs: ['Innovacion es crear','Aprendizaje es mejorar','Trabajo en equipo es colaborar']}
});

QUESTIONS.push({
  id: 'SC242', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'facil',
  question: 'Que es el comercio justo?',
  options: ['Comercio que paga precios justos a productores', 'Solo vender caro', 'Solo comprar barato', 'Solo exportar'],
  correct: 0,
  explanation: {correct: 'El comercio justo garantiza precios justos.',wrongs: ['No es vender caro','No es comprar barato','No es solo exportar']}
});

QUESTIONS.push({
  id: 'SC243', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'media',
  question: 'Que beneficio tiene el comercio justo?',
  options: ['Mejora condiciones de vida de productores', 'Solo genera ganancias', 'Solo es para ricos', 'Solo funciona en Europa'],
  correct: 0,
  explanation: {correct: 'Beneficia directamente a productores.',wrongs: ['No es solo ganancias','No es solo para ricos','Funciona en Colombia tambien']}
});

QUESTIONS.push({
  id: 'SC244', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'dificil',
  question: 'Que es la responsabilidad social empresarial?',
  options: ['Compromiso de la empresa con la sociedad', 'Solo ganar dinero', 'Solo pagar impuestos', 'Solo contratar empleados'],
  correct: 0,
  explanation: {correct: 'Las empresas tienen compromiso social.',wrongs: ['No es solo ganar','Impuestos es obligacion legal','Contratar es obligacion']}
});

QUESTIONS.push({
  id: 'SC245', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'facil',
  question: 'Que es el desarrollo sostenible?',
  options: ['Desarrollo que no compromete recursos futuros', 'Solo crecimiento economico', 'Solo proteccion ambiental', 'Solo inclusion social'],
  correct: 0,
  explanation: {correct: 'Equilibra economia, ambiente y sociedad.',wrongs: ['No es solo economia','No es solo ambiente','No es solo sociedad']}
});

QUESTIONS.push({
  id: 'SC246', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'media',
  question: 'Que objetivo tiene la Agenda 2030?',
  options: ['Desarrollo sostenible para todos', 'Solo eliminar pobreza', 'Solo proteger ambiente', 'Solo crecer economicamente'],
  correct: 0,
  explanation: {correct: 'La Agenda 2030 busca desarrollo sostenible integral.',wrongs: ['No es solo pobreza','No es solo ambiente','No es solo economia']}
});

QUESTIONS.push({
  id: 'SC247', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'dificil',
  table: {headers: ['ODS', 'Meta'],rows: [['ODS 1', 'Fin de la pobreza'],['ODS 5', 'Igualdad de genero'],['ODS 13', 'Accion climatica'],['ODS 17', 'Alianzas']],caption: 'ODS seleccionados'},
  question: 'Cual ODS trata sobre igualdad de genero?',
  options: ['ODS 5', 'ODS 1', 'ODS 13', 'ODS 17'],
  correct: 0,
  explanation: {correct: 'El ODS 5 es Igualdad de genero.',wrongs: ['ODS 1 es pobreza','ODS 13 es clima','ODS 17 es alianzas']}
});

QUESTIONS.push({
  id: 'SC248', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'facil',
  question: 'Que es la ciudadania activa?',
  options: ['Participacion responsable en la sociedad', 'Solo votar', 'Solo protestar', 'Solo pagar impuestos'],
  correct: 0,
  explanation: {correct: 'La ciudadania activa incluye participar.',wrongs: ['No es solo votar','No es solo protestar','No es solo pagar impuestos']}
});

QUESTIONS.push({
  id: 'SC249', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'media',
  question: 'Que acciones tiene un ciudadano activo?',
  options: ['Votar, vigilar y proponer', 'Solo votar', 'Solo quejarse', 'Solo criticar'],
  correct: 0,
  explanation: {correct: 'Un ciudadano activo participa de multiples formas.',wrongs: ['No es solo votar','No es solo quejarse','No es solo criticar']}
});

QUESTIONS.push({
  id: 'SC250', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'dificil',
  question: 'Que es la gobernanza?',
  options: ['Arte de governar con transparencia y participacion', 'Solo tener poder', 'Solo dar ordenes', 'Solo cobrar impuestos'],
  correct: 0,
  explanation: {correct: 'La gobernanza es transparente y participativa.',wrongs: ['No es solo poder','No es solo ordenes','No es solo impuestos']}
});
/**
 * Sociales finales - SC251-SC260
 */

QUESTIONS.push({
  id: 'SC251', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'facil',
  question: 'Que es la planeacion estrategica?',
  options: ['Definir metas y acciones a largo plazo', 'Solo planificar el dia', 'Solo organizar tareas', 'Solo presupuestar'],
  correct: 0,
  explanation: {correct: 'La planeacion estrategica define objetivos a largo plazo.',wrongs: ['No es solo diaria','No es solo organizar','No es solo presupuesto']}
});

QUESTIONS.push({
  id: 'SC252', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'media',
  table: {headers: ['Nivel', 'Ejemplo'],rows: [['Nacional', 'Presupuesto general'],['Departamental', 'Planes de desarrollo'],['Municipal', 'Planes de ordenamiento territorial'],['Comunitario', 'Proyectos participativos']],caption: 'Niveles de planeacion'},
  question: 'En que nivel se hacen los Planes de Ordenamiento Territorial?',
  options: ['Municipal', 'Nacional', 'Departamental', 'Comunitario'],
  correct: 0,
  explanation: {correct: 'Los POT son municipales.',wrongs: ['Nacional es general','Departamental es intermedio','Comunitario es local']}
});

QUESTIONS.push({
  id: 'SC253', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'dificil',
  question: 'Que es la competitividad de un pais?',
  options: ['Capacidad de generar riqueza sostenible', 'Solo producir mas', 'Solo exportar', 'Solo tener recursos'],
  correct: 0,
  explanation: {correct: 'Competitividad es generar riqueza sostenible.',wrongs: ['No es solo producir','No es solo exportar','Recursos no garantizan competitividad']}
});

QUESTIONS.push({
  id: 'SC254', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'facil',
  question: 'Que es la productividad?',
  options: ['Producir mas con los mismos recursos', 'Solo trabajar mas horas', 'Solo tener mas empleados', 'Solo usar maquinaria'],
  correct: 0,
  explanation: {correct: 'Productividad es eficiencia en la produccion.',wrongs: ['No es solo horas','No es solo empleados','No es solo maquinaria']}
});

QUESTIONS.push({
  id: 'SC255', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'media',
  question: 'Que factor influye mas en la productividad?',
  options: ['Educacion y tecnologia', 'Solo clima', 'Solo ubicacion', 'Solo tamanho del pais'],
  correct: 0,
  explanation: {correct: 'Educacion y tecnologia aumentan productividad.',wrongs: ['Clima afecta agricultura','Ubicacion ayuda pero no es clave','Tamaño no garantiza nada']}
});

QUESTIONS.push({
  id: 'SC256', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'dificil',
  table: {headers: ['Indicador', 'Que mide'],rows: [['IDH', 'Desarrollo humano'],['PIB per capita', 'Riqueza promedio'],['Gini', 'Desigualdad'],['Informalidad', 'Empleo no regulado']],caption: 'Indicadores sociales'},
  question: 'Que indicador mide la desigualdad de ingresos?',
  options: ['Coeficiente de Gini', 'IDH', 'PIB per capita', 'Tasa de informalidad'],
  correct: 0,
  explanation: {correct: 'El Gini mide distribucion del ingreso.',wrongs: ['IDH es desarrollo humano','PIB per capita es riqueza','Informalidad es empleo']}
});

QUESTIONS.push({
  id: 'SC257', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'facil',
  question: 'Que es el capital social?',
  options: ['Redes de confianza y cooperacion entre personas', 'Solo dinero', 'Solo propiedades', 'Solo empresas'],
  correct: 0,
  explanation: {correct: 'El capital social son relaciones de confianza.',wrongs: ['No es dinero','No es propiedades','No es empresas']}
});

QUESTIONS.push({
  id: 'SC258', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'media',
  question: 'Que beneficio tiene el capital social?',
  options: ['Facilita cooperacion y desarrollo comunitario', 'Solo genera dinero', 'Solo da poder', 'Solo crea amistades'],
  correct: 0,
  explanation: {correct: 'El capital social impulsa el desarrollo.',wrongs: ['No es solo dinero','No es solo poder','No es solo amistades']}
});

QUESTIONS.push({
  id: 'SC259', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'dificil',
  question: 'Que es la resiliencia comunitaria?',
  options: ['Capacidad de recuperarse de crisis', 'Solo tener dinero', 'Solo tener lideres', 'Solo tener infraestructura'],
  correct: 0,
  explanation: {correct: 'La resiliencia es recuperarse de adversidades.',wrongs: ['No es solo dinero','No es solo lideres','No es solo infraestructura']}
});

QUESTIONS.push({
  id: 'SC260', area: 'sociales', areaName: 'Sociales y Ciudadania', difficulty: 'facil',
  question: 'Que es la inclusion productiva?',
  options: ['Integrar a personas vulnerables en la economia', 'Solo dar empleo', 'Solo dar dinero', 'Solo dar educación'],
  correct: 0,
  explanation: {correct: 'La inclusion productiva integra economicamente.',wrongs: ['No es solo empleo','No es solo dinero','No es solo educacion']}
});
