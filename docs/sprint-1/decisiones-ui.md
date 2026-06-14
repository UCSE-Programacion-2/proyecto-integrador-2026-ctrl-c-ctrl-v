# Decisiones de UI — Sprint 1

## Paleta de colores

Basada en la identidad visual del comercio: tonos tierra que evocan la tradición gaucha y el ambiente rural jujeño.

| Variable CSS | Valor | Uso |
|---|---|---|
| `--color-primario` | `#5c3d1e` | Navbar, títulos, botones principales, headers de tablas |
| `--color-primario-claro` | `#7a5230` | Hover de elementos primarios |
| `--color-primario-oscuro` | `#3e2910` | Footer, hover de links |
| `--color-acento` | `#c9a96e` | Logo, badges, botones de acento, franja informativa |
| `--color-acento-claro` | `#dfc08e` | Hover del acento |
| `--color-fondo` | `#f5f0e8` | Fondo general de la página, inputs |
| `--color-fondo-tarjeta` | `#ffffff` | Tarjetas de producto, formularios, modales |
| `--color-texto` | `#1a1a1a` | Texto principal |
| `--color-texto-suave` | `#555555` | Descripciones, labels, textos secundarios |
| `--color-borde` | `#ddd4c2` | Bordes de tarjetas, separadores, inputs |
| `--color-error` | `#c0392b` | Mensajes de error, botón eliminar |
| `--color-exito` | `#27ae60` | Stock disponible, precio de envío gratuito |

**Justificación:** los colores marrones y dorados son consistentes con la estética gaucha y la imagen de Instagram/Facebook del comercio. El fondo crema evita el blanco puro que se siente demasiado moderno para el rubro.

---

## Tipografías

| Variable CSS | Fuente | Uso |
|---|---|---|
| `--fuente-titulo` | Playfair Display (Google Fonts) | H1, H2, H3, precios, logo, nombres de producto |
| `--fuente-cuerpo` | Inter (Google Fonts) | Párrafos, labels, botones, descripciones |

**Justificación:** Playfair Display tiene un carácter clásico y elegante que refuerza la tradición. Inter es moderna y legible en pantalla, ideal para textos funcionales.

---

## Componentes principales

### Navbar
- Fondo marrón oscuro (`--color-primario`), sticky en el top.
- Logo con imagen redonda + nombre del comercio + subtítulo.
- Links de navegación con borde inferior dorado cuando están activos.
- Ícono de carrito con badge contador.
- Menú hamburguesa en mobile que despliega un panel vertical.

### Footer
- 4 columnas en desktop, 2 en tablet, 1 en mobile.
- Secciones: descripción del comercio, navegación, categorías, contacto.
- Fondo marrón muy oscuro (`--color-primario-oscuro`).

### Tarjeta de producto
- Imagen con efecto zoom en hover.
- Badge de etiqueta ("Destacado", "Nuevo") sobre la imagen.
- Nombre en Playfair Display, descripción en Inter, precio destacado.
- Botón "Ver detalle" en el pie de la tarjeta.

### Botones
- `.boton-primario`: marrón sólido, texto blanco — acciones principales.
- `.boton-secundario`: borde marrón, fondo transparente — acciones secundarias.
- `.boton-acento`: dorado/beige — acciones de conversión ("Comprar ahora").

### Filtros (catálogo)
- Panel lateral de 260px en desktop, colapsado en mobile.
- Checkboxes con `accent-color: var(--color-primario)`.
- Rango de precios con dos inputs numéricos.

### Formulario (checkout)
- Grid de 2 columnas en desktop, 1 en mobile.
- Inputs con borde que cambia a marrón en foco.
- Indicador de pasos numerados en el encabezado.

### Modal (admin)
- Overlay semitransparente sobre toda la página.
- Panel centrado de 560px máx con formulario de producto.
- Cierre por botón ✕, por clic en el fondo, o por botón "Cancelar".

---

## Reglas de espaciado

Sistema de 8 puntos: `4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px`.

- Padding de sección: `var(--espacio-12)` (48px) arriba y abajo.
- Gap entre tarjetas: `var(--espacio-6)` (24px).
- Padding de contenedor: `var(--espacio-4)` (16px) horizontal.
- Ancho máximo del contenido: `1200px`.

---

## Responsive (breakpoints)

| Breakpoint | Cambio principal |
|---|---|
| < 640px (mobile) | 1 columna, navbar colapsada, tablas con scroll horizontal |
| 640px–767px (tablet chico) | 2 columnas en grillas de productos y footer |
| 768px–1023px (tablet) | Filtros aparecen en sidebar, 2 columnas en layout detalle |
| ≥ 1024px (desktop) | 3–4 columnas en catálogo, sidebar de resumen en carrito/checkout |

---

## Estados de carga y error

> Sprint 1 es UI estática. Los estados de loading/error se implementan en Sprint 3 con fetch a la API.
> Se reservaron clases CSS `.estado-cargando` y `.estado-error` en `base.css` para usarlas en Sprint 3.
