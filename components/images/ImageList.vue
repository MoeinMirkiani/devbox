<template>
    <div class="images h-full flex justify-center items-center">
        <SpinnerIcon v-if="loading" class="mx-auto mt-10" />
        <NoResults v-if="!items.length && !loading" />

        <div class="images__wrapper h-full flex items-start flex-wrap gap-x-4 gap-y-5">
            <ImageCard
                v-for="image in props.items"
                :key="image.id"
                :image="image"
                class="basis-[100%] md:basis-[34%] md:max-w-[calc((100%-16px)/2)] lg:basis-[26%] lg:max-w-[calc((100%-32px)/3)] flex-grow"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import ImageCard from "~/components/images/ImageCard.vue"
import type { ImageListProps } from "~/contracts/components/images/ImageListProps"
import SpinnerIcon from "~/components/UI/SpinnerIcon.vue";
import NoResults from "~/components/UI/NoResults.vue";

const props = defineProps<ImageListProps>()
</script>
