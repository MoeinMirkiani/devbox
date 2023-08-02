<template>
    <div class="images-page__wrapper pt-8 pb-16 px-20 bg-gray-98 min-h-screen">
        <AppContainer>
            <ImagesList :images="paginatedItems" />

            <SpinnerIcon v-if="hasNextPage" class="mt-10 mx-auto" />

            <span ref="loadMoreImages" />
        </AppContainer>
    </div>
</template>

<script lang="ts" setup>
import { useIntersectionObserver } from "@vueuse/core"

import AppContainer from "~/components/UI/AppContainer.vue"
import ImagesList from "~/components/images/ImagesList.vue"
import SpinnerIcon from "~/components/UI/SpinnerIcon.vue"

import imagesDb from '~/db/images.json'

useHead(({
    title: 'Images'
}))

definePageMeta({
    layout: 'search'
})

const { searchedMedias } = useSearch(imagesDb)
const { paginatedItems, hasNextPage, loadMore } = usePagination(searchedMedias)

const loadMoreImages = ref(null)
useIntersectionObserver(loadMoreImages,([{ isIntersecting }]) => {
    setTimeout(() => {
        if(isIntersecting && hasNextPage.value) {
            loadMore()
        }
    }, 1000)
})
</script>
