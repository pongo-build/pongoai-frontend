import * as React from 'react';
import { renderText, useText, useTextStyles } from '../Text';
import type { TextProps } from '../Text';
import { mergeClasses } from '@fluentui/react-make-styles';

export const createText = (defaultProps: TextProps, useStyles: () => Record<any, string>, displayName: string) => {
  const TextComponent = React.forwardRef<HTMLElement, TextProps>((props, ref) => {
    const mergedProps = { ...defaultProps, ...props };
    const styles = useStyles();
    const state = useText(mergedProps as TextProps, ref);

    useTextStyles(state);
    state.root.className = mergeClasses(state.root.className, styles.root, mergedProps.className);

    return renderText(state);
  });
  TextComponent.displayName = displayName;

  return React.memo(TextComponent);
};
