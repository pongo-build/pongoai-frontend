import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import { iconShorthandProps } from './useIcon';
import type { IconState, IconSlots } from './Icon.types';

export const renderIcon = (state: IconState) => {
  const { slots, slotProps } = getSlots<IconSlots>(state, iconShorthandProps);

  return <slots.root {...slotProps.root}>{state.root.children}</slots.root>;
};
