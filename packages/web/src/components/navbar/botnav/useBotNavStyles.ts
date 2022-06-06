import { SlotClassNames } from '@eevee/react-utilities';
import { mergeClasses, makeStyles, shorthands } from '@griffel/react';
import { BotNavSlots, BotNavState } from './BotNav.types';

import { breakPoints, tokens } from '@eevee/react-theme';
import { topNavHeight } from '../../../constants/css';

export const botNavClassNames: SlotClassNames<BotNavSlots> = {
  root: 'eve-BotNav',
  postition: 'eve-BotNav__position',
  content: 'eve-BotNav__content',
};

const useMediaQueryStyles = makeStyles({
  query: {
    backgroundColor: tokens.colorBackground1,
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

const usePositionStyles = makeStyles({
  position: {
    display: 'block',
    position: 'fixed',
    right: 0,
    left: 0,
    zIndex: 500,
    bottom: 0,
    backgroundColor: tokens.colorBackground1,
  },
});

const useContentStyles = makeStyles({
  base: {
    height: `${topNavHeight}px`,
    position: 'relative',
    zIndex: 600,
    display: 'flex',
    justifyContent: 'space-between',
  },
});

/** Applies style classnames to slots */
export const useBotNavStyles = (state: BotNavState) => {
  const mediaQueryStyles = useMediaQueryStyles();
  const positionStyles = usePositionStyles();
  const contentStyles = useContentStyles();

  state.root.className = mergeClasses(
    //
    botNavClassNames.root,
    mediaQueryStyles.query,
    state.root.className,
  );

  state.postition.className = mergeClasses(
    //
    botNavClassNames.postition,
    positionStyles.position,
    state.postition.className,
  );

  state.content.className = mergeClasses(
    //
    botNavClassNames.content,
    contentStyles.base,
    state.content.className,
  );
};
