import type { DotState } from './Dot.types';

export const useDotState = (state: DotState): DotState => {
  state.text.children = '·';
  return state;
};
