/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  // transform: {
  //   '^.+\\.scss$': 'jest-scss-transform',
  // },
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1',
    'assets/(.*)': '<rootDir>/src/assets/$1',
    'utils/(.*)': '<rootDir>/src/utils/$1',
  },
};
