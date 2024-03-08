export interface TaxonomyItem {
    name: string
    slug: string
}

export interface Taxonomy {
    singleName: string,
    pluralName: string,
    items: TaxonomyItem[]
}
