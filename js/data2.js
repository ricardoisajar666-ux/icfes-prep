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
  },

  // ===== GRAPH-CHOICE QUESTIONS (respuesta = grafico que representa el texto) =====
  {
    id:'MT77',area:'matematicas',areaName:'Matematicas',difficulty:'media',
    question:'Una funcion lineal tiene pendiente 2 e intercepto con el eje Y en 1. ?Cual de las siguientes graficas representa correctamente esta funcion?',
    options:[
      `<div class="option-graph"><svg viewBox="0 0 180 160" xmlns="http://www.w3.org/2000/svg">
        <line x1="20" y1="140" x2="170" y2="140" stroke="#333" stroke-width="1.5"/>
        <line x1="30" y1="10" x2="30" y2="150" stroke="#333" stroke-width="1.5"/>
        <text x="170" y="155" text-anchor="end" font-size="9" fill="#666">x</text>
        <text x="20" y="14" text-anchor="middle" font-size="9" fill="#666">y</text>
        <line x1="30" y1="40" x2="60" y2="40" stroke="#ccc" stroke-width="0.5" stroke-dasharray="3"/>
        <line x1="30" y1="90" x2="60" y2="90" stroke="#ccc" stroke-width="0.5" stroke-dasharray="3"/>
        <line x1="80" y1="140" x2="80" y2="110" stroke="#ccc" stroke-width="0.5" stroke-dasharray="3"/>
        <line x1="130" y1="140" x2="130" y2="60" stroke="#ccc" stroke-width="0.5" stroke-dasharray="3"/>
        <line x1="30" y1="140" x2="170" y2="60" stroke="#E91E63" stroke-width="3" stroke-linecap="round"/>
        <circle cx="30" cy="140" r="4" fill="#E91E63"/>
        <text x="60" y="155" text-anchor="middle" font-size="8" fill="#666">1</text>
        <text x="90" y="155" text-anchor="middle" font-size="8" fill="#666">2</text>
        <text x="130" y="155" text-anchor="middle" font-size="8" fill="#666">3</text>
        <text x="18" y="142" text-anchor="end" font-size="8" fill="#666">0</text>
        <text x="18" y="92" text-anchor="end" font-size="8" fill="#666">1</text>
        <text x="18" y="42" text-anchor="end" font-size="8" fill="#666">2</text>
      </svg></div>`,
      `<div class="option-graph"><svg viewBox="0 0 180 160" xmlns="http://www.w3.org/2000/svg">
        <line x1="20" y1="140" x2="170" y2="140" stroke="#333" stroke-width="1.5"/>
        <line x1="30" y1="10" x2="30" y2="150" stroke="#333" stroke-width="1.5"/>
        <line x1="30" y1="40" x2="60" y2="40" stroke="#ccc" stroke-width="0.5" stroke-dasharray="3"/>
        <line x1="30" y1="90" x2="60" y2="90" stroke="#ccc" stroke-width="0.5" stroke-dasharray="3"/>
        <line x1="30" y1="140" x2="170" y2="140" stroke="#E91E63" stroke-width="3" stroke-linecap="round"/>
        <circle cx="30" cy="140" r="4" fill="#E91E63"/>
      </svg></div>`,
      `<div class="option-graph"><svg viewBox="0 0 180 160" xmlns="http://www.w3.org/2000/svg">
        <line x1="20" y1="140" x2="170" y2="140" stroke="#333" stroke-width="1.5"/>
        <line x1="30" y1="10" x2="30" y2="150" stroke="#333" stroke-width="1.5"/>
        <line x1="30" y1="40" x2="60" y2="40" stroke="#ccc" stroke-width="0.5" stroke-dasharray="3"/>
        <line x1="30" y1="90" x2="60" y2="90" stroke="#ccc" stroke-width="0.5" stroke-dasharray="3"/>
        <line x1="80" y1="140" x2="80" y2="110" stroke="#ccc" stroke-width="0.5" stroke-dasharray="3"/>
        <line x1="130" y1="140" x2="130" y2="60" stroke="#ccc" stroke-width="0.5" stroke-dasharray="3"/>
        <line x1="30" y1="140" x2="170" y2="180" stroke="#E91E63" stroke-width="3" stroke-linecap="round"/>
        <circle cx="30" cy="140" r="4" fill="#E91E63"/>
      </svg></div>`,
      `<div class="option-graph"><svg viewBox="0 0 180 160" xmlns="http://www.w3.org/2000/svg">
        <line x1="20" y1="140" x2="170" y2="140" stroke="#333" stroke-width="1.5"/>
        <line x1="30" y1="10" x2="30" y2="150" stroke="#333" stroke-width="1.5"/>
        <line x1="30" y1="40" x2="60" y2="40" stroke="#ccc" stroke-width="0.5" stroke-dasharray="3"/>
        <line x1="30" y1="90" x2="60" y2="90" stroke="#ccc" stroke-width="0.5" stroke-dasharray="3"/>
        <line x1="80" y1="140" x2="80" y2="110" stroke="#ccc" stroke-width="0.5" stroke-dasharray="3"/>
        <line x1="130" y1="140" x2="130" y2="60" stroke="#ccc" stroke-width="0.5" stroke-dasharray="3"/>
        <line x1="30" y1="60" x2="170" y2="180" stroke="#E91E63" stroke-width="3" stroke-linecap="round"/>
        <circle cx="30" cy="60" r="4" fill="#E91E63"/>
      </svg></div>`
    ],
    correct:0,
    explanation:{correct:'La funcion y = 2x + 1 tiene pendiente 2 (sube 2 unidades por cada unidad horizontal) e intercepto en 1 (cruza el eje Y en y=1). La grafica A muestra una linea que pasa por (0,1) y sube con pendiente positiva.',wrongs:['Opcion correcta','Esta linea es horizontal (pendiente 0), no tiene pendiente 2','Esta linea tiene pendiente negativa, no positiva','Esta linea pasa por (0,-1), el intercepto es incorrecto']}
  },
  {
    id:'MT78',area:'matematicas',areaName:'Matematicas',difficulty:'dificil',
    context:'Un automovil sale de Bogota hacia Mosquera. Viaja a 60 km/h durante las primeras 2 horas (120 km), luego se detiene 1 hora para almorzar, y finalmente continua a 40 km/h durante 1 hora adicional (40 km).',
    question:'?Cual de las siguientes graficas de distancia vs. tiempo representa correctamente el recorrido del automovil?',
    options:[
      `<div class="option-graph"><svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
        <line x1="20" y1="140" x2="190" y2="140" stroke="#333" stroke-width="1.5"/>
        <line x1="40" y1="10" x2="40" y2="150" stroke="#333" stroke-width="1.5"/>
        <line x1="40" y1="140" x2="100" y2="40" stroke="#2196F3" stroke-width="3" stroke-linecap="round"/>
        <line x1="100" y1="40" x2="130" y2="40" stroke="#2196F3" stroke-width="3"/>
        <line x1="130" y1="40" x2="170" y2="140" stroke="#2196F3" stroke-width="3" stroke-linecap="round"/>
        <circle cx="40" cy="140" r="4" fill="#2196F3"/>
        <circle cx="100" cy="40" r="4" fill="#2196F3"/>
        <circle cx="130" cy="40" r="4" fill="#2196F3"/>
        <circle cx="170" cy="0" r="4" fill="#2196F3"/>
        <text x="65" y="155" text-anchor="middle" font-size="8" fill="#666">1</text>
        <text x="90" y="155" text-anchor="middle" font-size="8" fill="#666">2</text>
        <text x="115" y="155" text-anchor="middle" font-size="8" fill="#666">3</text>
        <text x="140" y="155" text-anchor="middle" font-size="8" fill="#666">4</text>
        <text x="32" y="90" text-anchor="end" font-size="8" fill="#666">60</text>
        <text x="32" y="42" text-anchor="end" font-size="8" fill="#666">120</text>
        <text x="32" y="142" text-anchor="end" font-size="8" fill="#666">0</text>
        <text x="100" y="162" text-anchor="middle" font-size="8" fill="#666">t (horas)</text>
      </svg></div>`,
      `<div class="option-graph"><svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
        <line x1="20" y1="140" x2="190" y2="140" stroke="#333" stroke-width="1.5"/>
        <line x1="40" y1="10" x2="40" y2="150" stroke="#333" stroke-width="1.5"/>
        <line x1="40" y1="140" x2="170" y2="10" stroke="#2196F3" stroke-width="3" stroke-linecap="round"/>
        <circle cx="40" cy="140" r="4" fill="#2196F3"/>
        <circle cx="170" cy="10" r="4" fill="#2196F3"/>
      </svg></div>`,
      `<div class="option-graph"><svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
        <line x1="20" y1="140" x2="190" y2="140" stroke="#333" stroke-width="1.5"/>
        <line x1="40" y1="10" x2="40" y2="150" stroke="#333" stroke-width="1.5"/>
        <line x1="40" y1="140" x2="80" y2="140" stroke="#2196F3" stroke-width="3"/>
        <line x1="80" y1="140" x2="120" y2="60" stroke="#2196F3" stroke-width="3"/>
        <line x1="120" y1="60" x2="170" y2="60" stroke="#2196F3" stroke-width="3"/>
      </svg></div>`,
      `<div class="option-graph"><svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
        <line x1="20" y1="140" x2="190" y2="140" stroke="#333" stroke-width="1.5"/>
        <line x1="40" y1="10" x2="40" y2="150" stroke="#333" stroke-width="1.5"/>
        <line x1="40" y1="140" x2="90" y2="140" stroke="#2196F3" stroke-width="3"/>
        <line x1="90" y1="140" x2="90" y2="10" stroke="#2196F3" stroke-width="3"/>
        <line x1="90" y1="10" x2="170" y2="10" stroke="#2196F3" stroke-width="3"/>
      </svg></div>`
    ],
    correct:0,
    explanation:{correct:'La grafica debe mostrar: (1) pendiente positiva de 0 a 2h (60 km/h → 120 km), (2) segmento horizontal de 2h a 3h (detenido), (3) pendiente menor de 3h a 4h (40 km/h). La opcion A muestra exactamente este patron.',wrongs:['Opcion correcta','Linea recta continua sin pausa: no representa la parada','Comienza con pausa, luego avanza, luego otra pausa: el orden es incorrecto','Comienza con pausa, luego salta verticalmente: la distancia no cambia instantaneamente']}
  },
  {
    id:'CN79',area:'ciencias',areaName:'Ciencias Naturales',difficulty:'media',
    context:'Se deja caer una pelota desde el reposo desde lo alto de un edificio. Se desprecia la resistencia del aire.',
    question:'?Cual de las siguientes graficas representa correctamente la velocidad de la pelota en funcion del tiempo durante la caida? (considere positiva la direccion hacia abajo)',
    options:[
      `<div class="option-graph"><svg viewBox="0 0 180 160" xmlns="http://www.w3.org/2000/svg">
        <line x1="20" y1="140" x2="170" y2="140" stroke="#333" stroke-width="1.5"/>
        <line x1="30" y1="10" x2="30" y2="150" stroke="#333" stroke-width="1.5"/>
        <line x1="30" y1="90" x2="60" y2="90" stroke="#ccc" stroke-width="0.5" stroke-dasharray="3"/>
        <line x1="30" y1="40" x2="60" y2="40" stroke="#ccc" stroke-width="0.5" stroke-dasharray="3"/>
        <line x1="80" y1="140" x2="80" y2="110" stroke="#ccc" stroke-width="0.5" stroke-dasharray="3"/>
        <line x1="130" y1="140" x2="130" y2="60" stroke="#ccc" stroke-width="0.5" stroke-dasharray="3"/>
        <line x1="30" y1="140" x2="170" y2="20" stroke="#4CAF50" stroke-width="3" stroke-linecap="round"/>
        <circle cx="30" cy="140" r="4" fill="#4CAF50"/>
        <text x="170" y="155" text-anchor="end" font-size="9" fill="#666">t</text>
        <text x="20" y="14" text-anchor="middle" font-size="9" fill="#666">v</text>
        <text x="80" y="155" text-anchor="middle" font-size="8" fill="#666">t1</text>
        <text x="130" y="155" text-anchor="middle" font-size="8" fill="#666">t2</text>
      </svg></div>`,
      `<div class="option-graph"><svg viewBox="0 0 180 160" xmlns="http://www.w3.org/2000/svg">
        <line x1="20" y1="140" x2="170" y2="140" stroke="#333" stroke-width="1.5"/>
        <line x1="30" y1="10" x2="30" y2="150" stroke="#333" stroke-width="1.5"/>
        <line x1="30" y1="90" x2="60" y2="90" stroke="#ccc" stroke-width="0.5" stroke-dasharray="3"/>
        <line x1="30" y1="40" x2="60" y2="40" stroke="#ccc" stroke-width="0.5" stroke-dasharray="3"/>
        <line x1="30" y1="140" x2="170" y2="140" stroke="#4CAF50" stroke-width="3"/>
        <circle cx="30" cy="140" r="4" fill="#4CAF50"/>
      </svg></div>`,
      `<div class="option-graph"><svg viewBox="0 0 180 160" xmlns="http://www.w3.org/2000/svg">
        <line x1="20" y1="140" x2="170" y2="140" stroke="#333" stroke-width="1.5"/>
        <line x1="30" y1="10" x2="30" y2="150" stroke="#333" stroke-width="1.5"/>
        <line x1="30" y1="90" x2="60" y2="90" stroke="#ccc" stroke-width="0.5" stroke-dasharray="3"/>
        <line x1="30" y1="40" x2="60" y2="40" stroke="#ccc" stroke-width="0.5" stroke-dasharray="3"/>
        <path d="M30 140 Q60 60 170 10" fill="none" stroke="#4CAF50" stroke-width="3"/>
        <circle cx="30" cy="140" r="4" fill="#4CAF50"/>
      </svg></div>`,
      `<div class="option-graph"><svg viewBox="0 0 180 160" xmlns="http://www.w3.org/2000/svg">
        <line x1="20" y1="140" x2="170" y2="140" stroke="#333" stroke-width="1.5"/>
        <line x1="30" y1="10" x2="30" y2="150" stroke="#333" stroke-width="1.5"/>
        <line x1="30" y1="90" x2="60" y2="90" stroke="#ccc" stroke-width="0.5" stroke-dasharray="3"/>
        <line x1="30" y1="40" x2="60" y2="40" stroke="#ccc" stroke-width="0.5" stroke-dasharray="3"/>
        <line x1="80" y1="140" x2="80" y2="110" stroke="#ccc" stroke-width="0.5" stroke-dasharray="3"/>
        <line x1="130" y1="140" x2="130" y2="60" stroke="#ccc" stroke-width="0.5" stroke-dasharray="3"/>
        <line x1="30" y1="140" x2="170" y2="140" stroke="#4CAF50" stroke-width="3"/>
        <line x1="120" y1="140" x2="120" y2="30" stroke="#4CAF50" stroke-width="3"/>
        <circle cx="30" cy="140" r="4" fill="#4CAF50"/>
      </svg></div>`
    ],
    correct:0,
    explanation:{correct:'En caida libre sin resistencia del aire, la velocidad aumenta linealmente con el tiempo (v = g·t, donde g = 10 m/s2). La grafica es una linea recta que parte del origen con pendiente positiva constante. Esto corresponde a la opcion A.',wrongs:['Opcion correcta','Velocidad constante significaria velocidad terminal instantanea, lo que no ocurre en caida libre ideal','La velocidad aumenta linealmente, no de forma curvilinea (parabolica)','Esta grafica muestra velocidad cero seguida de un salto vertical, lo cual es fisicamente imposible']}
  },
  {
    id:'CN80',area:'ciencias',areaName:'Ciencias Naturales',difficulty:'media',
    context:'Se estudio la actividad de una enzima digestiva humana a diferentes temperaturas. La enzima mostro baja actividad a 10°C, actividad maxima a 37°C, y perdio casi toda su actividad a 60°C.',
    question:'?Cual de las siguientes graficas representa correctamente la relacion entre la temperatura y la actividad enzimatica descrita?',
    options:[
      `<div class="option-graph"><svg viewBox="0 0 180 160" xmlns="http://www.w3.org/2000/svg">
        <line x1="20" y1="140" x2="170" y2="140" stroke="#333" stroke-width="1.5"/>
        <line x1="30" y1="10" x2="30" y2="150" stroke="#333" stroke-width="1.5"/>
        <line x1="30" y1="100" x2="60" y2="100" stroke="#ccc" stroke-width="0.5" stroke-dasharray="3"/>
        <line x1="30" y1="60" x2="60" y2="60" stroke="#ccc" stroke-width="0.5" stroke-dasharray="3"/>
        <line x1="80" y1="140" x2="80" y2="110" stroke="#ccc" stroke-width="0.5" stroke-dasharray="3"/>
        <line x1="130" y1="140" x2="130" y2="60" stroke="#ccc" stroke-width="0.5" stroke-dasharray="3"/>
        <path d="M30 120 Q60 100 100 30 Q120 40 140 130 L170 138" fill="none" stroke="#FF9800" stroke-width="3" stroke-linecap="round"/>
        <circle cx="100" cy="30" r="4" fill="#FF9800"/>
        <text x="30" y="155" text-anchor="end" font-size="8" fill="#666">0</text>
        <text x="80" y="155" text-anchor="middle" font-size="8" fill="#666">37</text>
        <text x="130" y="155" text-anchor="middle" font-size="8" fill="#666">60</text>
      </svg></div>`,
      `<div class="option-graph"><svg viewBox="0 0 180 160" xmlns="http://www.w3.org/2000/svg">
        <line x1="20" y1="140" x2="170" y2="140" stroke="#333" stroke-width="1.5"/>
        <line x1="30" y1="10" x2="30" y2="150" stroke="#333" stroke-width="1.5"/>
        <line x1="30" y1="100" x2="60" y2="100" stroke="#ccc" stroke-width="0.5" stroke-dasharray="3"/>
        <line x1="30" y1="60" x2="60" y2="60" stroke="#ccc" stroke-width="0.5" stroke-dasharray="3"/>
        <line x1="30" y1="140" x2="170" y2="20" stroke="#FF9800" stroke-width="3" stroke-linecap="round"/>
        <circle cx="30" cy="140" r="4" fill="#FF9800"/>
      </svg></div>`,
      `<div class="option-graph"><svg viewBox="0 0 180 160" xmlns="http://www.w3.org/2000/svg">
        <line x1="20" y1="140" x2="170" y2="140" stroke="#333" stroke-width="1.5"/>
        <line x1="30" y1="10" x2="30" y2="150" stroke="#333" stroke-width="1.5"/>
        <line x1="30" y1="100" x2="60" y2="100" stroke="#ccc" stroke-width="0.5" stroke-dasharray="3"/>
        <line x1="30" y1="60" x2="60" y2="60" stroke="#ccc" stroke-width="0.5" stroke-dasharray="3"/>
        <line x1="30" y1="140" x2="170" y2="140" stroke="#FF9800" stroke-width="3"/>
        <circle cx="30" cy="140" r="4" fill="#FF9800"/>
      </svg></div>`,
      `<div class="option-graph"><svg viewBox="0 0 180 160" xmlns="http://www.w3.org/2000/svg">
        <line x1="20" y1="140" x2="170" y2="140" stroke="#333" stroke-width="1.5"/>
        <line x1="30" y1="10" x2="30" y2="150" stroke="#333" stroke-width="1.5"/>
        <line x1="30" y1="100" x2="60" y2="100" stroke="#ccc" stroke-width="0.5" stroke-dasharray="3"/>
        <line x1="30" y1="60" x2="60" y2="60" stroke="#ccc" stroke-width="0.5" stroke-dasharray="3"/>
        <line x1="80" y1="140" x2="80" y2="110" stroke="#ccc" stroke-width="0.5" stroke-dasharray="3"/>
        <line x1="130" y1="140" x2="130" y2="60" stroke="#ccc" stroke-width="0.5" stroke-dasharray="3"/>
        <line x1="30" y1="140" x2="80" y2="140" stroke="#FF9800" stroke-width="3"/>
        <line x1="80" y1="140" x2="100" y2="30" stroke="#FF9800" stroke-width="3"/>
        <line x1="100" y1="30" x2="170" y2="30" stroke="#FF9800" stroke-width="3"/>
        <circle cx="30" cy="140" r="4" fill="#FF9800"/>
      </svg></div>`
    ],
    correct:0,
    explanation:{correct:'La actividad enzimatica aumenta con la temperatura hasta alcanzar un optimo (37°C para enzimas humanas), luego disminuye bruscamente por desnaturalizacion. La grafica correcta es una curva en forma de campana (opcion A).',wrongs:['Opcion correcta','Linea recta creciente: la actividad no sigue aumentando, disminuye despues del optimo','Linea horizontal: la actividad no es constante, depende de la temperatura','Escalonada: el cambio es gradual, no da pasos discretos']}
  },

  // ===== VISUAL QUESTIONS (mapas, diagramas, estructuras en SVG) =====
  {
    id:'SC76',area:'sociales',areaName:'Sociales y Ciudadania',difficulty:'media',
    svg:`<svg viewBox="0 0 300 340" xmlns="http://www.w3.org/2000/svg" style="max-width:300px">
      <text x="150" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#333">Regiones naturales de Colombia</text>
      <path d="M150 40 L180 60 L190 90 L170 110 L160 140 L180 160 L170 200 L150 220 L130 200 L110 160 L100 140 L80 120 L90 90 L110 70 Z" fill="#E8F5E9" stroke="#4CAF50" stroke-width="2"/>
      <text x="150" y="105" text-anchor="middle" font-size="8" fill="#2E7D32" font-weight="bold">Andina</text>
      <path d="M70 130 L90 140 L80 170 L60 180 L40 160 L50 140 Z" fill="#FFF3E0" stroke="#FF9800" stroke-width="2"/>
      <text x="62" y="158" text-anchor="middle" font-size="7" fill="#E65100">Caribe</text>
      <path d="M160 140 L200 150 L220 180 L210 220 L190 230 L170 210 Z" fill="#E3F2FD" stroke="#2196F3" stroke-width="2"/>
      <text x="190" y="190" text-anchor="middle" font-size="7" fill="#1565C0">Ori.</text>
      <path d="M140 220 L170 230 L180 260 L160 280 L140 270 L120 250 Z" fill="#FCE4EC" stroke="#E91E63" stroke-width="2"/>
      <text x="155" y="252" text-anchor="middle" font-size="7" fill="#C62828">Amazonia</text>
      <path d="M100 180 L110 195 L100 220 L80 230 L60 210 L70 190 Z" fill="#F3E5F5" stroke="#9C27B0" stroke-width="2"/>
      <text x="82" y="208" text-anchor="middle" font-size="7" fill="#6A1B9A">Pac.</text>
      <circle cx="150" cy="90" r="3" fill="#E91E63"/>
      <text x="155" y="88" font-size="7" fill="#E91E63">Bogota</text>
      <circle cx="52" cy="155" r="3" fill="#E91E63"/>
      <text x="30" y="152" font-size="7" fill="#E91E63">Barranquilla</text>
      <circle cx="198" cy="165" r="3" fill="#E91E63"/>
      <text x="203" y="163" font-size="7" fill="#E91E63">Villavicencio</text>
      <circle cx="140" cy="240" r="3" fill="#E91E63"/>
      <text x="120" y="255" font-size="7" fill="#E91E63">Leticia</text>
    </svg>`,
    context:'El mapa muestra las regiones naturales de Colombia con algunas ciudades.',
    question:'Segun el mapa, ?en cual region natural se encuentra la ciudad de Bogota?',
    options:['Caribe','Andina','Amazonica','Pacifico'],
    correct:1,
    explanation:{correct:'Bogota se encuentra en la region Andina, que atraviesa el centro del pais de sur a norte siguiendo las tres cordilleras.',wrongs:['La region Caribe esta al norte, Bogota esta en el centro','Opcion correcta','La Amazonia esta al sureste, Bogota esta en el centro','La region Pacifica esta al occidente, Bogota esta en el centro']}
  },
  {
    id:'CN81',area:'ciencias',areaName:'Ciencias Naturales',difficulty:'media',
    svg:`<svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" style="max-width:320px">
      <text x="160" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Estructura de una celula animal</text>
      <ellipse cx="160" cy="130" rx="120" ry="80" fill="#FFF9C4" stroke="#F9A825" stroke-width="2"/>
      <circle cx="160" cy="120" r="35" fill="#BBDEFB" stroke="#1565C0" stroke-width="2"/>
      <text x="160" y="118" text-anchor="middle" font-size="7" fill="#0D47A1" font-weight="bold">Nucleo</text>
      <circle cx="160" cy="120" r="8" fill="#1565C0" opacity="0.5"/>
      <text x="160" y="138" text-anchor="middle" font-size="6" fill="#0D47A1">nucleolo</text>
      <ellipse cx="115" cy="145" rx="18" ry="10" fill="#C8E6C9" stroke="#388E3C" stroke-width="1.5"/>
      <text x="108" y="168" text-anchor="middle" font-size="6" fill="#1B5E20">Mitocondria</text>
      <ellipse cx="215" cy="140" rx="15" ry="8" fill="#C8E6C9" stroke="#388E3C" stroke-width="1.5"/>
      <rect x="80" y="90" width="30" height="18" fill="#FFE0B2" stroke="#E65100" stroke-width="1.5" rx="3"/>
      <text x="90" y="84" text-anchor="middle" font-size="6" fill="#E65100">A. de Golgi</text>
      <rect x="210" y="95" width="25" height="15" fill="#FFE0B2" stroke="#E65100" stroke-width="1.5" rx="2"/>
      <path d="M120 80 Q130 70 140 80" fill="none" stroke="#7B1FA2" stroke-width="1.5"/>
      <text x="130" y="74" text-anchor="middle" font-size="6" fill="#7B1FA2">RER</text>
      <ellipse cx="100" cy="170" rx="10" ry="6" fill="#F8BBD0" stroke="#C2185B" stroke-width="1"/>
      <text x="85" y="190" text-anchor="middle" font-size="6" fill="#C2185B">Lisosoma</text>
      <line x1="160" y1="85" x2="160" y2="50" stroke="#F9A825" stroke-width="1" stroke-dasharray="3"/>
      <text x="165" y="62" text-anchor="middle" font-size="6" fill="#E65100">Membrana</text>
      <text x="165" y="70" text-anchor="middle" font-size="6" fill="#E65100">celular</text>
      <text x="160" y="225" text-anchor="middle" font-size="9" fill="#666">Fuente: Diagrama educativo</text>
    </svg>`,
    context:'Observe el diagrama de una celula animal.',
    question:'?Cual organelo se encarga de producir la energia (ATP) en la celula?',
    options:['El nucleo','La mitocondria','El aparato de Golgi','El lisosoma'],
    correct:1,
    explanation:{correct:'La mitocondria es el organelo encargado de la respiracion celular y la produccion de ATP, la principal fuente de energia para las funciones celulares.',wrongs:['El nucleo contiene el material genetico, no produce energia','Opcion correcta','El aparato de Golgi modifica y empaca proteinas, no produce energia','Los lisosomas digieren materiales, no producen energia']}
  },
  {
    id:'CN82',area:'ciencias',areaName:'Ciencias Naturales',difficulty:'facil',
    svg:`<svg viewBox="0 0 380 220" xmlns="http://www.w3.org/2000/svg" style="max-width:380px">
      <text x="190" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Cadena trofica en un ecosistema</text>
      <!-- Sun -->
      <circle cx="50" cy="50" r="20" fill="#FFC107" stroke="#FF9800" stroke-width="2"/>
      <text x="50" y="54" text-anchor="middle" font-size="7" fill="#E65100">Sol</text>
      <!-- Arrow sun to plant -->
      <line x1="70" y1="50" x2="100" y2="80" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/>
      <path d="M75 48 Q85 42 95 50" fill="none" stroke="#FFC107" stroke-width="1.5"/>
      <text x="82" y="40" font-size="7" fill="#FF9800">energia</text>
      <!-- Plant -->
      <rect x="100" y="95" width="30" height="15" fill="#66BB6A" stroke="#2E7D32" stroke-width="2" rx="3"/>
      <text x="115" y="107" text-anchor="middle" font-size="7" fill="#1B5E20">Pastos</text>
      <line x1="120" y1="95" x2="115" y2="80" stroke="#2E7D32" stroke-width="2"/>
      <line x1="120" y1="95" x2="125" y2="80" stroke="#2E7D32" stroke-width="2"/>
      <line x1="115" y1="85" x2="110" y2="75" stroke="#4CAF50" stroke-width="2"/>
      <line x1="125" y1="85" x2="130" y2="75" stroke="#4CAF50" stroke-width="2"/>
      <ellipse cx="115" cy="78" rx="8" ry="4" fill="#66BB6A" stroke="#2E7D32" stroke-width="1"/>
      <!-- Arrow 1 -->
      <line x1="120" y1="110" x2="145" y2="130" stroke="#666" stroke-width="1.5"/>
      <polygon points="145,130 138,126 142,134" fill="#666"/>
      <!-- Grasshopper -->
      <rect x="150" y="135" width="35" height="15" fill="#8D6E63" stroke="#4E342E" stroke-width="2" rx="3"/>
      <text x="167" y="147" text-anchor="middle" font-size="7" fill="#fff">Saltamontes</text>
      <!-- Arrow 2 -->
      <line x1="185" y1="140" x2="210" y2="115" stroke="#666" stroke-width="1.5"/>
      <polygon points="210,115 203,119 207,111" fill="#666"/>
      <!-- Mouse -->
      <rect x="215" y="100" width="35" height="15" fill="#A1887F" stroke="#4E342E" stroke-width="2" rx="3"/>
      <text x="232" y="112" text-anchor="middle" font-size="7" fill="#fff">Raton</text>
      <!-- Arrow 3 -->
      <line x1="250" y1="105" x2="275" y2="80" stroke="#666" stroke-width="1.5"/>
      <polygon points="275,80 268,84 272,76" fill="#666"/>
      <!-- Eagle -->
      <rect x="280" y="60" width="40" height="20" fill="#5D4037" stroke="#3E2723" stroke-width="2" rx="3"/>
      <text x="300" y="74" text-anchor="middle" font-size="7" fill="#fff">Aguila</text>
      <!-- Decomposer -->
      <text x="300" y="185" text-anchor="middle" font-size="7" fill="#666">Descomponedores</text>
      <rect x="265" y="170" width="70" height="12" fill="#BCAAA4" stroke="#795548" stroke-width="1" rx="2"/>
      <text x="300" y="179" text-anchor="middle" font-size="6" fill="#fff">Hongos y bacterias</text>
      <line x1="300" y1="170" x2="300" y2="158" stroke="#666" stroke-width="1" stroke-dasharray="3"/>
      <path d="M300 158 Q295 150 300 145" fill="none" stroke="#666" stroke-width="1"/>
    </svg>`,
    context:'Observe la cadena trofica del ecosistema.',
    question:'?Que organismo es el productor primario en esta cadena trofica?',
    options:['El aguila','El raton','Los pastos','El saltamontes'],
    correct:2,
    explanation:{correct:'Los productores primarios son los organismos que producen su propio alimento mediante fotosintesis. En esta cadena, los pastos son los productores porque convierten la energia solar en materia organica.',wrongs:['El aguila es un consumidor terciario (depredador tope)','El raton es un consumidor primario (herbivoro)','Opcion correcta','El saltamontes es un consumidor primario (herbivoro)']}
  },
  {
    id:'SC77',area:'sociales',areaName:'Sociales y Ciudadania',difficulty:'media',
    svg:`<svg viewBox="0 0 380 280" xmlns="http://www.w3.org/2000/svg" style="max-width:380px">
      <text x="190" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Estructura del Estado colombiano</text>
      <!-- Ramas -->
      <rect x="30" y="45" width="100" height="35" fill="#E3F2FD" stroke="#1565C0" stroke-width="2" rx="5"/>
      <text x="80" y="67" text-anchor="middle" font-size="9" fill="#0D47A1" font-weight="bold">Ejecutiva</text>
      <rect x="150" y="45" width="100" height="35" fill="#E8F5E9" stroke="#2E7D32" stroke-width="2" rx="5"/>
      <text x="200" y="67" text-anchor="middle" font-size="9" fill="#1B5E20" font-weight="bold">Legislativa</text>
      <rect x="270" y="45" width="100" height="35" fill="#FFF3E0" stroke="#E65100" stroke-width="2" rx="5"/>
      <text x="320" y="67" text-anchor="middle" font-size="9" fill="#E65100" font-weight="bold">Judicial</text>
      <!-- Labels below -->
      <text x="58" y="95" text-anchor="middle" font-size="7" fill="#1565C0">Presidente</text>
      <text x="105" y="95" text-anchor="middle" font-size="7" fill="#1565C0">Ministros</text>
      <text x="180" y="95" text-anchor="middle" font-size="7" fill="#2E7D32">Congreso</text>
      <text x="220" y="95" text-anchor="middle" font-size="7" fill="#2E7D32">Senado+Camara</text>
      <text x="305" y="95" text-anchor="middle" font-size="7" fill="#E65100">C. Constitucional</text>
      <text x="340" y="105" text-anchor="middle" font-size="7" fill="#E65100">C. Suprema</text>
      <!-- Organos de control -->
      <rect x="80" y="125" width="240" height="28" fill="#F3E5F5" stroke="#7B1FA2" stroke-width="1.5" rx="4"/>
      <text x="200" y="143" text-anchor="middle" font-size="8" fill="#6A1B9A" font-weight="bold">Organos de control: Procuraduria, Contraloria, Defensoria</text>
      <!-- Organos autonimos -->
      <rect x="100" y="165" width="200" height="28" fill="#FCE4EC" stroke="#C2185B" stroke-width="1.5" rx="4"/>
      <text x="200" y="183" text-anchor="middle" font-size="8" fill="#C2185B" font-weight="bold">Organos autonomos: CNE, B. de la Republica, Univ. publicas</text>
      <!-- Niveles territoriales -->
      <rect x="40" y="210" width="320" height="25" fill="#E0F7FA" stroke="#00838F" stroke-width="1.5" rx="4"/>
      <text x="200" y="227" text-anchor="middle" font-size="8" fill="#006064" font-weight="bold">Niveles territoriales: Departamentos - Municipios - Distritos - Territorios indigenas</text>
      <!-- Ramas arrows -->
      <line x1="130" y1="62" x2="150" y2="62" stroke="#666" stroke-width="1"/>
      <line x1="250" y1="62" x2="270" y2="62" stroke="#666" stroke-width="1"/>
    </svg>`,
    context:'Observe el diagrama de la estructura del Estado colombiano.',
    question:'?Cual de las siguientes NO es una de las tres ramas del poder publico en Colombia?',
    options:['Rama Ejecutiva','Rama Legislativa','Rama Electoral','Rama Judicial'],
    correct:2,
    explanation:{correct:'Las tres ramas del poder publico en Colombia son: Ejecutiva, Legislativa y Judicial. La "Rama Electoral" no existe como rama independiente; las funciones electorales corresponden a la Registraduria y al CNE, que son organismos autonomos.',wrongs:['La Rama Ejecutiva es una de las tres ramas del poder publico','La Rama Legislativa es una de las tres ramas del poder publico','Opcion correcta (la Rama Electoral no existe como rama del poder)','La Rama Judicial es una de las tres ramas del poder publico']}
  },

  // ===== NUEVAS PREGUNTAS ICFES CON CONTENIDO VISUAL =====

  // --- MATEMATICAS CON GRAFICOS ---
  {
    id:'MT80',area:'matematicas',areaName:'Matematicas',difficulty:'media',
    svg:`<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" style="max-width:360px">
      <text x="180" y="18" text-anchor="middle" font-size="11" font-weight="bold" fill="#333">Ventas mensuales de la tienda Donde Maria (millones de pesos)</text>
      <line x1="50" y1="30" x2="50" y2="200" stroke="#666" stroke-width="1.5"/>
      <line x1="50" y1="200" x2="340" y2="200" stroke="#666" stroke-width="1.5"/>
      <text x="15" y="115" font-size="8" fill="#666" transform="rotate(-90,15,115)">Ventas</text>
      <text x="195" y="218" text-anchor="middle" font-size="8" fill="#666">Meses</text>
      <text x="45" y="195" font-size="7" fill="#666">0</text>
      <text x="38" y="165" font-size="7" fill="#666">5</text>
      <text x="38" y="135" font-size="7" fill="#666">10</text>
      <text x="32" y="105" font-size="7" fill="#666">15</text>
      <text x="32" y="75" font-size="7" fill="#666">20</text>
      <text x="32" y="45" font-size="7" fill="#666">25</text>
      <rect x="70" y="170" width="30" height="30" fill="#42A5F5" rx="2"/>
      <text x="85" y="185" text-anchor="middle" font-size="7" fill="white" font-weight="bold">E</text>
      <rect x="115" y="110" width="30" height="90" fill="#66BB6A" rx="2"/>
      <text x="130" y="160" text-anchor="middle" font-size="7" fill="white" font-weight="bold">F</text>
      <rect x="160" y="140" width="30" height="60" fill="#FFA726" rx="2"/>
      <text x="175" y="172" text-anchor="middle" font-size="7" fill="white" font-weight="bold">S</text>
      <rect x="205" y="50" width="30" height="150" fill="#EF5350" rx="2"/>
      <text x="220" y="128" text-anchor="middle" font-size="7" fill="white" font-weight="bold">J</text>
      <rect x="250" y="120" width="30" height="80" fill="#AB47BC" rx="2"/>
      <text x="265" y="162" text-anchor="middle" font-size="7" fill="white" font-weight="bold">A</text>
      <rect x="295" y="90" width="30" height="110" fill="#26C6DA" rx="2"/>
      <text x="310" y="148" text-anchor="middle" font-size="7" fill="white" font-weight="bold">S</text>
      <text x="85" y="212" text-anchor="middle" font-size="7" fill="#333">Ene</text>
      <text x="130" y="212" text-anchor="middle" font-size="7" fill="#333">Feb</text>
      <text x="175" y="212" text-anchor="middle" font-size="7" fill="#333">Mar</text>
      <text x="220" y="212" text-anchor="middle" font-size="7" fill="#333">Abr</text>
      <text x="265" y="212" text-anchor="middle" font-size="7" fill="#333">May</text>
      <text x="310" y="212" text-anchor="middle" font-size="7" fill="#333">Jun</text>
    </svg>`,
    context:'La grafica de barras muestra las ventas mensuales de la tienda "Donde Maria" durante el primer semestre del ano. Cada division vertical representa 5 millones de pesos.',
    question:'Las ventas promedio del primer trimestre (enero a marzo) en millones de pesos fueron:',
    options:['8,3 millones','9 millones','10 millones','11,7 millones'],
    correct:3,
    explanation:{correct:'Enero = 10M, Febrero = 18M, Marzo = 7M. Promedio primer trimestre = (10+18+7)/3 = 35/3 = 11,67 millones aprox. 11,7 millones.',wrongs:['Confundiste las barras: E=10, F=18, S=7','Promedio correcto es 35/3 = 11,67','Opcion correcta','Incluiste el segundo trimestre en el calculo']}
  },
  {
    id:'MT81',area:'matematicas',areaName:'Matematicas',difficulty:'dificil',
    table:{
      headers:['Tiempo (min)','0','5','10','15','20','25','30'],
      rows:[
        ['Distancia (km)','0','3','8','15','20','22','24']
      ],
      caption:'Distancia recorrida por un ciclista en una ruta Bogota - Zipaquira'
    },
    context:'Un ciclista recorre una ruta de Bogota a Zipaquira. La tabla muestra la distancia acumulada en funcion del tiempo.',
    question:'En que intervalo de tiempo el ciclista tuvo la mayor velocidad promedio?',
    options:['0 a 5 minutos','5 a 10 minutos','10 a 15 minutos','25 a 30 minutos'],
    correct:2,
    explanation:{correct:'Velocidad promedio por intervalo: 0-5: 3/5=0,6 km/min; 5-10: 5/5=1 km/min; 10-15: 7/5=1,4 km/min (mayor); 15-20: 5/5=1 km/min; 20-25: 2/5=0,4 km/min; 25-30: 2/5=0,4 km/min. Mayor velocidad en 10-15 min.',wrongs:['0,6 km/min es la velocidad promedio del primer intervalo','1 km/min es menor que 1,4 km/min','Opcion correcta','0,4 km/min es la menor velocidad']}
  },
  {
    id:'MT82',area:'matematicas',areaName:'Matematicas',difficulty:'media',
    svg:`<svg viewBox="0 0 350 220" xmlns="http://www.w3.org/2000/svg" style="max-width:350px">
      <text x="175" y="18" text-anchor="middle" font-size="11" font-weight="bold" fill="#333">Distribucion del presupuesto familiar mensual</text>
      <circle cx="120" cy="120" r="85" fill="none" stroke="#ddd" stroke-width="1"/>
      <path d="M120,35 A85,85 0 0,1 198,80 L120,120 Z" fill="#42A5F5"/>
      <path d="M198,80 A85,85 0 0,1 205,160 L120,120 Z" fill="#66BB6A"/>
      <path d="M205,160 A85,85 0 0,1 120,205 L120,120 Z" fill="#FFA726"/>
      <path d="M120,205 A85,85 0 0,1 45,160 L120,120 Z" fill="#EF5350"/>
      <path d="M45,160 A85,85 0 0,1 50,80 L120,120 Z" fill="#AB47BC"/>
      <path d="M50,80 A85,85 0 0,1 120,35 L120,120 Z" fill="#78909C"/>
      <text x="155" y="65" font-size="9" fill="white" font-weight="bold">35%</text>
      <text x="200" y="115" font-size="9" fill="white" font-weight="bold">20%</text>
      <text x="175" y="185" font-size="9" fill="white" font-weight="bold">15%</text>
      <text x="70" y="175" font-size="9" fill="white" font-weight="bold">12%</text>
      <text x="55" y="110" font-size="9" fill="white" font-weight="bold">10%</text>
      <text x="85" y="60" font-size="8" fill="white" font-weight="bold">8%</text>
      <rect x="230" y="45" width="12" height="12" fill="#42A5F5" rx="2"/>
      <text x="248" y="55" font-size="8" fill="#333">Vivienda</text>
      <rect x="230" y="65" width="12" height="12" fill="#66BB6A" rx="2"/>
      <text x="248" y="75" font-size="8" fill="#333">Alimentos</text>
      <rect x="230" y="85" width="12" height="12" fill="#FFA726" rx="2"/>
      <text x="248" y="95" font-size="8" fill="#333">Transporte</text>
      <rect x="230" y="105" width="12" height="12" fill="#EF5350" rx="2"/>
      <text x="248" y="115" font-size="8" fill="#333">Educacion</text>
      <rect x="230" y="125" width="12" height="12" fill="#AB47BC" rx="2"/>
      <text x="248" y="135" font-size="8" fill="#333">Salud</text>
      <rect x="230" y="145" width="12" height="12" fill="#78909C" rx="2"/>
      <text x="248" y="155" font-size="8" fill="#333">Ahorro</text>
    </svg>`,
    context:'La grafica circular muestra la distribucion del presupuesto familiar mensual de los Rodriguez. El ingreso mensual familiar es de $4.200.000.',
    question:'Cual es el valor destinado a educacion?',
    options:['$504.000','$630.000','$840.000','$1.470.000'],
    correct:0,
    explanation:{correct:'Educacion corresponde al 12% del presupuesto: $4.200.000 x 0,12 = $504.000.',wrongs:['$630.000 es el 15% (transporte)','Opcion correcta','$840.000 es el 20% (alimentos)','$1.470.000 es el 35% (vivienda)']}
  },

  // --- CIENCIAS CON DIAGRAMAS ---
  {
    id:'CN80',area:'ciencias',areaName:'Ciencias Naturales',difficulty:'media',
    svg:`<svg viewBox="0 0 360 260" xmlns="http://www.w3.org/2000/svg" style="max-width:360px">
      <text x="180" y="18" text-anchor="middle" font-size="11" font-weight="bold" fill="#333">Ciclo del agua</text>
      <ellipse cx="180" cy="230" rx="140" ry="20" fill="#E3F2FD" stroke="#1565C0" stroke-width="1"/>
      <text x="180" y="234" text-anchor="middle" font-size="9" fill="#0D47A1" font-weight="bold">Oceanos y rios</text>
      <path d="M60,210 Q40,140 80,80" stroke="#42A5F5" stroke-width="2" fill="none" marker-end="url(#arrow)"/>
      <text x="35" y="150" font-size="8" fill="#42A5F5" font-weight="bold">Evaporacion</text>
      <ellipse cx="100" cy="65" rx="45" ry="20" fill="#ECEFF1" stroke="#90A4AE" stroke-width="1"/>
      <text x="100" y="69" text-anchor="middle" font-size="8" fill="#546E7F">Nubes</text>
      <path d="M145,65 L220,65" stroke="#90A4AE" stroke-width="2" stroke-dasharray="4,3"/>
      <text x="180" y="58" text-anchor="middle" font-size="8" fill="#78909C">Transporte</text>
      <path d="M220,65 Q260,80 260,130" stroke="#42A5F5" stroke-width="2" fill="none" marker-end="url(#arrow)"/>
      <text x="270" y="100" font-size="8" fill="#42A5F5" font-weight="bold">Condensacion</text>
      <path d="M260,140 L260,200" stroke="#42A5F5" stroke-width="2.5" stroke-dasharray="3,3"/>
      <text x="280" y="175" font-size="8" fill="#1565C0" font-weight="bold">Precipitacion</text>
      <path d="M260,200 Q220,215 180,220" stroke="#42A5F5" stroke-width="1.5" fill="none" marker-end="url(#arrow)"/>
      <text x="220" y="210" font-size="7" fill="#1565C0">Escorrentia</text>
      <circle cx="180" cy="130" r="30" fill="#E8F5E9" stroke="#4CAF50" stroke-width="1.5"/>
      <text x="180" y="127" text-anchor="middle" font-size="8" fill="#2E7D32" font-weight="bold">Plantas</text>
      <text x="180" y="138" text-anchor="middle" font-size="7" fill="#2E7D32">Transpiracion</text>
      <path d="M165,100 Q155,80 130,70" stroke="#4CAF50" stroke-width="1.5" fill="none" marker-end="url(#arrow2)"/>
      <defs>
        <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#42A5F5"/></marker>
        <marker id="arrow2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#4CAF50"/></marker>
      </defs>
    </svg>`,
    context:'El diagrama muestra las etapas principales del ciclo del agua en la naturaleza.',
    question:'Segun el diagrama, cual proceso convierte el agua liquida en vapor de agua?',
    options:['Condensacion','Precipitacion','Evaporacion','Escorrentia'],
    correct:2,
    explanation:{correct:'La evaporacion es el proceso por el cual el agua liquida de oceanos y rios se convierte en vapor de agua debido al calor del sol, subiendo hacia la atmosfera.',wrongs:['La condensacion es cuando el vapor se convierte en nubes (gotas liquidas)','La precipitacion es cuando el agua cae como lluvia o nieve','Opcion correcta','La escorrentia es el agua que fluye sobre la superficie hacia rios y oceanos']}
  },
  {
    id:'CN81',area:'ciencias',areaName:'Ciencias Naturales',difficulty:'dificil',
    table:{
      headers:['Nivel trofico','Organismos','Energia disponible (kcal/m²/año)'],
      rows:[
        ['Productores (plantas)','Gramineas, arbustos','20.000'],
        ['Primer consumidor (herbivoros)','Conejos, insectos','2.000'],
        ['Segundo consumidor (carnivoros primarios)','Zorros, aves rapaces','200'],
        ['Tercer consumidor (carnivoros secundarios)','Aguilas, pumas','20']
      ],
      caption:'Cadena trofica de un ecosistema de paramo colombiano'
    },
    context:'La tabla presenta la informacion de energia disponible en cada nivel trofico de un ecosistema de paramo en Colombia.',
    question:'Segun la tabla, que porcentaje de la energia original llega al nivel del aguila (tercer consumidor)?',
    options:['0,1%','1%','10%','0,01%'],
    correct:0,
    explanation:{correct:'Energia del aguila / Energia original = 20 / 20.000 = 0,001 = 0,1%. Solo el 0,1% de la energia de los productores llega al tercer nivel consumidor.',wrongs:['1% seria 200 kcal (segundo consumidor)','10% seria 2.000 kcal (primer consumidor)','Opcion correcta','0,01% seria 2 kcal, menor a lo mostrado']}
  },
  {
    id:'CN82',area:'ciencias',areaName:'Ciencias Naturales',difficulty:'facil',
    svg:`<svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg" style="max-width:340px">
      <text x="170" y="18" text-anchor="middle" font-size="11" font-weight="bold" fill="#333">Sistema solar (no a escala)</text>
      <circle cx="60" cy="100" r="22" fill="#FDD835" stroke="#F9A825" stroke-width="2"/>
      <text x="60" y="104" text-anchor="middle" font-size="8" fill="#E65100" font-weight="bold">Sol</text>
      <circle cx="115" cy="100" r="5" fill="#90A4AE"/>
      <text x="115" y="118" text-anchor="middle" font-size="6" fill="#546E7F">Mercurio</text>
      <circle cx="140" cy="100" r="7" fill="#FFCC80"/>
      <text x="140" y="118" text-anchor="middle" font-size="6" fill="#546E7F">Venus</text>
      <circle cx="170" cy="100" r="8" fill="#42A5F5"/>
      <text x="170" y="118" text-anchor="middle" font-size="6" fill="#1565C0" font-weight="bold">Tierra</text>
      <circle cx="200" cy="100" r="6" fill="#EF5350"/>
      <text x="200" y="118" text-anchor="middle" font-size="6" fill="#C62828">Marte</text>
      <circle cx="240" cy="100" r="16" fill="#FFB74D"/>
      <text x="240" y="104" text-anchor="middle" font-size="6" fill="#E65100">Jupiter</text>
      <circle cx="285" cy="100" r="14" fill="#FFE082" stroke="#F9A825" stroke-width="1"/>
      <ellipse cx="285" cy="100" rx="22" ry="5" fill="none" stroke="#F9A825" stroke-width="1" transform="rotate(-15,285,100)"/>
      <text x="285" y="122" text-anchor="middle" font-size="6" fill="#546E7F">Saturno</text>
      <text x="170" y="155" text-anchor="middle" font-size="9" fill="#333">Los planetas interiores (Mercurio, Venus, Tierra, Marte) son rocosos</text>
      <text x="170" y="170" text-anchor="middle" font-size="9" fill="#333">Los planetas exteriores (Jupiter, Saturno) son gaseosos</text>
      <text x="170" y="185" text-anchor="middle" font-size="8" fill="#1565C0" font-weight="bold">La Tierra es el unico planeta con agua liquida en su superficie</text>
    </svg>`,
    context:'El diagrama muestra los planetas del sistema solar ordenados segun su distancia al Sol.',
    question:'Segun el diagrama, que caracteristica diferencia a la Tierra de los demas planetas interiores?',
    options:['Es el mas cercano al Sol','Es el mas grande del sistema solar','Es el unico con agua liquida en su superficie','Tiene anillos como Saturno'],
    correct:2,
    explanation:{correct:'El diagrama indica que "La Tierra es el unico planeta con agua liquida en su superficie", lo que la diferencia de Mercurio, Venus y Marte.',wrongs:['Mercurio es el mas cercano al Sol','Jupiter es el mas grande','Opcion correcta','Saturno tiene anillos, no la Tierra']}
  },

  // --- SOCIALES CON MAPAS Y DIAGRAMAS ---
  {
    id:'SC80',area:'sociales',areaName:'Sociales y Ciudadania',difficulty:'media',
    svg:`<svg viewBox="0 0 350 280" xmlns="http://www.w3.org/2000/svg" style="max-width:350px">
      <text x="175" y="18" text-anchor="middle" font-size="11" font-weight="bold" fill="#333">Evolucion del PIB per capita en Colombia (2015-2023)</text>
      <line x1="50" y1="30" x2="50" y2="230" stroke="#666" stroke-width="1.5"/>
      <line x1="50" y1="230" x2="330" y2="230" stroke="#666" stroke-width="1.5"/>
      <text x="15" y="135" font-size="8" fill="#666" transform="rotate(-90,15,135)">USD</text>
      <text x="40" y="225" font-size="7" fill="#666">5.000</text>
      <text x="35" y="185" font-size="7" fill="#666">6.000</text>
      <text x="35" y="145" font-size="7" fill="#666">7.000</text>
      <text x="35" y="105" font-size="7" fill="#666">8.000</text>
      <text x="35" y="65" font-size="7" fill="#666">9.000</text>
      <polyline points="70,185 105,165 140,145 175,150 210,170 245,140 280,120 315,105" fill="none" stroke="#1565C0" stroke-width="2.5"/>
      <circle cx="70" cy="185" r="4" fill="#1565C0"/><text x="70" y="198" text-anchor="middle" font-size="7" fill="#333">2015</text>
      <circle cx="105" cy="165" r="4" fill="#1565C0"/><text x="105" y="198" text-anchor="middle" font-size="7" fill="#333">2017</text>
      <circle cx="140" cy="145" r="4" fill="#1565C0"/><text x="140" y="198" text-anchor="middle" font-size="7" fill="#333">2019</text>
      <circle cx="175" cy="150" r="5" fill="#EF5350" stroke="#C62828" stroke-width="2"/><text x="175" y="198" text-anchor="middle" font-size="7" fill="#C62828" font-weight="bold">2020</text>
      <circle cx="210" cy="170" r="4" fill="#1565C0"/><text x="210" y="198" text-anchor="middle" font-size="7" fill="#333">2021</text>
      <circle cx="245" cy="140" r="4" fill="#1565C0"/><text x="245" y="198" text-anchor="middle" font-size="7" fill="#333">2022</text>
      <circle cx="280" cy="120" r="4" fill="#1565C0"/><text x="280" y="198" text-anchor="middle" font-size="7" fill="#333">2023</text>
      <text x="175" y="248" text-anchor="middle" font-size="8" fill="#C62828" font-weight="bold">Caida por pandemia COVID-19</text>
      <text x="175" y="265" text-anchor="middle" font-size="8" fill="#333">Fuente: Banco Mundial</text>
    </svg>`,
    context:'La grafica muestra la evolucion del PIB per capita de Colombia entre 2015 y 2023, en dolares estadounidenses. El punto marcado en rojo indica el impacto de la pandemia de COVID-19.',
    question:'Segun la grafica, en que ano se presento la caida mas fuerte del PIB per capita en Colombia?',
    options:['2017','2019','2020','2022'],
    correct:2,
    explanation:{correct:'La grafica muestra un punto rojo marcado en 2020 con la nota "Caida por pandemia COVID-19", indicando la mayor caida del PIB per capita durante el periodo mostrado.',wrongs:['En 2017 el PIB per capita aumento respecto a 2015','En 2019 el PIB per capita era mayor que en 2017','Opcion correcta','En 2022 el PIB per capita se recupero significativamente']}
  },
  {
    id:'SC81',area:'sociales',areaName:'Sociales y Ciudadania',difficulty:'dificil',
    table:{
      headers:['Indicador','2010','2015','2020','2023'],
      rows:[
        ['Poblacion (millones)','44,9','49,3','50,9','52,0'],
        ['Tasa de urbanizacion (%)','75','77','80','82'],
        ['Pobreza (%)','37,2','27,8','35,5','33,0'],
        ['Acceso a internet (%)','32','52','68','75']
      ],
      caption:'Indicadores sociales de Colombia'
    },
    context:'La tabla muestra indicadores sociales de Colombia en cuatro periodos diferentes.',
    question:'Cual de los siguientes comportamientos se observa en todos los periodos de la tabla?',
    options:['La tasa de pobreza disminuyo continuamente','La urbanizacion y el acceso a internet aumentaron en todos los periodos','La poblacion se mantuvo constante','El acceso a internet siempre supero el 50%'],
    correct:1,
    explanation:{correct:'La urbanizacion aumento en cada periodo (75→77→80→82) y el acceso a internet tambien aumento en cada periodo (32→52→68→75). Ambos indicadores muestran crecimiento continuo.',wrongs:['La pobreza aumento en 2020 (35,5%) respecto a 2015 (27,8%)','Opcion correcta','La poblacion crecio de 44,9 a 52 millones','En 2010 el acceso a internet era solo 32%, menor al 50%']}
  },

  // --- LECTURA CRITICA CON TABLAS ---
  {
    id:'LC80',area:'lectura',areaName:'Lectura Critica',difficulty:'media',
    table:{
      headers:['Region','Produccion de cafe (sacos/ano)','No. de productores','Rendimiento (sacos/productor)'],
      rows:[
        ['Eje Cafetero','8.500.000','540.000','15,7'],
        ['Norte de Santander','1.200.000','85.000','14,1'],
        ['Huila','1.800.000','62.000','29,0'],
        ['Tolima','950.000','48.000','19,8']
      ],
      caption:'Produccion cafetera en Colombia por region (2022)'
    },
    context:'La tabla presenta datos sobre la produccion de cafe en cuatro regiones colombianas. El rendimiento se calcula dividiendo la produccion total entre el numero de productores.',
    question:'Segun los datos de la tabla, cual region tiene el mayor rendimiento promedio por productor?',
    options:['Eje Cafetero','Norte de Santander','Huila','Tolima'],
    correct:2,
    explanation:{correct:'Huila tiene el mayor rendimiento con 29,0 sacos por productor, a pesar de tener menos productores que el Eje Cafetero. Esto sugiere una mayor eficiencia productiva.',wrongs:['El Eje Cafetero produce mas en total pero su rendimiento por productor es 15,7','Norte de Santander tiene el menor rendimiento (14,1)','Opcion correcta','Tolima tiene 19,8, menor que Huila']}
  },
  {
    id:'LC81',area:'lectura',areaName:'Lectura Critica',difficulty:'dificil',
    context:`"Un estudio de la Universidad Nacional analizo el rendimiento de 2.000 estudiantes de grado 11 en tres pruebas simultaneas: una de comprension lectora con textos academicos, otra con textos literarios, y una tercera con textos argumentativos. Los resultados mostraron que el promedio en comprension lectora de textos academicos fue 62/100, en textos literarios 71/100, y en textos argumentativos 55/100. Los investigadores concluyeron que los estudiantes tienen mayor dificultad con textos que requieren evaluar la solidez de los argumentos presentados."`,
    question:'Cual de las siguientes conclusiones esta mejor sustentada por los datos del estudio?',
    options:['Los estudiantes leen mas libros que articulos academicos','Los estudiantes tienen mejor comprension de textos argumentativos que academicos','La dificultad de los estudiantes varia segun el tipo de texto, siendo mayor con los argumentativos','Los textos literarios son los mas faciles de comprender para todos los estudiantes'],
    correct:2,
    explanation:{correct:'Los datos muestran diferencias claras: academicos 62, literarios 71, argumentativos 55. La diferencia entre el puntaje mas alto (literarios: 71) y el mas bajo (argumentativos: 55) respalda que la dificultad varia segun el tipo de texto.',wrongs:['El texto no informa sobre habitos de lectura fuera del estudio','Los argumentativos tienen el MENOR puntaje (55), no el mayor','Opcion correcta','Aunque los literarios tienen el puntaje mas alto, la conclusion general es sobre la variabilidad']}
  },

  // --- INGLES CON CONTENIDO VISUAL ---
  {
    id:'EN80',area:'ingles',areaName:'Ingles',difficulty:'media',
    svg:`<svg viewBox="0 0 350 220" xmlns="http://www.w3.org/2000/svg" style="max-width:350px">
      <text x="175" y="18" text-anchor="middle" font-size="11" font-weight="bold" fill="#333">Monthly rainfall in Medellin (mm)</text>
      <line x1="50" y1="30" x2="50" y2="185" stroke="#666" stroke-width="1.5"/>
      <line x1="50" y1="185" x2="340" y2="185" stroke="#666" stroke-width="1.5"/>
      <text x="15" y="110" font-size="8" fill="#666" transform="rotate(-90,15,110)">mm</text>
      <text x="42" y="183" font-size="7" fill="#666">0</text>
      <text x="35" y="155" font-size="7" fill="#666">50</text>
      <text x="35" y="125" font-size="7" fill="#666">100</text>
      <text x="35" y="95" font-size="7" fill="#666">150</text>
      <text x="35" y="65" font-size="7" fill="#666">200</text>
      <text x="35" y="35" font-size="7" fill="#666">250</text>
      <polyline points="65,155 90,140 115,135 140,155 165,170 190,165 215,175 240,160 265,145 290,155 315,165" fill="none" stroke="#42A5F5" stroke-width="2.5"/>
      <circle cx="65" cy="155" r="3" fill="#42A5F5"/>
      <circle cx="90" cy="140" r="3" fill="#42A5F5"/>
      <circle cx="115" cy="135" r="3" fill="#42A5F5"/>
      <circle cx="140" cy="155" r="3" fill="#42A5F5"/>
      <circle cx="165" cy="170" r="3" fill="#42A5F5"/>
      <circle cx="190" cy="165" r="3" fill="#42A5F5"/>
      <circle cx="215" cy="175" r="3" fill="#42A5F5"/>
      <circle cx="240" cy="160" r="3" fill="#42A5F5"/>
      <circle cx="265" cy="145" r="3" fill="#42A5F5"/>
      <circle cx="290" cy="155" r="3" fill="#42A5F5"/>
      <circle cx="315" cy="165" r="3" fill="#42A5F5"/>
      <text x="65" y="198" text-anchor="middle" font-size="6" fill="#333">J</text>
      <text x="90" y="198" text-anchor="middle" font-size="6" fill="#333">F</text>
      <text x="115" y="198" text-anchor="middle" font-size="6" fill="#333">M</text>
      <text x="140" y="198" text-anchor="middle" font-size="6" fill="#333">A</text>
      <text x="165" y="198" text-anchor="middle" font-size="6" fill="#333">M</text>
      <text x="190" y="198" text-anchor="middle" font-size="6" fill="#333">J</text>
      <text x="215" y="198" text-anchor="middle" font-size="6" fill="#333">J</text>
      <text x="240" y="198" text-anchor="middle" font-size="6" fill="#333">A</text>
      <text x="265" y="198" text-anchor="middle" font-size="6" fill="#333">S</text>
      <text x="290" y="198" text-anchor="middle" font-size="6" fill="#333">O</text>
      <text x="315" y="198" text-anchor="middle" font-size="6" fill="#333">N</text>
      <text x="175" y="215" text-anchor="middle" font-size="8" fill="#333">Source: IDEAM</text>
    </svg>`,
    context:'The line graph shows the average monthly rainfall in Medellin, Colombia, measured in millimeters. The x-axis shows the months (J=January, F=February, etc.).',
    question:'According to the graph, during which months does Medellin experience its highest rainfall?',
    options:['January to March','April to May and October to November','June to August','September to December'],
    correct:1,
    explanation:{correct:'The graph shows two peaks in the rainfall line: one around April-May (the line drops around month 5-6) and another around October-November (the line rises again around month 10-11). These correspond to the two rainy seasons in Medellin.',wrongs:['The graph shows relatively low rainfall in January-March','Opcion correcta','June-August shows decreasing rainfall','The graph does not show December data']}
  },
  {
    id:'EN81',area:'ingles',areaName:'Ingles',difficulty:'dificil',
    table:{
      headers:['City','Average temperature (°C)','Annual rainfall (mm)','Humidity (%)','Best season to visit'],
      rows:[
        ['Bogota','14','830','70','December-March'],
        ['Cartagena','27','1050','80','December-April'],
        ['Leticia','26','2500','85','July-September'],
        ['Barranquilla','28','840','75','December-March']
      ],
      caption:'Climate data for four Colombian cities'
    },
    context:'The table provides climate information for four major Colombian cities to help tourists plan their visits.',
    question:'A tourist wants to visit a city with the lowest rainfall and comfortable temperatures. Which city would be the best choice?',
    options:['Cartagena','Leticia','Bogota','Barranquilla'],
    correct:3,
    explanation:{correct:'Barranquilla has the second lowest rainfall (840 mm) and the highest temperature (28°C). Bogota has lower rainfall (830 mm) but much cooler temperatures (14°C). For "comfortable temperatures" (warm), Barranquilla is the better choice.',wrongs:['Cartagena has high rainfall (1050 mm) and high humidity','Leticia has the highest rainfall (2500 mm)','Bogota has the lowest rainfall but very cool temperatures (14°C average)','Opcion correcta']}
  },

  // --- MATEMATICAS ADICIONALES ---
  {
    id:'MT83',area:'matematicas',areaName:'Matematicas',difficulty:'facil',
    table:{
      headers:['Producto','Precio normal ($)','Precio en descuento ($)','Descuento (%)'],
      rows:[
        ['Laptop','1.200','960','20%'],
        ['Celular','800','640','?'],
        ['Tablet','500','425','?'],
        ['Auriculares','150','120','?']
      ],
      caption:'Catalogo de la tienda TechStore en descuentos de fin de ano'
    },
    context:'La tabla muestra los precios de productos en una tienda de tecnologia durante una promocion de fin de ano.',
    question:'Cual es el porcentaje de descuento aplicado al tablet?',
    options:['10%','15%','20%','25%'],
    correct:1,
    explanation:{correct:'Descuento = ((Precio normal - Precio descuento) / Precio normal) x 100 = ((500 - 425) / 500) x 100 = (75/500) x 100 = 15%.',wrongs:['10% seria $450','Opcion correcta','20% seria $400','25% seria $375']}
  },
  {
    id:'MT84',area:'matematicas',areaName:'Matematicas',difficulty:'dificil',
    svg:`<svg viewBox="0 0 350 230" xmlns="http://www.w3.org/2000/svg" style="max-width:350px">
      <text x="175" y="18" text-anchor="middle" font-size="11" font-weight="bold" fill="#333">Poblacion de Colombia por grupos de edad (Censo 2023)</text>
      <line x1="50" y1="30" x2="50" y2="200" stroke="#666" stroke-width="1.5"/>
      <line x1="50" y1="200" x2="330" y2="200" stroke="#666" stroke-width="1.5"/>
      <text x="15" y="120" font-size="8" fill="#666" transform="rotate(-90,15,120)">Millones</text>
      <text x="42" y="200" font-size="7" fill="#666">0</text>
      <text x="35" y="170" font-size="7" fill="#666">5</text>
      <text x="35" y="140" font-size="7" fill="#666">10</text>
      <text x="35" y="110" font-size="7" fill="#666">15</text>
      <text x="35" y="80" font-size="7" fill="#666">20</text>
      <rect x="65" y="130" width="40" height="70" fill="#42A5F5" rx="3"/>
      <text x="85" y="155" text-anchor="middle" font-size="8" fill="white" font-weight="bold">12</text>
      <rect x="120" y="110" width="40" height="90" fill="#66BB6A" rx="3"/>
      <text x="140" y="145" text-anchor="middle" font-size="8" fill="white" font-weight="bold">15</text>
      <rect x="175" y="140" width="40" height="60" fill="#FFA726" rx="3"/>
      <text x="195" y="160" text-anchor="middle" font-size="8" fill="white" font-weight="bold">10</text>
      <rect x="230" y="155" width="40" height="45" fill="#EF5350" rx="3"/>
      <text x="250" y="170" text-anchor="middle" font-size="8" fill="white" font-weight="bold">7,5</text>
      <rect x="285" y="170" width="40" height="30" fill="#AB47BC" rx="3"/>
      <text x="305" y="180" text-anchor="middle" font-size="8" fill="white" font-weight="bold">5</text>
      <text x="85" y="215" text-anchor="middle" font-size="7" fill="#333">0-14</text>
      <text x="140" y="215" text-anchor="middle" font-size="7" fill="#333">15-29</text>
      <text x="195" y="215" text-anchor="middle" font-size="7" fill="#333">30-44</text>
      <text x="250" y="215" text-anchor="middle" font-size="7" fill="#333">45-59</text>
      <text x="305" y="215" text-anchor="middle" font-size="7" fill="#333">60+</text>
    </svg>`,
    context:'La grafica de barras muestra la distribucion de la poblacion colombiana por grupos de edad, segun el Censo 2023. La suma total es 49,5 millones.',
    question:'Cual es la proporcion de la poblacion mayor de 45 anos respecto al total?',
    options:['15%','25%','30%','35%'],
    correct:1,
    explanation:{correct:'Poblacion 45-59: 7,5 millones. Poblacion 60+: 5 millones. Total mayor de 45: 12,5 millones. Total poblacion: 49,5 millones. Proporcion: (12,5/49,5) x 100 = 25,25% ≈ 25%.',wrongs:['15% seria 7,4 millones','Opcion correcta','30% seria 14,85 millones','35% seria 17,3 millones']}
  },

  // --- CIENCIAS ADICIONALES ---
  {
    id:'CN83',area:'ciencias',areaName:'Ciencias Naturales',difficulty:'media',
    table:{
      headers:['Propiedad','Plomo','Aluminio','Oro','Cobre'],
      rows:[
        ['Densidad (g/cm³)','11,3','2,7','19,3','8,9'],
        ['Punto de fusion (°C)','327','660','1064','1085'],
        ['Conductividad electrica','Baja','Alta','Media','Alta']
      ],
      caption:'Propiedades fisicas de cuatro metales'
    },
    context:'La tabla presenta propiedades fisicas de cuatro metales comunmente utilizados en la industria.',
    question:'Un ingeniero necesita un metal liviano (baja densidad) que conduzca bien la electricidad para fabricar cables electricos. Cual metal es la mejor opcion?',
    options:['Plomo','Aluminio','Oro','Cobre'],
    correct:3,
    explanation:{correct:'El cobre tiene baja densidad relativa (8,9 g/cm³) y alta conductividad electrica, por lo que es ideal para cables electricos. El aluminio tambien es liviano pero su conductividad es menor que la del cobre.',wrongs:['El plomo es muy denso (11,3 g/cm³) y tiene baja conductividad','El aluminio es liviano pero su conductividad es menor','El oro tiene conductividad media y es muy costoso','Opcion correcta (cobre: densidad moderada + alta conductividad)']}
  },
  {
    id:'CN84',area:'ciencias',areaName:'Ciencias Naturales',difficulty:'dificil',
    svg:`<svg viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg" style="max-width:360px">
      <text x="180" y="18" text-anchor="middle" font-size="11" font-weight="bold" fill="#333">Estructura del ADN - Doble helice</text>
      <line x1="80" y1="40" x2="80" y2="170" stroke="#1565C0" stroke-width="3"/>
      <line x1="280" y1="40" x2="280" y2="170" stroke="#C62828" stroke-width="3"/>
      <line x1="110" y1="55" x2="250" y2="55" stroke="#666" stroke-width="2" stroke-dasharray="5,5"/>
      <line x1="95" y1="75" x2="265" y2="75" stroke="#666" stroke-width="2" stroke-dasharray="5,5"/>
      <line x1="100" y1="95" x2="260" y2="95" stroke="#666" stroke-width="2" stroke-dasharray="5,5"/>
      <line x1="110" y1="115" x2="250" y2="115" stroke="#666" stroke-width="2" stroke-dasharray="5,5"/>
      <line x1="95" y1="135" x2="265" y2="135" stroke="#666" stroke-width="2" stroke-dasharray="5,5"/>
      <line x1="100" y1="155" x2="260" y2="155" stroke="#666" stroke-width="2" stroke-dasharray="5,5"/>
      <circle cx="110" cy="55" r="8" fill="#42A5F5"/><text x="110" y="58" text-anchor="middle" font-size="7" fill="white" font-weight="bold">A</text>
      <circle cx="250" cy="55" r="8" fill="#EF5350"/><text x="250" y="58" text-anchor="middle" font-size="7" fill="white" font-weight="bold">T</text>
      <circle cx="95" cy="75" r="8" fill="#66BB6A"/><text x="95" y="78" text-anchor="middle" font-size="7" fill="white" font-weight="bold">C</text>
      <circle cx="265" cy="75" r="8" fill="#FFA726"/><text x="265" y="78" text-anchor="middle" font-size="7" fill="white" font-weight="bold">G</text>
      <circle cx="100" cy="95" r="8" fill="#42A5F5"/><text x="100" y="98" text-anchor="middle" font-size="7" fill="white" font-weight="bold">A</text>
      <circle cx="260" cy="95" r="8" fill="#EF5350"/><text x="260" y="98" text-anchor="middle" font-size="7" fill="white" font-weight="bold">T</text>
      <circle cx="110" cy="115" r="8" fill="#66BB6A"/><text x="110" y="118" text-anchor="middle" font-size="7" fill="white" font-weight="bold">C</text>
      <circle cx="250" cy="115" r="8" fill="#FFA726"/><text x="250" y="118" text-anchor="middle" font-size="7" fill="white" font-weight="bold">G</text>
      <circle cx="95" cy="135" r="8" fill="#FFA726"/><text x="95" y="138" text-anchor="middle" font-size="7" fill="white" font-weight="bold">G</text>
      <circle cx="265" cy="135" r="8" fill="#66BB6A"/><text x="265" y="138" text-anchor="middle" font-size="7" fill="white" font-weight="bold">C</text>
      <circle cx="100" cy="155" r="8" fill="#EF5350"/><text x="100" y="158" text-anchor="middle" font-size="7" fill="white" font-weight="bold">T</text>
      <circle cx="260" cy="155" r="8" fill="#42A5F5"/><text x="260" y="158" text-anchor="middle" font-size="7" fill="white" font-weight="bold">A</text>
      <text x="55" y="105" font-size="8" fill="#1565C0" font-weight="bold" transform="rotate(-90,55,105)">Cadena 5'-3'</text>
      <text x="305" y="105" font-size="8" fill="#C62828" font-weight="bold" transform="rotate(90,305,105)">Cadena 3'-5'</text>
      <text x="180" y="190" text-anchor="middle" font-size="8" fill="#333">A-T (2 puentes de hidrogeno) | C-G (3 puentes de hidrogeno)</text>
    </svg>`,
    context:'El diagrama muestra la estructura del ADN con sus bases nitrogenadas complementarias. A se une con T (adenina-timina) y C se une con G (citosina-guanina).',
    question:'Segun el diagrama, si una cadena del ADN tiene la secuencia 5-ATCG-3, cual seria la secuencia complementaria en la otra cadena?',
    options:['5-ATCG-3','5-GCTA-3','3-TAGC-5','3-CGAT-5'],
    correct:2,
    explanation:{correct:'La cadena complementaria se lee en sentido opuesto (3-5). A se une con T, T con A, C con G, G con C. Entonces 5-ATCG-3 se complementa con 3-TAGC-5.',wrongs:['La secuencia complementaria no es identica','La secuencia no se invierte asi','Opcion correcta','Esta en el sentido incorrecto']}
  }
);
