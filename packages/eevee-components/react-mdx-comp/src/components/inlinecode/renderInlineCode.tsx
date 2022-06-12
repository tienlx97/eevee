import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import { InlineCodeSlots, InlineCodeState } from './InlineCode.types';

export const renderInlineCode = (state: InlineCodeState) => {
  const { slots, slotProps } = getSlots<InlineCodeSlots>(state);

  return <slots.root {...slotProps.root}>{slotProps.root.children}</slots.root>;
};
