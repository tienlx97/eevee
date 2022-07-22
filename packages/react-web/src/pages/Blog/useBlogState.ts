import type { BlogState } from './Blog.types';
import { useFetchBlog } from '../../hooks/useFetchBlog';
import * as React from 'react';

export const useBlogState = (state: BlogState): BlogState => {
  const { content, postNotFound } = useFetchBlog();

  state.post = content;
  state.postNotFound = postNotFound;

  return state;
};
