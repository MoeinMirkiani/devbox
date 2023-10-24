<template>
    <div id="layout-search">
        <AppHeader search />

        <main class="page-content">
            <slot />
        </main>

        <AppFooter />
    </div>
</template>

<script lang="ts" setup>
import AppHeader from '~/components/header/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'
</script>
