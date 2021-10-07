import { Text } from './Text';
import { isConformant } from '../../common/isConformant';

describe('Text', () => {
  isConformant({
    Component: Text as any,
    displayName: 'Text',
    // TODO: Enable all tests
    disabledTests: [
      'kebab-aria-attributes',
      'component-handles-classname',
      'component-has-root-ref',
      'component-handles-ref',
      'component-renders',
    ],
    testOptions: {
      'make-styles-overrides-win': {
        callCount: 1,
      },
    } as any,
  });
});
