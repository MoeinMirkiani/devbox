<template>
    <PageFilters :title="$t('avatars.title')" :filters>
        <AvatarFilters :filters />
    </PageFilters>

    <div class="avatars-page__wrapper pt-8 pb-16 px-20 bg-gray-98 min-h-[calc(100vh-248px)] flex justify-center">
        <AppContainer>
            <AppLoadMore @load="loadMore" :is-active="pageInfo.hasNextPage && !loading">
                <AvatarList :items="list" :loading="loading" />
            </AppLoadMore>
        </AppContainer>
    </div>
</template>

<script lang="ts" setup>
import TaxonomyService from "~/services/TaxonomyService"
import AvatarService from "~/services/AvatarService"
import type { Taxonomy, TaxonomyQuery } from "~/contracts/types/Taxonomy"
import type { AsyncData } from "~/contracts/http/AsyncData"


// Composables
const route = useRoute()
const { t } = useI18n()

useHead(({
    title: t('avatars.title')
}))

const { pageInfo, list, resetList, loading, fetch, loadMore } = useLoadMore(service, 12)


// Variables
const filters = ref<Taxonomy[]>()


// Computed
const taxonomyQuery = computed<TaxonomyQuery>(() => {
    const queries = route.query
    const query: TaxonomyQuery = {
        relation: 'AND',
        taxArray: []
    }

    for (const item in queries) {
        if (queries[item]?.length) {
            query.taxArray.push({
                terms: queries[item] as string[],
                taxonomy: item.toUpperCase(),
                operator: 'IN',
                field: 'SLUG'
            })
        }
    }

    return query
})


// Observers
watch(taxonomyQuery, async () => {
    resetList()
    await fetch()
})


// Methods
const fetchFilters = async () => {
    const { data } = await TaxonomyService.filters()
    filters.value = data.value
}

async function service(perPage: number, currentPage: string): AsyncData<any> {
    return await AvatarService.list(perPage, currentPage, taxonomyQuery.value)
}

async function init() {
    await fetch()
}

await Promise.all([init(), fetchFilters()])
</script>
