module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    extends: ["@nuxt/eslint-config"],
    plugins: [],
    rules: {
        indent: ['error', 4, {SwitchCase: 1}],
        'brace-style': ['error', '1tbs', {allowSingleLine: true}],
        'function-call-argument-newline': 'off',
        'vue/html-indent': ['error', 4],
        'object-curly-spacing': ['error', 'always'],
        'vue/v-slot-style': ['error', {named: 'longform', default: 'v-slot'}],
        'vue/singleline-html-element-content-newline': 'off',
        'vue/max-attributes-per-line': 'off',
        'vue/require-default-prop': 'off',
        'space-before-function-paren': 'off',
        'vue/attributes-order': ['error', {
            order: [
                'DEFINITION',
                'CONDITIONALS',
                'TWO_WAY_BINDING',
                'LIST_RENDERING',
                'RENDER_MODIFIERS',
                'GLOBAL',
                ['UNIQUE', 'SLOT'],
                'OTHER_DIRECTIVES',
                'EVENTS',
                'OTHER_ATTR',
                'CONTENT'
            ],
            alphabetical: false
        }],
        'vue/order-in-components': ['error', {
            order: [
                'name',
                'layout',
                'extends',
                'mixins',
                ['components', 'directives', 'filters'],
                ['props', 'propsData'],
                'data',
                'computed',
                'watch',
                'methods',
                'middleware',
                'validate',
                'watchQuery',
                'fetch',
                'asyncData',
                'head',
                'scrollToTop',
                'transition',
                'LIFECYCLE_HOOKS'
            ]
        }]
    }
}