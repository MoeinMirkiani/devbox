export default defineNuxtConfig({
    css: ['@/assets/styles/main.scss'],

    runtimeConfig: {
        public: {
            graphqlURL: process.env.GRAPHQL
        }
    },

    app: {
        head: {
            titleTemplate: 'Devbox - %s'
        }
    },

    modules: [
        '@nuxtjs/eslint-module',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/i18n',
        'nuxt-icons',
        'nuxt-swiper'
    ],

    i18n: {
        locales: [
            {
                code: 'en-US',
                iso: 'en-US',
                file: 'en-US.json',
                name: 'English',
                dir: 'ltr'
            }
        ],
        lazy: true,
        strategy: 'no_prefix',
        detectBrowserLanguage: false,
        langDir: 'locales/',
        defaultLocale: 'en-US',
        types: 'composition',
        pages: undefined,
        dynamicRouteParams: false,
        skipSettingLocaleOnNavigate: true,
        compilation: {
            strictMessage: false
        },
        vueI18n: './i18n.config.ts'
    }
})
