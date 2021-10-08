const root = require('../../../.storybook/main');

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  babel: {},
  typescript: {
    reactDocgen: false,
  },

  addons: [...root.addons],
};
