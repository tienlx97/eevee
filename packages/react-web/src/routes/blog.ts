import { authorKeys, blogKeys } from '@libs/react-query/index';
import { fetchBlogBy } from '@feature/blog/services/fetchBlogBy';
import { QueryClient } from '@tanstack/react-query';
import { defer, LoaderFunctionArgs } from 'react-router-dom';
import type { BlogQuery, BlogSchema, UserSchema } from 'typings/schema/index';

// ⬇️ define your query
export const blogQuery = (slug?: string) => ({
  queryKey: blogKeys.detail(slug),
  queryFn: async () => fetchBlogBy(slug),
});

export type DeferBlogLoader = {
  blog: Promise<BlogQuery | undefined>;
};

// ⬇️ needs access to queryClient
export const loader =
  (queryClient: QueryClient) =>
  async ({ params, request }: LoaderFunctionArgs) => {
    const nick_name = history.state?.nick_name || undefined;

    const query = blogQuery(params.slug);

    // ⬇️ return data or fetch it

    let flag = false;
    let data: Promise<BlogQuery | undefined> = Promise.resolve(undefined);

    if (nick_name) {
      const blog = queryClient
        .getQueryData<BlogSchema[]>(
          blogKeys.list({
            nick_name,
          }),
        )
        ?.filter(blg => blg.slugify === params.slug)?.[0];

      if (blog) {
        const author = queryClient.getQueryData<UserSchema>(
          authorKeys.detail({
            nick_name,
          }),
        );

        if (author) {
          const schema: BlogQuery = {
            ...blog,
            author,
          };

          data = Promise.resolve(schema);
          flag = true;
        }
      }
    }

    if (!flag) {
      data = queryClient.getQueryData<BlogQuery>(query.queryKey)
        ? Promise.resolve(queryClient.getQueryData<BlogQuery>(query.queryKey))
        : queryClient.fetchQuery(query);
    }

    return defer({
      blog: data,
    });
  };
