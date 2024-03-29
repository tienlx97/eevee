import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import type { DialogBodyState, DialogBodySlots } from './DialogBody.types';

/**
 * Render the final JSX of DialogBody
 */
export const renderDialogBody = (state: DialogBodyState) => {
  const { slots, slotProps } = getSlots<DialogBodySlots>(state);

  // TODO Add additional slots in the appropriate place
  return <slots.root {...slotProps.root} />;
};
