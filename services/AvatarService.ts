import { useHttp } from "~/composables/useHttp"
import type { AsyncData } from "~/contracts/http/AsyncData"
import type { Avatar } from "~/contracts/types/Avatar"
import type { PageInfo } from "~/contracts/http/PageInfo"
import type { TaxonomyQuery } from "~/contracts/types/Taxonomy"
import { AvatarsQuery } from "~/queries/Avatars"


const baseUrl = (): string => {
    const runtimeConfig = useRuntimeConfig()
    return runtimeConfig.public.graphqlURL
}

const listPresenter = (avatar: any): Avatar => {
    return {
        id: avatar.node?.id,
        featuredImage: avatar.node?.featuredImage.node.mediaItemUrl,
        resolution: avatar.node?.acfProfile.resolution,
        size: avatar.node?.acfProfile.size,
        format: avatar.node?.formats.edges[0].node.name,
        file: avatar.node?.acfProfile.file.node.mediaItemUrl
    }
}

const transformList = (data: any): { items: Avatar[], pageInfo: PageInfo } => {
    const avatars: Avatar[] = data.data.profiles.edges.map((avatar: any) => {
        return listPresenter(avatar)
    })

    const pageInfo: PageInfo = {
        hasNextPage: data.data.profiles.pageInfo.hasNextPage,
        endCursor: data.data.profiles.pageInfo.endCursor || ''
    }

    return {
        items: avatars,
        pageInfo
    }
}

export default {
    list: (first: number, after: string, taxonomyQuery: TaxonomyQuery) : AsyncData<any> => {
        return useHttp('graphql', {
            baseURL: baseUrl,
            key: 'avatar-list',
            body: {
                query: AvatarsQuery,
                variables: {
                    first,
                    after,
                    taxQuery: taxonomyQuery
                }
            },
            transform: transformList
        })
    }
}
