# Prendas Gauchas Demetria — Frontend Estático

E-commerce de indumentaria tradicional gaucha para el trabajo integrador de Programación II — UCSE-DASS 2026.

## Integrantes

- Campos Matías
- Karen Martínez
- Marcos Garnica

## Estructura

```
frontend-vanilla/
├── index.html        # Home
├── catalogo.html     # Catálogo con filtros
├── detalle.html      # Detalle de producto
├── carrito.html      # Carrito de compras
├── checkout.html     # Checkout / datos de envío
├── 404.html          # Página no encontrada
├── admin.html        # Panel de administración
├── src/
│   ├── main.js
│   ├── components/   # Navbar, footer (incluidos en cada HTML)
│   └── styles/
│       └── variables.css
└── assets/           # Imágenes, logo
```

## Cómo correr el proyecto

Abrir `index.html` directamente en el navegador, o usar la extensión **Live Server** de VS Code.

## Links de entrega

| | Link |
|-|------|
| Deploy | https://ucse-programacion-2.github.io/proyecto-integrador-2026-ctrl-c-ctrl-v/ |
| Tablero | https://github.com/orgs/UCSE-Programacion-2/projects/27 |
| Figma | https://www.figma.com/design/4l2Ko6cpB30UnG8GJS7Bs3/sprint-1?node-id=1-2&t=Y2vHQTvAU1aIr50z-1 |
| Sprint Review video | https://drive.google.com/file/d/1ONKbuFxzg3AYN6iDn3F23iP8jjIZDngj/view?usp=sharing |

## Sprints cubiertos

- `docs/sprint-1/`: Frontend estático (HTML/CSS) — vistas requeridas.
- `docs/sprint-3/`: Integración con backend usando JavaScript Vanilla + Fetch API.

## Linting y formato

```bash
npm install
npm run lint      # ESLint + Stylelint
npm run format    # Prettier
```
