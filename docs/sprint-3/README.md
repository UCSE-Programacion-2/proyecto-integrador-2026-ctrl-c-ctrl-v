# Sprint 3 - Integración Frontend-Backend (JavaScript Vanilla + Fetch API)

## Objetivo
Conectar el frontend estático (Sprint 1) con el backend funcional (Sprint 2).

Reemplazar los datos “falsos” del HTML por datos reales traídos desde la Base de Datos usando:

- **JavaScript ES6+ nativo**
- **Fetch API**

## Reglas vigentes (metodología)

1. No se hacen commits directos a `main`.
2. Integran con Pull Request.
3. El PR requiere aprobación de 2 compañeros.
4. Sin link al Issue/Tarjeta en la descripción del PR: no se evalúa.

## Documentación de apoyo

- Contrato de API acordado en Sprint 2 (útil para nombres de rutas y formato de respuestas): **[../sprint-2/api-contract.md](../sprint-2/api-contract.md)**.
- Errores frecuentes de integración (CORS, 404, auth, red): **[errores-comunes.md](./errores-comunes.md)**.

## Requerimientos técnicos

### A. Consumo de API (Fetching)

1. **Listado de Productos**
   - Al cargar la página de inicio: hacer `fetch` (GET) para obtener productos y generar tarjetas HTML dinámicamente.
2. **Detalle de Producto**
   - Al clickear un producto: capturar el ID desde la URL (query param).
   - `fetch` a `/api/products/:id` y renderizar la información específica.

### B. Panel de Administración (CRUD Frontend)

1. Consumir la API para:
   - Crear producto (`POST`)
   - Actualizar producto (`PUT`/`PATCH`)
   - Eliminar producto (`DELETE`)
2. Gestionar respuestas y mostrar alertas/mensajes al usuario (ej. SweetAlert2 si usan alguna librería).

### C. Carrito de Compras

1. Implementar la lógica para:
   - agregar productos al carrito (array en JS)
   - calcular totales dinámicamente
   - eliminar ítems del carrito
2. Persistencia:
   - pueden usar `localStorage` para simplificar, o guardarlo en BD si su arquitectura lo permite.

### D. CORS (Alerta técnica)

Problema probable:
- si el Front consulta al Back desde otro puerto (LiveServer vs API), el navegador puede bloquear por CORS.

Solución:
- instalar/configurar la librería `cors` en el backend (Express) para permitir requests desde su dominio local.

## Backlog sugerido (tarjetas = ramas)

1. `chore/enable-cors`
   - El servidor acepta peticiones desde localhost
2. `feat/js-home-products`
   - El HTML de tarjetas se genera con datos de la API (forEach o equivalente)
3. `feat/js-product-detail`
   - La página lee el ID de la URL y muestra el producto correcto
4. `feat/js-auth-login`
   - Login: envía credenciales, recibe datos del usuario y guarda estado de sesión simple
   - Redirecciona al Home
5. `feat/js-auth-register`
   - Registro: crea usuario y muestra “Usuario creado con éxito”
6. `feat/js-navbar-state`
   - Navbar muestra opciones según si está logueado o no
7. `feat/js-cart-logic`
   - Carrito funcional: sumar, mostrar total y eliminar ítems
8. `feat/js-admin-crud`
   - Panel Admin: formularios envían `POST/PUT` y se actualiza la grilla borrando items con `DELETE`

## Entregable del Sprint 3

1. Link al repositorio (PRs cerrados y aprobados).
2. Link al tablero de GitHub Projects actualizado.
3. Video de demostración (Loom/Youtube/Drive - 5 min):
   - crear usuario
   - loguearse
   - navegar productos y agregarlos al carrito

## Sprint Review en video (obligatorio)

Cada uno de los 8 equipos debe entregar un video de Sprint Review como parte del sprint.

- Duración sugerida: 10 a 12 minutos.
- Formato: link público (Drive, YouTube no listado o Loom) incluido en la entrega.
- Participación: deben hablar todos los integrantes.

Contenido mínimo (Sprint 3):

1. Roles del sprint (PO, SM y dev team) y cómo sostuvieron el trabajo colaborativo.
2. Qué hizo cada integrante (frontend, integración, backend, pruebas, revisión de PRs).
3. Demo funcional de integración: flujo end-to-end de usuario real (registro/login/listado/detalle/carrito).
4. Principales incidentes técnicos (CORS, contratos, estados, errores HTTP) y cómo los resolvieron.
5. Qué se hizo bien y debe mantenerse en el Sprint 4.
6. Qué no funcionó y cómo impactó en tiempo/calidad.
7. Acciones de mejora para el sprint final (prioridades, deuda técnica, criterios de aceptación y pruebas).

Recursos comunes:

- Plantilla sugerida: **[../sprint-review/sprint-review-template.md](../sprint-review/sprint-review-template.md)**
- Rubrica de evaluacion: **[../sprint-review/sprint-review-rubrica.md](../sprint-review/sprint-review-rubrica.md)**
- Checklist estudiantes: **[../sprint-review/sprint-review-checklist-estudiantes.md](../sprint-review/sprint-review-checklist-estudiantes.md)**
- Checklist docentes: **[../sprint-review/sprint-review-checklist-docentes.md](../sprint-review/sprint-review-checklist-docentes.md)**
