import type { RouteInfo } from '@/contracts/http/RouteInfo'

export function useRouteInfo({ location, name }: RouteInfo): ComputedRef<string> {
    const route = useRoute()

    return computed(() => {
        const info = location === 'param' ? route.params[name] : route.query[name]
        return Array.isArray(info) ? info[0] || '' : info || ''
    })
}
