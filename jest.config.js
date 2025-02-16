module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/*.test.js'],
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/tests/**/*.js'
  ],
  coverageDirectory: 'coverage'
}; 