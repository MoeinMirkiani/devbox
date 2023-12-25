<template>
    <div class="image bg-white rounded-5 shadow-card hover:shadow-card-hover transition-all">
        <NuxtLink :to="{ path: `/images/${image.id}` }" class="image--link block p-3">
            <div class="image--cover w-full rounded-5 overflow-hidden">
                <img :src="image.featuredImage" alt="image" class="aspect-[1.6] object-cover" />
            </div>

            <div class="image--detail pt-4 pb-1 px-3">
                <ul class="image--detail__list flex flex-col gap-2">
                    <li v-for="item in info" :key="item.label" class="image--detail__item">
                        <MediaInfo :label="item.label" :value="item.value" :is-large="item.isLarge" />
                    </li>
                </ul>
            </div>
        </NuxtLink>
    </div>
</template>

<script lang="ts" setup>
import MediaInfo from "~/components/UI/MediaInfo.vue"
import type { ImageCardProps } from "~/contracts/components/images/ImageCardProps"
import type { MediaInfoProps } from "~/contracts/components/UI/MediaInfoProps"


const props = defineProps<ImageCardProps>()


// Variables
const info = ref<MediaInfoProps[]>([
    {
        label: 'Resolution',
        value: props.image.resolution,
        isLarge: false
    },
    {
        label: 'Size',
        value: props.image.size,
        isLarge: false
    },
    {
        label: 'Ratio',
        value: props.image.ratio,
        isLarge: false
    },
    {
        label: 'Dimension',
        value: props.image.dimension,
        isLarge: false
    }
])
</script>
