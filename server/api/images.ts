import { serverSupabaseClient } from '#supabase/server'
import {QueryObject} from "ufo";

export default defineEventHandler(async event => {
    const client = await serverSupabaseClient(event)
    const queries = getQuery(event)
    const currentPage: number = Number(queries.currentPage) || 1
    const perPage: number = Number(queries.perPage) || 9
    const { data } = await client
        .from('images')
        .select()
        .order('id')
        .range((currentPage - 1) * perPage, currentPage * perPage - 1)

    return data
})
