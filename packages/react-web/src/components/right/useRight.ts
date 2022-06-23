import * as React from 'react';
import { RightProps, RightState } from './Right.types';

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

  return state;
};
