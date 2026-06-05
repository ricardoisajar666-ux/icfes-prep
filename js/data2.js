// Additional questions - loaded after data.js, pushed into the existing QUESTIONS array
// Estilo ICFES: textos largos, tablas, contextos colombianos, contenidos visuales
QUESTIONS.push(
  // ===== LECTURA CRITICA (LC61-LC68) =====
  {
    id:'LC61',area:'lectura',areaName:'Lectura Critica',difficulty:'dificil',
    context:`"La ciencia no es una ilusion, pero seria una ilusion creer que podemos obtener por otros medios lo que ella no puede darnos." Con esta frase, Sigmund Freud delimitaba el campo de accion del conocimiento cientifico frente a otras formas de saber. Sin embargo, el psicoanalista vienes tambien reconocio que existen preguntas fundamentales que la ciencia no puede responder: las relativas al sentido de la vida, al bien y al mal, al proposito de la existencia. Esta distincion entre lo que la ciencia puede explicar (los mecanismos causales del mundo natural) y lo que queda fuera de su alcance (las preguntas normativas y existenciales) ha sido retomada por filosofos como Jurgen Habermas, quien distingue entre la razon instrumental, propia de las ciencias naturales, y la razon comunicativa, que opera en el ambito de las relaciones humanas y la etica. Para Habermas, el error del "cientificismo" consiste en creer que el metodo de las ciencias naturales es el unico valido para todo conocimiento, ignorando que las ciencias humanas requieren comprension hermeneutica, no solo explicacion causal.`,
    question:`Segun el texto, la principal limitacion de la ciencia segun Freud es:`,
    options:['Su incapacidad para producir conocimientos verdaderos','Su imposibilidad de responder preguntas sobre el sentido y los valores','Su dependencia del metodo experimental','Su rechazo a la filosofia como forma de conocimiento'],
    correct:1,
    explanation:{correct:'Freud senala que "existen preguntas fundamentales que la ciencia no puede responder: las relativas al sentido de la vida, al bien y al mal", es decir, las preguntas normativas y existenciales.',wrongs:['Freud afirma que la ciencia no es una ilusion, si produce conocimiento verdadero','Opcion correcta','No se critica el metodo experimental, sino su extension a todo ambito','La relacion con la filosofia no es el punto central del texto']}
  },
  {
    id:'LC62',area:'lectura',areaName:'Lectura Critica',difficulty:'media',
    context:`"En Colombia, la reforma agraria ha sido un tema recurrente pero nunca resuelto. Desde la Ley 200 de 1936, impulsada por Alfonso Lopez Pumarejo, hasta el Acuerdo de Paz de 2016, la distribucion de la tierra ha estado en el centro de los conflictos sociales. La Ley 200 busco expropiar tierras improductivas para entregarlas a campesinos sin tierra, pero encontro una fuerte oposicion de los latifundistas. Setenta anos despues, el Acuerdo de Paz con las FARC planteo un ambicioso programa de formalizacion de la propiedad rural y distribucion de tierras. Sin embargo, la implementacion ha sido lenta: segun la Agencia Nacional de Tierras, entre 2017 y 2023 solo se entregaron 120.000 hectareas de las 3 millones prometidas. El historiador Marco Palacios sostiene que la persistente concentracion de la tierra es la causa estructural del conflicto armado colombiano."`,
    question:`Cual de las siguientes afirmaciones resume mejor la idea central del texto?`,
    options:['La reforma agraria en Colombia ha sido un exito gracias a la Ley 200 de 1936','La distribucion de la tierra ha sido un problema historico no resuelto en Colombia','El Acuerdo de Paz de 2016 resolvio definitivamente el problema agrario','La Agencia Nacional de Tierras ha cumplido con todas las metas establecidas'],
    correct:1,
    explanation:{correct:'El texto afirma que la reforma agraria ha sido "un tema recurrente pero nunca resuelto", y presenta evidencias desde 1936 hasta 2023 de la persistente concentracion de la tierra.',wrongs:['El texto muestra que ni la Ley 200 ni el Acuerdo de Paz resolvieron el problema','Opcion correcta','El texto dice que la implementacion ha sido lenta y solo se ha entregado una fraccion de lo prometido','El texto reporta que la ANT solo ha cumplido el 4% de la meta']}
  },
  {
    id:'LC63',area:'lectura',areaName:'Lectura Critica',difficulty:'facil',
    context:`"La taxonomia es la ciencia de clasificar los seres vivos. Carlos Linneo, en el siglo XVIII, establecio el sistema de nomenclatura binomial que aun usamos: cada especie recibe un nombre generico (genero) y uno especifico (especie). Por ejemplo, los humanos somos Homo sapiens. Linneo clasifico los organismos en una jerarquia de categorias: reino, filo, clase, orden, familia, genero y especie."`,
    question:`Segun el texto, la nomenclatura binomial consiste en:`,
    options:['Asignar dos numeros a cada especie','Usar dos palabras (genero y especie) para nombrar cada ser vivo','Clasificar los organismos en dos grupos','Dar dos nombres diferentes a cada especie'],
    correct:1,
    explanation:{correct:'La nomenclatura binomial asigna "un nombre generico (genero) y uno especifico (especie)", como Homo sapiens.',wrongs:['No son numeros, son palabras en latin','Opcion correcta','No son grupos sino una jerarquia','Cada especie recibe UN nombre cientifico compuesto de dos partes']}
  },
  {
    id:'LC64',area:'lectura',areaName:'Lectura Critica',difficulty:'dificil',
    context:`"Michel Foucault, en Vigilar y castigar, analiza la transformacion de los sistemas punitivos occidentales. Describe como el suplicio publico, caracteristico del Antiguo Regimen, fue reemplazado por la prision y la disciplina en el siglo XIX. Pero Foucault va mas alla de la historia del castigo: sostiene que las tecnicas disciplinarias desarrolladas en las prisiones (vigilancia jerarquica, sancion normalizadora, examen) se extendieron a otras instituciones como escuelas, hospitales, cuarteles y fabricas. El panoptico de Bentham —un diseno carcelario donde un vigilante puede observar a todos los presos sin que estos sepan si estan siendo observados— se convierte para Foucault en el simbolo de una sociedad disciplinaria donde el poder se ejerce a traves de la visibilidad y la normalizacion."`,
    question:`El panoptico representa para Foucault:`,
    options:['Un diseno arquitectonico obsoleto que nunca se construyo','El simbolo de una sociedad donde el poder opera mediante la vigilancia y la normalizacion','Una utopia carcelaria que humanizo el sistema penal','Un metodo exclusivamente penitenciario sin aplicacion a otras instituciones'],
    correct:1,
    explanation:{correct:'Foucault ve el panoptico como "el simbolo de una sociedad disciplinaria donde el poder se ejerce a traves de la visibilidad y la normalizacion", extendiendo el modelo a escuelas, hospitales y fabricas.',wrongs:['Aunque Bentham lo diseno, Foucault lo rescata como figura conceptual clave','Opcion correcta','Foucault critica el panoptico como mecanismo de control, no lo presenta como humanizador','El texto dice explicitamente que las tecnicas se extendieron a otras instituciones']}
  },
  {
    id:'LC65',area:'lectura',areaName:'Lectura Critica',difficulty:'media',
    context:`"El rio Bogota es considerado uno de los mas contaminados del mundo. Recibe descargas de aguas residuales domesticas e industriales de aproximadamente 12 millones de personas. Segun la Corporacion Autonoma Regional de Cundinamarca (CAR), el 98% de la contaminacion del rio proviene de fuentes domesticas y solo el 2% de fuentes industriales. El Plan de Saneamiento del Rio Bogota, iniciado en 2014, incluye la construccion de la Planta de Tratamiento de Aguas Residuales (PTAR) Canoas, que cuando este operativa al 100% podra tratar el 70% de las aguas residuales de la ciudad. Sin embargo, los retrasos en su construccion han generado criticas de organizaciones ambientales."`,
    question:`El texto indica que la principal fuente de contaminacion del rio Bogota es:`,
    options:['Los desechos industriales de las fabricas','Las aguas residuales domesticas de la poblacion','Los pesticidas de la agricultura','Los residuos solidos arrojados al rio'],
    correct:1,
    explanation:{correct:'El texto afirma que "el 98% de la contaminacion del rio proviene de fuentes domesticas", principalmente las aguas residuales de 12 millones de personas.',wrongs:['Solo el 2% proviene de fuentes industriales','Opcion correcta','No se menciona la agricultura como fuente significativa','Aunque hay residuos solidos, la fuente principal son las aguas domesticas']}
  },
  {
    id:'LC66',area:'lectura',areaName:'Lectura Critica',difficulty:'dificil',
    context:`"En El malestar en la cultura (1930), Sigmund Freud plantea una tesis provocadora: la civilizacion, que deberia proporcionar felicidad al ser humano, es en realidad la fuente principal de su infelicidad. La cultura, argumenta Freud, exige la renuncia a los instintos basicos —especialmente la agresividad y la sexualidad— para hacer posible la vida en sociedad. El precio de la civilizacion es, entonces, la neurosis. Cuanto mas desarrollada es una cultura, mayores son las restricciones que impone y, por tanto, mayor el malestar psicologico de sus miembros. Freud contrapone el 'principio de placer' —la tendencia innata a buscar la satisfaccion inmediata— al 'principio de realidad' —la necesidad de postergar la gratificacion para adaptarse a las exigencias sociales. El conflicto entre ambos principios es, para Freud, irreconciliable."`,
    question:`Para Freud, la relacion entre civilizacion y felicidad es:`,
    options:['Directamente proporcional: a mayor civilizacion, mayor felicidad','Inversa: la civilizacion genera restricciones que producen malestar','Independiente: la cultura no afecta la felicidad individual','Circular: la civilizacion es el resultado de la felicidad colectiva'],
    correct:1,
    explanation:{correct:'Freud argumenta que "la civilizacion... es la fuente principal de su infelicidad" porque exige "la renuncia a los instintos basicos", generando neurosis.',wrongs:['Freud sostiene precisamente lo contrario','Opcion correcta','El texto argumenta que la cultura afecta profundamente la felicidad','Se presenta como causa, no como consecuencia']}
  },
  {
    id:'LC67',area:'lectura',areaName:'Lectura Critica',difficulty:'facil',
    context:`"El telefono inteligente o 'smartphone' ha transformado la vida cotidiana. Segun el Departamento Administrativo Nacional de Estadistica (DANE), en 2023 el 78% de los hogares colombianos tenia acceso a un telefono inteligente, frente al 45% en 2015. Sin embargo, el acceso no es uniforme: mientras en Bogota la penetracion alcanza el 89%, en zonas rurales del Choco apenas llega al 34%. Esta brecha digital tiene consecuencias en el acceso a la educacion, la salud y el empleo."`,
    question:`Segun el texto, la brecha digital en Colombia se evidencia en:`,
    options:['La diferencia de acceso a telefonos inteligentes entre zonas urbanas y rurales','La baja calidad de los telefonos que se venden en el pais','El costo elevado de los planes de datos moviles','La falta de aplicaciones en espanol'],
    correct:0,
    explanation:{correct:'El texto muestra la brecha contrastando el 89% de penetracion en Bogota con el 34% en zonas rurales del Choco.',wrongs:['Opcion correcta','No se menciona la calidad de los dispositivos','No se mencionan costos de planes','No se mencionan las aplicaciones']}
  },
  {
    id:'LC68',area:'lectura',areaName:'Lectura Critica',difficulty:'media',
    context:`"Max Weber, en La etica protestante y el espiritu del capitalismo (1905), propuso una tesis audaz: el capitalismo moderno no surgio solo por factores economicos, sino que tuvo una base cultural y religiosa. Weber observo que en los paises protestantes —especialmente entre los calvinistas— se habia desarrollado una etica del trabajo que favorecia la acumulacion de capital. Para el calvinista, el exito economico era un signo de salvacion divina, y el trabajo arduo y sistematico un deber moral. Pero esta acumulacion no debia gastarse en lujos: debia reinvertirse. Esta combinacion de trabajo disciplinado, ahorro y reinversion creo, segun Weber, el 'espiritu del capitalismo'. La tesis de Weber ha sido muy debatida: algunos historiadores senalan que el capitalismo ya existia en regiones catolicas como Italia y Flandes antes de la Reforma."`,
    question:`Segun Weber, el espiritu del capitalismo se caracteriza por:`,
    options:['La busqueda del lucro sin restricciones morales','El trabajo disciplinado, el ahorro y la reinversion como deberes morales','La prioridad del ocio sobre el trabajo productivo','La separacion total entre religion y economia'],
    correct:1,
    explanation:{correct:'Weber describe la combinacion de "trabajo disciplinado, ahorro y reinversion" como deberes morales derivados de la etica protestante.',wrongs:['Weber enfatiza el aspecto moral y etico, no la ausencia de restricciones','Opcion correcta','La etica protestante valoraba el trabajo, no el ocio','La tesis de Weber conecta religion y economia, no las separa']}
  },

  // ===== MATEMATICAS (MT61-MT68) =====
  {
    id:'MT61',area:'matematicas',areaName:'Matematicas',difficulty:'media',
    table:{
      headers:['Ano','Poblacion urbana (%)','Poblacion rural (%)'],
      rows:[
        ['1950','38','62'],
        ['1970','52','48'],
        ['1990','65','35'],
        ['2010','74','26'],
        ['2023','82','18']
      ],
      caption:'Distribucion de la poblacion colombiana por zona (1950-2023)'
    },
    context:'La tabla muestra la evolucion de la poblacion colombiana segun el DANE.',
    question:'Entre 1950 y 2023, la poblacion urbana colombiana aumento en aproximadamente:',
    options:['44 puntos porcentuales','38 puntos porcentuales','82 puntos porcentuales','24 puntos porcentuales'],
    correct:0,
    explanation:{correct:'Poblacion urbana 1950: 38%. Poblacion urbana 2023: 82%. Aumento = 82% - 38% = 44 puntos porcentuales.',wrongs:['Opcion correcta','Calculaste 82 - 44 o un valor incorrecto','82% es el valor final, no el aumento','Calculaste la diferencia entre valores incorrectos']}
  },
  {
    id:'MT62',area:'matematicas',areaName:'Matematicas',difficulty:'dificil',
    table:{
      headers:['Producto','Valor 2022','Valor 2023','Variacion'],
      rows:[
        ['Cafe','$3.200.000','$4.000.000','+25%'],
        ['Petroleo','$8.500.000','$9.350.000','+10%'],
        ['Flores','$1.800.000','$1.620.000','-10%'],
        ['Carbon','$2.400.000','$2.640.000','+10%']
      ],
      caption:'Exportaciones colombianas (millones de pesos) en 2022-2023'
    },
    context:'Un analista quiere determinar la variacion total de las exportaciones de los productos mostrados en la tabla.',
    question:'El valor total de las exportaciones de estos cuatro productos en 2023, comparado con 2022:',
    options:['Aumento en $1.710.000','Disminuyo en $850.000','Aumento en $2.490.000','Se mantuvo igual'],
    correct:0,
    explanation:{correct:'Total 2022: 3.200+8.500+1.800+2.400 = 15.900. Total 2023: 4.000+9.350+1.620+2.640 = 17.610. Aumento: 17.610-15.900 = 1.710.',wrongs:['Opcion correcta','Los totales aumentaron, no disminuyeron','Calculaste mal los totales parciales','No se mantuvo igual, hubo variacion']}
  },
  {
    id:'MT63',area:'matematicas',areaName:'Matematicas',difficulty:'facil',
    context:'Una familia en Cali gasta mensualmente $2.500.000 en total. Del total, $800.000 son para alimentacion, $500.000 para vivienda, $400.000 para transporte y el resto para otros gastos.',
    question:'Que porcentaje del presupuesto familiar se destina a otros gastos?',
    options:['32%','25%','40%','18%'],
    correct:0,
    explanation:{correct:'Alimentacion+vivienda+transporte = 800+500+400 = 1.700.000. Otros = 2.500.000-1.700.000 = 800.000. Porcentaje = (800.000/2.500.000)x100 = 32%.',wrongs:['Opcion correcta','Calculaste 500.000/2.000.000 = 25%','Sumaste mal los gastos conocidos','Calculaste 450.000/2.500.000']}
  },
  {
    id:'MT64',area:'matematicas',areaName:'Matematicas',difficulty:'media',
    context:'En un colegio de Bucaramanga, los estudiantes de grado 11 obtuvieron los siguientes puntajes en una prueba de 50 puntos: 42, 38, 45, 30, 42, 35, 48, 40, 42, 36.',
    question:'Cual es la moda de estos puntajes?',
    options:['38','40','42','45'],
    correct:2,
    explanation:{correct:'Ordenando: 30, 35, 36, 38, 40, 42, 42, 42, 45, 48. El valor que mas se repite es 42 (3 veces).',wrongs:['38 solo aparece una vez','40 solo aparece una vez','Opcion correcta','45 solo aparece una vez']}
  },
  {
    id:'MT65',area:'matematicas',areaName:'Matematicas',difficulty:'dificil',
    context:'Una encuesta en Medellin pregunto a 500 personas sobre su medio de transporte principal. Los resultados muestran: 175 usan el metro, 125 usan bus, 100 usan carro particular, 50 usan bicicleta y 50 caminan.',
    question:'Si se selecciona una persona al azar, cual es la probabilidad de que NO use transporte publico (metro o bus)?',
    options:['0,30','0,40','0,50','0,60'],
    correct:1,
    explanation:{correct:'Usan transporte publico: 175+125 = 300. No usan: 500-300 = 200. Probabilidad = 200/500 = 0,40.',wrongs:['Calculaste 150/500 = 0,30 (solo bicicleta+caminar)','Opcion correcta','Calculaste 250/500 = 0,50 (la mitad)','Calculaste 300/500 = 0,60 (los que SI usan)']}
  },
  {
    id:'MT66',area:'matematicas',areaName:'Matematicas',difficulty:'media',
    context:'En un cultivo de cafe en el Quindio, la produccion anual (en kg por hectarea) sigue la funcion P(t) = -2t^2 + 40t + 100, donde t es el tiempo en anos desde la siembra.',
    question:'Cual es la produccion maxima de este cultivo?',
    options:['200 kg/ha','250 kg/ha','300 kg/ha','350 kg/ha'],
    correct:2,
    explanation:{correct:'Vertice: t = -b/(2a) = -40/(2(-2)) = 10. P(10) = -2(100)+40(10)+100 = -200+400+100 = 300 kg/ha.',wrongs:['Evaluaste en t=0: P(0)=100','Evaluaste en t=5: -50+200+100=250','Opcion correcta','Calculaste mal la formula del vertice']}
  },
  {
    id:'MT67',area:'matematicas',areaName:'Matematicas',difficulty:'facil',
    context:'Un tanque de agua en forma de cubo tiene una capacidad de 27.000 litros.',
    question:'Cual es la longitud de cada lado del tanque en metros? (1 m^3 = 1.000 L)',
    options:['2 m','3 m','4 m','5 m'],
    correct:1,
    explanation:{correct:'27.000 L = 27 m^3. Volumen cubo = L^3 = 27. L = raiz cubica(27) = 3 m.',wrongs:['2^3 = 8, no 27','Opcion correcta','4^3 = 64, no 27','5^3 = 125, no 27']}
  },
  {
    id:'MT68',area:'matematicas',areaName:'Matematicas',difficulty:'dificil',
    table:{
      headers:['Ciudad','Temperatura max','Temperatura min','Precipitacion (mm)'],
      rows:[
        ['Leticia','32°C','24°C','320'],
        ['Bogota','20°C','8°C','45'],
        ['San Andres','30°C','26°C','180'],
        ['Pasto','18°C','6°C','78']
      ],
      caption:'Datos climaticos de ciudades colombianas en un mes'
    },
    context:'La tabla muestra datos climaticos de cuatro ciudades colombianas.',
    question:'Cual es la amplitud termica (diferencia entre temperatura maxima y minima) de la ciudad con mayor precipitacion?',
    options:['6°C','8°C','12°C','14°C'],
    correct:1,
    explanation:{correct:'Mayor precipitacion: Leticia (320 mm). Amplitud = 32°C - 24°C = 8°C.',wrongs:['Calculaste San Andres: 30-26=4°C, pero no es la mayor precipitacion','Opcion correcta','Calculaste el promedio de las temperaturas','Calculaste Pasto: 18-6=12°C']}
  },

  // ===== SOCIALES (SC60-SC67) =====
  {
    id:'SC60',area:'sociales',areaName:'Sociales y Ciudadania',difficulty:'media',
    context:`"La Constitucion Politica de Colombia de 1991 establecio un Estado Social de Derecho, lo que implica que el Estado no solo debe garantizar las libertades individuales, sino tambien promover condiciones de igualdad material. Esto significa que el Estado debe intervenir activamente en la economia y la sociedad para corregir las desigualdades existentes. La Corte Constitucional ha interpretado que este principio obliga al Estado a garantizar derechos fundamentales como la salud, la educacion y la vivienda digna, especialmente a la poblacion mas vulnerable."`,
    question:`El Estado Social de Derecho se diferencia del Estado de Derecho clasico porque:`,
    options:['Elimina las libertades individuales en favor del bienestar colectivo','Requiere que el Estado intervenga activamente para promover la igualdad material','Se limita a garantizar la seguridad juridica y los contratos','Reduce el papel del Estado a la defensa nacional'],
    correct:1,
    explanation:{correct:'El texto senala que el Estado Social de Derecho implica que el Estado "debe intervenir activamente en la economia y la sociedad para corregir las desigualdades existentes".',wrongs:['No elimina libertades, las complementa con derechos sociales','Opcion correcta','Va mas alla de la mera seguridad juridica','Amplia, no reduce, el rol del Estado']}
  },
  {
    id:'SC61',area:'sociales',areaName:'Sociales y Ciudadania',difficulty:'facil',
    table:{
      headers:['Indicador','Colombia','Brasil','Chile','Peru'],
      rows:[
        ['PIB per capita (USD)','$6.630','$8.920','$15.350','$7.040'],
        ['Coeficiente de Gini','0,54','0,52','0,44','0,45'],
        ['Esperanza de vida (anos)','77,3','75,9','81,2','76,5'],
        ['Tasa de alfabetizacion (%)','95,2','93,2','97,4','94,8']
      ],
      caption:'Indicadores de desarrollo en America Latina (2022)'
    },
    context:'La tabla muestra indicadores de desarrollo para cuatro paises latinoamericanos. El Coeficiente de Gini mide la desigualdad: 0 = igualdad perfecta, 1 = desigualdad maxima.',
    question:'Segun la tabla, cual de los siguientes paises presenta la MENOR desigualdad economica?',
    options:['Colombia','Brasil','Chile','Peru'],
    correct:2,
    explanation:{correct:'El menor Coeficiente de Gini indica menor desigualdad. Chile tiene el Gini mas bajo (0,44), seguido de Peru (0,45).',wrongs:['Colombia tiene el Gini mas alto (0,54)','Brasil tiene el segundo Gini mas alto (0,52)','Opcion correcta','Peru tiene 0,45, mayor que Chile']}
  },
  {
    id:'SC62',area:'sociales',areaName:'Sociales y Ciudadania',difficulty:'dificil',
    context:`"La Guerra de los Mil Dias (1899-1902) fue el conflicto civil mas devastador de Colombia en el siglo XIX. Enfrento al Partido Liberal contra el gobierno conservador de Manuel Antonio Sanclemente y, posteriormente, de Jose Manuel Marroquin. La guerra dejo aproximadamente 100.000 muertos, en un pais que apenas tenia 4 millones de habitantes. El conflicto termino con la firma del Tratado de Wisconsin (1902) y el triunfo del gobierno conservador. Una consecuencia directa de la guerra fue la separacion de Panama en 1903: el pais quedo devastado y sin capacidad para resistir la presion de Estados Unidos, que apoyo la independencia panamena para construir el canal."`,
    question:`El texto establece una relacion de causalidad entre la Guerra de los Mil Dias y:`,
    options:['La firma de la Constitucion de 1886','La separacion de Panama en 1903','La creacion del Partido Conservador','La abolicion de la esclavitud en Colombia'],
    correct:1,
    explanation:{correct:'El texto afirma que "una consecuencia directa de la guerra fue la separacion de Panama en 1903" porque el pais quedo devastado.',wrongs:['La Constitucion de 1886 fue anterior a la guerra','Opcion correcta','El Partido Conservador ya existia desde mediados del siglo XIX','La esclavitud se abolio en 1851, antes de la guerra']}
  },
  {
    id:'SC63',area:'sociales',areaName:'Sociales y Ciudadania',difficulty:'media',
    context:`"La teoria de la dependencia, desarrollada en los anos 1960 por autores como Raul Prebisch, Fernando Henrique Cardoso y Enzo Faletto, sostiene que el subdesarrollo de America Latina no es una etapa previa al desarrollo, sino el resultado de la insercion de estos paises en el sistema capitalista mundial como exportadores de materias primas. Segun esta teoria, los terminos de intercambio entre paises centrales (industrializados) y perifericos (productores de materias primas) tienden a deteriorarse para estos ultimos: necesitan exportar cada vez mas volumen para importar la misma cantidad de bienes industrializados."`,
    question:`Segun la teoria de la dependencia, el subdesarrollo latinoamericano se explica por:`,
    options:['La falta de recursos naturales en la region','La insercion desventajosa en el sistema capitalista mundial como exportadores de materias primas','La escasa poblacion de los paises latinoamericanos','La herencia cultural indigena y africana'],
    correct:1,
    explanation:{correct:'La teoria sostiene que el subdesarrollo es "resultado de la insercion de estos paises en el sistema capitalista mundial como exportadores de materias primas" con terminos de intercambio desfavorables.',wrongs:['America Latina es rica en recursos naturales, ese no es el problema','Opcion correcta','La poblacion no es el factor explicativo central','La teoria critica la estructura economica, no la cultura']}
  },
  {
    id:'SC64',area:'sociales',areaName:'Sociales y Ciudadania',difficulty:'facil',
    question:`La accion de tutela en Colombia es un mecanismo juridico que:`,
    options:['Permite demandar a una empresa por incumplimiento de contrato','Protege los derechos fundamentales cuando son vulnerados por una autoridad o particular','Sirve para impugnar leyes ante la Corte Constitucional','Reemplaza al abogado en procesos judiciales'],
    correct:1,
    explanation:{correct:'La accion de tutela (art. 86 Constitucion) es un mecanismo para proteger los derechos fundamentales de forma inmediata cuando son vulnerados o amenazados. No requiere formalidades ni abogado.',wrongs:['La tutela es para derechos fundamentales, no contractuales','Opcion correcta','Esa es la funcion de la accion de inconstitucionalidad','La tutela no reemplaza al abogado, aunque puede interponerse sin el']}
  },
  {
    id:'SC65',area:'sociales',areaName:'Sociales y Ciudadania',difficulty:'dificil',
    context:`"Immanuel Kant, en su obra La paz perpetua (1795), propuso que la paz mundial solo seria posible si los Estados se organizaban como republicas (con separacion de poderes y representacion popular) y establecian una federacion de Estados libres. Dos siglos despues, la creacion de la Organizacion de las Naciones Unidas (1945) y la Union Europea (1993) pueden verse como intentos de realizar el ideal kantiano de una comunidad internacional gobernada por el derecho y no por la fuerza."`,
    question:`La relacion entre el pensamiento de Kant y la creacion de la ONU es que:`,
    options:['Kant se oponia a la creacion de organizaciones internacionales','La ONU representa un intento de realizar el ideal kantiano de una comunidad internacional juridica','La ONU se creo exactamente como Kant la describio','Kant predijo la fecha exacta de la creacion de la ONU'],
    correct:1,
    explanation:{correct:'El texto afirma que la ONU y la UE "pueden verse como intentos de realizar el ideal kantiano" de una comunidad internacional regida por el derecho.',wrongs:['Kant propuso precisamente la creacion de una federacion de Estados libres','Opcion correcta','La ONU no sigue exactamente el modelo kantiano, pero comparte su espiritu','Kant no hizo predicciones especificas']}
  },
  {
    id:'SC66',area:'sociales',areaName:'Sociales y Ciudadania',difficulty:'media',
    context:`"Colombia es uno de los paises con mayor biodiversidad del mundo, pero tambien uno de los que mas rapidamente pierde sus ecosistemas naturales. Segun el IDEAM, la deforestacion en Colombia alcanzo 174.103 hectareas en 2022, concentrada principalmente en la Amazonia. Las causas principales son la expansion de la frontera agricola y ganadera, la mineria ilegal y los cultivos de uso ilicito. Los bosques amazonicos son fundamentales para la regulacion del clima global, y su destruccion contribuye al cambio climatico."`,
    question:`Cual es la principal causa de deforestacion en Colombia segun el texto?`,
    options:['El crecimiento urbano y la construccion de ciudades','La expansion de la frontera agricola, la mineria ilegal y los cultivos ilicitos','Los incendios forestales naturales','La tala legal autorizada por el gobierno'],
    correct:1,
    explanation:{correct:'El texto identifica como causas principales "la expansion de la frontera agricola y ganadera, la mineria ilegal y los cultivos de uso ilicito".',wrongs:['La urbanizacion no es la causa principal mencionada','Opcion correcta','No se mencionan incendios naturales como causa principal','La tala legal no es senalada como causa de la alta deforestacion']}
  },
  {
    id:'SC67',area:'sociales',areaName:'Sociales y Ciudadania',difficulty:'facil',
    question:`El derecho a la igualdad consagrado en la Constitucion colombiana implica que:`,
    options:['Todos los ciudadanos deben recibir el mismo salario independientemente de su trabajo','El Estado debe tratar igual a todas las personas y promover condiciones para que los grupos discriminados alcancen la igualdad real','Las mujeres deben tener los mismos derechos que los hombres, pero no los ninos','Las personas con discapacidad no necesitan proteccion especial del Estado'],
    correct:1,
    explanation:{correct:'El derecho a la igualdad (art. 13 Constitucion) establece que "todas las personas nacen libres e iguales ante la ley" y que el Estado debe promover condiciones para que "la igualdad sea real y efectiva", adoptando medidas a favor de grupos discriminados o marginados.',wrongs:['La igualdad no exige salarios identicos sino igualdad de oportunidades','Opcion correcta','La Constitucion protege a todos, incluyendo ninos y grupos vulnerables','El Estado debe dar proteccion especial a personas con discapacidad']}
  },

  // ===== CIENCIAS NATURALES (CN62-CN69) =====
  {
    id:'CN62',area:'ciencias',areaName:'Ciencias Naturales',difficulty:'dificil',
    context:`"Un estudiante de biologia realiza un experimento para investigar el efecto de la temperatura en la actividad enzimatica. Coloca cinco tubos de ensayo con igual concentracion de la enzima catalasa y peroxido de hidrogeno (H2O2). Cada tubo se mantiene a una temperatura diferente: 0°C, 20°C, 37°C, 60°C y 90°C. Mide la velocidad de reaccion observando la formacion de burbujas de oxigeno. Los resultados muestran que la velocidad maxima de reaccion ocurre a 37°C, mientras que a 0°C y 90°C la reaccion es casi imperceptible."`,
    question:`La disminucion de la actividad enzimatica a 90°C se debe probablemente a:`,
    options:['La congelacion de la enzima','La desnaturalizacion de la enzima por el calor','La evaporacion del peroxido de hidrogeno','El aumento de la concentracion del sustrato'],
    correct:1,
    explanation:{correct:'Las enzimas son proteinas que se desnaturalizan (pierden su estructura tridimensional) a altas temperaturas, lo que elimina su actividad catalitica. A 90°C la enzima se desnaturaliza.',wrongs:['A 90°C no hay congelacion','Opcion correcta','El peroxido se descompone, pero la causa principal es la desnaturalizacion enzimatica','La concentracion no aumenta significativamente']}
  },
  {
    id:'CN63',area:'ciencias',areaName:'Ciencias Naturales',difficulty:'media',
    table:{
      headers:['Sustancia','pH'],
      rows:[
        ['Jugo de limon','2,5'],
        ['Vinagre','3,0'],
        ['Cafe negro','5,0'],
        ['Agua pura','7,0'],
        ['Leche de magnesia','10,5'],
        ['Hidroxido de sodio 0,1M','13,0']
      ],
      caption:'Escala de pH de algunas sustancias'
    },
    context:'La tabla muestra el pH de diversas sustancias. La escala de pH va de 0 a 14, donde pH < 7 es acido, pH = 7 es neutro y pH > 7 es basico.',
    question:'Si se mezcla cafe negro con leche de magnesia, el pH de la mezcla probablemente sera:',
    options:['Mayor que 5,0 y menor que 7,0','Entre 5,0 y 10,5 dependiendo de las cantidades','Menor que 5,0','Exactamente 7,0'],
    correct:1,
    explanation:{correct:'Se mezcla una solucion acida (cafe, pH 5,0) con una basica (leche de magnesia, pH 10,5). El pH resultante dependera de las cantidades relativas, pero estara entre ambos valores.',wrongs:['Si la leche de magnesia esta en suficiente cantidad, podria subir el pH por encima de 7','Opcion correcta','El pH resultante dependera de la cantidad relativa de cada uno','Solo si las cantidades son exactamente equivalentes se neutralizaria a pH 7']}
  },
  {
    id:'CN64',area:'ciencias',areaName:'Ciencias Naturales',difficulty:'facil',
    context:`"El cuerpo humano mantiene una temperatura interna constante de aproximadamente 37°C, independientemente de la temperatura del ambiente. Cuando la temperatura ambiental es alta, el cuerpo activa mecanismos de enfriamiento como la sudoracion y la vasodilatacion (aumento del diametro de los vasos sanguineos en la piel). Cuando la temperatura ambiental es baja, activa mecanismos de conservacion de calor como el tirito (contracciones musculares involuntarias que generan calor) y la vasoconstriccion."`,
    question:`La capacidad del cuerpo humano de mantener su temperatura interna constante se llama:`,
    options:['Metabolismo','Homeostasis','Fotosintesis','Digestion'],
    correct:1,
    explanation:{correct:'La homeostasis es la capacidad de mantener las condiciones internas del cuerpo (como temperatura, pH, concentracion de glucosa) dentro de limites estables a pesar de los cambios externos.',wrongs:['El metabolismo son las reacciones quimicas del cuerpo','Opcion correcta','La fotosintesis es un proceso de las plantas','La digestion es el procesamiento de alimentos']}
  },
  {
    id:'CN65',area:'ciencias',areaName:'Ciencias Naturales',difficulty:'dificil',
    context:`"Un objeto de 2 kg se deja caer desde una altura de 20 metros. Despreciando la resistencia del aire, la energia potencial gravitacional del objeto se convierte en energia cinetica a medida que cae. Al llegar al suelo, toda la energia potencial inicial se ha transformado en energia cinetica."`,
    question:'Si la gravedad es 10 m/s^2, la velocidad del objeto al llegar al suelo es:',
    options:['10 m/s','15 m/s','20 m/s','25 m/s'],
    correct:2,
    explanation:{correct:'Energia potencial inicial = mgh = 2x10x20 = 400 J. Al llegar al suelo: Ec = (1/2)mv^2 = 400 J. v^2 = (2x400)/2 = 400. v = raiz(400) = 20 m/s.',wrongs:['Calculaste solo gh o raiz de 100','Calculaste mal la conversion','Opcion correcta','Usaste una formula incorrecta']}
  },
  {
    id:'CN66',area:'ciencias',areaName:'Ciencias Naturales',difficulty:'media',
    table:{
      headers:['Planeta','Distancia al Sol (UA)','Diametro (km)','Periodo orbital (anos)'],
      rows:[
        ['Mercurio','0,39','4.879','0,24'],
        ['Venus','0,72','12.104','0,62'],
        ['Tierra','1,00','12.756','1,00'],
        ['Marte','1,52','6.792','1,88'],
        ['Jupiter','5,20','142.984','11,86']
      ],
      caption:'Caracteristicas de los planetas interiores y Jupiter'
    },
    context:'La tabla muestra datos de los primeros cinco planetas del sistema solar. UA = Unidad Astronomica (distancia Tierra-Sol).',
    question:'Segun la tabla, cual es la relacion entre la distancia al Sol y el periodo orbital?',
    options:['A mayor distancia, menor periodo orbital','A mayor distancia, mayor periodo orbital','No existe relacion entre ambas variables','La relacion es inversamente proporcional'],
    correct:1,
    explanation:{correct:'La tabla muestra que Mercurio (0,39 UA) tiene periodo de 0,24 anos, mientras que Jupiter (5,20 UA) tiene periodo de 11,86 anos. A mayor distancia, mayor periodo orbital (Tercera Ley de Kepler).',wrongs:['Los datos muestran lo contrario','Opcion correcta','Si existe una relacion clara','La relacion es directamente proporcional, no inversamente']}
  },
  {
    id:'CN67',area:'ciencias',areaName:'Ciencias Naturales',difficulty:'facil',
    context:`"La polinizacion es el proceso de transferencia de polen desde los estambres (organo masculino de la flor) hasta el pistilo (organo femenino). Este proceso puede realizarse mediante el viento (polinizacion anemofila) o mediante animales como abejas, mariposas y colibries (polinizacion zoofila). Las abejas son los polinizadores mas importantes: se estima que polinizan aproximadamente el 75% de los cultivos que consume la humanidad."`,
    question:`Segun el texto, la mayoria de los cultivos que consume la humanidad dependen de la polinizacion por:`,
    options:['El viento','Las abejas','El agua','Las aves exclusivamente'],
    correct:1,
    explanation:{correct:'El texto afirma que "las abejas polinizan aproximadamente el 75% de los cultivos que consume la humanidad".',wrongs:['La polinizacion por viento es menos frecuente','Opcion correcta','El agua no es un medio de polinizacion','Aunque las aves polinizan, las abejas son las mas importantes']}
  },
  {
    id:'CN68',area:'ciencias',areaName:'Ciencias Naturales',difficulty:'dificil',
    context:`"La espectroscopia es una tecnica analitica que estudia la interaccion entre la radiacion electromagnetica y la materia. Cada elemento quimico absorbe y emite radiacion en longitudes de onda especificas, lo que produce un 'espectro' unico, comparable a una huella digital. Cuando la luz del Sol pasa a traves de un prisma, se descompone en los colores del arcoiris. Las lineas oscuras en este espectro (lineas de Fraunhofer) revelan la composicion quimica de las capas externas del Sol."`,
    question:`La espectroscopia permite identificar elementos quimicos porque:`,
    options:['Todos los elementos absorben la luz de la misma manera','Cada elemento tiene un espectro de absorcion unico y caracteristico','Los elementos no interactuan con la radiacion electromagnetica','Solo los metales producen espectros detectables'],
    correct:1,
    explanation:{correct:'Cada elemento quimico produce "un espectro unico, comparable a una huella digital" debido a que sus electrones absorben y emiten fotones de longitudes de onda especificas.',wrongs:['Cada elemento tiene un espectro diferente','Opcion correcta','La espectroscopia se basa precisamente en esa interaccion','Todos los elementos, no solo los metales, producen espectros caracteristicos']}
  },
  {
    id:'CN69',area:'ciencias',areaName:'Ciencias Naturales',difficulty:'media',
    context:`"La resistencia bacteriana a los antibioticos es un fenomeno natural acelerado por el uso excesivo e inadecuado de estos medicamentos. Cuando una poblacion de bacterias es expuesta a un antibiotico, las bacterias susceptibles mueren, pero aquellas que tienen mutaciones que les confieren resistencia sobreviven y se reproducen. Este proceso de seleccion natural ha llevado a la aparicion de 'superbacterias' resistentes a multiples antibioticos. La Organizacion Mundial de la Salud (OMS) considera la resistencia antimicrobiana como una de las 10 principales amenazas de salud publica global."`,
    question:`Segun el texto, la resistencia bacteriana se desarrolla principalmente por:`,
    options:['La exposicion directa de las bacterias a los antibioticos que induce mutaciones','La seleccion natural de bacterias con mutaciones que les permiten sobrevivir al antibiotico','La debilidad del sistema inmunologico humano','La falta de vacunas contra las bacterias'],
    correct:1,
    explanation:{correct:'El texto explica que las bacterias con mutaciones que "les confieren resistencia sobreviven y se reproducen", mientras las susceptibles mueren. Es seleccion natural, no induccion directa de mutaciones.',wrongs:['Las mutaciones ocurren al azar, no son inducidas por el antibiotico; este selecciona las resistentes','Opcion correcta','El sistema inmunologico es relevante pero no es la causa de la resistencia','Las vacunas previenen infecciones virales principalmente, no son el foco de la resistencia bacteriana']}
  },

  // ===== INGLES (EN61-EN68) =====
  {
    id:'EN61',area:'ingles',areaName:'Ingles',difficulty:'media',
    context:`Read the notice from a public library:
"LIBRARY NOTICE: Please return all borrowed books by June 15th. After this date, a late fee of $500 per day will apply. The library will be closed from June 20th to June 25th for maintenance. Online resources will still be available during this period."`,
    question:`What happens if you return a book on June 18th?`,
    options:['You can still borrow more books','You will have to pay a late fee','The library will keep the book','You will get a discount on your next visit'],
    correct:1,
    explanation:{correct:'Books must be returned "by June 15th". Returning on June 18th is after the deadline, so "a late fee of $500 per day will apply."',wrongs:['After June 15th, there are restrictions','Opcion correcta','The library does not keep books','No discount is mentioned']}
  },
  {
    id:'EN62',area:'ingles',areaName:'Ingles',difficulty:'facil',
    context:`Read the advertisement:
"Green Valley Organic Market - Fresh fruits and vegetables directly from local farms. Open Monday to Saturday, 8 AM to 8 PM. Special offer: 20% off on all organic products this weekend. Location: Carrera 15 #45-20, Bogota. We deliver! Call 123-4567."`,
    question:`What can customers get this weekend?`,
    options:['Free delivery','A 20% discount on organic products','A free sample of local fruits','A membership card'],
    correct:1,
    explanation:{correct:'The ad states that this weekend there is a "Special offer: 20% off on all organic products."',wrongs:['Delivery is always available, not just this weekend','Opcion correcta','No free samples are mentioned','No membership card is offered']}
  },
  {
    id:'EN63',area:'ingles',areaName:'Ingles',difficulty:'dificil',
    context:`Read the text:
"Scientists at the National University of Colombia have developed a new type of bioplastic made from banana peels. The material, which decomposes in just 90 days, could replace traditional plastics in food packaging. 'Colombia produces about 4 million tons of bananas per year, and 40% of the fruit's weight ends up as waste,' said Dr. Maria Rodriguez, lead researcher. 'We are turning a problem into a solution.' The team is now looking for investors to scale up production."`,
    question:`What problem does this bioplastic solve according to the text?`,
    options:['The high cost of banana production','The waste generated by banana production','The lack of plastic in Colombia','The low consumption of bananas'],
    correct:1,
    explanation:{correct:'The text states that "40% of the fruit\'s weight ends up as waste" and the bioplastic is "turning a problem into a solution" by using this waste.',wrongs:['Cost is not mentioned','Opcion correcta','The problem is too much plastic waste, not a lack of it','Consumption of bananas is not the issue']}
  },
  {
    id:'EN64',area:'ingles',areaName:'Ingles',difficulty:'media',
    context:`Read the text:
"The Amazon rainforest is often called 'the lungs of the Earth' because it produces about 20% of the world's oxygen. It is home to 10% of all known species on the planet. However, deforestation is destroying this ecosystem at an alarming rate. Every minute, an area of rainforest the size of two football fields is lost."`,
    question:`Why is the Amazon rainforest called 'the lungs of the Earth'?`,
    options:['Because it has many trees','Because it produces a significant amount of the world\'s oxygen','Because it is very large','Because it is home to many animals'],
    correct:1,
    explanation:{correct:'The text explicitly states the Amazon is called this "because it produces about 20% of the world\'s oxygen."',wrongs:['That is true but not the specific reason for the nickname','Opcion correcta','Being large is a fact but not why it is called "lungs"','That is true but not the specific reason']}
  },
  {
    id:'EN65',area:'ingles',areaName:'Ingles',difficulty:'media',
    context:`Read the email:
"Dear Mr. Gutierrez, We are writing to inform you that your application for the position of Software Developer at TechCorp has been selected for the next stage. Your interview is scheduled for July 10th at 10 AM at our main office. Please bring a copy of your portfolio and two references. If you need to reschedule, please contact us at least 48 hours in advance. Best regards, HR Department - TechCorp"`,
    question:`What does the company ask Mr. Gutierrez to bring to the interview?`,
    options:['His laptop and phone','His portfolio and references','A list of questions','A letter of recommendation'],
    correct:1,
    explanation:{correct:'The email asks him to "bring a copy of your portfolio and two references."',wrongs:['Electronic devices are not mentioned','Opcion correcta','The email does not ask for questions','It asks for references, not a letter of recommendation']}
  },
  {
    id:'EN66',area:'ingles',areaName:'Ingles',difficulty:'facil',
    context:`Read the sign at a park:
"Park Rules: 1. Dogs must be on a leash at all times. 2. No littering. 3. Do not feed the birds. 4. Park closes at 9 PM. Violators will be fined."`,
    question:`What must dog owners do according to the rules?`,
    options:['Keep their dogs at home','Keep their dogs on a leash','Let their dogs run freely','Feed the birds'],
    correct:1,
    explanation:{correct:'Rule #1 explicitly states "Dogs must be on a leash at all times."',wrongs:['Dogs are allowed in the park with a leash','Opcion correcta','Dogs must be on a leash, not free','Rule #3 says do not feed the birds']}
  },
  {
    id:'EN67',area:'ingles',areaName:'Ingles',difficulty:'dificil',
    context:`Read the text:
"In 2018, the International Energy Agency reported that Colombia had the potential to generate more than 300 GW of renewable energy, but only 1.5 GW were being used. The country relies heavily on hydroelectric power, which provides about 70% of its electricity. However, climate change has made rainfall patterns less predictable, affecting hydroelectric generation. This has prompted interest in diversifying the energy matrix with solar and wind power."`,
    question:`What challenge does Colombia's reliance on hydroelectric power create?`,
    options:['Solar energy is too expensive','Rainfall patterns are becoming less predictable due to climate change','Wind power is not available in Colombia','The country cannot export energy'],
    correct:1,
    explanation:{correct:'The text states that "climate change has made rainfall patterns less predictable, affecting hydroelectric generation." This is the challenge of relying on hydro power.',wrongs:['The text does not discuss solar costs','Opcion correcta','The text mentions wind power potential','The text does not discuss energy exports']}
  },
  {
    id:'EN68',area:'ingles',areaName:'Ingles',difficulty:'facil',
    context:`Read the story:
"Maria moved to a new school in Cartagena. On her first day, she felt nervous because she did not know anyone. During lunch, a girl named Sofia sat next to her and said hello. They discovered they both loved reading mystery novels. By the end of the week, Maria and Sofia had become best friends."`,
    question:`What can be inferred about Maria after her first week?`,
    options:['She decided to change schools','She made a good friend','She stopped reading books','She still felt lonely'],
    correct:1,
    explanation:{correct:'The story says "by the end of the week, Maria and Sofia had become best friends," so she made a good friend.',wrongs:['She stayed at the school','Opcion correcta','The story mentions they both love reading','She found a friend so she was not lonely anymore']}
  },

  // ===== LECTURA CRITICA (LC69-LC76) =====
  {
    id:'LC69',area:'lectura',areaName:'Lectura Critica',difficulty:'media',
    context:`"La Ilustracion fue un movimiento filosofico y cultural del siglo XVIII que postulo que la razon humana podia resolver los problemas de la humanidad. Kant la definio como 'la salida del hombre de su autoculpable minoria de edad'. Los ilustrados creian en el progreso, la tolerancia y los derechos naturales del hombre. Sin embargo, autores como Theodor Adorno y Max Horkheimer, en su Dialectica de la Ilustracion (1944), criticaron esta fe en la razon: argumentaron que la misma racionalidad que libero al hombre de los mitos tambien creo nuevas formas de dominacion, como el totalitarismo y la explotacion capitalista."`,
    question:`La posicion de Adorno y Horkheimer frente a la Ilustracion es:`,
    options:['De aceptacion total de sus ideales','Critica, porque la razon ilustrada tambien genero nuevas formas de dominacion','De rechazo a la razon como instrumento de conocimiento','De indiferencia hacia el pensamiento ilustrado'],
    correct:1,
    explanation:{correct:'Los autores de la Escuela de Frankfurt "criticaron esta fe en la razon" argumentando que la misma razon que libero del mito "creo nuevas formas de dominacion".',wrongs:['Son criticos de la Ilustracion, no aceptacion total','Opcion correcta','No rechazan la razon, sino su uso absoluto','El texto presenta una posicion critica explicita']}
  },
  {
    id:'LC70',area:'lectura',areaName:'Lectura Critica',difficulty:'facil',
    context:`"La Registraduria Nacional del Estado Civil es la entidad encargada de organizar las elecciones en Colombia. Cada cuatro anos, los ciudadanos eligen presidente, congresistas, gobernadores, alcaldes y concejales. El voto es obligatorio para mayores de 18 anos, aunque existen sanciones por no votar que incluyen multas y restricciones para tramitar documentos."`,
    question:`Se puede inferir del texto que no votar en Colombia:`,
    options:['No tiene ninguna consecuencia','Puede generar multas y restricciones administrativas','Es un derecho que se puede ejercer libremente sin consecuencias','Solo afecta a los candidatos'],
    correct:1,
    explanation:{correct:'El texto afirma que existen "sanciones por no votar que incluyen multas y restricciones para tramitar documentos".',wrongs:['Si tiene consecuencias legales','Opcion correcta','Aunque es obligatorio, hay consecuencias por no cumplir','Afecta directamente al ciudadano que no vota']}
  },
  {
    id:'LC71',area:'lectura',areaName:'Lectura Critica',difficulty:'dificil',
    context:`"En su obra Las palabras y las cosas (1966), Michel Foucault analiza la 'episteme' de cada epoca historica: el conjunto de condiciones que hacen posible el conocimiento en un momento dado. Foucault identifica tres epistemes en la historia de Occidente: la del Renacimiento (basada en la semejanza), la clasica (basada en la representacion) y la moderna (basada en el hombre como sujeto y objeto de conocimiento). Para Foucault, no hay progreso lineal del conocimiento, sino rupturas y discontinuidades entre estas epistemes. El conocimiento no se acumula, sino que se reorganiza segun nuevas reglas."`,
    question:`Para Foucault, el conocimiento a traves de la historia se caracteriza por:`,
    options:['Un progreso lineal y continuo hacia la verdad','Rupturas y discontinuidades entre diferentes formas de pensar','La acumulacion gradual de saberes','La repeticion de las mismas ideas'],
    correct:1,
    explanation:{correct:'Foucault sostiene que hay "rupturas y discontinuidades" entre epistemes y que "el conocimiento no se acumula, sino que se reorganiza segun nuevas reglas".',wrongs:['Foucault niega el progreso lineal del conocimiento','Opcion correcta','No hay acumulacion sino reorganizacion','Cada epoca tiene su propia episteme con reglas distintas']}
  },
  {
    id:'LC72',area:'lectura',areaName:'Lectura Critica',difficulty:'media',
    context:`"El consumo de drogas en Colombia ha sido abordado desde dos enfoques principales: la prohibicion y la reduccion de danos. El enfoque prohibicionista, predominante desde la Convencion Unica de Estupefacientes de 1961, considera el consumo como un delito y prioriza la persecucion penal. El enfoque de reduccion de danos, en cambio, parte de que el consumo existira siempre y busca minimizar sus efectos negativos mediante politicas de salud publica, como programas de intercambio de jeringas y tratamiento asistido. La Corte Constitucional colombiana ha reconocido el derecho al consumo de la dosis personal (Sentencia C-221 de 1994), aunque su implementacion ha sido controvertida."`,
    question:`La diferencia fundamental entre prohibicion y reduccion de danos es que:`,
    options:['Ambas buscan eliminar el consumo de drogas','La primera enfatiza el castigo; la segunda, la salud publica','La reduccion de danos es mas punitiva que la prohibicion','La prohibicion es un enfoque de salud publica'],
    correct:1,
    explanation:{correct:'El prohibicionismo "considera el consumo como un delito y prioriza la persecucion penal", mientras que la reduccion de danos "busca minimizar sus efectos negativos mediante politicas de salud publica".',wrongs:['La reduccion de danos acepta que el consumo existira','Opcion correcta','Es al reves: la prohibicion es mas punitiva','La prohibicion es un enfoque penal, no de salud publica']}
  },
  {
    id:'LC73',area:'lectura',areaName:'Lectura Critica',difficulty:'facil',
    context:`"La energia solar es una fuente renovable e inagotable. Colombia recibe un promedio de 4,5 kWh/m² al dia de radiacion solar, un nivel comparable al de Alemania, pais lider en energia solar. Sin embargo, la capacidad instalada de paneles solares en Colombia es 50 veces menor que la de Alemania. Esto se debe a factores como la falta de incentivos economicos, la poca divulgacion de la tecnologia y la competencia con la energia hidroelectrica, que tradicionalmente ha sido barata en el pais."`,
    question:`A pesar de tener niveles de radiacion similares a Alemania, Colombia genera menos energia solar porque:`,
    options:['El sol no brilla lo suficiente en Colombia','Faltan incentivos economicos y hay poca divulgacion tecnologica','La energia solar es mas cara que en Alemania','No existe la tecnologia necesaria'],
    correct:1,
    explanation:{correct:'El texto menciona "falta de incentivos economicos, la poca divulgacion de la tecnologia y la competencia con la energia hidroelectrica" como causas.',wrongs:['Colombia recibe niveles comparables a Alemania','Opcion correcta','El texto no afirma que sea mas cara, sino que faltan incentivos','La tecnologia existe, pero no se ha difundido ampliamente']}
  },
  {
    id:'LC74',area:'lectura',areaName:'Lectura Critica',difficulty:'dificil',
    context:`"Charles Darwin, en El origen de las especies (1859), propuso dos ideas revolucionarias: que todas las especies descienden de ancestros comunes (evolucion) y que el mecanismo principal de este cambio es la seleccion natural. La seleccion natural, explicaba Darwin, opera cuando: (1) hay variacion entre los individuos de una poblacion, (2) algunas variaciones confieren ventajas para la supervivencia y reproduccion, y (3) estas variaciones ventajosas se heredan. Con el tiempo, la acumulacion de estos cambios produce nuevas especies. Darwin no conocia el mecanismo genetico de la herencia (Mendel era su contemporaneo, pero su trabajo no fue reconocido hasta 1900), pero sus observaciones sentaron las bases de la biologia moderna."`,
    question:`Segun el texto, Darwin no pudo explicar en su teoria:`,
    options:['Que las especies cambian con el tiempo','El mecanismo de la herencia de las variaciones ventajosas','Que existe variacion entre los individuos','Que la seleccion natural favorece ciertas variaciones'],
    correct:1,
    explanation:{correct:'El texto afirma que "Darwin no conocia el mecanismo genetico de la herencia" (Mendel fue redescubierto despues de su muerte), por lo que no pudo explicar el mecanismo hereditario.',wrongs:['Si pudo establecer que las especies cambian','Opcion correcta','Si observo la variacion entre individuos','Si propuso que la seleccion natural favorece ciertas variaciones']}
  },
  {
    id:'LC75',area:'lectura',areaName:'Lectura Critica',difficulty:'media',
    context:`"En 2023, el Departamento Nacional de Planeacion (DNP) publico un informe sobre la pobreza multidimensional en Colombia. El indice de pobreza multidimensional (IPM) mide carencias en cinco dimensiones: condiciones educativas, condiciones de la ninez y juventud, salud, trabajo y acceso a servicios publicos. Segun el informe, la pobreza multidimensional disminuyo del 17,4% en 2010 al 12,9% en 2022. Sin embargo, persisten brechas significativas entre zonas urbanas (9,7%) y rurales (24,8%)."`,
    question:`El texto sugiere que la pobreza multidimensional en Colombia:`,
    options:['Se ha eliminado por completo','Ha disminuido pero persisten brechas entre zonas urbanas y rurales','Afecta por igual a todo el pais','Solo se mide por el ingreso economico'],
    correct:1,
    explanation:{correct:'El indice disminuyo de 17,4% a 12,9% pero "persisten brechas significativas entre zonas urbanas (9,7%) y rurales (24,8%)".',wrongs:['Aun afecta al 12,9% de la poblacion','Opcion correcta','Hay una brecha significativa: 9,7% vs 24,8%','El IPM mide 5 dimensiones, no solo ingreso']}
  },
  {
    id:'LC76',area:'lectura',areaName:'Lectura Critica',difficulty:'facil',
    context:`"La democracia participativa colombiana incluye mecanismos como el plebiscito, el referendo, la consulta popular, el cabildo abierto, la iniciativa legislativa y la revocatoria del mandato. La constitucion de 1991 incorporo estos mecanismos para complementar la democracia representativa y permitir que los ciudadanos participen directamente en las decisiones politicas."`,
    question:`La democracia participativa se diferencia de la democracia representativa porque:`,
    options:['Elimina la necesidad de elegir representantes','Permite la participacion directa de los ciudadanos en decisiones politicas','Solo funciona a nivel municipal','No esta contemplada en la Constitucion'],
    correct:1,
    explanation:{correct:'La democracia participativa "permite que los ciudadanos participen directamente en las decisiones politicas" mediante mecanismos como plebiscitos y referendos, complementando la democracia representativa.',wrongs:['No elimina la representacion, la complementa','Opcion correcta','Aplica a todos los niveles territoriales','Si esta contemplada en la Constitucion de 1991']}
  },

  // ===== LECTURA CRITICA (LC77-LC84) =====
  {
    id:'LC77',area:'lectura',areaName:'Lectura Critica',difficulty:'dificil',
    context:`"Hannah Arendt, en su obra Eichmann en Jerusalen (1963), acuno el termino 'la banalidad del mal' al cubrir el juicio del oficial nazi Adolf Eichmann. Arendt observo que Eichmann no era un monstruo sadico, sino un funcionario mediocre que se limitaba a cumplir ordenes sin reflexionar sobre sus consecuencias. Para Arendt, el mayor peligro del totalitarismo no reside en la maldad excepcional de algunos individuos, sino en la capacidad de personas comunes de cometer actos atroces simplemente por obediencia y falta de pensamiento critico. Esta tesis genero un intenso debate: algunos criticos acusaron a Arendt de minimizar la responsabilidad de los perpetradores."`,
    question:`El concepto de 'banalidad del mal' se refiere a:`,
    options:['Que el mal es un fenomeno poco frecuente en la historia','Que actos atroces pueden ser cometidos por personas comunes que obedecen sin pensar','Que Eichmann era inocente de los crimenes que se le imputaban','Que solo las personas intrinsecamente malvadas cometen crimenes'],
    correct:1,
    explanation:{correct:'Arendt observo que Eichmann era un "funcionario mediocre" que cometio actos atroces por "obediencia y falta de pensamiento critico". La banalidad del mal es que personas comunes pueden hacer el mal.',wrongs:['Arendt argumenta que el mal puede ser muy frecuente precisamente por su banalidad','Opcion correcta','Arendt no lo exculpo, sino que analizo su psicologia','La tesis es precisamente que no se necesita ser intrinsecamente malvado']}
  },
  {
    id:'LC78',area:'lectura',areaName:'Lectura Critica',difficulty:'media',
    context:`"La huella de carbono mide la cantidad total de emisiones de gases de efecto invernadero (GEI) producidas por un individuo, organizacion o producto. Segun el Banco Mundial, Colombia emite aproximadamente 1,6 toneladas de CO2 per capita al ano, muy por debajo del promedio mundial de 4,7 toneladas. Sin embargo, la deforestacion en la Amazonia colombiana libera anualmente alrededor de 100 millones de toneladas de CO2, una cifra que multiplica por 10 las emisiones oficiales del pais."`,
    question:`El texto sugiere que las emisiones reales de Colombia son mayores a las reportadas porque:`,
    options:['Los calculos oficiales incluyen la deforestacion','La deforestacion libera CO2 que no se contabiliza en las emisiones oficiales','Colombia emite mas que el promedio mundial','Las emisiones per capita son el unico indicador valido'],
    correct:1,
    explanation:{correct:'La deforestacion "libera anualmente alrededor de 100 millones de toneladas de CO2, una cifra que multiplica por 10 las emisiones oficiales del pais", lo que sugiere que las emisiones reales no se estan contabilizando completamente.',wrongs:['La deforestacion no se incluye en las cifras oficiales','Opcion correcta','Colombia esta por debajo del promedio mundial (1,6 vs 4,7 t)','La huella de carbono incluye mas que solo emisiones per capita']}
  },
  {
    id:'LC79',area:'lectura',areaName:'Lectura Critica',difficulty:'facil',
    context:`"La democracia, decia Winston Churchill, es la peor forma de gobierno, excepto por todas las demas. Esta frase ironica reconoce que la democracia tiene defectos: puede ser lenta, ineficiente y a veces produce malos lideres. Pero ningun otro sistema politico garantiza mejor los derechos humanos, la rendicion de cuentas y la participacion ciudadana."`,
    question:`La frase de Churchill implica que la democracia:`,
    options:['Es un sistema politico perfecto','A pesar de sus defectos, es mejor que las alternativas','Debe ser reemplazada por otro sistema','Es la peor forma de gobierno sin excepcion'],
    correct:1,
    explanation:{correct:'Churchill dice que la democracia es "la peor forma de gobierno, excepto por todas las demas", meaning it has flaws but is still better than the alternatives.',wrongs:['Churchill reconoce que tiene defectos','Opcion correcta','Churchill dice que es mejor que las alternativas','El "excepto" es la clave: aun con defectos, supera a las alternativas']}
  },
  {
    id:'LC80',area:'lectura',areaName:'Lectura Critica',difficulty:'dificil',
    context:`"Aristoteles, en su Etica a Nicomaco, distingue tres tipos de conocimiento: la episteme (conocimiento cientifico-teorico), la techne (conocimiento tecnico o habilidad practica) y la phronesis (sabiduria practica o prudencia). La phronesis es la capacidad de deliberar correctamente sobre lo que es bueno y conveniente para la vida en comunidad. A diferencia de la episteme, que busca verdades universales, la phronesis se ocupa de situaciones particulares y requiere experiencia. Para Aristoteles, la phronesis es la virtud intelectual mas importante para el gobernante, pues permite tomar decisiones justas en contextos complejos donde no hay reglas fijas."`,
    question:`Segun Aristoteles, la phronesis se diferencia de la episteme porque:`,
    options:['Busca verdades universales e inmutables','Se ocupa de situaciones particulares y requiere experiencia','Es un conocimiento puramente teorico','No tiene aplicacion practica en el gobierno'],
    correct:1,
    explanation:{correct:'La phronesis "se ocupa de situaciones particulares y requiere experiencia", mientras que la episteme "busca verdades universales".',wrongs:['Esa es la caracteristica de la episteme, no de la phronesis','Opcion correcta','La phronesis es practica, no teorica','Aristoteles la considera la virtud mas importante para el gobernante']}
  },
  {
    id:'LC81',area:'lectura',areaName:'Lectura Critica',difficulty:'media',
    context:`"El telefono movil ha cambiado la forma en que nos relacionamos. Segun un estudio de la Universidad de los Andes, el 85% de los jovenes colombianos revisa su telefono en los primeros 15 minutos despues de despertarse. El 60% admite que usa el telefono durante las comidas familiares, y el 40% lo revisa mientras cruza la calle. Los investigadores senalan que este uso constante del telefono puede afectar la concentracion, la memoria y la calidad de las interacciones cara a cara."`,
    question:`Cual de las siguientes afirmaciones es una inferencia valida del texto?`,
    options:['El telefono movil solo tiene efectos negativos','El uso intensivo del telefono podria estar afectando las habilidades sociales de los jovenes','Los jovenes colombianos no usan el telefono en la calle','El estudio recomienda prohibir los telefonos en las comidas'],
    correct:1,
    explanation:{correct:'Si el 60% usa el telefono durante las comidas familiares y el estudio senala que afecta "la calidad de las interacciones cara a cara", se infiere que podria estar afectando las habilidades sociales.',wrongs:['El texto no afirma que solo tenga efectos negativos','Opcion correcta','El 40% lo revisa mientras cruza la calle','El texto reporta el estudio, no hace recomendaciones']}
  },
  {
    id:'LC82',area:'lectura',areaName:'Lectura Critica',difficulty:'facil',
    context:`"El agua es un recurso finito y esencial para la vida. Colombia es uno de los paises mas ricos del mundo en agua dulce: cuenta con 36 rios principales y mas de 1.000 lagunas y humedales. Sin embargo, la contaminacion, la deforestacion y el cambio climatico estan afectando la disponibilidad y calidad del agua. Segun el IDEAM, el 44% de los municipios colombianos presentan algun nivel de estres hidrico."`,
    question:`A pesar de su riqueza hidrica, Colombia enfrenta problemas de agua porque:`,
    options:['El agua es un recurso infinito','La contaminacion, deforestacion y cambio climatico afectan su disponibilidad y calidad','Todos los municipios tienen abundante agua','El agua solo se usa para consumo humano'],
    correct:1,
    explanation:{correct:'El texto senala que "la contaminacion, la deforestacion y el cambio climatico estan afectando la disponibilidad y calidad del agua".',wrongs:['El texto dice que es un recurso finito','Opcion correcta','El 44% de los municipios tiene estres hidrico','El agua tiene multiples usos']}
  },
  {
    id:'LC83',area:'lectura',areaName:'Lectura Critica',difficulty:'dificil',
    context:`"Friedrich Nietzsche, en su obra La genealogia de la moral (1887), propone que los conceptos morales de 'bien' y 'mal' no son universales ni eternos, sino que tienen una historia. Nietzsche distingue entre dos morales: la moral de los senores (aristocratica, que valora la fuerza, el orgullo y la nobleza) y la moral de los esclavos (que surge del resentimiento de los debiles contra los fuertes y valora la humildad, la compasion y la igualdad). Para Nietzsche, el cristianismo representa el triunfo de la moral de los esclavos, que ha impuesto sus valores a traves de la historia occidental."`,
    question:`Para Nietzsche, la moral cristiana es una expresion de:`,
    options:['La fuerza y el orgullo de los nobles','El resentimiento de los debiles que imponen sus valores de humildad e igualdad','Los valores universales e inmutables de la razon','El progreso moral de la humanidad'],
    correct:1,
    explanation:{correct:'Nietzsche ve el cristianismo como "el triunfo de la moral de los esclavos", que nace "del resentimiento de los debiles contra los fuertes" e impone valores como la humildad y la igualdad.',wrongs:['Esa es la moral de los senores, no la cristiana','Opcion correcta','Nietzsche precisamente niega que los valores morales sean universales o inmutables','Nietzsche no ve esto como progreso sino como decadencia']}
  },
  {
    id:'LC84',area:'lectura',areaName:'Lectura Critica',difficulty:'media',
    context:`"La desalinizacion del agua de mar es una tecnologia que permite obtener agua potable en zonas costeras con escasez hidrica. El proceso mas comun es la osmosis inversa, que utiliza membranas para separar la sal del agua. Sin embargo, esta tecnologia tiene costos energeticos elevados y genera salmuera residual que puede afectar los ecosistemas marinos. A pesar de sus desventajas, paises como Israel, Arabia Saudita y Espana han implementado plantas desalinizadoras para enfrentar la escasez de agua."`,
    question:`El texto presenta la desalinizacion como una tecnologia que:`,
    options:['No tiene ningun impacto ambiental','Tiene ventajas (agua potable) y desventajas (alto costo energetico e impacto marino)','Es la unica solucion a la escasez hidrica','Es demasiado costosa para ser util en cualquier contexto'],
    correct:1,
    explanation:{correct:'La desalinizacion "permite obtener agua potable" pero tiene "costos energeticos elevados y genera salmuera residual" que afecta ecosistemas.',wrongs:['Si tiene impactos: salmuera residual y alto consumo energetico','Opcion correcta','El texto menciona otras alternativas y limitaciones','Paises como Israel la usan con exito, lo que muestra que puede ser util']}
  },

  // ===== MATEMATICAS (MT69-MT76) =====
  {
    id:'MT69',area:'matematicas',areaName:'Matematicas',difficulty:'dificil',
    table:{
      headers:['Mes','Clientes nuevos','Tasa de retencion (%)'],
      rows:[
        ['Enero','120','85'],
        ['Febrero','95','82'],
        ['Marzo','110','78'],
        ['Abril','130','75'],
        ['Mayo','105','80']
      ],
      caption:'Indicadores mensuales de una empresa en Bogota'
    },
    context:'La tabla muestra el numero de clientes nuevos y la tasa de retencion mensual de una empresa.',
    question:'Cual fue el promedio de clientes nuevos por mes en el periodo mostrado?',
    options:['105','112','120','115'],
    correct:1,
    explanation:{correct:'Promedio = (120+95+110+130+105)/5 = 560/5 = 112.',wrongs:['Calculaste 105 que es el valor de mayo','Opcion correcta','Calculaste la mediana en lugar del promedio?','Sumaste mal los valores']}
  },
  {
    id:'MT70',area:'matematicas',areaName:'Matematicas',difficulty:'media',
    context:'Se lanza un dado de 6 caras dos veces consecutivas. Se define la variable aleatoria X como la suma de los dos resultados obtenidos.',
    question:'Cual es la probabilidad de que X sea mayor que 10?',
    options:['1/36','1/18','1/12','1/6'],
    correct:2,
    explanation:{correct:'Sumas mayores a 10: 11 (5+6,6+5) y 12 (6+6). Total: 3 casos favorables de 36 posibles = 3/36 = 1/12.',wrongs:['Solo consideraste 12 (6+6) = 1/36','Calculaste (5+6) y (6+5) pero olvidaste (6+6) = 3/36 = 1/12','Opcion correcta','Calculaste 6/36 incluyendo sumas de 10 o menos']}
  },
  {
    id:'MT71',area:'matematicas',areaName:'Matematicas',difficulty:'facil',
    context:'Un bidon de agua tiene capacidad de 15 litros. Se utiliza para llenar botellas de 375 ml cada una.',
    question:'Cuantas botellas se pueden llenar completamente?',
    options:['30','35','40','45'],
    correct:2,
    explanation:{correct:'15 L = 15.000 ml. 15.000/375 = 40 botellas.',wrongs:['Calculaste 15.000/500 = 30','Calculaste 15.000/425 = 35,27','Opcion correcta','Calculaste 15.000/333 = 45']}
  },
  {
    id:'MT72',area:'matematicas',areaName:'Matematicas',difficulty:'dificil',
    context:'Una maquina produce 50 piezas por hora. La probabilidad de que una pieza sea defectuosa es del 2%. Aproximadamente, la probabilidad de que en una hora haya exactamente 2 piezas defectuosas es 0,185 (distribucion Poisson).',
    question:'La media de piezas defectuosas por hora es:',
    options:['0,5','1','2','5'],
    correct:1,
    explanation:{correct:'Media = n x p = 50 x 0,02 = 1 pieza defectuosa por hora.',wrongs:['Calculaste 50 x 0,01 = 0,5','Opcion correcta','Esa es la probabilidad, no la media','Calculaste 50 x 0,10 = 5']}
  },
  {
    id:'MT73',area:'matematicas',areaName:'Matematicas',difficulty:'media',
    context:'En una cafeteria de Medellin, un cafe americano cuesta $3.500 y un cafe latte cuesta $4.800. Durante una manana, se vendieron 45 cafes en total, recaudando $183.600.',
    question:'Cuantos cafes latte se vendieron?',
    options:['18','22','27','30'],
    correct:0,
    explanation:{correct:'x = latte, y= americanos. x+y=45, 4800x+3500y=183600. Despejando y=45-x. 4800x+3500(45-x)=183600 -> 4800x+157500-3500x=183600 -> 1300x=26100 -> x=18.',wrongs:['Opcion correcta','Calculaste mal el sistema de ecuaciones','Si x=27, 27+18=45 pero 27x4800+18x3500=192.600 no 183.600','Si x=30, 30+15=45 pero 30x4800+15x3500=196.500']}
  },
  {
    id:'MT74',area:'matematicas',areaName:'Matematicas',difficulty:'facil',
    question:'Si el area de un circulo es 78,5 cm^2, cual es la longitud de su radio? (A = pi x r^2, use pi = 3,14)',
    options:['3 cm','4 cm','5 cm','6 cm'],
    correct:2,
    explanation:{correct:'A = pi x r^2 -> 78,5 = 3,14 x r^2 -> r^2 = 78,5/3,14 = 25 -> r = 5 cm.',wrongs:['3^2 x 3,14 = 28,26, no 78,5','4^2 x 3,14 = 50,24, no 78,5','Opcion correcta','6^2 x 3,14 = 113,04, no 78,5']}
  },
  {
    id:'MT75',area:'matematicas',areaName:'Matematicas',difficulty:'dificil',
    table:{
      headers:['Categoria','Presupuesto ($)','Ejecutado ($)'],
      rows:[
        ['Educacion','4.500.000','4.275.000'],
        ['Salud','6.200.000','5.580.000'],
        ['Infraestructura','3.800.000','3.610.000'],
        ['Seguridad','2.500.000','2.500.000']
      ],
      caption:'Presupuesto municipal de un pueblo de Boyaca (en miles de pesos)'
    },
    context:'La tabla muestra el presupuesto asignado y ejecutado por un municipio de Boyaca.',
    question:'En que categoria hubo el mayor porcentaje de ejecucion del presupuesto?',
    options:['Educacion','Salud','Infraestructura','Seguridad'],
    correct:3,
    explanation:{correct:'Educacion: 4.275/4.500 = 95%. Salud: 5.580/6.200 = 90%. Infraestructura: 3.610/3.800 = 95%. Seguridad: 2.500/2.500 = 100%.',wrongs:['95% de ejecucion','90% de ejecucion','95% de ejecucion','Opcion correcta (100%)']}
  },
  {
    id:'MT76',area:'matematicas',areaName:'Matematicas',difficulty:'media',
    context:'Un arquitecto disena un parque en forma de triangulo rectangulo en la ciudad de Manizales. El lado mas largo (hipotenusa) mide 50 m y uno de los catetos mide 30 m.',
    question:'Cual es el area del parque?',
    options:['400 m^2','500 m^2','600 m^2','750 m^2'],
    correct:2,
    explanation:{correct:'h^2 = a^2 + b^2 -> 50^2 = 30^2 + b^2 -> 2500 = 900 + b^2 -> b^2 = 1600 -> b = 40 m. Area = (30 x 40)/2 = 600 m^2.',wrongs:['Calculaste 30 x 40 / 3 = 400','Calculaste (30 x 50)/3 = 500','Opcion correcta','Calculaste 30 x 50 / 2 = 750 (usaste mal Pitagoras)']}
  },

  // ===== SOCIALES (SC68-SC75) =====
  {
    id:'SC68',area:'sociales',areaName:'Sociales y Ciudadania',difficulty:'dificil',
    table:{
      headers:['Ano','PIB (billones COP)','Deuda publica (% PIB)','Desempleo (%)'],
      rows:[
        ['2019','1.054','50,3','10,5'],
        ['2020','948','65,0','15,9'],
        ['2021','1.027','63,7','13,7'],
        ['2022','1.193','60,4','11,2'],
        ['2023','1.281','55,8','10,3']
      ],
      caption:'Indicadores macroeconomicos de Colombia 2019-2023 (DANE y Banco de la Republica)'
    },
    context:'La tabla muestra la evolucion de indicadores economicos en Colombia.',
    question:'Que relacion se observa entre el PIB y el desempleo entre 2019 y 2020?',
    options:['El PIB aumento y el desempleo disminuyo','El PIB disminuyo y el desempleo aumento','Ambos indicadores aumentaron','Ambos indicadores disminuyeron'],
    correct:1,
    explanation:{correct:'Entre 2019 y 2020, el PIB cayo de $1.054 a $948 billones (contraccion por la pandemia), mientras que el desempleo subio de 10,5% a 15,9%.',wrongs:['Ocurrio lo opuesto por la crisis de la pandemia','Opcion correcta','El PIB disminuyo, no aumento','El desempleo aumento, no disminuyo']}
  },
  {
    id:'SC69',area:'sociales',areaName:'Sociales y Ciudadania',difficulty:'media',
    context:`"El 'populismo' es un concepto complejo y controvertido en la ciencia politica. Se caracteriza por un discurso que divide la sociedad en 'el pueblo' y 'la elite', presentandose como la unica voz autentica de la voluntad popular. Autores como Ernesto Laclau y Chantal Mouffe han argumentado que el populismo no es necesariamente antidemocratico, sino una forma de construir identidades politicas. Otros, como Jan-Werner Muller, sostienen que el populismo es inherentemente una amenaza para la democracia liberal porque rechaza el pluralismo y el disenso."`,
    question:`Un punto de controversia que presenta el texto sobre el populismo es:`,
    options:['Si es un fenomeno exclusivamente latinoamericano','Si el populismo es compatible o no con la democracia liberal','Si todos los populistas son de izquierda','Si el populismo desaparecera en el futuro'],
    correct:1,
    explanation:{correct:'Hay controversia entre autores que lo ven como "no necesariamente antidemocratico" (Laclau, Mouffe) y otros que lo ven como "amenaza para la democracia liberal" (Muller).',wrongs:['El texto no limita el populismo a Latinoamerica','Opcion correcta','El texto no discute la ideologia de los populistas','El texto presenta un debate teorico actual, no futuro']}
  },
  {
    id:'SC70',area:'sociales',areaName:'Sociales y Ciudadania',difficulty:'facil',
    question:`La funcion principal del Banco de la Republica de Colombia es:`,
    options:['Recaudar impuestos','Controlar la inflacion y mantener el poder adquisitivo de la moneda','Administrar el sistema de salud','Dirigir la politica exterior'],
    correct:1,
    explanation:{correct:'El Banco de la Republica es el banco central de Colombia. Su funcion principal es "controlar la inflacion y mantener el poder adquisitivo de la moneda" (Constitucion, art. 373).',wrongs:['Los impuestos los recauda la DIAN','Opcion correcta','La salud la administra el sistema de salud','La politica exterior la dirige Cancilleria']}
  },
  {
    id:'SC71',area:'sociales',areaName:'Sociales y Ciudadania',difficulty:'dificil',
    context:`"John Rawls, en su Teoria de la justicia (1971), propone dos principios fundamentales para una sociedad justa. El primero: cada persona tiene igual derecho al sistema mas amplio de libertades basicas. El segundo: las desigualdades economicas y sociales solo se justifican si (a) estan asociadas a posiciones abiertas a todos en condiciones de igualdad de oportunidades, y (b) benefician a los miembros menos aventajados de la sociedad (principio de diferencia). Este segundo principio permite desigualdades solo si mejoran la situacion de los mas pobres."`,
    question:`Segun Rawls, las desigualdades economicas son aceptables solo si:`,
    options:['Son eliminadas por completo','Benefician a los menos aventajados y estan asociadas a igualdad de oportunidades','Se basan en el merito individual sin restricciones','Son el resultado natural del libre mercado'],
    correct:1,
    explanation:{correct:'Rawls exige que las desigualdades (a) esten "abiertas a todos en condiciones de igualdad de oportunidades" y (b) "beneficien a los miembros menos aventajados".',wrongs:['Rawls no exige igualdad absoluta, sino desigualdades justificadas','Opcion correcta','Rawls condiciona el merito al beneficio de los menos favorecidos','Rawls critica el libre mercado sin regulacion']}
  },
  {
    id:'SC72',area:'sociales',areaName:'Sociales y Ciudadania',difficulty:'media',
    context:`"La migracion venezolana es el fenomeno migratorio mas grande en la historia reciente de America Latina. Segun Migracion Colombia, en 2023 habia aproximadamente 2,9 millones de venezolanos en Colombia. Esta poblacion se ha concentrado principalmente en Bogota (21%), Medellin (12%), y ciudades fronterizas como Cucuta y Barranquilla. La mayoria son jovenes en edad productiva (entre 18 y 40 anos), lo que representa tanto un desafio para los sistemas de salud y educacion como una oportunidad economica por su aporte al mercado laboral y al consumo."`,
    question:`El texto sugiere que la migracion venezolana representa para Colombia:`,
    options:['Un problema sin ninguna ventaja','Tanto desafios (presion sobre servicios) como oportunidades (aporte economico)','Exclusivamente una oportunidad economica','Un fenomeno que ya ha terminado'],
    correct:1,
    explanation:{correct:'La migracion representa "tanto un desafio para los sistemas de salud y educacion como una oportunidad economica por su aporte al mercado laboral y al consumo".',wrongs:['El texto menciona tambien aspectos positivos','Opcion correcta','El texto menciona tambien desafios','La migracion continua siendo un fenomeno activo']}
  },
  {
    id:'SC73',area:'sociales',areaName:'Sociales y Ciudadania',difficulty:'facil',
    question:`La rama legislativa del poder publico en Colombia esta conformada por:`,
    options:['La Presidencia y los ministerios','El Congreso de la Republica (Senado y Camara de Representantes)','La Corte Suprema de Justicia','La Procuraduria General'],
    correct:1,
    explanation:{correct:'La Rama Legislativa esta conformada por el Congreso de la Republica, que es un cuerpo bicameral compuesto por el Senado (108 miembros) y la Camara de Representantes (188 miembros). Su funcion principal es hacer las leyes.',wrongs:['Esa es la Rama Ejecutiva','Opcion correcta','Esa es la Rama Judicial','Esa es un organismo de control']}
  },
  {
    id:'SC74',area:'sociales',areaName:'Sociales y Ciudadania',difficulty:'dificil',
    context:`"La Guerra Fria (1947-1991) fue un periodo de tension geopolitica entre Estados Unidos (bloque capitalista) y la Union Sovietica (bloque comunista). Aunque nunca hubo un enfrentamiento militar directo entre ambas superpotencias, el conflicto se manifesto en la carrera armamentista (incluyendo la nuclear), la competencia espacial, la propaganda ideologica y las guerras proxy en paises como Corea, Vietnam y Afganistan. America Latina no fue ajena a esta dinamica: la Revolucion Cubana (1959) y la posterior Alianza para el Progresio (1961) fueron expresiones de esta rivalidad en la region."`,
    question:`El termino 'guerras proxy' en el texto se refiere a:`,
    options:['Guerras declaradas formalmente entre las superpotencias','Conflictos donde las superpotencias apoyaban a bandos opuestos sin enfrentarse directamente','Guerras economicas basadas en sanciones','Enfrentamientos diplomaticos en la ONU'],
    correct:1,
    explanation:{correct:'Las guerras proxy eran conflictos en terceros paises donde "nunca hubo un enfrentamiento militar directo entre ambas superpotencias", pero cada una apoyaba a un bando.',wrongs:['No hubo enfrentamiento directo entre las superpotencias','Opcion correcta','Tambien hubo guerras proxy militares (Corea, Vietnam)','Mas alla de la diplomacia, incluian apoyo militar a bandos locales']}
  },
  {
    id:'SC75',area:'sociales',areaName:'Sociales y Ciudadania',difficulty:'media',
    context:`"La economia naranja, concepto popularizado por el BID, se refiere a las industrias culturales y creativas: artes visuales, musica, cine, diseno, publicidad, software y videojuegos. En Colombia, este sector representa aproximadamente el 3,4% del PIB y genera alrededor de 500.000 empleos. Ciudades como Medellin y Bogota se han posicionado como hubs creativos, con iniciativas como el Distrito de Innovacion de Medellin y el cluter audiovisual de Bogota."`,
    question:`El termino 'economia naranja' se refiere a:`,
    options:['La economia agricola basada en citricos','Las industrias culturales y creativas como artes, diseno y tecnologia','La economia de los paises con clima tropical','El sector minero-energetico'],
    correct:1,
    explanation:{correct:'La economia naranja abarca "las industrias culturales y creativas: artes visuales, musica, cine, diseno, publicidad, software y videojuegos".',wrongs:['No es sobre agricultura','Opcion correcta','No se define por el clima sino por el tipo de industria','Es diferente al sector minero-energetico']}
  },

  // ===== CIENCIAS NATURALES (CN70-CN77) =====
  {
    id:'CN70',area:'ciencias',areaName:'Ciencias Naturales',difficulty:'media',
    table:{
      headers:['Organismo','Numero de celulas','Tipo de celula','Nutricion'],
      rows:[
        ['Bacteria','1','Procariota','Heterotrofa'],
        ['Levadura','1','Eucariota','Heterotrofa'],
        ['Alga unicelular','1','Eucariota','Autotrofa'],
        ['Humano','37 billones','Eucariota','Heterotrofa']
      ],
      caption:'Comparacion de tipos de organismos'
    },
    context:'La tabla compara caracteristicas de diferentes organismos.',
    question:'Cual de los siguientes organismos de la tabla es capaz de realizar fotosintesis?',
    options:['Bacteria','Levadura','Alga unicelular','Humano'],
    correct:2,
    explanation:{correct:'El alga unicelular tiene nutricion autotrofa, lo que significa que puede producir su propio alimento mediante fotosintesis.',wrongs:['Las bacterias de la tabla son heterotrofas','Las levaduras son heterotrofas','Opcion correcta','Los humanos somos heterotrofos']}
  },
  {
    id:'CN71',area:'ciencias',areaName:'Ciencias Naturales',difficulty:'dificil',
    context:`"La ley de Hooke establece que la fuerza necesaria para deformar un resorte es proporcional a la distancia que se estira o comprime: F = kx, donde k es la constante elastica del resorte. Un resorte tiene k = 200 N/m. Se cuelga un objeto de 5 kg del resorte y se lo deja en equilibrio. Posteriormente, se tira del objeto 10 cm hacia abajo y se suelta."`,
    question:'La energia potencial elastica almacenada en el resorte cuando se estira 10 cm es:',
    options:['0,5 J','1 J','2 J','10 J'],
    correct:1,
    explanation:{correct:'Ep elastica = (1/2)kx^2 = (1/2)*200*(0,1)^2 = 100*0,01 = 1 J.',wrongs:['Calculaste 200*0,1/2 = 10 J, pero x debe estar en metros (0,1 m)','Opcion correcta','Usaste x=0,2 m o calculaste mal','Calculaste mgh = 5*10*0,1 = 5 J (energia potencial gravitacional)']}
  },
  {
    id:'CN72',area:'ciencias',areaName:'Ciencias Naturales',difficulty:'facil',
    context:`"El sistema circulatorio humano transporta sangre a traves del cuerpo. El corazon bombea la sangre a los pulmones para oxigenarla (circulacion pulmonar) y luego al resto del cuerpo (circulacion sistemica). Los globulos rojos contienen hemoglobina, una proteina que se une al oxigeno y lo transporta a los tejidos."`,
    question:`La funcion de la hemoglobina en la sangre es:`,
    options:['Combatir infecciones','Transportar oxigeno a los tejidos','Coagular la sangre','Producir hormonas'],
    correct:1,
    explanation:{correct:'La hemoglobina es "una proteina que se une al oxigeno y lo transporta a los tejidos".',wrongs:['Los globulos blancos combaten infecciones','Opcion correcta','Las plaquetas coagulan la sangre','Las glandulas endocrinas producen hormonas']}
  },
  {
    id:'CN73',area:'ciencias',areaName:'Ciencias Naturales',difficulty:'dificil',
    context:`"La regla de Hund establece que los electrones, al llenar orbitales de igual energia, primero se colocan uno en cada orbital (con spines paralelos) antes de aparearse. Esto minimiza la repulsion entre electrones. Por ejemplo, la configuracion electronica del nitrogeno (Z=7) es 1s2 2s2 2p3. Los tres electrones del orbital 2p ocupan los tres orbitales p (px, py, pz) con spines paralelos."`,
    question:`La configuracion electronica del nitrogeno (Z=7) muestra que en el nivel 2:`,
    options:['Hay 5 electrones, 2 en s y 3 en p, cada uno en orbitales separados','Hay 7 electrones distribuidos en todos los niveles','Todos los electrones estan apareados','Los electrones del orbital p estan apareados'],
    correct:0,
    explanation:{correct:'Nivel 2: 2 electrones en el orbital 2s y 3 electrones en orbitales 2p, uno en cada orbital p (px, py, pz) con spines paralelos.',wrongs:['Opcion correcta','Z=7 significa 7 electrones totales, no solo en nivel 2','Los 3 electrones 2p estan desapareados (Hund)','Estan desapareados por la regla de Hund']}
  },
  {
    id:'CN74',area:'ciencias',areaName:'Ciencias Naturales',difficulty:'media',
    context:`"En un ecosistema, la biomasa disminuye a medida que se asciende en la cadena trofica. De la energia solar que llega a la Tierra, solo el 1% es capturada por los productores (plantas) mediante fotosintesis. De esa energia, solo el 10% pasa al siguiente nivel trofico (herbiboros), y otro 10% al siguiente (carniboros). Esta regla del 10% explica por que hay menos organismos en los niveles superiores."`,
    question:`Si las plantas de un ecosistema capturan 10.000 kcal de energia solar, la energia disponible para el nivel de carniboros (tercer nivel) seria aproximadamente:`,
    options:['10 kcal','100 kcal','1.000 kcal','10.000 kcal'],
    correct:1,
    explanation:{correct:'Regla del 10%: productores (plantas) -> 10.000 kcal. Herbiboros: 10% de 10.000 = 1.000 kcal. Carniboros: 10% de 1.000 = 100 kcal.',wrongs:['Calculaste dos niveles de 10% mal','Opcion correcta','Solo aplicaste un nivel de 10%','No aplicaste la regla del 10%']}
  },
  {
    id:'CN75',area:'ciencias',areaName:'Ciencias Naturales',difficulty:'facil',
    context:`"La energia no se crea ni se destruye, solo se transforma. Esta es la primera ley de la termodinamica. Un ejemplo cotidiano es la licuadora: la energia electrica se transforma en energia cinetica (movimiento de las aspas), y parte de esta se disipa como calor y sonido."`,
    question:`El ejemplo de la licuadora ilustra principalmente:`,
    options:['La creacion de energia a partir del movimiento','La transformacion de energia electrica en otras formas de energia','La destruccion de energia en forma de calor','Que la energia solo existe en forma electrica'],
    correct:1,
    explanation:{correct:'La energia electrica "se transforma en energia cinetica... y parte se disipa como calor y sonido", demostrando la transformacion mas que la conservacion.',wrongs:['La energia no se crea','Opcion correcta','La energia se transforma, no se destruye','La energia existe en multiples formas']}
  },
  {
    id:'CN76',area:'ciencias',areaName:'Ciencias Naturales',difficulty:'dificil',
    context:`"Se tienen dos recipientes con la misma cantidad de agua. El recipiente A esta a 80°C y el recipiente B a 20°C. Se vierten ambos en un tercer recipiente de capacidad suficiente, termicamente aislado. La temperatura de equilibrio de la mezcla es de 50°C."`,
    question:'El proceso descrito alcanza el equilibrio termico porque:',
    options:['El calor fluye del cuerpo mas caliente al mas frio hasta que las temperaturas se igualan','El recipiente B pierde calor y el A gana calor','La temperatura final es el promedio de las temperaturas iniciales','El sistema aislado no permite la transferencia de calor'],
    correct:0,
    explanation:{correct:'El calor fluye espontaneamente del cuerpo de mayor temperatura (80°C) al de menor (20°C) hasta que ambos alcanzan la misma temperatura (50°C), que es el equilibrio termico.',wrongs:['Opcion correcta','Es al reves: A (caliente) pierde calor, B (frio) gana calor','Es el promedio solo porque las masas son iguales, no es una ley general','El sistema esta aislado del exterior, pero permite la transferencia interna de calor']}
  },
  {
    id:'CN77',area:'ciencias',areaName:'Ciencias Naturales',difficulty:'media',
    table:{
      headers:['Alimento','Proteina (g/100g)','Carbohidratos (g/100g)','Grasa (g/100g)'],
      rows:[
        ['Lentejas','25','60','1'],
        ['Arroz blanco','7','80','1'],
        ['Pollo (pechuga)','31','0','4'],
        ['Aguacate','2','9','15']
      ],
      caption:'Composicion nutricional de alimentos comunes en Colombia'
    },
    context:'La tabla muestra la composicion nutricional de cuatro alimentos.',
    question:'Cual de estos alimentos es la mejor fuente de proteina?',
    options:['Lentejas','Arroz blanco','Pollo (pechuga)','Aguacate'],
    correct:2,
    explanation:{correct:'El pollo tiene 31 g de proteina por cada 100 g, el valor mas alto de la tabla.',wrongs:['25 g es alto pero menor que el pollo','Solo 7 g de proteina','Opcion correcta','Solo 2 g de proteina']}
  },
  {
    id:'CN78',area:'ciencias',areaName:'Ciencias Naturales',difficulty:'media',
    context:`"En un laboratorio se tienen dos disoluciones de acido clorhidrico (HCl) de diferente concentracion. La disolucion X tiene pH 2 y la disolucion Y tiene pH 4. Recordando que la escala de pH es logaritmica (pH = -log[H+]), cada unidad de pH representa un factor de 10 en concentracion de iones H+."`,
    question:'La concentracion de iones H+ en la disolucion X respecto a la disolucion Y es:',
    options:['El doble','10 veces mayor','100 veces mayor','La mitad'],
    correct:2,
    explanation:{correct:'pH 2 tiene [H+] = 10^-2 M. pH 4 tiene [H+] = 10^-4 M. La relacion es 10^-2/10^-4 = 100. La disolucion X es 100 veces mas acida.',wrongs:['No es lineal, es logaritmico: cada unidad es x10','Diferencia de 2 unidades: 10^2 = 100 veces','Opcion correcta','Es al reves: X es mas acida, no menos']}
  },

  // ===== INGLES (EN69-EN76) =====
  {
    id:'EN69',area:'ingles',areaName:'Ingles',difficulty:'media',
    context:`Read the text:
"Bogota's TransMilenio is one of the most extensive Bus Rapid Transit (BRT) systems in the world. It was inaugurated in 2000 and today moves about 2.5 million passengers daily. The system has 12 routes and 147 stations. However, during peak hours, the system becomes extremely crowded, and users often complain about the long waiting times. The city government is working on expanding the system and adding more articulated buses to reduce congestion."`,
    question:`What is the main problem mentioned with TransMilenio?`,
    options:['It is too expensive','It gets too crowded during peak hours','It has too many routes','It does not operate on weekends'],
    correct:1,
    explanation:{correct:'The text states that "during peak hours, the system becomes extremely crowded, and users often complain about the long waiting times."',wrongs:['Cost is not discussed','Opcion correcta','More routes would help, but the problem is overcrowding','The text does not mention weekend service']}
  },
  {
    id:'EN70',area:'ingles',areaName:'Ingles',difficulty:'facil',
    context:`Read the weather report:
"Today in Cartagena: hot and humid. High: 33°C, Low: 26°C. UV index: extreme. Chance of rain: 10%. Tomorrow: partly cloudy with a high of 32°C and a 40% chance of afternoon thunderstorms."`,
    question:`What should residents of Cartagena be careful about today?`,
    options:['Heavy rain all day','The extreme UV index','Very cold temperatures','Strong winds'],
    correct:1,
    explanation:{correct:'The report says "UV index: extreme," which means people should protect themselves from the sun.',wrongs:['Only 10% chance of rain','Opcion correcta','33°C is hot, not cold','Wind is not mentioned']}
  },
  {
    id:'EN71',area:'ingles',areaName:'Ingles',difficulty:'dificil',
    context:`Read the article:
"Last year, a group of high school students in Manizales won the National Science Fair with a project that converts coffee waste into biodegradable packaging. The students collected coffee husks from local farms, processed them into a pulp, and created plates and containers that decompose in 60 days. 'Colombia produces millions of tons of coffee waste every year,' said Ana Maria, 17, the team leader. 'We wanted to turn that waste into something useful.' The project has already attracted interest from several packaging companies."`,
    question:`What was the inspiration for the students' project?`,
    options:['To make money from selling packaging','To turn abundant coffee waste into something useful','To win a science competition','To replace all plastic in Colombia'],
    correct:1,
    explanation:{correct:'Ana Maria said: "Colombia produces millions of tons of coffee waste... We wanted to turn that waste into something useful."',wrongs:['The text says they won the fair, not that money was the motivation','Opcion correcta','Winning was a result, not the stated inspiration','The text does not mention replacing all plastic']}
  },
  {
    id:'EN72',area:'ingles',areaName:'Ingles',difficulty:'media',
    context:`Read the product review:
"★★★★☆ I bought these wireless headphones two months ago and I am very satisfied. The sound quality is excellent and the battery lasts about 12 hours. They are comfortable to wear for long periods. The only downside is that the Bluetooth connection sometimes drops when I am in a different room from my phone. For the price, I think they are a great buy."`,
    question:`What is the main complaint about the headphones?`,
    options:['The sound quality is poor','The battery does not last long','The Bluetooth connection occasionally drops','They are uncomfortable'],
    correct:2,
    explanation:{correct:'The review states "the Bluetooth connection sometimes drops when I am in a different room from my phone" as "the only downside."',wrongs:['The review says "sound quality is excellent"','The review says battery lasts "about 12 hours"','Opcion correcta','The review says they "are comfortable to wear for long periods"']}
  },
  {
    id:'EN73',area:'ingles',areaName:'Ingles',difficulty:'facil',
    context:`Read the labels on store shelves:
"Buy one, get one free! - Selected items - This weekend only"`,
    question:`If you buy one item, how many do you get?`,
    options:['One','Two','Three','Four'],
    correct:1,
    explanation:{correct:'"Buy one, get one free" means you pay for one item and receive a second item at no cost, so you get two in total.',wrongs:['You get one free in addition to the one you buy','Opcion correcta','The offer is buy one get one free, not buy one get two','Only two total']}
  },
  {
    id:'EN74',area:'ingles',areaName:'Ingles',difficulty:'dificil',
    context:`Read the text:
"According to a study published in The Lancet, air pollution in major Colombian cities causes approximately 8,000 premature deaths per year. The main sources are vehicle emissions, industrial activities, and construction sites. The study found that Bogota and Medellin have the highest levels of PM2.5 —tiny particles that can enter the lungs and bloodstream. The researchers recommend expanding clean transportation, implementing low-emission zones, and tightening industrial emission standards."`,
    question:`What does the study recommend to address the problem?`,
    options:['Building more roads for cars','Expanding clean transport, low-emission zones, and stricter industrial standards','Moving industries to rural areas','Banning all vehicles from city centers'],
    correct:1,
    explanation:{correct:'The study specifically recommends "expanding clean transportation, implementing low-emission zones, and tightening industrial emission standards."',wrongs:['More roads would increase emissions','Opcion correcta','Moving industries is not mentioned','A total ban is not recommended']}
  },
  {
    id:'EN75',area:'ingles',areaName:'Ingles',difficulty:'media',
    context:`Read the instructions for a medicine:
"Dosage: Adults and children over 12: 2 tablets every 8 hours. Children 6-12: 1 tablet every 8 hours. Children under 6: consult a doctor. Do not exceed 6 tablets in 24 hours. Side effects may include drowsiness and dry mouth."`,
    question:`How many tablets can an adult take in 24 hours?`,
    options:['2 tablets','4 tablets','6 tablets','8 tablets'],
    correct:2,
    explanation:{correct:'Adults: 2 tablets every 8 hours. 24/8 = 3 doses x 2 = 6 tablets. The instructions also say "Do not exceed 6 tablets in 24 hours."',wrongs:['That is one dose','That would be 1 tablet every 6 hours','Opcion correcta','That would exceed the maximum of 6 tablets']}
  },
  {
    id:'EN76',area:'ingles',areaName:'Ingles',difficulty:'facil',
    context:`Read the text:
"The Amazon is the world's largest tropical rainforest. It covers 6.7 million square kilometers across nine countries, but 60% of it is in Brazil. The forest is home to about 10% of the world's known species. Local indigenous communities have lived there for thousands of years."`,
    question:`According to the text, the Amazon rainforest is primarily located in:`,
    options:['Colombia','Brazil','Peru','Ecuador'],
    correct:1,
    explanation:{correct:'The text states that "60% of it is in Brazil," making Brazil the country with the largest portion of the Amazon.',wrongs:['Colombia has part of the Amazon but not the majority','Opcion correcta','Peru has part but not the majority','Ecuador has a very small portion']}
  }
);
