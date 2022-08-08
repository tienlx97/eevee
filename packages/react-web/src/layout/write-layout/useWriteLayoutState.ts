import * as React from 'react';
import type { WriteLayoutState } from './WriteLayout.types';

export const useWriteLayoutState = (state: WriteLayoutState): WriteLayoutState => {
  state.root.role = 'main';

  return state;
};
