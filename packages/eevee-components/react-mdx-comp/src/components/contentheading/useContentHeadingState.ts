import { ContentHeadingState } from './ContentHeading.types';
import { slugify } from '@eevee/react-utilities';

export const useContentHeadingState = (state: ContentHeadingState): ContentHeadingState => {
  const anchorId = slugify(state.root.children as string);
  state.anchor.id = anchorId;
  state.anchor.href = `#${anchorId}`;

  return state;
};
