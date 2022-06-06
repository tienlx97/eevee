import { SlotClassNames } from '@eevee/react-utilities';
import { mergeClasses, makeStyles, shorthands } from '@griffel/react';
import { TopNavSlots, TopNavState } from './TopNav.types';

import { breakPoints } from '@eevee/react-theme';

export const topNavClassNames: SlotClassNames<TopNavSlots> = {
  root: 'eve-TopNav',
  content: 'eve-TopNav__content',
};

const useRootStyles = makeStyles({
  base: {
    [`${breakPoints.lgAndLarger}`]: {
      display: 'none',
    },

    [`${breakPoints.lg}`]: {
      display: 'block',
    },

    [`${breakPoints.md}`]: {
      display: 'block',
    },

    [`${breakPoints.sm}`]: {
      display: 'block',
    },

    [`${breakPoints.xs}`]: {
      display: 'block',
    },
  },
});

const useContentStyles = makeStyles({
  base: {
    display: 'flex',
    justifyContent: 'space-between',
    ...shorthands.padding('0', '24px'),
    backgroundColor: 'var(--color-background)',
    height: '56px',
    alignItems: 'center',
    position: 'fixed',
    boxShadow: '0 0 #0000,0 0 #0000,0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)',
    top: 0,
    right: 0,
    left: 0,
    zIndex: 500,
  },
});

/** Applies style classnames to slots */
export const useTopNavStyles = (state: TopNavState) => {
  const rootStyles = useRootStyles();
  const contentStyles = useContentStyles();

  state.root.className = mergeClasses(
    //
    topNavClassNames.root,
    rootStyles.base,
    state.root.className,
  );

  state.content.className = mergeClasses(
    //
    topNavClassNames.content,
    contentStyles.base,
    state.content.className,
  );
};
