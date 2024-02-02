<template>
    <div class="sound py-3 pl-3 pr-4 bg-white rounded-5 shadow-card">
        <AppAudioPlayer
            :title="props.title"
            :file="props.file"
            :poster="props.poster"
            :format="props.format"
            :size="props.size"
        />
    </div>
</template>

<script lang="ts" setup>
import type { SoundCardProps } from "~/contracts/components/sounds/SoundCardProps"

const props = defineProps<SoundCardProps>()
</script>
