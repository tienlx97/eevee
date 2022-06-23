import { makeStyles, mergeClasses } from '@griffel/react';
import type { PageNotFoundSlots, PageNotFoundState } from './PageNotFound.types';
import type { SlotClassNames } from '@eevee/react-utilities';

export const ClassName = 'eve-PageNotFound';
export const ClassNames: SlotClassNames<PageNotFoundSlots> = {
  root: 'eve-PageNotFound',
  // TODO: add class names for all slots on PageNotFoundSlots.
  // Should be of the form `<slotName>: 'eve-PageNotFound__<slotName>`
};

/**
 * Styles for the root slot
 */
const useStyles = makeStyles({
  root: {
    // TODO Add default styles for the root element
  },

  // TODO add additional classes for different states and/or slots
});

/**
 * Apply styling to the PageNotFound slots based on the state
 */
export const usePageNotFoundStyles = (state: PageNotFoundState): PageNotFoundState => {
  const styles = useStyles();
  state.root.className = mergeClasses(ClassName, styles.root, state.root.className);

  // TODO Add class names to slots, for example:
  // state.mySlot.className = mergeClasses(styles.mySlot, state.mySlot.className);

  return state;
};
