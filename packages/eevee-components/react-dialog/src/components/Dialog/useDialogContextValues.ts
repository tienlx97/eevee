import type { DialogContextValue, DialogSurfaceContextValue } from '../../contexts/index';
import type { DialogContextValues, DialogState } from './Dialog.types';

export function useDialogContextValues(state: DialogState): DialogContextValues {
  const { modalType, open, triggerRef, contentRef, dialogBodyID, dialogTitleID, requestOpenChange } = state;

  /**
   * This context is created with "@eevee/react-context-selector",
   * there is no sense to memoize it
   */
  const dialog: DialogContextValue = {
    open,
    modalType,
    triggerRef,
    contentRef,
    dialogBodyID,
    dialogTitleID,
    requestOpenChange,
  };

  const dialogSurface: DialogSurfaceContextValue = false;

  return { dialog, dialogSurface };
}
