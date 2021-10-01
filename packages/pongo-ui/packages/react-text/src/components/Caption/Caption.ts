import { createText } from '../../utils/index';
import { Theme } from '../../../../react-theme/src/index';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: { opacity: theme.fonts.fontOpacity.caption },
}));

export const Caption = createText({ italic: true, font: 'base', size: 200, weight: 'light' }, useStyles, 'Caption');
