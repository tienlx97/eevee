import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import type { BlogPageState } from './BlogPage.types';
import { breakPoints } from '@eevee/react-theme';
import { NAV_HEIGHT } from '@constants/index';

export const ClassName = 'eve-BlogPage';
export const ClassNames = {
  root: 'eve-Blog',
  middleLayout: 'eve-Blog__middleLayout',
  // TODO: add class names for all slots on BlogSlots.
  // Should be of the form `<slotName>: 'eve-Blog__<slotName>`
  displayCenter: 'eve-BlogPage__displayCenter',
  reactionClassName: 'eve-BlogPage__reaction',
};

/**
 * Styles for the root slot
 */
const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },

  // TODO add additional classes for different states and/or slots
});

const bottomHeight = `calc(${NAV_HEIGHT + 10}px + env(safe-area-inset-bottom))`;

const useReactionStyles = makeStyles({
  root: {
    position: 'fixed',
    alignSelf: 'center',
    justifySelf: 'center',

    [`@media ${breakPoints.lgAndLarger}`]: {
      bottom: '16px',
    },

    [`@media ${breakPoints.lg}`]: {
      bottom: bottomHeight,
    },

    [`@media ${breakPoints.md}`]: {
      bottom: bottomHeight,
    },

    [`@media ${breakPoints.sm}`]: {
      bottom: bottomHeight,
    },

    [`@media ${breakPoints.xs}`]: {
      bottom: bottomHeight,
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

  state.reactionClassName = mergeClasses(ClassNames.reactionClassName, reactionStyles.root);
  return state;
};
