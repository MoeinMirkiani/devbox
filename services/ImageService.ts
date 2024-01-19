import { useHttp } from "~/composables/useHttp"
import type { AsyncData } from "~/contracts/http/AsyncData"
import type { ImageResponse, ImagesResponse } from "~/contracts/http/responses/ImageResponse"
import type { Image } from '~/contracts/types/Image'
import { ImagesQuery, ImageQuery } from '~/queries/Images'

const baseUrl = (): string => {
    const runtimeConfig = useRuntimeConfig()
    return runtimeConfig.public.graphqlURL
}

const listPresenter = (image: any): Image => {
    return {
        id: image.node?.id,
        title: image.node?.title,
        featuredImage: image.node?.featuredImage.node.mediaItemUrl,
        resolution: image.node?.acf.resolution,
        dimension: image.node?.acf.dimension,
        size: image.node?.acf.size,
        ratio: image.node?.acf.ratio,
        format: image.node?.acf.format.toUpperCase(),
        isFree: image.node?.acf.isFree,
        source: image.node?.acf.source,
        file: image.node?.acf.file
    }
}

const singlePresenter = (image: any): Image => {
    return {
        id: image.id,
        title: image.title,
        featuredImage: image.featuredImage.node.mediaItemUrl,
        resolution: image.acf.resolution,
        dimension: image.acf.dimension,
        size: image.acf.size,
        ratio: image.acf.ratio,
        format: image.acf.format.toUpperCase(),
        isFree: image.acf.isFree === 'yes',
        source: image.acf.source,
        file: image.acf.file.node.mediaItemUrl
    }
}

const transformList = (data: any): { images: Image | Image[], pageInfo: any } => {
    const images: Image[] = data.data.images.edges.map((image: any) => {
        return listPresenter(image)
    })

    const pageInfo: any = {
        hasNextPage: data.data.images.pageInfo.hasNextPage,
        endCursor: data.data.images.pageInfo.endCursor || ''
    }

    return {
        images,
        pageInfo
    }
}

const transformSingle = (data: any): Image => {
    return singlePresenter(data.data.image)
}

export default {
    list: (first: number, after: string, keyword: string): AsyncData<ImagesResponse> => {
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
    },

    detail: (id: string): AsyncData<ImageResponse> => {
        return useHttp('graphql', {
            baseURL: baseUrl,
            key: 'image-single',
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
