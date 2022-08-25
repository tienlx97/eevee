import * as React from 'react';
import { useDialogActions } from './useDialogActions';
import { renderDialogActions } from './renderDialogActions';
import { useDialogActionsStyles } from './useDialogActionsStyles';
import type { DialogActionsProps } from './DialogActions.types';
import type { ForwardRefComponent } from '@eevee/react-utilities';

/**
 * `DialogActions` is a container for the actions of the dialog.
 * Apart from styling, this component does not have other behavior.
 */
export const DialogActions: ForwardRefComponent<DialogActionsProps> = React.forwardRef((props, ref) => {
  const state = useDialogActions(props, ref);

  useDialogActionsStyles(state);
  return renderDialogActions(state);
});

DialogActions.displayName = 'DialogActions';
