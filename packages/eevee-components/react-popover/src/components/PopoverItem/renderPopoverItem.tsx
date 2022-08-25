import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import type { PopoverItemSlots, PopoverItemState } from './PopoverItem.types';

/**
 * Function that renders the final JSX of the component
 */
export const renderPopoverItem = (state: PopoverItemState) => {
  const { slots, slotProps } = getSlots<PopoverItemSlots>(state);

  return <slots.root {...slotProps.root}>{slots.content && <slots.content {...slotProps.content} />}</slots.root>;
};
