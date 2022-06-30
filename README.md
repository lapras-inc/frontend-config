# frontend-config
フロントエンドの設定ファイルを集めたモノレポ

以下のパッケージを[Github packages](https://github.com/orgs/lapras-inc/packages)で公開しています。

- [eslint-config-base](https://github.com/lapras-inc/frontend-config/tree/main/packages/eslint-config-base)
- [eslint-config-vue](https://github.com/lapras-inc/frontend-config/tree/main/packages/eslint-config-vue)

# 使い方
1. package.json の devDependencies に使いたいパッケージを追記します（例：`"@lapras-inc/eslint-config-base": "1.0.1",`）
2. `yarn insatall`
3. .eslintrc の extends にパッケージを追記します（例：`'@lapras-inc/eslint-config-base'`）。

詳しくは[ここ](https://docs.github.com/ja/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#installing-a-package)を参照

# 開発手順

### 準備
Githubのpersonal access tokenにより認証を行なっておく必要があります。
詳しくは[ここ](https://docs.github.com/ja/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

tokenの取得方法は[ここ](https://docs.github.com/ja/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)を参照。
権限のスコープは`write:packages`と`read:packages`, `delete:packages`にします。

取得したトークンは、.envrc内の`dummy`を置き換える形で追記してください。
これで`npm publish`が行えるようになりました。

### 手順

1. 修正したいパッケージのディレクトリへ移動（例: packages/eslint-config-base）
1. featureブランチで修正後、コミットする
コミットメッセージの形式はScoutなどと同様です。
1. [npm version](https://docs.npmjs.com/cli/v8/commands/npm-version)を使ってバージョンアップ（例：`npm version patch`）
1. コミットする。メッセージは`eslint-config-vue v1.0.1`のように[パッケージ名]＋[最新バージョンの番号]。
1. pushしPRを作成する。
1. PRがマージされたらmainブランチにpullして`npm publish`する
