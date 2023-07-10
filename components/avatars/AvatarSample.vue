<template>
    <div class="avatar-sample shadow-card-hover overflow-hidden cursor-pointer" :class="{ 'absolute': absolute }">
        <img :src="image" alt="devbox-avatar-sample" class="aspect-[1]" />
    </div>
</template>

<script lang="ts" setup>
defineProps({
    image: {
        type: String,
        required: true
    },
    absolute: {
        type: Boolean,
        default: true
    },
    top: {
        type: String,
        default: 'auto'
    },
    bottom: {
        type: String,
        default: 'auto'
    },
    left: {
        type: String,
        default: 'auto'
    },
    right: {
        type: String,
        default: 'auto'
    },
    width: {
        type: String,
        required: true
    },
    index: {
        type: String,
        default: '0'
    }
})
</script>

<style lang="scss" scoped>
.avatar-sample {
    width: v-bind(width);
    height: v-bind(width);
    border-radius: v-bind(width);
    top: v-bind(top);
    bottom: v-bind(bottom);
    left: v-bind(left);
    right: v-bind(right);
    z-index: v-bind(index);
    transition: all 0.1s linear;

    &:hover {
        transform: scale(1.2);
        z-index: 9999;
    }
}
</style>
