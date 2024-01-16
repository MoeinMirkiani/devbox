import type { Source } from "~/contracts/types/Source"

export interface Image {
    id: string
    databaseId: number
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

export type Images = Image[]
