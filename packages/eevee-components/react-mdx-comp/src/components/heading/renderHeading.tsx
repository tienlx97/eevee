import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import { HeadingSlots, HeadingState } from './Heading.types';

export const renderHeading = (state: HeadingState) => {
  const { slots, slotProps } = getSlots<HeadingSlots>(state);

  return <slots.root {...slotProps.root} />;
};
