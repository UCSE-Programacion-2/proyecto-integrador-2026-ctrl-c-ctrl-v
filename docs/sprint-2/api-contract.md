# API Contract (recomendado) - Proyecto Integrador

Documento pensado principalmente para el **Sprint 2** (backend); conviene mantenerlo actualizado también en integración (Sprint 3/4).

Este documento define un **contrato mínimo recomendado** para que el backend (Sprint 2) y el frontend (Sprint 3/4) integren sin desalinearse.

Si tu equipo decide cambiar nombres/rutas, deben actualizar el consumo en el frontend y dejarlo documentado.

## Autenticación y autorización

Si el equipo implementa login, se recomienda una solución simple para la cursada:

- validar credenciales en backend
- devolver datos básicos del usuario
- mantener el estado de sesión en frontend de forma simple (por ejemplo, con `localStorage`)

### Roles

Se recomienda:

- `admin`: puede crear/editar/borrar productos
- `user`: puede leer productos y gestionar su carrito (según implementación)

## Endpoints de Auth

### Registrar usuario

- `POST /api/auth/register`
- Body:
```json
{ "name": "Juan", "email": "juan@mail.com", "password": "123456" }
```
- Respuestas:
  - `201` si crea
  - `400` si datos inválidos

### Login

- `POST /api/auth/login`
- Body:
```json
{ "email": "juan@mail.com", "password": "123456" }
```
- Respuestas:
  - `200` con datos del usuario:
```json
{ "user": { "id": "....", "name": "Juan", "role": "admin|user" } }
```
  - `401` credenciales inválidas

## Endpoints de Productos (CRUD)

### Listar productos (con filtros simples)

- `GET /api/products`
- Query recomendada:
  - `?category=<categoria>` (opcional)
- Respuesta:
```json
{ "items": [ { "id": "....", "name": "Producto", "price": 100, "category": "....", "image": "...." } ] }
```

### Detalle de producto

- `GET /api/products/:id`
- Respuesta:
```json
{ "item": { "id": "....", "name": "Producto", "price": 100, "category": "....", "description": "..." } }
```

### Crear producto (admin)

- `POST /api/products`
- Body recomendado:
```json
{
  "name": "Producto",
  "price": 100,
  "category": "Categoria",
  "description": "Descripción",
  "image": "https://.../img.jpg",
  "attributes": { "color": "rojo", "talle": "M", "stock": 10 }
}
```
- Respuestas:
  - `201` creado
  - `401`/`403` si no está autorizado
  - `400` si validación falla

### Editar producto (admin)

- `PUT /api/products/:id` (o `PATCH`)
- Body: similar a `POST`
- Respuestas: `200`, `400`, `401/403`, `404`

### Borrar producto (admin)

- `DELETE /api/products/:id`
- Respuestas:
  - `200` si borró
  - `401/403` si no está autorizado
  - `404` si no existe

## Endpoints de Carrito

### Obtener carrito

- `GET /api/cart`
- Recomendación: el carrito puede ser temporal o persistido (según el equipo).
- Respuesta (ejemplo):
```json
{
  "items": [
    { "productId": "....", "quantity": 2, "price": 100, "subtotal": 200 }
  ],
  "total": 200
}
```

### Agregar ítem

- `POST /api/cart/items`
- Body:
```json
{ "productId": "....", "quantity": 1 }
```
- Respuestas: `200`/`201`, `400`, `401/403` si aplica

### Eliminar ítem

- `DELETE /api/cart/items/:productId`
- Respuestas: `200`, `400`, `404` si no existe

## Formato de errores (recomendado)

Para reducir “adivinanzas” en el frontend:

- `400/401/404/500` deben venir con un mensaje consistente, por ejemplo:
```json
{ "error": { "code": "BAD_REQUEST", "message": "Texto claro..." } }
```

## Regla de oro

Si el backend cambia un endpoint (ruta/método/body), el frontend debe actualizarse al mismo tiempo y el equipo debe documentarlo en el PR.

