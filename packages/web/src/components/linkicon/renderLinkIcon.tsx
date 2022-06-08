import * as React from 'react';
import { LinkIconState, LinkIconSlots } from './Link.types';
import { getSlots } from '@eevee/react-utilities';

export const renderLinkIcon = (state: LinkIconState) => {
  const { slots, slotProps } = getSlots<LinkIconSlots>(state);

  return (
    <slots.wrapper {...slotProps.wrapper}>
      <slots.root {...slotProps.root} />
    </slots.wrapper>
  );
};
