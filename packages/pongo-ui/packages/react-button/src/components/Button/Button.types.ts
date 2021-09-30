import type { ComponentProps, ComponentState, IntrinsicShorthandProps } from '@fluentui/react-utilities';

export type ButtonSlots = {
  /**
   * The root of the Button.
   */
  root: IntrinsicShorthandProps<'button'>;
};

export type ButtonCommons = {
  /**
   * The appearance variant to use for the button.
   *
   * @default outline
   */
  appearance?: 'outline' | 'primary' | 'subtle' | 'transparent';

  /**
   * Whether the button should be disabled.
   *
   * @default false
   */
  disabled?: boolean;

  /**
   * The shape of the button.
   *
   * @default rounded
   */
  shape?: 'rounded' | 'circular' | 'square';
};

export type ButtonProps = ComponentProps<ButtonSlots> & ButtonCommons;

export type ButtonState = ComponentState<ButtonSlots> & ButtonCommons;
