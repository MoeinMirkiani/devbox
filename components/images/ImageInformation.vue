<template>
    <div class="image-information rounded-4 border border-gray-90 bg-gray-98 px-6 py-4 mb-5 h-[372px] flex flex-col justify-between">
        <div class="flex flex-col items-stretch gap-6">
            <p class="text-gray-30 font-medium">{{ $t('images.info') }}</p>

            <ul class="image-information__list flex flex-col gap-3">
                <li v-for="item in info" :key="item.label" class="image-information__item">
                    <MediaInfo :label="item.label" :value="item.value" is-large />
                </li>
            </ul>
        </div>

        <a
            :href="file"
            download
            class="image-download bg-primary-green text-white text-18 px-12 py-4 rounded-[10px] hover:bg-primary-shade mx-auto"
        >
            {{ $t('buttons.download') }}
        </a>
    </div>
</template>

<script lang="ts" setup>
import type { ImageInformationProps } from "~/contracts/components/images/ImageInformationProps"
import type { MediaInfoProps } from "~/contracts/components/UI/MediaInfoProps"


const props = defineProps<ImageInformationProps>()


// Variables
const { t } = useI18n()

const info = ref<MediaInfoProps[]>([
    {
        label: t('images.image.res'),
        value: props.resolution
    },
    {
        label: t('images.image.size'),
        value: props.size
    },
    {
        label: t('images.image.ratio'),
        value: props.ratio
    },
    {
        label: t('images.image.dimension'),
        value: props.dimension
    },
    {
        label: t('images.image.format'),
        value: props.format
    }
])
</script>

<style lang="scss" scoped>
.image {
    &-download {
        transition: all 0.2s linear;
    }
}
</style>
