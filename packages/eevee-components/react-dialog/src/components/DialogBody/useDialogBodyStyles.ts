import { makeStyles, mergeClasses } from '@griffel/react';
import type { DialogBodySlots, DialogBodyState } from './DialogBody.types';
import type { SlotClassNames } from '@eevee/react-utilities';
import { tokens } from '@eevee/react-theme';
import * as localShorthands from '../../utils/localShorthands';
import { BODY_GRID_AREA } from '../../contexts/constants';

export const dialogBodyClassNames: SlotClassNames<DialogBodySlots> = {
  root: 'eve-DialogBody',
};

/**
 * Styles for the root slot
 */
const useStyles = makeStyles({
  root: {
    width: '100%',
    height: 'fit-content',
    minHeight: '32px',
    boxSizing: 'border-box',
    ...localShorthands.gridArea(BODY_GRID_AREA),
    fontFamily: tokens.fontFamily,
    fontSize: tokens.fontSizeBase300,
    fontWeight: tokens.fontWeightRegular,
    lineHeight: tokens.lineHeightBase300,
  },
});

/**
 * Apply styling to the DialogBody slots based on the state
 */
export const useDialogBodyStyles = (state: DialogBodyState): DialogBodyState => {
  const styles = useStyles();
  state.root.className = mergeClasses(dialogBodyClassNames.root, styles.root, state.root.className);

  // TODO Add class names to slots, for example:
  // state.mySlot.className = mergeClasses(styles.mySlot, state.mySlot.className);

  return state;
};
