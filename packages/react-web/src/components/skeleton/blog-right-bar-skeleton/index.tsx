import * as React from 'react';
import { makeStyles } from '@griffel/react';
import { PorfolioSkeleton } from '@components/skeleton/PorfolioSkeleton';
import { TocSkeleton } from '../toc-skeleton/index';
import { MorePostSkeleton } from '../more-post-skeleton/index';

const useStyles = makeStyles({
  sticky: {
    // TODO Add default styles for the root element
    top: '10px',
    position: 'sticky',
    overflowY: 'hidden',
    overflowX: 'hidden',
  },
});

export const BlogRightBarSkeleton = () => {
  const styles = useStyles();
  return (
    <>
      <PorfolioSkeleton style={{ padding: '0px 16px' }} />
      <div style={{ height: '24px' }} />
      <div className={styles.sticky}>
        <TocSkeleton />
        <div style={{ height: '24px' }} />
        <MorePostSkeleton />
      </div>
    </>
  );
};
