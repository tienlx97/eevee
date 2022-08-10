import * as React from 'react';
import { RightBarProps, RightBarState } from './RightBar.types';
import { useRightBarState } from './useRightBarState';

export const useRightBar = (props: RightBarProps, ref: React.Ref<HTMLDivElement>): RightBarState => {
  const state: RightBarState = {
    components: {
      root: 'div',
    },
    styles: [],
    root: {
      ref,
      ...props,
    },
  };

  useRightBarState(state);

  return state;
};
