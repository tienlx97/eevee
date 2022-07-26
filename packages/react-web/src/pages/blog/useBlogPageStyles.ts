import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import type { SlotClassNames } from '@eevee/react-utilities';
import type { BlogPageSlots, BlogPageState } from './BlogPage.types';
import { breakPoints } from '@eevee/react-theme';

export const ClassName = 'eve-BlogPage';
export const ClassNames: SlotClassNames<BlogPageSlots> = {
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
    width: '100%',
    minWidth: 0,
    height: 'fit-content',
  },

  // TODO add additional classes for different states and/or slots

  contentQuery: {
    [`@media ${breakPoints.lgAndLarger}`]: {
      maxWidth: '800px',
      marginTop: 0,
      marginRight: '30px',
      marginLeft: '30px',
      marginBottom: 0,
      // ...shorthands.margin(0, 0, '50px', '32px'),
    },

    [`@media ${breakPoints.lg}`]: {
      maxWidth: '950px',
      marginTop: 0,
      marginRight: '30px',
      marginLeft: '30px',
      marginBottom: 0,
      // ...shorthands.margin(0, 0, '50px', '32px'),
    },

    [`@media ${breakPoints.md}`]: {
      maxWidth: '850px',
      marginTop: 0,
      marginRight: '30px',
      marginLeft: '30px',
      marginBottom: 0,
      // ...shorthands.margin(0, 0, '50px', '32px'),
    },

    [`@media ${breakPoints.sm}`]: {
      ...shorthands.margin(0, '15px'),
    },

    [`@media ${breakPoints.xs}`]: {
      ...shorthands.margin(0, '15px'),
    },
  },

  flexCenterClassName: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});

/**
 * Apply styling to the Blog slots based on the state
 */
export const useBlogPageStyles = (state: BlogPageState): BlogPageState => {
  const styles = useStyles();

  state.root.className = mergeClasses(ClassName, styles.root, styles.contentQuery, state.root.className);

  // TODO Add class names to slots, for example:
  // state.mySlot.className = mergeClasses(styles.mySlot, state.mySlot.className);

  state.flexCenterClassName = styles.flexCenterClassName;

  return state;
};
