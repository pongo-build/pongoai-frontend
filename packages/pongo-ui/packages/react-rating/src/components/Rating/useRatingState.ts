import * as React from 'react';
import { clamp, useControllableState, useEventCallback, useMergedRefs } from '@fluentui/react-utilities';
import type { RatingState } from './Rating.types';

export const useRatingState = (state: RatingState) => {
  const { value, defaultValue, max = 5, step, onChange, disabled } = state;

  const inputRef = React.useRef<HTMLInputElement>(null);

  const [currentValue, setCurrentValue] = useControllableState({
    state: value && clamp(value, 0, max),
    defaultState: clamp(defaultValue!, 0, max),
    initialState: 0,
  });

  /**
   * Updates the controlled `currentValue` to the new `incomingValue` and clamps it.
   */
  const updateValue = useEventCallback((incomingValue: number, ev: React.ChangeEvent<HTMLInputElement>): void => {
    const clampedValue = clamp(incomingValue, 0, max);

    if (clampedValue !== 0 && clampedValue !== max) {
      ev.stopPropagation();
      if (ev.type === 'keydown') {
        ev.preventDefault();
      }
    }

    onChange?.(ev, { value: clampedValue });
    setCurrentValue(clampedValue);
  });

  const onInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    updateValue(Number(ev.target.value), ev);
  };

  state.input.ref = useMergedRefs(state.input.ref, inputRef);
  state.input.value = currentValue;
  state.input.min = 0;
  state.input.max = max;
  state.input.step = step;
  state.input.disabled = disabled;
  state.input.onChange = onInputChange;

  return state;
};
