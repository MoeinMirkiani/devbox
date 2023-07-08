<template>
    <section id="sounds" class="sounds">
        <AppContainer class="py-[120px] flex justify-between">
            <div class="sounds__content w-2/5 flex flex-col justify-end gap-12 pt-[152px] pb-15">
                <h6 class="sounds__text text-50 font-light text-gray-30">{{ $t('main.sounds.text') }}</h6>

                <AppButton>{{ $t('buttons.more') }}</AppButton>
            </div>

            <div class="sounds__samples flex flex-wrap gap-4 w-2/5 pt-15">

            </div>
        </AppContainer>
    </section>
</template>

<script setup lang="ts">
import AppButton from "~/components/UI/AppButton.vue"
import AppContainer from "~/components/UI/AppContainer.vue"
</script>

<style lang="scss" scoped>
.sounds {
    .container {
        background: url('@/assets/icons/heading--sounds.svg') no-repeat 0 80px;
        background-size: 600px;
    }
}
</style>
