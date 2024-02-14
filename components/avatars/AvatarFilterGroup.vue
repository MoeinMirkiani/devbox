<template>
    <div class="flex-1">
        <FilterTitle :name="props.name" class="flex-1" />

        <div class="px-6 pt-4 pb-9">
            <div v-for="(item, j) in props.items" :key="j">{{ item.name }}</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { AvatarFilterGroupProps } from "~/contracts/components/avatars/AvatarFilterGroupProps"


// Macros
const props = defineProps<AvatarFilterGroupProps>()
</script>
