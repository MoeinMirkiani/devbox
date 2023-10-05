export interface Media {
    id: string
    mediaType: 'image' | 'video' | 'sound' | 'logo' | 'avatar'
    source: Source
    title: string
    file: string
    resolution: string
    size: string
    ratio: string
    dimension: string
    format: string
}

export interface Source {
    title: string
    link: string
}
