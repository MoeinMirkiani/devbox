<template>
    <div class="media__explore">
        <h3 class="text-gray-30 text-24 font-medium mb-6">{{ title }}</h3>

        <slot />
    </div>
</template>

<script setup lang="ts">
import type { ExploreMoreProps } from "~/contracts/components/media/ExploreMoreProps"

defineProps<ExploreMoreProps>()
</script>
