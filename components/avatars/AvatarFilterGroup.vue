<template>
    <div class="flex-1">
        <div class="h-16 flex justify-center items-center text-18 font-medium text-gray-50 opacity-80">
            <span>{{ props.name }}</span>
        </div>

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
