import { Injectable } from '@angular/core';
import { ExperienceItem, Project, TechnicalNote } from '../models/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  readonly projects: Project[] = [
    {
      id: 'vy-vortex',
      number: 'P/01',
      client: 'Capitole · Vueling Airlines',
      title: {
        es: 'VY Vortex',
        en: 'VY Vortex'
      },
      tag: {
        es: 'Aviación · Tiempo Real',
        en: 'Aviation · Real-time'
      },
      description: {
        es: 'Sala de control de reacomodación y disrupciones de vuelos en tiempo real. Colas WebSocket en vivo con reasignación mediante arrastrar y soltar para que los equipos de operaciones redirijan pasajeros bajo presión, sin perder el hilo.',
        en: 'Real-time flight-disruption & rebooking control room. Live WebSocket queues with drag-and-drop reassignment so ops teams reroute passengers under pressure — without losing the thread.'
      },
      metricNum: '~30%',
      metricLabel: {
        es: 'reacomodación más rápida',
        en: 'faster reaccommodation'
      },
      stack: ['Angular 19', 'Signals', 'WebSocket', 'NgRx', 'RxJS']
    },
    {
      id: 'pegasi',
      number: 'P/02',
      client: 'Nisum · Plataforma Pegasi',
      title: {
        es: 'Pegasi',
        en: 'Pegasi'
      },
      tag: {
        es: 'Salud · Oncología',
        en: 'Healthcare · Oncology'
      },
      description: {
        es: 'SPA de monitoreo clínico para la atención de pacientes oncológicos. Implementación técnica de interfaces de baja carga cognitiva para personal médico, con actualizaciones en vivo mediante WebSockets consolidadas a través de un NestJS BFF.',
        en: 'Clinical monitoring SPA for oncology patient care. Developing low-cognitive-load interfaces for medical staff, with live updates over WebSockets consolidated through a NestJS BFF.'
      },
      metricNum: 'WCAG',
      metricLabel: {
        es: 'accesibilidad web',
        en: 'web accessibility'
      },
      stack: ['Angular', 'NestJS BFF', 'MongoDB', 'WebSockets']
    },
    {
      id: 'one-stop-shop',
      number: 'P/03',
      client: 'Nisum · Banco BCI',
      title: {
        es: 'One Stop Shop',
        en: 'One Stop Shop'
      },
      tag: {
        es: 'Banca · Microfrontends',
        en: 'Banking · Micro-frontends'
      },
      description: {
        es: 'Portal bancario unificado compuesto por microfrontends desplegados de forma independiente, integrados mediante un sistema de diseño compartido para que cada módulo se sienta como un único producto coherente.',
        en: 'Unified banking portal composed of independently-deployed micro-frontends, held together by a shared design system so every module feels like one coherent product.'
      },
      metricNum: 'N×',
      metricLabel: {
        es: 'despliegues indep.',
        en: 'indep. deploys'
      },
      stack: ['Angular', 'Micro-Frontends', 'Design System', 'Azure']
    },
    {
      id: 'vy-people',
      number: 'P/04',
      client: 'Capitole · Vueling Airlines',
      title: {
        es: 'VY People',
        en: 'VY People'
      },
      tag: {
        es: 'RRHH · Flujo de trabajo',
        en: 'HR · Workflow'
      },
      description: {
        es: 'Suite de RRHH que abarca la renovación del sistema legado PRL (prevención de riesgos laborales) y AenaBadge — un flujo de aprobación en múltiples pasos para acreditaciones aeroportuarias de AENA, con SSO y biblioteca de componentes tipados.',
        en: 'HR suite covering a legacy-renewal of the PRL workplace-accident tool and AenaBadge — a multi-step approval flow for AENA airport accreditations, with SSO and a typed component library.'
      },
      metricNum: '2',
      metricLabel: {
        es: 'sistemas RRHH entregados',
        en: 'HR tools shipped'
      },
      stack: ['Angular', 'NestJS', 'TypeORM', 'SSO']
    },
    /*
    {
      id: 'peloteros',
      number: 'P/05',
      client: 'Personal · Autopublicado',
      title: {
        es: 'Peloteros',
        en: 'Peloteros'
      },
      tag: {
        es: 'Móvil · Producto',
        en: 'Mobile · Product'
      },
      description: {
        es: 'Aplicación móvil comunitaria para organizar partidos deportivos: creación de partidos en múltiples pasos, Google OAuth y notificaciones/invitaciones de WhatsApp — construida de extremo a extremo con Ionic y Supabase.',
        en: 'Sports-community mobile app for organizing pickup matches: multi-step match creation, Google OAuth, and WhatsApp player invitations — built end-to-end on Ionic + Supabase.'
      },
      metricNum: '∞',
      metricLabel: {
        es: 'partidos organizados',
        en: 'matches organized'
      },
      stack: ['Angular', 'Ionic', 'Supabase', 'OAuth 2.0']
    }
    */
  ];

  readonly experiences: ExperienceItem[] = [
    {
      role: {
        es: 'Desarrollador Frontend',
        en: 'Frontend Developer'
      },
      period: '02/2024 — Presente',
      company: 'Capitole Consulting',
      companySub: '→ Vueling Airlines',
      description: {
        es: 'Liderando el desarrollo frontend de SPAs de operaciones aeroportuarias y RRHH en Angular 17–19. Arquitectura de componentes y desarrollo técnico traduciendo diseños complejos desde Figma a producción, además de CI/CD en Azure, code review y onboarding técnico.',
        en: 'Leading the frontend of airport-operations & HR SPAs in Angular 17–19. Component architecture and robust implementation translating complex Figma designs to production — plus Azure CI/CD, code review, and technical onboarding.'
      }
    },
    {
      role: {
        es: 'Desarrollador Frontend',
        en: 'Frontend Developer'
      },
      period: '02/2021 — 02/2024',
      company: 'Nisum',
      companySub: '→ BCI · Pegasi',
      description: {
        es: 'Desarrollo de microfrontends bancarios y plataforma clínica oncológica. Implementación de funciones reactivas en tiempo real mediante WebSockets y capa BFF en NestJS para consolidar llamadas de backend mejorando el rendimiento percibido.',
        en: 'Banking micro-frontends and an oncology clinical platform. Real-time WebSocket features and a NestJS BFF layer consolidating backend calls for perceived performance.'
      }
    },
    {
      role: {
        es: 'Desarrollador Frontend',
        en: 'Frontend Engineer'
      },
      period: '09/2018 — 12/2020',
      company: 'Profile Software Services',
      companySub: '→ Mutua Madrileña · CNP',
      description: {
        es: 'Desarrollo e implementación de flujos web complejos de seguros (cotizaciones, siniestros y gestión de pólizas), enfocados en el rendimiento, la accesibilidad de formularios y la optimización de flujos regulados.',
        en: 'Developing and implementing complex customer-facing insurance journeys — quotes, claims, and policy management — focused on performance, form accessibility, and optimizing regulated flows.'
      },
      dim: true
    },
    {
      role: {
        es: 'Desarrollador Full-Stack',
        en: 'Full-Stack Developer'
      },
      period: '05/2017 — 08/2018',
      company: 'MyChoice2Pay',
      description: {
        es: 'Pasarela de pagos unificada que agrega Stripe, PayPal y otros proveedores en una experiencia de usuario consistente para diferentes comercios.',
        en: 'Unified checkout aggregating Stripe, PayPal and other providers into one consistent payment UX across merchants.'
      },
      dim: true
    },
    {
      role: {
        es: 'Desarrollador Full-Stack',
        en: 'Full-Stack Developer'
      },
      period: '02/2015 — 05/2017',
      company: 'Nodo',
      description: {
        es: 'Desarrollo de interfaces de CRM corporativo (SISEM) en Angular e Ionic, y sitios web corporativos auto-administrables a medida.',
        en: 'Enterprise CRM interfaces (SISEM) in Angular & Ionic and custom self-administrable corporate sites.'
      },
      dim: true
    }
  ];

  readonly technicalNotes: TechnicalNote[] = [
    {
      id: 'signals-vs-rxjs',
      title: {
        es: 'Signals no es RxJS peor — es RxJS cuando no lo necesitas',
        en: 'Signals is not worse RxJS — it is RxJS when you do not need it'
      },
      excerpt: {
        es: 'Un análisis sobre por qué las Signals de Angular no vienen a destruir RxJS, sino a salvarte de la sobreingeniería en el manejo del estado visual.',
        en: 'An analysis on why Angular Signals are not here to destroy RxJS, but to save you from over-engineering in visual state management.'
      },
      date: 'Mayo 2026',
      readTime: { es: '5 min de lectura', en: '5 min read' },
      category: { es: 'Angular · Reactividad', en: 'Angular · Reactivity' },
      slug: 'signals-vs-rxjs'
    },
    {
      id: 'por-que-angular',
      title: {
        es: 'Por qué sigo eligiendo Angular en 2026',
        en: 'Why I keep choosing Angular in 2026'
      },
      excerpt: {
        es: 'Frente a la fragmentación de otros ecosistemas, la consistencia empresarial y la evolución sensata de Angular siguen siendo una inversión segura.',
        en: 'Faced with the fragmentation of other ecosystems, Angular\'s enterprise consistency and sensible evolution remain a safe investment.'
      },
      date: 'Mayo 2026',
      readTime: { es: '4 min de lectura', en: '4 min read' },
      category: { es: 'Opinión · Arquitectura', en: 'Opinion · Architecture' },
      slug: 'por-que-angular'
    },
    {
      id: 'mostrar-menos',
      title: {
        es: 'Mostrar menos para que el usuario entienda más',
        en: 'Show less so the user understands more'
      },
      excerpt: {
        es: 'Cómo el diseño de formularios de alta densidad cognitiva se beneficia de la revelación progresiva y una arquitectura frontend empática.',
        en: 'How the design of high cognitive density forms benefits from progressive disclosure and empathetic frontend architecture.'
      },
      date: 'Mayo 2026',
      readTime: { es: '6 min de lectura', en: '6 min read' },
      category: { es: 'Frontend · Usabilidad', en: 'Frontend · Usability' },
      slug: 'mostrar-menos'
    },
    {
      id: 'claude-code',
      title: {
        es: 'Usar Claude Code sin volverte dependiente',
        en: 'Using Claude Code without becoming dependent'
      },
      excerpt: {
        es: 'Una guía para integrar herramientas de IA en tu flujo de trabajo sin perder el criterio de ingeniería ni la soberanía sobre tu código.',
        en: 'A guide to integrating AI tools into your workflow without losing engineering judgment or sovereignty over your code.'
      },
      date: 'Mayo 2026',
      readTime: { es: '5 min de lectura', en: '5 min read' },
      category: { es: 'Herramientas IA · Prácticas', en: 'AI Tools · Best Practices' },
      slug: 'claude-code'
    },
    {
      id: 'vy-vortex-demo',
      title: {
        es: 'Lo que no medimos antes de la primera demo',
        en: 'What we did not measure before the first demo'
      },
      excerpt: {
        es: 'Un caso real sobre cómo la carga cognitiva en interfaces de tiempo real de aviación puede hundir un producto impecable en rendimiento.',
        en: 'A real case on how cognitive load in real-time aviation interfaces can sink a product that is otherwise flawless in performance.'
      },
      date: 'Mayo 2026',
      readTime: { es: '5 min de lectura', en: '5 min read' },
      category: { es: 'Aviación · Casos de Estudio', en: 'Aviation · Case Studies' },
      slug: 'vy-vortex-demo'
    }
  ];

  readonly translations = {
    es: {
      nav: {
        work: '/ proyectos',
        stack: '/ stack',
        experience: '/ trayectoria',
        about: '/ sobre-mi',
        cta: 'Hablemos →'
      },
      hero: {
        titlePart1: 'Byron Armijos',
        titlePart2: 'Desarrollador Frontend.',
        role1: '◦ Desarrollador Frontend',
        role2: '◦  Angular · TypeScript · NestJS · AI Integration',
        descPart1: 'Diseño e implemento ',
        descStrong: 'interfaces de baja carga cognitiva',
        descPart2: ' para sectores críticos, asegurando claridad visual y precisión en entornos de alta exigencia donde cada segundo cuenta. Experto en arquitectura Angular, microfrontends e integración full-stack con NestJS y Python.',
        ctaPrimary: 'Ver proyectos  →',
        ctaSecondary: 'Descargar CV',
        uptime: 'ALTA FIABILIDAD',
        status: 'DISPONIBLE PARA TRABAJAR'
      },
      sections: {
        workKicker: '01 — Proyectos',
        workTitle: 'Implementación Frontend en ',
        workTitleAccent: 'Sistemas Exigentes.',
        trajectoryKicker: '02 — Trayectoria',
        trajectoryTitle: 'Desarrollando soluciones para ',
        trajectoryTitleAccent: 'entornos exigentes.',
        aboutKicker: '03 — Sobre mí',
        aboutTitle: 'Interfaces limpias ',
        aboutTitleAccent: 'para sistemas complejos.',
        aboutP1: 'Soy desarrollador frontend especializado en Angular, TypeScript y microfrontends. Mi foco es diseñar e implementar interfaces de alta fidelidad que actúan como escudo frente a la complejidad en dominios críticos (aviación, banca, oncología), garantizando que el usuario tome decisiones acertadas bajo presión.',
        aboutP2: 'Para mí, un gran frontend es un sistema predecible. Lo consigo mediante arquitecturas modulares bien estructuradas, accesibilidad WCAG 2.1 AA por diseño, y capas BFF (NestJS/Python) que simplifican el consumo de datos. Además, optimizo el ciclo de desarrollo incorporando IA de forma pragmática, asegurando que cada línea de código sea tan escalable como segura.',
        statsShipping: 'años entregando',
        statsSectors: 'sectores críticos',
        statsLanguages: 'idiomas · ES / EN',
        sectorsTitle: 'Dominios y Sectores en los que he trabajado',
        sectors: ['✈ Aviación', '⛁ Banca', '✚ Oncología', '⛨ Seguros', '◎ IoT'],
        notesKicker: 'Notas técnicas y reflexiones',
        notesTitle: 'Compartiendo código e ideas de ',
        notesTitleAccent: 'arquitectura frontend.',
        notesViewAll: 'Leer nota completa →',
        contactKicker: '04 — Contacto',
        contactTitle1: 'Diseñemos arquitecturas frontend',
        contactTitle2: 'sólidas y escalables.',
        contactDesc: 'Disponible para roles de Ingeniería Frontend Senior y sistemas inteligentes, consultoría o colaboraciones. Escríbeme.',
        contactSocial: '↗ ver enbyronment.dev',
        contactPhone: '☏ +34 625 130 511',
        contactTop: '↑ volver arriba'
      },
      footer: {
        text: '© 2026 Byron Armijos · '
      }
    },
    en: {
      nav: {
        work: '/ work',
        stack: '/ stack',
        experience: '/ experience',
        about: '/ about',
        cta: "Let's talk →"
      },
      hero: {
        titlePart1: 'Byron Armijos',
        titlePart2: 'frontend developer.',
        role1: '◦ Frontend Developer',
        role2: '◦ AI-Assisted Systems Specialist',
        descPart1: 'I design and build ',
        descStrong: 'low-cognitive-load interfaces',
        descPart2: ' for critical domains, ensuring visual clarity and precision in high-stakes environments where every second counts. Expert in Angular architecture, micro-frontends, and full-stack integration with NestJS & Python.',
        ctaPrimary: 'View selected work →',
        ctaSecondary: 'Download CV',
        uptime: 'HIGH RELIABILITY',
        status: 'OPEN TO WORK'
      },
      sections: {
        workKicker: '01 — Selected work',
        workTitle: 'Frontend Implementation for ',
        workTitleAccent: 'Demanding Systems.',
        trajectoryKicker: '02 — Trajectory',
        trajectoryTitle: 'Engineering solutions for ',
        trajectoryTitleAccent: 'demanding environments.',
        aboutKicker: '03 — About me',
        aboutTitle: 'Clear interfaces ',
        aboutTitleAccent: 'for complex systems.',
        aboutP1: 'I\'m a frontend developer specialising in Angular, TypeScript, and micro-frontends. My focus is engineering high-fidelity interfaces that shield users from complexity in critical domains (aviation, banking, oncology), ensuring clear decision-making under pressure.',
        aboutP2: 'To me, a great frontend is a predictable system. I achieve this through clean modular architectures, WCAG 2.1 AA accessibility by default, and robust BFF layers (NestJS/Python) that simplify data consumption. I also streamline development by pragmatically integrating AI tools, ensuring every line of code is as scalable as it is secure.',
        statsShipping: 'years shipping',
        statsSectors: 'critical sectors',
        statsLanguages: 'languages · ES / EN',
        sectorsTitle: 'Domains shipped to',
        sectors: ['✈ Aviation', '⛁ Banking', '✚ Oncology', '⛨ Insurance', '◎ IoT'],
        notesKicker: 'Technical notes and thoughts',
        notesTitle: 'Sharing code and frontend ',
        notesTitleAccent: 'architecture ideas.',
        notesViewAll: 'Read full note →',
        contactKicker: '04 — Contact',
        contactTitle1: 'Let\'s design frontend architectures',
        contactTitle2: 'built to scale.',
        contactDesc: 'Available for senior frontend & AI-systems roles, contract or collaboration. Drop a line — I reply fast.',
        contactSocial: '↗ view enbyronment.dev',
        contactPhone: '☏ +34 625 130 511',
        contactTop: '↑ back to top'
      },
      footer: {
        text: '© 2026 Byron Armijos · '
      }
    }
  };
}
