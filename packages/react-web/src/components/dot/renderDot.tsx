import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import type { DotState, DotSlots } from './Dot.types';

/**
 * Render the final JSX of Dot
 */
export const renderDot = (state: DotState) => {
  const { slots, slotProps } = getSlots<DotSlots>(state);

  // TODO Add additional slots in the appropriate place
  return (
    <slots.root {...slotProps.root}>
      <slots.text {...slotProps.text} />
    </slots.root>
  );
};
