import * as React from 'react';
import { Icon } from '../components/Icon';

export const createIcon = (path: JSX.Element, displayName: string) => {
  const IconComponent = React.forwardRef<SVGSVGElement, any>((props, ref) => (
    <Icon ref={ref} {...props}>
      {path}
    </Icon>
  ));
  Icon.displayName = `${displayName}Icon`;

  return React.memo(IconComponent);
};
