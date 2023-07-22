<template>
    <div class="image bg-white rounded-5 shadow-card hover:shadow-card-hover transition-all">
        <NuxtLink :to="{ path: `/images/${image.id}` }" class="image--link block p-3">
            <div class="image--cover w-full rounded-5 overflow-hidden">
                <img :src="image.cover" alt="image" class="aspect-[1.6] object-cover" />
            </div>

            <div class="image--detail pt-4 pb-1 px-3">
                <ul class="image--detail__list flex flex-col gap-2">
                    <li class="image--detail__item">
                        <MediaInfo :label="$t('images.image.res')" :value="image.resolution" />
                    </li>

                    <li class="image--detail__item">
                        <MediaInfo :label="$t('images.image.size')" :value="image.size" />
                    </li>

                    <li class="image--detail__item">
                        <MediaInfo :label="$t('images.image.ratio')" :value="image.ratio" />
                    </li>

                    <li class="image--detail__item">
                        <MediaInfo :label="$t('images.image.dimension')" :value="image.dimension" />
                    </li>
                </ul>
            </div>
        </NuxtLink>
    </div>
</template>

<script lang="ts" setup>
import MediaInfo from "~/components/UI/MediaInfo.vue"

defineProps({
    image: {
        type: Object,
        required: true
    }
})
</script>
