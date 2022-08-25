import type { BlogSchema } from 'typings/my-mdx/index';
import { delay, supabase } from '@libs/index';

export const publishStory = async (blog: BlogSchema) => {
  const { error } = await supabase.from<BlogSchema>('blog').insert(blog, { returning: 'minimal' });
  await delay(200);

  if (error) {
    throw error;
  }

  return blog.slugify;
};
