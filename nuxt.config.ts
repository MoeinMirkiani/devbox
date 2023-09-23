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

    supabase: {
        url: process.env.SUPABASE_URL,
        key: process.env.SUPABASE_KEY,
        redirect: false
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
