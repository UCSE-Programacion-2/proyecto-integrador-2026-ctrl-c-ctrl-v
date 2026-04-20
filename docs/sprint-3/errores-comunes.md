# Errores comunes — Sprint 3 (Vanilla JS + Fetch + integración)

## 1) CORS blocked / preflight fallido

**Síntomas:** en consola del navegador: `CORS policy...` o falla de `OPTIONS`.

**Causas típicas:**

- El backend no habilitó `cors` para el origen del frontend (Live Server, otro puerto, etc.).
- Falta permitir el método HTTP usado o headers personalizados que envía el front.

**Solución:** configurar `cors` en Express para el origen del frontend en desarrollo; asegurar respuesta correcta a `OPTIONS`.

## 2) 404 Not Found en endpoints

**Síntomas:** `GET http://localhost:.../api/products/... 404`

**Causas típicas:**

- Ruta mal armada: el front usa `/api/...` pero el back expone otro prefijo o nombre.
- Error en `:id` (string vacío, ID inválido o ruta distinta a `/api/products/:id`).

**Solución:** comparar con [api-contract.md](../sprint-2/api-contract.md); loggear en el front la URL completa que arma el `fetch`.

## 3) 401 Unauthorized / 403 Forbidden

**Síntomas:** el backend responde `401` o `403` al login o en rutas protegidas.

**Causas típicas:**

- El front no envía credenciales o token como espera el back (header, body).
- El usuario no tiene rol `admin` para el CRUD del panel.

**Solución:** revisar cómo guardan sesión/token y que las peticiones al panel incluyan lo que pide el backend.

## 4) Network Error / `Failed to fetch` sin detalle

**Síntomas:** `TypeError: Failed to fetch` o “Network Error”.

**Causas típicas:**

- Base URL incorrecta (puertos distintos: front 5500 vs back 3000).
- Backend apagado.
- Mixed content (HTTPS en front llamando HTTP en API en producción).

**Solución:** verificar URL base y que el servidor esté levantado; en producción, mismo esquema `https` si aplica.
