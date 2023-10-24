<template>
    <NuxtLayout>
        <NuxtLoadingIndicator :height="2" :color="progressBarColor" />
        <NuxtPage/>
    </NuxtLayout>
</template>

<script lang="ts" setup>
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '~/tailwind.config'
import type { Config } from 'tailwindcss'

const fullConfig = resolveConfig(tailwindConfig as unknown as Config)
const progressBarColor = fullConfig.theme?.colors?.['primary-green']
</script>
