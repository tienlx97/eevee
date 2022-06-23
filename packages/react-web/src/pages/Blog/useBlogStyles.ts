import { makeStyles, mergeClasses } from '@griffel/react';
import type { BlogSlots, BlogState } from './Blog.types';
import type { SlotClassNames } from '@eevee/react-utilities';

export const ClassName = 'eve-Blog';
export const ClassNames: SlotClassNames<BlogSlots> = {
  root: 'eve-Blog',
  // TODO: add class names for all slots on BlogSlots.
  // Should be of the form `<slotName>: 'eve-Blog__<slotName>`
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
 * Apply styling to the Blog slots based on the state
 */
export const useBlogStyles = (state: BlogState): BlogState => {
  const styles = useStyles();
  state.root.className = mergeClasses(ClassName, styles.root, state.root.className);

  // TODO Add class names to slots, for example:
  // state.mySlot.className = mergeClasses(styles.mySlot, state.mySlot.className);

  return state;
};
