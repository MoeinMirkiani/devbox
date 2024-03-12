<template>
    <div @mouseenter="displayMore = true" class="avatar relative">
        <LogoDetail
            :featured-image="props.logo.featuredImage"
            :title="props.logo.title"
            :format="props.logo.format"
            :size="props.logo.size"
            :ratio="props.logo.ratio"
        />

        <Transition name="fade">
            <LogoDetail
                v-if="displayMore"
                @mouseleave="displayMore = false"
                :featured-image="props.logo.featuredImage"
                :title="props.logo.title"
                :format="props.logo.format"
                :size="props.logo.size"
                :ratio="props.logo.ratio"
                class="absolute top-0 left-0 z-10"
            >
                <IconButton
                    v-if="displayMore"
                    @click="displayAvatar"
                    name="ic--search"
                    button-size="32px"
                    icon-size="24px"
                    radius="50%"
                    class="absolute top-6 right-6 z-20"
                />

                <a
                    :href="props.logo.file"
                    download
                    target="_blank"
                    class="logo-download block bg-primary-green text-white text-18 text-center mx-1 py-3 rounded-[10px] hover:bg-primary-shade"
                >
                    {{ $t('buttons.download') }}
                </a>
            </LogoDetail>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import type { LogoCardProps } from "~/contracts/components/logos/LogoCardProps"


// Macros
const props = defineProps<LogoCardProps>()
const emit = defineEmits<{
    (e: 'showMe', id: string): void
}>()


// Variables
const displayMore = ref<boolean>(false)


// Methods
const displayAvatar = () => {
    emit('showMe', props.logo.id)
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
