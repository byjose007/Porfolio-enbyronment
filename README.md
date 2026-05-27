# Byron Armijos — Senior Frontend Engineer · Angular Specialist

Especializado en diseñar e implementar **interfaces de baja carga cognitiva** para sectores de alta exigencia (Aviación, Banca, Salud, Seguros). Mi foco es construir sistemas robustos, accesibles y altamente predecibles que actúan como un escudo ante la complejidad operativa, garantizando que el usuario tome decisiones acertadas bajo presión.

[![Sitio Web](https://img.shields.io/badge/Web-enbyronment.dev-3de1c5?style=for-the-badge&logo=google-chrome&logoColor=0a0e13)](https://enbyronment.dev)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Byron_Armijos-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/byron-armijos)
[![Email](https://img.shields.io/badge/Email-byjose007%40gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:byjose007@gmail.com)
[![CV](https://img.shields.io/badge/Descargar-Currículum_Vítae-ffb454?style=for-the-badge&logo=adobe-acrobat-reader&logoColor=0a0e13)](https://enbyronment.dev/CV_Byron-Frontend.pdf)

---

## 🎯 ¿Por qué este repositorio es mi mejor carta de presentación?

Este portafolio no es una plantilla estática. Es un **sistema real de alto rendimiento** diseñado desde cero en **Angular 19** que sirve como demostración práctica de mis competencias en arquitectura frontend y estándares empresariales:

*   **Accesibilidad Extrema (WCAG 2.1 AA):** Tarjetas y componentes interactivos 100% navegables mediante teclado (`tabindex`, `role="link"`, listeners `Enter`/`Space`) con focos visibles personalizados `:focus-visible` adaptados a temas claro y oscuro.
*   **Optimización de Core Web Vitals (Rendimiento de Élite):** Integración nativa de bloques `@defer (on viewport)` en secciones clave para diferir la carga visual. Chunks perezosos independientes para reducir el bundle inicial y **Skeleton Loaders** milimétricos para garantizar un Layout Shift nulo (CLS = 0).
*   **SEO Reactivo Multilingüe (SSR/SSG):** Sincronización dinámica reactiva del atributo `lang` en `<html>` mediante Angular Signals, e inyección asíncrona de metadatos (Open Graph / Twitter Cards) al navegar por notas o proyectos para asegurar una excelente indexación y previsualizaciones premium en LinkedIn.
*   **Despliegue Continuo Automatizado (CI/CD):** Pipeline configurado en GitHub Actions que ejecuta pruebas, compila y pre-renderiza estáticamente las 8 rutas de la web en cada push, desplegando de forma inmediata en GitHub Pages con preservación de dominio personalizado (`CNAME`).

---

## 💼 Experiencia y Proyectos Destacados

Mi trayectoria reciente se centra en resolver retos complejos de información y rendimiento:

### ✈️ VY Vortex (Aviación · Tiempo Real)
*   **Rol:** Desarrollador Frontend en Vueling Airlines (Capitole Consulting).
*   **El Reto:** Sala de control de reacomodación y disrupciones de vuelos en tiempo real bajo colas WebSockets en vivo.
*   **Solución:** Diseño de interfaces de baja carga cognitiva, reduciendo la fatiga visual de los operadores y aplicando revelación progresiva y componentes lazy en el DOM para procesar miles de pasajeros a 60 FPS.
*   **Impacto:** **−30% de reducción en el tiempo de resolución** de incidencias en operaciones de vuelo.

### ✚ Pegasi (Salud · Oncología)
*   **Rol:** Desarrollador Frontend (Nisum).
*   **El Reto:** Crear el primer software de monitorización clínica oncológica en Chile, manejando densidades de datos médicas extremadamente sensibles sin abrumar al especialista en turnos de 12 horas.
*   **Solución:** Arquitectura basada en **Microfrontends en Angular** integrada mediante un sistema de diseño propio y BFF en **NestJS**, cumpliendo rigurosamente directrices de accesibilidad WCAG 2.1 AA.
*   **Impacto:** Escalabilidad multiequipo y certificado de accesibilidad clínica.

### ⛁ One Stop Shop (Banca)
*   **Rol:** Desarrollador Frontend en Banco BCI (Nisum).
*   **El Reto:** Unificar un portal bancario corporativo fragmentado manteniendo consistencia visual y despliegues independientes.
*   **Solución:** Implementación de microfrontends con integración federada y mantenimiento de una biblioteca de componentes tipados en un Design System corporativo compartido.
*   **Impacto:** Despliegues de módulos independientes con total sincronización visual.

---

## 🛠️ Stack Tecnológico

*   **Frontend Principal:** Angular 17–19, TypeScript, Standalone Components.
*   **Manejo de Estado y Reactividad:** Angular Signals (estado local sincrónico), RxJS (WebSockets, eventos temporizados, asincronía reactiva).
*   **Backend & Integración (BFF):** NestJS, Node.js, Python, Express.
*   **Bases de Datos & Cloud:** MongoDB, PostgreSQL, Azure CI/CD Pipelines, GitHub Actions.
*   **Diseño e Interfaces:** Figma (traducción pixel-perfect a producción), Vanilla CSS (sistemas de diseño modulares, responsive y accesibles).

---

## 📦 Estructura del Código

El proyecto sigue una estructura limpia, modular y desacoplada respetando la inyección de dependencias y la separación de responsabilidades:

```text
src/
├── app/
│   ├── core/
│   │   ├── models/        # Modelos e interfaces fuertemente tipados
│   │   └── services/      # Servicios de Core (Idioma, Contenido, Temas)
│   ├── features/
│   │   ├── case-studies/  # Vista de detalle de Casos de Estudio
│   │   ├── home/          # Página de inicio principal y secciones
│   │   └── notes/         # Vista de detalle de Notas Técnicas y reflexiones
│   ├── shared/
│   │   └── components/    # Componentes comunes (Header, Footer, Toggles, Tarjetas)
│   ├── app.component.ts   # Componente raíz
│   └── app.routes.ts      # Enrutamiento modular con carga perezosa (lazy-loading)
public/                    # Ficheros estáticos copiados al build (PDFs, CNAME de dominio, Favicons)
routes.txt                 # Mapa de rutas estáticas configurado para el pre-renderizado SSG
angular.json               # Configuración del compilador y optimización de prerendering
```

---

## 📫 Contacto Rápido

¿Tienes un reto complejo de interfaces, rendimiento o arquitectura en Angular? Hablemos.

*   **Web Oficial:** [enbyronment.dev](https://enbyronment.dev)
*   **LinkedIn:** [/in/byron-armijos](https://www.linkedin.com/in/byron-armijos)
*   **Correo Electrónico:** [byjose007@gmail.com](mailto:byjose007@gmail.com)
*   **Ubicación:** Alicante, Comunidad Valenciana, España (Disponible para remoto y colaboraciones internacionales).
