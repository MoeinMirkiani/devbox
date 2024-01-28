import type { Video, VideoListItem } from '~/contracts/types/Video'
import type { PageInfo } from '~/contracts/http/PageInfo'

export interface VideoResponse extends Video {}

export interface VideosResponse {
    images: VideoListItem[],
    pageInfo: PageInfo
}
