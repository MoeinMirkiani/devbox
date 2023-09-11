export default defineNuxtConfig({
    modules: [
        '@nuxtjs/eslint-module',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/i18n',
        'nuxt-icons',
        'nuxt-swiper',
        '@nuxtjs/apollo'
    ],

    i18n: {
        legacy: false,
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
    },

    // @ts-ignore
    app: {
        head: {
            titleTemplate: 'Devbox - %s'
        }
    },

    css: ['@/assets/styles/main.scss'],

    apollo: {
        clients: {
            default: {
                httpEndpoint: 'http://headless.local/graphql'
            }
        }
    }
})
