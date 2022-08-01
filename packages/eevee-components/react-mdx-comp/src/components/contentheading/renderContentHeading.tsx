import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import { ContentHeadingSlots, ContentHeadingState } from './ContentHeading.types';
import { LinkIcon } from './LinkIcon';

export const renderContentHeading = (state: ContentHeadingState) => {
  const { iconClasses } = state;

  const { slots, slotProps } = getSlots<ContentHeadingSlots>(state);

  return (
    <slots.root {...slotProps.root}>
      <slots.heading {...slotProps.heading}>
        {slotProps.root.children}
        <slots.anchor {...slotProps.anchor}>
          <LinkIcon className={iconClasses} size={20} />
        </slots.anchor>
      </slots.heading>
    </slots.root>
  );
};
