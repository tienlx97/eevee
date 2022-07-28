import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import { NavBar } from '@components/navbar/NavBar';
import { RightBar } from '@components/rightbar/RightBar';

import { PageLayoutSlot, PageLayoutState } from './Page.types';

export const renderPageLayout = (state: PageLayoutState) => {
  const { hide, commonMainLayout, centerClassName, displayCenterClassName, fixContentClassName } = state;
  const { slots, slotProps } = getSlots<PageLayoutSlot>(state);
  return (
    <slots.root {...slotProps.root}>
      <NavBar />
      <main className={commonMainLayout}>
        <div className={centerClassName}>
          <div className={displayCenterClassName}>
            <div className={fixContentClassName}>{slotProps.root.children}</div>
          </div>
        </div>
      </main>
      {!hide && <RightBar />}
    </slots.root>
  );
};
