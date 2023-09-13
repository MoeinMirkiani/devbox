<template>
    <NuxtLink :to="{ path: '/' }" class="category h-[116px] flex flex-col justify-center items-center relative">
        <div class="category__bg w-[216px] h-[188px] rounded-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"></div>
        <div class="category__icon w-16 h-16 z-10">
            <NuxtIcon :name="icon" class="text-primary-green" />
        </div>
        <span class="category__title text-22 text-gray-50 z-10">{{ category }}</span>
    </NuxtLink>
</template>

<script lang="ts" setup>
defineProps({
    category: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    }
})
</script>

<style lang="scss" scoped>
.category {
    transition: all 0.2s linear;

    &__bg {
        transition: all 0.2s linear;
    }

    &:hover {
        .category__bg {
            background: theme('colors.primary-green');
            box-shadow: -0.5px 8px 8px 0px rgba(42, 82, 77, 0.04), -2px 38px 29px 0px rgba(42, 82, 77, 0.06), -5px 100px 92px 0px rgba(42, 82, 77, 0.10);
        }

        .category__title,
        .nuxt-icon {
            color: theme('colors.white');
        }
    }
}
</style>
