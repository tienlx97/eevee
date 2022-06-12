import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import { ParagraphSlots, ParagraphState } from './Paragraph.types';

export const renderParagraph = (state: ParagraphState) => {
  const { slots, slotProps } = getSlots<ParagraphSlots>(state);

  return <slots.root {...slotProps.root}>{slotProps.root.children}</slots.root>;
};
