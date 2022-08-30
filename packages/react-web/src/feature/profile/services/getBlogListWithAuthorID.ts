import { delay, supabase } from '@libs/index';
import type { BlogSchema, GithubBlog, SBBlog } from 'typings/my-mdx/index';
import { downloadFileBySha } from '../../../utilities/github.server';

const blogQuery = `
  id,
  publish_date,
  title,
  slugify,
  tags,
  sha
`;

export const getBlogListWithAuthorID = async (id: string) => {
  const { data: sbBlogList, error } = await supabase.from<SBBlog>('blog').select(blogQuery).eq('user_id', id);

  if (error) {
    throw error;
  }

  if (!sbBlogList || sbBlogList.length === 0) {
    throw new Error('empty');
  }

  const combineArr = new Array<BlogSchema>(sbBlogList.length);

  await Promise.all(
    sbBlogList.map(async (sbBlog, index) => {
      const githubContent = await downloadFileBySha(sbBlog.sha!);
      const ghBlogData = JSON.parse(githubContent) as GithubBlog;

      combineArr[index] = {
        ...sbBlogList[index],
        ...ghBlogData,
      };
    }),
  );

  // await delay(2000)

  return combineArr;
};
