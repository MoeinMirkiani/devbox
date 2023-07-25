<template>
    <div class="images-page__wrapper pt-8 pb-16 px-20 bg-gray-98">
        <AppContainer>
            <div class="images flex flex-wrap gap-x-4 gap-y-5">
                <ImageCard
                    v-for="image in images"
                    :key="image.id"
                    :image="image"
                    class="basis-[100%] md:basis-[34%] md:max-w-[calc((100%-16px)/2)] lg:basis-[26%] lg:max-w-[calc((100%-32px)/3)] flex-grow"
                />
            </div>

            <SpinnerIcon v-if="hasNextPage" ref="loadMore" class="w-10 h-10 mt-10 mx-auto" />
        </AppContainer>
    </div>
</template>

<script lang="ts" setup>
import { useIntersectionObserver } from '@vueuse/core'

import AppContainer from "~/components/UI/AppContainer.vue"
import ImageCard from "~/components/images/ImageCard.vue"

import imagesDb from '~/db/images.json'
import SpinnerIcon from "~/components/UI/SpinnerIcon.vue";

useHead(({
    title: 'Images'
}))

definePageMeta({
    layout: 'search'
})

const loadMore = ref(null)
const currentPage = ref(1)

const hasNextPage = computed(() => {
    return images.value.length < imagesDb.length
})

const images = ref(imagesDb.slice(0, 12))

useIntersectionObserver(loadMore, (entries) => {
    if (hasNextPage.value && entries[0].isIntersecting) {
        setTimeout(() => {
            currentPage.value++
            images.value = [...images.value, ...imagesDb.slice((currentPage.value - 1) * 12, 12 * currentPage.value)]
        }, 1000)
    }
})
</script>
