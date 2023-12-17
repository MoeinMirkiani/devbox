<template>
    <div class="text-gray-60" :class="large ? 'text-16' : 'text-14'">
        {{ label }}
        <span class="ml-2 font-medium text-gray-30">{{ value }}</span>
    </div>
</template>

<script lang="ts" setup>
import type { MediaInfoProps } from "~/contracts/components/UI/MediaInfoProps"

withDefaults(defineProps<MediaInfoProps>(), {
    large: false
})
</script>
