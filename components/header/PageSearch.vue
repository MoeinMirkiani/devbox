<template>
    <div class="page-search bg-[rgba(255,255,255,0.4)] shadow-header px-20">
        <AppContainer class="h-25 pb-4 pt-5 flex">
            <PageTitle :title="props.title" />

            <div class="header-search__input w-[calc(100%-210px)] relative">
                <input
                    v-model="query"
                    @keyup.enter="updateQuery"
                    type="text"
                    class="outline-none w-full h-full bg-gray-95 rounded-4 pl-6 pr-22 py-5 text-18 text-gray-30"
                    placeholder="Search"
                />

                <IconButton @click="updateQuery" name="ic--search" icon-size="32px" button-size="64px" radius="16px" class="absolute top-0 right-0" />
            </div>
        </AppContainer>
    </div>
</template>

<script lang="ts" setup>
import type { PageSearchProps } from "~/contracts/components/header/PageSearchProps"


// Macros
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
