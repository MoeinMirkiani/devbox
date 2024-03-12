<template>
    <div class="pt-3 px-3 pb-6 bg-white rounded-5 shadow-card hover:shadow-card-hover">
        <div class="avatar--cover relative mb-4 rounded-5 overflow-hidden aspect-square">
            <img :src="props.featuredImage" alt="avatar" class="w-full h-full object-cover" />
        </div>

        <div class="avatar--detail px-1 flex flex-col gap-4">
            <ul class="avatar--detail__list flex flex-col gap-2">
                <li v-for="item in info" :key="item.label" class="avatar--detail__item">
                    <MediaInfo :label="item.label" :value="item.value" />
                </li>
            </ul>

            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { AvatarDetailProps } from "~/contracts/components/avatars/AvatarDetailProps"
import type { MediaInfoProps } from "~/contracts/components/media/MediaInfoProps"


// Macros
const props = defineProps<AvatarDetailProps>()


// Composables
const { t } = useI18n()


// Variables
const info = ref<MediaInfoProps[]>([
    {
        label: t('avatars.avatar.format'),
        value: props.format
    },
    {
        label: t('avatars.avatar.size'),
        value: props.size
    },
    {
        label: t('avatars.avatar.res'),
        value: props.resolution
    }
])
</script>
