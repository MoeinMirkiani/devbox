<template>
    <div class="images-page__wrapper pt-8 pb-16 px-20 bg-gray-98 min-h-[calc(100vh-248px)] flex justify-center items-center">
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
import type { Images } from "~/contracts/types/Image"

useHead(({
    title: 'Images'
}))

definePageMeta({
    layout: 'search'
})

// Variables
const images = ref<Images>([])
const currentPage = ref<string>('')
const perPage = ref<number>(9)
const hasNextPage = ref<boolean>(false)
const loadMoreElement = ref(null)
const loading = ref<boolean>(false)
const route = useRoute()
const keyword = computed<string>(() => {
    const search = route.query.search
    return Array.isArray(search) ? search[0] || '' : search || ''
})

// Observers
useIntersectionObserver(
    loadMoreElement,
    async ([{ isIntersecting }]) => {
        if (isIntersecting) {
            await fetchImages()
        }
    }
)

watch(keyword, async (newValue, oldValue) => {
    if (newValue.length) {
        images.value = []
        hasNextPage.value = false
        loading.value = true
        await fetchImages()
        loading.value = false
    }
})

// Methods
const fetchImages = async () => {
    const { data } = await ImageService.list(perPage.value, currentPage.value, keyword.value)
    images.value = [...images.value, ...data.value.images]
    hasNextPage.value = data.value.pageInfo.hasNextPage
    currentPage.value = data.value.pageInfo.endCursor
}

await fetchImages()
</script>
