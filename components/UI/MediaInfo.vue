<template>
    <p class="text-gray-60" :class="props.isLarge ? 'text-16' : 'text-14'">
        {{ props.label }}
        <span class="ml-2 font-medium text-gray-30">{{ props.value }}</span>
    </p>
</template>

<script lang="ts" setup>
import type { MediaInfoProps } from "~/contracts/components/UI/MediaInfoProps"

const props = withDefaults(defineProps<MediaInfoProps>(), {
    isLarge: false
})
</script>
