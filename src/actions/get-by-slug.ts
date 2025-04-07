import { fetcher } from '@/lib/fetcher';
import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

export const getBySlug = defineAction({
    input: z.object({
        type: z.string(),
        slug: z.string()
    }),
    handler: async ({ type, slug }) => fetcher.get(`/${type}/${slug}`).then(res => res.data)
})
