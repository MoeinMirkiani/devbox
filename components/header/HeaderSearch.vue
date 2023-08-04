<template>
    <div class="header-search h-25 pb-4 pt-5 flex">
        <div id="page-title" class="header-search__title flex w-[210px]">
            <span class="text-50 font-light text-gray-30">{{ pageTitle }}</span>
        </div>

        <div class="header-search__input w-[calc(100%-210px)] relative">
            <input
                v-model="query"
                @input="updateQuery"
                type="text"
                class="outline-none w-full h-full bg-gray-95 rounded-4 pl-6 pr-22 py-5 text-18 text-gray-30"
                placeholder="Search"
            />

            <IconButton @click="handleSearch" name="ic--search" radius="16px" class="absolute top-0 right-0" />
        </div>
    </div>
</template>

<script lang="ts" setup>
//@ts-ignore
import debounce from 'lodash.debounce'
import IconButton from "~/components/UI/IconButton.vue"

const route = useRoute()
const router = useRouter()

const pageTitle = computed(() => {
    const title = route.path.replace('/', '')
    return title.charAt(0).toUpperCase() + title.slice(1)
})

const query = ref(route.query.search || '')

const updateQuery = debounce(() => {
    router.push(query.value === '' ? { query: {} } : { query: { search: query.value } })
}, 500)

const handleSearch = () => {
    const keyword = query.value
    if (keyword) {
        router.push({ query: { } })
        setTimeout(() => {
            router.push({ query: { search: keyword } })
        }, 500)
    }
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
