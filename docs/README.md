# Documentación del Proyecto

Este directorio organiza la documentación del proyecto por sprints.

## Qué tenés que completar

1. **Sprint 0**: relevamiento del local y materiales base.
2. **Sprint 1**: wireframes y trabajo previo en Figma (estructura y pantallas).
3. **Sprint 2**: backend core (Node.js, Express, MongoDB/Mongoose) y API REST.
4. **Sprint 3**: integración Frontend-Backend en JavaScript vanilla (Fetch API) y CORS.
5. **Sprint 4**: modernización a React (SPA con Router) y deploy + Demo Day.

## Estructura sugerida

- `sprint-0/`: relevamiento, fotos y logo.
- `sprint-1/`: wireframes y recursos de diseño (Figma).
- `sprint-2/`: endpoints, modelos, pruebas con Postman y entregables del backend.
- `sprint-3/`: consumo de API con Fetch, CRUD admin, carrito y evidencias de integración.
- `sprint-4/`: SPA con React, rutas protegidas, deploy y evidencias para Demo Day.

## Reglas simples

- Guardá archivos nombrados de forma clara (ej.: `foto-local-01.jpg`).
- Si usás imágenes, evitá archivos gigantes (mejor compresión moderada).
- Si usás documentos (PDF/Word/Docs), agregá el link o exportá el archivo dentro del sprint.
- Cada sprint debería tener un `README.md` de referencia (ya está creado) y un **resumen** de lo hecho (por ejemplo `reporte.md` o `resumen.md`).

## Documentos “anti-errores” (prioridad por sprint)

Para no saturar de lectura al inicio, lo específico de cada etapa está dentro de la carpeta del sprint:

- **Sprint 2**: `sprint-2/api-contract.md` — contrato recomendado de endpoints y formato de errores (útil también en Sprint 3/4 para integración).
- **Sprint 4**: `sprint-4/deploy-checklist.md` — checklist antes de publicar frontend y backend.

Documentos generales (útiles en varios sprints):

- `como-ejecutar.md`: quickstart para correr backend y front.
- `errores-comunes.md`: índice con enlaces a **errores típicos por sprint** (`sprint-N/errores-comunes.md`).
- `convencional-commits.md`: formato de commits exigido y cómo instalar hooks.

