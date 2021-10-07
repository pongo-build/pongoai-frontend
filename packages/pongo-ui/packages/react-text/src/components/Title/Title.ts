import { createText } from '../../utils/index';
import { Theme } from '@pongoai/react-theme';
import { makeStyles } from '@fluentui/react-make-styles';
import type { FunctionComponent } from 'react';
import type { TextWrapperProps } from '../../utils/createText';

const useStyles = makeStyles((theme: Theme) => ({
  root: (theme: Theme) => ({
    opacity: theme.fonts.fontOpacity.title,
  }),
}));

export const Title: FunctionComponent<TextWrapperProps> = createText(
  { as: 'h1', font: 'base', size: 800, weight: 'bold' },
  useStyles,
  'Title',
);
