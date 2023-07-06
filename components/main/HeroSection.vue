<template>
    <section id="hero" class="hero pt-[168px] pb-[144px]">
        <AppContainer>
            <WordSwiper :words="categories" :fixed-word="$t('main.hero.fixed')" class="mb-6" />

            <p class="hero__description text-24 font-light leading-9 max-w-[580px] mx-auto text-center opacity-80 mb-20">
                {{ $t('main.hero.description') }}
            </p>

            <div class="hero__categories flex justify-center divide-x divide-gray-90 bg-gray-98 rounded-6 py-6">
                <div v-for="(category, i) in categories" :key="i" class="hero__category--wrapper flex-1">
                    <CategoryCard :category="category.title" :icon="category.icon" />
                </div>
            </div>
        </AppContainer>
    </section>
</template>

<script setup lang="ts">
import AppContainer from '~/components/UI/AppContainer.vue'
import WordSwiper from '~/components/swiper/WordSwiper.vue'
import CategoryCard from '~/components/category/CategoryCard.vue'

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
