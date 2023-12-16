import type { AsyncData } from "~/contracts/http/AsyncData"
import { useRouteQuery } from "~/composables/useRouteQuery"

export type Service = (perPage: number, currentPage: string, keyword: string) => AsyncData<any>

export function useLoadMore(service: Service, perPage: number, currentPage: string) {
    // Variables
    const list = ref<any[]>([])
    const first = ref<number>(perPage)
    const after = ref<string>(currentPage)
    const hasNextPage = ref<boolean>(false)
    const loading = ref<boolean>(false)


    // Composables
    const keyword = useRouteQuery('search')


    // Observers
    watch(keyword, async () => {
        list.value = []
        after.value = ''
        hasNextPage.value = false
        loading.value = true
        await fetch()
        loading.value = false
    })


    // Methods
    async function fetch(): Promise<void> {
        const api = await apiCall()
        list.value = [...list.value, ...api.data.value.images]
        hasNextPage.value = api.data.value.pageInfo.hasNextPage
        after.value = api.data.value.pageInfo.endCursor
    }

    async function apiCall(): AsyncData<any> {
        loading.value = true
        const data = await service(first.value, after.value, keyword.value)
        loading.value = false
        return  data
    }

    async function loadMore() {
        await fetch()
    }

    return { list, hasNextPage, loading, fetch, loadMore }
}
