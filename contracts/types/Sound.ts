export interface SoundDownloadItem {
    label: string
    link: string
}

export interface Sound {
    title: string
    featuredImage: string
    size: string
    files: SoundDownloadItem[]
}
