<template>
    <PageSearch :title="$t('logos.title')" />

    <div class="videos-page__wrapper pt-8 pb-16 px-20 bg-gray-98 min-h-[calc(100vh-248px)] flex justify-center">
        <AppContainer>LOGOS</AppContainer>
    </div>
</template>

<script lang="ts" setup>
// Composables
const { t } = useI18n()

useHead(({
    title: t('logos.title')
}))
</script>
