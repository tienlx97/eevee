import * as React from 'react';
import { makeStyles } from '@griffel/react';
import { Porfolio } from '@components/porfolio/index';
import { PorfolioSkeleton } from '@components/skeleton/PorfolioSkeleton';
import { useBlogParam, MorePost, TocSkeleton, MorePostSkeleton, TocBeta } from '@feature/blog/index';
import { MockMorePostList } from '@feature/blog/mocks/MorePost';
import { useLocation, useNavigate } from 'react-router-dom';
import { useBlog } from '@feature/blog/index';

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
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { data, error } = useBlog(slug);

  if (error) {
    navigate(pathname, {
      replace: true,
      state: {
        errorStatusCode: 404,
      },
    });
  }

  if (!data && !error) {
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
  }

  if (!data) {
    return <></>;
  }

  return (
    <>
      <Porfolio style={{ padding: '0px 16px' }} author={data.frontmatter.author} />
      <div style={{ height: '24px' }} />
      <div className={styles.sticky}>
        <TocBeta toc={data.toc} />
        <div style={{ height: '24px' }} />
        <MorePost slug={slug!} morePostList={MockMorePostList} />
      </div>
    </>
  );
};
