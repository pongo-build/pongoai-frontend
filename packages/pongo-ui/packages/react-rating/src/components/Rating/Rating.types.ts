import type { ComponentProps, ComponentState, IntrinsicShorthandProps } from '@fluentui/react-utilities';

export type RatingSlots = {
  /**
   * The root of the Rating.
   */
  root: IntrinsicShorthandProps<'div'>;
};

export interface RattingCommons {}

export interface RatingProps extends ComponentProps<RatingSlots>, RattingCommons {}

export interface RatingState extends ComponentState<RatingSlots>, RattingCommons {}
