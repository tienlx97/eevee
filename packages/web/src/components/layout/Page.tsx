import * as React from 'react';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import { NavBar } from '../navbar/NavBar';
import { breakPoints } from '@eevee/react-theme';
import { Main } from '../main/index';
import { Right } from '../right/Right';
import { useMediaQuery } from '../../hooks/index';

const useMediaQueryStyles = makeStyles({
  query: {
    [`@media ${breakPoints.lgAndLarger}`]: {
      flexDirection: 'row',
    },

    [`@media ${breakPoints.lg}`]: {
      flexDirection: 'column',
    },

    [`@media ${breakPoints.md}`]: {
      flexDirection: 'column',
    },

    [`@media ${breakPoints.sm}`]: {
      flexDirection: 'column',
    },

    [`@media ${breakPoints.xs}`]: {
      flexDirection: 'column',
    },
  },
});

const useRootStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '1504px',
    ...shorthands.margin('auto'),
  },
});

export const Page = () => {
  const rootStyles = useRootStyles();
  const mediaQueryStyles = useMediaQueryStyles();

  const hide = useMediaQuery(breakPoints.lgAndSmaller);
  const classes = mergeClasses(rootStyles.root, mediaQueryStyles.query);

  return (
    <div className={classes}>
      <NavBar />
      <Main />
      {!hide && <Right />}
    </div>
  );
};
