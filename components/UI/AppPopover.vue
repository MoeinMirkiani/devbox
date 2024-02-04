<template>
    <div ref="popover" class="popover relative">
        <div @click="toggle" class="popover__trigger">
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
                class="popover__content absolute z-50 top-[calc(100%+8px)] pointer-events-auto"
                :class="{
                    'left-0': props.align === 'left',
                    'right-0': props.align === 'right'
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