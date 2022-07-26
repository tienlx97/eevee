import { SlotClassNames } from '@eevee/react-utilities';
import { breakPoints } from '@eevee/react-theme';
import { mergeClasses, makeStyles, shorthands } from '@griffel/react';
import { NAV_HEIGHT } from '@constants/index';

import { MainLayoutState, MainLayoutSlots } from './MainLayout.types';

export const mainClassNames: SlotClassNames<MainLayoutSlots> = {
  root: 'eve-Main',
  content: 'eve-Main__content',
};

const useMediaQueryStyles = makeStyles({
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
});

const useRootStyles = makeStyles({
  root: {
    display: 'block',
    minWidth: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 'auto',
  },
});

const useContentStyles = makeStyles({
  root: {
    width: '100%',
    minWidth: 0,
  },

  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
  },
});

/** Applies style classnames to slots */
export const useMainLayoutStyles = (state: MainLayoutState): MainLayoutState => {
  const mediaQueryStyles = useMediaQueryStyles();
  const rootStyles = useRootStyles();
  const contentStyles = useContentStyles();

  state.root.className = mergeClasses(
    mainClassNames.root,
    rootStyles.root,
    mediaQueryStyles.query,
    state.root.className,
  );

  state.content.className = mergeClasses(
    mainClassNames.content,
    contentStyles.root,
    mediaQueryStyles.contentQuery,
    state.content.className,
  );

  state.flexCenterStyle = contentStyles.flexCenter;

  return state;
};
