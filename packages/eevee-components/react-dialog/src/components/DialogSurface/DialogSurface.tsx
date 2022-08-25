import * as React from 'react';
import { useDialogSurface } from './useDialogSurface';
import { renderDialogSurface } from './renderDialogSurface';
import { useDialogSurfaceStyles } from './useDialogSurfaceStyles';
import type { DialogSurfaceProps } from './DialogSurface.types';
import type { ForwardRefComponent } from '@eevee/react-utilities';
import { useDialogSurfaceContextValues } from './useDialogSurfaceContextValues';

/**
 * DialogSurface component represents the visual part of a `Dialog` as a whole,
 * it contains everything that should be visible.
 */
export const DialogSurface: ForwardRefComponent<DialogSurfaceProps> = React.forwardRef((props, ref) => {
  const state = useDialogSurface(props, ref);
  const contextValues = useDialogSurfaceContextValues(state);

  useDialogSurfaceStyles(state);
  return renderDialogSurface(state, contextValues);
});

DialogSurface.displayName = 'DialogSurface';
