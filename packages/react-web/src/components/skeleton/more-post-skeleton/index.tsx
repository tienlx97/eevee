import * as React from 'react';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import { tokens } from '@eevee/react-theme';
import { Spinner } from '@components/spinner-2/index';

const useMorePostSkeletonStyles = makeStyles({
  root: {
    backgroundColor: tokens.bg6,
    ...shorthands.padding('12px', '16px'),
    ...shorthands.borderRadius('14px'),
    ...shorthands.borderColor(tokens.bg6),
    ...shorthands.borderWidth('1px'),
  },

  header: {
    color: tokens.f9,
    fontWeight: 800,
    marginBottom: '12px',
    lineHeight: '24px',
  },

  postContent: {
    height: '125px',
    width: '100%',
  },
});

export const MorePostSkeleton = () => {
  const styles = useMorePostSkeletonStyles();
  return (
    <div className={styles.root}>
      <div className={styles.postContent}>
        <Spinner />
      </div>
    </div>
  );
};
