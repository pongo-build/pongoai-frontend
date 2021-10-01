import * as React from 'react';
import { useText } from './useText';
import { renderText } from './renderText';
import { useTextStyles } from './useTextStyles';
import type { TextProps } from './Text.types';

/**
 * The Text control standardizes font styling across a webpage.
 */
export const Text: React.FunctionComponent<TextProps> = React.forwardRef<
  HTMLSpanElement | HTMLParagraphElement | HTMLHeadingElement | HTMLPreElement,
  TextProps
>((props, ref) => {
  const state = useText(props, ref);

  useTextStyles(state);

  return renderText(state);
});
Text.displayName = 'Text';
