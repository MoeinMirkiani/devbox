<template>
    <button class="button bg-primary-green text-white text-18 px-5 py-4 rounded-[10px] w-full hover:bg-primary-shade sm:w-max sm:px-12">
        <slot />
    </button>
</template>

<style lang="scss" scoped>
.button {
    transition: all 0.2s linear;
}
</style>
