// @ts-ignore
// @ts-ignore
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/eslint-module',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/i18n',
        'nuxt-icons'
    ],

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/styles/main.scss" as *;'
                }
            }
        }
    },

    i18n: {
        legacy: false,
        lazy: true,
        langDir: 'locales',
        defaultLocale: 'en',
        strategy: 'prefix_except_default',
        locales: [
            {
                code: 'en',
                file: 'en-US.json'
            }
        ]
    }
})
