<template>
    <section id="images" class="images">
        <AppContainer class="pb-[142px] flex gap-8">
            <div class="images__content w-2/5 flex flex-col justify-end gap-12 pb-10">
                <h6 class="images__text text-50 font-light text-gray-30">{{ $t('main.images.text') }}</h6>

                <AppButton>{{ $t('buttons.more') }}</AppButton>
            </div>

            <div class="images__samples flex flex-wrap gap-4 w-3/5 pt-15">
                <div v-for="(sample, i) in samples" :key="i" class="images__sample--wrapper flex items-end">
                    <img :src="sample" :alt="`sample-${i + 1}`" class="images__image rounded-[30px] shadow-card hover:shadow-card-hover object-cover w-full" />
                </div>
            </div>
        </AppContainer>
    </section>
</template>

<script lang="ts" setup>
import AppContainer from '~/components/UI/AppContainer.vue'

import sample1 from '~/assets/images/main--images-sample1.jpg'
import sample2 from '~/assets/images/main--images-sample2.jpg'
import sample3 from '~/assets/images/main--images-sample3.jpg'
import sample4 from '~/assets/images/main--images-sample4.jpg'
import AppButton from "~/components/UI/AppButton.vue";

const samples = [sample1, sample2, sample4, sample3]
</script>

<style lang="scss" scoped>
.images {
    .container {
        background: url('@/assets/icons/heading--images.svg') no-repeat top left;
        background-size: 568px;
    }

    &__sample--wrapper {
        width: calc(60% - 8px);

        &:first-child,
        &:last-child {
            width: calc(40% - 8px);

            .images__image {
                height: 148px;
            }
        }

        &:last-child {
            align-items: flex-start;
        }
    }

    &__image {
        height: 200px;
        transition: all 0.2s linear;
    }
}
</style>
