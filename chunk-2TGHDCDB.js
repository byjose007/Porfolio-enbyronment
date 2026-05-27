import{a as L,b as _}from"./chunk-GQ2BJODF.js";import{A as a,B as o,C as k,D as q,E as g,F as u,G as n,H as d,I as f,K as S,M as j,O as C,Q as T,R as I,V as A,X as E,Y as z,c,d as p,e as m,i as b,k as v,m as i,n as y,o as w,s as h,v as x}from"./chunk-R7B4DQI4.js";var M=()=>["/"];function B(l,t){if(l&1){let e=q();a(0,"main",0)(1,"a",2),g("click",function(){p(e);let s=u();return m(s.goBack())}),a(2,"span"),n(3,"\u2190"),o(),a(4,"span"),n(5),o()(),a(6,"header",3)(7,"div",4)(8,"span",5),n(9),o(),a(10,"span"),n(11,"\xB7"),o(),a(12,"span"),n(13),o(),a(14,"span"),n(15,"\xB7"),o(),a(16,"span"),n(17),o()(),a(18,"h1",6),n(19),o()(),k(20,"article",7),a(21,"div",8)(22,"a",9),g("click",function(){p(e);let s=u();return m(s.goBack())}),a(23,"span"),n(24,"\u2190"),o(),a(25,"span"),n(26),o()(),a(27,"span",10),n(28," enbyronment.dev \xB7 2026 "),o()()()}if(l&2){let e=u();i(5),d(e.currentLang()==="es"?"Volver al inicio":"Back to home"),i(4),d(e.note().category[e.currentLang()]),i(4),d(e.note().date),i(4),d(e.note().readTime[e.currentLang()]),i(2),d(e.note().title[e.currentLang()]),i(),h("innerHTML",e.bodyContent(),v),i(6),d(e.currentLang()==="es"?"Volver al inicio":"Back to home")}}function D(l,t){if(l&1&&(a(0,"div",1)(1,"h2",11),n(2),o(),a(3,"a",12),n(4),o()()),l&2){let e=u();i(2),f(" ",e.currentLang()==="es"?"Nota no encontrada":"Note not found"," "),i(),h("routerLink",S(3,M)),i(),f(" \u2190 ",e.currentLang()==="es"?"Volver al inicio":"Back to home"," ")}}var R=class l{route=c(A);router=c(E);languageService=c(L);contentService=c(_);titleService=c(I);metaService=c(T);note=b(null);currentLang=()=>this.languageService.currentLang();bodyContent=()=>{let t=this.note();if(!t)return"";let e=this.articlesDict[t.id];return e?e[this.currentLang()]:""};constructor(){j(()=>{let t=this.note(),e=this.currentLang();t&&this.updateMeta(t,e)})}updateMeta(t,e){let r=`${t.title[e]} \u2014 Byron Armijos`,s=t.excerpt[e];this.titleService.setTitle(r),this.metaService.updateTag({name:"description",content:s}),this.metaService.updateTag({property:"og:title",content:r}),this.metaService.updateTag({property:"og:description",content:s}),this.metaService.updateTag({property:"og:type",content:"article"}),this.metaService.updateTag({property:"og:image",content:"https://enbyronment.dev/profile-photo.png"}),this.metaService.updateTag({name:"twitter:card",content:"summary_large_image"}),this.metaService.updateTag({name:"twitter:title",content:r}),this.metaService.updateTag({name:"twitter:description",content:s})}ngOnInit(){this.route.paramMap.subscribe(t=>{let e=t.get("slug");if(e){let r=this.contentService.technicalNotes.find(s=>s.slug===e);r?(this.note.set(r),typeof window<"u"&&window.scrollTo({top:0,behavior:"instant"})):this.note.set(null)}})}goBack(){this.router.navigate(["/"],{fragment:"notes"})}articlesDict={"signals-vs-rxjs":{es:`
        <p>RxJS es una librer\xEDa potente dise\xF1ada para resolver problemas complejos: concurrencia, cancelaci\xF3n y flujos as\xEDncronos en el tiempo (como <code>retry</code> o <code>switchMap</code>). Si el estado de nuestra interfaz no tiene esa complejidad, utilizar RxJS a veces puede a\xF1adir una carga de trabajo innecesaria.</p>

        <h2>El coste cognitivo</h2>
        <p>Durante mucho tiempo en Angular, nos acostumbramos a usar RxJS para todo estado reactivo. Utilizar <code>BehaviorSubject</code> para variables sencillas o manejar suscripciones manuales puede hacer que tareas b\xE1sicas resulten m\xE1s dif\xEDciles de leer y mantener de lo que deber\xEDan.</p>
        <p>RxJS es excelente, pero a veces lo hemos aplicado por defecto para derivar un valor simple, lo que nos obliga a estar pendientes de posibles "memory leaks" y a mantener un modelo mental de suscripciones que no siempre aporta valor real al componente.</p>

        <h2>Una reactividad m\xE1s sencilla</h2>
        <p>Cuando empezamos a usar Signals en los nuevos proyectos (como Vortex), el cambio fue muy positivo. El manejo del estado sincr\xF3nico \u2014por ejemplo, decidir si un bot\xF3n est\xE1 deshabilitado en base a un campo de texto\u2014 volvi\xF3 a ser directo y muy f\xE1cil de seguir.</p>

        <blockquote>
          "Signals nos ofrece una forma mucho m\xE1s natural de gestionar el estado local, donde el framework se encarga de las dependencias por nosotros."
        </blockquote>

        <h2>El equilibrio perfecto</h2>
        <p>El objetivo no es abandonar RxJS, sino entender d\xF3nde brilla cada herramienta. En nuestros proyectos seguimos utilizando <strong>RxJS</strong> para manejar WebSockets y orquestar llamadas al servidor (donde gestionar el tiempo es clave). Pero en el momento en que esos datos llegan al componente, los gestionamos con <strong>Signals</strong> para actualizar la interfaz.</p>
        <p>RxJS para la asincron\xEDa y las comunicaciones; Signals para el estado de la vista. Entender cu\xE1ndo aplicar cada enfoque ayuda much\xEDsimo a mantener un c\xF3digo limpio y predecible.</p>
      `,en:`
        <p>RxJS is a powerful library designed to solve complex issues: concurrency, cancellation, and asynchronous streams over time (such as <code>retry</code> or <code>switchMap</code>). If our UI state lacks that level of complexity, using RxJS can sometimes introduce unnecessary overhead.</p>

        <h2>The Cognitive Cost</h2>
        <p>For a long time in Angular, we got used to utilizing RxJS for all reactive states. Utilizing <code>BehaviorSubject</code> for simple variables or managing manual subscriptions can make basic tasks harder to read and maintain than they should be.</p>
        <p>RxJS is outstanding, but we have sometimes applied it by default to derive a simple value, forcing us to constantly watch out for potential memory leaks and maintain a mental model of subscriptions that doesn't always add value to the component.</p>

        <h2>Simpler Reactivity</h2>
        <p>When we started adopting Signals in new projects (such as Vortex), the shift was incredibly positive. Managing synchronous state \u2014 like deciding whether a button is disabled based on a text input \u2014 became straightforward and very easy to follow again.</p>

        <blockquote>
          "Signals offer a much more natural way to manage local state, letting the framework automatically track and handle dependencies for us."
        </blockquote>

        <h2>The Perfect Balance</h2>
        <p>The goal is not to discard RxJS, but to understand where each tool truly shines. In our projects, we continue using <strong>RxJS</strong> to manage WebSockets and orchestrate server calls (where managing timing is critical). But the moment that data hits the component, we manage it with <strong>Signals</strong> to update the UI.</p>
        <p>RxJS for asynchrony and communications; Signals for view state. Understanding when to apply each approach goes a long way in keeping code clean and predictable.</p>
      `},"por-que-angular":{es:`
        <p>La estructura de Angular puede parecer muy estricta al principio, en comparaci\xF3n con la flexibilidad de otras opciones. Sin embargo, tras varias refactorizaciones y trabajar en equipos distribuidos, he comprobado que esas mismas reglas son las que ayudan a mantener el orden en aplicaciones empresariales a lo largo de los a\xF1os.</p>

        <h2>El reto de la flexibilidad</h2>
        <p>En el ecosistema frontend, tener total libertad para elegir el gestor de estado o el enrutador es fant\xE1stico para empezar r\xE1pido. Pero en proyectos grandes, esa libertad a veces significa que cada desarrollador puede implementar su propia arquitectura, complicando el mantenimiento a largo plazo para el resto del equipo.</p>

        <h2>Un est\xE1ndar claro desde el primer d\xEDa</h2>
        <p>Con Angular, el equipo ya parte de una base compartida. Tienes inyecci\xF3n de dependencias y un enrutador integrado desde el principio. En proyectos corporativos \u2014como en aviaci\xF3n, salud o banca\u2014 donde la curva de aprendizaje de los nuevos ingenieros debe ser lo m\xE1s r\xE1pida posible, contar con este est\xE1ndar es una gran ventaja.</p>

        <blockquote>
          "Tener ciertas decisiones de arquitectura ya resueltas por el framework nos permite centrar toda la energ\xEDa en entender y resolver la l\xF3gica de negocio."
        </blockquote>

        <h2>Evoluci\xF3n constante</h2>
        <p>Lo que m\xE1s valoro de Angular en sus \xFAltimas versiones (Standalone components, Signals, Control Flow) es c\xF3mo ha sabido modernizarse facilitando herramientas de migraci\xF3n que automatizan gran parte del trabajo, respetando la compatibilidad hacia atr\xE1s.</p>
        <p>La flexibilidad te permite arrancar muy r\xE1pido. Una estructura definida, en cambio, te da herramientas s\xF3lidas para escalar de forma sostenible. Por eso, para proyectos de largo recorrido, Angular sigue siendo mi opci\xF3n preferida.</p>
      `,en:`
        <p>Angular's structure might seem strict at first, compared to the flexibility of other options. However, after numerous refactorings and working in distributed teams, I've seen that these exact rules are what keep order in enterprise applications over the years.</p>

        <h2>The Challenge of Flexibility</h2>
        <p>In the frontend ecosystem, having total freedom to choose your state manager or router is fantastic for starting fast. But in large-scale projects, that freedom often means every developer might implement their own architectural choices, complicating long-term maintenance for the rest of the team.</p>

        <h2>A Clear Standard from Day One</h2>
        <p>With Angular, the team starts with a shared foundation. You get dependency injection and an integrated router out of the box. In corporate environments \u2014 like aviation, healthcare, or banking \u2014 where the learning curve for new engineers must be as fast as possible, having this standard is a major asset.</p>

        <blockquote>
          "Having key architectural decisions already settled by the framework allows us to focus all our energy on understanding and solving the actual business logic."
        </blockquote>

        <h2>Steady Evolution</h2>
        <p>What I value most about Angular in its recent versions (Standalone components, Signals, Control Flow) is how it has modernized while providing migration tools that automate much of the work, respecting backward compatibility.</p>
        <p>Flexibility lets you bootstrap extremely fast. A defined structure, on the other hand, gives you solid tools to scale sustainably. For long-term projects, Angular remains my preferred choice.</p>
      `},"mostrar-menos":{es:`
        <p>Muchas veces asumimos que un problema de usabilidad en el frontend se resuelve ajustando estilos CSS o haciendo tipograf\xEDas m\xE1s grandes. Pero en ocasiones, el verdadero desaf\xEDo radica en la arquitectura de la informaci\xF3n y la sobrecarga cognitiva del cliente.</p>

        <h2>Un formulario dif\xEDcil de gestionar</h2>
        <p>En el proyecto VY People PRL (Prevenci\xF3n de Riesgos Laborales), el formulario para reportar accidentes hab\xEDa crecido de forma org\xE1nica con los a\xF1os. A nivel t\xE9cnico, era un componente muy grande que mezclaba l\xF3gica, validaciones y llamadas al servidor, lo que complicaba bastante hacer cambios sin romper otras partes.</p>
        <p>Pero el mayor impacto lo sufr\xEDan los operadores. La pantalla obligaba al navegador a renderizar y validar casi todos los bloques de informaci\xF3n a la vez, haciendo al usuario pensar en t\xE9rminos de base de datos en lugar de guiarle progresivamente por el flujo del reporte.</p>

        <h2>Buscando una arquitectura m\xE1s amigable</h2>
        <p>Para solucionarlo, decidimos refactorizar el c\xF3digo separando las responsabilidades de forma clara (gesti\xF3n del estado, validaci\xF3n, transformaci\xF3n de datos, etc.).</p>
        <p>Esta mejora t\xE9cnica fue fundamental porque nos permiti\xF3 transformar la interfaz de forma segura. Al tener el estado del formulario desacoplado y controlado de forma reactiva, pudimos implementar componentes basados en la <strong>revelaci\xF3n progresiva (Progressive Disclosure)</strong>.</p>

        <blockquote>
          "Al mostrar solo los campos necesarios seg\xFAn el contexto, ayudamos a que la herramienta acompa\xF1e al usuario en su proceso diario."
        </blockquote>

        <h2>Simplificando la experiencia paso a paso</h2>
        <p>Durante la refactorizaci\xF3n, evaluamos si nos conven\xEDa un sistema de formularios completamente din\xE1mico (generado desde el servidor) o uno m\xE1s estructurado. Optamos por un modelo h\xEDbrido: mantener una estructura s\xF3lida para los campos obligatorios por normativa, y dejar flexibilidad para a\xF1adir configuraciones din\xE1micas adicionales cuando fuera necesario.</p>
        <p>Esto nos permiti\xF3 mantener un c\xF3digo muy robusto y f\xE1cil de tipar, sin a\xF1adir una complejidad excesiva de mantenimiento.</p>

        <h2>El resultado</h2>
        <p>Conseguir un c\xF3digo m\xE1s limpio y con buenas pruebas unitarias fue una gran mejora t\xE9cnica. Pero la verdadera victoria fue que, gracias a esta separaci\xF3n arquitect\xF3nica, logramos renderizar una interfaz mucho m\xE1s tranquila. Evitar sobrecargar el DOM y estructurar la complejidad solo bajo demanda ayuda a reducir dr\xE1sticamente la fatiga cognitiva del operador en momentos cr\xEDticos.</p>
      `,en:`
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
      `},"claude-code":{es:`
        <p>Los asistentes de IA me ayudan a ser mucho m\xE1s \xE1gil con el c\xF3digo que ya domino. Sin embargo, intento tener precauci\xF3n cuando los uso para resolver problemas cuya arquitectura no entiendo completamente, ya que es f\xE1cil introducir complejidad sin darnos cuenta.</p>

        <h2>El espejismo del "c\xF3digo que compila"</h2>
        <p>Herramientas como Claude Code han sido un gran apoyo. Nos permiten agilizar tareas repetitivas o refactorizar estructuras r\xE1pidamente, lo que es un avance incre\xEDble para la productividad del d\xEDa a d\xEDa.</p>
        <p>El desaf\xEDo surge porque un c\xF3digo que compila y funciona en el momento no siempre significa que sea la soluci\xF3n m\xE1s mantenible a largo plazo. Si aceptamos validaciones as\xEDncronas complejas o decisiones de dise\xF1o estructural generadas por IA sin diseccionarlas, podemos terminar con un c\xF3digo que el equipo tendr\xE1 dificultades para mantener en el futuro.</p>

        <h2>Estrategia de co-pilotaje</h2>
        <p>Mi enfoque actual se resume en: <strong>Solo integro c\xF3digo que yo mismo ser\xEDa capaz de revisar en una PR de un compa\xF1ero.</strong></p>
        <p>Encuentro un gran valor usando la IA para:</p>
        <ul>
          <li>Escribir configuraciones iniciales o "boilerplate" (estructuras de Angular, interfaces).</li>
          <li>Ayudar en procesos de migraci\xF3n mec\xE1nicos.</li>
          <li>Identificar "edge cases" o escenarios poco comunes al dise\xF1ar casos de prueba.</li>
        </ul>

        <blockquote>
          "La clave est\xE1 en cuestionar y entender las soluciones que nos propone la IA, asegur\xE1ndonos de que encajan con las necesidades reales del proyecto."
        </blockquote>

        <h2>El valor del criterio humano</h2>
        <p>La IA es fant\xE1stica acelerando la ejecuci\xF3n de tareas mec\xE1nicas, pero el dise\xF1o general del sistema y el entendimiento del contexto de negocio deben seguir siendo responsabilidad de los desarrolladores. Mantener ese control es lo que asegura que el proyecto siga siendo escalable y f\xE1cil de entender por todo el equipo.</p>
      `,en:`
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
      `},"vy-vortex-demo":{es:`
        <p>Nuestra primera versi\xF3n de VY Vortex nos ense\xF1\xF3 una gran lecci\xF3n de ingenier\xEDa. La aplicaci\xF3n estaba libre de bugs y cargaba en milisegundos, pero durante la prueba de usabilidad con los operadores descubrimos que el flujo de datos frontend, aunque correcto, no se adaptaba a su ritmo real de trabajo.</p>

        <h2>El contexto de la aviaci\xF3n</h2>
        <p>En el proyecto Vortex para Vueling, el objetivo era facilitar el trabajo de los operadores de disrupciones de vuelo, que habitualmente ten\xEDan que consultar m\xFAltiples hojas de c\xE1lculo y herramientas desconectadas. Construimos la aplicaci\xF3n usando Angular y WebSockets para asegurar que los datos fluyeran en tiempo real.</p>
        <p>T\xE9cnicamente funcionaba muy bien. Al tener tanta informaci\xF3n disponible, nuestro primer instinto fue poner todos los detalles de los vuelos y pasajeros en la misma pantalla, pensando que dar acceso a todo en un solo lugar ser\xEDa lo m\xE1s \xFAtil.</p>

        <h2>El feedback de los usuarios</h2>
        <p>El d\xEDa que presentamos la herramienta a los operadores, la pantalla carg\xF3 toda la informaci\xF3n r\xE1pidamente. Sin embargo, una operadora senior nos hizo ver algo fundamental que hab\xEDamos pasado por alto:</p>

        <blockquote>
          "Hay demasiada informaci\xF3n junta. En una incidencia yo no me detengo a leer cada detalle, necesito escanear visualmente. Aqu\xED me cuesta encontrar lo urgente."
        </blockquote>

        <h2>Leer frente a escanear</h2>
        <p>Hab\xEDamos dise\xF1ado pensando en la cantidad de datos, no en c\xF3mo se consumen bajo presi\xF3n. Cuando hay que reubicar a cientos de pasajeros r\xE1pidamente, el operador busca patrones: un color que indica un estado cr\xEDtico, un n\xFAmero que resalta los asientos libres, o advertencias sobre necesidades especiales.</p>
        <p>Lo que no hab\xEDamos medido en nuestras fases previas de desarrollo fue la carga cognitiva a nivel de cliente. Una interfaz puede ser t\xE9cnicamente impecable en rendimiento de red, pero si el DOM est\xE1 saturado de informaci\xF3n visual, frena la velocidad de reacci\xF3n del operador.</p>

        <h2>Refactorizaci\xF3n visual y de componentes</h2>
        <p>Con este aprendizaje, dimos un paso atr\xE1s. Redujimos la densidad de componentes en pantalla y aplicamos una jerarqu\xEDa de renderizado mucho m\xE1s estricta: ocultamos detalles secundarios detr\xE1s de paneles con carga diferida (lazy rendering) y convertimos los datos m\xE1s cr\xEDticos en se\xF1ales visuales directas.</p>
        <p>Esta optimizaci\xF3n frontend fue la verdadera responsable de que logr\xE1ramos reducir significativamente las interacciones f\xEDsicas y el tiempo medio de resoluci\xF3n. Nos demostr\xF3 que, en entornos de alta presi\xF3n, un buen desarrollo debe mantener una arquitectura visual limpia para que el dato cr\xEDtico hable por s\xED solo.</p>
      `,en:`
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
      `}};static \u0275fac=function(e){return new(e||l)};static \u0275cmp=y({type:l,selectors:[["app-note-detail"]],decls:2,vars:1,consts:[[1,"wrap","article-container",2,"animation","fadeIn 0.6s ease forwards"],[1,"wrap","article-container",2,"text-align","center","padding","180px 0"],[1,"back-btn",3,"click"],[1,"article-header"],[1,"article-meta"],[1,"category"],[1,"article-title"],[1,"article-body",3,"innerHTML"],[2,"margin-top","64px","border-top","1px solid var(--line)","padding-top","32px","display","flex","justify-content","space-between","align-items","center"],[1,"back-btn",2,"margin-bottom","0",3,"click"],[2,"font-family","'JetBrains Mono', monospace","font-size","13px","color","var(--mute)"],[2,"font-family","'Bricolage Grotesque', sans-serif","font-size","32px","margin-bottom","24px"],[1,"back-btn",3,"routerLink"]],template:function(e,r){e&1&&w(0,B,29,7,"main",0)(1,D,5,4,"div",1),e&2&&x(r.note()?0:1)},dependencies:[C,z],styles:["@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}.back-btn[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none}"]})};export{R as NoteDetailComponent};
