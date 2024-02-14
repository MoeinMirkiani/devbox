<template>
    <div ref="popover" class="popover w-full relative">
        <div @click="toggle" class="popover__trigger w-full h-full">
            <slot />
        </div>

        <Transition
            enter-active-class="duration-200 ease-out"
            enter-from-class="transform opacity-0 translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="duration-200 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="transform opacity-0 translate-y-2"
        >
            <div
                v-if="isActive"
                class="popover__content w-full min-w-[fit-content] absolute z-50 pointer-events-auto"
                :class="{
                    'left-0': props.horizontalAlign === 'left',
                    'right-0': props.horizontalAlign === 'right',
                    'top-0': props.verticalAlign === 'top',
                    'top-full': props.verticalAlign === 'bottom'
                }"
            >
                <slot name="content" />
            </div>
        </Transition>
    </div>
</template>

<script lang="ts" setup>
import { onClickOutside } from '@vueuse/core'
import type { AppPopoverProps } from "~/contracts/components/UI/AppPopoverProps"

const props = defineProps<AppPopoverProps>()

// Variables
const isActive = ref(false)
const popover = ref(null)

// Methods
const toggle = () => {
    isActive.value = !isActive.value
}

onClickOutside(popover, _ => {
    isActive.value = false
})
</script>

<style lang="scss" scoped>
.popover {
    &__content {
        margin-top: v-bind(verticalOffset);
    }
}
</style>
