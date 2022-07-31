import * as React from 'react';
import { makeStyles, mergeClasses } from '@griffel/react';

import { breakPoints } from '@eevee/react-theme';
import { ButtonR, Button } from '@eevee/react-button';

import { Save } from '@components/icons/index';

import { useBlogParam, useBlogAPISWR } from '@feature/blog/hooks/index';
import {
  CircleAvatar,
  AuthorReadTime,
  SocialList,
  AuthorReadTimeSkeleton,
  CirCleSkeleton,
  SocialListSkeleton,
} from '@feature/blog/components/index';

const useRootStyles = makeStyles({
  root: {
    display: 'block',
    [`@media ${breakPoints.lgAndLarger}`]: {
      marginTop: '56px',
      marginBottom: '32px',
    },

    [`@media ${breakPoints.lg}`]: {
      marginTop: '32px',
      marginBottom: '24px',
    },

    [`@media ${breakPoints.md}`]: {
      marginTop: '32px',
      marginBottom: '24px',
    },

    [`@media ${breakPoints.sm}`]: {
      marginTop: '32px',
      marginBottom: '24px',
    },

    [`@media ${breakPoints.xs}`]: {
      marginTop: '32px',
      marginBottom: '24px',
    },
  },
});

const useDisplayStyles = makeStyles({
  itemStart: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },

  flex: {
    display: 'flex',
  },

  itemCenter: {
    display: 'flex',
    alignItems: 'center',
  },

  'mr-16': {
    marginRight: '16px',
  },

  'mr-8': {
    marginRight: '8px',
  },
});

const useSocialStyles = makeStyles({
  web: {
    [`@media ${breakPoints.lgAndLarger}`]: {
      display: 'inline-flex',
    },
    [`@media ${breakPoints.lg}`]: {
      display: 'inline-flex',
    },
    [`@media ${breakPoints.md}`]: {
      display: 'inline-flex',
    },
    [`@media ${breakPoints.sm}`]: {
      display: 'none',
    },
    [`@media ${breakPoints.xs}`]: {
      display: 'none',
    },
  },

  mobile: {
    paddingTop: '24px',

    [`@media ${breakPoints.lgAndLarger}`]: {
      display: 'none',
    },

    [`@media ${breakPoints.lg}`]: {
      display: 'none',
    },

    [`@media ${breakPoints.md}`]: {
      display: 'none',
    },

    [`@media ${breakPoints.sm}`]: {
      display: 'inline-flex',
    },

    [`@media ${breakPoints.xs}`]: {
      display: 'inline-flex',
    },
  },
});

const useSkeletonStyles = makeStyles({
  web: {
    [`@media ${breakPoints.lgAndLarger}`]: {
      display: 'inline-flex',
    },
    [`@media ${breakPoints.lg}`]: {
      display: 'inline-flex',
    },
    [`@media ${breakPoints.md}`]: {
      display: 'inline-flex',
    },
    [`@media ${breakPoints.sm}`]: {
      display: 'none',
    },
    [`@media ${breakPoints.xs}`]: {
      display: 'none',
    },
  },

  mobile: {
    paddingTop: '24px',

    [`@media ${breakPoints.lgAndLarger}`]: {
      display: 'none',
    },

    [`@media ${breakPoints.lg}`]: {
      display: 'none',
    },

    [`@media ${breakPoints.md}`]: {
      display: 'none',
    },

    [`@media ${breakPoints.sm}`]: {
      display: 'inline-flex',
    },

    [`@media ${breakPoints.xs}`]: {
      display: 'inline-flex',
    },
  },
});

export const PostHeaderSkeleton = () => {
  const rootStyles = useRootStyles();
  const displayStyles = useDisplayStyles();
  const skeletonStyles = useSkeletonStyles();

  return (
    <div className={mergeClasses(rootStyles.root, 'skeleton-wrapper')}>
      <div className={displayStyles.itemStart}>
        <div className={displayStyles.flex}>
          <CirCleSkeleton />
          <AuthorReadTimeSkeleton />
        </div>
        <SocialListSkeleton className={skeletonStyles.web}>
          <div
            className="skeleton-line heading"
            style={{ margin: '0px 4px 0px 28px', width: '24px', height: '24px', alignSelf: 'center' }}
          />
        </SocialListSkeleton>
      </div>
      <SocialListSkeleton before={true} className={skeletonStyles.mobile}>
        <div
          className="skeleton-line"
          style={{
            marginRight: '8px',
            borderRadius: '50px',
            marginBottom: '0px',
            width: '80px',
            height: '36px',
            alignSelf: 'center',
          }}
        />
      </SocialListSkeleton>
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export function PostHeader() {
  const rootStyles = useRootStyles();
  const displayStyles = useDisplayStyles();
  const socialListStyles = useSocialStyles();

  const slug = useBlogParam();
  const post = useBlogAPISWR(slug);

  return post ? (
    <div className={rootStyles.root}>
      {/* > mobile */}
      <div className={displayStyles.itemStart}>
        <div className={displayStyles.flex}>
          <CircleAvatar
            width={48}
            height={48}
            className={displayStyles['mr-16']}
            url="https://source.unsplash.com/random"
          />
          <AuthorReadTime
            authorName={post.frontmatter.author[0]}
            authorNickName={post.frontmatter.author[1]}
            date={post.frontmatter.date}
            readTime={post.readTime}
          />
        </div>
        <SocialList className={socialListStyles.web}>
          <ButtonR style={{ margin: '0px 4px 0px 28px' }} aria-label="Save" title="Save" icon={<Save />} />
        </SocialList>
      </div>
      {/* <= mobile */}
      <SocialList className={socialListStyles.mobile} before={true}>
        <Button
          iconPosition="before"
          appearance="unstyled"
          shape="circular"
          icon={{ as: 'span', className: displayStyles['mr-8'], children: <Save /> }}
        >
          Save
        </Button>
      </SocialList>
    </div>
  ) : (
    <></>
  );
}
