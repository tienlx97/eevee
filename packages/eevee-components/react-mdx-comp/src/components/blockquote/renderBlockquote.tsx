import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import { BlockquoteSlots, BlockquoteState } from './Blockquote.types';

export const renderBlockquote = (state: BlockquoteState) => {
  const { slots, slotProps } = getSlots<BlockquoteSlots>(state);

  return <slots.root {...slotProps.root}>{slotProps.root.children}</slots.root>;
};
