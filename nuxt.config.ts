export default defineNuxtConfig({
    modules: [
        '@nuxtjs/eslint-module',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/i18n',
        'nuxt-icons'
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
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/styles/main.scss" as *;'
                }
            }
        }
    }
})
