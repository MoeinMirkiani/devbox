import type { AsyncData } from "~/contracts/http/AsyncData"
import type { Service } from "~/contracts/http/Service"
import type { PageInfo } from "~/contracts/http/PageInfo"


export const useLoadMore = (service: Service, perPage: number) => {
    // Variables
    const list = ref<any[]>([])
    const first = ref<number>(perPage)
    const loading = ref<boolean>(false)
    const pageInfo = ref<PageInfo>({ hasNextPage: false, endCursor: '' })


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

        list.value = [...list.value, ...api.data.value.items]
        pageInfo.value = api.data.value.pageInfo
    }

    const apiCall = async (): AsyncData<any> => {
        loading.value = true

        const data = await service(first.value, pageInfo.value.endCursor, keyword.value)

        loading.value = false

        return  data
    }

    const loadMore = async () => {
        await fetch()
    }

    const resetList = () => {
        list.value = []
        pageInfo.value = {
            hasNextPage: false,
            endCursor: ''
        }
    }

    return { pageInfo, list, loading, fetch, loadMore }
}
