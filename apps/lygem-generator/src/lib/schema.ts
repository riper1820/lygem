import { z } from "zod"

const metaConfigSchema = z.object({
  pageTitle: z.string().default("LyGem"),
})

const linkConfigSchema = z.object({
  href: z.string(),
  text: z.string(),
  iconSrc: z.string().nullish(),
})

export const configSchema = z.object({
  meta: metaConfigSchema,
  links: z.array(linkConfigSchema).nullish(),
})

export type Config = z.infer<typeof configSchema>
