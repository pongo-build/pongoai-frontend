import type { ComponentProps, ComponentState, IntrinsicShorthandProps } from '@fluentui/react-utilities';

export type IconSlots = {
  /**
   * The root of the Icon.
   */
  root: IntrinsicShorthandProps<'svg'>;
};

export type IconCommons = {};

export type IconProps = ComponentProps<IconSlots> & IconCommons;

export type IconState = ComponentState<IconSlots> & IconCommons;
