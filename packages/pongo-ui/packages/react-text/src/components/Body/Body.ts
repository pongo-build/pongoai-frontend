import { createText } from '../../utils/index';
import { Theme } from '@pongoai/react-theme';
import { makeStyles } from '@fluentui/react-make-styles';
import type { FunctionComponent } from 'react';
import type { TextWrapperProps } from '../../utils/createText';

const useStyles = makeStyles({
  root: (theme: Theme) => ({
    opacity: theme.fonts.fontOpacity.body,
  }),
});

export const Body: FunctionComponent<TextWrapperProps> = createText(
  { as: 'p', font: 'base', size: 300, weight: 'regular' },
  useStyles,
  'Body',
);
