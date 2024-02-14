<template>
    <div class="w-full bg-gray-98 rounded-5 shadow-card">
        <div class="w-full flex divide-x-2 divide-gray-95">
            <div v-for="(filter, i) in props.filters" :key="i" class="flex-1">
                <div class="h-16 flex justify-center items-center text-18 font-medium text-gray-50">
                    <span>{{ filter.name }}</span>
                </div>

                <div v-for="(item, j) in filter.items" :key="j">{{ item.name }}</div>
            </div>
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
