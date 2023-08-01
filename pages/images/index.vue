<template>
    <div class="images-page__wrapper pt-8 pb-16 px-20 bg-gray-98">
        <AppContainer>
            <ImagesList />

            <SpinnerIcon ref="loadMore" class="w-10 h-10 mt-10 mx-auto" />
        </AppContainer>
    </div>
</template>

<script lang="ts" setup>
// import { useIntersectionObserver } from '@vueuse/core'

import AppContainer from "~/components/UI/AppContainer.vue"
import SpinnerIcon from "~/components/UI/SpinnerIcon.vue"
import ImagesList from "~/components/images/ImagesList.vue"

useHead(({
    title: 'Images'
}))

definePageMeta({
    layout: 'search'
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
