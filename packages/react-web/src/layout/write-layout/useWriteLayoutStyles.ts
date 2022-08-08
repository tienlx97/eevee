import { makeStyles, mergeClasses } from '@griffel/react';
import type { WriteLayoutSlots, WriteLayoutState } from './WriteLayout.types';
import type { SlotClassNames } from '@eevee/react-utilities';
import { breakPoints } from '@eevee/react-theme';
import { NAV_HEIGHT } from '@constants/css';

const ClassName = 'eve-WriteLayout';
const ClassNames: SlotClassNames<WriteLayoutSlots> = {
  root: 'eve-WriteLayout',
  // TODO: add class names for all slots on WriteLayoutSlots.
  // Should be of the form `<slotName>: 'eve-WriteLayout__<slotName>`
};

/**
 * Styles for the root slot
 */
const useStyles = makeStyles({
  root: {
    // TODO Add default styles for the root element
    display: 'flex',
    width: '100%',
    height: '100vh',

    [`@media ${breakPoints.lgAndLarger}`]: {
      height: '100vh',
    },

    [`@media ${breakPoints.lg}`]: {
      height: 'calc(100vh - 112px)',
    },

    [`@media ${breakPoints.md}`]: {
      height: 'calc(100vh - 112px)',
    },

    [`@media ${breakPoints.sm}`]: {
      height: 'calc(100vh - 112px)',
    },

    [`@media ${breakPoints.xs}`]: {
      height: 'calc(100vh - 112px)',
    },
  },

  // TODO add additional classes for different states and/or slots
});

/**
 * Apply styling to the WriteLayout slots based on the state
 */
export const useWriteLayoutStyles = (state: WriteLayoutState): WriteLayoutState => {
  const styles = useStyles();
  state.root.className = mergeClasses(ClassName, styles.root, state.root.className);

  // TODO Add class names to slots, for example:
  // state.mySlot.className = mergeClasses(styles.mySlot, state.mySlot.className);

  return state;
};
