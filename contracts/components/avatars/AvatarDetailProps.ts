import type { Avatar } from "~/contracts/types/Avatar"

export interface AvatarDetailProps extends Pick<Avatar, 'featuredImage' | 'format' | 'size' | 'resolution'> {}
