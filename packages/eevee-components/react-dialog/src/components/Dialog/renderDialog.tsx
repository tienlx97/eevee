import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import { Portal } from '@eevee/react-portal';
import { DialogProvider, DialogSurfaceProvider } from '../../contexts/index';
import type { DialogState, DialogSlots, DialogContextValues } from './Dialog.types';

/**
 * Render the final JSX of Dialog
 */
export const renderDialog = (state: DialogState, contextValues: DialogContextValues) => {
  const { content, trigger, open } = state;
  const { slots, slotProps } = getSlots<DialogSlots>(state);

  return (
    <DialogProvider value={contextValues.dialog}>
      <DialogSurfaceProvider value={contextValues.dialogSurface}>
        {trigger}
        {open && (
          <Portal>
            {slots.backdrop && <slots.backdrop {...slotProps.backdrop} />}
            {content}
          </Portal>
        )}
      </DialogSurfaceProvider>
    </DialogProvider>
  );
};
