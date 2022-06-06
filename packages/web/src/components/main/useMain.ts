import * as React from 'react';
import { MainProps, MainState } from './Main.types';

export const useMain = (props: MainProps, ref: React.Ref<HTMLElement>): MainState => {
  const state: MainState = {
    components: {
      root: 'main',
    },

    root: {
      ref,
      ...props,
    },
  };

  return state;
};
