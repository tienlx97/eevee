import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import * as React from 'react';
import { tokens } from '@eevee/react-theme';

const useRootStyles = makeStyles({
  root: {
    position: 'sticky',
    bottom: '16px',
    display: 'flex',
    justifyContent: 'center',
  },

  flex: {
    height: '40px',
    ...shorthands.padding('0px', '14px', '0px', '16px'),
    ...shorthands.borderRadius('20px'),
    ...shorthands.border('none'),
    alignItems: 'center',
    display: 'flex',
    backgroundColor: 'var(--bg1)',
    boxShadow: 'var(--b2) 0px 2px 10px 0px',
  },

  toc: {
    color: tokens.f9,
    marginBottom: '16px',
    textTransform: 'uppercase',
  },
});

export const ReactionSkeleton = (props: JSX.IntrinsicElements['div']) => {
  const styles = useRootStyles();
  return (
    <div className={styles.root}>
      <div />
    </div>
  );
};
