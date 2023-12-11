<template>
    <div id="layout-default">
        <AppHeader />

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
