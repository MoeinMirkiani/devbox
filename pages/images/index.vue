<template>
    <div class="images-page__wrapper pt-8 pb-16 px-20 bg-gray-98 min-h-[calc(100vh-248px)] flex justify-center">
        <Teleport to="#page-header">
            <PageSearch :title="$t('images.title')" />
        </Teleport>

        <AppContainer>
            <AppLoadMore @load="loadMore" :is-active="pageInfo.hasNextPage">
                <ImageList :items="list" :loading="loading" />
            </AppLoadMore>
        </AppContainer>
    </div>
</template>

<script lang="ts" setup>
import ImageService from "~/services/ImageService"
import type { AsyncData } from "~/contracts/http/AsyncData"


useHead(({
    title: 'Images'
}))


// Composables
const { pageInfo, list, loading, fetch, loadMore } = useLoadMore(service, 9)


// Methods
async function service(perPage: number, currentPage: string, keyword: string): AsyncData<any> {
    return await ImageService.list(perPage, currentPage, keyword)
}

async function init() {
    await fetch()
}

await init()
</script>
