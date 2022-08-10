import { makeStyles, mergeClasses } from '@griffel/react';
import type { BlurSystemSlots, BlurSystemState } from './BlurSystem.types';
import type { SlotClassNames } from '@eevee/react-utilities';

const ClassName = 'eve-BlurSystem';
const ClassNames: SlotClassNames<BlurSystemSlots> = {
  root: 'eve-BlurSystem',
  // TODO: add class names for all slots on BlurSystemSlots.
  // Should be of the form `<slotName>: 'eve-BlurSystem__<slotName>`
};

/**
 * Styles for the root slot
 */
const useStyles = makeStyles({
  root: {
    // TODO Add default styles for the root element
    width: '100%',
    position: 'fixed',
    height: '100%',
    cursor: 'pointer',
    opacity: 0,
    top: '0px',
    left: '0px',
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
    zIndex: 510,
    //
    transitionProperty: 'opacity',
    transitionDuration: '0.6s',
    transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
    transitionDelay: '0s',
  },

  // TODO add additional classes for different states and/or slots
});

/**
 * Apply styling to the BlurSystem slots based on the state
 */
export const useBlurSystemStyles = (state: BlurSystemState): BlurSystemState => {
  const styles = useStyles();
  state.root.className = mergeClasses(ClassName, styles.root, state.root.className);

  // TODO Add class names to slots, for example:
  // state.mySlot.className = mergeClasses(styles.mySlot, state.mySlot.className);

  return state;
};
