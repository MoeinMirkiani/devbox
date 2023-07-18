<template>
    <div class="header-search h-25 pb-4 pt-5 flex">
        <div id="page-title" class="header-search__title flex w-[210px]">
            <span class="text-50 font-light text-gray-30">{{ pageTitle }}</span>
        </div>

        <div class="header-search__input relative">
            <input
                type="text"
                class="outline-none w-full h-full bg-gray-95 rounded-4 pl-6 pr-22 py-5 text-18 text-gray-30"
                placeholder="Search for free images"
            />

            <IconButton name="ic--search" radius="16px" class="absolute top-0 right-0" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import IconButton from "~/components/UI/IconButton.vue"

const route = useRoute()

const pageTitle = computed(() => {
    const title = route.path.replace('/', '')
    return title.charAt(0).toUpperCase() + title.slice(1)
})
</script>

<style lang="scss" scoped>
.header-search {
    &__input {
        width: calc(100% - 210px);

        input {
            &::placeholder {
                color: theme('colors.gray-60');
            }
        }
    }
}
</style>
