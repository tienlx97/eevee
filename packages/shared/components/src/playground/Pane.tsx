import React from 'react';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';

import { IPaneProps } from './Pane.types';

const useStyles = makeStyles({
  wrapper: {
    ...shorthands.padding('16px'),
    paddingTop: 0,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
  },
  title: {
    textTransform: 'uppercase',
    fontSize: '1rem',
    lineHeight: '46px',
    fontWeight: 'var(--font-weight-bold)',
    cursor: 'default',
    ...shorthands.margin(0),
  },
});

const Pane = ({ title, children, actions, appendClasses = '' }: IPaneProps) => {
  const styles = useStyles();
  const classes = mergeClasses(styles.wrapper, appendClasses);

  return (
    <div // Wrapper
      className={classes}
    >
      <div // Header
        className={styles.header}
      >
        <p // Title
          className={styles.title}
        >
          {title}
        </p>
        {actions}
      </div>
      {children}
    </div>
  );
};

export { Pane };
