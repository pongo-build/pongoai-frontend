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

  const renderStars = () => {
    const elements = [];
    for (let i = 1; i <= max; i++) {
      const isChecked = currentValue >= i;

      elements.push(
        <span>
          <svg
            viewBox="0 0 45 45"
            xmlns="http://www.w3.org/2000/svg"
            fill={isChecked ? '#FFC83D' : '#dbdde1'}
            stroke={isChecked ? 'black' : '#a1a2a5'}
          >
            <path d="M23.3653 2.12865L27.0248 13.3914C27.5482 15.0024 29.0494 16.093 30.7432 16.093H42.5856C43.4669 16.093 43.8334 17.2208 43.1204 17.7389L33.5396 24.6996C32.1693 25.6953 31.5959 27.46 32.1193 29.0709L35.7788 40.3337C36.0512 41.1719 35.0918 41.8689 34.3788 41.3509L24.7981 34.3901C23.4278 33.3945 21.5722 33.3945 20.2019 34.3901L10.6212 41.3509C9.90817 41.8689 8.94881 41.1719 9.22116 40.3337L12.8807 29.0709C13.4041 27.46 12.8307 25.6953 11.4603 24.6996L1.87965 17.7389C1.16663 17.2208 1.53308 16.093 2.41441 16.093H14.2568C15.9506 16.093 17.4518 15.0024 17.9752 13.3914L21.6347 2.12865C21.9071 1.29045 23.0929 1.29045 23.3653 2.12865Z" />
          </svg>
        </span>,
      );
    }
    return elements;
  };

  const onInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    updateValue(Number(ev.target.value), ev);
  };

  state.starWrapper.children = renderStars();

  state.input.ref = useMergedRefs(state.input.ref, inputRef);
  state.input.value = currentValue;
  state.input.min = 1;
  state.input.max = max;
  state.input.step = step;
  state.input.disabled = disabled;
  state.input.onChange = onInputChange;

  return state;
};
