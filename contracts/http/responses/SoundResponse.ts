import type { Sound } from "~/contracts/types/Sound"
import type { PageInfo } from '~/contracts/http/PageInfo'

export interface SoundsResponse {
    items: Sound[],
    pageInfo: PageInfo
}
