import * as React from 'react';
import { makeStyles } from '@griffel/react';
import { ToggleTheme } from '@components/toggleTheme/index';

const useRootStyles = makeStyles({
  root: {
    paddingBottom: '16px',
    display: 'flex',
    justifyContent: 'center',
  },
});

export const Bottom = () => {
  const styles = useRootStyles();
  return (
    <div className={styles.root}>
      <ToggleTheme />
    </div>
  );
};
