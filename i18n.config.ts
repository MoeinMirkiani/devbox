/*
Moein: This file has no use for now. Should be updated after
stable release of i18n v8 to be able to read configuration
from an external file.
*/

import {defineI18nConfig} from '#i18n'
export default defineI18nConfig(() => ({
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
}))