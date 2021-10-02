import * as React from 'react';
import { renderIcon, useIcon } from '../components/Icon';
import type { IconProps } from '../Icon';
import { Theme } from '../../../react-theme/src/index';
import clsx from 'clsx';
import { ClassNameMap } from '@mui/styles';

export const createIcon = (
  defaultProps: IconProps,
  useStyles: (props?: Theme) => ClassNameMap<'root'>,
  displayName: string,
) => {
  const IconComponent = React.forwardRef<HTMLElement, IconProps>((props, ref) => {
    const mergedProps = { ...defaultProps, ...props };
    const styles = useStyles();
    const state = useIcon(mergedProps as IconProps, ref);

    state.root.className = clsx(state.root.className, styles.root, mergedProps.className);

    return renderIcon(state);
  });

  IconComponent.displayName = `${displayName}Icon`;

  return React.memo(IconComponent);
};
