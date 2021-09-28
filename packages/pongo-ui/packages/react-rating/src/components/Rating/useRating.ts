import * as React from 'react';
import { getNativeElementProps } from '@fluentui/react-utilities';
import { useRatingState } from './useRatingState';
import type { RatingProps, RatingSlots, RatingState } from './Rating.types';

export const ratingShorthandProps: (keyof RatingSlots)[] = ['root'];

export const useRating = (props: RatingProps, ref: React.Ref<HTMLElement>): RatingState => {
  const state: RatingState = {
    root: getNativeElementProps('span', {
      ref,
      ...props,
    }),
    components: {
      root: 'div',
    },
  };

  useRatingState(state);

  return state;
};
