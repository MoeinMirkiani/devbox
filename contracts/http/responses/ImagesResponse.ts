import { type Image } from '~/contracts/types/Image'

export interface ImagesResponse {
    images: Image[],
    pageInfo: {
        hasNextPage: boolean,
        endCursor: string
    }
}
