import { Button } from './Button';
import { isConformant } from '../../common/isConformant';

describe('Button', () => {
  isConformant({
    Component: Button,
    displayName: 'Button',
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
