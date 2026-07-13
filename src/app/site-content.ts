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

export interface MissionCase {
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
  tagline: 'Comunicación, creatividad y tecnología al servicio de la misión.',
  shortTagline: 'Estrategia, software y misión',
  description:
    'Estrategia, contenido, software y sistemas digitales para iglesias, proyectos, marcas y equipos que necesitan comunicar y construir con propósito.',
  location: 'Buenos Aires, Argentina',
  email: 'ciprianongorosito@gmail.com',
  phoneDisplay: '+54 9 11 2817 3122',
  whatsappUrl: 'https://wa.me/541128173122?text=Hola%20Cipriano',
  linkedinUrl: 'https://ar.linkedin.com/in/ciprianogn',
  githubUrl: 'https://github.com/Cipriano26',
  cvDownloadPath: '/assets/files/cipriano-gorosito-cv.pdf',
  navigation: [
    { label: 'Inicio', path: '/' },
    { label: 'Mi enfoque', path: '/sobre-mi' },
    { label: 'Comunicación y misión', path: '/comunicacion-y-mision' },
    { label: 'Experiencia', path: '/experiencia' },
    { label: 'Contenido', path: '/contenido' },
    { label: 'Contacto', path: '/contacto' },
  ] satisfies NavItem[],
  socialLinks: [
    { label: 'LinkedIn', url: 'https://ar.linkedin.com/in/ciprianogn', external: true },
    { label: 'GitHub', url: 'https://github.com/Cipriano26', external: true },
    { label: 'Instagram', url: 'https://www.instagram.com/ciprianogn/', external: true },
    { label: 'YouTube', url: 'https://www.youtube.com/@ciprianogn', external: true },
  ] satisfies LinkItem[],
  hero: {
    eyebrow: 'Comunicación · Creatividad · Tecnología · Misión',
    title: 'Construyo comunicación que sirve. Y sistemas que la sostienen.',
    description:
      'Estrategia, contenido y tecnología para iglesias, proyectos misioneros, marcas y equipos que necesitan convertir una idea con propósito en una experiencia real.',
    primaryCta: { label: 'Conocer mi enfoque', path: '/sobre-mi' },
    secondaryCta: { label: 'Ver experiencia y CV', path: '/experiencia' },
    contextBar: [
      'Desarrollo de software y producto',
      'Comunicación estratégica',
      'Dirección de comunicaciones',
      'Sistemas digitales',
      'Buenos Aires, Argentina',
    ],
  },
  communicationSystem: [
    {
      id: 'purpose',
      label: 'Propósito',
      eyebrow: 'Punto de partida',
      summary: 'Todo empieza por aclarar para qué existe la iniciativa.',
      detail:
        'Ordeno la misión, el problema y la dirección antes de hablar de piezas, canales o tecnología.',
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
  missionCases: [
    {
      eyebrow: 'Dirección y estrategia aplicada',
      title: 'Iglesia Dominico',
      description:
        'Una experiencia integral de comunicación, equipos y herramientas digitales al servicio de una comunidad real.',
      context:
        'La comunicación funciona como puerta de entrada, acompañamiento pastoral y soporte operativo para campañas, cultos, eventos y procesos internos.',
      contribution: [
        'Dirección y estrategia de comunicaciones',
        'Planificación de campañas, streaming y contenido',
        'Organización de equipos, procesos y herramientas digitales',
        'Capacitación técnica y mirada misionera de largo plazo',
      ],
      learning:
        'La misión se fortalece cuando mensaje, operación, tecnología y personas dejan de trabajar por separado.',
      url: 'https://www.instagram.com/iglesiadominico/',
      cta: 'Conocer Iglesia Dominico',
    },
    {
      eyebrow: 'Narrativa, experimentación y aprendizaje público',
      title: 'Wenumew',
      description:
        'Un espacio personal de reflexión cristiana, contenido breve y exploración creativa que estoy reconstruyendo durante 2026.',
      context:
        'Funciona como laboratorio para probar formatos, ritmos de publicación y una comunicación más humana, breve y honesta.',
      contribution: [
        'Narrativa cristiana con tono cercano',
        'Video y contenido breve con intención editorial',
        'Exploración de formatos y aprendizajes públicos',
        'Reconstrucción del proyecto con mayor foco y sistema',
      ],
      learning:
        'La creatividad también necesita estructura para sostener un mensaje y no quedarse en intuiciones sueltas.',
      url: 'https://www.instagram.com/wenumew/',
      cta: 'Conocer Wenumew',
    },
  ] satisfies MissionCase[],
  homeExperience: {
    title: 'También construyo software y productos dentro de contextos reales.',
    summary:
      'Mi recorrido profesional combina análisis, desarrollo, producto, implementación, automatización y comunicación entre áreas. Entro al problema desde la necesidad y acompaño hasta la solución funcionando.',
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
    stackPreview: ['Angular', 'TypeScript', 'PHP', 'APIs', 'MySQL', 'SQL Server', 'Linux', 'Automatización'],
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
      details: ['Productos digitales', 'Sistemas administrativos', 'Automatización', 'Integraciones'],
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
      details: ['Identidad y sistemas visuales', 'Contenido', 'Dirección creativa', 'Estrategia de marca'],
    },
  ] satisfies Array<
    {
      eyebrow: string;
      title: string;
      description: string;
      url: string;
      cta: string;
      external: boolean;
      ariaLabel: string;
      details: string[];
    }
  >,
  aboutPage: {
    title: 'Conecto estrategia, creatividad y tecnología dentro de un mismo sistema.',
    intro:
      'No llegué a este enfoque sumando etiquetas. Llegué trabajando en problemas donde el mensaje, los procesos, los equipos y las herramientas estaban conectados aunque la organización todavía no lo viera así.',
    narrative: [
      'Empecé construyendo desde la tecnología, pero con el tiempo entendí que una buena solución rara vez se resuelve solo con código. Necesita criterio, narrativa, orden y una lectura honesta del contexto.',
      'Por eso hoy trabajo entre comunicación, producto y sistemas. Puedo pensar una estrategia, traducirla en experiencia, construir la herramienta y acompañar la operación para que siga funcionando.',
    ],
    timeline: [
      'Tecnología como punto de entrada',
      'Comunicación como sistema, no como publicación',
      'Misión como criterio para decidir qué construir y cómo sostenerlo',
    ],
    principles: [
      {
        title: 'Empiezo por el propósito.',
        description:
          'Si no está claro qué se quiere servir, ninguna herramienta ni ninguna campaña alcanzan.',
      },
      {
        title: 'La estrategia ordena el entusiasmo.',
        description:
          'Prefiero procesos sostenibles antes que ráfagas intensas que después nadie puede continuar.',
      },
      {
        title: 'La tecnología tiene que simplificar.',
        description:
          'Construyo sistemas para liberar energía, no para agregar capas de complejidad innecesaria.',
      },
      {
        title: 'La forma también comunica.',
        description:
          'El diseño, la estructura y la experiencia son parte del mensaje y de la confianza que genera.',
      },
      {
        title: 'Trabajo para que las cosas sigan.',
        description:
          'Documentación, criterio y transferencia importan tanto como la primera entrega.',
      },
    ],
  },
  missionPage: {
    title: 'La misión necesita algo más que publicaciones sueltas.',
    intro:
      'Cuando la comunicación se reduce a piezas aisladas, el mensaje se fragmenta, los equipos se desgastan y la tecnología se vuelve un parche. Mi enfoque busca ordenar todo ese sistema.',
    layers: [
      {
        title: 'Propósito',
        description: 'Aclara para qué existe la iniciativa y qué quiere producir en la vida real.',
      },
      {
        title: 'Mensaje',
        description: 'Define lo que debe ser entendido, recordado y transmitido con coherencia.',
      },
      {
        title: 'Audiencia',
        description: 'Ayuda a comprender necesidades, lenguaje, hábitos y puntos de contacto.',
      },
      {
        title: 'Estrategia',
        description: 'Ordena prioridades, canales, etapas y criterios de decisión.',
      },
      {
        title: 'Identidad',
        description: 'Le da forma visual, verbal y relacional al mensaje dentro del tiempo.',
      },
      {
        title: 'Contenido',
        description: 'Convierte la estrategia en piezas, series, campañas y recursos útiles.',
      },
      {
        title: 'Canales',
        description: 'Distribuye la experiencia sin depender de un solo medio o algoritmo.',
      },
      {
        title: 'Tecnología',
        description: 'Sostiene páginas, plataformas, automatizaciones y operación digital.',
      },
      {
        title: 'Equipo',
        description: 'Hace posible continuidad, roles claros y transferencia de trabajo.',
      },
      {
        title: 'Medición y aprendizaje',
        description: 'Permite ajustar, documentar y mejorar sin perder el sentido original.',
      },
    ],
    collaborationGroups: [
      {
        title: 'Diagnosticar y ordenar',
        description: 'Diagnóstico, estrategia, planificación y sistemas de comunicación.',
        items: ['Diagnóstico de comunicación', 'Planificación', 'Estrategia', 'Sistemas de comunicación'],
      },
      {
        title: 'Crear y producir',
        description: 'Identidad, campañas, contenido, audiovisual y streaming.',
        items: ['Identidad', 'Campañas', 'Contenido', 'Audiovisual', 'Streaming'],
      },
      {
        title: 'Construir y sostener',
        description: 'Páginas, plataformas, automatización, equipos y productos digitales.',
        items: ['Páginas', 'Plataformas', 'Automatización', 'Formación de equipos', 'Productos digitales'],
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
      'Iglesia Dominico como experiencia de dirección de comunicaciones, equipos y herramientas digitales con enfoque misionero.',
      'Wenumew como laboratorio de reflexión cristiana, narrativa y experimentación de formatos.',
    ],
    capabilityGroups: [
      {
        title: 'Producto y análisis',
        description: 'Problemas, alcance, etapas, validación y criterios de solución.',
        items: ['Análisis de necesidades', 'Definición de soluciones', 'Documentación', 'Mejora continua'],
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
        items: ['REST APIs', 'Integraciones con terceros', 'Documentación técnica', 'Procesos conectados'],
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
        title: 'Comunicación y estrategia',
        description: 'Narrativa, organización de mensajes y lectura de audiencias.',
        items: ['Estrategia de comunicación', 'Contenido', 'Identidad', 'Sistemas de comunicación'],
      },
      {
        title: 'Liderazgo y coordinación',
        description: 'Trabajo entre áreas, equipos y procesos.',
        items: ['Coordinación cross-team', 'Capacitación técnica', 'Seguimiento de etapas', 'Transferencia'],
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
        description: 'Herramientas con las que resuelvo lógica, datos y comunicación entre sistemas.',
        items: ['PHP', 'Laravel', 'CodeIgniter', 'MySQL', 'SQL Server', 'REST APIs'],
      },
      {
        title: 'Operación y herramientas',
        description: 'Entornos, automatización y utilidades de trabajo.',
        items: ['Linux', 'Apache', 'GitLab', 'Jira', 'Postman', 'WinSCP', 'Workbench', 'VirtualBox'],
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
    title: 'Ideas sobre comunicación, misión y tecnología.',
    description:
      'Un espacio editorial para publicar criterio, aprendizajes y tensiones reales entre estrategia, software, creatividad y servicio.',
    themes: [
      { label: 'Comunicación cristiana', description: 'Mensaje, misión y comunidad.' },
      { label: 'Estrategia', description: 'Prioridades, orden y sistema.' },
      { label: 'Tecnología para la misión', description: 'Herramientas, procesos y plataformas.' },
      { label: 'Creatividad', description: 'Narrativa, forma y experimentación.' },
      { label: 'Producto', description: 'Soluciones, contexto y continuidad.' },
      { label: 'Aprendizajes', description: 'Trabajo real, errores y criterio.' },
    ] satisfies ArticleTheme[],
  },
  contactPage: {
    title: 'Abramos la conversación correcta para el tipo de trabajo que tenés en mente.',
    description:
      'Trabajo con oportunidades profesionales, proyectos tecnológicos y procesos de comunicación con propósito. Prefiero separar bien cada intención para responder con contexto.',
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
    missionTitle: '¿Hay un proyecto, una iglesia o una iniciativa que necesita orden, mensaje y sistema?',
    missionText:
      'Podemos conversar sobre estrategia, contenido, equipos, plataformas o cómo sostener mejor una comunicación con propósito.',
    missionAction: { label: 'Conversar sobre un proyecto', path: '/contacto' },
    careerTitle: '¿Querés evaluar mi recorrido para una oportunidad profesional?',
    careerText:
      'También podés ir directo a mi experiencia, ver mi CV y revisar dónde encaja mi perfil dentro de un equipo o producto.',
    careerAction: { label: 'Ver experiencia y CV', path: '/experiencia' },
  },
} as const;
