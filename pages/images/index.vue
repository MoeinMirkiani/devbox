<template>
    <div class="images-page__wrapper pt-8 pb-16 px-20 bg-gray-98">
        <AppContainer>
            <div class="images flex flex-wrap gap-x-4 gap-y-5">
                <ImageCard
                    v-for="image in images"
                    :key="image.id"
                    :image="image"
                    class="basis-[100%] md:basis-[34%] md:max-w-[calc((100%-16px)/2)] lg:basis-[26%] lg:max-w-[calc((100%-32px)/3)] flex-grow"
                />
            </div>
        </AppContainer>
    </div>
</template>

<script lang="ts" setup>
import AppContainer from "~/components/UI/AppContainer.vue"
import ImageCard from "~/components/images/ImageCard.vue"

import image1 from '~/assets/images/main--images-sample1.jpg'
import image2 from '~/assets/images/main--images-sample2.jpg'
import image3 from '~/assets/images/main--images-sample3.jpg'
import image4 from '~/assets/images/main--images-sample4.jpg'

useHead(({
    title: 'Images'
}))

definePageMeta({
    layout: 'search'
})

const images = [
    {
        cover: image1,
        resolution: '2160px x 3840px',
        size: '24KB',
        ratio: '1:2',
        dimension: '1440 x 800',
        id: '12'
    },
    {
        cover: image2,
        resolution: '2160px x 3840px',
        size: '24KB',
        ratio: '1:2',
        dimension: '1440 x 800',
        id: '23'
    },
    {
        cover: image3,
        resolution: '2160px x 3840px',
        size: '24KB',
        ratio: '1:2',
        dimension: '1440 x 800',
        id: '13'
    },
    {
        cover: image4,
        resolution: '2160px x 3840px',
        size: '24KB',
        ratio: '1:2',
        dimension: '1440 x 800',
        id: '32'
    },
    {
        cover: image1,
        resolution: '2160px x 3840px',
        size: '24KB',
        ratio: '1:2',
        dimension: '1440 x 800',
        id: '45'
    },
    {
        cover: image2,
        resolution: '2160px x 3840px',
        size: '24KB',
        ratio: '1:2',
        dimension: '1440 x 800',
        id: '46'
    },
    {
        cover: image3,
        resolution: '2160px x 3840px',
        size: '24KB',
        ratio: '1:2',
        dimension: '1440 x 800',
        id: '56'
    },
    {
        cover: image4,
        resolution: '2160px x 3840px',
        size: '24KB',
        ratio: '1:2',
        dimension: '1440 x 800',
        id: '65'
    },
    {
        cover: image1,
        resolution: '2160px x 3840px',
        size: '24KB',
        ratio: '1:2',
        dimension: '1440 x 800',
        id: '78'
    },
    {
        cover: image2,
        resolution: '2160px x 3840px',
        size: '24KB',
        ratio: '1:2',
        dimension: '1440 x 800',
        id: '79'
    },
    {
        cover: image3,
        resolution: '2160px x 3840px',
        size: '24KB',
        ratio: '1:2',
        dimension: '1440 x 800',
        id: '89'
    },
    {
        cover: image4,
        resolution: '2160px x 3840px',
        size: '24KB',
        ratio: '1:2',
        dimension: '1440 x 800',
        id: '98'
    },
    {
        cover: image1,
        resolution: '2160px x 3840px',
        size: '24KB',
        ratio: '1:2',
        dimension: '1440 x 800',
        id: '37'
    },
    {
        cover: image2,
        resolution: '2160px x 3840px',
        size: '24KB',
        ratio: '1:2',
        dimension: '1440 x 800',
        id: '73'
    }
]
</script>
