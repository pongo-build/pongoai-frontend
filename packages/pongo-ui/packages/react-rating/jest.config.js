module.exports = {
  displayName: 'react-rating',
  preset: 'ts-jest',
  collectCoverage: true,
  coverageDirectory: '../../../../coverage/react-rating',
  setupFilesAfterEnv: ['./config/tests.js'],
  testPathIgnorePatterns: ['/node_modules/', '/lib/', '/lib-commonjs/', '/dist/'],
};
