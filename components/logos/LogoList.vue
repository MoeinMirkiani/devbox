<template>
    <NoResults v-if="!props.items.length && !props.loading" class="h-full" />

    <div v-else class="logos flex items-start flex-wrap gap-x-4 gap-y-5">
        {{ props.items }}
    </div>

    <SpinnerIcon v-if="props.loading" class="mx-auto mt-10" />
</template>

<script setup lang="ts">
import type { LogoListProps } from "~/contracts/components/logos/LogoListProps"

const props = defineProps<LogoListProps>()
</script>

