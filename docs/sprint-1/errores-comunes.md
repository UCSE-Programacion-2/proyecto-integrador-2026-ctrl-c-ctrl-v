# Errores comunes — Sprint 1 (Wireframes, Figma y/o maquetado estático)

## No pueden ver el archivo de Figma o queda desactualizado

**Causas:** link compartido mal configurado, no es “Anyone with the link”, o trabajan sobre duplicados distintos.

**Solución:** un solo archivo fuente, permisos de lectura (y edición solo para el equipo), y el link en el README o en `docs/sprint-1/`.

## CSS o JS no cargan (página “sin estilo” o scripts rotos)

**Síntomas:** fondo blanco, estilos no aplican, consola con `404` al pedir `.css` o `.js`.

**Causas típicas:**

- Rutas relativas mal armadas (subir/bajar carpetas con `../` incorrecto).
- Nombre o carpeta del asset distinto al que referencia el HTML.

**Solución:** abrir DevTools → pestaña **Network**, recargar, ver qué URL falla y corregir la ruta en el `<link>` o `<script>`.

## Enlaces entre páginas llevan a 404

**Causas:** ruta del `href` no coincide con la ubicación real del `.html`.

**Solución:** revisar desde qué carpeta está cada página y usar rutas relativas consistentes (o una base común acordada por el equipo).

## Deploy estático (GitHub Pages / Vercel) muestra sitio vacío o viejo

**Causas:**

- Carpeta de publicación equivocada (por ejemplo `dist` vs raíz del front).
- Build o rama desde la que despliega no es la que tiene los últimos merges.

**Solución:** confirmar en la configuración del deploy qué rama y qué directorio sirve; hacer un merge a esa rama y redeploy.

## “Merge blocked” o no pueden integrar a `main`

**Causas:** branch protection: sin PR, sin reviews, o intento de push directo a `main`.

**Solución:** siempre ramas + PR con aprobaciones según regla de cursada.
