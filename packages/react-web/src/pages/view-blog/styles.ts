import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import { breakPoints } from '@eevee/react-theme';
import { NAV_HEIGHT } from '@constants/index';

/**
 * Styles for the root slot
 */
export const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },

  // TODO add additional classes for different states and/or slots
});

const bottomHeight = `calc(${NAV_HEIGHT + 10}px + env(safe-area-inset-bottom))`;

export const useReactionStyles = makeStyles({
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
