# Sprint 1 - Wireframes y Figma

## Errores comunes de esta etapa

Ver **[errores-comunes.md](./errores-comunes.md)** (rutas de assets, deploy estático, enlaces entre páginas).

## Objetivo
Convertir el relevamiento del Sprint 0 en un conjunto de pantallas (wireframes) y trabajo previo de diseño (Figma).

## Qué tenés que entregar en esta carpeta

1. `figma/`
   - Link al archivo de Figma.
   - Capturas/exportaciones de las pantallas más importantes (al menos 3).
   - Si usás variables/tokens, dejá documentado cómo se llaman (paleta, tipografías, etc.).

2. `wireframes/`
   - Wireframes exportados por pantalla (PNG/PDF).
   - Mínimo 1 wireframe por pantalla principal.

3. `decisiones-ui.md`
   - Componentes principales (cards, formularios, tablas, etc.).
   - Paleta de colores (con referencia del Sprint 0).
   - Tipografías (o alternativas).
   - Reglas de estilo: márgenes, tamaños, estados (loading/error).

4. `flujo/`
   - Mapa de navegación o “flujo” de la app.
   - Qué ocurre al iniciar sesión, qué pantallas se ven, y cómo se navega entre ellas.

5. `resumen-sprint-1.md`
   - 1 párrafo de qué lograron.
   - 3 decisiones clave (con por qué).
   - 3 riesgos o cosas a resolver en el siguiente sprint.

## Checklist

- [ ] Hay wireframes legibles y con nombre de pantallas.
- [ ] Las pantallas están conectadas por un flujo claro.
- [ ] Hay un documento de decisiones UI (no solo capturas).
- [ ] El resultado del Sprint 1 “sirve” para implementar (backend + frontend).

## Criterio de corrección

Se evalúa que el diseño sea coherente con el relevamiento, que exista trazabilidad (decisión -> pantalla -> implementación) y que el flujo esté bien definido.

---

## Condición de aprobación (metodología)

En el Sprint 1 se evalúa la trazabilidad y el proceso:

1. No se aceptan commits directos a `main`.
2. Todo código debe estar asociado a una **Issue o tarjeta en GitHub Projects**.
3. Regla: si no hay Issue en GitHub, ese código no existe para la evaluación.

## Requerimientos técnicos (Frontend Estático)

1. Construir el esqueleto visual usando **HTML5 semántico** y **CSS3** (se permite Tailwind/Bootstrap si ya dominan CSS base).
2. Diseño **Responsive** (mobile first).
3. Sin lógica JS compleja aún: este sprint apunta a la UI/maquetado.

## Vistas requeridas (obligatorias)

1. `🏠` Landing Page (Home): navbar, banner, “destacados” y footer.
2. `📋` Catálogo (Listado): grilla de productos con filtros laterales (solo visuales).
3. `🔍` Detalle de producto: foto grande, descripción, precio y botón “Agregar al Carrito”.
4. `🛒` Carrito de compras: tabla estática con 2 o 3 productos de ejemplo.
5. `👤` Checkout: formulario de datos de envío y confirmación.
6. `📄` Página 404: “No encontrado”.
7. `⚙️` Panel de Administración (Backoffice): tabla maquetada para listar productos con acciones visuales y formulario modal/vista para “crear producto”.

## Backlog sugerido (tarjetas = ramas)

Para aprobar, deben tener creadas (y mover) al menos estas tarjetas:

1. `chore/initial-setup`: repo creado, `.gitignore`, `README` con integrantes.
2. `design/style-guide`: archivo `variables.css` con colores y tipografías definidos.
3. `feat/layout-base`: navbar y footer responsivos visibles en todas las HTML.
4. `feat/ui-home`: banner y destacados. Links funcionando.
5. `feat/ui-detail`: detalle de producto con botón de compra (visual).
6. `feat/ui-checkout`: checkout maquetado y estético.
7. `feat/ui-cart`: tabla del carrito maquetada (especialmente bien en móvil).

## Flujo de trabajo obligatorio

Para cualquier tarea del cuadro anterior, un integrante debe:

1. En el tablero: asignarse el issue y moverlo a `In Progress` o `Doing`.
2. En Git: crear rama desde `main` (ej. `git checkout -b feat/ui-home`).
3. Codear: commits pequeños y descriptivos.
4. En GitHub: subir la rama y crear PR hacia `main`.
   - En la descripción del PR, vincular el Issue (ej. `Closes #ID`).
5. Code Review: otro compañero aprueba y hace el merge.

## Entregable del Sprint 1

No se envía un ZIP. Se entrega un documento (PDF o link) con:

1. Link al repositorio de GitHub.
2. Link al tablero de GitHub Projects.
3. Listado de Pull Requests cerrados (evidencia de trabajo con ramas).
4. URL del deploy estático (GitHub Pages o Vercel).

## Sprint Review en video (obligatorio)

Cada uno de los 8 equipos debe entregar un video de Sprint Review como parte del sprint.

- Duración sugerida: 6 a 8 minutos.
- Formato: link público (Drive, YouTube no listado o Loom) incluido en la entrega.
- Participación: deben hablar todos los integrantes.

Contenido mínimo (Sprint 1):

1. Roles del sprint (PO, SM y equipo de desarrollo) y cómo se organizaron.
2. Qué hizo cada integrante (issues, ramas, PRs y aportes de diseño/UI).
3. Qué se comprometieron a hacer al inicio del sprint y qué se completó realmente.
4. Decisiones de diseño importantes y su justificación.
5. Qué salió bien y se debe mantener.
6. Qué salió mal (bloqueos, estimaciones, coordinación) y cómo lo corregirán en Sprint 2.
7. Riesgos detectados para backend e integración futura.

Recursos comunes:

- Plantilla sugerida: **[../sprint-review/sprint-review-template.md](../sprint-review/sprint-review-template.md)**
- Rubrica de evaluacion: **[../sprint-review/sprint-review-rubrica.md](../sprint-review/sprint-review-rubrica.md)**
- Checklist estudiantes: **[../sprint-review/sprint-review-checklist-estudiantes.md](../sprint-review/sprint-review-checklist-estudiantes.md)**
- Checklist docentes: **[../sprint-review/sprint-review-checklist-docentes.md](../sprint-review/sprint-review-checklist-docentes.md)**

