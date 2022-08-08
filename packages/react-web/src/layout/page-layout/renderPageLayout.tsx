import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import { NavBar } from '@components/navbar/NavBar';

import { PageLayoutSlot, PageLayoutState } from './Page.types';
export const renderPageLayout = (state: PageLayoutState) => {
  const { slots, slotProps } = getSlots<PageLayoutSlot>(state);
  return (
    <slots.root {...slotProps.root}>
      <NavBar />
      {slotProps.root.children}
    </slots.root>
  );
};
