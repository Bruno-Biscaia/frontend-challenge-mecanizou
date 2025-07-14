// jest.config.ts
import type { Config } from 'jest';
import nextJest from 'next/jest';

const createJestConfig = nextJest({ dir: './' });

const customConfig: Config = {
  // só executa testes de unidade dentro de src/
  testMatch: ['<rootDir>/src/**/*.(spec|test).ts?(x)'],
  // ignora sua pasta de E2E em _tests_/e2e
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/_tests_/e2e/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    // CSS/SCSS
    '\\.(css|scss)$': 'identity-obj-proxy',
    // assets estáticos
    '\\.(png|jpg|jpeg|gif|svg)$': '<rootDir>/__mocks__/fileMock.js',
    // mock de next/image
    '^next/image$': '<rootDir>/__mocks__/next/image.tsx',
  },
  testEnvironment: 'jest-environment-jsdom',
};

export default createJestConfig(customConfig);
