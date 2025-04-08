import { fetcher } from "@/lib/fetcher"

export const getBydSlug = async ({ type, slug }: { type: string, slug: string }) => {
    try {
        const data = await fetcher.get(`/${type}/${slug}`).then(res => res.data)
        return { data, error: false }
    } catch (e) {
        console.log('GET BY SLUG', {e})
        return { error: true, data: null }
    }
}