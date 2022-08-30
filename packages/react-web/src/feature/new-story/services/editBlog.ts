import { delay, supabase } from '@libs/index';
import type { Blog, BlogSchema, SBBlog, GithubBlog } from 'typings/my-mdx/index';
import { downloadFileBySha } from '@utilities/github.server';

const blogQuery = `
  id,
  publish_date,
  title,
  slugify,
  tags,
  sha,
  hash
`;

export const EditBlog = async (id: string, authorId: string) => {
  // 1. get sb blog
  const { data, error } = await supabase
    .from<SBBlog>('blog')
    .select(blogQuery)
    .eq('user_id', authorId)
    .eq('id', id)
    .single();

  // await delay(400);
  if (error) {
    throw error;
  }

  if (!data) {
    throw new Error('Edit blog fail');
  }

  // 2. get github blog

  const githubContent = await downloadFileBySha(data.sha!);

  const ghBlogData = JSON.parse(githubContent) as GithubBlog;

  const combine = {
    ...data,
    ...ghBlogData,
  } as BlogSchema;

  return combine;
};
