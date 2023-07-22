<template>
    <div class="text-14 text-gray-60">
        {{ label }}
        <span class="ml-2 font-medium text-gray-30">{{ value }}</span>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    label: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    }
})
</script>
