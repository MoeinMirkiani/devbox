export default defineNuxtConfig({
    css: ['@/assets/styles/main.scss'],

    runtimeConfig: {
        baseUrl: process.env.SUPABASE_URL,
        apiURL: process.env.SUPABASE_URL,
        apiKey: process.env.SUPABASE_KEY
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
