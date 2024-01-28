import type { VideoListItem } from "~/contracts/types/Video"

export interface VideoListProps {
    items: VideoListItem[],
    loading: boolean
}