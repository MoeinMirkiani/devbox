<template>
    <div class="video-preview flex flex-col items-center">
        <div class="video-preview__wrapper rounded-4 border border-gray-90 bg-gray-98 p-5 mb-5 w-full h-[372px] flex justify-center items-center">
            <AppVideoPlayer :src="props.video" :poster="props.poster" :alt="props.alt" />
        </div>

        <div class="video-preview__license flex items-center gap-2">
            <template v-if="isFree">
                <NuxtIcon name="ic--free" class="inline-block w-3 h-3 text-primary-green" />
                <span class="text-14 text-gray-30">{{ $t('videos.free') }}</span>
            </template>

            <template v-else>
                <NuxtIcon name="ic--not-free" class="inline-block w-3 h-3 text-error" />
                <span class="text-14 text-gray-30">{{ $t('videos.notFree') }}</span>
            </template>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { VideoPreviewProps } from "~/contracts/components/videos/VideoPreviewProps"

const props = defineProps<VideoPreviewProps>()
</script>
