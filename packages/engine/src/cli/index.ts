#!/usr/bin/env node

import { build } from "astro"
import { program } from "commander"

program.name("lygem-engine").description("Lygem Engine CLI").version("0.0.1")

program
  .command("build")
  .description("Build files")
  .action(async () => {
    await build({})
  })

program.parse()
