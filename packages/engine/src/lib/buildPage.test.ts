import { describe, it } from "vitest"
import { buildPage } from "#lib/buildPage"

describe("build function", () => {
  it("should build the page", async () => {
    await buildPage({
      exportPath: "./tmp",
    })
  })
})
