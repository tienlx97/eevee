import type { SBBlog, GithubBlog, BlogSchema } from 'typings/my-mdx/index';
import { delay, supabase, upsert, update } from '@libs/index';
import { addOrUpdateFile } from '@utilities/github.server';

export const publishStory = async (blog: BlogSchema) => {
  const { id, user_id, publish_date, slugify, status, tags, title, sha, ...rest } = blog;

  // 1. add to supabse

  const sbBlog: SBBlog = {
    id,
    user_id,
    publish_date,
    slugify,
    status,
    tags,
    title,
    sha,
  };

  const sbBlogData = (await upsert<SBBlog>('blog', sbBlog))[0];

  // 2. add to gihub
  const ghBlog = {
    id: sbBlogData.id,
    user_id: sbBlogData.user_id,
    ...rest,
  } as GithubBlog;

  const path = `blogs/${ghBlog.id}/index.json`;
  const message = `${ghBlog.user_id} - ${ghBlog.id}`;

  const ghBlogRes = await addOrUpdateFile({
    path,
    message,
    content: ghBlog,
    sha: sbBlogData.sha,
  });

  // 3. update supabase
  const data = (await update<SBBlog>('blog', { sha: ghBlogRes.sha }, { id: ghBlog.id }))[0];

  return {
    slugify: data.slugify,
    authorID: data.user_id,
  };
};
