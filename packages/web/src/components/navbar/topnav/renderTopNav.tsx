import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import { TopNavSlots, TopNavState } from './TopNav.types';

/**
 * Render the final JSX of SideNav
 */
export const renderTopNav = (state: TopNavState) => {
  const { slots, slotProps } = getSlots<TopNavSlots>(state);

  return (
    <slots.root {...slotProps.root}>
      <slots.content {...slotProps.content} />
    </slots.root>
  );
};
