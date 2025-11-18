module.exports = {
  env: {
    browser: true,
    es6: true,
    'jest/globals': true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'jest', '@stylistic'],
  rules: {
    indent: 'off',
    'linebreak-style': 'off',
    quotes: 'off',
    semi: 'off',
    'object-curly-spacing': 'off',
    'arrow-spacing': 'off',

    '@stylistic/indent': ['error', 2],
    '@stylistic/linebreak-style': ['error', 'unix'],
    '@stylistic/quotes': ['error', 'single'],
    '@stylistic/semi': ['error', 'never'],
    '@stylistic/object-curly-spacing': ['error', 'always'],
    '@stylistic/arrow-spacing': ['error', { before: true, after: true }],

    eqeqeq: 'error',
    'no-trailing-spaces': 'error',
    'no-console': 0,
    'react/prop-types': 0,
  },
}
