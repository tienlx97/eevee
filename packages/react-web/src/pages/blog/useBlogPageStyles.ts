import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import type { SlotClassNames } from '@eevee/react-utilities';
import type { BlogPageSlots, BlogPageState } from './BlogPage.types';
import { breakPoints } from '@eevee/react-theme';

export const ClassName = 'eve-BlogPage';
export const ClassNames = {
  root: 'eve-Blog',
  // TODO: add class names for all slots on BlogSlots.
  // Should be of the form `<slotName>: 'eve-Blog__<slotName>`
  displayCenter: 'eve-BlogPage__displayCenter',
};

/**
 * Styles for the root slot
 */
const useStyles = makeStyles({
  root: {},

  // TODO add additional classes for different states and/or slots
});

const useReactionStyles = makeStyles({
  root: {
    position: 'fixed',
    alignSelf: 'center',
    justifySelf: 'center',

    [`@media ${breakPoints.lgAndLarger}`]: {
      bottom: '16px',
    },

    [`@media ${breakPoints.lg}`]: {
      bottom: '69px',
    },

    [`@media ${breakPoints.md}`]: {
      bottom: '69px',
    },

    [`@media ${breakPoints.sm}`]: {
      bottom: '69px',
    },

    [`@media ${breakPoints.xs}`]: {
      bottom: '69px',
    },
  },
});

/**
 * Apply styling to the Blog slots based on the state
 */
export const useBlogPageStyles = (state: BlogPageState): BlogPageState => {
  const styles = useStyles();
  const reactionStyles = useReactionStyles();
  state.root.className = mergeClasses(ClassName, styles.root, state.root.className);

  // TODO Add class names to slots, for example:
  // state.mySlot.className = mergeClasses(styles.mySlot, state.mySlot.className);

  state.reactionClassName = reactionStyles.root;
  return state;
};
