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

    // não permitir import default export anônima
    'import/no-anonymous-default-export': ['error'],

    // não precisa importar 'React' em cada arquivo
    'react/react-in-jsx-scope': 'off',

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

    // Acessibilidade
    'jsx-a11y/anchor-is-valid': 'off',

    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-debugger': 'error',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // caso tivesse regras específicas de lint, colocaria aqui
      },
    },
  ],
};

export default eslintConfig;
