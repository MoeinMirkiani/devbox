<template>
    <NoResults v-if="!props.items.length && !props.loading" class="h-full" />

    <div v-else class="images flex items-start flex-wrap gap-x-4 gap-y-5">
        <ImageCard
            v-for="(image, i) in props.items"
            :key="i"
            :image="image"
            class="basis-[100%] md:basis-[34%] md:max-w-[calc((100%-16px)/2)] lg:basis-[26%] lg:max-w-[calc((100%-32px)/3)] flex-grow"
        />
    </div>

    <SpinnerIcon v-if="props.loading" class="mx-auto mt-10" />
</template>

<script setup lang="ts">
import type { ImageListProps } from "~/contracts/components/images/ImageListProps"

const props = defineProps<ImageListProps>()
</script>
