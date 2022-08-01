# frontend-config
ESLint sharable config for Lapras Inc.

# Usage

（Github Packageの利用に問題があったため一旦archiveをそのまま取得する形で運用しています）

1. package.json の devDependencies にこのパッケージのアーカイブのURLを追記します（例：`"@lapras-inc/eslint-config": "https://github.com/lapras-inc/frontend-config/archive/<version>.tar.gz"`）
2. `yarn insatall`します
3. .eslintrc の extends にパッケージを追記します（例：`'@lapras-inc/eslint-config'`）
4. 必要であれば拡張ルールもextendsに追加します（例：`'@lapras-inc/eslint-config/vue'`）

# 開発手順

1. featureブランチで修正後、コミットする（コミットメッセージの形式はScout/Laprasと同様）
1. [yarn version](https://classic.yarnpkg.com/en/docs/cli/version)を使ってバージョンアップする
1. pushしPRを作成する
1. PRがマージされたらGithubでリリースを作成する（リリースタイトルはvx.x.xの形式）

# LICENSE
MIT 