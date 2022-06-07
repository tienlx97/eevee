import * as React from 'react';
import { makeStyles, shorthands } from '@griffel/react';

const useRootStyles = makeStyles({
  root: {
    paddingBottom: '16px',
    display: 'block',
  },
});

export const Bottom = () => {
  const styles = useRootStyles();
  return <div className={styles.root} />;
};
