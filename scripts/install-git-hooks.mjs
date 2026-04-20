import fs from 'node:fs/promises';
import path from 'node:path';

const repoRoot = process.cwd();
const githooksDir = path.join(repoRoot, '.githooks');
const targetHooksDir = path.join(repoRoot, '.git', 'hooks');

async function main() {
  // Aseguramos existencia del directorio destino
  await fs.mkdir(targetHooksDir, { recursive: true });

  const entries = await fs.readdir(githooksDir, { withFileTypes: true });
  const hookFiles = entries.filter((e) => e.isFile()).map((e) => e.name);

  if (hookFiles.length === 0) {
    console.warn('No se encontraron hooks en `.githooks/`. No se instaló nada.');
    return;
  }

  for (const hookName of hookFiles) {
    const src = path.join(githooksDir, hookName);
    const dest = path.join(targetHooksDir, hookName);

    await fs.copyFile(src, dest);
    // Asegura que el hook se pueda ejecutar (especialmente importante en Windows)
    await fs.chmod(dest, 0o755);
  }

  console.log(`Hooks instalados (${hookFiles.length}) en: ${targetHooksDir}`);
}

main().catch((err) => {
  console.error('Error instalando git hooks:', err);
  process.exit(1);
});

