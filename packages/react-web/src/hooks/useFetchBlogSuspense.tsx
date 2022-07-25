/* eslint-disable no-useless-catch */
import * as React from 'react';
import { getDocs, limit, query, where } from 'firebase/firestore';
import { postCol } from '../firebase/firebase';
import { wrapPromise, SuspenseResponse } from '../utilities/index';
import type { Post } from 'typings/my-mdx/index';
import { useBlogContext } from '../contexts/BlogContext';
import { useLocation, useNavigate } from 'react-router-dom';

const delay = (d: any) => new Promise(r => setTimeout(r, d));

const fetcher = async (slug: string) => {
  try {
    const slugQuery = query(postCol, where('frontmatter.slugify', '==', slug), limit(1));
    const snaps = await getDocs(slugQuery);

    await delay(2000);
    if (snaps.empty) {
      return null;
    }

    return snaps.docs[0].data();
  } catch (error) {
    throw error;
  }
};
export const useFetchBlogSuspense = (useCtx: boolean, slug?: string) => {
  const { setPost, content } = useBlogContext();
  const [resource, setResource] = React.useState<SuspenseResponse<Post>>();

  const navigate = useNavigate();
  const { pathname } = useLocation();

  React.useEffect(() => {
    if (!slug) {
      return;
    }

    const result = wrapPromise<Post>(fetcher(slug), navigate, pathname);

    if (useCtx) {
      setPost(result);
    } else {
      setResource(result);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  return useCtx ? content?.read() : resource?.read();
};
