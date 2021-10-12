import { TextField } from './TextField';
import { isConformant } from '../../common/isConformant';

describe('Text', () => {
  isConformant({
    Component: TextField,
    displayName: 'TextField',
    testOptions: {
      'make-styles-overrides-win': {
        callCount: 1,
      },
    } as any,
  });
});
