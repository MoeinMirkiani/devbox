<template>
    <ClientOnly>
        <media-player :src="props.file" class="flex gap-4">
            <media-provider class="relative">
                <media-poster
                    :src="props.poster"
                    :alt="props.title"
                    class="block w-[130px] h-[130px] rounded-5 overflow-hidden"
                ></media-poster>

                <media-controls>
                    <media-controls-group class="flex justify-center items-center w-full px-2">
                        <media-play-button class="group outline-none h-12 w-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <media-icon type="play" class="hidden group-data-[paused]:block">
                                <NuxtIcon name="ic--play" filled />
                            </media-icon>
                        </media-play-button>

                        <media-play-button class="group outline-none h-12 w-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <media-icon type="pause" class="group-data-[paused]:hidden">
                                <NuxtIcon name="ic--pause" filled />
                            </media-icon>
                        </media-play-button>
                    </media-controls-group>
                </media-controls>
            </media-provider>

            <div class="w-[calc(100%-146px)] flex flex-col">
                <media-controls class="flex flex-col">
                    <div class="flex justify-between items-center gap-4 mb-3">
                        <p class="text-16 font-bold text-gray-30 truncate">{{ props.title }}</p>

                        <AppPopover align="right">
                            <IconButton name="ic--download" button-size="32px" icon-size="24px" radius="50%" class="min-w-8 pointer-events-auto" />

                            <template v-slot:content>
                                <SoundDownload :items="downloadItems" />
                            </template>
                        </AppPopover>
                    </div>

                    <div class="flex justify-between items-center mb-3">
                        <media-time class="time text-14 text-gray-60" type="current"></media-time>

                        <media-time class="time text-14 text-gray-60" type="duration"></media-time>
                    </div>

                    <media-time-slider class="group relative inline-flex w-full mb-5 cursor-pointer touch-none select-none items-center outline-none aria-hidden:hidden">
                        <!-- Track -->
                        <div class="relative z-0 h-[6px] w-full bg-gray-95 rounded-3 pointer-events-auto">
                            <!-- Track Fill -->
                            <div class="absolute z-10 h-full w-[var(--slider-fill)] will-change-[width] rounded-3 bg-primary-green"></div>
                            <!-- Progress -->
                            <div class="absolute h-full w-[var(--slider-progress)] will-change-[width]"></div>
                        </div>

                        <!-- Thumb -->
                        <div class="absolute left-[var(--slider-fill)] top-1/2 z-20 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white will-change-[left] border border-gray-90 pointer-events-auto"></div>
                    </media-time-slider>

                    <div class="flex justify-between items-center">
                        <MediaInfo :label="$t('sounds.sound.format')" :value="props.format" />

                        <MediaInfo :label="$t('sounds.sound.size')" :value="props.size" />
                    </div>
                </media-controls>
            </div>
        </media-player>
    </ClientOnly>
</template>

<script lang="ts" setup>
import 'vidstack/player'
import 'vidstack/player/ui'
import type { AppAudioPlayerProps } from "~/contracts/components/UI/AppAudioPlayerProps"
import AppPopover from "~/components/UI/AppPopover.vue";


const props = defineProps<AppAudioPlayerProps>()

// Variables
const downloadItems = computed(() => [{ label: props.format, link: props.file }])
</script>
