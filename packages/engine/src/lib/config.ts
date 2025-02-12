import { readFile } from "node:fs/promises"
import { type Config, configSchema } from "#lib/schema"

export const readConfig = async (
  configPath = "./examples/schema.json",
): Promise<Config> => {
  const configStr = await readFile(configPath, "utf-8")
  const config = JSON.parse(configStr)
  return configSchema.parse(config)
}
