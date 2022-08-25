import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import type { MenuItemSlots, MenuItemState } from './MenuItem.types';

/**
 * Function that renders the final JSX of the component
 */
export const renderMenuItem_unstable = (state: MenuItemState) => {
  const { slots, slotProps } = getSlots<MenuItemSlots>(state);

  return (
    <slots.root {...slotProps.root}>
      {slots.icon && <slots.icon {...slotProps.icon} />}
      {slots.content && <slots.content {...slotProps.content} />}
      {slots.secondaryContent && <slots.secondaryContent {...slotProps.secondaryContent} />}
    </slots.root>
  );
};
