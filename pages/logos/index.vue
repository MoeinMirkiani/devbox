<template>
    <PageSearch :title="$t('logos.title')" />

    <div class="videos-page__wrapper pt-8 pb-16 px-20 bg-gray-98 min-h-[calc(100vh-248px)] flex justify-center">
        <AppContainer>
            <AppLoadMore @load="loadMore" :is-active="pageInfo.hasNextPage && !loading">
                <LogoList :items="list" :loading="loading" />
            </AppLoadMore>
        </AppContainer>
    </div>
</template>

<script lang="ts" setup>
import LogoService from "~/services/LogoService"
import type { AsyncData } from "~/contracts/http/AsyncData"


// Composables
const { t } = useI18n()

useHead(({
    title: t('logos.title')
}))

const { pageInfo, list, loading, fetch, loadMore } = useLoadMore(service, 12)


// Methods
async function service(perPage: number, currentPage: string, keyword: string): AsyncData<any> {
    return await LogoService.list(perPage, currentPage, keyword)
}

async function init() {
    await fetch()
}

await init()
</script>
