import { makeStyles, mergeClasses } from '@griffel/react';
import * as React from 'react';
import { tokens } from '@eevee/react-theme';
import { SocialListProps } from './SocialList.types';

const useStyles = makeStyles({
  itemCenter: {
    display: 'flex',
    alignItems: 'center',
  },

  root: {
    width: '24px',
    height: '24px',
    alignSelf: 'center',
    marginRight: tokens.spacingHorizontalM,
    marginBottom: '0px',
  },
});

export const SocialListSkeleton: React.FC<SocialListProps> = ({ children, before = false, ...props }) => {
  const styles = useStyles();

  return (
    <div className={styles.itemCenter}>
      <div {...props}>
        {before && children}
        <div className={mergeClasses(styles.root, 'skeleton-line', 'heading')} />
        <div className={mergeClasses(styles.root, 'skeleton-line', 'heading')} />
        <div className={mergeClasses(styles.root, 'skeleton-line', 'heading')} />
        <div className={mergeClasses(styles.root, 'skeleton-line', 'heading')} />
        {!before && children}
      </div>
    </div>
  );
};
