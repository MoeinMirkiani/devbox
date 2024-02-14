<template>
    <div class="h-16 flex justify-center items-center text-18 font-medium text-gray-50 opacity-80">
        <span>{{ props.name }}</span>
    </div>
</template>

<script lang="ts" setup>
import type { FilterTitleProps } from "~/contracts/components/avatars/FilterTitleProps"


// Macros
const props = defineProps<FilterTitleProps>()
</script>
