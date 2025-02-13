// /// <reference types="vitest/config" />
// import { getViteConfig } from "astro/config"

// export default getViteConfig({
//   test: {
//     passWithNoTests: true,
//     coverage: {
//       reporter: ["json-summary", "json", "text"],
//       reportOnFailure: true,
//       include: ["src/**/*.ts", "src/**/*.tsx"],
//     },
//   },
// })

// somehow `import {build} from "astro"` doesn't work when using `getViteConfig`
import { defineConfig } from "vitest/config"
export default defineConfig({
  test: {
    passWithNoTests: true,
    coverage: {
      reporter: ["json-summary", "json", "text"],
      reportOnFailure: true,
      include: ["src/**/*.ts", "src/**/*.tsx"],
    },
    testTimeout: 10000,
  },
})
