<template>
    <button class="icon-button bg-primary-green hover:bg-primary-shade flex justify-center items-center">
        <NuxtIcon :name="name" class="icon-button__icon inline-block text-gray-98" />
    </button>
</template>

<script lang="ts" setup>
import type { IconButtonProps } from "~/contracts/components/UI/IconButtonProps"

const props = withDefaults(defineProps<IconButtonProps>(), {
    buttonSize: '64px',
    iconSize: '32px',
    radius: '50%'
})
</script>

<style lang="scss" scoped>
.icon-button {
    width: v-bind(buttonSize);
    height: v-bind(buttonSize);
    border-radius: v-bind(radius);
    transition: all 0.2s linear;

    &__icon {
        width: v-bind(iconSize);
        height: v-bind(iconSize);
    }
}
</style>
