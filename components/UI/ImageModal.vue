<template>
    <div class="fixed top-0 left-0 w-full h-full bg-[rgba(128,128,128,0.7)] flex items-center justify-center z-30">
        <div ref="killMe" class="image-wrapper relative p-12 bg-white rounded-5 shadow-card flex items-center justify-center">
            <NuxtIcon @click="emit('killMe')" name="ic--cross" class="text-gray-98 w-8 h-8 cursor-pointer absolute top-3 left-[calc(100%+24px)]" />

            <img
                :src="props.url"
                :alt="props.alt"
                :width="props.imageWidth"
                class="max-w-full max-h-full aspect-square object-cover rounded-5"
                :class="`aspect-${props.aspectRatio}`" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import type { ImageModalProps } from '~/contracts/components/UI/ImageModalProps'


// Macros
const props = defineProps<ImageModalProps>()
const emit = defineEmits<{
    (e: 'killMe'): void
}>()


// Variables
const killMe = ref(null)


// Methods
onClickOutside(killMe, _ => {
    emit('killMe')
})
</script>
