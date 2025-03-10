import { defineAction, ActionError } from 'astro:actions';
import { z } from 'astro:schema';
import { fetcher } from '../../utils/fetcher';
import type { TEntity } from '@/types/entities';

export const getEntityBySlug = defineAction({
    accept: 'json',
    input: z.object({
        contentType: z.enum(['project', 'blog']),
        slug: z.string()
    }),
    handler: async ({ contentType, slug }): Promise<TEntity> => {
        console.log('here')
        try {
            const { data } = await fetcher.get(`/content/${contentType}/${slug}`)
            console.log({data})
            return data
        } catch (e) {
            console.error(`[GET BY SLUG} contentType: ${contentType}, slug: ${slug}`)
            throw new ActionError({ code: 'NOT_FOUND' });
        }
    },
});
