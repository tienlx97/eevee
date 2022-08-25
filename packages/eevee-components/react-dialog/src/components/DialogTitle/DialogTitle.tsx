import * as React from 'react';
import { useDialogTitle } from './useDialogTitle';
import { renderDialogTitle } from './renderDialogTitle';
import { useDialogTitleStyles } from './useDialogTitleStyles';
import type { DialogTitleProps } from './DialogTitle.types';
import type { ForwardRefComponent } from '@eevee/react-utilities';

/**
 * The `DialogTitle` component will expect to have a dialog title/header
 * and will show the close (X icon) button if specified so.
 * Apart from styling and presenting `closeButton`, this component does not have other behavior.
 */
export const DialogTitle: ForwardRefComponent<DialogTitleProps> = React.forwardRef((props, ref) => {
  const state = useDialogTitle(props, ref);

  useDialogTitleStyles(state);
  return renderDialogTitle(state);
});

DialogTitle.displayName = 'DialogTitle';
