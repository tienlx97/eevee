import * as React from 'react';
import { makeStyles } from '@griffel/react';
import { Porfolio } from '@components/porfolio/index';
import type { BlogQuery } from 'typings/schema/index';
import { TocBeta } from '../toc-beta/index';
import { MorePostSkeleton } from '@components/skeleton/more-post-skeleton/index';

const useStyles = makeStyles({
  sticky: {
    // TODO Add default styles for the root element
    top: '10px',
    position: 'sticky',
    overflowY: 'hidden',
    overflowX: 'hidden',
  },
});

type BlogRightBar = {
  blog: BlogQuery;
};

export const BlogRightBar = ({ blog: data }: BlogRightBar) => {
  const styles = useStyles();

  return (
    <>
      <Porfolio style={{ padding: '0px 16px' }} author={data.author} />
      <div style={{ height: '24px' }} />
      <div className={styles.sticky}>
        <TocBeta toc={data.toc} />
        <div style={{ height: '24px' }} />
        <MorePostSkeleton />
        {/* <MorePost slug={slug!} morePostList={MockMorePostList} /> */}
      </div>
    </>
  );
};
