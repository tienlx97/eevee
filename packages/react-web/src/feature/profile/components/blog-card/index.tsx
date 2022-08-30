import * as React from 'react';
import { Popover, PopoverItem, PopoverSurface, PopoverTrigger } from '@eevee/react-popover';

import { ButtonR } from '@eevee/react-button';
import { TextLink } from '@eevee/react-link';

import { Tag } from '@components/tag/index';
import { ThreeDot, Save } from '@components/icons/index';

import { useBlogCardDetailStyles, useBlogCardStyles } from './styles';
import type { Blog, BlogSchema, UserSchema } from 'typings/my-mdx/index';
import { blog2Date } from '@utilities/toDate';
import { useAuthContext } from '@context/AuthContext';
import { useNavigate } from 'react-router-dom';

type BlogCardProps = {
  first?: boolean;
  blog: BlogSchema;
  author: UserSchema;
};

type BlogCardDetailProps = {
  blog: Blog;
};

const BlogCardDetail = ({ blog }: BlogCardDetailProps) => {
  const { tags, read_time } = blog;
  const styles = useBlogCardDetailStyles();
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const onEditStoryClick = () => {
    navigate(`/p/${blog.id}/edit`);
  };

  return (
    <div className={styles.root}>
      {/* Left contain text - action */}
      <div className={styles.leftWarpper}>
        {/* title - subtitle */}
        <div>
          <TextLink linkState={{ data: blog }} appearance="medium" href={`/blog/${blog.slugify}`}>
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
                <Tag tag={tags[0]} />
                <TextLink linkState={{ data: blog }} appearance="medium" href={`/blog/${blog.slugify}`}>
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
      <div className={styles.rightWrapper}>
        <TextLink
          appearance="medium"
          href={`/blog/${blog.slugify}`}
          aria-label="Post Preview Image"
          rel="noopener follow"
        >
          <div className={styles.mediaQueryImageWeb}>
            <img
              src="https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=fb86e2e09fceac9b363af536b93a1275"
              width={112}
              height={112}
              alt="Các bộ thủ cơ bản trong tiếng Nhật"
            />
          </div>
          <div className={styles.mediaQueryImageMobile}>
            <img
              src="https://miro.medium.com/fit/c/56/56/0*kai0vdVtN2NxFvW_"
              width={56}
              height={56}
              alt="Các bộ thủ cơ bản trong tiếng Nhật"
            />
          </div>
        </TextLink>
      </div>
    </div>
  );
};

export const BlogCard = ({ first = false, blog, author }: BlogCardProps) => {
  const styles = useBlogCardStyles();

  const [blogCombine, _] = React.useState<Blog>({ ...blog, author });

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
        <TextLink linkState={{ data: blogCombine }} appearance="medium" href={`/blog/${blog.slugify}`}>
          <span className={styles.publishDate}>{blog2Date(blog.publish_date)}</span>
        </TextLink>
        <BlogCardDetail blog={blogCombine} />
      </div>
    </article>
  );
};
