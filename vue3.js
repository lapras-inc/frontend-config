const pluginVue = require('eslint-plugin-vue');
const prettierVue = require('@vue/eslint-config-prettier');
const { createConfig } = require('@vue/eslint-config-typescript');

module.exports = [
  // eslint-plugin-vue v10 では Vue 3 がデフォルトになり flat/essential 等の "vue3-" プレフィックスが外れた
  ...pluginVue.configs['flat/essential'],
  // @vue/eslint-config-typescript v14 の createConfig() は
  // `.vue` ファイル内の <script lang="ts"> 解釈に必要な vue-eslint-parser + tseslint.parser の
  // 組み合わせを flat config 上で正しくセットアップする。
  // 利用側が `languageOptions.parserOptions.parser` を個別に書かずに済む。
  ...createConfig(),
  prettierVue,
  {
    rules: {
      // @typescript-eslint/member-delimiter-style は v7 で deprecated、v8 で @typescript-eslint/*
      // 名前空間から削除され @stylistic/* へ移管された。prettier の semi:false で同等の効果が得られるため、
      // 本 config では持たない。
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      // TS 側で override しているため、元ルールは OFF にする必要がある
      // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-shadow.md
      'no-shadow': 'off',
      'no-param-reassign': [
        'error',
        {
          props: true,
          // vuex の state 更新は慣例的に引数変更で行うため許容する
          ignorePropertyModificationsFor: ['state'],
        },
      ],
      'vue/require-explicit-emits': 'error',
    },
  },
];
