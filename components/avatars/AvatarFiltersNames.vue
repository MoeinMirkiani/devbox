<template>
    <div class="w-full h-full bg-gray-98 rounded-5 relative cursor-pointer flex divide-x-2 divide-gray-95">
        <FilterTitle v-for="(name, index) in props.names" :key="index" :name="name" class="flex-1" />
    </div>
</template>

<script lang="ts" setup>
import type { AvatarFiltersNamesProps } from "~/contracts/components/avatars/AvatarFiltersNamesProps"


// Macros
const props = defineProps<AvatarFiltersNamesProps>()
</script>
