<template>
    <div class="page-filters bg-[rgba(255,255,255,0.4)] shadow-header px-20">
        <AppContainer class="h-25 pb-4 pt-5 flex">
            <PageTitle :title="props.title" />

            <div class="filters w-[calc(100%-210px)] h-fit bg-gray-98 rounded-5 relative">
                <div class="filters__trigger h-16 flex items-stretch divide-x divide-gray-90 cursor-pointer">
                    <div v-for="filter in props.filters" :key="filter.name" class="flex flex-1 justify-center items-center text-18 font-medium text-gray-50 opacity-80">
                        <span>{{ filter.name }}</span>
                    </div>
                </div>
            </div>
        </AppContainer>
    </div>
</template>

<script lang="ts" setup>
import type { PageFiltersProps } from "~/contracts/components/header/PageFiltersProps"
import PageTitle from "~/components/UI/PageTitle.vue";


// Macros
const props = defineProps<PageFiltersProps>()


// Methods
</script>

<style lang="scss" scoped></style>

