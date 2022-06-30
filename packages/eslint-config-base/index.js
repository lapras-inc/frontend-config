module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
  },
  env: {
    browser: true,
    es2020: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
  ],
  rules: {
    'prettier/prettier': ['error'],
    semi: ['error', 'never'],
    'func-names': ['error', 'never'],
    'array-callback-return': 'error',
    'no-multi-assign': 'error',
    'no-console': 'off',
    'consistent-return': 'error',
    yoda: ['error', 'never', { exceptRange: true }], // 1 < hoge && hoge < 2のような記法は許可

    'no-underscore-dangle': 0,
  },
}