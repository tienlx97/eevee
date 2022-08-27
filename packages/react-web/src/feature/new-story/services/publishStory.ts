import type { BlogSchema } from 'typings/my-mdx/index';
import { delay, supabase } from '@libs/index';

export const publishStory = async (blog: BlogSchema) => {
  const { data, error } = await supabase.from<BlogSchema>('blog').upsert({ ...blog }, { returning: 'representation' });
  await delay(200);

  if (error) {
    throw error;
  }

  if (!data || data.length === 0) {
    throw new Error('fail sth');
  }

  return data[0].slugify;
};
