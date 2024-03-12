<template>
    <div class="pt-3 px-3 pb-6 bg-white rounded-5 shadow-card hover:shadow-card-hover">
        <div class="logo--cover relative mb-3 p-5 rounded-5 overflow-hidden aspect-square bg-gray-98">
            <img :src="props.featuredImage" alt="logo" class="w-full h-full object-contain" />
        </div>

        <div class="logo--detail px-1 flex flex-col gap-4">
            <h6 class="text-18 font-medium text-gray-30">{{ props.title }}</h6>

            <ul class="logo--detail__list flex flex-col gap-2">
                <li v-for="item in info" :key="item.label" class="logo--detail__item">
                    <MediaInfo :label="item.label" :value="item.value" />
                </li>
            </ul>

            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { LogoDetailProps } from "~/contracts/components/logos/LogoDetailProps"
import type { MediaInfoProps } from "~/contracts/components/media/MediaInfoProps"


// Macros
const props = defineProps<LogoDetailProps>()


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
        value: props.format
    }
])
</script>
