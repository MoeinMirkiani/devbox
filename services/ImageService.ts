import { useHttp } from "~/composables/useHttp"
import type { AsyncData } from "~/contracts/http/AsyncData"
import type { ImagesResponse } from "~/contracts/http/responses/ImagesResponse"
import type { ImageResponse } from "~/contracts/http/responses/ImageResponse"
import type { Image } from '~/contracts/types/Image'
import { ImagesQuery, ImageQuery } from '~/queries/Images'

const baseUrl = (): string => {
    const runtimeConfig = useRuntimeConfig()
    return runtimeConfig.public.graphqlURL
}

const presenter = (image: any): Image => {
    return {
        id: image.node?.id || image.id,
        databaseId: image.node?.databaseId || image.databaseId,
        title: image.node?.title || image.title,
        featuredImage: image.node?.featuredImage.node.mediaItemUrl || image.featuredImage.node.mediaItemUrl,
        resolution: image.node?.acf.resolution || image.acf.resolution,
        dimension: image.node?.acf.dimension || image.acf.dimension,
        size: image.node?.acf.size || image.acf.size,
        ratio: image.node?.acf.ratio || image.acf.ratio,
        format: image.node?.acf.format || image.acf.format,
        isFree: image.node?.acf.isFree || image.acf.isFree,
        source: image.node?.acf.source || image.acf.source,
        file: image.node?.acf.file || image.acf.file
    }
}

const transformList = (data: any): { images: Image | Image[], pageInfo: any } => {
    let images: Image[]
    let pageInfo: any

    images = data.data.images.edges.map((image: any) => {
        return presenter(image)
    })

    pageInfo = {
        hasNextPage: data.data.images.pageInfo.hasNextPage,
        endCursor: data.data.images.pageInfo.endCursor || ''
    }

    return {
        images,
        pageInfo
    }
}

const transformSingle = (data: any): Image => {
    return presenter(data.data.image)
}

export default {
    list: (first: number, after: string, keyword: string): AsyncData<ImagesResponse> => {
        return useHttp('graphql', {
            baseURL: baseUrl,
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
    },

    detail: (id: string): AsyncData<ImageResponse> => {
        return useHttp('graphql', {
            baseURL: baseUrl,
            body: {
                query: ImageQuery,
                variables: {
                    id
                }
            },
            transform: transformSingle
        })
    }
}
