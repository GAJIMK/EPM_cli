module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "max-len": ["error", { code: 120 }],
    "linebreak-style": 0,
    "prettier/prettier": ['error', {
      singleQuote: false,
      semi: true,
      useTabs: false,
      tabWidth: 2,
      trailingComma: 'all',
      printWidth: 80,
      bracketSpacing: true,
      endOfLine:"auto",
    }]
  },
  parserOptions: {
    parser: "babel-eslint",
  },
};
