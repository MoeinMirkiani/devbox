import { useHttp } from '~/composables/useHttp'
import type { AsyncData } from "~/contracts/http/AsyncData"
import type { Sound, SoundDownloadItem } from "~/contracts/types/Sound"
import type { SoundsResponse } from "~/contracts/http/responses/SoundResponse"
import type { PageInfo } from '~/contracts/http/PageInfo'
import { SoundsQuery } from '~/queries/Sounds'


const baseUrl = (): string => {
    const runtimeConfig = useRuntimeConfig()
    return runtimeConfig.public.graphqlURL
}

const transformList = (data: any): { items: Sound[], pageInfo: PageInfo } => {
    const sounds: Sound[] = data.data.sounds.edges.map((item: any) => listPresenter(item))

    const pageInfo: PageInfo = {
        hasNextPage: data.data.sounds.pageInfo.hasNextPage,
        endCursor: data.data.sounds.pageInfo.endCursor || ''
    }

    return {
        items: sounds,
        pageInfo
    }
}

const listPresenter = (sound: any): Sound => {
    return {
        title: sound.node?.title,
        featuredImage: sound.node?.featuredImage.node.mediaItemUrl,
        size: sound.node?.acfSound.size,
        files: sound.node?.acfSound.files.map((item: any): SoundDownloadItem => {
            return {
                label: item.format,
                link: item.file.node.mediaItemUrl
            }
        })
    }
}

export default {
    list: (first: number, after: string, keyword: string): AsyncData<SoundsResponse> => {
        return useHttp('graphql', {
            baseURL: baseUrl,
            key: 'sound-list',
            body: {
                query: SoundsQuery,
                variables: {
                    first,
                    after,
                    keyword
                }
            },
            transform: transformList
        })
    }
}
