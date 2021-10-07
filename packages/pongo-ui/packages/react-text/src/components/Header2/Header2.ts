import { createText } from '../../utils/index';
import { Theme } from '@pongoai/react-theme';
import { makeStyles } from '@fluentui/react-make-styles';
import type { FunctionComponent } from 'react';
import type { TextWrapperProps } from '../../utils/createText';

const useStyles = makeStyles((theme: Theme) => ({
  root: (theme: Theme) => ({
    opacity: theme.fonts.fontOpacity.header2,
  }),
}));

export const Header2: FunctionComponent<TextWrapperProps> = createText(
  { as: 'h3', font: 'base', size: 600, weight: 'medium' },
  useStyles,
  'Header2',
);
