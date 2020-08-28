module.exports = {
    parser: '@typescript-eslint/parser',
    env: {
        browser: true,
        es6: true
    },
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended'
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: ['react', 'typescript', '@typescript-eslint', 'prettier'],
    settings: {
        react: {
            version: '16.12.0' // Tells eslint-plugin-react to automatically detect the version of React to use
        }
    },
    rules: {
        // 禁止使用 var
        'no-var': 'error',
        // 优先使用 interface 而不是 type
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        'linebreak-style': [0, 'error', 'windows'],
        'no-console': 'off',
        'no-nested-ternary': 'off',
        '@typescript-eslint/no-this-alias': [
            'error',
            {
                allowDestructuring: true, // Allow `const { props, state } = this`; false by default
                allowedNames: ['that'] // Allow `const self = this`; `[]` by default
            }
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        'no-underscore-dangle': ['error', { allowAfterThis: true }],
        'prefer-const': 'off',
        'no-restricted-syntax': 'off',
        'no-await-in-loop': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        'comma-dangle': [
            'error',
            {
                arrays: 'never',
                objects: 'always',
                imports: 'never',
                exports: 'never',
                functions: 'never'
            }
        ],
        'object-curly-spacing': ['error', 'always'],
        'quote-props': ['error', 'as-needed'],
        'key-spacing': ['warn', { beforeColon: false, afterColon: true }],
        'comma-spacing': ['error', { before: false, after: true }],
        'quotes': ['error', 'single'],
        'no-underscore-dangle': ['off'],
        'react/prop-types': ['warn'],
        'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        'padded-blocks': ['warn', { blocks: 'never' }],
        'react/no-unused-state': ['off'],
        'max-len': ['off'],
        'no-empty-pattern': ['off'],
        'react/jsx-no-bind': ['error', { allowBind: true, allowArrowFunctions: true }],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
        'jsx-a11y/no-static-element-interactions': ['off'],
        'comma-dangle': ['off'],
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/interface-name-prefix': ['off'],
        "prettier/prettier": ["error", {"singleQuote": true, "parser": "flow","endOfLine":"auto"}]
    }
};
