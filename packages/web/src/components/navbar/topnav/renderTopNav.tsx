import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import { TopNavSlots, TopNavState } from './TopNav.types';

/**
 * Render the final JSX of TopNav
 */
export const renderTopNav = (state: TopNavState) => {
  const { slots, slotProps } = getSlots<TopNavSlots>(state);

  return (
    <slots.root {...slotProps.root}>
      <slots.content {...slotProps.content} />
      <slots.gap {...slotProps.gap} />
    </slots.root>
  );
};
