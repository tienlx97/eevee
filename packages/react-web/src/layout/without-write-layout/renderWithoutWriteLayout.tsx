import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import type { WithoutWriteLayoutState, WithoutWriteLayoutSlots } from './WithoutWriteLayout.types';
import { RightBar } from '@components/rightbar/RightBar';

import { Outlet } from 'react-router-dom';

/**
 * Render the final JSX of WithoutWriteLayout
 */
export const renderWithoutWriteLayout = (state: WithoutWriteLayoutState) => {
  const { hide, commonMainLayout, centerClassName, displayCenterClassName, fixContentClassName } = state;
  const { slots, slotProps } = getSlots<WithoutWriteLayoutSlots>(state);
  // TODO Add additional slots in the appropriate place
  return (
    <slots.root {...slotProps.root}>
      <main className={commonMainLayout}>
        <div className={centerClassName}>
          <div className={displayCenterClassName}>
            <div className={fixContentClassName}>
              <Outlet />
            </div>
          </div>
        </div>
      </main>
      {!hide && <RightBar />}
    </slots.root>
  );
};
