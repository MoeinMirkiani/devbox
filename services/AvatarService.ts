import { useHttp } from "~/composables/useHttp"
import type { AsyncData } from "~/contracts/http/AsyncData"
import type { FilterItem, Filter } from "~/contracts/types/Filter"
import type { Avatar } from "~/contracts/types/Avatar"
import type { PageInfo } from "~/contracts/http/PageInfo"
import { AvatarFiltersQuery } from "~/queries/AvatarFilters"
import { AvatarsQuery } from "~/queries/Avatars"


const baseUrl = (): string => {
    const runtimeConfig = useRuntimeConfig()
    return runtimeConfig.public.graphqlURL
}

const filterItemPresenter = (item: any): FilterItem => {
    return {
        name: item.name,
        slug: item.slug
    }
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

const transformFilters = (data: any): Filter[] => {
    const filters: Filter[] = []

    for (const item in data.data) {
        // Sorts filter items based on "sortIndex" property
        if (data.data[item].edges[0].node.hasOwnProperty('acfFilter')) {
            data.data[item].edges.sort((a: any, b: any) => a.node.acfFilter.sortIndex - b.node.acfFilter.sortIndex)
        }

        data.data[item] = data.data[item].edges.map((item: any) => {
            return filterItemPresenter(item.node)
        })

        filters.push({
            name: item,
            items: data.data[item]
        })
    }

    return filters
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
    filters: () : AsyncData<any> => {
        return useHttp('graphql', {
            baseURL: baseUrl,
            key: 'avatar-filters',
            body: {
                query: AvatarFiltersQuery
            },
            transform: transformFilters
        })
    },

    list: (first: number, after: string) : AsyncData<any> => {
        return useHttp('graphql', {
            baseURL: baseUrl,
            key: 'avatar-list',
            body: {
                query: AvatarsQuery,
                variables: {
                    first,
                    after
                }
            },
            transform: transformList
        })
    }
}
