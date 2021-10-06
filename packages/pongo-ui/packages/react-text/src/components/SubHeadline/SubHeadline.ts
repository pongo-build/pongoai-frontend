import { createText } from '../../utils/index';
import { Theme } from '@pongoai/react-theme';
import { makeStyles } from '@fluentui/react-make-styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: (theme: Theme) => ({
    opacity: theme.fonts.fontOpacity.subHeadline,
  }),
}));

export const SubHeadline = createText({ as: 'p', font: 'base', size: 400, weight: 'bold' }, useStyles, 'SubHeadline');
