<template>
    <ClientOnly>
        <media-player :src="props.src" class="media-player h-full border-0 rounded-0 overflow-hidden">
            <media-provider class="media-provider rounded-0">
                <media-poster
                    class="absolute block h-full w-full opacity-0 data-[visible]:opacity-100"
                    :src="props.poster"
                    :alt="props.alt"
                ></media-poster>
            </media-provider>

            <media-controls class="absolute z-10 flex h-full w-full flex-col opacity-0 data-[visible]:opacity-100">
                <media-controls-group class="h-10 w-full flex items-center px-2">
                    <media-time class="time" type="duration"></media-time>
                </media-controls-group>

                <div class="flex-1"></div>

                <media-controls-group class="flex justify-center w-full items-center px-2">
                    <media-play-button class="group outline-none">
                        <media-icon type="play" class="hidden h-16 w-16 group-data-[paused]:block">
                            <NuxtIcon name="ic--play" filled />
                        </media-icon>
                    </media-play-button>
                </media-controls-group>

                <div class="flex-1"></div>

                <media-controls-group class="bottom h-10 w-full flex items-center px-2 translate-y-10 transition-all">
                    <media-play-button class="group outline-none min-w-7 h-7 w-7">
                        <media-icon type="pause">
                            <NuxtIcon name="ic--pause" filled />
                        </media-icon>
                    </media-play-button>

                    <media-time-slider class="group relative mx-2 inline-flex h-10 w-full cursor-pointer touch-none select-none items-center outline-none aria-hidden:hidden">
                        <!-- Track -->
                        <div class="relative z-0 h-[5px] w-full rounded-sm bg-white/30 ring-sky-400 group-data-[focus]:ring-[3px]">
                            <!-- Track Fill -->
                            <div class="absolute h-full w-[var(--slider-fill)] rounded-sm bg-primary-green will-change-[width]"></div>
                            <!-- Progress -->
                            <div class="absolute z-10 h-full w-[var(--slider-progress)] rounded-sm bg-white/50 will-change-[width]"></div>
                        </div>

                        <!-- Thumb -->
                        <div class="absolute left-[var(--slider-fill)] top-1/2 z-20 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white ring-white/40 transition-opacity will-change-[left] group-data-[dragging]:ring-4"></div>
                    </media-time-slider>

                    <media-time class="bg-gray-30 bg-opacity-50 py-1 px-2 rounded-1 text-14 text-gray-90" type="current"></media-time>
                </media-controls-group>
            </media-controls>
        </media-player>
    </ClientOnly>
</template>

<script lang="ts" setup>
import 'vidstack/player/styles/default/theme.css'
import 'vidstack/player/styles/default/layouts/video.css'
import 'vidstack/player'
import 'vidstack/player/layouts'
import 'vidstack/player/ui'
import type { AppVideoPlayerProps } from "~/contracts/components/UI/AppVideoPlayerProps"


const props = defineProps<AppVideoPlayerProps>()
</script>

<style lang="scss" scoped>
media-player {
    media-provider {
        :deep(video) {
            @apply w-full h-full object-contain
        }
    }

    media-poster {
        :deep(img) {
            @apply w-full h-full object-cover
        }
    }

    media-time {
        @apply bg-gray-30 bg-opacity-50 py-1 px-2 rounded-1 text-14 text-gray-90
    }

    &[data-playing] {
        .bottom {
            @apply translate-y-0
        }
    }
}
</style>
