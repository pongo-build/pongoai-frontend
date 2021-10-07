import { createText } from '../../utils/index';
import { Theme } from '@pongoai/react-theme';
import { makeStyles } from '@fluentui/react-make-styles';
import type { FunctionComponent } from 'react';
import type { TextWrapperProps } from '../../utils/createText';

const useStyles = makeStyles((theme: Theme) => ({
  root: (theme: Theme) => ({
    opacity: theme.fonts.fontOpacity.header1,
  }),
}));

export const Header1: FunctionComponent<TextWrapperProps> = createText(
  { as: 'h2', font: 'base', size: 700, weight: 'medium' },
  useStyles,
  'Header1',
);
