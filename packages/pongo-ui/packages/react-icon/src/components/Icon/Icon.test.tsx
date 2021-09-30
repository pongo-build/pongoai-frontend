import { Icon } from './Icon';
import { isConformant } from '../../common/isConformant';

describe('Icon', () => {
  isConformant({
    Component: Icon,
    displayName: 'Icon',
    // TODO: Enable all tests
    disabledTests: [
      'kebab-aria-attributes',
      'consistent-callback-args',
      'component-handles-classname',
      'component-has-root-ref',
      'component-handles-ref',
      'component-renders',
      'component-has-displayname',
    ],
  });
});
