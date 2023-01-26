module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'standard-with-typescript',
    '@vue/eslint-config-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.app.json']
  },
  plugins: [
    'vue'
  ],
  rules: {
    'semi': ['error', 'always'],
    '@typescript-eslint/semi': ['error', 'always'],
    'quote-props': ['error', 'consistent'],
    '@typescript-eslint/strict-boolean-expressions': 0
  }
};
