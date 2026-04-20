# Checklist de Deploy (Sprint 4)

Vive en `docs/sprint-4/` para que lo abran cuando lleguen al deploy; no hace falta leerlo antes.

Este checklist reduce los fallos típicos al publicar (frontend React + backend Express).

## Requisitos previos

- Backend y Frontend funcionan en local.
- Ya tienen definida la URL base del backend que consumirá el frontend.
- No usan `localhost` hardcodeado para producción.

## Backend (API) - antes de publicar

1. Variables de entorno
   - Crear `.env` en el ambiente de despliegue con los mismos nombres que su `.env.example`.
   - Verificar `PORT` y `MONGODB_URI`.

2. CORS
   - Permitir el origen del frontend desplegado (dominio público).
   - Revisar que no estén bloqueando preflight (`OPTIONS`).

3. Rutas y base URL
   - Confirmar que las rutas terminan en `/api/...` (o el prefijo que usen) y que el frontend consume el mismo prefijo.

4. Logs
   - Guardar errores de servidor para corregir 500/timeout.

## Frontend React (Vite) - antes de publicar

1. Variables de entorno
   - Configurar la URL del backend con una variable tipo:
     - `VITE_API_URL=https://tu-backend...`
   - Asegurarse de que el build usa esa variable.

2. Mixed Content (HTTP/HTTPS)
   - En producción, el frontend HTTPS no debe llamar endpoints HTTP.
   - Usar HTTPS en backend si es posible.

3. Rutas y Router
   - Confirmar que React Router resuelve 404 correctamente (no dejar rutas “rotas”).
   - En Netlify/Vercel, configurar rewrite si es necesario (SPA).

## Evidencias para Demo Day

- Link público del frontend.
- Link público o modo de acceso a la API.
- Video de respaldo navegando el sitio.
- En el Demo: crear usuario, buscar producto, agregar al carrito, simular compra, mostrar persistencia.

