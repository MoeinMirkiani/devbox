<template>
    <div class="checkbox">
        <input
            :id="id"
            @change="update"
            type="checkbox"
            :checked="model"
        />

        <label :for="id" class="text-18 text-gray-30">{{ props.label }}</label>
    </div>
</template>

<script lang="ts" setup>
import type { AppCheckboxProps } from "~/contracts/components/form/AppCheckboxProps"


// Macros
const props = defineProps<AppCheckboxProps>()
const model = defineModel()


// Composables
const id = useId()


// Methods
const update = (event: Event) => {
    const target = event.target as HTMLInputElement
    model.value = target.checked
}
</script>
