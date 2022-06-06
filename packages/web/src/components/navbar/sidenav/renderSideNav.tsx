import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import { SideNavSlots, SideNavState } from './SideNav.types';

/**
 * Render the final JSX of SideNav
 */
export const renderSideNav = (state: SideNavState) => {
  const { slots, slotProps } = getSlots<SideNavSlots>(state);

  return (
    <slots.root {...slotProps.root}>
      <slots.content {...slotProps.content} />
    </slots.root>
  );
};
