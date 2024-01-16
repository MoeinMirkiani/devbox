<template>
    <section id="logos" class="logos">
        <AppContainer class="py-[120px] flex justify-between">
            <div class="logos__content w-2/5 flex flex-col justify-end gap-12 pt-[152px] pb-15">
                <h6 class="logos__text text-50 font-light text-gray-30">{{ $t('main.logos.text') }}</h6>

                <AppButton>{{ $t('buttons.more') }}</AppButton>
            </div>

            <div class="logos__samples flex flex-wrap gap-4 w-2/5 pt-15 relative">
                <LogoSample :image="dribbble" width="160px" top="0" right="10px" />

                <LogoSample :image="appStore" width="138px" top="56px" right="250px" />

                <LogoSample :image="discord" width="200px" top="116px" right="70px" index="10" />

                <LogoSample :image="slack" width="116px" top="290px" right="0" />

                <LogoSample :image="spotify" width="132px" top="290px" right="216px" />
            </div>
        </AppContainer>
    </section>
</template>

<script setup lang="ts">
import dribbble from '~/assets/images/main--logos-dribbble.png'
import appStore from '~/assets/images/main--logos-app-store.png'
import discord from '~/assets/images/main--logos-discord.png'
import slack from '~/assets/images/main--logos-slack.png'
import spotify from '~/assets/images/main--logos-spotify.png'
</script>

<style lang="scss" scoped>
.logos {
    .container {
        background: url('@/assets/icons/heading--logos.svg') no-repeat 0 80px;
        background-size: 480px;
    }
}
</style>
