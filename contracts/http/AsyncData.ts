import { type AsyncData as NuxtAsyncData } from "#app"
import { FetchError } from "ofetch"

export type AsyncData<T> = Promise<NuxtAsyncData<T, FetchError | null>>
