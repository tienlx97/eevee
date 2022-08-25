import type { SlotClassNames } from '@eevee/react-utilities';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import { useHasParentContext } from '@eevee/react-context-selector';
import { DialogContext } from '../../contexts/dialogContext';
import type { DialogSlots, DialogState } from './Dialog.types';

export const dialogClassNames: SlotClassNames<DialogSlots> = {
  backdrop: 'eve-Dialog__backdrop',
};
/**
 * Styles for the root slot
 */
const useStyles = makeStyles({
  backdrop: {
    position: 'fixed',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    ...shorthands.inset('0px'),
  },
  nestedDialogBackdrop: {
    backgroundColor: 'transparent',
  },
});

/**
 * Apply styling to the Dialog slots based on the state
 */
export const useDialogStyles = (state: DialogState): DialogState => {
  const styles = useStyles();
  const isNestedDialog = useHasParentContext(DialogContext);

  if (state.backdrop) {
    state.backdrop.className = mergeClasses(
      dialogClassNames.backdrop,
      styles.backdrop,
      isNestedDialog && styles.nestedDialogBackdrop,
      state.backdrop.className,
    );
  }

  return state;
};
