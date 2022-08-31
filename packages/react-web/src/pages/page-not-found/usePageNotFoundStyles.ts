import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import type { PageNotFoundSlots, PageNotFoundState } from './PageNotFound.types';
import type { SlotClassNames } from '@eevee/react-utilities';
import { breakPoints } from '@eevee/react-theme';

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
    width: '100%',

    [`@media ${breakPoints.lgAndLarger}`]: {
      ...shorthands.padding(0, '45px'),
    },

    [`@media ${breakPoints.lg}`]: {
      ...shorthands.padding(0, '45px'),
    },

    [`@media ${breakPoints.md}`]: {
      ...shorthands.padding(0, '45px'),
    },

    [`@media ${breakPoints.sm}`]: {
      ...shorthands.padding(0, '24px'),
    },

    [`@media ${breakPoints.xs}`]: {
      ...shorthands.padding(0, '24px'),
    },
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
