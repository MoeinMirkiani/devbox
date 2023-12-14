<template>
    <div class="images-page__wrapper pt-8 pb-16 px-20 bg-gray-98 min-h-[calc(100vh-248px)] flex justify-center">
        <AppContainer>
            <ImageList :items="images" :loading="loading" />
            <SpinnerIcon v-if="hasNextPage" ref="loadMoreElement" class="mx-auto mt-10" />
        </AppContainer>
    </div>
</template>

<script lang="ts" setup>
import AppContainer from "~/components/UI/AppContainer.vue"
import ImageList from "~/components/images/ImageList.vue"
import SpinnerIcon from "~/components/UI/SpinnerIcon.vue"
import ImageService from "~/services/ImageService"
import { useIntersectionObserver } from '@vueuse/core'
import { useRouteQuery } from "~/composables/useRouteQuery"
import type { Images } from "~/contracts/types/Image"

useHead(({
    title: 'Images'
}))

definePageMeta({
    layout: 'search'
})

// Variables
const images = ref<Images>([])
const first = ref<number>(9)
const after = ref<string>('')
const hasNextPage = ref<boolean>(false)
const loadMoreElement = ref(null)
const loading = ref<boolean>(false)
const keyword = useRouteQuery('search')

// Observers
useIntersectionObserver(
    loadMoreElement,
    async ([{ isIntersecting }]) => {
        if (isIntersecting) {
            await fetchImages()
        }
    }
)

watch(keyword, async () => {
    images.value = []
    after.value = ''
    hasNextPage.value = false
    loading.value = true
    await fetchImages()
    loading.value = false
})

// Methods
const fetchImages = async () => {
    const { data } = await ImageService.list(first.value, after.value, keyword.value)
    images.value = [...images.value, ...data.value.images]
    hasNextPage.value = data.value.pageInfo.hasNextPage
    after.value = data.value.pageInfo.endCursor
}

await fetchImages()
</script>
