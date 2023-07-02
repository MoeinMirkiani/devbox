<template>
    <section id="hero" class="hero pt-[168px] pb-[144px]">
        <AppContainer>
            <WordSwiper :words="categories" :fixed-word="$t('main.hero.fixed')" class="mb-6" />

            <p class="hero__description text-24 font-light leading-9 max-w-[580px] mx-auto text-center opacity-80 mb-20">{{ $t('main.hero.description') }}</p>

            <div class="hero__categories flex justify-center divide-x divide-gray-90 bg-gray-98 rounded-6 py-6">
                <div v-for="(category, i) in categories" :key="i" class="hero__category--wrapper flex-1">
                    <NuxtLink :to="{ path: '/' }" class="hero__category h-[116px] flex flex-col justify-center items-center relative">
                        <div class="hero__category--bg w-[216px] h-[188px] rounded-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"></div>
                        <div class="hero__category--icon w-16 h-16 z-10">
                            <NuxtIcon :name="category.icon" class="text-primary-green"/>
                        </div>
                        <span class="hero__category--title text-22 text-gray-50 z-10">{{ category.title }}</span>
                    </NuxtLink>
                </div>
            </div>
        </AppContainer>
    </section>
</template>

<script setup lang="ts">
import AppContainer from '~/components/UI/AppContainer.vue'
import WordSwiper from '~/components/WordSwiper.vue'

const categories: object[] = [
    {
        title: 'Images',
        icon: 'ic-images'
    },
    {
        title: 'Videos',
        icon: 'ic-videos'
    },
    {
        title: 'Avatars',
        icon: 'ic-avatars'
    },
    {
        title: 'Sounds',
        icon: 'ic-sounds'
    },
    {
        title: 'Logos',
        icon: 'ic-logos'
    }
]
</script>

<style lang="scss" scoped>
.hero {
    &__category {
        transition: all 0.2s linear;

        &--bg {
            transition: all 0.2s linear;
        }

        &:hover {
            .hero__category--bg {
                background: theme('colors.primary-green');
                box-shadow: -0.5px 8px 8px 0px rgba(42, 82, 77, 0.04);
            }

            .hero__category--title,
            .nuxt-icon {
                color: theme('colors.white');
            }
        }
    }
}
</style>
