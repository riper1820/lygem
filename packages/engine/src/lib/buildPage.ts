import { dirname, resolve } from "node:path"
import { cwd } from "node:process"
import { fileURLToPath } from "node:url"
import { build } from "astro"

export type BuildPageConfig = {
  pageConfigPath?: string
  exportPath?: string
}

export const buildPage = async (config?: BuildPageConfig) => {
  if (config?.pageConfigPath) {
    process.env.LYGEM_CONFIG_PATH = config?.pageConfigPath
  }
  const distPath = dirname(fileURLToPath(import.meta.url))
  const packagePath = resolve(distPath, "..")
  const outDir = resolve(cwd(), config?.exportPath ?? "dist")
  await build({
    root: packagePath,
    outDir: outDir,
  })
}
