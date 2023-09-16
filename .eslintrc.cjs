module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['standard', 'prettier', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'simple-import-sort', 'import', 'json'],
  rules: {
    '@typescript-eslint/quotes': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'sort-imports': 'off',
    'import/order': 'off',
    'no-console': 'off',
    camelcase: 'error',
    'no-var': 'error',
    'space-before-function-paren': 'off',
    'dot-notation': 'off',
    'eol-last': 'off',
    '@typescript-eslint/no-var-requires': 'warn',
    '@typescript-eslint/no-this-alias': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-unused-vars': 'off',
    curly: ['error', 'all'],
    'brace-style': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        caughtErrorsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
  },
}