import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import { NavBar } from '@components/navbar/NavBar';
import { RightBar } from '@components/rightbar/RightBar';
import { MainLayout } from '@layout/index';

import { PageLayoutSlot, PageLayoutState } from './Page.types';

export const renderPageLayout = (state: PageLayoutState) => {
  const { hide, commonMainLayout } = state;
  const { slots, slotProps } = getSlots<PageLayoutSlot>(state);
  return (
    <slots.root {...slotProps.root}>
      <NavBar />
      {/* render all route */}
      <main className={commonMainLayout}>{slotProps.root.children}</main>
      {/* <MainLayout>{slotProps.root.children}</MainLayout> */}
      {!hide && <RightBar />}
    </slots.root>
  );
};
