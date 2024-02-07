<template>
    <div class="avatars-page__wrapper pt-8 pb-16 px-20 bg-gray-98 min-h-[calc(100vh-248px)] flex justify-center">
        <AppContainer>
            Avatars
        </AppContainer>
    </div>
</template>

<script lang="ts" setup>
const { t } = useI18n()

useHead(({
    title: t('avatars.title')
}))
</script>
