<template>
    <header class="header shadow-header px-20 z-10 sticky bg-[rgba(255,255,255,0.4)]">
        <AppContainer>
            <HeaderNavigation />

            <HeaderSearch v-if="search" />
        </AppContainer>
    </header>
</template>

<script lang="ts" setup>
import AppContainer from "~/components/UI/AppContainer.vue"
import HeaderNavigation from "~/components/header/HeaderNavigation.vue"
import HeaderSearch from "~/components/header/HeaderSearch.vue"

defineProps({
    search: {
        type: Boolean,
        default: false
    }
})
</script>
