import * as React from 'react';
import { getNativeElementProps, resolveShorthand, useId } from '@fluentui/react-utilities';
import { useRatingState } from './useRatingState';
import type { RatingProps, RatingSlots, RatingState } from './Rating.types';

export const ratingShorthandProps: (keyof RatingSlots)[] = ['root', 'star', 'input'];

export const useRating = (props: RatingProps, ref: React.Ref<HTMLElement>): RatingState => {
  const {
    // Props
    value,
    defaultValue = 0,
    max = 5,
    disabled = false,
    step = 1,
    onChange,

    // Slots
    star,
    input,
  } = props;

  const state: RatingState = {
    value,
    defaultValue,
    max,
    disabled,
    step,
    onChange,
    components: {
      root: 'span',
      star: 'span',
      input: 'input',
    },
    root: getNativeElementProps('span', {
      ref,
      ...props,
      id: useId('rating-', props.id),
    }),
    star: resolveShorthand(star, { required: true }),
    input: resolveShorthand(input, {
      required: true,
      defaultProps: {
        type: 'range',
      },
    }),
  };

  useRatingState(state);

  return state;
};
