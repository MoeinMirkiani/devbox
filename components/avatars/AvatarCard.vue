<template>
    <div
        @mouseenter="displayMore = true"
        class="avatar relative"
    >
        <AvatarDetail
            :featured-image="props.avatar.featuredImage"
            :format="props.avatar.format"
            :size="props.avatar.size"
            :resolution="props.avatar.resolution"
        />

        <Transition name="fade">
            <AvatarDetail
                v-if="displayMore"
                @mouseleave="displayMore = false"
                :featured-image="props.avatar.featuredImage"
                :format="props.avatar.format"
                :size="props.avatar.size"
                :resolution="props.avatar.resolution"
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
                    :href="props.avatar.file"
                    download
                    class="avatar-download block bg-primary-green text-white text-18 text-center mx-1 py-3 rounded-[10px] hover:bg-primary-shade"
                >
                    {{ $t('buttons.download') }}
                </a>
            </AvatarDetail>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import type { AvatarCardProps } from "~/contracts/components/avatars/AvatarCardProps"


// Macros
const props = defineProps<AvatarCardProps>()


// Variables
const displayMore = ref<boolean>(false)


// Methods
const displayAvatar = () => {
    console.log(props.avatar.id)
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
