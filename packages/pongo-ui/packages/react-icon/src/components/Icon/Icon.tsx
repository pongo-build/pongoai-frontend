import * as React from 'react';
import { useIcon } from './useIcon';
import type { IconProps } from './Icon.types';
import { renderIcon } from './renderIcon';

export const Icon = React.forwardRef<HTMLDivElement, IconProps>((props, ref) => {
  const state = useIcon(props, ref);

  return renderIcon(state);
});
