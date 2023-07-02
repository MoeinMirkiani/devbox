<template>
    <div class="page-content-wrapper -mt-17">
        <HeroSection />
    </div>
</template>

<script setup lang="ts">
import HeroSection from '~/components/main/HeroSection.vue'

useHead({
    title: 'Main'
})
</script>

<style lang="scss" scoped>
.page-content-wrapper {
    background: url('@/assets/images/main--hero-bg.jpg') no-repeat top center/cover;
}
</style>
