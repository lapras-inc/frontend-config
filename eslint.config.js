const js = require('@eslint/js');
const tseslint = require('typescript-eslint');
const prettierPlugin = require('eslint-plugin-prettier/recommended');
const globals = require('globals');

module.exports = [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettierPlugin,
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2020,
        ...globals.jest,
      },
    },
    rules: {
      'prettier/prettier': ['error'],
      semi: ['error', 'never'],
      'func-names': ['error', 'never'],
      'array-callback-return': 'error',
      'no-multi-assign': 'error',
      'no-console': 'off',
      // 1 < hoge && hoge < 2 のような記法は許可するため exceptRange を有効化
      'consistent-return': 'error',
      yoda: ['error', 'never', { exceptRange: true }],
      'no-underscore-dangle': 0,
    },
  },
];
