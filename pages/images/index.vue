<template>
    <div class="images-page__wrapper pt-8 pb-16 px-20 bg-gray-98">
        <AppContainer>
            <div class="images flex flex-wrap gap-x-4 gap-y-5">
                <ImageCard :image="image" />
                <ImageCard :image="image" />
                <ImageCard :image="image" />
                <ImageCard :image="image" />
                <ImageCard :image="image" />
                <ImageCard :image="image" />
            </div>
        </AppContainer>
    </div>
</template>

<script lang="ts" setup>
import AppContainer from "~/components/UI/AppContainer.vue"
import ImageCard from "~/components/images/ImageCard.vue"

import image2 from '~/assets/images/main--images-sample2.jpg'

useHead(({
    title: 'Images'
}))

definePageMeta({
    layout: 'search'
})

const image = {
    cover: image2,
    resolution: '2160px x 3840px',
    size: '24KB',
    ratio: '1:2',
    dimension: '1440 x 800',
    id: '123'
}
</script>
