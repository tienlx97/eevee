import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import type { PageNotFoundState, PageNotFoundSlots } from './PageNotFound.types';
import { TextLink } from '@eevee/react-link';
import { H1, Paragraph, InlineCode } from '@eevee/react-mdx-comp';

/**
 * Render the final JSX of PageNotFound
 */
export const renderPageNotFound = (state: PageNotFoundState) => {
  const { slots, slotProps } = getSlots<PageNotFoundSlots>(state);
  const { url } = state;

  // TODO Add additional slots in the appropriate place
  return (
    <slots.root {...slotProps.root}>
      <H1>Page not found</H1>
      {url && url !== '' && (
        <Paragraph>
          Sorry, the page <InlineCode>{url}</InlineCode> could not be found.
        </Paragraph>
      )}

      <Paragraph>
        <TextLink href="/home">Go back to the home page</TextLink>
      </Paragraph>
    </slots.root>
  );
};
