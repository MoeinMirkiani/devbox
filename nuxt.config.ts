export default defineNuxtConfig({
    modules: [
        '@nuxtjs/eslint-module',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/i18n'
    ],

    i18n: {
        vueI18n: './i18n.config.ts'
    }
})
