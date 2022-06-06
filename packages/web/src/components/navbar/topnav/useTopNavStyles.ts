import { SlotClassNames } from '@eevee/react-utilities';
import { mergeClasses, makeStyles, shorthands } from '@griffel/react';
import { TopNavSlots, TopNavState } from './TopNav.types';

import { breakPoints, tokens } from '@eevee/react-theme';
import { topNavHeight } from '../../../constants/css';

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
    backgroundColor: tokens.colorBackground1,
    height: `${topNavHeight}px`,
    alignItems: 'center',
    position: 'fixed',
    boxShadow: '0 0 #0000,0 0 #0000,0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)',
    top: 0,
    right: 0,
    left: 0,
    zIndex: 500,
  },
});

const useGapStyles = makeStyles({
  gapHeight: {
    height: `${topNavHeight}px`,
    display: 'block',
  },
});

/** Applies style classnames to slots */
export const useTopNavStyles = (state: TopNavState) => {
  const mediaQueryStyles = useMediaQueryStyles();
  const contentStyles = useContentStyles();
  const gapStyles = useGapStyles();
  state.root.className = mergeClasses(
    //
    topNavClassNames.root,
    mediaQueryStyles.query,
    state.root.className,
  );

  state.gap.className = mergeClasses(
    //
    topNavClassNames.gap,
    gapStyles.gapHeight,
    state.gap.className,
  );

  state.content.className = mergeClasses(
    //
    topNavClassNames.content,
    contentStyles.wrapper,
    state.content.className,
  );
};
