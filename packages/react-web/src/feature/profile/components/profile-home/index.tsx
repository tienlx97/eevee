import * as React from 'react';
import { useOutletContext } from 'react-router-dom';
import useSWR from 'swr';
import { Spinner } from '@components/spinner-2/index';
import { getBlogListWithAuthorID } from '../../services/index';

import { BlogCard } from '../blog-card/index';

export const ProfileHome = () => {
  const [authorID] = useOutletContext<string>();
  const { data, error } = useSWR(authorID, getBlogListWithAuthorID);

  if (!data && !error) {
    return <Spinner />;
  }

  return !error && data ? (
    <div>
      {data.map((blog, index) => (
        <BlogCard authorID={authorID} blog={blog} key={index} first={index === 0} />
      ))}
    </div>
  ) : (
    <></>
  );
};
