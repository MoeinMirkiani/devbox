<template>
    <div class="media__title">
        <h1 class="media__title--text mb-3 text-24 font-medium text-gray-30">"{{ title }}"</h1>
        <span class="media__title--source text-16 text-gray-50">
            {{ $t('images.from') }}
            <NuxtLink :to="source.link" class="text-link">{{ source.name }}</NuxtLink>
        </span>
    </div>
</template>

<script lang="ts" setup>
import { type MediaTitleProps } from "~/contracts/components/media/MediaTitleProps"

defineProps<MediaTitleProps>()
</script>
