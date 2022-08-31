import * as React from 'react';
import { makeStyles, mergeClasses } from '@griffel/react';

import { breakPoints, tokens } from '@eevee/react-theme';
import { ButtonR, Button } from '@eevee/react-button';
import { Popover, PopoverItem, PopoverSurface, PopoverTrigger } from '@eevee/react-popover';

import { Menu, MenuItem, MenuList, MenuPopover, MenuTrigger } from '@eevee/react-menu';
import { Save, ThreeDot } from '@components/icons/index';

import { AuthorMore, SocialList, AuthorMoreSkeleton, SocialListSkeleton } from '@feature/blog/components/index';

import { CircleAvatar, CircleSkeleton } from '@components/circle-avatar/index';

import type { Blog } from 'typings/my-mdx/index';
import { useAuthContext } from '@context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@eevee/react-toast';

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
    marginRight: tokens.spacingHorizontalL,
  },

  'mr-8': {
    marginRight: tokens.spacingHorizontalS,
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

export const PostHeaderSkeleton = () => {
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

type PostHeaderProps = {
  blog: Blog;
};

export function PostHeader({ blog }: PostHeaderProps) {
  const rootStyles = useRootStyles();
  const displayStyles = useDisplayStyles();
  const socialListStyles = useSocialStyles();

  const { user } = useAuthContext();
  const navigate = useNavigate();

  const onEditStoryClick = () => {
    navigate(`/p/${blog.id}/edit`);
  };

  return (
    <div className={rootStyles.root}>
      {/* > mobile */}
      <div className={displayStyles.itemStart}>
        <div className={displayStyles.flex}>
          <CircleAvatar
            width={48}
            height={48}
            href={`/@${blog.author.nick_name}`}
            className={displayStyles['mr-16']}
            url={blog.author.photo_url}
          />
          <AuthorMore
            authorName={blog.author?.name!}
            authorNickName={blog.author?.nick_name!}
            date={blog.publish_date}
            readTime={blog.read_time}
            hideFollow={blog.author.id === user?.id}
          />
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <SocialList className={socialListStyles.web}>
            <ButtonR style={{ margin: '0px 4px 0px 28px' }} disabled aria-label="Save" title="Save" icon={<Save />} />
          </SocialList>

          {user && (
            <Popover withArrow>
              <PopoverTrigger>
                <div style={{ margin: '0px 4px 0px 16px' }}>
                  <ButtonR aria-label="Actions" title="Actions" icon={<ThreeDot />} />
                </div>
              </PopoverTrigger>

              <PopoverSurface>
                {user?.id === blog.author.id && (
                  <>
                    <PopoverItem onClick={onEditStoryClick}>Edit story</PopoverItem>
                    <PopoverItem disabled>Pin this story to your profile</PopoverItem>
                    <PopoverItem disabled>Delete story</PopoverItem>
                  </>
                )}
                {user?.id !== blog.author.id && (
                  <>
                    <PopoverItem disabled>Show less like this</PopoverItem>
                    <PopoverItem disabled>Mute this author</PopoverItem>
                    <PopoverItem disabled>Report</PopoverItem>
                  </>
                )}
              </PopoverSurface>
            </Popover>
          )}
        </div>
      </div>
      {/* <= mobile */}
      <SocialList className={socialListStyles.mobile} before={true}>
        <Button
          disabled
          iconPosition="before"
          appearance="unstyled"
          shape="circular"
          icon={{ as: 'span', className: displayStyles['mr-8'], children: <Save /> }}
        >
          Save
        </Button>
      </SocialList>
    </div>
  );
}
