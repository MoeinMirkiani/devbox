<template>
    <SpinnerIcon v-if="props.loading" class="mx-auto mt-10" />
    <NoResults v-if="!props.items.length && !props.loading" class="h-full" />

    <div v-else class="sounds flex items-start flex-wrap gap-x-4 gap-y-5">
        <SoundCard
            v-for="(sound, i) in props.items"
            :key="i"
            :title="sound.title"
            :poster="sound.featuredImage"
            :size="sound.size"
            :files="sound.files"
            class="basis-[51%] max-w-[calc((100%-16px)/2)] flex-grow"
        />
    </div>
</template>

<script setup lang="ts">
import type { SoundListProps } from "~/contracts/components/sounds/SoundListProps"

const props = defineProps<SoundListProps>()
</script>

