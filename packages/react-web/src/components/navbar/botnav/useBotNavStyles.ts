import { SlotClassNames } from '@eevee/react-utilities';
import { mergeClasses, makeStyles, shorthands } from '@griffel/react';
import { BotNavSlots, BotNavState } from './BotNav.types';

import { breakPoints, tokens } from '@eevee/react-theme';
import { navHeight } from '../../../constants/css';

export const botNavClassNames: SlotClassNames<BotNavSlots> = {
  root: 'eve-BotNav',
  postition: 'eve-BotNav__position',
  content: 'eve-BotNav__content',
};

const useSafePaddingStyles = makeStyles({
  root: {
    paddingBottom: 'env(safe-area-inset-bottom)',
  },
});

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

const usePositionStyles = makeStyles({
  position: {
    backgroundColor: tokens.bg1,
    boxShadow: `0px 2px 10px ${tokens.b1}`,
    display: 'block',
    position: 'fixed',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 500,
  },
});

const useContentStyles = makeStyles({
  wrapper: {
    height: `${navHeight}px`,
    position: 'relative',
    zIndex: 600,
    display: 'flex',
    justifyContent: 'space-between',
  },
});

const useLinkIconWrapperStyles = makeStyles({
  root: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '0%',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
});

/** Applies style classnames to slots */
export const useBotNavStyles = (state: BotNavState) => {
  const iphoneSafePadding = useSafePaddingStyles();
  const mediaQueryStyles = useMediaQueryStyles();
  const positionStyles = usePositionStyles();
  const contentStyles = useContentStyles();
  const linkIconWrapper = useLinkIconWrapperStyles();

  state.root.className = mergeClasses(
    //
    botNavClassNames.root,
    // rootStyles.root,
    mediaQueryStyles.query,
    state.root.className,
  );

  state.postition.className = mergeClasses(
    //
    iphoneSafePadding.root,
    botNavClassNames.postition,
    positionStyles.position,
    state.postition.className,
  );

  state.content.className = mergeClasses(
    //
    botNavClassNames.content,
    contentStyles.wrapper,
    state.content.className,
  );

  state.linkIconWrapperClassName = linkIconWrapper.root;
};
