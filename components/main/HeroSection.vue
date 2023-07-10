<template>
    <section id="hero" class="hero pt-[168px] pb-[144px]">
        <AppContainer>
            <WordSwiper :words="categories" :fixed-word="$t('main.hero.fixed')" class="mb-6" />

            <p class="hero__description text-24 font-light leading-9 max-w-[580px] mx-auto text-center opacity-80 mb-20">
                {{ $t('main.hero.description') }}
            </p>

            <CategoriesBanner :categories="categories" />
        </AppContainer>
    </section>
</template>

<script setup lang="ts">
import AppContainer from '~/components/UI/AppContainer.vue'
import WordSwiper from '~/components/swiper/WordSwiper.vue'
import CategoriesBanner from "~/components/category/CategoriesBanner.vue"

const categories: object[] = [
    {
        title: 'Images',
        icon: 'ic--images'
    },
    {
        title: 'Videos',
        icon: 'ic--videos'
    },
    {
        title: 'Avatars',
        icon: 'ic--avatars'
    },
    {
        title: 'Sounds',
        icon: 'ic--sounds'
    },
    {
        title: 'Logos',
        icon: 'ic--logos'
    }
]
</script>
