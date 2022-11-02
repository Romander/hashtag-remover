module.exports = {
    env: {
      node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "prettier/react",
        "prettier/@typescript-eslint"
      ],
    rules: {
      // override/add rules settings here, such as:
      // 'vue/no-unused-vars': 'error'
    }
  }