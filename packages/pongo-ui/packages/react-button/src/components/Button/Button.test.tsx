import { Button } from './Button';
import { isConformant } from '../../common/isConformant';

describe('Button', () => {
  isConformant({
    Component: Button,
    displayName: 'Button',
  });
});
