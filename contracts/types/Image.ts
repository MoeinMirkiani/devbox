import type { Source } from "~/contracts/types/Source"

export interface Image {
    id: string
    title: string
    featuredImage: string
    resolution: string
    dimension: string
    size: string
    ratio: string
    format: 'PNG' | 'JPG'
    isFree: boolean
    source: Source
    file: string
}

export interface ImageList extends Pick<Image, 'id' | 'featuredImage' | 'resolution' | 'size' | 'ratio' | 'dimension'> {}[]

export type Images = Image[]
