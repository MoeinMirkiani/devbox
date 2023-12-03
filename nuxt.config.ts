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
    ]
})
