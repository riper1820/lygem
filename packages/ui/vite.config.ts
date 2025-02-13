/// <reference types="vitest/config" />
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [tailwindcss(), react()],
  test: {
    environment: "happy-dom",
    passWithNoTests: true,
    coverage: {
      reporter: ["json-summary", "json", "text"],
      reportOnFailure: true,
      include: ["src/**/*.ts", "src/**/*.tsx"],
      exclude: ["src/**/*.stories.tsx", "src/index.ts"],
    },
  },
})
