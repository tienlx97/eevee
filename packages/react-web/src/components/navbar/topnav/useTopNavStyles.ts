import { SlotClassNames } from '@eevee/react-utilities';
import { mergeClasses, makeStyles, shorthands } from '@griffel/react';
import { breakPoints, tokens } from '@eevee/react-theme';

import { TopNavSlots, TopNavState } from './TopNav.types';
import { NAV_HEIGHT } from '@constants/index';

export const topNavClassNames: SlotClassNames<TopNavSlots> = {
  root: 'eve-TopNav',
  content: 'eve-TopNav__content',
  gap: 'eve-TopNav__gap',
};

const useMediaQueryStyles = makeStyles({
  query: {
    [`@media ${breakPoints.lgAndLarger}`]: {
      display: 'none',
    },

    [`@media ${breakPoints.lg}`]: {
      display: 'block',
    },

    [`@media ${breakPoints.md}`]: {
      display: 'block',
    },

    [`@media ${breakPoints.sm}`]: {
      display: 'block',
    },

    [`@media ${breakPoints.xs}`]: {
      display: 'block',
    },
  },
});

const useContentStyles = makeStyles({
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    ...shorthands.padding('0', '24px'),
    backgroundColor: tokens.bg1,
    height: `${NAV_HEIGHT}px`,
    alignItems: 'center',
    position: 'fixed',
    boxShadow: `0px -2px 10px ${tokens.b1}`,
    top: 0,
    right: 0,
    left: 0,
    zIndex: 500,
  },
});

const useGapStyles = makeStyles({
  gapHeight: {
    height: `${NAV_HEIGHT}px`,
    display: 'block',
  },
});

/** Applies style classnames to slots */
export const useTopNavStyles = (state: TopNavState) => {
  const mediaQueryStyles = useMediaQueryStyles();
  const contentStyles = useContentStyles();
  const gapStyles = useGapStyles();
  state.root.className = mergeClasses(topNavClassNames.root, mediaQueryStyles.query, state.root.className);

  state.gap.className = mergeClasses(topNavClassNames.gap, gapStyles.gapHeight, state.gap.className);

  state.content.className = mergeClasses(topNavClassNames.content, contentStyles.wrapper, state.content.className);
};
