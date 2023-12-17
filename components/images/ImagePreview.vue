<template>
    <div class="image-preview flex flex-col items-center">
        <div class="image-preview__wrapper rounded-4 border border-gray-90 p-5 mb-5 h-[372px] flex justify-center items-center">
            <img :src="image" :alt="alt" class="object-contain w-full h-full" />
        </div>

        <div class="image-preview__license flex items-center gap-2">
            <NuxtIcon name="ic--free" class="inline-block w-3 h-3 text-primary-green" />
            <span class="text-14 text-gray-30">{{ $t('images.free') }}</span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { ImagePreviewProps } from "~/contracts/components/images/ImagePreviewProps"

defineProps<ImagePreviewProps>()
</script>
