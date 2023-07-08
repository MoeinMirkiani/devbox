<template>
    <header class="header h-17 flex items-center shadow-header px-20 z-10 sticky bg-[rgba(255,255,255,0.4)]">
        <AppContainer class="flex items-center">
            <NuxtLink to="/" class="header__logo block">
                <NuxtIcon name="devbox-logo" filled class="inline-block w-[143px] h-[30px]" />
            </NuxtLink>

            <span class="header__divider inline-block h-6 w-[1px] bg-gray-80 mx-12" />

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
