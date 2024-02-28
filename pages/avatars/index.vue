<template>
    <PageFilters :title="$t('avatars.title')" :filters>
        <AvatarFilters :filters />
    </PageFilters>

    <div class="avatars-page__wrapper pt-8 pb-16 px-20 bg-gray-98 min-h-[calc(100vh-248px)] flex justify-center">
        <AppContainer>
        </AppContainer>
    </div>
</template>

<script lang="ts" setup>
import AvatarService from "~/services/AvatarService"
import type { Filter } from "~/contracts/types/Filter"


// Composables
const { t } = useI18n()

useHead(({
    title: t('avatars.title')
}))


// Variables
const filters = ref<Filter[]>()


// Methods
const fetchFilters = async () => {
    const { data } = await AvatarService.filters()
    filters.value = data.value
}

await fetchFilters()
</script>
