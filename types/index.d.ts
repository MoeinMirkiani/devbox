export interface Media {
    id: string
    mediaType: 'image' | 'video' | 'sound' | 'logo' | 'avatar'
    source: string
    title: string
    cover: string
    resolution: string
    size: string
    ratio: string
    dimension: string
}
