import { Media } from '~/types'

export const usePagination = (items: Media[], itemsPerPage: number = 12) => {
    const currentPage = ref(1)

    const paginatedItems = computed<Media[]>(() => {
        return items.slice(0, currentPage.value * itemsPerPage)
    })

    const hasNextPage = computed<boolean>(() => {
        return currentPage.value * itemsPerPage < items.length
    })

    const loadMore = () => {
        if (currentPage.value * itemsPerPage < items.length) {
            currentPage.value++
        }
    }

    return { paginatedItems, hasNextPage, loadMore }
}