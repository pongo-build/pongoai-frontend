import type { ComponentProps, ComponentState, IntrinsicShorthandProps } from '@fluentui/react-utilities';

export type CheckboxSlots = {
  /**
   * The root of the Checkbox.
   */
  root: IntrinsicShorthandProps<'span'>;

  /**
   * Hidden input used to handle the Checkbox's functionality.
   */
  input: IntrinsicShorthandProps<'input'>;

  /**
   * The indicator for the checkbox.
   */
  indicator: IntrinsicShorthandProps<'div'>;
};

export type CheckboxCommons = {
  /**
   * The starting value for a uncontrolled Checkbox. If `true` then the Checkbox will be enabled.
   * Mutually exclusive with `checked` prop.
   *
   * @default false
   */
  defaultChecked?: boolean;

  /**
   * The current value for a controlled Checkbox. If `true` then the Checkbox will be enabled.
   * Mutually exclusive with `defaultChecked` prop.
   */
  checked?: boolean;

  /**
   * Whether the Checkbox should be disabled.
   *
   * @default false
   */
  disabled?: boolean;

  /**
   * Callback to be called when the `checked` value changes.
   */
  onChange?: (
    ev: React.FormEvent<HTMLInputElement>,
    data: {
      checked: boolean;
    },
  ) => void;
};

export interface CheckboxProps extends Omit<ComponentProps<CheckboxSlots>, 'onChange'>, CheckboxCommons {}

export type CheckboxState = ComponentState<CheckboxSlots> & CheckboxCommons;
