<template>
    <NoResults v-if="!props.items.length && !props.loading" class="h-full" />

    <div v-else class="logos flex items-start flex-wrap gap-x-4 gap-y-5">
        <LogoCard
            v-for="logo in props.items"
            :key="logo.id"
            @show-me="displayAvatar(logo.featuredImage)"
            :logo="logo"
            class="basis-[100%] md:basis-[26%] md:max-w-[calc((100%-32px)/3)] lg:basis-[21%] lg:max-w-[calc((100%-48px)/4)] flex-grow"
        />
    </div>

    <Teleport to="#modal">
        <ImageModal
            v-if="!!modalItem.length"
            @kill-me="modalItem = ''"
            :url="modalItem" alt="logo"
            image-width="560px"
            aspect-ratio="1.6"
            fit="contain"
        />
    </Teleport>

    <SpinnerIcon v-if="props.loading" class="mx-auto mt-10" />
</template>

<script setup lang="ts">
import type { LogoListProps } from "~/contracts/components/logos/LogoListProps"


// Macros
const props = defineProps<LogoListProps>()


// Variables
const modalItem = ref<string>('')


// Methods
const displayAvatar = (url: string) => {
    modalItem.value = url
}
</script>

