<template>
    <div class="images-page__wrapper pt-8 pb-16 px-20 bg-gray-98 min-h-[calc(100vh-248px)] flex justify-center items-center">
        <AppContainer>
            <ImagesList :images="images" />
            <SpinnerIcon v-if="loading" class="mx-auto" />
        </AppContainer>
    </div>
</template>

<script lang="ts" setup>
import AppContainer from "~/components/UI/AppContainer.vue"
import ImagesList from "~/components/images/ImagesList.vue"
import SpinnerIcon from "~/components/UI/SpinnerIcon.vue"
import { Media } from "~/types"

useHead(({
    title: 'Images'
}))

definePageMeta({
    layout: 'search'
})

// Variables
const loading = ref<boolean>(false)
const images = ref<Media[]>([])
const currentPage = ref<number>(1)
const perPage = ref<number>(9)

// Methods
const fetchImages = async () => {
    loading.value = true
    try {
        const { data } = await useFetch(`/api/images/?currentPage=${currentPage.value}&perPage=${perPage.value}`)
        images.value = images.value.concat(data.value as Media[])
    } catch (e) {
        console.log(e)
    }
    loading.value = false
}

// Hooks
onMounted(() => {
    fetchImages()
})
</script>
