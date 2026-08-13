export interface NavItem {
  label: string;
  path: string;
}

export interface LinkItem {
  label: string;
  url: string;
  external?: boolean;
  ariaLabel?: string;
}

export interface FlowStage {
  id: string;
  label: string;
  eyebrow: string;
  summary: string;
  detail: string;
}

export interface SelectedCase {
  eyebrow: string;
  title: string;
  description: string;
  context: string;
  contribution: string[];
  learning: string;
  url: string;
  cta: string;
}

export interface CapabilityGroup {
  title: string;
  description: string;
  items: string[];
}

export interface StackGroup {
  title: string;
  description: string;
  items: string[];
}

export interface TimelineEntry {
  period: string;
  title: string;
  organization: string;
  location: string;
  description: string;
  highlights: string[];
}

export interface EducationEntry {
  period: string;
  title: string;
  institution: string;
  detail: string;
}

export interface ArticleTheme {
  label: string;
  description: string;
}

export const siteConfig = {
  siteName: 'Cipriano Gorosito',
  siteUrl: 'https://cipriano.prichelco.com.ar',
  defaultOgImage: '/assets/img/og-image.jpg',
  tagline: 'Producto, tecnología y liderazgo para resolver problemas reales.',
  shortTagline: 'Producto · Tecnología · Liderazgo',
  description:
    'Desarrollo productos y sistemas digitales, conectando necesidades operativas, decisiones técnicas y equipos para llevar soluciones a producción.',
  location: 'Buenos Aires, Argentina',
  email: 'ciprianongorosito@gmail.com',
  phoneDisplay: '+54 9 11 2817 3122',
  whatsappUrl: 'https://wa.me/541128173122?text=Hola%20Cipriano',
  linkedinUrl: 'https://ar.linkedin.com/in/ciprianogn',
  githubUrl: 'https://github.com/ciprianogn',
  cvDownloadPath: '/assets/files/cipriano-gorosito-cv.pdf',
  navigation: [
    { label: 'Inicio', path: '/' },
    { label: 'Perfil', path: '/sobre-mi' },
    { label: 'Proyectos', path: '/proyectos' },
    { label: 'Experiencia', path: '/experiencia' },
    { label: 'Contacto', path: '/contacto' },
  ] satisfies NavItem[],
  socialLinks: [
    { label: 'LinkedIn', url: 'https://ar.linkedin.com/in/ciprianogn', external: true },
    { label: 'GitHub', url: 'https://github.com/ciprianogn', external: true },
  ] satisfies LinkItem[],
  hero: {
    eyebrow: 'Producto · Tecnología · Sistemas',
    title: 'Convierto problemas complejos en soluciones que funcionan.',
    description:
      'Trabajo entre negocio y tecnología: entiendo la necesidad, ordeno decisiones y construyo productos digitales que llegan a producción.',
    primaryCta: { label: 'Ver experiencia', path: '/experiencia' },
    secondaryCta: { label: 'Explorar proyectos', path: '/proyectos' },
    contextBar: [
      'Software y producto',
      'Análisis funcional',
      'Integraciones y automatización',
      'Coordinación entre áreas',
      'Buenos Aires, Argentina',
    ],
  },
  communicationSystem: [
    {
      id: 'purpose',
      label: 'Propósito',
      eyebrow: 'Punto de partida',
      summary: 'Todo empieza por aclarar para qué existe la iniciativa.',
      detail: 'Ordeno el problema y la dirección antes de hablar de herramientas o implementación.',
    },
    {
      id: 'strategy',
      label: 'Estrategia',
      eyebrow: 'Criterio y foco',
      summary: 'La estrategia define prioridades, audiencias y decisiones.',
      detail:
        'Trabajo la estructura que permite sostener el mensaje con objetivos, etapas y una lógica de implementación.',
    },
    {
      id: 'content',
      label: 'Contenido',
      eyebrow: 'Narrativa y forma',
      summary: 'El contenido traduce el mensaje para personas reales.',
      detail:
        'Busco piezas, relatos y formatos que comuniquen con claridad, contexto y una voz coherente.',
    },
    {
      id: 'channel',
      label: 'Canal',
      eyebrow: 'Presencia y distribución',
      summary: 'Cada canal tiene un rol distinto dentro del sistema.',
      detail:
        'No todo debe pasar por redes: la experiencia también puede vivir en una web, una campaña, un flujo o una comunidad.',
    },
    {
      id: 'tool',
      label: 'Herramienta',
      eyebrow: 'Sistema y soporte',
      summary: 'La tecnología sostiene procesos, equipos y experiencia.',
      detail:
        'Construyo páginas, automatizaciones, productos internos e integraciones para que la operación no dependa de improvisación.',
    },
    {
      id: 'learning',
      label: 'Aprendizaje',
      eyebrow: 'Mejora continua',
      summary: 'Medir y aprender evita repetir esfuerzos sueltos.',
      detail:
        'Cada sistema necesita feedback, documentación y ajustes para crecer con criterio, no solo con intensidad.',
    },
  ] satisfies FlowStage[],
  selectedWork: [
    {
      eyebrow: 'Producto interno · Operación',
      title: 'Via Bariloche',
      description:
        'Evolución de sistemas internos para acompañar necesidades operativas concretas.',
      context:
        'Trabajo cerca de las áreas usuarias para traducir problemas, definir alcance y llevar mejoras desde el análisis hasta la implementación.',
      contribution: [
        'Análisis de necesidades y definición de soluciones',
        'Desarrollo y evolución de herramientas internas',
        'Integración entre procesos, datos y áreas',
        'Automatización y mejora continua',
      ],
      learning:
        'Una solución técnica genera valor cuando entiende la operación y puede sostenerse después de la primera entrega.',
      url: '/experiencia',
      cta: 'Ver experiencia',
    },
    {
      eyebrow: 'Productos propios · Implementación',
      title: 'Prichelco',
      description:
        'Un espacio de construcción de software, automatizaciones e integraciones orientadas a problemas concretos.',
      context:
        'Me permite recorrer el ciclo completo: descubrir una necesidad, diseñar la solución, construirla y ponerla en funcionamiento.',
      contribution: [
        'Arquitectura y desarrollo de aplicaciones web',
        'Sistemas administrativos y productos digitales',
        'APIs, integraciones y automatización',
        'Despliegue, soporte y evolución',
      ],
      learning:
        'Construir de punta a punta obliga a tomar mejores decisiones de producto, no solamente decisiones de código.',
      url: 'https://prichelco.com.ar/',
      cta: 'Conocer Prichelco',
    },
    {
      eyebrow: 'Dirección · Equipos · Operación digital',
      title: 'Comunicación y sistemas',
      description:
        'Experiencia coordinando personas, herramientas y procesos en contextos con múltiples frentes de trabajo.',
      context:
        'Planificación, seguimiento, documentación y transferencia para transformar iniciativas dispersas en una operación más clara.',
      contribution: [
        'Coordinación de equipos y responsables',
        'Diseño de procesos y herramientas de trabajo',
        'Capacitación y transferencia de conocimiento',
        'Planificación y seguimiento de entregas',
      ],
      learning:
        'Liderar también es construir el contexto para que otras personas puedan decidir, ejecutar y sostener el trabajo.',
      url: '/sobre-mi',
      cta: 'Conocer mi forma de trabajar',
    },
  ] satisfies SelectedCase[],
  leadershipPrinciples: [
    {
      index: '01',
      title: 'Entender antes de construir',
      description:
        'Bajo la ambigüedad a decisiones concretas: problema, alcance, prioridad y criterio de éxito.',
    },
    {
      index: '02',
      title: 'Conectar áreas',
      description:
        'Traduzco necesidades operativas y decisiones técnicas para que el trabajo avance con menos fricción.',
    },
    {
      index: '03',
      title: 'Dejar capacidad instalada',
      description:
        'Documento, transfiero y diseño soluciones que puedan mantenerse sin depender de una sola persona.',
    },
  ],
  homeExperience: {
    title: 'Experiencia en contextos donde el software sostiene la operación.',
    summary:
      'Combino análisis, desarrollo e implementación. No entro solamente por el código: trabajo sobre la necesidad, las decisiones y la adopción de la solución.',
    currentRole: {
      period: '2022 - Actualidad',
      title: 'Desarrollo de software y producto',
      organization: 'Via Bariloche S.A.',
      location: 'Buenos Aires, Argentina',
      description:
        'Trabajo sobre sistemas internos, evolución de herramientas, organización de etapas e integración entre necesidades operativas y soluciones técnicas.',
      highlights: [
        'Análisis de necesidades y definición de soluciones',
        'Implementación y evolución de sistemas internos',
        'Automatización, soporte a procesos y mejora continua',
        'Comunicación de propuestas técnicas entre áreas',
      ],
    },
    stackPreview: [
      'Angular',
      'TypeScript',
      'PHP',
      'APIs',
      'MySQL',
      'SQL Server',
      'Linux',
      'Automatización',
    ],
  },
  ecosystem: [
    {
      eyebrow: 'Software, productos y automatización',
      title: 'Prichelco',
      description:
        'El espacio donde desarrollo software, sistemas, integraciones y productos digitales con orientación práctica.',
      url: 'https://prichelco.com.ar/',
      cta: 'Ver productos y proyectos en Prichelco',
      external: true,
      ariaLabel: 'Ver productos y proyectos en Prichelco, sitio externo',
      details: [
        'Productos digitales',
        'Sistemas administrativos',
        'Automatización',
        'Integraciones',
      ],
    },
    {
      eyebrow: 'Estrategia, identidad y contenido',
      title: 'Yateino',
      description:
        'El espacio donde viven los trabajos de estrategia, identidad, diseño y contenido para marcas y proyectos.',
      url: 'https://yateino.com.ar/',
      cta: 'Ver trabajos creativos en Yateino',
      external: true,
      ariaLabel: 'Ver trabajos creativos en Yateino, sitio externo',
      details: [
        'Identidad y sistemas visuales',
        'Contenido',
        'Dirección creativa',
        'Estrategia de marca',
      ],
    },
  ] satisfies Array<{
    eyebrow: string;
    title: string;
    description: string;
    url: string;
    cta: string;
    external: boolean;
    ariaLabel: string;
    details: string[];
  }>,
  aboutPage: {
    title: 'Trabajo donde los problemas de negocio se encuentran con la tecnología.',
    intro:
      'Mi perfil combina desarrollo, análisis y coordinación. Me interesa entender qué está frenando a un equipo y convertirlo en una solución concreta.',
    narrative: [
      'Empecé desde el desarrollo y aprendí que una buena solución rara vez se resuelve solamente con código. También necesita contexto, prioridades y una lectura honesta de la operación.',
      'Hoy puedo moverme entre una conversación funcional, una decisión de producto y la implementación técnica. Ese cruce es donde más valor aporto.',
    ],
    timeline: [
      'Desarrollo como punto de entrada',
      'Análisis para convertir ambigüedad en alcance',
      'Producto y liderazgo para sostener la solución',
    ],
    principles: [
      {
        title: 'Primero entiendo el problema.',
        description:
          'Antes de elegir una herramienta, necesito saber qué cambia para la persona o el proceso que la va a usar.',
      },
      {
        title: 'La prioridad ordena el trabajo.',
        description:
          'Prefiero procesos sostenibles antes que ráfagas intensas que después nadie puede continuar.',
      },
      {
        title: 'La tecnología tiene que simplificar.',
        description:
          'Construyo sistemas para liberar energía, no para agregar capas de complejidad innecesaria.',
      },
      {
        title: 'La experiencia también es parte del producto.',
        description:
          'El diseño, la estructura y los estados de una interfaz determinan si una solución se entiende o se abandona.',
      },
      {
        title: 'Trabajo para que las cosas sigan.',
        description:
          'Documentación, criterio y transferencia importan tanto como la primera entrega.',
      },
    ],
  },
  missionPage: {
    title: 'Proyectos donde análisis, producto y tecnología trabajan juntos.',
    intro:
      'No separo el problema de su implementación. Cada proyecto empieza por entender el contexto y termina cuando la solución puede usarse, medirse y sostenerse.',
    layers: [
      {
        title: 'Contexto',
        description: 'Entender quién usa la solución, qué proceso toca y qué restricción existe.',
      },
      {
        title: 'Problema',
        description: 'Separar síntomas de causas y definir qué vale la pena resolver primero.',
      },
      {
        title: 'Alcance',
        description: 'Convertir expectativas abiertas en decisiones, etapas y criterios claros.',
      },
      {
        title: 'Solución',
        description: 'Diseñar el flujo, los datos y la arquitectura adecuados para el contexto.',
      },
      {
        title: 'Implementación',
        description: 'Construir, integrar y validar sin perder de vista la necesidad original.',
      },
      {
        title: 'Adopción',
        description: 'Acompañar a las personas que usan la herramienta y ajustar la experiencia.',
      },
      {
        title: 'Evolución',
        description: 'Medir, documentar y mejorar para que el producto no quede congelado.',
      },
    ],
    collaborationGroups: [
      {
        title: 'Descubrir y ordenar',
        description: 'Del problema abierto a un alcance que el equipo puede ejecutar.',
        items: ['Análisis funcional', 'Mapeo de procesos', 'Priorización', 'Definición de alcance'],
      },
      {
        title: 'Diseñar y construir',
        description: 'Producto, experiencia e implementación técnica dentro del mismo proceso.',
        items: ['Diseño de solución', 'Frontend', 'Backend', 'APIs e integraciones'],
      },
      {
        title: 'Construir y sostener',
        description: 'Operación, automatización y transferencia para asegurar continuidad.',
        items: ['Automatización', 'Documentación', 'Capacitación', 'Mejora continua'],
      },
    ] satisfies CapabilityGroup[],
  },
  experiencePage: {
    title: 'Experiencia construyendo software, productos y sistemas.',
    description:
      'Mi recorrido profesional combina desarrollo, análisis, producto, automatización, implementación y comunicación entre áreas.',
    summary:
      'Resuelvo problemas que necesitan una lectura completa: entender la necesidad, ordenar la estrategia, definir una solución, construirla y acompañar su implementación dentro de contextos reales.',
    timeline: [
      {
        period: '2022 - Actualidad',
        title: 'Desarrollo de software y producto',
        organization: 'Via Bariloche S.A.',
        location: 'Buenos Aires, Argentina',
        description:
          'Participo en evolución de sistemas internos, análisis de necesidades, organización de etapas e implementación de mejoras sobre procesos operativos.',
        highlights: [
          'Desarrollo y evolución de herramientas internas',
          'Análisis de necesidades y definición de soluciones',
          'Integración entre áreas y comunicación de propuestas técnicas',
          'Automatización, soporte a procesos y mejora continua',
        ],
      },
      {
        period: 'Práctica independiente',
        title: 'Construcción de productos y soluciones digitales',
        organization: 'Prichelco',
        location: 'Trabajo propio y proyectos independientes',
        description:
          'Desarrollo software, landings, sistemas administrativos, integraciones y automatizaciones orientadas a necesidades concretas.',
        highlights: [
          'Construcción de software y plataformas',
          'Diseño de soluciones e implementación técnica',
          'Integraciones y automatizaciones',
          'Relación directa con necesidades de producto y operación',
        ],
      },
      {
        period: 'Ecosistema creativo y estratégico',
        title: 'Comunicación, identidad y narrativa',
        organization: 'Yateino',
        location: 'Dirección y trabajo creativo aplicado',
        description:
          'Acompaño proyectos que necesitan claridad en identidad, estrategia, presencia digital y contenido.',
        highlights: [
          'Estrategia de marca y narrativa',
          'Identidad y sistema visual',
          'Contenido y dirección creativa',
          'Puente entre mensaje, presencia y experiencia',
        ],
      },
    ] satisfies TimelineEntry[],
    serviceContexts: [
      'Traducción de necesidades operativas a decisiones técnicas y de producto.',
      'Coordinación de personas, etapas y herramientas para sostener la implementación.',
      'Documentación, capacitación y transferencia para reducir dependencias.',
    ],
    capabilityGroups: [
      {
        title: 'Producto y análisis',
        description: 'Problemas, alcance, etapas, validación y criterios de solución.',
        items: [
          'Análisis de necesidades',
          'Definición de soluciones',
          'Documentación',
          'Mejora continua',
        ],
      },
      {
        title: 'Frontend',
        description: 'Interfaces, experiencia, arquitectura de pantallas y navegación.',
        items: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Interfaces SSR'],
      },
      {
        title: 'Backend',
        description: 'Lógica, servicios, estructura y continuidad operativa.',
        items: ['PHP', 'Laravel', 'CodeIgniter', 'Servicios internos'],
      },
      {
        title: 'APIs e integraciones',
        description: 'Conexión entre sistemas, automatización y transferencia de datos.',
        items: [
          'REST APIs',
          'Integraciones con terceros',
          'Documentación técnica',
          'Procesos conectados',
        ],
      },
      {
        title: 'Bases de datos',
        description: 'Modelo, consultas, procedimientos y soporte a procesos.',
        items: ['MySQL', 'SQL Server', 'Diseño de esquemas', 'Optimización de consultas'],
      },
      {
        title: 'Automatización e infraestructura',
        description: 'Entornos, despliegues, scripts y operación.',
        items: ['Linux', 'Apache', 'Bash', 'Batch', 'Entornos de desarrollo y producción'],
      },
      {
        title: 'Liderazgo y coordinación',
        description: 'Trabajo entre áreas, equipos y procesos.',
        items: [
          'Coordinación cross-team',
          'Capacitación técnica',
          'Seguimiento de etapas',
          'Transferencia',
        ],
      },
    ] satisfies CapabilityGroup[],
    stackGroups: [
      {
        title: 'Frontend y experiencia web',
        description: 'Tecnologías que uso para construir interfaces y experiencias.',
        items: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
      },
      {
        title: 'Backend, datos y APIs',
        description:
          'Herramientas con las que resuelvo lógica, datos y comunicación entre sistemas.',
        items: ['PHP', 'Laravel', 'CodeIgniter', 'MySQL', 'SQL Server', 'REST APIs'],
      },
      {
        title: 'Operación y herramientas',
        description: 'Entornos, automatización y utilidades de trabajo.',
        items: [
          'Linux',
          'Apache',
          'GitLab',
          'Jira',
          'Postman',
          'WinSCP',
          'Workbench',
          'VirtualBox',
        ],
      },
    ] satisfies StackGroup[],
    education: [
      {
        period: '2023',
        title: 'JavaScript Desarrollador Avanzado',
        institution: 'EducaciónIT',
        detail: 'APIs, asincronía, SPA, REST y validación de datos.',
      },
      {
        period: '2023',
        title: 'Angular',
        institution: 'EducaciónIT',
        detail: 'Componentes, servicios, router, formularios e integración con recursos externos.',
      },
      {
        period: '2022',
        title: 'PHP MVC Laravel',
        institution: 'EducaciónIT',
        detail: 'Patrones MVC, validaciones, Query Builder y arquitectura web.',
      },
      {
        period: '2022',
        title: 'Programación Web con PHP y MySQL',
        institution: 'EducaciónIT',
        detail: 'Bases de desarrollo web, sesiones, autenticación y persistencia.',
      },
    ] satisfies EducationEntry[],
  },
  contentPage: {
    title: 'Notas sobre producto, tecnología y trabajo real.',
    description:
      'Aprendizajes de construir sistemas, tomar decisiones y trabajar con problemas que no llegan ordenados.',
    themes: [
      { label: 'Producto', description: 'Problemas, alcance y decisiones.' },
      { label: 'Tecnología', description: 'Arquitectura, herramientas e implementación.' },
      { label: 'Liderazgo', description: 'Claridad, coordinación y transferencia.' },
      { label: 'Procesos', description: 'Operación, automatización y mejora.' },
      { label: 'Aprendizajes', description: 'Trabajo real, errores y criterio.' },
    ] satisfies ArticleTheme[],
  },
  contactPage: {
    title: 'Hablemos del problema, no solamente de la herramienta.',
    description:
      'Estoy abierto a oportunidades profesionales, productos digitales y desafíos donde pueda conectar análisis, tecnología y equipos.',
    directChannels: [
      {
        title: 'Correo directo',
        description: 'Para contar contexto, alcance y tiempos con más detalle.',
        value: 'ciprianongorosito@gmail.com',
        href: 'mailto:ciprianongorosito@gmail.com',
      },
      {
        title: 'WhatsApp profesional',
        description: 'Para una primera conversación breve o coordinar una llamada.',
        value: '+54 9 11 2817 3122',
        href: 'https://wa.me/541128173122?text=Hola%20Cipriano',
      },
      {
        title: 'LinkedIn',
        description: 'Para oportunidades laborales, equipos y contexto profesional.',
        value: 'linkedin.com/in/ciprianogn',
        href: 'https://ar.linkedin.com/in/ciprianogn',
      },
    ],
  },
  finalCta: {
    missionTitle: '¿Hay un producto o proceso que necesita orden y una solución concreta?',
    missionText: 'Podemos conversar sobre el contexto, las restricciones y el próximo paso útil.',
    missionAction: { label: 'Contarme el problema', path: '/contacto' },
    careerTitle: '¿Querés evaluar mi recorrido para una oportunidad profesional?',
    careerText:
      'También podés ir directo a mi experiencia, ver mi CV y revisar dónde encaja mi perfil dentro de un equipo o producto.',
    careerAction: { label: 'Ver experiencia y CV', path: '/experiencia' },
  },
} as const;
