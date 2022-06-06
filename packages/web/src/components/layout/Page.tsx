import * as React from 'react';
import { makeStyles } from '@griffel/react';
import { NavBar } from '../navbar/NavBar';
import { breakPoints } from '@eevee/react-theme';

const useRootStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',

    [`${breakPoints.lgAndLarger}`]: {
      flexDirection: 'row',
    },

    [`${breakPoints.lg}`]: {
      flexDirection: 'column',
    },

    [`${breakPoints.md}`]: {
      flexDirection: 'column',
    },

    [`${breakPoints.sm}`]: {
      flexDirection: 'column',
    },

    [`${breakPoints.xs}`]: {
      flexDirection: 'column',
    },
  },
});

export const Page = () => {
  const rootStyles = useRootStyles();
  return (
    <div className={rootStyles.root}>
      <NavBar />
    </div>
  );
};
