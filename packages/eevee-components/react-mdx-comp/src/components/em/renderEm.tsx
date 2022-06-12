import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import { EmSlots, EmState } from './Em.types';

export const renderEm = (state: EmState) => {
  const { slots, slotProps } = getSlots<EmSlots>(state);

  return <slots.root {...slotProps.root}>{slotProps.root.children}</slots.root>;
};
