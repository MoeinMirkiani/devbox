import { useHttp } from "~/composables/useHttp"
import { type AsyncData } from "~/contracts/http/AsyncData"
import { type ImagesResponse } from "~/contracts/http/responses/ImagesResponse"
import { type Image } from '~/contracts/types/Image'
import { ImagesQuery } from '~/queries/Images'

const baseUrl = (): string => {
    const runtimeConfig = useRuntimeConfig()
    return runtimeConfig.public.graphqlURL
}

const presenter = (image: any): Image => {
    return {
        id: image.node.id,
        databaseId: image.node.databaseId,
        title: image.node.title,
        featuredImage: image.node.featuredImage.node.mediaItemUrl,
        resolution: image.node.acf.resolution,
        dimension: image.node.acf.dimension,
        size: image.node.acf.size,
        ratio: image.node.acf.ratio,
        format: image.node.acf.format,
        isFree: image.node.acf.isFree,
        source: image.node.acf.source,
        file: image.node.acf.file
    }
}

const transform = (data: any): { images: Image | Image[], pageInfo: any } => {
    let images
    let pageInfo

    if (Array.isArray(data.data.images.edges)) {
        images = data.data.images.edges.map((image: any) => {
            return presenter(image)
        })
    } else {
        images = presenter(data.data.images.edges)
    }

    pageInfo = {
        hasNextPage: data.data.images.pageInfo.hasNextPage,
        endCursor: data.data.images.pageInfo.endCursor || ''
    }

    return {
        images,
        pageInfo
    }
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
            transform: transform
        })
    }
}
