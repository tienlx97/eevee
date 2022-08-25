import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import type { DialogSurfaceState, DialogSurfaceSlots, DialogSurfaceContextValues } from './DialogSurface.types';
import { DialogSurfaceProvider } from '../../contexts/index';

/**
 * Render the final JSX of DialogSurface
 */
export const renderDialogSurface = (state: DialogSurfaceState, contextValues: DialogSurfaceContextValues) => {
  const { slots, slotProps } = getSlots<DialogSurfaceSlots>(state);

  return (
    <DialogSurfaceProvider value={contextValues.dialogSurface}>
      <slots.root {...slotProps.root} />
    </DialogSurfaceProvider>
  );
};
