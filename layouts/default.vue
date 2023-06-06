<template>
    <div>
        <DBHeader />

        <div class="page-content">
            <slot />
        </div>
    </div>
</template>

<script lang="ts" setup>
import DBHeader from '~/components/DBHeader.vue'
</script>
