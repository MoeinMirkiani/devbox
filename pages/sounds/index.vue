<template>
    <div class="videos-page__wrapper">
        <AppContainer>SOUNDS</AppContainer>
    </div>
</template>

<script lang="ts" setup>
import AppContainer from "~/components/UI/AppContainer.vue"

useHead(({
    title: 'Sounds'
}))

definePageMeta({
    layout: 'search'
})
</script>
