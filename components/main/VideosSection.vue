<template>
    <section id="videos" class="videos bg-gray-98 overflow-hidden">
        <AppContainer class="pt-25">
            <div class="videos__player--wrapper flex mb-6">
                <div class="videos__player w-1/2">
                    <div class="videos__player--wrapper cursor-pointer relative rounded-[30px] overflow-hidden shadow-card-hover">
                        <img :src="playerImage" alt="devbox-player-cover" class="videos__player--cover object-cover aspect-[1.6]" />

                        <div class="videos__player--overlay absolute w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.2)]"></div>

                        <NuxtIcon name="ic--play" filled class="videos__player--play absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                </div>

                <div class="videos__content w-1/2 flex flex-col justify-end gap-12 pl-[120px]">
                    <h6 class="videos__text text-50 font-light text-gray-30">{{ $t('main.videos.text') }}</h6>

                    <AppButton>{{ $t('buttons.more') }}</AppButton>
                </div>
            </div>

            <div class="videos__slider">
                <div class="videos__slider--wrapper">
                    <VideoSwiper :videos="videos" />
                </div>
            </div>
        </AppContainer>
    </section>
</template>

<script setup lang="ts">
import playerImage from '~/assets/images/main--videos-player.jpg'
import slide1 from '~/assets/images/main--videos-slider1.jpg'
import slide2 from '~/assets/images/main--videos-slider2.jpg'
import slide3 from '~/assets/images/main--videos-slider3.jpg'
import slide4 from '~/assets/images/main--videos-slider4.jpg'
import slide5 from '~/assets/images/main--videos-slider5.jpg'
import slide6 from '~/assets/images/main--videos-slider6.jpg'

const videos = [
    {
        image: slide1,
        alt: 'devbox-video-slider-item',
        url: '/'
    },
    {
        image: slide2,
        alt: 'devbox-video-slider-item',
        url: '/'
    },
    {
        image: slide3,
        alt: 'devbox-video-slider-item',
        url: '/'
    },
    {
        image: slide4,
        alt: 'devbox-video-slider-item',
        url: '/'
    },
    {
        image: slide5,
        alt: 'devbox-video-slider-item',
        url: '/'
    },
    {
        image: slide6,
        alt: 'devbox-video-slider-item',
        url: '/'
    },
    {
        image: slide3,
        alt: 'devbox-video-slider-item',
        url: '/'
    }
]
</script>

<style lang="scss" scoped>
.videos {
    .container {
        background: url('@/assets/icons/heading--videos.svg') no-repeat top right;
        background-size: 548px;
    }
}
</style>
