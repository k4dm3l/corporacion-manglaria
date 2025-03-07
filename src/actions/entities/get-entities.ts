import { defineAction, ActionError } from 'astro:actions';
import { z } from 'astro:schema';
import { fetcher } from '../../utils/fetcher';
import type { TGetEntitiesResponse } from '@/types/entities';

export const getEntitiesPaginate = defineAction({
    accept: 'json',
    input: z.object({
        contentType: z.enum(['project', 'blog']),
        search: z.string().optional(),
        page: z.number()
    }),
    handler: async ({ contentType, search, page = 1 }): Promise<TGetEntitiesResponse> => {
        try {
            const querySearch = search ? `&search=${search}` : ''
            const { data } = await fetcher.get(`/${contentType}?page=${page}${querySearch}`)
            const { data: entities = [], pagination = {} } = data
            return { entities, pagination }
        } catch (e) {
            throw new ActionError({ code: 'UNPROCESSABLE_CONTENT' });
        }
    },
});
