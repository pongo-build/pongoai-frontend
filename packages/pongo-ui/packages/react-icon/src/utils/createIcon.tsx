import * as React from 'react';
import { renderIcon, useIcon } from '../components/Icon';
import type { IconProps } from '../Icon';

export const createIcon = (defaultProps: IconProps, displayName: string) => {
  const IconComponent = React.forwardRef<HTMLElement, IconProps>((props, ref) => {
    const mergedProps = { ...defaultProps, ...props };
    const state = useIcon(mergedProps as IconProps, ref);

    return renderIcon(state);
  });
  IconComponent.displayName = `${displayName}Icon`;

  return React.memo(IconComponent);
};
