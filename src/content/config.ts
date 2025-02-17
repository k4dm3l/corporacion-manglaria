import { defineCollection, z } from "astro:content";

const entries = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string().optional(),
    img: z.string().optional(),
    excerpt: z.string(),
    timestamp:z.date()
  })
})

export const collections = { entries }