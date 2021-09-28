import type { ComponentProps, ComponentState, IntrinsicShorthandProps } from '@fluentui/react-utilities';

export type RatingSlots = {
  /**
   * The root of the Rating.
   */
  root: IntrinsicShorthandProps<'span'>;

  /**
   * The intractable star icons on the Rating.
   */
  star: IntrinsicShorthandProps<'span'>;

  /**
   * The hidden input used along side the Rating's stars.
   */
  input: IntrinsicShorthandProps<'input'>;
};

export type RatingCommons = {
  /**
   * The starting value for an uncontrolled component.
   * Mutually exclusive with `value` prop.
   */
  defaultValue?: number;

  /**
   * The current value of the controlled component.
   * Mutually exclusive with `defaultValue` prop.
   */
  value?: number;

  /**
   * The max number of stars.
   * @default 5
   */
  max?: number;

  /**
   *  Whether to render the Rating as disabled.
   *
   * @default `false` (renders enabled)
   */
  disabled?: boolean;

  /**
   * Triggers a callback when the value has been changed.
   */
  onChange?: (ev: React.ChangeEvent<HTMLInputElement>, data: { value: number }) => void;

  /**
   * The number of steps that the Rating's `value` will increment upon change.
   *
   * @default 1
   */
  step?: number;
};

export type RatingProps = Omit<ComponentProps<RatingSlots>, 'onChange' | 'defaultValue'> & RatingCommons;

export type RatingState = ComponentState<RatingSlots> & RatingCommons;
