import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import { ratingShorthandProps } from './useRating';
import type { RatingState, RatingSlots } from './Rating.types';

export const renderRating = (state: RatingState) => {
  const { max } = state;
  const { slots, slotProps } = getSlots<RatingSlots>(state, ratingShorthandProps);

  const renderStars = () => {
    const elements = [];
    for (let i = 0; i < max!; i++) {
      elements.push(<slots.star {...slotProps.star} />);
    }
    return elements;
  };

  return (
    <slots.root {...slotProps.root}>
      {renderStars()}
      {/* @ts-ignore */}
      <slots.input {...slotProps.input} />
    </slots.root>
  );
};
