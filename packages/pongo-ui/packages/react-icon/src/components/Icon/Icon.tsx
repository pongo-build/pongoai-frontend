import * as React from 'react';
import { useIcon } from './useIcon';
import type { IconProps } from './Icon.types';
import { renderIcon } from './renderIcon';

/**
 * The Icon control is used to present a visual image that represents a concept for the user.
 */
export const Icon = React.forwardRef<HTMLDivElement, IconProps>((props, ref) => {
  const state = useIcon(props, ref);

  return renderIcon(state);
});
