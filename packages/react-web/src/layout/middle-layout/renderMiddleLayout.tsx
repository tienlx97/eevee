import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import type { MiddleLayoutState, MiddleLayoutSlots } from './MiddleLayout.types';
/**
 * Render the final JSX of WriteLayout
 */
export const renderMiddleLayout = (state: MiddleLayoutState) => {
  const { styles } = state;
  const { slots, slotProps } = getSlots<MiddleLayoutSlots>(state);

  // TODO Add additional slots in the appropriate place
  return (
    <slots.root {...slotProps.root}>
      <div className={styles[0]}>
        <div className={styles[1]}>
          <div className={styles[2]}>
            {/*  */}
            {slotProps.root.children}
          </div>
        </div>
      </div>
    </slots.root>
  );
};
