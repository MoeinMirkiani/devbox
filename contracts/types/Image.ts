import { Source } from "~/contracts/types/Source"

export type Image = {
    id: string
    source: Source
    title: string
    file: string
    resolution: string
    size: string
    ratio: string
    dimension: string
    format: string
}
