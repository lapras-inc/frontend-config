# frontend-config
ESLint sharable config for Lapras Inc.

[Github packages](https://github.com/orgs/lapras-inc/packages)

# Usage
1. package.json の devDependencies にこのパッケージのアーカイブのURLを追記します（例：`"@lapras-inc/eslint-config": "https://github.com/lapras-inc/frontend-config/archive/v2.0.0.tar.gz"`）
2. `yarn insatall`します
3. .eslintrc の extends にパッケージを追記します（例：`'@lapras-inc/eslint-config-base'`）
4. 必要であれば拡張ルールもextendsに追加します（例：`'@lapras-inc/eslint-config/vue'`）

# 開発手順

### 準備
Githubのpersonal access tokenにより認証を行なっておく必要があります。
詳しくは[ここ](https://docs.github.com/ja/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

tokenの取得方法は[ここ](https://docs.github.com/ja/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)を参照。
権限のスコープは`write:packages`と`read:packages`, `delete:packages`にします。

取得したトークンは、.envrc内の`dummy`を置き換える形で追記してください。
これで`npm publish`が行えるようになりました。

### 手順

1. featureブランチで修正後、コミットする（コミットメッセージの形式はScout/Laprasと同様）
1. [npm version](https://docs.npmjs.com/cli/v8/commands/npm-version)を使ってバージョンアップ（例：`npm version patch`）
1. コミットする。メッセージは`v1.0.1`のように最新バージョンの番号のみでOK
1. pushしPRを作成する
1. PRがマージされたらmainブランチにpullして`npm publish`する

# LICENSE
MIT 