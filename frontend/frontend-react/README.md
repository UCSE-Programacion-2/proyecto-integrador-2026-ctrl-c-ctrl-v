# Frontend React

## Objetivo
Implementar el mismo producto que en `frontend-vanilla`, pero con React, manteniendo el mismo contrato con el backend.

## Sprint cubierto

- `docs/sprint-4/`: SPA con React (Vite) + React Router DOM + rutas protegidas + deploy + Demo Day.

## Consigna (React)

- Consumir la misma API del backend (mismos endpoints).
- Implementar los mismos flujos principales (pantallas y operaciones).
- Comportamiento equivalente en:
  - loading
  - errores del backend
  - estados vacíos (sin datos)

## Estructura sugerida

Orientativa (adapten al template que usen, por ejemplo Vite):

- `src/`
  - `main.jsx`
  - `App.jsx` (rutas/navegación)
  - `api/` o `services/` (cliente para consumir endpoints)
  - `pages/` (pantallas)
  - `components/` (componentes reutilizables)
  - `styles/` (estilos)
  - `utils/` (helpers)

## Configuración

Documentá cómo setear la URL del backend:

- ejemplo: `VITE_API_URL` (si usan Vite)
- o una constante en `src/config.js`

## Ejecución

En este README tenés que incluir:

1. `npm install`
2. `npm run dev` (o comando equivalente)
3. Variables necesarias (si aplica)

## Checklist

- [ ] La UI refleja el estado de la API (loading/error/empty).
- [ ] La navegación cubre el flujo completo.
- [ ] Se mantiene paridad con `frontend-vanilla` (mismo comportamiento funcional).

## Criterios clave (según el enunciado)

- React Router DOM (SPA sin recargas al navegar).
- Componentización (Navbar, ProductCard, Footer, etc.).
- Rutas protegidas para admin (solo si el usuario tiene rol).

