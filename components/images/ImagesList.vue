<template>
    <div class="images">
        <div v-if="true" class="images__loading">
            <SpinnerIcon class="mt-10 mx-auto" />
        </div>

        <div v-else class="images__wrapper flex flex-wrap gap-x-4 gap-y-5">
            <ImageCard
                v-for="image in images"
                :key="image.id"
                :image="image"
                class="basis-[100%] md:basis-[34%] md:max-w-[calc((100%-16px)/2)] lg:basis-[26%] lg:max-w-[calc((100%-32px)/3)] flex-grow"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import ImageCard from "~/components/images/ImageCard.vue"
import SpinnerIcon from "~/components/UI/SpinnerIcon.vue";

defineProps({
    images: {
        type: Array,
        required: true
    },
    loading: {
        type: Boolean,
        default: false
    }
})
</script>
