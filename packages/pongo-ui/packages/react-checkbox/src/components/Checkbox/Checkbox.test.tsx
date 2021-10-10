import { Checkbox } from './Checkbox';
import { isConformant } from '../../common/isConformant';

describe('Checkbox', () => {
  isConformant({
    Component: Checkbox,
    displayName: 'Checkbox',
  });
});
