module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/prettier'],
  rules: {
    'linebreak-style': 0,
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        useTabs: false,
        tabWidth: 2,
        trailingComma: 'all',
        printWidth: 80,
        bracketSpacing: true,
        endOfLine: 'auto',
        arrowParens: 'always', //함수 파라미터 1개일때 괄호 안해도 되도록
      },
    ],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
