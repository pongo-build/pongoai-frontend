import { createText } from '../../utils/index';
import { Theme } from '../../../../react-theme/src/index';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: { opacity: theme.fonts.fontOpacity.header3 },
}));

export const Header3 = createText({ as: 'h4', font: 'base', size: 500, weight: 'medium' }, useStyles, 'Header3');
