import * as React from 'react';
import { makeStyles } from '@griffel/react';
import { ErrorBoundary } from 'react-error-boundary';
import { Porfolio } from '@components/porfolio/index';
import { Spinner } from '@components/spinner/Spinner';
import { PorfolioSkeleton } from '@components/skeleton/PorfolioSkeleton';
import { useBlogParam, MorePost, TocSkeleton, MorePostSkeleton, TocV2 } from '@feature/blog/index';

import { MockMorePostList } from '@feature/blog/mocks/MorePost';

const useStyles = makeStyles({
  sticky: {
    // TODO Add default styles for the root element
    top: '10px',
    position: 'sticky',
    overflowY: 'hidden',
    overflowX: 'hidden',
  },
});

export const BlogRightBar = () => {
  const styles = useStyles();
  const slug = useBlogParam();

  return slug ? (
    <>
      {/* <PorfolioSkeleton style={{ padding: '0px 16px' }} />
      <div style={{ height: '24px' }} />
      <TocSkeleton />
      <div style={{ height: '24px' }} />
      <MorePostSkeleton /> */}
      <ErrorBoundary fallback={<Spinner />}>
        <React.Suspense fallback={<PorfolioSkeleton style={{ padding: '0px 16px' }} />}>
          <Porfolio style={{ padding: '0px 16px' }} slug={slug} />
        </React.Suspense>
      </ErrorBoundary>
      <div style={{ height: '24px' }} />
      <div className={styles.sticky}>
        <ErrorBoundary fallback={<Spinner />}>
          <React.Suspense fallback={<TocSkeleton />}>
            <TocV2 slug={slug} />
          </React.Suspense>
        </ErrorBoundary>
        <div style={{ height: '24px' }} />
        <ErrorBoundary fallback={<Spinner />}>
          <React.Suspense fallback={<MorePostSkeleton />}>
            <MorePost slug={slug} morePostList={MockMorePostList} />
          </React.Suspense>
        </ErrorBoundary>
      </div>
    </>
  ) : (
    <></>
  );
};
