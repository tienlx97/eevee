import * as React from 'react';
import { Popover, PopoverItem, PopoverSurface, PopoverTrigger } from '@eevee/react-popover';

import { ButtonR } from '@eevee/react-button';
import { TextLink } from '@eevee/react-link';

import { Tag } from '@components/tag/index';
import { ThreeDot, Save } from '@components/icons/index';

import { useBlogCardDetailStyles, useBlogCardStyles } from './styles';
import type { BlogQuery, BlogSchema, UserSchema } from 'typings/schema/index';
import { blog2Date } from '@utilities/toDate';
import { useAuthContext } from '@context/AuthContext';
import { useNavigate } from 'react-router-dom';

type BlogCardProps = {
  first?: boolean;
  blog: BlogSchema;
  author: UserSchema;
};

type BlogCardDetailProps = {
  blog: BlogQuery;
};

const BlogCardDetail = ({ blog }: BlogCardDetailProps) => {
  const { tags, read_time } = blog;
  const styles = useBlogCardDetailStyles();
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const onEditStoryClick = () => {
    navigate(`/p/${blog.short_id}/edit`);
  };

  return (
    <div className={styles.root}>
      {/* Left contain text - action */}
      <div className={styles.leftWarpper}>
        {/* title - subtitle */}
        <div>
          <TextLink
            onClick={() => {
              history.pushState({ nick_name: 'tienlx97' }, 'pushState example');
            }}
            appearance="medium"
            href={`/b/${blog.slugify}`}
          >
            {/* title */}
            <h2 className={styles.title}>{blog.title}</h2>
            {/* subtitle */}
            <div className={styles.subtitleWrapper}>
              <p className={styles.subtitleText}> {blog.subtitle}</p>
            </div>
          </TextLink>
        </div>
        {/* Read time - tag - save - more */}
        <div className={styles.optionWrapper}>
          <div className={styles.optionStyle1}>
            {/* tag - read_time */}
            <div className={styles.tagReadTimeWrapper}>
              <div className={styles.tadReadTimeWrapper1}>
                <Tag tag={tags?.[0]!} />
                <TextLink
                  onClick={() => {
                    history.pushState({ nick_name: 'tienlx97' }, 'pushState example');
                  }}
                  appearance="medium"
                  href={`/b/${blog.slugify}`}
                >
                  <span className={styles.readTime}>{read_time.text}</span>
                </TextLink>
              </div>
            </div>
            {/* saved - action */}
            <div className={styles.saveActionWrapper}>
              <ButtonR aria-label="Save" title="Save" icon={<Save />} />

              {user && (
                <Popover withArrow>
                  <PopoverTrigger>
                    <div className={styles.saved}>
                      <ButtonR aria-label="Actions" title="Actions" icon={<ThreeDot />} />
                    </div>
                  </PopoverTrigger>

                  <PopoverSurface>
                    {/* is same */}
                    {user.id === blog.author.id && (
                      <>
                        <PopoverItem onClick={onEditStoryClick}>Edit story</PopoverItem>
                        <PopoverItem disabled>Pin story</PopoverItem>
                        <PopoverItem disabled>Story stats</PopoverItem>
                        <PopoverItem disabled>Hide responses</PopoverItem>
                        <PopoverItem disabled>Delete story</PopoverItem>
                      </>
                    )}
                    {/* not same */}
                    {user.id !== blog.author.id && (
                      <>
                        <PopoverItem disabled>Report this story</PopoverItem>
                        <PopoverItem disabled>Mute this story</PopoverItem>
                        <PopoverItem disabled>Block this author</PopoverItem>
                        <PopoverItem disabled>Report this author</PopoverItem>
                      </>
                    )}
                  </PopoverSurface>
                </Popover>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Right contain image */}
      {blog.imagesSrc && blog.imagesSrc.length > 0 && (
        <div className={styles.rightWrapper}>
          <TextLink
            onClick={() => {
              history.pushState({ nick_name: 'tienlx97' }, 'pushState example');
            }}
            appearance="medium"
            href={`/b/${blog.slugify}`}
            aria-label="Post Preview Image"
            rel="noopener follow"
          >
            <div className={styles.mediaQueryImageWeb}>
              <img src={blog.imagesSrc[0]} width={112} height={112} alt="Title" />
            </div>
            <div className={styles.mediaQueryImageMobile}>
              <img src={blog.imagesSrc[0]} width={56} height={56} alt="Title" />
            </div>
          </TextLink>
        </div>
      )}
    </div>
  );
};

export const BlogCard = ({ first = false, blog, author }: BlogCardProps) => {
  const styles = useBlogCardStyles();

  const [blogCombine, _] = React.useState<BlogQuery>({ ...blog, author });

  return (
    <article className={styles.root}>
      {!first && (
        <>
          <hr className={styles.divider} />
          <div className={styles['pt-24']} />
        </>
      )}

      <div>
        {/* header -> publish_date */}
        <TextLink
          onClick={() => {
            history.pushState({ nick_name: 'tienlx97' }, 'pushState example');
          }}
          appearance="medium"
          href={`/b/${blog.slugify}`}
        >
          <span className={styles.publishDate}>{blog2Date(blog.publish_date!)}</span>
        </TextLink>
        <BlogCardDetail blog={blogCombine} />
      </div>
    </article>
  );
};
