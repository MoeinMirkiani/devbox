<template>
    <NuxtLayout class="hidden md:block">
        <NuxtLoadingIndicator :height="2" :color="progressBarColor" />
        <NuxtPage />
    </NuxtLayout>

    <div id="modal" class="hidden md:block"></div>

    <ResponsiveAlert class="md:hidden" />
</template>

<script lang="ts" setup>
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '~/tailwind.config'
import type { Config } from 'tailwindcss'

const fullConfig = resolveConfig(tailwindConfig as unknown as Config)
const progressBarColor = fullConfig.theme?.colors?.['primary-green']
</script>
