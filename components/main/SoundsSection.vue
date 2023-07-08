<template>
    <section id="sounds" class="sounds">
        <AppContainer class="py-[120px] flex justify-between">
            <div class="sounds__content w-2/5 flex flex-col justify-end gap-12 pt-[152px] pb-15">
                <h6 class="sounds__text text-50 font-light text-gray-30">{{ $t('main.sounds.text') }}</h6>

                <AppButton>{{ $t('buttons.more') }}</AppButton>
            </div>

            <div class="sounds__samples flex flex-wrap gap-4 w-2/5 pt-15 relative">
                <div class="sounds__sample w-[144px] absolute top-0 right-0 shadow-card rounded-6 overflow-hidden cursor-pointer">
                    <img :src="sample1" alt="devbox-sounds-sample" class="aspect-[1]" />
                </div>

                <div class="sounds__sample w-[116px] absolute top-[34px] right-[254px] shadow-card rounded-6 overflow-hidden cursor-pointer z-20">
                    <img :src="sample2" alt="devbox-sounds-sample" class="aspect-[1]" />
                </div>

                <div class="sounds__sample w-[208px] absolute top-[100px] right-[92px] shadow-card rounded-6 overflow-hidden cursor-pointer z-10">
                    <img :src="sample3" alt="devbox-sounds-sample" class="aspect-[1]" />
                </div>

                <div class="sounds__sample w-[128px] absolute top-[240px] right-0 shadow-card rounded-6 overflow-hidden cursor-pointer">
                    <img :src="sample4" alt="devbox-sounds-sample" class="aspect-[1]" />
                </div>

                <div class="sounds__sample w-[130px] absolute top-[332px] right-[130px] shadow-card rounded-6 overflow-hidden cursor-pointer">
                    <img :src="sample5" alt="devbox-sounds-sample" class="aspect-[1]" />
                </div>
            </div>
        </AppContainer>
    </section>
</template>

<script setup lang="ts">
import AppButton from "~/components/UI/AppButton.vue"
import AppContainer from "~/components/UI/AppContainer.vue"

import sample1 from '~/assets/images/main--sounds-sample1.jpg'
import sample2 from '~/assets/images/main--sounds-sample2.jpg'
import sample3 from '~/assets/images/main--sounds-sample3.jpg'
import sample4 from '~/assets/images/main--sounds-sample4.jpg'
import sample5 from '~/assets/images/main--sounds-sample5.jpg'

const samples = [sample1, sample2, sample3, sample4, sample5]
</script>

<style lang="scss" scoped>
.sounds {
    .container {
        background: url('@/assets/icons/heading--sounds.svg') no-repeat 0 80px;
        background-size: 600px;
    }

    &__sample {
        transition: all 0.2s linear;

        &:hover {
            z-index: 30;
            transform: scale(1.1);
        }
    }
}
</style>
