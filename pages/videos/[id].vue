<template>
    <div class="media min-h-[calc(100vh-148px)] pt-8 pb-16 px-20">
        <AppContainer>
            <ExploreMore :title="$t('videos.explore')">
                {{ id }}
            </ExploreMore>
        </AppContainer>
    </div>
</template>

<script lang="ts" setup>
// Composables
const id = useRouteInfo({ location: 'param', name: 'id' })


// Variables


// Methods
</script>
