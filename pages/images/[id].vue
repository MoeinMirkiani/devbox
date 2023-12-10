<template>
    <div class="image min-h-[calc(100vh-148px)] pt-8 pb-16 px-20">
        <AppContainer>
            <MediaTitle :title="image.title" :source="image.source" class="mb-8" />

            <ImagePreview :image="image.featuredImage" :alt="image.title" />
        </AppContainer>
    </div>
</template>

<script lang="ts" setup>
import ImagePreview from "~/components/images/ImagePreview.vue"
import AppContainer from "~/components/UI/AppContainer.vue"
import MediaTitle from "~/components/media/MediaTitle.vue"
import ImageService from "~/services/ImageService"
import { type Image } from "~/contracts/types/Image"

// Variables
const route = useRoute()
const id = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id
const image = ref<Image>({} as Image)
const title = ref<string>('')

// Methods
const fetchImageDetail = async () => {
    const { data } = await ImageService.detail(id)
    image.value = data.value
    title.value = image.value.title
}

useSeoMeta({
    title: () => title.value
})

await fetchImageDetail()
</script>
