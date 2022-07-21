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
        bracketSpacing: false,
        proseWrap: 'preserve',
        endOfLine: 'auto',
        arrowParens: 'avoid', //함수 파라미터 1개일때 괄호 안해도 되도록
        vueIndentScriptAndStyle: true, // Vue 파일의 script와 style 태그의 들여쓰기 여부 (v1.19.0)
        parser: '', // 사용할 parser를 지정, 자동으로 지정됨
        filepath: '', // parser를 유추할 수 있는 파일을 지정
        rangeStart: 0, // 포맷팅을 부분 적용할 파일의 시작 라인 지정
        rangeEnd: Infinity, // 포맷팅 부분 적용할 파일의 끝 라인 지정,
        requirePragma: false, // 파일 상단에 미리 정의된 주석을 작성하고 Pragma로 포맷팅 사용 여부 지정 (v1.8.0)
        insertPragma: false, // 미리 정의된 @format marker의 사용 여부 (v1.8.0)
      },
    ],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
