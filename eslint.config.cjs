// eslint.config.cjs
const js = require('@eslint/js');
const parser = require('@typescript-eslint/parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const prettierPlugin = require('eslint-plugin-prettier');

module.exports = [
  {
    // só aplica o lint nessa lista de patterns
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    // node_modules, .next etc
    ignores: ['node_modules/**', '.next/**'],
    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      prettier: prettierPlugin,
    },
    // base do Next.js + TS
    ...js.configs['recommended'],
    rules: {
      ...tsPlugin.configs.recommended.rules,
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: true,
          tabWidth: 2,
          trailingComma: 'es5',
          printWidth: 80,
        },
      ],
    },
    settings: {
      react: { version: 'detect' },
    },
  },
];
