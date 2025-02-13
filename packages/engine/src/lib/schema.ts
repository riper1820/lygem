import { z } from "zod"

const metaConfigSchema = z.object({
  pageTitle: z.string().default("LyGem"),
})

const linkConfigSchema = z.object({
  href: z.string(),
  text: z.string(),
  iconSrc: z.string().nullish(),
})

export const pageConfigSchema = z.object({
  meta: metaConfigSchema,
  links: z.array(linkConfigSchema).nullish(),
})

export type PageConfig = z.infer<typeof pageConfigSchema>
