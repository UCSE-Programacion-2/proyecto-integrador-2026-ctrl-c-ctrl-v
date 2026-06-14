# Wireframes — Sprint 1

En este sprint los wireframes se implementaron directamente como código HTML/CSS funcional
en `frontend/frontend-vanilla/`. Las capturas a continuación representan cada pantalla.

## Pantallas implementadas

### 1. Home (`index.html`)
- Navbar con logo, links y carrito
- Banner principal con título y botones CTA
- Franja informativa (calidad, envíos, pagos, atención)
- Sección de categorías (5 tarjetas: bombachas, camisas, sombreros, botas, accesorios)
- Grilla de 4 productos destacados con precio y botón "Ver detalle"
- Footer con 4 columnas (descripción, navegación, categorías, contacto)

### 2. Catálogo (`catalogo.html`)
- Título + contador de resultados
- Sidebar de filtros: categoría (checkboxes), rango de precios, talle
- Barra superior con selector de orden
- Grilla responsive de 6 productos (1 col mobile → 2 tablet → 3 desktop)

### 3. Detalle de producto (`detalle.html`)
- Breadcrumb de navegación
- Galería: imagen principal + 3 miniaturas
- Información: categoría (badge), nombre (H1), precio
- Descripción del producto
- Selector de talle (botones toggle)
- Selector de color (botones toggle)
- Control de cantidad (−/+)
- Botones "Agregar al carrito" + "Comprar ahora"
- Tabla de especificaciones (material, origen, talles, colores, stock)

### 4. Carrito (`carrito.html`)
- Tabla con columnas: Producto (imagen + nombre + variante), Precio, Cantidad (−/+), Subtotal, Eliminar
- Scroll horizontal en mobile para la tabla
- 3 productos de ejemplo
- Panel lateral de resumen: subtotal, envío, total
- Botón "Proceder al checkout"

### 5. Checkout (`checkout.html`)
- Indicador de 4 pasos: Carrito ✓ → Datos de envío (activo) → Pago → Confirmación
- Formulario en 2 columnas: Nombre, Apellido, Email, Teléfono
- Dirección: Calle, Ciudad, Provincia (select), CP, Piso/Depto
- Panel lateral con resumen del pedido (3 ítems + total)
- Botones "Volver al carrito" y "Continuar"

### 6. Página 404 (`404.html`)
- Número "404" gigante en color borde (decorativo)
- Título "Página no encontrada"
- Texto explicativo
- Botones "Ir al inicio" + "Ver catálogo"

### 7. Panel de administración (`admin.html`)
- Encabezado con título + botón "+ Nuevo producto"
- Tabla: Imagen, Producto (nombre + variante), Categoría, Precio, Stock (badge verde/rojo), Acciones
- Botones Editar (dorado) y Eliminar (rojo) por fila
- Modal de creación/edición: Nombre, Descripción, Precio, Stock (2 col), Categoría, URL imagen

## Capturas de pantalla

Las capturas fueron tomadas durante el desarrollo. Para ver las pantallas en vivo:

```
# instalar dependencias y levantar servidor local
cd frontend/frontend-vanilla
npx serve . -p 3000
```

Luego abrir `http://localhost:3000/index.html` en el navegador.
