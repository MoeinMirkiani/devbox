import { useHttp } from "~/composables/useHttp"
import type { AsyncData } from "~/contracts/http/AsyncData"
import type { TaxonomyItem, Taxonomy } from "~/contracts/types/Taxonomy"
import { TaxonomiesQuery } from "~/queries/Taxonomies"

const baseUrl = (): string => {
    const runtimeConfig = useRuntimeConfig()
    return runtimeConfig.public.graphqlURL
}

const filterItemPresenter = (item: any): TaxonomyItem => {
    return {
        name: item.name,
        slug: item.slug
    }
}

const transformFilters = (data: any): Taxonomy[] => {
    const filters: Taxonomy[] = []

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

export default {
    filters: (): AsyncData<any> => {
        return useHttp('graphql', {
            baseURL: baseUrl,
            key: 'avatar-filters',
            body: {
                query: TaxonomiesQuery
            },
            transform: transformFilters
        })
    }
}
