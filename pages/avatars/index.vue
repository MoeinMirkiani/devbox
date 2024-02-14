<template>
    <PageFilters :title="$t('avatars.title')" :filters>
        <AvatarFilters />
    </PageFilters>

    <div class="avatars-page__wrapper pt-8 pb-16 px-20 bg-gray-98 min-h-[calc(100vh-248px)] flex justify-center">
        <AppContainer>
            Avatars
        </AppContainer>
    </div>
</template>

<script lang="ts" setup>
const { t } = useI18n()

useHead(({
    title: t('avatars.title')
}))

// Variables
const filters = [
    {
        name: 'Gender',
        items: [
            {
                name: 'Male',
                slug: 'male'
            },
            {
                name: 'Female',
                slug: 'female'
            }
        ]
    },
    {
        name: 'Age',
        items: [
            {
                name: 'Male',
                slug: 'male'
            },
            {
                name: 'Female',
                slug: 'female'
            },
            {
                name: 'Male',
                slug: 'male'
            },
            {
                name: 'Female',
                slug: 'female'
            }
        ]
    },
    {
        name: 'Format',
        items: [
            {
                name: 'Male',
                slug: 'male'
            },
            {
                name: 'Female',
                slug: 'female'
            }
        ]
    },
    {
        name: 'Color',
        items: [
            {
                name: 'Male',
                slug: 'male'
            },
            {
                name: 'Female',
                slug: 'female'
            }
        ]
    }
]
</script>
