<template>
    <AppPopover horizontal-align="left" vertical-align="top" vertical-offset="0">
        <AvatarFiltersNames :names />

        <template v-slot:content>
            <div class="w-full h-[400px] bg-gray-98 rounded-5 shadow-card"></div>
        </template>
    </AppPopover>
</template>

<script lang="ts" setup>
import type { AvatarFiltersProps } from "~/contracts/components/avatars/AvatarFiltersProps"
import AvatarFiltersNames from "~/components/avatars/AvatarFiltersNames.vue";


// Macros
const props = defineProps<AvatarFiltersProps>()


// Computed
const names = computed<string[]>(() => {
    return props.filters.map(item => item.name)
})
</script>
