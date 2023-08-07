<template>
    <div>{{ image.title }}</div>
</template>

<script lang="ts" setup>
const route = useRoute()

const id = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id
const image = useFindImage(id)
</script>
