<template>
    <div class="image-information rounded-4 border border-gray-90 bg-gray-98 px-6 py-4 mb-5 h-[372px] flex flex-col justify-between">
        <div class="flex flex-col items-stretch gap-6">
            <p class="text-gray-30 font-medium">{{ $t('images.info') }}</p>

            <ul class="image-information__list flex flex-col gap-3">
                <li class="image-information__item">
                    <MediaInfo :label="$t('images.image.res')" :value="resolution" is-large />
                </li>

                <li class="image-information__item">
                    <MediaInfo :label="$t('images.image.size')" :value="size" is-large />
                </li>

                <li class="image-information__item">
                    <MediaInfo :label="$t('images.image.ratio')" :value="ratio" is-large />
                </li>

                <li class="image-information__item">
                    <MediaInfo :label="$t('images.image.dimension')" :value="dimension" is-large />
                </li>

                <li class="image-information__item">
                    <MediaInfo :label="$t('images.image.format')" :value="format.toUpperCase()" is-large />
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


defineProps<ImageInformationProps>()
</script>

<style lang="scss" scoped>
.image {
    &-download {
        transition: all 0.2s linear;
    }
}
</style>
