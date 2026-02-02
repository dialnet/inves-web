export const SITE = {
  es: {
    title: 'Inv-es | Portal Interuniversitario de Producción Científica',
    description: 'El portal interuniversitario de producción científica surge como una iniciativa conjunta de las universidades españolas, concebido como un instrumento al servicio de la comunidad científica. Este espacio común se configura como un punto de referencia y acceso unificado a los resultados de la investigación, ofreciendo herramientas que facilitan su identificación, consulta y transferencia, al tiempo que promueve la visibilidad y la puesta en valor del conocimiento generado en el ámbito académico.',
  },
  en: {
    title: 'Inv-es | Interuniversity Scientific Production Portal',
    description: 'The interuniversity scientific production portal emerges as a joint initiative of Spanish universities, conceived as an instrument at the service of the scientific community. This common space is configured as a point of reference and unified access to research results, offering tools that facilitate their identification, consultation, and transfer, while promoting the visibility and value of the knowledge generated in the academic field.',
  },
  url: 'https://yourdomain.com',
  author: 'Fundación Dialnet',
} as const;

export const NAVIGATION = {
  es: [
    { name: 'Inicio', href: '/es' },
    { name: 'Proyecto', href: '/es/proyecto' },
    { name: 'Participantes', href: '/es#universidades' },
    { name: 'Gobernanza', href: '/es/gobernanza' },
    { name: 'Contacto', href: '/es/contacto' },
    { name: 'Portal', href: 'https://inv-es.portalcientifico.es/', external: true },
  ],
  en: [
    { name: 'Home', href: '/en' },
    { name: 'Project', href: '/en/project' },
    { name: 'Participants', href: '/en#universidades' },
    { name: 'Governance', href: '/en/governance' },
    { name: 'Contact', href: '/en/contact' },
    { name: 'Portal', href: 'https://inv-es.portalcientifico.es/?lang=en', external: true },
  ],
} as const;

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/yourcompany',
  twitter: 'https://twitter.com/yourcompany',
  facebook: 'https://facebook.com/yourcompany',
} as const;

