export function useRouteQuery(name: string): Ref<string> {
    const route = useRoute()
    const query = route.query[name]
    return ref(Array.isArray(query) ? query[0] || '' : query || '')
}
