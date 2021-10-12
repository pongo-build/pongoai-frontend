import * as React from 'react';
import { getNativeElementProps, resolveShorthand } from '@fluentui/react-utilities';
// import { useTextFieldState } from './useTextFieldState';
import type { TextFieldProps, TextFieldSlots, TextFieldState } from './TextField.types';

export const textFieldShorthandProps: (keyof TextFieldSlots)[] = ['root', 'input'];

export const useTextField = (props: TextFieldProps, ref: React.Ref<HTMLElement>): TextFieldState => {
  const {
    defaultValue = '',
    value,
    autocomplete,
    disabled = false,
    error = false,
    appearance = 'standard',
    input,
    onChange,
  } = props;

  const state: TextFieldState = {
    defaultValue,
    value,
    autocomplete,
    disabled,
    error,
    appearance,
    onChange,
    root: getNativeElementProps('div', {
      ref,
      ...props,
    }),
    components: {
      root: 'div',
      input: 'input',
    },
    input: resolveShorthand(input, { required: true }),
  };

  // useTextFieldState(state); test

  return state;
};
