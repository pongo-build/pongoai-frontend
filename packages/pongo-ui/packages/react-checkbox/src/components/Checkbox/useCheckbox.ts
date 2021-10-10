import * as React from 'react';
import { getNativeElementProps, resolveShorthand, useId } from '@fluentui/react-utilities';
import { useCheckboxState } from './useCheckboxState';
import type { CheckboxProps, CheckboxSlots, CheckboxState } from './Checkbox.types';

export const checkboxShorthandProps: (keyof CheckboxSlots)[] = ['root', 'indicator', 'input'];

export const useCheckbox = (props: CheckboxProps, ref: React.Ref<HTMLElement>): CheckboxState => {
  const { indicator, input, defaultChecked, checked, disabled, onChange } = props;

  const state: CheckboxState = {
    defaultChecked,
    checked,
    disabled,
    onChange,
    root: getNativeElementProps('span', {
      ref,
      ...props,
      id: useId('checkbox-', props.id),
    }),
    components: {
      root: 'span',
      indicator: 'div',
      input: 'input',
    },
    indicator: resolveShorthand(indicator, { required: true }),
    input: resolveShorthand(input, {
      required: true,
      defaultProps: {
        type: 'checkbox',
      },
    }),
  };

  useCheckboxState(state);

  return state;
};
