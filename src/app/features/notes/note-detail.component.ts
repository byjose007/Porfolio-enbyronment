import { Component, inject, signal, OnInit, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { LanguageService } from '../../core/services/language.service';
import { ContentService } from '../../core/services/content.service';
import { TechnicalNote } from '../../core/models/portfolio.model';

interface ArticleContent {
  es: string;
  en: string;
}

@Component({
  selector: 'app-note-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    @if (note()) {
      <main class="wrap article-container" style="animation: fadeIn 0.6s ease forwards;">
        <a (click)="goBack()" class="back-btn">
          <span>←</span>
          <span>{{ currentLang() === 'es' ? 'Volver al inicio' : 'Back to home' }}</span>
        </a>

        <header class="article-header">
          <div class="article-meta">
            <span class="category">{{ note()!.category[currentLang()] }}</span>
            <span>·</span>
            <span>{{ note()!.date }}</span>
            <span>·</span>
            <span>{{ note()!.readTime[currentLang()] }}</span>
          </div>
          <h1 class="article-title">{{ note()!.title[currentLang()] }}</h1>
        </header>

        <article class="article-body" [innerHTML]="bodyContent()"></article>

        <div style="margin-top: 64px; border-top: 1px solid var(--line); padding-top: 32px; display: flex; justify-content: space-between; align-items: center;">
          <a (click)="goBack()" class="back-btn" style="margin-bottom: 0;">
            <span>←</span>
            <span>{{ currentLang() === 'es' ? 'Volver al inicio' : 'Back to home' }}</span>
          </a>
          <span style="font-family: 'JetBrains Mono', monospace; font-size: 13px; color: var(--mute);">
            enbyronment.dev · 2026
          </span>
        </div>
      </main>
    } @else {
      <div class="wrap article-container" style="text-align: center; padding: 180px 0;">
        <h2 style="font-family: 'Bricolage Grotesque', sans-serif; font-size: 32px; margin-bottom: 24px;">
          {{ currentLang() === 'es' ? 'Nota no encontrada' : 'Note not found' }}
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
    .back-btn {
      user-select: none;
    }
  `]
})
export class NoteDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  readonly languageService = inject(LanguageService);
  private contentService = inject(ContentService);
  private titleService = inject(Title);
  private metaService = inject(Meta);

  note = signal<TechnicalNote | null>(null);
  currentLang = () => this.languageService.currentLang();

  bodyContent = () => {
    const currentNote = this.note();
    if (!currentNote) return '';
    const dict = this.articlesDict[currentNote.id];
    return dict ? dict[this.currentLang()] : '';
  };

  constructor() {
    effect(() => {
      const currentNote = this.note();
      const lang = this.currentLang();
      if (currentNote) {
        this.updateMeta(currentNote, lang);
      }
    });
  }

  private updateMeta(n: TechnicalNote, lang: 'es' | 'en') {
    const title = `${n.title[lang]} — Byron Armijos`;
    const desc = n.excerpt[lang];

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
      const slug = params.get('slug');
      if (slug) {
        const found = this.contentService.technicalNotes.find(n => n.slug === slug);
        if (found) {
          this.note.set(found);
          if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'instant' as any });
          }
        } else {
          this.note.set(null);
        }
      }
    });
  }

  goBack() {
    this.router.navigate(['/'], { fragment: 'notes' });
  }

  // Complete database of the articles bilingually
  private readonly articlesDict: Record<string, ArticleContent> = {
    'signals-vs-rxjs': {
      es: `
        <p>RxJS es una librería potente diseñada para resolver problemas complejos: concurrencia, cancelación y flujos asíncronos en el tiempo (como <code>retry</code> o <code>switchMap</code>). Si el estado de nuestra interfaz no tiene esa complejidad, utilizar RxJS a veces puede añadir una carga de trabajo innecesaria.</p>

        <h2>El coste cognitivo</h2>
        <p>Durante mucho tiempo en Angular, nos acostumbramos a usar RxJS para todo estado reactivo. Utilizar <code>BehaviorSubject</code> para variables sencillas o manejar suscripciones manuales puede hacer que tareas básicas resulten más difíciles de leer y mantener de lo que deberían.</p>
        <p>RxJS es excelente, pero a veces lo hemos aplicado por defecto para derivar un valor simple, lo que nos obliga a estar pendientes de posibles "memory leaks" y a mantener un modelo mental de suscripciones que no siempre aporta valor real al componente.</p>

        <h2>Una reactividad más sencilla</h2>
        <p>Cuando empezamos a usar Signals en los nuevos proyectos (como Vortex), el cambio fue muy positivo. El manejo del estado sincrónico —por ejemplo, decidir si un botón está deshabilitado en base a un campo de texto— volvió a ser directo y muy fácil de seguir.</p>

        <blockquote>
          "Signals nos ofrece una forma mucho más natural de gestionar el estado local, donde el framework se encarga de las dependencias por nosotros."
        </blockquote>

        <h2>El equilibrio perfecto</h2>
        <p>El objetivo no es abandonar RxJS, sino entender dónde brilla cada herramienta. En nuestros proyectos seguimos utilizando <strong>RxJS</strong> para manejar WebSockets y orquestar llamadas al servidor (donde gestionar el tiempo es clave). Pero en el momento en que esos datos llegan al componente, los gestionamos con <strong>Signals</strong> para actualizar la interfaz.</p>
        <p>RxJS para la asincronía y las comunicaciones; Signals para el estado de la vista. Entender cuándo aplicar cada enfoque ayuda muchísimo a mantener un código limpio y predecible.</p>
      `,
      en: `
        <p>RxJS is a powerful library designed to solve complex issues: concurrency, cancellation, and asynchronous streams over time (such as <code>retry</code> or <code>switchMap</code>). If our UI state lacks that level of complexity, using RxJS can sometimes introduce unnecessary overhead.</p>

        <h2>The Cognitive Cost</h2>
        <p>For a long time in Angular, we got used to utilizing RxJS for all reactive states. Utilizing <code>BehaviorSubject</code> for simple variables or managing manual subscriptions can make basic tasks harder to read and maintain than they should be.</p>
        <p>RxJS is outstanding, but we have sometimes applied it by default to derive a simple value, forcing us to constantly watch out for potential memory leaks and maintain a mental model of subscriptions that doesn't always add value to the component.</p>

        <h2>Simpler Reactivity</h2>
        <p>When we started adopting Signals in new projects (such as Vortex), the shift was incredibly positive. Managing synchronous state — like deciding whether a button is disabled based on a text input — became straightforward and very easy to follow again.</p>

        <blockquote>
          "Signals offer a much more natural way to manage local state, letting the framework automatically track and handle dependencies for us."
        </blockquote>

        <h2>The Perfect Balance</h2>
        <p>The goal is not to discard RxJS, but to understand where each tool truly shines. In our projects, we continue using <strong>RxJS</strong> to manage WebSockets and orchestrate server calls (where managing timing is critical). But the moment that data hits the component, we manage it with <strong>Signals</strong> to update the UI.</p>
        <p>RxJS for asynchrony and communications; Signals for view state. Understanding when to apply each approach goes a long way in keeping code clean and predictable.</p>
      `
    },
    'por-que-angular': {
      es: `
        <p>La estructura de Angular puede parecer muy estricta al principio, en comparación con la flexibilidad de otras opciones. Sin embargo, tras varias refactorizaciones y trabajar en equipos distribuidos, he comprobado que esas mismas reglas son las que ayudan a mantener el orden en aplicaciones empresariales a lo largo de los años.</p>

        <h2>El reto de la flexibilidad</h2>
        <p>En el ecosistema frontend, tener total libertad para elegir el gestor de estado o el enrutador es fantástico para empezar rápido. Pero en proyectos grandes, esa libertad a veces significa que cada desarrollador puede implementar su propia arquitectura, complicando el mantenimiento a largo plazo para el resto del equipo.</p>

        <h2>Un estándar claro desde el primer día</h2>
        <p>Con Angular, el equipo ya parte de una base compartida. Tienes inyección de dependencias y un enrutador integrado desde el principio. En proyectos corporativos —como en aviación, salud o banca— donde la curva de aprendizaje de los nuevos ingenieros debe ser lo más rápida posible, contar con este estándar es una gran ventaja.</p>

        <blockquote>
          "Tener ciertas decisiones de arquitectura ya resueltas por el framework nos permite centrar toda la energía en entender y resolver la lógica de negocio."
        </blockquote>

        <h2>Evolución constante</h2>
        <p>Lo que más valoro de Angular en sus últimas versiones (Standalone components, Signals, Control Flow) es cómo ha sabido modernizarse facilitando herramientas de migración que automatizan gran parte del trabajo, respetando la compatibilidad hacia atrás.</p>
        <p>La flexibilidad te permite arrancar muy rápido. Una estructura definida, en cambio, te da herramientas sólidas para escalar de forma sostenible. Por eso, para proyectos de largo recorrido, Angular sigue siendo mi opción preferida.</p>
      `,
      en: `
        <p>Angular's structure might seem strict at first, compared to the flexibility of other options. However, after numerous refactorings and working in distributed teams, I've seen that these exact rules are what keep order in enterprise applications over the years.</p>

        <h2>The Challenge of Flexibility</h2>
        <p>In the frontend ecosystem, having total freedom to choose your state manager or router is fantastic for starting fast. But in large-scale projects, that freedom often means every developer might implement their own architectural choices, complicating long-term maintenance for the rest of the team.</p>

        <h2>A Clear Standard from Day One</h2>
        <p>With Angular, the team starts with a shared foundation. You get dependency injection and an integrated router out of the box. In corporate environments — like aviation, healthcare, or banking — where the learning curve for new engineers must be as fast as possible, having this standard is a major asset.</p>

        <blockquote>
          "Having key architectural decisions already settled by the framework allows us to focus all our energy on understanding and solving the actual business logic."
        </blockquote>

        <h2>Steady Evolution</h2>
        <p>What I value most about Angular in its recent versions (Standalone components, Signals, Control Flow) is how it has modernized while providing migration tools that automate much of the work, respecting backward compatibility.</p>
        <p>Flexibility lets you bootstrap extremely fast. A defined structure, on the other hand, gives you solid tools to scale sustainably. For long-term projects, Angular remains my preferred choice.</p>
      `
    },
    'mostrar-menos': {
      es: `
        <p>Muchas veces asumimos que un problema de usabilidad en el frontend se resuelve ajustando estilos CSS o haciendo tipografías más grandes. Pero en ocasiones, el verdadero desafío radica en la arquitectura de la información y la sobrecarga cognitiva del cliente.</p>

        <h2>Un formulario difícil de gestionar</h2>
        <p>En el proyecto VY People PRL (Prevención de Riesgos Laborales), el formulario para reportar accidentes había crecido de forma orgánica con los años. A nivel técnico, era un componente muy grande que mezclaba lógica, validaciones y llamadas al servidor, lo que complicaba bastante hacer cambios sin romper otras partes.</p>
        <p>Pero el mayor impacto lo sufrían los operadores. La pantalla obligaba al navegador a renderizar y validar casi todos los bloques de información a la vez, haciendo al usuario pensar en términos de base de datos en lugar de guiarle progresivamente por el flujo del reporte.</p>

        <h2>Buscando una arquitectura más amigable</h2>
        <p>Para solucionarlo, decidimos refactorizar el código separando las responsabilidades de forma clara (gestión del estado, validación, transformación de datos, etc.).</p>
        <p>Esta mejora técnica fue fundamental porque nos permitió transformar la interfaz de forma segura. Al tener el estado del formulario desacoplado y controlado de forma reactiva, pudimos implementar componentes basados en la <strong>revelación progresiva (Progressive Disclosure)</strong>.</p>

        <blockquote>
          "Al mostrar solo los campos necesarios según el contexto, ayudamos a que la herramienta acompañe al usuario en su proceso diario."
        </blockquote>

        <h2>Simplificando la experiencia paso a paso</h2>
        <p>Durante la refactorización, evaluamos si nos convenía un sistema de formularios completamente dinámico (generado desde el servidor) o uno más estructurado. Optamos por un modelo híbrido: mantener una estructura sólida para los campos obligatorios por normativa, y dejar flexibilidad para añadir configuraciones dinámicas adicionales cuando fuera necesario.</p>
        <p>Esto nos permitió mantener un código muy robusto y fácil de tipar, sin añadir una complejidad excesiva de mantenimiento.</p>

        <h2>El resultado</h2>
        <p>Conseguir un código más limpio y con buenas pruebas unitarias fue una gran mejora técnica. Pero la verdadera victoria fue que, gracias a esta separación arquitectónica, logramos renderizar una interfaz mucho más tranquila. Evitar sobrecargar el DOM y estructurar la complejidad solo bajo demanda ayuda a reducir drásticamente la fatiga cognitiva del operador en momentos críticos.</p>
      `,
      en: `
        <p>Often, we assume a frontend usability issue can be solved by tweaking CSS layouts or making fonts bigger. However, the real challenge frequently lies in the client-side information architecture and cognitive overload.</p>

        <h2>A Hard-to-Manage Form</h2>
        <p>In the VY People PRL (Workplace Accident Prevention) project, the form to report accidents had grown organically over years. Technically, it was a massive component blending logic, validations, and API calls, which made changing it without breaking other features highly risky.</p>
        <p>But the biggest impact was on operators. The screen forced the browser to render and validate almost all data blocks simultaneously, making them think in database terms instead of guiding them naturally through the reporting flow.</p>

        <h2>Seeking an Empathetic Architecture</h2>
        <p>To solve this, we refactored the code by cleanly separating concerns (state management, validation, data transformation, etc.).</p>
        <p>This technical foundation was crucial because it empowered us to refactor the interface safely. With the form's state decoupled and reactive, we were able to implement components based on <strong>progressive disclosure</strong>.</p>

        <blockquote>
          "By showing only the fields required for the active context, we allowed the tool to empathize and walk with the user through their daily duties."
        </blockquote>

        <h2>Simplifying the Experience Step by Step</h2>
        <p>During the refactoring, we evaluated whether to use a fully dynamic form system (server-driven) or a structured one. We opted for a hybrid model: maintaining a solid, strictly-typed structure for regulatory-mandatory fields, and keeping flexibility for dynamic fields when requested.</p>
        <p>This approach allowed us to keep a highly robust and type-safe codebase without introducing excessive maintenance overhead.</p>

        <h2>The Outcome</h2>
        <p>Getting clean code and solid unit tests was a great technical upgrade. But the real triumph was that, thanks to this architectural separation, we could render a much cleaner interface. By keeping the DOM light and loading complexity only on demand, we drastically decreased the operator's cognitive fatigue in high-stress moments.</p>
      `
    },
    'claude-code': {
      es: `
        <p>Los asistentes de IA me ayudan a ser mucho más ágil con el código que ya domino. Sin embargo, intento tener precaución cuando los uso para resolver problemas cuya arquitectura no entiendo completamente, ya que es fácil introducir complejidad sin darnos cuenta.</p>

        <h2>El espejismo del "código que compila"</h2>
        <p>Herramientas como Claude Code han sido un gran apoyo. Nos permiten agilizar tareas repetitivas o refactorizar estructuras rápidamente, lo que es un avance increíble para la productividad del día a día.</p>
        <p>El desafío surge porque un código que compila y funciona en el momento no siempre significa que sea la solución más mantenible a largo plazo. Si aceptamos validaciones asíncronas complejas o decisiones de diseño estructural generadas por IA sin diseccionarlas, podemos terminar con un código que el equipo tendrá dificultades para mantener en el futuro.</p>

        <h2>Estrategia de co-pilotaje</h2>
        <p>Mi enfoque actual se resume en: <strong>Solo integro código que yo mismo sería capaz de revisar en una PR de un compañero.</strong></p>
        <p>Encuentro un gran valor usando la IA para:</p>
        <ul>
          <li>Escribir configuraciones iniciales o "boilerplate" (estructuras de Angular, interfaces).</li>
          <li>Ayudar en procesos de migración mecánicos.</li>
          <li>Identificar "edge cases" o escenarios poco comunes al diseñar casos de prueba.</li>
        </ul>

        <blockquote>
          "La clave está en cuestionar y entender las soluciones que nos propone la IA, asegurándonos de que encajan con las necesidades reales del proyecto."
        </blockquote>

        <h2>El valor del criterio humano</h2>
        <p>La IA es fantástica acelerando la ejecución de tareas mecánicas, pero el diseño general del sistema y el entendimiento del contexto de negocio deben seguir siendo responsabilidad de los desarrolladores. Mantener ese control es lo que asegura que el proyecto siga siendo escalable y fácil de entender por todo el equipo.</p>
      `,
      en: `
        <p>AI assistants help me move much faster with code I already master. However, I make sure to proceed with caution when using them to solve issues where I don't fully understand the underlying architecture, as it's easy to introduce hidden complexity.</p>

        <h2>The Illusion of "Code that Compiles"</h2>
        <p>Tools like Claude Code have been incredible companions. They allow us to speed up repetitive tasks or refactor boilerplate code in seconds, which is a massive boost to daily productivity.</p>
        <p>The catch is that code compiling and running right now doesn't guarantee it is the most maintainable solution over time. Accepting complex async validations or structural design decisions suggested by AI without dissecting them can leave a team with a codebase that becomes a nightmare to maintain.</p>

        <h2>Co-Piloting Strategy</h2>
        <p>My current approach is summarized as: <strong>I only merge code that I would feel fully comfortable reviewing in a colleague's PR.</strong></p>
        <p>I find immense value in using AI for:</p>
        <ul>
          <li>Writing boilerplate structure (Angular setups, TypeScript interfaces).</li>
          <li>Speeding up repetitive or mechanical migration tasks.</li>
          <li>Brainstorming edge cases and writing exhaustive test suites.</li>
        </ul>

        <blockquote>
          "The secret lies in constantly questioning and understanding the solutions proposed by AI, ensuring they align perfectly with the actual needs of the system."
        </blockquote>

        <h2>The Power of Human Engineering</h2>
        <p>AI is outstanding at accelerating execution, but system architecture and understanding the deep business context must remain the developer's core responsibility. Keeping that control is what keeps a project clean, scalable, and understandable for the team.</p>
      `
    },
    'vy-vortex-demo': {
      es: `
        <p>Nuestra primera versión de VY Vortex nos enseñó una gran lección de ingeniería. La aplicación estaba libre de bugs y cargaba en milisegundos, pero durante la prueba de usabilidad con los operadores descubrimos que el flujo de datos frontend, aunque correcto, no se adaptaba a su ritmo real de trabajo.</p>

        <h2>El contexto de la aviación</h2>
        <p>En el proyecto Vortex para Vueling, el objetivo era facilitar el trabajo de los operadores de disrupciones de vuelo, que habitualmente tenían que consultar múltiples hojas de cálculo y herramientas desconectadas. Construimos la aplicación usando Angular y WebSockets para asegurar que los datos fluyeran en tiempo real.</p>
        <p>Técnicamente funcionaba muy bien. Al tener tanta información disponible, nuestro primer instinto fue poner todos los detalles de los vuelos y pasajeros en la misma pantalla, pensando que dar acceso a todo en un solo lugar sería lo más útil.</p>

        <h2>El feedback de los usuarios</h2>
        <p>El día que presentamos la herramienta a los operadores, la pantalla cargó toda la información rápidamente. Sin embargo, una operadora senior nos hizo ver algo fundamental que habíamos pasado por alto:</p>

        <blockquote>
          "Hay demasiada información junta. En una incidencia yo no me detengo a leer cada detalle, necesito escanear visualmente. Aquí me cuesta encontrar lo urgente."
        </blockquote>

        <h2>Leer frente a escanear</h2>
        <p>Habíamos diseñado pensando en la cantidad de datos, no en cómo se consumen bajo presión. Cuando hay que reubicar a cientos de pasajeros rápidamente, el operador busca patrones: un color que indica un estado crítico, un número que resalta los asientos libres, o advertencias sobre necesidades especiales.</p>
        <p>Lo que no habíamos medido en nuestras fases previas de desarrollo fue la carga cognitiva a nivel de cliente. Una interfaz puede ser técnicamente impecable en rendimiento de red, pero si el DOM está saturado de información visual, frena la velocidad de reacción del operador.</p>

        <h2>Refactorización visual y de componentes</h2>
        <p>Con este aprendizaje, dimos un paso atrás. Redujimos la densidad de componentes en pantalla y aplicamos una jerarquía de renderizado mucho más estricta: ocultamos detalles secundarios detrás de paneles con carga diferida (lazy rendering) y convertimos los datos más críticos en señales visuales directas.</p>
        <p>Esta optimización frontend fue la verdadera responsable de que lográramos reducir significativamente las interacciones físicas y el tiempo medio de resolución. Nos demostró que, en entornos de alta presión, un buen desarrollo debe mantener una arquitectura visual limpia para que el dato crítico hable por sí solo.</p>
      `,
      en: `
        <p>Our initial release of VY Vortex taught us an invaluable engineering lesson. The application was free of bugs and loaded in milliseconds, but usability tests revealed that the frontend data flow, despite being accurate, did not match how operators actually worked under stress.</p>

        <h2>The Aviation Context</h2>
        <p>In the Vortex project for Vueling Airlines, the goal was to streamline the workflow for flight-disruption and reaccommodation operators, who traditionally relied on multiple spreadsheets and siloed tools. We developed the platform using Angular and WebSockets to ensure real-time data streaming.</p>
        <p>Technically, it worked perfectly. Having so much data at our disposal, our first instinct was to display all flight and passenger details on a single screen, thinking that putting everything in one place would be the ultimate solution.</p>

        <h2>Real User Feedback</h2>
        <p>The day we launched the demo to operators, the screen loaded everything in milliseconds. However, a senior operator pointed out something fundamental we had completely overlooked:</p>

        <blockquote>
          "There is too much information crammed together. During a disruption, I don't have time to read details; I need to scan visually. Here, I struggle to find what's critical."
        </blockquote>

        <h2>Reading vs. Scanning</h2>
        <p>We had designed for data abundance rather than high-stress cognitive processing. When rerouting hundreds of passengers under time pressure, operators search for visual cues: a color highlighting critical status, a number indicating available seats, or flags for passengers with special assistance.</p>
        <p>What we hadn't measured during our initial development phases was client-side cognitive load. A web app can have an impeccable network performance, but if the DOM is saturated with visual data, it impairs the operator's speed of reaction.</p>

        <h2>Refactoring Components and Layout Hierarchy</h2>
        <p>Armed with this feedback, we took a step back. We reduced component density on screen and established a strict rendering hierarchy: placing secondary details inside lazy-rendered collapsibles and converting critical indicators into clear, direct visual signals.</p>
        <p>This frontend refactoring was directly responsible for a major reduction in task duration and click counts. It proved that in high-pressure environments, a solid web client must maintain a clean DOM hierarchy so critical data stands out on its own.</p>
      `
    }
  };
}
