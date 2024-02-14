<template>
    <AppPopover horizontal-align="left" vertical-align="top" vertical-offset="0">
        <AvatarFiltersNames :names />

        <template v-slot:content>
            <AvatarFiltersMenu :filters="props.filters" />
        </template>
    </AppPopover>
</template>

<script lang="ts" setup>
import type { AvatarFiltersProps } from "~/contracts/components/avatars/AvatarFiltersProps"


// Macros
const props = defineProps<AvatarFiltersProps>()


// Computed
const names = computed<string[]>(() => {
    return props.filters.map(item => item.name)
})
</script>
