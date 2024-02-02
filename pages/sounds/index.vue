<template>
    <PageSearch :title="$t('sounds.title')" />

    <div class="videos-page__wrapper pt-8 pb-16 px-20 bg-gray-98 min-h-[calc(100vh-248px)] flex justify-center">
        <AppContainer>
            <SoundCard
                title="White Rabbit"
                :file="sound"
                :poster="poster"
                format="MP3"
                size="24KB"
            />
        </AppContainer>
    </div>
</template>

<script lang="ts" setup>
import poster from '~/assets/images/main--sounds-sample1.jpg'
import sound from '~/assets/sounds/test.mp3'


const { t } = useI18n()

useHead(({
    title: t('sounds.title')
}))
</script>
