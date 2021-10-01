import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import type { TextState } from './Text.types';
import { Theme } from '../../../../react-theme/src/index';

const useRootStyles = makeStyles((theme: Theme) => ({
  root: {
    textAlign: 'start',
    display: 'inline',
    whiteSpace: 'normal',
    overflow: 'visible',
    textOverflow: 'clip',
  },
  base: {
    fontFamily: theme.fonts.fontFamily.base,
  },
  monospace: {
    fontFamily: theme.fonts.fontFamily.monospace,
  },
  thin: {
    fontWeight: theme.fonts.fontWeight.thin,
  },
  light: {
    fontWeight: theme.fonts.fontWeight.light,
  },
  regular: {
    fontWeight: theme.fonts.fontWeight.regular,
  },
  medium: {
    fontWeight: theme.fonts.fontWeight.medium,
  },
  bold: {
    fontWeight: theme.fonts.fontWeight.bold,
  },
  black: {
    fontWeight: theme.fonts.fontWeight.black,
  },
  italic: {
    fontStyle: 'italic',
  },
  underline: {
    textDecoration: 'underline',
  },
  strikethrough: {
    textDecoration: 'line-through',
  },
  strikethroughUnderline: {
    textDecoration: 'line-through underline',
  },
  100: {
    fontSize: theme.fonts.fontSize[100],
    lineHeight: theme.fonts.fontSize[100],
  },
  200: {
    fontSize: theme.fonts.fontSize[200],
    lineHeight: theme.fonts.fontSize[200],
  },
  300: {
    fontSize: theme.fonts.fontSize[300],
    lineHeight: theme.fonts.fontSize[300],
  },
  400: {
    fontSize: theme.fonts.fontSize[400],
    lineHeight: theme.fonts.fontSize[400],
  },
  500: {
    fontSize: theme.fonts.fontSize[500],
    lineHeight: theme.fonts.fontSize[500],
  },
  600: {
    fontSize: theme.fonts.fontSize[600],
    lineHeight: theme.fonts.fontSize[600],
  },
  700: {
    fontSize: theme.fonts.fontSize[700],
    lineHeight: theme.fonts.fontSize[700],
  },
  800: {
    fontSize: theme.fonts.fontSize[800],
    lineHeight: theme.fonts.fontSize[800],
  },
  900: {
    fontSize: theme.fonts.fontSize[900],
    lineHeight: theme.fonts.fontSize[900],
  },
  1000: {
    fontSize: theme.fonts.fontSize[1000],
    lineHeight: theme.fonts.fontSize[1000],
  },
}));

export const useTextStyles = (state: TextState): TextState => {
  const styles = useRootStyles();

  state.root.className = clsx(
    styles.root,
    styles[state.font!],
    styles[state.weight!],
    styles[state.size!],
    state.italic && styles.italic,
    state.underline && styles.underline,
    state.strikethrough && styles.strikethrough,
    state.underline && state.strikethrough && styles.strikethroughUnderline,
    state.root.className,
  );
  return state;
};
