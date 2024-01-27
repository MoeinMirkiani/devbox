<template>
    <header class="header shadow-header px-20 z-10 sticky bg-[rgba(255,255,255,0.4)]">
        <AppContainer>
            <HeaderNavigation :items="navigation" />

            <div id="page-header"></div>
        </AppContainer>
    </header>
</template>

<script lang="ts" setup>
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
