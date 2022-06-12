import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import { UlSlots, UlState } from './Ul.types';

export const renderUl = (state: UlState) => {
  const { slots, slotProps } = getSlots<UlSlots>(state);

  return <slots.root {...slotProps.root}>{slotProps.root.children}</slots.root>;
};
