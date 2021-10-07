const root = require('../../../.storybook/main');

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  babel: {},
  addons: [...root.addons],
};
