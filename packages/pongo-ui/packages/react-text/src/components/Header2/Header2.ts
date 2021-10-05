import { createText } from '../../utils/index';
import { Theme } from '../../../../react-theme/src/index';
import { makeStyles } from '@fluentui/react-make-styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: (theme: Theme) => ({
    opacity: theme.fonts.fontOpacity.header2,
  }),
}));

export const Header2 = createText({ as: 'h3', font: 'base', size: 600, weight: 'medium' }, useStyles, 'Header2');
