# Decisiones de UI — Sprint 1

## Paleta de colores

Diseño minimalista con tonos neutros que dan protagonismo a los productos y evocan calidez artesanal.

| Variable CSS | Valor | Uso |
|---|---|---|
| `--color-primario` | `#1a1814` | Navbar, botones principales, texto de acción |
| `--color-primario-claro` | `#3a3632` | Hover de elementos primarios |
| `--color-primario-oscuro` | `#0d0c0a` | Footer, textos muy oscuros |
| `--color-fondo` | `#faf8f5` | Fondo general, navbar, cards |
| `--color-fondo-alt` | `#f3f0eb` | Fondo de imágenes placeholder, resúmenes |
| `--color-texto` | `#1a1814` | Texto principal |
| `--color-texto-suave` | `#8a8480` | Labels, descripciones, textos secundarios |
| `--color-borde` | `#e8e4de` | Bordes de separación, inputs, líneas |
| `--color-borde-suave` | `#f0ece6` | Separadores internos en listas |
| `--color-error` | `#c0392b` | Mensajes de error, botón eliminar |
| `--color-exito` | `#27ae60` | Stock disponible |

**Justificación:** la paleta neutra crema-negro elimina el ruido visual y deja que las fotos de los productos sean el foco. La decisión de evitar colores de acento fuertes (antes dorado `#c9a96e`) responde a que la tienda tiene productos con muchos colores propios; un acento llamativo compite con el catálogo.

---

## Tipografías

| Variable CSS | Fuente | Uso |
|---|---|---|
| `--fuente-titulo` | DM Sans (Google Fonts, weight 300/400/500) | Títulos, nombres de producto, precios |
| `--fuente-cuerpo` | DM Sans (Google Fonts, weight 300/400/500) | Párrafos, labels, botones, formularios |

**Justificación:** una única familia tipográfica (DM Sans) simplifica la jerarquía visual. La diferenciación entre títulos y cuerpo se logra con tamaño, peso y letter-spacing en lugar de cambiar de familia. Esto es más limpio que la combinación Playfair Display + Inter del diseño inicial.

---

## Componentes principales

### Navbar
- Fondo crema (`--color-fondo`), sticky en el top.
- Logo: imagen redonda pequeña (32px) + nombre en uppercase espaciado.
- Links en uppercase 11px con letter-spacing, borde inferior al estar activos.
- Íconos de búsqueda y carrito en negro.
- Menú hamburguesa en mobile (3 líneas de 1px, sin color de fondo).

### Footer
- Fondo casi negro (`#1a1814`), texto blanco tenue.
- 4 columnas en desktop, 2 en tablet, 1 en mobile.
- Títulos en uppercase con letter-spacing.

### Tarjeta de producto
- Sin sombra ni borde — separadas por grilla de 1px entre cards.
- Imagen con aspect-ratio 3:4, fondo crema alt.
- Leve zoom en hover (scale 1.04).
- Nombre en 13px regular, precio en 13px regular.
- Sin botón visible hasta hacer hover (en sprint futuro).

### Botones
- `border-radius: 0` — todos rectangulares.
- `.boton-primario`: negro sólido, texto crema.
- `.boton-secundario`: transparente, borde crema.
- `.boton-acento`: transparente, borde negro (igual al secundario en este diseño).
- Font-size 11px, uppercase, letter-spacing 0.09em.

### Filtros (catálogo)
- Sin card contenedora — los filtros flotan sobre el fondo.
- Separados por líneas de 1px entre grupos.
- Checkboxes con `accent-color: #1a1814`.

### Formulario (checkout)
- Sin bordes redondeados en inputs.
- Borde que cambia a negro en foco.
- Labels en uppercase 11px.

### Modal (admin)
- Overlay oscuro `rgba(26, 24, 20, 0.6)`.
- Panel sin border-radius, borde fino `1px solid --color-borde`.
- Título en uppercase.

---

## Reglas de espaciado

Sistema de 8 puntos: `4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px`.

- Padding de página: `var(--espacio-8)` (32px) horizontal.
- Padding de sección hero: `var(--espacio-16)` (64px) arriba.
- Gap entre cards: `1px` (borde de grilla).
- Ancho máximo del contenido: `1200px`.

---

## Responsive (breakpoints)

| Breakpoint | Cambio principal |
|---|---|
| < 640px (mobile) | 1 columna, navbar colapsada, franja info en 1 col |
| 640px–767px (tablet chico) | 2 columnas en grillas |
| 768px–1023px (tablet) | Sidebar de filtros visible, layout detalle 2 col |
| ≥ 1024px (desktop) | 4 cols en destacados, 3 en catálogo, sidebar en carrito/checkout |

---

## Estados de carga y error

> Sprint 1 es UI estática. Los estados de loading/error se implementan en Sprint 3 con fetch a la API.
> Se reservaron clases `.estado-cargando` y `.estado-error` en `base.css`.
