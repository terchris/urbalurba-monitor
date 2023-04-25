// jest.config.js
module.exports = {
  projects: [
    {
      displayName: 'frontend',
      preset: 'ts-jest',
      testEnvironment: 'jest-environment-jsdom',
      testMatch: ['<rootDir>/src/frontend/__tests__/**/*.ts'],
      setupFilesAfterEnv: ['./src/shared/gethostconfig.ts', './src/frontend/fetchPolyfill.ts'],
    },
    {
      displayName: 'backend',
      preset: 'ts-jest',
      testEnvironment: 'node',
      testMatch: ['<rootDir>/src/backend/__tests__/**/*.ts'],
      setupFilesAfterEnv: ['./src/shared/gethostconfig.ts'],
    },
    {
      displayName: 'worker',
      preset: 'ts-jest',
      testEnvironment: 'node',
      testMatch: ['<rootDir>/src/worker/__tests__/**/*.ts'],
      setupFilesAfterEnv: ['./src/shared/gethostconfig.ts'],
    },
    {
      displayName: 'shared',
      preset: 'ts-jest',
      testEnvironment: 'node',
      testMatch: ['<rootDir>/src/shared/__tests__/**/*.ts'],
      setupFilesAfterEnv: ['./src/shared/gethostconfig.ts'],
    },

  ],
};
