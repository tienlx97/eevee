import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import type { AuthorMoreSlots, AuthorMoreState } from './AuthorMore.types';
import type { SlotClassNames } from '@eevee/react-utilities';
import { breakPoints } from '@eevee/react-theme';

const ClassName = 'eve-AuthorMore';
const ClassNames: SlotClassNames<AuthorMoreSlots> = {
  root: 'eve-AuthorMore',
  // TODO: add class names for all slots on AuthorMoreSlots.
  // Should be of the form `<slotName>: 'eve-AuthorMore__<slotName>`
  dot: 'eve-AuthorMore__dot',
  follow: 'eve-AuthorMore__dot',
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
  follow: {
    fontSize: '14px',
    color: '#fff',
    ...shorthands.borderColor('#1a8917'),
    backgroundColor: '#1a8917',
    ...shorthands.padding('0px', '8px'),
    marginLeft: '12px',

    [`@media ${breakPoints.lgAndLarger}`]: {
      display: 'none',
    },

    [`@media ${breakPoints.lg}`]: {
      display: 'inline-block',
    },

    [`@media ${breakPoints.md}`]: {
      display: 'inline-block',
    },

    [`@media ${breakPoints.sm}`]: {
      display: 'inline-block',
    },

    [`@media ${breakPoints.xs}`]: {
      display: 'inline-block',
    },
  },
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
  state.follow.className = mergeClasses(ClassNames.follow, styles.follow);

  return state;
};
