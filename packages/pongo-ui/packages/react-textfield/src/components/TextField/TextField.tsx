import * as React from 'react';
import { useTextField } from './useTextField';
import { renderTextField } from './renderTextField';
// import { useTextFieldStyles } from './useTextFieldStyles';
import type { TextFieldProps } from './TextField.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 * The Text Field allows for users to write and edit text.
 */
export const TextField: ForwardRefComponent<TextFieldProps> = React.forwardRef((props, ref) => {
  const state = useTextField(props, ref);

  // useTextFieldStyles(state);

  return renderTextField(state);
});
TextField.displayName = 'TextField';
