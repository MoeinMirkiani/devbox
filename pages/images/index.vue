<template>
    <div class="images-page__wrapper pt-8 pb-16 px-20 bg-gray-98 min-h-[calc(100vh-248px)]">
        <AppContainer>
            <SpinnerIcon v-if="loading" class="mt-10 mx-auto" />

            <ImagesList v-else :images="paginatedItems" />

            <SpinnerIcon v-if="hasNextPage && !loading" class="mt-10 mx-auto" />

            <span v-if="hasNextPage" ref="loadMoreImages" />
        </AppContainer>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, watch } from 'vue'
import { useIntersectionObserver } from "@vueuse/core"

import AppContainer from "~/components/UI/AppContainer.vue"
import ImagesList from "~/components/images/ImagesList.vue"
import SpinnerIcon from "~/components/UI/SpinnerIcon.vue"

//@ts-ignore
import { images } from '~/db/images.ts'

useHead(({
    title: 'Images'
}))

definePageMeta({
    layout: 'search'
})

const { searchedMedias } = useSearch(images)
const { paginatedItems, hasNextPage, loadMore } = usePagination(searchedMedias)

const loadMoreImages = ref(null)
const firstLoadMore = ref(true)
useIntersectionObserver(loadMoreImages,([{ isIntersecting }]) => {
    if (firstLoadMore.value) {
        firstLoadMore.value = false
    } else if (isIntersecting && hasNextPage.value) {
        setTimeout(() => {
            loadMore()
        }, 1000)
    }
})

const loading = ref(true)
onMounted(() => {
    setTimeout(() => {
        loading.value = false
    }, 1000)
})

watch(searchedMedias, () => {
    firstLoadMore.value = true
    loading.value = true
    setTimeout(() => {
        loading.value = false
    }, 1000)
})
</script>
