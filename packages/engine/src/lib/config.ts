import { readFile } from "node:fs/promises"
import { type PageConfig, pageConfigSchema } from "#lib/schema"

export const readConfig = async (configPath?: string): Promise<PageConfig> => {
  const defaultConfigPath = "./examples/schema.json"
  const configStr = await readFile(configPath ?? defaultConfigPath, "utf-8")
  const config = JSON.parse(configStr)
  return pageConfigSchema.parse(config)
}
