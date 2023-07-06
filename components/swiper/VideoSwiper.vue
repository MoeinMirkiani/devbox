<template>
    <Swiper
        :slides-per-view="1.75"
        :space-between="16"
        :centered-slides="true"
        :centered-slides-bounds="true"
    >
        <SwiperSlide v-for="(item, i) in items" :key="i" class="flex gap-4">
            <div class="swiper-slide__wrapper flex items-end gap-4">
                <NuxtLink :to="{ path: item[0].url }" class="swiper-slide__inner swiper-slide__inner--small w-2/5">
                    <img :src="item[0].image" :alt="item[0].alt" class="aspect-[1.6] rounded-[30px] shadow-card-hover" />
                </NuxtLink>

                <NuxtLink :to="{ path: item[1].url }" class="swiper-slide__inner swiper-slide__inner--large w-3/5">
                    <img :src="item[1].image" :alt="item[1].alt" class="aspect-[1.6] rounded-[30px] shadow-card-hover" />
                </NuxtLink>
            </div>
        </SwiperSlide>
    </Swiper>
</template>

<script lang="ts" setup>
const props = defineProps({
    videos: {
        type: Array,
        required: true
    }
})

const items = computed(() => {
    const items = []
    const videos = props.videos.map(x => x)
    if (videos.length % 2 !== 0) {
        videos.push(videos[0])
    }

    let index = 0
    while (index < videos.length) {
        items.push(videos.slice(index, index + 2))
        index += 2
    }

    return items
})
</script>

<style lang="scss" scoped>
.swiper {
    padding: 24px 0 48px;
    overflow: visible;
    cursor: move;
}
</style>
