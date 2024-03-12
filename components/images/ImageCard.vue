<template>
    <div class="image bg-white rounded-5 shadow-card hover:shadow-card-hover transition-all">
        <NuxtLink :to="{ path: `/images/${props.image.id}` }" class="image--link block p-3">
            <div class="image--cover w-full rounded-5 overflow-hidden aspect-[1.6]">
                <img :src="props.image.featuredImage" alt="image" class="w-full h-full object-cover" />
            </div>

            <div class="image--detail pt-4 pb-1 px-3">
                <ul class="image--detail__list flex flex-col gap-2">
                    <li v-for="item in info" :key="item.label" class="image--detail__item">
                        <MediaInfo :label="item.label" :value="item.value" />
                    </li>
                </ul>
            </div>
        </NuxtLink>
    </div>
</template>

<script lang="ts" setup>
import type { ImageCardProps } from "~/contracts/components/images/ImageCardProps"
import type { MediaInfoProps } from "~/contracts/components/UI/MediaInfoProps"


const props = defineProps<ImageCardProps>()


// Variables
const { t } = useI18n()

const info = ref<MediaInfoProps[]>([
    {
        label: t('images.image.res'),
        value: props.image.resolution
    },
    {
        label: t('images.image.size'),
        value: props.image.size
    },
    {
        label: t('images.image.ratio'),
        value: props.image.ratio
    },
    {
        label: t('images.image.dimension'),
        value: props.image.dimension
    }
])
</script>
