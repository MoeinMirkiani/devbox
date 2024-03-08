<template>
    <PageFilters :title="$t('avatars.title')" :filters>
        <AvatarFilters :filters />
    </PageFilters>

    <div class="avatars-page__wrapper pt-8 pb-16 px-20 bg-gray-98 min-h-[calc(100vh-248px)] flex justify-center">
        <AppContainer>
            {{ list }}
        </AppContainer>
    </div>
</template>

<script lang="ts" setup>
import TaxonomyService from "~/services/TaxonomyService"
import AvatarService from "~/services/AvatarService"
import type { Taxonomy, TaxonomyQuery, TaxonomyQueryItem } from "~/contracts/types/Taxonomy"
import type { AsyncData } from "~/contracts/http/AsyncData"


// Composables
const route = useRoute()
const { t } = useI18n()

useHead(({
    title: t('avatars.title')
}))

const { pageInfo, list, loading, fetch, loadMore } = useLoadMore(service, 12)


// Variables
const filters = ref<Taxonomy[]>()
const taxonomyQuery = ref<TaxonomyQuery>({
    relations: 'AND',
    taxArray: []
})


// Computed
const taxonomies = computed(() => {
    const queries = route.query

    for (const item in queries) {
        if (queries[item]?.length === 0) {
            delete queries[item]
        }
    }

    return queries
})


// Observers
watch(taxonomies, async () => {
    taxonomyQuery.value.taxArray = []

    for (const item in taxonomies.value) {
        taxonomyQuery.value.taxArray.push({
            terms: taxonomies.value[item] as string[],
            taxonomy: item,
            operator: 'IN',
            field: 'slug'
        })
    }

    console.log(taxonomyQuery.value)
})


// Methods
const fetchFilters = async () => {
    const { data } = await TaxonomyService.filters()
    filters.value = data.value
}

async function service(perPage: number, currentPage: string): AsyncData<any> {
    return await AvatarService.list(perPage, currentPage)
}

async function init() {
    await fetch()
}

await Promise.all([init(), fetchFilters()])
</script>
