<template>
    <header class="header shadow-header px-20 z-10 sticky bg-[rgba(255,255,255,0.4)]">
        <AppContainer>
            <HeaderNavigation />
        </AppContainer>
    </header>
</template>

<script lang="ts" setup>
import AppContainer from "~/components/UI/AppContainer.vue"
import HeaderNavigation from "~/components/header/HeaderNavigation.vue"
</script>
