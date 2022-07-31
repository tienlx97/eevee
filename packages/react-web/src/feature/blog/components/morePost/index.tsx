import * as React from 'react';
import type { MorePost as MorePostType } from 'typings/my-mdx/index';
import { Heading } from '@eevee/react-mdx-comp';
import { CircleAvatar } from '../circleAvatar/index';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import { tokens } from '@eevee/react-theme';
import { Link } from 'react-router-dom';
import { toDate } from '@utilities/toDate';
import { Spinner } from '@components/spinner2/index';
import { useBlogAPISWR } from '../../hooks/useBlogAPISuspense';

const useRootStyles = makeStyles({
  root: {
    overflowY: 'hidden',
    overflowX: 'hidden',
    backgroundColor: tokens.bg6,
    ...shorthands.padding('12px', '16px'),
    ...shorthands.borderRadius('14px'),
    ...shorthands.borderColor(tokens.bg6),
    ...shorthands.borderWidth('1px'),
  },

  header: {
    color: tokens.f9,
    fontWeight: 800,
    marginBottom: '12px',
    lineHeight: '24px',
  },

  postContent: {
    overflowY: 'scroll',
    maxHeight: '40vh',
    width: '100%',
    paddingRight: '16px',
    boxSizing: 'content-box',
  },
});

const useMorePostSkeletonStyles = makeStyles({
  root: {
    backgroundColor: tokens.bg6,
    ...shorthands.padding('12px', '16px'),
    ...shorthands.borderRadius('14px'),
    ...shorthands.borderColor(tokens.bg6),
    ...shorthands.borderWidth('1px'),
  },

  header: {
    color: tokens.f9,
    fontWeight: 800,
    marginBottom: '12px',
    lineHeight: '24px',
  },

  postContent: {
    height: '125px',
    width: '100%',
  },
});

type SimplePostProps = JSX.IntrinsicElements['div'] & {
  morePost: MorePostType;
};

const useSimplePost = makeStyles({
  root: {
    marginBottom: '16px',
  },

  wrapper: {
    fontSize: '12px',
    lineHeight: 1.5,
    marginBottom: '8px',
    display: 'flex',
    justifyContent: 'space-between',
  },

  title: {
    fontSize: '14px',
    lineHeight: 1.5,
    color: tokens.f1,
    height: '66px',
    ...shorthands.overflow('hidden'),
    textOverflow: 'ellipsis',
  },

  'ml-6': {
    marginLeft: '8px',
  },
});

const SimplePost = ({ morePost, className, ...props }: SimplePostProps) => {
  const styles = useSimplePost();
  return (
    <div className={mergeClasses(styles.root, className)} {...props}>
      <div className={styles.wrapper}>
        <div>
          <CircleAvatar width={22} height={22} title="Le Xuan Tien" url={morePost.authorImg}>
            <span className={styles['ml-6']}>{morePost.authorName}</span>
          </CircleAvatar>
        </div>
        <span>{toDate(morePost.publishDate)}</span>
      </div>
      <Link style={{ color: 'inherit' }} to={`/${morePost.postUrl}`}>
        <div className={styles.title}>{morePost.postTitle}</div>
      </Link>
    </div>
  );
};

export const MorePostSkeleton = () => {
  const styles = useMorePostSkeletonStyles();
  return (
    <div className={styles.root}>
      <div className={styles.postContent}>
        <Spinner />
      </div>
    </div>
  );
};

type MorePostProps = {
  morePostList?: MorePostType[];
  slug: string;
};

export const MorePost = ({ morePostList, slug }: MorePostProps) => {
  const styles = useRootStyles();
  useBlogAPISWR(slug);

  return morePostList ? (
    <div className={styles.root}>
      <Heading as="h2" type="section-title" className={styles.header}>
        More Articles
      </Heading>
      <div className={styles.postContent}>
        {morePostList.map((morePost, key) => (
          <SimplePost key={key} morePost={morePost} />
        ))}
      </div>
    </div>
  ) : (
    <></>
  );
};
