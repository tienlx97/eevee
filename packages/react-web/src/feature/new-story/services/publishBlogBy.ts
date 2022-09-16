import type { BlogSchema, G_BlogSchema, S_BlogSchema } from 'typings/schema/index';
import { supabase } from '@libs/index';
import * as gitrows from '@libs/gitrows/index';
import { toShortcode } from '@utilities/id/index';
export const publishBlogBy = async (blog: BlogSchema) => {
  const { id, user_id, publish_date, slugify, status, tags, title, short_id, ...rest } = blog;

  // 1. add to supabase:

  const sBlogValue: S_BlogSchema = {
    id,
    user_id,
    short_id,
    publish_date,
    slugify,
    status,
    tags,
    title,
  };

  const { data: sBlogResponseList } = await supabase.from<S_BlogSchema>('blog').upsert(sBlogValue);

  if (!sBlogResponseList || sBlogResponseList.length !== 1) {
    throw new Error('');
  }

  const sBlogRespone = sBlogResponseList[0];

  // 1.1 if new -> update slugify and short_id

  // for first time
  if (!id) {
    sBlogRespone.short_id = toShortcode(sBlogRespone.id!);
    await supabase
      .from<S_BlogSchema>('blog')
      .update({
        slugify: `${slugify}-${sBlogRespone.short_id}`,
        short_id: sBlogRespone.short_id,
      })
      .match({
        id: sBlogRespone.id,
      });
  } else {
    // second time and publish
    await supabase
      .from<S_BlogSchema>('blog')
      .update({
        slugify: `${slugify}-${sBlogRespone.short_id}`,
      })
      .match({
        id: sBlogRespone.id,
      });
  }

  //2. add to github
  const gBlogValue: G_BlogSchema = {
    id: sBlogRespone.id!,
    user_id: sBlogRespone.user_id,
    short_id: sBlogRespone.short_id,
    ...rest,
  };

  const path = `blogs/${gBlogValue.id}/index.json`;

  if (!id) {
    await gitrows.insert<G_BlogSchema>(path, gBlogValue);
  } else {
    await gitrows.update<G_BlogSchema>(path, gBlogValue);
  }

  return {
    slugify: `${slugify}-${sBlogRespone.short_id}`,
    short_id: sBlogRespone.short_id,
    id: sBlogRespone.id!,
  };
};
