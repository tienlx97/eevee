import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import { breakPoints } from '@eevee/react-theme';

import { MAX_PAGE_WIDTH } from '@constants/index';

import { PageLayoutState } from './Page.types';

const pageClassname = {
  root: 'eve-PageLayout',
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

export const usePageLayoutStyles = (state: PageLayoutState): PageLayoutState => {
  const rootStyles = useRootStyles();
  const mediaQueryStyles = useMediaQueryStyles();

  state.root.className = mergeClasses(pageClassname.root, rootStyles.root, mediaQueryStyles.query);

  return state;
};
