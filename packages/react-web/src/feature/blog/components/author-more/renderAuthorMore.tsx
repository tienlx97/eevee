import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import type { AuthorMoreState, AuthorMoreSlots } from './AuthorMore.types';
import { blog2Date } from '@utilities/toDate';

/**
 * Render the final JSX of AuthorMore
 */
export const renderAuthorMore = (state: AuthorMoreState) => {
  const { authorName, authorNickName, date, readTime, flexCenterClassName } = state;
  const { slots, slotProps } = getSlots<AuthorMoreSlots>(state);

  // TODO Add additional slots in the appropriate place
  return (
    <slots.root {...slotProps.root}>
      <div>{authorName}</div>
      <div className={flexCenterClassName}>
        <p>@{authorNickName}</p>
        <slots.dot {...slotProps.dot} />
        <p>{blog2Date(date)}</p>
        <slots.dot {...slotProps.dot} />
        <p>{readTime.text}</p>
      </div>
    </slots.root>
  );
};
