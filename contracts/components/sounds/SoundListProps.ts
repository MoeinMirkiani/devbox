import type { Sound } from "~/contracts/types/Sound"

export interface SoundListProps {
    items: Sound[],
    loading: boolean
}
