import { createText } from '../../utils/index';
import { Theme } from '@pongoai/react-theme';
import { makeStyles } from '@fluentui/react-make-styles';
import type { FunctionComponent } from 'react';
import type { TextWrapperProps } from '../../utils/createText';

const useStyles = makeStyles((theme: Theme) => ({
  root: (theme: Theme) => ({
    opacity: theme.fonts.fontOpacity.caption,
  }),
}));

export const Caption: FunctionComponent<TextWrapperProps> = createText(
  { italic: true, font: 'base', size: 200, weight: 'light' },
  useStyles,
  'Caption',
);
