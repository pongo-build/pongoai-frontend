import { createText } from '../../utils/index';
import { Theme } from '../../../../react-theme/src/index';
import { makeStyles } from '@fluentui/react-make-styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: (theme: Theme) => ({
    opacity: theme.fonts.fontOpacity.header3,
  }),
}));

export const Header3 = createText({ as: 'h4', font: 'base', size: 500, weight: 'light' }, useStyles, 'Header3');
