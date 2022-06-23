import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import { RightSlots, RightState } from './Right.types';

/**
 * Render the final JSX of Right
 */
export const renderRight = (state: RightState) => {
  const { slots, slotProps } = getSlots<RightSlots>(state);

  return <slots.root {...slotProps.root} />;
};
