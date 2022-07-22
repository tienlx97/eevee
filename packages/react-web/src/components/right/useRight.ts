import * as React from 'react';
import { RightProps, RightState } from './Right.types';
import { useTocState } from './useRightState';

export const useRight = (props: RightProps, ref: React.Ref<HTMLDivElement>): RightState => {
  const state: RightState = {
    components: {
      root: 'div',
    },

    root: {
      ref,
      ...props,
    },
  };

  useTocState(state);

  return state;
};
