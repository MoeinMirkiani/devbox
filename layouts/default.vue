<template>
    <div id="layout__default">
        <div class="hidden md:block">
            <AppHeader />

            <main class="page-content">
                <slot />
            </main>

            <AppFooter />
        </div>

        <div class="responsive__alert h-[100vh] flex items-center justify-center md:hidden">
            <p class="text-primary-green text-24">
                {{ $t('responsive.first') }}
                <br />
                {{ $t('responsive.second') }}
            </p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'
</script>
