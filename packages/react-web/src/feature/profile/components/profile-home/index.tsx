import * as React from 'react';
import { useOutletContext } from 'react-router-dom';
import useSWR from 'swr';
import { Spinner } from '@components/spinner-2/index';
import { getBlogListWithAuthorID } from '../../services/index';

import { BlogCard } from '../blog-card/index';
import type { UserSchema } from 'typings/my-mdx/index';

export const ProfileHome = () => {
  const author = useOutletContext<UserSchema>();
  const { data, error } = useSWR(author.id, getBlogListWithAuthorID);

  if (!data && !error) {
    return <Spinner />;
  }

  return !error && data ? (
    <div>
      {data.map((blog, index) => (
        <BlogCard author={author} blog={blog} key={index} first={index === 0} />
      ))}
    </div>
  ) : (
    <></>
  );
};
