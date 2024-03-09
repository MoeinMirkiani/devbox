export interface TaxonomyItem {
    name: string
    slug: string
}

export interface Taxonomy {
    singleName: string,
    pluralName: string,
    items: TaxonomyItem[]
}

export interface TaxonomyQueryItem {
    terms: string[]
    taxonomy: string
    operator: 'IN'
    field: 'SLUG'
}

export interface TaxonomyQuery {
    relation: 'AND'
    taxArray: TaxonomyQueryItem[]
}
