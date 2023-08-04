import { Media } from '~/types'

export const useSearch = (items: Media[]) => {
    const route = useRoute()

    const keyword = computed<string>(() => {
        const search = route.query.search
        return Array.isArray(search) ? search[0] || '' : search || ''
    })

    const searchedMedias = computed<Media[]>(() => {
        return keyword.value.length ? items.filter(item => item.title.toLowerCase().includes(keyword.value.toLowerCase())) : items
    })

    return { searchedMedias }
}