import * as React from 'react';
import type { MiddleLayoutState } from './MiddleLayout.types';

export const useMiddleLayoutState = (state: MiddleLayoutState): MiddleLayoutState => {
  state.root.role = 'main';

  return state;
};
