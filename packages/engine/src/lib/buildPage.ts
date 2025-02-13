import { build } from "astro"

export type BuildPageConfig = {
  pageConfigPath?: string
  exportPath?: string
}

export const buildPage = async (config?: BuildPageConfig) => {
  if (config?.pageConfigPath) {
    process.env.LYGEM_CONFIG_PATH = config?.pageConfigPath
  }
  await build({
    outDir: config?.exportPath,
  })
}
