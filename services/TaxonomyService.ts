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
        data.data[item] = data.data[item].nodes

        if (data.data[item][0].hasOwnProperty('acfFilter')) {
            data.data[item].sort((a: any, b: any) => a.acfFilter.sortIndex - b.acfFilter.sortIndex)
        }

        filters.push({
            singleName: data.data[item][0].taxonomy.node.graphqlSingleName,
            pluralName: data.data[item][0].taxonomy.node.graphqlPluralName,
            items: data.data[item].map((item: any) => filterItemPresenter(item))
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
