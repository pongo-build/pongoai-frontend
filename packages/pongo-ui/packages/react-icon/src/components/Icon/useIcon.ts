import * as React from 'react';
import { getNativeElementProps, useId } from '@fluentui/react-utilities';
import type { IconProps, IconSlots, IconState } from './Icon.types';

export const iconShorthandProps: (keyof IconSlots)[] = ['root'];

export const useIcon = (props: IconProps, ref: React.Ref<HTMLElement>): IconState => {
  const {} = props;

  const state: IconState = {
    components: {
      root: 'svg',
    },
    root: getNativeElementProps('svg', {
      ref,
      ...props,
      id: useId('icon-', props.id),
    }),
  };

  return state;
};
