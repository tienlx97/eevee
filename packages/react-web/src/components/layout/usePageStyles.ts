import { PageState } from './Page.types';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import { breakPoints } from '@eevee/react-theme';

const pageClassname = {
  root: 'eve-Page',
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
    maxWidth: '1504px',
    ...shorthands.margin('auto'),
  },
});

export const usePageStyles = (state: PageState): PageState => {
  const rootStyles = useRootStyles();
  const mediaQueryStyles = useMediaQueryStyles();

  state.root.className = mergeClasses(
    //
    pageClassname.root,
    rootStyles.root,
    mediaQueryStyles.query,
  );

  return state;
};
