<template>
    <div class="page-filters bg-[rgba(255,255,255,0.4)] shadow-header px-20">
        <AppContainer class="h-25 pb-4 pt-5 flex">
            <div id="page-title" class="header-filters__title flex w-[210px]">
                <span class="text-50 font-light text-gray-30">{{ props.title }}</span>
            </div>

            <div class="filters w-[calc(100%-210px)] h-fit bg-gray-98 rounded-5 relative">
                <div @click="toggle" class="filters__trigger h-16 flex items-stretch divide-x divide-gray-90 cursor-pointer">
                    <div v-for="filter in props.filters" :key="filter.name" class="flex flex-1 justify-center items-center text-18 font-medium text-gray-50 opacity-80">
                        <span>{{ filter.name }}</span>
                    </div>
                </div>

                <Transition
                    enter-active-class="duration-300 ease-out"
                    enter-from-class="opacity-0"
                    enter-to-class="opacity-100"
                    leave-active-class="duration-300 ease-in"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0"
                >
                    <div ref="filters" v-if="isActive" class="filters__menu h-[400px] w-full flex divide-x divide-gray-90 bg-gray-98 shadow-card absolute top-0 left-0 rounded-5"></div>
                </Transition>
            </div>
        </AppContainer>
    </div>
</template>

<script lang="ts" setup>
import type { PageFiltersProps } from "~/contracts/components/header/PageFiltersProps"
import { onClickOutside } from "@vueuse/core"


// Macros
const props = defineProps<PageFiltersProps>()


// Composables
const route = useRoute()
const router = useRouter()


// Variables
const isActive = ref<boolean>(false)
const filters = ref(null)


// Methods
const toggle = () => {
    isActive.value = !isActive.value
}

onClickOutside(filters, _ => {
    isActive.value = false
})
</script>

<style lang="scss" scoped></style>

