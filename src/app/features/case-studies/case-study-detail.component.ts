import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal, effect } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { LanguageService } from '../../core/services/language.service';
import { ContentService } from '../../core/services/content.service';

interface CaseContent {
  meta: string;
  title: string;
  role: string;
  tech: string;
  impact: string;
  body: string;
}

@Component({
  selector: 'app-case-study-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    @if (caseStudy()) {
      <main class="wrap article-container" style="animation: fadeIn 0.6s ease forwards;">
        <a (click)="goBack()" class="back-btn">
          <span>←</span>
          <span>{{ currentLang() === 'es' ? 'Volver a Proyectos' : 'Back to work' }}</span>
        </a>

        <header class="article-header">
          <div class="article-meta">
            <span class="category">{{ content().meta }}</span>
          </div>
          <h1 class="article-title">{{ content().title }}</h1>
        </header>

        <section class="stats-row">
          <div class="stats-item">
            <h4>{{ currentLang() === 'es' ? 'Rol' : 'Role' }}</h4>
            <p>{{ content().role }}</p>
          </div>
          <div class="stats-item">
            <h4>{{ currentLang() === 'es' ? 'Tecnologías' : 'Technologies' }}</h4>
            <p>{{ content().tech }}</p>
          </div>
          <div class="stats-item">
            <h4>Impacto</h4>
            <p>{{ content().impact }}</p>
          </div>
        </section>

        <article class="article-body" [innerHTML]="content().body"></article>

        <div style="margin-top: 64px; border-top: 1px solid var(--line); padding-top: 32px; display: flex; justify-content: space-between; align-items: center;">
          <a (click)="goBack()" class="back-btn" style="margin-bottom: 0;">
            <span>←</span>
            <span>{{ currentLang() === 'es' ? 'Volver a Proyectos' : 'Back to work' }}</span>
          </a>
          <span style="font-family: 'JetBrains Mono', monospace; font-size: 13px; color: var(--mute);">
            enbyronment.dev · 2026
          </span>
        </div>
      </main>
    } @else {
      <div class="wrap article-container" style="text-align: center; padding: 180px 0;">
        <h2 style="font-family: 'Bricolage Grotesque', sans-serif; font-size: 32px; margin-bottom: 24px;">
          {{ currentLang() === 'es' ? 'Caso de estudio no encontrado' : 'Case study not found' }}
        </h2>
        <a [routerLink]="['/']" class="back-btn">
          ← {{ currentLang() === 'es' ? 'Volver al inicio' : 'Back to home' }}
        </a>
      </div>
    }
  `,
  styles: [`
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(16px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .stats-row {
      display: flex;
      gap: 24px;
      background: var(--surface-2);
      border: 1px solid var(--line-2);
      border-radius: 14px;
      padding: 24px;
      margin: 36px 0;
      flex-wrap: wrap;
      transition: background-color 0.35s var(--ease), border-color 0.35s var(--ease);
    }
    .stats-item {
      flex: 1 1 200px;
    }
    .stats-item h4 {
      font-family: "JetBrains Mono", monospace;
      font-size: 12px;
      color: var(--accent);
      text-transform: uppercase;
      margin-bottom: 6px;
      letter-spacing: 0.04em;
    }
    .stats-item p {
      font-size: 16px;
      color: var(--text);
      margin: 0;
      font-weight: 600;
    }
    .back-btn {
      user-select: none;
    }
  `]
})
export class CaseStudyDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  readonly languageService = inject(LanguageService);
  private titleService = inject(Title);
  private metaService = inject(Meta);
  private contentService = inject(ContentService);

  caseStudy = signal<string | null>(null);
  currentLang = () => this.languageService.currentLang();

  content = () => {
    const id = this.caseStudy();
    if (!id) return {} as CaseContent;
    return this.casesDict[id][this.currentLang()];
  };

  constructor() {
    effect(() => {
      const id = this.caseStudy();
      const lang = this.currentLang();
      if (id) {
        this.updateMeta(id, lang);
      }
    });
  }

  private updateMeta(id: string, lang: 'es' | 'en') {
    const caseData = this.casesDict[id]?.[lang];
    if (!caseData) return;

    const proj = this.contentService.projects.find(p => p.id === id);
    const desc = proj ? proj.description[lang] : '';
    const title = `${caseData.title} — Byron Armijos`;

    this.titleService.setTitle(title);
    this.metaService.updateTag({ name: 'description', content: desc });
    this.metaService.updateTag({ property: 'og:title', content: title });
    this.metaService.updateTag({ property: 'og:description', content: desc });
    this.metaService.updateTag({ property: 'og:type', content: 'article' });
    this.metaService.updateTag({ property: 'og:image', content: 'https://enbyronment.dev/profile-photo.png' });
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: title });
    this.metaService.updateTag({ name: 'twitter:description', content: desc });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id && (id === 'vy-vortex' || id === 'pegasi')) {
        this.caseStudy.set(id);
        if (typeof window !== 'undefined') {
          window.scrollTo({ top: 0, behavior: 'instant' as any });
        }
      } else {
        this.caseStudy.set(null);
      }
    });
  }

  goBack() {
    this.router.navigate(['/'], { fragment: 'work' });
  }

  private readonly casesDict: Record<string, Record<'es' | 'en', CaseContent>> = {
    'vy-vortex': {
      es: {
        meta: 'Case Study · Aviación · 2026',
        title: 'VY Vortex: Decisiones claras en situaciones críticas',
        role: 'Desarrollador Frontend',
        tech: 'Angular 19, Signals, WebSockets, NgRx',
        impact: '−30% tiempo de resolución',
        body: `
          <p>Previo a la implementación de Vortex, la gestión de disrupciones de vuelos y reubicación de pasajeros se realizaba mediante tres sistemas fragmentados y de tecnología obsoleta. El nuevo desarrollo unificó la operativa, superando las limitaciones de sincronización y usabilidad previas.</p>

          <h2>El desafío real</h2>
          <p>A nivel técnico, el reto era unificar todas estas fuentes de datos y mantenerlas actualizadas en tiempo real mediante WebSockets. Pero el verdadero desafío de rendimiento y usabilidad era la <strong>carga cognitiva</strong>: ¿cómo renderizas y gestionas datos en vivo de cientos de pasajeros y decenas de vuelos sin sobrecargar el navegador ni abrumar a un operador trabajando bajo máxima presión?</p>
          <p>Nuestra primera versión falló durante las pruebas de usabilidad técnica. Al tener tanta información disponible, cometimos el error de renderizarla toda en una sola pantalla. La operadora más senior nos dio una valiosa lección al ver la interfaz: <em>«Hay demasiada información junta. En una incidencia yo no me detengo a leer cada detalle, necesito escanear visualmente. Aquí me cuesta encontrar lo urgente.»</em></p>

          <h2>La solución: Revelación progresiva y rendimiento óptimo</h2>
          <p>Dimos un paso atrás y replanteamos la arquitectura frontend de la información. En lugar de forzar la renderización completa de todos los datos en pantalla, implementamos una estrategia de <strong>revelación progresiva</strong>.</p>
          <p>Usamos carga perezosa (lazy loading) y bajo demanda a nivel de componentes para mostrar primero solo los indicadores clave de estado (códigos de colores claros, capacidad de asientos). Los detalles secundarios solo se inyectan en el DOM cuando el operador expande un vuelo específico, reduciendo drásticamente el uso de memoria del navegador y optimizando el foco.</p>

          <blockquote>
            "En entornos críticos, el frontend debe procesar y jerarquizar datos — no forzar al usuario a parsear flujos en crudo."
          </blockquote>

          <h2>Drag & Drop con contexto</h2>
          <p>Implementamos la reubicación de pasajeros mediante Angular CDK. La interacción actualiza el estado local mediante Signals, delegando la persistencia asíncrona al backend para mantener una fluidez de 60fps constantes.</p>

          <h2>Impacto en el negocio</h2>
          <p>Al reducir el ruido visual y consolidar 3 herramientas en una única consola unificada, eliminamos la necesidad de reconstruir estados entre pestañas. El resultado fue una reducción del 30% en interacciones manuales y la optimización de los tiempos de resolución de incidencias.</p>
        `
      },
      en: {
        meta: 'Case Study · Aviation · 2026',
        title: 'VY Vortex: Clear Decisions under High-Stress Operations',
        role: 'Frontend Developer',
        tech: 'Angular 19, Signals, WebSockets, NgRx',
        impact: '−30% resolution duration',
        body: `
          <p>Prior to the implementation of Vortex, managing flight disruptions and passenger reaccommodation was handled across three fragmented, obsolete systems. The new development unified operations, overcoming the previous synchronization and usability limitations.</p>

          <h2>The Real Challenge</h2>
          <p>Technically, the objective was to unify all these data streams and keep them updated in real time via WebSockets. But the primary front-end engineering challenge was managing <strong>high cognitive load</strong>: how do you render and manage real-time updates for hundreds of passengers and flights without lagging the client or overwhelming an operator under pressure?</p>
          <p>Our initial release failed during usability testing. Having so much data accessible, we made the mistake of rendering everything on a single view. The most senior operator gave us invaluable feedback upon seeing the front-end: <em>«There's too much data packed together. In an emergency, I don't stop to read details; I need to scan visually. Here, I struggle to locate what is critical.»</em></p>

          <h2>The Solution: Progressive Disclosure & Optimal Performance</h2>
          <p>We took a step back and refactored the frontend information architecture. Instead of forcing the client to render all records at once, we engineered a performant layout that optimizes cognitive load.</p>
          <p>We implemented <strong>progressive disclosure</strong> and component-level lazy loading to display only the critical status indicators first (clear color coding, empty seat counts). Only when the operator expands a specific flight does the system render secondary details in the DOM, such as special-assistance passengers or high-risk connections.</p>

          <blockquote>
            "In a high-pressure environment, the interface must process and hierarchy data for you — not ask you to parse raw streams."
          </blockquote>

          <h2>Drag & Drop with Context</h2>
          <p>For passenger rebooking, we integrated a smooth workflow using Angular CDK's <code>Drag & Drop</code> modules. Moving a group of passengers from a disrupted flight to an active one is now a natural gesture that immediately updates local state using Signals, while safely saving to the backend in the background.</p>

          <h2>Business Impact</h2>
          <p>By reducing client-side clutter and consolidating 3 separate unsynchronized tools into a single app, we eliminated the need to piece together state across browser tabs. The result was a 30% reduction in manual interactions and the optimization of incident resolution times.</p>
        `
      }
    },
    'pegasi': {
      es: {
        meta: 'Case Study · Salud y Oncología · 2023',
        title: 'Pegasi: Implementación robusta y accesibilidad clínica',
        role: 'Desarrollador Frontend',
        tech: 'Angular, Micro-Frontends, NestJS, MongoDB',
        impact: 'Arquitectura escalable, Certificado de accesibilidad WCAG 2.1 AA',
        body: `
          <p>Pegasi nació con el objetivo de convertirse en el primer software chileno de monitorización oncológica de su tipo. En oncología, la precisión de los datos y el historial médico del paciente son críticos, lo que a menudo se traduce en interfaces complejas y pesadas de procesar.</p>

          <h2>Ingeniería frontend para la alta demanda cognitiva</h2>
          <p>Los oncólogos necesitaban una plataforma densa en datos, pero el frontend tenía que ser extremadamente rápido y optimizado. Cuando un médico lleva horas de guardia y consulta el historial de un paciente crónico, un retraso de renderizado o un diseño ruidoso puede provocar fatiga visual o retrasos de lectura críticos.</p>
          <p>Optamos por una estructuración limpia de los componentes y un renderizado progresivo. En lugar de sobrecargar el DOM cargando todas las variables de un tratamiento a la vez, programamos la visualización bajo demanda para optimizar la memoria del navegador y facilitar el foco del especialista.</p>

          <blockquote>
            "Cada decisión de arquitectura e interfaz pasó por un filtro fundamental: ¿este componente hace la consulta más rápida y fluida para un médico tras 12 horas de guardia?"
          </blockquote>

          <h2>Micro-Frontends y Accesibilidad</h2>
          <p>Para asegurar que la plataforma pudiera escalar y ser mantenida por diferentes equipos sin pisarse entre ellos, optamos por una arquitectura de <strong>Micro-Frontends</strong> en Angular, respaldada por un Backend-For-Frontend (BFF) construido en NestJS. Esto nos dio agilidad en los despliegues de módulos individuales.</p>
          <p>Además, la accesibilidad no fue una tarea de última hora, sino un pilar de ingeniería. Desde el primer día, programamos respetando las directrices <strong>WCAG 2.1 AA</strong>, garantizando un marcado semántico correcto, contrastes idóneos y navegación completa por teclado para todo el personal médico.</p>

          <h2>El Resultado</h2>
          <p>Pegasi no solo logró salir al mercado como el primer software de su clase en Chile, sino que demostró que el desarrollo de software médico robusto y seguro puede estar perfectamente alineado con un rendimiento y una usabilidad excepcionales.</p>
        `
      },
      en: {
        meta: 'Case Study · Health & Oncology · 2023',
        title: 'Pegasi: Robust Engineering & Clinical Accessibility',
        role: 'Frontend Engineer',
        tech: 'Angular, Micro-Frontends, NestJS, MongoDB',
        impact: 'Scalable Micro-frontends, WCAG 2.1 AA Accessibility',
        body: `
          <p>Pegasi was launched with the goal of becoming the first Chilean oncology-monitoring software of its kind. In oncology, data precision and deep medical history are paramount, which typically yields complex, resource-heavy interfaces that are hard to process.</p>

          <h2>Frontend Engineering for High Cognitive Load</h2>
          <p>Oncologists needed a data-dense platform, but the frontend had to be highly performant. When a doctor is hours into a shift and needs to consult a chronic patient's history, sluggish rendering or visual clutter can cause delays or eye strain.</p>
          <p>We prioritized a clean component hierarchy and progressive DOM rendering. Instead of loading all treatment variables at once, we programmed on-demand state updates to optimize browser memory and keep the physician’s focus sharp.</p>

          <blockquote>
            "Every architectural and component decision went through one ultimate filter: does this keep the view fast and clear for a physician 12 hours into a shift?"
          </blockquote>

          <h2>Micro-Frontends & Accessibility</h2>
          <p>To ensure the software could scale and be maintained by separate teams without cross-contamination, we designed a <strong>Micro-Frontend</strong> architecture in Angular, supported by a NestJS Backend-for-Frontend (BFF). This allowed independent module releases.</p>
          <p>Furthermore, web accessibility was never an afterthought, but a core engineering requirement. From day one, we programmed the app under <strong>WCAG 2.1 AA</strong> guidelines, ensuring semantic HTML, proper color contrast ratios, and keyboard-only navigation for hospital staff.</p>

          <h2>The Outcome</h2>
          <p>Pegasi successfully went to market as the first software of its class in Chile, setting a benchmark in clinical software development: proving that robust medical applications can combine safety and high-fidelity code with outstanding usability.</p>
        `
      }
    }
  };
}
