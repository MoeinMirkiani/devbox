import type { AsyncData } from "~/contracts/http/AsyncData"

export type Service = (perPage: number, currentPage: string, keyword: string) => AsyncData<any>
