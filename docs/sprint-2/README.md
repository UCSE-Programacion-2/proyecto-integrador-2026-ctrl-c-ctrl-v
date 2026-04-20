# Sprint 2 - Backend Core (Node.js, Express & MongoDB)

## Objetivo
Construir el “cerebro” de la aplicación: desarrollar una **API REST** que responda con JSON a las peticiones del cliente (aunque el frontend todavía no esté conectado).

## Reglas vigentes (metodología)

Siguen vigentes las reglas del Sprint 1:

1. Repo configurado para **bloquear commits directos a `main`**.
2. Integrar código mediante **Pull Request**.
3. El PR requiere **aprobación de 2 compañeros**.
4. En la descripción del PR debe existir link al Issue/Tarjeta: sin eso, el trabajo no se evalúa.

## Requerimientos técnicos

### A. Estructura de proyecto (MVC en `/backend`)

Deben organizar su código en carpetas dentro de `/backend`:

1. `/config`: conexión a BD y variables de entorno
2. `/models`: esquemas de Mongoose (schemas)
3. `/controllers`: lógica de funciones
4. `/routes`: definición de endpoints
5. `/middlewares`: validaciones y seguridad

### B. Funcionalidades nucleares (API Endpoints)

La API debe exponer rutas para:

1. **Usuarios & Auth**
   - Registro de usuario
   - Login

2. **Productos (CRUD)**
   - Obtener listado (con filtros simples por categoría)
   - Obtener detalle por ID
   - Crear, editar y borrar producto
   - Ruta protegida / admin para operaciones de escritura (según su diseño)

3. **Carrito de Compras**
   - Agregar ítem al carrito
   - Eliminar ítem
   - Nota: el carrito puede guardarse en BD (si el usuario está logueado) o manejarse temporalmente

## Backlog sugerido (tarjetas = ramas)

Creen tarjetas en su tablero. Recordatorio: **1 tarjeta = 1 rama**.

1. `chore/backend-setup`
   - Servidor corre en puerto `3000/4000`
   - Responde “Hello World”
2. `feat/db-connection`
   - Conexión exitosa a MongoDB (Atlas o local)
   - `.env` configurado (y no subido)
3. `feat/model-user`
   - Schema definido con validaciones (ej.: email único, password)
4. `feat/api-products`
   - `GET`, `POST`, `PUT`, `DELETE` /api/products funcionan con JSON
5. `chore/seed-data`
   - Script para cargar 10 productos de prueba automáticamente

## Documentación de apoyo (este sprint)

- **[api-contract.md](./api-contract.md)**: contrato mínimo recomendado de rutas, respuestas JSON y errores. Sirve para alinear el equipo antes de integrar el frontend (Sprint 3 y 4).
- **[errores-comunes.md](./errores-comunes.md)**: diagnóstico rápido (MongoDB, rutas, Postman, puertos).

## Herramientas de prueba (obligatorio)

Como aún no conectarán el backend con el frontend (eso va en Sprint 3):

- Deben probar la API con Postman, Rest Client o Thunder Client.
- No basta con que “funcione”: verifiquen también **códigos de estado HTTP correctos**:
  - `200 OK`, `201 Created`, `400 Bad Request`, `401 Unauthorized`, `404 Not Found`, etc.

## Entregable del Sprint 2

El documento de entrega debe incluir:

1. Link al repositorio (con PRs del sprint cerrados).
2. Link al tablero de GitHub Projects actualizado.
3. Archivo de colección de Postman/Thunder Client exportado (`.json`) para probar endpoints.
4. Archivo `.env.example` (no suban credenciales reales).

## Sprint Review en video (obligatorio)

Cada uno de los 8 equipos debe entregar un video de Sprint Review como parte de la entrega del sprint.

- Duración sugerida: 8 a 10 minutos.
- Formato: link público (Drive, YouTube no listado o Loom) incluido en la entrega.
- Participación: deben hablar todos los integrantes.

Contenido mínimo (Sprint 2):

1. Roles del sprint (PO, SM y dev team) y cómo se gestionó el trabajo.
2. Qué hizo cada integrante con evidencia concreta (issues, ramas, PRs y endpoints desarrollados).
3. Demo breve de la API: al menos 3 endpoints funcionando con códigos HTTP correctos.
4. Qué se planificó vs qué se completó (alcance comprometido y alcance real).
5. Qué salió bien y conviene estandarizar para el equipo.
6. Qué salió mal (modelado, validaciones, integración, tiempos) y causa principal.
7. Plan de mejora para Sprint 3 con acciones medibles (ej.: definición de contratos, DoD, revisión técnica).

Recursos comunes:

- Plantilla sugerida: **[../sprint-review/sprint-review-template.md](../sprint-review/sprint-review-template.md)**
- Rubrica de evaluacion: **[../sprint-review/sprint-review-rubrica.md](../sprint-review/sprint-review-rubrica.md)**
- Checklist estudiantes: **[../sprint-review/sprint-review-checklist-estudiantes.md](../sprint-review/sprint-review-checklist-estudiantes.md)**
- Checklist docentes: **[../sprint-review/sprint-review-checklist-docentes.md](../sprint-review/sprint-review-checklist-docentes.md)**

