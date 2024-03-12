import { useHttp } from "~/composables/useHttp"
import type { AsyncData } from "~/contracts/http/AsyncData"
import type { Logo } from "~/contracts/types/Logo"
import type { LogosResponse } from "~/contracts/http/responses/LogoResponse"
import type { PageInfo } from '~/contracts/http/PageInfo'
import { LogosQuery } from "~/queries/Logos"

const baseUrl = (): string => {
    const runtimeConfig = useRuntimeConfig()
    return runtimeConfig.public.graphqlURL
}

const listPresenter = (logo: any): Logo => {
    return {
        id: logo.id,
        title: logo.title,
        featuredImage: logo.featuredImage.node.mediaItemUrl,
        file: logo.acfLogo.file.node.mediaItemUrl,
        size: logo.acfLogo.size,
        ratio: logo.acfLogo.ratio,
        format: logo.acfLogo.format
    }
}

const transformList = (data: any): { items: Logo[], pageInfo: PageInfo } => {
    const logos: Logo[] = data.data.logos.nodes.map((logo: any) => {
        return listPresenter(logo)
    })

    const pageInfo: PageInfo = {
        hasNextPage: data.data.logos.pageInfo.hasNextPage,
        endCursor: data.data.logos.pageInfo.endCursor || ''
    }

    return {
        items: logos,
        pageInfo
    }
}

export default {
    list: (first: number, after: string, keyword: string): AsyncData<LogosResponse> => {
        return useHttp('graphql', {
            baseURL: baseUrl,
            key: 'logo-list',
            body: {
                query: LogosQuery,
                variables: {
                    first,
                    after,
                    keyword
                }
            },
            transform: transformList
        })
    }
}
