import { SlotClassNames } from '@eevee/react-utilities';
import { mergeClasses, makeStyles, shorthands } from '@griffel/react';
import { SideNavState, SideNavSlots } from './SideNav.types';

import { breakPoints } from '@eevee/react-theme';

export const sideNavClassNames: SlotClassNames<SideNavSlots> = {
  root: 'eve-SideNav',
  content: 'eve-SideNav__content',
  top: 'eve-sideNav__top',
};

const useRootStyles = makeStyles({
  base: {
    height: '100%',

    [`${breakPoints.lgAndLarger}`]: {
      display: 'block',
    },

    [`${breakPoints.lg}`]: {
      display: 'none',
    },

    [`${breakPoints.md}`]: {
      display: 'none',
    },

    [`${breakPoints.sm}`]: {
      display: 'none',
    },

    [`${breakPoints.xs}`]: {
      display: 'none',
    },
  },

  nav: {},
});

const useContentStyles = makeStyles({
  align: {
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
  const contentStyles = useContentStyles();

  state.root.className = mergeClasses(
    //
    sideNavClassNames.root,
    rootStyles.base,
    state.root.className,
  );

  state.content.className = mergeClasses(
    //
    sideNavClassNames.content,
    contentStyles.align,
    state.content.className,
  );
};
