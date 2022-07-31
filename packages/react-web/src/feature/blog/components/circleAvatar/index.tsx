import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import * as React from 'react';
import { Link } from 'react-router-dom';

const useRootStyles = makeStyles({
  root: {
    ...shorthands.borderRadius('50%'),
  },

  'mr-16': {
    marginRight: '16px',
  },

  flex: {
    display: 'flex',
    flexDirection: 'row',
    color: 'inherit',
  },
});

const useSkeletonStyles = makeStyles({
  circleAvatar: {
    width: '48px',
    height: '48px',
    marginRight: '16px',
  },
});

type CircleAvatarProps = JSX.IntrinsicElements['div'] & {
  width?: number;
  height?: number;
  url: string;
  title?: string;
};

export const CirCleSkeleton = () => {
  const skeletonStyles = useSkeletonStyles();
  return <div className={mergeClasses(skeletonStyles.circleAvatar, 'skeleton-avatar-no-ann')} />;
};

export const CircleAvatar = ({
  height = 48,
  url,
  width = 48,
  title,
  children,
  className,
  ...props
}: CircleAvatarProps) => {
  const styles = useRootStyles();
  return (
    <div className={className} {...props}>
      <Link className={mergeClasses(styles.flex)} to="" rel="noopener follow">
        <img width={height} height={width} className={styles.root} src={url} />
        {children && children}
      </Link>
    </div>
  );
};
