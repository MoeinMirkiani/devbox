<template>
    <div class="hero__categories flex justify-center divide-x divide-gray-90 bg-gray-98 rounded-6 py-6">
        <div v-for="(category, i) in categories" :key="i" class="hero__category--wrapper flex-1">
            <CategoryCard :category="category.title" :icon="category.icon" />
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    categories: {
        type: Array,
        required: true
    }
})
</script>