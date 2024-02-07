export interface FilterItem {
    name: string
    slug: string
}

export interface Filter {
    name: string,
    items: FilterItem[]
}
