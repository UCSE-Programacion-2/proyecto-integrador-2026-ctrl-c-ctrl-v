# Sprint 0 - Relevamiento

## Objetivo
Dejar documentado el punto de partida del proyecto: el local/servicio (contexto real) y la base visual (logo y referencias) para que el resto del equipo pueda diseñar y construir con criterios claros.

## Qué tenés que entregar en esta carpeta

1. `relevamiento.md`
   - Resumen del local/negocio (qué ofrece, público, horarios si aplica).
   - Problemas o necesidades detectadas (2 a 5).
   - Características del espacio/operación que impacten en la app (ej.: turnos, catálogo, modo de atención, etc.).

2. `fotos/`
   - Mínimo 5 fotos representativas (ideal 10 a 15).
   - Indicá en el `relevamiento.md` qué aporta cada conjunto de fotos (por ejemplo: “zona de atención”, “entrada”, “cartelería”).

3. `logo/`
   - Archivo(s) del logo (SVG/PNG).
   - Versión original si la consiguen (fuente oficial, si existe).
   - Si no hay logo oficial: una propuesta inicial con una breve justificación (colores, estilo, tipografía).

4. (Opcional) `extras/`
   - Paleta de colores aproximada (con HEX o equivalente).
   - Capturas de referencias (competidores, inspiraciones, etc.).
   - Medidas o croquis simples si son relevantes.

## Errores comunes de esta etapa

Ver **[errores-comunes.md](./errores-comunes.md)** (GitHub Classroom, README, tablero, milestones).

## Checklist (para que no falte nada)

- [ ] Hay un `relevamiento.md` con resumen y decisiones iniciales.
- [ ] Hay fotos ordenadas y descriptivas.
- [ ] Está el logo (o una propuesta inicial) con referencia a por qué se elige.
- [ ] Queda claro qué información del mundo real impacta en la app.

## Criterio de corrección

Se evalúa la claridad del documento, la evidencia (fotos/logo) y que el relevamiento “se traduzca” en decisiones para el Sprint 1.

---

## Requisitos de viabilidad del negocio (para aprobar)

El negocio elegido debe cumplir requisitos mínimos (no se aceptan negocios genéricos o inexistentes):

1. **Existencia real**: comercio/emprendimiento local (Jujuy) con al menos una red social activa o local físico.
2. **Complejidad del catálogo**: permitir al menos 3 categorías de productos.
3. **Variabilidad de atributos**: productos con atributos que justifiquen base de datos (talle, color, stock, precio, descripción, imagen).
4. **Potencial de gestión (Admin)**: procesos que se digitalicen vía CRUD (ej.: actualizar precios, stock, baja de productos discontinuados).
5. **Disponibilidad de activos**: capacidad de conseguir/fotografiar al menos 10-15 productos reales y el logo del comercio.

## Configuración del repositorio y README (obligatorio)

El `README.md` es la cara del proyecto y debe incluir (como “panel de control” del equipo para docentes):

1. **Nombre del equipo**
2. **Integrantes**: nombre, apellido y link a GitHub
3. **Ficha del cliente**:
   - nombre del comercio
   - rubro
   - links a redes/mapeo al local
   - breve justificación de por qué es viable un CRUD
4. **Acceso a herramientas**:
   - link directo al tablero de `GitHub Projects`

## Entregables formales del Sprint 0

1. Aceptación del repo en **GitHub Classroom** (todo el equipo dentro del repo oficial).
2. `README.md` inicializado con la información anterior en la rama `main`.
3. Tablero de proyecto creado con columnas: `Backlog`, `To Do`, `In Progress`, `Done`.
4. **Milestones**: cargar fechas de cierre de los 4 sprints siguientes.
5. (Recomendado) Instalar `git hooks` para **Conventional Commits**:
   - ejecutar `node scripts/install-git-hooks.mjs`

## Sprint Review en video (obligatorio)

Además de los entregables técnicos, cada uno de los 8 equipos debe entregar un video corto de Sprint Review.

- Duración sugerida: 4 a 6 minutos.
- Formato: link público (Drive, YouTube no listado o Loom) en el `README.md` del repo y/o en el documento de entrega del sprint.
- Participación: deben hablar todos los integrantes.

Contenido mínimo (Sprint 0):

1. Presentación del equipo y asignación de roles del sprint:
   - quién actuó como Product Owner (PO)
   - quién actuó como Scrum Master (SM)
   - quiénes asumieron tareas de desarrollo
2. Qué hizo cada integrante para completar el relevamiento.
3. Qué salió bien y debería mantenerse para el Sprint 1.
4. Qué salió mal o costó más de lo esperado.
5. Qué acciones de mejora concretas aplicarán en el próximo sprint.
6. Evidencia breve del tablero y acuerdos iniciales (issues, columnas, milestones).

Recursos comunes:

- Plantilla sugerida: **[../sprint-review/sprint-review-template.md](../sprint-review/sprint-review-template.md)**
- Rubrica de evaluacion: **[../sprint-review/sprint-review-rubrica.md](../sprint-review/sprint-review-rubrica.md)**
- Checklist estudiantes: **[../sprint-review/sprint-review-checklist-estudiantes.md](../sprint-review/sprint-review-checklist-estudiantes.md)**
- Checklist docentes: **[../sprint-review/sprint-review-checklist-docentes.md](../sprint-review/sprint-review-checklist-docentes.md)**

