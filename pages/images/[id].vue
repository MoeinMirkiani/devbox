<template>
    <div class="image min-h-[calc(100vh-148px)] pt-8 pb-16 px-20">
        <AppContainer>
            <MediaTitle :title="image.title" :source="image.source" class="image__title mb-8" />

            <div class="image__detail flex items-start gap-4 mb-10">
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

            <div class="image__explore">
                <h3 class="text-gray-30 text-24 font-medium mb-6">{{ $t('images.explore') }}</h3>

                <ImageList :loading="false" :items="more" />
            </div>
        </AppContainer>
    </div>
</template>

<script lang="ts" setup>
import AppContainer from "~/components/UI/AppContainer.vue"
import MediaTitle from "~/components/media/MediaTitle.vue"
import ImagePreview from "~/components/images/ImagePreview.vue"
import ImageInformation from "~/components/images/ImageInformation.vue"
import ImageList from "~/components/images/ImageList.vue"
import ImageService from "~/services/ImageService"
import type { Image, Images } from "~/contracts/types/Image"
import { useRouteParam } from "~/composables/useRouteParam"


// Composables
const id = useRouteParam('id')


// Variables
const image = ref<Image>({} as Image)
const title = ref<string>('')
const more = ref<Images>([])


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

await fetchImageDetail()
await fetchMore()
</script>
