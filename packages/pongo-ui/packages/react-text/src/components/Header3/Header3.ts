import { createText } from '../../utils/index';
import { Theme } from '@pongoai/react-theme';
import { makeStyles } from '@fluentui/react-make-styles';
import type { FunctionComponent } from 'react';
import type { TextWrapperProps } from '../../utils/createText';

const useStyles = makeStyles((theme: Theme) => ({
  root: (theme: Theme) => ({
    opacity: theme.fonts.fontOpacity.header3,
  }),
}));

export const Header3: FunctionComponent<TextWrapperProps> = createText(
  { as: 'h4', font: 'base', size: 500, weight: 'light' },
  useStyles,
  'Header3',
);
