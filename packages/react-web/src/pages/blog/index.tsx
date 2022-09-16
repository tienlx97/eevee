import * as React from 'react';
import { Await, useAsyncValue, useLoaderData, useNavigate, useParams } from 'react-router-dom';

import { MiddleLayout, RightLayout } from '@layout/index';

import { BlogDetail, BlogHeader, Reaction, BlogRightBar, useBlog } from '@feature/blog/index';

import { Close } from '@components/icons/Close';
import { CommentSystem } from '@components/comment-system/index';

import { BlogHeaderSkeleton } from '@components/skeleton/blog-header/index';
import { ReactionSkeleton } from '@components/skeleton/reaction-skeleton/index';
import { BlogDetailSkeleton } from '@components/skeleton/blog-detail-skeleton/index';
import { BlogRightBarSkeleton } from '@components/skeleton/blog-right-bar-skeleton/index';

import { useReactionStyles } from './styles';
import { DeferBlogLoader } from '@routes/index';
import type { BlogQuery } from 'typings/schema/index';

const BlogDeferHandler = () => {
  // styles
  const reactionStyles = useReactionStyles();
  const [isOpenComment, setOpenComment] = React.useState(false);
  const initialData = useAsyncValue() as BlogQuery;
  const { slug } = useParams();
  const { data: blogInfo } = useBlog({
    slug,
    initialData,
  });

  React.useEffect(() => {
    if (blogInfo) {
      document.querySelector('meta[property="og:title"]')?.setAttribute('content', `b/${blogInfo.id}`);
    }
  }, [blogInfo]);

  return (
    <>
      <MiddleLayout>
        <CommentSystem
          onClose={() => setOpenComment!(false)}
          show={isOpenComment ?? false}
          closeButton={{ icon: <Close /> }}
        />
        <BlogHeader blog={blogInfo!} />
        <BlogDetail blog={blogInfo!} />
        <Reaction
          setOpenComment={val => setOpenComment!(val)}
          id="eve-BlogPage__reaction"
          className={reactionStyles.root}
        />
      </MiddleLayout>
      <RightLayout>
        <BlogRightBar blog={blogInfo!} />
      </RightLayout>
    </>
  );
};

export const Blog = () => {
  // styles
  const reactionStyles = useReactionStyles();
  const { blog: blogInfo } = useLoaderData() as DeferBlogLoader;

  return (
    <React.Suspense
      fallback={
        <>
          <MiddleLayout>
            <BlogHeaderSkeleton />
            <BlogDetailSkeleton />
            <ReactionSkeleton className={reactionStyles.root} />
          </MiddleLayout>
          <RightLayout>
            <BlogRightBarSkeleton />
          </RightLayout>
        </>
      }
    >
      <Await resolve={blogInfo}>
        <BlogDeferHandler />
      </Await>
    </React.Suspense>
  );
};
