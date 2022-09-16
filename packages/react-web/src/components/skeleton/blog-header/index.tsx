import * as React from 'react';
import { makeStyles, mergeClasses } from '@griffel/react';
import { breakPoints, tokens } from '@eevee/react-theme';

import { CircleSkeleton } from '@components/skeleton/circle-skeleton/index';
import { AuthorMoreSkeleton } from '@components/skeleton/author-more-skeleton/index';
import { SocialListSkeleton } from '@components/skeleton/social-list-skeleton/index';

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
    paddingTop: tokens.spacingVerticalXXL,

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
    marginRight: tokens.spacingHorizontalL,
  },

  'mr-8': {
    marginRight: tokens.spacingHorizontalS,
  },
});

export const BlogHeaderSkeleton = () => {
  const rootStyles = useRootStyles();
  const displayStyles = useDisplayStyles();
  const skeletonStyles = useSkeletonStyles();

  return (
    <div className={mergeClasses(rootStyles.root, 'skeleton-wrapper')}>
      <div className={displayStyles.itemStart}>
        <div className={displayStyles.flex}>
          <CircleSkeleton />
          <AuthorMoreSkeleton />
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
