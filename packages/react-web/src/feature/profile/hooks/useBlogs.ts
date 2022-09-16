import { QueryClient, QueryFunctionContext, useQuery, UseQueryOptions } from '@tanstack/react-query';
import { blogKeys } from '@libs/react-query/index';
import { fetchBlogByAuthorId } from '../services/fetchBlogByAuthorId';
import type { BlogQuery, BlogSchema } from 'typings/schema/index';

// https://tkdodo.eu/blog/leveraging-the-query-function-context#object-query-keys
export const fetcher = async ({ queryKey }: QueryFunctionContext<ReturnType<typeof blogKeys['list']>>) => {
  const [{ options }] = queryKey;

  return fetchBlogByAuthorId(options.nick_name);
};

type UseBlogsProps = {
  options: {
    nick_name?: string;
  };
};

export const useBlogs = ({ options }: UseBlogsProps) => {
  return useQuery(blogKeys.list(options), fetcher, {
    enabled: Boolean(options),
  });
};
