import * as React from 'react';
import { getNativeElementProps } from '@fluentui/react-utilities';
import { useButtonState } from './useButtonState';
import type { ButtonProps, ButtonSlots, ButtonState } from './Button.types';

export const buttonShorthandProps: (keyof ButtonSlots)[] = ['root'];

export const useButton = (props: ButtonProps, ref: React.Ref<HTMLElement>): ButtonState => {
  const { as, appearance = 'outline', disabled = false, shape = 'rounded' } = props;

  const state: ButtonState = {
    appearance,
    disabled,
    shape,
    components: {
      root: 'button',
    },
    root: getNativeElementProps(as || 'button', {
      ref,
      required: true,
      type: 'button',
      ...props,
    }),
  };

  useButtonState(state);

  return state;
};
