import { createText } from '../../utils/index';
import { Theme } from '../../../../react-theme/src/index';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: { opacity: theme.fonts.fontOpacity.display },
}));

export const Display = createText({ as: 'h1', font: 'base', size: 1000, weight: 'black' }, useStyles, 'Display');
