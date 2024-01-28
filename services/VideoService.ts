import { useHttp } from "~/composables/useHttp"
import type { AsyncData } from "~/contracts/http/AsyncData"
import type { VideosResponse } from "~/contracts/http/responses/VideoResponse"
import type { PageInfo } from '~/contracts/http/PageInfo'
import type { VideoListItem } from "~/contracts/types/Video"
import { VideosQuery } from "~/queries/Videos"

const baseUrl = (): string => {
    const runtimeConfig = useRuntimeConfig()
    return runtimeConfig.public.graphqlURL
}

const listPresenter = (video: any): VideoListItem => {
    return {
        id: video.node?.id,
        featuredImage: video.node?.featuredImage.node.mediaItemUrl,
        resolution: video.node?.acfVideo.resolution,
        duration: video.node?.acfVideo.duration,
        size: video.node?.acfVideo.size,
        ratio: video.node?.acfVideo.ratio,
        format: video.node?.acfVideo.format
    }
}

const transformList = (data: any): { items: VideoListItem[], pageInfo: PageInfo } => {
    const videos: VideoListItem[] = data.data.videos.edges.map((video: any) => {
        return listPresenter(video)
    })

    const pageInfo: PageInfo = {
        hasNextPage: data.data.videos.pageInfo.hasNextPage,
        endCursor: data.data.videos.pageInfo.endCursor || ''
    }

    return {
        items: videos,
        pageInfo
    }
}

export default {
    list: (first: number, after: string, keyword: string) :AsyncData<VideosResponse> => {
        return useHttp('graphql', {
            baseURL: baseUrl,
            key: 'video-list',
            body: {
                query: VideosQuery,
                variables: {
                    first,
                    after,
                    keyword
                }
            },
            transform: transformList
        })
    }
}
