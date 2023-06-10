<template>
    <Swiper
        :modules="[SwiperAutoplay, SwiperEffectFade]"
        :slides-per-view="1"
        :loop="true"
        :effect="'fade'"
        :autoplay="{
            delay: 3000,
            disableOnInteraction: true,
        }"
        :fade-effect="{
            crossFade: true
        }"
    >
        <SwiperSlide v-for="slide in 10" :key="slide">
            <p class="type">images</p>
        </SwiperSlide>
    </Swiper>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.swiper {
    &-slide {
        .type {
            width: 0;
            overflow: hidden;
        }

        &-active {
            .type {
                animation-name: typewrite;
                animation-duration: 3s;
                animation-iteration-count: infinite;
                animation-delay: 0.5s;
            }
        }
    }
}

@keyframes typewrite {
    0% {
        width: 0;
    }

    50% {
        width: 50%;
    }

    100% {
        width: 100%;
    }
}
</style>
