<template>
    <div class="page-filters bg-[rgba(255,255,255,0.4)] shadow-header px-20">
        <AppContainer class="h-25 pb-4 pt-5 flex">
            <div id="page-title" class="header-filters__title flex w-[210px]">
                <span class="text-50 font-light text-gray-30">{{ props.title }}</span>
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

