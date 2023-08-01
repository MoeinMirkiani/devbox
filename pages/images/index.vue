<template>
    <div class="images-page__wrapper pt-8 pb-16 px-20 bg-gray-98 min-h-screen">
        <AppContainer>
            <ImagesList :images="filteredImages" :loading="loading" />

            <!--<SpinnerIcon ref="loadMore" class="w-10 h-10 mt-10 mx-auto" />-->
        </AppContainer>
    </div>
</template>

<script lang="ts" setup>
// import { useIntersectionObserver } from '@vueuse/core'

import AppContainer from "~/components/UI/AppContainer.vue"
import SpinnerIcon from "~/components/UI/SpinnerIcon.vue"
import ImagesList from "~/components/images/ImagesList.vue"
import { Image } from '~/types'

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
const filteredImages = ref<Image[]>([])

const loading = ref(true)
setTimeout(() => {
    filteredImages.value = useSearch(imagesDb, keyword.value)
    loading.value = false
}, 1000)

watch(keyword, newKeyword => {
    loading.value = true
    setTimeout(() => {
        filteredImages.value = useSearch(imagesDb, newKeyword)
        loading.value = false
    }, 1000)
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
