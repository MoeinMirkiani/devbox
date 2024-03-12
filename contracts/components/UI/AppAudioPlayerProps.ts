import type { SoundDownloadItem } from "~/contracts/types/Sound"

export interface AppAudioPlayerProps {
    title: string
    files: SoundDownloadItem[]
    poster: string
    size: string
}
