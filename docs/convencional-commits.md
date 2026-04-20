# Conventional Commits (estándar)

Para mantener un historial limpio y fácil de revisar, se exige usar **Conventional Commits**.

## Formato requerido

`type(scope)!: subject`

Nota: en este proyecto el `scope` es obligatorio y debe ser un identificador en minúsculas con `a-z`, `0-9` y `-` (por ejemplo: `ui-home`, `api-products`, `backend-setup`).

Ejemplos válidos:
- `feat(ui-home): agrega banner principal`
- `fix(api-products): corrige validación de price`
- `chore(initial-setup): agrega configuración del proyecto`
- `docs(sprint-2): actualiza api-contract`
- `refactor(auth): separa lógica en módulos`

## Tipos permitidos

- `feat`, `fix`, `chore`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `revert`

## Instalación de hooks (obligatorio recomendado)

Luego de clonar el repo:
```bash
node scripts/install-git-hooks.mjs
```

Con eso, el hook `commit-msg` valida el formato del mensaje.

Adicionalmente, en cada PR se ejecuta un chequeo en GitHub Actions (`.github/workflows/conventional-commits.yml`) para bloquear commits que no cumplan el estándar.

## Si el hook rechaza tu commit

Reescribí el mensaje del commit con el formato correcto y volvé a intentar.

