import type { BlogQuery, BlogSchema, G_BlogSchema, S_BlogSchema } from 'typings/schema';
import { supabase } from '@libs/supabase/supabaseClient';
import * as github from '@libs/gitrows/index';

const blogQueryBuilder = `
  id,
  short_id,
  publish_date,
  title,
  slugify,
  tags,
  status
`;

// https://tkdodo.eu/blog/leveraging-the-query-function-context#object-query-keys
export const fetchBlogByShortId = async (authorId: string, short_id?: string) => {
  // eslint-disable-next-line no-useless-catch
  try {
    // 1: from supabase

    const query = supabase
      .from<S_BlogSchema>('blog')
      .select(blogQueryBuilder)
      .eq('short_id', short_id)
      .eq('user_id', authorId);

    const { data: supabaseData } = await query.single();
    if (!supabaseData) {
      throw new Error(`${short_id} not found in database 1`);
    }

    // 2: from github
    const githubData = await github.get<G_BlogSchema>(`blogs/${supabaseData.id}/index.json`);
    if (!githubData) {
      throw new Error(`${short_id} not found in database 2`);
    }

    // 3: merge

    const combineData: BlogSchema = {
      ...githubData,
      ...supabaseData,
    };
    return combineData;
  } catch (error) {
    throw error;
  }
};
