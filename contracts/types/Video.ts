import type { Source } from "~/contracts/types/Source"

export interface Video {
    id: string
    title: string
    featuredImage: string
    resolution: string
    duration: string
    size: string
    ratio: string
    format: string
    isFree: boolean
    source: Source
    file: string
}

export interface VideoListItem extends Pick<Video, 'id' | 'featuredImage' | 'resolution' | 'size' | 'ratio' | 'duration' | 'format'> {}
