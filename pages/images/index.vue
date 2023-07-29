<template>
    <div class="images-page__wrapper pt-8 pb-16 px-20 bg-gray-98">
        <AppContainer>
            <div class="images flex flex-wrap gap-x-4 gap-y-5">
                <ImageCard
                    v-for="image in filteredImages"
                    :key="image.id"
                    :image="image"
                    class="basis-[100%] md:basis-[34%] md:max-w-[calc((100%-16px)/2)] lg:basis-[26%] lg:max-w-[calc((100%-32px)/3)] flex-grow"
                />
            </div>

            <SpinnerIcon ref="loadMore" class="w-10 h-10 mt-10 mx-auto" />
        </AppContainer>
    </div>
</template>

<script lang="ts" setup>
// import { useIntersectionObserver } from '@vueuse/core'

import AppContainer from "~/components/UI/AppContainer.vue"
import ImageCard from "~/components/images/ImageCard.vue"
import SpinnerIcon from "~/components/UI/SpinnerIcon.vue"

import imagesDb from '~/db/images.json'

useHead(({
    title: 'Images'
}))

definePageMeta({
    layout: 'search'
})

const route = useRoute()
const keyword = computed(() => {
    const search = route.query.search
    return Array.isArray(search) ? search[0] || '' : search || ''
})
const filteredImages = ref(useSearch(imagesDb, keyword.value))

watch(keyword, newKeyword => {
    filteredImages.value = useSearch(imagesDb, newKeyword)
})

// useIntersectionObserver(loadMore, (entries) => {
//     if (hasNextPage.value && entries[0].isIntersecting) {
//         setTimeout(() => {
//             currentPage.value++
//             images.value = [...images.value, ...images.value.slice((currentPage.value - 1) * 12, 12 * currentPage.value)]
//         }, 1000)
//     }
// })
</script>
