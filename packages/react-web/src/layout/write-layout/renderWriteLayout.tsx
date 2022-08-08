import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import type { WriteLayoutState, WriteLayoutSlots } from './WriteLayout.types';
/**
 * Render the final JSX of WriteLayout
 */
export const renderWriteLayout = (state: WriteLayoutState) => {
  const { slots, slotProps } = getSlots<WriteLayoutSlots>(state);

  // TODO Add additional slots in the appropriate place
  return <slots.root {...slotProps.root} />;
};
