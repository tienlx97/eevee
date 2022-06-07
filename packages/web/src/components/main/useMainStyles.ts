import { SlotClassNames } from '@eevee/react-utilities';
import { mergeClasses, makeStyles } from '@griffel/react';

import { breakPoints } from '@eevee/react-theme';
import { MainState, MainSlots } from './Main.types';

export const mainClassNames: SlotClassNames<MainSlots> = {
  root: 'eve-Main',
};

const useMediaQueryStyles = makeStyles({
  query: {
    [`@media ${breakPoints.lgAndLarger}`]: {
      marginBottom: 0,
    },

    [`@media ${breakPoints.lg}`]: {
      marginBottom: '56px',
    },

    [`@media ${breakPoints.md}`]: {
      flexDirection: '56px',
    },

    [`@media ${breakPoints.sm}`]: {
      flexDirection: '56px',
    },

    [`@media ${breakPoints.xs}`]: {
      flexDirection: '56px',
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
    //
    backgroundColor: '#fff',
    height: '100vh',
  },
});

/** Applies style classnames to slots */
export const useMainStyles = (state: MainState) => {
  const mediaQueryStyles = useMediaQueryStyles();
  const rootStyles = useRootStyles();

  state.root.className = mergeClasses(
    //
    mainClassNames.root,
    rootStyles.root,
    mediaQueryStyles.query,
    state.root.className,
  );
};
