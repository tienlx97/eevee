import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import { breakPoints } from '@eevee/react-theme';

import { MAX_PAGE_WIDTH, NAV_HEIGHT } from '@constants/index';

import { PageLayoutState } from './Page.types';

const pageClassname = {
  root: 'eve-PageLayout',
  commonMainLayout: 'eve-PageLayout__commonMainLayout',
  centerClassName: 'eve-PageLayout__centerClassName',
  displayCenter: 'eve-PageLayout__displayCenter',
  fixContent: 'eve-PageLayout__fixContent',
};

const useMediaQueryStyles = makeStyles({
  query: {
    [`@media ${breakPoints.lgAndLarger}`]: {
      flexDirection: 'row',
    },

    [`@media ${breakPoints.lg}`]: {
      flexDirection: 'column',
    },

    [`@media ${breakPoints.md}`]: {
      flexDirection: 'column',
    },

    [`@media ${breakPoints.sm}`]: {
      flexDirection: 'column',
    },

    [`@media ${breakPoints.xs}`]: {
      flexDirection: 'column',
    },
  },
});

const useRootStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: `${MAX_PAGE_WIDTH}`,
    ...shorthands.margin('auto'),
  },
});

const useCommonMainLayout = makeStyles({
  root: {
    display: 'block',
    minWidth: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 'auto',
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
    height: 'fit-content',
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

export const usePageLayoutStyles = (state: PageLayoutState): PageLayoutState => {
  const rootStyles = useRootStyles();
  const mediaQueryStyles = useMediaQueryStyles();
  const commonMainLayoutStyles = useCommonMainLayout();
  const mainLayoutStyles = useMainLayoutStyles();

  state.root.className = mergeClasses(pageClassname.root, rootStyles.root, mediaQueryStyles.query);

  state.commonMainLayout = mergeClasses(
    pageClassname.commonMainLayout,
    commonMainLayoutStyles.root,
    commonMainLayoutStyles.query,
  );

  state.centerClassName = mergeClasses(pageClassname.centerClassName, mainLayoutStyles.root);

  // TODO Add class names to slots, for example:
  // state.mySlot.className = mergeClasses(styles.mySlot, state.mySlot.className);

  // eslint-disable-next-line @eevee/max-len
  state.fixContentClassName = mergeClasses(
    pageClassname.fixContent,
    mainLayoutStyles.fixContent,
    mainLayoutStyles.contentQuery,
  );
  state.displayCenterClassName = mergeClasses(pageClassname.displayCenter, mainLayoutStyles.displayCenter);

  return state;
};
