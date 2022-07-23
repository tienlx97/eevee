import type { BlogState } from './Blog.types';
import { useFetchBlog } from '../../hooks/useFetchBlog';
import * as React from 'react';

export const useBlogState = (state: BlogState): BlogState => {
  const { content } = useFetchBlog();

  state.post = content;

  return state;
};
