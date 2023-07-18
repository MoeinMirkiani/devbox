<template>
    <header class="header h-17 shadow-header px-20 z-10 sticky bg-[rgba(255,255,255,0.4)]">
        <AppContainer class="flex items-center h-full">
            <NuxtLink to="/" class="header__logo flex">
                <NuxtIcon name="devbox-logo" filled class="inline-block w-[143px] h-[30px]" />
            </NuxtLink>

            <span class="header--divider inline-block h-6 w-[1px] bg-gray-80 mx-12" />

            <nav class="header--navigation">
                <ul class="header--navigation__list flex gap-12">
                    <li v-for="(item, i) in $tm('header.navigation')" :key="i" class="header--navigation__item text-gray-60 hover:text-primary-green text-18 font-400 relative">
                        <NuxtLink
                            :to="localePath($rt(item.link))"
                            class="block header--navigation__link"
                            active-class="header--navigation__link-active"
                        >
                            {{ $rt(item.name) }}
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
        </AppContainer>
    </header>
</template>

<script lang="ts" setup>
import AppContainer from '~/components/UI/AppContainer.vue'

const localePath = useLocalePath()
</script>

<style lang="scss" scoped>
.header {
    &--navigation {
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
}
</style>
