import type { BlogQuery, G_BlogSchema } from 'typings/schema';
import { supabase } from '@libs/supabase/supabaseClient';
import * as github from '@libs/gitrows/index';

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
export const fetchBlogBy = async (slug?: string) => {
  // eslint-disable-next-line no-useless-catch
  try {
    // 1: from supabase

    const query = supabase
      .from<BlogQuery>('blog')
      .select(blogQueryBuilder)
      .eq('slugify', slug)
      .eq('status', 'published')
      .lt('publish_date', new Date().getTime());

    const { data: supabaseData } = await query.single();
    if (!supabaseData) {
      throw new Error(`${slug} not found in database 1`);
    }

    // 2: from github
    const githubData = await github.get<G_BlogSchema>(`blogs/${supabaseData.id}/index.json`);
    if (!githubData) {
      throw new Error(`${slug} not found in database 2`);
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
