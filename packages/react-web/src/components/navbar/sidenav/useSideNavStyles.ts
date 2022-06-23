import { SlotClassNames } from '@eevee/react-utilities';
import { mergeClasses, makeStyles } from '@griffel/react';
import { SideNavState, SideNavSlots } from './SideNav.types';

import { breakPoints, tokens } from '@eevee/react-theme';

export const sideNavClassNames: SlotClassNames<SideNavSlots> = {
  root: 'eve-SideNav',
  content: 'eve-SideNav__content',
};

const useMediaQueryStyles = makeStyles({
  query: {
    [`@media ${breakPoints.lgAndLarger}`]: {
      display: 'block',
    },

    [`@media ${breakPoints.lg}`]: {
      display: 'none',
    },

    [`@media ${breakPoints.md}`]: {
      display: 'none',
    },

    [`@media ${breakPoints.sm}`]: {
      display: 'none',
    },

    [`@media ${breakPoints.xs}`]: {
      display: 'none',
    },
  },
});

const useRootStyles = makeStyles({
  height: {
    height: '100%',
  },
});

const useContentStyles = makeStyles({
  content: {
    backgroundColor: tokens.background1,
    position: 'sticky',
    top: 0,
    height: '100vh',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    zIndex: 1,
  },
});

/** Applies style classnames to slots */
export const useSideNavStyles = (state: SideNavState) => {
  const rootStyles = useRootStyles();
  const mediaQueryStyles = useMediaQueryStyles();
  const contentStyles = useContentStyles();

  state.root.className = mergeClasses(
    //
    sideNavClassNames.root,
    rootStyles.height,
    mediaQueryStyles.query,
    state.root.className,
  );

  state.content.className = mergeClasses(
    //
    sideNavClassNames.content,
    contentStyles.content,
    state.content.className,
  );
};
