<template>
    <div class="w-full h-full bg-gray-98 rounded-5 relative cursor-pointer flex divide-x-2 divide-gray-95">
        <div v-for="(name, index) in props.names" :key="index" class="flex-1 flex justify-center items-center text-18 font-medium text-gray-50">
            <span>{{ name }}</span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { AvatarFiltersNamesProps } from "~/contracts/components/avatars/AvatarFiltersNamesProps"

// Macros
const props = defineProps<AvatarFiltersNamesProps>()
</script>
