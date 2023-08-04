import { Media } from '~/types'

export const usePagination = (items: ComputedRef<Media[]>, itemsPerPage: number = 12) => {
    const currentPage = ref(1)

    const paginatedItems = computed<Media[]>(() => {
        return items.value.slice(0, currentPage.value * itemsPerPage)
    })

    const hasNextPage = computed<boolean>(() => {
        return currentPage.value * itemsPerPage < items.value.length
    })

    const loadMore = () => {
        if (currentPage.value * itemsPerPage < items.value.length) {
            currentPage.value++
        }
    }

    watch(items, () => {
        currentPage.value = 1
    })

    return { paginatedItems, hasNextPage, loadMore }
}