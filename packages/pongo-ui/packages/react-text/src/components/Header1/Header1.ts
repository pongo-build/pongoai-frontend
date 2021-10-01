import { createText } from '../../utils/index';
import { Theme } from '../../../../react-theme/src/index';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: { opacity: theme.fonts.fontOpacity.header1 },
}));

export const Header1 = createText({ as: 'h2', font: 'base', size: 700, weight: 'medium' }, useStyles, 'Header1');
