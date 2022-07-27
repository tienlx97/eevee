import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import * as React from 'react';

const useRootStyles = makeStyles({
  root: {
    ...shorthands.borderRadius('5px'),
  },

  circleAvatar: {
    width: '69px',
    height: '69px',
    ...shorthands.borderRadius('50%'),
  },
});

export const PorfolioSkeleton = (props: JSX.IntrinsicElements['div']) => {
  const rootStyles = useRootStyles();
  return (
    <div className={rootStyles.root} {...props}>
      <div className={mergeClasses(rootStyles.circleAvatar, 'skeleton-avatar')} />
      <div style={{ marginTop: '16px' }} />
      <div className="tweet-header">
        <div className="skeleton-line heading" style={{ width: '45%' }} />
      </div>
      <div style={{ marginTop: '4px' }} />
      <div className="tweet-header">
        <div className="skeleton-line heading" style={{ width: '20%' }} />
      </div>
      <div style={{ marginTop: '12px' }} />
      <div className="tweet-text">
        <div className="skeleton-line heading" style={{ width: '90%' }} />
        <div className="skeleton-line heading" style={{ width: '100%' }} />
        <div className="skeleton-line heading" style={{ width: '35%' }} />
      </div>
      <div style={{ marginBottom: '15px' }} />
    </div>
  );
};
