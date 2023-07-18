<template>
    <div class="images-page__wrapper">
        <AppContainer>IMAGES</AppContainer>
    </div>
</template>

<script lang="ts" setup>
import AppContainer from "~/components/UI/AppContainer.vue"
import PageTitle from "~/components/PageTitle.vue"

useHead(({
    title: 'Images'
}))

definePageMeta({
    layout: 'search'
})
</script>
