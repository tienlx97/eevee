import * as React from 'react';
import { useDialog } from './useDialog';
import { renderDialog } from './renderDialog';
import { useDialogStyles } from './useDialogStyles';
import type { DialogProps } from './Dialog.types';
import { useDialogContextValues } from './useDialogContextValues';

/**
 * The `Dialog` root level component serves as an interface for interaction with all possible behaviors exposed.
 * It provides context down the hierarchy to `children` compound components to allow functionality.
 * This component expects to receive as children either a `DialogSurface` or a `DialogTrigger`
 * and a `DialogSurface` (or some component that will eventually render one of those compound components)
 * in this specific order
 */
export const Dialog: React.FC<DialogProps> = React.memo(props => {
  const state = useDialog(props);
  const contextValues = useDialogContextValues(state);

  useDialogStyles(state);
  return renderDialog(state, contextValues);
});

Dialog.displayName = 'Dialog';
