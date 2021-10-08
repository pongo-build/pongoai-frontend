module.exports = {
  displayName: 'react-button',
  preset: 'ts-jest',
  collectCoverage: true,
  coverageDirectory: '../../../../coverage/react-button',
  setupFilesAfterEnv: ['./config/tests.js'],
  testPathIgnorePatterns: ['/node_modules/', '/lib/', '/lib-commonjs/', '/dist/'],
};
