import type { Logo } from "~/contracts/types/Logo"

export interface LogoDetailProps extends Pick<Logo, 'featuredImage' | 'title' | 'size' | 'ratio' | 'format'> {}
