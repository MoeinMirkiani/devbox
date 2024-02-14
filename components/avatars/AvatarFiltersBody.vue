<template>
    <div class="w-full bg-gray-98 rounded-5 shadow-card">
        <div class="w-full flex divide-x-2 divide-gray-95">
            <AvatarFilterGroup
                v-for="(filter, index) in props.filters"
                :key="index"
                :name="filter.name"
                :items="filter.items"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { AvatarFiltersBodyProps } from "~/contracts/components/avatars/AvatarFiltersBodyProps"


// Macros
const props = defineProps<AvatarFiltersBodyProps>()


// Computed
const names = computed<string[]>(() => {
    return props.filters.map(item => item.name)
})
</script>
