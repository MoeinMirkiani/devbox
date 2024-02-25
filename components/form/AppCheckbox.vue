<template>
    <div class="checkbox">
        <input
            v-model="model"
            :id="id"
            :value="props.value"
            type="checkbox"
        />

        <label :for="id" class="text-18 text-gray-30">{{ props.label }}</label>
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
