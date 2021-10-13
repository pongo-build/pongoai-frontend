import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import { ratingShorthandProps } from './useRating';
import type { RatingState, RatingSlots } from './Rating.types';

export const renderRating = (state: RatingState) => {
  const { slots, slotProps } = getSlots<RatingSlots>(state, ratingShorthandProps);

  return (
    <slots.root {...slotProps.root}>
      <slots.starWrapper {...slotProps.starWrapper} />
      <slots.input {...slotProps.input} />
    </slots.root>
  );
};
