<template>
    <NoResults v-if="!props.items.length && !props.loading" class="h-full" />

    <div v-else class="videos flex items-start flex-wrap gap-x-4 gap-y-5">
        <VideoCard
            v-for="(video, i) in props.items"
            :key="i"
            :video="video"
            class="basis-[100%] md:basis-[34%] md:max-w-[calc((100%-16px)/2)] lg:basis-[26%] lg:max-w-[calc((100%-32px)/3)] flex-grow"
        />
    </div>

    <SpinnerIcon v-if="props.loading" class="mx-auto mt-10" />
</template>

<script setup lang="ts">
import type { VideoListProps } from "~/contracts/components/videos/VideoListProps"

const props = defineProps<VideoListProps>()
</script>
