import { type Source } from "~/contracts/types/Source"

export type Image = {
    id: string,
    databaseId: number,
    title: string,
    featuredImage: string,
    resolution: string,
    dimension: string,
    size: string,
    ratio: string,
    format: string,
    isFree: boolean,
    source: Source,
    file: string,
}

export type Images = Image[]
