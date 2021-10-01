import { Text } from './Text';
import { isConformant } from '../../common/isConformant';

describe('Text', () => {
  isConformant({
    Component: Text,
    displayName: 'Text',
    // TODO: Enable all tests
    disabledTests: [
      'kebab-aria-attributes',
      'component-handles-classname',
      'component-has-root-ref',
      'component-handles-ref',
      'component-renders',
    ],
  });
});
