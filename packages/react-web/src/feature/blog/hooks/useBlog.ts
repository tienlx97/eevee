import useSWR from 'swr';
import { BlogFetcher } from '../services/index';

export const useBlog = (slug?: string) => {
  const { data, error } = useSWR(slug, BlogFetcher);

  return { data, error };
};
