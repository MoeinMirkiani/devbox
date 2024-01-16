import type { AsyncData } from "~/contracts/http/AsyncData"

export type Service = (perPage: number, currentPage: string, keyword: string) => AsyncData<any>

export const useLoadMore = (service: Service, perPage: number, currentPage: string) => {
    // Variables
    const list = ref<any[]>([])
    const first = ref<number>(perPage)
    const after = ref<string>(currentPage)
    const hasNextPage = ref<boolean>(false)
    const loading = ref<boolean>(false)


    // Composables
    const keyword = useRouteInfo({ location: 'query', name: 'search' })


    // Observers
    watch(keyword, async () => {
        resetList()
        loading.value = true
        await fetch()
        loading.value = false
    })


    // Methods
    const fetch = async (): Promise<void> => {
        const api = await apiCall()
        list.value = [...list.value, ...api.data.value.images]
        hasNextPage.value = api.data.value.pageInfo.hasNextPage
        after.value = api.data.value.pageInfo.endCursor
    }

    const apiCall = async (): AsyncData<any> => {
        loading.value = true
        const data = await service(first.value, after.value, keyword.value)
        loading.value = false

        return  data
    }

    const loadMore = async () => {
        await fetch()
    }

    const resetList = () => {
        list.value = []
        after.value = ''
        hasNextPage.value = false
    }

    return { list, hasNextPage, loading, fetch, loadMore }
}
