<template>
    <SpinnerIcon v-if="loading" class="mx-auto mt-10" />
    <NoResults v-if="!items.length && !loading" class="h-full" />

    <div v-else class="images flex items-start flex-wrap gap-x-4 gap-y-5">
        <ImageCard
            v-for="image in props.items"
            :key="image.id"
            :image="image"
            class="basis-[100%] md:basis-[34%] md:max-w-[calc((100%-16px)/2)] lg:basis-[26%] lg:max-w-[calc((100%-32px)/3)] flex-grow"
        />
    </div>
</template>

<script setup lang="ts">
import type { ImageListProps } from "~/contracts/components/images/ImageListProps"

const props = defineProps<ImageListProps>()
</script>
