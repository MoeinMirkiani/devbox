<template>
    <Swiper
        :modules="[SwiperAutoplay, SwiperEffectFade]"
        :slides-per-view="1"
        :loop="true"
        :effect="'fade'"
        :speed="10"
        :autoplay="{
            delay: 3000,
            disableOnInteraction: true,
        }"
        :fade-effect="{
            crossFade: true
        }"
    >
        <SwiperSlide v-for="category in words" :key="category">
            <div class="word flex items-center justify-center gap-5">
                <p class="word__fixed min-w-max font-inter font-light text-72 text-gray-30">{{ fixedWord }}</p>
                <div class="word__writing min-w-[280px] h-[76px] flex px-4 bg-primary-green opacity-60">
                    <p class="mx-auto text-grey-98 text-72 font-light text-center text-gray-98 leading-[76px] overflow-hidden">{{ category }}</p>
                </div>
            </div>
        </SwiperSlide>
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
