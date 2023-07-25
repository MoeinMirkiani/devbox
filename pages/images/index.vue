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

import images from '~/db/images.json'

useHead(({
    title: 'Images'
}))

definePageMeta({
    layout: 'search'
})
</script>
