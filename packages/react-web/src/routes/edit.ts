import { fetchBlogByShortId } from '@feature/edit/services/fetchBlogByShortId';
import { defer, LoaderFunctionArgs } from 'react-router-dom';
import type { BlogSchema } from 'typings/schema/index';

export type DeferEditLoader = {
  blog: Promise<BlogSchema | undefined>;
};

// ⬇️ needs access to queryClient
export const loader = async ({ params }: LoaderFunctionArgs) => {
  const shortId = params.blogID;

  const dataPromise = fetchBlogByShortId('d2a73177-51db-412a-ae31-8c6d2fbf1ba5', shortId);

  // ⬇️ return data or fetch it
  return defer({
    blog: dataPromise,
  });
};
