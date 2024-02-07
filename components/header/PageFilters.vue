<template>
    <div class="page-filters bg-[rgba(255,255,255,0.4)] shadow-header px-20">
        <AppContainer class="h-25 pb-4 pt-5 flex">
            <div id="page-title" class="header-filters__title flex w-[210px]">
                <span class="text-50 font-light text-gray-30">{{ props.title }}</span>
            </div>

            <div class="filters w-[calc(100%-210px)] h-16 hover:h-fit bg-gray-98 rounded-5 overflow-hidden hover:shadow-card">
                <div @mouseenter="activate" @mouseleave="deactivate" class="filters__header h-16 flex items-center divide-x divide-gray-90">
                    <span
                        v-for="filter in props.filters"
                        :key="filter.name"
                        class="filter-indicator inline-flex flex-1 justify-center items-center h-full text-center text-18 text-gray-60"
                    >
                        {{ filter.name }}
                    </span>
                </div>

                <Transition
                    enter-active-class="duration-300 ease-out"
                    enter-from-class="opacity-0"
                    enter-to-class="opacity-100"
                    leave-active-class="duration-300 ease-in"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0"
                >
                    <div v-if="isActive" class="filters__body h-25 w-full flex divide-x divide-gray-90">
                        <div v-for="filter in props.filters" :key="filter.name" class="filter-items flex-grow"></div>
                    </div>
                </Transition>
            </div>
        </AppContainer>
    </div>
</template>

<script lang="ts" setup>
import type { PageFiltersProps } from "~/contracts/components/header/PageFiltersProps"


const props = defineProps<PageFiltersProps>()


// Composables
const route = useRoute()
const router = useRouter()


// Variables
const isActive = ref<boolean>(false)


// Methods
const activate = () => {
    isActive.value = true
}

const deactivate = () => {
    isActive.value = false
}
</script>

<style lang="scss" scoped></style>

