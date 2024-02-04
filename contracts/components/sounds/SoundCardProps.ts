import type { SoundDownloadItem } from "~/contracts/types/Sound"

export interface SoundCardProps {
    title: string
    files: SoundDownloadItem[]
    poster: string
    size: string
}
