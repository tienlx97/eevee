import { makeStyles, mergeClasses } from '@griffel/react';
import type { AuthorMoreSlots, AuthorMoreState } from './AuthorMore.types';
import type { SlotClassNames } from '@eevee/react-utilities';

const ClassName = 'eve-AuthorMore';
const ClassNames: SlotClassNames<AuthorMoreSlots> = {
  root: 'eve-AuthorMore',
  // TODO: add class names for all slots on AuthorMoreSlots.
  // Should be of the form `<slotName>: 'eve-AuthorMore__<slotName>`
  dot: 'eve-AuthorMore__dot',
};

/**
 * Styles for the root slot
 */
const useStyles = makeStyles({
  flexCenter: {
    flexWrap: 'wrap',
    alignItems: 'center',
    display: 'flex',
  },

  // TODO add additional classes for different states and/or slots
});

/**
 * Apply styling to the AuthorMore slots based on the state
 */
export const useAuthorMoreStyles = (state: AuthorMoreState): AuthorMoreState => {
  const styles = useStyles();
  state.root.className = mergeClasses(ClassName, state.root.className);

  // TODO Add class names to slots, for example:
  // state.mySlot.className = mergeClasses(styles.mySlot, state.mySlot.className);
  state.dot.className = mergeClasses(ClassNames.dot, state.dot.className);
  state.flexCenterClassName = styles.flexCenter;

  return state;
};
