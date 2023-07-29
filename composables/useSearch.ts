export const useSearch = (items: object[], keyword: string): object[] => {
    return keyword.length ? items.filter(item => item.title.toLowerCase().includes(keyword.toLowerCase())) : items
}