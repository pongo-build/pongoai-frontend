import { createText } from '../../utils/index';
import { Theme } from '../../../../react-theme/src/index';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: { opacity: theme.fonts.fontOpacity.header2 },
}));

export const Header2 = createText({ as: 'h3', font: 'base', size: 600, weight: 'medium' }, useStyles, 'Header2');
