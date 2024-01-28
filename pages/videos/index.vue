<template>
    <PageSearch :title="$t('videos.title')" />

    <div class="videos-page__wrapper pt-8 pb-16 px-20 bg-gray-98 min-h-[calc(100vh-248px)] flex justify-center">
        <AppContainer>
            <AppLoadMore @load="loadMore" :is-active="pageInfo.hasNextPage">

            </AppLoadMore>
        </AppContainer>
    </div>
</template>

<script lang="ts" setup>
import type { AsyncData } from "~/contracts/http/AsyncData"
import VideoService from "~/services/VideoService"

const { t } = useI18n()

useHead(({
    title: t('videos.title')
}))


// Composables
const { pageInfo, list, loading, fetch, loadMore } = useLoadMore(service, 9)


// Methods
async function service(perPage: number, currentPage: string, keyword: string): AsyncData<any> {
    return await VideoService.list(perPage, currentPage, keyword)
}

async function init() {
    await fetch()
}

await init()
console.log(list.value)
</script>
