<template>
    <div class="w-full bg-gray-98 rounded-5 shadow-card">
        <div class="w-full flex divide-x-2 divide-gray-95">
            <AvatarFilterGroup
                v-for="filter in props.filters"
                :key="filter.name"
                :name="filter.name"
                :items="filter.items"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { AvatarFiltersMenuProps } from "~/contracts/components/avatars/AvatarFiltersMenuProps"


// Macros
const props = defineProps<AvatarFiltersMenuProps>()
</script>
