<template>
    <Swiper
        :modules="[SwiperNavigation, SwiperAutoplay, SwiperEffectFade]"
        :slides-per-view="1"
        :loop="true"
        :effect="'fade'"
        :speed="10"
        :navigation="{
            nextEl: '.swiper-button__next',
            prevEl: '.swiper-button__prev'
        }"
        :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
        }"
        :fade-effect="{
            crossFade: true
        }"
        :allow-touch-move="false"
        class="relative max-w-[580px]"
    >
        <SwiperSlide v-for="category in words" :key="category">
            <div class="word flex items-center justify-center gap-4">
                <p class="word__fixed min-w-max font-light text-72 text-gray-30">{{ fixedWord }}</p>
                <div class="word__writing min-w-[244px]">
                    <p class="text-primary-green text-72 font-light overflow-hidden">{{ category }}</p>
                </div>
            </div>
        </SwiperSlide>

        <div class="swiper-button swiper-button__next w-20 h-20 cursor-pointer absolute top-1/2 left-full -translate-y-1/2">
            <NuxtIcon name="swiper-button-next" filled />
        </div>

        <div class="swiper-button swiper-button__prev w-20 h-20 cursor-pointer absolute top-1/2 right-full -translate-y-1/2">
            <NuxtIcon name="swiper-button-prev" filled />
        </div>
    </Swiper>
</template>

<script lang="ts" setup>
defineProps({
    fixedWord: {
        type: String,
        required: true
    },
    words: {
        type: Array,
        required: true
    }
})
</script>

<style lang="scss" scoped>
.swiper {
    overflow: visible !important;

    &-slide {
        .word {
            &__writing {
                p {
                    width: 0;
                }
            }
        }

        &-active {
            .word {
                &__writing {
                    p {
                        animation-name: typewrite;
                        animation-duration: 3s;
                        animation-iteration-count: 1;
                        animation-timing-function: linear;
                    }
                }
            }
        }
    }
}

@keyframes typewrite {
    0% {
        width: 0;
    }

    10% {
        width: 50%;
    }

    20% {
        width: 100%;
    }

    80% {
        width: 100%;
    }

    90% {
        width: 50%;
    }

    100% {
        width: 0;
    }
}
</style>
