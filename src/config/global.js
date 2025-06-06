export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'El ciclo de las políticas públicas',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Fases iniciales del ciclo de las políticas públicas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Puesta en la agenda pública',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Diseño de políticas públicas',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Planificación estratégica',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Formulación e implementación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Formulación de políticas públicas',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Implementación',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Angarita Escolar, N. & Guzmán Mendoza, C. E. (2015). Las políticas públicas: cuadernos de notas. Universidad del Norte.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/116612',
    },
    {
      referencia:
        'Mballa, L. V. (2017). Políticas públicas y complejidad: en búsqueda de soluciones a los problemas públicos. Editorial Miguel Ángel Porrúa.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/40131',
    },
    {
      referencia:
        'Ministerio de Inclusión Económica y Social. (2009). Políticas sociales e institucionalidad pública. Corporación Editora Nacional - UASB-E.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/80212',
    },
    {
      referencia:
        'Gómez, J. J. (2010). El ciclo de las políticas públicas. Comisión Económica para América Latina y el Caribe (CEPAL). ',
      link:
        'https://www.academia.edu/4272888/el_ciclo_de_las_politicas_publicas_Gomez_CEPAL ',
    },
    {
      referencia:
        'Arias De La Mora, R. (2019). El “ciclo de las políticas” en la enseñanza de las políticas públicas. Revista Ópera, (25), 137-157. ',
      link: 'https://www.redalyc.org/journal/675/67560760008/67560760008.pdf',
    },
    {
      referencia:
        'Ejea Mendoza, G. (2006). Teoría y ciclo de las políticas públicas. Proyecto “Un enfoque institucionalista de la educación superior en México”.  ',
      link:
        'https://dcsh.azc.uam.mx/index.php/files/95/Reportes-Economia/1417/Teoria-y-ciclo-de-las-politicas-publicas.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Agenda pública',
      significado:
        'conjunto de temas que han sido reconocidos como problemas relevantes y que requieren atención del Estado.',
    },
    {
      termino: 'Diagnóstico',
      significado:
        'proceso de identificación y análisis de un problema público, sus causas y consecuencias.',
    },
    {
      termino: 'Diseño de políticas',
      significado:
        'fase inicial del ciclo en la que se formulan objetivos, estrategias e instrumentos para intervenir en un problema.',
    },
    {
      termino: 'Eficacia',
      significado:
        'grado en que se alcanzan los objetivos planteados por una política pública.',
    },
    {
      termino: 'Eficiencia',
      significado:
        'relación entre los recursos utilizados y los resultados obtenidos.',
    },
    {
      termino: 'Evaluación ex ante',
      significado:
        'valoración que se realiza antes de la implementación de una política para prever su viabilidad y pertinencia.',
    },
    {
      termino: 'Evaluación ex post',
      significado:
        'análisis que se efectúa una vez finalizada la política para medir sus impactos y resultados sostenidos.',
    },
    {
      termino: 'Formulación',
      significado:
        'etapa en la que se estructuran las alternativas de intervención pública con base en el análisis de problemas y objetivos.',
    },
    {
      termino: 'Indicador',
      significado:
        'dato cuantitativo o cualitativo que permite medir avances, desempeño o impacto de una política pública.',
    },
    {
      termino: 'Implementación',
      significado:
        'proceso de ejecución de las acciones previstas en una política, mediante recursos y actores institucionales.',
    },
    {
      termino: 'Monitoreo',
      significado:
        'seguimiento continuo del desarrollo de una política con el fin de identificar desviaciones y tomar decisiones correctivas.',
    },
    {
      termino: 'Retroalimentación',
      significado:
        'proceso de ajuste de políticas públicas con base en la información generada por el monitoreo y la evaluación.',
    },
    {
      termino: 'Sostenibilidad',
      significado:
        'capacidad de una política para mantener sus beneficios a largo plazo sin agotar recursos o generar dependencia.',
    },
  ],
}
