import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import { breakPoints } from '@eevee/react-theme';

import { MAX_PAGE_WIDTH, NAV_HEIGHT } from '@constants/index';

import { PageLayoutState } from './Page.types';

const pageClassname = {
  root: 'eve-PageLayout',
  commonMainLayout: 'eve-PageLayout__commonMainLayout',
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

export const usePageLayoutStyles = (state: PageLayoutState): PageLayoutState => {
  const rootStyles = useRootStyles();
  const mediaQueryStyles = useMediaQueryStyles();
  const commonMainLayoutStyles = useCommonMainLayout();

  state.root.className = mergeClasses(pageClassname.root, rootStyles.root, mediaQueryStyles.query);

  state.commonMainLayout = mergeClasses(
    pageClassname.commonMainLayout,
    commonMainLayoutStyles.root,
    commonMainLayoutStyles.query,
  );

  return state;
};
