import { Rating } from './Rating';
import { isConformant } from '../../common/isConformant';

describe('Rating', () => {
  isConformant({
    Component: Rating,
    displayName: 'Rating',
  });
});
