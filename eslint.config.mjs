// .eslintrc.mjs
const eslintConfig = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'react-hooks',
    'jsx-a11y',
    'prettier',
    'import',
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'next/core-web-vitals',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // Prettier como erro
    'prettier/prettier': ['error'],

    // Import: não permitir default export anônima
    // (mas já resolvido ao usar variável nomeada)
    'import/no-anonymous-default-export': ['error'],

    // Desliga a exigência de importar React em cada arquivo JSX (Next já faz o auto-import)
    'react/react-in-jsx-scope': 'off',

    // Hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // TypeScript
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

    // Acessibilidade: permitir alguns casos específicos
    'jsx-a11y/anchor-is-valid': 'off',

    // Exemplos de customizações
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-debugger': 'error',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {

      },
    },
  ],
};

export default eslintConfig;
