import * as React from 'react';
import { useRating } from './useRating';
import { renderRating } from './renderRating';
import { useRatingStyles } from './useRatingStyles';
import type { RatingProps } from './Rating.types';

export const Rating = React.forwardRef<HTMLDivElement, RatingProps>((props, ref) => {
  const state = useRating(props, ref);

  useRatingStyles(state);

  return renderRating(state);
});
Rating.displayName = 'Rating';
