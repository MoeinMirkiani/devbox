<template>
    <div class="images-page__wrapper pt-8 pb-16 px-20 bg-gray-98 min-h-screen">
        <AppContainer>
            <ImagesList :images="searchedMedias" />

            <SpinnerIcon class="mt-10 mx-auto" />

            <span ref="loadMore" />
        </AppContainer>
    </div>
</template>

<script lang="ts" setup>
import AppContainer from "~/components/UI/AppContainer.vue"
import ImagesList from "~/components/images/ImagesList.vue"

import imagesDb from '~/db/images.json'
import SpinnerIcon from "~/components/UI/SpinnerIcon.vue";

useHead(({
    title: 'Images'
}))

definePageMeta({
    layout: 'search'
})

const { keyword, searchedMedias } = useSearch(imagesDb)
</script>
