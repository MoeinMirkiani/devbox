<template>
    <div
        @mouseenter="displayMore = true"
        @mouseleave="displayMore = false"
        class="avatar pt-3 pb-6 bg-white rounded-5 shadow-card transition-all"
        :class="{ 'z-10': displayMore }"
    >
        <div class="image--cover relative max-w-full mx-3 rounded-5 overflow-hidden aspect-square">
            <img :src="props.avatar.featuredImage" alt="avatar" class="w-full h-full object-cover" />

            <Transition>
                <IconButton
                    v-if="displayMore"
                    @click="displayAvatar"
                    name="ic--search"
                    button-size="32px"
                    icon-size="24px"
                    radius="50%"
                    class="absolute top-3 right-3"
                />
            </Transition>
        </div>

        <div class="relative h-[86px]">
            <div class="w-full absolute top-0 left-0 pt-3 px-3 bg-white rounded-5" :class="{ 'shadow-card-hover': displayMore }">
                <ul class="avatar--detail__list flex flex-col gap-2">
                    <li v-for="item in info" :key="item.label" class="avatar--detail__item">
                        <MediaInfo :label="item.label" :value="item.value" />
                    </li>
                </ul>

                <Transition>
                    <a
                        v-if="displayMore"
                        :href="props.avatar.file"
                        download
                        class="avatar-download w-[calc(100%-24px)] block bg-primary-green text-white text-18 text-center my-6 mx-auto py-3 rounded-[10px] hover:bg-primary-shade"
                    >
                        {{ $t('buttons.download') }}
                    </a>
                </Transition>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { AvatarCardProps } from "~/contracts/components/avatars/AvatarCardProps"
import type { MediaInfoProps } from "~/contracts/components/media/MediaInfoProps"


// Macros
const props = defineProps<AvatarCardProps>()


// Composables
const { t } = useI18n()


// Variables
const displayMore = ref<boolean>(false)
const info = ref<MediaInfoProps[]>([
    {
        label: t('avatars.avatar.format'),
        value: props.avatar.format
    },
    {
        label: t('avatars.avatar.size'),
        value: props.avatar.size
    },
    {
        label: t('avatars.avatar.res'),
        value: props.avatar.resolution
    }
])


// Methods
const displayAvatar = () => {
    console.log(props.avatar.id)
}
</script>
