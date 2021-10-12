import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import { textFieldShorthandProps } from './useTextField';
import type { TextFieldState, TextFieldSlots } from './TextField.types';

export const renderTextField = (state: TextFieldState) => {
  const { slots, slotProps } = getSlots<TextFieldSlots>(state, textFieldShorthandProps);

  return (
    <slots.root {...slotProps.root}>
      <slots.input {...slotProps.input} />
    </slots.root>
  );
};
