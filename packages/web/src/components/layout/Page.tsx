import * as React from 'react';
import { makeStyles } from '@griffel/react';
import { NavBar } from '../navbar/NavBar';
import { breakPoints } from '@eevee/react-theme';
import { Main } from '../main/index';

const useRootStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',

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

export const Page = () => {
  const rootStyles = useRootStyles();
  return (
    <div className={rootStyles.root}>
      <NavBar />
      <Main />
    </div>
  );
};
