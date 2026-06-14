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

## Sprints cubiertos

- `docs/sprint-1/`: Frontend estático (HTML/CSS) — vistas requeridas.
- `docs/sprint-3/`: Integración con backend usando JavaScript Vanilla + Fetch API.

## Linting y formato

```bash
npm install
npm run lint      # ESLint + Stylelint
npm run format    # Prettier
```
