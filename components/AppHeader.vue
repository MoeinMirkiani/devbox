<template>
    <header class="header flex items-center shadow-header px-20 z-10 sticky">
        <AppContainer class="flex items-center">
            <NuxtLink to="/" class="header__logo block">
                <NuxtIcon name="devbox-logo" filled />
            </NuxtLink>

            <span class="header__divider bg-grey-80 mx-12" />

            <nav class="navigation">
                <ul class="navigation__list flex gap-12">
                    <li v-for="(item, i) in $tm('header.navigation')" :key="i" class="navigation__item text-gray-60 text-18 font-400">
                        <NuxtLink :to="localePath($rt(item.link))" class="block">{{ $rt(item.name) }}</NuxtLink>
                    </li>
                </ul>
            </nav>
        </AppContainer>
    </header>
</template>

<script lang="ts" setup>
import AppContainer from '~/components/UI/AppContainer.vue'

const localePath = useLocalePath()
</script>

<style lang="scss">
.header {
    height: 68px;
    background: rgba(255,255,255,0.4);

    &__logo {
        min-width: 143px;
        height: 30px;
    }

    &__divider {
        height: 24px;
        width: 1px;
    }
}
</style>
