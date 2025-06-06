<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Fases iniciales del ciclo de las políticas públicas'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p.mb-4(data-aos="fade-left") Comprender cómo el Estado aborda los problemas colectivos implica analizar las primeras etapas del ciclo de las políticas públicas. Este proceso comienza con el reconocimiento de una situación que requiere atención institucional, su posicionamiento en la agenda política y continúa con su diseño y planificación estratégica.
    
        .bg-color-6.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En este marco, se explora cómo un tema se convierte en prioridad gubernamental, los factores que inciden en su visibilidad, y la estructura básica que debe adoptar una política pública desde su concepción. Asimismo, se identifican elementos clave de la planificación, esenciales para alinear el diagnóstico, los objetivos y los recursos disponibles. Comprender estas fases fortalece la capacidad de análisis del contexto político e institucional, fomenta una visión crítica y reflexiva, y permite adquirir herramientas técnicas para participar en la formulación de políticas.

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Puesta en la agenda pública
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/3.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          p.mb-0 Una de las fases más críticas del ciclo, es el <b>ingreso de un tema</b> en la agenda gubernamental, dado que condiciona todo el desarrollo posterior de una política. Aunque ciertos sectores reconozcan la existencia de un problema, no todas las demandas sociales logran transformarse en asuntos prioritarios para el gobierno.
        p(data-aos="fade-left") Según Gómez (2010), un tema forma parte de la agenda pública cuando alcanza visibilidad suficiente para obligar a las autoridades a considerarlo en sus decisiones. Este proceso no es espontáneo, sino el resultado de dinámicas sociales, políticas e institucionales. Los tipos de agenda pública son: 

    .bg-full-width.bg-color-8
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/4.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Agenda sistémica
                p.mb-0 Temas percibidos como relevantes, por la sociedad en general.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/5.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Agenda institucional o formal
                p.mb-0 Temas que las autoridades deciden incorporar en sus procesos de gestión.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/6.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Agenda decisional
                p.mb-0 Asuntos sobre los que efectivamente se adoptan decisiones o se asignan recursos.
    
    h2(data-aos="fade-left") Transición y condiciones para el ingreso
    p.mb-5 El paso de un tema, <b>desde la agenda sistémica a la agenda institucional</b>, no es automático. Muchas veces, un problema permanece como preocupación social sin intervención estatal. Para ser priorizado, debe cumplir con ciertas condiciones:

    .row.justify-content-center.align-items-stretch.mb-3
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-5.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/7.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Visibilidad
              p.mb-0 La percepción colectiva de que el tema merece atención pública.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-5.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/8.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Legitimidad
              p.mb-0 Reconocimiento de que el problema es de interés público y debe ser abordado por el Estado.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-5.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/9.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Viabilidad
              p.mb-0 Posibilidad real de intervenir, considerando recursos, contexto político y capacidades institucionales.

    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        p.mb-0.text-white La <b>oportunidad política</b> también resulta clave. Hechos coyunturales como crisis, protestas, cambios de gobierno o sentencias judiciales, pueden abrir una <b>ventana de oportunidad</b>, donde coinciden el problema, una solución disponible y la voluntad política (Arias De La Mora, 2019).
    
    h2(data-aos="fade-left") Actores en la construcción de la agenda
    p.mb-5 El proceso de agenda no es neutral. Participan diversos actores con distintos niveles de poder:

    .bg-full-width.bg-color-7.mb-5
      .px-4.px-md-5
        .row.align-items-center
          .col-lg-4.order-2
            img(src="@/assets/curso/tema1/10.svg").mx-auto
          .col-lg-8.order-1.mb-3.mb-lg-0
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Grupos de interés</b>: gremios empresariales, ONG, sindicatos o movimientos sociales que <b>impulsan</b> causas, mediante presión mediática o movilización.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Actores gubernamentales:</b> asesores, funcionarios y autoridades electas que actúan como filtros o promotores. Ejea Mendoza (2006), los denomina <b>guardianes de la agenda</b>.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Medios de comunicación</b>: desempeñan un rol clave al <b>moldear</b> la percepción pública sobre qué es importante, generando <b>presión</b> sobre los tomadores de decisiones (Mballa, 2017).
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/11.png", data-aos="zoom-in")
      .col-lg-8
        h2(data-aos="fade-left") Disputas por el sentido del problema
        p.mb-5 Una vez incluido un tema en la agenda, se disputa su <b>definición</b>. La manera en que se enuncia un problema condiciona las posibles soluciones. Por ejemplo, interpretar la violencia juvenil como un problema de seguridad, de exclusión social o de falta de oportunidades educativas, conlleva diferentes respuestas.
    
        .bg-color-9.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/12.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Los problemas públicos no existen de forma objetiva, sino que son <b>construcciones colectivas</b> sujetas a disputas simbólicas. Quien impone su narrativa domina también la agenda de soluciones (Arias De La Mora, 2019).
    
    .bg-full-width.bg-color-12.mb-5
      .p-4.p-md-5
        .row
          .col-lg-3.order-2
            figure
              img(src="@/assets/curso/tema1/13.png", data-aos="zoom-in")
          .col-lg-9.order-1.mb-3.mb-lg-0
            h2(data-aos="fade-left") Obstáculos y desigualdad en el acceso a la agenda
            p(data-aos="fade-left") No todos los problemas logran ingresar en la agenda. Algunos quedan <b>invisibilizados</b> por barreras estructurales, estigmatización o debilidad organizativa. Otros son <b>excluidos deliberadamente</b> por intereses que se benefician del status quo.
        
            .bg-color-6.p-4.mb-3(data-aos="fade-left")
              p.mb-0 Desde una visión crítica, es importante reconocer que el acceso a la agenda es <b>desigual</b>. Temas respaldados por actores con poder político o económico, tienen mayores posibilidades, mientras que sectores marginados enfrentan más obstáculos (Ministerio de Inclusión Económica y Social, 2009).
            p Para democratizar el proceso, se requieren mecanismos de <b>consulta pública</b> y <b>participación ciudadana</b>, que amplíen la representación y fortalezcan la legitimidad del sistema político (Angarita & Guzmán, 2015).
    
    h2.mb-5(data-aos="fade-left") Importancia estratégica de esta fase

    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/14.png', alt='')
        .col-lg
          .p-4
            p(data-aos="fade-up") Comprender la puesta en agenda permite analizar por qué ciertas políticas se desarrollan y otras no, más allá de su justificación técnica. Este conocimiento es esencial para actores que desean incidir en el ciclo de las políticas, desde roles técnicos, sociales o políticos.
            p Conocer los puntos de entrada, los actores claves y las dinámicas institucionales, proporciona herramientas para una participación informada y estratégica (Gómez, 2010).
    
    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Diseño de políticas públicas
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/15.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") Diseñar políticas públicas implica construir una respuesta coherente, viable y efectiva, ante un problema social previamente identificado y priorizado. Esta fase define la arquitectura de la intervención estatal, orientando, tanto los medios como los fines de la acción gubernamental. Al situarse en la intersección entre lo deseable y lo posible, exige integrar racionalidad técnica, capacidad institucional, diálogo político y una lectura crítica del contexto.
        p Según Gómez (2010), esta etapa incluye:
    
        .bg-color-7.p-4(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 La formulación de alternativas de solución.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Su evaluación técnica y política.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 La elección de la opción más adecuada.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 La asignación de recursos para su ejecución.
    
    .bg-full-width-2.bg-fondo-3
      .px-4.px-md-5.pb-md-3
        p(data-aos="fade-left") Por tanto, el diseño no debe entenderse únicamente como un ejercicio técnico, sino como un proceso político-estratégico, en el que diversos actores negocian intereses, visiones y prioridades. Los componentes del diseño de políticas públicas son: 
        .row.justify-content-center.mb-5
          .col-lg-8.mb-3.mb-lg-0.order-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/17.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Objetivos
                p.text-center Definen los propósitos de la política, alineados con el interés público y las capacidades estatales.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/18.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Alternativas de solución
                p.text-center Conjunto de opciones viables, eficaces y eficientes, para intervenir en el problema.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/19.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Instrumentos de política
                p.text-center Mecanismos como regulaciones, incentivos, programas, alianzas público-privadas, etc.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/20.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Evaluación ex ante
                p.text-center Proyección de impactos, costos y beneficios de cada alternativa, para fundamentar la decisión.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/21.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Asignación de recursos
                p.text-center Determinación del presupuesto y la capacidad técnica para ejecutar la política.
    
          .col-lg-4.order-1
            figure
              img(src='@/assets/curso/tema1/16.png', alt='')
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        p.mb-0.text-white Este enfoque integral permite formular políticas con capacidad transformadora, evitando soluciones simplistas o improvisadas.
    
    h2.mb-5(data-aos="fade-left") Perspectivas del diseño: técnica y política

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/22.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") El diseño combina dos dimensiones inseparables:
    
        .bg-color-15.p-4(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 <b>Técnica:</b> requiere claridad en la definición del problema, rigor metodológico en el análisis y coherencia entre objetivos y medios.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 <b>Política:</b> demanda un equilibrio entre las demandas ciudadanas, los intereses institucionales y las fuerzas en juego.
        .bg-color-9.p-4(data-aos="fade-left")
          p Ejea Mendoza (2006), afirma que una política gana robustez cuando se articula sobre la base de evidencia empírica y consenso social, lo que mejora su legitimidad. Para ello, se requiere detectar ventanas de oportunidad, identificar liderazgos estratégicos y construir escenarios de negociación.
    
    h2(data-aos="fade-left") Diseño estratégico en contextos complejos
    p.mb-5 En América Latina, el diseño enfrenta condiciones adversas como baja capacidad institucional, fragmentación del Estado y presión de grupos de interés. Ante este panorama, Mballa (2017), propone una perspectiva de complejidad, que reconoce como características inherentes del proceso, las siguientes:

    .row.justify-content-center.align-items-stretch.mb-4.text-center.text-white.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-2.p-4(data-aos="fade-up").h-100
          p.mb-0 La incertidumbre.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-10.p-4(data-aos="fade-down").h-100
          p.mb-0 La adaptación.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-2.p-4(data-aos="fade-up").h-100
          p.mb-0 La no linealidad
    
    .bg-full-width.bg-color-14.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/23.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Desde esta visión, el diseño se convierte en una estrategia dinámica orientada al aprendizaje institucional, capaz de explorar rutas diversas y adaptarse al entorno, superando así los modelos cerrados y excesivamente racionales.
    
    .titulo-figura.mb-4
      h5 Tabla 1.
      span Tipos de instrumentos en el diseño
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr
            th.bg-color-5 Tipo de instrumento
            th.bg-color-5 Ejemplo aplicado
            th.bg-color-5 Características
        tbody
          tr
            td.text-bold Regulación directa.
            td Leyes de tránsito.
            td Establecen normas obligatorias con sanciones por su incumplimiento.
          tr
            td.text-bold Incentivos económicos.
            td Subsidios al empleo juvenil.
            td Promueven comportamientos deseados mediante recompensas.
          tr
            td.text-bold Prestación de servicios.
            td Programas de salud pública.
            td El Estado garantiza el acceso a bienes o servicios básicos.
          tr
            td.text-bold Información pública.
            td Campañas de vacunación.
            td Buscan modificar actitudes y decisiones ciudadanas, mediante comunicación estratégica.
          tr
            td.text-bold Asociaciones público-privadas.
            td Infraestructura educativa compartida.
            td Combinan recursos estatales y privados, para lograr objetivos comunes.
    
    p.mb-4 Cada instrumento tiene implicaciones diferentes en términos de eficacia, costos, gobernanza y sostenibilidad, por lo que su selección debe considerar tanto, criterios técnicos como políticos.

    h2(data-aos="fade-left") Criterios de calidad en el diseño
    p.mb-5 Arias De La Mora (2019), identifica cinco criterios claves que sirven como referentes para garantizar un buen diseño:

    .bg-full-width.bg-color-7
      .px-4.px-md-5
        .row.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            img(src="@/assets/curso/tema1/24.svg").mx-auto
          .col-lg-8
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Coherencia entre diagnóstico, objetivos y medios.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Pertinencia frente al contexto político, social y económico.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Viabilidad institucional y presupuestal.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Mecanismos de seguimiento y ajuste.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Inclusión de mecanismos participativos.

    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5.py-4
        p.mb-0 Estos no son lineamientos rígidos, sino orientaciones flexibles que ayudan a mejorar la calidad del diseño. Se destaca especialmente la participación ciudadana desde las primeras fases, elemento clave para reforzar la legitimidad y la corresponsabilidad social.
    
    h2(data-aos="fade-left") Riesgos y debilidades en el diseño
    p.mb-5 El diseño no está exento de errores o limitaciones. Entre los riesgos más frecuentes se encuentran:

    .row.justify-content-center.align-items-stretch.mb-3
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-5.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/25.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Primero
              p.mb-0 Presión política desmedida
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-5.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/26.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Segundo
              p.mb-0 Diagnósticos incompletos.
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-5.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/27.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Tercero
              p.mb-0 Articulación deficiente entre actores.
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-5.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/28.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Cuarto
              p.mb-0 Capacidad técnica insuficiente.
    
    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/29.png", data-aos="zoom-in")
      .col-lg-7
        .bg-color-9.h-100.p-4(data-aos="fade-left")
          p Angarita y Guzmán (2015), advierten que muchas políticas fracasan por fallas en su diseño, más que por falta de voluntad. Esto ocurre cuando no se dimensionan adecuadamente los recursos, se identifican mal los beneficiarios o no se prevén escenarios de implementación.
          p.mb-0 Para reducir estos riesgos, se recomienda incorporar evaluaciones ex ante y establecer instancias interinstitucionales de revisión, que permitan corregir deficiencias antes de poner en marcha la política.
    
    h2(data-aos="fade-left") El diseño como acto de responsabilidad pública
    p.mb-5 El diseño de políticas públicas es una etapa que exige rigurosidad técnica y sensibilidad política. Su éxito radica en la capacidad de construir soluciones pertinentes, adaptables y consensuadas ante problemáticas sociales complejas. En los contextos latinoamericanos, diseñar con calidad es un acto de responsabilidad institucional y un compromiso con el bienestar colectivo.
    
    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Planificación estratégica

    .bg-color-6.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.order-2
          figure
            img(src='@/assets/curso/tema1/30.png', alt='')
        .col-lg.order-1.mb-3.mb-lg-0
          .p-4
            p.mb-0(data-aos="fade-up") La planificación estratégica es una fase central del ciclo de políticas públicas. Más que una programación de acciones, constituye una práctica reflexiva, anticipatoria y adaptativa que permite al Estado proyectar un rumbo claro y fundamentado para la toma de decisiones. Este enfoque resulta clave en contextos donde se necesita alinear múltiples intereses, racionalizar recursos y establecer metas coherentes con las demandas sociales.
    
    p.mb-4 En términos conceptuales, se entiende como un proceso sistemático que define objetivos a largo plazo, identifica recursos necesarios y establece mecanismos para alcanzar metas. Para ello, debe estar anclada en el conocimiento del entorno y la previsión de escenarios futuros posibles. Las características fundamentales son: 

    .bg-full-width.bg-color-8
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/31.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Naturaleza proactiva.
                p.mb-0 Permite actuar anticipadamente, frente a los problemas.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/32.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Análisis de contexto.
                p.mb-0 Exige una lectura crítica de las condiciones sociales, económicas, culturales y políticas.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/33.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Coherencia medios-fines.
                p.mb-0 Impulsa el uso racional de recursos y la coordinación entre actores.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/34.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Arias De La Mora (2019), señala que la planificación actúa como un marco estratégico que guía desde la definición del problema, hasta la evaluación de resultados. A pesar de ello, enfrenta desafíos como la racionalidad limitada de los actores públicos, quienes no siempre disponen de la información ni del contexto político adecuados, para seguir los planes al pie de la letra.
    
        .bg-color-1.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/36.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La planificación estratégica en políticas públicas permite estructurar las decisiones del Estado de forma coherente y progresiva. Aunque el avance no siempre sigue una lógica estrictamente racional, contar con una ruta organizada facilita la adaptación a los cambios y fortalece la capacidad de respuesta, frente a los desafíos sociales.
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5
        .row.align-items-center
          .col-lg-6.order-lg-2.mb-3.mb-lg-0
            img(src="@/assets/curso/tema1/37.svg").mx-auto
          .col-lg-6.order-lg-1
            .p-4.p-md-5
              p(data-aos="fade-left").mb-4.text-white Para estudiar esta temática, lo invitamos a escuchar el siguiente <em>podcast</em>.
      
              TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
                texto="Fundamentos de la innovación estratégica"
                tiempo
                :audio="require('../../assets/curso/podcast/podcast1.mp3')"
              )
    
    .bg-full-width.bg-color-8
      .px-4.px-md-5.pb-md-3
        .row.mb-5
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/38.png", data-aos="zoom-in")
          .col-lg-9
            h2(data-aos="fade-left") Integración institucional
            p.mb-5 Un elemento esencial es la articulación entre niveles de gobierno (nacional, regional y local) y entre entidades del sector público. La falta de coordinación puede generar duplicidad de funciones, dispersión de recursos o contradicciones normativas. En América Latina, esta debilidad institucional ha sido un obstáculo recurrente, donde muchas decisiones responden a presiones coyunturales, más que a planes estratégicos. Gómez (2010), plantea fortalecer esta dimensión mediante sistemas nacionales de planeación.
            h2(data-aos="fade-left") Planificación y desarrollo sostenible
            .bg-color-9.p-4(data-aos="fade-left")
              p.mb-0 Actualmente, la planificación estratégica también se vincula con los objetivos de desarrollo sostenible, priorizando no solo la resolución de problemas inmediatos, sino la sostenibilidad económica, social y ambiental. Según el Ministerio de Inclusión Económica y Social (2009), debe basarse en equidad, inclusión y responsabilidad intergeneracional, contribuyendo a una institucionalidad pública orientada al bienestar colectivo.
    
    h2(data-aos="fade-left") Evaluación y retroalimentación
    p.mb-5 La evaluación permite medir el grado de cumplimiento de los objetivos y la efectividad de las estrategias. Ejea Mendoza (2006), advierte que sin mecanismos de seguimiento, la planificación puede perder legitimidad y pertinencia. Se recomienda incluir:
    
    .row.justify-content-center.align-items-stretch.mb-4.text-center.text-white.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-2.p-4(data-aos="fade-up").h-100
          p.mb-0 Indicadores de desempeño.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-10.p-4(data-aos="fade-down").h-100
          p.mb-0 Sistemas de información.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-2.p-4(data-aos="fade-up").h-100
          p.mb-0 Procesos participativos.

    .bg-full-width.bg-color-4
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/39.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Estos elementos permiten ajustar las estrategias y fortalecen el aprendizaje institucional, dentro del ciclo de políticas públicas.



    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.eumed.net/rev/cccss/05/aalf.htm " target="_blank" rel="noopener noreferrer") Aguilar Astorga, C. R. & Lima Facio, M. A. (2009). ¿Qué son y para qué sirven las políticas públicas? Contribuciones a las Ciencias Sociales.  

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.casanare.gov.co/Dependencias/Gobierno/Paginas/Componentes-de-la-Estructura-de-la-Politica-Publica.aspx" target="_blank" rel="noopener noreferrer") Secretaría de Gobierno. (2019). Componentes de la Estructura de la Política Pública. Gobernación de Casanare. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=NKlxjtWdq7M " target="_blank" rel="noopener noreferrer") Universidad Continental. (2021). Seguimiento y evaluación de las políticas públicas [video]. YouTube. 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
