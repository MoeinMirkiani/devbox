<template>
    <div class="header-search h-25 pb-4 pt-5 flex">
        <div class="header-search__title flex w-[210px]">
            <span class="text-50 font-light text-gray-30">Images</span>
        </div>

        <div class="header-search__input">
            <input
                type="text"
                class="outline-none w-full h-full bg-gray-95 rounded-4 pl-6 pr-22 py-5 text-18 text-gray-30"
                placeholder="Search for free images"
            />
        </div>
    </div>
</template>

<script lang="ts" setup></script>

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
