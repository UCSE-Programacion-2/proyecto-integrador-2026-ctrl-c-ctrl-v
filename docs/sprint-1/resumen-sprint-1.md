# Resumen Sprint 1 — Prendas Gauchas Demetria

## Qué logramos

Construimos el esqueleto visual completo del e-commerce usando HTML5 semántico y CSS3 puro, sin frameworks. Las 7 vistas obligatorias (home, catálogo, detalle, carrito, checkout, 404 y panel admin) están implementadas y son responsive con un enfoque mobile-first. El diseño usa una paleta de colores tierra consistente con la identidad gaucha del comercio y tipografías que refuerzan el carácter clásico del negocio. La navegación entre páginas funciona completa mediante links relativos.

---

## 3 decisiones clave

### 1. Componentes navbar y footer en JavaScript puro (sin framework)
Dado que este sprint es HTML/CSS sin lógica compleja, usamos funciones JS mínimas (`renderNavbar()` y `renderFooter()`) para evitar duplicar 40 líneas de HTML en cada archivo. Esto no es lógica de negocio: es una conveniencia de mantenimiento que no afecta la naturaleza estática del sprint.

### 2. Paleta basada en la identidad visual real del comercio
En vez de usar colores genéricos, tomamos los tonos marrones y dorados del logo oficial (obtenido de las redes sociales del cliente) y los formalizamos como variables CSS. Así el maquetado ya refleja la marca real y facilita la transición al Sprint 4 (SPA).

### 3. Sistema de variables CSS centralizado (`variables.css`)
Toda la paleta, tipografías y espaciados están en un único archivo. Cualquier cambio de diseño (que el cliente pida ajustar un color o un tamaño) se hace en un solo lugar en lugar de buscar valores hardcodeados en 7 archivos CSS. Esto reduce el riesgo de inconsistencias a medida que el proyecto crece.

---

## 3 riesgos / cosas a resolver en Sprint 2

### 1. Las imágenes son todas el logo (placeholder)
Sprint 1 es UI estática y no tenemos acceso a fotos reales de los productos en formato digital optimizado. En Sprint 2 (backend) necesitamos definir cómo se van a servir las imágenes: si el cliente las sube, dónde se almacenan, y qué tamaños se necesitan para el catálogo vs el detalle.

### 2. El formulario de checkout no valida ni envía
El formulario tiene HTML5 básico (`required`, `type="email"`), pero sin integración a un backend aún no procesa ningún pedido real. En Sprint 3, cuando se conecte la API, hay que definir el flujo completo: ¿se crea una orden?, ¿se notifica al comercio?, ¿hay pasarela de pago?

### 3. El panel admin no tiene autenticación
Cualquiera que conozca la URL `/admin.html` puede acceder. En Sprint 2 hay que diseñar el sistema de login: si hay un solo admin (el dueño del comercio) o roles diferenciados, y cómo se protegen las rutas del backoffice.
