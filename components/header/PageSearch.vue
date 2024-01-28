<template>
    <div class="page-search bg-[rgba(255,255,255,0.4)] shadow-header">
        <AppContainer class="h-25 pb-4 pt-5 flex">
            <div id="page-title" class="header-search__title flex w-[210px]">
                <span class="text-50 font-light text-gray-30">{{ props.title }}</span>
            </div>

            <div class="header-search__input w-[calc(100%-210px)] relative">
                <input
                    v-model="query"
                    @keyup.enter="updateQuery"
                    type="text"
                    class="outline-none w-full h-full bg-gray-95 rounded-4 pl-6 pr-22 py-5 text-18 text-gray-30"
                    placeholder="Search"
                />

                <IconButton @click="updateQuery" name="ic--search" radius="16px" class="absolute top-0 right-0" />
            </div>
        </AppContainer>
    </div>
</template>

<script lang="ts" setup>
import type { PageSearchProps } from "~/contracts/components/header/PageSearchProps"


const props = defineProps<PageSearchProps>()


// Variables
const route = useRoute()
const router = useRouter()
const query = ref(route.query.search || '')


// Methods
const updateQuery = () => {
    router.push(query.value === '' ? { query: {} } : { query: { search: query.value } })
}
</script>

<style lang="scss" scoped>
.header-search {
    &__input {
        input {
            &::placeholder {
                color: theme('colors.gray-60');
            }
        }
    }
}
</style>
