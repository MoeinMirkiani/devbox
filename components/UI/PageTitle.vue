<template>
    <div class="flex w-full max-w-[210px]">
        <span class="text-50 font-light text-gray-30">{{ props.title }}</span>
    </div>
</template>

<script lang="ts" setup>
import type { PageTitleProps } from "~/contracts/components/UI/PageTitleProps"


// Macros
const props = defineProps<PageTitleProps>()
</script>