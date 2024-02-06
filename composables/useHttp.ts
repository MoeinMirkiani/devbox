import { callWithNuxt, type NuxtApp } from "#app"
import type { AsyncData } from '~/contracts/http/AsyncData'
import type { NavigateToData } from "~/contracts/http/NavigateToData"
import type { FetchResponse } from "ofetch"

export async function useHttp(path: string, payload?: any): AsyncData<any> {
    const nuxtApp: NuxtApp = useNuxtApp()
    const runtimeConfig = useRuntimeConfig()
    const baseUrl: string = runtimeConfig.public.graphqlURL

    let navigateToData: NavigateToData | null = null
    const loading = payload?.loading
        ? payload.loading
        : ref<boolean>(false)

    loading.value = true

    const http = useFetch(path, {
        baseURL: baseUrl,
        method: payload?.method ?? 'post',
        key: payload?.key ?? undefined,
        query: payload?.query ?? undefined,
        body: payload?.body ?? undefined,
        headers: prepareHeaders(payload?.headers, payload?.formData ?? false),
        server: payload?.server ?? true,
        lazy: payload?.lazy ?? false,
        immediate: payload?.immediate ?? true,
        default: payload?.default ?? undefined,
        transform: payload?.transform ?? undefined,
        pick: payload?.pick ?? undefined,
        watch: payload?.watch ?? undefined,

        onRequest({ options }) {
            const token = useCookie('token')

            if (token.value) {
                options.headers = new Headers(options.headers || {})
                options.headers.set('authorization', token.value)
            }
        },
        onResponse({ response }) {
            if([200, 201].includes(response.status)) {
                if (response._data.hasOwnProperty('body')) {
                    response._data = response._data.body
                }
            }
        },
        async onResponseError({ options, response }) {
            if ([401, 403].includes(response.status)) {
                navigateToData = {
                    path: '/auth/?auth=false',
                    statusCode: 401
                }
            } else if ([400, 422].includes(response.status)) {
                const message: string = prepareErrorMessage(response, 'Bad Request')
                showError(message)
            } else if (response.status === 404) {
                if (options.method === 'get') {
                    navigateToData = {
                        path: '/404',
                        statusCode: 404
                    }
                } else {
                    const message: string = prepareErrorMessage(response, '404 - Not Found')
                    showError(message)
                }
            }
        }
    })

    loading.value = false

    if (navigateToData) {
        const nuxtNavigate = callWithNuxt(nuxtApp, navigateTo, [
            // @ts-ignore
            navigateToData.path, { redirectCode: navigateToData.statusCode }
        ])

        if (process.server) {
            // @ts-ignore
            return nuxtNavigate
        }
    }

    return http
}

const prepareHeaders = (h: Record<string, string> | undefined, formData: boolean = false) => {
    const headers: Record<string, string> = {
        'Accept': 'application/json'
    }

    if (h) {
        Object.assign(headers, h)
    }

    if (!formData) {
        headers['Content-Type'] = 'application/json'
    }

    return headers
}

const prepareErrorMessage = (response: FetchResponse<any>, defaultMessage: string): string => {
    if (response._data?.meta?.errors && Object.keys(response._data.meta.errors).length) {
        const errors = response._data.meta.errors
        const first: any = Object.keys(errors)[0]

        if (Array.isArray(errors[first]) && errors[first].length) {
            return errors[first][0].toString()
        }
    } else if (response._data?.meta?.message) {
        return response._data.meta.message
    }

    return defaultMessage
}

const showError = (message: string) => {
    console.log(message)
}
