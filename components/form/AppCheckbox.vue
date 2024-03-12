<template>
    <div class="checkbox flex items-center">
        <input
            v-model="model"
            :id="id"
            :value="props.value"
            type="checkbox"
            class="
                relative
                appearance-none
                w-5
                h-5
                border-2
                border-primary-green
                rounded-1
                checked:bg-primary-green
                before:content-['\2714']
                before:font-serif
                before:text-16
                before:text-[transparent]
                checked:before:text-white
                before:absolute
                before:top-1/2
                before:left-1/2
                before:-translate-x-1/2
                before:-translate-y-1/2
            "
        />

        <label :for="id" class="text-18 text-gray-30 pl-2">{{ props.label }}</label>
    </div>
</template>

<script lang="ts" setup>
import type { AppCheckboxProps } from "~/contracts/components/form/AppCheckboxProps"


// Macros
const props = defineProps<AppCheckboxProps>()
const model = defineModel<boolean | []>()


// Composables
const id = useId()
</script>
