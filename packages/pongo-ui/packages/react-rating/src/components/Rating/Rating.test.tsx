import { Rating } from './Rating';
import { isConformant } from '../../common/isConformant';

describe('Rating', () => {
  isConformant({
    Component: Rating,
    displayName: 'Rating',
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
