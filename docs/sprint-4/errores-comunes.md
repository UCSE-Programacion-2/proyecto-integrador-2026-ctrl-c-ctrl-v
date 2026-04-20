# Errores comunes — Sprint 4 (React + deploy)

## 1) `import.meta.env.VITE_API_URL` es `undefined` en el cliente

**Causas:**

- Variable no definida en `.env` con prefijo `VITE_`.
- Cambiaste `.env` y no reiniciaste `npm run dev` / rebuild.

**Solución:** revisar [deploy-checklist.md](./deploy-checklist.md) y documentar en `.env.example` todas las variables.

## 2) SPA 404 al recargar una ruta en producción (React Router)

**Síntomas:** en producción, al recargar una ruta (ej. `/detalle/123`) el hosting devuelve 404.

**Solución:** configurar rewrite/redirect para SPA (Netlify `_redirects`, `vercel.json`, etc.) para que todas las rutas sirvan `index.html`.

## 3) CORS o bloqueos solo en producción

**Causas:**

- `cors` en el back solo permite `localhost`, no el dominio de Vercel/Netlify.
- URL del API en el front apunta aún a `localhost`.

**Solución:** actualizar lista de orígenes en el backend y variables de entorno del deploy con la URL pública del API.

## 4) Mixed content / fallos de red tras el deploy

**Síntomas:** el navegador bloquea llamadas o `Failed to fetch`.

**Causas:**

- Frontend en `https` llamando API en `http`.
- API mal desplegada o caída.

**Solución:** ambos extremos accesibles por `https` y URL del API correcta en variables de producción.

## 5) Build de Vercel/Netlify falla

**Causas típicas:**

- Script de build incorrecto o dependencias faltantes en `package.json`.
- Node version distinta a local.

**Solución:** revisar logs del deploy; fijar versión de Node si hace falta; correr `npm run build` en local antes de confiar en CI.
