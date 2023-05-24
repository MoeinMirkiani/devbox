import {defineI18nConfig} from "#i18n"

export default defineI18nConfig(() => ({
    legacy: false,
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    locales: [
        {
            code: 'en',
            file: 'en-US.json',
        }
    ]
}))