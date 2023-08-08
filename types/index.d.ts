export interface Media {
    id: string
    mediaType: 'image' | 'video' | 'sound' | 'logo' | 'avatar'
    source: object
    title: string
    cover: string
    resolution: string
    size: string
    ratio: string
    dimension: string
    format: string
}
