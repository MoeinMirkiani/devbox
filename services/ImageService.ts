import { useHttp } from "~/composables/useHttp"
import { type AsyncData } from "~/contracts/http/AsyncData"
import { type ImagesResponse } from "~/contracts/http/responses/ImagesResponse"

const baseUrl = (): string => {
    const runtimeConfig = useRuntimeConfig()
    return runtimeConfig.baseUrl
}

export default {
    list: (currentPage: number = 1, perPage: number = 9): AsyncData<ImagesResponse> => {
        return useHttp('api/images', {
            baseURL: baseUrl,
            query: {
                currentPage,
                perPage
            }
        })
    }
}
