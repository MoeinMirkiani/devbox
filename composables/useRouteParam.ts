export function useRouteParam(name: string): ComputedRef<string> {
    const route = useRoute()
    return computed(() => {
        const param = route.params[name]
        return Array.isArray(param) ? param[0] || '' : param || ''
    })
}
