<template>
    <div id="layout-search">
        <div class="hidden md:block">
            <AppHeader search />

            <main class="page-content">
                <slot />
            </main>

            <AppFooter />
        </div>

        <ResponsiveAlert class="md:hidden" />
    </div>
</template>

<script lang="ts" setup>
import AppHeader from '~/components/header/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'
</script>
