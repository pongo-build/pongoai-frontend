import { withProvider } from '../packages/pongo-ui/packages/react-storybook/src';

/** @type {NonNullable<import('@storybook/react').Story['decorators']>} */
export const decorators = [withProvider];

/** @type {import('@storybook/react').Parameters} */
export const parameters = {
  controls: {
    disable: true,
    expanded: true,
  },
  docs: {
    source: {
      excludeDecorators: true,
    },
  },
};
