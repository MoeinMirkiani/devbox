<template>
    <div class="header-navigation flex items-center h-17">
        <NuxtLink to="/" class="header-logo flex">
            <NuxtIcon name="devbox-logo" filled class="inline-block w-[143px] h-[30px]" />
        </NuxtLink>

        <span class="header-divider inline-block h-6 w-[1px] bg-gray-80 mx-12" />

        <nav class="header-navigation">
            <ul class="header-navigation__list flex gap-12">
                <li v-for="(item, i) in $tm('header.navigation')" :key="i" class="header-navigation__item text-gray-60 hover:text-primary-green text-18 font-400 relative">
                    <NuxtLink
                        :to="localePath($rt(item.link))"
                        class="block header-navigation__link"
                        active-class="header-navigation__link-active"
                    >
                        {{ $rt(item.name) }}
                    </NuxtLink>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script lang="ts" setup>
const localePath = useLocalePath()
</script>

<style lang="scss" scoped>
.header-navigation {
    &__link {
        &:after {
            content: '';
            width: 0;
            height: 4px;
            border-radius: 4px;
            background: theme('colors.primary-green');
            position: absolute;
            top: -23px;
            left: 50%;
            transform: translateX(-50%);
            transition: all 0.1s linear;
        }

        &:hover {
            &:after {
                width: 100%;
            }
        }

        &-active {
            color: theme('colors.primary-green');

            &:after {
                width: 100%;
            }
        }
    }
}
</style>
