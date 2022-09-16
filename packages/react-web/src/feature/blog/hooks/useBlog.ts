import { QueryFunctionContext, useQuery, UseQueryOptions } from '@tanstack/react-query';
import { blogKeys } from '@libs/react-query/index';
import { fetchBlogBy } from '../services/fetchBlogBy';
import type { BlogQuery } from 'typings/schema/index';

// https://tkdodo.eu/blog/leveraging-the-query-function-context#object-query-keys
export const fetcher = async ({ queryKey }: QueryFunctionContext<ReturnType<typeof blogKeys['detail']>>) => {
  const [{ slug }] = queryKey;

  return fetchBlogBy(slug);
};

type UseBlogProps = {
  slug?: string;
  initialData: BlogQuery;
};

export const useBlog = ({ slug, initialData }: UseBlogProps) => {
  return useQuery(blogKeys.detail(slug), fetcher, {
    enabled: Boolean(slug),
    initialData,
  });
};
