<template>
    <div class="image min-h-[calc(100vh-148px)] pt-8 pb-16 px-20">
        <AppContainer>
            <MediaTitle :title="image.title" :source="image.source" class="mb-8" />

            <ImagePreview :image="image.cover" :alt="image.title" />
        </AppContainer>
    </div>
</template>

<script lang="ts" setup>
import ImagePreview from "~/components/images/ImagePreview.vue"
import AppContainer from "~/components/UI/AppContainer.vue"

const route = useRoute()

const id = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id
const image = useFindImage(id)
</script>
