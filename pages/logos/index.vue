<template>
    <div class="videos-page__wrapper">
        <AppContainer>LOGOS</AppContainer>
    </div>
</template>

<script lang="ts" setup>
import AppContainer from "~/components/UI/AppContainer.vue"

useHead(({
    title: 'Logos'
}))

definePageMeta({
    layout: 'search'
})
</script>
