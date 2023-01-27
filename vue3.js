module.exports = {
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/typescript/recommended',
    '@vue/prettier',
  ],
  rules: {
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'none',
      },
    }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // TS側でoverrideしているため、元ルールはOFFにする必要がある
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-shadow.md#how-to-use
    "no-shadow": "off",
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'state', // for vuex
        ],
      },
    ],
    "vue/require-explicit-emits": "error",
  },
}
