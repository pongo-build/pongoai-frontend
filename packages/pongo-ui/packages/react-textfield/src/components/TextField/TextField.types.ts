import type { ComponentProps, ComponentState, IntrinsicShorthandProps } from '@fluentui/react-utilities';

export type TextFieldSlots = {
  /**
   * The root of the TextField.
   */
  root: IntrinsicShorthandProps<'div'>;

  /**
   * Hidden input used to handle the TextField's functionality.
   */
  input: IntrinsicShorthandProps<'input'>;
};

export type TextFieldCommons = {
  /**
   * The starting value for a uncontrolled TextField. If `true` then the TextField will be enabled.
   * Mutually exclusive with `value` prop.
   *
   * @default ''
   */
  defaultValue?: string;

  /**
   * The current value for a controlled TextField. If `true` then the TextField will be enabled.
   * Mutually exclusive with `defaultValue` prop.
   */
  value?: string;

  /**
   * The autocomplete hint type for the TextField.
   */
  autocomplete?: string;

  /**
   * Whether the TextField should be disabled.
   *
   * @default false
   */
  disabled?: boolean;

  /**
   * Whether the TextField should be in an error state.
   *
   * @default false
   */
  error?: boolean;

  /**
   * The text that appears in the TextField when no value is set.
   */
  placeholder?: string;

  /**
   * The appearance variant to use for the TextField.
   *
   * @default outline
   */
  appearance?: 'standard' | 'outlined' | 'filled';

  /**
   * Callback to be called when the value changes.
   */
  onChange?: (
    ev: React.FormEvent<HTMLInputElement>,
    data: {
      value: string;
    },
  ) => void;
};

export type TextFieldProps = Omit<ComponentProps<TextFieldSlots>, 'onChange' | 'defaultValue'> & TextFieldCommons;

export type TextFieldState = ComponentState<TextFieldSlots> & TextFieldCommons;
