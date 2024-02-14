<template>
    <AppPopover horizontal-align="left" vertical-align="top" vertical-offset="0">
        <div class="w-full h-full bg-gray-98 rounded-5 relative cursor-pointer">

        </div>

        <template v-slot:content>
            <div class="w-full h-[400px] bg-gray-98 rounded-5 shadow-card"></div>
        </template>
    </AppPopover>
</template>

<script lang="ts" setup>
import type { AvatarFiltersProps } from "~/contracts/components/AvatarFiltersProps"


// Macros
const props = defineProps<AvatarFiltersProps>()
</script>
