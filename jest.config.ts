import type { Config } from 'jest'
import nextJest from 'next/jest'

const createJestConfig = nextJest({ dir: './' })

const customConfig: Config = {
  // …suas outras configurações…
  testMatch: ['<rootDir>/src/**/*.(spec|test).ts?(x)'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/e2e/'
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '\\.(png|jpg|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
  testEnvironment: 'jest-environment-jsdom',
}

export default createJestConfig(customConfig)
