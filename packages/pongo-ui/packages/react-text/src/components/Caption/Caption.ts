import { createText } from '../../utils/index';
import { Theme } from '../../../../react-theme/src/index';
import { makeStyles } from '@fluentui/react-make-styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: (theme: Theme) => ({
    opacity: theme.fonts.fontOpacity.caption,
  }),
}));

export const Caption = createText({ italic: true, font: 'base', size: 200, weight: 'light' }, useStyles, 'Caption');
