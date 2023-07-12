<template>
    <div class="error-page hidden md:block">
        <AppHeader />

        <section id="error" class="error h-screen -mt-17 pt-17 flex justify-center items-center">
            <div class="error__wrapper flex items-center">
                <p class="error__code text-[120px] leading-[144px] text-primary-green">{{ error.statusCode }}</p>

                <div class="error__detail ml-6 pl-10 border-l border-gray-50">
                    <p class="text-primary-green text-[40px] leading-[48px] mb-1">{{ $t('errors.sorry') }}</p>
                    <p class="text-gray-60 text-24 mb-8">{{ error.message }}</p>
                    <NuxtLink :to="{ path: '/' }">
                        <AppButton>{{ $t('buttons.goBack') }}</AppButton>
                    </NuxtLink>
                </div>
            </div>
        </section>
    </div>

    <div class="responsive__alert h-[100vh] flex items-center justify-center md:hidden">
        <p class="text-primary-green text-24">
            {{ $t('responsive.first') }}
            <br />
            {{ $t('responsive.second') }}
        </p>
    </div>
</template>

<script lang="ts" setup>
import AppHeader from "~/components/AppHeader.vue"
import AppButton from "~/components/UI/AppButton.vue"

defineProps(['error'])
</script>

<style lang="scss" scoped>
.error {
    font-family: 'Inter', sans-serif;
}
</style>
