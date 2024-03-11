<template>
    <NoResults v-if="!props.items.length && !props.loading" class="h-full" />

    <div v-else class="avatars flex items-start flex-wrap gap-x-4 gap-y-5">
        <AvatarCard
            v-for="avatar in props.items"
            :key="avatar.id"
            @show-me="displayAvatar(avatar.featuredImage)"
            :avatar="avatar"
            class="basis-[100%] md:basis-[26%] md:max-w-[calc((100%-32px)/3)] lg:basis-[21%] lg:max-w-[calc((100%-48px)/4)] flex-grow"
        />
    </div>

    <Teleport to="#modal">
        <ImageModal v-if="!!modalItem.length" @kill-me="modalItem = ''" :url="modalItem" alt="avatar" image-width="400px" aspect-ratio="1" />
    </Teleport>

    <SpinnerIcon v-if="props.loading" class="mx-auto mt-10" />
</template>

<script setup lang="ts">
import type { AvatarListProps } from "~/contracts/components/avatars/AvatarListProps"


// Macros
const props = defineProps<AvatarListProps>()


// Variables
const modalItem = ref<string>('')


// Methods
const displayAvatar = (url: string) => {
    modalItem.value = url
}
</script>
