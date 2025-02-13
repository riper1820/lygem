#!/usr/bin/env node

import { program } from "@commander-js/extra-typings"
import { buildPage } from "#lib/buildPage.js"

program.name("lygem-engine").description("Lygem Engine CLI").version("0.0.1")

program
  .command("build")
  .description("Build files")
  .option("-p, --page-config-path <path>", "Path to page config")
  .option("-e, --export-path <path>", "Path to export")
  .action(async (options) => {
    await buildPage({
      pageConfigPath: options.pageConfigPath,
      exportPath: options.exportPath,
    })
  })

program.parse()
