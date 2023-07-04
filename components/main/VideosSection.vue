<template>
    <section id="videos" class="videos bg-gray-98">
        <AppContainer class="flex pt-25 mb-12">
            <div class="videos__player w-1/2">
                <div class="videos__player--wrapper cursor-pointer relative rounded-[30px] overflow-hidden shadow-card-hover">
                    <img :src="playerImage" alt="devbox-player-cover" class="videos__player--cover object-cover aspect-[1.6]"/>

                    <div class="videos__player--overlay absolute w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.2)]"></div>

                    <NuxtIcon name="ic--play" filled class="videos__player--play absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
            </div>

            <div class="videos__content w-1/2 flex flex-col justify-end gap-12 pl-[120px]">
                <h6 class="images__text text-50 font-light text-gray-30">{{ $t('main.videos.text') }}</h6>

                <AppButton>{{ $t('buttons.more') }}</AppButton>
            </div>
        </AppContainer>

        <div class="videos__slider pb-12"></div>
    </section>
</template>

<script setup lang="ts">
import AppContainer from "~/components/UI/AppContainer.vue"

import playerImage from '~/assets/images/main--videos-player.jpg'
import AppButton from '~/components/UI/AppButton.vue'
</script>

<style lang="scss" scoped>
.videos {
    .container {
        background: url('@/assets/icons/heading--videos.svg') no-repeat top right;
        background-size: 548px;
    }
}
</style>
