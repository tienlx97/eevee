import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import { ContentHeadingSlots, ContentHeadingState } from './ContentHeading.types';
import { LinkIcon } from './LinkIcon';

export const renderContentHeading = (state: ContentHeadingState) => {
  const { showIcon, iconClasses } = state;

  const { slots, slotProps } = getSlots<ContentHeadingSlots>(state);

  return (
    <slots.root {...slotProps.root}>
      <slots.heading {...slotProps.heading}>
        <slots.anchor {...slotProps.anchor}>
          <LinkIcon className={iconClasses} size={20} style={{ opacity: showIcon ? 1 : 0 }} />
        </slots.anchor>
        {slotProps.root.children}
      </slots.heading>
    </slots.root>
  );
};
