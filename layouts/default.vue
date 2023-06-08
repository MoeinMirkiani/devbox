<template>
    <div id="layout__default">
        <div class="hidden md:block">
            <DBHeader />

            <main class="page-content">
                <slot />
            </main>
        </div>

        <div class="responsive__alert flex items-center justify-center md:hidden">
            <p class="text-primary-green text-24">
                {{ $t('responsive.first') }}
                <br />
                {{ $t('responsive.second') }}
            </p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import DBHeader from '~/components/DBHeader.vue'
</script>

<style lang="scss">
.responsive__alert {
    height: 100vh;
}
</style>
