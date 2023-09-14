export default defineNuxtConfig({
    modules: [
        '@nuxtjs/eslint-module',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/i18n',
        'nuxt-icons',
        'nuxt-swiper',
    ],

    app: {
        head: {
            titleTemplate: 'Devbox - %s'
        }
    },

    css: ['@/assets/styles/main.scss'],

    i18n: {
        lazy: true,
        langDir: 'locales',
        defaultLocale: 'en',
        strategy: 'prefix_except_default',
        locales: [
            {
                code: 'en',
                file: 'en-US.ts'
            }
        ]
    }
})
