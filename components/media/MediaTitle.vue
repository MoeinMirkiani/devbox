<template>
    <div class="media-title">
        <h1 class="media-title__title mb-3 text-24 text-gray-30">{{ title }}</h1>
        <span class="media-title__source text-16 text-gray-50">From {{ source }}</span>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true
    }
})
</script>
