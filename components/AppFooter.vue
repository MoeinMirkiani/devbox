<template>
    <footer class="footer h-20 px-20 bg-gray-90">
        <AppContainer class="flex justify-between items-center h-full">
            <NuxtLink :to="{ path: '/' }" class="flex">
                <NuxtIcon name="devbox-logo" class="inline-block w-[143px] h-[30px] text-gray-30" />
            </NuxtLink>

            <span class="footer__copyright text-14 font-light text-gray-60">{{$t('footer.copyright')}}</span>
        </AppContainer>
    </footer>
</template>

<script setup lang="ts"></script>
