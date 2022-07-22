import { useBlogContext } from '../../contexts/BlogContext';
import type { RightState } from './Right.types';

export const useTocState = (state: RightState): RightState => {
  const { content } = useBlogContext();

  state.toc = content?.toc;

  return state;
};
