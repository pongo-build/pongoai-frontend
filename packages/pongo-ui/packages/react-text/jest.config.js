module.exports = {
  displayName: 'react-text',
  preset: 'ts-jest',
  collectCoverage: true,
  coverageDirectory: '../../../../coverage/react-text',
  setupFilesAfterEnv: ['./config/tests.js'],
  testPathIgnorePatterns: ['/node_modules/', '/lib/', '/lib-commonjs/', '/dist/'],
};
