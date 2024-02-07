<template>
    <div class="page-filters bg-[rgba(255,255,255,0.4)] shadow-header px-20">
        <AppContainer class="h-25 pb-4 pt-5 flex">
            <div id="page-title" class="header-filters__title flex w-[210px]">
                <span class="text-50 font-light text-gray-30">{{ props.title }}</span>
            </div>

            <div class="filters w-[calc(100%-210px)] h-full bg-gray-98 rounded-5">
                <div class="filters__banner h-full flex items-center divide-x divide-gray-90">
                    <span
                        v-for="filter in props.filters"
                        :key="filter.name"
                        class="filter-indicator inline-flex flex-grow justify-center items-center h-full text-center text-18 text-gray-60"
                    >
                        {{ filter.name }}
                    </span>
                </div>
            </div>
        </AppContainer>
    </div>
</template>

<script lang="ts" setup>
import type { PageFiltersProps } from "~/contracts/components/header/PageFiltersProps"


const props = defineProps<PageFiltersProps>()


// Variables
const route = useRoute()
const router = useRouter()


// Methods
</script>

<style lang="scss" scoped></style>

