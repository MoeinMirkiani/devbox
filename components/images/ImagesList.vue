<template>
    <div class="images">
        <div v-if="images.length" class="images__wrapper flex flex-wrap gap-x-4 gap-y-5">
            <ImageCard
                v-for="image in images"
                :key="image.id"
                :image="image"
                class="basis-[100%] md:basis-[34%] md:max-w-[calc((100%-16px)/2)] lg:basis-[26%] lg:max-w-[calc((100%-32px)/3)] flex-grow"
            />
        </div>

        <NoResults v-else page="Images" link="images" />
    </div>
</template>

<script setup lang="ts">
import ImageCard from "~/components/images/ImageCard.vue"
import NoResults from "~/components/UI/NoResults.vue"

import { Media } from "~/types"

defineProps({
    images: {
        type: Array as PropType<Media[]>,
        required: true
    }
})
</script>
