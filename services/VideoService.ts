import { useHttp } from "~/composables/useHttp"
import type { AsyncData } from "~/contracts/http/AsyncData"
import type { VideoResponse, VideosResponse } from "~/contracts/http/responses/VideoResponse"
import type { PageInfo } from '~/contracts/http/PageInfo'
import type { Video, VideoListItem } from "~/contracts/types/Video"
import { VideoQuery, VideosQuery } from "~/queries/Videos"


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

const singlePresenter = (video: any): Video => {
    return {
        id: video.id,
        title: video.title,
        featuredImage: video.featuredImage.node.mediaItemUrl,
        resolution: video.acfVideo.resolution,
        duration: video.acfVideo.duration,
        size: video.acfVideo.size,
        ratio: video.acfVideo.ratio,
        format: video.acfVideo.format.toUpperCase(),
        isFree: video.acfVideo.isFree === 'yes',
        source: video.acfVideo.source,
        file: video.acfVideo.file.node.mediaItemUrl
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

const transformSingle = (data: any): Video => {
    return singlePresenter(data.data.video)
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
    },

    detail: (id: string) : AsyncData<VideoResponse> => {
        return useHttp('graphql', {
            baseURL: baseUrl,
            key: 'video-single',
            body: {
                query: VideoQuery,
                variables: {
                    id
                }
            },
            transform: transformSingle
        })
    }
}
