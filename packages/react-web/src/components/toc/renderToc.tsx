import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import type { TocState, TocSlots } from './Toc.types';

import { Heading } from '@eevee/react-mdx-comp';
import { Link } from 'react-router-dom';
import { getStylesForDepth } from './utils';

/**
 * Render the final JSX of Toc
 */
export const renderToc = (state: TocState) => {
  const { tocClasses, contentLinkHeadingClasses, activeHeadingId, headingsWithIds } = state;
  const { slots, slotProps } = getSlots<TocSlots>(state);

  // TODO Add additional slots in the appropriate place
  return (
    <slots.root {...slotProps.root}>
      <Heading as="h2" type="section-title" className={tocClasses}>
        Table of Contents
      </Heading>
      <Link
        //
        to="#introduction"
        className={contentLinkHeadingClasses}
        style={getStylesForDepth(1, !activeHeadingId)}
      />
      {headingsWithIds &&
        headingsWithIds.map((heading, index) => (
          <Link
            key={index}
            //
            to={heading.url}
            className={contentLinkHeadingClasses}
            style={getStylesForDepth(heading.depth, activeHeadingId === heading.url)}
          >
            {heading.value}
          </Link>
        ))}
    </slots.root>
  );
};
