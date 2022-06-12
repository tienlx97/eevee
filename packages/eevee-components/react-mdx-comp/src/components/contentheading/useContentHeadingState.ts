import * as React from 'react';
import { ContentHeadingState } from './ContentHeading.types';

const slugify = (str = '') => {
  let slug = str
    .toLowerCase()
    .replace(/\s/g, '-')
    .replace(/[^a-zA-Z0-9-]/g, '');

  // If the value starts with a number, swap it out!
  // Doing this in a dumb way for now.
  if (slug.match(/^[\d]{1,2}/)) {
    slug = slug.replace(/^[\d]{1,2}/, 'digit');
  }

  return slug;
};

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
