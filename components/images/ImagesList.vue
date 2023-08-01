<template>
    <div class="images flex flex-wrap gap-x-4 gap-y-5">
        <ImageCard
            v-for="image in filteredImages"
            :key="image.id"
            :image="image"
            class="basis-[100%] md:basis-[34%] md:max-w-[calc((100%-16px)/2)] lg:basis-[26%] lg:max-w-[calc((100%-32px)/3)] flex-grow"
        />
    </div>
</template>

<script setup lang="ts">
import ImageCard from "~/components/images/ImageCard.vue"

import imagesDb from '~/db/images.json'

const route = useRoute()
const keyword = computed(() => {
    const search = route.query.search
    return Array.isArray(search) ? search[0] || '' : search || ''
})
const filteredImages = ref(useSearch(imagesDb, keyword.value))

watch(keyword, newKeyword => {
    setTimeout(() => {
        filteredImages.value = useSearch(imagesDb, newKeyword)
    }, 1000)
})
</script>
