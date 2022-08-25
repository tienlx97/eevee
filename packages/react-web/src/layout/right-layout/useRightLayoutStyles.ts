import { SlotClassNames } from '@eevee/react-utilities';
import { mergeClasses, makeStyles, shorthands } from '@griffel/react';
import { breakPoints, tokens } from '@eevee/react-theme';

import { RightLayoutState, RightLayoutSlots } from './RightLayout.types';

export const rightClassNames: SlotClassNames<RightLayoutSlots> = {
  root: 'eve-RightBar',
};

const useMediaQueryStyles = makeStyles({
  query: {
    [`@media ${breakPoints.lgAndLarger}`]: {
      display: 'block',
    },

    [`@media ${breakPoints.xlAndSmaller}`]: {
      width: '280px',
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
  root: {
    backgroundColor: tokens.bg1,
    boxSizing: 'border-box',
    ...shorthands.padding('0', '10px'),
    ...shorthands.borderLeft('1px', 'solid', tokens.b2),
    minHeight: '100vh',
    width: '360px',
  },
});

const useAnotherStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
    display: 'inline-block',
    position: 'relative',
  },
});

/** Applies style classnames to slots */
export const useRightLayoutStyles = (state: RightLayoutState) => {
  const mediaQueryStyles = useMediaQueryStyles();
  const rootStyles = useRootStyles();
  const anotherStyles = useAnotherStyles();

  state.root.className = mergeClasses(
    rightClassNames.root,
    rootStyles.root,
    mediaQueryStyles.query,
    state.root.className,
  );

  Object.entries(anotherStyles).map(([key, value]) =>
    state.styles.push(mergeClasses(`${rightClassNames.root}__${key}`, value)),
  );

  return state;
};
