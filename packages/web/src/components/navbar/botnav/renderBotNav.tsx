import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import { BotNavSlots, BotNavState } from './BotNav.types';

/**
 * Render the final JSX of BotNav
 */
export const renderBotNav = (state: BotNavState) => {
  const { slots, slotProps } = getSlots<BotNavSlots>(state);

  return (
    <slots.root {...slotProps.root}>
      <slots.postition {...slotProps.postition}>
        <slots.content {...slotProps.content} />
      </slots.postition>
    </slots.root>
  );
};
