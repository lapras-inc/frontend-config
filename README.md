# frontend-config

ESLint sharable config for Lapras Inc.

v4 以降は **flat config** 形式（`eslint.config.js`）で提供され、ESLint v10 以上が必要です。

# Usage

（Github Package の利用に問題があったため、archive をそのまま取得する形で運用しています）

1. package.json の devDependencies にこのパッケージのアーカイブ URL を追記（例: `"@lapras-inc/eslint-config": "https://github.com/lapras-inc/frontend-config/archive/v4.tar.gz"`）
2. 利用側で `peerDependencies` を満たす各パッケージを install（`eslint@^10`、`typescript@^5`、`typescript-eslint@^8`、`eslint-plugin-vue@^10`、`vue-eslint-parser@^10`、`@vue/eslint-config-typescript@^14.7`、`@vue/eslint-config-prettier@^10.2`、`prettier@^3`、`eslint-plugin-prettier@^5.2`、`eslint-config-prettier@^10.1`、`eslint-plugin-import-x@^4.16.2`、`eslint-import-resolver-typescript`）
3. `yarn install` / `npm install`
4. プロジェクトルートに `eslint.config.js` を作成し、以下のように参照:

```javascript
const tseslint = require('typescript-eslint');
const base = require('@lapras-inc/eslint-config');
const vue3 = require('@lapras-inc/eslint-config/vue3');
const importConfig = require('@lapras-inc/eslint-config/import');

module.exports = [
  ...base,
  ...vue3,
  ...importConfig,

  // `.ts` / `.tsx`: TS パーサ
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: { parser: tseslint.parser },
  },

  // `.vue`: vue-eslint-parser に `<script lang="ts">` 用のサブパーサを差し込む
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: { parser: tseslint.parser },
    },
  },

  // プロジェクト固有のルール等
];
```

# Exports

| path | 内容 |
|---|---|
| `@lapras-inc/eslint-config` | ベース config（JS / TS 共通、`eslint:recommended` + `typescript-eslint.configs.recommended` + prettier） |
| `@lapras-inc/eslint-config/vue3` | Vue 3 用プリセット（`eslint-plugin-vue` + `@vue/eslint-config-typescript@^14` + `@vue/eslint-config-prettier`） |
| `@lapras-inc/eslint-config/import` | `eslint-plugin-import-x` の設定 |

# v3 からの移行

- `.eslintrc` (legacy) → `eslint.config.js` (flat config) に全面移行
- `eslint` は `v8/v9` 不可、`v10` 以上必須
- `@typescript-eslint/eslint-plugin` + `@typescript-eslint/parser`（個別パッケージ）を廃止 → `typescript-eslint`（統合パッケージ）に置換
- `eslint-plugin-import` → `eslint-plugin-import-x` に乗り換え（ルール名 `import/*` → `import-x/*`）
- `@vue/eslint-config-typescript@^14` は関数 export 形式（v13 の extends 形式から変更）
- `vue.js`（Vue 2 向け）を廃止、`vue3.js` のみ提供

# 開発手順

1. feature ブランチで修正 → PR → マージ（コミットメッセージの形式は Scouty / LAPRAS と同様）
2. `package.json` の `version` を適宜 bump
3. push し PR を作成
4. PR がマージされたら GitHub で tag `v<major>`（例: `v4`）を打ち、必要なら `v<major>.<minor>.<patch>` も併用
5. GitHub Release を作成（リリースタイトルは `vx.x.x` 形式）

> **tag の不変性**: `archive/v<major>.tar.gz` は mutable 参照。`v4` 等の major タグは一度打ったら動かさないこと（hotfix は次 major でリリース）。

# LICENSE

MIT
