import { supabase } from '@libs/index';
import type { G_BlogSchema, S_BlogSchema, BlogSchema } from 'typings/schema/index';
import * as gitrows from '@libs/gitrows';
import { fetchAuthorBy } from './fetchAuthorBy';

const blogQuery = `
  id,
  publish_date,
  title,
  slugify,
  tags,
  short_id
`;

export const fetchBlogByAuthorId = async (nick_name?: string) => {
  const { id } = await fetchAuthorBy({ nick_name });

  const { data: sbBlogList, error } = await supabase.from<S_BlogSchema>('blog').select(blogQuery).eq('user_id', id);

  if (error) {
    throw error;
  }

  if (!sbBlogList || sbBlogList.length === 0) {
    return [];
  }

  const combineArr = new Array<BlogSchema>(sbBlogList.length);

  await Promise.all(
    sbBlogList.map(async (sbBlog, index) => {
      const ghBlogData = await gitrows.get<G_BlogSchema>(`blogs/${sbBlog.id}/index.json`);

      if (ghBlogData === null) {
        return;
      }

      combineArr[index] = {
        ...sbBlogList[index],
        ...ghBlogData,
      };
    }),
  );

  return combineArr;
};
