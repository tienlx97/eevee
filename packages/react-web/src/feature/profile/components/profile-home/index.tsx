import * as React from 'react';
import { useOutletContext } from 'react-router-dom';
import useSWR from 'swr';
import { Spinner } from '@components/spinner-2/index';
import { getBlogListWithAuthorID } from '../../services/index';

import { BlogCard } from '../blog-card/index';
import type { UserSchema } from 'typings/schema/index';
import { useBlogs } from '../../hooks/useBlogs';

export const ProfileHome = () => {
  const author = useOutletContext<UserSchema>();
  const { data: blogList } = useBlogs({
    options: {
      nick_name: author.nick_name,
    },
  });

  if (blogList) {
    return (
      <div>
        {blogList.map((blog, index) => (
          <BlogCard author={author} blog={blog} key={index} first={index === 0} />
        ))}
      </div>
    );
  }

  return <Spinner />;
};
