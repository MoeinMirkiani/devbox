<template>
    <div class="videos-page__wrapper">
        <AppContainer>VIDEOS</AppContainer>
    </div>
</template>

<script lang="ts" setup>
import AppContainer from "~/components/UI/AppContainer.vue"
import PageTitle from "~/components/PageTitle.vue"

useHead(({
    title: 'Videos'
}))

definePageMeta({
    layout: 'search'
})
</script>
