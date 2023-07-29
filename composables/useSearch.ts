export const useSearch = (items: Image[], keyword: string): Image[] => {
    return keyword.length ? items.filter(item => item.title.toLowerCase().includes(keyword.toLowerCase())) : items
}