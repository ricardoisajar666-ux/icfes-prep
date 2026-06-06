/**
 * Preguntas de Lectura Critica - Banco ampliado
 * 89 preguntas: LC150 - LC238
 */

// ===== COMPRENSION LECTORA =====

QUESTIONS.push({
  id: 'LC150', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'facil',
  context: 'El Gobierno Nacional anuncio un plan de reconstruccion para las zonas afectadas por las inundaciones del ano pasado. El plan incluye viviendas nuevas, vias de acceso y centros de salud.',
  question: 'Cual es la idea principal del texto?',
  options: ['El plan de reconstruccion para zonas inundadas', 'Las causas de las inundaciones', 'El costo del plan', 'La critica al Gobierno'],
  correct: 0,
  explanation: {correct: 'El texto habla principalmente del plan de reconstruccion.',wrongs: ['No menciona causas','No menciona costo','No hay critica']}
});

QUESTIONS.push({
  id: 'LC151', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'media',
  context: 'La educacion virtual ha crecido enormemente en los ultimos anos. Si bien ofrece flexibilidad y acceso desde cualquier lugar, tambien presenta retos como la falta de interaccion social y la necesidad de conectividad estable.',
  question: 'Que problema plantea la educacion virtual?',
  options: ['Falta de interaccion social y conectividad', 'Alto costo de los libros', 'Falta de profesores', 'Horarios fijos'],
  correct: 0,
  explanation: {correct: 'El texto menciona la falta de interaccion y conectividad.',wrongs: ['Libros no se mencionan','Profesores no son el problema','Horarios son flexibles']}
});

QUESTIONS.push({
  id: 'LC152', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'dificil',
  table: {headers: ['Afirmacion', 'Texto'],rows: [['La educacion virtual es flexible', 'Si'],['Presenta retos tecnicos', 'Si'],['Es mejor que la presencial', 'No se menciona'],['Requiere conectividad', 'Si']],caption: 'Analisis del texto'},
  question: 'Que afirmacion NO esta respaldada por el texto?',
  options: ['La educacion virtual es mejor que la presencial', 'La educacion virtual es flexible', 'Presenta retos tecnicos', 'Requiere conectividad'],
  correct: 0,
  explanation: {correct: 'El texto no dice que sea mejor, solo menciona ventajas y retos.',wrongs: ['Si se menciona flexibilidad','Si se mencionan retos','Si se menciona conectividad']}
});

QUESTIONS.push({
  id: 'LC153', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'facil',
  context: 'Las abejas son fundamentales para la polinizacion de cultivos. Sin ellas, la produccion de alimentos como frutas y verduras se veria gravemente afectada.',
  question: 'Por que son importantes las abejas?',
  options: ['Por su rol en la polinizacion', 'Por producir miel', 'Por su color', 'Por su tamano'],
  correct: 0,
  explanation: {correct: 'El texto resalta su importancia en la polinizacion.',wrongs: ['Miel no se menciona','Color no es relevante','Tamano no es relevante']}
});

QUESTIONS.push({
  id: 'LC154', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'media',
  context: 'El acelerado crecimiento urbano de Medellin ha generado desafios en transporte, vivienda y servicios publicos. Las comunas mas afectadas son aquellas con menor acceso a infraestructura basica.',
  question: 'Que grupo esta mas afectado?',
  options: ['Comunas con menor acceso a servicios', 'El centro de la ciudad', 'Los barrios residenciales', 'Las zonas industriales'],
  correct: 0,
  explanation: {correct: 'El texto dice que las comunas con menor acceso son las mas afectadas.',wrongs: ['Centro no se menciona','Residenciales tienen mas acceso','Industriales no son communas']}
});

QUESTIONS.push({
  id: 'LC155', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'dificil',
  table: {headers: ['Fragmento', 'Interpretacion'],rows: [['Acelerado crecimiento', 'Expansión rapida de la ciudad'],['Desafios en transporte', 'Problemas de movilidad'],['Menor acceso a infraestructura', 'Desigualdad social'],['Comunas afectadas', 'Zonas vulnerables']],caption: 'Analisis del texto'},
  question: 'Que conclusion se puede inferir?',
  options: ['El crecimiento urbano genera desigualdad', 'Medellin no crece', 'Las comunas son ricas', 'El transporte es perfecto'],
  correct: 0,
  explanation: {correct: 'El crecimiento genera desigualdad entre zonas.',wrongs: ['Si crece','Las comunas tienen menos','Transporte tiene problemas']}
});

QUESTIONS.push({
  id: 'LC156', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'facil',
  context: 'El agua es un recurso vital para toda forma de vida. Sin embargo, el desperdicio y la contaminacion amenazan este recurso en muchas regiones del pais.',
  question: 'Cual es el problema del agua?',
  options: ['Desperdicio y contaminacion', 'Falta de lluvia', 'Exceso de agua', 'Alto costo'],
  correct: 0,
  explanation: {correct: 'El texto senala desperdicio y contaminacion.',wrongs: ['Lluvia no se menciona','No hay exceso','Costo no se menciona']}
});

QUESTIONS.push({
  id: 'LC157', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'media',
  context: 'La lectura desde temprana edad fortalece el vocabulario, la comprension y el pensamiento critico de los ninos. Por eso, es fundamental promover el habito de leer en el hogar y la escuela.',
  question: 'Segun el texto, que beneficios trae leer?',
  options: ['Vocabulario, comprension y pensamiento critico', 'Solo entretenimiento', 'Mejor caligrafia', 'Mas amigos'],
  correct: 0,
  explanation: {correct: 'El texto menciona tres beneficios especificos.',wrongs: ['No solo es entretenimiento','Caligrafia no se menciona','Amigos no se mencionan']}
});

QUESTIONS.push({
  id: 'LC158', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'dificil',
  context: 'El turismo sostenible busca minimizar el impacto negativo sobre el medio ambiente y las comunidades locales. Los visitantes deben respetar las normas ambientales y culturales del lugar que visitan.',
  question: 'Cual es el objetivo del turismo sostenible?',
  options: ['Minimizar impacto negativo sobre ambiente y comunidades', 'Generar la mayor cantidad de dinero', 'Construir mas hoteles', 'Atraer mas turistas'],
  correct: 0,
  explanation: {correct: 'El objetivo es minimizar impacto negativo.',wrongs: ['No es solo dinero','No es construir','No es atraer mas turistas']}
});

QUESTIONS.push({
  id: 'LC159', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'facil',
  context: 'La diversidad cultural enriquece a las sociedades. Cada cultura aporta tradiciones, conocimientos y formas de ver el mundo que enriquecen el patrimonio colectivo.',
  question: 'Que aporta la diversidad cultural?',
  options: ['Tradiciones, conocimientos y perspectivas', 'Solo comida', 'Solo musica', 'Solo ropa'],
  correct: 0,
  explanation: {correct: 'El texto menciona multiples aportes.',wrongs: ['No es solo comida','No es solo musica','No es solo ropa']}
});

QUESTIONS.push({
  id: 'LC160', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'media',
  context: 'Las redes sociales han transformado la forma en que las personas se comunican. Si bien facilitan la conexion a distancia, tambien pueden generar dependencia y problemas de salud mental como ansiedad.',
  question: 'Que problema negativo menciona el texto?',
  options: ['Dependencia y ansiedad', 'Falta de internet', 'Costo de dispositivos', 'Horarios de uso'],
  correct: 0,
  explanation: {correct: 'El texto menciona dependencia y ansiedad.',wrongs: ['Internet no es el problema','Costo no se menciona','Horarios no se mencionan']}
});

QUESTIONS.push({
  id: 'LC161', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'dificil',
  context: 'El Parque Nacional Natural Tayrona atrae miles de visitantes cada ano. Sin embargo, la afluencia masiva ha generado contaminacion y deterioro de los ecosistemas. Las autoridades han implementado restricciones para proteger el area.',
  question: 'Causa-effecto: Que causo la afluencia masiva?',
  options: ['Contaminacion y deterioro de ecosistemas', 'Mayor proteccion', 'Mas empleo', 'Mejor infraestructura'],
  correct: 0,
  explanation: {correct: 'La afluencia masiva causo contaminacion y deterioro.',wrongs: ['Proteccion es la respuesta','Empleo no se menciona','Infraestructura no se menciona']}
});

QUESTIONS.push({
  id: 'LC162', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'facil',
  context: 'El reciclaje es una practica que permite reutilizar materiales y reducir la cantidad de basura que llega a los rellenos sanitarios.',
  question: 'Para que sirve el reciclaje?',
  options: ['Reutilizar materiales y reducir basura', 'Crear basura', 'Quemar residuos', 'Enterrar todo'],
  correct: 0,
  explanation: {correct: 'El reciclaje reutiliza y reduce basura.',wrongs: ['No crea basura','No quema','No entierra todo']}
});

QUESTIONS.push({
  id: 'LC163', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'media',
  table: {headers: ['Afirmacion', 'Falso/Verdadero'],rows: [['El reciclaje reutiliza materiales', 'Verdadero'],['Reduce la basura en rellenos', 'Verdadero'],['Elimina toda la basura', 'Falso'],['Es una practica ambiental', 'Verdadero']],caption: 'Sobre el reciclaje'},
  question: 'Cual afirmacion es falsa segun el texto?',
  options: ['El reciclaje elimina toda la basura', 'El reciclaje reutiliza materiales', 'Reduce la basura en rellenos', 'Es una practica ambiental'],
  correct: 0,
  explanation: {correct: 'No elimina toda la basura, solo reduce.',wrongs: ['Si reutiliza','Si reduce','Si es practica ambiental']}
});

QUESTIONS.push({
  id: 'LC164', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'dificil',
  context: 'El cambio climatico es uno de los desafios mas urgentes del siglo XXI. Las temperaturas globales han aumentado significativamente, provocando derretimiento de glaciares, aumento del nivel del mar y fenomenos climaticos extremos.',
  question: 'Cual es la consecuencia mas grave mencionada?',
  options: ['Aumento del nivel del mar', 'Lluvias mas frecuentes', 'Mas turismo', 'Mejor agricultura'],
  correct: 0,
  explanation: {correct: 'El aumento del nivel del mar amenaza costas e islas.',wrongs: ['Lluvias no se mencionan como consecuencia','Turismo no es consecuencia','Agricultura no mejora']}
});

QUESTIONS.push({
  id: 'LC165', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'facil',
  context: 'La dieta balanceada incluye frutas, verduras, proteinas y carbohidratos en proporciones adecuadas. Una buena alimentacion contribuye a mantener la salud y prevenir enfermedades.',
  question: 'Que promueve la dieta balanceada?',
  options: ['Salud y prevencion de enfermedades', 'Solo bajar de peso', 'Solo ganar musculos', 'Solo ganar energia'],
  correct: 0,
  explanation: {correct: 'El texto dice que promueve salud y prevencion.',wrongs: ['No es solo bajar de peso','No es solo musculos','No es solo energia']}
});

QUESTIONS.push({
  id: 'LC166', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'media',
  context: 'Las energias renovables como la solar y la eolica son alternativas limpias a los combustibles fosiles. Su uso ayuda a reducir las emisiones de gases de efecto invernadero.',
  question: 'Que beneficio tienen las energias renovables?',
  options: ['Reducir emisiones de gases', 'Aumentar el petroleo', 'Contaminar mas', 'Costar mas'],
  correct: 0,
  explanation: {correct: 'Las renovables reducen emisiones de gases.',wrongs: ['No aumentan petroleo','No contaminan mas','No cuestan mas necesariamente']}
});

QUESTIONS.push({
  id: 'LC167', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'dificil',
  context: 'El patrimonio historico de una ciudad refleja su identidad cultural. La preservacion de edificios antiguos, monuments y tradiciones permite a las futuras generaciones conocer y valorar su historia.',
  question: 'Que busca la preservacion del patrimonio?',
  options: ['Permitir a futuras generaciones conocer su historia', 'Construir edificios nuevos', 'Vender terrenos', 'Demoler lo antiguo'],
  correct: 0,
  explanation: {correct: 'La preservacion busca mantener la historia para el futuro.',wrongs: ['No es construir nuevos','No es vender','No es demoler']}
});

QUESTIONS.push({
  id: 'LC168', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'facil',
  context: 'El ejercicio fisico regular mejora la circulacion sanguinea, fortalece los musculos y ayuda a controlar el peso corporal. Los expertos recomiendan al menos 30 minutos de actividad fisica diaria.',
  question: 'Cuantos minutos de ejercicio se recomiendan?',
  options: ['Al menos 30 minutos', '10 minutos', '60 minutos', '120 minutos'],
  correct: 0,
  explanation: {correct: 'Los expertos recomiendan al menos 30 minutos.',wrongs: ['10 es muy poco','60 es mas de lo recomendado','120 es excesivo']}
});

QUESTIONS.push({
  id: 'LC169', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'media',
  context: 'El comercio justo busca que los productores reciban un precio justo por sus productos. Esta practica beneficia especialmente a comunidades rurales en paises en desarrollo.',
  question: 'A quien beneficia el comercio justo?',
  options: ['A productores rurales en paises en desarrollo', 'Solo a empresas grandes', 'Solo a consumidores', 'Solo al Gobierno'],
  correct: 0,
  explanation: {correct: 'El texto dice que beneficia a comunidades rurales.',wrongs: ['No solo a empresas','No solo consumidores','No solo Gobierno']}
});

QUESTIONS.push({
  id: 'LC170', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'dificil',
  table: {headers: ['Elemento', 'Funcion'],rows: [['Titulo', 'Resume el tema'],['Introduccion', 'Presenta el problema'],['Desarrollo', 'Explica argumentos'],['Conclusion', 'Sintetiza ideas']],caption: 'Estructura de un texto'},
  question: 'Que funcion cumple la introduccion?',
  options: ['Presentar el problema o tema', 'Resolver el problema', 'Dar opinion personal', 'Resumir todo'],
  correct: 0,
  explanation: {correct: 'La introduccion presenta el problema o tema.',wrongs: ['Resolver es del desarrollo','Opinion es del autor','Resumen es conclusion']}
});

QUESTIONS.push({
  id: 'LC171', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'facil',
  context: 'La contaminacion del aire en las ciudades causa problemas respiratorios, especialmente en ninos y ancianos. Reducir el uso de vehiculos privados puede mejorar significativamente la calidad del aire.',
  question: 'Que solucion propone el texto?',
  options: ['Reducir vehiculos privados', 'Construir mas vias', 'Usar mas carros', 'Quemar basura'],
  correct: 0,
  explanation: {correct: 'Reducir vehiculos mejora calidad del aire.',wrongs: ['Mas vias no reducen contaminacion','Mas carros la empeoran','Quemar basura contamina']}
});

QUESTIONS.push({
  id: 'LC172', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'media',
  context: 'Las bibliotecas publicas son espacios fundamentales para el acceso al conocimiento. Ademas de libros, ofrecen acceso a internet, talleres y actividades culturales para toda la comunidad.',
  question: 'Que ofrecen las bibliotecas ademas de libros?',
  options: ['Internet, talleres y actividades culturales', 'Solo libros', 'Solo internet', 'Solo talleres'],
  correct: 0,
  explanation: {correct: 'El texto menciona internet, talleres y actividades.',wrongs: ['No solo libros','No solo internet','No solo talleres']}
});

QUESTIONS.push({
  id: 'LC173', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'dificil',
  context: 'La desigualdad social se manifiesta en diferencias de acceso a education, salud y oportunidades economicas. Reducir estas brechas es esencial para el desarrollo equitativo de una sociedad.',
  question: 'Que es necesario para el desarrollo equitativo?',
  options: ['Reducir brechas de acceso a education y salud', 'Aumentar la poblacion', 'Construir mas carreteras', 'Producir mas alimentos'],
  correct: 0,
  explanation: {correct: 'Reducir brechas es esencial para desarrollo equitativo.',wrongs: ['Poblacion no es el factor','Carreteras no reducen brechas','Alimentos no son el factor principal']}
});

QUESTIONS.push({
  id: 'LC174', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'facil',
  context: 'Los animales en peligro de extincion requieren proteccion urgente. La destrucion de habitat, la caza ilegal y la contaminacion son las principales amenazas para su supervivencia.',
  question: 'Que amenaza a los animales en peligro?',
  options: ['Destruccion de habitat y caza ilegal', 'Solo la caza', 'Solo la contaminacion', 'Solo el cambio climatico'],
  correct: 0,
  explanation: {correct: 'El texto menciona habitat y caza ilegal como principales amenazas.',wrongs: ['No es solo caza','No es solo contaminacion','Cambio climatico no se menciona']}
});

QUESTIONS.push({
  id: 'LC175', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'media',
  context: 'El transporte publico eficiente reduce la congestion vehicular, disminuye la contaminacion y mejora la movilidad de los ciudadanos. Invertir en buses articulados y metrocable ha sido una solucion efectiva en Medellin.',
  question: 'Que solucion ha sido efectiva en Medellin?',
  options: ['Buses articulados y metrocable', 'Mas carros', 'Mas peajes', 'Mas vias'],
  correct: 0,
  explanation: {correct: 'El texto menciona buses articulados y metrocable.',wrongs: ['Mas carros empeoran','Mas peajes no son solucion','Mas vias no reducen congestion']}
});

QUESTIONS.push({
  id: 'LC176', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'dificil',
  context: 'La gentrificacion es un proceso donde la renovacion de barrios populares desplaza a sus habitantes originales debido al aumento de precios de vivienda. Si bien mejora la infraestructura, genera perdida de identidad cultural.',
  question: 'Que problema genera la gentrificacion?',
  options: ['Desplazamiento de habitantes originales', 'Mejor vivienda para todos', 'Mas empleo', 'Mas servicios'],
  correct: 0,
  explanation: {correct: 'El desplazamiento es el problema principal.',wrongs: ['No mejora para todos','Empleo no se menciona','Servicios no son el problema']}
});

QUESTIONS.push({
  id: 'LC177', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'facil',
  context: 'La educacion ambiental busca crear conciencia sobre la importancia de cuidar el medio ambiente. A traves de talleres y campanas, se promueven practicas como el reciclaje y el ahorro de agua.',
  question: 'Que busca la educacion ambiental?',
  options: ['Crear conciencia sobre el cuidado del ambiente', 'Ensenar solo ciencia', 'Dar dinero', 'Construir escuelas'],
  correct: 0,
  explanation: {correct: 'El objetivo es crear conciencia ambiental.',wrongs: ['No es solo ciencia','No es dar dinero','No es construir']}
});

QUESTIONS.push({
  id: 'LC178', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'media',
  table: {headers: ['Practica', 'Beneficio'],rows: [['Reciclaje', 'Reduce basura'],['Ahorro de agua', 'Conserva recurso'],['Compostaje', 'Fertiliza suelo'],['Plantacion', 'Reforesta']],caption: 'Practicas ambientales'},
  question: 'Que beneficio tiene el compostaje?',
  options: ['Fertilizar el suelo', 'Reducir basura', 'Ahorrar agua', 'Plantar arboles'],
  correct: 0,
  explanation: {correct: 'El compostaje convierte residuos en fertilizante.',wrongs: ['Reducir basura es del reciclaje','Ahorrar agua es otro tema','Plantar es reforestacion']}
});

QUESTIONS.push({
  id: 'LC179', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'dificil',
  context: 'El indice de desarrollo humano (IDH) mide el progreso de un pais en tres dimensiones: salud, educacion y nivel de vida. Un IDH alto indica mejor calidad de vida para sus habitantes.',
  question: 'Que dimensiones mide el IDH?',
  options: ['Salud, educacion y nivel de vida', 'Solo economia', 'Solo politica', 'Solo cultura'],
  correct: 0,
  explanation: {correct: 'El IDH mide salud, educacion y nivel de vida.',wrongs: ['No es solo economia','No es solo politica','No es solo cultura']}
});

QUESTIONS.push({
  id: 'LC180', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'facil',
  context: 'Las becas educativas permiten que estudiantes de bajos recursos accedan a education de calidad. Esto contribuye a reducir las brechas sociales y a formar profesionales comprometidos con su comunidad.',
  question: 'Para que sirven las becas?',
  options: ['Acceder a education de calidad', 'Solo dar dinero', 'Solo pagar libros', 'Solo viajar'],
  correct: 0,
  explanation: {correct: 'Las becas facilitan acceso a education.',wrongs: ['No es solo dinero','No es solo libros','No es solo viajar']}
});

QUESTIONS.push({
  id: 'LC181', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'media',
  context: 'El节约 de energia electrica en los hogares reduce el gasto familiar y contribuye a la preservacion del medio ambiente. Apagar luces innecesarias y usar electrodomesticos eficientes son acciones sencillas pero efectivas.',
  question: 'Que beneficios tiene ahorrar energia?',
  options: ['Reduce gasto familiar y protege el ambiente', 'Solo ahorra dinero', 'Solo protege ambiente', 'No tiene beneficios'],
  correct: 0,
  explanation: {correct: 'Beneficia economia y ambiente.',wrongs: ['No es solo dinero','No es solo ambiente','Si tiene beneficios']}
});

QUESTIONS.push({
  id: 'LC182', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'dificil',
  context: 'La urbanizacion acelerada en Colombia ha generado problemas como la falta de vivienda digna, la deficienteservicios publicos y la aumento de la inseguridad. Los planes de desarrollo urbano deben priorizar la calidad de vida de los ciudadanos.',
  question: 'Que deberian priorizar los planes de desarrollo?',
  options: ['La calidad de vida de los ciudadanos', 'Solo construir edificios', 'Solo mejorar carreteras', 'Solo atraer inversion'],
  correct: 0,
  explanation: {correct: 'La calidad de vida debe ser la prioridad.',wrongs: ['No es solo construir','No es solo carreteras','No es solo inversion']}
});

QUESTIONS.push({
  id: 'LC183', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'facil',
  context: 'El agua potable es un derecho humano fundamental. Sin embargo, millones de personas en el mundo no tienen acceso a agua limpia, lo que genera problemas de salud y desarrollo.',
  question: 'Que es el agua potable?',
  options: ['Un derecho humano fundamental', 'Un lujo', 'Solo para ricos', 'No es importante'],
  correct: 0,
  explanation: {correct: 'El agua potable es un derecho humano.',wrongs: ['No es un lujo','No es solo para ricos','Si es importante']}
});

QUESTIONS.push({
  id: 'LC184', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'media',
  context: 'Las cooperativas son organizaciones que funcionan con el principio de ayuda mutua. Sus miembros trabajan juntos para mejorar sus condiciones economicas y sociales, tomando decisiones de manera democratica.',
  question: 'Como toman decisiones las cooperativas?',
  options: ['De manera democratica', 'Solo el gerente', 'Solo el Gobierno', 'Al azar'],
  correct: 0,
  explanation: {correct: 'Las cooperativas son democraticas.',wrongs: ['No es solo gerente','No es Gobierno','No es al azar']}
});

QUESTIONS.push({
  id: 'LC185', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'dificil',
  table: {headers: ['Caracteristica', 'Cooperativa'],rows: [['Propiedad', 'De los miembros'],['Decisiones', 'Democraticas'],['Fin', 'Beneficio coleccion'],['Organizacion', 'Autogestion']],caption: 'Cooperativas'},
  question: 'Quien es dueño de una cooperativa?',
  options: ['Sus miembros', 'El Gobierno', 'Un empresario', 'Nadie'],
  correct: 0,
  explanation: {correct: 'Los miembros son dueños.',wrongs: ['Gobierno no es dueño','Empresario no es dueño','Alguien es dueño']}
});

QUESTIONS.push({
  id: 'LC186', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'facil',
  context: 'La participacion ciudadana es esencial para una democracia sana. Cuando los ciudadanos votan, proponen y vigilan, fortalecen las instituciones y mejoran la calidad de la politica.',
  question: 'Que fortalece la participacion ciudadana?',
  options: ['Las instituciones y la politica', 'Solo al Gobierno', 'Solo a los partidos', 'Solo a los politicos'],
  correct: 0,
  explanation: {correct: 'La participacion fortalece instituciones.',wrongs: ['No es solo Gobierno','No es solo partidos','No es solo politicos']}
});

QUESTIONS.push({
  id: 'LC187', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'media',
  context: 'El emprendimiento social busca resolver problemas de la comunidad a traves de soluciones innovadoras. Ejemplos incluyen empresas que producen energia solar para comunidades rurales o que reciclan residuos para crear nuevos productos.',
  question: 'Que busca el emprendimiento social?',
  options: ['Resolver problemas comunitarios con soluciones innovadoras', 'Solo ganar dinero', 'Solo crear empresas', 'Solo competir'],
  correct: 0,
  explanation: {correct: 'Busca resolver problemas sociales.',wrongs: ['No es solo dinero','No es solo crear empresas','No es solo competir']}
});

QUESTIONS.push({
  id: 'LC188', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'dificil',
  context: 'La transparencia en la gestion publica permite a los ciudadanos conocer como se administran los recursos del Estado. Herramientas como los presupuestos participativos y los portales de datos abiertos facilitan este control ciudadano.',
  question: 'Que facilita el control ciudadano?',
  options: ['Presupuestos participativos y datos abiertos', 'Solo votar', 'Solo protestar', 'Solo quejarse'],
  correct: 0,
  explanation: {correct: 'Presupuestos participativos y datos abiertos facilitan control.',wrongs: ['Votar es un medio','Protestar es otro medio','Quejarse no es control efectivo']}
});

QUESTIONS.push({
  id: 'LC189', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'facil',
  context: 'La memoria historica permite a las sociedades conocer y aprender de los hechos del pasado, especialmente de los conflictos y violencias. Esto contribuye a la construccion de paz y a la no repeticion.',
  question: 'Para que sirve la memoria historica?',
  options: ['Conocer el pasado para construir paz', 'Solo recordar', 'Solo olvidar', 'Solo castigar'],
  correct: 0,
  explanation: {correct: 'La memoria historica busca construir paz.',wrongs: ['No es solo recordar','No es olvidar','No es castigar']}
});

QUESTIONS.push({
  id: 'LC190', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'media',
  context: 'Los territorios etnicos en Colombia, como resguardos indigenas y consejos comunitarios afrocolombianos, tienen derechos colectivos protegidos por la Constitucion. Estos incluyen la tierra, la cultura y la autonomia.',
  question: 'Que derechos tienen los territorios etnicos?',
  options: ['Tierra, cultura y autonomia', 'Solo tierra', 'Solo cultura', 'Solo autonomia'],
  correct: 0,
  explanation: {correct: 'La Constitucion protege tierra, cultura y autonomia.',wrongs: ['No es solo tierra','No es solo cultura','No es solo autonomia']}
});

QUESTIONS.push({
  id: 'LC191', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'dificil',
  context: 'La investigacion cientifica es fundamental para el desarrollo de un pais. Los avances en salud, tecnologia y agricultura dependen de la inversion en ciencia y la formacion de investigadores.',
  question: 'Que depende de la inversion en ciencia?',
  options: ['Avances en salud, tecnologia y agricultura', 'Solo avances medicos', 'Solo avances militares', 'Solo avances agricolas'],
  correct: 0,
  explanation: {correct: 'La inversion en ciencia beneficia multiples sectores.',wrongs: ['No es solo salud','No es solo militar','No es solo agricultura']}
});

QUESTIONS.push({
  id: 'LC192', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'facil',
  context: 'La energia solar es una fuente limpia y renovable que utiliza la radiacion del sol para generar electricidad. Es una alternativa sostenible que reduce la dependencia de combustibles fosiles.',
  question: 'Que ventaja tiene la energia solar?',
  options: ['Es limpia y reduce dependencia de fosiles', 'Es la mas barata', 'Es la mas facil', 'Es la mas comun'],
  correct: 0,
  explanation: {correct: 'La solar es limpia y reduce dependencia de fosiles.',wrongs: ['No es la mas barata necesariamente','No es la mas facil','No es la mas comun']}
});

QUESTIONS.push({
  id: 'LC193', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'media',
  context: 'El mercado laboral colombiano presenta retos como la informalidad, la falta de oportunidades para jovenes y la brecha de genero. Las politicas de empleo deben enfocarse en formacion y formalizacion.',
  question: 'Cuales son retos del mercado laboral?',
  options: ['Informabilidad y falta de oportunidades', 'Solo informalidad', 'Solo juventud', 'Solo genero'],
  correct: 0,
  explanation: {correct: 'Informabilidad y falta de oportunidades son retos.',wrongs: ['No es solo informalidad','No es solo juventud','No es solo genero']}
});

QUESTIONS.push({
  id: 'LC194', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'dificil',
  table: {headers: ['Retos', 'Soluciones'],rows: [['Informabilidad', 'Formacion y formalizacion'],['Brecha de genero', 'Igualdad de oportunidades'],['Desempleo juvenil', 'Emprendimiento'],['Bajos salarios', 'Politicas salariales']],caption: 'Mercado laboral'},
  question: 'Que solucion se propone para la informabilidad?',
  options: ['Formacion y formalizacion', 'Mas impuestos', 'Mas regulacion', 'Mas despidos'],
  correct: 0,
  explanation: {correct: 'Formacion y formalizacion reducen informalidad.',wrongs: ['Impuestos no reducen informalidad','Regulacion no es suficiente','Despidos empeoran la situacion']}
});

QUESTIONS.push({
  id: 'LC195', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'facil',
  context: 'Las zonas rurales en Colombia enfrentan retos como el acceso limitado a servicios basicos, la falta de vias y la presencia de cultivos ilicitos. El desarrollo rural integral es una prioridad nacional.',
  question: 'Que es prioridad nacional?',
  options: ['El desarrollo rural integral', 'Solo construir carreteras', 'Solo eliminar cultivos', 'Solo traer empresas'],
  correct: 0,
  explanation: {correct: 'El desarrollo rural integral es prioridad.',wrongs: ['No es solo carreteras','No es solo eliminar cultivos','No es solo empresas']}
});

QUESTIONS.push({
  id: 'LC196', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'media',
  context: 'La economia naranja es un concepto que promueve la creatividad, la innovacion y la economia cultural. Incluye sectores como el diseno, la musica, el cine y las tecnologias creativas.',
  question: 'Que sectores incluye la economia naranja?',
  options: ['Diseno, musica, cine y tecnologias creativas', 'Solo agricultura', 'Solo industria', 'Solo comercio'],
  correct: 0,
  explanation: {correct: 'La economia naranja incluye sectores creativos.',wrongs: ['No es solo agricultura','No es solo industria','No es solo comercio']}
});

QUESTIONS.push({
  id: 'LC197', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'dificil',
  context: 'La planificacion territorial busca organizar el uso del suelo, la infraestructura y los servicios para mejorar la calidad de vida. Un buen plan considera aspectos ambientales, economicos y sociales.',
  question: 'Que aspectos considera un buen plan territorial?',
  options: ['Ambientales, economicos y sociales', 'Solo economicos', 'Solo sociales', 'Solo ambientales'],
  correct: 0,
  explanation: {correct: 'Un buen plan considera todos los aspectos.',wrongs: ['No es solo economico','No es solo social','No es solo ambiental']}
});

QUESTIONS.push({
  id: 'LC198', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'facil',
  context: 'La alfabetizacion digital es la capacidad de usar las tecnologias de informacion y comunicacion. En un mundo cada vez mas conectado, esta habilidad es esencial para participar en la sociedad.',
  question: 'Que es alfabetizacion digital?',
  options: ['Capacidad de usar tecnologias de informacion', 'Solo saber leer', 'Solo saber escribir', 'Solo usar celular'],
  correct: 0,
  explanation: {correct: 'Es usar tecnologias de informacion.',wrongs: ['No es solo leer','No es solo escribir','No es solo celular']}
});

QUESTIONS.push({
  id: 'LC199', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'media',
  context: 'El derecho a la salud garantiza que todas las personas tengan acceso a servicios de salud oportunos y de calidad. El sistema de salud colombiano ha tenido avances, pero ainda presenta desafios como la desigualdad de acceso.',
  question: 'Que desafio presenta el sistema de salud?',
  options: ['Desigualdad de acceso', 'Falta de hospitales', 'Falta de doctores', 'Falta de medicamentos'],
  correct: 0,
  explanation: {correct: 'La desigualdad de acceso es un desafio.',wrongs: ['Hospitales existen','Doctores hay','Medicamentos hay pero no para todos']}
});

QUESTIONS.push({
  id: 'LC200', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'dificil',
  context: 'La movilidad urbana sostenible promueve el uso de transporte publico, bicicletas y caminatas. Esto reduce emisiones, mejora la salud y hace las ciudades mas habitables. Bogota ha implementado ciclovias y transmilenio como parte de esta estrategia.',
  question: 'Que estrategia ha implementado Bogota?',
  options: ['Ciclovias y transmilenio', 'Mas carros', 'Mas peajes', 'Mas estacionamientos'],
  correct: 0,
  explanation: {correct: 'Ciclovias y transmilenio son estrategias de Bogota.',wrongs: ['Mas carros empeoran','Peajes no son estrategia','Estacionamientos no son solucion']}
});

QUESTIONS.push({
  id: 'LC201', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'facil',
  context: 'Los derechos de los consumidores protegen a las personas en sus compras. Incluyen el derecho a informacion clara, a la calidad del producto y a la reclamacion por danos.',
  question: 'Que derechos tienen los consumidores?',
  options: ['Informacion, calidad y reclamacion', 'Solo informacion', 'Solo calidad', 'Solo reclamacion'],
  correct: 0,
  explanation: {correct: 'Los consumidores tienen multiples derechos.',wrongs: ['No es solo informacion','No es solo calidad','No es solo reclamacion']}
});

QUESTIONS.push({
  id: 'LC202', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'media',
  table: {headers: ['Derecho', 'Descripcion'],rows: [['Informacion', 'Conocer caracteristicas del producto'],['Calidad', 'Producto en buenas condiciones'],['Reclamacion', 'Exigir solucion a danos'],['Devolucion', 'Devolver producto defectuoso']],caption: 'Derechos del consumidor'},
  question: 'Que permite el derecho a informacion?',
  options: ['Conocer caracteristicas del producto', 'Devolver producto', 'Exigir danos', 'Comprar mas'],
  correct: 0,
  explanation: {correct: 'El derecho a informacion permite conocer el producto.',wrongs: ['Devolucion es otro derecho','Exigir danos es reclamacion','Comprar mas no es un derecho']}
});

QUESTIONS.push({
  id: 'LC203', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'dificil',
  context: 'La pobreza multidimensional va mas alla de la falta de dinero. Tambien considera acceso a education, salud, vivienda, servicios publicos y oportunidades. Medir la pobreza de esta manera permite politicas mas efectivas.',
  question: 'Que considera la pobreza multidimensional?',
  options: ['Education, salud, vivienda y servicios', 'Solo ingresos', 'Solo alimentacion', 'Solo empleo'],
  correct: 0,
  explanation: {correct: 'Considera multiples dimensiones de bienestar.',wrongs: ['No es solo ingresos','No es solo alimentacion','No es solo empleo']}
});

QUESTIONS.push({
  id: 'LC204', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'facil',
  context: 'La convivencia ciudadana se basa en el respeto, la tolerancia y la solidaridad. Estos valores permiten que las personas vivan en armonia a pesar de sus diferencias.',
  question: 'Que valores promueven la convivencia?',
  options: ['Respeto, tolerancia y solidaridad', 'Solo respeto', 'Solo tolerancia', 'Solo solidaridad'],
  correct: 0,
  explanation: {correct: 'La convivencia se basa en varios valores.',wrongs: ['No es solo respeto','No es solo tolerancia','No es solo solidaridad']}
});

QUESTIONS.push({
  id: 'LC205', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'media',
  context: 'La innovacion social busca resolver problemas sociales mediante soluciones creativas. Ejemplos incluyen bancos comunitarios, huertas urbanas y programas de educacion alternativa.',
  question: 'Que busca la innovacion social?',
  options: ['Resolver problemas sociales con soluciones creativas', 'Solo ganar dinero', 'Solo crear empresas', 'Solo competir'],
  correct: 0,
  explanation: {correct: 'Busca resolver problemas sociales.',wrongs: ['No es solo dinero','No es solo crear empresas','No es solo competir']}
});

QUESTIONS.push({
  id: 'LC206', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'dificil',
  context: 'El desarrollo local depende de la capacidad de las comunidades para gestionar sus propios recursos y tomar decisiones sobre su territorio. La participacion ciudadana y el liderazgo local son clave para un desarrollo sostenible.',
  question: 'Que es clave para el desarrollo local?',
  options: ['Participacion ciudadana y liderazgo local', 'Solo inversion externa', 'Solo decisiones del Gobierno', 'Solo empresas'],
  correct: 0,
  explanation: {correct: 'Participacion y liderazgo local son clave.',wrongs: ['No es solo inversion','No es solo Gobierno','No es solo empresas']}
});

QUESTIONS.push({
  id: 'LC207', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'facil',
  context: 'La seguridad alimentaria garantiza que todas las personas tengan acceso a alimentos suficientes, seguros y nutritivos. El hambre y la malnutricion son problemas que afectan a millones de personas en el mundo.',
  question: 'Que garantiza la seguridad alimentaria?',
  options: ['Acceso a alimentos suficientes y nutritivos', 'Solo producir alimentos', 'Solo vender alimentos', 'Solo consumir alimentos'],
  correct: 0,
  explanation: {correct: 'Garantiza acceso a alimentos suficientes.',wrongs: ['No es solo producir','No es solo vender','No es solo consumir']}
});

QUESTIONS.push({
  id: 'LC208', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'media',
  context: 'Los Objetivos de Desarrollo Sostenible (ODS) son una agenda global que busca paz, prosperidad y proteccion del planeta. Son 17 objetivos que abordan desafios como la pobreza, el cambio climatico y la desigualdad.',
  question: 'Cuantos objetivos tienen los ODS?',
  options: ['17', '10', '20', '25'],
  correct: 0,
  explanation: {correct: 'Los ODS tienen 17 objetivos.',wrongs: ['10 es muy poco','20 es mas','25 es mas']}
});

QUESTIONS.push({
  id: 'LC209', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'dificil',
  table: {headers: ['ODS', 'Tema'],rows: [['1', 'Fin de la pobreza'],['2', 'Hambre cero'],['3', 'Salud y bienestar'],['4', 'Educacion de calidad']],caption: 'Primeros ODS'},
  question: 'Cual ODS trata sobre educacion?',
  options: ['ODS 4', 'ODS 1', 'ODS 2', 'ODS 3'],
  correct: 0,
  explanation: {correct: 'El ODS 4 es Educacion de calidad.',wrongs: ['ODS 1 es pobreza','ODS 2 es hambre','ODS 3 es salud']}
});

QUESTIONS.push({
  id: 'LC210', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'facil',
  context: 'La ciencia ciudadana es una practica donde los ciudadanos participan en investigaciones cientificas. Esto permite recoger datos en gran escala y aumentar la conciencia sobre problemas ambientales.',
  question: 'Que es la ciencia ciudadana?',
  options: ['Ciudadanos participan en investigaciones', 'Solo cientificos investigan', 'Solo el Gobierno investiga', 'Solo universidades investigan'],
  correct: 0,
  explanation: {correct: 'Los ciudadanos participan activamente.',wrongs: ['No es solo cientificos','No es solo Gobierno','No es solo universidades']}
});

QUESTIONS.push({
  id: 'LC211', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'media',
  context: 'El turismo comunitario permite a las comunidades rurales generar ingresos a traves de la hospitalidad. Los visitantes pueden aprender sobre la cultura local, la agricultura y los oficios tradicionales.',
  question: 'Que beneficio genera el turismo comunitario?',
  options: ['Genera ingresos para comunidades rurales', 'Solo beneficia a hoteles', 'Solo beneficia a restaurantes', 'Solo beneficia a guias'],
  correct: 0,
  explanation: {correct: 'Beneficia directamente a las comunidades.',wrongs: ['No es solo hoteles','No es solo restaurantes','No es solo guias']}
});

QUESTIONS.push({
  id: 'LC212', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'dificil',
  context: 'La planificacion familiar permite a las parejas decidir cuantos hijos tener y cuando tenerlos. Esto contribuye a la salud de la madre y del nino, al desarrollo economico familiar y a la reduccion de la pobreza.',
  question: 'Que contribuye la planificacion familiar?',
  options: ['Salud, desarrollo economico y reduccion de pobreza', 'Solo salud', 'Solo economia', 'Solo reduccion'],
  correct: 0,
  explanation: {correct: 'Beneficia salud, economia y reduce pobreza.',wrongs: ['No es solo salud','No es solo economia','No es solo reduccion']}
});

QUESTIONS.push({
  id: 'LC213', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'facil',
  context: 'El agua lluvia puede ser recolectada y utilizada para riego, limpieza y otros usos no potables. Esto reduce la presion sobre las fuentes de agua potable.',
  question: 'Para que sirve el agua lluvia?',
  options: ['Riego, limpieza y usos no potables', 'Solo beber', 'Solo cocinar', 'Solo bañarse'],
  correct: 0,
  explanation: {correct: 'El agua lluvia es para usos no potables.',wrongs: ['No es para beber directamente','No es para cocinar','No es solo para bañarse']}
});

QUESTIONS.push({
  id: 'LC214', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'media',
  context: 'Los espacios publicos son fundamentales para la vida en comunidad. Parques, plazas y bibliotecas permiten la interaccion social, el esparcimiento y el acceso al conocimiento.',
  question: 'Que permiten los espacios publicos?',
  options: ['Interaccion social, esparcimiento y conocimiento', 'Solo esparcimiento', 'Solo conocimiento', 'Solo interaccion'],
  correct: 0,
  explanation: {correct: 'Los espacios publicos tienen multiples funciones.',wrongs: ['No es solo esparcimiento','No es solo conocimiento','No es solo interaccion']}
});

QUESTIONS.push({
  id: 'LC215', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'dificil',
  context: 'La economia circular es un modelo que busca minimizar residuos y maximizar el uso de recursos. Los productos se disenian para durar, repararse y reciclarse, reduciendo el impacto ambiental.',
  question: 'Que busca la economia circular?',
  options: ['Minimizar residuos y maximizar recursos', 'Solo producir mas', 'Solo consumir mas', 'Solo reciclar'],
  correct: 0,
  explanation: {correct: 'Busca reducir residuos y optimizar recursos.',wrongs: ['No es solo producir','No es solo consumir','No es solo reciclar']}
});

QUESTIONS.push({
  id: 'LC216', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'facil',
  context: 'El derecho a la vivienda digna esta garantizado por la Constitucion. Todas las personas deben tener acceso a un hogar seguro, con servicios basicos y en condiciones adecuadas.',
  question: 'Que garantiza la Constitucion sobre vivienda?',
  options: ['Acceso a vivienda segura y con servicios', 'Solo techo', 'Solo agua', 'Solo luz'],
  correct: 0,
  explanation: {correct: 'Garantiza vivienda segura con servicios.',wrongs: ['No es solo techo','No es solo agua','No es solo luz']}
});

QUESTIONS.push({
  id: 'LC217', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'media',
  table: {headers: ['Aspecto', 'Vivienda digna'],rows: [['Seguridad', 'Estructura estable'],['Servicios', 'Agua, luz, alcantarillado'],['Ubicacion', 'Acceso a transporte'],['Tenencia', 'Derecho de propiedad']],caption: 'Vivienda digna'},
  question: 'Que aspecto es esencial para vivienda digna?',
  options: ['Seguridad estructural', 'Solo tamano', 'Solo precio', 'Solo color'],
  correct: 0,
  explanation: {correct: 'La seguridad estructural es esencial.',wrongs: ['Tamano no es lo mas importante','Precio no es un aspecto','Color no es relevante']}
});

QUESTIONS.push({
  id: 'LC218', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'dificil',
  context: 'La gentrificacion en Medellin ha transformado barrios como el Barrio Antioquia y la 10. Si bien ha mejorado infraestructura, tambien ha desplazado a comunidades tradicionales y elevado los precios de vivienda.',
  question: 'Que efecto negativo tiene la gentrificacion?',
  options: ['Desplazamiento de comunidades y aumento de precios', 'Mejor infraestructura', 'Mas empleo', 'Mas turismo'],
  correct: 0,
  explanation: {correct: 'Desplaza comunidades y eleva precios.',wrongs: ['Infraestructura es efecto positivo','Empleo no es efecto negativo','Turismo no es efecto negativo']}
});

QUESTIONS.push({
  id: 'LC219', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'facil',
  context: 'Las comunidades afrocolombianas han contribuido significativamente a la cultura colombiana a traves de su musica, danza, gastronomia y tradiciones orales.',
  question: 'Que han aportado las comunidades afrocolombianas?',
  options: ['Musica, danza, gastronomia y tradiciones', 'Solo musica', 'Solo danza', 'Solo gastronomia'],
  correct: 0,
  explanation: {correct: 'Aportan multiples expresiones culturales.',wrongs: ['No es solo musica','No es solo danza','No es solo gastronomia']}
});

QUESTIONS.push({
  id: 'LC220', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'media',
  context: 'La educacion intercultural busca reconocer y valorar la diversidad cultural en las escuelas. Incluye el ensenanza de lenguas indigenas, tradiciones locales y perspectivas diferentes.',
  question: 'Que busca la educacion intercultural?',
  options: ['Reconocer y valorar diversidad cultural', 'Solo ensenar español', 'Solo ensenar ingles', 'Solo ensenar ciencias'],
  correct: 0,
  explanation: {correct: 'Busca valorar la diversidad cultural.',wrongs: ['No es solo español','No es solo ingles','No es solo ciencias']}
});

QUESTIONS.push({
  id: 'LC221', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'dificil',
  context: 'La conflictividad social en Colombia tiene raices historicas como la desigualdad, la falta de oportunidades y la presencia de actores armados. Los esfuerzos de construccion de paz deben abordar estas causas estructurales.',
  question: 'Que causas tiene la conflictividad social?',
  options: ['Desigualdad, falta de oportunidades y actores armados', 'Solo actores armados', 'Solo desigualdad', 'Solo falta de oportunidades'],
  correct: 0,
  explanation: {correct: 'Las causas son multiples y estructurales.',wrongs: ['No es solo actores armados','No es solo desigualdad','No es solo falta de oportunidades']}
});

QUESTIONS.push({
  id: 'LC222', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'facil',
  context: 'El comercio local fortalece la economia de una comunidad. Cuando se compra en tiendas del barrio, el dinero circula dentro de la comunidad y beneficia a los vecinos.',
  question: 'Que beneficio tiene el comercio local?',
  options: ['El dinero circula en la comunidad', 'Solo es mas barato', 'Solo es mas rapido', 'Solo es mas comodo'],
  correct: 0,
  explanation: {correct: 'El dinero beneficia a la comunidad local.',wrongs: ['No es necesariamente mas barato','No es mas rapido','No es mas comodo']}
});

QUESTIONS.push({
  id: 'LC223', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'media',
  context: 'Los modelos de desarrollo sostenible buscan equilibrar el crecimiento economico con la proteccion ambiental y la inclusion social. No se trata de no crecer, sino de crecer de manera responsable.',
  question: 'Que buscan los modelos sostenibles?',
  options: ['Equilibrar crecimiento, ambiente e inclusion', 'Solo crecer', 'Solo proteger ambiente', 'Solo incluir'],
  correct: 0,
  explanation: {correct: 'Buscan equilibrar tres dimensiones.',wrongs: ['No es solo crecer','No es solo ambiente','No es solo inclusion']}
});

QUESTIONS.push({
  id: 'LC224', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'dificil',
  table: {headers: ['Dimension', 'Ejemplo'],rows: [['Economica', 'Crecimiento del PIB'],['Ambiental', 'Reduccion de emisiones'],['Social', 'Reduccion de pobreza'],['Cultural', 'Preservacion de tradiciones']],caption: 'Dimensiones del desarrollo sostenible'},
  question: 'Cual es un ejemplo de dimension ambiental?',
  options: ['Reduccion de emisiones', 'Crecimiento del PIB', 'Reduccion de pobreza', 'Preservacion de tradiciones'],
  correct: 0,
  explanation: {correct: 'Reduccion de emisiones es ambiental.',wrongs: ['PIB es economico','Pobreza es social','Tradiciones es cultural']}
});

QUESTIONS.push({
  id: 'LC225', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'facil',
  context: 'La mobilizacion social es la capacidad de las personas para organizarse y exigir sus derechos. Movimientos como el feminismo y el ecologismo han logrado cambios importantes en la sociedad.',
  question: 'Que logran los movimientos sociales?',
  options: ['Cambios importantes en la sociedad', 'Solo protestar', 'Solo quejarse', 'Solo bloquear vias'],
  correct: 0,
  explanation: {correct: 'Los movimientos logran cambios sociales.',wrongs: ['No es solo protestar','No es solo quejarse','No es solo bloquear']}
});

QUESTIONS.push({
  id: 'LC226', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'media',
  context: 'La educacion financiera enseña a las personas a manejar su dinero de manera responsable. Incluye temas como ahorro, inversion, deuda y planificacion para el futuro.',
  question: 'Que temas incluye la educacion financiera?',
  options: ['Ahorro, inversion, deuda y planificacion', 'Solo ahorro', 'Solo inversion', 'Solo deuda'],
  correct: 0,
  explanation: {correct: 'Incluye multiples temas financieros.',wrongs: ['No es solo ahorro','No es solo inversion','No es solo deuda']}
});

QUESTIONS.push({
  id: 'LC227', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'dificil',
  context: 'La resiliencia comunitaria es la capacidad de una comunidad para enfrentar y superar crisis como desastres naturales, conflictos o pandemias. Las comunidades resilientes se organizan, comparten recursos y aprenden de la experiencia.',
  question: 'Que caracteriza a una comunidad resiliente?',
  options: ['Se organiza, comparte recursos y aprende', 'Solo tiene dinero', 'Solo tiene lideres', 'Solo tiene infraestructura'],
  correct: 0,
  explanation: {correct: 'Las comunidades resilientes se organizan y aprenden.',wrongs: ['No es solo dinero','No es solo lideres','No es solo infraestructura']}
});

QUESTIONS.push({
  id: 'LC228', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'facil',
  context: 'La inclusion social busca que todas las personas tengan las mismas oportunidades sin importar su genero, etnia, discapacidad o condicion economica.',
  question: 'Que busca la inclusion social?',
  options: ['Igualdad de oportunidades para todos', 'Solo para hombres', 'Solo para blancos', 'Solo para ricos'],
  correct: 0,
  explanation: {correct: 'Busca oportunidades para todos.',wrongs: ['No es solo hombres','No es solo blancos','No es solo ricos']}
});

QUESTIONS.push({
  id: 'LC229', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'media',
  context: 'Los derechos de las mujeres incluyen igualdad salarial, acceso a la education, proteccion contra la violencia y participacion politica. El feminismo ha sido clave para avanzar en estos derechos.',
  question: 'Que ha sido clave para avanzar en derechos de mujeres?',
  options: ['El feminismo', 'Solo el Gobierno', 'Solo las empresas', 'Solo la religion'],
  correct: 0,
  explanation: {correct: 'El feminismo ha sido clave.',wrongs: ['Gobierno no es el unico actor','Empresas no son las clave','Religion no es la clave']}
});

QUESTIONS.push({
  id: 'LC230', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'dificil',
  table: {headers: ['Derecho', 'Avance'],rows: [['Igualdad salarial', 'Legislacion'],['Acceso a education', 'Politicas publicas'],['Proteccion contra violencia', 'Leyes'],['Participacion politica', 'Cuotas de genero']],caption: 'Derechos de mujeres'},
  question: 'Que avance ha logrado la participacion politica?',
  options: ['Cuotas de genero en cargos publicos', 'Solo votar', 'Solo ser candidata', 'Solo ser elegida'],
  correct: 0,
  explanation: {correct: 'Las cuotas de genero han incrementado representacion.',wrongs: ['Votar ya existia','Ser candidata no es nuevo','Ser elegida ya existia']}
});

QUESTIONS.push({
  id: 'LC231', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'facil',
  context: 'La comunicacion asertiva es la capacidad de expresar ideas y sentimientos de manera clara y respetuosa. Es fundamental para resolver conflictos y mantener relaciones saludables.',
  question: 'Que es la comunicacion asertiva?',
  options: ['Expresar ideas de manera clara y respetuosa', 'Solo gritar', 'Solo callarse', 'Solo criticar'],
  correct: 0,
  explanation: {correct: 'Es expresarse clara y respetuosamente.',wrongs: ['No es gritar','No es callarse','No es criticar']}
});

QUESTIONS.push({
  id: 'LC232', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'media',
  context: 'El liderazgo transformacional busca inspirar y motivar a las personas para alcanzar metas comunes. Los lideres transformacionales fomentan la creatividad, la innovacion y el compromiso colectivo.',
  question: 'Que fomenta el liderazgo transformacional?',
  options: ['Creatividad, innovacion y compromiso', 'Solo autoridad', 'Solo obediencia', 'Solo productividad'],
  correct: 0,
  explanation: {correct: 'Fomenta creatividad, innovacion y compromiso.',wrongs: ['No es solo autoridad','No es solo obediencia','No es solo productividad']}
});

QUESTIONS.push({
  id: 'LC233', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'dificil',
  context: 'La educacion en valores es fundamental para formar ciudadanos responsables y eticos. Valores como la honestidad, la solidaridad y el respeto deben ser ensenados tanto en la familia como en la escuela.',
  question: 'Donde se deben ensenar valores?',
  options: ['En la familia y en la escuela', 'Solo en la escuela', 'Solo en la familia', 'Solo en la iglesia'],
  correct: 0,
  explanation: {correct: 'Familia y escuela son espacios clave.',wrongs: ['No es solo escuela','No es solo familia','No es solo iglesia']}
});

QUESTIONS.push({
  id: 'LC234', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'facil',
  context: 'El respeto a la diversidad implica aceptar y valorar las diferencias entre las personas, ya sean culturales, religiosas, de genero o de capacidades.',
  question: 'Que implica el respeto a la diversidad?',
  options: ['Aceptar y valorar diferencias', 'Solo tolerar', 'Solo ignorar', 'Solo criticar'],
  correct: 0,
  explanation: {correct: 'Implica aceptar y valorar diferencias.',wrongs: ['No es solo tolerar','No es ignorar','No es criticar']}
});

QUESTIONS.push({
  id: 'LC235', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'media',
  table: {headers: ['Valor', 'Ejemplo'],rows: [['Honestidad', 'Decir la verdad'],['Solidaridad', 'Ayudar a otros'],['Respeto', 'Aceptar diferencias'],['Responsabilidad', 'Cumplir compromisos']],caption: 'Valores ciudadanos'},
  question: 'Que valor implica ayudar a otros?',
  options: ['Solidaridad', 'Honestidad', 'Respeto', 'Responsabilidad'],
  correct: 0,
  explanation: {correct: 'Solidaridad es ayudar a otros.',wrongs: ['Honestidad es decir verdad','Respeto es aceptar diferencias','Responsabilidad es cumplir']}
});

QUESTIONS.push({
  id: 'LC236', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'dificil',
  context: 'La construccion de paz en Colombia requiere abordar las causas estructurales del conflicto como la desigualdad, la falta de tierra y la exclusion. Los acuerdos de paz son un paso, pero la implementacion es clave.',
  question: 'Que es clave para la construccion de paz?',
  options: ['Implementar los acuerdos de paz', 'Solo firmar acuerdos', 'Solo olvidar el pasado', 'Solo castigar'],
  correct: 0,
  explanation: {correct: 'La implementacion es clave, no solo la firma.',wrongs: ['Firmar no es suficiente','Olvidar no construye paz','Castigar no es suficiente']}
});

QUESTIONS.push({
  id: 'LC237', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'facil',
  context: 'El desarrollo humano se centra en ampliar las libertades y capacidades de las personas. No se trata solo de tener dinero, sino de poder elegir y vivir la vida que uno valora.',
  question: 'Que centra el desarrollo humano?',
  options: ['Ampliar libertades y capacidades', 'Solo tener dinero', 'Solo tener empleo', 'Solo tener salud'],
  correct: 0,
  explanation: {correct: 'Centra libertades y capacidades.',wrongs: ['No es solo dinero','No es solo empleo','No es solo salud']}
});

QUESTIONS.push({
  id: 'LC238', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'media',
  context: 'La participacion juvenil es esencial para una democracia vigorosa. Los jovenes aportan nuevas ideas, energia y compromiso con los cambios sociales. Involucrar a los jovenes en la toma de decisiones fortalece las instituciones.',
  question: 'Que aportan los jovenes a la democracia?',
  options: ['Nuevas ideas, energia y compromiso', 'Solo votos', 'Solo protestas', 'Solo quejas'],
  correct: 0,
  explanation: {correct: 'Los jovenes aportan ideas, energia y compromiso.',wrongs: ['No es solo votos','No es solo protestas','No es solo quejas']}
});
/**
 * Lectura Critica finales - LC239-LC254
 */

QUESTIONS.push({
  id: 'LC239', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'facil',
  context: 'El Parque Nacional Natural Tayrona ofrece playas, senderos y una gran biodiversidad. Es uno de los destinos turisticos mas populares de Colombia.',
  question: 'Que ofrece el Parque Tayrona?',
  options: ['Playas, senderos y biodiversidad', 'Solo playas', 'Solo senderos', 'Solo turismo'],
  correct: 0,
  explanation: {correct: 'El parque ofrece multiples atractivos.',wrongs: ['No es solo playas','No es solo senderos','No es solo turismo']}
});

QUESTIONS.push({
  id: 'LC240', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'media',
  context: 'Las comunidades rurales enfrentan desafios como el acceso limitado a internet. Esto dificulta su conexion con el mundo digital y limita sus oportunidades de educacion y empleo.',
  question: 'Que desafio enfrentan las comunidades rurales?',
  options: ['Acceso limitado a internet', 'Falta de agua', 'Exceso de empleo', 'Demasiados servicios'],
  correct: 0,
  explanation: {correct: 'El texto menciona acceso limitado a internet.',wrongs: ['Agua no se menciona','Exceso de empleo no es problema','Demasiados servicios no es real']}
});

QUESTIONS.push({
  id: 'LC241', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'dificil',
  table: {headers: ['Problema', 'Solucion'],rows: [['Sin internet', 'Internet comunitario'],['Sin transporte', 'Buses rurales'],['Sin agua potable', 'Acueductos'],['Sin electricidad', 'Energia solar']],caption: 'Soluciones rurales'},
  question: 'Que solucion se propone para la falta de internet?',
  options: ['Internet comunitario', 'Buses rurales', 'Acueductos', 'Energia solar'],
  correct: 0,
  explanation: {correct: 'El internet comunitario resuelve el problema.',wrongs: ['Buses son transporte','Acueductos son agua','Energia solar es electricidad']}
});

QUESTIONS.push({
  id: 'LC242', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'facil',
  context: 'El reciclaje de aceite de cocina evita que contamine el agua. Un litro de aceite puede contaminar miles de litros de agua.',
  question: 'Por que es importante reciclar aceite?',
  options: ['Contamina mucho el agua', 'Es caro', 'Es abundante', 'No sirve para nada'],
  correct: 0,
  explanation: {correct: 'El aceite contamina grandes cantidades de agua.',wrongs: ['No es caro','Es abundante pero contaminante','Sirve para reciclar']}
});

QUESTIONS.push({
  id: 'LC243', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'media',
  context: 'Las mujeres rurales en Colombia enfrentan barreras como la falta de tierra, el acceso limitado al credito y la carga desproporcionada de trabajo doméstico.',
  question: 'Que barrera enfrentan las mujeres rurales?',
  options: ['Falta de tierra y acceso al credito', 'Solo falta de tierra', 'Solo credito', 'Solo trabajo doméstico'],
  correct: 0,
  explanation: {correct: 'El texto menciona multiples barreras.',wrongs: ['No es solo tierra','No es solo credito','No es solo trabajo']}
});

QUESTIONS.push({
  id: 'LC244', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'dificil',
  question: 'Que sugiere el texto sobre las mujeres rurales?',
  options: ['Necesitan politicas integrales de apoyo', 'Solo necesitan dinero', 'Solo necesitan education', 'Solo necesitan tierra'],
  correct: 0,
  explanation: {correct: 'Se necesitan multiples politicas de apoyo.',wrongs: ['No es solo dinero','No es solo educacion','No es solo tierra']}
});

QUESTIONS.push({
  id: 'LC245', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'facil',
  context: 'La energia geotermica aprovecha el calor del interior de la Tierra. Es una fuente limpia y constante que puede generar electricidad las 24 horas.',
  question: 'Que ventaja tiene la energia geotermica?',
  options: ['Es constante las 24 horas', 'Es la mas barata', 'Es la mas comun', 'Es la mas nueva'],
  correct: 0,
  explanation: {correct: 'La geotermica es constante e ininterrumpida.',wrongs: ['No es la mas barata','No es la mas comun','No es la mas nueva']}
});

QUESTIONS.push({
  id: 'LC246', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'media',
  context: 'El Programa de las Naciones Unidas para el Desarrollo (PNUD) trabaja en Colombia para reducir la pobreza, promover la gobernanza democratica y proteger el medio ambiente.',
  question: 'Que trabaja el PNUD en Colombia?',
  options: ['Reducir pobreza, gobernanza y ambiente', 'Solo reducir pobreza', 'Solo gobernanza', 'Solo ambiente'],
  correct: 0,
  explanation: {correct: 'El PNUD tiene multiples frentes.',wrongs: ['No es solo pobreza','No es solo gobernanza','No es solo ambiente']}
});

QUESTIONS.push({
  id: 'LC247', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'dificil',
  table: {headers: ['Area', 'Accion'],rows: [['Pobreza', 'Programas sociales'],['Gobernanza', 'Participacion ciudadana'],['Ambiente', 'Desarrollo sostenible'],['Derechos', 'Proteccion a victimas']],caption: 'Trabajo del PNUD'},
  question: 'En que area trabaja el PNUD la participacion ciudadana?',
  options: ['Gobernanza', 'Pobreza', 'Ambiente', 'Derechos'],
  correct: 0,
  explanation: {correct: 'Participacion es tema de gobernanza.',wrongs: ['Pobreza es otra area','Ambiente es otra area','Derechos es otra area']}
});

QUESTIONS.push({
  id: 'LC248', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'facil',
  context: 'Las escuelas rurales en Colombia a menudo carecen de internet, laboratorios y bibliotecas actualizadas. Esto afecta la calidad de la educacion que reciben los estudiantes.',
  question: 'Que carecen las escuelas rurales?',
  options: ['Internet, laboratorios y bibliotecas', 'Solo internet', 'Solo laboratorios', 'Solo bibliotecas'],
  correct: 0,
  explanation: {correct: 'Las escuelas carecen de multiples recursos.',wrongs: ['No es solo internet','No es solo laboratorios','No es solo bibliotecas']}
});

QUESTIONS.push({
  id: 'LC249', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'media',
  context: 'El Banco de la Republica es el banco central de Colombia. Su funcion principal es mantener la estabilidad de precios y apoyar la politica economica del Gobierno.',
  question: 'Cual es la funcion principal del Banco de la Republica?',
  options: ['Mantener estabilidad de precios', 'Prestar dinero a personas', 'Imprimir billetes', 'Cobrar impuestos'],
  correct: 0,
  explanation: {correct: 'Su funcion principal es estabilidad de precios.',wrongs: ['No presta a personas directamente','Imprimir billetes es una funcion','Cobrar impuestos es Dian']}
});

QUESTIONS.push({
  id: 'LC250', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'dificil',
  question: 'Que herramienta monetaria usa el Banco de la Republica?',
  options: ['Politica monetaria y tasa de interes', 'Solo imprimir billetes', 'Solo cobrar impuestos', 'Solo prestar dinero'],
  correct: 0,
  explanation: {correct: 'Usa politica monetaria y tasa de interes.',wrongs: ['No es solo imprimir billetes','No es cobrar impuestos','No es prestar dinero directamente']}
});

QUESTIONS.push({
  id: 'LC251', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'facil',
  context: 'El turismo rural permite a los visitantes conocer la vida en el campo, participar en labores agricolas y disfrutar de la naturaleza.',
  question: 'Que pueden hacer los turistas en el campo?',
  options: ['Conocer la vida rural y participar en labores', 'Solo dormir', 'Solo comer', 'Solo pasear'],
  correct: 0,
  explanation: {correct: 'El turismo rural es experiencial.',wrongs: ['No es solo dormir','No es solo comer','No es solo pasear']}
});

QUESTIONS.push({
  id: 'LC252', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'media',
  context: 'Las organizaciones comunitarias en Colombia trabajan en proyectos de agua potable, saneamiento, educacion y salud. Son fundamentales para el desarrollo local.',
  question: 'En que proyectos trabajan las organizaciones comunitarias?',
  options: ['Agua, saneamiento, educacion y salud', 'Solo agua', 'Solo educacion', 'Solo salud'],
  correct: 0,
  explanation: {correct: 'Las organizaciones trabajan en multiples areas.',wrongs: ['No es solo agua','No es solo educacion','No es solo salud']}
});

QUESTIONS.push({
  id: 'LC253', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'dificil',
  table: {headers: ['Proyecto', 'Impacto'],rows: [['Agua potable', 'Mejor salud'],['Saneamiento', 'Menos enfermedades'],['Educacion', 'Mas oportunidades'],['Salud', 'Vida mas larga']],caption: 'Proyectos comunitarios'},
  question: 'Que proyecto impacta directamente la salud?',
  options: ['Saneamiento', 'Educacion', 'Agua potable', 'Todos'],
  correct: 0,
  explanation: {correct: 'Saneamiento reduce enfermedades directamente.',wrongs: ['Educacion es indirecto','Agua potable tambien impacta','Todos impactan pero saneamiento es mas directo']}
});

QUESTIONS.push({
  id: 'LC254', area: 'lectura', areaName: 'Lectura Critica', difficulty: 'facil',
  context: 'La diversidad cultural enriquece a las sociedades. Cada cultura aporta tradiciones, conocimientos y formas de ver el mundo.',
  question: 'Que aporta la diversidad cultural?',
  options: ['Tradiciones, conocimientos y perspectivas', 'Solo comida', 'Solo musica', 'Solo ropa'],
  correct: 0,
  explanation: {correct: 'La diversidad aporta multiples expresiones.',wrongs: ['No es solo comida','No es solo musica','No es solo ropa']}
});
