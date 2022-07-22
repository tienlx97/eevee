import { SlotClassNames } from '@eevee/react-utilities';
import { mergeClasses, makeStyles, shorthands } from '@griffel/react';

import { breakPoints, tokens } from '@eevee/react-theme';
import { RightState, RightSlots } from './Right.types';

export const rightClassNames: SlotClassNames<RightSlots> = {
  root: 'eve-Right',
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
    ...shorthands.padding(0, '20px'),
    ...shorthands.borderLeft('1px', 'solid', tokens.b1),
    minHeight: '100vh',
    width: '360px',
  },
});

/** Applies style classnames to slots */
export const useRightStyles = (state: RightState) => {
  const mediaQueryStyles = useMediaQueryStyles();
  const rootStyles = useRootStyles();

  state.root.className = mergeClasses(
    //
    rightClassNames.root,
    rootStyles.root,
    mediaQueryStyles.query,
    state.root.className,
  );
};
