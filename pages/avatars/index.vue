<template>
    <div class="videos-page__wrapper">
        <AppContainer>AVATARS</AppContainer>
    </div>
</template>

<script lang="ts" setup>
import AppContainer from "~/components/UI/AppContainer.vue"

useHead(({
    title: 'Avatars'
}))

definePageMeta({
    layout: 'search'
})
</script>
