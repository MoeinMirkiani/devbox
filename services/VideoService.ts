import { useHttp } from "~/composables/useHttp"
import type { AsyncData } from "~/contracts/http/AsyncData"
import type { VideosResponse } from "~/contracts/http/responses/VideoResponse"
import type { PageInfo } from '~/contracts/http/PageInfo'
import type { VideoListItem } from "~/contracts/types/Video"
import { ImagesQuery } from "~/queries/Images"

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
    }
}

const transformList = (data: any): { videos: VideoListItem[], pageInfo: PageInfo } => {
    const videos: VideoListItem[] = data.data.images.edges.map((video: any) => {
        return listPresenter(video)
    })

    const pageInfo: PageInfo = {
        hasNextPage: data.data.images.pageInfo.hasNextPage,
        endCursor: data.data.images.pageInfo.endCursor || ''
    }

    return {
        videos,
        pageInfo
    }
}

export default {
    list: (first: string, after: string, keyword: string) :AsyncData<VideosResponse> => {
        return useHttp('graphql', {
            baseURL: baseUrl,
            key: 'image-list',
            body: {
                query: ImagesQuery,
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
