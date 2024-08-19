import globals from 'globals'
import pluginJs from '@eslint/js'

export default [
    {languageOptions: {globals: {...globals.browser, ...globals.node}}},
    {rules: {
        ...pluginJs.configs.recommended.rules,
        'indent': ['error', 4], // 4 spaces ident
        'linebreak-style': ['error', 'unix'], // lf
        'semi': ['error','never'], // no semicolon
        'quotes': ['error','single', {'avoidEscape': true}], // single quotes
        'object-curly-spacing': ['error', 'never', {'arraysInObjects': false, 'objectsInObjects': false}], // no spaces in braces
        'no-unused-vars': ['off'], // all vars must be used
        'comma-dangle': ['error', 'always-multiline'],
    }},
]
