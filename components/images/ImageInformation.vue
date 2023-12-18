<template>
    <div class="image-information rounded-4 border border-gray-90 bg-gray-98 px-6 py-4 mb-5 h-[372px] flex flex-col justify-between">
        <div class="flex flex-col items-stretch gap-6">
            <p class="text-gray-30 font-medium">{{ $t('image.info') }}</p>

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

        <AppButton class="mx-auto">{{ $t('buttons.download') }}</AppButton>
    </div>
</template>

<script lang="ts" setup>
import AppButton from "~/components/UI/AppButton.vue"
import type { ImageInformationProps } from "~/contracts/components/images/ImageInformationProps"
import MediaInfo from "~/components/UI/MediaInfo.vue";

defineProps<ImageInformationProps>()
</script>

<style lang="scss" scoped></style>
