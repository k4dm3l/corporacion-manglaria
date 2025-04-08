import { fetcher } from '@/lib/fetcher';
export const getAll = async ({ type, page = '1', limit = '10' }: { type: string, page: string, limit?: string }) => {
    try {
        const data = await fetcher.get(`/${type}?page=${page}&limit=${limit}`).then(res => res.data)
        return { data, error: false }
    } catch (e) {
        console.log('GET ALL', { e })
        return { error: true, data: null }
    }
}