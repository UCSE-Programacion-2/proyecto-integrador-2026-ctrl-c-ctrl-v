# Flujo de navegación — Prendas Gauchas Demetria

## Mapa general

```
                        ┌─────────────┐
                        │  index.html │  ← punto de entrada
                        │    HOME     │
                        └──────┬──────┘
                               │
              ┌────────────────┼────────────────┐
              │                │                │
              ▼                ▼                ▼
     [Ver catálogo]    [Categoría X]    [Ver detalle]
              │                │                │
              ▼                │                │
    ┌─────────────────┐        │                │
    │  catalogo.html  │◄───────┘                │
    │    CATÁLOGO     │                         │
    └────────┬────────┘                         │
             │                                  │
             │ [Ver detalle]                    │
             ▼                                  ▼
    ┌─────────────────┐◄────────────────────────┘
    │  detalle.html   │
    │  DETALLE PROD.  │
    └────────┬────────┘
             │
             │ [Agregar al carrito]
             │ [Comprar ahora] ─────────────────────────┐
             ▼                                          │
    ┌─────────────────┐                                 │
    │  carrito.html   │                                 │
    │    CARRITO      │                                 │
    └────────┬────────┘                                 │
             │                                          │
             │ [Proceder al checkout]                   │
             ▼                                          ▼
    ┌─────────────────────────────────────────────────────┐
    │                   checkout.html                     │
    │  Paso 1: Carrito → Paso 2: Envío → Paso 3: Pago    │
    │                → Paso 4: Confirmación               │
    └─────────────────────────────────────────────────────┘
```

## Flujo del cliente (compra estándar)

1. Entra a **Home** (`index.html`)
2. Navega a **Catálogo** (`catalogo.html`) por la navbar o los botones de categoría
3. Filtra productos por categoría, precio o talle
4. Hace clic en "Ver detalle" → **Detalle** (`detalle.html`)
5. Selecciona talle y color, ajusta cantidad
6. Hace clic en "Agregar al carrito" → **Carrito** (`carrito.html`)
7. Revisa productos y totales
8. Hace clic en "Proceder al checkout" → **Checkout** (`checkout.html`)
9. Completa datos de envío → confirmación

## Flujo del administrador (gestión de productos)

1. Accede directamente a **Admin** (`admin.html`)
2. Ve la tabla de productos con stock, precio y categoría
3. Hace clic en "+ Nuevo producto" → se abre el **modal de creación**
4. Completa nombre, descripción, precio, stock, categoría e imagen
5. Hace clic en "Guardar producto" → el producto aparece en la tabla
6. Puede **Editar** un producto existente (abre el mismo modal prellenado)
7. Puede **Eliminar** un producto (acción irreversible — en Sprint 3 tendrá confirmación)

## Pantalla de error

- Cualquier URL inválida o rota → `404.html` con botones para volver al inicio o al catálogo.

## Navegación persistente (navbar)

Desde cualquier página se puede navegar a:
- **Inicio** → `index.html`
- **Catálogo** → `catalogo.html`
- **Carrito** → `carrito.html` (con badge contador de ítems)

En mobile, la navbar colapsa y se expande con el botón hamburguesa ☰.
