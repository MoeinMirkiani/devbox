<template>
    <header class="header flex items-center">
        <DBContainer class="flex items-center">
            <NuxtLink to="/" class="header__logo inline-block">
                <NuxtIcon name="devbox-logo" filled />
            </NuxtLink>
        </DBContainer>
    </header>
</template>

<script lang="ts" setup>
import DBContainer from '~/components/UI/DBContainer.vue'
</script>

<style lang="scss">
.header {
    height: 68px;

    &__logo {
        width: 143px;
        height: 30px;
    }
}
</style>
