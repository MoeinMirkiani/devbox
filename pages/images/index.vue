<template>
    <div class="images-page__wrapper pt-8 pb-16 px-20 bg-gray-98 min-h-[calc(100vh-248px)] flex justify-center items-center">
        <AppContainer>
            <ImageList :items="images" />
            <SpinnerIcon ref="loadMore" v-if="hasNextPage" class="mx-auto mt-10" />
        </AppContainer>
    </div>
</template>

<script lang="ts" setup>
import AppContainer from "~/components/UI/AppContainer.vue"
import ImageList from "~/components/images/ImageList.vue"
import SpinnerIcon from "~/components/UI/SpinnerIcon.vue"
import ImageService from "~/services/ImageService"
import { useIntersectionObserver } from '@vueuse/core'
import type { Images } from "~/contracts/types/Image"

useHead(({
    title: 'Images'
}))

definePageMeta({
    layout: 'search'
})

// Variables
const loading = ref<boolean>(false)
const images = ref<Images>([])
const currentPage = ref<number>(1)
const perPage = ref<number>(9)
const hasNextPage = ref<boolean>(true)
const loadMore = ref(null)

// Methods
const fetchImages = async () => {
    try {
        const { data } = await ImageService.list(currentPage.value, perPage.value)
        images.value = images.value.concat(data.value)
        hasNextPage.value = !(data.value.length < perPage.value)
        console.log(data.value)
    } catch (e) {
        console.log(e)
    } finally {
        loading.value = false
    }
}

// Observers
useIntersectionObserver(loadMore, ([{ isIntersecting }]) => {
    if (isIntersecting) {
        currentPage.value++
        fetchImages()
    }
})

await fetchImages()
</script>
