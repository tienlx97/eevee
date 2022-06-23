import * as React from 'react';
import { ContentHeadingState } from './ContentHeading.types';
import { slugify } from '@eevee/react-utilities';

export const useContentHeadingState = (state: ContentHeadingState): ContentHeadingState => {
  const anchorId = slugify(state.root.children as string);

  React.useEffect(() => {
    const numOfAnchorsWithThisId = document.querySelectorAll(`#${anchorId}`).length;

    if (numOfAnchorsWithThisId > 1) {
      // eslint-disable-next-line no-console
      console.error(
        'Found multiple anchors on the page with this ID:',
        anchorId,
        '\n\n',
        'Please add an explicit unique "anchorId" to this Heading',
      );
    }
  }, [anchorId]);

  state.anchor.id = anchorId;
  state.anchor.href = `#${anchorId}`;

  return state;
};
