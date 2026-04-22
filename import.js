const importX = require('eslint-plugin-import-x');

module.exports = [
  {
    plugins: { 'import-x': importX },
    rules: {
      'import-x/no-unresolved': 'error',
    },
    settings: {
      // v3 では settings['import/parsers'] で @typescript-eslint/parser を文字列指定していたが、
      // typescript-eslint 統合パッケージへの移行に伴い、利用側が languageOptions.parser で tseslint.parser を
      // 明示する前提にした。eslint-plugin-import-x は languageOptions.parser から TS を認識するため、
      // import-x/parsers の指定は不要。
      'import-x/resolver': {
        typescript: {
          project: './',
        },
      },
    },
  },
];
