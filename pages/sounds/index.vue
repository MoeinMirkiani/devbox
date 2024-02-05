<template>
    <PageSearch :title="$t('sounds.title')" />

    <div class="videos-page__wrapper pt-8 pb-16 px-20 bg-gray-98 min-h-[calc(100vh-248px)] flex justify-center">
        <AppContainer>
            <AppLoadMore @load="loadMore" :is-active="pageInfo.hasNextPage">
                {{ list }}
            </AppLoadMore>
        </AppContainer>
    </div>
</template>

<script lang="ts" setup>
import SoundService from "~/services/SoundService"
import type { AsyncData } from "~/contracts/http/AsyncData"


const { t } = useI18n()

useHead(({
    title: t('sounds.title')
}))


// Composables
const { pageInfo, list, loading, fetch, loadMore } = useLoadMore(service, 10)


// Methods
async function service(perPage: number, currentPage: string, keyword: string): AsyncData<any> {
    return await SoundService.list(perPage, currentPage, keyword)
}

async function init() {
    await fetch()
}

await init()
</script>
