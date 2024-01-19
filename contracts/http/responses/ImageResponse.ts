import type { Image } from '~/contracts/types/Image'
import type { PageInfo } from '~/contracts/http/PageInfo'

export interface ImageResponse extends Image {}

export interface ImagesResponse {
    images: Image[],
    pageInfo: PageInfo
}
