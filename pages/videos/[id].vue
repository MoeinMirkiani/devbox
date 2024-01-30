<template>
    <div class="media min-h-[calc(100vh-148px)] pt-8 pb-16 px-20">
        <AppContainer>
            <MediaTitle :title="video.title" :source="video.source" class="video__title mb-8" />

            <div class="media__detail flex items-start gap-4 mb-10">
                <VideoPreview
                    :video="video.file"
                    :poster="video.featuredImage"
                    :alt="video.title"
                    :is-free="video.isFree"
                    class="w-2/3"
                />

                <VideoInformation
                    :resolution="video.resolution"
                    :size="video.size"
                    :ratio="video.ratio"
                    :duration="video.duration"
                    :format="video.format"
                    :file="video.file"
                    class="w-1/3"
                />
            </div>

            <ExploreMore :title="$t('videos.explore')">
                <VideoList :loading="false" :items="more" />
            </ExploreMore>
        </AppContainer>
    </div>
</template>

<script lang="ts" setup>
import VideoService from "~/services/VideoService"
import type { Video, VideoListItem } from "~/contracts/types/Video"


// Composables
const id = useRouteInfo({ location: 'param', name: 'id' })


// Variables
const video = ref<Video>({} as Video)
const title = ref<string>('')
const more = ref<VideoListItem[]>([])


// Methods
const fetchVideoDetail = async () => {
    const { data } = await VideoService.detail(id.value)
    video.value = data.value
    title.value = video.value.title
}

const fetchMore = async () => {
    const { data } = await VideoService.list(7, '', '')
    more.value = data.value.items.filter(item => item.id !== id.value).slice(0, 6)
}

useSeoMeta({
    title: () => title.value
})

await Promise.all([
    fetchVideoDetail(),
    fetchMore()
])
</script>
