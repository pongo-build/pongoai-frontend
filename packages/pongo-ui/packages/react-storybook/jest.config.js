module.exports = {
  displayName: 'react-storybook',
  preset: 'ts-jest',
  collectCoverage: true,
  coverageDirectory: '../../../../coverage/react-storybook',
  setupFilesAfterEnv: ['./config/tests.js'],
  testPathIgnorePatterns: ['/node_modules/', '/lib/', '/lib-commonjs/', '/dist/'],
};
