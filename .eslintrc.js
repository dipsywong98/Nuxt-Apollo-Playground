module.exports = {
  plugins: ['@typescript-eslint'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: ['@nuxtjs'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    quotemark: [true, 'single'],
    indent: 2,
    'interface-name': false,
    'ordered-imports': false,
    'object-literal-sort-keys': false,
    'no-consecutive-blank-lines': false,
    'comma-dangle': ['error', 'always-multiline'],
    'vue/html-self-closing': ['warning', 'always'],
    semi: true,
  },
}
