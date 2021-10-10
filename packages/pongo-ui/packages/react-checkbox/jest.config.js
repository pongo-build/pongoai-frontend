module.exports = {
  displayName: 'react-checkbox',
  preset: 'ts-jest',
  collectCoverage: true,
  setupFilesAfterEnv: ['./config/tests.js'],
  testPathIgnorePatterns: ['/node_modules/', '/lib/', '/lib-commonjs/', '/dist/'],
};
