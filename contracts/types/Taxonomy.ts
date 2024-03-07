export interface TaxonomyItem {
    name: string
    slug: string
}

export interface Taxonomy {
    name: string,
    items: TaxonomyItem[]
}
