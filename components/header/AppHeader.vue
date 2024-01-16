<template>
    <header class="header shadow-header px-20 z-10 sticky bg-[rgba(255,255,255,0.4)]">
        <AppContainer>
            <HeaderNavigation :items="navigation" />

            <HeaderSearch v-if="search" />
        </AppContainer>
    </header>
</template>

<script lang="ts" setup>
defineProps({
    search: {
        type: Boolean,
        default: false
    }
})

const navigation: object[] = [
    {
        name: 'Images',
        link: 'images'
    },
    {
        name: 'Videos',
        link: 'videos'
    },
    {
        name: 'Avatars',
        link: 'avatars'
    },
    {
        name: 'Sounds',
        link: 'sounds'
    },
    {
        name: 'Logos',
        link: 'logos'
    }
]
</script>
