module.exports = {
  displayName: 'react-icon',
  preset: 'ts-jest',
  collectCoverage: true,
  coverageDirectory: '../../../../coverage/react-icon',
  setupFilesAfterEnv: ['./config/tests.js'],
  testPathIgnorePatterns: ['/node_modules/', '/lib/', '/lib-commonjs/', '/dist/'],
};
