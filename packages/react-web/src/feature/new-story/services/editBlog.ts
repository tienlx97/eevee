import { delay, supabase } from '@libs/index';
import type { Blog, BlogSchema } from 'typings/my-mdx/index';

const blogQuery = `
  id,
  compile_code,
  mdx_code,
  publish_date,
  toc,
  read_time,
  title,
  slugify,
  tags,
  subtitle,
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

export const EditBlog = async (id: string, authorId: string) => {
  const { data, error } = await supabase
    .from<BlogSchema>('blog')
    .select(blogQuery)
    .eq('user_id', authorId)
    .eq('id', id)
    .single();

  // await delay(400);
  if (error) {
    throw error;
  }

  return data as Blog;
};
