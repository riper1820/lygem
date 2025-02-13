/// <reference types="vitest/config" />
import { getViteConfig } from "astro/config"

export default getViteConfig({
  test: {
    passWithNoTests: true,
    coverage: {
      reporter: ["json-summary", "json", "text"],
      reportOnFailure: true,
      include: ["src/**/*.ts", "src/**/*.tsx"],
    },
  },
})
