<template>
    <div class="flex-1">
        <FilterTitle :name="props.name" class="flex-1" />

        <div class="px-6 pt-4 pb-9">
            <AppCheckbox
                v-model="queryParamItems"
                v-for="item in props.items"
                :key="item.slug"
                :label="item.name"
                :value="item.slug"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { AvatarFilterGroupProps } from "~/contracts/components/avatars/AvatarFilterGroupProps"


// Macros
const props = defineProps<AvatarFilterGroupProps>()


// Composables
const router = useRouter()
const route = useRoute()


// Computed
const queryParamName = computed(() => props.name.toLowerCase())

const queryParamItems = computed({
    get() {
        return Array.isArray(route.query[queryParamName.value])
            ? route.query[queryParamName.value]
            : route.query[queryParamName.value]
                ? [route.query[queryParamName.value] as string]
                : []
    },
    set(value) {
        const newQuery = { ...route.query }
        newQuery[queryParamName.value] = value?.length ? value : []

        router.push({ query: newQuery })
    }
})
</script>
