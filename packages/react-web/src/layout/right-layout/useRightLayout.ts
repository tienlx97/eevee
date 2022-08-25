import * as React from 'react';
import { RightLayoutProps, RightLayoutState } from './RightLayout.types';
import { useRightLayoutState } from './useRightLayoutState';

export const useRightLayout = (props: RightLayoutProps, ref: React.Ref<HTMLDivElement>): RightLayoutState => {
  const state: RightLayoutState = {
    components: {
      root: 'div',
    },
    styles: [],
    root: {
      ref,
      ...props,
    },
  };

  useRightLayoutState(state);

  return state;
};
