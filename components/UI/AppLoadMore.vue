<template>
    <slot />
    <SpinnerIcon v-if="props.isActive" ref="loadMoreElement" class="mx-auto mt-10" />
</template>

<script lang="ts" setup>
import SpinnerIcon from "~/components/UI/SpinnerIcon.vue"
import { useIntersectionObserver } from "@vueuse/core"
import type { LoadMoreProps } from "~/contracts/components/UI/LoadMoreProps"

const props = withDefaults(defineProps<LoadMoreProps>(), {
    isActive: true
})

const emit = defineEmits<{
    (e: 'load'): void
}>()

const loadMoreElement = ref(null)

useIntersectionObserver(
    loadMoreElement,
    async ([{ isIntersecting }]) => {
        if (isIntersecting) {
            emit('load')
        }
    }
)
</script>
