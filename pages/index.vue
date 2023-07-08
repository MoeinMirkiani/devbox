<template>
    <div class="page-content-wrapper -mt-17">
        <HeroSection />

        <ImagesSection />

        <VideosSection />

        <SoundsSection />
    </div>
</template>

<script setup lang="ts">
import HeroSection from '~/components/main/HeroSection.vue'
import ImagesSection from '~/components/main/ImagesSection.vue'
import VideosSection from '~/components/main/VideosSection.vue'
import SoundsSection from '~/components/main/SoundsSection.vue'

useHead({
    title: 'Main'
})
</script>

<style lang="scss" scoped>
.page-content-wrapper {
    background: url('@/assets/images/main--hero-bg.jpg') no-repeat top center/contain;
}
</style>
