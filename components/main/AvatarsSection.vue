<template>
    <section id="avatars" class="avatars bg-gray-98">
        <AppContainer class="py-15 flex items-stretch">
            <div class="avatars__samples w-1/2"></div>

            <div class="avatars__content w-1/2 flex flex-col justify-end gap-12 pl-[120px] pr-10 py-[164px]">
                <h6 class="avatars__text text-50 font-light text-gray-30">{{ $t('main.avatars.text') }}</h6>

                <AppButton>{{ $t('buttons.more') }}</AppButton>
            </div>
        </AppContainer>
    </section>
</template>

<script setup lang="ts">
import AppButton from "~/components/UI/AppButton.vue"
import AppContainer from "~/components/UI/AppContainer.vue"
</script>

<style lang="scss" scoped>
.avatars {
    .container {
        background: url('@/assets/icons/heading--avatars.svg') no-repeat top right;
        background-size: 592px;
    }
}
</style>
