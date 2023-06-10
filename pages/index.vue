<template>
    <div id="hero" class="-mt-17 pt-[168px] pb-17">
        <AppContainer>
            <TypeSwiper :words="categories" :fixed-word="$t('main.hero.fixed')" />
        </AppContainer>
    </div>
</template>

<script setup lang="ts">
import AppContainer from '~/components/UI/AppContainer.vue'
import TypeSwiper from '~/components/TypeSwiper.vue'

const categories: string[] = ['images', 'videos', 'avatars', 'sounds', 'logos']
</script>

<style lang="scss" scoped>
#hero {
    background: url('@/assets/images/main--hero-bg.jpg') no-repeat center center/cover;
}
</style>
