<template>
    <div class="download-sound w-[176px] bg-gray-98 rounded-3 shadow-dropdown overflow-hidden">
        <p class="download-sound__title text-14 text-gray-60 px-5 py-4 border-b border-b-gray-60 opacity-80">{{ $t('sounds.sound.download') }}</p>

        <ul class="download-sound__items">
            <li v-for="item in props.items" :key="item.label" class="download-sound__item">
                <a :href="item.link" target="_blank" class="text-14 text-gray-30 block uppercase px-5 py-4 hover:bg-gray-90 transition-all">{{ item.label }}</a>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import type { SoundDownloadProps } from "~/contracts/components/sounds/SoundDownloadProps"

const props = defineProps<SoundDownloadProps>()
</script>
