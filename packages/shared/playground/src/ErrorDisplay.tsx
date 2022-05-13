import React from 'react';
import { makeStyles, shorthands } from '@griffel/react';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'var(--color-error)',
    color: 'var(--color-background)',
    ...shorthands.padding('12px', '16px'),
    // padding: '12px 16px',
    position: 'absolute',
    width: '100%',
    bottom: 0,
    boxSizing: 'border-box',
    ...shorthands.borderRadius('0', '0', '4px', '4px'),
    // borderRadius: '0 0 4px 4px',
    fontSize: '1rem',
    marginBottom: 0,
  },
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ErrorDisplay = (children: any) => {
  const classes = useStyles();

  return <p className={classes.root}>{children}</p>;
};

export { ErrorDisplay };
