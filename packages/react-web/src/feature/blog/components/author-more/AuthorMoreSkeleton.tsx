import { makeStyles } from '@griffel/react';
import * as React from 'react';
import { Dot } from '@components/dot/index';

const useRootStyles = makeStyles({
  root: {
    flexWrap: 'wrap',
    alignItems: 'center',
    display: 'flex',
  },
});

export const AuthorMoreSkeleton = () => {
  const styles = useRootStyles();

  return (
    <div>
      <div className="skeleton-line heading" style={{ width: '100px' }} />
      <div className={styles.root}>
        <div className="skeleton-line heading" style={{ width: '70px' }} />
        <Dot />
        <div className="skeleton-line heading" style={{ width: '80px' }} />
        <Dot />
        <div className="skeleton-line heading" style={{ width: '70px' }} />
      </div>
    </div>
  );
};
