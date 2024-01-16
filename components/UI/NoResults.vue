<template>
    <div class="no-results flex flex-col justify-center items-center">
        <div class="no-results__message flex flex-col items-center mb-10">
            <NuxtIcon name="ic--no-results" class="inline-block w-[158px] h-[158px] text-primary-green mb-3" />

            <p class="text-50 text-gray-60">{{ $t('errors.noResults') }}</p>
        </div>

        <div class="no-results_-action">
            <NuxtLink :to="{ path: `/${link}` }">
                <AppButton>{{ $t('buttons.goTo') }} {{ page }}</AppButton>
            </NuxtLink>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    page: {
        type: String,
        default: 'Home'
    },
    link: {
        type: String,
        default: ''
    }
})
</script>
