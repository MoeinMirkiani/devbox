export function useRouteQuery(name: string): ComputedRef<string> {
    const route = useRoute()
    return computed(() => {
        const query = route.query[name]
        return Array.isArray(query) ? query[0] || '' : query || ''
    })
}
