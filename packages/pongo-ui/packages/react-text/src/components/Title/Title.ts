import { createText } from '../../utils/index';
import { Theme } from '../../../../react-theme/src/index';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: { opacity: theme.fonts.fontOpacity.title },
}));

export const Title = createText({ as: 'h1', font: 'base', size: 800, weight: 'bold' }, useStyles, 'Title');
