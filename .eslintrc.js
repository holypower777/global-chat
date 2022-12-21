module.exports = {
    env: {
        browser: true,
        es2022: true,
    },
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            modules: true,
            jsx: true,
        },
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'eslint-plugin-import-helpers', 'react-hooks'],
    ignorePatterns: ['node_modules', 'static/build', 'build', 'dist', '.storybook'],
    rules: {
        'import-helpers/order-imports': [
            'error',
            {
                newlinesBetween: 'always',
                groups: [
                    'module',
                    '/^twitch-chat/',
                    '/^platform-components/',
                    '/^platform-apis/',
                    '/^common.components/',
                    'parent',
                    'sibling',
                    'index',
                ],
                alphabetize: { order: 'asc', ignoreCase: true },
            },
        ],
        'react/jsx-filename-extension': [
            'error',
            {
                extensions: ['.tsx'],
            },
        ],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                varsIgnorePattern: '^_',
                argsIgnorePattern: '^_',
                destructuredArrayIgnorePattern: '^_',
                caughtErrorsIgnorePattern: '^error',
            },
        ],
        'no-console': ['error', { allow: ['info', 'error'] }],
        'react-hooks/rules-of-hooks': 'error',
        'no-use-before-define': 'off',
        'no-shadow': 'off',
        'no-cond-assign': 'error',
        'no-const-assign': 'error',
        'no-constant-condition': 'off',
        'no-debugger': 'error',
        'no-dupe-args': 'error',
        'max-params': [2, 4],
        camelcase: 'error',
        'max-len': [
            'error',
            {
                code: 100,
                tabWidth: 4,
                ignoreComments: true,
                ignoreUrls: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true,
            },
        ],
    },
    settings: {
        react: {
            version: '18.0',
        },
    },
};
