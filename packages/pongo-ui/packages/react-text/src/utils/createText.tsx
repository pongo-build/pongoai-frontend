import * as React from 'react';
import { renderText, useText, useTextStyles } from '../Text';
import type { TextProps } from '../Text';
import { Theme } from '../../../react-theme/src/index';
import clsx from 'clsx';
import { ClassNameMap } from '@mui/styles';

export const createText = (
  defaultProps: TextProps,
  useStyles: (props?: Theme) => ClassNameMap<'root'>,
  displayName: string,
) => {
  const TextComponent = React.forwardRef<HTMLElement, TextProps>((props, ref) => {
    const mergedProps = { ...defaultProps, ...props };
    const styles = useStyles();
    const state = useText(mergedProps as TextProps, ref);

    useTextStyles(state);
    state.root.className = clsx(state.root.className, styles.root, mergedProps.className);

    return renderText(state);
  });
  TextComponent.displayName = displayName;

  return TextComponent;
};
