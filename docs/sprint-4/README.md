# Sprint 4 - Modernización (React.js), Deploy & Demo Day

## Errores comunes de esta etapa

Ver **[errores-comunes.md](./errores-comunes.md)** (variables `VITE_`, SPA en producción, CORS en deploy, build).

## Objetivo
Sprint final: migrar y profesionalizar su aplicación.

Dejar atrás la manipulación del DOM y construir una **SPA escalable con React**. Además, publicar el proyecto en internet (deploy) para la defensa final.

## ⚠️ Refactorización (regla importante)

No “copien y peguen” el código del Sprint 3 dentro de React: React requiere pensar en componentes y ciclo de vida.

Regla de oro:
- No borren la carpeta del Sprint 3 (`frontend-vanilla`).
- Creen una nueva carpeta raíz `frontend-react` (o inicien un Vite nuevo en una rama aparte) y mantengan el legado como referencia.

## Requerimientos técnicos

### A. Componentización y Enrutamiento

1. **SPA**: no debe recargar la página al navegar.
2. Implementar **React Router DOM**.
3. Atomizar la UI (ej.: `<Navbar />`, `<ProductCard />`, `<Footer />`).
4. Usar **props** correctamente.
5. Rutas protegidas (admin):
   - renderizar Dashboard/CRUD completo solo si el usuario tiene rol de admin o una validación simple equivalente.

### B. Gestión de estado (Hooks)

1. `useState`: formularios, inputs y estados locales de UI
2. `useEffect`: fetch a la API (reemplazando la lógica imperativa del Sprint 3)
3. Context API (opcional/avanzado):
   - recomendado para manejar estado global del carrito (evitar “prop drilling”)

### C. Despliegue (Deploy)

Antes de publicar, revisá el **[checklist de deploy](./deploy-checklist.md)** para evitar fallos típicos (CORS, variables de entorno, URLs).

El proyecto no puede vivir solo en `localhost`.

1. **Backend**: desplegar API en Render, Railway o similar.
2. **Frontend**: desplegar React en Vercel o Netlify.
3. Variables de entorno:
   - configurar claves en la nube
   - no hardcodear URLs locales en producción

## Backlog sugerido (tarjetas = ramas)

1. `chore/react-init`
   - Proyecto Vite creado, limpio y corriendo
2. `feat/react-layout`
   - Navbar y Footer migrados a componentes React
3. `feat/react-routing`
   - Navegación entre Home, Login y Detalle (Router)
4. `feat/react-home`
   - `useEffect` trae productos y mapea `<ProductCard />`
5. `feat/react-cart-context`
   - Estado global para agregar/quitar ítems
6. `feat/react-auth`
   - Formularios controlados conectados al endpoint de Login
7. `ops/deploy-prod`
   - URLs públicas funcionando https://mi-tienda.vercel.app (ejemplo)

## El Demo Day (Examen Final)

Formato de pitch de venta (no solo código):

1. **Tiempo**: 20-30 minutos por grupo
2. **Demo en vivo**:
   - con URL pública
   - prohibido usar localhost salvo emergencia catastrófica
3. Flujo a demostrar:
   - crear un usuario nuevo
   - buscar un producto
   - agregar un producto al carrito
   - simular una compra
   - mostrar persistencia (cerrar y abrir el navegador)

## Entregable final

1. Repositorio final con `README.md` actualizado (producción + integrantes).
2. Tablero GitHub Projects final: todas las tarjetas en `Done`.
3. Video de respaldo (breve) navegando el sitio (por si falla internet).

## Sprint Review en video (obligatorio)

Cada uno de los 8 equipos debe entregar un video de Sprint Review final.

- Duración sugerida: 12 a 15 minutos.
- Formato: link público (Drive, YouTube no listado o Loom) incluido en la entrega final.
- Participación: deben hablar todos los integrantes.

Contenido mínimo (Sprint 4):

1. Roles del sprint (PO, SM y dev team), y evaluación de cómo evolucionó la dinámica Scrum del equipo.
2. Qué hizo cada integrante en el cierre del producto (React, deploy, QA, documentación, demo).
3. Demo final con URL pública y recorrido de los flujos críticos del negocio.
4. Cumplimiento global del producto: qué objetivos de negocio se alcanzaron y cuáles quedaron pendientes.
5. Qué prácticas de trabajo funcionaron bien y deberían mantenerse en un entorno profesional.
6. Qué errores se cometieron durante el proyecto y qué aprendizaje concreto dejan.
7. Plan de mejora profesional: qué harían distinto en un próximo ciclo Scrum (proceso, técnica y comunicación).

Recursos comunes:

- Plantilla sugerida: **[../sprint-review/sprint-review-template.md](../sprint-review/sprint-review-template.md)**
- Rubrica de evaluacion: **[../sprint-review/sprint-review-rubrica.md](../sprint-review/sprint-review-rubrica.md)**
- Checklist estudiantes: **[../sprint-review/sprint-review-checklist-estudiantes.md](../sprint-review/sprint-review-checklist-estudiantes.md)**
- Checklist docentes: **[../sprint-review/sprint-review-checklist-docentes.md](../sprint-review/sprint-review-checklist-docentes.md)**

