import * as React from 'react';
import { makeStyles, shorthands } from '@griffel/react';
import { ToggleTheme } from '@components/toggleTheme/index';
import { ToggleAuthor } from '@feature/author/index';

const useRootStyles = makeStyles({
  root: {
    paddingBottom: '16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    ...shorthands.gap('8px'),
    alignItems: 'center',
  },
});

export const Bottom = () => {
  const styles = useRootStyles();

  return (
    <div className={styles.root}>
      <ToggleTheme />
      <ToggleAuthor />
    </div>
  );
};
