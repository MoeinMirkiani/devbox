import type { ImageListItem } from "~/contracts/types/Image"

export interface ImageListProps {
    items: ImageListItem[],
    loading: boolean
}