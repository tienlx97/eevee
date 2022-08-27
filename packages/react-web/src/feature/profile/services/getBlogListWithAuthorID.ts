import { delay, supabase } from '@libs/index';
import type { BlogSchema } from 'typings/my-mdx/index';

const blogQuery = `
  id,
  publish_date,
  toc,
  read_time,
  title,
  slugify,
  tags,
  subtitle
`;

export const getBlogListWithAuthorID = async (id: string) => {
  const { data, error } = await supabase.from<BlogSchema>('blog').select(blogQuery).eq('user_id', id);

  if (error) {
    throw error;
  }

  // await delay(2000)

  return data;
};
