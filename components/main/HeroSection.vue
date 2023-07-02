<template>
    <div id="hero" class="pt-[168px] pb-17">
        <AppContainer>
            <WordSwiper :words="categories" :fixed-word="$t('main.hero.fixed')" class="mb-6" />

            <p class="hero__description text-24 font-light leading-9 max-w-[580px] mx-auto text-center opacity-80">{{ $t('main.hero.description') }}</p>
        </AppContainer>
    </div>
</template>

<script setup lang="ts">
import AppContainer from '~/components/UI/AppContainer.vue'
import WordSwiper from '~/components/WordSwiper.vue'

const categories: string[] = ['images', 'videos', 'avatars', 'sounds', 'logos']
</script>

<style lang="scss" scoped>
#hero {
    background: url('@/assets/images/main--hero-bg.jpg') no-repeat top center/cover;
}
</style>
