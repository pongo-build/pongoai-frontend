import { createText } from '../../utils/index';
import { Theme } from '../../../../react-theme/src/index';
import { makeStyles } from '@fluentui/react-make-styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: (theme: Theme) => ({
    opacity: theme.fonts.fontOpacity.title,
  }),
}));

export const Title = createText({ as: 'h1', font: 'base', size: 800, weight: 'bold' }, useStyles, 'Title');
