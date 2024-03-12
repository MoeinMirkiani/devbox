<template>
    <section id="sounds" class="sounds">
        <AppContainer class="py-[120px] flex justify-between">
            <div class="sounds__content w-2/5 flex flex-col items-start justify-end gap-12 pt-[152px] pb-15">
                <h6 class="sounds__text text-50 font-light text-gray-30">{{ $t('main.sounds.text') }}</h6>

                <NuxtLink
                    :to="{ name: 'sounds' }"
                    class="inline-flex py-3 px-12 bg-primary-green text-white text-18 font-medium rounded-[10px] hover:bg-primary-shade"
                >
                    {{ $t('buttons.more') }}
                </NuxtLink>
            </div>

            <div class="sounds__samples flex flex-wrap gap-4 w-2/5 pt-15 relative">
                <SoundSample :image="sample1" width="144px" top="0" right="0" />

                <SoundSample :image="sample2" width="116px" top="34px" right="254px" index="20" />

                <SoundSample :image="sample3" width="208px" top="100px" right="92px" index="10" />

                <SoundSample :image="sample4" width="128px" top="240px" right="0" />

                <SoundSample :image="sample5" width="130px" top="332px" right="130px" />
            </div>
        </AppContainer>
    </section>
</template>

<script setup lang="ts">
import sample1 from '~/assets/images/main--sounds-sample1.jpg'
import sample2 from '~/assets/images/main--sounds-sample2.jpg'
import sample3 from '~/assets/images/main--sounds-sample3.jpg'
import sample4 from '~/assets/images/main--sounds-sample4.jpg'
import sample5 from '~/assets/images/main--sounds-sample5.jpg'
</script>

<style lang="scss" scoped>
.sounds {
    .container {
        background: url('@/assets/icons/heading--sounds.svg') no-repeat 0 80px;
        background-size: 600px;
    }
}
</style>
