import type { Logo } from '~/contracts/types/Logo'
import type { PageInfo } from '~/contracts/http/PageInfo'

export interface LogosResponse {
    items: Logo[],
    pageInfo: PageInfo
}
