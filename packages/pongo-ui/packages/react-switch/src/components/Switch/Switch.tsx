import * as React from 'react';
import { useSwitchStyles } from './useSwitchStyles';
import { useSwitch, renderSwitch } from '@fluentui/react-switch';
import type { SwitchProps } from '@fluentui/react-switch';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 * The Switch allows users to toggle a value between an on and off state.
 */
export const Switch: ForwardRefComponent<SwitchProps> = React.forwardRef((props, ref) => {
  const state = useSwitch(props, ref);

  useSwitchStyles(state);

  return renderSwitch(state);
});
Switch.displayName = 'Switch';
