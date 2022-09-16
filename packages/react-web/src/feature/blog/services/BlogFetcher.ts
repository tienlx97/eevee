import { delay, supabase } from '@libs/index';
import type { Blog1, GithubBlog } from 'typings/my-mdx/index';
import { downloadFileBySha } from '@utilities/github.server';

const blogQuery = `
  id,
  publish_date,
  title,
  slugify,
  tags,
  sha,
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

export const BlogFetcher = async (slug?: string) => {
  const { data, error } = await supabase.from<Blog1>('blog').select(blogQuery).eq('slugify', slug).single();

  // await delay(400);
  if (error) {
    throw error;
  }

  if (!data) {
    throw new Error('Blog fetcher fail');
  }

  const githubContent = await downloadFileBySha(data.sha!);

  const ghBlogData = JSON.parse(githubContent) as GithubBlog;

  const combine = {
    ...data,
    ...ghBlogData,
  };

  return combine;
};
