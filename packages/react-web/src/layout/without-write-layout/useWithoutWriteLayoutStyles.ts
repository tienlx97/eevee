import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import type { WithoutWriteLayoutSlots, WithoutWriteLayoutState } from './WithoutWriteLayout.types';
import type { SlotClassNames } from '@eevee/react-utilities';
import { NAV_HEIGHT } from '@constants/css';
import { breakPoints } from '@eevee/react-theme';

export const ClassName = 'eve-WithoutWriteLayout';
export const pageClassname = {
  root: 'eve-WithoutWriteLayout',
  // TODO: add class names for all slots on WithoutWriteLayoutSlots.
  // Should be of the form `<slotName>: 'eve-WithoutWriteLayout__<slotName>`
  commonMainLayout: 'eve-WithoutWriteLayout__commonMainLayout',
  centerClassName: 'eve-WithoutWriteLayout__centerClassName',
  displayCenter: 'eve-WithoutWriteLayout__displayCenter',
  fixContent: 'eve-WithoutWriteLayout__fixContent',
};

/**
 * Styles for the root slot
 */
const useStyles = makeStyles({
  root: {
    // TODO Add default styles for the root element
    display: 'flex',
    width: '100%',
    height: '100%',
  },

  // TODO add additional classes for different states and/or slots
});

const useCommonMainLayout = makeStyles({
  root: {
    display: 'block',
    minWidth: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 'auto',

    height: '100vh',

    [`@media ${breakPoints.lgAndLarger}`]: {
      height: '100vh',
    },

    [`@media ${breakPoints.lg}`]: {
      height: 'calc(100vh - 112px)',
    },

    [`@media ${breakPoints.md}`]: {
      height: 'calc(100vh - 112px)',
    },

    [`@media ${breakPoints.sm}`]: {
      height: 'calc(100vh - 112px)',
    },

    [`@media ${breakPoints.xs}`]: {
      height: 'calc(100vh - 112px)',
    },
  },

  query: {
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
});

const useMainLayoutStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100%',
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

  fixContent: {
    // TODO Add default styles for the root element
    width: '100%',
    minWidth: 0,
    height: 'inherit',
    // height: 'fit-content',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },

  displayCenter: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    // position: 'relative'
  },
});

/**
 * Apply styling to the WithoutWriteLayout slots based on the state
 */
export const useWithoutWriteLayoutStyles = (state: WithoutWriteLayoutState): WithoutWriteLayoutState => {
  const styles = useStyles();

  const commonMainLayoutStyles = useCommonMainLayout();
  const mainLayoutStyles = useMainLayoutStyles();

  state.root.className = mergeClasses(ClassName, styles.root, state.root.className);

  // TODO Add class names to slots, for example:
  // state.mySlot.className = mergeClasses(styles.mySlot, state.mySlot.className);

  state.commonMainLayout = mergeClasses(
    pageClassname.commonMainLayout,
    commonMainLayoutStyles.root,
    commonMainLayoutStyles.query,
  );

  state.centerClassName = mergeClasses(pageClassname.centerClassName, mainLayoutStyles.root);

  // TODO Add class names to slots, for example:
  // state.mySlot.className = mergeClasses(styles.mySlot, state.mySlot.className);

  state.fixContentClassName = mergeClasses(
    pageClassname.fixContent,
    mainLayoutStyles.fixContent,
    mainLayoutStyles.contentQuery,
  );
  state.displayCenterClassName = mergeClasses(pageClassname.displayCenter, mainLayoutStyles.displayCenter);

  return state;
};
