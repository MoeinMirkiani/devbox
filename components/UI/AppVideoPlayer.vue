<template>
    <media-player :src="props.src">
        <media-provider>
            <media-poster
                :src="props.poster"
                :alt="props.alt"
            ></media-poster>
        </media-provider>

        <media-video-layout></media-video-layout>
    </media-player>
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
