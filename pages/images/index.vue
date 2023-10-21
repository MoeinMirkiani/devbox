<template>
    <div class="images-page__wrapper pt-8 pb-16 px-20 bg-gray-98 min-h-[calc(100vh-248px)] flex justify-center items-center">
        <AppContainer>
            <ImageList :items="images" />
            <!--<SpinnerIcon v-if="loading" class="mx-auto" />-->
        </AppContainer>
    </div>
</template>

<script lang="ts" setup>
import AppContainer from "~/components/UI/AppContainer.vue"
import ImageList from "~/components/images/ImageList.vue"
import ImageService from "~/services/ImageService"
import type { Images } from "~/contracts/types/Image"


useHead(({
    title: 'Images'
}))

definePageMeta({
    layout: 'search'
})

// Variables
const loading = ref<boolean>(false)
const images = ref<Images>([])
const currentPage = ref<number>(1)
const perPage = ref<number>(9)
// const items = ref<Images>([
//     {
//         id: '1',
//         source: {
//             title: 'Source 1',
//             link: 'https://picsum.photos/200/300'
//         },
//         title: 'Image 1',
//         file: 'https://picsum.photos/200/300',
//         resolution: '200x300',
//         size: '1.5MB',
//         ratio: '16:9',
//         dimension: '200x300',
//         format: 'jpg'
//     },
//     {
//         id: '1',
//         source: {
//             title: 'Source 1',
//             link: 'https://picsum.photos/200/300'
//         },
//         title: 'Image 1',
//         file: 'https://picsum.photos/200/300',
//         resolution: '200x300',
//         size: '1.5MB',
//         ratio: '16:9',
//         dimension: '200x300',
//         format: 'jpg'
//     },
//     {
//         id: '1',
//         source: {
//             title: 'Source 1',
//             link: 'https://picsum.photos/200/300'
//         },
//         title: 'Image 1',
//         file: 'https://picsum.photos/200/300',
//         resolution: '200x300',
//         size: '1.5MB',
//         ratio: '16:9',
//         dimension: '200x300',
//         format: 'jpg'
//     },
//     {
//         id: '1',
//         source: {
//             title: 'Source 1',
//             link: 'https://picsum.photos/200/300'
//         },
//         title: 'Image 1',
//         file: 'https://picsum.photos/200/300',
//         resolution: '200x300',
//         size: '1.5MB',
//         ratio: '16:9',
//         dimension: '200x300',
//         format: 'jpg'
//     }
// ])

// Methods
const { data } = await ImageService.list(perPage.value)
images.value = images.value.concat(data.value)
console.log(data.value)
</script>
