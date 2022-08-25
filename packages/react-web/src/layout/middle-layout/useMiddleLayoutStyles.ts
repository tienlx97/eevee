import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import type { MiddleLayoutSlots, MiddleLayoutState } from './MiddleLayout.types';
import type { SlotClassNames } from '@eevee/react-utilities';
import { breakPoints } from '@eevee/react-theme';
import { NAV_HEIGHT } from '@constants/css';

const ClassName = 'eve-MiddleLayout';
const ClassNames: SlotClassNames<MiddleLayoutSlots> = {
  root: 'eve-MiddleLayout',
};

/**
 * Styles for the root slot
 */
const useStyles = makeStyles({
  root: {
    // TODO Add default styles for the root element
    display: 'block',
    minWidth: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 'auto',

    // height: '100vh',

    [`@media ${breakPoints.lgAndLarger}`]: {
      marginBottom: 0,
    },

    [`@media ${breakPoints.lg}`]: {
      marginBottom: `${NAV_HEIGHT}px`,
    },

    [`@media ${breakPoints.md}`]: {
      marginBottom: `${NAV_HEIGHT}px`,
    },

    [`@media ${breakPoints.sm}`]: {
      marginBottom: `${NAV_HEIGHT}px`,
    },

    [`@media ${breakPoints.xs}`]: {
      marginBottom: `${NAV_HEIGHT}px`,
    },
  },

  // TODO add additional classes for different states and/or slots
});

const useAnotherStyles = makeStyles({
  'middle-layout-1': {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100%',
  },
  'middle-layout-2': {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  'middle-layout-3': {
    width: '100%',
    minWidth: 0,
    height: 'inherit',
    // height: 'fit-content',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',

    // content query
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
});

/**
 * Apply styling to the WriteLayout slots based on the state
 */
export const useMiddleLayoutStyles = (state: MiddleLayoutState): MiddleLayoutState => {
  const styles = useStyles();
  const anotherStyles = useAnotherStyles();
  state.root.className = mergeClasses(ClassName, styles.root, state.root.className);

  // TODO Add class names to slots, for example:
  // state.mySlot.className = mergeClasses(styles.mySlot, state.mySlot.className);
  Object.entries(anotherStyles).map(([key, value]) => state.styles.push(mergeClasses(`${ClassName}__${key}`, value)));

  return state;
};
