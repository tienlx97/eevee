import * as React from 'react';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';

const useSkeletonStyles = makeStyles({
  circleAvatar: {
    width: '48px',
    height: '48px',
    marginRight: '16px',
  },
});
export const CircleSkeleton = () => {
  const skeletonStyles = useSkeletonStyles();
  return <div className={mergeClasses(skeletonStyles.circleAvatar, 'skeleton-avatar-no-ann')} />;
};
