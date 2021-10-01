import { createText } from '../../utils/index';
import { Theme } from '../../../../react-theme/src/index';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: { opacity: theme.fonts.fontOpacity.subHeadline },
}));

export const SubHeadline = createText({ as: 'p', font: 'base', size: 400, weight: 'bold' }, useStyles, 'SubHeadline');
