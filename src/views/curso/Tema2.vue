<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Formulación e implementación'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema2/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Una vez que el problema ha sido identificado, priorizado e incorporado a la agenda pública, y tras haber delineado los elementos fundamentales mediante el diseño y la planificación estratégica, se ingresa a un momento decisivo dentro del ciclo de las políticas públicas: la formulación y la implementación.
    
    p.mb-4 Este tema permite comprender el tránsito entre la concepción técnica de una política y su ejecución práctica en contextos reales, atravesados por limitaciones institucionales, intereses diversos y dinámicas sociales cambiantes.

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        .bg-color-6.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En esta sección, se analizarán las características esenciales de la formulación, entendida como el proceso mediante el cual se construyen alternativas, se seleccionan instrumentos y se toman decisiones con base en criterios técnicos, políticos y sociales. Posteriormente, se abordará la fase de implementación, en la que dichas decisiones se transforman en acciones concretas, orientadas a resolver el problema identificado.
        p(data-aos="fade-left") Este recorrido le permitirá interpretar críticamente, las condiciones que favorecen o dificultan la efectividad de las políticas públicas. Además, contribuirá a fortalecer su capacidad para reconocer la importancia de la articulación entre planificación, ejecución y evaluación, como base para una gestión pública coherente, participativa y orientada al bienestar colectivo.
    
        

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Formulación de políticas públicas
    
    p.mb-4 La formulación es una fase estratégica del ciclo de políticas públicas, en la que se define la respuesta del Estado, frente a un problema social reconocido. Este proceso traduce el diagnóstico en una propuesta de acción concreta, viable y coherente, a través de la construcción de objetivos, la selección de alternativas y el diseño de instrumentos.

    .bg-full-width.bg-color-16
      .px-4.px-md-5.pb-md-3
        .row.mb-5
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/4.png", data-aos="zoom-in")
          .col-lg-9
            .bg-color-7.p-4.mb-5(data-aos="fade-left")
              p.mb-0 Aquí se integran conocimientos técnicos, valores políticos y capacidades institucionales, para estructurar una intervención pública que debe ser, idealmente, legítima, eficaz y sostenible en el tiempo.
            h2(data-aos="fade-left") Racionalidad técnica y contexto político
            p.mb-5 Desde una perspectiva técnica, formular implica articular el problema con metas claras, evaluar diferentes caminos y anticipar consecuencias. No obstante, el proceso ocurre en entornos complejos y dinámicos, influido por intereses diversos, recursos limitados, conflictos de interpretación y restricciones del entorno, lo cual convierte a la formulación, en un espacio de negociación y deliberación constante.
    
        h2(data-aos="fade-left") Componentes de la formulación
        p.mb-5 Según Gómez (2010), la formulación incluye varios momentos claves. A continuación, se sintetizan en el siguiente cuadro:
    
    .bg-full-width.bg-fondo-2.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema2/5.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="9%" y="33.5%" numero="+")
                h5 Definición del problema.
                p Se delimita con claridad la situación a resolver y sus causas principales.
    
              .bg-color-white.box-shadow.p-3(x="25.5%" y="18.5%" numero="+")
                h5 Establecimiento de objetivos.
                p Se precisan metas y resultados esperados.
    
              .bg-color-white.box-shadow.p-3(x="58%" y="18.5%" numero="+")
                h5 Diseño de alternativas.
                p Se exploran diferentes rutas de acción, para enfrentar el problema.
    
              .bg-color-white.box-shadow.p-3(x="74.5%" y="33.5%" numero="+")
                h5 Evaluación <em>ex ante</em>.
                p Se proyectan impactos, costos y riesgos de cada alternativa.
    
              .bg-color-white.box-shadow.p-3(x="91%" y="41.5%" numero="+")
                h5 Selección.
                p Se elige la opción más adecuada por su viabilidad y legitimidad.
    
    h2.mb-5(data-aos="fade-left") Formular desde la complejidad

    .row.mb-5
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/6.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .bg-color-9.h-100.p-4(data-aos="fade-left")
          p La formulación no es un proceso lineal ni puramente racional. Se desarrolla en entornos con múltiples actores y variables. Por ello, Mballa (2017), sugiere adoptar un enfoque de complejidad, que reconozca la incertidumbre, la adaptabilidad y la necesidad, de un aprendizaje institucional, constante.
          p.mb-0 Este enfoque propone construir políticas basadas en hipótesis abiertas, mecanismos flexibles y estructuras ajustables, sensibles a los cambios en las condiciones sociales y políticas.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/7.png", data-aos="zoom-in")
      .col-lg-8
        h2(data-aos="fade-left") Dimensión política de la formulación
        p(data-aos="fade-left") Más allá de la técnica, la formulación es un acto político y simbólico. Arias De La Mora (2019), indica que formular implica tomar posición, jerarquizar problemas, definir causas legítimas y asignar responsabilidades.
    
        .bg-color-17.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/8.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Por lo tanto, las soluciones no son neutrales: reflejan ideologías, marcos interpretativos y teorías sobre el funcionamiento social. Es esencial explicitar las teorías de entrada, es decir, los supuestos que orientan las decisiones sobre actores, causas y efectos del problema.
    
    h2(data-aos="fade-left") Comparación de alternativas
    p.mb-5 Una etapa crítica es la selección de alternativas. Esta requiere comparar opciones con base en criterios como eficacia, eficiencia, equidad, viabilidad política, aceptabilidad social y sostenibilidad (Ejea Mendoza, 2006). La siguiente tabla ilustra una matriz simplificada:

    .titulo-figura.mb-4
      h5 Tabla 2.
      span Evaluación comparativa de alternativas según criterios claves
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr
            th.bg-color-5 Alternativa
            th.bg-color-5 Eficacia esperada
            th.bg-color-5 Costo estimado
            th.bg-color-5 Viabilidad política
            th.bg-color-5 Equidad
        tbody
          tr
            td.text-bold A
            td Alta
            td Alta
            td Media
            td Alta
          tr
            td.text-bold B
            td Media
            td Baja
            td Alta
            td Media
          tr
            td.text-bold C
            td Alta
            td Media
            td Baja
            td Baja
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        p.mb-0.text-white Este tipo de análisis técnico, no sustituye la dimensión política, pero aporta mayor claridad a la toma de decisiones.
    
    h2.mb-5(data-aos="fade-left") Instrumentos de política pública

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/9.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Una vez seleccionada la alternativa, se eligen los instrumentos para su aplicación. Según Gómez (2010), estos pueden incluir:
    
        .bg-color-1.p-4(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Regulaciones.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Subsidios.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Provisión directa de servicios.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Campañas informativas.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Alianzas público-privadas.
            
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/10.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") La selección depende del tipo de problema, del público objetivo y de los recursos disponibles.
    
        .bg-color-13.p-4(data-aos="fade-left")
          p Ejemplos de adecuación de instrumentos:
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Problemas de comportamiento individual → campañas de sensibilización.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Problemas estructurales → reformas normativas o inversión pública.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Conflictos de interés → mecanismos de concertación. 
        .bg-color-14
          .px-4.px-md-5.py-4
            p.mb-0 La clave está en combinar instrumentos complementarios, que generen cambios concretos, medibles y sostenibles.
    
    h2(data-aos="fade-left") Participación y legitimidad
    p.mb-5 La formulación no debe estar monopolizada por élites técnicas o políticas. Para que una política sea legítima, debe reflejar las demandas ciudadanas. El Ministerio de Inclusión Económica y Social (2009), destaca que la participación mejora el diagnóstico, anticipa resistencias y fortalece el control democrático.

    .bg-full-width.bg-color-9.mb-5
      .px-4.px-md-5.py-4.py-lg-0
        .row.align-items-center.justify-content-center
          .col-lg-5.order-2
            img(src="@/assets/curso/tema2/11.svg").mx-auto
          .col-lg-5.order-1.mb-3.mb-lg-0
            h5 Mecanismos participativos posibles:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Mesas de trabajo con actores sociales.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Consultas públicas abiertas.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Encuestas de opinión.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Validación comunitaria.
    
    p.mb-4 Estas estrategias aportan conocimiento local, refuerzan la equidad y aumentan la aceptación pública.

    h2(data-aos="fade-left") Limitaciones de la formulación
    p.mb-5 Diversos factores pueden dificultar una formulación adecuada:

    .row.justify-content-center.align-items-stretch.mb-3
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-5.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/12.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Primero
              p.mb-0 Diagnósticos incompletos o con datos desactualizados.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-5.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/13.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Segundo
              p.mb-0 Escasa articulación interinstitucional.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-5.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/14.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Tercero
              p.mb-0 Déficit de recursos humanos capacitados
    
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-5.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/15.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Cuarto
              p.mb-0 Tiempos políticos restringidos.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-5.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/16.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Quinto
              p.mb-0 Presiones externas que distorsionan el proceso.

    p.mb-4 Angarita y Guzmán (2015), señalan que muchos fracasos en la implementación provienen de errores en la formulación, como subestimar resistencias sociales o sobreestimar la capacidad estatal.

    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Implementación
    
    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/17.png", data-aos="zoom-in")
      .col-lg-7
        .bg-color-2.text-white.h-100.p-4(data-aos="fade-left")
          p Una vez formulada una política pública, inicia una de las fases más críticas del ciclo: la implementación. En esta etapa, lo planeado se transforma en acciones concretas, se movilizan recursos, se activan actores y se entra en contacto con la ciudadanía, principal destinataria de las decisiones del Estado.
          p.mb-0 Implementar significa hacer operativos los objetivos, trasladar los instrumentos al terreno y garantizar que las intervenciones produzcan los resultados esperados. No obstante, este proceso está lleno de tensiones, obstáculos e incertidumbres.
    
    h2(data-aos="fade-left") Dinámica y complejidad del proceso
    p.mb-5 Gómez (2010), afirma que la implementación es el momento en que “la política entra en acción”, y también donde se pone a prueba la capacidad real del Estado para operar en contextos sociales complejos. No basta con tener buenos diseños: la clave está en la ejecución, es decir, en convertir la intención en resultados tangibles.

    .bg-color-6.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.order-2
          figure
            img(src='@/assets/curso/tema2/18.png', alt='')
        .col-lg.order-1.mb-3.mb-lg-0
          .p-4
            p.mb-0(data-aos="fade-up") Esta fase no es lineal, sino dinámica. Requiere decisiones continuas, adaptaciones, interpretaciones y negociaciones que influyen en su eficacia y legitimidad. En muchos casos, los programas deben reformularse en el camino, corregir errores, incorporar aprendizajes o enfrentar resistencias. La flexibilidad, bien gestionada, puede ser una fortaleza; sin control, se convierte en debilidad.
    
    .titulo-figura.mb-4
      h5 Tabla 3.
      span Modelos de implementación
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr
            th.bg-color-5 Modelo
            th.bg-color-5 Enfoque principal
            th.bg-color-5 Ventajas
            th.bg-color-5 Riesgos
        tbody
          tr
            td.text-bold De arriba hacia abajo (<em>top-down</em>).
            td Dirección jerárquica desde el nivel central.
            td Claridad, uniformidad.
            td Rigidez, escasa adaptación.
          tr
            td.text-bold De abajo hacia arriba (<em>bottom-up</em>).
            td Autonomía de actores locales.
            td Flexibilidad, innovación territorial.
            td Desviación de objetivos originales.
          tr
            td.text-bold Mixto.
            td Coordinación entre niveles.
            td Equilibrio entre control y adaptación.
            td Requiere alto grado de articulación.
    
    h2(data-aos="fade-left") Factores que afectan la implementación
    p.mb-5 Varios factores inciden directamente en la calidad de esta fase:

    .bg-full-width.bg-color-1.mb-5
      .px-4.px-md-5
        .row.align-items-center.justify-content-center
          .col-lg-4.mb-3.mb-lg-0
            img(src="@/assets/curso/tema2/19.svg").mx-auto
          .col-lg-8
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Capacidad institucional:</b> recursos, habilidades, estructuras y normas que permiten cumplir funciones. Su debilidad puede llevar al fracaso, incluso con un buen diseño (Mballa, 2017).
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Coordinación interinstitucional:</b> esencial para evitar duplicidades, vacíos de responsabilidad o conflictos entre organismos y niveles de gobierno.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Formación y motivación del personal operativo:</b> el compromiso y preparación del personal en contacto con la ciudadanía son clave para el éxito (Ministerio de Inclusión Económica y Social, 2009).
    
    h2(data-aos="fade-left") Desafíos territoriales y necesidad de adaptación
    p.mb-5 Implementar no es igual en todas partes. Las diferencias territoriales (infraestructura, cultura, gobernanza), exigen enfoques diferenciados, según contexto urbano, rural o intercultural. Desde el enfoque de complejidad (Mballa, 2017), se recomienda un proceso adaptativo, capaz de responder a la diversidad sin perder coherencia estratégica, utilizando:

    .row.justify-content-center.align-items-stretch.mb-4.text-center.text-white.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-2.p-4(data-aos="fade-up").h-100
          p.mb-0 Proyectos piloto.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-10.p-4(data-aos="fade-down").h-100
          p.mb-0 Retroalimentación permanente.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-2.p-4(data-aos="fade-up").h-100
          p.mb-0 Participación local.

    h2(data-aos="fade-left") Rol de los actores implementadores
    p.mb-5 La implementación involucra múltiples actores: agencias públicas, gobiernos locales, operadores privados, organizaciones sociales y comunidades. Gómez (2010) subraya que estos actores no son ejecutores pasivos, sino intérpretes activos: aplican normas, ajustan procedimientos y corrigen errores de diseño. Por eso, es necesario fomentar procesos de:

    
    .row.align-items-center.mb-5
      .col-lg-4.order-2
        img(src="@/assets/curso/tema2/20.png").mx-auto
      .col-lg-8.order-1.mb-3.mb-lg-0
        .bg-ppal-azul
          .px-4.px-md-5.py-4
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Formación continua.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Acompañamiento técnico.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Evaluación constante.
            p También se destaca la participación ciudadana como co-implementadora, mediante:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Veedurías.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Autogestión.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Prestación comunitaria de servicios.
        .bg-color-4
          .px-4.px-md-5.py-4
            p.mb-0 Este enfoque colaborativo fortalece la legitimidad, mejora la eficiencia y amplía el impacto social.
    
    h2(data-aos="fade-left") Instrumentos de gestión
    p.mb-5 Para asegurar una implementación eficaz, se emplean herramientas de planificación, monitoreo y ajuste. Entre las más utilizadas:

    .row.justify-content-center.align-items-stretch.mb-3
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-5.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/21.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Primero
              p.mb-0 Planes operativos anuales.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-5.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/22.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Segundo
              p.mb-0 Presupuestos por resultados.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-5.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/23.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Tercero
              p.mb-0 Matrices de marco lógico.
    
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-5.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/24.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Cuarto
              p.mb-0 Sistemas de información.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-5.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/25.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Quinto
              p.mb-0 Indicadores de gestión.

    .bg-full-width.bg-color-14.mb-5
      .px-4.px-md-5.py-4
        p.mb-0 Estos instrumentos permiten alinear recursos con objetivos, identificar desviaciones a tiempo y tomar decisiones correctivas basadas en evidencia (Ejea Mendoza, 2006). Además, favorecen la <b>transparencia</b> y la <b>rendición de cuentas</b>, especialmente cuando se integran con evaluaciones externas o participación social.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/26.png", data-aos="zoom-in")
      .col-lg-8
        h2(data-aos="fade-left") Evaluación durante la implementación
        p La evaluación en esta etapa ,se realiza en tiempo real, conocida como evaluación formativa o en curso. No solo se observa el cumplimiento, sino que se identifican fallas y se corrigen procesos.
    
        .bg-color-9.p-4(data-aos="fade-left")
          p Arias De La Mora (2019), resalta que esta práctica permite mantener la pertinencia de la política y evitar el agravamiento de problemas. Se recomienda establecer:
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Indicadores de proceso.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Mecanismos de seguimiento.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Espacios de revisión periódica.
    
    p Implementar políticas públicas va mucho más allá de ejecutar actividades. Es la fase donde el Estado responde a las necesidades sociales con acciones concretas, adaptadas al contexto y guiadas por principios de equidad y sostenibilidad.
    p Comprender los modelos, factores y herramientas de esta etapa te permitirá analizar con mayor profundidad los resultados de una política y proponer mejoras que fortalezcan su impacto y legitimidad.

    .bg-full-width.bg-color-6.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Evaluación y retroalimentación
            p.mb-4(data-aos="fade-right") Se invita a leer el documento Evaluación y retroalimentación, donde se aborda la importancia de la evaluación y el monitoreo dentro del ciclo de las políticas públicas.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Evaluación y retroalimentación.
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/27.png', alt='')
    
    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/38532 " target="_blank" rel="noopener noreferrer") Barrera Zapata, R. (2012). La política y la administración pública. Editorial Miguel Ángel Porrúa. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://revistas.uasb.edu.ec/index.php/eg/article/download/1207/1125" target="_blank" rel="noopener noreferrer") Roth, A-N. (2019). Las políticas públicas y la gestión pública: Un análisis desde la teoría y la práctica. Estudios de la Gestión: Revista Internacional de Administración, (5), 223-229. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=ATPuM-BU_Oo" target="_blank" rel="noopener noreferrer") Universidad Continental. (2021). Diseño y gestión de políticas públicas [video]. YouTube. 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál es la finalidad principal del diagnóstico en el ciclo de las políticas públicas?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Medir los resultados de una política ya ejecutada. ',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Justificar la intervención del sector privado. ',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Identificar y analizar un problema público antes de intervenir. ',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto:
                  'Calcular el presupuesto necesario para la implementación.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Qué fase del ciclo se centra en convertir los objetivos generales en acciones concretas a través de planos y recursos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Evaluación.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Implementación. ',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Planeación. ',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Monitoreo.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Cuáles de las siguientes características definen al monitoreo dentro del ciclo de las políticas públicas?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Es una actividad aislada que solo aplica al final de la política. ',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Permite anticipar problemas durante la ejecución y hacer ajustes. ',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'Se enfoca exclusivamente en el cumplimiento legal de los procesos. ',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Evalúa la viabilidad previa a la implementación.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: 'Una evaluación ex post se realiza con el objetivo de:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Anticipar riesgos de diseño. ',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Verificar si se asignan adecuadamente los recursos. ',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Medir el impacto una vez finalizada la política. ',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Corregir las acciones durante la ejecución.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué característica distingue a la formulación de políticas públicas dentro del ciclo?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Permite si la política logró sus objetivos. ',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Consiste en la asignación presupuestal. ',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Se basa en el diseño técnico y político de alternativas de solución. ',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Implica ejecutar las acciones planificadas.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
