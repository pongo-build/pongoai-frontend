import { createText } from '../../utils/index';
import { Theme } from '../../../../react-theme/src/index';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: { opacity: theme.fonts.fontOpacity.body },
}));

export const Body = createText({ as: 'p', font: 'base', size: 300, weight: 'regular' }, useStyles, 'Body');
