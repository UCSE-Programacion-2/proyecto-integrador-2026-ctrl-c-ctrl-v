# Errores comunes — Sprint 2 (Backend, Express, MongoDB)

## No conecta a MongoDB (Atlas u otro)

**Síntomas:** error al levantar el servidor o `MongoServerError` / timeout.

**Causas típicas:**

- `MONGODB_URI` mal copiada (usuario, contraseña, base de datos).
- En Atlas: IP no permitida (lista blanca): agregar `0.0.0.0/0` solo si la política del equipo lo permite, o la IP actual.
- Usuario sin permisos sobre la base.

**Solución:** probar la URI con herramienta externa; revisar `.env.example` y que el código cargue `dotenv` antes de conectar.

## `Cannot GET /api/...` o rutas no registradas

**Causas:**

- El `app.use('/api', ...)` no coincide con lo que prueban en Postman.
- Orden de middlewares: rutas definidas después de un `app.use` que captura todo.

**Solución:** trazar en código qué prefijo monta cada router; probar con la misma URL exacta (incluido `api`).

## Puerto en uso (`EADDRINUSE`)

**Solución:** cambiar `PORT` en `.env` o cerrar el proceso que usa ese puerto.

## Postman devuelve “Could not get response”

**Causas:** servidor apagado, URL equivocada (`http` vs `https`, puerto mal), o firewall local.

**Solución:** verificar que `npm run dev` (o script equivalente) esté corriendo y que la URL base coincida.

## Códigos HTTP “raros” o siempre 500

**Causas:** errores no manejados, validación que rompe antes de responder JSON consistente.

**Solución:** revisar logs del servidor; acordar formato de error con lo definido en [api-contract.md](./api-contract.md).
