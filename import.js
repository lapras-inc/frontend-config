module.exports = {
  "plugins": [
    "import"
  ],
  "rules": {
    "import/no-unresolved": "error"
  },
  "settings": {
    "import/parsers": {
      "@typescript-eslint/parser": [
        ".ts",
        ".tsx"
      ]
    },
    "import/resolver": {
      "typescript": {
        "project": "./"
      }
    }
  },
}