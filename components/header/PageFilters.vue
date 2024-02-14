<template>
    <div class="bg-[rgba(255,255,255,0.4)] shadow-header px-20">
        <AppContainer class="h-25 pb-4 pt-5 flex">
            <PageTitle :title="props.title" />

            <slot />
        </AppContainer>
    </div>
</template>

<script lang="ts" setup>
import type { PageFiltersProps } from "~/contracts/components/header/PageFiltersProps"


// Macros
const props = defineProps<PageFiltersProps>()
</script>

<style lang="scss" scoped></style>

