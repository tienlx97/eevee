import { QueryFunctionContext, useQuery } from '@tanstack/react-query';
import type { BlogQuery, G_BlogSchema } from 'typings/schema';
import { supabase } from '@libs/supabase/supabaseClient';
import { blogKeys } from '@libs/react-query/index';
import * as github from '@libs/gitrows/index';
import { delay } from '../libs/index';

const blogQueryBuilder = `
  id,
  short_id,
  publish_date,
  title,
  slugify,
  tags,
  author: user!user_id(
    id,
    mimikyu_id,
    email,
    name,
    nick_name,
    photo_url,
    description
  )
`;

// https://tkdodo.eu/blog/leveraging-the-query-function-context#object-query-keys
export const fetchBlogBy = async ({ queryKey }: QueryFunctionContext<ReturnType<typeof blogKeys['detail']>>) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const [{ slug }] = queryKey;

    // 1: from supabase

    const query = supabase.from<BlogQuery>('blog').select(blogQueryBuilder).eq('slugify', slug);

    const { data: supabaseData } = await query.single();
    if (!supabaseData) {
      return null;
    }

    // 2: from github
    const githubData = await github.get<G_BlogSchema>(`blogs/${supabaseData.id}/index.json`);
    if (!githubData) {
      return null;
    }

    // 3: merge

    const combineData: BlogQuery = {
      ...githubData,
      ...supabaseData,
    };

    return combineData;
  } catch (error) {
    throw error;
  }
};

type UseBlogProps = {
  slug?: string;
};

export const useBlog = ({ slug }: UseBlogProps) => {
  return useQuery(blogKeys.detail(slug), fetchBlogBy, {
    enabled: Boolean(slug),
    useErrorBoundary: true,
  });
};
