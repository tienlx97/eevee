import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import { OlSlots, OlState } from './Ol.types';

export const renderOl = (state: OlState) => {
  const { slots, slotProps } = getSlots<OlSlots>(state);

  return <slots.root {...slotProps.root}>{slotProps.root.children}</slots.root>;
};
