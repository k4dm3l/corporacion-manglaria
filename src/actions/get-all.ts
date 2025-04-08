import { fetcher } from '@/lib/fetcher';
import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';


export const getAll = defineAction({
    input: z.object({
        type: z.string(),
        page: z.string().optional().default('1'),
        limit: z.string().optional().default('10'),
    }),
    handler: async ({ type, page, limit }) => {
        console.log(`/${type}?page=${page}&limit=${limit}`)
        return fetcher.get(`/${type}?page=${page}&limit=${limit}`).then(res => res.data)
    }
})
