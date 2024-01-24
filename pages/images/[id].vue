<template>
    <div class="media min-h-[calc(100vh-148px)] pt-8 pb-16 px-20">
        <AppContainer>
            <MediaTitle :title="image.title" :source="image.source" class="image__title mb-8" />

            <div class="media__detail flex items-start gap-4 mb-10">
                <ImagePreview :image="image.featuredImage" :alt="image.title" :is-free="image.isFree" class="w-2/3" />

                <ImageInformation
                    :resolution="image.resolution"
                    :size="image.size"
                    :ratio="image.ratio"
                    :dimension="image.dimension"
                    :format="image.format"
                    :file="image.file"
                    class="w-1/3"
                />
            </div>

            <ExploreMore :title="$t('images.explore')">
                <ImageList :loading="false" :items="more" />
            </ExploreMore>
        </AppContainer>
    </div>
</template>

<script lang="ts" setup>
import ImageService from "~/services/ImageService"
import type { Image, ImageListItem } from "~/contracts/types/Image"


// Composables
const id = useRouteInfo({ location: 'param', name: 'id' })


// Variables
const image = ref<Image>({} as Image)
const title = ref<string>('')
const more = ref<ImageListItem[]>([])


// Methods
const fetchImageDetail = async () => {
    const { data } = await ImageService.detail(id.value)
    image.value = data.value
    title.value = image.value.title
}

useSeoMeta({
    title: () => title.value
})

const fetchMore = async () => {
    const { data } = await ImageService.list(7, '', '')
    more.value = data.value.images.filter(item => item.id !== id.value).slice(0, 6)
}

await Promise.all([
    fetchImageDetail(),
    fetchMore()
])
</script>
