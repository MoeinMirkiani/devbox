<template>
    <section id="avatars" class="avatars bg-gray-98">
        <AppContainer class="py-15 flex items-stretch">
            <div class="avatars__samples w-1/2 relative">
                <AvatarSample :image="sample1" width="142px" top="0" left="0" />

                <AvatarSample :image="sample2" width="142px" top="164px" left="0" />

                <AvatarSample :image="sample3" width="106px" top="152px" left="178px" />

                <AvatarSample :image="sample4" width="186px" top="188px" left="302px" />

                <AvatarSample :image="sample5" width="210px" top="306px" left="92px" />

                <AvatarSample :image="sample6" width="146px" top="432px" left="342px" />
            </div>

            <div class="avatars__content w-1/2 flex flex-col items-start justify-end gap-12 pl-[120px] pr-10 py-[164px]">
                <h6 class="avatars__text text-50 font-light text-gray-30">{{ $t('main.avatars.text') }}</h6>

                <NuxtLink
                    :to="{ name: 'avatars' }"
                    class="py-3 px-12 bg-primary-green text-white text-18 font-medium rounded-[10px] hover:bg-primary-shade"
                >
                    {{ $t('buttons.more') }}
                </NuxtLink>
            </div>
        </AppContainer>
    </section>
</template>

<script setup lang="ts">
import sample1 from '~/assets/images/main--avatars-sample1.jpg'
import sample2 from '~/assets/images/main--avatars-sample2.jpg'
import sample3 from '~/assets/images/main--avatars-sample3.jpg'
import sample4 from '~/assets/images/main--avatars-sample4.jpg'
import sample5 from '~/assets/images/main--avatars-sample5.jpg'
import sample6 from '~/assets/images/main--avatars-sample6.jpg'
</script>

<style lang="scss" scoped>
.avatars {
    .container {
        background: url('@/assets/icons/heading--avatars.svg') no-repeat top right;
        background-size: 592px;
    }
}
</style>
