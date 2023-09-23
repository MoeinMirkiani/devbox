export default defineNuxtConfig({
    css: ['@/assets/styles/main.scss'],

    runtimeConfig: {
        apiURL: process.env.API_URL,
        apiKey: process.env.API_KEY
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
        'nuxt-swiper',
        '@nuxtjs/supabase'
    ]
})
