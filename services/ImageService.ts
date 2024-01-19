import { useHttp } from "~/composables/useHttp"
import type { AsyncData } from "~/contracts/http/AsyncData"
import type { ImageResponse, ImagesResponse } from "~/contracts/http/responses/ImageResponse"
import type { Image } from '~/contracts/types/Image'
import type { PageInfo } from '~/contracts/http/PageInfo'
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
        resolution: image.node?.acfImage.resolution,
        dimension: image.node?.acfImage.dimension,
        size: image.node?.acfImage.size,
        ratio: image.node?.acfImage.ratio,
        format: image.node?.acfImage.format.toUpperCase(),
        isFree: image.node?.acfImage.isFree,
        source: image.node?.acfImage.source,
        file: image.node?.acfImage.file
    }
}

const singlePresenter = (image: any): Image => {
    return {
        id: image.id,
        title: image.title,
        featuredImage: image.featuredImage.node.mediaItemUrl,
        resolution: image.acfImage.resolution,
        dimension: image.acfImage.dimension,
        size: image.acfImage.size,
        ratio: image.acfImage.ratio,
        format: image.acfImage.format.toUpperCase(),
        isFree: image.acfImage.isFree === 'yes',
        source: image.acfImage.source,
        file: image.acfImage.file.node.mediaItemUrl
    }
}

const transformList = (data: any): { images: Image | Image[], pageInfo: PageInfo } => {
    const images: Image[] = data.data.images.edges.map((image: any) => {
        return listPresenter(image)
    })

    const pageInfo: PageInfo = {
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
