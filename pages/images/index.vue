<template>
    <div class="images-page__wrapper pt-8 pb-16 px-20 bg-gray-98 min-h-[calc(100vh-248px)] flex justify-center">
        <AppContainer>
            <AppLoadMore @load="loadMore" :is-active="hasNextPage">
                <ImageList :items="list" :loading="loading" />
            </AppLoadMore>
        </AppContainer>
    </div>
</template>

<script lang="ts" setup>
import AppContainer from "~/components/UI/AppContainer.vue"
import AppLoadMore from "~/components/UI/AppLoadMore.vue"
import ImageList from "~/components/images/ImageList.vue"
import ImageService from "~/services/ImageService"
import { useLoadMore } from "~/composables/useLoadMore"
import type { AsyncData } from "~/contracts/http/AsyncData"


useHead(({
    title: 'Images'
}))

definePageMeta({
    layout: 'search'
})


// Composables
const { list, hasNextPage, loading, fetch, loadMore } = useLoadMore(service, 9, '')


// Methods
async function service(perPage: number, currentPage: string, keyword: string): AsyncData<any> {
    return await ImageService.list(perPage, currentPage, keyword)
}

async function init() {
    await fetch()
}

await init()
</script>
