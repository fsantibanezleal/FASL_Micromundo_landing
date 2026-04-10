export type IconKind =
  | "facebook"
  | "instagram"
  | "linkedin"
  | "twitter"
  | "whatsapp";

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: IconKind;
};

export type HighlightCard = {
  eyebrow: string;
  title: string;
  description: string;
};

export type HomeServiceStep = {
  step: string;
  title: string;
  description: string;
};

export type HomeStat = {
  value: string;
  label: string;
};

export type HomeGalleryImage = {
  src: string;
  alt: string;
};

export type CollaboratorLogo = {
  label: string;
  colorSrc: string;
  monoSrc: string;
};

export type AboutStat = {
  value: string;
  label: string;
};

export type Course = {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  format: string;
  audience: string;
};

export type TeamMember = {
  name: string;
  role: string;
  focus: string;
  image: string;
  links?: SocialLink[];
};

export type DisciplineGroup = {
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ResourceItem = {
  title: string;
  description: string;
  image: string;
  href: string;
  external?: boolean;
  tag: string;
};

export type PrivacySection = {
  title: string;
  summary: string;
};

export type SearchEntry = {
  title: string;
  description: string;
  href: string;
  keywords: string[];
};

export const siteName = "MicroMundo";

export const navigation: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/about-us" },
  {
    label: "Tienda",
    href: "https://www.instagram.com/tienda.micromundo/",
    external: true,
  },
  { label: "Cursos", href: "/courses" },
  { label: "Contáctenos", href: "/contact-us" },
  { label: "Material Complementario", href: "/material-complementario" },
  {
    label: "Microscopio Virtual",
    href: "https://micromundo.app/library",
    external: true,
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/micromundoteam/",
    icon: "facebook",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/micromundoteam/",
    icon: "twitter",
  },
  {
    label: "LinkedIn",
    href: "https://cl.linkedin.com/company/micromundoteam/",
    icon: "linkedin",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/micromundoteam/",
    icon: "instagram",
  },
];

export const utilityCta = {
  label: "Introduce código aula",
  href: "https://micromundo.app/classroom",
};

export const homeServiceSteps: HomeServiceStep[] = [
  {
    step: "01",
    title: "Microscopía Virtual",
    description:
      "Biblioteca digital navegable para observar preparados, ampliar detalles y trabajar evidencia visual en clase.",
  },
  {
    step: "02",
    title: "Experimentos",
    description:
      "Activaciones prácticas con microscopía, anatomía experimental, óptica y fenómenos visibles en sala.",
  },
  {
    step: "03",
    title: "Aula Virtual",
    description:
      "Recursos complementarios, seguimiento remoto y materiales listos para ampliar la experiencia fuera del taller.",
  },
  {
    step: "04",
    title: "Proyectos",
    description:
      "Programas diseñados junto a colegios e instituciones para sostener una experiencia más larga y coherente.",
  },
];

export const homeStats: HomeStat[] = [
  { value: "27+", label: "Colaboradores científicos" },
  { value: "9+", label: "Instituciones colaboradoras" },
];

export const homeGallery: HomeGalleryImage[] = [
  {
    src: "/media/gallery/WhatsApp-Image-2018-12-02-at-22.17.16-1.jpeg",
    alt: "Actividad de MicroMundo en terreno",
  },
  {
    src: "/media/gallery/image004.jpg",
    alt: "Grupo trabajando con materiales de observación",
  },
  {
    src: "/media/gallery/image006.jpg",
    alt: "Estudiantes explorando contenidos científicos",
  },
  {
    src: "/media/gallery/image007.jpg",
    alt: "Sesión de experimentación guiada",
  },
  {
    src: "/media/gallery/image008.jpg",
    alt: "Trabajo colaborativo en actividades del programa",
  },
  {
    src: "/media/gallery/WhatsApp-Image-2018-12-02-at-22.17.16-2.jpeg",
    alt: "Instancia práctica en aula o taller",
  },
];

export const collaboratorLogos: CollaboratorLogo[] = [
  {
    label: "Explora",
    colorSrc: "/media/collaborators/RGB_Explora.png",
    monoSrc: "/media/collaborators/ByW_Explora.png",
  },
  {
    label: "ImagineLab",
    colorSrc: "/media/collaborators/RGB_IMAGINELAB.png",
    monoSrc: "/media/collaborators/ByW_IMAGINELAB.png",
  },
  {
    label: "Planetario",
    colorSrc: "/media/collaborators/RGB_Planetario.png",
    monoSrc: "/media/collaborators/ByW_planetario.png",
  },
  {
    label: "SUP",
    colorSrc: "/media/collaborators/RGB_SUP.png",
    monoSrc: "/media/collaborators/ByW_SUP-1.png",
  },
  {
    label: "Universidad de Chile",
    colorSrc: "/media/collaborators/ByW_UCHILE.png",
    monoSrc: "/media/collaborators/ByW_UCHILE.png",
  },
];

export const heroCards: HighlightCard[] = [
  {
    eyebrow: "Aprendizaje",
    title: "Basado en fenómenos",
    description:
      "Integramos ciencias, artes, historia, comunicación y tecnología en experiencias transversales para el aula.",
  },
  {
    eyebrow: "Innovación",
    title: "Telemedicina para educación",
    description:
      "Trasladamos metodologías digitales del diagnóstico y manejo de imágenes a la enseñanza escolar.",
  },
  {
    eyebrow: "Tecnología",
    title: "Microscopía virtual",
    description:
      "Una biblioteca navegable de preparados digitales que funciona como un Google Maps del mundo microscópico.",
  },
];

export const benefitList = [
  "Reduce costos de implementación frente a laboratorios complejos o equipamiento especializado.",
  "Permite trabajo remoto, revisión compartida y clases guiadas con el mismo material digital.",
  "Activa proyectos interdisciplinarios con foco en observación, relato, evidencia y experimentación.",
  "Se adapta a colegios, talleres de fin de semana, visitas y programas semestrales.",
];

export const technicalList = [
  "Microscopio Tissue Scanner NanoZoomer XR Hamamatsu como referencia de digitalización clínica.",
  "Biblioteca de preparados con zoom continuo, desplazamiento libre y lectura guiada.",
  "Activos visuales y objetos físicos para combinar diagnóstico digital, impresión 3D y experimentación real.",
  "Integración natural con aula virtual, recursos descargables y experiencias presenciales.",
];

export const methodologyCards: HighlightCard[] = [
  {
    eyebrow: "Metodología",
    title: "Aprendizaje basado en fenómenos",
    description:
      "Eliminamos fronteras rígidas entre asignaturas y construimos experiencias centradas en preguntas reales.",
  },
  {
    eyebrow: "Currículum",
    title: "Anatomía experimental",
    description:
      "Combinamos piezas reales, impresión 3D y anatomía comparada de criaturas fantásticas para todas las edades.",
  },
  {
    eyebrow: "Tecnología",
    title: "Construye tu microscopio",
    description:
      "Replicamos principios históricos de la microscopía con versiones de bajo costo, papel, 3D y kits armables.",
  },
  {
    eyebrow: "STEAM",
    title: "Storytelling y artes-ciencia",
    description:
      "Usamos pintura, grafiti, guion, música y cultura visual para contar la historia de los experimentos que cambiaron el mundo.",
  },
  {
    eyebrow: "Innovación",
    title: "Telemedicina escolar",
    description:
      "Adaptamos flujos de datos y visualización que facilitan trabajo distribuido, menos fricción y mayor acceso.",
  },
  {
    eyebrow: "Experiencia",
    title: "Programas co-diseñados",
    description:
      "Ajustamos cada implementación junto al colegio según edad, tiempos, objetivos y contexto pedagógico.",
  },
];

export const aboutStats: AboutStat[] = [
  { value: "3200+", label: "Estudiantes en cursos y talleres" },
  { value: "4+", label: "Años de experiencia" },
  { value: "5+", label: "Cursos regionales" },
  { value: "12+", label: "Proyectos finalizados" },
];

export const collaborators = [
  "Facultad de Medicina, Universidad de Chile",
  "Colegios y liceos colaboradores",
  "Docentes STEAM",
  "Comunidades maker",
  "Equipos clínicos y laboratorios",
  "Redes artísticas y audiovisuales",
];

export const courses: Course[] = [
  {
    slug: "anatomia-experimental",
    title: "Anatomía Experimental",
    description:
      "Exploración anatómica para educación básica con observación guiada, comparación y cultura visual.",
    image: "/media/courses/anatomia.jpg",
    tags: ["Educación Básica"],
    format: "Curso individual",
    audience: "Educación Básica",
  },
  {
    slug: "reanimacion-cardiopulmonar",
    title: "Reanimación Cardiopulmonar",
    description:
      "Salud, cuerpo humano y protocolos de emergencia en un formato práctico y altamente memorable.",
    image: "/media/courses/rcp.jpg",
    tags: ["Curso individual"],
    format: "Curso individual",
    audience: "Público General",
  },
  {
    slug: "neuro-optica-geologia-microbiologia",
    title: "Neurociencia, Óptica, Geología y Microbiología",
    description:
      "Programa semestral interdisciplinario para profundizar en observación, evidencia y fenómenos naturales.",
    image: "/media/courses/neuro-optica-geologia.jpg",
    tags: ["Curso Semestral"],
    format: "Curso semestral",
    audience: "Educación Media",
  },
  {
    slug: "quimica-verde",
    title: "Química Verde",
    description:
      "Experimentación segura, problemas reales y pensamiento científico para cursos de educación media.",
    image: "/media/courses/quimica-verde.jpg",
    tags: ["Curso Semestral", "Educación Media"],
    format: "Curso semestral",
    audience: "Educación Media",
  },
  {
    slug: "ferias-en-colegios",
    title: "Ferias en Colegios",
    description:
      "Activaciones abiertas para comunidades escolares con estaciones científicas, demostraciones y mediación.",
    image: "/media/courses/ferias.jpg",
    tags: ["Público General"],
    format: "Experiencia abierta",
    audience: "Público General",
  },
  {
    slug: "codigo-azul",
    title: "Código Azul",
    description:
      "Ruta de salud y toma de decisiones que conecta biología, primeros auxilios y trabajo colaborativo.",
    image: "/media/courses/codigo-azul.jpg",
    tags: ["Educación Media"],
    format: "Visita guiada",
    audience: "Educación Media",
  },
  {
    slug: "construyendo-microscopios",
    title: "Construyendo Microscopios",
    description:
      "Visita a colegio para aprender óptica básica armando dispositivos y entendiendo cómo se forma una imagen.",
    image: "/media/courses/construyendo-microscopios.jpg",
    tags: ["Visita Colegio"],
    format: "Visita a colegio",
    audience: "Público General",
  },
  {
    slug: "doctora-ositos",
    title: "Doctora Ositos",
    description:
      "Introducción temprana a anatomía, cuidado y ciencia aplicada en clave lúdica para pre-básica.",
    image: "/media/courses/doctora-ositos.jpg",
    tags: ["Pre-Básica"],
    format: "Curso individual",
    audience: "Pre-Básica",
  },
];

export const courseFilters = [
  "Todo",
  "Curso individual",
  "Curso Semestral",
  "Educación Básica",
  "Educación Media",
  "Pre-Básica",
  "Público General",
  "Visita Colegio",
];

export const teamMembers: TeamMember[] = [
  {
    name: "Wendy Sanchez",
    role: "Comunicaciones",
    focus: "Vínculo con comunidades, difusión y articulación de proyectos.",
    image: "/media/team/wendy-sanchez.jpeg",
    links: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/wnatatlia/",
        icon: "instagram",
      },
      {
        label: "WhatsApp",
        href: "https://wa.me/56934066432",
        icon: "whatsapp",
      },
    ],
  },
  {
    name: "Natalia León",
    role: "Enfermería",
    focus: "Experiencias ligadas a salud, formación y mediación clínica.",
    image: "/media/team/natalia-leon.jpg",
  },
  {
    name: "Jorge Toledo",
    role: "CEO",
    focus: "Dirección general, visión interdisciplinaria y desarrollo de programas.",
    image: "/media/team/jorge-toledo.jpg",
    links: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/micromundoteam/",
        icon: "instagram",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/jorge-toledo-3755073a/",
        icon: "linkedin",
      },
    ],
  },
  {
    name: "Paulina Maffud",
    role: "Finanzas",
    focus: "Gestión financiera, sostenibilidad operativa y coordinación interna.",
    image: "/media/team/paulina-maffud.jpeg",
  },
  {
    name: "Paulo Gonzalez",
    role: "Editor y diseñador",
    focus: "Narrativa visual, diseño editorial y piezas gráficas para experiencias STEAM.",
    image: "/media/team/paulo-gonzalez.jpeg",
  },
  {
    name: "Claudia Reyes",
    role: "Microscopía Virtual",
    focus: "Curaduría y aplicación pedagógica del ecosistema de microscopía digital.",
    image: "/media/team/claudia-reyes.jpeg",
  },
  {
    name: "Isidora Maffud",
    role: "Informática",
    focus: "Procesos digitales, soporte técnico y continuidad del entorno virtual.",
    image: "/media/team/isidora-maffud.jpg",
  },
  {
    name: "Renato Moraga",
    role: "Histología",
    focus: "Contenidos de morfología y construcción de experiencias con muestras y tejido.",
    image: "/media/team/renato-moraga.jpeg",
  },
  {
    name: "Catalina Muñoz",
    role: "Histología",
    focus: "Acompañamiento en contenidos microscópicos y experiencias de aula.",
    image: "/media/team/catalina-munoz.jpg",
  },
  {
    name: "Patricio Toro",
    role: "Managing Director",
    focus: "Gestión estratégica, alianzas y despliegue operacional de programas.",
    image: "/media/team/patricio-toro.jpg",
  },
];

export const disciplineGroups: DisciplineGroup[] = [
  {
    title: "Científicos",
    description:
      "Equipo multidisciplinario con biólogos, geólogos, químicos farmacéuticos, matemáticos, enfermeras, tecnólogos médicos, kinesiólogos, médicos, bioquímicos y físicos.",
  },
  {
    title: "Ingenieros",
    description:
      "Expertos en ciencias de la computación, programación web, robótica, Arduino, procesamiento de imágenes e ingeniería eléctrica y electrónica.",
  },
  {
    title: "Artistas",
    description:
      "Las artes y humanidades entran a la ecuación a través de artistas visuales, grafiteros, diseñadores, orfebres, escritura, música y cine.",
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "1. ¿Qué hace un microscopio?",
    answer:
      "Permite ampliar estructuras demasiado pequeñas para observarlas a simple vista. En MicroMundo además usamos esa lógica para conectar observación, relato y análisis.",
  },
  {
    question: "2. ¿Qué es la microscopía virtual?",
    answer:
      "Es la digitalización navegable de preparados microscópicos. El estudiante puede hacer zoom, desplazarse y revisar muestras como si estuviera frente a un microscopio real.",
  },
  {
    question:
      "3. ¿Puedo utilizar la microscopía para enseñar arte, matemática, lenguaje o historia?",
    answer:
      "Sí. La propuesta está diseñada para trabajar de forma interdisciplinaria, combinando ciencia con storytelling, cultura visual, datos, escritura y contexto histórico.",
  },
  {
    question: "4. ¿Cómo accedo a los programas educativos de MicroMundo?",
    answer:
      "La forma más simple es escribirnos desde la página de contacto. Ahí levantamos necesidades, formato, curso, tiempos y armamos una propuesta adecuada.",
  },
  {
    question: "5. ¿Puede ir MicroMundo a mi colegio?",
    answer:
      "Sí. Hay formatos de visita, programas semestrales, talleres, ferias y experiencias co-diseñadas con cada institución.",
  },
  {
    question: "6. ¿Puedo hacer mi práctica profesional o tesis en MicroMundo?",
    answer:
      "Es posible según disponibilidad y pertinencia del proyecto. Lo mejor es escribir con tu área, motivación y propuesta concreta para evaluarlo.",
  },
];

export const contactInfo = {
  address:
    "Independencia 1027, Independencia, Santiago, Sector A, Facultad de Medicina, Universidad de Chile.",
  addressHref:
    "https://www.google.com/maps/search/?api=1&query=Independencia+1027+Independencia+Santiago+Facultad+de+Medicina+Universidad+de+Chile",
  email: "contacto@micromundo.team",
  phoneDisplay: "+(56) 9 3406 6432",
  phoneHref: "tel:+56934066432",
  site: "https://micromundo.team",
};

export const resources: ResourceItem[] = [
  {
    title: "Manual de instrucciones en español",
    description:
      "Acceso al repositorio compartido con materiales de apoyo y guía base para uso del kit.",
    image: "/media/materials/manual.png",
    href: "https://www.dropbox.com/sh/8627js28gi7h8hp/AAASAz7xkt0duAKeDdUKexY_a?dl=0",
    external: true,
    tag: "Dropbox",
  },
  {
    title: "Banco de materiales visuales",
    description:
      "Recopilación de recursos gráficos y archivos complementarios para apoyar actividades y demostraciones.",
    image: "/media/materials/picture2.png",
    href: "https://www.dropbox.com/sh/888u2w4lic70tyi/AABhF1TQzxbljL4iEo_6PXrPa?dl=0",
    external: true,
    tag: "Biblioteca",
  },
  {
    title: "Encuestas de evaluación",
    description:
      "Documento descargable para revisión, retroalimentación y seguimiento de actividades.",
    image: "/media/materials/picture2.png",
    href: "/media/materials/encuestas-evaluacion.pdf",
    tag: "PDF",
  },
];

export const privacySections: PrivacySection[] = [
  {
    title: "Su cuenta y sitio de MicroMundo",
    summary:
      "El acceso y uso del sitio implican aceptar un marco básico de uso responsable, cuidado de credenciales y respeto por el contenido publicado.",
  },
  {
    title: "Responsabilidad de los visitantes",
    summary:
      "Quien visita o interactúa con el sitio debe evitar usos indebidos, cargas maliciosas o acciones que afecten la experiencia del resto.",
  },
  {
    title: "Uso no comercial",
    summary:
      "Los materiales y la experiencia base están pensados para divulgación, educación y colaboración, salvo que se acuerde otra cosa por escrito.",
  },
  {
    title: "Propiedad intelectual",
    summary:
      "Las marcas, imágenes y recursos propios de MicroMundo mantienen su titularidad y no deben reutilizarse fuera de contexto sin autorización.",
  },
  {
    title: "Descargo de garantías",
    summary:
      "El sitio se entrega como una vitrina informativa; aunque se busca exactitud y continuidad, no se garantiza disponibilidad perfecta o ausencia total de errores.",
  },
  {
    title: "Cambios",
    summary:
      "MicroMundo puede actualizar contenidos, recursos y políticas cuando sea necesario para reflejar mejoras, cambios operativos o nuevas necesidades.",
  },
];

export const footerLinks = [
  "Cultura CTI",
  "Cursos anuales en colegios",
  "Visitas a colegios",
  "Colaboraciones en proyectos",
  "Microscopía de bajo costo",
  "Anatomía Experimental",
];

export const searchEntries: SearchEntry[] = [
  {
    title: "Inicio",
    description: "Resumen general del proyecto, hero, beneficios y metodología.",
    href: "/",
    keywords: ["micromundo", "home", "landing", "hero"],
  },
  {
    title: "Cursos y talleres",
    description: "Explora el catálogo de programas, visitas y experiencias.",
    href: "/courses#catalogo",
    keywords: ["curso", "taller", "programa", "feria", "visita"],
  },
  {
    title: "Equipo",
    description: "Conoce al equipo interdisciplinario de MicroMundo.",
    href: "/about-us#team",
    keywords: ["equipo", "nosotros", "científicos", "ingenieros", "artistas"],
  },
  {
    title: "Preguntas frecuentes",
    description: "Respuestas rápidas sobre microscopía virtual, colegios y postulaciones.",
    href: "/about-us#faq",
    keywords: ["faq", "preguntas", "microscopía virtual", "tesis", "colegio"],
  },
  {
    title: "Contáctenos",
    description: "Dirección, correo, teléfono y formulario de contacto.",
    href: "/contact-us#formulario",
    keywords: ["contacto", "correo", "teléfono", "visita", "escríbanos"],
  },
  {
    title: "Material complementario",
    description: "Manual, recursos visuales y PDF descargable.",
    href: "/material-complementario#recursos",
    keywords: ["manual", "material", "pdf", "encuestas", "dropbox"],
  },
  {
    title: "Políticas de privacidad",
    description: "Resumen simple de uso, propiedad intelectual y cambios.",
    href: "/politicas-de-privacidad#privacidad",
    keywords: ["privacidad", "uso", "propiedad intelectual"],
  },
  ...courses.map<SearchEntry>((course) => ({
    title: course.title,
    description: course.description,
    href: "/courses#catalogo",
    keywords: [course.format, course.audience, ...course.tags],
  })),
  ...teamMembers.map<SearchEntry>((member) => ({
    title: member.name,
    description: `${member.role}. ${member.focus}`,
    href: "/about-us#team",
    keywords: [member.role, member.focus],
  })),
];
