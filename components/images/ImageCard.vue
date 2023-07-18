<template>
    <div class="image w-full md:w-[calc(50%-8px)] lg:w-[336px] bg-white rounded-5 shadow-card hover:shadow-card-hover transition-all">
        <NuxtLink :to="{ path: `/images/${image.id}` }" class="block p-3">
            <div class="image__cover w-full rounded-5 overflow-hidden">
                <img :src="image.cover" alt="image" class="aspect-[1.6] object-cover" />
            </div>

            <div class="image__detail pt-4 pb-1 px-3 flex flex-col gap-2">
                <data value="" class="image__detail--resolution text-14 text-gray-60">
                    {{ $t('images.image.res') }} <span class="ml-2 font-medium text-gray-30">{{ image.resolution }}</span>
                </data>

                <data value="" class="image__detail--size text-14 text-gray-60">
                    {{ $t('images.image.size') }} <span class="ml-2 font-medium text-gray-30">{{ image.size }}</span>
                </data>

                <data value="" class="image__detail--ratio text-14 text-gray-60">
                    {{ $t('images.image.ratio') }} <span class="ml-2 font-medium text-gray-30">{{ image.ratio }}</span>
                </data>

                <data value="" class="image__detail--dimension text-14 text-gray-60">
                    {{ $t('images.image.dimension') }} <span class="ml-2 font-medium text-gray-30">{{ image.dimension }}</span>
                </data>
            </div>
        </NuxtLink>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    image: {
        type: Object,
        required: true
    }
})
</script>
