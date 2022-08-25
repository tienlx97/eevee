import * as React from 'react';
import { makeStyles } from '@griffel/react';
import { Porfolio } from '@components/porfolio/index';
import { PorfolioSkeleton } from '@components/skeleton/PorfolioSkeleton';
import { useBlogParam, MorePost, TocSkeleton, MorePostSkeleton, TocBeta } from '@feature/blog/index';
import { MockMorePostList } from '@feature/blog/mocks/MorePost';
import type { Blog } from 'typings/my-mdx/index';

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

type BlogRightBar = {
  blog: Blog;
};

export const BlogRightBar = ({ blog: data }: BlogRightBar) => {
  const styles = useStyles();
  const slug = useBlogParam();

  return (
    <>
      <Porfolio style={{ padding: '0px 16px' }} author={data.author} />
      <div style={{ height: '24px' }} />
      <div className={styles.sticky}>
        <TocBeta toc={data.toc} />
        <div style={{ height: '24px' }} />
        <MorePost slug={slug!} morePostList={MockMorePostList} />
      </div>
    </>
  );
};
