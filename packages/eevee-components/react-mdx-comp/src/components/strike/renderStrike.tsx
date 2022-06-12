import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import { StrikeSlots, StrikeState } from './Strike.types';

export const renderStrike = (state: StrikeState) => {
  const { slots, slotProps } = getSlots<StrikeSlots>(state);

  return <slots.root {...slotProps.root}>{slotProps.root.children}</slots.root>;
};
