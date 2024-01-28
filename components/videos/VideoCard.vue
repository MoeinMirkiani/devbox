<template>
    <div class="video bg-white rounded-5 shadow-card hover:shadow-card-hover transition-all">
        <NuxtLink :to="{ path: `/videos/${props.video.id}` }" class="image--link block p-3">
            <div class="video--cover w-full rounded-5 overflow-hidden aspect-[1.6]">
                <img :src="props.video.featuredImage" alt="image" class="w-full h-full object-cover" />
            </div>

            <div class="video--detail pt-4 pb-1 px-3">
                <ul class="video--detail__list flex flex-col gap-2">
                    <li v-for="item in info" :key="item.label" class="video--detail__item">
                        <MediaInfo :label="item.label" :value="item.value" />
                    </li>
                </ul>
            </div>
        </NuxtLink>
    </div>
</template>

<script lang="ts" setup>
import type { VideoCardProps } from "~/contracts/components/videos/VideoCardProps"
import type { MediaInfoProps } from "~/contracts/components/UI/MediaInfoProps"


const props = defineProps<VideoCardProps>()


// Variables
const { t } = useI18n()

const info = ref<MediaInfoProps[]>([
    {
        label: t('videos.video.res'),
        value: props.video.resolution
    },
    {
        label: t('videos.video.size'),
        value: props.video.size
    },
    {
        label: t('videos.video.ratio'),
        value: props.video.ratio
    },
    {
        label: t('videos.video.duration'),
        value: props.video.duration
    },
    {
        label: t('videos.video.format'),
        value: props.video.format
    }
])
</script>
