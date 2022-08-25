import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import { MenuPopoverSlots, MenuPopoverState } from './MenuPopover.types';
import { Portal } from '@eevee/react-portal';

/**
 * Render the final JSX of MenuPopover
 */
export const renderMenuPopover_unstable = (state: MenuPopoverState) => {
  const { slots, slotProps } = getSlots<MenuPopoverSlots>(state);

  if (state.inline) {
    return <slots.root {...slotProps.root} />;
  }

  return (
    <Portal>
      <slots.root {...slotProps.root} />
    </Portal>
  );
};
