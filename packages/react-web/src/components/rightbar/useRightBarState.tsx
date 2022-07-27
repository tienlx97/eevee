import { useBlogParam } from '../../feature/blog/index';
import type { RightBarState } from './RightBar.types';

export const useRightBarState = (state: RightBarState): RightBarState => {
  state.slug = useBlogParam();
  return state;
};
